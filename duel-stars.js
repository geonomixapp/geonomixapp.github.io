// Fond animé du Duel : un champ d'étoiles qui défile doucement derrière la page (three.js, chargé seulement sur le Duel).
// Remplace l'ancienne poursuite de vaisseaux Star Wars (duel-ships.js), retirée le 3 nov. 2026 avant le lancement :
// licence non commerciale du modèle Jedi, licence inconnue du TIE, marques de Lucasfilm/Disney.
// La baguette qui tourne autour de la Terre de l'affiche est dans duel-orbit.js.
// Pause quand la page est cachée ou qu'une partie est ouverte ; une seule image fixe si l'animation est réduite.
import * as THREE from "./assets/vendor/three/three.module.min.js";

const box = document.querySelector(".arena");
const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
const play = document.getElementById("play");

function start() {
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); }
  catch (e) { return; } // pas de WebGL : le fond reste noir
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
  renderer.setClearColor(0x000000, 0);
  renderer.domElement.className = "arena-cv";
  box.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(52, 1, 0.1, 600);
  camera.position.set(0, 0, 16);

  // Étoiles : de petits traits qui avancent vers l'écran.
  const N = 1100, S = new Float32Array(N * 6), seed = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) { seed[i * 3] = (Math.random() - 0.5) * 220; seed[i * 3 + 1] = (Math.random() - 0.5) * 140; seed[i * 3 + 2] = -Math.random() * 320 + 16; }
  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute("position", new THREE.BufferAttribute(S, 3));
  scene.add(new THREE.LineSegments(starGeo, new THREE.LineBasicMaterial({ color: 0xdfe6ff, transparent: true, opacity: 0.75 })));
  const dust = new THREE.Points(new THREE.BufferGeometry().setAttribute("position", new THREE.BufferAttribute(seed, 3)),
    new THREE.PointsMaterial({ color: 0xffffff, size: 0.18, transparent: true, opacity: 0.6 }));
  scene.add(dust);

  let last = performance.now();
  const step = (now) => {
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    for (let i = 0; i < N; i++) {
      let z = seed[i * 3 + 2] + 10 * dt; if (z > 16) z -= 336; seed[i * 3 + 2] = z;
      S[i * 6] = S[i * 6 + 3] = seed[i * 3]; S[i * 6 + 1] = S[i * 6 + 4] = seed[i * 3 + 1];
      S[i * 6 + 2] = z; S[i * 6 + 5] = z - 0.35;
    }
    starGeo.attributes.position.needsUpdate = true; dust.geometry.attributes.position.needsUpdate = true;
    renderer.render(scene, camera);
  };
  const fit = () => { const w = box.clientWidth, h = box.clientHeight; renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix(); };
  addEventListener("resize", fit); fit(); camera.lookAt(0, 0, -10);
  if (still) { step(last + 16); return; }
  const loop = (now) => { requestAnimationFrame(loop); if (document.hidden || (play && !play.hidden)) { last = now; return; } step(now); };
  requestAnimationFrame(loop);
}

if (box) start();
