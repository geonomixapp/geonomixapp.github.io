// Fonction Supabase « notifier » : envoie les notifications de Geonomix (voir contenu/NOTIFICATIONS.md).
// À coller dans Supabase : Edge Functions > Deploy a new function > Via Editor, nom « notifier »,
// et décocher « Verify JWT » (la fonction vérifie elle-même son mot de passe NOTIF_SECRET).
// Secrets à créer (Edge Functions > Secrets) : VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY, NOTIF_SECRET.
// SUPABASE_URL et SUPABASE_SERVICE_ROLE_KEY sont fournis tout seuls par Supabase : ne les copie nulle part.
//
// Appels reçus :
//  - de la base (déclencheur docs_notifier) : { type: "db", collection, id, owner, data, old } ;
//  - de GitHub (actu « Dernière minute » publiée) : { type: "flash", title, body, url }.
import { createClient } from "npm:@supabase/supabase-js@2.49.4";
import webpush from "npm:web-push@3.6.7";

const SITE = "https://geonomixapp.github.io/";
const sb = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
webpush.setVapidDetails("mailto:celestinnoury0@gmail.com", Deno.env.get("VAPID_PUBLIC_KEY")!, Deno.env.get("VAPID_PRIVATE_KEY")!);

const T: Record<string, Record<string, string>> = {
  fr: { turn: "⚔️ C'est à toi de jouer", turnB: "{n} t'attend dans un duel. À toi !", played: "⚔️ {n} a joué", playedB: "Le résultat de votre duel est là.", pass: "📉 {n} t'a dépassé au classement", passB: "Tu es {r}ᵉ. Un duel pour reprendre ta place ?", opp: "Ton adversaire" },
  en: { turn: "⚔️ Your turn", turnB: "{n} is waiting for you in a duel.", played: "⚔️ {n} has played", playedB: "Your duel result is in.", pass: "📉 {n} just passed you", passB: "You are now #{r}. Play a duel to win your spot back?", opp: "Your opponent" },
  es: { turn: "⚔️ Te toca jugar", turnB: "{n} te espera en un duelo.", played: "⚔️ {n} ya jugó", playedB: "Ya está el resultado de vuestro duelo.", pass: "📉 {n} te ha adelantado", passB: "Ahora eres {r}.º. ¿Un duelo para recuperar tu puesto?", opp: "Tu rival" },
};
const tr = (lang: string, k: string, v: Record<string, string | number> = {}) =>
  (T[lang] || T.fr)[k].replace(/\{(\w+)\}/g, (_, x) => String(v[x] ?? ""));
const today = () => new Date().toISOString().slice(0, 10);
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

type Abo = { uid: string; sub: webpush.PushSubscription; prefs: Record<string, boolean>; lang: string; last: Record<string, string> };

async function send(abo: Abo, msg: { title: string; body: string; url: string; tag: string }, lastKey?: string) {
  try {
    await webpush.sendNotification(abo.sub, JSON.stringify(msg), { TTL: 12 * 3600 });
    if (lastKey) await sb.from("push_abos").update({ last: { ...abo.last, [lastKey]: today() } }).eq("uid", abo.uid);
  } catch (e) {
    const code = (e as { statusCode?: number }).statusCode;
    if (code === 404 || code === 410) await sb.from("push_abos").delete().eq("uid", abo.uid); // abonnement expiré
  }
}

async function abosOf(uids: string[]) {
  if (!uids.length) return [] as Abo[];
  const { data } = await sb.from("push_abos").select("uid,sub,prefs,lang,last").in("uid", uids);
  return (data || []) as Abo[];
}
async function nameOf(uid: string) {
  const { data } = await sb.from("docs").select("data").eq("collection", "joueurs").eq("id", uid).maybeSingle();
  return (data?.data?.name as string) || "";
}

// Un joueur vient de finir un match (collection matchs) ou un duel du jour (qduels) : on prévient les autres.
async function onResult(coll: string, id: string) {
  const i = id.indexOf("-");
  const code = id.slice(0, i), uid = id.slice(i + 1);
  if (!UUID.test(uid)) return; // adversaire simulé : pas de notification
  const { data: head } = await sb.from("docs").select("data").eq("collection", coll).eq("id", code).maybeSingle();
  if (!head) return;
  const { data: rows } = await sb.from("docs").select("id").eq("collection", coll).like("id", `${code}-%`);
  const played = new Set((rows || []).map((r) => r.id.slice(code.length + 1)));
  const others = new Set<string>([head.data.host, ...played].filter((u) => u && u !== uid && UUID.test(u)));
  const who = await nameOf(uid);
  for (const abo of await abosOf([...others])) {
    if (abo.prefs?.duel === false) continue;
    const n = who || tr(abo.lang, "opp");
    const done = played.has(abo.uid);
    await send(abo, { title: tr(abo.lang, done ? "played" : "turn", { n }), body: tr(abo.lang, done ? "playedB" : "turnB", { n }), url: SITE + "duel.html", tag: `duel-${code}` });
  }
}

// Un joueur a gagné des points : ceux qu'il vient de dépasser dans le top 20 sont prévenus (une fois par jour au plus).
async function onPoints(uid: string, before: number, after: number) {
  const { data } = await sb.from("docs").select("id,data").eq("collection", "joueurs").order("data->points", { ascending: false }).limit(20);
  const top = (data || []).map((r, k) => ({ id: r.id, pts: Number(r.data?.points) || 0, rank: k + 1 }));
  const passed = top.filter((p) => p.id !== uid && p.pts >= before && p.pts < after);
  if (!passed.length) return;
  const who = (top.find((p) => p.id === uid) && (await nameOf(uid))) || "";
  for (const abo of await abosOf(passed.map((p) => p.id))) {
    if (abo.prefs?.classement === false || abo.last?.classement === today()) continue;
    const r = passed.find((p) => p.id === abo.uid)!.rank;
    const n = who || tr(abo.lang, "opp");
    await send(abo, { title: tr(abo.lang, "pass", { n }), body: tr(abo.lang, "passB", { r }), url: SITE + "duel.html", tag: "classement" }, "classement");
  }
}

// Dernière minute : tout le monde (qui l'a gardée), une fois par jour au plus.
async function onFlash(title: string, body: string, url: string) {
  const { data } = await sb.from("push_abos").select("uid,sub,prefs,lang,last");
  for (const abo of (data || []) as Abo[]) {
    if (abo.prefs?.flash === false || abo.last?.flash === today()) continue;
    await send(abo, { title: "🔴 " + title, body, url: url || SITE, tag: "flash" }, "flash");
  }
}

Deno.serve(async (req) => {
  if (req.method !== "POST" || req.headers.get("x-notif-secret") !== Deno.env.get("NOTIF_SECRET")) return new Response("non", { status: 401 });
  const p = await req.json().catch(() => ({}));
  try {
    if (p.type === "db" && (p.collection === "matchs" || p.collection === "qduels")) await onResult(p.collection, String(p.id));
    else if (p.type === "db" && p.collection === "joueurs") await onPoints(String(p.id), Number(p.old?.points) || 0, Number(p.data?.points) || 0);
    else if (p.type === "flash" && p.title) await onFlash(String(p.title).slice(0, 120), String(p.body || "").slice(0, 200), String(p.url || ""));
  } catch (e) {
    return new Response(String(e), { status: 500 });
  }
  return new Response("ok");
});
