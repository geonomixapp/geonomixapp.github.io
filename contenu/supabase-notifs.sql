-- Notifications de Geonomix (notifs.js côté appli, fonction « notifier » côté Supabase).
-- À coller une seule fois dans Supabase : SQL Editor > New query > coller > Run,
-- APRÈS avoir créé la fonction « notifier » et ses secrets (voir contenu/NOTIFICATIONS.md).
-- Ne mets aucune clé secrète dans ce fichier : le mot de passe des notifications se range dans le coffre
-- (Vault) avec la commande de la fin, que tu tapes toi-même dans le SQL Editor.

-- 1. Les abonnements : un par joueur anonyme (le même que celui du Duel).
create table if not exists public.push_abos (
  uid uuid primary key default auth.uid(),
  sub jsonb not null,
  prefs jsonb not null default '{"duel": true, "classement": true, "flash": true}'::jsonb,
  lang text not null default 'fr',
  last jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);
alter table public.push_abos enable row level security;
drop policy if exists "voir son abonnement" on public.push_abos;
create policy "voir son abonnement" on public.push_abos for select to authenticated using (uid = auth.uid());
drop policy if exists "créer son abonnement" on public.push_abos;
create policy "créer son abonnement" on public.push_abos for insert to authenticated
  with check (uid = auth.uid() and octet_length(sub::text) < 4000 and octet_length(prefs::text) < 500);
drop policy if exists "modifier son abonnement" on public.push_abos;
create policy "modifier son abonnement" on public.push_abos for update to authenticated
  using (uid = auth.uid()) with check (uid = auth.uid() and octet_length(sub::text) < 4000 and octet_length(prefs::text) < 500);
drop policy if exists "supprimer son abonnement" on public.push_abos;
create policy "supprimer son abonnement" on public.push_abos for delete to authenticated using (uid = auth.uid());
-- Les joueurs ne peuvent pas modifier « last » (dates des dernières notifications) : seule la fonction l'écrit.
revoke update on public.push_abos from authenticated, anon;
grant update (sub, prefs, lang, updated_at) on public.push_abos to authenticated;

-- 2. Quand un joueur joue un match, un duel du jour ou gagne des points, la base prévient la fonction « notifier ».
create extension if not exists pg_net;

create or replace function public.notifier_duel() returns trigger
language plpgsql security definer set search_path = public, extensions as $$
declare secret text;
begin
  if new.collection not in ('matchs', 'qduels', 'joueurs') then return new; end if;
  -- Résultat d'un match : seulement à la création (« code-uid ») ; points : seulement s'ils montent.
  if new.collection in ('matchs', 'qduels') and (tg_op <> 'INSERT' or position('-' in new.id) = 0) then return new; end if;
  if new.collection = 'joueurs' and (tg_op <> 'UPDATE' or coalesce((new.data->>'points')::numeric, 0) <= coalesce((old.data->>'points')::numeric, 0)) then return new; end if;
  select decrypted_secret into secret from vault.decrypted_secrets where name = 'notif_secret' limit 1;
  if secret is null then return new; end if;
  perform net.http_post(
    url := 'https://xnwaiyhquydhpcqnovtc.supabase.co/functions/v1/notifier',
    headers := jsonb_build_object('Content-Type', 'application/json', 'x-notif-secret', secret),
    body := jsonb_build_object('type', 'db', 'collection', new.collection, 'id', new.id, 'owner', new.owner,
      'data', new.data, 'old', case when tg_op = 'UPDATE' then old.data else null end)
  );
  return new;
end $$;

drop trigger if exists docs_notifier on public.docs;
create trigger docs_notifier after insert or update on public.docs
  for each row execute function public.notifier_duel();

-- 3. Le mot de passe des notifications, rangé dans le coffre de Supabase.
-- Remplace MOT-DE-PASSE par le même texte que le secret NOTIF_SECRET de la fonction, puis lance cette ligne seule :
-- select vault.create_secret('MOT-DE-PASSE', 'notif_secret');
