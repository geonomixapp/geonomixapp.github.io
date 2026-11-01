// Fiches de révision des articles en PDF (Geonomix+, demande de l'auteur du 1er nov. 2026 :
// « un PDF qui résume tout : dates, idées, concepts, auteurs, parfait pour réviser »).
// Usage : node tools/build-fiches.mjs [id-article]
//   → fiches/<id>.pdf pour chaque article de data/culture.js, et data/fiches.js (liste des fiches prêtes).
// Contenu : tiré de l'article (l'essentiel, l'idée clé de chaque partie, la frise, les chiffres, les sources),
// complété par contenu/fiches.json (notions, qui est qui, questions pour se tester). Rien qui ne soit pas dans l'article.
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { execSync } from "node:child_process";
import { createRequire } from "node:module";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
process.chdir(ROOT);
let chromium;
try {
  ({ chromium } = await import("playwright"));
} catch {
  const globalRoot = execSync("npm root -g").toString().trim();
  ({ chromium } = createRequire(path.join(globalRoot, "noop.js"))("playwright"));
}

const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync("data/culture.js", "utf8"), ctx);
const culture = ctx.window.GEOCO.culture;
const extra = JSON.parse(fs.readFileSync("contenu/fiches.json", "utf8"));
const only = process.argv[2];

const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const noCite = (s) => String(s ?? "").replace(/\s*\[\d+\](\[\d+\])*/g, "").replace(/\s+([.,;:])/g, "$1");
const rich = (s) => esc(noCite(s)).replace(/==(.+?)==/g, "<b>$1</b>");
const plain = (s) => noCite(s).replace(/==/g, "");
const THEMES = { eco: "Économie", geo: "Géopolitique", mix: "Économie & géopolitique", fin: "Finance" };

// L'idée clé d'une partie : la phrase qui contient le premier passage surligné (==…==), sinon la première phrase.
function keySentences(sec, max = 2) {
  const out = [];
  for (const p of sec.paragraphs) {
    const sentences = p.match(/[^.!?]+[.!?]+(\s*\[\d+\])*|[^.!?]+$/g) || [p];
    for (const s of sentences) if (s.includes("==") && out.length < max) out.push(s.trim());
  }
  if (!out.length) out.push((sec.paragraphs[0].match(/[^.!?]+[.!?]+/) || [sec.paragraphs[0]])[0].trim());
  return out.map((s) => (plain(s).length > 240 ? esc(plain(s).slice(0, 236)) + "…" : rich(s)));
}

function html(c) {
  const x = extra[c.id] || {};
  const qs = x.questions || [];
  return `<!doctype html><html lang="fr"><head><meta charset="utf-8"><title>Fiche — ${esc(c.title)}</title>
<style>
@page { size: A4; margin: 13mm 14mm 16mm; }
* { box-sizing: border-box; }
body { margin: 0; font: 9.6pt/1.42 "Times New Roman", Times, serif; color: #161616; background: #fff; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
.sans { font-family: "Helvetica Neue", Arial, sans-serif; }
header { border-bottom: 2px solid #161616; padding-bottom: 3mm; margin-bottom: 4mm; }
.tag { font: 700 7.4pt/1 "Helvetica Neue", Arial, sans-serif; letter-spacing: .14em; text-transform: uppercase; color: #b3261e; }
h1 { font-size: 21pt; line-height: 1.08; margin: 2mm 0 1.6mm; }
.meta { font: 8pt/1.3 "Helvetica Neue", Arial, sans-serif; color: #555; }
.hook { font-style: italic; margin: 2mm 0 0; }
h2 { font: 700 8pt/1 "Helvetica Neue", Arial, sans-serif; letter-spacing: .12em; text-transform: uppercase; margin: 0 0 2.2mm; padding-top: 1.6mm; border-top: .6px solid #161616; }
section { margin-bottom: 4.6mm; }
h2 { break-after: avoid; }
.grid2 { display: grid; grid-template-columns: 1fr 1fr; column-gap: 7mm; }
.grid2 > * { break-inside: avoid; }
tr, .fig, dt, dd, li { break-inside: avoid; }
.tldr p { margin: 0 0 1.6mm; padding-left: 3.4mm; position: relative; }
.tldr p::before { content: ""; position: absolute; left: 0; top: 1.7mm; width: 1.6mm; height: 1.6mm; background: #b3261e; }
.part { margin: 0 0 2.6mm; break-inside: avoid; }
.part h3 { font-size: 10pt; margin: 0 0 .8mm; }
.part h3 span { font: 700 7.4pt "Helvetica Neue", Arial, sans-serif; color: #b3261e; margin-right: 1.6mm; }
.part .q { font-style: italic; margin: 0 0 .8mm; color: #333; }
.part p { margin: 0 0 .6mm; }
table { width: 100%; border-collapse: collapse; }
td { vertical-align: top; padding: 1.1mm 0; border-bottom: .4px solid #d8d2c2; }
td.w { width: 19mm; font: 700 8.4pt "Helvetica Neue", Arial, sans-serif; color: #b3261e; padding-right: 2mm; }
.figs { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2.4mm; }
.fig { border-left: 2px solid #b3261e; padding: .4mm 0 .4mm 2.4mm; }
.fig b { display: block; font: 700 13pt/1.1 "Helvetica Neue", Arial, sans-serif; }
.fig span { font-size: 8.4pt; color: #333; }
dl { margin: 0; }
dt { font-weight: 700; margin-top: 1.4mm; }
dd { margin: 0; }
.qz ol { margin: 0; padding-left: 4.6mm; }
.qz li { margin-bottom: 1.4mm; }
.ans { font-size: 8.4pt; color: #444; }
.ans ol { margin: 0; padding-left: 4.6mm; }
.src { font-size: 7.6pt; color: #555; }
.src ol { margin: 0; padding-left: 4.6mm; }
</style></head><body>
<header>
  <div class="tag">Geonomix+ · Fiche de révision</div>
  <h1>${esc(c.title)}</h1>
  <div class="meta">${esc(c.kind || "Article")} · ${esc(THEMES[c.theme] || "")}${c.author ? " · " + esc(c.author) : ""}</div>
  <p class="hook">${esc(plain(c.hook))}</p>
</header>
${c.tldr ? `<section class="tldr"><h2>L'essentiel</h2>${c.tldr.map((t) => `<p>${rich(t)}</p>`).join("")}</section>` : ""}
<section><h2>Les idées, partie par partie</h2><div class="grid2">
  ${c.sections.map((s, i) => `<div class="part"><h3><span>${String(i + 1).padStart(2, "0")}</span>${esc(s.title)}</h3>
    ${s.quote ? `<p class="q">${esc(plain(s.quote))}</p>` : ""}
    ${keySentences(s).map((k) => `<p>${k}</p>`).join("")}</div>`).join("")}
</div></section>
${c.keyFigures ? `<section><h2>Les chiffres à retenir</h2><div class="figs">${c.keyFigures.map((f) => `<div class="fig"><b>${esc(f.value)}</b><span>${esc(plain(f.label))}</span></div>`).join("")}</div></section>` : ""}
${c.timeline ? `<section><h2>${esc(c.timelineTitle || "Les dates")}</h2><table>${c.timeline.map((t) => `<tr><td class="w">${esc(t.when)}</td><td>${esc(plain(t.text))}</td></tr>`).join("")}</table></section>` : ""}
<div class="grid2">
  ${x.concepts ? `<section><h2>Les notions</h2><dl>${x.concepts.map((k) => `<dt>${esc(k.term)}</dt><dd>${esc(k.def)}</dd>`).join("")}</dl></section>` : "<div></div>"}
  ${x.people ? `<section><h2>Qui est qui</h2><dl>${x.people.map((k) => `<dt>${esc(k.name)}</dt><dd>${esc(k.role)}</dd>`).join("")}</dl></section>` : "<div></div>"}
</div>
${qs.length ? `<div class="grid2"><section class="qz"><h2>Teste-toi</h2><ol>${qs.map((q) => `<li>${esc(q.q)}</li>`).join("")}</ol></section>
<section class="ans"><h2>Réponses</h2><ol>${qs.map((q) => `<li>${esc(q.a)}</li>`).join("")}</ol></section></div>` : ""}
<section class="src"><h2>Sources de l'article</h2><ol>${(c.sources || []).map((s) => `<li>${esc(s.name || s.short)}</li>`).join("")}</ol></section>
</body></html>`;
}

const browser = await chromium.launch(fs.existsSync("/opt/pw-browsers/chromium") ? { executablePath: "/opt/pw-browsers/chromium" } : {});
fs.mkdirSync("fiches", { recursive: true });
const done = [];
for (const c of culture) {
  if (only && c.id !== only) { if (fs.existsSync(`fiches/${c.id}.pdf`)) done.push(c.id); continue; }
  const page = await browser.newPage();
  const tmp = path.join(ROOT, ".fiche-tmp.html");
  fs.writeFileSync(tmp, html(c));
  await page.goto("file://" + tmp, { waitUntil: "load" });
  fs.unlinkSync(tmp);
  await page.pdf({ path: `fiches/${c.id}.pdf`, format: "A4", printBackground: true, displayHeaderFooter: true,
    headerTemplate: "<span></span>",
    footerTemplate: `<div style="width:100%;margin:0 14mm;font:7px Helvetica,Arial,sans-serif;color:#777;display:flex;justify-content:space-between"><span>Geonomix+ · Fiche de révision · « ${esc(c.title)} » (article complet et sources dans l'application)</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>` });
  await page.close();
  done.push(c.id);
  console.log(`Fiche prête : fiches/${c.id}.pdf${extra[c.id] ? "" : " (sans notions ni questions : à ajouter dans contenu/fiches.json)"}`);
}
await browser.close();
fs.writeFileSync("data/fiches.js", `// Fiches de révision en PDF (Geonomix+), générées par tools/build-fiches.mjs : ne pas modifier à la main.\nwindow.GEOCO = window.GEOCO || {};\nwindow.GEOCO.fiches = ${JSON.stringify(done)};\n`);
