// Notifications de Geonomix (demande de l'auteur, 5 nov. 2026 : « pas beaucoup de notifs, mais quand même »).
// Trois sortes, chacune réglable dans la page Profil :
//   - duel : « C'est à toi de jouer » / « Ton adversaire a joué » (un match ou un duel du jour) ;
//   - classement : « X t'a dépassé au classement » (top 20 seulement, une par jour au plus) ;
//   - flash : la Dernière minute, un fait majeur (une par jour au plus, souvent aucune).
// L'abonnement (Web Push) est enregistré dans Supabase, table push_abos (contenu/supabase-notifs.sql),
// au nom du même joueur anonyme que le Duel (même clé de session « geoco.duel.auth »).
// L'envoi est fait par la fonction Supabase « notifier » (contenu/supabase-notifier.ts).
// Sur iPhone et iPad, Apple n'autorise les notifications que si le site est ajouté à l'écran d'accueil.
(function () {
  "use strict";
  // Clé publique VAPID (faite pour être publique ; la clé privée reste dans les secrets de Supabase).
  // À remplir quand l'auteur l'a fabriquée avec cles-notifs.html.
  const VAPID_PUBLIC = "";
  const CFG = { url: "https://xnwaiyhquydhpcqnovtc.supabase.co", key: "sb_publishable_paIqtOPDAYGDFnq7DTFQyA_VpZKx33t" };
  const SDK = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.49.4/+esm";
  const KEY = "geoco.notifs";
  const DEF = { duel: true, classement: true, flash: true };

  const isIOS = /iP(hone|ad|od)/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const standalone = (window.matchMedia && matchMedia("(display-mode: standalone)").matches) || navigator.standalone === true;
  const supported = "serviceWorker" in navigator && "PushManager" in window && "Notification" in window;

  let local = {};
  try { local = JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch (e) {}
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(local)); } catch (e) {} };
  const prefs = () => Object.assign({}, DEF, local.prefs || {});

  let sbReady = null;
  function client() {
    if (sbReady) return sbReady;
    sbReady = import(SDK).then(async ({ createClient }) => {
      const sb = createClient(CFG.url, CFG.key, { auth: { persistSession: true, autoRefreshToken: true, storageKey: "geoco.duel.auth" } });
      let { data } = await sb.auth.getSession();
      if (!data.session) { const r = await sb.auth.signInAnonymously(); if (r.error) throw r.error; data = r.data; }
      return sb;
    });
    sbReady.catch(() => { sbReady = null; });
    return sbReady;
  }

  const b64ToBytes = (s) => {
    const pad = "=".repeat((4 - (s.length % 4)) % 4);
    const raw = atob((s + pad).replace(/-/g, "+").replace(/_/g, "/"));
    return Uint8Array.from(raw, (c) => c.charCodeAt(0));
  };

  // État affiché dans le Profil.
  function status() {
    if (!VAPID_PUBLIC) return "bientot";
    if (!supported) return isIOS && !standalone ? "ios-ecran" : "non";
    if (isIOS && !standalone) return "ios-ecran";
    if (Notification.permission === "denied") return "refuse";
    return local.on && Notification.permission === "granted" ? "actif" : "inactif";
  }

  async function store(sub) {
    const sb = await client();
    const lang = (window.I18N && I18N.lang) || "fr";
    const { error } = await sb.from("push_abos").upsert({ sub: sub.toJSON(), prefs: prefs(), lang, updated_at: new Date().toISOString() }, { onConflict: "uid" });
    if (error) throw error;
  }

  async function enable() {
    if (status() === "bientot" || status() === "non" || status() === "ios-ecran") throw new Error(status());
    const perm = await Notification.requestPermission();
    if (perm !== "granted") throw new Error("refuse");
    const reg = await navigator.serviceWorker.ready;
    let sub = await reg.pushManager.getSubscription();
    if (!sub) sub = await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: b64ToBytes(VAPID_PUBLIC) });
    await store(sub);
    local.on = true; save();
  }

  async function disable() {
    try {
      const reg = await navigator.serviceWorker.ready;
      const sub = await reg.pushManager.getSubscription();
      if (sub) await sub.unsubscribe();
      const sb = await client();
      await sb.from("push_abos").delete().not("uid", "is", null);
    } catch (e) {}
    local.on = false; save();
  }

  async function setPref(k, v) {
    local.prefs = Object.assign(prefs(), { [k]: !!v }); save();
    if (status() !== "actif") return;
    try {
      const reg = await navigator.serviceWorker.ready;
      const sub = await reg.pushManager.getSubscription();
      if (sub) await store(sub);
    } catch (e) {}
  }

  window.GeocoNotifs = { status, enable, disable, setPref, prefs };
})();
