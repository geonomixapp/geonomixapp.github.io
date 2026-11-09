// Séries annuelles par pays pour la page Chiffres (comparer son pays aux autres dans le temps).
// Demande de l'auteur (9 nov. 2026) : « si Canada, inflation du Canada, et on peut comparer avec les USA, sur le temps ».
// Source : Banque mondiale (API ouverte), indicateurs du développement dans le monde :
//   inflation  FP.CPI.TOTL.ZG  (prix à la consommation, % sur un an)
//   chomage    SL.UEM.TOTL.ZS  (chômage, % de la population active, estimation modélisée de l'OIT)
//   croissance NY.GDP.MKTP.KD.ZG (PIB en volume, % sur un an)
// Lancé par la GitHub Action .github/workflows/series.yml (le réseau de la session de travail ne joint pas l'API).
// Sortie : data/series.js → window.GEOCO.series = { updated, sources, data: { "<ISO num ou agrégat>": { inflation: [annéeDébut, v, v, null, …], … } } }
import fs from "fs";
import path from "path";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const IND = { inflation: "FP.CPI.TOTL.ZG", chomage: "SL.UEM.TOTL.ZS", croissance: "NY.GDP.MKTP.KD.ZG" };
const AGG = { WLD: "WLD", EMU: "EMU", EUU: "EUU", OED: "OED" }; // Monde, zone euro, Union européenne, OCDE
const FROM = 1980, TO = new Date().getFullYear();

// ISO 3166 numérique ← code à deux lettres (data/iso2.js : numérique → deux lettres)
const iso2Src = fs.readFileSync(path.join(ROOT, "data/iso2.js"), "utf8");
const num2 = JSON.parse(iso2Src.slice(iso2Src.indexOf("{"), iso2Src.lastIndexOf("}") + 1));
const fromIso2 = Object.fromEntries(Object.entries(num2).map(([n, a]) => [a, n]));

async function get(url) {
  for (let k = 0; k < 4; k++) {
    try {
      const r = await fetch(url, { headers: { "User-Agent": "GeonomixBot/1.0 (geonomixapp.github.io)" } });
      if (r.ok) return await r.json();
    } catch (e) {}
    await new Promise((res) => setTimeout(res, 2000 * 2 ** k));
  }
  throw new Error("Échec : " + url);
}

const [, countries] = await get("https://api.worldbank.org/v2/country?format=json&per_page=400");
const keyOf = {}; // code ISO3 de la Banque mondiale → clé de l'appli
for (const c of countries) {
  if (AGG[c.id]) keyOf[c.id] = c.id;
  else if (c.region && c.region.id !== "NA" && fromIso2[c.iso2Code]) keyOf[c.id] = fromIso2[c.iso2Code];
}

const data = {};
for (const [name, code] of Object.entries(IND)) {
  const [, rows] = await get(`https://api.worldbank.org/v2/country/all/indicator/${code}?format=json&date=${FROM}:${TO}&per_page=30000`);
  const by = {};
  for (const r of rows || []) {
    const k = keyOf[r.countryiso3code];
    if (!k || r.value == null) continue;
    (by[k] = by[k] || {})[+r.date] = Math.round(r.value * 10) / 10;
  }
  for (const [k, years] of Object.entries(by)) {
    const ys = Object.keys(years).map(Number).sort((a, b) => a - b);
    const arr = [ys[0]];
    for (let y = ys[0]; y <= ys[ys.length - 1]; y++) arr.push(y in years ? years[y] : null);
    (data[k] = data[k] || {})[name] = arr;
  }
  console.log(name, Object.keys(by).length, "pays ou zones");
}

const out = {
  updated: new Date().toISOString().slice(0, 10),
  sources: {
    inflation: { short: "Banque mondiale", name: "Banque mondiale, « Inflation, prix à la consommation (% annuel) » (FP.CPI.TOTL.ZG)", url: "https://donnees.banquemondiale.org/indicator/FP.CPI.TOTL.ZG" },
    chomage: { short: "Banque mondiale / OIT", name: "Banque mondiale, « Chômage, total (% de la population active) », estimation modélisée de l'OIT (SL.UEM.TOTL.ZS)", url: "https://donnees.banquemondiale.org/indicator/SL.UEM.TOTL.ZS" },
    croissance: { short: "Banque mondiale", name: "Banque mondiale, « Croissance du PIB (% annuel) » (NY.GDP.MKTP.KD.ZG)", url: "https://donnees.banquemondiale.org/indicator/NY.GDP.MKTP.KD.ZG" }
  },
  data
};
fs.writeFileSync(path.join(ROOT, "data/series.js"),
  "// Séries annuelles de la Banque mondiale, fabriquées par tools/build-series.mjs (GitHub Action « Séries des chiffres »). Ne pas modifier à la main.\n" +
  "window.GEOCO = window.GEOCO || {};\nwindow.GEOCO.series = " + JSON.stringify(out) + ";\n");
console.log("data/series.js :", Object.keys(data).length, "entrées");
