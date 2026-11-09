// « Chez toi » : le bloc en tête de la page Chiffres (demande de l'auteur, 9 nov. 2026 : « si Canada, inflation du Canada,
// et on peut comparer avec les USA, sur le temps ; on peut aussi trouver les informations d'autres pays »).
// Pays du lecteur deviné d'après le fuseau horaire (sinon la langue du téléphone), modifiable et gardé sur l'appareil.
// Derniers chiffres : data/indicators.js (mensuels). Courbes dans le temps : data/series.js (Banque mondiale, chargé à la demande).
(function () {
  "use strict";
  const KEY = "geoco.chiffres";
  const ISO2 = window.GEOCO_ISO2 || {};
  const FROM2 = Object.fromEntries(Object.entries(ISO2).map(([n, a]) => [a, n]));
  const AGG = { WLD: "Le monde", EMU: "Zone euro", EUU: "Union européenne", OED: "Pays de l'OCDE" };
  const COLORS = ["#ff8a3d", "#7c8cff", "#34d399", "#f472b6", "#facc15"];
  const t = (s) => (window.I18N && I18N.t ? I18N.t(s) : s);

  // Fuseau horaire → pays (les plus courants ; sinon la région de la langue du téléphone).
  const TZ = {
    "Europe/Paris": "FR", "Europe/Brussels": "BE", "Europe/Zurich": "CH", "Europe/Luxembourg": "LU", "Europe/Monaco": "MC",
    "Europe/Berlin": "DE", "Europe/Madrid": "ES", "Atlantic/Canary": "ES", "Africa/Ceuta": "ES", "Europe/Rome": "IT", "Europe/Lisbon": "PT", "Atlantic/Madeira": "PT", "Atlantic/Azores": "PT",
    "Europe/London": "GB", "Europe/Dublin": "IE", "Europe/Amsterdam": "NL", "Europe/Vienna": "AT", "Europe/Warsaw": "PL", "Europe/Prague": "CZ",
    "Europe/Stockholm": "SE", "Europe/Oslo": "NO", "Europe/Copenhagen": "DK", "Europe/Helsinki": "FI", "Europe/Athens": "GR", "Europe/Bucharest": "RO",
    "Europe/Budapest": "HU", "Europe/Sofia": "BG", "Europe/Zagreb": "HR", "Europe/Belgrade": "RS", "Europe/Bratislava": "SK", "Europe/Ljubljana": "SI",
    "Europe/Vilnius": "LT", "Europe/Riga": "LV", "Europe/Tallinn": "EE", "Europe/Istanbul": "TR", "Europe/Moscow": "RU", "Europe/Kiev": "UA", "Europe/Kyiv": "UA",
    "America/Mexico_City": "MX", "America/Sao_Paulo": "BR", "America/Bogota": "CO", "America/Lima": "PE", "America/Santiago": "CL", "America/Caracas": "VE",
    "America/Montevideo": "UY", "America/Asuncion": "PY", "America/La_Paz": "BO", "America/Guayaquil": "EC", "America/Havana": "CU", "America/Port-au-Prince": "HT",
    "America/Martinique": "FR", "America/Guadeloupe": "FR", "America/Cayenne": "FR", "Indian/Reunion": "FR", "Indian/Mayotte": "FR", "Pacific/Tahiti": "FR", "Pacific/Noumea": "FR",
    "Africa/Casablanca": "MA", "Africa/Algiers": "DZ", "Africa/Tunis": "TN", "Africa/Tripoli": "LY", "Africa/Cairo": "EG", "Africa/Dakar": "SN", "Africa/Abidjan": "CI",
    "Africa/Lagos": "NG", "Africa/Douala": "CM", "Africa/Kinshasa": "CD", "Africa/Nairobi": "KE", "Africa/Addis_Ababa": "ET", "Africa/Johannesburg": "ZA", "Africa/Accra": "GH",
    "Asia/Tokyo": "JP", "Asia/Shanghai": "CN", "Asia/Hong_Kong": "HK", "Asia/Taipei": "TW", "Asia/Seoul": "KR", "Asia/Kolkata": "IN", "Asia/Calcutta": "IN",
    "Asia/Singapore": "SG", "Asia/Bangkok": "TH", "Asia/Jakarta": "ID", "Asia/Manila": "PH", "Asia/Ho_Chi_Minh": "VN", "Asia/Kuala_Lumpur": "MY",
    "Asia/Dubai": "AE", "Asia/Riyadh": "SA", "Asia/Qatar": "QA", "Asia/Tehran": "IR", "Asia/Jerusalem": "IL", "Asia/Beirut": "LB", "Asia/Baghdad": "IQ",
    "Asia/Karachi": "PK", "Asia/Dhaka": "BD", "Asia/Almaty": "KZ", "Pacific/Auckland": "NZ"
  };
  // Pays de comparaison par défaut.
  const PAIR = { CA: "US", US: "CA", MX: "US", GB: "FR", IE: "GB", CH: "FR", BE: "FR", LU: "FR", MC: "FR", DE: "FR", FR: "DE", ES: "FR", IT: "FR", PT: "ES",
    NL: "DE", AT: "DE", PL: "DE", CZ: "DE", SE: "NO", NO: "SE", DK: "SE", FI: "SE", MA: "FR", DZ: "FR", TN: "FR", SN: "FR", CI: "FR", CM: "FR",
    BR: "AR", AR: "BR", CL: "AR", CO: "MX", PE: "CO", JP: "KR", KR: "JP", CN: "US", IN: "CN", AU: "NZ", NZ: "AU", RU: "UA", UA: "PL", TR: "DE", EG: "SA" };
  const EURO = new Set(["FR", "DE", "BE", "LU", "NL", "AT", "IE", "IT", "ES", "PT", "FI", "GR", "SK", "SI", "LT", "LV", "EE", "HR", "CY", "MT", "BG"]);

  let st = {};
  try { st = JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch (e) {}
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {} };

  function guessHome() {
    let tz = "";
    try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ""; } catch (e) {}
    let a2 = TZ[tz];
    if (!a2 && /^America\/(Toronto|Montreal|Vancouver|Edmonton|Winnipeg|Halifax|Regina|St_Johns|Moncton|Glace_Bay|Goose_Bay|Whitehorse|Dawson|Yellowknife|Iqaluit|Thunder_Bay|Swift_Current|Blanc-Sablon)/.test(tz)) a2 = "CA";
    if (!a2 && /^(America\/(New_York|Chicago|Denver|Los_Angeles|Phoenix|Anchorage|Detroit|Boise|Indiana|Kentucky|North_Dakota)|Pacific\/Honolulu)/.test(tz)) a2 = "US";
    if (!a2 && /^America\/Argentina\//.test(tz)) a2 = "AR";
    if (!a2 && /^Australia\//.test(tz)) a2 = "AU";
    if (!a2) { const l = (navigator.languages || [navigator.language || ""])[0] || ""; a2 = (l.split("-")[1] || "").toUpperCase(); }
    return FROM2[a2] || FROM2.FR;
  }
  const home = () => st.home || guessHome();
  function defaultsFor(h) {
    const a2 = ISO2[h], p = PAIR[a2];
    const list = [h];
    if (EURO.has(a2)) list.push("EMU");
    if (p && FROM2[p]) list.push(FROM2[p]);
    list.push("WLD");
    return [...new Set(list)].slice(0, 4);
  }

  function loadSeries() {
    if (window.GEOCO && window.GEOCO.series) return Promise.resolve(window.GEOCO.series);
    return new Promise((res) => {
      const s = document.createElement("script");
      s.src = "data/series.js";
      s.onload = () => res((window.GEOCO && window.GEOCO.series) || null);
      s.onerror = () => res(null);
      document.head.appendChild(s);
    });
  }

  // Courbes multiples en SVG (une couleur par pays, valeur au toucher).
  function chart(el, lines, opts) {
    const W = Math.max(300, el.clientWidth || 640), H = W < 520 ? 240 : 300;
    const m = { t: 16, r: 14, b: 26, l: 38 };
    const all = lines.flatMap((l) => l.pts.map((p) => p[1]));
    const years = lines.flatMap((l) => l.pts.map((p) => p[0]));
    if (!all.length) { el.innerHTML = `<p class="cmp-empty">${t("Pas de série pour ces pays sur cette période.")}</p>`; return; }
    const x0 = Math.min(...years), x1 = Math.max(...years);
    // Échelle : on coupe les valeurs extrêmes (hyperinflations) pour garder les courbes lisibles.
    const sorted = all.slice().sort((a, b) => a - b);
    const p97 = sorted[Math.floor((sorted.length - 1) * 0.97)], top = sorted[sorted.length - 1];
    let lo = Math.min(0, sorted[0]), hi = Math.max(1, top <= 2 * p97 ? top : p97);
    const step = [1, 2, 5, 10, 20, 50, 100].find((s) => (hi - lo) / s <= 6) || 200;
    lo = Math.floor(lo / step) * step; hi = Math.ceil(hi / step) * step;
    const X = (y) => m.l + ((y - x0) / Math.max(1, x1 - x0)) * (W - m.l - m.r);
    const Y = (v) => m.t + (1 - (Math.min(hi, Math.max(lo, v)) - lo) / (hi - lo)) * (H - m.t - m.b);
    let s = `<svg viewBox="0 0 ${W} ${H}" width="100%" role="img" aria-label="${opts.label}">`;
    for (let v = lo; v <= hi + 1e-9; v += step) s += `<line class="cmp-grid${v === 0 ? " zero" : ""}" x1="${m.l}" x2="${W - m.r}" y1="${Y(v)}" y2="${Y(v)}"/><text class="cmp-axis" x="${m.l - 6}" y="${Y(v) + 4}" text-anchor="end">${v.toLocaleString(opts.locale)}</text>`;
    const span = x1 - x0, every = span > 30 ? 10 : span > 12 ? 5 : 2;
    for (let y = Math.ceil(x0 / every) * every; y <= x1; y += every) s += `<text class="cmp-axis" x="${X(y)}" y="${H - 6}" text-anchor="middle">${y}</text>`;
    lines.forEach((l) => {
      let d = "", pen = false;
      l.pts.forEach(([y, v], i) => {
        if (v == null) { pen = false; return; }
        d += `${pen ? "L" : "M"}${X(y).toFixed(1)},${Y(v).toFixed(1)} `; pen = true;
      });
      s += `<path class="cmp-line${l.dash ? " dash" : ""}" d="${d}" stroke="${l.color}"/>`;
      const last = l.pts.filter((p) => p[1] != null).pop();
      if (last) s += `<circle cx="${X(last[0])}" cy="${Y(last[1])}" r="3.5" fill="${l.color}"/>`;
    });
    s += `<line class="cmp-cursor" id="cmp-cur" x1="0" x2="0" y1="${m.t}" y2="${H - m.b}" visibility="hidden"/><rect class="cmp-hit" x="${m.l}" y="${m.t}" width="${W - m.l - m.r}" height="${H - m.t - m.b}"/></svg><div class="cmp-tip" hidden></div>`;
    el.innerHTML = s;
    const svg = el.querySelector("svg"), tip = el.querySelector(".cmp-tip"), cur = el.querySelector("#cmp-cur");
    const show = (ev) => {
      const r = svg.getBoundingClientRect();
      const px = ((ev.touches ? ev.touches[0].clientX : ev.clientX) - r.left) * (W / r.width);
      const y = Math.round(x0 + ((px - m.l) / (W - m.l - m.r)) * (x1 - x0));
      if (y < x0 || y > x1) return;
      cur.setAttribute("x1", X(y)); cur.setAttribute("x2", X(y)); cur.setAttribute("visibility", "visible");
      tip.hidden = false;
      tip.innerHTML = `<b>${y}</b>` + lines.map((l) => { const p = l.pts.find((q) => q[0] === y); return `<span><i style="background:${l.color}"></i>${l.name} : ${p && p[1] != null ? p[1].toLocaleString(opts.locale) + opts.unit : "–"}</span>`; }).join("");
      const left = (X(y) / W) * r.width;
      tip.style.left = Math.min(Math.max(left, 80), r.width - 80) + "px";
    };
    svg.addEventListener("mousemove", show);
    svg.addEventListener("click", show);
    svg.addEventListener("touchstart", show, { passive: true });
    svg.addEventListener("touchmove", show, { passive: true });
    svg.addEventListener("mouseleave", () => { tip.hidden = true; cur.setAttribute("visibility", "hidden"); });
  }

  // Monte le bloc. ctx = { data (indicators), nameOf, locale, unitSep, flag, onSelect }
  function mount(root, ctx) {
    const ind = ctx.data.list;
    let indId = st.ind && ind.some((i) => i.id === st.ind) ? st.ind : "inflation";
    let span = st.span || 20;
    let h = home();
    let sel = (st.sel && st.sel[0] === h ? st.sel : defaultsFor(h)).slice(0, 5);
    let series = null;
    const name = (k) => AGG[k] ? t(AGG[k]) : ctx.nameOf(k);
    const flag = (k) => (AGG[k] ? (k === "WLD" ? "🌍" : "🇪🇺") : ctx.flag(k));
    const fmt = (v) => v.toLocaleString(ctx.locale, { maximumFractionDigits: 1 });

    root.innerHTML = `
      <section class="wrap hero cmp">
        <p class="eyebrow reveal">${t("Chiffres · Chez toi")}</p>
        <h2 class="title reveal" id="cmp-title"></h2>
        <p class="lead" id="cmp-lead"></p>
        <div class="cmp-cards" id="cmp-cards"></div>
        <div class="cmp-tools">
          <div class="segmented cmp-span" role="group">${[[10, "10 ans"], [20, "20 ans"], [99, "Depuis 1980"]].map(([v, l]) => `<button type="button" data-span="${v}">${t(l)}</button>`).join("")}</div>
        </div>
        <div class="cmp-chips" id="cmp-chips"></div>
        <div class="cmp-chart" id="cmp-chart"><p class="cmp-empty">${t("Chargement des courbes…")}</p></div>
        <div class="cmp-add">
          <input type="search" id="cmp-q" placeholder="${t("Ajouter un pays à comparer")}" autocomplete="off" list="cmp-list">
          <datalist id="cmp-list"></datalist>
          <button type="button" class="cmp-home" id="cmp-home">${t("Ce n'est pas mon pays ?")}</button>
        </div>
        <p class="viz-cap" id="cmp-src"></p>
      </section>`;

    const keys = () => {
      const s = new Set(Object.keys(ctx.data.list[0].values));
      if (series) Object.keys(series.data).forEach((k) => s.add(k));
      return [...s];
    };
    function fillList() {
      root.querySelector("#cmp-list").innerHTML = keys().map((k) => `<option value="${name(k)}"></option>`).sort().join("");
    }
    const byName = (q) => { q = q.trim().toLowerCase(); return keys().find((k) => name(k).toLowerCase() === q); };

    function draw() {
      st.ind = indId; st.span = span; st.home = st.home; st.sel = sel; save();
      const I = ind.find((i) => i.id === indId);
      root.querySelectorAll("[data-span]").forEach((b) => b.setAttribute("aria-pressed", +b.dataset.span === span));
      root.querySelector("#cmp-title").innerHTML = `${flag(h)} ${name(h)}.<br><span class="grad mix">${t("Tes chiffres, comparés.")}</span>`;
      // Phrase : dernier chiffre chez toi et chez le premier pays comparé.
      const vh = I.values[h], other = sel.find((k) => k !== h && I.values[k]);
      const vo = other && I.values[other];
      root.querySelector("#cmp-lead").textContent = vh
        ? `${I.label} · ${name(h)} : ${fmt(vh.v)}${ctx.unitSep}% (${vh.d})` + (vo ? ` · ${name(other)} : ${fmt(vo.v)}${ctx.unitSep}% (${vo.d})` : "")
        : t("Pas encore de dernier chiffre pour ce pays : regarde les courbes ci-dessous.");
      root.querySelector("#cmp-cards").innerHTML = ind.map((x) => {
        const v = x.values[h];
        return `<button type="button" class="cmp-card${x.id === indId ? " on" : ""}" data-ci="${x.id}"><span>${x.label}</span><b>${v ? fmt(v.v) + ctx.unitSep + "%" : "–"}</b><small>${v ? String(v.d).replace(/\s*\(.*$/, "") : t("pas de donnée")}</small></button>`;
      }).join("");
      root.querySelectorAll("[data-ci]").forEach((b) => b.addEventListener("click", () => { indId = b.dataset.ci; draw(); }));
      root.querySelector("#cmp-chips").innerHTML = sel.map((k, i) => `<span class="cmp-chip" style="--c:${COLORS[i]}"><i></i>${flag(k)} ${name(k)}${k === h ? "" : `<button type="button" data-rm="${k}" aria-label="${t("Retirer")}">×</button>`}</span>`).join("");
      root.querySelectorAll("[data-rm]").forEach((b) => b.addEventListener("click", () => { sel = sel.filter((k) => k !== b.dataset.rm); draw(); }));
      const box = root.querySelector("#cmp-chart");
      if (!series) {
        if (series === false) box.innerHTML = `<p class="cmp-empty">${t("Les courbes dans le temps arrivent bientôt.")}</p>`;
        root.querySelector("#cmp-src").textContent = "";
        return;
      }
      const last = new Date().getFullYear();
      const start = span === 99 ? 1980 : last - span;
      const lines = sel.map((k, i) => {
        const arr = (series.data[k] || {})[indId];
        const pts = [];
        if (arr) for (let j = 1; j < arr.length; j++) { const y = arr[0] + j - 1; if (y >= start) pts.push([y, arr[j]]); }
        return { name: name(k), color: COLORS[i], dash: k === "WLD", pts };
      }).filter((l) => l.pts.length);
      chart(box, lines, { locale: ctx.locale, unit: ctx.unitSep + "%", label: I.label });
      const src = series.sources[indId];
      root.querySelector("#cmp-src").innerHTML = `${t("Moyennes annuelles")} · ${t("Source")} : <a href="${src.url}" target="_blank" rel="noopener">${src.name}</a>. ${t("Le chiffre du haut est le plus récent (mensuel), les courbes sont annuelles.")}`;
    }

    root.querySelectorAll("[data-span]").forEach((b) => b.addEventListener("click", () => { span = +b.dataset.span; draw(); }));
    const q = root.querySelector("#cmp-q");
    let picking = false;
    const addKey = (k) => { if (sel.includes(k)) return; if (sel.length >= 5) sel.splice(1, 1); sel.push(k); };
    q.addEventListener("change", () => {
      const k = byName(q.value);
      if (k && picking && !AGG[k]) { h = k; st.home = k; sel = defaultsFor(k); }
      else if (k) addKey(k);
      picking = false; q.placeholder = t("Ajouter un pays à comparer");
      q.value = ""; q.blur(); draw();
    });
    root.querySelector("#cmp-home").addEventListener("click", () => {
      picking = true; q.placeholder = t("Écris ton pays"); q.focus();
    });

    fillList();
    draw();
    loadSeries().then((s) => { series = s || false; fillList(); draw(); });
    let raf;
    const onResize = () => { if (!root.isConnected) return window.removeEventListener("resize", onResize); cancelAnimationFrame(raf); raf = requestAnimationFrame(draw); };
    window.addEventListener("resize", onResize);

    return {
      add(k) { addKey(k); draw(); root.scrollIntoView({ behavior: "smooth" }); }
    };
  }

  window.GeocoCompare = { mount, home };
})();
