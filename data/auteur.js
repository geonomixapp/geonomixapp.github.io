// Le pavé « Qui suis-je ? » : présenté sur l'accueil et sur la page À propos.
// `cursus` : à compléter par l'auteur (études, établissement, spécialité…). Tant qu'il est vide,
// une mention « à compléter » s'affiche pour qu'on ne l'oublie pas.
// `photo` : chemin d'une photo carrée (ex. "assets/auteur.jpg"), sinon les initiales s'affichent.
window.GEOCO = window.GEOCO || {};
window.GEOCO.auteur = {
  nom: "Célestin Noury",
  role: "Fondateur de Geonomix · Étudiant en économie",
  photo: "assets/auteur.jpg",
  // Adresse qui reçoit les idées de sujets (formulaire de la page Articles). À remplir.
  contact: "celestinnoury0@gmail.com",
  // Statistiques de visite GoatCounter (sans cookie) : le code du compte, ex. "geonomix" pour geonomix.goatcounter.com.
  // Vide = pas de statistiques. Ne compte pas dans l'aperçu claude.ai.
  goatcounter: "",
  cursus: "Ancien élève de classe préparatoire économie-gestion (CPGE D2) à Strasbourg, je suis en dernière année de licence d'économie et relations internationales, en échange à l'Université de Montréal (2026-2027).",
  // Texte revu par l'auteur le 27 nov. 2026 (licence économie et relations internationales ; pourquoi l'appli ; rigueur scientifique).
  texte: [
    "La classe préparatoire et la licence m'ont apporté des connaissances et une méthode de réflexion. Pourtant, j'ai toujours eu des difficultés à comprendre les réels enjeux de l'actualité. Ainsi, j'ai souhaité créer une application qui réunit les informations et des pistes de réflexion sur la géopolitique, l'économie et la finance.",
    "Avec une volonté de rigueur scientifique : être rationnel et partir des faits, pas seulement ceux qui font les gros titres, mais aussi ceux qui sont peu abordés."
  ]
};
