// Service worker : met l'application en cache pour qu'elle marche hors connexion.
// Pense à changer la version quand tu modifies des fichiers, pour forcer la mise à jour.
const CACHE = "geonomix-v143";
// Images, modèles 3D, polices et bibliothèques (dossier assets/) : cache à part, gardé d'une version à l'autre et
// servi directement sans repasser par le réseau (le globe s'affiche bien plus vite). Si un fichier de assets/ est
// remplacé sous le même nom, changer ce numéro pour forcer son retéléchargement.
const ASSETS = "geonomix-assets-1";
const FILES = [
  "./",
  "index.html",
  "duel.html",
  "styles.css",
  "i18n.js",
  "app.js",
  "viz.js",
  "islm.js",
  "globe.js",
  "bienvenue.js",
  "illus.js",
  "car3d.js",
  "duel-stars.js",
  "duel-orbit.js",
  "duel-db.js",
  "notifs.js",
  "compare.js",
  "pdfview.js",
  "data/content.js",
  "data/news.js",
  "data/culture.js",
  "data/etudes.js",
  "data/plus.js",
  "data/focus.js",
  "data/world.js",
  "data/countries.js",
  "data/indicators.js",
  "data/series.js",
  "data/conflits.js",
  "data/couches.js",
  "data/lettres.js",
  "data/agenda.js",
  "data/resultats.js",
  "data/fiches.js",
  "data/auteur.js",
  "data/cgu.js",
  "data/anecdotes.js",
  "data/iso2.js",
  "manifest.webmanifest",
  "assets/icon.svg",
  "assets/icon-180.png",
  "assets/icon-192.png",
  "assets/icon-512.png",
  "assets/logo-sombre.png",
  "assets/logo-sombre-accueil.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(Promise.all([
    caches.open(CACHE).then((cache) => cache.addAll(FILES)),
    // Le globe de l'accueil, prêt dès la 2e ouverture (et sans réseau).
    caches.open(ASSETS).then((cache) => cache.addAll(["assets/vendor/globe.gl.min.js", "assets/earth/earth-2k.jpg", "assets/earth/earth-blue-marble.jpg"]).catch(() => {})),
  ]));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE && k !== ASSETS).map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

// assets/ : le cache d'abord (ces fichiers ne changent pas). Le reste : le réseau d'abord pour avoir les actus les plus
// fraîches, mais au bout de 3 s sans réponse (réseau lent), la dernière version en cache ; sans réseau, le cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  // Tuiles satellite du zoom (NASA GIBS) : pas de cache, il y en aurait des centaines.
  if (url.hostname === "gibs.earthdata.nasa.gov") return;
  if (url.origin === self.location.origin && url.pathname.includes("/assets/")) {
    event.respondWith(caches.open(ASSETS).then((cache) => cache.match(event.request).then((hit) => hit || fetch(event.request).then((res) => {
      if (res.ok) cache.put(event.request, res.clone());
      return res;
    }))));
    return;
  }
  const net = fetch(event.request).then((res) => {
    if (res.ok || res.type === "opaque") { const copy = res.clone(); caches.open(CACHE).then((cache) => cache.put(event.request, copy)); }
    return res;
  });
  event.respondWith(new Promise((resolve) => {
    let done = false;
    const fromCache = () => caches.match(event.request).then((hit) => { if (hit && !done) { done = true; resolve(hit); } return hit; });
    const timer = setTimeout(fromCache, 3000);
    net.then((res) => { clearTimeout(timer); if (!done) { done = true; resolve(res); } })
      .catch(() => { clearTimeout(timer); fromCache().then((hit) => { if (!done) { done = true; resolve(hit || Response.error()); } }); });
  }));
});

// Notifications (notifs.js, fonction Supabase « notifier ») : { title, body, url, tag }.
self.addEventListener("push", (event) => {
  let d = {};
  try { d = event.data ? event.data.json() : {}; } catch (e) { d = { body: event.data ? event.data.text() : "" }; }
  event.waitUntil(self.registration.showNotification(d.title || "Geonomix", {
    body: d.body || "", tag: d.tag || undefined, icon: "assets/icon-192.png", badge: "assets/icon-192.png", data: { url: d.url || "./" },
  }));
});
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const url = new URL((event.notification.data && event.notification.data.url) || "./", self.registration.scope).href;
  event.waitUntil(self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((list) => {
    for (const c of list) if (c.url.split("#")[0] === url.split("#")[0] && "focus" in c) { c.navigate(url); return c.focus(); }
    return self.clients.openWindow(url);
  }));
});
