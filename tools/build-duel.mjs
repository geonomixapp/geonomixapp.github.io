// Copie le prototype « Geonomix Duel » (prototypes/jeu-quiz.html) en page de l'appli : duel.html.
// Ajoute le doctype, le viewport et un lien de retour vers l'appli.
// Usage : node tools/build-duel.mjs (à relancer après chaque changement du prototype).
import fs from "fs";

let html = fs.readFileSync("prototypes/jeu-quiz.html", "utf8");
const head = `<!doctype html>
<html lang="fr">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#000000">
<link rel="icon" href="assets/icon.svg">
`;
// Le menu principal de l'appli, le même que sur les autres pages, fixé en haut (demande de l'auteur, 31 oct. 2026 :
// « le menu principal ne suit pas comme ailleurs »). Duel est surligné ; la barre du Duel (titre, série, points) colle dessous.
const nav = `<header class="appnav"><div class="appnav-in">
  <a href="./#/" class="appnav-brand" aria-label="Geonomix, accueil"><img src="assets/icon.svg" alt="" width="24" height="24"><span>Geonomix</span></a>
  <nav class="appnav-links" aria-label="Navigation principale">
    <a href="./#/actu">Actu</a><a href="./#/focus">Focus</a><a href="./#/conflits">Conflits</a><a href="./#/cours">Cours</a><a href="./#/articles">Articles</a><a href="./#/chiffres">Chiffres</a><a href="duel.html" class="on" aria-current="page">⚔ Duel</a>
  </nav>
  <a href="duel.html" class="appnav-duel" aria-current="page">⚔ Duel</a>
  <a href="./#/recherche" class="appnav-search" aria-label="Rechercher"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/></svg></a>
</div></header>
<script>(function () { var set = function () { var h = document.querySelector(".appnav"); if (h) document.documentElement.style.setProperty("--appnav-h", h.offsetHeight + "px"); }; addEventListener("resize", set); document.addEventListener("DOMContentLoaded", set); set(); })();</script>
`;
const css = `.appnav { position: fixed; top: 0; left: 0; right: 0; z-index: 30; padding: calc(8px + env(safe-area-inset-top, 0px)) max(10px, env(safe-area-inset-right, 0px)) 0 max(10px, env(safe-area-inset-left, 0px)); pointer-events: none; }
.appnav-in { pointer-events: auto; max-width: 980px; margin: 0 auto; display: flex; align-items: center; gap: 10px; padding: 7px 8px 7px 14px; background: rgba(22, 22, 24, .82); -webkit-backdrop-filter: saturate(180%) blur(20px); backdrop-filter: saturate(180%) blur(20px); border: 1px solid rgba(255, 255, 255, .12); border-radius: 18px; }
.appnav-brand { display: inline-flex; align-items: center; gap: 8px; color: #f5f5f7; font: 600 17px -apple-system, system-ui, sans-serif; text-decoration: none; }
.appnav-brand img { border-radius: 6px; }
.appnav-links { display: flex; gap: 6px; margin-left: auto; overflow-x: auto; scrollbar-width: none; }
.appnav-links::-webkit-scrollbar { display: none; }
.appnav-links a { flex: none; padding: 6px 12px; border-radius: 999px; border: 1px solid rgba(255, 255, 255, .35); color: #f5f5f7; font: 500 14px -apple-system, system-ui, sans-serif; text-decoration: none; white-space: nowrap; }
.appnav-links a:hover { border-color: #f5f5f7; }
.appnav-links a.on { background: #ff8a3d; border-color: #ff8a3d; color: #1a0c00; font-weight: 700; }
.appnav-duel { display: none; padding: 5px 11px; border-radius: 999px; background: #ff8a3d; color: #1a0c00; font: 700 13px -apple-system, system-ui, sans-serif; text-decoration: none; }
.appnav-search { display: grid; place-items: center; width: 34px; height: 34px; border-radius: 50%; border: 1px solid rgba(255, 255, 255, .35); color: #f5f5f7; flex: none; }
.appnav-search svg { width: 17px; height: 17px; fill: none; stroke: currentColor; stroke-width: 2.2; stroke-linecap: round; }
.appnav a:focus-visible { outline: 2px solid #f5f5f7; outline-offset: 2px; }
body { padding-top: var(--appnav-h, 64px); }
body:has(#play:not([hidden])) .appnav { display: none; }
.top { top: var(--appnav-h, 64px) !important; }
@media (max-width: 560px) {
  .appnav-in { flex-wrap: wrap; row-gap: 6px; padding: 6px 8px 8px; }
  .appnav-duel { display: inline-block; margin-left: auto; }
  .appnav-links a.on { display: none; }
  .appnav-search { width: 32px; height: 32px; }
  .appnav-links { order: 3; flex: 1 0 100%; margin-left: 0; justify-content: space-between; gap: 3px; }
  .appnav-links a { padding: 5px 7px; font-size: 12.5px; }
}
</style>`;
const once = (s, a, b) => { if (s.split(a).length !== 2) throw new Error("introuvable : " + a); return s.replace(a, b); };
html = once(html, `<meta charset="utf-8">\n`, head + `<meta charset="utf-8">\n`);
html = once(html, `<header class="top">`, nav + `<header class="top">`);
html = html.replace(/<\/style>(?![\s\S]*<\/style>)/, css);
fs.writeFileSync("duel.html", html.replace("<html lang=\"fr\">\n", "<html lang=\"fr\">\n<!-- Généré par tools/build-duel.mjs depuis prototypes/jeu-quiz.html : ne pas modifier à la main. -->\n"));
console.log("duel.html prêt.");
