-- Codes Geonomix+ à usage unique (demande de l'auteur, 11 nov. 2026).
-- À coller une seule fois dans Supabase : SQL Editor > New query > coller > Run.
-- Quand quelqu'un saisit un code « unique », l'appli enregistre ici son empreinte (jamais le code en clair) :
-- la deuxième personne qui essaie le même code est refusée.
create table if not exists public.codes_utilises (
  h text primary key,
  uid uuid not null default auth.uid(),
  at timestamptz not null default now()
);
alter table public.codes_utilises enable row level security;
drop policy if exists "réserver un code" on public.codes_utilises;
create policy "réserver un code" on public.codes_utilises for insert to authenticated
  with check (uid = auth.uid() and length(h) = 64);
drop policy if exists "voir ses codes" on public.codes_utilises;
create policy "voir ses codes" on public.codes_utilises for select to authenticated using (uid = auth.uid());
