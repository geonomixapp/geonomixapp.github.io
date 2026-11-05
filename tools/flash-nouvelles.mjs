// Trouve les actus « Dernière minute » (champ breaking) apparues entre deux versions de data/news.js
// et prévient la fonction Supabase « notifier ». Lancé par .github/workflows/notif-flash.yml.
// node tools/flash-nouvelles.mjs <ancien news.js> <nouveau news.js>
import fs from "node:fs";
import vm from "node:vm";
const load = (f) => { if (!fs.existsSync(f)) return []; const c = { window: { GEOCO: {} } }; vm.createContext(c); vm.runInContext(fs.readFileSync(f, "utf8"), c); return c.window.GEOCO.news || []; };
const before = new Set(load(process.argv[2]).filter((n) => n.breaking).map((n) => n.id));
const fresh = load(process.argv[3]).filter((n) => n.breaking && !before.has(n.id));
if (!fresh.length) { console.log("Aucune nouvelle Dernière minute."); process.exit(0); }
const n = fresh[0]; // une seule notification à la fois (la fonction en envoie au plus une par jour et par lecteur)
const url = process.env.NOTIF_URL, secret = process.env.NOTIF_SECRET;
if (!url || !secret) { console.log("Secrets NOTIF_URL / NOTIF_SECRET absents : rien envoyé."); process.exit(0); }
const res = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json", "x-notif-secret": secret },
  body: JSON.stringify({ type: "flash", title: n.title, body: n.summary ? n.summary.replace(/\s*\[\d+\]/g, "").slice(0, 180) : "", url: `https://geonomixapp.github.io/#/actu/${n.id}` }) });
console.log("Notification Dernière minute :", n.id, res.status);
