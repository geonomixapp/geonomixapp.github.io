// Visionneuse de PDF dans l'appli (demande de l'auteur, 26 nov. 2026 : « on ne peut pas sortir de la page du PDF,
// rajoute une croix »). Sur iPhone / iPad, l'appli ajoutée à l'écran d'accueil ouvrait le PDF à la place de
// l'appli, sans bouton retour. Ici le PDF s'affiche par-dessus, avec ✕ (et Échap, ou le geste retour) pour fermer,
// un bouton pour l'enregistrer, et le zoom (pincer ou + / −) : la page est redessinée plus fine à chaque zoom.
// Rendu : PDF.js (Mozilla) depuis cdnjs, chargé au premier PDF ouvert. S'il ne charge pas, le PDF s'ouvre comme avant.
(function () {
  "use strict";

  const LIB = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
  const WORKER = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
  const MAX_PIXELS = 12e6;           // par page dessinée (limite des canvas sur iPhone / iPad : 16,7 M)
  const ZMIN = 1, ZMAX = 5;
  const t = (s) => (window.I18N && I18N.t ? I18N.t(s) : s);

  let libPromise = null;
  function loadLib() {
    if (window.pdfjsLib) return Promise.resolve(window.pdfjsLib);
    if (!libPromise) {
      libPromise = new Promise((resolve, reject) => {
        const s = document.createElement("script");
        s.src = LIB;
        s.onload = () => {
          if (!window.pdfjsLib) return reject(new Error("pdf.js"));
          window.pdfjsLib.GlobalWorkerOptions.workerSrc = WORKER;
          resolve(window.pdfjsLib);
        };
        s.onerror = () => { libPromise = null; reject(new Error("pdf.js")); };
        document.head.appendChild(s);
      });
    }
    return libPromise;
  }

  let cur = null;     // visionneuse ouverte

  function close(fromHistory) {
    if (!cur) return;
    const v = cur; cur = null;
    v.dead = true;
    try { v.doc && v.doc.destroy(); } catch (e) {}
    v.el.remove();
    document.documentElement.classList.remove("pdfv-open");
    document.removeEventListener("keydown", v.onKey);
    if (!fromHistory && v.pushed && history.state && history.state.pdfv) history.back();
  }
  window.addEventListener("popstate", () => { if (cur) close(true); });

  async function open(href, name) {
    close();
    const el = document.createElement("div");
    el.className = "pdfv";
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-modal", "true");
    el.innerHTML = `
      <div class="pdfv-bar">
        <button class="pdfv-x" type="button" aria-label="${t("Fermer")}">✕</button>
        <span class="pdfv-title"></span>
        <button class="pdfv-z" type="button" data-z="-1" aria-label="${t("Dézoomer")}">−</button>
        <button class="pdfv-z" type="button" data-z="1" aria-label="${t("Zoomer")}">+</button>
        <a class="pdfv-dl" href="${href}" download="${name || ""}" aria-label="${t("Enregistrer le PDF")}">⬇</a>
      </div>
      <div class="pdfv-scroll"><div class="pdfv-pages"><p class="pdfv-wait">${t("Chargement…")}</p></div></div>`;
    el.querySelector(".pdfv-title").textContent = (name || href.split("/").pop()).replace(/\.pdf$/i, "");
    document.body.appendChild(el);
    document.documentElement.classList.add("pdfv-open");
    const v = { el, zoom: 1, pages: [], dead: false, pushed: false };
    v.onKey = (e) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", v.onKey);
    cur = v;
    try { history.pushState({ pdfv: 1 }, "", location.href); v.pushed = true; } catch (e) {}
    el.querySelector(".pdfv-x").addEventListener("click", () => close());

    let lib;
    try { lib = await loadLib(); } catch (e) {
      if (v.dead) return;
      close();
      window.location.href = href;      // secours : comme avant
      return;
    }
    if (v.dead) return;
    try {
      v.doc = await lib.getDocument(href).promise;
    } catch (e) {
      if (!v.dead) el.querySelector(".pdfv-pages").innerHTML = `<p class="pdfv-wait">${t("Impossible d'ouvrir ce PDF.")} <a href="${href}">${t("L'ouvrir quand même")}</a></p>`;
      return;
    }
    if (v.dead) return;
    const holder = el.querySelector(".pdfv-pages");
    holder.innerHTML = "";
    const scroller = el.querySelector(".pdfv-scroll");
    for (let i = 1; i <= v.doc.numPages; i++) {
      const page = await v.doc.getPage(i);
      if (v.dead) return;
      const vp = page.getViewport({ scale: 1 });
      const wrap = document.createElement("div");
      wrap.className = "pdfv-page";
      const c = document.createElement("canvas");
      const fine = document.createElement("canvas");    // la partie visible, en pleine finesse, quand on zoome fort
      fine.className = "pdfv-fine";
      wrap.append(c, fine);
      holder.appendChild(wrap);
      v.pages.push({ page, wrap, c, fine, ratio: vp.height / vp.width, w: vp.width, drawn: 0, task: null, ftask: null });
    }
    layout(v);
    draw(v);
    scroller.addEventListener("scroll", () => { clearTimeout(v.fineT); v.fineT = setTimeout(() => drawFine(v), 180); }, { passive: true });

    // Zoom : boutons, molette avec Ctrl (pincement du pavé tactile), pincement à deux doigts.
    el.querySelectorAll(".pdfv-z").forEach((b) => b.addEventListener("click", () => {
      zoomTo(v, v.zoom * (b.dataset.z === "1" ? 1.5 : 1 / 1.5), scroller.clientWidth / 2, scroller.clientHeight / 2);
    }));
    scroller.addEventListener("wheel", (e) => {
      if (!e.ctrlKey) return;
      e.preventDefault();
      const r = scroller.getBoundingClientRect();
      zoomTo(v, v.zoom * Math.exp(-e.deltaY * 0.01), e.clientX - r.left, e.clientY - r.top);
    }, { passive: false });
    let pinch = null;
    const dist = (ts) => Math.hypot(ts[0].clientX - ts[1].clientX, ts[0].clientY - ts[1].clientY);
    scroller.addEventListener("touchstart", (e) => {
      if (e.touches.length === 2) {
        const r = scroller.getBoundingClientRect();
        pinch = { d: dist(e.touches), z: v.zoom,
          x: (e.touches[0].clientX + e.touches[1].clientX) / 2 - r.left,
          y: (e.touches[0].clientY + e.touches[1].clientY) / 2 - r.top };
      }
    }, { passive: true });
    scroller.addEventListener("touchmove", (e) => {
      if (!pinch || e.touches.length !== 2) return;
      e.preventDefault();
      zoomTo(v, pinch.z * dist(e.touches) / pinch.d, pinch.x, pinch.y);
    }, { passive: false });
    scroller.addEventListener("touchend", (e) => { if (e.touches.length < 2) pinch = null; });
    // Double toucher : zoom ×2 sur le point, ou retour à la largeur de l'écran.
    let lastTap = 0;
    scroller.addEventListener("click", (e) => {
      const now = Date.now();
      if (now - lastTap < 320) {
        const r = scroller.getBoundingClientRect();
        zoomTo(v, v.zoom > 1.2 ? 1 : 2.5, e.clientX - r.left, e.clientY - r.top);
        lastTap = 0;
      } else lastTap = now;
    });
    window.addEventListener("resize", () => { if (!v.dead) { layout(v); draw(v); } });
  }

  // Largeur d'affichage des pages : celle de l'écran (900 px au plus) × le zoom.
  function baseWidth(v) {
    const s = v.el.querySelector(".pdfv-scroll");
    return Math.min(900, s.clientWidth - 24);
  }
  function layout(v) {
    const w = baseWidth(v) * v.zoom;
    v.pages.forEach((p) => {
      p.wrap.style.width = w + "px"; p.wrap.style.height = w * p.ratio + "px";
      p.fine.style.display = "none";                  // décalée tant que le zoom change ; redessinée après
    });
  }
  function zoomTo(v, z, fx, fy) {
    z = Math.max(ZMIN, Math.min(ZMAX, z));
    if (Math.abs(z - v.zoom) < 0.001) return;
    const s = v.el.querySelector(".pdfv-scroll");
    const k = z / v.zoom;
    const cx = s.scrollLeft + fx, cy = s.scrollTop + fy;
    v.zoom = z;
    layout(v);
    s.scrollLeft = cx * k - fx;
    s.scrollTop = cy * k - fy;
    clearTimeout(v.drawT);
    v.drawT = setTimeout(() => draw(v), 220);   // redessin net une fois le geste fini
  }
  // Dessine chaque page à la résolution de l'écran pour le zoom actuel (plus on zoome, plus c'est fin).
  function draw(v) {
    const dpr = Math.min(3, window.devicePixelRatio || 1);
    const cssW = baseWidth(v) * v.zoom;
    v.pages.forEach((p) => {
      let px = cssW * dpr;
      if (px * px * p.ratio > MAX_PIXELS) px = Math.sqrt(MAX_PIXELS / p.ratio);
      px = Math.round(px);
      if (Math.abs(px - p.drawn) < 4) return;
      if (p.task) { try { p.task.cancel(); } catch (e) {} }
      const scale = px / p.w;
      const vp = p.page.getViewport({ scale });
      const off = document.createElement("canvas");
      off.width = Math.round(vp.width); off.height = Math.round(vp.height);
      p.task = p.page.render({ canvasContext: off.getContext("2d"), viewport: vp });
      p.task.promise.then(() => {
        if (v.dead) return;
        p.c.width = off.width; p.c.height = off.height;
        p.c.getContext("2d").drawImage(off, 0, 0);
        p.drawn = px; p.task = null;
      }).catch(() => {});
    });
    drawFine(v);
  }

  // Au-delà de ce qu'une page entière peut avoir de pixels, on redessine seulement la partie à l'écran,
  // à la résolution exacte de l'écran : le texte reste net jusqu'au zoom maximal.
  function drawFine(v) {
    if (v.dead) return;
    const dpr = Math.min(3, window.devicePixelRatio || 1);
    const cssW = baseWidth(v) * v.zoom;
    const s = v.el.querySelector(".pdfv-scroll");
    const sr = s.getBoundingClientRect();
    v.pages.forEach((p) => {
      const full = cssW * dpr;
      if (full * full * p.ratio <= MAX_PIXELS * 1.05) { p.fine.style.display = "none"; return; }
      const r = p.wrap.getBoundingClientRect();
      const left = Math.max(0, sr.left - r.left), top = Math.max(0, sr.top - r.top);
      const right = Math.min(r.width, sr.right - r.left), bottom = Math.min(r.height, sr.bottom - r.top);
      if (right <= left || bottom <= top) { p.fine.style.display = "none"; return; }
      const w = right - left, h = bottom - top;
      if (p.ftask) { try { p.ftask.cancel(); } catch (e) {} }
      const vp = p.page.getViewport({ scale: full / p.w, offsetX: -left * dpr, offsetY: -top * dpr });
      const off = document.createElement("canvas");
      off.width = Math.round(w * dpr); off.height = Math.round(h * dpr);
      p.ftask = p.page.render({ canvasContext: off.getContext("2d"), viewport: vp });
      p.ftask.promise.then(() => {
        if (v.dead) return;
        const f = p.fine;
        f.width = off.width; f.height = off.height;
        f.getContext("2d").drawImage(off, 0, 0);
        Object.assign(f.style, { left: left + "px", top: top + "px", width: w + "px", height: h + "px", display: "block" });
        p.ftask = null;
      }).catch(() => {});
    });
  }

  // Tous les liens vers un PDF de l'appli (lettres, fiches de révision) s'ouvrent ici.
  document.addEventListener("click", (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = e.target.closest && e.target.closest("a[href]");
    if (!a || a.closest(".pdfv")) return;
    const href = a.getAttribute("href") || "";
    if (!/\.pdf(\?|#|$)/i.test(href) || /^[a-z]+:\/\//i.test(href) && !href.startsWith(location.origin)) return;
    e.preventDefault();
    open(href, a.getAttribute("download") || "");
  });

  window.GeocoPdf = { open, close };
})();
