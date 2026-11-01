// Schéma IS-LM animé (cours « Le modèle IS-LM », demande de l'auteur du 1er nov. 2026 : « simplifier, le minimum
// de variables, expliquer avec illustration »). Deux axes seulement : Y (production) et i (taux d'intérêt).
// GeocoISLM.html(diagram) → le schéma + ses boutons d'étapes ; GeocoISLM.mountAll(root) branche les boutons.
// diagram = { preset: "base" | "budget" | "monnaie" | "mix" | "trappe" | "keynes" | "monetariste", steps: [{ label, text }] } :
// chaque étape (bouton) montre un état des courbes ; le point d'équilibre glisse de l'un à l'autre.
(function () {
  const W = 340, H = 250, X0 = 44, Y0 = 210, X1 = 326, Y1 = 18;
  const px = (y) => X0 + (y / 100) * (X1 - X0);       // Y (0-100) → abscisse
  const py = (i) => Y0 - (i / 100) * (Y0 - Y1);       // i (0-100) → ordonnée
  const K = 0.93;
  // IS : i = 85 − K·(Y − 8 − s) ; LM : i = 15 + K·(Y − 8 − s) (s = déplacement vers la droite).
  const IS = (s) => ({ kind: "is", pts: [[8 + s, 85], [83 + s, 15]] });
  const LM = (s) => ({ kind: "lm", pts: [[8 + s, 15], [83 + s, 85]] });
  // Piège à liquidité : LM plate à i = 10 jusqu'à Y = 76 + s, puis elle monte.
  const LMT = (s) => ({ kind: "lm", pts: [[4, 10], [76 + s, 10], [90 + s, 42]] });
  const ISL = (s) => ({ kind: "is", pts: [[4 + s, 62], [58 + s, 4]] });
  // Cas extrêmes selon les écoles : IS verticale (keynésien élémentaire : l'investissement ne dépend pas du taux),
  // LM verticale (monétariste : pas de demande de monnaie pour spéculer, la monnaie fixe la production).
  const ISV = (s) => ({ kind: "is", pts: [[48 + s, 92], [48 + s, 6]] });
  const LMV = (s) => ({ kind: "lm", pts: [[50 + s, 6], [50 + s, 92]] });

  function cross(a, b) {
    for (let p = 0; p < a.pts.length - 1; p++) for (let q = 0; q < b.pts.length - 1; q++) {
      const [x1, y1] = a.pts[p], [x2, y2] = a.pts[p + 1], [x3, y3] = b.pts[q], [x4, y4] = b.pts[q + 1];
      const d = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
      if (!d) continue;
      const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / d, u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / d;
      if (t >= 0 && t <= 1 && u >= 0 && u <= 1) return [x1 + t * (x2 - x1), y1 + t * (y2 - y1)];
    }
    return null;
  }
  // Les états de chaque schéma : courbes visibles (les anciennes en pointillé) et point d'équilibre.
  const PRESETS = {
    base: [{ is: IS(0), lm: LM(0) }],
    budget: [{ is: IS(0), lm: LM(0) }, { is: IS(20), lm: LM(0), was: { is: IS(0) } }],
    monnaie: [{ is: IS(0), lm: LM(0) }, { is: IS(0), lm: LM(20), was: { lm: LM(0) } }, { is: IS(0), lm: LM(-16), was: { lm: LM(0) } }],
    mix: [{ is: IS(0), lm: LM(0) }, { is: IS(18), lm: LM(18), was: { is: IS(0), lm: LM(0) } }],
    keynes: [{ is: ISV(0), lm: LM(0) }, { is: ISV(0), lm: LM(20), was: { lm: LM(0) } }, { is: ISV(16), lm: LM(0), was: { is: ISV(0) } }],
    monetariste: [{ is: IS(0), lm: LMV(0) }, { is: IS(20), lm: LMV(0), was: { is: IS(0) } }, { is: IS(0), lm: LMV(16), was: { lm: LMV(0) } }],
    // Effet d'éviction décomposé (demande de l'auteur, 1er nov. 2026) : 1) effet revenu (multiplicateur, à taux
    // inchangé : point A sur IS' au taux i₀) ; 2) la hausse du taux ramène à E' : l'éviction = Y₁ − Y₂.
    eviction: [{ is: IS(0), lm: LM(0) }, { is: IS(24), lm: LM(0), was: { is: IS(0) }, revenu: "only" }, { is: IS(24), lm: LM(0), was: { is: IS(0) }, revenu: "both" }],
    trappe: [{ is: ISL(0), lm: LMT(0) }, { is: ISL(0), lm: LMT(10), was: { lm: LMT(0) } }, { is: ISL(18), lm: LMT(0), was: { is: ISL(0) } }],
  };

  const path = (c) => "M" + c.pts.map(([y, i]) => `${px(y).toFixed(1)},${py(i).toFixed(1)}`).join(" L");
  const end = (c) => c.pts[c.kind === "is" ? c.pts.length - 1 : c.pts.length - 1];
  const t = (s) => (window.I18N && I18N.t ? I18N.t(s) : s);

  function svg(state, base) {
    const e = cross(state.is, state.lm), e0 = cross(base.is, base.lm);
    const lab = (c, name, ghost) => {
      const [y, i] = end(c);
      return `<text class="ilm-name ${c.kind}${ghost ? " ghost" : ""}" x="${Math.min(px(y) + 4, W - 24)}" y="${py(i) + (c.kind === "is" ? 12 : -4)}">${name}${ghost ? "" : ""}</text>`;
    };
    const was = state.was || {};
    // Point A (effet revenu seul) : là où IS' passe au taux de départ i₀.
    const onIS = (c, i) => { const [[y1, i1], [y2, i2]] = c.pts; return y1 + (i - i1) * (y2 - y1) / (i2 - i1); };
    const A = state.revenu && e0 ? [onIS(state.is, e0[1]), e0[1]] : null;
    const evict = A && state.revenu === "both" && e ? `
      <circle class="ilm-a" cx="${px(A[0])}" cy="${py(A[1])}" r="5"/><text class="ilm-al" x="${px(A[0]) + 7}" y="${py(A[1]) + 15}">A</text>
      <line class="ilm-guide old" x1="${px(A[0])}" y1="${py(A[1])}" x2="${px(A[0])}" y2="${Y0}"/>
      <text class="ilm-tick" x="${px(A[0])}" y="${Y0 + 12}" text-anchor="middle">Y₁</text>
      <path class="ilm-ev" d="M${px(A[0])},${Y0 - 8} L${px(e[0]) + 3},${Y0 - 8}" marker-end="url(#ilm-ar)"/>
      <text class="ilm-evl" x="${(px(A[0]) + px(e[0])) / 2}" y="${Y0 - 13}" text-anchor="middle">${t("éviction")}</text>` : "";
    if (A && state.revenu === "only") {
      return `<svg viewBox="0 0 ${W} ${H}" class="ilm-svg" role="img" aria-label="${t("Schéma IS-LM")}">
      <defs><marker id="ilm-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
      <line class="ilm-axis" x1="${X0}" y1="${Y0}" x2="${X1 + 6}" y2="${Y0}" marker-end="url(#ilm-ar)"/>
      <line class="ilm-axis" x1="${X0}" y1="${Y0}" x2="${X0}" y2="${Y1 - 8}" marker-end="url(#ilm-ar)"/>
      <text class="ilm-ax" x="${X1}" y="${Y0 + 18}" text-anchor="end">Y · ${t("production")}</text>
      <text class="ilm-ax" x="${X0 - 6}" y="${Y1 - 10}">i · ${t("taux d'intérêt")}</text>
      <path class="ilm-c is ghost" d="${path(was.is)}"/>${lab(was.is, "IS", true)}
      <path class="ilm-c is new" d="${path(state.is)}"/>${lab(state.is, "IS'")}
      <path class="ilm-c lm" d="${path(state.lm)}"/>${lab(state.lm, "LM")}
      <circle class="ilm-e0" cx="${px(e0[0])}" cy="${py(e0[1])}" r="4.5"/>
      <line class="ilm-guide old" x1="${px(e0[0])}" y1="${py(e0[1])}" x2="${px(e0[0])}" y2="${Y0}"/>
      <text class="ilm-tick" x="${px(e0[0])}" y="${Y0 + 12}" text-anchor="middle">Y₀</text><text class="ilm-tick" x="${X0 - 4}" y="${py(e0[1]) + 3}" text-anchor="end">i₀</text>
      <path class="ilm-ev rev" d="M${px(e0[0]) + 6},${py(e0[1])} L${px(A[0]) - 7},${py(A[1])}" marker-end="url(#ilm-ar)"/>
      <line class="ilm-guide" x1="${px(A[0])}" y1="${py(A[1])}" x2="${px(A[0])}" y2="${Y0}"/>
      <text class="ilm-tick on" x="${px(A[0])}" y="${Y0 + 12}" text-anchor="middle">Y₁</text>
      <circle class="ilm-e" cx="${px(A[0])}" cy="${py(A[1])}" r="6"/><text class="ilm-el" x="${px(A[0]) + 9}" y="${py(A[1]) - 7}">A</text>
      </svg>`;
    }
    const moved = e0 && e && (Math.abs(e[0] - e0[0]) > 0.5 || Math.abs(e[1] - e0[1]) > 0.5);
    return `<svg viewBox="0 0 ${W} ${H}" class="ilm-svg" role="img" aria-label="${t("Schéma IS-LM")}">
      <defs><marker id="ilm-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
      <line class="ilm-axis" x1="${X0}" y1="${Y0}" x2="${X1 + 6}" y2="${Y0}" marker-end="url(#ilm-ar)"/>
      <line class="ilm-axis" x1="${X0}" y1="${Y0}" x2="${X0}" y2="${Y1 - 8}" marker-end="url(#ilm-ar)"/>
      <text class="ilm-ax" x="${X1}" y="${Y0 + 18}" text-anchor="end">Y · ${t("production")}</text>
      <text class="ilm-ax" x="${X0 - 6}" y="${Y1 - 10}">i · ${t("taux d'intérêt")}</text>
      ${was.is ? `<path class="ilm-c is ghost" d="${path(was.is)}"/>${lab(was.is, "IS", true)}` : ""}
      ${was.lm ? `<path class="ilm-c lm ghost" d="${path(was.lm)}"/>${lab(was.lm, "LM", true)}` : ""}
      <path class="ilm-c is${was.is ? " new" : ""}" d="${path(state.is)}"/>${lab(state.is, was.is ? "IS'" : "IS")}
      <path class="ilm-c lm${was.lm ? " new" : ""}" d="${path(state.lm)}"/>${lab(state.lm, was.lm ? "LM'" : "LM")}
      ${moved ? `<circle class="ilm-e0" cx="${px(e0[0])}" cy="${py(e0[1])}" r="4.5"/>
        <line class="ilm-guide old" x1="${px(e0[0])}" y1="${py(e0[1])}" x2="${px(e0[0])}" y2="${Y0}"/><line class="ilm-guide old" x1="${px(e0[0])}" y1="${py(e0[1])}" x2="${X0}" y2="${py(e0[1])}"/>
        ${Math.abs(e[0] - e0[0]) > 1 ? `<text class="ilm-tick" x="${px(e0[0])}" y="${Y0 + 12}" text-anchor="middle">Y₀</text>` : ""}${Math.abs(e[1] - e0[1]) > 1 ? `<text class="ilm-tick" x="${X0 - 4}" y="${py(e0[1]) + 3}" text-anchor="end">i₀</text>` : ""}` : ""}
      ${e ? `<line class="ilm-guide" x1="${px(e[0])}" y1="${py(e[1])}" x2="${px(e[0])}" y2="${Y0}"/><line class="ilm-guide" x1="${px(e[0])}" y1="${py(e[1])}" x2="${X0}" y2="${py(e[1])}"/>
        <text class="ilm-tick on" x="${px(e[0])}" y="${Y0 + 12}" text-anchor="middle">${moved && Math.abs(e[0] - e0[0]) > 1 ? (A ? "Y₂" : "Y₁") : "Y"}</text><text class="ilm-tick on" x="${X0 - 4}" y="${py(e[1]) + 3}" text-anchor="end">${moved && Math.abs(e[1] - e0[1]) > 1 ? "i₁" : "i"}</text>
        <circle class="ilm-e" cx="${px(e[0])}" cy="${py(e[1])}" r="6"/><text class="ilm-el" x="${px(e[0]) + 9}" y="${py(e[1]) - 7}">${moved ? "E'" : "E"}</text>` : ""}
      ${evict}
    </svg>`;
  }

  function html(d) {
    if (!d || !PRESETS[d.preset]) return "";
    const states = PRESETS[d.preset], steps = d.steps || [];
    const enc = encodeURIComponent(JSON.stringify(d));
    return `<figure class="ilm" data-ilm="${enc}">
      <div class="ilm-stage">${svg(states[0], states[0])}</div>
      ${steps.length > 1 ? `<div class="ilm-steps" role="group">${steps.map((s, k) => `<button type="button" data-k="${k}" aria-pressed="${k === 0}">${k ? "▶ " : ""}${s.label}</button>`).join("")}</div>` : ""}
      <figcaption class="ilm-cap">${steps[0] ? steps[0].text : ""}</figcaption>
    </figure>`;
  }

  function mountAll(root) {
    (root || document).querySelectorAll(".ilm[data-ilm]").forEach((fig) => {
      if (fig.dataset.on) return;
      fig.dataset.on = "1";
      const d = JSON.parse(decodeURIComponent(fig.dataset.ilm)), states = PRESETS[d.preset];
      fig.querySelectorAll(".ilm-steps button").forEach((b) => b.addEventListener("click", () => {
        const k = Number(b.dataset.k);
        fig.querySelectorAll(".ilm-steps button").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
        const stage = fig.querySelector(".ilm-stage");
        stage.innerHTML = svg(states[Math.min(k, states.length - 1)], states[0]);
        fig.querySelector(".ilm-cap").textContent = (d.steps[k] || {}).text || "";
      }));
    });
  }

  window.GeocoISLM = { html, mountAll };
})();
