// Fil d'actu quotidien.
// Une entrée = un événement du jour, expliqué simplement. Les plus récentes en premier.
//
// Sources : chaque fait chiffré ou rapporté est suivi de [n], qui renvoie à la n-ième
// source de la liste `sources` (en partant de 1). L'appli affiche « (Nom court) » dans
// le texte, avec un lien, et la liste complète en bas de page.
//
// `visuals` : cartes ("map") et graphiques ("chart") interactifs, voir viz.js.
// `verify` (facultatif) : actu qui n'a qu'une source, ou une source fragile : la raison, affichée sous le titre
//         avec « Source à vérifier » (badge ⚠️ dans les listes).
// `image` (facultatif) : { src, alt, credit } pour une photo en tête d'article.
// `geo` : lieux [longitude, latitude] où l'actu apparaît sur le globe de l'accueil ;
//         `label` (facultatif) = nom court affiché sur le globe, `name` = nom complet dans la fiche.
// `routes` (facultatif) : arcs tracés sur le globe depuis le premier lieu.
// `region` (facultatif) : Afrique, Asie, Europe, Amériques, Moyen-Orient (filtre de la page Actu).

window.GEOCO = window.GEOCO || {};
window.GEOCO.news = [
  {
    "id": "2026-11-01-iran-ormuz-lettre-vance-plan-deux-jours",
    "date": "2026-11-01",
    "region": "Moyen-Orient",
    "theme": "geo",
    "impact": "monde",
    "zones": [
      "Europe",
      "Asie",
      "Amérique du Nord"
    ],
    "geo": [
      {
        "name": "Doha, Qatar",
        "label": "Qatar",
        "coords": [
          51.53,
          25.29
        ]
      },
      {
        "name": "Détroit d'Ormuz, Iran",
        "label": "Ormuz",
        "coords": [
          56.5,
          26.6
        ]
      }
    ],
    "title": "Ormuz : Téhéran propose de rouvrir le détroit en deux jours, mais seulement si Washington cède sur ses conditions",
    "summary": "Après une lettre du vice-président américain JD Vance, l'Iran envoie une délégation à Doha et propose, via le Qatar, de rouvrir Ormuz en deux jours. Mais son chef de la sécurité répète que rien ne bougera, ni détroit ni discussion nucléaire, tant que ses conditions ne sont pas acceptées [1][2].",
    "points": [
      "Le 31 octobre, Mohsen Rezaei, responsable de la sécurité iranienne, a dit qu'il n'y aurait ni pourparlers sur le nucléaire ni réouverture du détroit d'Ormuz tant que les États-Unis n'accepteraient pas les demandes de l'Iran [1].",
      "Il a confirmé avoir lu une lettre de JD Vance, sans y répondre : « le ton de la lettre a complètement changé », a-t-il dit, la qualifiant de « très bon signe » [1][4].",
      "Le chef de la diplomatie, Abbas Araghchi, dit que l'Iran et des médiateurs du Qatar ont conçu un plan pour rouvrir Ormuz en deux jours, à condition que Washington remplisse les conditions de Téhéran. C'est une version raccourcie du plan en sept jours qu'il avait présenté à l'ONU le 25 septembre [2][6].",
      "Donald Trump avait rejeté ce premier plan fin septembre [2]. Cette fois, le secrétaire d'État Marco Rubio dit que le président « n'a pas encore décidé » de reprendre ou non les frappes contre l'Iran [3].",
      "Les camps ne demandent pas la même chose d'abord : Washington veut des concessions nucléaires avant de reprendre les discussions, Téhéran veut que le blocus soit levé, que ses fonds gelés soient débloqués et que ses ventes de pétrole soient autorisées [5].",
      "Une délégation iranienne est à Doha. Une délégation américaine serait attendue, mais ni Washington, ni Téhéran, ni Doha ne l'ont confirmé [5][6]. Selon le New York Times, des pourparlers pourraient s'ouvrir la semaine prochaine au Qatar ou en Turquie [4].",
      "Sur l'eau, le commandement américain CENTCOM dit avoir détourné 144 navires dans le cadre du blocus, et le trafic dans le détroit reste environ 70 % sous son niveau d'avant-guerre, selon l'organisme britannique UKMTO [3]."
    ],
    "why": [
      "Ce qu'il faut retenir : pour la première fois depuis des semaines, les deux camps parlent d'un contact, mais aucun ne bouge sur ses exigences, donc le détroit reste fermé [1][5].",
      "Ormuz est le passage d'une grande part du pétrole du monde. Tant qu'il est fermé et que Washington bloque aussi les navires, avec un trafic encore environ 70 % sous son niveau d'avant-guerre, le transport du brut reste perturbé [3]. Une réouverture « en deux jours » serait un choc de détente pour les prix, mais elle dépend d'un accord que personne n'a encore signé.",
      "Les déclarations se contredisent : Araghchi dit n'avoir aucun projet de rencontre avec des responsables américains, tout en parlant de l'outreach américain comme d'un « pas positif » [6]. Trump présente la lettre de Vance comme une aide pour que l'Iran obtienne des fournitures médicales, pas comme une reprise des négociations de paix [4]."
    ],
    "forMe": "Si Ormuz rouvre, l'essence et le gaz peuvent baisser en Europe en quelques semaines ; s'il reste fermé ou si les frappes reprennent, les prix du carburant et du chauffage restent hauts cet hiver.",
    "next": [
      {
        "when": "Semaine du 2 novembre",
        "what": "Des pourparlers pourraient s'ouvrir au Qatar ou en Turquie si Téhéran accepte, selon le New York Times [4]."
      }
    ],
    "figures": [
      {
        "value": "2 jours",
        "label": "délai de réouverture d'Ormuz proposé par l'Iran, sous conditions",
        "src": 2
      },
      {
        "value": "144",
        "label": "navires détournés par le blocus américain, selon CENTCOM",
        "src": 3
      },
      {
        "value": "70 %",
        "label": "recul du trafic dans le détroit par rapport à l'avant-guerre (UKMTO)",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [
      "routes-maritimes",
      "sanctions"
    ],
    "sources": [
      {
        "short": "Times of Israel",
        "name": "The Times of Israel, « Oct. 31: Senior Iranian official says no nuclear talks or reopening of Hormuz until US accepts Iran's demands » (31 oct. 2026)",
        "url": "https://www.timesofisrael.com/liveblog-october-31-2026/"
      },
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « Iran war live: Araghchi says talks under way on 2-day plan to reopen Hormuz » (1er nov. 2026)",
        "url": "https://www.aljazeera.com/news/liveblog/2026/11/1/iran-war-live-araghchi-says-talks-under-way-on-2-day-plan-to-reopen-hormuz"
      },
      {
        "short": "Fox News",
        "name": "Fox News, « No choice made yet by Trump on resuming military action against Iran, Rubio says » (31 oct. 2026)",
        "url": "https://foxnews.com/live-news/us-iran-war-trump-israel-strait-hormuz-10-31-26"
      },
      {
        "short": "China Daily",
        "name": "China Daily, « Iran has not responded to Vance's letter yet: top security official » (1er nov. 2026)",
        "url": "https://global.chinadaily.com.cn/a/202611/01/WS6ae67194e4b06d4aa0566436.html"
      },
      {
        "short": "Iran International",
        "name": "Iran International, « Iran says US tone shifts but demands still block talks » (31 oct. 2026)",
        "url": "https://www.iranintl.com/en/202610317760"
      },
      {
        "short": "Yahoo News",
        "name": "Yahoo News, « Iran FM says US outreach a 'positive step' as delegation in Qatar for talks » (oct. 2026)",
        "url": "https://www.yahoo.com/news/politics/articles/iran-fm-says-us-outreach-143137339.html"
      }
    ]
  },
  {
    "id": "2026-11-01-etats-unis-midterms-democrates-favoris",
    "date": "2026-11-01",
    "region": "Amériques",
    "theme": "geo",
    "zones": [
      "Amérique du Nord",
      "Europe",
      "Asie",
      "Amérique latine"
    ],
    "impact": "monde",
    "geo": [
      {
        "name": "Washington, États-Unis",
        "label": "États-Unis",
        "coords": [
          -77.04,
          38.91
        ]
      }
    ],
    "title": "Midterms américaines à deux jours : les démocrates favoris pour la Chambre, le Sénat se joue à quelques points",
    "summary": "Les Américains votent le 3 novembre pour renouveler la Chambre et un tiers du Sénat. Les démocrates mènent dans les sondages et plus de 43 millions de bulletins sont déjà déposés. Le sort des droits de douane et de la guerre en Iran peut en dépendre [1][3][4].",
    "points": [
      "Selon le prévisionniste Decision Desk HQ, cité par The Hill, les démocrates ont 80 % de chances de reprendre la Chambre des représentants et 57 % de chances de gagner le Sénat [2].",
      "La moyenne des sondages de RealClearPolling donne 8,2 points d'avance aux démocrates dans l'intention de vote nationale pour le Congrès [1]. Dans le sondage Reuters/Ipsos publié le 26 octobre, ils mènent 47 % contre 36 % chez les électeurs inscrits [3].",
      "La cote de Donald Trump est à 32 % dans ce même sondage, un point au-dessus du plus bas de son second mandat (31 %) mesuré la semaine précédente [3]. Les démocrates sont aussi jugés meilleurs sur l'économie, 37 % contre 33 % : avant la guerre en Iran, c'étaient les républicains qui avaient cet avantage [3].",
      "Au Sénat, les républicains détiennent 53 sièges sur 100 : les démocrates doivent en gagner net quatre. Les courses les plus serrées : Texas (James Talarico contre Ken Paxton, environ 1,4 point d'avance pour Talarico, mais un sondage Quantus donne Paxton devant d'un point), Ohio, Caroline du Nord, Maine, Iowa [5][6][7].",
      "Hakeem Jeffries, chef des démocrates à la Chambre, fait de l'annulation des droits de douane de Trump et de la fin de la guerre en Iran deux piliers de son programme ; il a aussi chargé des élus de préparer des enquêtes sur Trump et son entourage, et dit que la destitution n'est « ni sur la table ni hors de la table » [8][9]."
    ],
    "why": [
      "Ce scrutin décide si Donald Trump garde les mains libres pour la seconde moitié de son mandat. Si les démocrates prennent la Chambre, plus aucune loi ne passe sans eux, et ils ont annoncé vouloir voter contre les droits de douane et contre la guerre en Iran [8][9].",
      "Le contexte est celui d'une cote de popularité très basse, liée par les analystes à l'inflation qui a grimpé depuis que Trump a ordonné des frappes sur l'Iran [3]. C'est pour cela que l'économie, et pas seulement la politique, est au coeur de la campagne : les démocrates ont créé cinq groupes de travail sur le coût de la vie (logement, santé, garde d'enfants, courses, essence et énergie) [9].",
      "Il faut rester prudent : un sondage n'est pas un résultat, les modèles divergent pour le Sénat, et un vote anticipé record (plus de 43 millions de bulletins déjà déposés, près de 10 millions de plus qu'en 2022) ne dit pas pour qui les gens ont voté [1][2][5]."
    ],
    "forMe": "Si tu es en Europe, l'issue compte pour tes factures : les droits de douane américains pèsent sur les exportations françaises et européennes, et la guerre en Iran pousse le prix du pétrole et de l'essence. Un Congrès qui bloque ou affaiblit Trump peut changer le rythme de ces décisions, sans les annuler automatiquement.",
    "next": [
      {
        "when": "3 novembre",
        "what": "Les bureaux de vote ferment à partir de 18 h (heure de la côte Est) dans certains États ; les premiers résultats tomberont dans la soirée [2]."
      }
    ],
    "figures": [
      {
        "value": "43 millions",
        "label": "bulletins déjà déposés avant le jour du vote, près de 10 millions de plus qu'en 2022",
        "src": 1
      },
      {
        "value": "32 %",
        "label": "cote d'approbation de Trump (Reuters/Ipsos, 26 oct.)",
        "src": 3
      },
      {
        "value": "80 %",
        "label": "chances démocrates de reprendre la Chambre (Decision Desk HQ)",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [
      "droits-de-douane"
    ],
    "sources": [
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « US midterms: 3 days to go, what latest polls say as early voting surges » (31 oct. 2026)",
        "url": "https://www.aljazeera.com/news/2026/10/31/us-midterms-3-days-to-go-what-latest-polls-say-as-early-voting-surges"
      },
      {
        "short": "The Hill",
        "name": "The Hill, « 2026 midterm elections: When polls close, when results are expected » (oct. 2026)",
        "url": "https://thehill.com/homenews/campaign/6175621-midterm-elections-polls-close-results/"
      },
      {
        "short": "Reuters (Arab News)",
        "name": "Reuters/Ipsos via Arab News, « Trump approval rises from record low to 32% ahead of midterm election » (26 oct. 2026)",
        "url": "https://www.arabnews.com/world/trump-approval-rises-from-record-low-to-32-percent-ahead-of-midterm-election-reuters-ipsos-poll-finds-3008428"
      },
      {
        "short": "PBS",
        "name": "PBS NewsHour, « Early voting jumps across Senate battlegrounds as millions more Americans vote ahead of Election Day » (oct. 2026)",
        "url": "https://www.pbs.org/newshour/politics/millions-more-americans-vote-ahead-of-election-day-as-early-voting-jumps-across-senate-battlegrounds"
      },
      {
        "short": "Yahoo News",
        "name": "Yahoo News, « The 2026 midterms are just 3 days away. Which party has a better chance of winning? » (oct. 2026)",
        "url": "https://www.yahoo.com/news/politics/article/the-2026-midterms-are-next-week-which-party-has-a-better-chance-of-winning-heres-what-the-latest-polls-say-155319308.html"
      },
      {
        "short": "Al Jazeera (Sénat)",
        "name": "Al Jazeera, « Can Democrats win the US Senate? 10 key midterm races to watch » (31 oct. 2026)",
        "url": "https://www.aljazeera.com/news/2026/10/31/can-democrats-win-the-us-senate-10-key-midterm-races-to-watch"
      },
      {
        "short": "Newsweek",
        "name": "Newsweek, « James Talarico vs. Ken Paxton: What Texas Polls Show One Week Before Midterm » (oct. 2026)",
        "url": "https://www.newsweek.com/james-talarico-vs-ken-paxton-what-texas-polls-show-one-week-before-midterm-12621879"
      },
      {
        "short": "PBS (programme)",
        "name": "PBS NewsHour, « Here's what's on House Democrats' agenda if they sweep to power in midterm elections » (oct. 2026)",
        "url": "https://www.pbs.org/newshour/politics/heres-whats-on-house-democrats-agenda-if-they-sweep-to-power-in-midterm-elections"
      },
      {
        "short": "Christian Science Monitor",
        "name": "The Christian Science Monitor, « Democrats plan investigations, affordability efforts if they reclaim Congress » (15 oct. 2026)",
        "url": "https://www.csmonitor.com/USA/Politics/2026/1015/congress-midterms-democrats-jeffries"
      }
    ]
  },
  {
    "id": "2026-11-01-france-lyceens-troisieme-week-end-greve-5-novembre",
    "date": "2026-11-01",
    "region": "Europe",
    "theme": "mix",
    "zones": [
      "Europe"
    ],
    "geo": [
      {
        "name": "Paris, France",
        "label": "France",
        "coords": [
          2.35,
          48.86
        ]
      }
    ],
    "title": "Parti des lycées, le mouvement de la jeunesse tient en France un troisième samedi, avec 70 000 policiers et une grève générale le 5 novembre",
    "summary": "Le 31 octobre, 320 000 personnes selon le gouvernement ont défilé en France pour un troisième week-end de suite, derrière des lycéens qui dénoncent profs absents et bâtiments abîmés. Plus de 560 arrestations ont eu lieu ; les syndicats appellent à la grève le 5 novembre [1][2][4].",
    "points": [
      "Le mouvement est parti des lycéens, qui protestent contre des bâtiments négligés, des professeurs manquants et un système d'admission à l'université jugé injuste pour les milieux modestes [2]. La FCPE (fédération de parents d'élèves) date son démarrage du 21 septembre [7].",
      "Les cortèges rassemblent de moins en moins : 550 000 personnes le 17 octobre, 410 000 le 24, 320 000 le 31 selon le gouvernement, dont 70 000 à Paris ; l'intersyndicale étudiante en revendique 500 000 [1][4].",
      "Le ministre de l'Intérieur Laurent Nuñez a mobilisé environ 70 000 policiers et gendarmes, craignant un « risque très élevé » de désordres à la nuit tombée, comme lors des pillages d'il y a deux semaines [2][9]. Le cortège parisien a été renvoyé en bordure de la ville, jusqu'à la porte de Charenton, où des bouteilles et des feux d'artifice ont visé la police, qui a répondu par des grenades et du gaz lacrymogène [2][4].",
      "Bilan provisoire du ministère : 565 interpellations à 21 h, après 40 000 contrôles en amont. Nuñez juge que « les cortèges revendicatifs se sont bien passés » mais dénonce l'engagement des casseurs [4].",
      "Le 5 novembre, la CGT, la CFDT, FO, l'UNSA, la FSU, Solidaires et la FA appellent à une grève interprofessionnelle ; l'enseignement privé sous contrat, plus de 2 millions d'élèves, la rejoint pour la première fois [8][10].",
      "Hors de France, l'initiative « Gen Z regelt » a rassemblé des jeunes dans plus de 30 villes allemandes, contre un retour du service militaire, et des milliers de personnes ont défilé à Lisbonne pour le logement [1]."
    ],
    "why": [
      "À retenir : ce n'est plus une simple colère lycéenne mais un mouvement social à plusieurs étages, qui relie école, coût de la vie et budget de l'État [1][6]. Les organisations lycéennes réclament le remplacement des professeurs absents et des moyens massifs ; les syndicats enseignants demandent l'annulation des suppressions de postes prévues au budget 2027 [6].",
      "L'exécutif tente de séparer deux sujets. Emmanuel Macron a reconnu à Marseille un manque d'anticipation le 17 octobre et des effectifs de police insuffisants, et annoncé des parcours de manifestation hors des centres-villes [5]. Le gouvernement veut distinguer la réponse aux revendications de celle aux violences [6].",
      "La méthode pèse aussi : après un adolescent de 14 ans à la mâchoire brisée par une grenade à Lens, Nuñez a annoncé que ce modèle ne serait plus utilisé contre des lycéens [10].",
      "Le tournant se jouera le 5 novembre : si la grève interprofessionnelle mobilise, le budget 2027, déjà sans majorité à l'Assemblée, devra répondre à une demande de moyens pour l'école et les salaires que l'intersyndicale a mise sur la table [8]."
    ],
    "forMe": "Le 5 novembre, attends-toi à des écoles, des transports et des services publics perturbés. Certaines préfectures limitent les cortèges en centre-ville : vérifie les arrêtés avant de te déplacer.",
    "figures": [
      {
        "value": "320 000",
        "label": "manifestants le 31 octobre selon le gouvernement (550 000 le 17 octobre)",
        "src": 1
      },
      {
        "value": "565",
        "label": "interpellations à 21 h le 31 octobre",
        "src": 4
      },
      {
        "value": "70 000",
        "label": "policiers et gendarmes déployés",
        "src": 9
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "PBS (AP)",
        "name": "PBS NewsHour (AP), « A third weekend of protests in France as youth-led rallies sweep Europe » (31 oct. 2026)",
        "url": "https://www.pbs.org/newshour/world/a-third-weekend-of-protests-in-france-as-youth-led-rallies-sweep-europe"
      },
      {
        "short": "NPR",
        "name": "NPR, « France seethes again as youth-led protests sweep Europe » (31 oct. 2026)",
        "url": "https://www.npr.org/2026/10/31/g-s1-151121/france-seethes-again-as-youth-led-protests-sweep-europe"
      },
      {
        "short": "CBC",
        "name": "CBC News, « Youth-led protests sweep across France, Europe for a 3rd weekend » (oct. 2026)",
        "url": "https://www.cbc.ca/news/world/france-student-protests-europe-9.7404105"
      },
      {
        "short": "BFM TV",
        "name": "BFM TV, « 422 interpellations, des cortèges revendicatifs calmes... Laurent Nuñez tire son bilan des manifestations du 31 octobre » (31 oct. 2026)",
        "url": "https://www.shango.media/bfm-tv-on-va-rester-vigilants-422-interpellations-des-corteges-revendicatifs-calmes-laurent-nunez-tire-son-bilan-des-manifestations-du-31-octobre-12005641"
      },
      {
        "short": "franceinfo",
        "name": "franceinfo, « Emmanuel Macron s'attend à une journée à risques samedi 31 octobre » (26 oct. 2026)",
        "url": "https://www.franceinfo.fr/societe/mobilisation-du-17-octobre/emmanuel-macron-s-attend-a-une-journee-a-risques-samedi-31-octobre-et-annonce-que-les-prochains-traces-des-manifestations-autorisees-se-situeront-hors-des-centres-villes_8254276.html"
      },
      {
        "short": "Le Nouveau Président",
        "name": "Le Nouveau Président, « Mobilisation lycéenne d'octobre 2026 : origines, revendications, bilan » (oct. 2026)",
        "url": "https://www.lenouveaupresident.com/journal/article/mobilisation-lyceens-octobre-2026"
      },
      {
        "short": "FCPE",
        "name": "FCPE, « Les revendications de la jeunesse doivent être entendues » (oct. 2026)",
        "url": "https://www.fcpe.asso.fr/actualite/les-revendications-de-la-jeunesse-doivent-etre-entendues"
      },
      {
        "short": "Écho des Tribunes",
        "name": "L'Écho des Tribunes, « Grève du 5 novembre : sept rassemblements annoncés dans l'Hérault » (oct. 2026)",
        "url": "https://echo-des-tribunes.com/herault-tribune/articles/greve-du-5-novembre-sept-rassemblements-annonces-dans-lherault-dont-un-a-montpellier"
      },
      {
        "short": "Reuters",
        "name": "Reuters (via Investing.com), « France braces for fresh unrest, government vows tough response » (oct. 2026)",
        "url": "https://www.investing.com/news/economy-news/france-braces-for-fresh-unrest-government-vows-tough-response-4989212"
      },
      {
        "short": "NBC News",
        "name": "NBC News, « Gruesome injuries throw spotlight on France's policing of high school protests » (oct. 2026)",
        "url": "https://www.nbcnews.com/world/europe/injuries-spotlight-frances-policing-high-school-protest-rcna602242"
      },
      {
        "short": "Journal de l'économie",
        "name": "Journal de l'économie, « Grève du 5 novembre : pourquoi l'enseignement privé bascule » (oct. 2026)",
        "url": "https://www.journaldeleconomie.fr/greve-du-5-novembre-enseignement-prive/"
      }
    ],
    "next": [
      {
        "when": "3 novembre",
        "what": "L'Assemblée vote la partie recettes du budget 2027, sur fond de colère des enseignants contre les suppressions de postes [6]."
      },
      {
        "when": "5 novembre",
        "what": "Journée de grève et de manifestations de l'intersyndicale, avec l'enseignement privé sous contrat pour la première fois [8][10]."
      }
    ]
  },
  {
    "id": "2026-11-01-france-fitch-perspective-negative-budget-2027",
    "date": "2026-11-01",
    "region": "Europe",
    "theme": "eco",
    "zones": [
      "Europe"
    ],
    "geo": [
      {
        "name": "Paris, France",
        "label": "France",
        "coords": [
          2.35,
          48.86
        ]
      }
    ],
    "title": "Fitch place la dette de la France sous surveillance négative, à quelques jours du vote clé sur le budget 2027",
    "summary": "Le 30 octobre, l'agence Fitch a gardé la note A+ de la France mais fait passer sa perspective à négative, après un trimestre de recul du PIB. Le ministre Roland Lescure y voit la preuve qu'il faut un budget avant fin d'année ; le vote sur les recettes a lieu le 3 novembre [1][2].",
    "points": [
      "Fitch a confirmé la note A+ et placé la perspective en négatif, lors d'un examen non programmé, en citant une croissance plus faible, des coûts d'emprunt plus hauts, un déficit plus large et un paysage politique très fragmenté [2].",
      "L'agence voit la dette publique à environ 124 % du PIB en 2028, contre 115,7 % en 2025, et estime qu'il faudrait environ 3,5 % du PIB d'ajustements cumulés pour la stabiliser, contre 3 % en août [2]. Elle prévoit une croissance de 0,5 % en 2026 et 0,9 % en 2027 [2].",
      "Fitch annonce un nouvel examen au plus tard fin février 2027 ; Moody's a laissé la France à Aa3 avec perspective négative quelques jours plus tôt, et S&P rendra son verdict le 27 novembre [2].",
      "Le Premier ministre Sébastien Lecornu vise un déficit de 5 % du PIB en 2027, contre 5,4 % attendus en 2026, et affirme qu'il approcherait 6,5 % sans mesures ; les économies annoncées vont de 45 à 54 milliards d'euros selon les décomptes [4][5].",
      "En commission, les députés ont rejeté le volet recettes dès le 9 octobre, seuls les élus du camp présidentiel votant pour [3]. Le 13 octobre, la motion de rejet des socialistes a échoué, le Rassemblement national refusant de la voter [4].",
      "Le vote sur les recettes, prévu le 20 octobre, a été reporté au 3 novembre faute d'avoir fini d'examiner plus de 2 800 amendements ; si ce volet est rejeté, tout le budget tombe en première lecture [6]."
    ],
    "why": [
      "À retenir : une perspective négative ne change pas la note mais signale qu'une baisse est possible [2]. Fitch cite aussi des coûts d'emprunt plus hauts : plus la dette coûte cher, plus les intérêts pèsent sur les budgets suivants [2].",
      "Le budget se joue sans majorité. Le ministre des Relations avec le Parlement, Laurent Panifous, jugeait fin septembre qu'un vote serait « très difficile » [3]. Le gouvernement promet de ne pas utiliser le 49.3 ni les ordonnances sans obstruction ; les ordonnances, jamais employées pour un budget, ne seraient possibles qu'après le 17 décembre [4][6].",
      "Roland Lescure parle d'une économie « à l'arrêt » et affirme que la France « ira dans le mur » sans budget [10]. Un média rapporte que Fitch table sur un déficit de 5,5 % avec le projet actuel, car l'activité plus faible et les concessions au Parlement diluent les économies [2].",
      "Le calendrier est serré : l'Assemblée doit finir sa première lecture le 17 novembre, le Parlement le 17 décembre [6]."
    ],
    "forMe": "Une dette jugée plus risquée coûte plus cher à l'État, et ces intérêts se paient avec tes impôts ou par des économies sur les services publics. Rien ne change du jour au lendemain dans ton quotidien : surveille le vote du 3 novembre et l'avis de S&P le 27.",
    "figures": [
      {
        "value": "A+",
        "label": "note de la France, perspective passée à négative par Fitch",
        "src": 2
      },
      {
        "value": "124 %",
        "label": "dette publique prévue en 2028 par Fitch (115,7 % en 2025)",
        "src": 2
      },
      {
        "value": "5 %",
        "label": "déficit visé en 2027, contre 5,4 % attendus en 2026",
        "src": 4
      }
    ],
    "culture": [],
    "dossiers": [
      "inflation-taux"
    ],
    "sources": [
      {
        "short": "Euronews",
        "name": "Euronews, « France pushes 'responsible' 2027 budget as Fitch cuts debt outlook to 'negative' » (31 oct. 2026)",
        "url": "https://www.euronews.com/2026/10/31/france-pushes-responsible-2027-budget-as-fitch-cuts-debt-outlook-to-negative"
      },
      {
        "short": "Yahoo Finance",
        "name": "Yahoo Finance, « Fitch cuts France outlook to negative on ballooning debt and deficit risks » (30 oct. 2026)",
        "url": "https://finance.yahoo.com/economy/policy/articles/fitch-cuts-france-outlook-negative-220454290.html"
      },
      {
        "short": "LCP",
        "name": "LCP, « Budget 2027 : le gouvernement sur un fil à la veille de l'ouverture des débats à l'Assemblée » (12 oct. 2026)",
        "url": "https://lcp.fr/actualites/budget-2027-le-gouvernement-sur-un-fil-a-la-veille-de-l-ouverture-des-debats-a-l"
      },
      {
        "short": "Boursorama",
        "name": "Boursorama, « Budget 2027 : Lecornu et le PS se confrontent, le RN veut aller au débat » (13 oct. 2026)",
        "url": "https://www.boursorama.com/actualite-economique/actualites/budget-2027-lecornu-et-le-ps-se-confrontent-le-rn-veut-aller-au-debat-3afc929e37c6df00fab170696d0b0e8d"
      },
      {
        "short": "France 24",
        "name": "France 24, « Budget 2027 : Sébastien Lecornu veut faire 54 milliards d'euros d'économies » (17 sept. 2026)",
        "url": "https://www.france24.com/fr/france/20260917-lecornu-pr%C3%A9sente-un-budget-offensif-avec-54-milliards-d-%C3%A9conomies"
      },
      {
        "short": "NosParlementaires",
        "name": "NosParlementaires, « Date du vote du budget 2027 : le 3 novembre, pas le 20 octobre » (oct. 2026)",
        "url": "https://nosparlementaires.fr/actualites/budget-2027-calendrier-assemblee-cinq-semaines"
      },
      {
        "short": "LCP",
        "name": "LCP, « Budget 2027 : les députés durcissent l'exit tax pour revenir à sa version originelle » (30 oct. 2026)",
        "url": "https://lcp.fr/actualites/budget-2027-les-deputes-durcissent-l-exit-tax-pour-revenir-a-sa-version-originelle"
      },
      {
        "short": "Selectra",
        "name": "Selectra, « Budget 2027 : les avantages fiscaux votés par les députés ne sont pas acquis, premier verdict le 3 novembre » (oct. 2026)",
        "url": "https://selectra.info/finance/actualites/marche/budget-2027-niches-fiscales-deputes-votees"
      },
      {
        "short": "Eurasia Business News",
        "name": "Eurasia Business News, « French Economy Contracts 0.1% in Q3 2026 » (31 oct. 2026)",
        "url": "https://eurasiabusinessnews.com/2026/10/31/french-economy-contracts-0-1-in-q3-2026/"
      },
      {
        "short": "Yahoo Finance",
        "name": "Yahoo Finance, « French economy 'at a standstill' as budget uncertainty raises recession risk » (oct. 2026)",
        "url": "https://finance.yahoo.com/economy/policy/articles/french-economy-stalls-budget-deadlock-175518010.html"
      }
    ],
    "next": [
      {
        "when": "3 novembre",
        "what": "Vote des députés sur la partie recettes du budget 2027 [6]."
      },
      {
        "when": "17 novembre",
        "what": "Fin du délai de l'Assemblée pour la première lecture [6]."
      },
      {
        "when": "27 novembre",
        "what": "S&P Global examine la note de la France (A+, perspective stable) [2]."
      }
    ]
  },
  {
    "id": "2026-11-01-italie-greve-generale-riarmement-colisee",
    "date": "2026-11-01",
    "region": "Europe",
    "theme": "mix",
    "zones": [
      "Europe"
    ],
    "geo": [
      {
        "name": "Rome, Italie",
        "label": "Italie",
        "coords": [
          12.5,
          41.9
        ]
      }
    ],
    "title": "Italie : grève générale contre la vie chère et le réarmement, heurts près du Colisée et au moins un million de manifestants selon les syndicats",
    "summary": "Le 30 octobre, le syndicat USB a paralysé une partie de l'Italie pendant 24 heures, dans plus de 40 villes, contre la vie chère et les dépenses militaires. Des heurts ont eu lieu à Rome et à Turin, le gouvernement Meloni défend son décret sécurité [1][2][7].",
    "points": [
      "La grève générale de 24 heures, appelée par le syndicat de base USB (Unione Sindacale di Base), a touché plus de 40 villes. C'est la plus grande journée de protestation du pays depuis l'automne 2025 [1].",
      "Les chiffres divergent : l'USB a d'abord avancé plus de 1,5 million de participants, puis « au moins un million » en admettant une estimation difficile ; les organisateurs comptent 100 000 manifestants à Rome [6][4].",
      "Le syndicat demande de déplacer l'argent des dépenses de défense vers la santé, le logement et les services sociaux, et réclame un « décret de sécurité sociale » à la place des décrets sécurité du gouvernement [7].",
      "À Rome, environ 300 personnes se sont détachées du cortège, ont dressé des barricades de poubelles via Claudia près du Colisée et lancé des objets sur les policiers ; huit personnes ont été interpellées, et la place Montecitorio, près du Parlement, et la place Colonna, devant le bureau du Premier ministre, ont été fermées [1][4].",
      "À Turin, place Castello, des manifestants ont lancé oeufs, bouteilles et peinture rouge ; la police a chargé avec des lances à eau [3].",
      "Après les violences des 17 et 18 octobre à Milan, Turin et Bologne, le gouvernement a adopté un décret exceptionnel, qui permet des détentions préventives, et déployé 500 militaires en appui de la police [3]. Bloquer une route avec son corps est désormais un délit [6].",
      "Giorgia Meloni a déclaré que « le vandalisme et le vol ne sont pas une protestation, c'est de la criminalité » [3]. Le gouvernement avait aussi proposé 175 millions d'euros d'aide aux routiers, agriculteurs et pêcheurs [3]."
    ],
    "why": [
      "À retenir : la colère italienne ressemble à celle de la France, avec le même mélange de prix qui montent et de budgets publics qui se déplacent vers l'armée. Les syndicats lient explicitement le coût de la vie à l'effort de réarmement européen [2][7].",
      "Les routiers, taxis et agriculteurs, déjà mobilisés ces dernières semaines, ont rejoint le mouvement à cause du prix des carburants et des dépenses de défense, ce qui élargit la base de la protestation au-delà des syndicats [3].",
      "Le gouvernement choisit la fermeté : le vice-Premier ministre Matteo Salvini renvoie au décret sécurité, qui prévoit la prison pour les dégâts en manifestation et fait payer les parents [4].",
      "La suite dépend de la rue : l'USB a promis de ne pas s'arrêter là, sans annoncer de date [7]."
    ],
    "forMe": "Si tu voyages en Italie, des grèves de transports (bus, trams, trains) peuvent toucher les trajets : consulte le calendrier officiel des grèves avant de réserver. Les tensions sociales y portent aussi sur le prix des carburants, un sujet qui concerne toute l'Europe.",
    "figures": [
      {
        "value": "40+",
        "label": "villes touchées par la grève du 30 octobre",
        "src": 1
      },
      {
        "value": "1 million",
        "label": "manifestants au moins selon l'USB (1,5 million d'abord annoncé)",
        "src": 6
      },
      {
        "value": "500",
        "label": "militaires déployés en appui de la police après les violences d'octobre",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Euronews",
        "name": "Euronews, « Protesters clash with police near Colosseum as Italy stages nationwide strike » (30 oct. 2026)",
        "url": "https://www.euronews.com/2026/10/30/italy-on-high-alert-as-thousands-take-the-streets-in-nationwide-strike"
      },
      {
        "short": "France 24",
        "name": "France 24, « 'Let's reclaim our future': Thousands protest across Italy over rising living costs » (30 oct. 2026)",
        "url": "https://www.france24.com/en/europe/20261030-let-s-reclaim-our-future-thousands-protest-across-italy-over-rising-living-costs"
      },
      {
        "short": "NBC News",
        "name": "NBC News, « Italy's PM deploys troops as nation faces widespread strikes and port blockades » (oct. 2026)",
        "url": "https://www.nbcnews.com/world/italy/italy-strikes-violent-protests-rome-colosseum-meloni-army-rome-milan-rcna606503"
      },
      {
        "short": "Il Fatto Quotidiano",
        "name": "Il Fatto Quotidiano, « Corteo Roma contro governo Meloni e riarmo » (30 oct. 2026)",
        "url": "https://ilfattoquotidiano.it/2026/10/30/sciopero-generale-corteo-roma-riarmo-notizie/8556002"
      },
      {
        "short": "Tgcom24",
        "name": "Tgcom24, « Sciopero generale 30 ottobre: un milione di persone in piazza » (30 oct. 2026)",
        "url": "https://www.tgcom24.mediaset.it/cronaca/sciopero-generale-30-ottobre-cortei-trasporti_118332719-202602k.shtml"
      },
      {
        "short": "Tuttonotizie",
        "name": "Tuttonotizie, « Sciopero del 30 ottobre, un milione in piazza secondo l'Usb: lo stesso sindacato ha diffuso anche 1,5 milioni » (oct. 2026)",
        "url": "https://tuttonotizie.eu/societa/sciopero-30-ottobre-usb-milione-piazza-stime-blocco-stradale/"
      },
      {
        "short": "USB",
        "name": "Unione Sindacale di Base, « 30 ottobre è sciopero generale » (oct. 2026)",
        "url": "https://www.usb.it/leggi-notizia/30-ottobre-e-sciopero-generale-0817.html"
      }
    ],
    "next": [
      {
        "when": "Pas de date annoncée",
        "what": "L'USB assure qu'elle ne s'arrêtera pas là [7]."
      }
    ]
  },
  {
    "id": "2026-11-01-chine-usines-recul-octobre",
    "date": "2026-11-01",
    "region": "Asie",
    "theme": "eco",
    "zones": [
      "Europe",
      "Amérique du Nord"
    ],
    "geo": [
      {
        "name": "Pékin, Chine",
        "label": "Chine",
        "coords": [
          116.4,
          39.9
        ]
      }
    ],
    "title": "Les usines chinoises passent en recul en octobre : les commandes à l'export et la consommation s'essoufflent",
    "summary": "L'indice officiel des directeurs d'achat de l'industrie chinoise tombe à 49,3 en octobre, contre 50,1 en septembre, sous le seuil de 50 qui sépare croissance et recul. Les commandes venues de l'étranger reculent, la consommation retombe, et seule la haute technologie tient bon [1][3].",
    "points": [
      "Le Bureau national des statistiques a publié le 31 octobre un indice PMI manufacturier (enquête auprès des directeurs d'achat : au-dessus de 50, l'activité progresse ; en dessous, elle recule) de 49,3, contre 50,1 en septembre et 49,8 en août. Un sondage Reuters attendait 50,0 [1][4].",
      "C'est la troisième contraction en quatre mois [4]. La production passe à 49,8 (1,9 point de moins qu'en septembre) et les nouvelles commandes à 49,4 (1,1 point de moins) [2].",
      "Les nouvelles commandes à l'export tombent à 48,7 contre 50,0 en septembre : les commandes de fin d'année des clients étrangers, passées en avance en septembre, ont fléchi [1].",
      "Huo Lihui, statisticienne du Bureau national des statistiques, évoque des achats avancés avant la fête nationale du début octobre et un environnement international compliqué [2]. L'indice de l'industrie des biens de consommation perd 1,9 point sur le mois [2].",
      "Les services et la construction suivent : l'indice non manufacturier passe à 49,7 contre 50,2, et l'indice composite à 49,7 contre 50,7 [3].",
      "La haute technologie résiste : 51,3 pour l'industrie high-tech et 50,6 pour la fabrication d'équipements, soit deux secteurs en expansion [3].",
      "Zhang Liqun, de la Fédération chinoise de la logistique et des achats, estime que « l'insuffisance de la demande accroît la pression à la baisse sur l'économie » [1]."
    ],
    "why": [
      "À retenir : la Chine ne peut plus compter seulement sur ses ventes à l'étranger pour tirer sa croissance, et sa demande intérieure reste faible [1][5].",
      "Les achats des ménages ont grimpé pendant la longue semaine de congés d'octobre, puis ont retombé juste après [1]. Les économistes jugent que les exportations risquent de ne pas suffire à compenser une consommation qui stagne depuis longtemps [5]. Zhang Zhiwei, de Pinpoint Asset Management, dit que si la demande extérieure faiblit en 2027, « la Chine aura besoin d'un soutien politique plus important pour relancer la demande intérieure » [1].",
      "Les relations commerciales avec Washington restent un facteur d'incertitude : la trêve entre les deux pays a été prolongée jusqu'au 10 janvier 2027, selon un porte-parole du ministère chinois du Commerce cité par un site spécialisé, mais la suspension chinoise des contrôles sur les terres rares n'a pas été confirmée noir sur blanc [6][7]."
    ],
    "forMe": "La Chine est le premier atelier du monde : si ses usines commandent moins, les prix de l'acier, du cuivre ou des composants peuvent se détendre, mais les exportateurs européens de machines et de produits de luxe vendent moins sur place.",
    "next": [
      {
        "when": "10 novembre",
        "what": "Date à laquelle devait s'achever la suspension par Pékin de ses contrôles à l'export de terres rares ; un responsable chinois la dit prolongée jusqu'au 10 janvier 2027 [6][7]."
      }
    ],
    "figures": [
      {
        "value": "49,3",
        "label": "indice PMI manufacturier de la Chine en octobre (50,1 en septembre)",
        "src": 1
      },
      {
        "value": "48,7",
        "label": "sous-indice des nouvelles commandes à l'export (50,0 en septembre)",
        "src": 1
      },
      {
        "value": "51,3",
        "label": "indice de la haute technologie, seul secteur nettement au-dessus de 50",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [
      "droits-de-douane"
    ],
    "sources": [
      {
        "short": "AP (US News)",
        "name": "AP via U.S. News, « China's Factory Activity Slips as New Export Orders Weaken » (31 oct. 2026)",
        "url": "https://www.usnews.com/news/business/articles/2026-10-31/chinas-factory-activity-slips-as-new-export-orders-weaken"
      },
      {
        "short": "China Daily",
        "name": "China Daily, « China's manufacturing PMI falls to 49.3 in October » (31 oct. 2026)",
        "url": "https://global.chinadaily.com.cn/a/202610/31/WS6ae561fbe4b06d4aa05663b0.html"
      },
      {
        "short": "Xinhua",
        "name": "Xinhua, « Economic Watch: China's manufacturing PMI softens, high-tech sector maintains expansion » (31 oct. 2026)",
        "url": "https://english.news.cn/20261031/d98d1f3fa92a45d6a26f234849bd4957/c.html"
      },
      {
        "short": "Asharq Al-Awsat",
        "name": "Asharq Al-Awsat, « China's Factory Activity Shrinks in October, Third Contraction in Four Months » (31 oct. 2026)",
        "url": "https://english.aawsat.com/business/5335876-china%E2%80%99s-factory-activity-shrinks-october-third-contraction-four-months"
      },
      {
        "short": "Manila Times",
        "name": "The Manila Times, « China's factory activity contracts in October » (1er nov. 2026)",
        "url": "https://www.manilatimes.net/2026/11/01/business/top-business/chinas-factory-activity-contracts-in-october/2458703"
      },
      {
        "short": "Rinnovabili",
        "name": "Rinnovabili, « Chinese rare earth exports: Trump-Xi truce extended to Jan 2027 » (2026)",
        "url": "https://www.rinnovabili.net/policy-and-affairs/environmental-policies/chinese-rare-earth-exports-trump-xi-truce/"
      },
      {
        "short": "FXStreet",
        "name": "FXStreet, « China's rare earth leverage has an expiration date: November 10 » (14 oct. 2026)",
        "url": "https://www.fxstreet.com/analysis/chinas-rare-earth-leverage-has-an-expiration-date-november-10-heres-what-beijing-is-deciding-202610141348"
      }
    ]
  },
  {
    "id": "2026-11-01-japon-banque-centrale-pause-decembre",
    "date": "2026-11-01",
    "region": "Asie",
    "theme": "eco",
    "zones": [
      "Asie"
    ],
    "geo": [
      {
        "name": "Tokyo, Japon",
        "label": "Japon",
        "coords": [
          139.69,
          35.69
        ]
      }
    ],
    "title": "Le Japon laisse ses taux à 1,25 % mais prépare une hausse en décembre : l'inflation de fond atteint enfin 2 %",
    "summary": "La Banque du Japon a maintenu son taux directeur à 1,25 % le 30 octobre, par 8 voix contre 1. Elle juge pour la première fois depuis 2013 que l'inflation de fond est en ligne avec son objectif de 2 % et laisse entendre qu'une hausse pourrait venir en décembre [1][3].",
    "points": [
      "Le conseil de la Banque du Japon (BoJ) a laissé son taux à 1,25 %, le plus haut niveau depuis 1995, comme prévu par les marchés [1].",
      "La décision passe par 8 voix contre 1 : le membre du conseil Hajime Takata voulait relever le taux à 1,5 %, estimant que l'inflation de fond avait atteint la cible de 2 % [3][4].",
      "La banque écrit que l'inflation de fond est « globalement cohérente » avec son objectif de 2 %, un constat qu'elle n'avait jamais fait depuis l'adoption de cet objectif en 2013 [1].",
      "Ses prévisions montent : l'inflation de l'exercice 2027 est relevée à 2,6 % contre 2,4 %, et l'indicateur hors produits frais et énergie à 2,7 % contre 2,6 % ; pour l'exercice 2028, elle reste à 2,0 % [1].",
      "Le gouverneur Kazuo Ueda dit que la banque n'attendra pas passivement une hausse de l'inflation et ajustera sa politique si nécessaire, tout en précisant qu'elle ne peut pas encore « crier victoire » [3].",
      "Un sondage Reuters cité par la presse financière donne 54 économistes sur 78 qui attendent un relèvement à 1,5 % d'ici la fin de l'année [3]. Après la décision, le dollar valait environ 157 yens [4][6].",
      "Les prix à la consommation ont dépassé 2 % en septembre pour la première fois cette année, mais les aides à l'énergie de la Première ministre Sanae Takaichi les tiennent plus bas qu'ils ne seraient [1][2]."
    ],
    "why": [
      "La première chose à retenir : après des décennies de prix quasi immobiles, le Japon est en train de sortir de la déflation, et sa banque centrale peut remonter ses taux sans freiner l'économie [1][2].",
      "Le gouverneur avait préparé le terrain : devant le Parlement le 19 octobre, il disait que l'inflation de fond était « tout près » de 2 % et que ne pas ajuster le taux pourrait faire monter les taux longs, par crainte d'un dérapage des prix [5]. Cette stratégie lui permet de ne pas surprendre les marchés.",
      "Pour la monnaie, la perspective d'une hausse soutient le yen face au dollar, mais l'effet reste mesuré tant que le taux japonais est bien plus bas que ceux des États-Unis [4][6]. Les aides à l'énergie du gouvernement compliquent la lecture de l'inflation : sans elles, elle serait plus haute [1]."
    ],
    "forMe": "Un yen plus fort rend les produits japonais plus chers, mais aussi les voyages au Japon moins avantageux pour les touristes français. Et quand le Japon, gros détenteur de dette étrangère, remonte ses taux, une partie de l'argent qu'il prêtait à l'étranger peut rentrer au pays.",
    "next": [
      {
        "when": "Décembre 2026",
        "what": "Prochaine réunion de la Banque du Japon, où une hausse à 1,5 % est attendue par la majorité des économistes sondés [3]."
      }
    ],
    "figures": [
      {
        "value": "1,25 %",
        "label": "taux directeur de la Banque du Japon, le plus haut depuis 1995",
        "src": 1
      },
      {
        "value": "8 contre 1",
        "label": "vote du conseil : Takata voulait déjà 1,5 %",
        "src": 3
      },
      {
        "value": "2,6 %",
        "label": "inflation prévue pour l'exercice 2027 (2,4 % auparavant)",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "inflation-taux"
    ],
    "sources": [
      {
        "short": "CNBC",
        "name": "CNBC, « BOJ holds rates as underlying inflation aligns with 2% target for first time since 2013 » (30 oct. 2026)",
        "url": "https://www.cnbc.com/2026/10/30/boj-inflation-target-rates.html"
      },
      {
        "short": "Japan Times",
        "name": "The Japan Times, « Bank of Japan holds rates steady even as inflation ticks up » (30 oct. 2026)",
        "url": "https://www.japantimes.co.jp/business/2026/10/30/economy/boj-rates-steady-inflation/"
      },
      {
        "short": "Seoul Economic Daily",
        "name": "Seoul Economic Daily, « Bank of Japan Holds Rate at 1.25 Percent as Underlying Inflation Meets 2% Goal » (30 oct. 2026)",
        "url": "https://en.sedaily.com/international/2026/10/30/bank-of-japan-holds-rate-at-125-percent-as-underlying"
      },
      {
        "short": "Yahoo Finance",
        "name": "Yahoo Finance, « Analysts react to BOJ decision to keep rates steady » (30 oct. 2026)",
        "url": "https://finance.yahoo.com/economy/policy/articles/instant-view-analysts-react-boj-032614967.html"
      },
      {
        "short": "Arab News Japan",
        "name": "Arab News Japan, « BOJ chief says underlying inflation 'quite close' to price goal » (oct. 2026)",
        "url": "https://www.arabnews.jp/en/business/boj-chief-says-underlying-inflation-quite-close-to-price-goal-3000915"
      },
      {
        "short": "FXStreet",
        "name": "FXStreet, « Yen gains as BoJ signals further hikes while AI fears weigh on markets » (30 oct. 2026)",
        "url": "https://www.fxstreet.com/analysis/yen-gains-as-boj-signals-further-hikes-while-ai-fears-weigh-on-markets-202610300852"
      }
    ]
  },
  {
    "id": "2026-11-01-sahara-occidental-mission-onu-sans-mandat",
    "date": "2026-11-01",
    "region": "Afrique",
    "theme": "geo",
    "zones": [
      "Europe"
    ],
    "geo": [
      {
        "name": "Rabat, Maroc",
        "label": "Maroc",
        "coords": [
          -6.84,
          34.02
        ]
      },
      {
        "name": "New York, États-Unis",
        "label": "ONU",
        "coords": [
          -73.97,
          40.75
        ]
      }
    ],
    "title": "Sahara occidental : le Conseil de sécurité ne renouvelle pas la mission de l'ONU, Russie et États-Unis s'étant bloqués",
    "summary": "Le 30 octobre, deux textes rivaux sur la mission de l'ONU au Sahara occidental (MINURSO) ont échoué au Conseil de sécurité : la Russie a opposé son veto au projet américain. Son mandat expirait le 31 octobre ; le Maroc y voit la fin du dossier à l'ONU [1][3].",
    "points": [
      "Le projet américain prolongeait la mission d'un an, jusqu'au 31 octobre 2027, et la rebaptisait « Mission des Nations unies pour le Sahara occidental » [10]. Il a recueilli 11 voix pour, 3 abstentions et un vote contre, celui de la Russie, qui vaut veto [3][10].",
      "Le texte russe, une simple reconduction d'un an, a obtenu 3 voix pour (dont, selon Morocco World News, la Somalie et l'Algérie, membre du Conseil), un contre et 11 abstentions ; les États-Unis ont voté contre. Aucun n'a été adopté [3][10].",
      "L'ambassadeur américain Mike Waltz a dit que la Russie avait bloqué « ce que 11 autres membres du Conseil soutenaient » [3]. Le délégué russe a répondu que le Conseil ne peut pas préjuger de questions de souveraineté [3]. Le Royaume-Uni a exprimé une « immense déception » [3].",
      "Washington a dit que, ce vote devant mener à une réduction de la mission, il fallait qu'elle soit « ordonnée et stable » [4].",
      "Le Cabinet royal marocain a qualifié l'absence de renouvellement d'« évolution significative », estimant que la question devait sortir de l'examen du Conseil, et que la présence de la MINURSO dans les provinces du Sud devait prendre fin dans les prochains jours [3][8].",
      "L'ambassadeur marocain à l'ONU, Omar Hilale, a affirmé que le rôle de l'Algérie au Conseil confirme son implication dans le conflit [7]. Le Front Polisario avait menacé de quitter le processus de paix si le projet américain passait sans changement [6].",
      "La résolution 2797, adoptée le 31 octobre 2025, avait soutenu le plan d'autonomie marocain et prolongé la mission jusqu'au 31 octobre 2026 [9]."
    ],
    "why": [
      "À retenir : la mission de l'ONU censée organiser un référendum au Sahara occidental n'a plus de mandat à la veille de son expiration, et aucune solution de remplacement n'est annoncée [1][2].",
      "Le conflit oppose le Maroc, qui contrôle l'essentiel du territoire et propose une autonomie sous sa souveraineté, au Front Polisario, soutenu par l'Algérie, qui réclame l'autodétermination. Moscou, proche d'Alger, ne voulait pas d'un texte qui consacre la solution marocaine ; Washington voulait l'inscrire dans le mandat [3][5].",
      "Le veto ne ferme pas le dossier pour autant : les États-Unis ou n'importe quel autre membre peuvent présenter un nouveau projet [1]. Les sources divergent sur la portée : Rabat y voit la clôture du dossier, des organisations comme Western Sahara Resource Watch (qui critique le projet américain) y voient un avenir incertain pour la mission [5]."
    ],
    "forMe": "Le Maroc et l'Algérie sont deux grands voisins de l'Europe pour le gaz, les phosphates et les migrations : leur rivalité autour du Sahara pèse sur la stabilité de la rive sud de la Méditerranée.",
    "next": [
      {
        "when": "Dans les jours à venir",
        "what": "Selon le Cabinet royal marocain, la présence de la MINURSO dans les provinces du Sud devrait prendre fin [8] ; un nouveau projet de résolution reste possible [1]."
      }
    ],
    "figures": [
      {
        "value": "11",
        "label": "voix pour le projet américain, bloqué par le veto russe (3 abstentions)",
        "src": 3
      },
      {
        "value": "31 oct.",
        "label": "date d'expiration du mandat de la MINURSO",
        "src": 1
      },
      {
        "value": "1 an",
        "label": "durée de prolongation prévue par les deux textes rivaux",
        "src": 10
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "The Star (Reuters)",
        "name": "The Star (dépêche Reuters), « Russia, US veto rival UN Western Sahara resolutions, leaving peacekeeping mission in limbo » (31 oct. 2026)",
        "url": "https://www.thestar.com.my/news/world/2026/10/31/russia-us-veto-rival-un-western-sahara-resolutions-leaving-peacekeeping-mission-in-limbo"
      },
      {
        "short": "ONU",
        "name": "ONU, communiqué SC/16498, « Following Contentious Debate, Security Council Fails to Adopt Resolution to Extend UN Mission for Referendum in Western Sahara » (30 oct. 2026)",
        "url": "https://press.un.org/en/2026/sc16498"
      },
      {
        "short": "Morocco World News",
        "name": "Morocco World News, « Russia Vetoes UN Security Council Resolution on Western Sahara » (30 oct. 2026)",
        "url": "https://www.moroccoworldnews.com/2026/10/344446/russia-vetoes-un-security-council-resolution-on-western-sahara/"
      },
      {
        "short": "Mission des États-Unis à l'ONU",
        "name": "Mission des États-Unis auprès de l'ONU, « Explanation of Vote on a U.S.-Drafted UN Security Council Resolution on MINURSO » (30 oct. 2026)",
        "url": "https://usun.usmission.gov/explanation-of-vote-on-a-u-s-drafted-un-security-council-resolution-on-the-united-nations-mission-for-the-referendum-in-western-sahara-minurso/"
      },
      {
        "short": "WSRW",
        "name": "Western Sahara Resource Watch, « US and Russia veto competing Western Sahara resolutions, leaving MINURSO's future uncertain » (31 oct. 2026)",
        "url": "https://wsrw.org/en/news/us-and-russia-veto-competing-western-sahara-resolutions-leaving-minursos-future-uncertain"
      },
      {
        "short": "Middle East Online",
        "name": "Middle East Online, « US plan to reshape UN mission prompts Polisario threat to withdraw » (oct. 2026)",
        "url": "https://middle-east-online.com/en/us-plan-reshape-un-mission-prompts-polisario-threat-withdraw"
      },
      {
        "short": "Barlamantoday",
        "name": "Barlamantoday, « Morocco's UN Envoy Says Algeria's Security Council Role Confirms Its Involvement in Sahara Dispute » (31 oct. 2026)",
        "url": "https://barlamantoday.com/2026/10/31/moroccos-un-envoy-says-algerias-security-council-role-confirms-its-involvement-in-sahara-dispute/"
      },
      {
        "short": "Atalayar",
        "name": "Atalayar, « The non-renewal of MINURSO's mandate marks the closure of the Western Sahara issue at the UN » (31 oct. 2026)",
        "url": "https://www.atalayar.com/en/articulo/politics/the-non-renewal-of-minurso-s-mandate-marks-the-closure-of-the-western-sahara-issue-at-the/20261031000543230191.html"
      },
      {
        "short": "Maroc.ma",
        "name": "Gouvernement du Maroc (maroc.ma), « Resolution 2797 is Unprecedented Political Verdict, Roadmap to Definitively Resolve Dispute over Moroccan Sahara »",
        "url": "https://maroc.ma/en/news/resolution-2797-unprecedented-political-verdict-roadmap-definitively-resolve-dispute-over-moroccan"
      },
      {
        "short": "Xinhua",
        "name": "Xinhua, « Security Council fails to renew mandate of UN mission for Western Sahara » (31 oct. 2026)",
        "url": "https://english.news.cn/20261031/914a4f2428a646faae1df871b8f8adbc/c.html"
      }
    ]
  },
  {
    "id": "2026-11-01-armenie-ratifie-tripp-corridor-trump",
    "date": "2026-11-01",
    "region": "Europe",
    "theme": "geo",
    "zones": [
      "Asie"
    ],
    "geo": [
      {
        "name": "Erevan, Arménie",
        "label": "Arménie",
        "coords": [
          44.51,
          40.18
        ]
      },
      {
        "name": "Bakou, Azerbaïdjan",
        "label": "Azerbaïdjan",
        "coords": [
          49.87,
          40.41
        ]
      }
    ],
    "title": "L'Arménie ratifie le corridor américain TRIPP, mais la paix avec l'Azerbaïdjan reste bloquée par sa Constitution",
    "summary": "Le 28 octobre, le Parlement arménien a ratifié par 63 voix contre 32 l'accord avec Washington sur le corridor TRIPP, qui reliera l'Azerbaïdjan à son exclave du Nakhitchevan à travers le sud du pays. Le traité de paix reste, lui, non signé [1][2].",
    "points": [
      "Le vote du 28 octobre a donné 63 voix pour et 32 contre, sans abstention. Le parti au pouvoir, Contrat civil, a voté pour ; les blocs d'opposition Alliance Arménie et Arménie forte ont voté contre [1].",
      "Le projet doit relier l'Azerbaïdjan à son exclave du Nakhitchevan par le sud de l'Arménie. Une société de développement TRIPP le gérera, avec 74 % pour la partie américaine et 26 % pour l'Arménie [1].",
      "La durée initiale est de 49 ans, prolongeable de 50 ans d'un commun accord ; en cas de prolongation, la part arménienne passerait à 49 % [1]. Les statuts de la société et le pacte d'actionnaires ne sont pas encore finalisés [1].",
      "Le ministre des Affaires étrangères Ararat Mirzoyan assure que toutes les infrastructures sur le sol arménien seront placées sous la seule souveraineté et juridiction de l'Arménie [1]. Il n'exclut pas de lancer TRIPP avant la signature du traité de paix [6].",
      "L'opposition demande l'inverse. Narek Karapetyan veut attendre la paix ; le président du Parlement Ruben Rubinyan répond que la mise en oeuvre de TRIPP n'est pas liée au traité [2][3].",
      "Le traité de paix a été paraphé en août 2025 mais n'est pas signé ; Bakou exige que l'Arménie change sa Constitution, or Erevan ne réunit pas les deux tiers des voix nécessaires [2][7][9]. Mirzoyan dément un report de la signature [4].",
      "Le 31 octobre, Mirzoyan a évoqué TRIPP et le processus de paix à Bahreïn avec le secrétaire général du Conseil de coopération du Golfe [8]."
    ],
    "why": [
      "À retenir : l'Arménie accepte de placer un axe de transport de son territoire dans un montage à majorité américaine, au nom d'une ouverture économique vers l'Azerbaïdjan. L'accord découle de l'engagement pris à Washington le 8 août 2025 par Nikol Pashinyan, Ilham Aliyev et Donald Trump [1].",
      "Pour Washington, c'est une présence durable dans le Caucase du Sud, qu'il pousse par des visites et des réunions d'investisseurs [7]. Pour Erevan, le débat est vif : Anna Grigoryan, cheffe du groupe Alliance Arménie, doute que l'accord apporte de vrais avantages réciproques [1].",
      "Le blocage se déplace vers la politique intérieure. Pashinyan a dit qu'un traité pourrait être signé en 2027-2028 [2]. Mais la Constitution ne peut être changée sans une majorité des deux tiers, que le camp au pouvoir n'a pas [2].",
      "Pour l'Azerbaïdjan, le traité attend un changement politique et juridique à Erevan : Bakou a répété cette exigence avant de signer [9]."
    ],
    "forMe": "TRIPP relierait l'Azerbaïdjan à son exclave sans passer par la Géorgie ou l'Iran, et pourrait changer à terme les routes de transport dans le Caucase, une zone de passage pour le gaz et le pétrole vers l'Europe. Rien n'est encore construit : il s'agit d'un cadre juridique.",
    "figures": [
      {
        "value": "63 contre 32",
        "label": "vote du Parlement arménien sur TRIPP, le 28 octobre",
        "src": 1
      },
      {
        "value": "74 %",
        "label": "part américaine prévue dans la société TRIPP (26 % pour l'Arménie)",
        "src": 1
      },
      {
        "value": "49 ans",
        "label": "durée initiale, prolongeable de 50 ans",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "routes-maritimes"
    ],
    "sources": [
      {
        "short": "JAMnews",
        "name": "JAMnews, « Armenian parliament ratifies framework agreement on Trump Route (TRIPP) project » (28 oct. 2026)",
        "url": "https://jam-news.net/armenian-parliament-ratifies-framework-agreement-on-trump-route-tripp-project/"
      },
      {
        "short": "Armenian Weekly",
        "name": "The Armenian Weekly, « Yerevan ratifies TRIPP, lacks two-thirds for constitutional changes » (29 oct. 2026)",
        "url": "https://armenianweekly.com/2026/10/29/yerevan-ratifies-tripp-lacks-two-thirds-for-constitutional-changes/"
      },
      {
        "short": "Armenpress",
        "name": "Armenpress, « Speaker rejects opposition arguments linking TRIPP implementation to Armenia-Azerbaijan peace treaty » (oct. 2026)",
        "url": "https://armenpress.am/en/article/1263993"
      },
      {
        "short": "Armenpress",
        "name": "Armenpress, « Mirzoyan rejects suggestion that peace treaty signing is being postponed » (oct. 2026)",
        "url": "https://armenpress.am/en/article/1264128"
      },
      {
        "short": "AzerNews",
        "name": "AzerNews, « Armenian parliament ratifies US-backed TRIPP agreement » (28 oct. 2026)",
        "url": "https://www.azernews.az/karabakh/266376.html"
      },
      {
        "short": "1news.az",
        "name": "1news.az, « Armenian foreign minister does not rule out launching TRIPP before signing peace treaty with Azerbaijan » (27 oct. 2026)",
        "url": "https://1news.az/en/news/20261027130012291-Armenian-foreign-minister-does-not-rule-out-launching-TRIPP-before-signing-peace-treaty-with-Azerbaijan"
      },
      {
        "short": "RFE/RL",
        "name": "Radio Free Europe/Radio Liberty, « US Steps Up South Caucasus Push As Armenia-Azerbaijan Peace Hangs In Balance » (2026)",
        "url": "https://www.rferl.org/a/us-south-caucasus-armenia-azerbaijan/33684033.html"
      },
      {
        "short": "Report.az",
        "name": "Report.az, « Armenia-Azerbaijan peace process discussed in Bahrain » (31 oct. 2026)",
        "url": "https://report.az/en/region/armenia-azerbaijan-peace-process-discussed-in-bahrain"
      },
      {
        "short": "Horizon Weekly",
        "name": "Horizon Weekly, « Azerbaijan renews demands for political and legal changes in Armenia before peace deal » (oct. 2026)",
        "url": "https://horizonweekly.ca/en/azerbaijan-renews-demands-for-political-and-legal-changes-in-armenia-before-peace-deal"
      }
    ],
    "next": [
      {
        "when": "2027-2028",
        "what": "Pashinyan évoque cette période pour une éventuelle signature du traité de paix [2]."
      },
      {
        "when": "À définir",
        "what": "Les statuts et le pacte d'actionnaires de la société TRIPP restent à finaliser [1]."
      }
    ]
  },
  {
    "id": "2026-11-01-canada-carney-attendre-nouveau-president",
    "date": "2026-11-01",
    "region": "Amériques",
    "theme": "eco",
    "zones": [
      "Amérique du Nord",
      "Europe"
    ],
    "geo": [
      {
        "name": "Ottawa, Canada",
        "label": "Canada",
        "coords": [
          -75.7,
          45.42
        ]
      }
    ],
    "title": "Le Canada est prêt à attendre un autre président américain plutôt que de signer un mauvais accord",
    "summary": "Le Premier ministre canadien Mark Carney dit qu'il refuse un accord commercial avec Washington « juste pour en avoir un » et qu'il attendra un nouveau président américain si besoin. Les discussions sont gelées depuis août, et chaque pays a ajouté des droits de douane cet automne [1][2][3].",
    "points": [
      "Dans un entretien accordé à Politico à Montréal, publié le 30 ou 31 octobre à la fin du 21e sommet UE-Canada, Mark Carney a déclaré qu'il ne conclurait pas un accord « juste pour en conclure un » et que, interrogé sur le cas où il faudrait attendre un nouveau locataire de la Maison-Blanche, il le ferait [1].",
      "Selon Bloomberg, il a laissé entendre qu'il s'attend à ce que son pays reste dans le viseur de Donald Trump même après les élections américaines du 3 novembre. La Maison-Blanche n'avait pas réagi aux demandes de commentaire [1][2].",
      "Les négociations ont peu avancé depuis que le Canada a quitté la table en août [1]. Le 22 août, après l'échec des pourparlers, Washington a mis en place de nouveaux droits de douane de 50 % sur certains produits canadiens, et Carney a annoncé que le Canada répondrait « dollar pour dollar » à partir du 8 septembre, notamment sur l'acier, les produits laitiers, l'électroménager, les machines agricoles, le papier et l'électronique [3].",
      "Le représentant américain au Commerce, Jamieson Greer, avait alors dit qu'aucune nouvelle discussion n'était prévue et que le Canada avait « refusé de finaliser » l'accord sur les termes convenus plus tôt dans la semaine [3].",
      "Le 29 octobre, Ottawa a publié « Le Plan pour un Canada plus fort », stratégie de sécurité de 13 pages : elle répète l'objectif d'aller vers 5 % du PIB pour la défense (norme de l'OTAN) d'ici 2035, contre 2 % en 2025-2026, et promet de « se préparer à toutes les éventualités, y compris la guerre » [6][7]."
    ],
    "why": [
      "Ce qui change, c'est le ton : le Canada ne cherche plus un accord à tout prix avant les élections américaines, il accepte que le conflit dure, voire qu'il survive à Trump. C'est un pari politique et économique risqué, car la dispute porte sur des secteurs clés comme l'acier ou l'électronique [3].",
      "Carney a de la marge sur le plan intérieur. Le 19 octobre, les Albertains ont rejeté la voie vers la séparation du Canada avec 74,9 % de voix contre, pour une participation de 70,4 % (plus de 2,2 millions de bulletins), ce qui a été salué par Carney et par la première ministre de l'Alberta, Danielle Smith [5].",
      "Le pays se tourne en parallèle vers d'autres partenaires : le sommet avec l'Union européenne qui vient de se tenir à Montréal en est la preuve, et la stratégie de sécurité parle de chaînes d'approvisionnement et d'industrie « domestiques » [1][6]."
    ],
    "forMe": "Même si tu n'es pas au Canada, la guerre commerciale entre Washington et Ottawa joue sur le prix de l'acier, de l'aluminium, du bois et de l'énergie, et donc sur ce que paient les industriels européens. Elle pousse aussi le Canada à acheter ses armes et ses équipements ailleurs, ce qui peut ouvrir des marchés à l'Europe.",
    "next": [
      {
        "when": "3 novembre",
        "what": "Les Américains votent pour le Congrès ; Carney s'attend à rester dans le viseur de Trump après le scrutin [2][8]."
      }
    ],
    "figures": [
      {
        "value": "50 %",
        "label": "nouveaux droits de douane américains sur certains produits canadiens (août 2026)",
        "src": 3
      },
      {
        "value": "74,9 %",
        "label": "Albertains qui ont voté contre la séparation, le 19 octobre",
        "src": 5
      },
      {
        "value": "5 %",
        "label": "part du PIB visée pour la défense d'ici 2035, contre 2 % en 2025-26",
        "src": 6
      }
    ],
    "culture": [],
    "dossiers": [
      "droits-de-douane"
    ],
    "sources": [
      {
        "short": "Politico (Yahoo)",
        "name": "Politico via Yahoo News, « Carney says he can wait out Trump for trade deal » (31 oct. 2026)",
        "url": "https://www.yahoo.com/news/politics/articles/carney-says-wait-trump-trade-233505447.html"
      },
      {
        "short": "Bloomberg",
        "name": "Bloomberg, « Carney Says Canada Won't Rush US Trade Deal Without Favorable Terms » (31 oct. 2026)",
        "url": "https://www.bloomberg.com/news/articles/2026-10-31/carney-says-no-hurry-on-trade-deal-if-us-won-t-offer-good-terms"
      },
      {
        "short": "CNBC",
        "name": "CNBC, « As U.S.-Canada trade talks collapse, Carney says retaliatory tariffs will start Sept. 8 » (22 août 2026)",
        "url": "https://www.cnbc.com/2026/08/22/us-canada-trade-talks-collapse-ushering-in-wave-of-new-tariffs.html"
      },
      {
        "short": "NPR",
        "name": "NPR, « As Canada readies retaliatory tariffs, Mark Carney says his nation is 'at war' with U.S. » (22 août 2026)",
        "url": "https://www.npr.org/2026/08/22/nx-s1-5941584/us-canada-tariffs"
      },
      {
        "short": "CNBC (Alberta)",
        "name": "CNBC, « Alberta votes by large majority to remain part of Canada in boost for Carney » (20 oct. 2026)",
        "url": "https://www.cnbc.com/2026/10/20/alberta-canada-vote-remain.html"
      },
      {
        "short": "CBC",
        "name": "CBC News, « Canada's new national security strategy will shield economy, modernize military » (29 oct. 2026)",
        "url": "https://www.cbc.ca/news/politics/national-security-strategy-9.7401098"
      },
      {
        "short": "Cabinet du PM",
        "name": "Cabinet du Premier ministre du Canada, « Prime Minister Carney launches The Plan for a Stronger Canada » (29 oct. 2026)",
        "url": "https://www.pm.gc.ca/en/news/news-releases/2026/10/29/prime-minister-carney-launches-plan-stronger-canada-strengthen"
      },
      {
        "short": "The Hill",
        "name": "The Hill, « 2026 midterm elections: When polls close, when results are expected » (oct. 2026)",
        "url": "https://thehill.com/homenews/campaign/6175621-midterm-elections-polls-close-results/"
      }
    ]
  },
  {
    "id": "2026-11-01-argentine-milei-125-milliards-peso",
    "date": "2026-11-01",
    "region": "Amériques",
    "theme": "eco",
    "zones": [
      "Amérique latine",
      "Europe"
    ],
    "geo": [
      {
        "name": "Buenos Aires, Argentine",
        "label": "Argentine",
        "coords": [
          -58.38,
          -34.6
        ]
      }
    ],
    "title": "Milei dit avoir 125 milliards de dollars pour défendre le peso, des économistes en voient 180 de nécessaires",
    "summary": "Le président argentin Javier Milei affirme disposer de 125 milliards de dollars pour résister à une attaque contre le peso en 2027. Ce chiffre additionne des sources très différentes, pas des réserves. Le risque pays vient de bondir de 30 % en octobre, après la victoire de Lula au Brésil [1][3][6].",
    "points": [
      "Le 12 octobre, sur Radio Mitre, Javier Milei a déclaré avoir « 125 000 millions de dollars » pour affronter une attaque contre le peso l'an prochain, tout en disant : « je ne m'attends pas à une ruée, mais je me prépare » [1][3].",
      "Son total additionne notamment environ 20 milliards de dollars d'achats de devises par la Banque centrale depuis novembre 2025, 20 milliards de lignes d'échange (swap) avec la Chine et 20 milliards avec le Trésor américain, jusqu'à 15 milliards de contrats à terme sur le dollar et 25 milliards d'échéances de dette qu'il compte refinancer [3]. Une semaine plus tôt, il disait 75 milliards [2].",
      "Le calcul est contesté : l'économiste Miguel Ángel Broda estime qu'il faudrait environ 183 475 millions de dollars pour couvrir la masse monétaire et la dette publique en pesos détenue par le privé, et des analyses du secteur privé situent ce besoin au-dessus de 180 milliards [4]. Un swap (échange de devises entre banques centrales) donne accès à des ressources sous conditions, mais n'équivaut pas à des dollars librement disponibles [3].",
      "Le dollar de gros a fini octobre à 1 537,34 pesos (1 517,52 fin septembre), loin du plafond de la bande de change fixée à 1 950,57 pesos [5][6]. La Banque centrale a acheté 1 395 millions de dollars en octobre, son meilleur mois depuis juillet (15 963 millions depuis le début de 2026), mais ses réserves ont reculé de 1 592 millions à 48 562 millions [5][6].",
      "Le risque pays, qui mesure l'écart de taux que paie le pays pour emprunter, a clos le mois autour de 787 points de base, en hausse de 30 % sur octobre et au plus haut de 2026 [6].",
      "Le 26 octobre, au lendemain du second tour brésilien, la Banque centrale a renoncé à acheter des dollars à cause de la tension sur les changes [7]. La défaite de Flávio Bolsonaro, le principal allié de Milei au Brésil, laisse le président argentin sans partenaire politique de poids dans la région [9]."
    ],
    "why": [
      "Le chiffre de 125 milliards sert avant tout de message aux marchés : Milei dit qu'une attaque contre le peso ne passera pas. Mais, selon la presse argentine, il ne s'agit pas du montant que la Banque centrale détient (48,5 milliards en réserves), et sa fourchette a doublé en une semaine [2][3][6].",
      "Sur le plan régional, Milei et le Chilien José Antonio Kast se retrouvent au sommet ibéro-américain de Madrid. La rencontre arrive après une tension passagère : le ministre chilien du Logement avait traité Milei de « de plus en plus fou » avant de s'excuser, selon Kast [12]."
    ],
    "forMe": "Si tu voyages en Argentine ou si tu y envoies de l'argent, le taux de change du peso décide de ce que tu paies. Pour un épargnant européen, un peso attaqué pèse sur les emprunts argentins, et le Brésil voisin a montré en octobre que les monnaies de la région réagissent ensemble.",
    "next": [
      {
        "when": "4-5 novembre",
        "what": "Milei participe au sommet ibéro-américain à Madrid, son 48e voyage à l'étranger depuis son arrivée au pouvoir [8]."
      },
      {
        "when": "Avant le 5 novembre",
        "what": "Kast arrive en Europe (Madrid, Rome, Vatican) et rentre au Chili dans la nuit du 5 novembre [11]."
      }
    ],
    "figures": [
      {
        "value": "125 Md$",
        "label": "ce que Milei dit avoir contre une attaque sur le peso (75 Md$ une semaine plus tôt)",
        "src": 2
      },
      {
        "value": "787",
        "label": "points de base de risque pays fin octobre, +30 % en un mois",
        "src": 6
      },
      {
        "value": "48,6 Md$",
        "label": "réserves de la Banque centrale, après 1,4 Md$ d'achats en octobre",
        "src": 6
      }
    ],
    "culture": [],
    "dossiers": [
      "dollar"
    ],
    "sources": [
      {
        "short": "Infobae",
        "name": "Infobae, « Milei: Tengo USD 125.000 millones en la billetera para enfrentar una corrida el año que viene » (12 oct. 2026)",
        "url": "https://www.infobae.com/economia/2026/10/12/milei-tenemos-usd-125000-millones-para-enfrentar-una-corrida-el-ano-que-viene/"
      },
      {
        "short": "La Política Online",
        "name": "La Política Online, « Milei ahora dice que necesita USD 125 mil millones para evitar una corrida, hace una semana era la mitad » (oct. 2026)",
        "url": "https://www.lapoliticaonline.com/economia/milei-ahora-dice-que-necesita-usd-125-mil-millones-para-evitar-una-corrida-655/"
      },
      {
        "short": "Diario Río Negro",
        "name": "Diario Río Negro, « Javier Milei aseguró tener US$125.000 millones contra una corrida: qué suma esa cifra y por qué el dólar viene tranquilo en octubre » (oct. 2026)",
        "url": "https://www.rionegro.com.ar/economia/javier-milei-aseguro-tener-us125-000-millones-contra-una-corrida-que-suma-esa-cifra-y-por-que-el-dolar-viene-tranquilo-en-octubre-4756909/"
      },
      {
        "short": "Política y Medios",
        "name": "Política y Medios, « Milei duplicó su cálculo para contener una corrida: afirma tener USD 125.000 millones, pero economistas advierten que no alcanza » (oct. 2026)",
        "url": "https://politicaymedios.com.ar/nota/24544/milei-duplico-su-calculo-para-contener-una-corrida-afirma-tener-usd-125-000-millones-pero-economistas-advierten-que-no-alcanza"
      },
      {
        "short": "Infobae (octobre)",
        "name": "Infobae, « El Banco Central compró USD 1.395 millones en octubre y reforzó las reservas » (31 oct. 2026)",
        "url": "https://www.infobae.com/economia/2026/10/31/el-banco-central-compro-usd-1395-millones-en-octubre-y-reforzo-las-reservas/"
      },
      {
        "short": "MDZ",
        "name": "MDZ, « El Banco Central compró US$1.395 millones en octubre pero las reservas cayeron a US$48.562 millones » (30 oct. 2026)",
        "url": "https://www.mdzol.com/economia/2026/10/30/el-banco-central-compro-us1395-millones-en-octubre-pero-las-reservas-cayeron-a-us48562-millones-1992066.html"
      },
      {
        "short": "Infobae (Brésil)",
        "name": "Infobae, « El BCRA decidió no comprar reservas hoy ante la tensión cambiaria generada tras las elecciones en Brasil » (26 oct. 2026)",
        "url": "https://www.infobae.com/economia/2026/10/26/el-bcra-decidio-no-comprar-reservas-hoy-ante-la-tension-cambiaria-generada-tras-las-elecciones-en-brasil/"
      },
      {
        "short": "La Nación (voyage)",
        "name": "La Nación, « Milei vuelve a viajar a España para la Cumbre Iberoamericana, en su salida 48° del país desde que asumió » (30 oct. 2026)",
        "url": "https://www.lanacion.com.ar/politica/milei-vuelve-a-viajar-a-espana-para-la-cumbre-iberoamericana-en-su-salida-48-del-pais-desde-que-nid30102026/"
      },
      {
        "short": "La Nación (Brésil)",
        "name": "La Nación, « Tras la derrota y huida de Flavio Bolsonaro, el presidente Milei quedó sin socios en Brasil » (31 oct. 2026)",
        "url": "https://lanacion.com.ar/politica/tras-la-derrota-y-huida-de-flavio-bolsonaro-el-presidente-milei-quedo-sin-socios-en-brasil-nid31102026"
      },
      {
        "short": "Diario Huarpe",
        "name": "Diario Huarpe, « Javier Milei confirmó su viaje a España y podría cruzarse con Lula da Silva en Madrid » (29 oct. 2026)",
        "url": "https://www.diariohuarpe.com/nota/javier-milei-confirmo-su-viaje-a-espana-y-podria-cruzarse-con-lula-da-silva-en-madrid-2026102913110"
      },
      {
        "short": "Pauta",
        "name": "Pauta, « Gira de Kast por Europa: quiénes integran la comitiva presidencial y cuáles serán sus principales actividades » (30 oct. 2026)",
        "url": "https://www.pauta.cl/actualidad/2026/10/30/gira-de-kast-por-europa-quienes-integran-la-comitiva-presidencial-y-cuales-seran-sus-principales-actividades.html"
      },
      {
        "short": "Rio Times",
        "name": "The Rio Times, « Kast Says Poduje Apologised Over Milei Remark in Chile » (16 oct. 2026)",
        "url": "https://www.riotimesonline.com/chile-kast-poduje-milei-apology-2026/"
      }
    ]
  },
  {
    "id": "2026-11-01-mexique-accord-droits-de-douane-avant-midterms",
    "date": "2026-11-01",
    "region": "Amériques",
    "theme": "mix",
    "zones": [
      "Amérique du Nord",
      "Amérique latine"
    ],
    "geo": [
      {
        "name": "Mexico, Mexique",
        "label": "Mexique",
        "coords": [
          -99.13,
          19.43
        ]
      }
    ],
    "title": "Le Mexique veut un accord sur l'acier, l'aluminium et les voitures avant les élections américaines",
    "summary": "La présidente Claudia Sheinbaum dit être « très proche » d'un accord intérimaire avec Washington pour alléger les droits de douane sur les voitures, l'acier et l'aluminium. Elle le souhaite avant le 3 novembre, mais rien n'est signé, et le traité de libre-échange nord-américain reste en révision [1][3][5].",
    "points": [
      "Le 28 octobre, lors de sa conférence de presse quotidienne, Claudia Sheinbaum a dit vouloir un accord économique avec les États-Unis avant les élections de mi-mandat du 3 novembre, tout en précisant qu'on évaluait encore s'il était faisable dans ce délai [1].",
      "Elle avait reconnu quelques jours plus tôt qu'il n'y avait pas de signature : « nous sommes très proches, mais nous n'avons pas encore d'accord » [5]. Le 12 octobre déjà, elle admettait que les droits américains sur les véhicules, l'acier et l'aluminium restaient en place [2].",
      "Sur la table : une baisse des droits de douane américains sur les voitures légères mexicaines de 25 % à 15 %, et un allègement des 50 % qui frappent l'acier et l'aluminium [3]. Le ministre de l'Économie, Marcelo Ebrard, juge ces 50 % « insoutenables » et rappelle que le Mexique est en déficit pour l'acier face aux États-Unis [4].",
      "Ebrard a rencontré le représentant américain au Commerce, Jamieson Greer, à Milwaukee, en marge de la réunion des ministres du Commerce du G20 [3]. Les points encore en suspens : les contreparties que demandent les États-Unis, le pourcentage de baisse et la date d'une annonce ; Washington s'inquiète aussi du contenu automobile et de l'investissement chinois [1].",
      "Mexico prévoit d'acheter davantage de produits américains et de réduire ses importations venues d'ailleurs, selon une dépêche Reuters du 21 septembre : « les États-Unis demandent que leur déficit commercial soit réduit », a dit Sheinbaum [8].",
      "Sur la révision de l'accord (T-MEC en espagnol, USMCA en anglais), le Mexique et le Canada demandent une prolongation de 16 ans ; Washington propose 10 ans avec une revue annuelle [1]. La date butoir du 1er juillet pour la revue commune a été manquée [7]."
    ],
    "why": [
      "Le Mexique est aujourd'hui le seul des deux voisins des États-Unis à négocier vraiment : les discussions avec le Canada sont suspendues depuis août [3]. Un accord intérimaire lui donnerait un avantage sur l'industrie automobile et l'acier, deux secteurs où les chaînes de production sont intégrées des deux côtés de la frontière.",
      "Pourquoi avant le 3 novembre ? Mexico n'a pas détaillé ses raisons, mais le scrutin américain peut changer le rapport de force à Washington : les démocrates, favoris pour la Chambre, ont fait de la baisse des droits de douane un de leurs sujets [1].",
      "Il faut rester prudent : les sources divergent sur la date du prochain round de négociations (Ebrard a dit le 16 octobre qu'il devait avoir lieu « avant la fin de l'année ») et aucun accord n'est confirmé à ce jour [7]."
    ],
    "forMe": "Une voiture ou un appareil assemblé au Mexique pour le marché américain, c'est aussi des pièces européennes et asiatiques. Si les droits de douane baissent, les constructeurs peuvent vendre moins cher ou garder plus de marge ; s'ils restent, les prix montent surtout aux États-Unis, et les usines européennes concurrentes en profitent ou en souffrent selon le cas.",
    "next": [
      {
        "when": "3 novembre",
        "what": "Élections de mi-mandat aux États-Unis, date visée par Mexico pour un accord intérimaire [1]."
      },
      {
        "when": "Avant la fin de 2026",
        "what": "Quatrième round de négociations bilatérales, selon Marcelo Ebrard le 16 octobre [7]."
      }
    ],
    "figures": [
      {
        "value": "25 % → 15 %",
        "label": "baisse envisagée des droits américains sur les voitures légères mexicaines",
        "src": 3
      },
      {
        "value": "50 %",
        "label": "droits américains sur l'acier et l'aluminium, jugés insoutenables par Ebrard",
        "src": 4
      },
      {
        "value": "16 ans",
        "label": "prolongation du traité demandée par le Mexique et le Canada, contre 10 ans proposés par Washington",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "droits-de-douane"
    ],
    "sources": [
      {
        "short": "El Imparcial",
        "name": "El Imparcial, « Desea Sheinbaum acuerdo económico con EEUU antes de elecciones intermedias » (28 oct. 2026)",
        "url": "https://www.elimparcial.com/mexico/2026/10/28/desea-sheinbaum-acuerdo-economico-con-eeuu-antes-de-elecciones-intermedias/"
      },
      {
        "short": "La Jornada",
        "name": "La Jornada, « Siguen los aranceles de EU a automotriz, acero y aluminio, reconoce Sheinbaum » (13 oct. 2026)",
        "url": "https://www.jornada.com.mx/2026/10/13/economia/017n2eco"
      },
      {
        "short": "Mexico Business News",
        "name": "Mexico Business News, « Mexico Nears US Deal to Cut Auto, Steel and Aluminum Tariffs » (oct. 2026)",
        "url": "https://mexicobusiness.news/automotive/news/mexico-nears-us-deal-cut-auto-steel-and-aluminum-tariffs"
      },
      {
        "short": "Mexico Business (acier)",
        "name": "Mexico Business News, « Ebrard Calls 50% Steel Tariffs Unsustainable at USMCA Talks » (oct. 2026)",
        "url": "https://mexicobusiness.news/mining/news/ebrard-calls-50-steel-tariffs-unsustainable-usmca-talks"
      },
      {
        "short": "El Heraldo de Saltillo",
        "name": "El Heraldo de Saltillo, « México y EU aún no logran acuerdo para reducir aranceles al acero, aluminio y autos: Sheinbaum » (26 oct. 2026)",
        "url": "https://elheraldodesaltillo.mx/2026/10/26/mexico-y-eu-aun-no-logran-acuerdo-para-reducir-aranceles-al-acero-aluminio-y-autos-sheinbaum/"
      },
      {
        "short": "USTR",
        "name": "Bureau du représentant américain au Commerce (USTR), « Joint Statement from Ambassador Jamieson Greer and Mexican Secretary of Economy Marcelo Ebrard » (juil. 2026)",
        "url": "https://ustr.gov/about/policy-offices/press-office/press-releases/2026/july/joint-statement-ambassador-jamieson-greer-and-mexican-secretary-economy-marcelo-ebrard"
      },
      {
        "short": "Latin Times",
        "name": "Latin Times, « Mexico-U.S. Trade Talks Move Forward, but Steel, Autos and Canada Complicate the Deal » (oct. 2026)",
        "url": "https://www.latintimes.com/mexico-us-trade-talks-move-forward-steel-autos-canada-complicate-deal-599955"
      },
      {
        "short": "Reuters (Investing)",
        "name": "Reuters via Investing.com, « Mexico plans to boost US imports as part of trade treaty review, Sheinbaum says » (21 sept. 2026)",
        "url": "https://www.investing.com/news/economy-news/mexico-plans-to-boost-us-imports-as-part-of-trade-treaty-review-sheinbaum-says-4909389"
      }
    ]
  },
  {
    "id": "2026-11-01-bolivie-gaz-importations-privees",
    "date": "2026-11-01",
    "region": "Amériques",
    "theme": "eco",
    "zones": [
      "Amérique latine"
    ],
    "geo": [
      {
        "name": "La Paz, Bolivie",
        "label": "Bolivie",
        "coords": [
          -68.15,
          -16.5
        ]
      }
    ],
    "title": "La Bolivie, ancienne reine du gaz, autorise les entreprises à en importer",
    "summary": "Par un décret du 26 octobre, la Bolivie permet aux entreprises publiques et privées d'importer du gaz pour leur propre usage. Ses réserves ont fondu, et les autorités évoquent un manque possible dès 2029. Le pays, déjà secoué par la crise des carburants, doit aussi respecter son programme avec le FMI [1][2][3].",
    "points": [
      "Le décret suprême 5755, approuvé le 26 octobre, autorise l'importation exceptionnelle de gaz naturel et de gaz liquéfié par des entités publiques et privées, pour leur consommation propre ou pour produire de l'électricité. Le ministre des Hydrocarbures, Marcelo Blanco, précise que ce gaz ne pourra pas être revendu sur le marché intérieur [1][2].",
      "Les réserves prouvées s'élevaient à environ 3,7 billions de pieds cubes (TCF) en mars 2026, contre 4,5 TCF en 2023, selon l'entreprise publique YPFB [3]. Une nouvelle certification, avec des données au 31 décembre 2025, doit sortir bientôt ; Blanco promet les résultats d'ici dix jours et écarte une pénurie de gaz pour la consommation intérieure [1][3].",
      "La vice-ministre Tatiana Genuzio estime que l'offre pourrait devenir insuffisante vers 2029, quand production et demande se rejoindraient ; des responsables de YPFB parlent plutôt de 2030 ou 2031 [2][3]. Le gaz est fortement subventionné en Bolivie : les prix internationaux sont près de dix fois supérieurs aux prix locaux, dit-elle [2].",
      "Le gouvernement attribue la chute à des années de dépenses d'exploration insuffisantes sous les gouvernements précédents [2]. La Bolivie, longtemps exportatrice de gaz vers ses voisins, devient donc progressivement acheteuse, selon la presse locale [5][6].",
      "En parallèle, le président Rodrigo Paz a supprimé la subvention au diesel le 19 septembre, ce qui a fait passer le litre de 9,80 à 17,95 bolivianos, après l'approbation d'un prêt du FMI de 1,9 milliard de dollars (confirmé par le conseil du FMI le 2 octobre) [7][8]. La subvention à l'essence doit s'arrêter en janvier 2027 [7].",
      "L'état d'exception, décrété le 20 juin après des blocages qui ont coûté plus de 3 milliards de dollars selon la presse, a été prolongé de 90 jours, jusqu'en décembre [7][9]."
    ],
    "why": [
      "Un pays qui vendait du gaz et qui doit en acheter perd une recette en devises, celle qui payait les importations de carburant. Le gouvernement lie lui-même la crise des carburants à la baisse de la production de gaz et aux importations coûteuses, et le président Paz s'est excusé en août pour les pénuries.",
      "Le gouvernement de Rodrigo Paz tente de répondre en laissant les entreprises se débrouiller avec leurs propres importations, en supprimant les subventions. Mais chaque étape touche au portefeuille des ménages, d'où la tension avec les syndicats, la COB et les transporteurs, qui ont menacé de nouvelles protestations après la fin de la subvention du diesel [7][8].",
      "L'incertitude vient des chiffres : la nouvelle certification des réserves pourrait déplacer la date du « point de bascule » [2][3]."
    ],
    "forMe": "Si tu travailles pour une entreprise qui exploite des mines ou des usines en Bolivie, ou si tu suis les prix du lithium et de l'étain, l'accès à l'énergie devient un enjeu. Pour le reste, c'est un exemple de ce qui arrive quand un pays vit longtemps de l'exportation de gaz sans investir : le gaz que ses voisins achetaient diminue.",
    "next": [
      {
        "when": "D'ici début novembre",
        "what": "Le ministre Marcelo Blanco promet de présenter les résultats du calcul des réserves de gaz sous dix jours [1]."
      },
      {
        "when": "Janvier 2027",
        "what": "Fin annoncée de la subvention à l'essence, après celle du diesel [7]."
      }
    ],
    "figures": [
      {
        "value": "3,7 TCF",
        "label": "réserves prouvées de gaz en mars 2026, contre 4,5 TCF en 2023",
        "src": 3
      },
      {
        "value": "2029",
        "label": "année où l'offre pourrait devenir insuffisante, selon la vice-ministre Tatiana Genuzio",
        "src": 2
      },
      {
        "value": "+83 %",
        "label": "hausse du prix du diesel depuis le 19 septembre (9,80 à 17,95 bolivianos le litre)",
        "src": 8
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "La Razón",
        "name": "La Razón (Bolivie), « Gobierno abre la puerta a importar gas para privados ante riesgos de crisis energética » (30 oct. 2026)",
        "url": "https://larazon.bo/economia-y-empresa/2026/10/30/gobierno-abre-la-puerta-a-importar-gas-para-privados-ante-riesgos-de-crisis-energetica/"
      },
      {
        "short": "Prensa Mercosur",
        "name": "Prensa Mercosur, « Bolivia podría quedarse sin gas desde el 2029 » (29 oct. 2026)",
        "url": "https://prensamercosur.org/2026/10/29/bolivia-podria-quedarse-sin-gas-desde-el-2029/"
      },
      {
        "short": "ANF",
        "name": "Agencia de Noticias Fides (ANF), « Las reservas de gas cayeron a 3,7 TCF y es posible que Bolivia importe el energético desde 2030 » (2026)",
        "url": "https://www.noticiasfides.com/economia/las-reservas-de-gas-cayeron-a-3-7-tcf-y-es-posible-que-bolivia-importe-el-energetico-desde-2030"
      },
      {
        "short": "El País (Bolivie)",
        "name": "El País (Bolivie), « El drama del gas: reservas en caída y proyectos por concretar » (30 oct. 2026)",
        "url": "https://elpais.bo/nacional/20261030_el-drama-del-gas-reservas-en-caida-y-proyectos-por-concretar.html"
      },
      {
        "short": "Bloomberg Línea (gaz)",
        "name": "Bloomberg Línea, « Bolivia se prepara para importar gas tras décadas como potencia exportadora » (2026)",
        "url": "https://www.bloomberglinea.com/latinoamerica/bolivia/bolivia-se-prepara-para-importar-gas-tras-decadas-como-potencia-exportadora/"
      },
      {
        "short": "La Época",
        "name": "La Época (Bolivie), « Bolivia dejará de exportar gas ante la falta de explotación de pozos » (30 oct. 2026)",
        "url": "https://www.la-epoca.com.bo/2026/10/30/bolivia-dejara-de-exportar-gas-ante-la-falta-de-explotacion-de-pozos-la-situacion-puede-tornarse-preocupante/"
      },
      {
        "short": "Bloomberg Línea (FMI)",
        "name": "Bloomberg Línea, « FMI aprueba programa de US$1.900 millones para apoyar las reformas económicas de Paz en Bolivia » (oct. 2026)",
        "url": "https://www.bloomberglinea.com/latinoamerica/bolivia/fmi-aprueba-programa-de-us1900-millones-para-apoyar-las-reformas-economicas-de-paz-en-bolivia/"
      },
      {
        "short": "Local 10",
        "name": "Local 10, « Tras aprobación de crédito del FMI, el presidente de Bolivia elimina el subsidio al diésel » (19 sept. 2026)",
        "url": "https://www.local10.com/espanol/2026/09/19/tras-aprobacion-de-credito-del-fmi-el-presidente-de-bolivia-elimina-el-subsidio-al-diesel/"
      },
      {
        "short": "Infobae",
        "name": "Infobae, « Sindicatos amenazaron con lanzar nuevas protestas tras la eliminación del subsidio al diésel en Bolivia » (21 sept. 2026)",
        "url": "https://www.infobae.com/america/america-latina/2026/09/21/sindicatos-amenazaron-con-lanzar-nuevas-protestas-tras-la-eliminacion-del-subsidio-al-diesel-en-bolivia/"
      }
    ]
  },
  {
    "id": "2026-11-01-france-faillites-ags-record-salaires",
    "date": "2026-11-01",
    "region": "Europe",
    "theme": "eco",
    "zones": [
      "Europe"
    ],
    "geo": [
      {
        "name": "Paris, France",
        "label": "France",
        "coords": [
          2.35,
          48.86
        ]
      }
    ],
    "title": "Faillites en France : le fonds qui paie les salaires impayés a déjà avancé près de 2 milliards d'euros en neuf mois",
    "summary": "L'AGS, qui garantit les salaires quand une entreprise est en difficulté, a avancé 1,96 milliard d'euros à 211 277 salariés de janvier à septembre 2026, 16,7 % de plus en un an. Les défaillances progressent moins vite que la facture, et un record est attendu [1][3].",
    "points": [
      "Selon le communiqué du 7 octobre de l'AGS, le régime a avancé 1,96 milliard d'euros sur neuf mois pour 211 277 salariés [1]. Le montant progresse de 16,7 % sur un an et le nombre de salariés pris en charge de 11,1 % [3].",
      "L'AGS prévoyait en juillet 2,6 milliards d'euros d'avances sur l'année, un record depuis 1974 [5]. Elle table désormais sur 71 000 à 75 000 défaillances d'entreprises sur 2026 [3].",
      "La Banque de France compte 70 766 défaillances sur douze mois à fin août, soit 4,8 % de plus en un an [4]. L'AGS ne couvre qu'une partie de ces cas : celles qui relèvent de sa garantie des salaires impayés [6].",
      "L'industrie reste le premier secteur, avec 441,1 millions d'euros avancés pour près de 38 000 bénéficiaires ; le commerce et la construction suivent [6].",
      "Les montants avancés augmentent plus vite (+16,7 %) que le nombre de salariés pris en charge (+11,1 %) : les dossiers coûtent plus cher en moyenne [3].",
      "Autre signe : les emplois menacés par les procédures atteignent 160 369 de janvier à septembre, soit 2,8 % de plus [2]. La facture sociale monte plus vite que le nombre de dossiers [3]."
    ],
    "why": [
      "À retenir : un ralentissement de certaines défaillances ne veut pas dire que ça va mieux, car la facture sociale grimpe plus vite que le nombre de dossiers [2][3]. L'AGS est le régime qui garantit les créances salariales, c'est-à-dire les salaires impayés quand une entreprise est en procédure [6].",
      "Le contexte économique explique la tension : le PIB français a reculé de 0,1 % au troisième trimestre, après une stagnation au deuxième, et le ministre de l'Économie Roland Lescure parle d'une économie « à l'arrêt » [8][9]. Les entreprises fragiles ont peu de marge pour encaisser un choc.",
      "Les manifestations d'octobre ajoutent un coup : la chambre de commerce chiffre à plus d'un milliard d'euros les pertes des commerçants [7].",
      "Les chiffres de l'AGS et de la Banque de France ne se superposent pas : l'AGS ne compte que les entreprises de son périmètre de garantie, ce qui explique qu'on lise des totaux différents selon les sources [4][6]."
    ],
    "forMe": "Si ton employeur entre en procédure collective, c'est l'AGS qui avance les salaires impayés : le mandataire judiciaire de l'entreprise t'indique les démarches. Si tu es commerçant, fais le point avec ton assureur sur la couverture des dégâts en cas de manifestation.",
    "figures": [
      {
        "value": "1,96 Md€",
        "label": "avancés aux salariés par l'AGS en neuf mois (+16,7 % sur un an)",
        "src": 1
      },
      {
        "value": "211 277",
        "label": "salariés pris en charge de janvier à septembre",
        "src": 1
      },
      {
        "value": "70 766",
        "label": "défaillances sur douze mois à fin août (+4,8 %)",
        "src": 4
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Petites Affiches",
        "name": "Petites Affiches, « Défaillances d'entreprises : l'AGS a déjà avancé près de 2 milliards d'euros aux salariés en 2026 » (oct. 2026)",
        "url": "https://www.petitesaffiches.fr/actualites,069/economie,045/defaillances-d-entreprises-l-ags-a,46504.html?lang=fr"
      },
      {
        "short": "TPE Actu",
        "name": "TPE Actu, « Faillites d'entreprises : 211 277 salariés aidés et près de 2 milliards d'euros avancés par l'AGS en 2026 » (27 oct. 2026)",
        "url": "https://tpeactu.fr/2026/10/27/ags-defaillances-entreprises-salaries-octobre-2026/"
      },
      {
        "short": "Presse Agence",
        "name": "Presse Agence, « Défaillances d'entreprises : l'AGS prévoit une année 2026 record » (oct. 2026)",
        "url": "https://presseagence.fr/paris-defaillances-dentreprises-lags-alerte-sur-une-annee-2026-record-et-des-consequences-sociales-aggravees/"
      },
      {
        "short": "Banque de France",
        "name": "Banque de France, « Business failures - France - 2026-08 » (oct. 2026)",
        "url": "https://www.banque-france.fr/en/statistics/compagnies/business-failures-france-2026-08"
      },
      {
        "short": "Journal des Entreprises",
        "name": "Le Journal des Entreprises, « Vers un record des faillites d'entreprises : l'AGS tire le signal d'alarme » (juil. 2026)",
        "url": "https://www.lejournaldesentreprises.com/article/vers-un-record-des-faillites-dentreprises-lags-tire-le-signal-dalarme-2146364"
      },
      {
        "short": "Écho Drôme Ardèche",
        "name": "Écho Drôme Ardèche, « L'économie en froid, l'AGS en surchauffe » (oct. 2026)",
        "url": "https://mesinfos.fr/auvergne-rhone-alpes/l-economie-en-froid-l-ags-en-surchauffe-341384.html"
      },
      {
        "short": "Reuters",
        "name": "Reuters (via Investing.com), « France braces for fresh unrest, government vows tough response » (oct. 2026)",
        "url": "https://www.investing.com/news/economy-news/france-braces-for-fresh-unrest-government-vows-tough-response-4989212"
      },
      {
        "short": "Eurasia Business News",
        "name": "Eurasia Business News, « French Economy Contracts 0.1% in Q3 2026 » (31 oct. 2026)",
        "url": "https://eurasiabusinessnews.com/2026/10/31/french-economy-contracts-0-1-in-q3-2026/"
      },
      {
        "short": "Yahoo Finance",
        "name": "Yahoo Finance, « French economy 'at a standstill' as budget uncertainty raises recession risk » (oct. 2026)",
        "url": "https://finance.yahoo.com/economy/policy/articles/french-economy-stalls-budget-deadlock-175518010.html"
      }
    ]
  },
  {
    "id": "2026-11-01-somalie-onu-mission-politique-fermee",
    "date": "2026-11-01",
    "region": "Afrique",
    "theme": "geo",
    "zones": [
      "Afrique"
    ],
    "geo": [
      {
        "name": "Mogadiscio, Somalie",
        "label": "Somalie",
        "coords": [
          45.34,
          2.05
        ]
      }
    ],
    "title": "Somalie : l'ONU ferme sa mission politique après trente ans, au moment où la Constitution et le calendrier électoral sont contestés",
    "summary": "La Mission d'assistance transitoire des Nations unies en Somalie (UNTMIS) a cessé ses activités le 31 octobre, sur demande du gouvernement somalien. Ses tâches passent aux institutions somaliennes et aux agences de l'ONU, alors que l'opposition conteste le calendrier électoral [1][3][4].",
    "points": [
      "L'UNTMIS a fermé le 31 octobre 2026, à la fin d'une transition de deux ans prévue par les résolutions 2753 (2024) et 2809 (2025) du Conseil de sécurité, à la demande du gouvernement fédéral somalien [1][3].",
      "C'est la fin de trois décennies de présence politique de l'ONU : le bureau politique UNPOS en 1995, la mission UNSOM en 2013, puis l'UNTMIS [1].",
      "Selon une feuille de route convenue avec Mogadiscio, les fonctions de la mission passent aux institutions somaliennes et aux agences, fonds et programmes de l'ONU [3].",
      "L'ONU précise qu'elle ne part pas : environ 25 entités des Nations unies continuent d'opérer en Somalie [1].",
      "Raisedon Zenenga, chef par intérim de la mission, a dit que cette fermeture ne signifie pas la fin du partenariat entre la Somalie et l'ONU [2]. Le vice-Premier ministre Saleh Ahmed Jama a parlé d'un « jour de victoire » lors de la cérémonie à Mogadiscio [3].",
      "Le secrétaire général António Guterres a salué les progrès de la Somalie tout en appelant à un soutien international continu face aux défis politiques, sécuritaires et humanitaires [1].",
      "Aucun remplaçant n'a été désigné pour le rôle de médiation que jouait la mission, qui avait aidé des dirigeants rivaux à conclure des accords électoraux [1]. Selon le Somali Digest, un calendrier électoral que l'opposition a rejeté et une question constitutionnelle devant la Cour suprême font l'objet de différends [4]."
    ],
    "why": [
      "À retenir : l'ONU quitte le rôle d'arbitre politique au moment où les règles du jeu électoral somalien sont encore contestées [1][4].",
      "Le départ est voulu par Mogadiscio, qui veut reprendre la main sur ses affaires, mais il tombe dans un contexte de baisse des financements : l'UNICEF indiquait en août que 205 établissements de santé et de nutrition avaient fermé à cause des coupes dans l'aide [1]. Les agences qui restent font face à des problèmes de budget [3].",
      "Un commentateur somalien juge la sortie prématurée et risquée pour les acquis de la reconstruction de l'État [5]. Les autorités, elles, la présentent comme une victoire de souveraineté [3]."
    ],
    "forMe": "La Somalie borde le golfe d'Aden, par où passent les navires entre l'Asie et le canal de Suez : l'instabilité du pays pèse sur la piraterie, les assurances maritimes et donc les prix du transport.",
    "next": [],
    "figures": [
      {
        "value": "30 ans",
        "label": "de présence politique de l'ONU en Somalie, close le 31 octobre",
        "src": 1
      },
      {
        "value": "25",
        "label": "entités de l'ONU qui restent en Somalie",
        "src": 1
      },
      {
        "value": "205",
        "label": "établissements de santé et de nutrition fermés en août à cause des coupes d'aide (UNICEF)",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « UN closes Somalia mission, ending three decades of political engagement » (31 oct. 2026)",
        "url": "https://www.aljazeera.com/news/2026/10/31/un-closes-somalia-mission-ending-three-decades-of-political-engagement"
      },
      {
        "short": "UNTMIS",
        "name": "UNTMIS, « Remarks by the Officer-in-Charge, Raisedon Zenenga, at the ceremony marking the closure of the mission » (oct. 2026)",
        "url": "https://untmis.unmissions.org/en/press-releases/remarks-by-the-officer-in-charge-of-the-un-transitional-assistance-mission-in"
      },
      {
        "short": "Somali Guardian",
        "name": "Somali Guardian, « UN mission in Somalia (UNTMIS) closes after three decades » (31 oct. 2026)",
        "url": "https://www.somaliguardian.com/news/somalia-news/un-mission-somalia-untmis-closes-after-three-decades/"
      },
      {
        "short": "Somali Digest",
        "name": "The Somali Digest, « UNTMIS Leaves Somalia on 31 October With the Constitution and the Election in Dispute » (oct. 2026)",
        "url": "https://thesomalidigest.com/untmis-closes-constitution-election-dispute/"
      },
      {
        "short": "Substack (M. Uluso)",
        "name": "Mohamud Uluso (Substack), « The Closure of UNTMIS Operations: A Premature Exit That Risks Undermining Somalia's Fragile State-Building Gains » (oct. 2026)",
        "url": "https://mohamuduluso.substack.com/p/the-closure-of-untmis-operations"
      }
    ]
  },
  {
    "id": "2026-11-01-alphabet-pire-seance-ia",
    "date": "2026-11-01",
    "region": "Amériques",
    "theme": "fin",
    "zones": [
      "Europe",
      "Asie"
    ],
    "impact": "monde",
    "geo": [
      {
        "name": "Mountain View, États-Unis",
        "label": "Alphabet",
        "coords": [
          -122.08,
          37.39
        ]
      }
    ],
    "title": "Alphabet s’effondre de 13 % : Wall Street se demande si l’IA rapportera assez",
    "summary": "Google a doublé ses ventes de cloud mais dépense tant dans l’IA que son cash-flow libre est négatif de 9 milliards de dollars. Son action a perdu près de 13 % jeudi 29 octobre, sa pire séance. Vendredi 30, le Nasdaq a cédé 2,9 % [2][5][6].",
    "points": [
      "Le 28 octobre, Alphabet a publié un chiffre d’affaires de 127,6 milliards de dollars (+25 %) et un bénéfice d’exploitation de 40,6 milliards (+30 %), mais manqué les attentes : 2,67 $ de bénéfice par action ajusté, contre 3,02 $ attendus [4].",
      "Le cloud de Google a presque doublé, à 30,7 milliards de dollars (+103 %), au-dessus des 28,7 milliards attendus [4]. Ce n’est pas ce que les investisseurs ont retenu.",
      "Les investissements du trimestre ont atteint 51,4 milliards de dollars, contre 24 milliards un an plus tôt [4]. Le groupe garde sa prévision 2026 de 195 à 205 milliards [1]. Anat Ashkenazi, directrice financière, attend une hausse « significative » en 2027 [4].",
      "Résultat : un cash-flow libre négatif de 9,07 milliards de dollars sur le trimestre, alors que les analystes attendaient environ 2,7 milliards de positif [2].",
      "Jeudi 29 octobre, l’action a chuté de près de 13 %, soit environ 500 milliards de dollars de valeur en moins. C’est la plus forte baisse en une séance depuis son entrée en Bourse en 2004 [2].",
      "Vendredi 30, l’indice S&P 500 a perdu 1,8 % (7 580,07 points) et le Nasdaq 2,9 % [6]. Selon le Financial Times, OpenAI a ramené de 30 à 20 milliards de dollars la somme visée dans sa levée de fonds ; S&P Global a mis Meta sous perspective négative, tout en gardant sa note AA- [5]."
    ],
    "why": [
      "À retenir : ce n’est pas la croissance qui inquiète, c’est la facture. Alphabet gagne de l’argent, mais ses dépenses en puces et en centres de données dépassent désormais ce que ses activités rapportent en cash [2][4].",
      "Alphabet n’est pas seul. Meta a un cash-flow libre négatif de 2,1 milliards de dollars sur le trimestre, contre 10,6 milliards positifs un an plus tôt ; S&P table sur 140 milliards d’investissements cette année pour Meta, et Meta conteste sa lecture de ses revenus d’IA [5]. Quand les géants dépensent plus qu’ils n’encaissent, les prêteurs et les actionnaires veulent des preuves de rentabilité.",
      "L’enjeu dépasse la Bourse américaine : ces entreprises pèsent lourd dans les indices mondiaux. Vendredi, les Bourses européennes ont aussi reculé sur ces craintes (l’indice STOXX 600 a perdu environ 0,4 %) [7]."
    ],
    "forMe": "Si tu as un plan d’épargne en actions ou un fonds indiciel mondial, une partie de tes placements est exposée à ces géants américains de la tech. Les valeurs de l’IA pèsent lourd dans les indices : leur recul se voit donc dans les fonds, même sans en détenir directement.",
    "next": [
      {
        "when": "Prochain trimestre d’Alphabet",
        "what": "La direction doit donner plus de détails sur la hausse de ses dépenses en 2027 à l’occasion de ses résultats du quatrième trimestre [4]."
      }
    ],
    "figures": [
      {
        "value": "−13 %",
        "label": "chute de l’action Alphabet jeudi 29 octobre, la pire de son histoire en Bourse",
        "src": 2
      },
      {
        "value": "−9,07 Md$",
        "label": "cash-flow libre d’Alphabet au troisième trimestre",
        "src": 2
      },
      {
        "value": "51,4 Md$",
        "label": "investissements d’Alphabet sur le trimestre, contre 24 un an plus tôt",
        "src": 4
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "CNBC (résultats)",
        "name": "CNBC, « Alphabet sinks 10% as it holds 2026 capex unchanged, expects significant increase in 2027 » (28 oct. 2026)",
        "url": "https://www.cnbc.com/2026/10/28/alphabet-googl-earnings-q3-2026.html"
      },
      {
        "short": "CNBC (séance)",
        "name": "CNBC, « Alphabet tanks nearly 13% for worst day ever, losing $500 billion in value » (29 oct. 2026)",
        "url": "https://www.cnbc.com/2026/10/29/alphabet-google-microsoft-msft-shares-today-earnings.html"
      },
      {
        "short": "Fortune",
        "name": "Fortune, « Alphabet’s Google Cloud revenue doubles to $31 billion as cash flow stays deep red » (28 oct. 2026)",
        "url": "https://fortune.com/2026/10/28/alphabet-google-stock-drops-cloud-revenue-doubles-free-cash-flow-negative/"
      },
      {
        "short": "9to5Google",
        "name": "9to5Google, « Alphabet reports Q3 2026 revenue of $127.6 billion » (28 oct. 2026)",
        "url": "https://9to5google.com/2026/10/28/alphabet-q3-2026-earnings/"
      },
      {
        "short": "Fortune (IA)",
        "name": "Fortune, « AI boom hits a wall on Wall Street as OpenAI cuts fundraising target while Meta gets a credit warning » (31 oct. 2026)",
        "url": "https://fortune.com/2026/10/31/ai-boom-bust-openai-fundraising-target-meta-credit-warning-cash-flow-capex/"
      },
      {
        "short": "AP",
        "name": "AP via WTOP, « How major US stock indexes fared Friday 10/30/2026 » (30 oct. 2026)",
        "url": "https://wtop.com/national/2026/10/how-major-us-stock-indexes-fared-friday-10-30-2026"
      },
      {
        "short": "Yahoo Finance",
        "name": "Yahoo Finance, « European shares slip as Amazon, Intel stoke AI cash-burn fears » (30 oct. 2026)",
        "url": "https://ca.finance.yahoo.com/news/european-shares-slip-amazon-intel-084819142.html"
      },
      {
        "short": "The Block",
        "name": "The Block, « Meta selloff erases quarter of company’s value after metaverse losses top $9 billion » (27 oct. 2022)",
        "url": "https://www.theblock.co/news/business/2022-10-27-meta-selloff-erases-quarter-of-companys-value-after-metaverse-losses-top-9-billion-180648"
      },
      {
        "short": "Korea JoongAng Daily",
        "name": "Korea JoongAng Daily (Reuters), « Investors dump tech stocks after record $593 billion Nvidia loss » (janv. 2025)",
        "url": "https://www.koreajoongangdaily.com/business/investors-dump-tech-stocks-after-record-593-billion-nvidia-loss/12473281"
      }
    ],
    "deep": {
      "explainer": {
        "title": "Comment ça marche : le cash-flow libre et le pari de l’IA",
        "text": "Le cash-flow libre, c’est l’argent qui reste à une entreprise une fois payées ses activités courantes et ses investissements. Alphabet dépense 51,4 milliards de dollars en un trimestre, surtout en infrastructures d’IA, et ce que rapportent ses activités ne couvre plus la facture : le solde est négatif de 9,07 milliards [2][4]. Pour combler le trou, un groupe puise dans sa trésorerie ou emprunte, et les agences de notation regardent ce critère de près : S&P a ainsi dégradé la perspective de Meta à cause d’un cash-flow libre négatif [5]. L’action, elle, reflète les profits futurs que les investisseurs en attendent. Si les dépenses grimpent plus vite que les revenus de l’IA, ils revoient à la baisse ces profits, et la valeur baisse d’un coup, parfois de centaines de milliards [2][5]."
      }
    },
    "past": {
      "title": "Quand une grosse dépense inquiète les marchés",
      "items": [
        {
          "when": "Mars 2020",
          "what": "Alphabet avait signé sa pire séance en Bourse avec une baisse de 11,63 % ; le record du 29 octobre 2026 l’a dépassé [2].",
          "lesson": "Le record de 2026 vient d’un doute sur la rentabilité des dépenses, et non d’un choc extérieur comme en 2020 [2]."
        },
        {
          "when": "27 octobre 2022",
          "what": "Meta (alors maison mère de Facebook) a perdu près de 20 % en une séance, clôturant à 105,02 $, après des résultats plombés par les dépenses du métavers, dont les pertes dépassaient 9 milliards de dollars sur l’année [8].",
          "lesson": "Le marché avait sanctionné une dépense jugée sans retour visible ; un quart de la valeur de l’entreprise avait disparu [8]."
        },
        {
          "when": "27 janvier 2025",
          "what": "Nvidia a perdu 17 % et environ 593 milliards de dollars de valeur en une séance, record absolu, quand une IA chinoise bon marché (DeepSeek) a fait douter du besoin de dépenser autant en puces [9].",
          "lesson": "Le record de perte tenait au doute sur la rentabilité de dépenses énormes, comme en 2026 [9]."
        }
      ]
    },
    "markets": {
      "text": "Les valeurs de l’IA sont les plus touchées par cette séance [5][6].",
      "items": [
        {
          "name": "Alphabet (Google)",
          "ticker": "GOOGL",
          "move": "près de −13 %",
          "why": "Chute de près de 13 % jeudi 29 octobre, soit environ 500 milliards de dollars de valeur boursière perdus [2]."
        },
        {
          "name": "Meta Platforms",
          "ticker": "META",
          "why": "S&P Global a mis sa perspective de note sous « négative » (AA- confirmée) à cause d’un cash-flow libre négatif et de dépenses d’IA très élevées [5]."
        }
      ]
    }
  },
  {
    "id": "2026-11-01-intel-pire-chute-depuis-1974",
    "date": "2026-11-01",
    "region": "Amériques",
    "theme": "fin",
    "zones": [
      "Asie",
      "Europe"
    ],
    "geo": [
      {
        "name": "Santa Clara, États-Unis",
        "label": "Intel",
        "coords": [
          -121.96,
          37.35
        ]
      }
    ],
    "title": "Intel chute de près de 29 % : pire séance depuis 1974 et l’État américain perd 12 milliards",
    "summary": "Le fabricant de puces américain a prévu un dernier trimestre plus faible que prévu, à cause du marché des PC. Vendredi 30 octobre, son action a clôturé en baisse de près de 29 %, à 65,76 dollars, et le secteur des puces a suivi [1][3].",
    "points": [
      "Intel a publié ses résultats le 29 octobre : 16,5 milliards de dollars de chiffre d’affaires au troisième trimestre, mais seulement 15 à 16 milliards prévus pour le quatrième [4].",
      "Il table sur une marge brute d’environ 38 %, en baisse, à cause de la demande de PC plus faible, d’un incident dans l’usine Fab 28 (environ 300 millions de dollars de ventes en moins) et d’une offre limitée [4].",
      "Le pôle PC (client computing) a vu ses ventes reculer de 9 % sur un trimestre, à 8,1 milliards de dollars. Intel attend 12 % de PC livrés en moins en 2026 et 10 % de moins en 2027 [1]. La direction voit un marché faible au moins jusqu’au premier semestre 2027 [5].",
      "Les centres de données et l’IA progressent de 78 %, à 7,3 milliards de dollars, mais ne compensent pas [4].",
      "L’action a perdu près de 29 % vendredi, sa pire journée depuis 1974, selon Yahoo Finance et TechSpot [1][2]. Bank of America a abaissé sa recommandation à « neutre » et son objectif de cours de 145 à 100 dollars [1].",
      "La part d’environ 10 % de l’État américain dans le capital a perdu environ 12 milliards de dollars de valeur sur le papier [6]."
    ],
    "why": [
      "À retenir : Intel est le symbole de la fabrication de puces américaine, et l’État américain en détient environ 10 %. Quand son titre s’effondre, c’est aussi l’argent public qui perd de la valeur [6].",
      "Intel souffre d’un double front : le marché des PC, son cœur historique, se contracte, et le groupe ne prévoit pas de cash-flow positif cette année, en pleine dépense d’IA [1]. Les centres de données le sauvent en partie mais restent loin de combler le trou [4].",
      "La chute est arrivée au lendemain de celle d’Alphabet. Les valeurs technologiques américaines ont perdu plus de 1 000 milliards de dollars de valeur, et les Bourses d’Asie et d’Europe ont suivi [1][3]."
    ],
    "forMe": "Les puces d’Intel équipent beaucoup d’ordinateurs portables. Si les ventes de PC baissent comme prévu, les fabricants pourraient revoir leurs prix ou leurs gammes. Côté épargne, un fonds mondial de grandes entreprises peut contenir Intel ou des valeurs de puces.",
    "next": [
      {
        "when": "Fin 2026",
        "what": "Intel doit lancer sa technologie de fabrication 18A-P pour ses propres produits d’ici la fin de l’année [5]."
      }
    ],
    "figures": [
      {
        "value": "−29 %",
        "label": "recul de l’action Intel vendredi 30 octobre (65,76 $), pire séance depuis 1974",
        "src": 1
      },
      {
        "value": "−12 %",
        "label": "livraisons de PC attendues par Intel en 2026",
        "src": 1
      },
      {
        "value": "12 Md$",
        "label": "valeur perdue sur le papier par la participation de l’État américain",
        "src": 6
      }
    ],
    "culture": [],
    "dossiers": [
      "semi-conducteurs"
    ],
    "sources": [
      {
        "short": "Yahoo Finance",
        "name": "Yahoo Finance, « Intel shares plunge almost 30% as PC weakness and supply constraints overshadow server growth » (30 oct. 2026)",
        "url": "https://finance.yahoo.com/technology/articles/intel-shares-plunge-almost-30-165700205.html"
      },
      {
        "short": "TechSpot",
        "name": "TechSpot, « Intel stock plunges nearly 30%, its worst day in 52 years » (30 oct. 2026)",
        "url": "https://www.techspot.com/news/114402-intel-stock-plunges-nearly-30-worst-day-52.html"
      },
      {
        "short": "Global Banking & Finance",
        "name": "Global Banking & Finance, « Intel on course for worst day ever, triggers global chip rout » (30 oct. 2026)",
        "url": "https://www.globalbankingandfinance.com/intel-warning-sparks-chip-rout-pc-weakness-clouds-turnaround/"
      },
      {
        "short": "Intel (SEC)",
        "name": "Intel, communiqué de résultats du 3e trimestre 2026 déposé auprès de la SEC (29 oct. 2026)",
        "url": "https://www.sec.gov/Archives/edgar/data/0000050863/000005086326000188/q326earningsrelease.htm"
      },
      {
        "short": "Benzinga",
        "name": "Benzinga, « Intel Q3 2026 Earnings Call Transcript » (29 oct. 2026)",
        "url": "https://www.benzinga.com/news/26/10/62725076/intel-q3-2026-earnings-call-transcript"
      },
      {
        "short": "Inshorts",
        "name": "Inshorts, « Intel shares fall 30% in worst day in decades, US govt stake loses $12 billion » (30 oct. 2026)",
        "url": "https://inshorts.com/en/news/intel-shares-fall-30--in-worst-day-in-decades--us-govt-stake-loses--12-billion-1793419164143"
      },
      {
        "short": "Kontan (Reuters)",
        "name": "Kontan, « Intel Shares Slump 26% as Turnaround Struggle Deepens » (2 août 2024)",
        "url": "https://english.kontan.co.id/news/intel-shares-slump-26-as-turnaround-struggle-deepens"
      },
      {
        "short": "Fox Business",
        "name": "Fox Business, « Intel shares sink with 15% of workforce getting axed, suspends dividend » (2 août 2024)",
        "url": "https://foxbusiness.com/markets/intel-shares-sink-15-workforce-getting-axed-suspends-dividend"
      },
      {
        "short": "Korea JoongAng Daily",
        "name": "Korea JoongAng Daily (Reuters), « Investors dump tech stocks after record $593 billion Nvidia loss » (janv. 2025)",
        "url": "https://www.koreajoongangdaily.com/business/investors-dump-tech-stocks-after-record-593-billion-nvidia-loss/12473281"
      }
    ],
    "deep": {
      "explainer": {
        "title": "Comment ça marche : pourquoi une prévision décevante fait plus mal qu’un bon trimestre",
        "text": "Une action reflète les profits que les investisseurs attendent dans les mois à venir, pas ceux déjà réalisés. Intel a pourtant battu les attentes sur le trimestre écoulé, mais sa prévision pour le dernier trimestre (15 à 16 milliards de dollars de ventes, marge brute vers 38 %) était en dessous de ce que le marché avait prévu [1][4]. Quand la prévision baisse, les analystes refont leurs calculs : plusieurs banques ont abaissé leur objectif de cours, dont Bank of America de 145 à 100 dollars [1]. Les ordres de vente tombent alors tous à l’ouverture, d’où une baisse de près de 30 % en une séance. Le secteur suit parce qu’une entreprise de puces sert de baromètre aux autres [3]."
      }
    },
    "past": {
      "title": "Les grandes chutes d’un géant de la puce",
      "items": [
        {
          "when": "2 août 2024",
          "what": "Intel avait déjà perdu 26 % en une journée, à 21,48 dollars, après l’annonce de la suspension de son dividende et de la suppression de plus de 15 % de ses postes [7][8].",
          "lesson": "À l’époque, la baisse venait des coûts à réduire ; en 2026, elle vient d’un marché de PC qui se contracte [1][7]."
        },
        {
          "when": "Juillet 1974",
          "what": "L’action Intel avait perdu 31 % en une séance, la pire baisse de son histoire selon une source ; la séance du 30 octobre 2026 est la pire depuis cette date [1][7].",
          "lesson": "La chute d’août 2024 n’était alors que la deuxième plus forte de l’histoire du titre [7]."
        },
        {
          "when": "27 janvier 2025",
          "what": "Nvidia a perdu 17 % et environ 593 milliards de dollars de valeur en une séance après l’apparition d’une IA chinoise bon marché, DeepSeek [9].",
          "lesson": "Un choc sur un seul acteur de la puce entraîne tout le secteur, comme le 30 octobre 2026 [3][9]."
        }
      ]
    },
    "markets": {
      "text": "Le secteur des puces est entraîné par la baisse d’Intel [3].",
      "items": [
        {
          "name": "Intel",
          "ticker": "INTC",
          "move": "près de −29 %",
          "why": "Clôture à 65,76 dollars vendredi 30 octobre après une prévision de ventes et de marge décevante [1]."
        }
      ]
    }
  },
  {
    "id": "2026-11-01-or-chute-sous-3900-dollars",
    "date": "2026-11-01",
    "region": "Amériques",
    "theme": "fin",
    "zones": [
      "Europe",
      "Asie",
      "Moyen-Orient"
    ],
    "geo": [
      {
        "name": "New York, États-Unis",
        "label": "Or et argent",
        "coords": [
          -74,
          40.71
        ]
      }
    ],
    "title": "L’or tombe sous 3 900 dollars, son plus bas niveau en un an, et l’argent perd 6 %",
    "summary": "Vendredi 30 octobre, l’once d’or a perdu 3,5 % et clôturé autour de 3 880 dollars, un plus bas depuis plus d’un an. L’argent a reculé de 6 %. La chute de la tech, la hausse du pétrole et la perspective d’une hausse des taux américains pèsent [1][2][3].",
    "points": [
      "L’or comptant valait environ 3 879,90 dollars l’once vendredi soir, soit 141,60 dollars (3,52 %) de moins que la veille ; son plus bas de la semaine, 3 870,25 dollars, est le niveau le plus faible depuis plus d’un an [1].",
      "L’argent a perdu 6,06 %, à 49,015 dollars l’once, et près de 9 % en une semaine, sa pire semaine depuis début juin [1].",
      "Selon Kitco, la séance de Wall Street, menée par la tech, a poussé des investisseurs à vendre leurs métaux précieux pour couvrir des pertes ailleurs [1]. TradingKey ajoute la hausse du pétrole, une inflation américaine plus élevée et l’idée d’une hausse des taux de la Réserve fédérale (Fed) en décembre [3].",
      "L’indice des prix PCE, préféré de la Fed, est ressorti à 3,6 % sur un an en septembre, dont 3,1 % hors énergie et alimentation, selon un résumé de l’inflation du 29 octobre [5]. La Fed a relevé son taux à 3,75-4,00 % le 16 septembre et l’a gardé le 28 octobre, avec deux voix pour une nouvelle hausse [4].",
      "Les prévisions divergent : StoneX voit l’or revenir vers 3 000 dollars et l’argent dans le haut des 30 dollars ; CPM Group évoque 3 950 ou 3 800 dollars pour l’or [1]."
    ],
    "why": [
      "À retenir : l’or sert de valeur refuge, et pourtant il baisse quand tout baisse. En période de stress, les investisseurs vendent ce qui a le mieux marché pour récupérer du cash [1].",
      "L’or ne rapporte aucun intérêt. Quand les taux montent, détenir des obligations ou des liquidités rapporte plus, et l’or devient moins attractif : c’est le mécanisme que les analystes citent pour décembre [3][4].",
      "Le métal vient de loin. Il avait atteint un record d’environ 5 595 dollars l’once le 29 janvier 2026, puis il a perdu 9,5 % le lendemain ; il cotait 4 132,99 dollars le 20 octobre, soit 26 % sous ce sommet [6][9]. Avec moins de 3 900 dollars, il est maintenant plus de 30 % sous ce record [1][9]."
    ],
    "forMe": "L’or physique (pièces, lingots) et les fonds sur l’or suivent ces mouvements. Pour un épargnant français, ce n’est pas une garantie de stabilité : le prix peut chuter de plusieurs pour cent en un jour, comme vendredi.",
    "next": [
      {
        "when": "Décembre 2026",
        "what": "Une hausse des taux de la Fed est jugée probable par les marchés, avec plus de 80 % de chances selon un résumé de marché [4]."
      }
    ],
    "figures": [
      {
        "value": "−3,5 %",
        "label": "recul de l’once d’or vendredi 30 octobre, à environ 3 880 $",
        "src": 1
      },
      {
        "value": "−6 %",
        "label": "recul de l’argent le même jour, à 49 $ l’once",
        "src": 1
      },
      {
        "value": "5 595 $",
        "label": "record historique de l’or, le 29 janvier 2026",
        "src": 9
      }
    ],
    "culture": [],
    "dossiers": [
      "dollar",
      "inflation-taux"
    ],
    "sources": [
      {
        "short": "Kitco (rapport du soir)",
        "name": "Kitco, « Gold falls below $3,900, silver tumbles as Wall Street selloff triggers liquidation » (30 oct. 2026)",
        "url": "https://www.kitco.com/news/article/2026-10-30/gold-falls-below-3900-silver-tumbles-wall-street-selloff-triggers"
      },
      {
        "short": "Kitco (plus bas)",
        "name": "Kitco, « Gold prices plunge to one-year low below $3,900 as higher oil prices fuel fears of more pain ahead » (30 oct. 2026)",
        "url": "https://www.kitco.com/news/article/2026-10-30/gold-prices-plunge-one-year-low-below-3900-higher-oil-prices-fuel-fears"
      },
      {
        "short": "TradingKey",
        "name": "TradingKey, « Spot Gold Plunges 3% to Breach $3,900: What Caused the Drop in Gold Prices? » (30 oct. 2026)",
        "url": "https://www.tradingkey.com/analysis/commodities/metal/262261037-gold-prices-fall-below-3900-silver-what-causes-prices-to-drop-tradingkey"
      },
      {
        "short": "Yahoo Finance (PCE)",
        "name": "Yahoo Finance, « PCE report: Fed’s preferred inflation measure hits 3-year high, keeping talk of possible rate hike in play » (29 oct. 2026)",
        "url": "https://finance.yahoo.com/economy/policy/article/pce-report-feds-preferred-inflation-measure-hits-3-year-high-keeping-talk-of-possible-rate-hike-in-play-124158491.html"
      },
      {
        "short": "StockTitan (PCE)",
        "name": "StockTitan, « PCE Inflation Report: Core Inflation Rose to 3.1% a Day After the Fed Held Rates » (29 oct. 2026)",
        "url": "https://www.stocktitan.net/articles/september-2026-pce-inflation-data"
      },
      {
        "short": "CBS News",
        "name": "CBS News, « What is the highest gold price in history? Here’s how it’s changed over the past year » (2026)",
        "url": "https://www.cbsnews.com/news/highest-gold-price-in-history-how-its-changed-from-2025-to-2026/"
      },
      {
        "short": "Business Standard (Reuters)",
        "name": "Business Standard (Reuters), « Gold collapses as investors race for exits, brace for end of bull market » (16 avr. 2013)",
        "url": "https://www.business-standard.com/amp/article/reuters/gold-collapses-as-investors-race-for-exits-brace-for-end-of-bull-market-113041600036_1.html"
      },
      {
        "short": "Business Standard (2025)",
        "name": "Business Standard, « Gold prices tumble 6% in biggest drop since 2013 as investors rush to buy » (oct. 2025)",
        "url": "https://www.business-standard.com/amp/world-news/gold-prices-tumble-6-in-biggest-drop-since-2013-as-investors-rush-to-buy-125102600784_1.html"
      },
      {
        "short": "EBC",
        "name": "EBC, « Highest Gold Price Ever: How Gold Reached $5,595 Faster Than Past Cycles » (2026)",
        "url": "https://www.ebc.com/forex/gold-highest-price-ever-xauusd-record-2026"
      }
    ],
    "deep": {
      "explainer": {
        "title": "Comment ça marche : pourquoi l’or baisse quand les taux montent",
        "text": "L’or ne verse ni intérêt ni dividende : son seul rendement est la hausse de son prix. Quand la Fed relève ses taux, les obligations et les comptes rémunérés rapportent davantage, et certains investisseurs vendent de l’or pour les acheter ; TradingKey cite cette attente d’une hausse en décembre parmi les causes de la chute [3][4]. Un deuxième mécanisme joue en cas de panique : quand les actions s’effondrent, des investisseurs qui ont emprunté doivent rendre de l’argent, vendent leurs placements les plus liquides, dont l’or et l’argent, même s’ils croient à leur valeur. Kitco parle de « liquidation » [1]."
      }
    },
    "past": {
      "title": "Les grandes chutes de l’or",
      "items": [
        {
          "when": "15 avril 2013",
          "what": "L’or a perdu environ 9 % en une séance, sa plus forte baisse depuis 1983, et l’argent 11 %, ce qui a confirmé un marché baissier (30 % sous le record de septembre 2011) [7].",
          "lesson": "La baisse a marqué la fin d’un cycle de hausse de 12 ans [7]."
        },
        {
          "when": "21 octobre 2025",
          "what": "Après un record d’environ 4 381 dollars la veille, l’or a perdu près de 6 %, sa pire séance depuis 2013 (contrat de décembre à 4 087,70 dollars, -5,7 %) [8].",
          "lesson": "La chute n’a pas été la fin du mouvement : l’or a atteint 5 595 dollars le 29 janvier 2026 [9]."
        },
        {
          "when": "30 janvier 2026",
          "what": "Au lendemain du record historique de 5 594,82 dollars, l’or a perdu 9,5 % en une séance, sa plus forte chute depuis 1983 [9].",
          "lesson": "Le 20 octobre 2026, il cotait 4 132,99 dollars, 26 % sous ce record ; le 30 octobre, moins de 3 900 [6][1]."
        }
      ]
    }
  },
  {
    "id": "2026-11-01-mobico-national-express-rachat-leita",
    "date": "2026-11-01",
    "region": "Europe",
    "theme": "fin",
    "zones": [
      "Europe"
    ],
    "geo": [
      {
        "name": "Birmingham, Royaume-Uni",
        "label": "Royaume-Uni",
        "coords": [
          -1.9,
          52.49
        ]
      },
      {
        "name": "León, Espagne",
        "label": "Espagne",
        "coords": [
          -5.57,
          42.6
        ]
      }
    ],
    "title": "National Express passe sous pavillon espagnol : Mobico accepte 308 millions de livres, car sa dette l’étouffe",
    "summary": "Le conseil de Mobico, propriétaire du transporteur britannique National Express, recommande une offre en cash de 46 pence par action du groupe espagnol Autobuses de León. L’action a gagné 11 % vendredi 30 octobre. Le rachat inclut plus d’un milliard de livres de dette [1][2][3].",
    "points": [
      "L’offre de Leita Mobility, filiale d’Autobuses de León, vaut 46 pence par action en espèces, soit environ 308 millions de livres pour les actions et environ 2,3 milliards avec la dette [1][3].",
      "Elle dépasse de 55,1 % le cours du 20 octobre (29,7 pence) et de 89,3 % la moyenne des six derniers mois [1][2].",
      "Autobuses de León appartient à 50,1 % à la famille Cosmen (CMC Group) et à 49,9 % au fonds Asterion. CMC détient déjà environ 26 % de Mobico [1].",
      "La dette nette de Mobico atteignait 1,134 milliard de livres au 31 mars, avec un ratio d’endettement de 2,9 fois selon ses critères bancaires, contre un objectif de 1,5 à 2 fois. Environ 230 millions de livres de dette américaine arrivent à échéance en mai et juin 2027 [1].",
      "L’action a clôturé à 38,6 pence le 29 octobre et a gagné 11 % le lendemain, vers 44 pence, soit un peu moins que les 46 pence offerts [2][4].",
      "Phil White, président de Mobico, juge l’offre « un bon résultat » pour les parties prenantes. Des actionnaires représentant 26,2 % du capital se sont déjà engagés à voter pour [1][2]."
    ],
    "why": [
      "À retenir : ce rachat est surtout un sauvetage. Le conseil écrit qu’avec sa dette et le refinancement de 2027, le groupe aurait un avenir trop incertain seul [1][3].",
      "Mobico est tombé bas : l’action valait moins de 18 pence en mars, et sa note de crédit a été abaissée au niveau « spéculatif » [4][9]. L’offre initiale, plus basse, valait environ 282 millions de livres [9].",
      "C’est aussi le signe d’un mouvement plus large : des entreprises britanniques cotées à bas prix sont rachetées par des groupes étrangers ou des fonds, ce que les médias appellent une vague de retraits de la Bourse de Londres [9]."
    ],
    "forMe": "Si tu voyages en bus au Royaume-Uni, National Express continue de rouler et rien n’indique dans l’annonce un changement de billets à court terme. Pour un actionnaire, le prix est fixé en espèces à 46 pence [1][2].",
    "next": [
      {
        "when": "Premier semestre 2027",
        "what": "Fin visée du rachat, sous réserve de l’accord des autorités et du vote des actionnaires lors d’une assemblée judiciaire (Court Meeting) [1]."
      }
    ],
    "figures": [
      {
        "value": "46 pence",
        "label": "offre en cash par action, 55,1 % au-dessus du cours du 20 octobre",
        "src": 1
      },
      {
        "value": "+11 %",
        "label": "hausse de l’action Mobico vendredi 30 octobre",
        "src": 2
      },
      {
        "value": "1,134 Md£",
        "label": "dette nette au 31 mars 2026",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Annonce officielle (RNS)",
        "name": "Mobico Group, « Recommended Cash Acquisition for Mobico Group PLC » (30 oct. 2026)",
        "url": "https://www.investegate.co.uk/announcement/rns/mobico-group--mcg/recommended-cash-acquisition-for-mobico-group-plc/9849217"
      },
      {
        "short": "Investing.com",
        "name": "Investing.com, « Mobico shares jump 11% after accepting £308 million takeover bid from Leita » (30 oct. 2026)",
        "url": "https://www.investing.com/news/stock-market-news/mobico-shares-jump-11-after-accepting-308-million-takeover-bid-from-leita-93CH-4986414"
      },
      {
        "short": "BDaily",
        "name": "BDaily, « National Express owner Mobico set for £308 million takeover » (30 oct. 2026)",
        "url": "https://bdaily.co.uk/articles/2026/10/30/national-express-owner-mobico-set-for-ps308-million-takeover"
      },
      {
        "short": "Yahoo Finance UK",
        "name": "Yahoo Finance UK, « Mobico Group Agrees £308 Million Cash Takeover by Cosmen Family and Asterion Consortium » (30 oct. 2026)",
        "url": "https://uk.finance.yahoo.com/news/mobico-group-agrees-308-million-075709593.html"
      },
      {
        "short": "Shares Magazine",
        "name": "Shares Magazine, « Spectris shares jump 15% after Advent takeover offer agreed » (2025)",
        "url": "https://sharesmagazine.co.uk/news/shares/spectris-shares-jump-15-after-advent-takeover-offer-agreed"
      },
      {
        "short": "AJ Bell (Alliance News)",
        "name": "AJ Bell (Alliance News), « Advent says bid for Spectris final, leaving way clear for KKR » (2025)",
        "url": "https://www.ajbell.co.uk/news/articles/brief-advent-says-bid-spectris-final-leaving-way-clear-kkr"
      },
      {
        "short": "Bloomberg Law",
        "name": "Bloomberg Law, « CVC, ADIA Agree to Buy Hargreaves Lansdown in £5.4 Billion Deal » (août 2024)",
        "url": "https://news.bloomberglaw.com/us-law-week/cvc-adia-agree-to-buy-hargreaves-lansdown-in-5-4-billion-deal"
      },
      {
        "short": "Morningstar UK",
        "name": "Morningstar UK, « Hargreaves Lansdown shareholders approve CVC-led takeover » (oct. 2024)",
        "url": "https://morningstar.co.uk/uk/news/AN_1728981468567561500/in-brief-hargreaves-lansdown-shareholders-approve-cvc-led-takeover.aspx"
      },
      {
        "short": "Traders Union",
        "name": "Traders Union, « Mobico enters talks on £282mn take-private deal amid London delisting wave » (oct. 2026)",
        "url": "https://tradersunion.com/news/companies/show/3908203-mobico-takeover-talks-delisting/"
      }
    ],
    "deep": {
      "explainer": {
        "title": "Comment ça marche : pourquoi l’action monte, mais reste sous le prix de l’offre",
        "text": "Quand un acheteur propose 46 pence en espèces, l’action monte vers ce prix, car chaque actionnaire peut espérer vendre à ce niveau [2]. Elle ne l’atteint pas tout de suite : à 44 pence, l’écart de 2 pence mesure le risque que l’opération échoue ou traîne [4]. Ici, il faut l’accord des actionnaires lors d’une assemblée judiciaire et des autorités, avec une fin visée au premier semestre 2027 [1]. Si le deal est signé comme prévu, l’écart se referme ; s’il échoue, l’action peut retomber, vers 29,7 pence avant l’annonce [1]. L’acheteur paie une prime élevée (55,1 %), car c’est ce qu’il faut pour convaincre des actionnaires qui ont perdu de l’argent [1]."
      }
    },
    "past": {
      "title": "Des rachats d’entreprises cotées à Londres",
      "items": [
        {
          "when": "2025",
          "what": "Spectris (instruments de mesure) : le fonds Advent offre une prime de 85 % par rapport au cours avant l’annonce et l’action gagne 15 % ; après une guerre d’enchères, KKR l’emporte à 4 147 pence en cash plus 28 pence de dividende (4,2 milliards de livres), avec 99,9 % de votes favorables [5][6].",
          "lesson": "L’arrivée d’un second acheteur a fait monter le prix de 4 100 à 4 175 pence au total [6]."
        },
        {
          "when": "Août 2024",
          "what": "Hargreaves Lansdown : le consortium CVC, Nordic Capital et le fonds d’Abu Dhabi ADIA passe de 985 à 1 140 pence par action (5,4 milliards de livres), 54,1 % au-dessus du cours d’avant l’approche [7].",
          "lesson": "Les actionnaires ont approuvé le rachat en octobre 2024 [8]."
        }
      ]
    },
    "markets": {
      "text": "Seul Mobico est concerné par l’offre.",
      "items": [
        {
          "name": "Mobico Group (National Express)",
          "ticker": "MCG",
          "move": "+11 %",
          "why": "L’action a gagné 11 % vendredi 30 octobre après l’annonce de l’offre à 46 pence par action [2]."
        }
      ]
    }
  },
  {
    "id": "2026-11-01-peso-philippin-record-64-pour-un-dollar",
    "date": "2026-11-01",
    "region": "Asie",
    "theme": "fin",
    "zones": [
      "Asie"
    ],
    "geo": [
      {
        "name": "Manille, Philippines",
        "label": "Philippines",
        "coords": [
          120.98,
          14.6
        ]
      }
    ],
    "title": "Le peso philippin passe sous 64 pour un dollar, malgré une hausse surprise des taux",
    "summary": "Le peso philippin a clôturé à 64,17 pour un dollar mardi 27 octobre, un record. Cinq jours plus tôt, la banque centrale avait relevé son taux de 0,5 point, à 5,5 %. Pétrole cher et déficit extérieur pèsent sur la monnaie [1][2][3].",
    "points": [
      "Le peso a franchi pour la première fois 64 pour un dollar en cours de séance mardi 27 octobre, puis clôturé à 64,17 contre 63,95 la veille, nouveau record [1][2]. Le 23 octobre, c’était déjà son 31e plus bas de l’année, à 63,615 [6].",
      "Le 22 octobre, la banque centrale (BSP) a relevé son taux directeur de 0,5 point, à 5,5 %, quatrième hausse d’affilée. Les 27 économistes interrogés par Reuters attendaient 0,25 point [3][4].",
      "C’est la première hausse de 0,5 point depuis février 2023. Le gouverneur Eli Remolona dit : « nous ne ferions pas 50 points de base si nous ne pensions pas être un peu en retard » [4][5].",
      "Il affirme aussi que la banque ne relève pas son taux pour défendre le peso [1]. La BSP juge le pétrole cher, les transports plus chers et les risques liés à El Niño responsables de l’inflation [4].",
      "La banque prévoit un déficit de la balance des paiements de 9,2 milliards de dollars et un déficit courant de 19,1 milliards en 2026 [1]. Elle se dit prête à agir de nouveau [3]."
    ],
    "why": [
      "À retenir : les Philippines importent beaucoup de pétrole, qui se paie en dollars. Plus le pétrole est cher, plus il faut de pesos pour acheter des dollars, ce qui affaiblit la monnaie [1]. Un peso faible renchérit à son tour les importations, dont l’essence : c’est le cercle de l’inflation importée [1].",
      "La Fed américaine pèse aussi : l’attente d’une hausse de taux en décembre attire les capitaux vers le dollar [1].",
      "La banque centrale a un dilemme : relever ses taux freine l’inflation mais ralentit la croissance. Remolona dit avoir estimé de combien le peso doit bouger pour devenir inflationniste, et que c’est alors que la banque intervient [1][4]. Un conseiller cité par un site financier craint un test du seuil de 65 pesos pour un dollar tant que les tensions persistent [10]."
    ],
    "forMe": "Si tu voyages aux Philippines, l’effet dépend du cours de l’euro face au dollar. Pour les Philippins, la facture de l’essence et des produits importés grimpe quand le peso baisse, ce qui nourrit l’inflation [1][4].",
    "next": [
      {
        "when": "Prochaines réunions de la BSP",
        "what": "Remolona dit rester ouvert à de nouvelles hausses de taux [3]."
      }
    ],
    "figures": [
      {
        "value": "64,17",
        "label": "pesos pour un dollar à la clôture du 27 octobre, record",
        "src": 1
      },
      {
        "value": "5,5 %",
        "label": "taux directeur de la BSP après la hausse surprise de 0,5 point du 22 octobre",
        "src": 3
      },
      {
        "value": "31",
        "label": "31e plus bas historique du peso, atteint le 23 octobre",
        "src": 6
      }
    ],
    "culture": [],
    "dossiers": [
      "dollar",
      "inflation-taux"
    ],
    "sources": [
      {
        "short": "Rappler",
        "name": "Rappler, « Philippine peso’s historic slide continues, hitting record low P64.17 per dollar » (27 oct. 2026)",
        "url": "https://www.rappler.com/business/philippine-peso-dollar-exchange-rate-record-low-october-27-2026/"
      },
      {
        "short": "Philstar",
        "name": "Philstar, « Peso sinks past 64-level vs dollar, hits fresh low » (27 oct. 2026)",
        "url": "https://www.philstar.com/business/2026/10/27/2566081/peso-sinks-past-64-level-vs-dollar-hits-fresh-low"
      },
      {
        "short": "BusinessWorld",
        "name": "BusinessWorld, « BSP surprises with jumbo rate hike, signals further tightening » (22 oct. 2026)",
        "url": "https://bworldonline.com/top-stories/2026/10/22/788741/bsp-surprises-with-jumbo-rate-hike-signals-further-tightening/"
      },
      {
        "short": "Manila Bulletin",
        "name": "Manila Bulletin, « BSP delivers jumbo 50-basis-point rate hike as inflation pressures broaden » (22 oct. 2026)",
        "url": "https://mb.com.ph/2026/10/22/bsp-delivers-jumbo-50-basis-point-rate-hike-as-inflation-pressures-broaden"
      },
      {
        "short": "Bilyonaryo",
        "name": "Bilyonaryo, « ‘Kind of behind the curve’: Remolona hikes 50 bps, floats 8% inflation in 2027 » (oct. 2026)",
        "url": "https://bnc.bilyonaryo.com/kind-of-behind-the-curve-remolona-hikes-50-bps-floats-8-inflation-in-2027/business/"
      },
      {
        "short": "Philstar (23 oct.)",
        "name": "Philstar, « Philippine peso sinks to 31st record low at P63.615 » (23 oct. 2026)",
        "url": "https://www.philstar.com/headlines/2026/10/23/2565242/philippine-peso-sinks-31st-record-low-p63615"
      },
      {
        "short": "Philstar (2022)",
        "name": "Philstar, « Peso slumps by 9.3% in 2022 » (30 déc. 2022)",
        "url": "https://www.philstar.com/business/2022/12/30/2234129/peso-slumps-93-2022"
      },
      {
        "short": "MUFG",
        "name": "MUFG Research, note FX sur les Philippines (2022)",
        "url": "https://mufgresearch.com/umbraco/surface/download/PrintPage/3789"
      },
      {
        "short": "FMI",
        "name": "IMF, document sur la crise asiatique de 1997 (float du peso le 11 juillet 1997)",
        "url": "https://www.imf.org/external/pubs/ft/icm/97icm/pdf/file07.pdf"
      },
      {
        "short": "EBC",
        "name": "EBC, « Philippine Peso Hits Record Low of ₱64.17: What Comes Next? » (oct. 2026)",
        "url": "https://www.ebc.com/forex/philippine-peso-record-low-64-usd-php-outlook"
      }
    ],
    "deep": {
      "explainer": {
        "title": "Comment ça marche : pourquoi une hausse de taux ne sauve pas toujours la monnaie",
        "text": "Relever son taux directeur rend une monnaie plus attrayante : les investisseurs étrangers y gagnent plus. Mais cela ne marche que si ce taux est supérieur à ce que la Fed offre en dollars, et si les investisseurs ont confiance. Ici, la BSP a augmenté de 0,5 point alors que les marchés attendaient 0,25 : le peso a pourtant continué de baisser, parce que le pétrole cher et les déficits extérieurs créent une demande de dollars [1][3]. La banque dit d’ailleurs viser l’inflation, pas le cours du peso [1][4]. Remolona affirme que la hausse du 22 octobre n’a pas pour but de défendre le peso [1]."
      }
    },
    "past": {
      "title": "Quand le peso a lâché",
      "items": [
        {
          "when": "Octobre 2022",
          "what": "Le peso a atteint 59 pour un dollar, un record d’alors, et perdu 9,3 % sur l’année, avec une Fed qui relevait fortement ses taux [7].",
          "lesson": "La BSP avait relevé ses taux plus fort que prévu pour contenir l’inflation importée, avec peu d’effet sur le peso [8]."
        },
        {
          "when": "Juillet 1997",
          "what": "Le 11 juillet 1997, après la chute du baht thaïlandais, les Philippines ont laissé flotter le peso ; il est passé de 26,40 à 42,7 pour un dollar en janvier 1998 [9].",
          "lesson": "La banque centrale avait relevé ses taux au jour le jour jusqu’à 32 % et perdu plus de 1,5 milliard de dollars de réserves entre le 2 et le 10 juillet [9]."
        }
      ]
    }
  },
  {
    "id": "2026-11-01-coree-exportations-octobre",
    "date": "2026-11-01",
    "level": 2,
    "region": "Asie",
    "theme": "eco",
    "zones": [
      "Amérique du Nord"
    ],
    "geo": [
      {
        "name": "Séoul, Corée du Sud",
        "label": "Corée du Sud",
        "coords": [
          126.98,
          37.57
        ]
      }
    ],
    "title": "Corée du Sud : les exportations presque doublent en un an, portées par les puces",
    "summary": "Les exportations sud-coréennes ont atteint un record de 115,3 milliards de dollars en octobre, soit 93,7 % de plus qu'un an plus tôt. Les semi-conducteurs expliquent l'essentiel de ce bond, tiré par la demande d'intelligence artificielle [1][2].",
    "points": [
      "Les ventes à l'étranger ont atteint 115,3 milliards de dollars en octobre, contre 59,57 milliards en octobre 2025, mois raccourci par de longs congés [1][5].",
      "Les puces représentent 56,4 milliards de dollars, en hausse de 259 % sur un an [1].",
      "Les envois vers la Chine ont augmenté de 133,6 % (26,98 milliards de dollars) et vers les États-Unis de 185,8 % (24,9 milliards) [1].",
      "Les importations ont progressé de 36 % (72,78 milliards), d'où un excédent commercial de 42,5 milliards ; sur dix mois, les exportations dépassent 900 milliards de dollars pour la première fois [1]."
    ],
    "why": [
      "Le ministère du Commerce, de l'Industrie et des Ressources attribue la hausse à la forte demande mondiale de semi-conducteurs et aux investissements continus des géants de la tech dans les infrastructures d'IA [1].",
      "Le mois d'octobre 2025 servait de base basse (+3,6 % seulement), ce qui amplifie le pourcentage ; dès la première moitié du mois, la tendance était déjà visible : 61,6 milliards de dollars sur les 20 premiers jours, soit 105,4 % de plus [3][5]."
    ],
    "forMe": "Les puces représentent près de la moitié de ce que la Corée vend au monde : son économie dépend donc du cycle de l'IA [1][3].",
    "next": [],
    "figures": [
      {
        "value": "115,3 Md$",
        "label": "exportations sud-coréennes en octobre",
        "src": 1
      },
      {
        "value": "+259 %",
        "label": "exportations de puces sur un an",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "semi-conducteurs"
    ],
    "sources": [
      {
        "short": "Korea Times",
        "name": "The Korea Times, « Korea's monthly exports hit $115.3 bil. in Oct. on strong chip sales » (1er novembre 2026)",
        "url": "https://www.koreatimes.co.kr/economy/20261101/koreas-monthly-exports-hit-1153-bil-in-oct-on-record-chip-sales"
      },
      {
        "short": "JoongAng Daily",
        "name": "Korea JoongAng Daily, « South Korea exports hit record $115.3 billion in October on chip demand » (1er novembre 2026)",
        "url": "https://www.koreajoongangdaily.com/business/exports-jump-nearly-94-in-october-to-hit-record-1153-billion-on-chip-demand/12948409"
      },
      {
        "short": "Korea Times (20 jours)",
        "name": "The Korea Times, « Exports double in 1st 20 days of October on robust chip shipments » (21 octobre 2026)",
        "url": "https://www.koreatimes.co.kr/economy/20261021/exports-double-in-1st-20-days-of-october-on-robust-chip-shipments"
      },
      {
        "short": "MoneyToday",
        "name": "MoneyToday, « Semiconductor exports hit $27.5 billion as Korea's mid-October exports reach record high » (21 octobre 2026)",
        "url": "https://www.mt.co.kr/en/economy/2026/10/21/2026102108331616913"
      },
      {
        "short": "WAM",
        "name": "WAM, « Korea's exports up for 5th month at $59.57 billion in October » (novembre 2025)",
        "url": "https://www.wam.ae/en/article/15ulfwi-koreas-exports-for-5th-month-5957-billion-october"
      }
    ]
  },
  {
    "id": "2026-11-01-suisse-bns-benefice-neuf-mois",
    "date": "2026-11-01",
    "level": 2,
    "region": "Europe",
    "theme": "eco",
    "zones": [
      "Europe"
    ],
    "geo": [
      {
        "name": "Berne, Suisse",
        "label": "Suisse",
        "coords": [
          7.45,
          46.95
        ]
      }
    ],
    "title": "Suisse : la banque centrale engrange 44 milliards de francs en neuf mois",
    "summary": "La Banque nationale suisse (BNS) a annoncé le 30 octobre un bénéfice de 44,2 milliards de francs sur janvier-septembre, presque entièrement grâce à ses placements en devises étrangères. Cela relance l'espoir d'un versement à l'État en fin d'année [1][2].",
    "points": [
      "Le bénéfice des neuf premiers mois s'élève à 44,2 milliards de francs (environ 5,4 milliards de dollars selon Bloomberg) [1][2].",
      "Les positions en devises ont rapporté 43,3 milliards, l'or 1,2 milliard de francs de gain de valeur [1].",
      "Bloomberg note que ce résultat renforce la probabilité d'un versement à la Confédération en fin d'année [2].",
      "Le taux directeur reste à 0 % ; la prochaine évaluation de la BNS est prévue le 10 décembre [1][3]."
    ],
    "why": [
      "Dans le compte rendu publié le 22 octobre, la BNS juge que sa menace de vendre des francs n'est plus nécessaire, les achats de franc comme valeur refuge liés à la guerre s'étant calmés [3].",
      "Le franc a perdu environ 3 % depuis juin, car les placements en franc, à taux nul, servent de monnaie d'emprunt pour acheter des actifs mieux rémunérés ailleurs [4]."
    ],
    "forMe": "Si tu voyages en Suisse, le franc a perdu environ 3 % depuis juin face aux autres monnaies, ce qui allège un peu la facture [4].",
    "next": [
      {
        "when": "10 décembre 2026",
        "what": "La BNS tient sa prochaine évaluation de politique monétaire [1]."
      }
    ],
    "figures": [
      {
        "value": "44,2 Md CHF",
        "label": "bénéfice de la BNS sur neuf mois",
        "src": 1
      },
      {
        "value": "0 %",
        "label": "taux directeur de la BNS",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [
      "inflation-taux"
    ],
    "sources": [
      {
        "short": "Europa Wire",
        "name": "Europa Wire, « Swiss National Bank Reports CHF 44.2 Billion Profit for First Nine Months of 2026 » (30 octobre 2026)",
        "url": "https://news.europawire.eu/swiss-national-bank-reports-chf-44-2-billion-profit-for-first-nine-months-of-2026/eu-press-release/2026/10/30/13/54/03/185119/"
      },
      {
        "short": "Bloomberg (profit)",
        "name": "Bloomberg, « SNB Reports Nine-Month Profit on Foreign Currencies and Gold » (30 octobre 2026)",
        "url": "https://www.bloomberg.com/news/articles/2026-10-30/snb-reports-nine-month-profit-on-foreign-currencies-and-gold"
      },
      {
        "short": "Bloomberg (compte rendu)",
        "name": "Bloomberg, « SNB Judged Franc Threat No Longer Needed as Haven Flows Ebbed » (22 octobre 2026)",
        "url": "https://www.bloomberg.com/news/articles/2026-10-22/snb-judged-franc-threat-no-longer-needed-as-haven-flows-ebbed"
      },
      {
        "short": "Vantage Markets",
        "name": "Vantage Markets, « Swiss Franc Down 3% Since June, SNB Summary Reveals » (23 octobre 2026)",
        "url": "https://www.vantagemarkets.com/market-news/swiss-franc-snb-discussion-summary-carry-trade-october-23-2026/"
      }
    ]
  },
  {
    "id": "2026-11-01-mexique-pib-troisieme-trimestre",
    "date": "2026-11-01",
    "level": 2,
    "region": "Amériques",
    "theme": "eco",
    "zones": [
      "Amérique du Nord"
    ],
    "geo": [
      {
        "name": "Mexico, Mexique",
        "label": "Mexique",
        "coords": [
          -99.13,
          19.43
        ]
      }
    ],
    "title": "Mexique : l'économie ralentit moins que prévu au troisième trimestre",
    "summary": "L'institut statistique mexicain (INEGI) a estimé le 30 octobre que le PIB a progressé de 0,9 % au troisième trimestre, contre 1,4 % au précédent, et de 3,2 % sur un an. Les deux chiffres dépassent les attentes [1][2].",
    "points": [
      "Le PIB a augmenté de 0,9 % par rapport au deuxième trimestre, que les économistes voyaient plutôt autour de 0,7 % [1][2].",
      "Sur un an, la croissance atteint 3,2 %, au-dessus des 2,5 % à 3,0 % attendus selon les sources [2][3].",
      "Les services progressent de 1,1 %, l'industrie de 0,8 %, tandis que les activités primaires (agriculture, pêche) reculent de 0,4 % [1][4].",
      "De janvier à septembre, le PIB cumulé a gagné 1,8 %, selon Banamex [1]."
    ],
    "why": [
      "Il s'agit d'une première estimation : l'INEGI publiera les chiffres définitifs du trimestre le 29 janvier 2027, et ils peuvent être révisés [1][2].",
      "Selon l'une des sources, un rythme de 3,2 % sur un an serait le plus rapide depuis 2023 [3]."
    ],
    "forMe": "Si tu travailles avec le Mexique, son activité reste solide, avec des services en hausse de 1,1 % [1][4].",
    "next": [
      {
        "when": "29 janvier 2027",
        "what": "L'INEGI publie les chiffres définitifs du PIB du 3e trimestre [1]."
      }
    ],
    "figures": [
      {
        "value": "+0,9 %",
        "label": "PIB mexicain au 3e trimestre",
        "src": 1
      },
      {
        "value": "+3,2 %",
        "label": "croissance sur un an",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Mexico News Daily",
        "name": "Mexico News Daily, « Mexico's third-quarter economic growth was 0.9%, slowing but above expectations » (30 octobre 2026)",
        "url": "https://mexiconewsdaily.com/business/mexicos-third-quarter-economic-growth-was-0-9-slowing-but-above-expectations/"
      },
      {
        "short": "Mexico Business News",
        "name": "Mexico Business News, « Mexico 3Q2026 GDP Expands 0.9% » (30 octobre 2026)",
        "url": "https://mexicobusiness.news/policyandeconomy/news/mexico-3q2026-gdp-expands-09"
      },
      {
        "short": "Briefs",
        "name": "Briefs, « Mexico GDP Rises 3.2% in Q3, Beats Forecasts » (30 octobre 2026)",
        "url": "https://www.briefs.co/news/mexico-s-economy-grew-3-2-in-third-quarter-beating-forecasts/"
      },
      {
        "short": "Rio Times",
        "name": "The Rio Times, « Mexico Economy Grows 0.9% in Third Quarter » (30 octobre 2026)",
        "url": "https://www.riotimesonline.com/mexico-economy-grows-0-9-third-quarter/"
      }
    ]
  },
  {
    "id": "2026-11-01-canada-pib-stagne-hausse-taux",
    "date": "2026-11-01",
    "level": 2,
    "region": "Amériques",
    "theme": "eco",
    "zones": [
      "Amérique du Nord"
    ],
    "geo": [
      {
        "name": "Ottawa, Canada",
        "label": "Canada",
        "coords": [
          -75.7,
          45.42
        ]
      }
    ],
    "title": "Canada : l'économie fait du surplace, juste après une hausse des taux",
    "summary": "Statistique Canada a annoncé le 30 octobre que le PIB a stagné en août, deuxième mois plat de suite. Deux jours plus tôt, la Banque du Canada avait relevé son taux à 2,5 % [1][2][4].",
    "points": [
      "Le PIB réel est resté inchangé en août, alors que l'estimation avancée annonçait +0,2 % et que les économistes attendaient +0,1 % [1][2][3].",
      "Le commerce de gros recule de 1,4 % et l'administration fédérale baisse avec la fin du recensement ; le commerce de détail gagne 1,2 % [1][3].",
      "Pour septembre, l'estimation avancée table sur −0,1 % ; la croissance du trimestre serait d'environ 1,3 % en rythme annuel, contre 2 % prévus par la Banque du Canada [1][3].",
      "BMO réduit sa prévision 2026 à 1,5 %, contre 2 % [2]."
    ],
    "why": [
      "Le 28 octobre, la Banque du Canada a relevé son taux de 0,25 point, à 2,5 %, première hausse en plus de trois ans, pour éviter que le pétrole cher ne se propage aux autres prix [4][5].",
      "Son gouverneur Tiff Macklem a dit qu'une autre hausse pourrait être nécessaire mais qu'il avancerait prudemment ; la banque prévoit 2,9 % d'inflation en 2026 [5]. Une économie qui cale complique le choix."
    ],
    "forMe": "Si tu as un prêt à taux variable au Canada, son coût peut encore monter : la banque n'exclut pas une autre hausse [5].",
    "next": [],
    "figures": [
      {
        "value": "0,0 %",
        "label": "croissance du PIB canadien en août",
        "src": 1
      },
      {
        "value": "2,5 %",
        "label": "nouveau taux de la Banque du Canada",
        "src": 4
      }
    ],
    "culture": [],
    "dossiers": [
      "inflation-taux"
    ],
    "sources": [
      {
        "short": "Statistique Canada",
        "name": "Statistique Canada, « Le Quotidien : Produit intérieur brut par industrie, août 2026 » (30 octobre 2026)",
        "url": "https://www150.statcan.gc.ca/n1/daily-quotidien/261030/dq261030a-eng.htm"
      },
      {
        "short": "BNN Bloomberg",
        "name": "BNN Bloomberg, « Timing of next rate hike in question after surprise stall in August GDP » (30 octobre 2026)",
        "url": "https://www.bnnbloomberg.ca/business/economics/2026/10/30/timing-of-next-rate-hike-in-question-after-surprise-stall-in-august-gdp/"
      },
      {
        "short": "RBC Economics",
        "name": "RBC Economics, « Canadian economic growth stalled in August despite resilient consumer activity » (30 octobre 2026)",
        "url": "https://www.rbc.com/en/economics/canadian-analysis/data-flashes/canadian-economic-growth-stalled-in-august-despite-resilient-consumer-activity/"
      },
      {
        "short": "Banque du Canada",
        "name": "Banque du Canada, « Bank of Canada raises the policy rate by 25 basis points to 2½% » (28 octobre 2026)",
        "url": "https://www.bankofcanada.ca/2026/10/fad-press-release-2026-10-28/"
      },
      {
        "short": "CP24",
        "name": "CP24 / Presse canadienne, « Bank of Canada raises interest rate as inflation projected to worsen » (28 octobre 2026)",
        "url": "https://www.cp24.com/news/canada/2026/10/28/bank-of-canada-raises-key-interest-rate-says-another-hike-possible/"
      }
    ]
  },
  {
    "id": "2026-11-01-pays-bas-croissance-t3",
    "date": "2026-11-01",
    "level": 2,
    "region": "Europe",
    "theme": "eco",
    "zones": [
      "Europe"
    ],
    "geo": [
      {
        "name": "La Haye, Pays-Bas",
        "label": "Pays-Bas",
        "coords": [
          4.3,
          52.08
        ]
      }
    ],
    "title": "Pays-Bas : une croissance de 0,6 %, tirée par l'industrie",
    "summary": "L'économie néerlandaise a progressé de 0,6 % au troisième trimestre, selon une première estimation de l'office statistique CBS du 30 octobre. L'industrie y contribue le plus, et le deuxième trimestre est révisé à 0,7 % [1][2].",
    "points": [
      "Le PIB a gagné 0,6 % sur le trimestre, après 0,7 % au deuxième (révisé), la plus forte hausse trimestrielle en deux ans [1][2].",
      "L'industrie manufacturière contribue le plus ; ses exportations de machines à puces portent la croissance [2][4].",
      "La consommation des ménages et celle de l'État augmentent chacune de 0,4 % ; l'investissement recule de 0,1 % [2].",
      "Les importations progressent moins vite que les exportations, ce qui améliore la balance commerciale [1][2]."
    ],
    "why": [
      "L'économiste en chef du CBS, Peter Hein van Mulligen, parle d'une « bonne surprise » ; la ministre de l'Économie, Heleen Herbert, juge l'objectif de 1,5 % de croissance en 2026 atteignable, sans garantie [2].",
      "En comparaison, l'Allemagne affiche +0,2 %, l'Espagne +0,6 %, l'Italie 0 % et la France −0,1 % [2]. Il s'agit d'une première estimation, révisable [1][3]."
    ],
    "forMe": "Les Pays-Bas font mieux que leurs grands voisins de la zone euro, grâce notamment aux exportations de machines pour puces [2][4].",
    "next": [],
    "figures": [
      {
        "value": "+0,6 %",
        "label": "PIB néerlandais au 3e trimestre",
        "src": 1
      },
      {
        "value": "+0,7 %",
        "label": "2e trimestre, révisé",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [
      "semi-conducteurs"
    ],
    "sources": [
      {
        "short": "CBS",
        "name": "CBS, « Dutch economy grew by 0.6 percent in Q3 2026 » (30 octobre 2026)",
        "url": "https://www.cbs.nl/en-gb/news/2026/44/dutch-economy-grew-by-0-6-percent-in-q3-2026"
      },
      {
        "short": "NL Times",
        "name": "NL Times, « Dutch economy grew 0.6% in Q3, driven by manufacturing industry » (30 octobre 2026)",
        "url": "https://nltimes.nl/2026/10/30/dutch-economy-grew-06-q3-driven-manufacturing-industry"
      },
      {
        "short": "RTT News",
        "name": "RTTNews, « Dutch Economy Grows 0.6% In Q3 » (30 octobre 2026)",
        "url": "https://www.rttnews.com/3706424/dutch-economy-grows-0-6-in-q3.aspx"
      },
      {
        "short": "Dealroom",
        "name": "Dealroom, « Dutch economy grows 0.6% in Q3 as ASML and chip-machine exports pull it along » (30 octobre 2026)",
        "url": "https://app.dealroom.co/news/note/dutch-economy-grows-0-6-in-q3-as-asml-and-chip-machine-exports-pull-it-along"
      }
    ]
  },
  {
    "id": "2026-11-01-australie-inflation-rba",
    "date": "2026-11-01",
    "level": 2,
    "region": "Asie",
    "theme": "eco",
    "zones": [
      "Océanie"
    ],
    "geo": [
      {
        "name": "Sydney, Australie",
        "label": "Australie",
        "coords": [
          151.21,
          -33.87
        ]
      }
    ],
    "title": "Australie : l'inflation à 4,3 %, une nouvelle hausse des taux attendue mardi",
    "summary": "L'inflation australienne a atteint 4,3 % sur un an en septembre, contre 4,0 % en août. Les marchés misent désormais très largement sur une hausse du taux de la banque centrale (RBA), dont la décision tombe mardi 3 novembre [1][3].",
    "points": [
      "L'indice des prix à la consommation grimpe à 4,3 % sur douze mois en septembre, contre 4,0 % en août [1][2].",
      "La mesure de l'inflation de fond (moyenne tronquée) a augmenté de 1,0 % sur le trimestre et de 3,7 % sur un an, au-dessus des 3,6 % attendus [2].",
      "La RBA avait prévu 0,8 % sur le trimestre, ce qui rend la hausse plus probable [2].",
      "Après la publication, les marchés donnaient environ 79 % de chances d'une hausse en novembre [3]."
    ],
    "why": [
      "Le premier ministre Anthony Albanese attribue l'inflation en partie à la hausse du pétrole et au conflit au Moyen-Orient, tout en reconnaissant que la faire baisser reste un défi [1].",
      "Le conseil de la RBA se réunit les 2 et 3 novembre, avec une annonce le 3 [4][5]. Selon les sources, les probabilités de hausse varient de 73 % à 90 %, donc rien n'est joué [2][3]."
    ],
    "forMe": "Si tu as un prêt immobilier en Australie, une hausse du taux de la RBA se répercute vite sur tes mensualités [1][4].",
    "next": [
      {
        "when": "3 novembre 2026",
        "what": "La RBA annonce sa décision sur le taux directeur après deux jours de réunion [4][5]."
      }
    ],
    "figures": [
      {
        "value": "4,3 %",
        "label": "inflation australienne sur un an (septembre)",
        "src": 1
      },
      {
        "value": "3,7 %",
        "label": "inflation de fond sur un an",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [
      "inflation-taux"
    ],
    "sources": [
      {
        "short": "ABC News",
        "name": "ABC News (Australie), « Inflation rate rises to 4.3 per cent in September, raising rate hike expectations » (28 octobre 2026)",
        "url": "https://www.abc.net.au/news/2026-10-28/inflation-september-cpi-ahead-of-november-interest-rate-call/107317382"
      },
      {
        "short": "investingLive",
        "name": "investingLive, « Australia trimmed mean CPI rises to 3.7%, above forecasts, as RBA hike case firms » (28 octobre 2026)",
        "url": "https://investinglive.com/news/australia-trimmed-mean-cpi-rises-to-3-7-above-forecasts-as-rba-hike-case-firms/"
      },
      {
        "short": "Vantage Markets",
        "name": "Vantage Markets, « AUD/USD Gives Back CPI Spike as RBA Odds Hit 79% and Fed Looms » (28 octobre 2026)",
        "url": "https://www.vantagemarkets.com/market-analysis/why-australian-dollar-gave-back-cpi-gains-audusd-october-28-2026/"
      },
      {
        "short": "Aussie",
        "name": "Aussie, « What experts predict for the RBA's November 2026 interest rate decision » (octobre 2026)",
        "url": "https://www.aussie.com.au/insights/news/expert-predictions-rba-rates/"
      },
      {
        "short": "RBA Rate Watch",
        "name": "RBA Rate Watch, « RBA November 2026 Meeting » (octobre 2026)",
        "url": "https://rbaratewatch.com/rba-meeting/november-2026/"
      }
    ]
  },
  {
    "id": "2026-11-01-argentine-reserves-banque-centrale",
    "date": "2026-11-01",
    "level": 2,
    "region": "Amériques",
    "theme": "eco",
    "zones": [
      "Amérique latine"
    ],
    "geo": [
      {
        "name": "Buenos Aires, Argentine",
        "label": "Argentine",
        "coords": [
          -58.38,
          -34.6
        ]
      }
    ],
    "title": "Argentine : la banque centrale achète des dollars, mais ses réserves reculent",
    "summary": "La banque centrale argentine a acheté 1,395 milliard de dollars en octobre, son meilleur mois depuis juillet. Pourtant ses réserves brutes ont fini à 48,562 milliards le 30 octobre, après un record au-dessus de 50 milliards [1][3].",
    "points": [
      "Le BCRA a acheté 1,395 milliard de dollars en octobre, le total le plus haut depuis juillet, soit 15,963 milliards depuis janvier [1].",
      "Les réserves brutes ont terminé le 30 octobre à 48,562 milliards de dollars, après une baisse de 1,592 milliard dans la seule séance du vendredi [1].",
      "Le 23-24 octobre, elles dépassaient 50 000 millions, un nouveau maximum sous le président Javier Milei [3].",
      "Le 27 octobre, la banque n'avait pas acheté de devises pendant deux séances consécutives, une première cette année [2]."
    ],
    "why": [
      "Plus de réserves permettent à l'Argentine de rassurer les prêteurs et de défendre le peso, mais ce sont des réserves brutes, qui incluent des sommes à rembourser [1][3].",
      "La presse économique oppose ces réserves record à une activité proche de la récession technique [4]. Les sources n'expliquent pas la chute de vendredi."
    ],
    "forMe": "Les réserves de la banque centrale servent de coussin pour le peso : elles ont dépassé 50 milliards de dollars en octobre avant de reculer [1][3].",
    "next": [],
    "figures": [
      {
        "value": "1,4 Md$",
        "label": "achats de dollars par le BCRA en octobre",
        "src": 1
      },
      {
        "value": "48,6 Md$",
        "label": "réserves brutes au 30 octobre",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Infobae (31 oct.)",
        "name": "Infobae, « El Banco Central compró USD 1.395 millones en octubre y reforzó las reservas » (31 octobre 2026)",
        "url": "https://www.infobae.com/economia/2026/10/31/el-banco-central-compro-usd-1395-millones-en-octubre-y-reforzo-las-reservas/"
      },
      {
        "short": "Infobae (27 oct.)",
        "name": "Infobae, « Por primera vez en el año, el BCRA no compró divisas por dos ruedas consecutivas » (27 octobre 2026)",
        "url": "https://www.infobae.com/economia/2026/10/27/por-primera-vez-en-el-ano-el-bcra-no-compro-divisas-por-dos-ruedas-consecutivas/"
      },
      {
        "short": "Canal 26",
        "name": "Canal 26, « El Banco Central compró más de USD 1.200 millones en lo que va de octubre y las reservas superan los USD 50.000 millones » (24 octobre 2026)",
        "url": "https://www.canal26.com/economia/2026/10/24/el-banco-central-compro-mas-de-usd-1200-millones-en-lo-que-va-de-octubre-y-las-reservas-superan-los-usd-50000-millones/"
      },
      {
        "short": "Perfil",
        "name": "Perfil, « La paradoja económica de Milei: reservas récord pero con la actividad al borde de la recesión técnica » (2026)",
        "url": "https://www.perfil.com/noticias/economia/paradoja-economica-milei-reservas-record-actividad-borde-recesion-tecnica-a40.phtml"
      }
    ]
  },
  {
    "id": "2026-10-31-canada-ue-membre-associe",
    "date": "2026-10-31",
    "region": "Amériques",
    "theme": "mix",
    "zones": [
      "Amérique du Nord",
      "Europe"
    ],
    "geo": [
      {
        "name": "Montréal, Canada",
        "label": "Canada",
        "coords": [
          -73.57,
          45.5
        ]
      },
      {
        "name": "Bruxelles, Belgique",
        "label": "UE",
        "coords": [
          4.35,
          50.85
        ]
      }
    ],
    "title": "Le Canada veut devenir le premier « membre associé » de l'Union européenne d'ici juin 2027",
    "summary": "Au sommet UE-Canada de Montréal (29 et 30 octobre), le Premier ministre Mark Carney fixe un objectif : conclure d'ici juin 2027 les négociations sur un lien inédit avec l'Union, à mi-chemin entre partenaire et membre. Le mot « associé » a pourtant disparu de la déclaration finale, après l'objection de l'Allemagne [2][6].",
    "points": [
      "Lors du 21e sommet UE-Canada, tenu à Montréal les 29 et 30 octobre, le Premier ministre Mark Carney a dit vouloir conclure d'ici juin 2027 les négociations pour faire du Canada le premier « membre associé » de l'Union européenne [1][2][6].",
      "Il parle du « partenariat le plus profond possible sans adhésion, à cause de notre géographie » ; le mot « associé » ne figure pourtant pas dans la déclaration finale du sommet, l'Allemagne s'y étant opposée quelques heures avant l'arrivée de la délégation européenne à Montréal [2][3].",
      "Le texte signé avec António Costa, président du Conseil européen, et Ursula von der Leyen, présidente de la Commission, engage les deux camps à travailler à une « association toujours plus étroite » et à en définir le concept d'ici le prochain sommet, en 2027, sans adhésion pleine [6].",
      "L'idée vient d'Ursula von der Leyen, qui l'a proposée le 16 septembre dans son discours sur l'état de l'Union [4]. Carney a promis des débats, puis un vote, au Parlement canadien [2][3].",
      "Le 30 octobre, Bruxelles et Ottawa ont aussi conclu les négociations d'un accord de commerce numérique, présenté côté canadien comme le premier du pays entièrement consacré à ce sujet : il fixe des règles sur les flux de données, les signatures et contrats électroniques et le commerce en ligne [7].",
      "Cet accord complète le CETA, l'accord de libre-échange entre l'UE et le Canada appliqué provisoirement depuis 2017 [7]."
    ],
    "why": [
      "À retenir : c'est un statut qui n'existe pas encore. Il faudra l'inventer, le faire accepter par les 27 pays de l'Union, et le Parlement canadien devra voter [2][3].",
      "Le sommet montre l'écart entre l'ambition et le texte : les dirigeants parlent d'un membre associé, mais la déclaration ne retient que « association toujours plus étroite », et la définition précise est repoussée à 2027 [2][6]. Les États membres n'étaient pas tous d'accord, l'Allemagne en tête [2][3].",
      "Pour le Canada, c'est une façon de moins dépendre de son grand voisin américain, en pleine guerre commerciale avec Washington [3]. Pour l'Europe, c'est un allié de plus au moment où ses relations avec les États-Unis se tendent [3].",
      "Un membre associé n'aurait en revanche ni citoyenneté européenne, ni libre circulation, ni commissaire, ni droit de vote dans les institutions de l'Union [5]. Ce qui avance concrètement d'ici là, ce sont des accords sectoriels, comme le commerce numérique [7]."
    ],
    "forMe": "Rien ne change pour toi à court terme : le CETA s'applique déjà depuis 2017 [7], et le statut d'associé reste à définir. Si le projet aboutit, les échanges entre l'Europe et le Canada deviendraient encore plus simples : produits, études, travail, défense. C'est surtout un signe de plus que les alliances se redessinent face à la politique commerciale américaine [3][5].",
    "next": [
      {
        "when": "2027",
        "what": "Les deux camps doivent définir le concept d'« association toujours plus étroite » d'ici le prochain sommet UE-Canada [6]."
      },
      {
        "when": "Juin 2027",
        "what": "Objectif fixé par Mark Carney pour conclure les négociations [2]."
      }
    ],
    "figures": [
      {
        "value": "1er",
        "label": "pays à devenir « membre associé » de l'UE, si le projet aboutit",
        "src": 2
      },
      {
        "value": "juin 2027",
        "label": "objectif pour conclure les négociations",
        "src": 2
      },
      {
        "value": "27",
        "label": "pays de l'UE qui devront dire oui",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "CBC",
        "name": "CBC News, « Carney says Canada is working to become an 'associate member' as he hosts EU leaders in Montreal » (octobre 2026)",
        "url": "https://www.cbc.ca/news/politics/european-union-canada-associate-member-von-der-leyen-9.7400922"
      },
      {
        "short": "Euronews",
        "name": "Euronews, « Canada aims to become EU's first 'associate member' by June 2027, Carney says » (30 octobre 2026)",
        "url": "https://www.euronews.com/2026/10/30/canada-aims-to-become-eus-first-associate-member-by-june-2027-carney-says"
      },
      {
        "short": "Time",
        "name": "Time, « Carney Announces Canada and European Union Partnership » (30 octobre 2026)",
        "url": "https://time.com/article/2026/10/30/canada-eu-membership-associate-partnership-us-trade-war/"
      },
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « EU chief von der Leyen proposes 'associate member' status for Canada » (16 septembre 2026)",
        "url": "https://www.aljazeera.com/news/2026/9/16/eu-chief-von-der-leyen-proposes-associate-member-status-for-canada"
      },
      {
        "short": "Euronews",
        "name": "Euronews, « Que signifie pour un pays être membre associé de l'UE ? » (30 septembre 2026)",
        "url": "https://fr.euronews.com/2026/09/30/que-signifie-pour-un-pays-etre-membre-associe-de-lue"
      },
      {
        "short": "Conseil de l'UE",
        "name": "Conseil européen / Conseil de l'UE, « EU-Canada summit, 29-30 October 2026 » (page officielle du sommet)",
        "url": "https://www.consilium.europa.eu/en/meetings/international-summit/2026/10/29-30/"
      },
      {
        "short": "Commission européenne",
        "name": "Commission européenne, « EU and Canada conclude negotiations on a digital trade agreement » (30 octobre 2026)",
        "url": "https://policy.trade.ec.europa.eu/news/eu-and-canada-conclude-negotiations-digital-trade-agreement-2026-10-30_en"
      }
    ]
  },
  {
    "id": "2026-10-31-france-pib-recule-t3",
    "date": "2026-10-31",
    "region": "Europe",
    "theme": "eco",
    "geo": [
      {
        "name": "Paris, France",
        "label": "France",
        "coords": [
          2.35,
          48.86
        ]
      }
    ],
    "title": "La France se contracte au troisième trimestre, alors que la zone euro résiste",
    "summary": "Le PIB français recule de 0,1 % entre juillet et septembre, après une stagnation au printemps, alors que les économistes attendaient une légère hausse. Pendant ce temps, la zone euro progresse de 0,4 % : le commerce extérieur, notamment l'aéronautique, tire la France vers le bas [1][5][6][7].",
    "points": [
      "Selon la première estimation de l'Insee publiée le 30 octobre, le PIB de la France a reculé de 0,1 % au troisième trimestre, après 0,0 % au deuxième et −0,2 % au premier ; les économistes attendaient une légère hausse [1][2][3][5].",
      "Le commerce extérieur pèse le plus : il retire 0,6 point à la croissance, après en avoir ajouté 0,6 au printemps ; les exportations reculent de 1,7 %, avec un net repli dans l'aéronautique [2][5][7].",
      "La consommation des ménages progresse de 0,4 %, soutenue notamment par des achats de voitures électriques après la flambée des prix des carburants [2][5][7]. Les dépenses publiques augmentent de 0,3 % [7].",
      "L'investissement recule encore, de 0,6 % après −0,5 % : −0,4 % pour les entreprises, −1,3 % pour les ménages et −0,3 % pour les administrations [2][5][7].",
      "Dans le même temps, la zone euro grandit de 0,4 % (contre 0,6 % au deuxième trimestre) et l'UE de 0,5 % ; l'Allemagne progresse de 0,2 %, l'Espagne de 0,6 %, l'Italie reste à 0,0 % [3][4][6]. Seule la Lituanie fait pire que la France (−1,0 %) [6].",
      "Roland Lescure, ministre de l'Économie, attribue le trou au recul de la production agricole touchée par la canicule et à celle de la production d'énergie ; il plaide pour « redonner confiance » en adoptant un budget [1][7]."
    ],
    "why": [
      "À retenir : la France est à la traîne de ses voisins, au moment où elle doit voter un budget serré [1][3].",
      "Le ministre juge que l'économie « est à l'arrêt » et « ira dans le mur » sans redressement budgétaire, et appelle à un compromis au Parlement [1][7]. Le gouvernement table toujours sur 0,5 % de croissance en 2026 ; or l'acquis de croissance, ce que l'année aurait déjà si l'activité restait stable jusqu'en décembre, n'est que de 0,2 % [1][5][7].",
      "Un PIB qui baisse veut dire moins de richesse produite, donc moins de recettes pour l'État, alors que le déficit est déjà élevé. La Banque de France prévoyait pourtant une hausse d'environ 0,1 % [2].",
      "Il ne s'agit que d'une première estimation : Eurostat publiera une nouvelle estimation le 13 novembre, et l'Insee ses résultats détaillés le 27 novembre [5][6]."
    ],
    "forMe": "Une économie qui cale pèse sur l'emploi et sur les marges de manœuvre du budget : c'est un argument de plus dans les débats sur les impôts et les dépenses des prochaines semaines. À ton échelle, la consommation des ménages tient (+0,4 %), mais l'investissement des entreprises et des ménages continue de reculer [1][2][5].",
    "figures": [
      {
        "value": "−0,1 %",
        "label": "PIB français au 3e trimestre",
        "src": 2
      },
      {
        "value": "−1,7 %",
        "label": "exportations françaises",
        "src": 2
      },
      {
        "value": "+0,4 %",
        "label": "croissance de la zone euro",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Boursorama",
        "name": "Boursorama (Reuters), « France-Contraction surprise du PIB au T3, l'économie à l'arrêt selon Lescure » (30 octobre 2026)",
        "url": "https://www.boursorama.com/bourse/actualites/france-contraction-surprise-du-pib-au-t3-l-economie-a-l-arret-selon-lescure-4469bc5291d2b591e29fae01e5b67c05"
      },
      {
        "short": "Économie Matin",
        "name": "Économie Matin, « PIB : l'économie française recule de 0,1 % au troisième trimestre, pénalisée par les exportations » (30 octobre 2026)",
        "url": "https://www.economiematin.fr/pib-france-troisieme-trimestre-2026-recul-exportations-insee-301026-263"
      },
      {
        "short": "CNBC",
        "name": "CNBC, « Euro zone economy slows to 0.4% growth in Q3 as crisis-hit France contracts » (30 octobre 2026)",
        "url": "https://www.cnbc.com/2026/10/30/euro-zone-gdp-france.html"
      },
      {
        "short": "InvestingLive",
        "name": "InvestingLive, « Germany Q3 preliminary GDP +0.2% vs +0.1% q/q expected » (30 octobre 2026)",
        "url": "https://investinglive.com/news/germany-q3-preliminary-gdp-0-2-vs-0-1-q-q-expected/"
      },
      {
        "short": "Insee",
        "name": "Insee, « Le PIB recule légèrement au troisième trimestre 2026 (-0,1 % après 0,0 %) », Informations rapides n° 263 (30 octobre 2026)",
        "url": "https://www.insee.fr/fr/statistiques/9111036"
      },
      {
        "short": "Eurostat",
        "name": "Eurostat, « GDP up by 0.4% in the euro area and by 0.5% in the EU » (30 octobre 2026)",
        "url": "https://ec.europa.eu/eurostat/en/web/products-euro-indicators/w/2-30102026-ap"
      },
      {
        "short": "franceinfo",
        "name": "franceinfo, « Le PIB recule de 0,1 % au troisième trimestre 2026 en France, le ministre de l'Économie plaide pour « redonner confiance » en adoptant un budget » (30 octobre 2026)",
        "url": "https://www.franceinfo.fr/economie/victime-d-une-baisse-des-exportations-le-pib-recule-de-0-1-au-troisieme-trimestre-2026-en-france-selon-l-insee_8260019.html"
      }
    ],
    "next": [
      {
        "when": "13 novembre",
        "what": "Eurostat publie une nouvelle estimation de la croissance de la zone euro [6]."
      },
      {
        "when": "27 novembre",
        "what": "L'Insee publie les résultats détaillés du troisième trimestre [5]."
      }
    ]
  },
  {
    "id": "2026-10-31-france-couvre-feu-paris-toussaint",
    "date": "2026-10-31",
    "region": "Europe",
    "theme": "geo",
    "geo": [
      {
        "name": "Paris, France",
        "label": "Paris",
        "coords": [
          2.35,
          48.86
        ]
      }
    ],
    "title": "Paris : des couvre-feux le week-end de la Toussaint après les pillages d'octobre",
    "summary": "La préfecture de police interdit de circuler la nuit aux mineurs non accompagnés dans plusieurs quartiers de Paris, puis à tous à République et aux Halles, du 30 octobre au 2 novembre. Elle invoque les pillages d'octobre et des risques de violences. Un précédent couvre-feu des mineurs avait été suspendu par la justice [1][2][3][4].",
    "points": [
      "Un couvre-feu vise les mineurs non accompagnés dans plusieurs secteurs de Paris, de 21 h à 6 h, du vendredi soir au lundi 2 novembre au matin [1][2][6].",
      "Un second arrêté interdit toute présence à tous, de 23 h à 6 h, sur la place de la République et dans le secteur de Châtelet-Les Halles, du 31 octobre au 2 novembre [2][3][6]. La préfecture invoque des risques de violences et des appels à commettre des exactions [2][6].",
      "Le tribunal administratif de Paris avait suspendu le 28 octobre le précédent couvre-feu des mineurs (21 h–6 h, du lundi au jeudi), saisi par l'association Vigie Liberté ; le juge reprochait au préfet de ne donner aucun élément précis sur des risques liés aux mineurs à ces jours et ces heures [3][4]. Ce dispositif courait du 26 au 29 octobre [3].",
      "La préfecture s'appuie sur les pillages et dégradations des 17 et 18 octobre : la nuit du 18, Paris a de nouveau été visé par des pillards après la mobilisation du 17 [3][7].",
      "Le 24 octobre, le cortège parisien s'est déroulé globalement dans le calme, mais la préfecture a compté 142 interpellations, dont 126 gardes à vue ; la participation est estimée entre 110 000 et 250 000 personnes selon les sources [3][5]. Un couvre-feu avait déjà été instauré autour du forum des Halles et de la place de la République après le 17 octobre [5].",
      "Après une cellule interministérielle de crise, le Premier ministre Sébastien Lecornu a demandé aux préfets des couvre-feux « partiels » et très localisés [1][6]."
    ],
    "why": [
      "À retenir : c'est une mesure rare dans la capitale, prise après plusieurs semaines de tensions [2][3].",
      "L'enjeu juridique est central : un couvre-feu limite la liberté d'aller et venir, et le juge administratif a déjà estimé le 28 octobre que la préfecture n'avait pas justifié la première version visant les mineurs [3][4]. Les nouveaux arrêtés devront donc tenir sur leur motivation, notamment les risques liés aux appels à commettre des exactions [2][6].",
      "Le choix de zones très limitées, République et Châtelet-Les Halles, correspond à la consigne de Matignon de couvre-feux « partiels » et « localisés » [1][6]. Ce sont aussi les secteurs déjà placés sous couvre-feu après la mobilisation du 17 octobre [5].",
      "La justice peut encore être saisie de nouveaux recours [2]."
    ],
    "forMe": "Si tu es à Paris ce week-end, vérifie les rues concernées sur le site de la préfecture de police avant de sortir tard : à République et aux Halles, toute présence est interdite de 23 h à 6 h, et les mineurs non accompagnés ne peuvent pas circuler dès 21 h dans plusieurs quartiers [2][3][6].",
    "figures": [
      {
        "value": "21 h – 6 h",
        "label": "couvre-feu des mineurs concernés",
        "src": 2
      },
      {
        "value": "23 h – 6 h",
        "label": "couvre-feu général à République et aux Halles",
        "src": 3
      },
      {
        "value": "142",
        "label": "interpellations le 24 octobre",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Sortiraparis",
        "name": "Sortiraparis, « Couvre-feu à Paris des mineurs du 30 octobre au 2 novembre 2026 »",
        "url": "https://sortiraparis.com/actualites/a-paris/articles/356528-couvre-feu-a-paris-des-mineurs-du-30-octobre-au-2-novembre-2026"
      },
      {
        "short": "Affiches Parisiennes",
        "name": "Affiches Parisiennes, « Week-end de la Toussaint : deux quartiers de Paris sous couvre-feu »",
        "url": "https://mesinfos.fr/75000-paris/week-end-de-la-toussaint-deux-quartiers-de-paris-sous-couvre-feu-342327.html"
      },
      {
        "short": "La Clé Publique",
        "name": "La Clé Publique, « Paris : couvre-feux dès 21 h, puis 23 h à République et aux Halles » (30 octobre 2026)",
        "url": "https://laclepublique.fr/paris/articles/2026/2026-10-30-couvre-feux-toussaint-paris/"
      },
      {
        "short": "ICI",
        "name": "ICI, « Paris : la justice suspend le couvre-feu qui avait été instauré pour les mineurs » (28 octobre 2026)",
        "url": "https://www.ici.fr/infos/faits-divers-justice/paris-la-justice-suspend-le-couvre-feu-qui-avait-ete-instaure-pour-les-mineurs-jusqu-a-ce-jeudi-4099949?at_locale=68"
      },
      {
        "short": "France 3 Paris IdF",
        "name": "France 3 Paris Île-de-France, « Manifestation du 24 octobre à Paris : moins d'interpellations que la semaine passée, un défilé dans le calme avec peu d'incidents majeurs »",
        "url": "https://france3-regions.franceinfo.fr/paris-ile-de-france/manifestation-du-24-octobre-a-paris-moins-d-interpellations-que-la-semaine-passee-un-defile-dans-le-calme-avec-peu-d-incidents-majeurs-3438816.html"
      },
      {
        "short": "Actu17",
        "name": "Actu17, « Paris : couvre-feu place de la République et aux Halles, toute présence interdite dès 23 heures »",
        "url": "https://actu17.fr/societe/paris-couvre-feu-place-de-la-republique-et-aux-halles-toute-presence-interdite-des-23-heures.html"
      },
      {
        "short": "CNews",
        "name": "CNews, « Violences urbaines : Paris pris pour cible par les pillards pour la deuxième nuit consécutive » (19 octobre 2026)",
        "url": "https://www.cnews.fr/france/2026-10-19/mobilisation-du-17-octobre-paris-pris-pour-cible-par-les-pillards-pour-la"
      }
    ],
    "next": [
      {
        "when": "Lundi 2 novembre, au matin",
        "what": "Fin prévue des arrêtés de couvre-feu pour le week-end de la Toussaint [1][2]."
      }
    ]
  },
  {
    "id": "2026-10-31-pologne-cour-constitutionnelle-crise",
    "date": "2026-10-31",
    "region": "Europe",
    "theme": "geo",
    "geo": [
      {
        "name": "Varsovie, Pologne",
        "label": "Pologne",
        "coords": [
          21.01,
          52.23
        ]
      }
    ],
    "title": "Pologne : le président fait demi-tour en plein vol pour défendre le chef de la Cour constitutionnelle",
    "summary": "Vendredi 30 octobre, la juge Anna Korwin-Piotrowska a suspendu le président de la Cour constitutionnelle polonaise, Bogdan Święczkowski, et son adjoint. La Cour refuse cette décision, la police est intervenue et le président Karol Nawrocki a écourté son voyage au Sénégal pour se rendre sur place [1][2][3].",
    "points": [
      "Le vendredi 30 octobre au soir, la juge Anna Korwin-Piotrowska a ordonné une « pause dans l'activité » du président de la Cour, Bogdan Święczkowski, et de son adjoint, Bartłomiej Sochański ; elle reproche au premier d'avoir enfreint la loi à plusieurs reprises [1][2].",
      "Selon TVN24, l'ordre s'appuie sur l'article 130 de la loi sur l'organisation des tribunaux de droit commun, ce qui est contesté : la Cour affirme que Święczkowski reste président et Sochański vice-président [5].",
      "La police et le Service de protection de l'État étaient devant le bâtiment et Święczkowski n'a pas été autorisé à entrer ; des manifestants ont coupé la chaîne d'une grille, et Jarosław Kaczyński (PiS) et Piotr Gliński sont entrés dans l'enceinte [5].",
      "Le président Karol Nawrocki, en route pour une visite d'État au Sénégal, a fait faire demi-tour à son avion, a aidé le juge à entrer et est lui-même entré dans la Cour, accompagné de Zbigniew Kapiński, premier président de la Cour suprême [2][3][5].",
      "Son cabinet dénonce une violation de l'ordre constitutionnel et une prise de contrôle par la force d'un organe constitutionnel ; le PiS et la Cour parlent de « coup d'État », ce que le camp gouvernemental conteste [2][4].",
      "Le ministre de la Justice et procureur général, Waldemar Żurek, a déposé des demandes de levée de l'immunité de Święczkowski et de Sochański [5].",
      "La nuit a aussi vu 3 manifestants interpellés [2]."
    ],
    "why": [
      "À retenir : deux camps polonais se disputent la direction de la plus haute juridiction du pays, et personne ne sait encore qui la dirige légalement [1][2].",
      "Le conflit remonte à 2015 : la coalition sortante PO-PSL avait fait élire cinq juges par le Parlement avant les législatives d'octobre 2015, et le PiS a ensuite imposé ses propres nominations [4]. En décembre 2024, le président Andrzej Duda a nommé Święczkowski, ancien procureur proche de Zbigniew Ziobro, à la tête de la Cour [4].",
      "Aujourd'hui, le camp gouvernemental juge ces nominations et cette direction irrégulières, tandis que Nawrocki a refusé de faire prêter serment à cinq des huit nouveaux juges élus par le Parlement [3][4]. Les sources ne tranchent pas sur la légalité de la suspension ; l'autorité de la juge Korwin-Piotrowska à prendre la direction est elle-même discutée [1][5]."
    ],
    "forMe": "La Pologne pèse lourd dans l'Union européenne : si la Cour qui doit trancher sur les lois est paralysée, les arbitrages d'État de droit, et les décisions prises à 27, peuvent se compliquer. Retiens la date du 3 novembre, qui dira si la Cour siège à nouveau [2][4].",
    "figures": [
      {
        "value": "5 sur 8",
        "label": "nouveaux juges non assermentés par le président",
        "src": 3
      },
      {
        "value": "3",
        "label": "manifestants interpellés dans la nuit",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Notes from Poland",
        "name": "Notes from Poland, « Chaos at Poland's constitutional court as government-backed judges seek to oust chief justice » (30 octobre 2026)",
        "url": "https://notesfrompoland.com/2026/10/30/chaos-at-polands-constitutional-court-as-government-backed-judges-seek-to-oust-chief-justice/"
      },
      {
        "short": "Euronews",
        "name": "Euronews, « Poland political crisis: Constitutional court in chaos as Nawrocki accuses government of staging power grab » (31 octobre 2026)",
        "url": "https://www.euronews.com/2026/10/31/poland-political-crisis-constitutional-court-in-chaos-as-nawrocki-accuses-government-of-st"
      },
      {
        "short": "CNN",
        "name": "CNN, « Polish president turns plane around to return home as court chief's suspension sparks protest » (31 octobre 2026)",
        "url": "https://edition.cnn.com/2026/10/31/europe/poland-protests-president-karol-nawrocki-flies-home-hnk-intl"
      },
      {
        "short": "Euronews (explication)",
        "name": "Euronews, « Poland's Constitutional Tribunal crisis explained: a decade-long dispute over legitimacy of the justice » (31 octobre 2026)",
        "url": "https://www.euronews.com/2026/10/31/polands-constitutional-tribunal-crisis-explained-a-decade-long-dispute-over-legitimacy-of-"
      },
      {
        "short": "TVN24",
        "name": "TVN24, « Zawieszony Święczkowski, prezydent w siedzibie TK, protesty przed gmachem. To wydarzyło się w nocy » (31 octobre 2026)",
        "url": "https://tvn24.pl/polska/trybunal-konstytucyjny-najwazniejsze-informacje-to-wydarzylo-sie-w-nocy-podsumowujemy-st9315322"
      }
    ],
    "next": [
      {
        "when": "3 novembre 2026",
        "what": "La juge Korwin-Piotrowska a convoqué une assemblée générale des juges de la Cour [4]."
      }
    ]
  },
  {
    "id": "2026-10-31-georgie-azerbaidjan-commission-economique",
    "date": "2026-10-31",
    "region": "Europe",
    "theme": "mix",
    "geo": [
      {
        "name": "Sighnaghi, Géorgie",
        "label": "Géorgie",
        "coords": [
          45.92,
          41.62
        ]
      },
      {
        "name": "Bakou, Azerbaïdjan",
        "label": "Azerbaïdjan",
        "coords": [
          49.87,
          40.41
        ]
      }
    ],
    "title": "Le Premier ministre azerbaïdjanais en Géorgie : transport et énergie au menu du Caucase du Sud",
    "summary": "Le Premier ministre azerbaïdjanais Ali Asadov a fait une visite de travail de deux jours en Géorgie (29-30 octobre). Avec son homologue Irakli Kobakhidze, il a coprésidé à Sighnaghi la 11e commission économique commune et signé le protocole de la session, ainsi que des accords sur un poste-frontière et la sécurité alimentaire [1][3][5][6].",
    "points": [
      "Ali Asadov est arrivé à Tbilissi le 29 octobre pour une visite de travail de deux jours [1][3].",
      "Le 30 octobre, il s'est entretenu en tête-à-tête avec le Premier ministre géorgien Irakli Kobakhidze à Sighnaghi, dans la région de Kakhétie ; Civil.ge situe lui la réunion à Tbilissi, mais APA, Report.az et Trend parlent de Sighnaghi [2][4][6][7].",
      "Les deux chefs de gouvernement ont coprésidé la 11e session de la commission intergouvernementale sur la coopération économique et signé son protocole [5][6].",
      "L'ordre du jour couvrait le commerce, l'énergie, les infrastructures et les projets du Corridor du Milieu, et les deux camps ont convenu d'accélérer la démarcation et la délimitation de la frontière [7].",
      "Un accord sur le fonctionnement du poste-frontière routier « Route de la soie – Ipek Yolu » a été signé, de même que des documents sur la coopération douanière [5][7].",
      "Deux mémorandums ont été signés par l'Agence azerbaïdjanaise de sécurité alimentaire et l'Agence nationale géorgienne de l'alimentation : l'un sur la quarantaine des plantes, l'autre sur les services vétérinaires [5][7].",
      "Selon Asadov, l'Azerbaïdjan est le premier investisseur en Géorgie, avec près de 4 milliards de dollars investis [7][8]."
    ],
    "why": [
      "À retenir : la rencontre porte sur des sujets très concrets (frontière, douane, transport, énergie) entre deux voisins qui sont aussi des maillons du Corridor du Milieu, la route de marchandises qui relie l'Asie à l'Europe [1][7].",
      "Le chiffre à retenir est l'investissement azerbaïdjanais en Géorgie, de près de 4 milliards de dollars selon Asadov, un montant que Civil.ge rapporte aussi et qui est annoncé par la partie azerbaïdjanaise [7][8].",
      "Les mémorandums sur la quarantaine des plantes et les services vétérinaires visent à faciliter les échanges de produits agricoles à la frontière ; les sources consultées ne donnent pas le détail des documents douaniers [5][7]."
    ],
    "forMe": "Les accords sur le transport et l'énergie dans le Caucase du Sud concernent les routes de marchandises entre l'Asie et l'Europe, et donc, à terme, les délais et les coûts de ce qui arrive en Europe [1][7].",
    "figures": [
      {
        "value": "11e",
        "label": "commission économique Géorgie–Azerbaïdjan",
        "src": 3
      },
      {
        "value": "2 jours",
        "label": "de visite de travail",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "APA",
        "name": "APA, « Azerbaijan's Prime Minister Ali Asadov arrives in Georgia for intergovernmental commission meeting »",
        "url": "https://en.apa.az/foreign-policy/azerbaijans-prime-minister-ali-asadov-arrives-in-georgia-for-intergovernmental-commission-meeting-updated-532890"
      },
      {
        "short": "Report.az",
        "name": "Report.az, « Azerbaijani, Georgian prime ministers hold talks in Sighnaghi »",
        "url": "https://report.az/en/foreign-politics/azerbaijani-georgian-prime-ministers-hold-talks-in-sighnaghi"
      },
      {
        "short": "Georgia Today",
        "name": "Georgia Today, « Azerbaijani PM Ali Asadov arrives in Georgia for two-day working visit »",
        "url": "https://georgiatoday.ge/azerbaijani-pm-ali-asadov-arrives-in-georgia-for-two-day-working-visit/"
      },
      {
        "short": "OC Media",
        "name": "OC Media, « Friday, 30 October 2026 »",
        "url": "https://oc-media.org/friday-30-october-2026/"
      },
      {
        "short": "Caspian Post",
        "name": "Caspian Post, « Azerbaijan, Georgia Sign New Agreements to Boost Trade and Border Cooperation » (30 octobre 2026)",
        "url": "https://caspianpost.com/azerbaijan/azerbaijan-georgia-sign-new-agreements-to-boost-trade-and-border-cooperation"
      },
      {
        "short": "Trend",
        "name": "Trend, « Azerbaijan-Georgia Economic Cooperation Commission holds 11th meeting » (30 octobre 2026)",
        "url": "https://www.trend.az/business/4241064.html"
      },
      {
        "short": "Civil.ge",
        "name": "Civil.ge, « Georgia, Azerbaijan Hold Intergovernmental Meeting, Talk 'Speeding Up' Border Process »",
        "url": "https://civil.ge/archives/756119"
      },
      {
        "short": "Report.az (investissements)",
        "name": "Report.az, « Azerbaijan is Georgia's largest investor with nearly $4 billion, Asadov says »",
        "url": "https://report.az/en/foreign-politics/azerbaijan-is-georgia-s-largest-investor-with-nearly-4-billion-asadov-says"
      }
    ]
  },
  {
    "id": "2026-10-31-kirghizistan-reseau-electrique-hiver",
    "date": "2026-10-31",
    "region": "Asie",
    "theme": "eco",
    "geo": [
      {
        "name": "Bichkek, Kirghizistan",
        "label": "Kirghizistan",
        "coords": [
          74.59,
          42.87
        ]
      }
    ],
    "title": "Asie centrale : l'hiver menace des réseaux électriques d'époque soviétique, le Kirghizistan gèle le minage de cryptos",
    "summary": "Le président kirghiz Sadyr Japarov a annoncé qu'aucune nouvelle licence de minage de cryptomonnaies ne sera accordée tant que la production d'électricité n'aura pas progressé, alors qu'une étude de la Banque eurasienne de développement décrit un réseau d'Asie centrale souvent surchargé [1][4].",
    "points": [
      "Selon Eurasianet (30 octobre), l'administration de Sadyr Japarov ne délivrera plus de licence aux fermes de minage de cryptomonnaies, très gourmandes en courant, tant que la capacité de production ne s'améliore pas [1].",
      "Japarov a aussi mis cette décision en balance avec les recettes fiscales du minage, et la demande a bondi ces dernières semaines avec l'arrivée précoce du froid [1].",
      "L'étude de la Banque eurasienne de développement (BEAD) sur le réseau en 2024 relève des charges de 105 à 123 % des valeurs admissibles [1].",
      "Le problème tient moins à la capacité installée qu'à sa disponibilité aux heures critiques : le 10 décembre 2024, environ 6,6 GW de capacité du système interconnecté étaient indisponibles ou limités [1][4].",
      "La BEAD attend une hausse de la demande d'environ 27 % d'ici 2030 [4].",
      "Le ministre kirghiz de l'Énergie a rencontré son homologue ouzbek le 28 octobre pour discuter de la stabilité des approvisionnements [1].",
      "La centrale de Toktogui fournit environ 40 % de l'électricité du Kirghizistan, qui avait déjà suspendu ses fermes de minage jusqu'en mars 2026 à cause des faibles niveaux des réservoirs [2][5]."
    ],
    "why": [
      "À retenir : une grande partie des centrales et des lignes date de l'époque soviétique, et l'hiver est le moment où la demande explose [3].",
      "Le Kirghizistan dépend de l'hydroélectricité, donc du niveau de ses réservoirs. Le Tadjikistan exporte du courant l'été mais en vend moins l'hiver, quand sa propre demande monte ; le niveau du réservoir de la centrale de Nourek a baissé de 2,47 m en un an [2].",
      "En novembre 2025, le Kirghizistan avait déjà suspendu toutes ses fermes de minage jusqu'en mars 2026 ; Caspian Post ne dit pas ce qu'il en est depuis le printemps [5].",
      "La Banque mondiale estime que la demande d'électricité de la région pourrait tripler d'ici 2050 si la tendance se poursuit [3]. Les sources consultées ne précisent pas la base de calcul de la prévision de 27 % de la BEAD [4]."
    ],
    "forMe": "Loin de chez toi, mais utile à savoir : les cryptomonnaies consomment de l'électricité réelle, et des pays entiers doivent parfois choisir entre elles et le chauffage [1][5].",
    "figures": [
      {
        "value": "× 3",
        "label": "demande d'électricité possible d'ici 2050 en Asie centrale",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Eurasianet",
        "name": "Eurasianet, « Coming winter to test Central Asia's power grid » (octobre 2026)",
        "url": "https://eurasianet.org/coming-winter-to-test-central-asias-power-grid"
      },
      {
        "short": "Times of Central Asia",
        "name": "The Times of Central Asia, « Kyrgyzstan and Tajikistan Brace for Winter Power Shortages »",
        "url": "https://timesca.com/kyrgyzstan-and-tajikistan-brace-for-winter-power-shortages/"
      },
      {
        "short": "Caspian Post",
        "name": "Caspian Post, « Winter is Coming: Why Resource-Rich Central Asia is Facing an Energy Shortage »",
        "url": "https://caspianpost.com/opinion/winter-is-coming-why-resource-rich-central-asia-is-facing-an-energy-shortage"
      },
      {
        "short": "Times of Central Asia (BEAD)",
        "name": "The Times of Central Asia, « Central Asia Electricity Demand Expected to Rise 27% by 2030, EDB Says »",
        "url": "https://timesca.com/central-asia-electricity-demand-expected-to-rise-27-by-2030-edb-says/"
      },
      {
        "short": "Caspian Post (minage)",
        "name": "Caspian Post, « Kyrgyzstan Temporarily Shuts Down Crypto Mining Farms Amid Energy Shortages »",
        "url": "https://caspianpost.com/kyrgyzstan/kyrgyzstan-temporarily-shuts-down-crypto-mining-farms-amid-energy-shortages"
      }
    ]
  },
  {
    "id": "2026-10-31-bhoutan-thailande-visite-premier-ministre",
    "date": "2026-10-31",
    "region": "Asie",
    "theme": "geo",
    "geo": [
      {
        "name": "Thimphou, Bhoutan",
        "label": "Bhoutan",
        "coords": [
          89.64,
          27.47
        ]
      },
      {
        "name": "Bangkok, Thaïlande",
        "label": "Thaïlande",
        "coords": [
          100.5,
          13.75
        ]
      }
    ],
    "title": "Le Bhoutan reçoit un Premier ministre thaïlandais pour la première fois depuis huit ans",
    "summary": "Le Premier ministre thaïlandais Anutin Charnvirakul est à Thimphou du 30 octobre au 1er novembre, une première pour un chef de gouvernement de son pays en huit ans. Trois accords sont signés (santé, finance agricole, énergie propre) et le libre-échange entre les deux pays est relancé [1][2][4].",
    "points": [
      "Anutin Charnvirakul effectue une visite officielle au Bhoutan du 30 octobre au 1er novembre 2026, la première d'un Premier ministre thaïlandais depuis huit ans, à l'occasion du 37e anniversaire des relations diplomatiques [1][3][4].",
      "Les discussions avec le Premier ministre bhoutanais, Tshering Tobgay, ont eu lieu le 30 octobre au bureau du Premier ministre, à Thimphou [4][5].",
      "Trois accords ont été signés à Thimphou le samedi 31 octobre, en présence d'Anutin : santé, finance agricole et énergie propre, dont une aide technique pour un projet solaire de 100 MW [2][4].",
      "L'accord de santé, conclu entre les ministères de la Santé des deux pays, couvre la couverture santé universelle, la prévention et le contrôle des maladies, la formation du personnel médical et la recherche ; il prévoit aussi que des patients bhoutanais puissent être soignés dans les hôpitaux publics thaïlandais [4].",
      "Selon le porte-parole du gouvernement thaïlandais, Ekkapob Pianpises, ces accords visent à échanger savoir-faire et technologies, améliorer les soins, ouvrir l'accès au crédit aux agriculteurs et aux petites entreprises, et soutenir les énergies renouvelables [4].",
      "Les deux dirigeants ont salué l'accord de libre-échange entre leurs pays, qu'ils espèrent voir entrer en vigueur le 1er janvier 2027 [5].",
      "Le 1er novembre, Anutin doit se rendre à Gelephu pour le « Projet 108 », qui vise à achever 108 stupas en une seule journée ; il a dit qu'il fallait étudier d'autres investissements dans cette zone, au potentiel économique important [4]."
    ],
    "why": [
      "À retenir : le Bhoutan, petit royaume himalayen enclavé entre l'Inde et la Chine, ajoute à ses partenaires un voisin lointain d'Asie du Sud-Est, et la Thaïlande y gagne un allié peu banal [1][3].",
      "Les trois accords sont concrets : des soins accessibles dans les hôpitaux thaïlandais, du crédit pour les agriculteurs et les petites entreprises, du solaire. Ils touchent à la vie quotidienne plutôt qu'à la seule diplomatie [2][4].",
      "Le libre-échange est le cadre économique de la relation : les deux dirigeants le décrivent comme un mécanisme important pour augmenter les échanges et créer de nouvelles occasions économiques, mais son entrée en vigueur n'est espérée que pour le 1er janvier 2027 [5].",
      "Gelephu, où Anutin se rend le 1er novembre, est citée par le Premier ministre thaïlandais comme une zone à fort potentiel pour de futurs investissements ; aucun accord précis sur Gelephu n'a été signalé à ce stade [4]."
    ],
    "forMe": "Cette visite ne change rien à ton quotidien en France. Elle montre comment des pays moyens d'Asie nouent des accords directs (santé, agriculture, solaire, commerce) sans passer par les grandes puissances, ce qui pèse peu à peu sur les routes commerciales de la région [4][5].",
    "figures": [
      {
        "value": "8 ans",
        "label": "depuis la dernière visite officielle d'un Premier ministre thaïlandais",
        "src": 1
      },
      {
        "value": "100 MW",
        "label": "projet solaire soutenu par la Thaïlande",
        "src": 2
      },
      {
        "value": "3",
        "label": "accords signés",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Nation Thailand",
        "name": "The Nation (Thaïlande), « Anutin's Bhutan trip is the first official visit by a Thai prime minister in eight years »",
        "url": "https://www.nationthailand.com/news/general/40072939"
      },
      {
        "short": "Nation Thailand (accords)",
        "name": "The Nation (Thaïlande), « Thailand and Bhutan sign 3 cooperation deals on October 31 »",
        "url": "https://www.nationthailand.com/news/politics/40072974"
      },
      {
        "short": "MGR Online",
        "name": "MGR Online, « Anutin departs on official visit to Bhutan »",
        "url": "https://en.mgronline.com/politics/anutin-departs-on-official-visit-to-bhutan-to-strengthen-relations-cooperate-on/"
      },
      {
        "short": "Bangkok Post",
        "name": "Bangkok Post, « Thailand, Bhutan sign three deals »",
        "url": "https://www.bangkokpost.com/thailand/general/3346184/thailand-bhutan-sign-three-deals"
      },
      {
        "short": "Nation Thailand (libre-échange)",
        "name": "The Nation (Thaïlande), « Anutin and Bhutanese PM seek closer economic ties through FTA »",
        "url": "https://www.nationthailand.com/news/world/40072964"
      }
    ],
    "next": [
      {
        "when": "1er novembre 2026",
        "what": "Anutin se rend à Gelephu pour le Projet 108 (108 stupas en une journée) [4]."
      },
      {
        "when": "1er janvier 2027",
        "what": "Date espérée par les deux pays pour l'entrée en vigueur de l'accord de libre-échange [5]."
      }
    ]
  },
  {
    "id": "2026-10-31-inde-conteneurs-fabriquer-10000-crores",
    "date": "2026-10-31",
    "region": "Asie",
    "theme": "eco",
    "geo": [
      {
        "name": "New Delhi, Inde",
        "label": "Inde",
        "coords": [
          77.21,
          28.61
        ]
      }
    ],
    "title": "L'Inde veut fabriquer ses propres conteneurs maritimes : dix fois plus d'ici quelques années",
    "summary": "Le 28 octobre 2026, le cabinet indien a approuvé un plan de 10 000 crores de roupies (environ 1 milliard de dollars) pour fabriquer des conteneurs maritimes en Inde. Le but : passer d'environ 70 000 à 750 000 EVP par an, sur un programme qui court de 2027-28 à 2039-40 [1][2][4][5].",
    "points": [
      "Le cabinet de l'Union indienne a approuvé le mercredi 28 octobre 2026 le « Container Manufacturing Promotion Scheme » (CMPS), doté de 10 000 crores de roupies, annoncé à l'origine dans le budget présenté en février par la ministre des Finances Nirmala Sitharaman [1][4][5].",
      "La capacité annuelle de fabrication doit passer d'environ 70 000 EVP (équivalents vingt pieds) à 750 000 EVP [1][5].",
      "L'enveloppe se répartit ainsi : 8 891 crores pour une aide à l'exploitation, 859 crores pour des intérêts d'emprunt pris en charge (3 % par an sur les prêts à terme éligibles), 150 crores pour les essais et la certification, 100 crores pour la gestion et la formation [1][4][5].",
      "Les fabricants touchent 49 500 roupies par conteneur de 20 pieds produit et vendu, et 86 625 roupies par conteneur de 40 pieds [4][5].",
      "Une nouvelle usine doit produire au moins 100 000 EVP par an ; une usine existante doit ajouter au moins 25 000 EVP [1][5].",
      "Le plan court de 2027-28 à 2039-40 : trois ans pour construire les usines, puis dix ans de soutien à la production [1][2].",
      "Les estimations parlent d'environ 3 000 emplois directs et de plus de 50 000 emplois indirects [4][5]."
    ],
    "why": [
      "À retenir : l'Inde veut cesser d'importer un maillon de base du commerce mondial, le conteneur, alors que ses ports et ses exportations croissent [1][3].",
      "Le mécanisme est un paiement à l'unité : l'aide n'est versée que pour les conteneurs réellement produits et vendus, ce qui évite de financer des usines qui ne tournent pas [4][5].",
      "Les seuils de capacité (100 000 EVP pour une nouvelle usine) visent des sites de taille industrielle plutôt que de petits ateliers : à raison de 100 000 EVP par site, atteindre 750 000 EVP suppose plusieurs usines [1][5].",
      "Le programme s'étale sur 13 ans : l'effet sur les prix du transport ne se verra donc pas avant la fin des constructions, prévue au bout de trois ans [1][2]."
    ],
    "forMe": "Presque tout ce que tu achètes a voyagé dans un conteneur : qui les fabrique, et à quel prix, joue à long terme sur le coût du transport maritime et sur la dépendance des chaînes d'approvisionnement, mais ce plan ne devrait pas changer tes prix avant plusieurs années [1][3][5].",
    "figures": [
      {
        "value": "× 10",
        "label": "production visée de conteneurs (70 000 → 750 000 EVP)",
        "src": 1
      },
      {
        "value": "10 000 crores",
        "label": "de roupies d'aide publique",
        "src": 2
      },
      {
        "value": "8 891 crores",
        "label": "de roupies pour l'aide à la production",
        "src": 4
      }
    ],
    "culture": [],
    "dossiers": [
      "routes-maritimes"
    ],
    "sources": [
      {
        "short": "The Week",
        "name": "The Week, « What is CMPS? Union Cabinet approves ₹10,000-crore push to boost container manufacturing » (29 octobre 2026)",
        "url": "https://www.theweek.in/news/maritime/2026/10/29/what-is-cmps-union-cabinet-approves-indian-rupee10000-crore-push-to-boost-container-manufacturing.html"
      },
      {
        "short": "Deccan Chronicle",
        "name": "Deccan Chronicle, « Union Cabinet Clears ₹10,000 Crore Container Scheme »",
        "url": "https://www.deccanchronicle.com/nation/union-cabinet-clears-10000-crore-container-scheme-1999689"
      },
      {
        "short": "Maritime Gateway",
        "name": "Maritime Gateway, « Container Manufacturing Promotion Scheme Wins ₹10,000 Crore Cabinet Approval »",
        "url": "https://www.maritimegateway.com/container-manufacturing-promotion-scheme-wins-%E2%82%B910000-crore-cabinet-approval/"
      },
      {
        "short": "Business Standard",
        "name": "Business Standard, « Cabinet approves ₹10,000 crore scheme to boost container manufacturing »",
        "url": "https://www.business-standard.com/economy/news/cabinet-approves-10-000-crore-scheme-to-boost-container-manufacturing-126102801586_1.html"
      },
      {
        "short": "Container News",
        "name": "Container News, « India approves major container manufacturing support scheme »",
        "url": "https://container-news.com/india-approves-major-container-manufacturing-support-scheme/"
      }
    ],
    "next": [
      {
        "when": "2027-28",
        "what": "Début de la période de soutien du programme, après la construction des usines [1][2]."
      }
    ]
  },
  {
    "id": "2026-10-31-vietnam-banques-etat-65-pourcent",
    "date": "2026-10-31",
    "region": "Asie",
    "theme": "eco",
    "geo": [
      {
        "name": "Hanoï, Vietnam",
        "label": "Vietnam",
        "coords": [
          105.85,
          21.03
        ]
      }
    ],
    "title": "Le Vietnam veut garder ses plus grandes banques sous contrôle de l'État",
    "summary": "Le Vietnam a approuvé un plan de restructuration du capital public pour 2026-2030 qui concerne 21 entreprises. Dans les trois grandes banques BIDV, Vietcombank et VietinBank, l'État doit garder au moins 65 % du capital d'ici 2030 ; Agribank reste à 100 % public [1][2][5].",
    "points": [
      "Le plan, approuvé selon les médias par le vice-Premier ministre Nguyen Van Thang et rendu public le 28 octobre 2026, couvre 21 entreprises publiques ou à capitaux publics pour la période 2026-2030 [2][4][5].",
      "Pour BIDV, Vietcombank et VietinBank, la part minimale de l'État est fixée à 65 % d'ici 2030 [1][2][3].",
      "BIDV (76,73 % aujourd'hui) et Vietcombank (74,8 %) pourraient donc voir la part publique baisser jusqu'à 65 % ; VietinBank est la seule qui doit monter, de 64,46 % à 65 %, soit 0,54 point de plus [4][5].",
      "Agribank reste détenue à 100 % par l'État jusqu'en 2030 [4][5].",
      "Le texte ne dit pas comment ces objectifs seront atteints ; le ministère des Finances et la Banque d'État du Vietnam sont chargés de la mise en oeuvre [4][5].",
      "Le plan prévoit aussi de faire passer la part de l'État dans Vietnam Airlines de 39,29 % à 86,42 % [5]."
    ],
    "why": [
      "À retenir : alors que beaucoup de pays vendent des parts de leurs banques, Hanoï fixe un plancher pour garder la main sur le crédit de son économie [1][2].",
      "Le plancher de 65 % laisse un peu de marge : l'État peut céder une dizaine de points de BIDV et de Vietcombank, par exemple en ouvrant leur capital à des investisseurs, tout en gardant le contrôle [4][5].",
      "Contrôler les banques permet d'orienter les prêts vers les secteurs jugés stratégiques, mais limite la place des investisseurs privés et étrangers au capital [1][2].",
      "Le plan dépasse les banques : le Vietnam relève aussi la part publique dans sa compagnie aérienne, ce qui montre une logique de contrôle des groupes jugés stratégiques [1][5]."
    ],
    "forMe": "Le Vietnam est devenu un atelier du monde pour l'électronique et le textile : la façon dont il finance ses usines concerne indirectement les produits que tu achètes, même si ce plan n'a pas d'effet direct sur toi [1][2].",
    "figures": [
      {
        "value": "65 %",
        "label": "part minimale de l'État dans les grandes banques d'ici 2030",
        "src": 1
      },
      {
        "value": "64,46 %",
        "label": "part actuelle de l'État dans VietinBank",
        "src": 4
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Reuters (Investing)",
        "name": "Reuters via Investing.com, « Vietnam sets 65% state ownership floor for major banks, to retain control of strategic groups »",
        "url": "https://www.investing.com/news/stock-market-news/vietnam-sets-65-state-ownership-floor-for-major-banks-to-retain-control-of-strategic-groups-4981418"
      },
      {
        "short": "The Star",
        "name": "The Star, « Vietnam sets 65% state ownership floor for major banks » (29 octobre 2026)",
        "url": "https://www.thestar.com.my/aseanplus/aseanplus-news/2026/10/29/vietnam-sets-65-state-ownership-floor-for-major-banks-to-retain-control-of-strategic-groups"
      },
      {
        "short": "The Nation",
        "name": "The Nation (Thaïlande), « Vietnam sets state ownership targets for banks and companies »",
        "url": "https://www.nationthailand.com/news/world/40072900"
      },
      {
        "short": "Retail Banker",
        "name": "Retail Banker International, « Vietnam sets 65% state ownership floor for key banks by 2030 »",
        "url": "https://www.retailbankerinternational.com/news/vietnam-sets-65-state-ownership-floor-for-banks/"
      },
      {
        "short": "Xinhua",
        "name": "Xinhua, « Vietnam to restructure state capital in major enterprises » (29 octobre 2026)",
        "url": "https://english.news.cn/asiapacific/20261029/4db3882d2a6c4592a92689c35fd49f04/c.html"
      }
    ],
    "next": [
      {
        "when": "2030",
        "what": "Échéance pour que l'État détienne au moins 65 % de BIDV, Vietcombank et VietinBank [1][2]."
      }
    ]
  },
  {
    "id": "2026-10-31-cambodge-tourisme-chute-43-pourcent",
    "date": "2026-10-31",
    "region": "Asie",
    "theme": "eco",
    "geo": [
      {
        "name": "Phnom Penh, Cambodge",
        "label": "Cambodge",
        "coords": [
          104.92,
          11.56
        ]
      }
    ],
    "title": "Cambodge : presque moitié moins de touristes étrangers qu'il y a un an",
    "summary": "Le Cambodge a accueilli 2,46 millions de touristes étrangers de janvier à septembre 2026, contre 4,38 millions un an plus tôt, soit 43,7 % de moins. Selon le ministre du Tourisme, Huot Hak, les réseaux d'arnaques en ligne, les tensions avec la Thaïlande et le carburant cher expliquent ce recul [1][2].",
    "points": [
      "Le ministère du Tourisme a publié le 27 octobre 2026 un bilan de 2 464 033 touristes étrangers de janvier à septembre, contre 4 377 466 à la même période de 2025, soit −43,7 % [1][2].",
      "Le Vietnam reste le premier marché avec 651 486 visiteurs (−28 %), devant la Chine avec 643 314 (−27,6 %) ; les Américains ne reculent que de 5,6 %, à 140 276 [1][2]. Le Vietnam a ainsi dépassé la Chine comme première source de visiteurs [3].",
      "Le ministre Huot Hak attribue la baisse à la mauvaise publicité liée aux réseaux d'arnaques en ligne, aux frictions à la frontière avec la Thaïlande et aux conflits au Moyen-Orient, qui ont fait monter le prix du carburant et refroidi l'envie de voyager [1][2].",
      "Le recul dure depuis des mois : le cumul était de −44,4 % sur les huit premiers mois de 2026 [5], il est de −43,7 % sur neuf mois [1][2].",
      "À Angkor, 510 528 visiteurs étrangers ont acheté un billet de janvier à septembre, soit 27,6 % de moins qu'un an plus tôt ; les recettes de billets atteignent 24,23 millions de dollars (−25,9 %) [4]. Le site recule donc moins que le pays entier [1][4].",
      "Les sources officielles parlent de « frictions » à la frontière thaïlandaise, sans détailler son effet sur les entrées par la route [1][2]."
    ],
    "why": [
      "À retenir : une baisse de plus de 40 % en neuf mois est un choc pour un pays où le tourisme est un pilier de l'économie, et il touche hôtels, guides et commerces autour d'Angkor [1][2][4].",
      "Le ministre cite trois causes, mais les sources ne disent pas le poids de chacune dans la baisse [1][2]. Ce qui est mesuré, c'est l'écart selon l'origine : les deux grands voisins asiatiques perdent plus d'un quart de leurs visiteurs, les Américains un peu plus d'un vingtième [1][2].",
      "Le lien avec la guerre autour d'Ormuz passe par le carburant : selon le ministre, le conflit au Moyen-Orient a fait monter son prix et freiné l'envie de voyager dans le monde [1][2].",
      "Le ministère publie ses chiffres chaque mois (huit mois puis neuf mois), ce qui permet de suivre si le cumul annuel se stabilise [1][5]."
    ],
    "forMe": "Le prix du carburant lié à la guerre autour d'Ormuz se répercute jusque sur les voyages en Asie du Sud-Est, et donc sur les destinations que tu peux envisager. Si tu comptes visiter Angkor, sache que le site accueille nettement moins d'étrangers qu'avant [1][2][4].",
    "figures": [
      {
        "value": "−43,7 %",
        "label": "touristes étrangers, janv.–sept. 2026",
        "src": 1
      },
      {
        "value": "2,46 M",
        "label": "visiteurs contre 4,38 M en 2025",
        "src": 1
      },
      {
        "value": "−5,6 %",
        "label": "Américains, contre −28 % pour le Vietnam",
        "src": 2
      },
      {
        "value": "−27,6 %",
        "label": "visiteurs étrangers à Angkor, janv.–sept.",
        "src": 4
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Khmer Times",
        "name": "Khmer Times, « Cambodia's international tourist arrivals plunge 43.7% in Jan–Sept »",
        "url": "https://www.khmertimeskh.com/502047009/cambodias-international-tourist-arrivals-plunge-43-7-in-jan-sept"
      },
      {
        "short": "Khaosod English",
        "name": "Khaosod English (Xinhua), « Cambodia's int'l tourist arrivals plunge 43.7 pct in Jan.-Sept. » (27 octobre 2026)",
        "url": "https://www.khaosodenglish.com/news/asean/2026/10/27/cambodias-intl-tourist-arrivals-plunge-43-7-pct-in-jan-sept/"
      },
      {
        "short": "VietnamPlus",
        "name": "VietnamPlus, « Foreign tourist arrivals to Cambodia plunge 43.7% in nine months »",
        "url": "https://en.vietnamplus.vn/foreign-tourist-arrivals-to-cambodia-plunge-437-in-nine-months-post354464.vnp"
      },
      {
        "short": "The Star",
        "name": "The Star (Xinhua), « Cambodia's Angkor international tourist arrivals plunge 27.6 per cent in first nine months » (1er octobre 2026)",
        "url": "https://www.thestar.com.my/aseanplus/aseanplus-news/2026/10/01/cambodia039s-angkor-international-tourist-arrivals-plunge-276-per-cent-in-first-nine-months"
      },
      {
        "short": "Xinhua",
        "name": "Xinhua, « Cambodia's int'l tourist arrivals drop 44.4 pct in first 8 months of 2026 » (23 septembre 2026)",
        "url": "https://english.news.cn/20260923/6f1f7584d35f48dfb3eb824b177dde9d/c.html"
      }
    ]
  },
  {
    "id": "2026-10-31-ormuz-petroliers-mines-iran",
    "date": "2026-10-31",
    "impact": "monde",
    "region": "Moyen-Orient",
    "theme": "geo",
    "geo": [
      {
        "name": "Détroit d'Ormuz",
        "label": "Ormuz",
        "coords": [
          56.5,
          26.57
        ]
      }
    ],
    "title": "Ormuz : l'Iran affirme que trois pétroliers ont sauté sur des mines, Washington dément",
    "summary": "Les Gardiens de la Révolution iraniens affirment que trois pétroliers ont heurté des mines dans le détroit d'Ormuz ; le Commandement central américain (Centcom) assure qu'aucun navire n'en a touché. Octobre compte pourtant deux fois plus d'attaques que septembre, et le Brent a clôturé à 117,64 $ [1][2][6].",
    "points": [
      "Les Gardiens de la Révolution affirment que trois pétroliers, dont un supertanker de plus de 2 millions de barils, ont heurté des mines et pris feu sur les routes sud du détroit les 29 et 30 octobre ; ces affirmations n'ont pas pu être confirmées de façon indépendante [2][7].",
      "Le Centcom répond sur X que « aucun navire n'a heurté de mine » dans le détroit et que toutes les routes de transit principales reconnues au niveau international ont été déminées par les forces américaines [2][6].",
      "CNBC compte deux fois plus d'attaques de navires en octobre qu'en septembre, où 15 incidents avaient été confirmés ; c'est plus que tout autre mois de la guerre [1].",
      "Selon Kpler, le coût de transport du brut est monté à environ 21 $ le baril, contre 6,50 $ en septembre [1].",
      "Les exportations de brut par Ormuz ont atteint en moyenne près de 11,1 millions de barils par jour en octobre (environ 2 % sous septembre), mais seulement 7,3 millions la semaine finissant le mercredi 28, plus de 40 % sous le niveau d'avant-guerre [1].",
      "Le contrat de décembre du Brent, qui expirait le 30 octobre, a clôturé à 117,64 $, près du record de la guerre (118,35 $ en mars) ; le Brent a pris 13,6 % sur le mois et le WTI 15 % [1][4][5]."
    ],
    "why": [
      "À retenir : même sous les attaques, des pétroliers continuent de passer, mais en moins grand nombre, et le marché le paie [1].",
      "Le mécanisme est celui du coût : quand le risque monte, le transport coûte plus cher, et CNBC cite un analyste selon qui cela « commence à peser sur les marges » des raffineurs. Certains opérateurs envoient désormais leurs propres navires affronter le passage [1].",
      "La dispute sur les mines est une affirmation contestée : l'Iran dit, Washington dément, et aucune source indépendante ne tranche [2][6][7]. Ce qui est établi, c'est la baisse des flux de la dernière semaine, de 11,1 à 7,3 millions de barils par jour [1].",
      "Côté prix, le Brent est à moins d'un dollar de son sommet de mars (117,64 $ contre 118,35 $) après une hausse de 13,6 % en octobre : le marché pétrolier réagit au risque, avant même que les flux ne s'effondrent [1][4][5]."
    ],
    "forMe": "Un pétrole cher se paie à la pompe et dans la facture de chauffage : la tension à Ormuz touche directement ton budget. Plus les flux baissent et plus le transport coûte cher, plus la hausse risque de durer [1][3].",
    "figures": [
      {
        "value": "7,3 M",
        "label": "barils/jour par Ormuz, plus de 40 % sous l'avant-guerre",
        "src": 1
      },
      {
        "value": "+13 %",
        "label": "hausse du brut sur octobre",
        "src": 1
      },
      {
        "value": "117,64 $",
        "label": "Brent (contrat de décembre), clôture du 30 octobre",
        "src": 4
      },
      {
        "value": "×2",
        "label": "attaques de navires, octobre contre septembre (15)",
        "src": 1
      },
      {
        "value": "~21 $",
        "label": "coût de transport par baril, contre 6,50 $ en septembre",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "routes-maritimes"
    ],
    "sources": [
      {
        "short": "CNBC",
        "name": "CNBC, « Tankers defy Iran attacks to keep crude oil flowing through Hormuz » (30 octobre 2026)",
        "url": "https://www.cnbc.com/2026/10/30/tanker-attack-strait-hormuz-iran-war-oil.html"
      },
      {
        "short": "AP (Audacy)",
        "name": "Associated Press via Audacy, « Three tankers strike mines and catch fire in Strait of Hormuz, Iran claims, and other Mideast news » (30 octobre 2026)",
        "url": "https://www.audacy.com/newsradiowrva/news/world/mideast-news-october-30-2026-7f7f34ceb62f294a450e48ace0bd56e0"
      },
      {
        "short": "Trading Economics",
        "name": "Trading Economics, « Brent crude oil »",
        "url": "https://tradingeconomics.com/commodity/brent-crude-oil"
      },
      {
        "short": "DTN",
        "name": "DTN / Progressive Farmer, « WTI Up 15% in October on Fears of Iran War Escalation » (30 octobre 2026)",
        "url": "https://www.dtnpf.com/agriculture/web/ag/news/world-policy/article/2026/10/30/wti-15-october-fears-iran-war"
      },
      {
        "short": "The Nation",
        "name": "The Nation (Thaïlande), « Brent ends October up 13.6% as Iran war risks unsettle markets » (31 octobre 2026)",
        "url": "https://www.nationthailand.com/news/world/40072956"
      },
      {
        "short": "Centcom",
        "name": "Commandement central américain (Centcom) sur X, démenti des revendications des Gardiens de la Révolution (octobre 2026)",
        "url": "https://x.com/CENTCOM/status/2094411076729262413"
      },
      {
        "short": "Qazinform",
        "name": "Qazinform, « Iran reports three tanker mine strikes in Hormuz; U.S. disputes claims »",
        "url": "https://qazinform.com/news/iran-reports-three-tanker-mine-strikes-in-hormuz-us-disputes-claims-c3ee1c"
      }
    ]
  },
  {
    "id": "2026-10-31-venezuela-machado-retour-petrole",
    "date": "2026-10-31",
    "region": "Amériques",
    "theme": "geo",
    "geo": [
      {
        "name": "Caracas, Venezuela",
        "label": "Venezuela",
        "coords": [
          -66.9,
          10.49
        ]
      },
      {
        "name": "Corpus Christi, États-Unis",
        "label": "Texas",
        "coords": [
          -97.4,
          27.8
        ]
      }
    ],
    "title": "Venezuela : l'opposante Machado rentre d'exil et réclame des élections, en critiquant l'accord pétrolier avec les États-Unis",
    "summary": "María Corina Machado, prix Nobel de la paix, est rentrée au Venezuela le 25 octobre après plus de dix mois d'exil. Le 29, elle a demandé des élections en 2027 et jugé trop opaque l'accord pétrolier conclu avec les États-Unis par la présidente par intérim Delcy Rodríguez, qui promet un vote sans date [1][4][6].",
    "points": [
      "María Corina Machado, prix Nobel de la paix, est rentrée au Venezuela le 25 octobre 2026 après plus de dix mois d'exil [1][4][5].",
      "Le 29 octobre, lors de sa première conférence de presse à l'université catholique Andrés Bello de Caracas, elle a réclamé des élections en 2027 et remercié l'administration Trump pour l'opération du 3 janvier qui a écarté Nicolás Maduro, une « porte de la liberté » ouverte selon elle [1].",
      "Elle critique l'accord pétrolier : « Cet accord ne reflète pas les niveaux de transparence que la société vénézuélienne souhaite », a-t-elle dit, en précisant ne pas avoir vu le contrat [1].",
      "Al Jazeera décrit un accord qui livrerait 20 % des réserves pétrolières du pays [1] ; le Rio Times écrit que le Pentagone y détient 35 % et que le contrat n'est pas public [7].",
      "Un premier million de barils de brut vénézuélien est arrivé à Corpus Christi (Texas) le 27 octobre, sur deux pétroliers ; Donald Trump a salué la livraison [3][7].",
      "Delcy Rodríguez affirme que les élections seront organisées par une « autorité électorale renouvelée », selon la Constitution, mais sans fixer de date [1][6]."
    ],
    "why": [
      "À retenir : Machado ne s'oppose pas à Washington, elle remercie Donald Trump, mais veut une date de vote et la publication du contrat pétrolier [1].",
      "Delcy Rodríguez, ancienne vice-présidente de Maduro, dirige le pays depuis la capture de celui-ci par les États-Unis en janvier, et NPR rappelle qu'une grande partie des Vénézuéliens la rejettent en raison de son rôle sous Maduro [1][6].",
      "Washington pousse lui aussi pour un scrutin : le secrétaire d'État Marco Rubio veut une Cour suprême et un conseil électoral non partisans en place d'ici quelques mois, puis le départ de Rodríguez et un vote dans les six mois ; il dit juger la dirigeante « sur ses actes » [6].",
      "Les deux dossiers sont liés : le pétrole part déjà vers le Texas, alors que ni la date du vote ni le contenu du contrat ne sont connus [1][3][7]."
    ],
    "forMe": "Plus de pétrole vénézuélien sur le marché peut aider à calmer les prix de l'énergie, mais l'accord soulève des questions de démocratie et de transparence. Tant que le contrat reste secret, on ne sait pas qui en profite [1][3][7].",
    "figures": [
      {
        "value": "~ 10 mois",
        "label": "d'exil de Machado",
        "src": 1
      },
      {
        "value": "25 octobre",
        "label": "retour de Machado au Venezuela",
        "src": 4
      },
      {
        "value": "1 M",
        "label": "barils arrivés à Corpus Christi le 27 octobre",
        "src": 7
      },
      {
        "value": "6 mois",
        "label": "délai de vote prévu après le départ de Rodríguez, selon le plan américain",
        "src": 6
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « Venezuela's Machado lauds Trump for 'freedom', urges 2027 elections » (30 octobre 2026)",
        "url": "https://www.aljazeera.com/news/2026/10/30/machado-lauds-trump-for-freedom-floodgate-urges-2027-elections"
      },
      {
        "short": "Yahoo News",
        "name": "Yahoo News, « Venezuelan opposition leader María Machado returns after months in exile »",
        "url": "https://www.yahoo.com/news/articles/venezuelan-opposition-leader-mar-machado-171200782.html"
      },
      {
        "short": "HNGN",
        "name": "HNGN, « Trump Hails Venezuelan Oil in Texas as Machado Presses Elections » (28 octobre 2026)",
        "url": "https://www.hngn.com/articles/273602/20261028/trump-hails-venezuelan-oil-texas-machado-presses-elections.htm"
      },
      {
        "short": "Washington Post",
        "name": "The Washington Post, « Maria Corina Machado, opposition leader and Nobel laureate, returns to Venezuela » (25 octobre 2026)",
        "url": "https://www.washingtonpost.com/world/2026/10/25/maria-corina-machado-opposition-leader-nobel-laureate-returns-venezuela/"
      },
      {
        "short": "Time",
        "name": "Time, « Exiled Opposition Leader María Corina Machado Returns to Venezuela » (26 octobre 2026)",
        "url": "https://time.com/article/2026/10/26/venezuela-maria-corina-machado-return-opposition-election-democracy/"
      },
      {
        "short": "NPR",
        "name": "NPR, « Pressure grows for Venezuela's authoritarian regime as opposition leader Machado returns » (29 octobre 2026)",
        "url": "https://www.npr.org/2026/10/29/nx-s1-6019294/pressure-grows-for-venezuelas-authoritarian-regime-as-opposition-leader-machado-returns"
      },
      {
        "short": "Rio Times",
        "name": "The Rio Times, « Venezuela Oil Deal: Pentagon Has 35% and No Public Contract »",
        "url": "https://www.riotimesonline.com/machado-questions-venezuela-oil-deal-2026/"
      }
    ],
    "next": [
      {
        "when": "Dans les prochains mois",
        "what": "Marco Rubio veut que la Cour suprême et le conseil électoral non partisans soient installés ; le vote suivrait dans les six mois après le départ de Delcy Rodríguez [6]."
      }
    ]
  },
  {
    "id": "2026-10-31-perou-fujimori-prison-salvador",
    "date": "2026-10-31",
    "region": "Amériques",
    "theme": "geo",
    "geo": [
      {
        "name": "Lima, Pérou",
        "label": "Pérou",
        "coords": [
          -77.04,
          -12.05
        ]
      },
      {
        "name": "Tecoluca, Salvador",
        "label": "Salvador",
        "coords": [
          -88.8,
          13.6
        ]
      }
    ],
    "title": "Le Pérou veut copier la mégaprison du Salvador : Keiko Fujimori visite le CECOT",
    "summary": "La présidente du Pérou, Keiko Fujimori, a visité le 29 octobre le CECOT, la mégaprison du Salvador, puis rencontré Nayib Bukele. Elle annonce deux nouvelles prisons au Pérou, dont une inspirée du CECOT, sans coût ni calendrier publiés. Des ONG alertent sur le coût humain du modèle.",
    "points": [
      "Keiko Fujimori, présidente du Pérou, a visité le jeudi 29 octobre le CECOT (Centre de confinement du terrorisme), la prison de très haute sécurité construite par le président salvadorien Nayib Bukele, lors d'un déplacement officiel de quatre jours au Salvador [1][4].",
      "Le déplacement comprenait aussi un sommet bilatéral avec Nayib Bukele ; selon Latin Times, il a débouché sur des accords de coopération couvrant la sécurité publique, la gestion pénitentiaire et la prévention du crime [2][4].",
      "Après la visite, elle a annoncé que le Pérou construirait deux nouvelles prisons : l'une pour les détenus les plus dangereux, sur le modèle du CECOT, l'autre pour des détenus jugés moins dangereux [3][4].",
      "Elle a dit que cette visite « va nous inspirer beaucoup pour pouvoir reproduire ces prisons », en lien avec six prisons déjà en construction au Pérou, qui intégreraient le modèle de Bukele [4].",
      "Les propositions salvadoriennes seront évaluées selon la législation péruvienne ; ni le budget, ni les sites, ni les dates des nouvelles prisons n'ont été précisés dans les articles consultés [3][4].",
      "Le système carcéral péruvien est surpeuplé : les données de l'INPE, l'administration pénitentiaire, indiquent environ 150 % d'occupation en 2026, et l'armée surveille le périmètre de cinq prisons placées en urgence [5]."
    ],
    "why": [
      "À retenir : le « modèle Bukele » séduit de plus en plus de dirigeants d'Amérique latine face à la criminalité, et Keiko Fujimori est la dernière à visiter le CECOT [1][2].",
      "Le CECOT est devenu célèbre quand l'administration Trump y a envoyé plus de 250 Vénézuéliens expulsés, accusés de liens avec un gang, sans preuves présentées [1].",
      "Les organisations de défense des droits humains avertissent que ce modèle a un coût humain documenté, lié aux détentions massives et aux conditions d'enfermement ; elles surveillent déjà les projets péruviens [2].",
      "Côté péruvien, le débat porte sur l'adaptation du modèle au droit national et sur la capacité réelle à financer et construire : le texte complet des accords signés n'est pas publié, et la suite reste à dater [3][4][5]."
    ],
    "forMe": "La sécurité est devenue un thème électoral majeur dans la région, et les choix faits à Lima ou à San Salvador influencent les débats ailleurs. Si tu suis l'Amérique latine, retiens que l'annonce est une intention : aucun budget ni calendrier n'est encore publié [1][2][3].",
    "figures": [
      {
        "value": "2",
        "label": "nouvelles prisons annoncées au Pérou",
        "src": 3
      },
      {
        "value": "250+",
        "label": "Vénézuéliens envoyés au CECOT par Washington",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Washington Post",
        "name": "The Washington Post (AP), « Peru's Fujimori becomes latest Latin American leader to visit notorious Salvadoran prison CECOT » (29 octobre 2026)",
        "url": "https://www.washingtonpost.com/world/2026/10/29/el-salvador-peru-bukele-fujimori-cecot-visit/9094a65c-d3f7-11f1-9931-2a41b76fc976_story.html"
      },
      {
        "short": "Latin Times",
        "name": "Latin Times, « Peru's Keiko Fujimori tours El Salvador's CECOT prison as she weighs Bukele-style security policies »",
        "url": "https://www.latintimes.com/fujimori-el-salvador-bukele-security-model-600635"
      },
      {
        "short": "Rio Times",
        "name": "The Rio Times, « Peru Plans New Prisons Like El Salvador's »",
        "url": "https://riotimesonline.com/peru-two-new-prisons-cecot-model-fujimori-2026"
      },
      {
        "short": "Infobae (29 oct.)",
        "name": "Infobae, « Keiko Fujimori confirma en El Salvador que las seis cárceles en construcción en Perú incorporarán el modelo Bukele » (29 octobre 2026)",
        "url": "https://www.infobae.com/peru/2026/10/29/keiko-fujimori-confirma-en-el-salvador-que-las-seis-carceles-en-construccion-en-peru-incorporaran-el-modelo-bukele/"
      },
      {
        "short": "Diálogo Américas",
        "name": "Diálogo Américas, « Peru Tightens Prison Security to Break Criminal Command from Behind Bars » (octobre 2026)",
        "url": "https://dialogo-americas.com/articles/peru-tightens-prison-security-to-break-criminal-command-from-behind-bars/"
      }
    ]
  },
  {
    "id": "2026-10-31-nigeria-dangote-raffinerie-bourse",
    "date": "2026-10-31",
    "region": "Afrique",
    "theme": "eco",
    "geo": [
      {
        "name": "Lagos, Nigeria",
        "label": "Nigeria",
        "coords": [
          3.38,
          6.52
        ]
      }
    ],
    "title": "Nigeria : l'entrée en Bourse de la raffinerie Dangote attire environ trois fois la somme visée",
    "summary": "L'offre d'actions de la raffinerie Dangote, à Lagos, s'est close le 27 octobre après 44 jours. Selon Reuters, citant des sources, les ordres atteignent environ 6,4 mille milliards de nairas (4,78 milliards de dollars), près de trois fois l'objectif. L'allocation et la cotation restent à venir.",
    "points": [
      "L'offre publique d'actions de la raffinerie Dangote a ouvert le 14 septembre et s'est close le 27 octobre 2026, soit une fenêtre de 44 jours, après une prolongation de deux semaines accordée pour élargir la participation [3][5].",
      "L'offre porte sur 4,1 milliards d'actions nouvelles à 525 nairas chacune, soit 2,15 mille milliards de nairas (environ 1,6 milliard de dollars) [4].",
      "D'après Reuters, citant deux sources, les ordres atteignent environ 6,4 mille milliards de nairas (4,78 milliards de dollars), soit près de trois fois l'objectif [1][4].",
      "Aliko Dangote, fondateur du groupe, dit lui-même que la demande a atteint trois à quatre fois l'objectif [3].",
      "Une option de sur-allocation pourrait porter l'opération au-delà de 2,1 milliards de dollars, et les petits épargnants seraient servis en priorité [1][2].",
      "Des investisseurs d'environ 119 pays ont souscrit, selon Legit.ng [5].",
      "Les chiffres définitifs de souscription et d'allocation n'étaient pas encore publiés ; la cotation à la Bourse de Lagos, visée en novembre à l'origine, serait désormais attendue en décembre selon Legit.ng [5]."
    ],
    "why": [
      "À retenir : cette introduction en Bourse serait l'une des plus grosses d'Afrique, portée par l'appétit des investisseurs pour le raffinage local [1][2].",
      "Quand une offre est sursouscrite, la demande dépasse les titres disponibles : les investisseurs n'obtiennent qu'une partie de ce qu'ils ont demandé, et la priorité promise aux petits épargnants joue sur la répartition [1][2].",
      "Le chiffre de 4,78 milliards de dollars vient de sources anonymes citées par Reuters, pas d'un communiqué officiel : il faut attendre l'annonce de l'allocation pour le confirmer [1][4].",
      "La demande est supérieure à l'objectif d'environ 2,98 fois (6,4 divisé par 2,15), ce qui correspond à la formule « près de trois fois » retenue par les médias [1][4]."
    ],
    "forMe": "Un raffineur africain géant réduit la dépendance du continent aux carburants importés, ce qui compte quand le pétrole est cher. Cette actu informe sur le fonctionnement d'une introduction en Bourse et ne constitue pas un conseil d'investissement [1][2].",
    "figures": [
      {
        "value": "~ 3 ×",
        "label": "demande par rapport à l'objectif de l'offre",
        "src": 1
      },
      {
        "value": "4,78 Md$",
        "label": "d'ordres, selon Reuters",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Streamlinefeed",
        "name": "Streamlinefeed, « Dangote Refinery IPO Reportedly Oversubscribed Three Times at Close » (d'après Reuters)",
        "url": "https://streamlinefeed.co.ke/news/dangote-refinery-ipo-reportedly-oversubscribed-three-times-at-close"
      },
      {
        "short": "Energy News",
        "name": "Energy News, « Dangote Refinery's Nigerian Stock Market Listing Offer Is Oversubscribed »",
        "url": "https://energynews.pro/en/dangote-refinerys-nigerian-stock-market-listing-offer-is-oversubscribed"
      },
      {
        "short": "African Business",
        "name": "African Business, « Three-times oversubscribed Dangote Refinery IPO closes » (octobre 2026)",
        "url": "https://african.business/2026/10/energy-resources/three-times-oversubscribed-dangote-refinery-ipo-closes"
      },
      {
        "short": "bne IntelliNews",
        "name": "bne IntelliNews, « Nigeria's Dangote refinery $1.6bn IPO attracts $4.78bn in orders, sources say » (octobre 2026)",
        "url": "https://www.intellinews.com/nigeria-s-dangote-refinery-1-6bn-ipo-attracts-4-78bn-in-orders-sources-say-479851"
      },
      {
        "short": "Legit.ng",
        "name": "Legit.ng, « Dangote Refinery Closes $1.6bn IPO as Investors From 119 Countries Rush for Shares » (octobre 2026)",
        "url": "https://www.legit.ng/business-economy/capital-market/1738555-dangote-refinery-closes-16bn-ipo-investors-119-countries-rush-shares/"
      }
    ],
    "next": [
      {
        "when": "Novembre ou décembre 2026 (date non confirmée)",
        "what": "Allocation des actions puis cotation à la Bourse de Lagos ; Legit.ng évoque désormais décembre, des sources antérieures novembre [5]."
      }
    ]
  },
  {
    "id": "2026-10-31-afrique-raffineries-or-ethiopie-zambie",
    "date": "2026-10-31",
    "region": "Afrique",
    "theme": "eco",
    "geo": [
      {
        "name": "Addis-Abeba, Éthiopie",
        "label": "Éthiopie",
        "coords": [
          38.75,
          9.03
        ]
      },
      {
        "name": "Lusaka, Zambie",
        "label": "Zambie",
        "coords": [
          28.28,
          -15.39
        ]
      }
    ],
    "title": "Afrique : l'Éthiopie et la Zambie ouvrent leurs raffineries d'or pour garder la valeur chez elles",
    "summary": "L'Éthiopie et la Zambie ont ouvert en octobre leurs premières raffineries d'or, pour vendre du métal pur plutôt que du minerai ou de l'or brut. Les deux pays suivent le Burkina Faso, mais les analystes jugent que l'approvisionnement et la certification restent les vrais tests.",
    "points": [
      "L'Éthiopie a inauguré le 10 octobre sa première raffinerie de métaux précieux, dans la zone économique spéciale de Bole Lemi, près d'Addis-Abeba : 50 millions de dollars d'investissement, une capacité annoncée de plus de 600 tonnes de métaux précieux par an, et l'État majoritaire [1][2].",
      "Le Premier ministre Abiy Ahmed a annoncé le lancement le 12 octobre et dit que la raffinerie traitera aussi l'or d'Éthiopie et d'ailleurs, notamment de pays voisins [1][2].",
      "L'or est la première exportation de l'Éthiopie : 5,6 milliards de dollars sur l'année précédente, selon Reuters [1].",
      "La Zambie a présenté fin octobre, au salon Mining and Investment Insaka de Lusaka, la raffinerie de Minera Refineries Zambia Limited : elle affirme atteindre environ 99 % de pureté, et son laboratoire 99,99 % [3][4].",
      "Le directeur général, Andrew Mukupa Katandula, propose un plan de deux ans : formaliser l'orpaillage artisanal, offrir des préfinancements ciblés aux mineurs et mieux suivre les ventes d'or [3][4].",
      "Le Burkina Faso a ouvert en septembre Raffinor BF à Ouagadougou, d'une capacité initiale de 164 tonnes par an, avec une seconde phase prévue pour atteindre 515 tonnes [5]."
    ],
    "why": [
      "À retenir : raffiner sur place rapporte plus que vendre de l'or brut, et peut limiter la contrebande, puisque l'or passe par un circuit contrôlé [1][4].",
      "La capacité éthiopienne dépasse de loin sa propre production : la raffinerie ne tournera à plein que si elle traite l'or d'autres pays [1][2].",
      "Pour la Zambie, l'approvisionnement est la contrainte principale : l'usine doit capter assez d'or de mineurs artisanaux pour tourner de façon rentable, d'où le plan de formalisation [3][4].",
      "Les analystes jugent que posséder une raffinerie ne garantit ni les profits ni le contrôle de la filière : financement et certification internationale restent des obstacles, et la Guinée a, elle, interdit les exportations d'or brut [4][5]."
    ],
    "forMe": "L'or sert de valeur refuge et entre dans l'électronique : l'endroit où il est raffiné décide qui capte la richesse de la chaîne. Ce mouvement africain peut donc changer, à terme, les circuits d'approvisionnement du métal [4].",
    "figures": [
      {
        "value": "5,6 Md$",
        "label": "d'exportations d'or de l'Éthiopie sur un an",
        "src": 1
      },
      {
        "value": "600 t/an",
        "label": "capacité annoncée de la raffinerie éthiopienne",
        "src": 2
      },
      {
        "value": "99,99 %",
        "label": "pureté visée par la raffinerie zambienne",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Mining Weekly",
        "name": "Mining Weekly (Reuters), « Ethiopia launches its first gold refinery, Prime Minister says » (12 octobre 2026)",
        "url": "https://www.miningweekly.com/article/ethiopia-launches-its-first-gold-refinery-prime-minister-says-2026-10-12"
      },
      {
        "short": "CNBC Africa",
        "name": "CNBC Africa, « Ethiopia launches its first gold refinery, Prime Minister says » (octobre 2026)",
        "url": "https://www.cnbcafrica.com/2026/ethiopia-launches-its-first-gold-refinery-prime-minister-says"
      },
      {
        "short": "ExportFocus Africa",
        "name": "ExportFocus Africa, « Zambia Opens Gold Refinery as African Countries Expand Local Mineral Processing » (26 octobre 2026)",
        "url": "https://exportfocusafrica.com/2026/10/26/zambia-opens-gold-refinery-as-african-countries-expand-local-mineral-processing/"
      },
      {
        "short": "QNC News",
        "name": "QNC News, « Africa gold refining boom tests drive to keep mineral wealth at home » (30 octobre 2026)",
        "url": "https://qncnews.com/2026/10/30/africa-gold-refining-boom-tests-drive-to-keep-mineral-wealth-at-home"
      },
      {
        "short": "Miningmx",
        "name": "Miningmx, « Burkina Faso joins Africa's gold refining drive » (2026)",
        "url": "https://www.miningmx.com/trending/67585-burkina-faso-joins-africas-gold-refining-drive/"
      }
    ]
  },
  {
    "id": "2026-10-31-espagne-pib-inflation-t3",
    "region": "Europe",
    "theme": "eco",
    "geo": [
      {
        "name": "Madrid, Espagne",
        "label": "Espagne",
        "coords": [
          -3.7,
          40.42
        ]
      }
    ],
    "title": "L'Espagne grandit encore de 0,6 %, mais l'inflation reste près de 5 %",
    "summary": "L'institut statistique espagnol (INE) a publié le 30 octobre une première estimation : le PIB a progressé de 0,6 % au troisième trimestre, un dixième de moins qu'au deuxième, et l'inflation reste à 4,9 % en octobre [1][4].",
    "points": [
      "Le PIB espagnol a progressé de 0,6 % sur le trimestre, après 0,7 % au deuxième, et de 2,7 % sur un an, contre 2,6 % au trimestre précédent [1][2][4].",
      "En rythme trimestriel, la demande intérieure apporte 0,5 point de croissance et la demande extérieure 0,1 point ; consommation et investissement ralentissent, la dépense publique accélère à 0,9 % [4][6].",
      "L'inflation annuelle reste à 4,9 % en octobre, comme en septembre, troisième mois de suite au-dessus de 4 % ; l'inflation sous-jacente est de 3,1 % [1][7][8].",
      "Selon l'INE, les carburants baissent plus qu'il y a un an, ce qui freine l'indice ; le gaz, plus cher qu'il y a un an, le pousse à la hausse [7][8]."
    ],
    "why": [
      "À retenir : l'Espagne reste l'une des économies les plus dynamiques de la zone euro, loin devant la France (−0,1 %) [1][2].",
      "Une inflation à 4,9 % complique la tâche de la Banque centrale européenne, qui fixe un seul taux pour toute la zone euro et a laissé son taux de dépôt à 2,5 % le 29 octobre [11]. L'Italie est à 5,4 % et l'Allemagne à 2,8 % [9]."
    ],
    "forMe": "Si tu voyages ou fais des achats en Espagne, les prix y montent plus vite qu'en France en ce moment [1][3].",
    "figures": [
      {
        "value": "+0,6 %",
        "label": "PIB espagnol au 3e trimestre",
        "src": 1
      },
      {
        "value": "4,9 %",
        "label": "inflation sur un an en octobre",
        "src": 1
      }
    ],
    "sources": [
      {
        "short": "Anadolu",
        "name": "Anadolu Agency, « Spain's economy expands 0.6% in Q3 as annual inflation holds at 4.9% » (30 octobre 2026)",
        "url": "https://www.aa.com.tr/en/economy/spains-economy-expands-06-in-q3-as-annual-inflation-holds-at-49-/4106067"
      },
      {
        "short": "Global Banking & Finance",
        "name": "Global Banking & Finance Review, « Spain's Economic Growth Slows to 0.6% in Q3 » (30 octobre 2026)",
        "url": "https://www.globalbankingandfinance.com/spains-economic-growth-edges-down-0-6-third-quarter/"
      },
      {
        "short": "InvestingLive",
        "name": "InvestingLive, « Spain inflation remains stubbornly high near 5% as the ECB headache gets worse » (30 octobre 2026)",
        "url": "https://investinglive.com/news/spain-inflation-remains-stubbornly-high-near-5-as-the-ecb-headache-gets-worse/"
      },
      {
        "short": "The Objective",
        "name": "The Objective, « El PIB crece un 0,6% en el tercer trimestre, una décima menos que el anterior » (30 octobre 2026)",
        "url": "https://theobjective.com/economia/2026-10-30/pib-trimestre-decima/"
      },
      {
        "short": "Moncloa.com",
        "name": "Moncloa.com, « La economía española crece una décima menos: el PIB se frena al 0,6% por inversión y consumo » (30 octobre 2026)",
        "url": "https://www.moncloa.com/2026/10/30/economia-espanola-pib-freno-consumo-3458602/"
      },
      {
        "short": "INE (comptes trimestriels)",
        "name": "INE, Contabilidad Nacional Trimestral de España, avance du 3e trimestre 2026 (30 octobre 2026)",
        "url": "https://www.ine.es/dyngs/INEbase/es/operacion.htm?c=Estadistica_C&cid=1254736164439&menu=ultiDatos&idp=1254735576581"
      },
      {
        "short": "The Objective (IPC)",
        "name": "The Objective, « El IPC se mantiene en el 4,9% en octubre y encadena tres meses por encima del 4% » (30 octobre 2026)",
        "url": "https://theobjective.com/economia/2026-10-30/ipc-49-octubre-meses-ecnima-4/"
      },
      {
        "short": "INE (IPC)",
        "name": "INE, Índice de precios de consumo, indicador adelantado de octubre 2026 (30 octobre 2026)",
        "url": "https://www.ine.es/dyngs/INEbase/es/operacion.htm?c=Estadistica_C&cid=1254736176802&menu=ultiDatos&idp=1254735976607"
      },
      {
        "short": "The Private Banker",
        "name": "Le Private Banker, « Euro-Zone Inflation Splits as Italy Jumps to 5.4% and Germany Eases to 2.8% on Fuel Tax Cut » (31 octobre 2026)",
        "url": "https://leprivatebanker.com/2026/10/31/euro-zone-inflation-splits-as-italy-jumps-to-5-4-and-germany-eases-to-2-8-on-fuel-tax-cut/"
      },
      {
        "short": "Tickward",
        "name": "Tickward, calendrier des réunions de la BCE en 2026",
        "url": "https://tickward.com/en/calendars/central-bank-meeting-dates/2026/ecb"
      },
      {
        "short": "Cryptoticker",
        "name": "Cryptoticker, « ECB rate decision: 2.50 percent, Lagarde leaves » (octobre 2026)",
        "url": "https://cryptoticker.io/en/ecb-rate-decision-october-2026-lagarde-exit/"
      }
    ],
    "date": "2026-10-31",
    "level": 2,
    "culture": [],
    "dossiers": [],
    "next": [
      {
        "when": "17 décembre",
        "what": "La BCE tient sa dernière réunion de politique monétaire de l'année, avec de nouvelles projections économiques [10]."
      }
    ]
  },
  {
    "id": "2026-10-31-allemagne-pib-t3-depenses-publiques",
    "region": "Europe",
    "theme": "eco",
    "geo": [
      {
        "name": "Berlin, Allemagne",
        "label": "Allemagne",
        "coords": [
          13.4,
          52.52
        ]
      }
    ],
    "title": "L'Allemagne grandit de 0,2 %, un peu mieux que prévu, grâce à l'État",
    "summary": "L'Office fédéral de la statistique (Destatis) a publié le 30 octobre une première estimation : le PIB allemand a progressé de 0,2 % au troisième trimestre, alors que les analystes interrogés par FactSet attendaient 0,1 %. La dépense publique, défense et infrastructures, soutient l'activité [1][2][3].",
    "points": [
      "Le PIB a progressé de 0,2 % sur le trimestre (corrigé des prix, des variations saisonnières et du calendrier) et de 1,3 % sur un an ; Destatis n'a pas modifié ses chiffres des deux premiers trimestres [1][3].",
      "La consommation est légèrement positive, mais les investissements reculent, selon les données provisoires [3].",
      "Les exportations, très dynamiques au premier semestre, ralentissent nettement au troisième trimestre [3].",
      "La Bundesbank, la banque centrale, jugeait le 21 octobre que l'économie avait probablement stagné ; elle citait des facteurs temporaires, dont le niveau très bas du Rhin, qui restreint le transport fluvial et pèse sur l'industrie [2][4][5]."
    ],
    "why": [
      "À retenir : la première économie d'Europe ne recule pas, mais elle dépend beaucoup de l'argent de l'État. Le chancelier Friedrich Merz a lancé un plan massif de dépenses de défense et d'infrastructures, qui soutient l'économie cette année [2].",
      "Le gouvernement prévoit 1,3 % de croissance en 2026 et 1,1 % en 2027 [1]. Le détail des investissements, des dépenses publiques et du commerce extérieur sera publié par Destatis le 25 novembre [3]."
    ],
    "forMe": "L'Allemagne est le premier client de la France : quand elle tient, les exportations françaises en profitent [1][2]. Mais si ses propres exportations s'essoufflent, son industrie achète moins [3].",
    "figures": [
      {
        "value": "+0,2 %",
        "label": "PIB allemand au 3e trimestre",
        "src": 1
      },
      {
        "value": "+0,1 %",
        "label": "ce qu'attendaient les économistes",
        "src": 1
      }
    ],
    "sources": [
      {
        "short": "RTÉ",
        "name": "RTÉ, « German economy grew more than expected in third quarter » (30 octobre 2026)",
        "url": "https://www.rte.ie/news/business/2026/1030/1597377-german-economy-grew-more-than-expected-in-third-quarter/"
      },
      {
        "short": "France 24",
        "name": "France 24 (AFP), « German economy logs 0.2% growth, faster than expected » (30 octobre 2026)",
        "url": "https://www.france24.com/en/live-news/20261030-german-economy-logs-0-2-growth-faster-than-expected"
      },
      {
        "short": "Destatis",
        "name": "Destatis, communiqué n° 381, « Bruttoinlandsprodukt im 3. Quartal 2026 um 0,2 % höher als im Vorquartal » (30 octobre 2026)",
        "url": "https://www.destatis.de/DE/Presse/Pressemitteilungen/2026/10/PD26_381_811.html"
      },
      {
        "short": "Bloomberg",
        "name": "Bloomberg, « Germany's Economy Probably Stagnated in Third Quarter: Bundesbank » (21 octobre 2026)",
        "url": "https://www.bloomberg.com/news/articles/2026-10-21/german-economy-probably-stagnated-in-third-quarter-bundesbank"
      },
      {
        "short": "Democrata",
        "name": "Democrata, « Bundesbank warns of slowdown and inflation in Germany » (octobre 2026)",
        "url": "https://www.democrata.es/en/economy/the-bundesbank-confirms-the-halt-of-the-german-economy-in-the-third-quarter/"
      }
    ],
    "date": "2026-10-31",
    "level": 2,
    "culture": [],
    "dossiers": [],
    "next": [
      {
        "when": "25 novembre",
        "what": "Destatis publie les résultats détaillés du PIB du troisième trimestre : investissements, dépenses publiques, commerce extérieur [3]."
      }
    ]
  },
  {
    "id": "2026-10-31-portugal-logement-manifestations-budget",
    "region": "Europe",
    "theme": "mix",
    "geo": [
      {
        "name": "Lisbonne, Portugal",
        "label": "Portugal",
        "coords": [
          -9.14,
          38.72
        ]
      }
    ],
    "title": "Portugal : des milliers de manifestants pour le logement devant le Parlement, en plein débat budgétaire",
    "summary": "Le 27 octobre, des milliers de personnes ont manifesté devant le Parlement à Lisbonne, au début du débat sur le budget 2027, adopté en première lecture le 28 [1][3][4].",
    "points": [
      "Le dimanche précédent, la police a démantelé des campements de militants à Lisbonne et à Porto : 11 blessés légers, dont 3 policiers, selon elle ; 60 selon le collectif Casa para Viver [3].",
      "Ils refusent des expulsions facilitées et la fin du plafonnement des loyers des nouveaux baux [3]. Selon l'institut national de statistique, les prix des logements ont augmenté de près de 20 % entre début 2025 et début 2026 [1].",
      "Le Premier ministre Luís Montenegro juge l'action policière conforme à la « nécessité, proportionnalité et adéquation » [3] ; le président António José Seguro a condamné les violences [5].",
      "Le 28 octobre, le budget a été adopté en première lecture malgré 79 voix contre, grâce à 60 abstentions dont 58 socialistes. Le chef du PS, José Luís Carneiro, dit que le pays ne peut pas entrer en crise politique [4][6]. Le gouvernement met en avant les salaires [2]."
    ],
    "why": [
      "À retenir : le logement est une colère sociale majeure au Portugal, et la rue pèse sur un gouvernement minoritaire qui ne passe que grâce au PS [1][4].",
      "Le vote final a lieu le 24 novembre, après le travail en commission [4][6]. Seguro a convoqué le Conseil d'État [3]."
    ],
    "forMe": "Lisbonne attire touristes et étrangers, ce qui fait monter les loyers : un débat présent aussi en France [1].",
    "figures": [
      {
        "value": "≈ +20 %",
        "label": "prix des logements en un an",
        "src": 1
      },
      {
        "value": "79 / 60",
        "label": "voix contre / abstentions sur le budget",
        "src": 6
      }
    ],
    "next": [
      {
        "when": "24 novembre",
        "what": "Vote final du budget 2027 au Parlement [4][6]."
      },
      {
        "when": "Semaine suivant le 27 octobre",
        "what": "Réunion du Conseil d'État convoquée par le président Seguro sur les manifestations [3]."
      }
    ],
    "sources": [
      {
        "short": "AP (ABC News)",
        "name": "Associated Press (ABC News), « Portugal's Parliament debates government spending plans as housing protests swell » (27 octobre 2026)",
        "url": "https://abcnews.com/Business/wireStory/portugals-parliament-debates-government-spending-plans-housing-protests-swell-137607440"
      },
      {
        "short": "The Portugal News",
        "name": "The Portugal News, « Portugal highlights wage growth in 2027 budget debate » (28 octobre 2026)",
        "url": "https://www.theportugalnews.com/news/2026-10-28/portugal-highlights-wage-growth-in-2027-budget-debate/1107868"
      },
      {
        "short": "Reuters (Internazionale)",
        "name": "Reuters, « Thousands rally outside Portugal's parliament over housing crisis, police operations » (27 octobre 2026)",
        "url": "https://www.internazionale.it/ultime-notizie-reuters/2026/10/27/thousands-rally-outside-portugal-s-parliament-over-housing-crisis-police-operations"
      },
      {
        "short": "The Portugal News",
        "name": "The Portugal News, « Portugal's 2027 State Budget approved in general terms by Parliament » (29 octobre 2026)",
        "url": "https://www.theportugalnews.com/news/2026-10-29/portugals-2027-state-budget-approved-in-general-terms-by-parliament/1108113"
      },
      {
        "short": "Portugal Resident",
        "name": "Portugal Resident, « President Seguro breaks silence over police reaction to housing protests »",
        "url": "https://www.portugalresident.com/president-seguro-breaks-silence-over-police-reaction-to-housing-protests/"
      },
      {
        "short": "Reuters (Euronext)",
        "name": "Reuters, « Portugal's 2027 budget bill passes first parliamentary hurdle » (28 octobre 2026)",
        "url": "https://live.euronext.com/en/financial-news/portugals-2027-budget-bill-passes-first-parliamentary-hurdle"
      }
    ],
    "date": "2026-10-31",
    "level": 2,
    "culture": [],
    "dossiers": []
  },
  {
    "id": "2026-10-31-italie-croissance-nulle-inflation",
    "region": "Europe",
    "theme": "eco",
    "geo": [
      {
        "name": "Rome, Italie",
        "label": "Italie",
        "coords": [
          12.5,
          41.9
        ]
      }
    ],
    "title": "L'Italie à l'arrêt au 3e trimestre, avec une inflation au plus haut depuis plus de trois ans",
    "summary": "Le 30 octobre, l'Istat a publié un PIB stable au troisième trimestre, sous les attentes, et une inflation de 5,4 % en octobre, tirée par l'énergie [1][2][5].",
    "points": [
      "Selon l'estimation préliminaire de l'Istat, le PIB italien n'a pas progressé au troisième trimestre par rapport au deuxième, un peu moins bien que prévu ; sur un an, il gagne 0,8 % [1][4][5].",
      "Les services et l'agriculture ont progressé, l'industrie a reculé ; le commerce extérieur net a pesé sur la croissance [4][5].",
      "L'inflation a atteint 5,4 % sur un an en octobre contre 4,2 % en septembre (+0,9 % sur un mois), son plus haut niveau depuis août 2023 [2][3][6]. Les prix de l'énergie ont bondi de 31,4 % sur un an (22,6 % en septembre) et ceux de l'énergie régulée de 59,5 %, l'Istat renvoyant au contexte géopolitique [6].",
      "Les salaires des conventions ont augmenté moins vite que les prix aux deuxième et troisième trimestres [7]."
    ],
    "why": [
      "À retenir : l'Italie fait exception parmi les grands pays européens avec cette accélération des prix, au moment où sa croissance s'arrête ; la zone euro avance surtout grâce à l'Espagne [1][2][7].",
      "Le ministre de l'Économie Giancarlo Giorgetti dit que « les guerres pèsent sur l'énergie » et juge cet impact préoccupant [8]."
    ],
    "forMe": "Une Italie à l'arrêt, c'est moins de commandes pour les entreprises françaises, dont elle est l'un des grands clients [1][2].",
    "figures": [
      {
        "value": "0 %",
        "label": "croissance de l'Italie au 3e trimestre",
        "src": 1
      },
      {
        "value": "5,4 %",
        "label": "inflation sur un an en octobre",
        "src": 2
      },
      {
        "value": "+31,4 %",
        "label": "prix de l'énergie sur un an en octobre",
        "src": 6
      }
    ],
    "next": [
      {
        "when": "29 janvier 2027",
        "what": "L'Istat publie sa prochaine estimation préliminaire du PIB [4]."
      }
    ],
    "sources": [
      {
        "short": "RTTNews",
        "name": "RTTNews, « Italy Economy Stagnates In Q3; Inflation Highest In Over 3 Years » (30 octobre 2026)",
        "url": "https://www.rttnews.com/3706513/italy-economy-stagnates-in-q3-inflation-highest-in-over-3-years.aspx"
      },
      {
        "short": "QNC News",
        "name": "QNC News, « Italy Inflation Hits Highest in Over Three Years as Economy Stalls » (30 octobre 2026)",
        "url": "https://qncnews.com/2026/10/30/italy-inflation-hits-highest-in-over-three-years-as-economy-stalls/"
      },
      {
        "short": "Yahoo Finance",
        "name": "Yahoo Finance, « Italy inflation surges to 5.4% as economy stalls » (30 octobre 2026)",
        "url": "https://finance.yahoo.com/economy/articles/italy-inflation-surges-5-4-135329163.html"
      },
      {
        "short": "Istat",
        "name": "Istat, « Preliminary estimate of GDP, Q3 2026 » (30 octobre 2026)",
        "url": "https://www.istat.it/en/press-release/preliminary-estimate-of-gdp-q3-2026/"
      },
      {
        "short": "Il Sole 24 Ore",
        "name": "Il Sole 24 Ore, « Italia's GDP in 2026: stagnation in the third quarter, with industry in decline and services on the rise »",
        "url": "https://en.ilsole24ore.com/art/pil-italia-below-expectations-flat-for-the-third-quarter-of-2026-AJ4Ss2yB"
      },
      {
        "short": "Il Sole 24 Ore",
        "name": "Il Sole 24 Ore, « Inflation: Istat estimates +0.9 per cent in October, +5.4 per cent year-on-year »",
        "url": "https://en.ilsole24ore.com/art/istat-estimates-inflation-at-09-per-cent-in-october-54-per-cent-for-the-year-a-record-high-in-2023-AJHFT9yB"
      },
      {
        "short": "Sky TG24",
        "name": "Sky TG24, « Italia, prezzi in salita, salari giù e Pil fermo: la fotografia dell'Istat » (31 octobre 2026)",
        "url": "https://tg24.sky.it/economia/2026/10/31/rincari-italia-inflazione-istat"
      },
      {
        "short": "Libero",
        "name": "Libero, « Inflazione, Giorgetti: impatto delle guerre ed energia preoccupa »",
        "url": "https://www.liberoquotidiano.it/news/tv-news/49495312/inflazione-giorgetti-impatto-delle-guerre-ed-energia-preoccupa/"
      }
    ],
    "date": "2026-10-31",
    "level": 2,
    "culture": [],
    "dossiers": []
  },
  {
    "id": "2026-10-30-israel-elections-aucune-majorite",
    "date": "2026-10-30",
    "region": "Moyen-Orient",
    "theme": "geo",
    "geo": [
      {
        "name": "Jérusalem, Israël",
        "label": "Israël",
        "coords": [
          35.21,
          31.77
        ]
      }
    ],
    "title": "Israël : le Likud arrive en tête, mais aucun camp n'a la majorité et les partis arabes doublent presque leurs sièges",
    "summary": "Le décompte final donne 27 sièges au Likud, 53 au bloc de Netanyahou et 48 à l'opposition, sur 120. Il en faut 61 pour gouverner.",
    "points": [
      "Le décompte des voix est terminé : le Likud de Benyamin Netanyahou reste le premier parti, avec 27 sièges sur 120 (20,5 % des voix) [1][3][4].",
      "Le bloc de Netanyahou totalise 53 sièges et l'opposition 48, donc aucun des deux n'atteint les 61 sièges nécessaires pour former un gouvernement [2][4]. Le parti Yashar de Gadi Eisenkot en obtient 21 [4].",
      "Les partis arabes ont gagné 19 sièges (11 pour la Liste unie, 8 pour Ra'am), contre 10 dans le Parlement sortant [2][4]. Les résultats officiels doivent être remis au président Isaac Herzog le 4 novembre, et les députés prêteront serment le 10 novembre [2]."
    ],
    "why": [
      "À retenir : sans majorité claire, Israël entre dans une période de négociations qui peut durer des semaines, en pleine guerre régionale [2][4].",
      "Aucun camp ne peut gouverner seul : il faudra soit un accord improbable entre les blocs, soit un gouvernement minoritaire qui obtiendrait quand même la confiance du Parlement [4]. Tant que la situation n'est pas réglée, les décisions budgétaires et militaires restent incertaines."
    ],
    "forMe": "Ce vote ne change rien à ton quotidien tout de suite, mais le pays voisin de Gaza, du Liban et de l'Iran n'aura peut-être pas de gouvernement stable avant plusieurs semaines [2][4].",
    "figures": [
      {
        "value": "27 sièges",
        "label": "pour le Likud, premier parti",
        "src": 3
      },
      {
        "value": "53 contre 48",
        "label": "bloc de Netanyahou contre opposition, sur 120",
        "src": 2
      },
      {
        "value": "19 sièges",
        "label": "pour les partis arabes (10 auparavant)",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Israel Hayom",
        "name": "Israel Hayom, « Israel's 2026 election results released » (29 octobre 2026)",
        "url": "https://www.israelhayom.com/2026/10/29/israels-2026-election-results-released/"
      },
      {
        "short": "Times of Israel",
        "name": "The Times of Israel, « Central Elections Committee publishes final election results, Knesset to be sworn in Nov. 10 » (octobre 2026)",
        "url": "https://www.timesofisrael.com/liveblog_entry/central-elections-committee-publishes-final-election-results-knesset-to-be-sworn-in-nov-10/"
      },
      {
        "short": "Globes",
        "name": "Globes, « Count complete: Likud has 27 Knesset seats, Shas drops to 6 » (octobre 2026)",
        "url": "https://en.globes.co.il/en/article-count-complete-likud-has-27-knesset-seats-shas-drops-to-6-1001561412"
      },
      {
        "short": "Jerusalem Post",
        "name": "The Jerusalem Post, « Israel Election 2026: Netanyahu's Likud remains Israel's biggest party » (octobre 2026)",
        "url": "https://www.jpost.com/israel-election-2026/article-913237"
      }
    ]
  },
  {
    "id": "2026-10-30-royaume-uni-budget-healey-banques",
    "date": "2026-10-30",
    "region": "Europe",
    "theme": "eco",
    "geo": [
      {
        "name": "Londres, Royaume-Uni",
        "label": "Royaume-Uni",
        "coords": [
          -0.13,
          51.51
        ]
      }
    ],
    "title": "Royaume-Uni : un premier budget sans surprise, des banques taxées et une marge de manœuvre qui fond",
    "summary": "Le nouveau ministre des Finances, John Healey, promet pas d'impôt en plus pour « les gens qui travaillent » et fait payer les banques. La marge de sécurité de l'État tombe à environ 15 milliards de livres.",
    "points": [
      "Le 28 octobre, John Healey a présenté son premier budget comme ministre des Finances. Il a promis qu'il n'y aurait pas de hausse d'impôts pour « les travailleurs », a aidé les ménages et les automobilistes touchés par la hausse des prix de l'énergie et relevé les impôts des banques [1][3].",
      "Le bureau indépendant du budget (OBR) estime la marge de sécurité de l'État à environ 15 milliards de livres en 2029-2030, contre 24 milliards prévus en mars [1][2].",
      "Les marchés ont à peine réagi : le taux auquel l'État britannique emprunte à 10 ans tournait autour de 5,3 % et la livre a peu bougé [1][2]. Une fuite sur l'impôt visant les banques a pourtant poussé la présidente de la commission du Trésor, Meg Hillier, à écrire au ministère et à l'autorité financière [3]."
    ],
    "why": [
      "À retenir : le budget a calmé les marchés, mais avec une marge plus faible, le moindre choc (énergie, taux) peut obliger le gouvernement à relever des impôts ou couper des dépenses [1][2].",
      "Les analystes notent aussi qu'il ne contient aucune mesure nouvelle pour relancer la croissance à long terme [1]. Le pays emprunte déjà cher : autour de 5,3 % à 10 ans [1]."
    ],
    "forMe": "Si tu as de l'épargne ou un prêt en livres, le calme des marchés évite une secousse immédiate, mais l'impôt plus lourd sur les banques peut à terme se répercuter sur leurs services [1][3].",
    "figures": [
      {
        "value": "≈ 15 milliards £",
        "label": "de marge de sécurité en 2029-2030 (24 milliards prévus en mars)",
        "src": 1
      },
      {
        "value": "≈ 5,3 %",
        "label": "taux d'emprunt de l'État à 10 ans après le budget",
        "src": 1
      },
      {
        "value": "28 octobre",
        "label": "premier budget de John Healey",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [
      "inflation-taux"
    ],
    "sources": [
      {
        "short": "Portfolio Adviser",
        "name": "Portfolio Adviser, « Autumn Budget 2026: Gilts steady after budget ‘broadly consistent with market expectations’ » (octobre 2026)",
        "url": "https://portfolio-adviser.com/autumn-budget-2026-gilts-steady-after-budget-broadly-consistent-with-market-expectations/"
      },
      {
        "short": "MarketScreener",
        "name": "MarketScreener, « Gilt Yields Ease, Sterling Falls Slightly in Muted Reaction to U.K. Budget » (octobre 2026)",
        "url": "https://www.marketscreener.com/news/gilt-yields-ease-sterling-falls-slightly-in-muted-reaction-to-u-k-budget-update-ce785cd2de8ff526"
      },
      {
        "short": "Global Banking & Finance",
        "name": "Global Banking & Finance (Reuters), « UK Budget 2026: Healey Avoids Market Drama, Not Entirely Leak-Free » (octobre 2026)",
        "url": "https://www.globalbankingandfinance.com/uks-healey-spares-markets-drama-budget-entirely-leak-free/"
      }
    ]
  },
  {
    "id": "2026-10-30-tanzanie-gaz-mnazi-bay-premier-gaz-novembre",
    "date": "2026-10-30",
    "region": "Afrique",
    "theme": "eco",
    "geo": [
      {
        "name": "Mnazi Bay, Mtwara, Tanzanie",
        "label": "Mtwara",
        "coords": [
          40.18,
          -10.27
        ]
      }
    ],
    "title": "Tanzanie : une nouvelle poche de gaz de 223 milliards de pieds cubes, déjà prête à produire dès novembre",
    "summary": "Le gouvernement annonce 223 milliards de pieds cubes de gaz à Mnazi Bay, dans le sud. L'exploitant Maurel & Prom parle de 200 milliards, avec une première production dès novembre.",
    "points": [
      "La Tanzanie dit avoir découvert environ 223 milliards de pieds cubes de gaz naturel à Mnazi Bay, dans la région de Mtwara, dans le sud du pays [1][2].",
      "L'exploitant français Maurel & Prom, qui a foré le puits Kasa-1X avec la société publique TPDC, parle plutôt d'environ 200 milliards de pieds cubes bruts, dont environ 120 milliards pour sa part [1][2].",
      "La production pourrait démarrer dès novembre 2026, avec environ 50 millions de pieds cubes par jour [1][2]. Le gouvernement estime ses réserves existantes à 57,54 mille milliards de pieds cubes [1]."
    ],
    "why": [
      "À retenir : avec le gaz à des prix élevés à cause de la guerre autour d'Ormuz, un pays qui peut produire vite devient une carte à jouer [1][2].",
      "L'écart entre 223 et 200 milliards vient de qui compte : le gouvernement annonce un volume estimé, l'entreprise donne son chiffre brut et sa part [1][2]. Il faudra attendre les mesures officielles pour trancher."
    ],
    "forMe": "Ce gaz sert d'abord à la Tanzanie et à ses voisins, mais chaque nouveau gisement hors du Golfe réduit un peu la dépendance mondiale à Ormuz, ce qui pèse à terme sur ta facture d'énergie [1][2].",
    "figures": [
      {
        "value": "223 milliards",
        "label": "de pieds cubes de gaz annoncés par le gouvernement",
        "src": 1
      },
      {
        "value": "≈ 200 milliards",
        "label": "de pieds cubes bruts selon Maurel & Prom",
        "src": 2
      },
      {
        "value": "Novembre 2026",
        "label": "début de production possible (≈ 50 millions de pieds cubes par jour)",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "The Citizen",
        "name": "The Citizen (Tanzanie), « Tanzania discovers 223 billion cubic feet of natural gas in Mtwara » (27 octobre 2026)",
        "url": "https://thecitizen.co.tz/tanzania/news/national/tanzania-discovers-223-billion-cubic-feet-of-natural-gas-in-mtwara-5647712"
      },
      {
        "short": "Offshore Engineer",
        "name": "Offshore Engineer, « Tanzania Eyes Gas Reserves Boost After Mnazi Bay Offshore Discovery » (octobre 2026)",
        "url": "https://www.oedigital.com/news/543934-tanzania-eyes-gas-reserves-boost-after-mnazi-bay-offshore-discovery"
      }
    ]
  },
  {
    "id": "2026-10-30-bresil-petrobras-record-production",
    "date": "2026-10-30",
    "region": "Amériques",
    "theme": "eco",
    "geo": [
      {
        "name": "Rio de Janeiro, Brésil",
        "label": "Rio de Janeiro",
        "coords": [
          -43.17,
          -22.91
        ]
      }
    ],
    "title": "Brésil : Petrobras bat son record de production, +11,7 % en un an, en plein pétrole cher",
    "summary": "La compagnie pétrolière publique produit 3,5 millions de barils équivalent pétrole par jour au troisième trimestre, son plus haut niveau historique.",
    "points": [
      "Petrobras annonce une production propre record de 3,512 millions de barils équivalent pétrole par jour au troisième trimestre, soit 11,7 % de plus qu'un an plus tôt [1][2].",
      "La production des champs qu'elle opère atteint aussi un record, à 5,08 millions de barils par jour, dont 4,46 millions viennent des gisements sous la couche de sel (le « pré-sel ») [1].",
      "L'ancien record datait du deuxième trimestre 2026 (3,34 millions de barils par jour) [1][2]."
    ],
    "why": [
      "À retenir : alors que le Golfe est bloqué, le Brésil produit et vend plus de pétrole, et gagne en importance pour les pays qui cherchent d'autres fournisseurs [1][2].",
      "Le chiffre englobe pétrole et gaz, exprimés en « barils équivalent pétrole » ; pour le seul pétrole, les estimations sont plus basses (environ 2,9 millions de barils par jour) [2]."
    ],
    "forMe": "Chaque baril produit ailleurs que dans le Golfe aide à calmer un peu le prix du carburant, même si l'effet reste faible tant que le détroit d'Ormuz est fermé [1][2].",
    "figures": [
      {
        "value": "3,512 millions",
        "label": "de barils équivalent pétrole par jour (record)",
        "src": 1
      },
      {
        "value": "+11,7 %",
        "label": "sur un an",
        "src": 1
      },
      {
        "value": "5,08 millions",
        "label": "de barils par jour sur les champs qu'elle opère",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Petrobras (SEC)",
        "name": "Petrobras, formulaire 6-K déposé auprès de la SEC (28 octobre 2026)",
        "url": "https://www.sec.gov/Archives/edgar/data/0001119639/000129281426005030/pbr20261028_6k.htm"
      },
      {
        "short": "IndustrialInfo",
        "name": "IndustrialInfo, « Brazil's Petrobras sets new production, export records in Q3 » (octobre 2026)",
        "url": "https://www.industrialinfo.com/news/article/brazils-petrobras-sets-new-production-export-records-in-q3--348104"
      }
    ]
  },
  {
    "id": "2026-10-30-ormuz-petrole-114-shell-pas-temporaire",
    "date": "2026-10-30",
    "region": "Moyen-Orient",
    "theme": "mix",
    "geo": [
      {
        "name": "Détroit d’Ormuz",
        "label": "Ormuz",
        "coords": [
          56.5,
          26.5
        ]
      }
    ],
    "title": "Le patron de Shell le dit : le pétrole à 115 dollars n'est plus « temporaire », car les stocks sont presque vides",
    "summary": "Le Brent finit à environ 115 dollars, en route pour un quatrième mois de hausse. L'Iran promet de dégager le détroit en sept jours, mais Washington envisage de reprendre les frappes.",
    "points": [
      "Le 29 octobre, le Brent a clôturé autour de 114,88 dollars le baril et le pétrole américain (WTI) à environ 102 dollars ; au matin du 30, le Brent montait vers 116 dollars et finissait octobre avec près de 11 % de hausse, un quatrième mois de hausse d'affilée [1][2][3].",
      "Le patron de Shell, Wael Sawan, a estimé que les prix ne semblent plus temporaires, car les stocks mondiaux sont très bas [1][3]. L'Europe a promis de libérer 42 millions de barils de ses réserves sur trois mois [1][3].",
      "L'Iran dit s'attendre à lancer en moins d'une semaine un plan de sept jours pour dégager le détroit, mais selon le Wall Street Journal, un haut commandant a présenté à Donald Trump des options militaires, et il pourrait reprendre ses frappes après les élections américaines de mi-mandat, la semaine prochaine [1][2]. Un pétrolier a aussi été touché par un objet non identifié en quittant le détroit [1][3]."
    ],
    "why": [
      "À retenir : tant que le détroit reste bloqué, le prix ne baisse pas, et même une bonne nouvelle diplomatique est vite effacée par un risque de reprise des frappes [1][2].",
      "Le suivi du trafic indique 2 passages seulement le 25 octobre, contre 85 par jour avant la crise [3]."
    ],
    "forMe": "Si le pétrole reste à ce niveau, l'essence et le fioul pèsent plus longtemps sur ton budget [1][3].",
    "figures": [
      {
        "value": "≈ 115 $",
        "label": "le baril de Brent, clôture du 29 octobre",
        "src": 1
      },
      {
        "value": "≈ +11 %",
        "label": "de hausse du Brent en octobre, quatrième mois de hausse",
        "src": 3
      },
      {
        "value": "2 passages",
        "label": "dans le détroit le 25 octobre, contre 85 par jour avant la crise",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [
      "routes-maritimes"
    ],
    "sources": [
      {
        "short": "Nation Thailand",
        "name": "Nation Thailand, « WTI rises 0.8% on Oct 30 amid fears of US strikes on Iran » (30 octobre 2026)",
        "url": "https://www.nationthailand.com/news/world/40072907"
      },
      {
        "short": "Bloomberg",
        "name": "Bloomberg, « Oil Climbs on Signs US May Resume Military Strikes Against Iran » (29 octobre 2026)",
        "url": "https://www.bloomberg.com/news/articles/2026-10-29/latest-oil-market-news-and-analysis-for-oct-30"
      },
      {
        "short": "Straits Live",
        "name": "Straits Live, « Strait of Hormuz News, October 29, 2026: Straits Daily Brief »",
        "url": "https://straits.live/briefs/2026-10-29"
      }
    ]
  },
  {
    "id": "2026-10-29-cuba-onu-embargo-vote",
    "date": "2026-10-29",
    "region": "Amériques",
    "theme": "geo",
    "geo": [
      {
        "name": "La Havane, Cuba",
        "label": "Cuba",
        "coords": [
          -82.37,
          23.13
        ]
      }
    ],
    "title": "L'ONU condamne encore l'embargo américain contre Cuba, mais Cuba perd 35 voix en un an",
    "summary": "Le 28 octobre, l'Assemblée générale a voté 130 voix contre l'embargo, 17 pour son maintien et 25 abstentions. L'an dernier, 165 pays avaient soutenu Cuba.",
    "points": [
      "Le 28 octobre, l'Assemblée générale de l'ONU a demandé la fin de l'embargo américain contre Cuba par 130 voix pour, 17 contre et 25 abstentions, pour la 34e année de suite [1][2][3].",
      "En 2025, le vote avait été de 165 voix pour, 7 contre et 12 abstentions : Cuba perd donc 35 voix de soutien en un an [1][2]. Les États-Unis, Israël, l'Ukraine, l'Argentine et les Émirats arabes unis font partie des 17 pays qui ont voté contre [1].",
      "La veille, le débat a été tendu : le ministre cubain des Affaires étrangères, Bruno Rodríguez, a interrompu l'ambassadeur américain Mike Waltz, et la séance a été brièvement suspendue [1]. Washington soutient que la crise cubaine vient de son propre gouvernement, pas de l'embargo [1]."
    ],
    "why": [
      "À retenir : le texte n'oblige personne, mais il mesure chaque année combien de pays acceptent encore de s'opposer publiquement à Washington [1][2].",
      "Cette fois, Washington met en avant la hausse des abstentions pour dire que sa pression pour isoler Cuba commence à payer [1]. La résolution cite aussi la loi américaine Helms-Burton de 1996 et demande un rapport au secrétaire général de l'ONU pour la prochaine session [1]."
    ],
    "forMe": "Le vote ne change rien tout de suite à ton quotidien : il montre surtout où en est le rapport de forces diplomatique autour de Cuba [1][2].",
    "figures": [
      {
        "value": "130 voix",
        "label": "pour la fin de l'embargo (contre 165 en 2025)",
        "src": 1
      },
      {
        "value": "17 contre",
        "label": "dont les États-Unis, Israël et l'Argentine",
        "src": 1
      },
      {
        "value": "34e année",
        "label": "de vote consécutif sur le sujet",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [
      "sanctions"
    ],
    "sources": [
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « UN votes to condemn embargo of Cuba despite US lobbying push » (28 octobre 2026)",
        "url": "https://www.aljazeera.com/news/2026/10/28/un-votes-to-condemn-embargo-of-cuba-despite-us-lobbying-push"
      },
      {
        "short": "UPI",
        "name": "UPI, « Cuba loses some previous support in U.N. vote on U.S. embargo » (28 octobre 2026)",
        "url": "https://www.upi.com/Top_News/World-News/2026/10/28/latam-cuba-united-nations-vote-us-embargo/1411793211989"
      },
      {
        "short": "ONU Info",
        "name": "ONU Info, « General Assembly weighs US embargo against Cuba ahead of 34th vote » (octobre 2026)",
        "url": "https://news.un.org/en/story/2026/10/1168686"
      }
    ]
  },
  {
    "id": "2026-10-29-colombie-amazonie-reserve-revoquee",
    "date": "2026-10-29",
    "region": "Amériques",
    "theme": "mix",
    "geo": [
      {
        "name": "Leticia, Amazonie colombienne",
        "label": "Colombie",
        "coords": [
          -69.94,
          -4.21
        ]
      }
    ],
    "title": "La Colombie retire à l'Amazonie sa protection contre les mines et le pétrole",
    "summary": "Le ministère de l'Environnement a révoqué la réserve créée en août, qui couvrait environ 42 % du pays. Les opposants y voient un feu vert aux industries extractives.",
    "points": [
      "Le ministère colombien de l'Environnement a révoqué la résolution 0961 de 2026, qui faisait de l'Amazonie une réserve « définitive » fermée aux nouvelles concessions minières et aux nouveaux contrats pétroliers [1][2].",
      "La zone concernée couvrait environ 483 283 km², soit à peu près 42 % du territoire continental du pays [1]. Le ministère explique que le texte a été pris sans finir la consultation préalable des communautés noires, afro-colombiennes, raizales et palenqueras [1].",
      "Révoquer ne veut pas dire que tout est autorisé : les projets doivent encore respecter les autres règles, comme la loi de 1959 sur les réserves forestières ou le système des parcs nationaux [1]. L'ancienne ministre Irene Vélez, qui défendait le texte, critique la décision et évoque un intérêt pour les terres rares, ce qui reste son accusation, pas un fait établi [2][3]."
    ],
    "why": [
      "À retenir : la protection de l'Amazonie colombienne tenait à un seul texte, signé à la fin du mandat de Gustavo Petro, et un nouveau gouvernement a pu le défaire en quelques semaines [1][3].",
      "Le ministre de l'Environnement, Fabio Arjona, défend un problème de procédure, tandis que ses opposants parlent de recul pour la forêt [3]. Le dossier va se jouer sur les règles qui restent en vigueur et sur d'éventuels recours en justice [1]."
    ],
    "forMe": "Rien ne change à court terme pour toi : la décision ouvre simplement la possibilité de nouveaux projets miniers et pétroliers dans une zone jusque-là fermée [1].",
    "figures": [
      {
        "value": "483 283 km²",
        "label": "de forêt amazonienne concernés par la réserve révoquée",
        "src": 1
      },
      {
        "value": "42 %",
        "label": "environ du territoire continental colombien",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "El Colombiano",
        "name": "El Colombiano, « MinAmbiente revocó resolución que declaraba la Amazonía libre de concesiones mineras » (octobre 2026)",
        "url": "https://www.elcolombiano.com/colombia/por-que-minambiente-revoca-resolucion-reserva-amazonia-DM42825565"
      },
      {
        "short": "Infobae",
        "name": "Infobae, « Gobierno revocó la resolución que protegía a la Amazonía » (28 octobre 2026)",
        "url": "https://www.infobae.com/colombia/2026/10/28/gobierno-de-abelardo-de-la-espriella-revoco-la-resolucion-que-protegia-a-la-amazonia-exministra-irene-velez-alerto-sobre-presunto-interes-en-la-apropiacion-de-tierras-raras/"
      },
      {
        "short": "Vanguardia",
        "name": "Vanguardia, « Gobierno revoca protección de la Amazonía y desata polémica » (27 octobre 2026)",
        "url": "https://www.vanguardia.com/colombia/2026/10/27/gobierno-revoca-proteccion-de-la-amazonia-y-desata-polemica-entre-arjona-e-irene-velez/"
      }
    ]
  },
  {
    "id": "2026-10-29-irak-syrie-visite-oleoduc-baniyas",
    "date": "2026-10-29",
    "region": "Moyen-Orient",
    "theme": "mix",
    "geo": [
      {
        "name": "Damas, Syrie",
        "label": "Syrie",
        "coords": [
          36.29,
          33.51
        ]
      },
      {
        "name": "Bagdad, Irak",
        "label": "Irak",
        "coords": [
          44.37,
          33.31
        ]
      }
    ],
    "title": "Un Premier ministre irakien à Damas pour la première fois depuis la chute d'Assad, avec le pétrole en tête de l'agenda",
    "summary": "Ali al-Zaidi a rencontré le président syrien Ahmed al-Sharaa le 28 octobre. Le bureau du Premier ministre irakien parle d'exporter du pétrole par l'oléoduc de Baniyas, jusqu'à 2 millions de barils par jour.",
    "points": [
      "Le 28 octobre, le Premier ministre irakien Ali al-Zaidi a été accueilli à l'aéroport de Damas par le président syrien Ahmed al-Sharaa [1][2]. Selon une source, c'est la première visite d'un chef de gouvernement irakien depuis la chute de Bachar al-Assad en décembre 2024 [2].",
      "Le bureau du Premier ministre irakien dit avoir parlé d'exporter du pétrole irakien par l'oléoduc de Baniyas, qui pourrait faire passer jusqu'à 2 millions de barils par jour, ainsi que de commerce, d'agriculture et de sécurité aux frontières [1].",
      "Aucun accord signé n'a été rapporté [1]. Les autorités du Kurdistan irakien ont, de leur côté, protesté contre des accords passés par Bagdad sans les consulter [4]."
    ],
    "why": [
      "À retenir : la guerre a perturbé les exportations de pétrole de l'Irak ; en juin, il avait déjà commencé à en envoyer un peu via la Syrie [3].",
      "Pour la Syrie, devenir le couloir de l'or noir irakien serait une façon de retrouver un rôle économique ; al-Sharaa a insisté sur l'importance de ce rôle de route commerciale pour l'Irak [1][2]."
    ],
    "forMe": "Une route de pétrole qui évite le Golfe peut aider à approvisionner le marché pendant que la guerre perturbe les exportations, mais celle-ci n'existe encore que sur le papier [1][3].",
    "figures": [
      {
        "value": "2 millions",
        "label": "de barils par jour : capacité citée pour l'oléoduc de Baniyas",
        "src": 1
      },
      {
        "value": "Décembre 2024",
        "label": "chute de Bachar al-Assad, avant cette première visite",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [
      "routes-maritimes"
    ],
    "sources": [
      {
        "short": "Kuwait Times",
        "name": "Kuwait Times, « Iraqi PM talks economy, energy on Syria visit » (28 octobre 2026)",
        "url": "https://kuwaittimes.com/article/52564/world/iraqi-pm-talks-economy-energy-on-syria-visit"
      },
      {
        "short": "Arab News",
        "name": "Arab News, « Syria and Iraq pledge stronger security cooperation as leaders meet in Damascus » (28 octobre 2026)",
        "url": "https://www.arabnews.com/middle-east/syria-and-iraq-pledge-stronger-security-cooperation-as-leaders-meet-in-damascus-3008663"
      },
      {
        "short": "Ahram Online",
        "name": "Ahram Online (AFP), « Iraqi FM makes first visit to Syria since Assad's fall » (juin 2026)",
        "url": "https://english.ahram.org.eg/News/571862.aspx"
      },
      {
        "short": "Syriac Press",
        "name": "Syriac Press, « Iraqi Prime Minister visits Damascus amid dispute with Erbil over Sinjar arrangements » (28 octobre 2026)",
        "url": "https://syriacpress.com/blog/2026/10/28/iraqi-prime-minister-visits-daramsuq-damascus-amid-dispute-with-arbailo-erbil-over-shigur-sinjar-arrangements/"
      }
    ]
  },
  {
    "id": "2026-10-29-azerbaidjan-turquie-voile-ecoles",
    "date": "2026-10-29",
    "region": "Europe",
    "theme": "geo",
    "geo": [
      {
        "name": "Bakou, Azerbaïdjan",
        "label": "Azerbaïdjan",
        "coords": [
          49.87,
          40.41
        ]
      }
    ],
    "title": "Le voile à l'école brouille Bakou et Ankara : Erdogan limoge un conseiller, l'Azerbaïdjan interdit l'entrée à 31 Turcs",
    "summary": "Une règle sur l'uniforme scolaire, appliquée depuis le 12 octobre, a déclenché des manifestations en Azerbaïdjan, puis une dispute ouverte avec la Turquie.",
    "points": [
      "Le 21 septembre, Bakou a adopté des règles d'uniforme qui interdisent aux élèves et aux enseignants des écoles publiques les vêtements contraires à la laïcité, sans citer le voile [1][2]. Depuis le 12 octobre environ, des élèves et des enseignantes voilées se voient refuser l'entrée des écoles [1].",
      "Le ministère de l'Intérieur dit avoir arrêté 37 personnes pour trouble à l'ordre public ; Amnesty évoque de son côté des arrestations de manifestants pacifiques [1][2][4].",
      "Oktay Saral, conseiller du président turc, a demandé sur X que l'Azerbaïdjan revienne sur cette « erreur » ; Recep Tayyip Erdogan l'a ensuite limogé [3]. Bakou a aussi interdit l'entrée du pays à 31 Turcs, des politiques et des personnalités qui avaient critiqué la règle, et Ilham Aliyev a averti qu'on ne devait pas « s'immiscer dans notre mode de vie » [3][5]."
    ],
    "why": [
      "À retenir : un sujet intérieur, l'école, a pris une dimension diplomatique entre Bakou et Ankara [3][5].",
      "Le parti au pouvoir à Bakou rejette toute ingérence et défend des règles fondées, selon lui, sur l'égalité et la laïcité [4]. Les ONG, elles, parlent d'atteinte au droit à l'éducation [4]."
    ],
    "forMe": "Rien ne change à ton quotidien, mais l'épisode montre qu'une simple règle scolaire peut suffire à froisser deux gouvernements voisins [3][5].",
    "figures": [
      {
        "value": "37",
        "label": "personnes arrêtées selon le ministère de l'Intérieur",
        "src": 1
      },
      {
        "value": "31",
        "label": "Turcs interdits d'entrée en Azerbaïdjan",
        "src": 3
      },
      {
        "value": "21 septembre",
        "label": "date des nouvelles règles d'uniforme",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « Tensions with teachers, pupils and Türkiye: Inside Azerbaijan's hijab row » (14 octobre 2026)",
        "url": "https://www.aljazeera.com/news/2026/10/14/tensions-with-teachers-pupils-and-turkiye-inside-azerbaijans-hijab-row"
      },
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « Azerbaijan's school hijab ban: what's behind it, and what's next? » (12 octobre 2026)",
        "url": "https://www.aljazeera.com/news/2026/10/12/azerbaijans-school-hijab-ban-whats-behind-it-and-whats-next"
      },
      {
        "short": "The New Arab",
        "name": "The New Arab, « Erdogan sacks senior adviser amid Turkey-Azerbaijan hijab row » (octobre 2026)",
        "url": "https://www.newarab.com/news/erdogan-sacks-senior-adviser-amid-turkey-azerbaijan-hijab-row"
      },
      {
        "short": "Amnesty",
        "name": "Amnesty International, « Azerbaijan: Stop denying access to education through discriminatory hijab restrictions and release peaceful protesters » (octobre 2026)",
        "url": "https://www.amnesty.org/en/latest/news/2026/10/azerbaijan-stop-denying-access-to-education-through-discriminatory-hijab-restrictions-and-release-peaceful-protesters/"
      },
      {
        "short": "Eurasia Review",
        "name": "Eurasia Review, « Baku's Hijab Ban Sparks Protests In Azerbaijan And Creates Problems With Turkey » (26 octobre 2026)",
        "url": "https://www.eurasiareview.com/26102026-bakus-hijab-ban-sparks-protests-in-azerbaijan-and-creates-problems-with-turkey-analysis/"
      }
    ]
  },
  {
    "id": "2026-10-29-gabon-reseaux-sociaux-rouverts",
    "date": "2026-10-29",
    "region": "Afrique",
    "theme": "mix",
    "geo": [
      {
        "name": "Libreville, Gabon",
        "label": "Gabon",
        "coords": [
          9.45,
          0.39
        ]
      }
    ],
    "title": "Le Gabon rouvre les réseaux sociaux après huit mois, mais il faudra montrer une pièce d'identité",
    "summary": "La suspension, imposée le 17 février, avait été critiquée par l'opposition, des jeunes et des entreprises. Beaucoup de Gabonais la contournaient avec des VPN.",
    "points": [
      "L'autorité de régulation de la communication (HAC) a annoncé samedi la levée de la suspension des réseaux sociaux, en place depuis le 17 février, officiellement parce que des contenus en ligne alimentaient les tensions [1][2].",
      "Elle explique sa décision par des discussions avec les grandes entreprises technologiques sur la modération des plateformes [2].",
      "La réouverture a une condition : les utilisateurs devront fournir une pièce d'identité officielle pour s'inscrire, ce qui met fin de fait à l'anonymat en ligne [2]. Pendant la coupure, beaucoup avaient utilisé des VPN, et l'opposition dénonçait un abus de pouvoir [2][3]."
    ],
    "why": [
      "À retenir : la coupure a duré huit mois et a été critiquée par des jeunes et des entreprises [3].",
      "Exiger une identité pour utiliser ces plateformes est une façon de réduire l'anonymat, ce qui inquiète les défenseurs des libertés [2]."
    ],
    "forMe": "Quand un pays coupe les réseaux, ses habitants et ses entreprises le ressentent vite : c'est un risque à connaître avant de travailler avec lui [3].",
    "figures": [
      {
        "value": "8 mois",
        "label": "de suspension des réseaux sociaux",
        "src": 1
      },
      {
        "value": "17 février",
        "label": "début de la suspension",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Anadolu",
        "name": "Agence Anadolu, « Gabon lifts ban on social media networks after 8 months » (octobre 2026)",
        "url": "https://www.aa.com.tr/en/world/gabon-lifts-ban-on-social-media-networks-after-8-months/4100419"
      },
      {
        "short": "Developing Telecoms",
        "name": "Developing Telecoms, « Gabon lifts social media ban after eight months » (octobre 2026)",
        "url": "https://www.developingtelecoms.com/telecom-business/telecom-regulation/21035-gabon-lifts-social-media-ban-after-eight-months.html"
      },
      {
        "short": "allAfrica",
        "name": "allAfrica, « All of Africa Today » (26 octobre 2026)",
        "url": "https://allafrica.com/stories/202610260104.html"
      }
    ]
  },
  {
    "id": "2026-10-29-nepal-fonds-pertes-dommages",
    "date": "2026-10-29",
    "region": "Asie",
    "theme": "mix",
    "geo": [
      {
        "name": "Katmandou, Népal",
        "label": "Népal",
        "coords": [
          85.32,
          27.71
        ]
      }
    ],
    "title": "Après les inondations, le fonds climat de l'ONU verse ses 20 premiers millions au Népal, pour 4,7 milliards de dollars de besoins",
    "summary": "C'est la première fois que le fonds « pertes et dommages » réserve de l'argent à un pays. Le Népal doit encore déposer un projet avant de toucher quoi que ce soit.",
    "points": [
      "Le 22 octobre, le conseil du Fonds de l'ONU pour les pertes et dommages liés au climat a réservé 20 millions de dollars au Népal, après les inondations meurtrières d'août [1][2].",
      "C'est le premier versement du fonds à un pays [2][3]. Le gouvernement népalais estime la reconstruction à environ 4,7 milliards de dollars, ce qui place ces 20 millions sous 1 % des besoins [1][2].",
      "L'argent n'est pas encore débloqué : le Népal doit d'abord déposer une proposition de projet [1]. Les inondations ont fait plus de 1 400 morts, selon les sources, avec des bilans qui varient autour de 1 500 [2]."
    ],
    "why": [
      "À retenir : c'est le premier test d'un fonds créé pour aider les pays touchés par des dégâts climatiques, et l'écart avec les besoins est énorme [2][3].",
      "Des militants et des experts jugent la somme très insuffisante et disent que les pays riches ont répondu froidement à la demande du Népal [2]."
    ],
    "forMe": "Ce débat sur qui paie les dégâts climatiques revient à chaque grand sommet sur le climat ; ici, l'aide couvre moins de 1 % des besoins estimés [1][2].",
    "figures": [
      {
        "value": "20 M$",
        "label": "réservés par le fonds de l'ONU",
        "src": 2
      },
      {
        "value": "4,7 Md$",
        "label": "de reconstruction estimés par le Népal",
        "src": 1
      },
      {
        "value": "< 1 %",
        "label": "des besoins couverts",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Kathmandu Post",
        "name": "The Kathmandu Post, « Loss and Damage Fund allocates $20 million to Nepal » (22 octobre 2026)",
        "url": "https://kathmandupost.com/national/2026/10/22/loss-and-damage-fund-allocates-20-million-to-nepal"
      },
      {
        "short": "AP",
        "name": "AP via News4Jax, « UN climate fund promises $20 million for Nepal flood recovery, far short of billions needed » (23 octobre 2026)",
        "url": "https://www.news4jax.com/news/world/2026/10/23/un-climate-fund-promises-20-million-for-nepal-flood-recovery-far-short-of-billions-needed/"
      },
      {
        "short": "SCMP",
        "name": "South China Morning Post, « Nepal set to receive first-ever US$20 million payout from UN climate damage fund » (octobre 2026)",
        "url": "https://scmp.com/news/asia/south-asia/article/3371840/nepal-set-receive-first-ever-us20-million-payout-un-climate-damage-fund"
      }
    ]
  },
  {
    "id": "2026-10-29-singapour-indonesie-brume-task-force",
    "date": "2026-10-29",
    "region": "Asie",
    "theme": "geo",
    "geo": [
      {
        "name": "Jakarta, Indonésie",
        "label": "Indonésie",
        "coords": [
          106.85,
          -6.21
        ]
      },
      {
        "name": "Singapour",
        "label": "Singapour",
        "coords": [
          103.82,
          1.35
        ]
      }
    ],
    "title": "Singapour et l'Indonésie vont suivre l'argent des entreprises derrière la brume toxique",
    "summary": "Les deux ministres des Affaires étrangères ont annoncé le 27 octobre une équipe commune pour poursuivre les sociétés liées aux feux de forêt.",
    "points": [
      "Le 27 octobre, à Jakarta, Singapour et l'Indonésie ont décidé de créer une équipe commune pour poursuivre les entreprises liées aux feux de forêt qui provoquent la brume toxique [1].",
      "Elle doit partager des informations, suivre les flux financiers, réunir des preuves de part et d'autre de la frontière et, quand c'est possible, récupérer des avoirs, a expliqué le ministre indonésien Arrmanatha Nasir [1].",
      "Singapour a déjà adressé des avis de prévention à 10 entreprises liées aux feux en Indonésie et demandé des informations à 10 sociétés basées chez elle ; son ministre Vivian Balakrishnan promet d'utiliser « chaque pouvoir légal » contre les responsables, y compris à Singapour [1]. Bloomberg y voit aussi un moyen de calmer les tensions, après une coupure inattendue de gaz [2]."
    ],
    "why": [
      "À retenir : au lieu d'accuser l'État voisin, les deux gouvernements visent les entreprises et leur argent, ce qui est plus difficile à ignorer [1].",
      "Cet épisode de brume est l'un des plus graves depuis plus de dix ans dans la région [1]."
    ],
    "forMe": "La brume ne s'arrête pas aux frontières : c'est pourquoi les deux pays veulent s'attaquer aux entreprises plutôt que de se renvoyer la faute [1].",
    "figures": [
      {
        "value": "10 + 10",
        "label": "entreprises visées ou interrogées par Singapour (en Indonésie et à Singapour)",
        "src": 1
      },
      {
        "value": "Plus de 10 ans",
        "label": "depuis un épisode de brume aussi grave dans la région",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "The Star",
        "name": "The Star, « Singapore, Indonesia to set up joint task force to hold firms accountable for forest fires » (28 octobre 2026)",
        "url": "https://www.thestar.com.my/aseanplus/aseanplus-news/2026/10/28/singapore-indonesia-to-set-up-joint-task-force-to-hold-firms-accountable-for-forest-fires"
      },
      {
        "short": "Bloomberg",
        "name": "Bloomberg, « Singapore, Indonesia Seek to Ease Tensions With Fires Taskforce » (27 octobre 2026)",
        "url": "https://www.bloomberg.com/news/articles/2026-10-27/singapore-s-top-envoy-visits-indonesia-after-natural-gas-cuts"
      }
    ]
  },
  {
    "id": "2026-10-29-afrique-pib-reevalue-guinee",
    "date": "2026-10-29",
    "region": "Afrique",
    "theme": "eco",
    "geo": [
      {
        "name": "Conakry, Guinée",
        "label": "Guinée",
        "coords": [
          -13.68,
          9.64
        ]
      }
    ],
    "title": "Le FMI relève la croissance de l'Afrique subsaharienne à 4,5 % ; l'Éthiopie et la Guinée parmi les plus rapides",
    "summary": "Dans ses perspectives d'octobre, le FMI relève de 0,2 point sa prévision pour la région, malgré le choc pétrolier de la guerre en Iran.",
    "points": [
      "Le FMI prévoit 4,5 % de croissance en Afrique subsaharienne en 2026, soit 0,2 point de plus que dans ses prévisions d'avril [1].",
      "L'Éthiopie, la Guinée et le Bénin font partie des économies qui progressent le plus vite, selon le rapport [1].",
      "En comparant les données du FMI d'avril et d'octobre, le quotidien nigérian BusinessDay calcule que le PIB estimé de l'ensemble des économies africaines a été relevé d'environ 99 milliards de dollars [2]."
    ],
    "why": [
      "À retenir : la hausse du pétrole aide les pays qui en exportent, mais le FMI avertit que les pays importateurs subissent plus de pression [2].",
      "Ces révisions changent la taille affichée des économies ; elles ne disent pas à elles seules si les habitants vivent mieux [2]."
    ],
    "forMe": "Une croissance de 4,5 % reste rapide comparée à l'Europe : l'Afrique subsaharienne est l'une des régions qui grandissent le plus vite [1].",
    "figures": [
      {
        "value": "4,5 %",
        "label": "croissance prévue en Afrique subsaharienne en 2026",
        "src": 1
      },
      {
        "value": "+0,2 point",
        "label": "par rapport aux prévisions d'avril",
        "src": 1
      },
      {
        "value": "≈ 99 Md$",
        "label": "de PIB africain estimé en plus entre avril et octobre, selon BusinessDay",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "The Africa Report",
        "name": "The Africa Report, « Ethiopia, Guinea, Benin: IMF report on African countries posting strongest economic growth » (octobre 2026)",
        "url": "https://www.theafricareport.com/433761/ethiopia-guinea-benin-imf-report-on-african-countries-posting-strongest-economic-growth/"
      },
      {
        "short": "BusinessDay",
        "name": "BusinessDay, « African economies see $99.4bn GDP upgrade amid renewed Iran war shocks » (octobre 2026)",
        "url": "https://businessday.ng/africa/article/african-economies-see-99-4bn-gdp-upgrade-amid-renewed-iran-war-shocks/"
      }
    ]
  },
  {
    "id": "2026-10-28-ouganda-quarantaine-retour-rdc",
    "date": "2026-10-28",
    "region": "Afrique",
    "theme": "geo",
    "geo": [
      {
        "name": "Kampala, Ouganda",
        "label": "Ouganda",
        "coords": [
          32.58,
          0.35
        ]
      }
    ],
    "title": "L'Ouganda impose 21 jours de quarantaine, payés par les voyageurs, à ceux qui reviennent de RD Congo",
    "summary": "Le ministère de la Santé a durci les règles le 25 octobre : les voyageurs passés par le Congo ne peuvent plus transiter par le pays. Deux malades passés par l'aéroport d'Entebbe ont été testés positifs au Kenya et au Nigeria.",
    "points": [
      "Le 25 octobre, le ministère ougandais de la Santé a annoncé que les citoyens qui reviennent de RD Congo doivent passer 21 jours en quarantaine, à leurs propres frais [1][2].",
      "Les voyageurs qui ont séjourné au Congo ne peuvent plus transiter par l'Ouganda, y compris sur des vols affrétés [1].",
      "L'Ouganda n'a enregistré aucun cas confirmé depuis qu'il a déclaré son épidémie terminée le 28 juillet, mais deux personnes passées par chez lui ont ensuite été testées positives, au Kenya et au Nigeria ; selon l'Africa CDC, les deux ont transité par l'aéroport d'Entebbe le 3 octobre [1][2]."
    ],
    "why": [
      "À retenir : un pays sans malade peut quand même fermer sa porte, parce que le virus voyage avec les passagers [1][2].",
      "L'épidémie en RD Congo a fait des milliers de morts, et l'Ouganda préfère payer le prix de la prudence (voyages ralentis, transit interdit) plutôt que de rouvrir un foyer chez lui [1]. Les enquêtes sur le cas détecté au Nigeria sont toujours en cours [1]."
    ],
    "forMe": "Si tu prépares un voyage en Afrique de l'Est, une escale par Entebbe peut être refusée ou compliquée pour qui a séjourné au Congo : vérifie les règles avant de partir [1].",
    "figures": [
      {
        "value": "21 jours",
        "label": "de quarantaine, aux frais du voyageur",
        "src": 1
      },
      {
        "value": "28 juillet",
        "label": "date où l'Ouganda a déclaré son épidémie terminée",
        "src": 1
      },
      {
        "value": "3 octobre",
        "label": "passage par l'aéroport d'Entebbe des deux malades testés ailleurs",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "AJC",
        "name": "The Atlanta Journal-Constitution, « Uganda tightens Ebola border controls and requires returnees from Congo to pay for quarantine » (octobre 2026)",
        "url": "https://www.ajc.com/news/2026/10/uganda-tightens-ebola-border-controls-and-requires-returnees-from-congo-to-pay-for-quarantine/"
      },
      {
        "short": "WHTC",
        "name": "WHTC, « Uganda imposes 21-day quarantine on citizens returning from Congo », dépêche d'Elias Biryabarema (25 octobre 2026)",
        "url": "https://whtc.com/2026/10/25/uganda-imposes-21-day-quarantine-on-citizens-returning-from-congo/"
      }
    ]
  },
  {
    "id": "2026-10-28-hongrie-bloque-moldavie-ukraine-ue",
    "date": "2026-10-28",
    "region": "Europe",
    "theme": "geo",
    "geo": [
      {
        "name": "Budapest, Hongrie",
        "label": "Hongrie",
        "coords": [
          19.04,
          47.5
        ]
      },
      {
        "name": "Chișinău, Moldavie",
        "label": "Moldavie",
        "coords": [
          28.86,
          47.01
        ]
      }
    ],
    "title": "La Hongrie bloque encore les deux dernières étapes de l'entrée de la Moldavie et de l'Ukraine dans l'UE",
    "summary": "Après avoir laissé passer deux chapitres de négociation le 13 octobre, Budapest a refusé le 20 octobre d'ouvrir les deux derniers, et son blocage a été réaffirmé le 27.",
    "points": [
      "Le 13 octobre, à Luxembourg, l'Union a débloqué deux nouveaux groupes de négociation pour l'Ukraine et la Moldavie [1].",
      "Le 20 octobre, la Hongrie a de nouveau refusé d'approuver l'ouverture des deux derniers « chapitres » sur six, sans explication donnée, selon la presse ukrainienne [1][2].",
      "Ce blocage a été réaffirmé le 27 octobre ; la Commission européenne doit présenter le 4 novembre ses feuilles de route d'élargissement pour l'Ukraine et la Moldavie [3]."
    ],
    "why": [
      "À retenir : l'adhésion à l'UE se joue chapitre par chapitre, et il suffit qu'un pays dise non pour qu'une étape soit bloquée [1][2].",
      "Début octobre, la presse bruxelloise écrivait que Budapest pourrait lever son blocage si Kyiv adoptait une loi sur les écoles des minorités, mais que le veto de principe sur l'adhésion elle-même restait posé [4]."
    ],
    "forMe": "Rien ne change tout de suite pour toi. Mais chaque chapitre ouvert rapproche deux pays du marché européen, et aucune date d'entrée n'est fixée dans les sources [1][3].",
    "figures": [
      {
        "value": "2 sur 6",
        "label": "chapitres encore bloqués par la Hongrie",
        "src": 2
      },
      {
        "value": "13 octobre",
        "label": "deux groupes de négociation débloqués à Luxembourg",
        "src": 1
      },
      {
        "value": "4 novembre",
        "label": "présentation des feuilles de route par la Commission",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "European Interest",
        "name": "European Interest, « Hungary again blocks Ukraine and Moldova's EU path, angering other EU member states » (octobre 2026)",
        "url": "https://www.europeaninterest.eu/hungary-again-blocks-ukraine-and-moldovas-eu-path-angering-other-eu-member-states/"
      },
      {
        "short": "Kyiv Independent",
        "name": "Kyiv Independent, « Hungary blocks final 2 of 6 membership to-do lists for Ukraine and Moldova, no explanation given » (octobre 2026)",
        "url": "https://kyivindependent.com/hungary-blocks-final-2-of-6-membership-to-do-lists-for-ukraine-and-moldova-no-explanation-given/"
      },
      {
        "short": "112.ua",
        "name": "112.ua, « EU Commission to unveil enlargement roadmaps for Ukraine and Moldova on November 4 » (27 octobre 2026)",
        "url": "https://112.ua/en/evrokomisia-predstavit-dorozni-karti-dla-ukraini-ta-moldovi-v-mezah-rozsirenna-es-4-listopada-194180"
      },
      {
        "short": "Brussels Signal",
        "name": "Brussels Signal, « Hungary set to lift block on next stage of Ukraine and Moldova EU talks » (octobre 2026)",
        "url": "https://brusselssignal.eu/2026/10/hungary-set-to-lift-block-on-next-stage-of-ukraine-and-moldova-eu-talks/"
      }
    ]
  },
  {
    "id": "2026-10-28-fmi-moyen-orient-recul-oman",
    "date": "2026-10-28",
    "region": "Moyen-Orient",
    "theme": "eco",
    "geo": [
      {
        "name": "Mascate, Oman",
        "label": "Oman",
        "coords": [
          58.41,
          23.59
        ]
      }
    ],
    "title": "La guerre fait reculer l'économie du Moyen-Orient de 1,3 % en 2026 : dans le Golfe, seul Oman y échappe",
    "summary": "Dans ses prévisions d'octobre, le FMI voit la région Moyen-Orient, Afrique du Nord et Pakistan se contracter cette année, avant un rebond en 2027.",
    "points": [
      "Le FMI prévoit que l'économie de la région Moyen-Orient, Afrique du Nord et Pakistan reculera de 1,3 % en 2026, après une croissance de 3,3 % en 2025, puis rebondira de 6,6 % en 2027 [1][2].",
      "Il attribue ce recul aux effets de la guerre sur la production d'énergie, le transport maritime, le tourisme, le commerce et la confiance [2][3].",
      "Les économies du Golfe (CCG) devraient toutes se contracter en 2026, sauf Oman ; d'après la dépêche reprise par Polity, les pays exportateurs de pétrole sont plus touchés que les importateurs [1][3]."
    ],
    "why": [
      "À retenir : la région qui vend l'énergie du monde est celle qui recule, parce que la guerre touche justement l'énergie, les bateaux et les touristes [2][3].",
      "Le FMI prévient que la poursuite de la guerre, ou de nouvelles coupures de production, de routes maritimes ou d'infrastructures, pourraient encore aggraver ce tableau [2]."
    ],
    "forMe": "Quand la région du pétrole et du gaz souffre, l'énergie reste chère et fragile, ce qui peut peser sur ton budget carburant et chauffage [1][2].",
    "figures": [
      {
        "value": "−1,3 %",
        "label": "croissance prévue en 2026 (Moyen-Orient, Afrique du Nord, Pakistan)",
        "src": 1
      },
      {
        "value": "+3,3 %",
        "label": "croissance de 2025",
        "src": 2
      },
      {
        "value": "+6,6 %",
        "label": "rebond prévu en 2027",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Polity",
        "name": "Polity, « IMF sees 1.3% contraction in Middle East, North Africa and Pakistan in 2026 » (22 octobre 2026)",
        "url": "https://www.polity.org.za/article/imf-sees-13-contraction-in-middle-east-north-africa-and-pakistan-in-2026-2026-10-22"
      },
      {
        "short": "Devdiscourse",
        "name": "Devdiscourse, « Middle East, North Africa and Pakistan GDP to contract 1.3% in 2026, IMF says » (octobre 2026)",
        "url": "https://www.devdiscourse.com/article/international/3996345-middle-east-north-africa-and-pakistan-gdp-to-contract-13-in-2026-imf-says"
      },
      {
        "short": "Gulf Times",
        "name": "Gulf Times, « Middle East, North Africa and Pakistan GDP to contract 1.3% in 2026: IMF » (octobre 2026)",
        "url": "https://www.gulf-times.com/article/736657/business/middle-east-north-africa-and-pakistan-gdp-to-contract-13-in-2026-imf"
      }
    ]
  },
  {
    "id": "2026-10-28-philippines-ministres-defense-cebu",
    "date": "2026-10-28",
    "region": "Asie",
    "theme": "geo",
    "geo": [
      {
        "name": "Cebu, Philippines",
        "label": "Philippines",
        "coords": [
          123.89,
          10.32
        ]
      }
    ],
    "title": "Aux Philippines, l'Inde et le Japon envoient leurs ministres de la Défense à une grande réunion régionale",
    "summary": "Les 28 et 29 octobre, Cebu accueille la réunion des ministres de la Défense de l'ASEAN et de leurs partenaires, présidée cette année par Manille.",
    "points": [
      "La 13e réunion des ministres de la Défense de l'ASEAN et de leurs partenaires (ADMM-Plus) se tient les 28 et 29 octobre à Cebu ; les Philippines la président en 2026 [1][2].",
      "Le ministre indien de la Défense, Rajnath Singh, est parti pour Cebu afin d'« explorer de nouvelles pistes pour renforcer les partenariats stratégiques » [1][3].",
      "Le ministre japonais de la Défense, Shinjiro Koizumi, est attendu dès le 28 octobre, avec des entretiens bilatéraux prévus avec ses homologues américain, philippin et sud-coréen [4]."
    ],
    "why": [
      "À retenir : ces rencontres servent surtout à se parler et à nouer des partenariats de défense avant qu'une crise n'éclate [1][3].",
      "Le fait que l'Inde et le Japon fassent le déplacement montre qu'ils veulent compter dans la sécurité de l'Asie du Sud-Est, une région par où passent de nombreux navires de commerce [1][4]."
    ],
    "forMe": "La sécurité des mers d'Asie touche indirectement tes achats (électronique, vêtements), qui voyagent en grande partie par bateau : c'est pourquoi ces réunions comptent, même quand rien n'est signé.",
    "figures": [
      {
        "value": "13e",
        "label": "édition de la réunion ADMM-Plus",
        "src": 2
      },
      {
        "value": "28–29 octobre",
        "label": "dates de la réunion à Cebu",
        "src": 2
      },
      {
        "value": "3",
        "label": "entretiens bilatéraux prévus pour le ministre japonais",
        "src": 4
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "IANS",
        "name": "IANS, « Rajnath Singh arrives in Philippines for Asean Defence Ministers' meeting » (27 octobre 2026)",
        "url": "https://ianslive.in/rajnath-singh-arrives-in-philippines-for-asean-defence-ministes-meeting--20261027210805"
      },
      {
        "short": "The Hans India",
        "name": "The Hans India, « Rajnath Singh leaves for Philippines to attend 13th ASEAN Defence Ministers' Meeting Plus » (octobre 2026)",
        "url": "https://www.thehansindia.com/news/national/rajnath-singh-leaves-for-philippines-to-attend-13th-asean-defence-ministers-meeting-plus-1136263"
      },
      {
        "short": "The Tribune",
        "name": "The Tribune, « Explore new avenues to strengthen strategic partnerships: Rajnath Singh leaves for ASEAN Defence Ministers' Meeting-Plus in Philippines » (octobre 2026)",
        "url": "https://www.tribuneindia.com/news/admm-plus/explore-new-avenues-to-strengthen-strategic-partnerships-rajnath-singh-leaves-for-asean-defence-ministers-meeting-plus-in-philippines"
      },
      {
        "short": "Rio Times",
        "name": "The Rio Times, « Asia Intelligence Brief for Tuesday, October 27, 2026 »",
        "url": "https://www.riotimesonline.com/asia-intelligence-brief-tuesday-october-27-2026/"
      }
    ]
  },
  {
    "id": "2026-10-28-iran-poutine-moscou-sommet-gaz",
    "date": "2026-10-28",
    "region": "Moyen-Orient",
    "theme": "geo",
    "geo": [
      {
        "name": "Moscou, Russie",
        "label": "Russie",
        "coords": [
          37.62,
          55.75
        ]
      },
      {
        "name": "Téhéran, Iran",
        "label": "Iran",
        "coords": [
          51.39,
          35.69
        ]
      }
    ],
    "title": "Le président iranien à Moscou pour un sommet des pays exportateurs de gaz et un tête-à-tête avec Poutine",
    "summary": "Masoud Pezeshkian devait rencontrer Vladimir Poutine le 27 octobre, en marge du sommet du Forum des pays exportateurs de gaz. À l'heure d'écrire, aucun compte rendu n'était disponible.",
    "points": [
      "Le président iranien Masoud Pezeshkian devait participer le 27 octobre à Moscou au 8e sommet du Forum des pays exportateurs de gaz (GECF), consacré aux marchés du gaz et à la coopération entre exportateurs [1][2].",
      "Selon le ministre iranien des Affaires étrangères Abbas Araghchi, il devait y rencontrer Vladimir Poutine ; coopération économique et questions « géopolitiques » étaient au programme [2][3].",
      "Les deux hommes s'étaient déjà vus à Bichkek début septembre : Pezeshkian avait alors remercié Poutine pour la position de la Russie pendant la guerre contre les États-Unis [4]."
    ],
    "why": [
      "À retenir : deux grands producteurs d'énergie se parlent au moment où la guerre perturbe le gaz et le pétrole du Golfe [2][4].",
      "À l'heure d'écrire, aucun compte rendu de la rencontre n'était disponible : c'est une actu à suivre, et on ne sait pas encore si elle débouchera sur un accord."
    ],
    "forMe": "Les prix de l'énergie que tu paies dépendent en partie de ces producteurs : à suivre si cette rencontre débouche sur quelque chose de concret.",
    "figures": [
      {
        "value": "8e",
        "label": "sommet du Forum des pays exportateurs de gaz",
        "src": 2
      },
      {
        "value": "27 octobre",
        "label": "date du sommet et de la rencontre prévue avec Poutine",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "UNI",
        "name": "UNI, « Energy: Iran, Putin meet on Oct 27 » (24 octobre 2026)",
        "url": "https://www.uniindia.com/world/energy-iran-putin-meet-on-oct-27/224024"
      },
      {
        "short": "Tasnim",
        "name": "Tasnim, « Pezeshkian to Visit Russia for Gas Exporters' Summit » (24 octobre 2026)",
        "url": "https://www.tasnimnews.ir/en/news/2026/10/24/3730538/pezeshkian-to-visit-russia-for-gas-exporters-summit"
      },
      {
        "short": "Connaissance des énergies (AFP)",
        "name": "Connaissance des énergies (AFP), « Le président iranien rencontrera Poutine mardi à Moscou » (24 octobre 2026)",
        "url": "https://www.connaissancedesenergies.org/afp/le-president-iranien-rencontrera-poutine-mardi-a-moscou-media-261024"
      },
      {
        "short": "Ahram",
        "name": "Ahram Online, « Iran president thanks Putin for Russia's stance during war with US » (septembre 2026)",
        "url": "https://english.ahram.org.eg/News/575714.aspx"
      }
    ]
  },
  {
    "id": "2026-10-28-nigeria-aide-transport-syndicats",
    "date": "2026-10-28",
    "region": "Afrique",
    "theme": "eco",
    "geo": [
      {
        "name": "Abuja, Nigeria",
        "label": "Nigeria",
        "coords": [
          7.49,
          9.06
        ]
      }
    ],
    "title": "Au Nigeria, l'État évite le bras de fer avec les syndicats : 70 000 nairas d'aide au transport pendant six mois",
    "summary": "Le gouvernement et la centrale syndicale NLC ont trouvé un accord le 27 octobre, mais pas sur la date d'un nouveau salaire minimum.",
    "points": [
      "Le 27 octobre, lors d'une réunion de conciliation au ministère du Travail, le gouvernement fédéral a approuvé une aide au transport de 70 000 nairas pour les salariés de tous niveaux, pendant six mois à partir de novembre 2026 [1].",
      "Le paiement d'arriérés de primes, à effet du 1er mai 2026, est aussi approuvé, par versements à partir de novembre ; un accord porte aussi sur 19 mois d'arriérés pour les agents de santé [1][2].",
      "Les deux parties ne se sont pas entendues sur la date d'entrée en vigueur d'un nouveau salaire minimum [1]. Le 9 octobre, le syndicat avait donné deux semaines au gouvernement pour baisser le prix de l'essence et rouvrir la négociation sur le salaire minimum [3]."
    ],
    "why": [
      "À retenir : le gouvernement répond à la colère sur le coût de la vie par une aide temporaire plutôt que par une hausse durable du salaire minimum [1][3].",
      "Le syndicat estime que l'inflation et le prix des transports ont rogné la valeur du salaire minimum actuel de 70 000 nairas ; un haut responsable du ministère du Travail a dit qu'un nouveau salaire minimum était en discussion, sans date de négociation fixée [3]."
    ],
    "forMe": "C'est le même mécanisme que chez nous quand le carburant monte : les salariés qui payent leur trajet voient leur pouvoir d'achat fondre, et l'État choisit entre aider ou augmenter les salaires.",
    "figures": [
      {
        "value": "70 000 nairas",
        "label": "aide au transport pour les salariés",
        "src": 1
      },
      {
        "value": "6 mois",
        "label": "durée de l'aide, à partir de novembre 2026",
        "src": 1
      },
      {
        "value": "19 mois",
        "label": "d'arriérés des agents de santé couverts par l'accord",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [
      "inflation-taux"
    ],
    "sources": [
      {
        "short": "Channels TV",
        "name": "Channels Television, « FG Approves Six-Month ₦70,000 Transport Support For Workers » (27 octobre 2026)",
        "url": "https://www.channelstv.com/2026/10/27/fg-approves-six-month-%e2%82%a670000-transport-support-for-workers/"
      },
      {
        "short": "allAfrica",
        "name": "allAfrica, « Nigeria: Govt, NLC Reach Deal On N70,000 Transport Allowance, 19-Month Health Workers' Arrears » (28 octobre 2026)",
        "url": "https://allafrica.com/stories/202610280135.html"
      },
      {
        "short": "Nairametrics",
        "name": "Nairametrics, « NLC gives FG two-week ultimatum to reduce petrol prices, renegotiate minimum wage » (9 octobre 2026)",
        "url": "https://nairametrics.com/2026/10/09/nlc-gives-fg-two-week-ultimatum-to-reduce-petrol-prices-renegotiate-minimum-wage/"
      }
    ]
  },
  {
    "id": "2026-10-28-perou-or-illegal-tambopata",
    "date": "2026-10-28",
    "region": "Amériques",
    "theme": "eco",
    "geo": [
      {
        "name": "Réserve de Tambopata, Madre de Dios, Pérou",
        "label": "Pérou",
        "coords": [
          -69.19,
          -12.59
        ]
      }
    ],
    "title": "Au Pérou, les autorités détruisent des dizaines de camps d'or illégal en Amazonie, mais les mineurs reviennent",
    "summary": "Plus de 30 camps d'orpaillage illégal près de la réserve de Tambopata ont été détruits, selon la presse économique latino-américaine.",
    "points": [
      "Les autorités péruviennes ont détruit plus de 30 camps d'orpaillage illégal près de la réserve nationale de Tambopata, dans l'Amazonie [1].",
      "En août, une opération conduite par le parquet, avec l'appui de l'ONG américaine Global Conservation, avait déjà détruit pour près de 1,7 million de dollars de matériel de mine dans la réserve [2].",
      "Un procureur cité par la presse reconnaît que « l'exploitation minière est en train de gagner » : les mineurs reviennent en quelques jours après chaque raid [2]."
    ],
    "why": [
      "À retenir : détruire des camps ne suffit pas tant que l'or illégal rapporte beaucoup plus que ce que coûte la prise de risque [1][2].",
      "Selon un rapport cité par la presse, les exportations d'or illégal du Pérou auraient atteint environ 11,5 milliards de dollars en 2025, et les changements fréquents de président ont empêché une stratégie suivie contre ce trafic [2]."
    ],
    "forMe": "L'or que tu retrouves dans les bijoux ou les placements vient en partie de mines dont l'origine est difficile à contrôler : c'est pourquoi la traçabilité de l'or devient un enjeu.",
    "figures": [
      {
        "value": "30+",
        "label": "camps d'or illégal détruits près de Tambopata",
        "src": 1
      },
      {
        "value": "≈ 1,7 M$",
        "label": "de matériel détruit lors de l'opération d'août",
        "src": 2
      },
      {
        "value": "≈ 11,5 Md$",
        "label": "d'exportations d'or illégal estimées en 2025",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Rio Times",
        "name": "The Rio Times, « Peru Destroys Over 30 Illegal Gold Camps » (octobre 2026)",
        "url": "https://riotimesonline.com/peru-tambopata-illegal-gold-camps-destroyed"
      },
      {
        "short": "Mining Reporters",
        "name": "Mining Reporters, « Peru illegal gold mining Tambopata reserve military raids » (août 2026)",
        "url": "https://www.miningreporters.com/noticia/news/2026/08/peru-illegal-gold-mining-tambopata-reserve-military-raids"
      }
    ]
  },
  {
    "id": "2026-10-27-serbie-liste-etudiants-vucic-defaite",
    "date": "2026-10-27",
    "region": "Europe",
    "theme": "geo",
    "geo": [
      {
        "name": "Belgrade, Serbie",
        "label": "Serbie",
        "coords": [
          20.46,
          44.82
        ]
      }
    ],
    "title": "En Serbie, le mouvement étudiant bat Vučić aux législatives, après quatorze ans de pouvoir",
    "summary": "La Liste des étudiants a gagné les législatives anticipées du 25 octobre et Aleksandar Vučić a reconnu sa défaite. Elle devrait avoir seule la majorité au Parlement.",
    "points": [
      "Le 25 octobre, la Liste des étudiants a remporté les législatives anticipées en Serbie et Aleksandar Vučić, au pouvoir depuis quatorze ans, a reconnu sa défaite : « La Liste des étudiants a gagné » [1][2].",
      "Selon des résultats encore provisoires de la Commission électorale (8 077 bureaux sur 8 392 dépouillés), la Liste des étudiants a obtenu 52,54 % des voix, contre 39,29 % pour la liste de Vučić ; Euronews donne un écart un peu différent pour le second [1][2]. Vučić lui-même estime que les étudiants auront entre 135 et 140 sièges sur 250, et son camp environ 105 [2].",
      "Le mouvement est né de près de deux ans de manifestations menées par des jeunes, après la mort de 16 personnes dans l'effondrement de l'auvent de la gare de Novi Sad en 2024. Vučić a dénoncé les médias indépendants et des ingérences étrangères ; aucun nom de Premier ministre n'a encore été avancé par les étudiants [2][3]."
    ],
    "why": [
      "À retenir : une liste portée par des étudiants, dont aucun n'était candidat, vient de priver de sa majorité un dirigeant qui tenait la Serbie depuis quatorze ans [1][2].",
      "Le plus dur commence : le nouveau pouvoir doit former un gouvernement, choisir un Premier ministre et dire ce qu'il fera du budget et des grands contrats. Les sources consultées ne détaillent pas encore son programme économique, et les résultats ne sont pas définitifs [2]."
    ],
    "forMe": "La Serbie est un pays européen, voisin de plusieurs pays de l'Union. Ce que fera le nouveau gouvernement (budget, relations avec Bruxelles et avec Moscou) pèsera sur la stabilité des Balkans et sur les entreprises qui y investissent.",
    "figures": [
      {
        "value": "52,54 %",
        "label": "des voix pour la Liste des étudiants (résultats provisoires)",
        "src": 2
      },
      {
        "value": "135 à 140",
        "label": "sièges sur 250 estimés pour les étudiants par Vučić lui-même",
        "src": 2
      },
      {
        "value": "16",
        "label": "morts à Novi Sad en 2024, point de départ du mouvement",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Euronews",
        "name": "Euronews, « Student List wins Serbian election in political earthquake as Vučić concedes defeat » (25 octobre 2026)",
        "url": "https://www.euronews.com/2026/10/25/vucic-concedes-defeat-in-pivotal-serbian-elections-says-student-movement-has-won"
      },
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « Serbia after Vucic: Who will be PM and when will a government be formed? » (26 octobre 2026)",
        "url": "https://www.aljazeera.com/news/2026/10/26/serbia-after-vucic-who-will-be-pm-and-when-will-a-government-be-formed"
      },
      {
        "short": "NPR",
        "name": "NPR, « 'The smell of freedom': Serbia's student movement celebrates election triumph » (26 octobre 2026)",
        "url": "https://www.npr.org/2026/10/26/nx-s1-6016298/serbia-student-list-vucic-election"
      }
    ]
  },
  {
    "id": "2026-10-27-bresil-lula-reelu-bourse-s-effondre",
    "date": "2026-10-27",
    "region": "Amériques",
    "theme": "mix",
    "geo": [
      {
        "name": "Brasília, Brésil",
        "label": "Brésil",
        "coords": [
          -47.88,
          -15.79
        ]
      }
    ],
    "title": "Lula réélu pour un quatrième mandat : la Bourse du Brésil s'effondre de près de 14 % en une séance",
    "summary": "Les marchés avaient parié sur la victoire de Flávio Bolsonaro. Lula l'a emporté d'environ 4,4 millions de voix, et la Bourse et la monnaie ont chuté lundi.",
    "points": [
      "Le 25 octobre, Lula a gagné le second tour avec 51,79 % des voix contre 48,21 % pour Flávio Bolsonaro, soit environ 4,4 millions de voix d'avance. Son adversaire refuse de reconnaître le résultat et veut demander son annulation à la justice [1].",
      "Lundi 26 octobre, l'indice Ibovespa, la Bourse de São Paulo, a perdu jusqu'à 17 % en séance avant de clôturer en baisse de 13,9 %, tandis que le real, la monnaie brésilienne, plongeait face au dollar [2][3]. Les sources divergent sur l'ampleur exacte de la chute du real.",
      "Selon Bloomberg, les investisseurs s'étaient massivement placés sur une victoire de Bolsonaro ; ils craignent aussi des dépenses publiques en hausse, alors que le déficit approche 10 % du PIB après les dépenses d'avant-élection [2][4]."
    ],
    "why": [
      "À retenir : ce n'est pas seulement l'élection qui a fait chuter la Bourse, c'est la surprise : le marché avait parié sur l'autre camp [2][4].",
      "Quand une monnaie baisse, les produits importés (carburant, engrais, blé) coûtent plus cher en reais, et les dettes en dollars deviennent plus lourdes. À l'inverse, les exportateurs de soja, de viande ou de minerai y gagnent. Reste à voir si la contestation de Flávio Bolsonaro devant les tribunaux, jugée peu probable d'aboutir vu l'écart, prolonge les turbulences [1]."
    ],
    "forMe": "Le Brésil est un grand fournisseur de soja, de café et de viande. Une monnaie qui chute rend ses produits moins chers à acheter pour l'étranger, et les grands fonds qui ont des actions brésiliennes, y compris dans des placements européens, ont pu perdre de la valeur.",
    "figures": [
      {
        "value": "51,79 %",
        "label": "des voix pour Lula, contre 48,21 % pour Flávio Bolsonaro",
        "src": 1
      },
      {
        "value": "−13,9 %",
        "label": "clôture de l'Ibovespa lundi 26 octobre (jusqu'à −17 % en séance)",
        "src": 3
      },
      {
        "value": "≈ 10 %",
        "label": "du PIB : le déficit public, selon Americas Quarterly",
        "src": 4
      }
    ],
    "culture": [],
    "dossiers": [
      "dollar"
    ],
    "sources": [
      {
        "short": "CBS News",
        "name": "CBS News, « Lula wins 4th term as Brazil's president, beating Flávio Bolsonaro in runoff, but Bolsonaro rejects results » (26 octobre 2026)",
        "url": "https://www.cbsnews.com/news/brazil-presidential-runoff-lula-flavio-bolsonaro/"
      },
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « Brazil's real sinks after Lula's re-election victory » (26 octobre 2026)",
        "url": "https://www.aljazeera.com/economy/2026/10/26/brazils-real-sinks-after-lulas-re-election-victory"
      },
      {
        "short": "The Rio Times",
        "name": "The Rio Times, « Latin American Pulse for Monday, October 26, 2026 »",
        "url": "https://www.riotimesonline.com/latin-american-pulse-for-monday-october-26-2026/"
      },
      {
        "short": "Americas Quarterly",
        "name": "Americas Quarterly, « REACTION: Lula Wins Brazil's Presidency in Historic Comeback » (octobre 2026)",
        "url": "https://americasquarterly.org/article/reaction-lula-wins-brazils-presidency-in-historic-comeback/"
      }
    ]
  },
  {
    "id": "2026-10-27-cisjordanie-hebron-familles-deplacees",
    "date": "2026-10-27",
    "region": "Moyen-Orient",
    "theme": "geo",
    "geo": [
      {
        "name": "Hébron, Cisjordanie",
        "label": "Cisjordanie",
        "coords": [
          35.1,
          31.53
        ]
      }
    ],
    "title": "À Hébron, l'armée israélienne déplace des centaines de familles après la mort de deux soldats, à la veille des élections",
    "summary": "Après l'attaque d'un point de contrôle le 23 octobre, l'armée a bouclé la ville et fait partir des familles d'un quartier ; les chiffres vont de 150 familles à 2 000 personnes. Israël vote le 27.",
    "points": [
      "Le 23 octobre, deux soldats israéliens ont été tués à un point de contrôle près d'Hébron, en Cisjordanie ; l'armée a lancé une grande opération dans la ville, d'environ 200 000 habitants [1][2][3].",
      "Le ministre de la Défense Israël Katz parle d'environ 2 000 personnes déplacées samedi soir ; la mairie compte 370 familles, le gouverneur environ 150 et le maire environ 250 [1][2]. Le gouverneur Khaled Dudin dénonce une punition collective et l'état d'urgence a été déclaré dans la province [2].",
      "Des bâtiments proches du lieu de l'attaque ont été démolis, et Benyamin Netanyahou a annoncé que d'autres le seraient. L'opération se déroule à quelques jours d'élections très disputées, que le maire d'Hébron qualifie de manœuvre politique [3]."
    ],
    "why": [
      "À retenir : les chiffres de déplacés varient du simple au décuple selon qui les donne, signe d'une situation encore floue sur le terrain [1][2].",
      "Israël vote le 27 octobre, et les derniers sondages donnent un blocage : ni le camp de Netanyahou ni l'opposition n'atteindraient les 61 sièges de majorité, ce qui rend les petits partis décisifs [4]. Le coût économique d'un conflit qui dure est l'un des grands thèmes de la campagne [4]."
    ],
    "forMe": "Les violences en Cisjordanie et la campagne israélienne entretiennent l'incertitude dans toute la région, et donc le prix du pétrole et des assurances de transport. Le résultat du vote déterminera la suite de la guerre à Gaza et les relations avec l'Iran.",
    "figures": [
      {
        "value": "2",
        "label": "soldats israéliens tués le 23 octobre près d'Hébron",
        "src": 1
      },
      {
        "value": "≈ 2 000",
        "label": "personnes déplacées selon le ministre Katz (150 à 370 familles selon les autres sources)",
        "src": 1
      },
      {
        "value": "61",
        "label": "sièges nécessaires pour une majorité à la Knesset ; aucun camp n'y est en vue dans les sondages",
        "src": 4
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Times of Israel",
        "name": "The Times of Israel, « IDF op in Hebron after soldiers' killing displaces 2,000, Katz says; PM vows 'big surprise' for PA » (octobre 2026)",
        "url": "https://www.timesofisrael.com/idf-op-in-hebron-after-soldiers-killing-said-to-displace-1500-pm-vows-big-surprise-for-pa/"
      },
      {
        "short": "Euronews",
        "name": "Euronews, « Israel removes around 250 Palestinian families from West Bank city of Hebron after soldier deaths » (24 octobre 2026)",
        "url": "https://www.euronews.com/2026/10/24/israel-removes-around-250-palestinian-families-from-west-bank-city-of-hebron-after-soldier"
      },
      {
        "short": "The New Arab",
        "name": "The New Arab, « Israeli forces displace Palestinian families after troops killed » (octobre 2026)",
        "url": "https://www.newarab.com/news/israeli-forces-displace-palestinian-families-after-troops-killed"
      },
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « Israeli elections: What are the possible outcomes? » (25 octobre 2026)",
        "url": "https://www.aljazeera.com/news/2026/10/25/israeli-elections-what-are-the-possible-outcomes"
      }
    ]
  },
  {
    "id": "2026-10-27-niger-penurie-carburant-export-interdit",
    "date": "2026-10-27",
    "region": "Afrique",
    "theme": "eco",
    "geo": [
      {
        "name": "Niamey, Niger",
        "label": "Niger",
        "coords": [
          2.11,
          13.51
        ]
      }
    ],
    "title": "Le Niger produit du pétrole mais manque d'essence : Niamey interdit d'en exporter",
    "summary": "Des files d'attente sont apparues dans les stations de la capitale. Un arrêté du 12 octobre interdit d'exporter le diesel et l'essence, sauf autorisation.",
    "points": [
      "Le ministre du Commerce a signé le 12 octobre un arrêté qui interdit l'exportation de diesel et d'essence « premium » ; seules les sociétés publiques SONIDEP et SORAZ peuvent vendre un surplus à l'étranger, avec l'accord du ministre pour chaque cargaison [1][2].",
      "Le 18 octobre, de longues files se sont formées dans les stations de Niamey ; le carburant nigérian de contrebande, moins cher, a presque disparu [3].",
      "Le pays extrait environ 90 000 barils de brut par jour à Agadem, mais sa raffinerie de Zinder n'en traite qu'environ 20 000, trop peu pour la demande nationale ; des dettes croisées entre l'État, les sociétés pétrolières et l'électricien Nigelec compliquent la situation [2][3]."
    ],
    "why": [
      "À retenir : un pays qui a du pétrole peut manquer d'essence s'il n'a pas assez de raffineries pour le transformer [2].",
      "Interdire l'export garde le carburant dans le pays mais n'en crée pas : le problème de fond est le manque de capacité de raffinage et les dettes. Un manque de carburant peut aussi gêner les transports, les mines et l'électricité, et la presse économique le lie aux perturbations venues du conflit avec l'Iran [1][3]."
    ],
    "forMe": "Le Niger est aussi un pays d'uranium. Un pays à court de carburant a du mal à faire rouler ses camions et ses mines, ce qui peut retarder certaines livraisons de minerais [3].",
    "figures": [
      {
        "value": "≈ 90 000",
        "label": "barils de brut extraits par jour à Agadem",
        "src": 2
      },
      {
        "value": "≈ 20 000",
        "label": "barils par jour traités par la raffinerie de Zinder",
        "src": 2
      },
      {
        "value": "12 octobre",
        "label": "date de l'arrêté interdisant l'export de diesel et d'essence",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Nairametrics",
        "name": "Nairametrics, « Niger bans petrol, diesel exports to prioritise domestic fuel supply » (18 octobre 2026)",
        "url": "https://nairametrics.com/2026/10/18/niger-bans-petrol-diesel-exports-to-prioritise-domestic-fuel-supply/"
      },
      {
        "short": "Ecofin Agency",
        "name": "Ecofin Agency, « Niger Restricts Fuel Exports to Ease Domestic Gasoline and Diesel Shortages » (octobre 2026)",
        "url": "https://www.ecofinagency.com/news-industry/1910-59903-niger-restricts-fuel-exports-to-ease-domestic-gasoline-and-diesel-shortages"
      },
      {
        "short": "The Rio Times",
        "name": "The Rio Times, « Niger Fuel Shortage Reaches Niamey, What It Means » (octobre 2026)",
        "url": "https://www.riotimesonline.com/niger-fuel-shortage-niamey-2026/"
      }
    ]
  },
  {
    "id": "2026-10-27-mozambique-etat-vingt-pour-cent-mines",
    "date": "2026-10-27",
    "region": "Afrique",
    "theme": "eco",
    "geo": [
      {
        "name": "Nacala, Mozambique",
        "label": "Mozambique",
        "coords": [
          40.67,
          -14.54
        ]
      }
    ],
    "title": "Le Mozambique veut devenir actionnaire à 20 % de toutes ses grandes mines",
    "summary": "Le président Daniel Chapo a annoncé le 20 octobre qu'une société d'État détiendrait 20 % des projets miniers, au-delà des 15 % déjà prévus par la loi de juin.",
    "points": [
      "Le 20 octobre, à Nacala, le président Daniel Chapo a annoncé qu'une société minière nationale, détenue par l'État, prendrait 20 % des projets miniers, alors que la loi signée le 3 juin prévoit déjà une participation de 15 % [1][2].",
      "Lors de la même conférence, le gouvernement a signé des accords d'intention portant sur 4,2 milliards de dollars de projets de transformation de minerais sur place [2].",
      "Les règles restent floues : on ne sait pas quels projets seront concernés, si les mines existantes sont incluses, ni comment s'articulent les 15 % de la loi et les 20 % annoncés. Une des sources précise que le texte officiel de la loi n'a pas été consulté, il faut donc rester prudent sur les chiffres exacts [3]."
    ],
    "why": [
      "À retenir : le Mozambique veut garder une part plus grande de ses minerais et en transformer une partie chez lui, plutôt que de tout exporter à l'état brut [1][2].",
      "Une participation de 20 % ne donne pas 20 % des recettes : l'État touche une part des bénéfices, mais doit parfois aussi payer sa part des coûts. Pour les groupes miniers, tout dépend des détails du texte, d'où l'attention des investisseurs [3]."
    ],
    "forMe": "Les minerais servent à fabriquer des batteries, des appareils et des pièces industrielles. Si les conditions deviennent plus strictes pour les groupes miniers, certains projets peuvent coûter plus cher ou être retardés, ce qui peut finir par peser sur les prix.",
    "figures": [
      {
        "value": "20 %",
        "label": "part de l'État dans les projets miniers annoncée par le président",
        "src": 1
      },
      {
        "value": "15 %",
        "label": "part déjà prévue par la loi signée le 3 juin",
        "src": 1
      },
      {
        "value": "4,2 Md$",
        "label": "d'accords d'intention sur la transformation de minerais",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Club of Mozambique",
        "name": "Club of Mozambique, « Mozambique: Chapo announces 20% state stake in mining projects through new state-owned company » (octobre 2026)",
        "url": "https://clubofmozambique.com/news/mozambique-chapo-announces-20-state-stake-in-mining-projects-through-new-state-owned-company/"
      },
      {
        "short": "Trade Finance Global",
        "name": "Trade Finance Global, « Mozambique looks to raise state mining stake to 20% and invest $4.2bn in mineral processing deals » (octobre 2026)",
        "url": "https://www.tradefinanceglobal.com/posts/mozambique-looks-to-raise-state-mining-stake-to-20-percent/"
      },
      {
        "short": "The Rio Times",
        "name": "The Rio Times, « Mozambique State Stake in Mining Projects Eyes 20% » (octobre 2026)",
        "url": "https://www.riotimesonline.com/mozambique-state-stake-mining-20-percent-2026/"
      }
    ]
  },
  {
    "id": "2026-10-27-mexique-camionneurs-bloquent-routes",
    "date": "2026-10-27",
    "region": "Amériques",
    "theme": "eco",
    "geo": [
      {
        "name": "Mexico, Mexique",
        "label": "Mexique",
        "coords": [
          -99.13,
          19.43
        ]
      }
    ],
    "title": "Mexique : des routiers et des agriculteurs bloquent les autoroutes « sans limite de durée » pour dénoncer l'insécurité et les péages",
    "summary": "Depuis le 26 octobre, des blocages touchent l'entrée de Mexico, Veracruz et Oaxaca. Les manifestants réclament de la sécurité, la fin du racket et des péages moins lourds.",
    "points": [
      "Depuis lundi 26 octobre, des routiers et des agriculteurs bloquent des routes dans une vingtaine d'États, notamment aux entrées de la capitale et dans les États de Veracruz et d'Oaxaca ; les organisateurs parlent d'une action « sans limite de durée » [1][2].",
      "Ils demandent plus de sécurité contre les vols, enlèvements et extorsions sur les routes, la fin du racket exigé par des groupes criminels, et des péages et taxes qu'ils jugent trop lourds pour des routes dangereuses ; l'autoroute 135D entre Tehuacán et Oaxaca a été complètement fermée [1][2][3].",
      "Le ministère de l'Intérieur dit que la plupart des organisations ont accepté une table de dialogue, mais aucun accord n'avait été annoncé ; la confédération Conatram affirme qu'aucun de ses membres ne participe, et les sources se contredisent sur qui bloque vraiment [1][3]."
    ],
    "why": [
      "À retenir : le blocage vise les routes par lesquelles circulent les marchandises, et les organisateurs le disent sans limite de durée [1][2].",
      "Le mouvement part d'une insécurité très concrète sur les routes, que les transporteurs disent subir tous les jours, plus que d'un mot d'ordre politique. Si le dialogue échoue, le blocage peut durer, comme le promettent les organisateurs [1][2]."
    ],
    "forMe": "Le Mexique fabrique et exporte beaucoup de produits qui circulent par la route. Un blocage long peut retarder des livraisons et renchérir certains produits.",
    "figures": [
      {
        "value": "≈ 20",
        "label": "États mexicains concernés par des blocages ou des rassemblements",
        "src": 1
      },
      {
        "value": "26 octobre",
        "label": "début de l'action, annoncée sans limite de durée",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "The Rio Times",
        "name": "The Rio Times, « Mexico Truckers Strike Hits Roads on 26 Oct » (26 octobre 2026)",
        "url": "https://www.riotimesonline.com/mexico-truckers-strike-roads-26-october-2026/"
      },
      {
        "short": "Mexico News Daily",
        "name": "Mexico News Daily, « Blockades reported in Oaxaca, central Mexico and Veracruz as truckers protest insecurity, steep fees » (octobre 2026)",
        "url": "https://mexiconewsdaily.com/travel/blockades-oaxaca-central-mexico-veracruz-truckers/"
      },
      {
        "short": "The Yucatan Times",
        "name": "The Yucatan Times, « National Transport Strike Sparks Rallies and Highway Protests Across Mexico » (octobre 2026)",
        "url": "https://theyucatantimes.com/2026/10/national-transport-strike-sparks-rallies-and-highway-protests-across-mexico/"
      }
    ]
  },
  {
    "id": "2026-10-27-asean-reseau-electrique-cable-sous-marin-laos",
    "date": "2026-10-27",
    "region": "Asie",
    "theme": "eco",
    "geo": [
      {
        "name": "Vientiane, Laos",
        "label": "Laos",
        "coords": [
          102.6,
          17.97
        ]
      },
      {
        "name": "Singapour",
        "label": "Singapour",
        "coords": [
          103.82,
          1.35
        ]
      }
    ],
    "title": "Asie du Sud-Est : Singapour veut relier les pays par des câbles électriques sous la mer, avec le Laos au centre",
    "summary": "Pour sa présidence de l'ASEAN en 2027, Singapour veut faire adopter des règles communes pour échanger de l'électricité par câbles sous-marins. Le Laos, riche en barrages, est le maillon central.",
    "points": [
      "Singapour, qui présidera l'ASEAN en 2027, veut faire avancer le « réseau électrique de l'ASEAN », avec un cadre commun pour les câbles électriques sous-marins ; l'objectif est que les pays membres l'adoptent en 2027 [1][2].",
      "Aujourd'hui, l'ASEAN n'a pas de règles uniques pour vendre de l'électricité d'un pays à l'autre, et ceux qui doivent inspecter, entretenir ou réparer ces câbles ne sont pas clairement désignés ; les investisseurs, qui récupèrent leur mise en 20 à 30 ans, demandent de la stabilité [1].",
      "Le Laos est au cœur du projet : la liaison Laos–Thaïlande–Malaisie–Singapour doit passer de 100 à 200 mégawatts [1]. Singapour et le Laos ont aussi signé le 4 septembre un accord sur les crédits carbone, avec 58 méthodes approuvées d'avance, dont 5 % des recettes versées au Laos pour son adaptation au climat [3]. La Thaïlande prendra la présidence en 2028 [4]."
    ],
    "why": [
      "À retenir : Singapour, petite île sans fleuves ni barrages, cherche à acheter de l'électricité propre à ses voisins comme le Laos [1][3].",
      "Pour que cela marche, il faut des règles communes sur les prix, la propriété et la réparation des câbles, et des garanties pour les investisseurs. Les barrages laotiens produisent beaucoup d'électricité, mais le Laos ne peut la vendre que si les lignes et les règles suivent [1][3]."
    ],
    "forMe": "Les centres de données et les usines d'Asie du Sud-Est consomment de plus en plus d'électricité. Le coût de l'énergie dans cette région influence le prix des puces, des téléphones et des produits fabriqués là-bas.",
    "figures": [
      {
        "value": "100 → 200 MW",
        "label": "capacité prévue de la liaison Laos–Thaïlande–Malaisie–Singapour",
        "src": 1
      },
      {
        "value": "2027",
        "label": "année visée pour un cadre commun sur les câbles sous-marins",
        "src": 1
      },
      {
        "value": "58",
        "label": "méthodes de crédits carbone approuvées par l'accord Singapour-Laos",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "The Star",
        "name": "The Star, « Singapore to advance Asean power grid, subsea cable framework during 2027 chairmanship » (25 octobre 2026)",
        "url": "https://www.thestar.com.my/aseanplus/aseanplus-news/2026/10/25/singapore-to-advance-asean-power-grid-subsea-cable-framework-during-2027-chairmanship"
      },
      {
        "short": "The Edge Malaysia",
        "name": "The Edge Malaysia, « Singapore to advance Asean power grid, subsea cable framework during 2027 chairmanship » (octobre 2026)",
        "url": "https://theedgemalaysia.com/node/823171"
      },
      {
        "short": "Carbon Credits",
        "name": "CarbonCredits.com, « Singapore and Laos Build Article 6 Carbon Credit Pipeline With 58 Approved Methodologies » (2026)",
        "url": "https://carboncredits.com/singapore-laos-58-article-6-carbon-credit-methodologies/"
      },
      {
        "short": "Eco-Business",
        "name": "Eco-Business, « Asean Power Grid: Singapore, Thailand launch two-year push to clear hurdles by 2028 » (2026)",
        "url": "https://www.eco-business.com/news/asean-power-grid-singapore-thailand-launch-two-year-push-to-clear-hurdles-by-2028/"
      }
    ]
  },
  {
    "id": "2026-10-27-ebola-rdc-deuxieme-plus-grande-epidemie",
    "date": "2026-10-27",
    "region": "Afrique",
    "theme": "geo",
    "geo": [
      {
        "name": "Bunia, Ituri, RD Congo",
        "label": "RD Congo",
        "coords": [
          30.25,
          1.57
        ]
      }
    ],
    "title": "Ebola en RD Congo : près de 10 000 cas confirmés, la deuxième plus grande épidémie jamais recensée",
    "summary": "Partie de l'Ituri, l'épidémie due au virus Bundibugyo a fait 4 687 morts selon le dernier bilan européen. Des cas sont aussi signalés au Kenya et au Nigeria.",
    "points": [
      "Au 21 octobre, la RD Congo comptait 9 704 cas confirmés d'Ebola, dont 4 687 décès, selon le Centre européen de prévention et de contrôle des maladies (ECDC) ; l'Ituri est la province la plus touchée, avec 7 003 cas et 3 242 décès dans 28 de ses 36 zones de santé [1].",
      "Le CDC américain parlait de 9 235 cas confirmés le 15 octobre et la qualifiait de deuxième plus grande épidémie d'Ebola jamais enregistrée [2]. Elle est due au virus Bundibugyo [1].",
      "Le virus a franchi des frontières : le Kenya compte 9 cas confirmés, tous liés à un premier cas importé, et le Nigeria a signalé un cas le 20 octobre ; quatre cas ont été évacués ou importés en Europe depuis mai. Les chiffres de l'Ouganda sont contestés selon les sources [1]."
    ],
    "why": [
      "À retenir : le bilan officiel s'approche de 10 000 cas confirmés, et l'épidémie n'est pas limitée à une seule région du pays [1][2].",
      "Les épidémies pèsent sur l'économie : écoles et marchés fermés, voyageurs refusés aux frontières, mines et transports ralentis dans une région déjà fragilisée par les conflits. Les deux sources ne s'appuient pas sur la même date de relevé, donc les chiffres exacts peuvent différer [1][2]."
    ],
    "forMe": "Le risque pour la France reste limité, mais les cas évacués vers l'Europe montrent que les pays suivent la situation de près. Pour l'économie, une épidémie longue en RD Congo, premier producteur mondial de cobalt, peut gêner les transports de minerais.",
    "figures": [
      {
        "value": "9 704",
        "label": "cas confirmés en RD Congo au 21 octobre",
        "src": 1
      },
      {
        "value": "4 687",
        "label": "décès liés à l'épidémie au 21 octobre",
        "src": 1
      },
      {
        "value": "7 003",
        "label": "cas confirmés dans la seule province d'Ituri",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "ECDC",
        "name": "ECDC, « Ebola disease: Multi-country outbreak 2026 » (mise à jour du 21 octobre 2026)",
        "url": "https://www.ecdc.europa.eu/en/ebola-disease-multi-country-outbreak-2026"
      },
      {
        "short": "Contagion Live",
        "name": "Contagion Live, « Ebola outbreak in DRC tops 9,235 confirmed cases, CDC reports » (17 octobre 2026)",
        "url": "https://www.contagionlive.com/view/ebola-outbreak-in-drc-tops-9235-confirmed-cases-cdc-reports"
      }
    ]
  },
  {
    "id": "2026-10-26-libye-accord-maritime-turquie-grece",
    "date": "2026-10-26",
    "region": "Afrique",
    "theme": "mix",
    "geo": [
      {
        "name": "Benghazi, Libye",
        "label": "Libye",
        "coords": [
          20.07,
          32.12
        ]
      }
    ],
    "title": "La Libye de l'Est valide un accord maritime avec la Turquie, et la Grèce crie à la nullité",
    "summary": "Le 20 octobre, le Parlement de l'est de la Libye a approuvé à l'unanimité l'accord de 2019 qui trace une frontière maritime entre la Libye et la Turquie. Athènes, Nicosie et Bruxelles protestent.",
    "points": [
      "Le 20 octobre, la Chambre des représentants, le Parlement basé dans l'est de la Libye et proche du maréchal Khalifa Haftar, a approuvé à l'unanimité l'accord signé en novembre 2019 entre la Turquie et l'ancien gouvernement libyen de Tripoli ; elle a aussi annulé deux résolutions de 2020 qui le rejetaient [1][2].",
      "La Grèce juge l'accord nul, car la Turquie et la Libye n'ont pas de côtes qui se font face ou se touchent, et il ignore les îles grecques situées entre les deux ; Chypre parle d'un texte « illégal, nul et non avenu », et la présidente de la Commission européenne, Ursula von der Leyen, dit qu'il viole les droits d'États tiers [1][2][3].",
      "La Turquie salue la décision. Selon la presse spécialisée, l'approbation de Benghazi pourrait ouvrir la voie à des forages turcs de pétrole et de gaz à l'est de la Crète [1][4]."
    ],
    "why": [
      "À retenir : un vote de Parlement libyen peut déplacer une frontière en mer et donc décider qui a le droit de forer pour du gaz en Méditerranée [1][4].",
      "Cet accord n'avait jamais été validé par l'est de la Libye, rival du gouvernement de Tripoli, qui est proche d'Ankara. En le ratifiant, Benghazi se rapproche de la Turquie. La Grèce et l'Égypte, elles, ont signé en 2020 un accord concurrent sur leurs zones économiques en mer, que la Turquie refuse [1]. Chacun trace sa frontière à son avantage, et ce qui se joue, ce sont les futurs gisements."
    ],
    "forMe": "Le gaz de Méditerranée orientale intéresse l'Europe, qui cherche à moins dépendre de la Russie. Si ces eaux deviennent un terrain de conflit juridique, les projets de forage et de gazoducs peuvent être retardés.",
    "figures": [
      {
        "value": "2019",
        "label": "année de signature de l'accord Turquie-Libye, validé seulement maintenant par l'est du pays",
        "src": 1
      },
      {
        "value": "2",
        "label": "résolutions de 2020 qui rejetaient l'accord, annulées le 20 octobre",
        "src": 1
      },
      {
        "value": "Unanimité",
        "label": "vote du Parlement de l'est de la Libye",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Al-Monitor",
        "name": "Al-Monitor, « Eastern Libya parliament approves maritime deal with Turkey, drawing Greek rejection » (octobre 2026)",
        "url": "https://www.al-monitor.com/originals/2026/10/eastern-libya-parliament-approves-maritime-deal-turkey-drawing-greek-rejection"
      },
      {
        "short": "Al-Ahram",
        "name": "Ahram Online, « EU slams Libya approval of Turkey maritime deal, backs Greece and Cyprus » (octobre 2026)",
        "url": "https://english.ahram.org.eg/News/580514.aspx"
      },
      {
        "short": "The National Herald",
        "name": "The National Herald, « Libya approves contentious Turkey deal over Mediterranean waters » (octobre 2026)",
        "url": "https://www.thenationalherald.com/libya-approves-contentious-turkey-deal-over-mediterranean-waters/"
      },
      {
        "short": "Rigzone",
        "name": "Rigzone, « Libyan Deal Paves Way for Broader Turkish Drilling in Mediterranean » (22 octobre 2026)",
        "url": "https://www.rigzone.com/news/wire/libyan_deal_paves_way_for_broader_turkish_drilling_in_mediterranean-22-oct-2026-184902-article/"
      }
    ]
  },
  {
    "id": "2026-10-26-roumanie-gouvernement-niculescu-six-mois-crise",
    "date": "2026-10-26",
    "region": "Europe",
    "theme": "mix",
    "geo": [
      {
        "name": "Bucarest, Roumanie",
        "label": "Roumanie",
        "coords": [
          26.1,
          44.43
        ]
      }
    ],
    "title": "La Roumanie retrouve un gouvernement après six mois de crise, et un gros déficit à régler",
    "summary": "Un diplomate sans parti, Luca Niculescu, est devenu Premier ministre le 20 octobre. Son équipe est minoritaire et doit d'abord s'attaquer au déficit du budget.",
    "points": [
      "Le 20 octobre, le Parlement roumain a investi Luca Niculescu, un diplomate indépendant, comme Premier ministre ; son gouvernement de 18 ministres a prêté serment devant le président Nicușor Dan [1][2].",
      "Le pays n'avait qu'un gouvernement par intérim depuis presque six mois, depuis la chute du Premier ministre Ilie Bolojan par une motion de censure en mai ; Niculescu est le quatrième choix du président, après l'échec de trois autres [1][2].",
      "Le Parti social-démocrate (PSD) détient 11 postes, sept ministres sont indépendants, et le ministère des Finances revient à Alexandru Nazare. Le gouvernement est minoritaire, appuyé pour six mois par plusieurs partis, et le déficit du budget est en tête de ses priorités [1][2]. Côté énergie, le pays vise 90 % de gaz en stock pour l'hiver (87 % aujourd'hui) et pourrait aider la Moldavie voisine en cas de pénurie [3]."
    ],
    "why": [
      "À retenir : la Roumanie, sans gouvernement stable depuis mai, doit maintenant corriger un déficit parmi les plus lourds de l'Union européenne [1][2].",
      "Un pays sans gouvernement ne peut pas voter de budget ni lancer de réformes, ce qui inquiète les prêteurs et les entreprises. Cette fin de crise rassure, mais le soutien au gouvernement n'est promis que pour six mois [2]. L'hiver arrive aussi : l'État prévoit des mesures du 1er novembre au 31 mars et peut épauler la Moldavie en gaz et en électricité [3]."
    ],
    "forMe": "La Roumanie est un partenaire commercial et un pays où de nombreuses entreprises françaises sont implantées. Un budget qui dérape pèse sur sa monnaie et sur l'économie de toute la région.",
    "figures": [
      {
        "value": "≈ 6 mois",
        "label": "de gouvernement par intérim avant l'investiture de Niculescu",
        "src": 1
      },
      {
        "value": "18",
        "label": "ministres dans le nouveau gouvernement (11 postes pour le PSD, 7 pour des indépendants)",
        "src": 1
      },
      {
        "value": "87 %",
        "label": "de remplissage des stockages de gaz, pour un objectif de 90 % avant l'hiver",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Euronews",
        "name": "Euronews, « New Romanian Prime Minister Luca Niculescu and cabinet members sworn in » (21 octobre 2026)",
        "url": "https://www.euronews.com/2026/10/21/new-romanian-prime-minister-luca-niculescu-and-cabinet-members-sworn-in"
      },
      {
        "short": "Il Post",
        "name": "Il Post, « Romania fiducia nuovo governo, fine crisi politica » (20 octobre 2026)",
        "url": "https://www.ilpost.it/2026/10/20/romania-fiducia-nuovo-governo-fine-crisi-politica/"
      },
      {
        "short": "Romania Insider",
        "name": "Romania Insider / Ro Times, « Ministry of Energy plans winter support for Moldova » (23 octobre 2026)",
        "url": "https://rotimes.ro/en/article/2026-10-23-ministry-of-energy-plans-winter-support-for-moldova"
      }
    ]
  },
  {
    "id": "2026-10-26-zimbabwe-lithium-interdiction-export-2027",
    "date": "2026-10-26",
    "region": "Afrique",
    "theme": "eco",
    "geo": [
      {
        "name": "Harare, Zimbabwe",
        "label": "Zimbabwe",
        "coords": [
          31.05,
          -17.83
        ]
      }
    ],
    "title": "Le Zimbabwe refuse de repousser l'interdiction d'exporter son lithium brut",
    "summary": "Harare maintient l'arrêt des exportations de lithium non raffiné pour janvier 2027. Le pays veut que les batteries se fabriquent chez lui, pas seulement que ses mines alimentent la Chine.",
    "points": [
      "Le 9 octobre, le gouvernement du Zimbabwe a déclaré qu'il n'y avait aucune raison de retarder l'interdiction d'exporter du lithium sous forme de concentré, prévue pour janvier 2027 ; le ministre de l'Information Nick Mangwana estime que les mineurs ont eu assez de temps pour se préparer à le traiter sur place [1].",
      "Depuis février 2026, le pays a déjà suspendu toutes ses exportations de minerais bruts et de concentrés de lithium, officiellement pour contrôler des pratiques frauduleuses à l'exportation [2].",
      "Les exportations de minerais vendues par l'organisme public de commercialisation ont plus que doublé sur les neuf premiers mois de 2026, à 4,73 milliards de dollars [3]."
    ],
    "why": [
      "À retenir : le Zimbabwe, l'un des grands producteurs africains de lithium, veut garder sur son sol la partie qui rapporte le plus [1][4].",
      "Le concentré de lithium est une roche enrichie, vendue à bas prix à des usines étrangères qui en tirent le produit utilisé dans les batteries. En interdisant son export, Harare force les entreprises à bâtir des raffineries chez lui. Le risque : si elles ne sont pas prêtes en janvier, les ventes peuvent s'arrêter et les mines ralentir [1][4]."
    ],
    "forMe": "Le lithium sert aux batteries des voitures électriques et des téléphones. Quand un pays producteur durcit ses règles, l'offre mondiale peut se resserrer et rendre les batteries plus chères à moyen terme.",
    "figures": [
      {
        "value": "Janv. 2027",
        "label": "date de l'interdiction d'exporter du lithium sous forme de concentré",
        "src": 1
      },
      {
        "value": "4,73 Md$",
        "label": "de ventes de minerais à l'export sur les neuf premiers mois de 2026",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "SMM",
        "name": "SMM Lithium News, « Zimbabwe: No Reason to Delay Lithium Concentrates Export Ban » (octobre 2026)",
        "url": "https://news.metal.com/newscontent/104149017-smm-lithium-news-zimbabwe-no-reason-to-delay-lithium-concentrates-export-ban"
      },
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « Zimbabwe imposes ban on exports of all raw minerals and lithium concentrate » (25 février 2026)",
        "url": "https://www.aljazeera.com/news/2026/2/25/zimbabwe-imposes-ban-on-exports-of-all-raw-minerals-and-lithium-concentrate"
      },
      {
        "short": "The Financial Gazette",
        "name": "The Financial Gazette, « Mineral exports fly after raw ban » (15 octobre 2026)",
        "url": "https://fingaz.co.zw/2026/10/15/mineral-exports-fly-after-raw-ban/"
      },
      {
        "short": "Further Africa",
        "name": "Further Africa, « Zimbabwe lithium export ban locks in 2027 » (13 octobre 2026)",
        "url": "https://furtherafrica.com/2026/10/13/zimbabwe-lithium-export-ban-locks-in-2027/"
      }
    ]
  },
  {
    "id": "2026-10-26-chili-lithium-appels-offres-prives",
    "date": "2026-10-26",
    "region": "Amériques",
    "theme": "eco",
    "geo": [
      {
        "name": "Santiago, Chili",
        "label": "Chili",
        "coords": [
          -70.65,
          -33.45
        ]
      }
    ],
    "title": "Le Chili veut plus que doubler son lithium en misant sur les entreprises privées",
    "summary": "Le ministre chilien des Mines annonce cinq nouveaux appels d'offres pour des projets de lithium en 2027. L'objectif : passer d'environ 300 000 à 700 000 tonnes par an.",
    "points": [
      "Lors de la semaine du marché des métaux de Londres (LME Week), le ministre chilien des Mines, Daniel Mas, a annoncé que le Chili prévoit d'ouvrir des appels d'offres pour environ cinq nouveaux projets de lithium en 2027 [1].",
      "Ces projets pourraient faire passer la production du pays d'environ 300 000 tonnes par an à 700 000 tonnes dans cinq à dix ans ; cinq projets en attente d'autorisation seront exploités entièrement par le privé, et l'État espère les approuver début 2027 [1].",
      "Le Chili, l'Argentine, la Bolivie et le Pérou cherchent aussi à négocier leur lithium et leur cuivre en bloc plutôt que chacun de son côté ; le texte signé fin août à Santiago ne crée pas encore d'alliance [2]."
    ],
    "why": [
      "À retenir : le Chili, déjà géant du lithium, veut plus que doubler sa production en laissant plus de place aux entreprises privées [1].",
      "Le lithium est le métal des batteries. Le pays dépend beaucoup de son cuivre, et le lithium est son second pari. Plus d'appels d'offres, c'est plus de concurrence entre acheteurs, mais aussi plus de pression sur l'eau des salars, ces déserts de sel d'où l'on pompe la saumure [1]. Réunir quatre voisins en bloc permettrait de peser sur les prix, mais ils sont aussi concurrents [2]."
    ],
    "forMe": "Si la production de lithium double, le prix des batteries de voitures électriques peut baisser à terme. Mais cela dépend d'abord des autorisations, qui restent à obtenir.",
    "figures": [
      {
        "value": "5",
        "label": "nouveaux projets de lithium à mettre en appel d'offres en 2027",
        "src": 1
      },
      {
        "value": "300 000 → 700 000 t",
        "label": "production annuelle visée dans cinq à dix ans",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Mining Weekly",
        "name": "Mining Weekly (Reuters), « Chile plans five new lithium tenders in push to double output » (21 octobre 2026)",
        "url": "https://www.miningweekly.com/article/chile-plans-five-new-lithium-tenders-in-push-to-double-output-2026-10-21"
      },
      {
        "short": "La Razón",
        "name": "La Razón, « Chile, Argentina, Bolivia y Perú buscan negociar como bloque su litio y su cobre » (21 octobre 2026)",
        "url": "https://www.larazon.cl/2026/10/21/chile-argentina-bolivia-y-peru-buscan-negociar-como-bloque-su-litio-y-su-cobre/"
      }
    ]
  },
  {
    "id": "2026-10-26-pacifique-japon-micronesie-australie-papouasie",
    "date": "2026-10-26",
    "region": "Asie",
    "theme": "geo",
    "geo": [
      {
        "name": "Palikir, Micronésie",
        "label": "Micronésie",
        "coords": [
          158.16,
          6.92
        ]
      },
      {
        "name": "Port Moresby, Papouasie-Nouvelle-Guinée",
        "label": "Papouasie-N.-Guinée",
        "coords": [
          147.18,
          -9.44
        ]
      }
    ],
    "title": "Pacifique : le Japon reçoit la Micronésie pendant que l'Australie s'installe en Papouasie",
    "summary": "Le 26 octobre, Tokyo a reçu le président micronésien, et Canberra a dit appliquer déjà son traité de défense avec la Papouasie-Nouvelle-Guinée. Les grandes puissances se disputent l'influence dans le Pacifique.",
    "points": [
      "Le 26 octobre à Tokyo, le Premier ministre japonais et le président des États fédérés de Micronésie ont réaffirmé l'unité du Pacifique et décidé de préparer le prochain sommet Japon-îles du Pacifique (PALM 11), prévu à Yokohama l'été prochain [1].",
      "Le même jour, l'Australie a affirmé appliquer déjà le traité de défense mutuelle Pukpuk signé avec la Papouasie-Nouvelle-Guinée : formation de policiers, aide au système judiciaire et recrutement de Papouasiens dans l'armée australienne [1].",
      "Ces annonces tombent alors qu'un chercheur français alerte sur l'activité chinoise en Micronésie, en Polynésie française, en Nouvelle-Calédonie et à Guam, tout en jugeant le risque militaire faible [2]."
    ],
    "why": [
      "À retenir : de minuscules États du Pacifique, riches de leurs immenses zones de pêche, sont courtisés par le Japon, l'Australie et la Chine [1][2].",
      "Ces pays ont peu d'habitants mais contrôlent de très vastes zones maritimes, avec leurs poissons et leurs câbles sous-marins. Celui qui y a des amis y gagne des voix dans les votes internationaux et des ports amis pour ses navires [1][2]."
    ],
    "forMe": "Ce qui se joue dans le Pacifique concerne la pêche (le thon) et les câbles par lesquels passent nos données. La rivalité entre grandes puissances pèse sur les routes commerciales de l'Asie.",
    "figures": [
      {
        "value": "PALM 11",
        "label": "prochain sommet Japon-îles du Pacifique, à Yokohama l'été prochain",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Islands Business",
        "name": "Islands Business, « PACNEWS Two, 26 October 2026 »",
        "url": "https://islandsbusiness.com/pacnews/pacnews-two-26-october-2026"
      },
      {
        "short": "Modern Diplomacy",
        "name": "Modern Diplomacy, « Can APEC's New Economic Coordination Plan Shield Asia-Pacific From Global Risks? » (21 octobre 2026)",
        "url": "https://moderndiplomacy.eu/2026/10/21/can-apecs-new-economic-coordination-plan-shield-asia-pacific-from-global-risks/"
      }
    ]
  },
  {
    "id": "2026-10-26-etats-unis-interdit-deepseek-administrations",
    "date": "2026-10-26",
    "region": "Amériques",
    "theme": "mix",
    "geo": [
      {
        "name": "Washington, États-Unis",
        "label": "États-Unis",
        "coords": [
          -77.04,
          38.91
        ]
      }
    ],
    "title": "Washington interdit DeepSeek, l'IA chinoise, dans toutes ses administrations civiles",
    "summary": "Le département de la Sécurité intérieure a ordonné aux agences fédérales civiles de retirer les produits DeepSeek et d'arrêter d'en acheter, par crainte d'envois de données vers la Chine.",
    "points": [
      "Le département américain de la Sécurité intérieure (DHS) a ordonné aux agences civiles fédérales de retirer DeepSeek de leurs systèmes et de ne plus en acheter, ainsi que les outils d'autres entreprises qui l'intègrent ; l'ordre est fondé sur une loi de 2018 sur la sécurité des chaînes d'approvisionnement [1][2][3].",
      "Le DHS invoque le risque que des employés ou prestataires envoient des données sensibles en Chine, et cite des logiciels malveillants et des failles dans l'application DeepSeek sur iPhone [1][3].",
      "L'ordre ne touche ni les entreprises privées ni les particuliers ; selon un média, l'armée et les services de renseignement en sont exemptés, et des dérogations peuvent être demandées sous 60 jours [1]. Les sources divergent sur la date de signature, fin juillet, l'ordre ayant été rendu public ces derniers jours [1][3]."
    ],
    "why": [
      "À retenir : les États-Unis ferment l'accès de leur administration à une IA chinoise qui s'était fait connaître en rivalisant avec les modèles américains [1][2].",
      "Les logiciels d'IA lisent ce qu'on leur écrit. Si le texte part vers des serveurs d'un pays rival, des secrets peuvent fuir. Washington applique ici à l'IA la méthode déjà utilisée pour les équipements de télécommunications chinois [1][3]. Le Commerce, New York, le Tennessee et la Virginie avaient déjà posé des interdictions plus étroites [1]."
    ],
    "forMe": "Ces règles ne s'appliquent pas à toi, mais elles montrent que l'IA devient un terrain de rivalité entre la Chine et les États-Unis, comme l'ont été les puces. Cela peut limiter les produits d'IA que les entreprises ont le droit d'utiliser.",
    "figures": [
      {
        "value": "60 jours",
        "label": "délai pour demander une dérogation à l'interdiction",
        "src": 1
      },
      {
        "value": "2018",
        "label": "année de la loi sur la sécurité des chaînes d'approvisionnement qui sert de base à l'ordre",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Cybernews",
        "name": "Cybernews, « US bans DeepSeek AI products from federal agencies »",
        "url": "https://cybernews.com/tech/us-bans-deepseek-from-federal-agencies/"
      },
      {
        "short": "The Standard (AFP)",
        "name": "The Standard HK, « US bans use of China's DeepSeek by govt agencies »",
        "url": "https://www.thestandard.com.hk/china/article/345932/US-bans-use-of-Chinas-DeepSeek-by-govt-agencies"
      },
      {
        "short": "ProPakistani",
        "name": "ProPakistani, « US bans DeepSeek across federal civilian agencies over security risks » (21 octobre 2026)",
        "url": "https://propakistani.pk/2026/10/21/us-bans-deepseek-across-federal-civilian-agencies-over-security-risks/"
      }
    ]
  },
  {
    "id": "2026-10-26-liban-israel-tampa-negociations-hezbollah",
    "date": "2026-10-26",
    "region": "Moyen-Orient",
    "theme": "geo",
    "geo": [
      {
        "name": "Beyrouth, Liban",
        "label": "Liban",
        "coords": [
          35.5,
          33.89
        ]
      }
    ],
    "title": "Liban et Israël négocient à Tampa : un cessez-le-feu d'un côté, le désarmement du Hezbollah de l'autre",
    "summary": "Des délégations libanaise et israélienne se sont retrouvées aux États-Unis le 20 octobre. Beyrouth veut que les frappes cessent, Israël veut voir l'armée libanaise désarmer le Hezbollah.",
    "points": [
      "Une délégation militaire libanaise devait défendre le 20 octobre à Tampa, en Floride, une demande d'arrêt des attaques israéliennes, lors d'une réunion à trois avec les États-Unis ; une source américaine parle d'une rencontre « technique » les 20 et 21 octobre [1][2].",
      "Beyrouth veut un engagement de cessez-le-feu et un meilleur mécanisme de vérification, lié à une zone pilote où l'armée libanaise se déploierait [1].",
      "Dans le cadre défini par les États-Unis, le Liban doit désarmer le Hezbollah et Israël se retirer progressivement ; le Hezbollah refuse de désarmer tant que l'armée israélienne reste, et Israël continue de frapper le sud du Liban [1]. Les sources consultées ne donnaient pas encore les résultats de la rencontre."
    ],
    "why": [
      "À retenir : chacun veut que l'autre bouge en premier, et la rencontre de Tampa ne dit pas qui cédera [1].",
      "Le Premier ministre israélien Benjamin Netanyahu aurait dit qu'Israël pousserait l'armée libanaise à prouver, dans deux zones pilotes, qu'elle sait écarter la menace du Hezbollah, faute de quoi Israël agirait lui-même [1]. Sans accord, les frappes continuent, et le pays, déjà en crise, ne peut pas reconstruire ni attirer d'investisseurs."
    ],
    "forMe": "Le Liban est un pays francophone proche de la France. Sa stabilité compte pour les prix de l'énergie en Méditerranée et pour les réfugiés qui peuvent arriver en Europe.",
    "figures": [
      {
        "value": "2",
        "label": "zones pilotes où l'armée libanaise devrait prouver qu'elle contrôle le Hezbollah, selon Netanyahu",
        "src": 1
      },
      {
        "value": "20-21 oct.",
        "label": "dates des discussions à Tampa, selon une source américaine",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Times of Israel (Reuters)",
        "name": "Times of Israel, « Lebanon says military delegation will press for halt to Israeli attacks at US talks » (17 octobre 2026)",
        "url": "https://www.timesofisrael.com/liveblog_entry/lebanon-says-military-delegation-will-press-for-halt-to-israeli-attacks-at-us-talks/"
      },
      {
        "short": "La Nazione",
        "name": "La Nazione, « Media, colloqui a livello tecnico » (octobre 2026)",
        "url": "https://www.lanazione.it/ultimaora/media-colloqui-a-livello-tecnico-ed3da4d1"
      }
    ]
  },
  {
    "id": "2026-10-25-georgie-proces-interdire-opposition",
    "date": "2026-10-25",
    "region": "Europe",
    "theme": "geo",
    "geo": [
      {
        "name": "Batumi, Géorgie",
        "label": "Géorgie",
        "coords": [
          41.64,
          41.65
        ]
      }
    ],
    "title": "En Géorgie, le parti au pouvoir demande à la justice d’interdire cinq partis d’opposition",
    "summary": "La Cour constitutionnelle géorgienne a tenu à Batumi trois jours d’audience sur une demande d’interdire les cinq principaux partis d’opposition. Elle a jusqu’à juin 2027 pour trancher, sans appel possible.",
    "points": [
      "Du 21 au 23 octobre, la Cour constitutionnelle a examiné à Batumi la demande de 88 députés du parti au pouvoir, Rêve géorgien, qui veulent faire interdire cinq formations d’opposition : le Mouvement national uni, Coalition pour le changement, Géorgie forte–Lelo, les Fédéralistes et Gakharia pour la Géorgie [1][2].",
      "Les députés accusent ces partis d’avoir violé l’article 23 de la Constitution, qui interdit les partis cherchant à renverser ou à changer par la force l’ordre constitutionnel ; quatre partis se défendent devant la cour, un cinquième boycotte la procédure [2].",
      "La cour, qui ne compte que 7 juges en poste sur 9, doit rendre sa décision d’ici juin 2027 ; elle sera définitive et sans appel en Géorgie [2]. L’opposition parle d’une manœuvre pour écarter ses principaux concurrents avant les prochaines élections [1][2]."
    ],
    "why": [
      "À retenir : si la cour suit le pouvoir, la Géorgie, candidate à l’Union européenne, se retrouverait sans ses principaux partis d’opposition [1][2].",
      "Le pays est aussi un maillon du « couloir du milieu » qui relie l’Asie centrale à l’Europe sans passer par la Russie : le jour même, les ministres des Affaires étrangères de cinq pays d’Asie centrale étaient à Batumi pour parler de transport et de transit vers la mer Noire [3][4]. Un pays qui veut attirer ces routes et ces investissements est observé de près par ses partenaires."
    ],
    "forMe": "Pour toi, pas d’effet direct à court terme. Mais la décision pèsera sur les relations entre la Géorgie et l’Union européenne, et donc sur les routes commerciales qui passent par le Caucase.",
    "figures": [
      {
        "value": "88",
        "label": "députés du parti au pouvoir qui demandent l’interdiction",
        "src": 2
      },
      {
        "value": "5",
        "label": "partis d’opposition visés",
        "src": 1
      },
      {
        "value": "juin 2027",
        "label": "date limite pour la décision de la cour, sans appel possible",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Reuters",
        "name": "Reuters, « Georgian court begins hearing lawsuit seeking ban on major opposition parties » (21 octobre 2026)",
        "url": "https://www.internazionale.it/ultime-notizie-reuters/2026/10/21/georgian-court-begins-hearing-lawsuit-seeking-ban-on-major-opposition-parties"
      },
      {
        "short": "Arab News",
        "name": "Arab News, « Georgia’s top court hears lawsuit to ban main opposition parties in latest crackdown on dissent » (octobre 2026)",
        "url": "https://www.arabnews.pk/world/georgias-top-court-hears-lawsuit-to-ban-main-opposition-parties-in-latest-crackdown-on-dissent-3004877"
      },
      {
        "short": "Georgia Today",
        "name": "Georgia Today, « Batumi to host meeting of Central Asian foreign ministers »",
        "url": "https://georgiatoday.ge/batumi-to-host-meeting-of-central-asian-foreign-ministers"
      },
      {
        "short": "OC Media",
        "name": "OC Media, « Friday, 23 October 2026 »",
        "url": "https://oc-media.org/friday-23-october-2026/"
      }
    ]
  },
  {
    "id": "2026-10-25-albanie-flamants-roses-lagune",
    "date": "2026-10-25",
    "region": "Europe",
    "theme": "mix",
    "geo": [
      {
        "name": "Tirana, Albanie",
        "label": "Albanie",
        "coords": [
          19.82,
          41.33
        ]
      }
    ],
    "title": "Albanie : cinq mois de manifestations pour sauver une lagune et ses flamants roses",
    "summary": "Depuis le 23 mai, des Albanais manifestent contre un méga-projet touristique près de la lagune de Narta. Le 24 octobre, la police a de nouveau affronté les manifestants à Tirana.",
    "points": [
      "Le mouvement, surnommé la « révolution des flamants roses », est né le 23 mai dans le village de Zvërnec, près de la lagune de Narta, contre des projets de complexes de luxe auxquels l’investisseur américain Jared Kushner est associé [2][3].",
      "La plus grande manifestation, le 20 juin, aurait rassemblé plus de 250 000 personnes selon les médias albanais [3].",
      "Le 24 octobre, la police a utilisé des canons à eau et des gaz lacrymogènes contre des manifestants qui réclament la démission du Premier ministre Edi Rama [1]."
    ],
    "why": [
      "À retenir : un projet d’investissement étranger est devenu en Albanie la plus longue contestation de la rue de ces dernières années [1][2].",
      "Le Premier ministre présente ces projets comme une chance d’attirer des investisseurs et de faire du pays une destination de tourisme haut de gamme ; ses opposants y voient des terres protégées offertes à des investisseurs riches sans vrai débat public. La zone abrite des espèces menacées comme le phoque moine et plus de 200 espèces d’oiseaux, et la structure anticorruption albanaise (SPAK) enquête sur les contrats de vente des terrains [2][3]."
    ],
    "forMe": "Si tu pars en vacances sur la côte albanaise, la région de Vlora est directement concernée par ces projets de tourisme de luxe.",
    "figures": [
      {
        "value": "23 mai",
        "label": "début du mouvement, à Zvërnec",
        "src": 2
      },
      {
        "value": "250 000+",
        "label": "manifestants le 20 juin, selon les médias albanais",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "ANSA",
        "name": "ANSA, « Clashes broke out in Tirana between police and protesters » (24 octobre 2026)",
        "url": "https://ansa.it/nuova_europa/en/news/countries/albania/2026/10/24/clashes-broke-out-in-tirana-between-police-and-protesters_3d80ad2f-6ccc-466e-a18f-e19f4acb2613.html"
      },
      {
        "short": "Wanted in Rome",
        "name": "Wanted in Rome, « Thousands rally across Albania in “Flamingo Revolution” against the Kushner resort project »",
        "url": "https://www.wantedinrome.com/news/hundreds-of-thousands-rally-across-albania-in-flamingo-revolution-against-kushner-resort-project.html"
      },
      {
        "short": "Rosa-Luxemburg-Stiftung",
        "name": "Rosa-Luxemburg-Stiftung, « Understanding Albania’s Flamingo Revolution »",
        "url": "https://www.rosalux.de/en/news/id/54893/understanding-albanias-flamingo-revolution"
      }
    ]
  },
  {
    "id": "2026-10-25-somalie-inondations-874000-deplaces",
    "date": "2026-10-25",
    "region": "Afrique",
    "theme": "mix",
    "geo": [
      {
        "name": "Beledweyne, Somalie",
        "label": "Somalie",
        "coords": [
          45.2,
          4.74
        ]
      }
    ],
    "title": "Somalie : jusqu’à 874 000 personnes pourraient fuir des inondations, et l’aide manque",
    "summary": "L’agence de l’ONU pour les migrations craint que près de 874 000 Somaliens soient déplacés d’ici la fin de l’année, surtout par des crues liées à El Niño. Elle n’a réuni que 14 % des fonds nécessaires.",
    "points": [
      "L’OIM et le Conseil danois pour les réfugiés estiment que 874 319 personnes pourraient être déplacées entre octobre et décembre, dont 92 % à cause des inondations [1].",
      "Les zones les plus menacées sont Beledweyne, avec près de 229 000 personnes à risque, et Galkayo, avec environ 82 000 [1][2].",
      "L’OIM n’a obtenu que 14 % des 16,62 millions de dollars dont elle a besoin pour se préparer aux crues liées à El Niño ; son responsable en Somalie prévient que la fenêtre pour réduire l’impact se referme [1]."
    ],
    "why": [
      "À retenir : on sait où l’eau va frapper, mais l’argent pour s’y préparer n’est pas là [1].",
      "Une crue qui chasse des familles de leurs champs et de leurs villes détruit aussi les récoltes, le bétail et les routes. Cela fait monter les prix de la nourriture et pousse davantage de gens à dépendre de l’aide."
    ],
    "forMe": "Pas d’effet direct pour toi. Mais les chocs climatiques en Afrique de l’Est pèsent sur les prix alimentaires et sur les migrations dans la région.",
    "figures": [
      {
        "value": "874 319",
        "label": "personnes qui pourraient être déplacées d’octobre à décembre",
        "src": 1
      },
      {
        "value": "14 %",
        "label": "part des 16,62 millions de dollars nécessaires déjà obtenue par l’OIM",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Anadolu",
        "name": "Anadolu, « UN agency warns nearly 874,000 could be displaced by floods in Somalia » (21 octobre 2026)",
        "url": "https://www.anews.com.tr/world/2026/10/21/un-agency-warns-nearly-874000-could-be-displaced-by-floods-in-somalia/amp"
      },
      {
        "short": "Arab News",
        "name": "Arab News, « 800,000 Somalis threatened by flooding displacement: UN »",
        "url": "https://www.arabnews.pk/world/800000-somalis-threatened-by-flooding-displacement-un-3004894"
      }
    ]
  },
  {
    "id": "2026-10-25-thailande-cambodge-frontiere-maritime",
    "date": "2026-10-25",
    "region": "Asie",
    "theme": "geo",
    "geo": [
      {
        "name": "Golfe de Thaïlande",
        "label": "Thaïlande",
        "coords": [
          101.2,
          10.8
        ]
      }
    ],
    "title": "Thaïlande et Cambodge : un médiateur de l’ONU tente de tracer leur frontière en mer",
    "summary": "À La Haye, les deux pays ont accepté de ne plus s’accuser en public pendant la médiation sur leur frontière maritime. La troisième réunion est prévue du 24 au 27 novembre à Kuala Lumpur.",
    "points": [
      "Le Cambodge a lancé en juin une procédure de conciliation prévue par la Convention des Nations unies sur le droit de la mer, après que la Thaïlande a annulé un accord de 2001 sur la frontière maritime et l’exploitation commune des ressources de la zone disputée [1].",
      "À la deuxième réunion, du 14 au 18 octobre à La Haye, les deux pays ont convenu de mesures de confiance, dont le droit de répondre aux informations jugées fausses [1].",
      "Le ministre thaïlandais des Affaires étrangères, Sihasak Phuangketkeow, veut que le processus reste limité au tracé de la frontière ; la commission a rappelé que certains engagements pris n’ont pas été pleinement tenus [1][2]."
    ],
    "why": [
      "À retenir : deux voisins qui ont connu des tensions ont choisi une médiation internationale plutôt que la confrontation [1][2].",
      "Une frontière en mer décide qui peut forer, pêcher et poser des câbles dans la zone. Tant qu’elle n’est pas tracée, les ressources du fond marin restent bloquées. La prochaine étape est la réunion de novembre à Kuala Lumpur [1][3]."
    ],
    "forMe": "Pas d’effet direct pour toi, mais c’est un exemple de règlement d’un différend sans passer par la force.",
    "figures": [
      {
        "value": "14-18 oct.",
        "label": "deuxième réunion de la commission, à La Haye",
        "src": 1
      },
      {
        "value": "24-27 nov.",
        "label": "troisième réunion prévue, à Kuala Lumpur",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Asia News Network",
        "name": "Asia News Network, « Cambodia, Thailand agree on UNCLOS “confidence-building measures” »",
        "url": "https://asianews.network/?p=309084"
      },
      {
        "short": "Khaosod English",
        "name": "Khaosod English, « Thailand insists sea boundary talks with Cambodia must stay within UNCLOS scope » (18 octobre 2026)",
        "url": "https://www.khaosodenglish.com/politics/2026/10/18/thailand-insists-sea-boundary-talks-with-cambodia-must-stay-within-unclos-scope/"
      },
      {
        "short": "Malay Mail",
        "name": "Malay Mail, « Second Cambodia-Thailand conciliation meeting set for Oct 14-18 in The Hague » (10 octobre 2026)",
        "url": "https://malaymail.com/news/world/2026/10/10/second-cambodia-thailand-conciliation-meeting-set-for-oct-14-18-in-the-hague/238526"
      }
    ]
  },
  {
    "id": "2026-10-25-zambie-minerais-contre-sante-washington",
    "date": "2026-10-25",
    "region": "Afrique",
    "theme": "geo",
    "geo": [
      {
        "name": "Lusaka, Zambie",
        "label": "Zambie",
        "coords": [
          28.28,
          -15.39
        ]
      }
    ],
    "title": "Zambie : Lusaka refuse de payer sa santé avec ses minerais et négocie à part avec Washington",
    "summary": "La Zambie a signé un accord de santé avec les États-Unis puis séparé de ce texte la négociation sur ses minerais critiques, qui se poursuit.",
    "points": [
      "À la cérémonie de signature de l’accord de santé, qui apporte 1,5 milliard de dollars de financement américain, le ministre zambien des Affaires étrangères, Mulambo Haimbe, a déclaré que les textes sur la santé et sur les minerais critiques « devaient être dissociés, et cela a été fait » [1][2].",
      "L’accord sur les minerais est encore en cours de négociation ; le ministre n’a pas donné de détails [1][2].",
      "En mai, la Zambie avait accusé Washington de conditionner l’accès à ses minerais à la conclusion de l’accord de santé, ce que l’ambassadeur américain de l’époque avait qualifié de faux [1][3]."
    ],
    "why": [
      "À retenir : le pays du cuivre refuse que son sous-sol serve de monnaie d’échange pour une aide sanitaire [1][3].",
      "La Zambie est un grand producteur de cuivre, un métal clé pour les câbles, les batteries et les moteurs électriques. Les États-Unis cherchent à sécuriser ce type de ressources face à la Chine. Cette actu date du 8 octobre ; nous la signalons ici car la négociation reste ouverte."
    ],
    "forMe": "Le cuivre sert à fabriquer presque tous les appareils électriques : ce qui se décide en Zambie peut influencer, à long terme, leur prix.",
    "figures": [
      {
        "value": "1,5 milliard $",
        "label": "financement américain prévu par l’accord de santé",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Mining Weekly (Reuters)",
        "name": "Mining Weekly (Reuters), « Zambia says it is negotiating US minerals deal after decoupling from health pact » (8 octobre 2026)",
        "url": "https://www.miningweekly.com/article/zambia-says-it-is-negotiating-us-minerals-deal-after-decoupling-from-health-pact-2026-10-08-1"
      },
      {
        "short": "Kitco (Reuters)",
        "name": "Kitco (Reuters), « Zambia says it is negotiating US minerals deal after “decoupling” from health pact » (8 octobre 2026)",
        "url": "https://www.kitco.com/news/off-the-wire/2026-10-08/zambia-says-it-negotiating-us-minerals-deal-after-decoupling-health"
      },
      {
        "short": "ADN",
        "name": "ADN, « Zambia blasts the US over a health deal in exchange for critical minerals » (5 mai 2026)",
        "url": "https://www.adn.com/nation-world/2026/05/05/zambia-blasts-the-us-over-a-2-billion-health-deal-in-exchange-for-critical-minerals/"
      }
    ]
  },
  {
    "id": "2026-10-25-bresil-second-tour-taxe-essence",
    "date": "2026-10-25",
    "region": "Amériques",
    "theme": "mix",
    "geo": [
      {
        "name": "Brasília, Brésil",
        "label": "Brésil",
        "coords": [
          -47.93,
          -15.78
        ]
      }
    ],
    "title": "Brésil : le jour du second tour, l’essence est sans taxe fédérale",
    "summary": "Avant le second tour de dimanche, Lula a supprimé pour 30 jours la taxe fédérale sur l’essence. Le pays vote pour choisir entre Lula et Flávio Bolsonaro.",
    "points": [
      "Le gouvernement a supprimé pendant 30 jours, avec prolongation possible, la taxe fédérale sur l’essence de 0,89 real par litre ; il a aussi prolongé l’exonération sur l’éthanol et augmenté ses aides [1][2].",
      "Les importateurs de diesel reçoivent 1,40 real de plus par litre pendant 30 jours [1][3]. La présidence dit que le coût sera compensé par des « recettes extraordinaires » tirées des exportations de pétrole [1].",
      "Les prix des carburants ont grimpé depuis que la guerre avec l’Iran a commencé fin février [1]. Flávio Bolsonaro accuse Lula d’« irresponsabilité » et prévient que le diesel pourrait monter après l’élection [1]."
    ],
    "why": [
      "À retenir : un pays producteur de pétrole utilise ses recettes pétrolières pour faire baisser le prix à la pompe juste avant de voter [1].",
      "Quand le pétrole monte, les gouvernements sont tentés de baisser les taxes pour protéger le pouvoir d’achat. Cela coûte cher à l’État, et les prix peuvent remonter quand la mesure s’arrête."
    ],
    "forMe": "Le Brésil est un grand fournisseur de soja, de café et de pétrole : l’élection influencera les prix de ce que tu achètes.",
    "figures": [
      {
        "value": "0,89 real",
        "label": "taxe fédérale par litre d’essence supprimée pendant 30 jours",
        "src": 1
      },
      {
        "value": "1,40 real",
        "label": "aide supplémentaire par litre de diesel importé, pendant 30 jours",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [
      "inflation-taux"
    ],
    "sources": [
      {
        "short": "Arab News",
        "name": "Arab News, « Brazil’s Lula scraps gasoline tax ahead of runoff election » (octobre 2026)",
        "url": "https://www.arabnews.pk/world/brazils-lula-scraps-gasoline-tax-ahead-of-runoff-election-3003773"
      },
      {
        "short": "Qatar Tribune",
        "name": "Qatar Tribune, « Brazil expands fuel subsidies before presidential vote »",
        "url": "https://www.qatar-tribune.com/article/258630/business/brazil-expands-fuel-subsidies-before-presidential-vote"
      },
      {
        "short": "Arise News",
        "name": "Arise News, « Brazil cuts fuel taxes ahead of Lula’s presidential runoff »",
        "url": "https://www.arise.tv/brazil-cuts-fuel-taxes-ahead-of-lulas-presidential-runoff/"
      }
    ]
  },
  {
    "id": "2026-10-25-petrole-116-dollars-hormuz-deux-versions",
    "date": "2026-10-25",
    "region": "Moyen-Orient",
    "theme": "geo",
    "geo": [
      {
        "name": "Détroit d’Ormuz",
        "label": "Ormuz",
        "coords": [
          56.5,
          26.5
        ]
      }
    ],
    "title": "Pétrole à 116 dollars : Washington dit que le Golfe exporte plus qu’avant la guerre, les relevés de navires disent le contraire",
    "summary": "Le baril de Brent a clôturé vendredi autour de 116,7 dollars. Le Trésor américain affirme que les exportations du Golfe dépassent leur niveau d’avant-guerre, mais un suivi des navires compte quatre passages en un jour à Ormuz.",
    "points": [
      "Le Brent a terminé vendredi autour de 116,7 à 116,9 dollars, en hausse d’environ 3 % ; depuis le début de l’année, il a pris environ 80 % [2][3][1].",
      "Le secrétaire au Trésor américain, Scott Bessent, affirme que les exportations de pétrole du Golfe ont dépassé leur niveau d’avant-guerre, autour de 17 à 18 millions de barils par jour, en comptant les routes par Ormuz, le golfe d’Oman et la mer Rouge [3]. Le 20 octobre, le secrétaire à l’Énergie Chris Wright parlait d’environ 80 % du niveau d’avant-guerre [1].",
      "Un site de suivi n’a relevé que 4 passages de navires commerciaux à Ormuz le 18 octobre, contre environ 85 par jour avant la crise ; les Gardiens de la Révolution disent que deux superpétroliers ont heurté des mines, sans confirmation indépendante [2]."
    ],
    "why": [
      "À retenir : les chiffres officiels et les relevés de navires ne racontent pas la même histoire, et le prix du pétrole reste très haut [2][3].",
      "Au moins 18 navires ont été attaqués en deux semaines selon la société Kpler, ce qui maintient une prime de risque dans les prix [1]. Les chiffres du gouvernement américain mélangent plusieurs routes, alors que le suivi ne compte que les passages à Ormuz : les deux peuvent être vrais en même temps, mais pas comparables."
    ],
    "forMe": "Un pétrole cher fait monter le prix de l’essence, du diesel et, à terme, de nombreux produits transportés par camion ou par bateau.",
    "figures": [
      {
        "value": "~116,7 $",
        "label": "prix du baril de Brent à la clôture de vendredi",
        "src": 3
      },
      {
        "value": "+80 %",
        "label": "hausse du Brent depuis le début de l’année",
        "src": 1
      },
      {
        "value": "4 / 85",
        "label": "passages à Ormuz le 18 octobre, contre environ 85 par jour avant la crise",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [
      "routes-maritimes"
    ],
    "sources": [
      {
        "short": "Energy Connects",
        "name": "Energy Connects, « Oil wavers near five-month high as Iran threats vie with flows » (octobre 2026)",
        "url": "https://www.energyconnects.com/news/oil/2026/october/oil-wavers-near-five-month-high-as-iran-threats-vie-with-flows/"
      },
      {
        "short": "Straits Daily Brief",
        "name": "Straits Daily Brief, « Strait of Hormuz News, October 24, 2026 »",
        "url": "https://straits.live/briefs/2026-10-24"
      },
      {
        "short": "Fox News",
        "name": "Fox News, « Netanyahu calls for US and Israel to overthrow Iran as Brent crude hits five-month high » (23 octobre 2026)",
        "url": "https://www.foxnews.com/live-news/us-iran-war-israel-netanyahu-oil-prices-10-23-26"
      }
    ]
  },
  {
    "id": "2026-10-25-inde-jio-record-introduction-en-bourse",
    "date": "2026-10-25",
    "region": "Asie",
    "theme": "eco",
    "geo": [
      {
        "name": "Mumbai, Inde",
        "label": "Inde",
        "coords": [
          72.88,
          19.08
        ]
      }
    ],
    "title": "Inde : l’introduction en Bourse de Jio bat le record du pays",
    "summary": "Jio Platforms, le géant des télécoms du milliardaire Mukesh Ambani, lève 30 213 crores de roupies, la plus grosse introduction en Bourse de l’histoire de l’Inde. Sa cotation est attendue le 28 octobre.",
    "points": [
      "L’opération, d’un montant de 30 213 crores de roupies, dépasse le précédent record, celui de Hyundai Motor India en 2024 avec 27 800 crores ; la fourchette de prix est de 1 065 à 1 119 roupies l’action [1].",
      "Selon l’AFP, les 197,5 premiers millions d’actions ont été demandés en 100 minutes ; Bloomberg, cité par la Börsen-Zeitung, parle de demandes dépassant 20 milliards de dollars [2][3].",
      "L’attribution des actions est attendue le 26 octobre et la cotation à Bourse le 28 octobre, des dates indicatives [1][3]."
    ],
    "why": [
      "À retenir : l’Inde dispose désormais d’un marché capable d’avaler la plus grosse introduction de son histoire, malgré les doutes sur la valorisation [1][2].",
      "Une introduction en Bourse permet à une entreprise de vendre des parts au public pour financer sa croissance. Le succès de celle-ci sert de test de l’appétit des investisseurs pour l’Inde, alors que le pétrole cher pèse sur beaucoup de pays émergents [2]."
    ],
    "forMe": "Pas d’effet direct pour toi, sauf si tu possèdes des fonds qui investissent en Inde ; mais c’est un signal sur la confiance des investisseurs dans les pays émergents.",
    "figures": [
      {
        "value": "30 213 crores",
        "label": "montant de l’opération, en roupies : un record indien",
        "src": 1
      },
      {
        "value": "100 min",
        "label": "temps pour demander les 197,5 premiers millions d’actions",
        "src": 2
      },
      {
        "value": "20 Md$",
        "label": "demandes selon Bloomberg, citées par la Börsen-Zeitung",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Chittorgarh",
        "name": "Chittorgarh, « Jio Platforms IPO Details »",
        "url": "https://www.chittorgarh.com/ipo/jio-platforms-ipo/"
      },
      {
        "short": "Techniques de l’Ingénieur (AFP)",
        "name": "AFP, « Inde : succès de la souscription pour Jio avant introduction en Bourse »",
        "url": "https://www.techniques-ingenieur.fr/actualite/breves-afp/inde-succes-de-la-souscription-pour-jio-avant-introduction-en-bourse-165158/"
      },
      {
        "short": "Börsen-Zeitung",
        "name": "Börsen-Zeitung, « IPO von Jio Platforms stellt Indiens Kapitalmarkt auf die Probe »",
        "url": "https://www.boersen-zeitung.de/unternehmen-branchen/ipo-von-jio-platforms-stellt-indiens-kapitalmarkt-auf-die-probe"
      }
    ]
  },
  {
    "id": "2026-10-24-france-taux-5-pourcent-premiere-fois-depuis-2002",
    "date": "2026-10-24",
    "region": "Europe",
    "theme": "eco",
    "geo": [
      {
        "name": "Paris, France",
        "label": "France",
        "coords": [
          2.35,
          48.86
        ]
      }
    ],
    "title": "La France emprunte à plus de 5 % pour la première fois depuis 2002",
    "summary": "Le taux auquel l'État français emprunte sur dix ans a franchi les 5 %, un niveau qu'on n'avait plus vu depuis vingt-quatre ans. L'écart avec l'Allemagne est le plus large depuis 2011.",
    "points": [
      "Le 22 octobre, le taux des obligations françaises à dix ans a dépassé 5 % pour la première fois depuis 2002, au niveau de celui des États-Unis, autour de 5,1 % [1][2].",
      "L'écart avec l'Allemagne, le meilleur élève de la zone euro, a dépassé 160 points de base, son plus haut depuis novembre 2011 ; le 23 octobre, la France empruntait à environ 5,05 % contre 3,33 % pour l'Allemagne, soit un écart de 1,72 point [1][3].",
      "Cette tension arrive avant la décision de la Banque centrale européenne : elle a relevé ses taux deux fois cette année, à 2,5 %, et l'inflation de la zone euro a atteint 3,8 % en septembre. Les syndicats appellent à une grande mobilisation le 5 novembre [4]."
    ],
    "why": [
      "La première phrase à retenir : prêter à la France coûte désormais aussi cher que prêter aux États-Unis, ce qui pèse sur le budget de l'État pour des années [1].",
      "Quand les investisseurs réclament plus d'intérêts pour prêter à un pays, c'est qu'ils craignent pour ses finances ou sa stabilité politique. Les sources citent l'inquiétude sur le budget et sur l'agitation sociale [2][4]. Plus la dette coûte cher, plus l'État doit payer d'intérêts, et moins il lui reste pour les écoles, les hôpitaux ou les routes."
    ],
    "forMe": "Les taux de l'État servent de référence aux banques : si la France emprunte plus cher, les crédits immobiliers et ceux des entreprises ont tendance à suivre.",
    "figures": [
      {
        "value": "5 %",
        "label": "seuil franchi par le taux français à dix ans, une première depuis 2002",
        "src": 1
      },
      {
        "value": "1,72 point",
        "label": "écart entre le taux français (5,05 %) et allemand (3,33 %) au 23 octobre",
        "src": 3
      },
      {
        "value": "3,8 %",
        "label": "inflation de la zone euro en septembre",
        "src": 4
      }
    ],
    "culture": [],
    "dossiers": [
      "inflation-taux"
    ],
    "sources": [
      {
        "short": "FXStreet",
        "name": "FXStreet, « France's 10-year yield moves above 5.10% level » (22 octobre 2026)",
        "url": "https://www.fxstreet.com/analysis/frances-10-year-yield-moves-above-510-level-202610220948"
      },
      {
        "short": "Yahoo Finance",
        "name": "Yahoo Finance, « Euro zone bond yields rise as French borrowing costs hit 24-year high » (2026)",
        "url": "https://finance.yahoo.com/markets/world-indices/articles/french-bonds-lead-euro-zone-092141406.html"
      },
      {
        "short": "Ideal Investisseur",
        "name": "Ideal Investisseur, « OAT / Bund spread today » (23 octobre 2026)",
        "url": "https://www.ideal-investisseur.fr/en/markets/oat-bund-spread.html"
      },
      {
        "short": "Euronews",
        "name": "Euronews, « France's bond drama takes centre stage ahead of ECB rate decision » (23 octobre 2026)",
        "url": "https://www.euronews.com/2026/10/23/frances-bond-drama-takes-centre-stage-ahead-of-ecb-rate-decision"
      }
    ]
  },
  {
    "id": "2026-10-24-bresil-chine-moitie-petrole-ormuz",
    "date": "2026-10-24",
    "region": "Amériques",
    "theme": "mix",
    "geo": [
      {
        "name": "Brasília, Brésil",
        "label": "Brésil",
        "coords": [
          -47.93,
          -15.78
        ]
      }
    ],
    "title": "Quand Ormuz s'est fermé, la Chine a acheté la moitié du pétrole brésilien",
    "summary": "Privée d'une partie du pétrole du Golfe par la guerre en Iran, la Chine s'est tournée vers le Brésil : ses achats de brut brésilien ont atteint un record, tout comme les échanges entre les deux pays.",
    "points": [
      "D'après les données du Conseil d'affaires Brésil-Chine pour janvier-septembre, la Chine a pris la moitié de tout le brut exporté par le Brésil, près de sept fois la part de l'Inde, deuxième acheteur [1][2].",
      "Les ventes de pétrole brésilien à la Chine ont bondi de 49 % pour atteindre 21,8 milliards de dollars : 27 % de volume en plus et des prix en hausse de 16,8 % [1].",
      "Les échanges entre les deux pays ont atteint un record de 143 milliards de dollars en neuf mois (142 selon d'autres médias qui citent les mêmes données). La hausse ralentit depuis que les pétroliers du Golfe naviguent de nouveau [1][2][3]."
    ],
    "why": [
      "La première phrase à retenir : la fermeture d'un détroit au Moyen-Orient a enrichi un pays d'Amérique du Sud, parce que les acheteurs ont cherché du pétrole ailleurs [1].",
      "L'avenir reste ouvert : si l'Iran attaque de nouveau les navires dans le détroit, la Chine pourrait de nouveau se tourner vers le Brésil [3]. Le pays est aussi en pleine campagne : le second tour de la présidentielle a lieu dimanche 25 octobre [4]."
    ],
    "forMe": "Le pétrole que la Chine n'achète plus au Golfe, d'autres le paient plus cher. Les routes du pétrole se redessinent et cela finit par se voir sur le prix du plein.",
    "figures": [
      {
        "value": "50 %",
        "label": "part du brut brésilien acheté par la Chine (janvier-septembre)",
        "src": 1
      },
      {
        "value": "21,8 Md$",
        "label": "ventes de pétrole brésilien à la Chine, en hausse de 49 %",
        "src": 1
      },
      {
        "value": "143 Md$",
        "label": "échanges Brésil-Chine en neuf mois, un record",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [
      "routes-maritimes"
    ],
    "sources": [
      {
        "short": "SCMP",
        "name": "South China Morning Post, « China bought half of Brazil's oil exports as Iran war shut Hormuz, driving sales to record » (2026)",
        "url": "https://scmp.com/news/china/article/3371064/china-bought-half-brazils-oil-exports-iran-war-shut-hormuz-driving-sales-record"
      },
      {
        "short": "The Star",
        "name": "The Star, « China bought half of Brazil's oil exports as Iran war shut Hormuz, driving sales to record » (23 octobre 2026)",
        "url": "https://thestar.com.my/aseanplus/aseanplus-news/2026/10/23/china-bought-half-of-brazils-oil-exports-as-iran-war-shut-hormuz-driving-sales-to-record"
      },
      {
        "short": "ChinaPulse",
        "name": "ChinaPulse, « Brazil Logs Record Oil Sales to China After Strait of Hormuz Crisis » (17 octobre 2026)",
        "url": "https://www.chinapulse.com/data-news/2026/10/17/brazil-logs-record-oil-sales-to-china-after-strait-of-hormuz-crisis/"
      },
      {
        "short": "Gulf News",
        "name": "Gulf News, « 'Never again Bolsonaro': thousands march ahead of Brazil election runoff » (2026)",
        "url": "https://gulfnews.com/world/americas/never-again-bolsonaro-thousands-march-ahead-of-brazil-election-runoff-1.500702397"
      }
    ]
  },
  {
    "id": "2026-10-24-fidji-drones-de-mer-australie",
    "date": "2026-10-24",
    "region": "Asie",
    "theme": "geo",
    "geo": [
      {
        "name": "Suva, Fidji",
        "label": "Fidji",
        "coords": [
          178.44,
          -18.14
        ]
      }
    ],
    "title": "L'Australie offre des drones de mer à Fidji pour surveiller son océan",
    "summary": "Canberra va donner à l'armée fidjienne des bateaux sans équipage qui restent des mois en mer. Objectif affiché : traquer les trafics de drogue dans le Pacifique.",
    "points": [
      "L'Australie va offrir à l'armée de Fidji des drones de surface « Bluebottle », dans le cadre du partenariat Waqa Moana, un effort mené par le Pacifique contre le crime organisé et le trafic de drogue [1][2].",
      "Ces navires sans équipage fonctionnent aux énergies renouvelables et peuvent rester plus de 180 jours en mer ; ils doivent arriver à Fidji début 2027 [1][2].",
      "L'annonce a été répétée à Suva le 23 octobre par le haut-commissaire d'Australie, Peter Roberts, aux côtés du ministre fidjien de la Défense, Pio Tikoduadua [3]. En 2025, la marine néo-zélandaise avait déjà fait patrouiller deux Bluebottle dans les eaux fidjiennes pendant trois mois [4]."
    ],
    "why": [
      "La première phrase à retenir : un petit archipel obtient des yeux sur un océan immense grâce à des bateaux sans équipage, offerts par un voisin [1].",
      "Les pays du Pacifique ont de très grandes zones maritimes mais peu de moyens pour les surveiller. Les drones offerts par l'Australie renforcent aussi son influence dans une région où les grandes puissances se disputent les alliances [2]."
    ],
    "forMe": "Les routes de la drogue et du commerce passent aussi par le Pacifique ; les surveiller coûte cher, et ces drones montrent comment les pays s'y prennent désormais.",
    "figures": [
      {
        "value": "180 jours",
        "label": "durée possible d'une mission en mer, sans équipage",
        "src": 1
      },
      {
        "value": "début 2027",
        "label": "arrivée prévue des drones à Fidji",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "The Star",
        "name": "The Star, « Fiji to deploy solar-powered Australian military drones at sea » (16 octobre 2026)",
        "url": "https://www.thestar.com.my/aseanplus/aseanplus-news/2026/10/16/fiji-to-deploy-solar-powered-australian-military-drones-at-sea"
      },
      {
        "short": "PINA",
        "name": "Pacific Islands News Association, « Australian sea drones to combat Pacific drug crime » (16 octobre 2026)",
        "url": "https://pina.com.fj/2026/10/16/australian-sea-drones-to-combat-pacific-drug-crime/"
      },
      {
        "short": "Islands Business",
        "name": "Islands Business, « PACNEWS THREE, 23 OCTOBER 2026 »",
        "url": "https://islandsbusiness.com/pacnews/pacnews-three-23-october-2026/"
      },
      {
        "short": "NZDF",
        "name": "Force de défense néo-zélandaise, « Navy trio work alongside Fiji in piloting uncrewed vessels »",
        "url": "https://www.nzdf.mil.nz/navy/navy-news/navy-trio-work-alongside-fiji-in-piloting-uncrewed-vessels/"
      }
    ]
  },
  {
    "id": "2026-10-24-jordanie-fusillade-eglise-karak",
    "date": "2026-10-24",
    "region": "Moyen-Orient",
    "theme": "geo",
    "geo": [
      {
        "name": "Karak, Jordanie",
        "label": "Jordanie",
        "coords": [
          35.7,
          31.18
        ]
      }
    ],
    "title": "Jordanie : des hommes armés ouvrent le feu dans une église du sud, au moins sept morts",
    "summary": "Une fusillade a frappé une église du gouvernorat de Karak pendant des funérailles. Le bilan est d'au moins sept morts et 34 blessés.",
    "points": [
      "Le 23 octobre, des hommes armés ont ouvert le feu dans une église du gouvernorat de Karak, dans le sud de la Jordanie, pendant des funérailles : au moins sept personnes sont mortes et 34 ont été blessées [1].",
      "L'Arabie saoudite a condamné une attaque « lâche » contre l'église [2].",
      "Les sources consultées ne disent pas encore qui est derrière l'attaque ni pourquoi [1][2]."
    ],
    "why": [
      "La première phrase à retenir : un pays qui passe pour un îlot de calme dans une région en guerre vient d'être frappé sur son sol [1].",
      "Pour l'économie jordanienne, la sécurité compte : plus un pays semble sûr, plus les touristes et les investisseurs viennent. Les enquêteurs n'ont pas encore dit qui était responsable, il est donc trop tôt pour mesurer les conséquences [1][2]."
    ],
    "forMe": "Si tu prépares un voyage au Moyen-Orient, consulte les conseils aux voyageurs du ministère des Affaires étrangères avant de réserver.",
    "figures": [
      {
        "value": "7 morts",
        "label": "au moins, selon le dernier bilan connu",
        "src": 1
      },
      {
        "value": "34",
        "label": "blessés",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « At least seven killed after gunmen open fire at church in Jordan » (23 octobre 2026)",
        "url": "https://www.aljazeera.com/news/2026/10/23/at-least-seven-killed-after-gunmen-open-fire-at-church-in-jordan"
      },
      {
        "short": "Arab News",
        "name": "Arab News, « Saudi Arabia condemns cowardly Jordan church attack amid international outcry »",
        "url": "https://arabnews.com/saudi-arabia/saudi-arabia-condemns-cowardly-jordan-church-attack-amid-international-outcry-3007957"
      }
    ]
  },
  {
    "id": "2026-10-24-ukraine-starshield-satellites-propres",
    "date": "2026-10-24",
    "region": "Europe",
    "theme": "mix",
    "geo": [
      {
        "name": "Kyiv, Ukraine",
        "label": "Ukraine",
        "coords": [
          30.52,
          50.45
        ]
      }
    ],
    "title": "Ukraine : après la coupure de Starshield, Kyiv veut son propre réseau de satellites",
    "summary": "Depuis la restriction du réseau militaire américain Starshield, l'armée ukrainienne se sait dépendante d'un outil qu'elle ne contrôle pas. Kyiv prépare un système indépendant.",
    "points": [
      "Starshield, la version militaire de Starlink, est partagée avec l'Ukraine par le Pentagone depuis 2024, ce qui lui a coûté des milliards de dollars [1][2].",
      "Mi-octobre, la connexion a été restreinte pour les systèmes qui vont au-dessus d'une certaine vitesse, ce qui a touché les drones et la défense antiaérienne autour de Kyiv. Une source du ministère ukrainien de la Défense dit qu'elle est rétablie, mais Volodymyr Zelensky affirme qu'elle ne l'est pas entièrement [2][3].",
      "Volodymyr Zelensky accuse Washington, Elon Musk répond que Starshield appartient au gouvernement américain, et Donald Trump nie être intervenu. Des sénateurs demandent une enquête de l'inspecteur général du Pentagone. Le 23 octobre, l'Ukraine a annoncé préparer un système satellitaire indépendant [1][2][3]."
    ],
    "why": [
      "La première phrase à retenir : l'Ukraine a découvert qu'une partie de sa défense dépend d'un réseau dont d'autres tiennent l'interrupteur [3].",
      "Plus un pays dépend d'une technologie étrangère pour se défendre, plus ses alliés peuvent peser sur lui. C'est ce qui pousse Kyiv à vouloir ses propres satellites, comme d'autres pays cherchent à produire eux-mêmes leurs puces ou leur énergie [1][3]."
    ],
    "forMe": "Les satellites guident aussi ton téléphone, tes paiements et les avions. Qui les contrôle a un pouvoir énorme, et l'Europe réfléchit elle aussi à ne plus dépendre d'un seul fournisseur.",
    "figures": [
      {
        "value": "2024",
        "label": "année où le Pentagone a commencé à partager Starshield avec l'Ukraine",
        "src": 2
      },
      {
        "value": "des milliards",
        "label": "de dollars coûtés au Pentagone depuis, selon NPR",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « Ukraine plans independent satellite system as Starlink issues persist » (23 octobre 2026)",
        "url": "https://www.aljazeera.com/news/2026/10/23/ukraine-plans-independent-satellite-system-as-starlink-issues-persist"
      },
      {
        "short": "NPR / OPB",
        "name": "NPR via OPB, « Ukraine and the U.S. are at odds over Starshield. Here's what to know » (18 octobre 2026)",
        "url": "https://www.opb.org/article/2026/10/18/ukraine-and-the-u-s-are-at-odds-over-starshield-here-s-what-to-know/"
      },
      {
        "short": "Al Jazeera (Starshield)",
        "name": "Al Jazeera, « What is Starshield, and who limited Ukraine's access to it? » (15 octobre 2026)",
        "url": "https://www.aljazeera.com/news/2026/10/15/what-is-starshield-and-who-limited-ukraines-access-to-it"
      }
    ]
  },
  {
    "id": "2026-10-24-coree-du-sud-propose-pourparlers-frontiere",
    "date": "2026-10-24",
    "region": "Asie",
    "theme": "geo",
    "geo": [
      {
        "name": "Séoul, Corée du Sud",
        "label": "Corée du Sud",
        "coords": [
          126.98,
          37.57
        ]
      }
    ],
    "title": "Séoul propose à Pyongyang de tracer enfin la frontière et de rétablir les lignes directes",
    "summary": "Après l'explosion d'une mine nord-coréenne côté sud de la frontière, Séoul propose des pourparlers militaires. Un précédent appel est resté sans réponse.",
    "points": [
      "Le 23 octobre, le ministère sud-coréen de la Défense a proposé officiellement des pourparlers militaires pour vérifier ensemble l'emplacement exact de la ligne de démarcation, rétablir les lignes de communication militaires et éviter les accrochages accidentels [1][2].",
      "Séoul cite une explosion du 21 septembre, où un militaire sud-coréen a été gravement blessé par une mine nord-coréenne posée au sud de la ligne ; Pyongyang dément [1][3].",
      "Les discussions pourraient se tenir à Panmunjom, éventuellement avec le Commandement de l'ONU. Séoul avait déjà fait une offre semblable en novembre 2025, restée sans réponse ; aucune réponse du Nord n'était connue au moment de la rédaction [1][3]."
    ],
    "why": [
      "La première phrase à retenir : sur l'une des frontières les plus armées du monde, il n'y a même pas d'accord sur l'emplacement exact de la ligne [1].",
      "Sans lignes directes entre les armées, un incident minime peut devenir un affrontement. La presse locale doute que le Nord accepte [2][3]."
    ],
    "forMe": "Une tension durable dans la péninsule coréenne inquiète les marchés et les entreprises installées en Corée du Sud ; c'est pourquoi chaque tentative de dialogue compte.",
    "figures": [
      {
        "value": "21 sept.",
        "label": "explosion de mine qui a déclenché la proposition",
        "src": 1
      },
      {
        "value": "nov. 2025",
        "label": "date de l'offre précédente, restée sans réponse",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Malay Mail",
        "name": "Malay Mail, « South Korea proposes military talks with North to ease border tensions after DMZ blast » (23 octobre 2026)",
        "url": "https://www.malaymail.com/news/world/2026/10/23/south-korea-proposes-military-talks-with-north-to-ease-border-tensions-after-dmz-blast/240305"
      },
      {
        "short": "Seoul Economic Daily",
        "name": "Seoul Economic Daily, « Seoul Proposes Military Talks With North Korea on Border Line, Hotlines » (23 octobre 2026)",
        "url": "https://en.sedaily.com/politics/2026/10/23/seoul-proposes-military-talks-with-north-korea-on-border"
      },
      {
        "short": "JoongAng",
        "name": "Korea JoongAng Daily, « South Korea proposes military talks with North Korea over disputed border line »",
        "url": "https://www.koreajoongangdaily.com/korea/seoul-proposes-talks-with-pyongyang-over-disputed-mdl-but-response-unlikely/12935843"
      }
    ]
  },
  {
    "id": "2026-10-24-etats-unis-budget-defense-1500-milliards",
    "date": "2026-10-24",
    "region": "Amériques",
    "theme": "mix",
    "geo": [
      {
        "name": "Washington, États-Unis",
        "label": "États-Unis",
        "coords": [
          -77.04,
          38.91
        ]
      }
    ],
    "title": "Le Pentagone demande 1 500 milliards de dollars pour rattraper la Chine dans les drones et l'IA",
    "summary": "Le ministre américain de la Défense, Pete Hegseth, défend cette demande comme un « investissement d'une génération » pour rattraper la Chine dans les drones, la robotique et l'intelligence artificielle.",
    "points": [
      "Devant l'association de l'armée de terre américaine, Pete Hegseth a présenté la demande d'environ 1 500 milliards de dollars comme « critique » pour ne pas prendre de retard sur la Chine en autonomie, robotique et intelligence artificielle [1][2].",
      "Le détail publié par un site spécialisé : 756 milliards pour de nouvelles capacités, 100 milliards pour l'aviation, 18 milliards pour le bouclier antimissile « Golden Dome » et 10 milliards pour les navires. Le Pentagone prévoit aussi un commandement de la guerre autonome d'ici octobre 2027 [1][3].",
      "Le budget doit encore être voté par le Congrès. Un sondage cité par une association estime que près de 60 % des Américains le jugent trop grand [4]."
    ],
    "why": [
      "La première phrase à retenir : Washington demande une somme gigantesque pour ses armées, et la Chine est désignée comme la raison [1].",
      "Un tel budget peut tirer vers le haut les commandes d'armes, de drones et de puces, et pousse les autres pays à dépenser davantage. Des experts critiquent toutefois un budget décidé par le montant plutôt que par une stratégie [3]."
    ],
    "forMe": "Quand Washington dépense plus pour ses armées, ses alliés en Europe sont poussés à suivre, et ces dépenses se paient avec les impôts ou la dette.",
    "figures": [
      {
        "value": "1 500 Md$",
        "label": "budget de défense demandé par le Pentagone",
        "src": 1
      },
      {
        "value": "18 Md$",
        "label": "prévus pour le bouclier antimissile Golden Dome",
        "src": 3
      },
      {
        "value": "~60 %",
        "label": "des Américains qui jugent le budget trop grand, selon un sondage cité par Common Dreams",
        "src": 4
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "SCMP",
        "name": "South China Morning Post, « Hegseth calls US$1.5 trillion defence budget 'critical' to counter China » (2026)",
        "url": "https://scmp.com/news/us/politics/article/3370924/hegseth-calls-us15-trillion-defence-budget-critical-to-counter-china"
      },
      {
        "short": "The Star",
        "name": "The Star, « Hegseth calls US$1.5 trillion defence budget 'critical' to counter China » (23 octobre 2026)",
        "url": "https://thestar.com.my/aseanplus/aseanplus-news/2026/10/23/hegseth-calls-us15-trillion-defence-budget-critical-to-counter-china"
      },
      {
        "short": "Defence Blog",
        "name": "Defence Blog, « Hegseth calls $1.5T defense budget a 'generational down payment' »",
        "url": "https://defence-blog.com/hegseth-calls-1-5t-defense-budget-a-generational-down-payment/"
      },
      {
        "short": "Common Dreams",
        "name": "Common Dreams, « Hegseth Pentagon budget video »",
        "url": "https://www.commondreams.org/news/hegseth-pentagon-budget-video"
      }
    ]
  },
  {
    "id": "2026-10-24-kenya-dangote-oleoduc-raffinerie-lamu",
    "date": "2026-10-24",
    "region": "Afrique",
    "theme": "eco",
    "geo": [
      {
        "name": "Nairobi, Kenya",
        "label": "Kenya",
        "coords": [
          36.82,
          -1.29
        ]
      }
    ],
    "title": "Dangote s'offre un quart de l'oléoduc du Kenya, avant sa raffinerie géante",
    "summary": "L'homme le plus riche d'Afrique achète près de 25 % de Kenya Pipeline Company pour 327 millions de dollars, quelques semaines après le lancement de sa raffinerie à Lamu.",
    "points": [
      "Aliko Dangote a annoncé le 21 octobre à Londres qu'il prenait environ 25 % (24,76 % selon un journal kényan) de Kenya Pipeline Company pour 42,5 milliards de shillings, soit 327,4 millions de dollars [1][2].",
      "Les actions viennent d'investisseurs liés à l'État, dont le fonds de sécurité sociale NSSF et des caisses de retraite ; Dangote n'a pas dit laquelle de ses sociétés les achète [1][2].",
      "L'entreprise, 100 % publique, a vendu 65 % de son capital en Bourse plus tôt cette année. Les travaux de la raffinerie de 16 milliards de dollars de Lamu ont commencé le 30 septembre : 700 000 barils par jour et 1 000 mégawatts d'électricité [2][3][4]."
    ],
    "why": [
      "La première phrase à retenir : Dangote veut contrôler à la fois le raffinage et le transport du pétrole en Afrique de l'Est [1][2].",
      "Le Kenya privatise peu à peu un bien stratégique. Le projet de Lamu doit à terme produire du carburant sur place [3][4]. Dangote pourrait obtenir une place au conseil de l'oléoduc et un mot à dire sur ses investissements [2]."
    ],
    "forMe": "Si l'Afrique raffine elle-même son pétrole, elle achète moins de carburant importé : cela peut réduire la pression sur les prix mondiaux.",
    "figures": [
      {
        "value": "24,76 %",
        "label": "part de Kenya Pipeline achetée par Dangote",
        "src": 2
      },
      {
        "value": "327 M$",
        "label": "prix de la participation",
        "src": 1
      },
      {
        "value": "16 Md$",
        "label": "coût de la raffinerie de Lamu",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Africanews",
        "name": "Africanews, « Nigeria's Dangote group buys stake in Kenya's oil pipeline network » (21 octobre 2026)",
        "url": "https://www.africanews.com/2026/10/21/nigerias-dangote-group-buys-stake-in-kenyas-oil-pipeline-network/"
      },
      {
        "short": "Nation",
        "name": "Nation, « Dangote widens energy bet with 24.76pc KPC stake »",
        "url": "https://nation.africa/kenya/business/dangote-widens-energy-bet-with-24-76pc-kpc-stake-5640832"
      },
      {
        "short": "Nairametrics",
        "name": "Nairametrics, « Dangote acquires 25% stake in Kenya Pipeline Company for $327 million » (21 octobre 2026)",
        "url": "https://nairametrics.com/2026/10/21/dangote-acquires-25-stake-in-kenya-pipeline-company-for-327-million/"
      },
      {
        "short": "The Kenya Times",
        "name": "The Kenya Times, « Ruto Lamu address at the Dangote refinery groundbreaking » (30 septembre 2026)",
        "url": "https://thekenyatimes.com/latest-kenya-times-news/ruto-lamu-address-at-the-dangote-refinery-groundbreaking/"
      }
    ]
  },
  {
    "id": "2026-10-24-nigeria-ebola-premier-cas-abuja",
    "date": "2026-10-24",
    "region": "Afrique",
    "theme": "mix",
    "geo": [
      {
        "name": "Abuja, Nigeria",
        "label": "Nigeria",
        "coords": [
          7.49,
          9.08
        ]
      }
    ],
    "title": "Ebola arrive à Abuja : le Nigeria confirme son premier cas et suit 44 contacts",
    "summary": "Une femme venue d'Ouganda a été testée positive à Abuja. L'épidémie, partie du Congo en mai, touche désormais l'ouest de l'Afrique.",
    "points": [
      "Le 20 octobre, le Nigeria a confirmé à Abuja son premier cas de l'épidémie : une femme arrivée d'Ouganda, dont les symptômes ont commencé le 7 octobre et qui est isolée depuis son admission dans une clinique privée le 11 octobre [1][2].",
      "Le ministre de la Santé, Muhammad Pate, dit suivre 44 personnes qui ont été en contact avec elle. L'Ouganda répond n'avoir aucun cas actif confirmé et que la femme n'y a fait que passer en venant du Congo ; le lieu de contamination reste à établir [1][2].",
      "Le virus en cause est la souche Bundibugyo, déclarée au Congo en mai. Le Kenya a signalé neuf cas, l'Africa CDC réunit un sommet extraordinaire le 28 octobre, et l'OMS parle d'une épidémie « complexe » [1][3][4]."
    ],
    "why": [
      "La première phrase à retenir : le virus a franchi une nouvelle frontière et atteint désormais la capitale d'un pays d'Afrique de l'Ouest [2].",
      "Quand une épidémie s'étend, les contrôles dans les aéroports et les alertes de voyage peuvent freiner les déplacements et le commerce de la région. L'OMS conseille à tous les pays voisins de rester prêts [3][4]."
    ],
    "forMe": "Le risque pour la France reste faible à ce stade, mais les voyageurs doivent suivre les recommandations officielles et signaler tout symptôme au retour d'une zone touchée.",
    "figures": [
      {
        "value": "44",
        "label": "contacts du premier cas suivis par les autorités nigérianes",
        "src": 1
      },
      {
        "value": "9",
        "label": "cas signalés au Kenya",
        "src": 1
      },
      {
        "value": "28 oct.",
        "label": "sommet extraordinaire de l'Africa CDC",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "AP via NY1",
        "name": "Associated Press via NY1, « Nigeria records first Ebola case, health authorities say » (20 octobre 2026)",
        "url": "https://ny1.com/nyc/all-boroughs/ap-top-news/2026/10/20/nigeria-records-first-ebola-case-health-authorities-say"
      },
      {
        "short": "Africanews",
        "name": "Africanews, « Nigeria confirms first Ebola case as outbreak spreads across Africa » (21 octobre 2026)",
        "url": "https://www.africanews.com/2026/10/21/nigeria-confirms-first-ebola-case-as-outbreak-spreads-across-africa/"
      },
      {
        "short": "Africanews (OMS)",
        "name": "Africanews, « WHO: Africa facing 'complex' Ebola outbreak after Nigeria reports first case » (23 octobre 2026)",
        "url": "https://www.africanews.com/2026/10/23/who-africa-facing-complex-ebola-outbreak-after-nigeria-reports-first-case/"
      },
      {
        "short": "Boston 25",
        "name": "Associated Press via Boston 25 News, « Africa CDC calls an Ebola crisis summit as Nigeria records its first case »",
        "url": "https://www.boston25news.com/news/health/africa-cdc-calls-an/UTIISPM2SU4CNDI3RCU3E6KP3I/"
      }
    ]
  },
  {
    "id": "2026-10-23-afrique-du-sud-taxe-carburant-croissance",
    "date": "2026-10-23",
    "region": "Afrique",
    "theme": "mix",
    "geo": [
      {
        "name": "Pretoria, Afrique du Sud",
        "label": "Afrique du Sud",
        "coords": [
          28.19,
          -25.75
        ]
      }
    ],
    "title": "L'Afrique du Sud rogne sa taxe sur l'essence et le diesel, mais abaisse sa prévision de croissance",
    "summary": "Le ministre des Finances annonce un allègement temporaire de la taxe sur les carburants, d'environ 10 milliards de rands. Dans le même discours, le Trésor revoit sa croissance 2026 à la baisse.",
    "points": [
      "Le 21 octobre, le ministre des Finances Enoch Godongwana a présenté son budget de mi-année avec un allègement temporaire de la taxe sur les carburants, d'environ 10 milliards de rands [1][3].",
      "La taxe baisse de 1,50 rand par litre pour l'essence et de 3 rands pour le diesel du 4 novembre au 1er décembre ; des baisses plus petites durent ensuite jusqu'au 5 janvier 2027 [3][4].",
      "Le Trésor ramène sa prévision de croissance pour 2026 à 1,2 %, contre 1,6 % en février, en citant les prix du carburant, les tensions géopolitiques et le phénomène El Niño [1][5]."
    ],
    "why": [
      "La première phrase à retenir : un État choisit de renoncer à de l'argent public pour que le plein coûte moins cher, au moment même où il admet que son économie ralentit [1][4].",
      "Le coût de la mesure est compensé par de l'argent qui allait au Fonds central de l'énergie et qui retourne au budget de l'État [2]. La dette publique, elle, s'est stabilisée à 78,4 % du PIB en 2025/26 et doit redescendre à 76,6 % d'ici 2030, selon le ministre [3]."
    ],
    "forMe": "Quand le pétrole renchérit, un pays doit arbitrer entre aider les automobilistes et garder ses comptes en ordre. C'est le dilemme de tout État face à un pétrole cher.",
    "figures": [
      {
        "value": "10 Md rands",
        "label": "coût de l'allègement temporaire de la taxe sur les carburants",
        "src": 1
      },
      {
        "value": "1,2 %",
        "label": "croissance prévue en 2026 (contre 1,6 % prévu en février)",
        "src": 5
      },
      {
        "value": "78,4 %",
        "label": "dette publique en % du PIB en 2025/26, selon le ministre",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [
      "routes-maritimes"
    ],
    "sources": [
      {
        "short": "Mail & Guardian",
        "name": "Mail & Guardian, « Budget 2026: Godongwana announces R10bn in temporary fuel relief » (2026)",
        "url": "https://mg.co.za/news/south-africa/2026-10-21-budget-2026-godongwana-announces-r10bn-in-temporary-fuel-relief/"
      },
      {
        "short": "EWN",
        "name": "EWN, « MTBPS 2026: Treasury cuts 2026 growth forecast to 1.2%, unveils R5.1bn for GBV and temporary fuel relief » (2026)",
        "url": "https://www.ewn.co.za/mtbps-2026-treasury-cuts-2026-growth-forecast-to-12-unveils-r51bn-for-gbv-and-temporary-fuel-relief"
      },
      {
        "short": "Daily Maverick",
        "name": "Daily Maverick, « Rising revenue allows for fuel levy relief, El Niño readiness in Godongwana's mini-budget » (2026)",
        "url": "https://www.dailymaverick.co.za/article/2026-10-21-rising-revenue-allows-for-fuel-levy-relief-el-nino-readiness-in-godongwanas-mini-budget/"
      },
      {
        "short": "Mail & Guardian",
        "name": "Mail & Guardian, « Fuel relief buys time but growth runs on empty » (2026)",
        "url": "https://mg.co.za/news/south-africa/2026-10-22-fuel-relief-buys-time-but-growth-runs-on-empty/"
      },
      {
        "short": "Africa Insider",
        "name": "Africa Insider, « 2026 Medium-Term Budget: Fuel levy cuts, debt and key changes you need to know » (2026)",
        "url": "https://www.africaninsider.com/business/2026-medium-term-budget-fuel-levy-cuts-debt-and-key-changes-you-need-to-know/"
      }
    ]
  },
  {
    "id": "2026-10-23-senegal-greve-generale-senelec",
    "date": "2026-10-23",
    "region": "Afrique",
    "theme": "eco",
    "geo": [
      {
        "name": "Dakar, Sénégal",
        "label": "Sénégal",
        "coords": [
          -17.47,
          14.69
        ]
      }
    ],
    "title": "Au Sénégal, une grève générale de trois jours touche jusqu'à l'électricien public",
    "summary": "Un front de syndicats arrête le travail les 21, 22 et 23 octobre. Chez Senelec, ils refusent la découpe de l'entreprise en filiales et réclament que l'État paie ce qu'il lui doit.",
    "points": [
      "Le Front syndical pour la défense du travail (FSDT) a lancé une grève générale de 72 heures, les 21, 22 et 23 octobre, dans le public, le privé et l'informel [1].",
      "À Senelec, l'électricien public, le syndicat SUTELEC rejoint le mouvement. Il refuse que l'entreprise soit divisée en filiales, réclame une prime (la PRAB, près de 3 milliards de francs CFA selon les syndicats) et demande que l'État règle une dette que les syndicats chiffrent à plus de 600 milliards de francs CFA [1][3].",
      "La direction de Senelec dit n'avoir reçu aucun préavis formel et appelle au dialogue [2]. Début octobre, le ministre de l'Énergie avait indiqué que l'entreprise deviendrait une société holding (maison mère) d'ici fin 2027 [1]."
    ],
    "why": [
      "La première phrase à retenir : quand l'électricité d'un pays est au cœur d'un bras de fer entre syndicats et État, c'est toute l'économie qui peut ralentir [1][2].",
      "Les chiffres de la dette de l'État envers Senelec viennent des syndicats et n'ont pas été confirmés par une source officielle. L'ampleur réelle de la grève n'est pas confirmée par une source indépendante [1]."
    ],
    "forMe": "Une entreprise d'électricité en difficulté financière, c'est des coupures possibles et des investissements retardés. Cela touche aussi les entreprises françaises ou européennes qui produisent ou investissent au Sénégal.",
    "figures": [
      {
        "value": "72 h",
        "label": "durée de la grève générale, du 21 au 23 octobre",
        "src": 1
      },
      {
        "value": "600 Md FCFA",
        "label": "dette de l'État envers Senelec selon les syndicats (non confirmé)",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Financial Afrik",
        "name": "Financial Afrik, « Sénégal : à la Senelec, trois jours de grève dans le cadre d'une grève générale du FSDT » (2026)",
        "url": "https://www.financialafrik.com/2026/10/19/senegal-a-la-senelec-trois-jours-de-greve-dans-le-cadre-dune-greve-generale-du-fsdt/"
      },
      {
        "short": "Senego",
        "name": "Senego, « Senelec : la direction dit n'avoir reçu aucun préavis formel et appelle au dialogue » (2026)",
        "url": "https://senego.com/senelec-la-direction-dit-navoir-recu-aucun-preavis-formel-et-appelle-au-dialogue_2015412.html"
      },
      {
        "short": "Senego",
        "name": "Senego, « Senelec : le SUTELEC rejoint la grève de 72 heures du FSDT » (2026)",
        "url": "https://senego.com/senelec-le-sutelec-rejoint-la-greve-de-72-heures-du-fsdt_2015028.html"
      }
    ]
  },
  {
    "id": "2026-10-23-badr-pacte-defense-qatar-pakistan-turquie-indonesie",
    "date": "2026-10-23",
    "region": "Moyen-Orient",
    "theme": "geo",
    "geo": [
      {
        "name": "Doha, Qatar",
        "label": "Qatar",
        "coords": [
          51.53,
          25.29
        ]
      }
    ],
    "title": "Qatar, Pakistan, Turquie et Indonésie mettent leurs usines d'armement en commun",
    "summary": "Quatre pays de régions très différentes signent à Doha le pacte « Badr » pour produire et former ensemble. Ce n'est pas une alliance militaire : personne ne promet de défendre l'autre.",
    "points": [
      "Le 21 octobre à Doha, le Qatar, le Pakistan, la Turquie et l'Indonésie ont signé le protocole d'accord « Badr » sur l'industrie de défense [1][2].",
      "Il prévoit de la production militaire commune, des formations techniques et militaires communes et de la recherche, pour que chaque pays puisse utiliser les capacités de défense des trois autres [1].",
      "Les comptes rendus insistent : c'est une coopération industrielle et non un pacte de défense mutuelle, distinct de l'accord séparé entre la Turquie, le Pakistan et l'Arabie saoudite. Le texte complet n'est pas public [1][4]."
    ],
    "why": [
      "La première phrase à retenir : quatre pays veulent produire des armes ensemble plutôt que seulement en acheter, en partageant technologies et chaînes d'approvisionnement [3][4].",
      "L'agence turque des achats de défense (SSB) explique que le pacte transforme des projets déjà existants entre deux pays en un cadre à quatre. Parmi eux : des drones et blindés turcs pour le Qatar, des corvettes construites pour la marine pakistanaise et un char développé avec l'Indonésie [3]. Le ministre qatari a aussi dit que le Qatar annoncerait bientôt un site de production de défense [1]."
    ],
    "forMe": "Quand de nouveaux pays fabriquent leurs armes eux-mêmes, le marché mondial change : moins de commandes pour les vendeurs traditionnels, plus de concurrence, et des budgets de défense qui se tournent vers d'autres fournisseurs.",
    "figures": [
      {
        "value": "4",
        "label": "pays signataires : Qatar, Pakistan, Turquie, Indonésie",
        "src": 1
      },
      {
        "value": "21 oct.",
        "label": "date de signature à Doha du protocole « Badr »",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "AzerNews",
        "name": "AzerNews, « Türkiye, Qatar, Pakistan and Indonesia sign 'Badr' defense cooperation agreement » (2026)",
        "url": "https://www.azernews.az/region/265954.html"
      },
      {
        "short": "TRT World",
        "name": "TRT World, « Türkiye, Qatar, Indonesia and Pakistan sign 'Badr' defence cooperation accord » (2026)",
        "url": "https://www.trtworld.com/article/57751af983b2"
      },
      {
        "short": "A News",
        "name": "A News, « Türkiye, Qatar, Pakistan and Indonesia to ink defense industry pact » (2026)",
        "url": "https://www.anews.com.tr/world/2026/10/20/turkiye-qatar-pakistan-and-indonesia-to-ink-defense-industry-pact"
      },
      {
        "short": "IR-IA",
        "name": "IR-IA, « Turkiye, Qatar, Pakistan and Indonesia sign Badr defense industry cooperation pact » (2026)",
        "url": "https://www.ir-ia.com/news/turkiye-qatar-pakistan-and-indonesia-sign-badr-defense-industry-cooperation-pact/"
      }
    ]
  },
  {
    "id": "2026-10-23-canada-turquie-partenariat-strategique",
    "date": "2026-10-23",
    "region": "Amériques",
    "theme": "mix",
    "geo": [
      {
        "name": "Ottawa, Canada",
        "label": "Canada",
        "coords": [
          -75.7,
          45.42
        ]
      },
      {
        "name": "Ankara, Turquie",
        "label": "Ankara",
        "coords": [
          32.86,
          39.93
        ]
      }
    ],
    "title": "Le Canada cherche en Turquie du gaz, du nucléaire et des armes pour moins dépendre des États-Unis",
    "summary": "À Ankara, le Premier ministre Mark Carney et Recep Tayyip Erdoğan lancent un « partenariat stratégique » avec un plan d'action de trois ans. Des négociations de libre-échange s'ouvrent le mois prochain.",
    "points": [
      "Le 22 octobre à Ankara, Mark Carney et Recep Tayyip Erdoğan ont lancé le partenariat stratégique Canada-Turquie, bâti sur quatre piliers : commerce et investissement, défense et sécurité, énergie, liens entre les peuples, avec un plan d'action de trois ans [1][2].",
      "Ils veulent avancer sur le gaz naturel liquéfié, le nucléaire civil, les énergies renouvelables et les minerais critiques. Carney a dit vouloir vendre à la Turquie des réacteurs Candu, des minerais critiques et du gaz liquéfié [1].",
      "Les agences de crédit à l'exportation des deux pays, EDC et Türk Eximbank, signent un accord pour des projets communs dans des pays tiers, et les négociations d'un accord de libre-échange commenceront le mois prochain [1]."
    ],
    "why": [
      "La première phrase à retenir : le Canada cherche d'autres clients et partenaires pour réduire sa dépendance aux États-Unis, et il se tourne vers la Turquie [4].",
      "Avant la visite, la presse annonçait de grands contrats. Les textes officiels parlent surtout d'engagements à coopérer, et aucun contrat précis sur un réacteur n'y figure [1][3]."
    ],
    "forMe": "Quand deux alliés de l'OTAN se rapprochent sur le gaz et le nucléaire, cela dessine de nouvelles routes de l'énergie et de nouveaux marchés d'armement, qui touchent aussi les prix en Europe.",
    "figures": [
      {
        "value": "4",
        "label": "piliers du partenariat : commerce, défense, énergie, liens entre les peuples",
        "src": 1
      },
      {
        "value": "3 ans",
        "label": "durée du plan d'action commun",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "droits-de-douane"
    ],
    "sources": [
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « Carney, Erdogan launch 'strong and resilient' Canada-Türkiye partnership » (2026)",
        "url": "https://www.aljazeera.com/news/2026/10/22/carney-and-erdogan-launch-strong-and-resilient-canada-turkiye-partnership"
      },
      {
        "short": "Premier ministre du Canada",
        "name": "Cabinet du Premier ministre du Canada, « Statement by Prime Minister Carney and President Recep Tayyip Erdoğan » (2026)",
        "url": "https://www.pm.gc.ca/en/news/statements/2026/10/22/statement-prime-minister-carney-and-president-recep-tayyip-erdogan"
      },
      {
        "short": "The Globe and Mail",
        "name": "The Globe and Mail, « Canada, Turkey announce strategic partnership to deepen energy, defence and trade ties » (2026)",
        "url": "https://www.theglobeandmail.com/canada/article-canada-turkey-carney-strategic-partnership-defence-energy-trade/"
      },
      {
        "short": "The Print",
        "name": "The Print, « Canada, Turkey sign 'strategic partnership' as part of Carney push to cut reliance on US » (2026)",
        "url": "https://theprint.in/world/canada-turkey-sign-strategic-partnership-as-part-of-carney-push-to-cut-reliance-on-us/3079179/"
      }
    ]
  },
  {
    "id": "2026-10-23-equateur-colombie-petrole-oleoducs-reprise",
    "date": "2026-10-23",
    "region": "Amériques",
    "theme": "mix",
    "geo": [
      {
        "name": "Quito, Équateur",
        "label": "Équateur",
        "coords": [
          -78.47,
          -0.18
        ]
      },
      {
        "name": "Bogotá, Colombie",
        "label": "Colombie",
        "coords": [
          -74.07,
          4.71
        ]
      }
    ],
    "title": "L'Équateur laisse de nouveau passer le pétrole colombien dans ses oléoducs, après neuf mois de guerre commerciale",
    "summary": "Petroecuador reprend le transport du brut colombien, interrompu depuis janvier. Les deux voisins s'étaient affrontés à coups de droits de douane.",
    "points": [
      "Petroecuador a repris le transport du brut d'Ecopetrol et d'Amerisur dans ses oléoducs, après une suspension commencée en janvier [1][3].",
      "Les livraisons avaient été arrêtées le 23 janvier, après une décision qui faisait passer le tarif de transport du pétrole étranger sur l'oléoduc SOTE de 3 à 30 dollars [1][5].",
      "L'Équateur transporte en moyenne 11 900 barils par jour de brut colombien, ce qui doit lui rapporter environ 1,4 million de dollars par mois, soit 16,8 millions de dollars par an [1][2]."
    ],
    "why": [
      "La première phrase à retenir : un oléoduc peut devenir une arme commerciale, et la réouverture marque la fin d'une bataille entre deux voisins andins [1][3].",
      "Le conflit a aussi touché les droits de douane : l'Équateur a annoncé des droits de 30 % sur les produits colombiens, et la Colombie a riposté [4]. Après des mois de tarifs et une décision de la Communauté andine, Quito et Bogotá se parlent de nouveau [4]."
    ],
    "forMe": "Les routes du pétrole ne passent pas que par de grands détroits : un tuyau entre deux petits pays peut aussi bloquer des exportations. Cela rappelle pourquoi les prix de l'énergie dépendent de la politique.",
    "figures": [
      {
        "value": "11 900",
        "label": "barils par jour de brut colombien transportés en moyenne",
        "src": 1
      },
      {
        "value": "16,8 M$",
        "label": "revenu annuel attendu pour l'Équateur",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [
      "droits-de-douane"
    ],
    "sources": [
      {
        "short": "Vanguardia",
        "name": "Vanguardia, « Ecuador reinicia el paso de petróleo colombiano por oleoductos tras suspensión por aranceles » (2026)",
        "url": "https://www.vanguardia.com/colombia/2026/10/17/ecuador-reinicia-el-paso-de-petroleo-colombiano-por-oleoductos-tras-suspension-por-aranceles/"
      },
      {
        "short": "El Universo",
        "name": "El Universo, « Ecuador retoma el transporte de crudo colombiano y prevé ingresos por $ 16,8 millones anuales » (2026)",
        "url": "https://www.eluniverso.com/economia/produccion/reactivacion-transporte-crudo-oleoductos-sote-osla-ingresos-anuales-168-millones-colombia-ecuador-2026-nota/"
      },
      {
        "short": "Portafolio",
        "name": "Portafolio, « Ecuador reanuda transporte de petróleo colombiano, tras nueve meses de suspensión por guerra arancelaria » (2026)",
        "url": "https://www.portafolio.co/energia/ecuador-reanuda-transporte-de-petroleo-colombiano-tras-nueve-meses-de-suspension-por-guerra-arancelaria-504648"
      },
      {
        "short": "Rio Times",
        "name": "The Rio Times, « Ecuador and Its Neighbours in the Andes » (2026)",
        "url": "https://www.riotimesonline.com/ecuador-in-andes-explained-2026/"
      },
      {
        "short": "France 24",
        "name": "France 24, « Ecuador sube un 900% la tarifa de transporte del crudo colombiano y crece la guerra arancelaria » (2026)",
        "url": "https://www.france24.com/es/am%C3%A9rica-latina/20260127-ecuador-sube-un-900-la-tarifa-de-transporte-del-crudo-colombiano-en-medio-de-la-disputa-arancelaria"
      }
    ]
  },
  {
    "id": "2026-10-23-taiwan-micron-greve-puces-memoire",
    "date": "2026-10-23",
    "region": "Asie",
    "theme": "eco",
    "geo": [
      {
        "name": "Taoyuan, Taïwan",
        "label": "Taïwan",
        "coords": [
          121.3,
          24.99
        ]
      }
    ],
    "title": "À Taïwan, les ouvriers de Micron, un géant des puces d'IA, se mettent en grève pour partager les bénéfices",
    "summary": "Le syndicat de l'usine de Taoyuan a annoncé un arrêt de travail jeudi 22 octobre. Il demande un partage des bénéfices permanent. L'usine fabrique des mémoires pour l'intelligence artificielle.",
    "points": [
      "Le syndicat de Micron à Taoyuan avait annoncé qu'il ferait grève jeudi 22 octobre, en soutien au syndicat de Taichung qui négocie avec la direction [1].",
      "Un bulletin cite Nikkei Asia : les salariés ont quitté l'usine à 9 h pour un arrêt de 24 heures [3].",
      "Au vote, 1 994 adhérents, soit 99 % des votants, ont approuvé la grève. Micron avait proposé une prime de 1 million de dollars taïwanais (environ 31 400 dollars) par salarié, mais le syndicat veut un mécanisme permanent de partage des profits [1]."
    ],
    "why": [
      "La première phrase à retenir : une grève dans une usine de mémoires, ces puces au cœur des serveurs d'intelligence artificielle, peut peser sur toute la chaîne mondiale [1].",
      "L'administration du parc scientifique du centre de Taïwan a averti que la grève pourrait toucher l'économie du pays, et le président Lai Ching-te a appelé les deux camps à négocier « sincèrement » [1]. La durée de la grève n'avait pas été annoncée à la date du 20 octobre [1]."
    ],
    "forMe": "Les mémoires de Micron (DRAM et HBM) se retrouvent dans les serveurs d'IA, les ordinateurs et les téléphones. Un blocage durable pourrait rendre certains composants plus rares et plus chers.",
    "figures": [
      {
        "value": "99 %",
        "label": "des votants (1 994 adhérents) pour la grève",
        "src": 1
      },
      {
        "value": "1 M TWD",
        "label": "prime proposée par Micron (≈ 31 400 $), jugée insuffisante par le syndicat",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "semi-conducteurs"
    ],
    "sources": [
      {
        "short": "The Star",
        "name": "The Star (Reuters), « Micron union in Taiwan to launch strike as bonus dispute escalates » (2026)",
        "url": "https://www.thestar.com.my/tech/tech-news/2026/10/20/micron-union-in-taiwan-to-launch-strike-as-bonus-dispute-escalates"
      },
      {
        "short": "The Standard",
        "name": "The Standard (Hong Kong), « Micron union in Taiwan to launch strike as bonus dispute escalates » (2026)",
        "url": "https://www.thestandard.com.hk/china/article/345911/Micron-union-in-Taiwan-to-launch-strike-as-bonus-dispute-escalates"
      },
      {
        "short": "AI Weekly",
        "name": "AI Weekly, « AI News for October 22, 2026 — Daily Edition » (2026)",
        "url": "https://aiweekly.co/ai-news-today/edition/2026-10-22"
      }
    ]
  },
  {
    "id": "2026-10-23-pakistan-afghanistan-commerce-frontiere-fermee",
    "date": "2026-10-23",
    "region": "Asie",
    "theme": "eco",
    "geo": [
      {
        "name": "Torkham, frontière Pakistan-Afghanistan",
        "label": "Pakistan",
        "coords": [
          71.09,
          34.11
        ]
      }
    ],
    "title": "Pakistan-Afghanistan : un an de frontière fermée, et le commerce entre les deux pays s'effondre de 74 %",
    "summary": "Le Pakistan a stoppé tout commerce avec l'Afghanistan en octobre 2025. Les échanges sont tombés de 1,3 milliard à 358 millions de dollars, et les exportateurs pakistanais perdent des millions chaque mois.",
    "points": [
      "Selon les données officielles pakistanaises publiées le 19 octobre, les échanges avec l'Afghanistan ont chuté d'environ 74 % en 2025-26, de 1,3 milliard à environ 358 millions de dollars [1][3].",
      "Le Pakistan a stoppé toute activité commerciale avec l'Afghanistan depuis le 10 octobre 2025 ; le point de passage de Torkham est fermé depuis des affrontements meurtriers [2][3].",
      "Les exportateurs pakistanais perdent environ 50 milliards de roupies (≈ 177 millions de dollars) par mois, selon Arab News. Un cessez-le-feu a été annoncé le 19 octobre, mais le commerce reste suspendu [2]."
    ],
    "why": [
      "La première phrase à retenir : une frontière fermée coûte cher aux deux côtés, et le Pakistan risque de perdre durablement les marchés afghan et d'Asie centrale [2].",
      "Les responsables pakistanais disent que les routes commerciales resteront fermées tant que les problèmes de sécurité ne seront pas réglés [2]. Le cessez-le-feu n'est signalé que par une seule source, il est donc à prendre avec prudence [2]."
    ],
    "forMe": "Quand un grand couloir commercial se ferme, les échanges se déplacent vers d'autres routes plus longues et plus chères. C'est un exemple de plus de la fragilité des routes de l'Asie centrale.",
    "figures": [
      {
        "value": "−74 %",
        "label": "baisse des échanges Pakistan-Afghanistan en 2025-26",
        "src": 1
      },
      {
        "value": "358 M$",
        "label": "échanges en 2025-26 (1,3 Md$ l'année d'avant)",
        "src": 3
      },
      {
        "value": "177 M$",
        "label": "pertes mensuelles estimées des exportateurs pakistanais",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Minute Mirror",
        "name": "Minute Mirror, « Pakistan-Afghanistan trade plunges 74% as crossings stay shut » (2026)",
        "url": "https://minutemirror.com.pk/pakistan-afghanistan-trade-plunges-74-647312/"
      },
      {
        "short": "Arab News Pakistan",
        "name": "Arab News Pakistan, « Industry leaders say prolonged shutdown risks long-term loss of Afghan, Central Asian markets » (2026)",
        "url": "https://www.arabnews.pk/node/2628600/pakistan"
      },
      {
        "short": "UNI",
        "name": "UNI, « Af-Pak trade: drastic decline » (2026)",
        "url": "https://www.uniindia.com/world/af-pak-trade-drastic-decline/219503"
      }
    ]
  },
  {
    "id": "2026-10-23-bulgarie-deficit-eurostat-doutes-euro",
    "date": "2026-10-23",
    "region": "Europe",
    "theme": "eco",
    "geo": [
      {
        "name": "Sofia, Bulgarie",
        "label": "Bulgarie",
        "coords": [
          23.32,
          42.7
        ]
      }
    ],
    "title": "Bulgarie : Eurostat relève le déficit de 2025 à 4 % et doute des chiffres du nouveau pays de l'euro",
    "summary": "L'office européen de statistiques a revu à la hausse le déficit bulgare de 2025 et pose des questions sur la qualité des données. La Bulgarie est déjà sous procédure européenne pour déficit excessif.",
    "points": [
      "Le 21 octobre, Eurostat a relevé de 0,5 point le déficit public bulgare de 2025, à 4 % du PIB, et a mis en doute la qualité des données transmises par Sofia [1].",
      "L'Union européenne a ouvert une procédure pour déficit excessif contre la Bulgarie sept mois après son entrée dans la zone euro [2].",
      "Le Conseil de l'UE avait demandé à la Bulgarie de présenter des mesures correctives avant le 15 octobre 2026 [3]. On ne sait pas encore si elle l'a fait."
    ],
    "why": [
      "La première phrase à retenir : un pays qui vient d'entrer dans l'euro se voit reprocher à la fois un déficit trop grand et des chiffres peu fiables [1][2].",
      "Dans la zone euro, les règles budgétaires sont partagées : un déficit jugé excessif peut déclencher une procédure et des demandes de corrections [2][3]."
    ],
    "forMe": "Quand un membre de la zone euro dérape, cela concerne tous ceux qui partagent la monnaie : la confiance des marchés et les règles budgétaires se discutent ensemble.",
    "figures": [
      {
        "value": "4 %",
        "label": "déficit public bulgare 2025 selon Eurostat (révisé de +0,5 point)",
        "src": 1
      },
      {
        "value": "7 mois",
        "label": "entre l'entrée dans l'euro et l'ouverture de la procédure",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "SeeNews",
        "name": "SeeNews, « EU revises Bulgaria's 2025 budget gap to 4% of GDP » (2026)",
        "url": "https://seenews.com/news/eu-revises-bulgarias-2025-budget-gap-to-4-percent-of-gdp-1303438"
      },
      {
        "short": "EU Alive",
        "name": "EU Alive, « EU opens excessive deficit procedure against Bulgaria seven months after eurozone accession » (2026)",
        "url": "https://eualive.net/eu-opens-excessive-deficit-procedure-against-bulgaria-as-new-budget-comes-under-scrutiny/"
      },
      {
        "short": "Conseil de l'UE",
        "name": "Conseil de l'Union européenne, « Excessive deficit procedure » (2026)",
        "url": "https://www.consilium.europa.eu/en/policies/excessive-deficit-procedure/"
      }
    ]
  },
  {
    "id": "2026-10-23-kazakhstan-azerbaidjan-couloir-du-milieu-rail",
    "date": "2026-10-23",
    "region": "Asie",
    "theme": "eco",
    "geo": [
      {
        "name": "Astana, Kazakhstan",
        "label": "Kazakhstan",
        "coords": [
          71.43,
          51.17
        ]
      },
      {
        "name": "Bakou, Azerbaïdjan",
        "label": "Azerbaïdjan",
        "coords": [
          49.87,
          40.41
        ]
      }
    ],
    "title": "Kazakhstan et Azerbaïdjan s'accordent sur un « couloir du milieu » plus simple entre la Chine et l'Europe",
    "summary": "Les deux pays signent un accord pour que trains et bateaux sur la route Chine-Europe via la mer Caspienne se coordonnent mieux. D'autres pays pourront les rejoindre.",
    "points": [
      "Le 20 octobre, le Kazakhstan et l'Azerbaïdjan ont signé un accord pour simplifier l'exploitation ferroviaire du « couloir du milieu », la route de marchandises entre la Chine et l'Europe [1][2].",
      "Les deux pays s'engagent sur une capacité minimale garantie, dont le chiffre n'est pas publié, et sur la priorité donnée aux navires de l'autre dans leurs ports [1][2].",
      "L'accord prévoit un document de transport unique pour le trajet train-bateau, et d'autres pays pourront le rejoindre [1][2]."
    ],
    "why": [
      "La première phrase à retenir : un seul papier et des priorités garanties, c'est ce qui rend une route de transport vraiment utilisable pour les entreprises [1].",
      "Le montant garanti n'est pas public, donc on ne peut pas encore mesurer l'effet sur les volumes [1]."
    ],
    "forMe": "Plus cette route est simple et prévisible, plus elle peut servir d'alternative aux routes maritimes, aujourd'hui perturbées par les tensions autour d'Ormuz.",
    "figures": [
      {
        "value": "1",
        "label": "document de transport unique prévu pour le trajet train-bateau",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "routes-maritimes"
    ],
    "sources": [
      {
        "short": "RailFreight",
        "name": "RailFreight, « New agreement standardises Middle Corridor operations, more countries can join » (2026)",
        "url": "https://www.railfreight.com/railfreight/2026/10/20/new-agreement-standardises-middle-corridor-operations-more-countries-can-join/"
      },
      {
        "short": "Qazinform",
        "name": "Qazinform, « Kazakhstan, Azerbaijan sign agreement on Middle Corridor development » (octobre 2026)",
        "url": "https://qazinform.com/news/kazakhstan-azerbaijan-sign-agreement-on-middle-corridor-development-9decf1"
      }
    ]
  },
  {
    "id": "2026-10-22-arabie-saoudite-diplomates-americains-partent",
    "date": "2026-10-22",
    "region": "Moyen-Orient",
    "theme": "geo",
    "geo": [
      {
        "name": "Riyad, Arabie saoudite",
        "label": "Riyad",
        "coords": [
          46.68,
          24.71
        ]
      }
    ],
    "title": "Les États-Unis font partir leurs diplomates non essentiels d'Arabie saoudite, sous les frappes des Houthis",
    "summary": "Washington ordonne aux employés non urgents de son gouvernement et à leurs familles de quitter le royaume. Les attaques des Houthis (rebelles du Yémen) touchent des aéroports et un champ pétrolier.",
    "points": [
      "Le Département d'État a ordonné le 21 octobre le départ des employés non urgents du gouvernement américain et de leurs familles en Arabie saoudite, uniquement dans ce pays [1][3].",
      "Selon Reuters, l'ordre suit des attaques : au moins un mort et huit blessés à l'aéroport civil de Dammam, et deux morts dans une attaque de drone sur un champ pétrolier ; plus tôt ce mois-ci, une frappe sur l'aéroport de Riyad avait fait 12 morts et plus de 300 blessés [1][2].",
      "Quatre responsables américains disent que les représentations d'autres pays du Golfe vont aussi demander à des familles de partir [1]. Les employés américains doivent demander une autorisation spéciale pour utiliser un aéroport du pays [3]."
    ],
    "why": [
      "La première phrase à retenir : quand un pays retire ses diplomates, il dit que la situation de sécurité est pire que prévu, y compris dans un allié proche et grand producteur de pétrole [1][2].",
      "L'ambassade tournait déjà avec peu de monde depuis des mois, et l'armée américaine réduit discrètement sa présence dans la région, selon CBS [2][4]. Pour l'économie, un Golfe plus risqué veut dire des assurances plus chères et un pétrole plus nerveux."
    ],
    "forMe": "Le Golfe fournit une grande part du pétrole du monde. Si les voyages, les aéroports ou les champs pétroliers y sont menacés, le prix de l'essence peut remonter même en France.",
    "figures": [
      {
        "value": "12",
        "label": "morts lors de la frappe de début octobre sur l'aéroport de Riyad (plus de 300 blessés)",
        "src": 2
      },
      {
        "value": "8",
        "label": "blessés à l'aéroport de Dammam, avec au moins un mort",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "ABC News",
        "name": "ABC News (Australie), « US orders embassy staff, families to leave Saudi Arabia amid Houthi strikes » (22 oct. 2026)",
        "url": "https://www.abc.net.au/news/2026-10-22/us-diplomats-to-leave-saudi-arabia-amid-houthi-strikes/107295684"
      },
      {
        "short": "CBS News",
        "name": "CBS News, « U.S. ordering some government staff to depart Saudi Arabia, reducing military footprint in Middle East » (oct. 2026)",
        "url": "https://www.cbsnews.com/news/us-saudi-arabia-ordered-departure-houthis/"
      },
      {
        "short": "Washington Times",
        "name": "The Washington Times, « Non-essential U.S. personnel, families told to leave Saudi Arabia amid growing Houthi strikes » (21 oct. 2026)",
        "url": "https://www.washingtontimes.com/news/2026/oct/21/non-essential-us-personnel-families-told-leave-saudi-arabia-amid/"
      },
      {
        "short": "NewsNation",
        "name": "NewsNation, « US orders diplomats to leave Saudi Arabia » (oct. 2026)",
        "url": "https://www.newsnationnow.com/world/us-orders-diplomats-leave-saudi-arabia/"
      },
      {
        "short": "Al-Monitor (Reuters)",
        "name": "Al-Monitor (dépêche Reuters), « Saudi says it intercepted Houthi missiles fired south, test years-long truce » (juil. 2026)",
        "url": "https://www.al-monitor.com/originals/2026/07/saudi-says-it-intercepted-houthi-missiles-fired-south-test-years-long-truce"
      },
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « Yemen fighting expands as Houthis attack Saudi airport: What to know » (11 oct. 2026)",
        "url": "https://www.aljazeera.com/news/2026/10/11/yemen-fighting-expands-as-houthis-attack-saudi-airport-what-to-know"
      },
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « Saudi Arabia says 12 killed, 300 wounded in Houthi attack on Riyadh airport » (10 oct. 2026)",
        "url": "https://www.aljazeera.com/amp/news/2026/10/10/attack-on-airport-in-saudi-capital-riyadh-leaves-several-injured"
      },
      {
        "short": "Département d'État",
        "name": "U.S. Department of State, Foreign Affairs Manual, 3 FAM 3770 (départs autorisés et ordonnés)",
        "url": "https://fam.state.gov/fam/03fam/03fam3770.html"
      },
      {
        "short": "US Navy",
        "name": "U.S. Naval Forces Central Command, fiche « Departure » (allocations en cas de départ autorisé ou ordonné)",
        "url": "https://www.cusnc.navy.mil/Portals/17/Departure%20Flyer%20%2811%20x%208_5%20in%29.pdf"
      },
      {
        "short": "The National",
        "name": "The National, « From fragile truce to new Houthi threats: how Yemen crisis reignited » (13 juil. 2026)",
        "url": "https://www.thenationalnews.com/news/mena/2026/07/13/from-fragile-truce-to-new-houthi-threats-how-yemen-crisis-reignited/"
      },
      {
        "short": "Hürriyet Daily News",
        "name": "Hürriyet Daily News, « Saudi Arabia faces further Houthi attacks after calls for halt » (oct. 2026)",
        "url": "https://www.hurriyetdailynews.com/saudi-arabia-faces-further-houthi-attacks-after-calls-for-halt-228002"
      }
    ],
    "deep": {
      "context": {
        "title": "Quatre ans de trêve, puis la rechute",
        "paragraphs": [
          "Depuis le printemps 2022, une trêve informelle tenait entre l'Arabie saoudite et les Houthis, après des années de guerre au Yémen et des attaques houthies contre des installations énergétiques saoudiennes [5]. Le 13 juillet 2026, les Houthis ont tiré des missiles vers l'aéroport d'Abha, dans le sud du royaume, en accusant Riyad d'avoir bombardé un aéroport qu'ils contrôlent. C'était la première attaque revendiquée contre le royaume depuis le début de la trêve [5].",
          "Le contexte s'était déjà tendu au sud du Yémen : fin 2025, un mouvement séparatiste soutenu par les Émirats arabes unis a pris le contrôle d'une grande partie du sud du pays [5]. En janvier 2026, les Émirats ont mis fin à leur présence antiterroriste au Yémen après une frappe saoudienne sur des véhicules de leurs forces [10]. Les deux alliés d'hier ne jouent donc plus la même partie.",
          "L'escalade a culminé le 10 octobre : la frappe sur l'aéroport King Khalid de Riyad était la troisième de la semaine contre cet aéroport. Parmi les 12 morts figuraient quatre Saoudiens et des victimes de sept autres nationalités, dont un Américain [7]. La coalition menée par Riyad a parlé de crime de guerre ; les Houthis, eux, n'ont pas revendiqué cette frappe [6]."
        ]
      },
      "explainer": {
        "title": "« Personnel non essentiel » : ce que dit vraiment l'ordre",
        "text": "Le Département d'État a deux crans avant la fermeture d'une ambassade. Le premier, le « départ autorisé », est volontaire : les employés et leurs familles peuvent partir aux frais de l'État, mais ceux qui le veulent restent [8]. Le second, choisi ici, est le « départ ordonné » : il est obligatoire et sert à réduire le nombre d'Américains présents sur place [8]. Les familles reçoivent alors des aides pour se loger et vivre ailleurs le temps de la crise [9]. L'ambassade, elle, reste ouverte : seuls les postes jugés indispensables (sécurité, consulat d'urgence, direction) restent pourvus. Passer d'un cran à l'autre est donc un signal : Washington juge que le risque ne se limite plus à quelques incidents."
      },
      "watch": {
        "title": "Ce qui peut se passer ensuite",
        "items": [
          {
            "when": "Dans les prochains jours",
            "what": "Selon quatre responsables américains, d'autres représentations dans le Golfe vont aussi demander à des familles de partir : la mesure pourrait s'étendre au-delà du royaume [1]."
          },
          {
            "when": "La riposte saoudienne",
            "what": "Après la frappe du 10 octobre, la coalition a promis de répondre « fermement » [7]. Une riposte d'ampleur pourrait relancer les tirs vers les villes saoudiennes."
          },
          {
            "when": "Les aéroports hors du conflit ?",
            "what": "Les Houthis se disent prêts à des mesures réciproques pour tenir les aéroports, les ports et les sites humanitaires à l'écart des combats [7]. Un accord limité de ce type serait un premier pas vers une désescalade."
          },
          {
            "when": "Les sites pétroliers",
            "what": "Les Houthis affirment avoir visé deux installations de Saudi Aramco, dont le complexe de Khurais au sud-est de Riyad ; ces affirmations n'ont pas été vérifiées [11]. Une attaque confirmée sur le pétrole serait suivie de près par les marchés."
          }
        ]
      }
    }
  },
  {
    "id": "2026-10-22-liban-qatar-centrales-electriques-gnl",
    "date": "2026-10-22",
    "region": "Moyen-Orient",
    "theme": "mix",
    "geo": [
      {
        "name": "Beyrouth, Liban",
        "label": "Liban",
        "coords": [
          35.5,
          33.89
        ]
      }
    ],
    "title": "Le Qatar propose au Liban deux centrales électriques et vingt ans de gaz pour sortir de ses coupures de courant",
    "summary": "Un projet de plan vu par Reuters prévoit deux centrales construites en trois ans. Rien n'est encore signé : les deux gouvernements doivent l'approuver.",
    "points": [
      "Le projet, vu par Reuters, prévoit que le Qatar construise deux centrales à gaz, à Deir Ammar (nord) et à Zahrani (sud), de 825 mégawatts chacune, en trois ans [1][2].",
      "QatarEnergy fournirait le gaz naturel liquéfié pendant 20 ans, par un navire-terminal flottant et par le gazoduc arabe qui passe par la Syrie. Le plan ajoute 800 MW de solaire et 440 MW d'éolien [1][2].",
      "Le financement viendrait de capitaux privés et non de l'argent public libanais ; les paiements restent à négocier. Le Premier ministre Nawaf Salam veut présenter le plan au gouvernement bientôt [1][3]."
    ],
    "why": [
      "La première phrase à retenir : le Liban, ruiné et souvent dans le noir, pourrait voir son électricité financée par le Qatar plutôt que par son État [1][3].",
      "C'est un projet de plan, pas un contrat : il doit être approuvé par Beyrouth et Doha, et les plans électriques libanais ont souvent buté sur les tarifs et la gestion de la compagnie publique [1]. La Banque mondiale prévoit que l'économie libanaise recule de 6,4 % cette année [4]."
    ],
    "forMe": "Quand un pays n'a pas d'électricité fiable, ses entreprises ferment et ses habitants partent. Le gaz du Qatar qui passe par la Syrie montre aussi que les routes de l'énergie se redessinent autour du détroit d'Ormuz.",
    "figures": [
      {
        "value": "2 × 825 MW",
        "label": "deux centrales à gaz prévues en trois ans",
        "src": 1
      },
      {
        "value": "20 ans",
        "label": "durée du contrat de gaz naturel liquéfié proposé par QatarEnergy",
        "src": 2
      },
      {
        "value": "−6,4 %",
        "label": "recul de l'économie libanaise prévu cette année par la Banque mondiale",
        "src": 4
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Devdiscourse (Reuters)",
        "name": "Devdiscourse (dépêche Reuters), « EXCLUSIVE-Qatari electricity lifeline for Lebanon includes two power plants, LNG supply deal » (oct. 2026)",
        "url": "https://www.devdiscourse.com/article/international/3994809-exclusive-qatari-electricity-lifeline-for-lebanon-includes-two-power-plantslng-supply-deal"
      },
      {
        "short": "OilPrice",
        "name": "OilPrice.com, « Qatar Offers Lebanon 2 Gas Plants and 20 Years of LNG Piped Through Syria » (oct. 2026)",
        "url": "https://oilprice.com/Latest-Energy-News/World-News/Qatar-Offers-Lebanon-2-Gas-Plants-and-20-Years-of-LNG-Piped-Through-Syria.html"
      },
      {
        "short": "Modern Diplomacy",
        "name": "Modern Diplomacy, « Qatar Offers Lebanon Energy Lifeline With Two Power Plants and LNG Supply Deal » (19 oct. 2026)",
        "url": "https://moderndiplomacy.eu/2026/10/19/qatar-offers-lebanon-energy-lifeline-with-two-power-plants-and-lng-supply-deal/"
      },
      {
        "short": "The National",
        "name": "The National, « World Bank says Middle East economy to contract 2.1% in 2026 on Iran war » (6 oct. 2026)",
        "url": "https://www.thenationalnews.com/business/economy/2026/10/06/world-bank-says-middle-east-economy-to-contract-21-in-2026-on-iran-war/"
      },
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « Qatar announces ‘massive’ solar plant project in Lebanon » (16 oct. 2026)",
        "url": "https://www.aljazeera.com/news/2026/10/16/qatar-announces-massive-solar-plant-project-in-lebanon"
      },
      {
        "short": "Ministère de l'Énergie (Liban)",
        "name": "Ministère libanais de l'Énergie et de l'Eau / EDL, présentation du plan électrique (31 mars 2022)",
        "url": "https://energyandwater.gov.lb/mediafiles/articles/doc-100777-2022_03_31_10_19_47.pdf"
      },
      {
        "short": "Banque mondiale",
        "name": "Banque mondiale, document de projet sur le secteur électrique libanais (avril 2023)",
        "url": "https://documents1.worldbank.org/curated/en/099050223040511121/pdf/P1805010e52d050b0a2420997c31f1dfe0.pdf"
      },
      {
        "short": "BLOMInvest",
        "name": "BLOMInvest Bank, « Turning the Lights On: Solutions for Lebanon's Electricity Crisis » (févr. 2026)",
        "url": "https://blog.blominvestbank.com/wp-content/uploads/2026/02/Turning-the-Lights-On-Solutions-for-Lebanons-Electricity-Crisis.pdf"
      },
      {
        "short": "L'Orient-Le Jour",
        "name": "L'Orient Today, « EDL to issue new tariffs in February 2023 »",
        "url": "https://today.lorientlejour.com/article/1318304/edl-to-issue-new-tariffs-in-february-2023.html"
      },
      {
        "short": "Power Technology",
        "name": "Power Technology, « Lebanon energy reform plan »",
        "url": "https://www.power-technology.com/comment/lebanon-energy-reform-plan/"
      },
      {
        "short": "Wikipédia",
        "name": "Wikipédia (en), « Arab Gas Pipeline »",
        "url": "https://en.wikipedia.org/wiki/Arab_Gas_Pipeline"
      },
      {
        "short": "Al Arabiya",
        "name": "Al Arabiya, « Egypt's natural gas to reach Lebanon by year end: Minister » (14 sept. 2021)",
        "url": "https://english.alarabiya.net/News/middle-east/2021/09/14/Egypt-s-natural-gas-to-reach-Lebanon-by-year-end-Minister"
      },
      {
        "short": "BNN Bloomberg (Reuters)",
        "name": "BNN Bloomberg (dépêche Reuters), « Egyptian gas to reach Lebanon by year-end, says minister » (14 sept. 2021)",
        "url": "https://www.bnnbloomberg.ca/egyptian-gas-to-reach-lebanon-by-year-end-says-minister-1.1652109"
      },
      {
        "short": "L'Orient-Le Jour",
        "name": "L'Orient Today, « Gas imports to Lebanon: Jordan gives green light, what happens next »",
        "url": "https://today.lorientlejour.com/article/1546905/gas-imports-to-lebanon-jordan-gives-green-light-what-happens-next.html"
      },
      {
        "short": "Libnanews",
        "name": "Libnanews, « L'électricité du Liban frappée par le choc pétrolier » (2026)",
        "url": "https://en.libnanews.com/l-electricity-from-lebanon-hit-by-oil-shock/"
      }
    ],
    "deep": {
      "numbers": {
        "title": "Une compagnie publique à bout de souffle",
        "items": [
          {
            "value": "2 à 3 h",
            "label": "d'électricité publique par jour en moyenne à partir de mi-2021, selon la Banque mondiale [7]"
          },
          {
            "value": "≈ 40 %",
            "label": "de l'électricité perdue sur le réseau en 2021 (pertes techniques et vols), selon le ministère de l'Énergie [6]"
          },
          {
            "value": "43 Md$",
            "label": "ajoutés à la dette publique par les subventions à Électricité du Liban de 1994 à 2020 [8]"
          },
          {
            "value": "1994",
            "label": "année du dernier changement de tarif avant la nouvelle grille annoncée par EDL pour février 2023 [9]"
          }
        ]
      },
      "context": {
        "title": "Le gazoduc qui devait déjà tout régler",
        "paragraphs": [
          "L'idée d'alimenter le Liban en gaz par la Syrie n'est pas neuve. Le gazoduc arabe, long d'environ 1 200 km, a été construit par étapes pour exporter le gaz égyptien vers la Jordanie, la Syrie et le Liban ; le gaz arrive régulièrement au Liban à partir d'octobre 2009 [11].",
          "Le flux s'est vite tari : l'Égypte, qui consommait de plus en plus, a réduit ses exportations, puis des attaques contre le tuyau pendant la guerre en Syrie ont coupé la route vers le Liban [13]. En 2021, les ministres de quatre pays ont voulu relancer le projet pour alimenter la centrale de Deir Ammar, d'une capacité de 450 MW [12]. La Banque mondiale devait financer l'accord, mais à condition que le Liban relève ses tarifs et crée une autorité de régulation de l'électricité ; faute de régulateur, elle n'a pas donné son feu vert [10].",
          "Dans l'intervalle, EDL a remonté sa production : fin février 2026, elle fournissait en moyenne 7 à 9 heures de courant par jour. Le choc pétrolier régional l'a de nouveau fait chuter, à environ deux heures par jour dans certaines zones comme Tripoli [15]. Selon L'Orient-Le Jour, le tronçon Syrie-Liban du gazoduc n'est toujours pas en service et sa remise en état se poursuit [14]."
        ]
      },
      "sides": {
        "title": "Qui veut quoi",
        "items": [
          {
            "who": "Doha",
            "says": "Le Premier ministre qatari, en visite à Beyrouth le 16 octobre, a annoncé une centrale solaire qu'il a qualifiée de « massive », développée par QatarEnergy avec le français TotalEnergies comme premier projet [5]. Le document vu par Reuters cherche à attirer des capitaux privés [1]."
          },
          {
            "who": "Le gouvernement de Nawaf Salam",
            "says": "Le Premier ministre affirme que le Qatar financera, construira et fera tourner le projet sans que le Trésor libanais avance d'argent, et veut le soumettre vite au Conseil des ministres [5]."
          },
          {
            "who": "La Banque mondiale et les bailleurs",
            "says": "Ils lient depuis des années leur aide à des réformes : hausse de tarifs restés bas pendant des décennies et autorité de régulation indépendante, chargée de fixer les prix et de surveiller les contrats avec le privé [10]. En 2022, le tarif moyen encaissé restait sous 1 centime le kWh, pour un coût d'environ 30 centimes [6]."
          }
        ]
      }
    }
  },
  {
    "id": "2026-10-22-ghana-fin-exportation-minerais-bruts-2030",
    "date": "2026-10-22",
    "region": "Afrique",
    "theme": "mix",
    "geo": [
      {
        "name": "Accra, Ghana",
        "label": "Ghana",
        "coords": [
          -0.19,
          5.6
        ]
      }
    ],
    "title": "Le Ghana veut cesser d'exporter ses minerais bruts d'ici 2030 : bauxite, manganèse, fer et lithium",
    "summary": "Le président Mahama l'a annoncé lundi à Accra. Les entreprises devront transformer sur place, mais aucune loi n'est encore publiée.",
    "points": [
      "Le président John Dramani Mahama a annoncé le 19 octobre, lors d'un sommet minier à Accra, que le Ghana supprimera d'ici 2030 les exportations de minerais non transformés [1][2].",
      "Cela concerne la bauxite (le minerai de l'aluminium), le manganèse, le fer et le lithium. Les investisseurs devront financer la transformation sur place, avec ces obligations inscrites dans leurs contrats [1][3].",
      "Aucune loi, aucun règlement ni aucune liste de minerais n'est encore publié ; Mahama promet des mesures juridiques et un calendrier transparent [1][3]. Le pays interdit déjà l'export de ferraille et de métaux non ferreux [3]."
    ],
    "why": [
      "La première phrase à retenir : le plus gros producteur d'or d'Afrique veut garder la valeur ajoutée chez lui, au lieu de vendre la roche brute [1][4].",
      "L'idée est d'avoir des usines, des emplois et plus de revenus, mais elle a un prix : transformer exige de l'électricité et des investisseurs prêts à attendre. Pour l'or, l'effet direct serait limité, car les grandes mines fondent déjà leur minerai en lingots (doré) avant l'export [4]."
    ],
    "forMe": "L'aluminium, le manganèse (acier) et le lithium (batteries) se retrouvent dans les voitures et les smartphones. Si plusieurs pays africains imitent le Ghana, ces matières peuvent coûter plus cher à importer brutes, mais viendraient plus souvent déjà raffinées.",
    "figures": [
      {
        "value": "2030",
        "label": "date visée pour la fin des exportations de minerais bruts",
        "src": 1
      },
      {
        "value": "4",
        "label": "minerais cités : bauxite, manganèse, fer, lithium",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Bloomberg",
        "name": "Bloomberg, « Ghana to End Unprocessed Mineral Exports by 2030, President Mahama Says » (19 oct. 2026)",
        "url": "https://www.bloomberg.com/news/articles/2026-10-19/ghana-plans-to-ban-raw-mineral-exports-by-2030-president-says"
      },
      {
        "short": "GNA",
        "name": "Agence de presse ghanéenne GNA, « Ghana targets 2030 to end raw mineral ore exports » (oct. 2026)",
        "url": "https://gna.org.gh/2026/10/ghana-targets-2030-to-end-raw-mineral-ore-exports/"
      },
      {
        "short": "Nairametrics",
        "name": "Nairametrics, « Ghana plans to ban exports of unprocessed minerals by 2030 » (20 oct. 2026)",
        "url": "https://nairametrics.com/2026/10/20/ghana-plans-to-ban-exports-of-unprocessed-minerals-by-2030/"
      },
      {
        "short": "Rio Times",
        "name": "The Rio Times, « Ghana Restates Plan to End Raw Ore Exports » (oct. 2026)",
        "url": "https://www.riotimesonline.com/ghana-2030-raw-mineral-export-ban/"
      },
      {
        "short": "USITC",
        "name": "Commission du commerce international des États-Unis (USITC), « Nickel and Indonesia, part 1 » (note d'information)",
        "url": "https://www.usitc.gov/publications/332/executive_briefings/ebot_nickel_and_indonesia_part_1.pdf"
      },
      {
        "short": "AIE",
        "name": "Agence internationale de l'énergie (AIE), « Prohibition of the export of nickel ore » (fiche de politique publique)",
        "url": "https://www.iea.org/policies/16084-prohibition-of-the-export-of-nickel-ore"
      },
      {
        "short": "Commission européenne",
        "name": "Commission européenne, « WT/DS592 – Indonesia – Export restrictions on raw materials for the production of stainless steel »",
        "url": "https://policy.trade.ec.europa.eu/enforcement-and-protection/dispute-settlement/wto-dispute-settlement/wto-disputes-cases-involving-eu/wtds592-indonesia-export-restrictions-raw-materials-production-stainless-steel-and-subsidies-new_en"
      },
      {
        "short": "The Conversation",
        "name": "The Conversation, « Indonesia's claim that banning nickel exports spurs downstreaming is questionable » (2022)",
        "url": "https://theconversation.com/indonesias-claim-that-banning-nickel-exports-spurs-downstreaming-is-questionable-180229"
      },
      {
        "short": "AP / Manufacturing.net",
        "name": "Associated Press (repris par Manufacturing.net), « Indonesia Tightens Control on World's Largest Nickel Supply as U.S. Scrambles for Critical Minerals »",
        "url": "https://www.manufacturing.net/supply-chain/news/22960938/indonesia-tightens-control-on-worlds-largest-nickel-supply-as-us-scrambles-for-critical-minerals"
      },
      {
        "short": "MyJoyOnline",
        "name": "MyJoyOnline, « President Mahama puts mining firms on notice over 2030 raw mineral ore export ban » (oct. 2026)",
        "url": "https://www.myjoyonline.com/president-mahama-puts-mining-firms-on-notice-over-2030-raw-mineral-ore-export-ban/"
      },
      {
        "short": "Graphic Online",
        "name": "Graphic Online, « GIADEC makes significant progress towards developing an integrated aluminium industry » (2022)",
        "url": "https://www.graphic.com.gh/business/business-news/giadec-makes-significant-progress-towards-developing-an-integrated-aluminium-industry.html"
      },
      {
        "short": "SMM",
        "name": "Shanghai Metals Market (SMM), « Import of Ghana Manganese Ore Under Dual Squeeze » (2026)",
        "url": "https://news.metal.com/newscontent/104089301-smm-analysisimport-of-ghana-manganese-ore-under-dual-squeeze-resonance-of-price-signals-and-policy-uncertainties"
      },
      {
        "short": "News Ghana",
        "name": "News Ghana, « Ghana Manganese Company unveils US$450 million refinery plan » (2024)",
        "url": "https://www.newsghana.com.gh/ghana-manganese-company-unveils-us450-million-refinery-plan/"
      },
      {
        "short": "Mining Weekly",
        "name": "Mining Weekly, « Ghana's Parliament ratifies Atlantic Lithium's Ewoyaa mining lease » (20 mars 2026)",
        "url": "https://www.miningweekly.com/article/ghanas-parliament-ratifies-atlantic-lithiums-ewoyaa-mining-lease-2026-03-20"
      },
      {
        "short": "Ecofin",
        "name": "Agence Ecofin, « Ghana greenlights $185 million Ewoyaa lithium project » (mars 2026)",
        "url": "https://www.ecofinagency.com/news-industry/2303-53985-ghana-greenlights-185-million-ewoyaa-lithium-project"
      },
      {
        "short": "MyJoyOnline",
        "name": "MyJoyOnline, « Why Ghana has banned unrefined gold exports – GoldBod official provides details » (2026)",
        "url": "https://www.myjoyonline.com/why-ghana-has-banned-unrefined-gold-exports-goldbod-official-provides-details/"
      },
      {
        "short": "MyJoyOnline",
        "name": "MyJoyOnline, « Govt must put its skin in the game – Chamber of Mines demands tax, power relief for local gold refining » (2026)",
        "url": "https://www.myjoyonline.com/govt-must-put-its-skin-in-the-game-chamber-of-mines-demands-tax-power-relief-for-local-gold-refining/"
      }
    ],
    "deep": {
      "context": {
        "title": "Le précédent indonésien : six ans sans nickel brut",
        "paragraphs": [
          "L'idée n'est pas neuve. L'Indonésie a appliqué dès 2014 une loi de 2009 qui interdisait d'exporter le minerai non transformé, dont le nickel [5]. Elle a rouvert la porte en 2017 au minerai pauvre (moins de 1,7 % de nickel), puis a tout refermé le 1er janvier 2020 [6].",
          "Le résultat est spectaculaire. Selon S&P Global Market Intelligence, la part de l'Indonésie dans l'offre mondiale de nickel est passée de 31,5 % en 2020 à environ 60 % en 2024 [9]. Les fonderies se sont multipliées, financées en grande partie par des capitaux étrangers [8].",
          "Le bilan reste discuté. Le président Joko Widodo affirmait que les exportations liées au nickel étaient passées de 2,1 à 30 milliards de dollars ; des économistes notent que ces chiffres n'ont pas été détaillés et qu'un métal transformé contient aussi le prix de l'énergie et des autres intrants [8]. L'Union européenne a porté plainte à l'OMC : le panel lui a donné raison le 30 novembre 2022, mais l'Indonésie a fait appel le 8 décembre devant un organe d'appel qui ne fonctionne plus, ce qui bloque l'affaire [7]."
        ]
      },
      "explainer": {
        "title": "Comment ça marche : « transformer sur place »",
        "text": "Un minerai passe par plusieurs étapes avant de devenir un métal. Pour l'aluminium : on extrait la bauxite, une raffinerie en tire l'alumine (une poudre blanche), puis une fonderie la transforme en métal grâce à beaucoup d'électricité. Le Ghana possède le début et la fin de la chaîne, mais pas le milieu : une mine de bauxite à Awaso et la fonderie VALCO à Tema, sans raffinerie. En 2022, toute la bauxite d'Awaso partait donc à l'étranger, pendant que VALCO importait son alumine [11]. Une interdiction d'exporter le brut oblige à construire le maillon manquant sur place. Pour le manganèse, l'entreprise qui exploite la mine de Nsuta, filiale du groupe chinois Tianyuan, a présenté un projet de raffinerie d'environ 450 millions de dollars [13]. Pour l'or, c'est déjà fait : depuis le 1er septembre 2026, l'or « doré » des négociants agréés doit être raffiné au Ghana avant l'export [16]."
      },
      "numbers": {
        "title": "Les chiffres de fond",
        "items": [
          {
            "value": "5,3 Mt",
            "label": "minerai de manganèse importé du Ghana par la Chine en 2025, 16 % de ses achats de ce minerai (douanes chinoises citées par SMM) [12]"
          },
          {
            "value": "185 M$",
            "label": "coût annoncé de la mine de lithium d'Ewoyaa, où l'État ghanéen détient 13 % (Ecofin) [15]"
          },
          {
            "value": "≈ 60 %",
            "label": "part de l'Indonésie dans l'offre mondiale de nickel en 2024, contre 31,5 % en 2020 (S&P Global) [9]"
          }
        ]
      },
      "watch": {
        "title": "Les étapes à surveiller",
        "items": [
          {
            "when": "Au Parlement",
            "what": "Le projet de loi minière déposé au Parlement permettrait au ministre d'interdire l'export de minerais bruts, mais seulement par un règlement à part, et sans date butoir [10]."
          },
          {
            "when": "Décision d'investissement à Ewoyaa",
            "what": "Le Parlement a ratifié le bail de la première mine de lithium du pays le 20 mars 2026 ; reste à boucler le financement avant la décision finale d'investissement [14]."
          },
          {
            "when": "Janvier 2029",
            "what": "Fin du mandat de John Mahama, qui ne peut pas se représenter : l'échéance de 2030 reviendra à son successeur [10]."
          },
          {
            "when": "D'ici là",
            "what": "Les compagnies minières demandent déjà des baisses de taxes et une électricité plus sûre pour raffiner l'or sur place ; les mêmes demandes reviendront pour les autres minerais [17]."
          }
        ]
      }
    }
  },
  {
    "id": "2026-10-22-burkina-faso-ghana-reduit-carburant",
    "date": "2026-10-22",
    "region": "Afrique",
    "theme": "mix",
    "geo": [
      {
        "name": "Ouagadougou, Burkina Faso",
        "label": "Burkina Faso",
        "coords": [
          -1.52,
          12.37
        ]
      }
    ],
    "title": "Le Burkina Faso et le Mali privés de moitié de leur carburant : le Ghana garde le sien",
    "summary": "Le distributeur public ghanéen réduit ses ventes de diesel et d'essence à ses voisins du Sahel, qui n'ont pas de mer. Le Burkina n'a reçu que la moitié de ce qu'il demandait.",
    "points": [
      "Le distributeur public ghanéen BOST réduit depuis août ses exportations de diesel et d'essence vers le Burkina Faso et le Mali, pour protéger l'approvisionnement du Ghana [1][2].",
      "Pour juillet et août, le Burkina n'a reçu que 40 000 tonnes de carburant sur les 80 000 demandées [3].",
      "Le directeur de BOST résume : « Le carburant est disponible, mais à un coût élevé » [2]."
    ],
    "why": [
      "La première phrase à retenir : deux pays du Sahel, qui se disent souverains, dépendent d'un voisin côtier pour faire rouler leurs camions et leurs générateurs [3].",
      "Le Burkina et le Mali ne sont pas reliés à la mer : quand un pays de transit garde son carburant, les prix montent et les coupures arrivent. Cette tension arrive dans un monde où le pétrole est plus cher à cause de la crise d'Ormuz [1][3]."
    ],
    "forMe": "Le carburant manquant ralentit les mines d'or et le transport de marchandises du Sahel. Cela pèse sur l'or et l'uranium qui sortent de la région, et sur les migrations quand l'économie locale s'étouffe.",
    "figures": [
      {
        "value": "40 000 t",
        "label": "carburant livré au Burkina Faso en juillet-août, sur 80 000 demandées",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Adom Online",
        "name": "Adom Online, « BOST cuts fuel exports to Burkina Faso and Mali to protect local supply » (2026)",
        "url": "https://www.adomonline.com/bost-cuts-fuel-exports-to-burkina-faso-and-mali-to-protect-local-supply/"
      },
      {
        "short": "MyJoyOnline",
        "name": "MyJoyOnline, « BOST cuts fuel exports to Burkina Faso and Mali to protect local supply » (2026)",
        "url": "https://www.myjoyonline.com/bost-cuts-fuel-exports-to-burkina-faso-and-mali-to-protect-local-supply/"
      },
      {
        "short": "Afrik.com",
        "name": "Afrik.com, « Mali et Burkina Faso : la souveraineté de l'AES rattrapée par sa dépendance au carburant » (2026)",
        "url": "https://www.afrik.com/mali-burkina-faso-souverainete-aes-carburant-ghana"
      }
    ]
  },
  {
    "id": "2026-10-22-haiti-soldats-salvadoriens-disparus",
    "date": "2026-10-22",
    "region": "Amériques",
    "theme": "geo",
    "geo": [
      {
        "name": "Croix-des-Bouquets, Haïti",
        "label": "Haïti",
        "coords": [
          -72.22,
          18.58
        ]
      }
    ],
    "title": "Haïti : quatre soldats salvadoriens de la force anti-gangs disparus après une embuscade",
    "summary": "Leur véhicule a brûlé près de Port-au-Prince. El Salvador cherche ses soldats sous le feu des gangs.",
    "points": [
      "Quatre militaires salvadoriens de la Force de répression des gangs, soutenue par l'ONU, ont fui leur véhicule en feu à Croix-des-Bouquets, au nord de Port-au-Prince, et sont portés disparus [1][2].",
      "L'armée salvadorienne dit avoir tenté plusieurs fois de les rejoindre par terre et par air ; ses hélicoptères ont essuyé des tirs [1][2].",
      "Le porte-parole de l'ONU, Stéphane Dujarric, a condamné l'attaque et demandé leur libération [1]. Une dépêche titrée sur le président Nayib Bukele rapporte qu'il annonce une opération militaire pour récupérer les soldats [3]."
    ],
    "why": [
      "La première phrase à retenir : la force internationale qui doit reprendre Haïti aux gangs perd déjà des hommes, et un pays d'Amérique centrale se retrouve en première ligne [1][2].",
      "Les sources ne disent pas encore si les quatre sont captifs ou cachés. Plus l'attaque dure, plus la capitale est coupée du reste du pays, ce qui bloque aide et marchandises [1][2]."
    ],
    "forMe": "Haïti est à deux heures d'avion de la Floride. Quand l'État s'effondre, la nourriture manque et les départs en bateau augmentent, ce qui nourrit les débats sur la migration jusqu'en Europe.",
    "figures": [
      {
        "value": "4",
        "label": "soldats salvadoriens portés disparus",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « Search under way for four soldiers missing after gang attack in Haiti » (19 oct. 2026)",
        "url": "https://www.aljazeera.com/news/2026/10/19/search-under-way-for-four-soldiers-missing-after-gang-attack-in-haiti"
      },
      {
        "short": "Devdiscourse",
        "name": "Devdiscourse, « Four Salvadoran air force members missing after gang ambush in Haiti » (oct. 2026)",
        "url": "https://www.devdiscourse.com/article/international/3994931-four-salvadoran-air-force-members-missing-after-gang-ambush-in-haiti"
      },
      {
        "short": "Daily Independent (AP)",
        "name": "Daily Independent, « El Salvador's Bukele announces military operation to rescue hostages held by gangs in Haiti » (oct. 2026)",
        "url": "https://yourvalley.net/stories/el-salvadors-bukele-announces-military-operation-to-rescue-hostages-held-by-gangs-in-haiti,731775"
      }
    ]
  },
  {
    "id": "2026-10-22-sri-lanka-chine-quitte-hub-colombo",
    "date": "2026-10-22",
    "region": "Asie",
    "theme": "mix",
    "geo": [
      {
        "name": "Colombo, Sri Lanka",
        "label": "Sri Lanka",
        "coords": [
          79.85,
          6.93
        ]
      }
    ],
    "title": "Sri Lanka : une entreprise d'État chinoise abandonne son grand centre logistique du port de Colombo",
    "summary": "Le projet de 392 millions de dollars continue, mais il faut trouver un autre investisseur.",
    "points": [
      "China Merchants Port Holdings se retire du centre logistique prévu au port de Colombo, a annoncé l'autorité portuaire du Sri Lanka le 19 octobre, selon l'AFP [1][2].",
      "Le projet de 392 millions de dollars, signé en 2023, donnait 70 % à China Merchants, 15 % à l'autorité portuaire et 15 % à une entreprise de construction sri-lankaise [1][3]. L'autorité cherche un nouvel investisseur pour le site de 150 000 m² et passera par un partenariat public-privé [1][2].",
      "Les chiffres divergent : un média sri-lankais parle d'environ 280 millions de dollars [2]. China Merchants dit que mettre fin au projet est dans l'intérêt des parties [1]."
    ],
    "why": [
      "La première phrase à retenir : un grand groupe chinois renonce à un projet au Sri Lanka, pays que la Chine avait aidé et où elle est très présente [1][3].",
      "C'était le premier grand investissement étranger annoncé après l'effondrement de l'économie sri-lankaise en 2022 [1][3]. China Merchants continue d'exploiter un terminal à conteneurs de 500 millions de dollars à Colombo [1]."
    ],
    "forMe": "Colombo est une escale importante des cargos entre l'Asie et l'Europe. Quand un projet de port s'arrête, la concurrence entre grandes puissances pour ces routes devient visible.",
    "figures": [
      {
        "value": "392 M$",
        "label": "valeur du centre logistique abandonné (un média local cite environ 280 M$)",
        "src": 3
      },
      {
        "value": "70 %",
        "label": "part prévue pour China Merchants",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "routes-maritimes"
    ],
    "sources": [
      {
        "short": "Deccan Chronicle",
        "name": "Deccan Chronicle, « China Exits Sri Lanka Port Logistics Venture in Major Setback » (oct. 2026)",
        "url": "https://www.deccanchronicle.com/world/china-exits-sri-lanka-port-logistics-venture-in-major-setback-1997154"
      },
      {
        "short": "Ada Derana",
        "name": "Ada Derana, déclaration de l'autorité portuaire sur le centre logistique de Colombo (oct. 2026)",
        "url": "https://adaderana.lk/news/250181"
      },
      {
        "short": "Hellenic Shipping News",
        "name": "Hellenic Shipping News, « Sri Lanka, China to build $392mln logistics hub at Colombo Port » (2023)",
        "url": "https://www.hellenicshippingnews.com/sri-lanka-china-to-build-392mln-logistics-hub-at-colombo-port/"
      }
    ]
  },
  {
    "id": "2026-10-22-inde-nouvelle-zelande-accord-libre-echange",
    "date": "2026-10-22",
    "region": "Asie",
    "theme": "eco",
    "geo": [
      {
        "name": "Wellington, Nouvelle-Zélande",
        "label": "Nouvelle-Zélande",
        "coords": [
          174.78,
          -41.29
        ]
      },
      {
        "name": "New Delhi, Inde",
        "label": "Inde",
        "coords": [
          77.21,
          28.61
        ]
      }
    ],
    "title": "L'Inde et la Nouvelle-Zélande ouvrent leurs marchés : laine et charbon sans droits de douane",
    "summary": "Leur accord de libre-échange devait entrer en vigueur le 20 octobre, après neuf mois de négociations.",
    "points": [
      "L'accord, signé à New Delhi le 27 avril et ratifié le 21 septembre, devait s'appliquer à partir du 20 octobre [1][2]. Les sources consultées datent d'avant cette date et ne confirment pas encore l'entrée en vigueur.",
      "L'Inde obtient un accès sans droits de douane pour toutes ses lignes de produits ; certains produits indiens payaient jusqu'à 10 % [1][3].",
      "La Nouvelle-Zélande dit que 57 % de ses exportations vers l'Inde, dont la laine et le charbon, seront sans droits dès le premier jour, avec un second palier au 1er janvier 2027 [3][4]."
    ],
    "why": [
      "La première phrase à retenir : l'Inde multiplie les accords commerciaux au moment où les droits de douane américains changent la donne [1][3].",
      "Les deux pays veulent à peu près doubler leurs échanges et se sont engagés à faire le point un an après l'entrée en vigueur [4]."
    ],
    "forMe": "Quand des pays se mettent d'accord sans passer par les États-Unis ni l'Europe, les routes du commerce se diversifient. À long terme, cela peut changer d'où viennent la laine, le bois ou les médicaments vendus en France.",
    "figures": [
      {
        "value": "57 %",
        "label": "exportations néo-zélandaises vers l'Inde sans droits de douane dès le premier jour",
        "src": 3
      },
      {
        "value": "100 %",
        "label": "lignes de produits indiens sans droits de douane en Nouvelle-Zélande",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "droits-de-douane"
    ],
    "sources": [
      {
        "short": "Deccan Herald",
        "name": "Deccan Herald, « India-New Zealand FTA comes into force on October 20 » (2026)",
        "url": "https://www.deccanherald.com/business/india-new-zealand-fta-comes-into-force-on-october-20-4188622"
      },
      {
        "short": "All India Radio",
        "name": "All India Radio / Newsonair, « India-New Zealand free trade agreement finalised, comes into force on Oct 20: Piyush Goyal » (21 sept. 2026)",
        "url": "https://newsonair.gov.in/india-new-zealand-free-trade-agreement-finalised-comes-into-force-on-oct-20-piyush-goyal/"
      },
      {
        "short": "Maritime Gateway",
        "name": "Maritime Gateway, « India-New Zealand FTA kicks in from October 20 with duty-free access for all Indian exports » (2026)",
        "url": "https://www.maritimegateway.com/india-new-zealand-fta-kicks-in-from-october-20-with-duty-free-access-for-all-indian-exports/"
      },
      {
        "short": "MFAT",
        "name": "Ministère néo-zélandais des Affaires étrangères et du Commerce, résumé de l'accord de libre-échange Nouvelle-Zélande–Inde (2026)",
        "url": "https://www.mfat.govt.nz/assets/Trade-agreements/NZ-India-FTA/New-Zealand-India-Free-Trade-Agreement-Summary.pdf"
      }
    ]
  },
  {
    "id": "2026-10-22-belgique-avoirs-russes-gel-ukraine",
    "date": "2026-10-22",
    "region": "Europe",
    "theme": "mix",
    "geo": [
      {
        "name": "Bruxelles, Belgique",
        "label": "Belgique",
        "coords": [
          4.35,
          50.85
        ]
      }
    ],
    "title": "Belgique : le Premier ministre assure que Bruxelles renonce à utiliser les avoirs russes gelés pour l'Ukraine",
    "summary": "Plus de 190 milliards d'euros russes dorment surtout en Belgique. Bart De Wever pense que la Commission européenne ne proposera plus de s'en servir.",
    "points": [
      "Devant le Parlement belge, après le dernier sommet européen, Bart De Wever a dit être confiant que la Commission ne proposera plus de financer l'Ukraine avec les avoirs russes, selon l'agence russe TASS [1]. Ce n'est pas une décision officielle de la Commission.",
      "Environ 193 milliards d'euros, fin septembre, sont conservés surtout chez Euroclear, une société financière belge [2].",
      "En décembre 2025, l'UE avait gelé ces avoirs sans limite de temps, et les dirigeants avaient choisi d'emprunter 90 milliards d'euros pour l'Ukraine sur deux ans [2][3]."
    ],
    "why": [
      "La première phrase à retenir : l'idée d'utiliser l'argent russe gelé pour l'Ukraine, qui divisait l'Europe, semble abandonnée au profit de l'emprunt [1][3].",
      "La Belgique craignait des représailles de la Russie, car l'argent est chez elle. L'information vient d'une seule dépêche, d'une agence d'État russe : à confirmer par une source belge ou européenne [1]."
    ],
    "forMe": "C'est de la dette européenne commune, donc de l'argent public européen, qui finance l'aide à l'Ukraine, plutôt que l'argent russe gelé.",
    "figures": [
      {
        "value": "193 Md€",
        "label": "avoirs russes gelés fin septembre, surtout chez Euroclear",
        "src": 2
      },
      {
        "value": "90 Md€",
        "label": "prêt européen à l'Ukraine décidé en décembre 2025, sur deux ans",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [
      "sanctions"
    ],
    "sources": [
      {
        "short": "TASS",
        "name": "TASS, « Belgian PM expects European Commission to end calls for seizing Russian assets » (21 oct. 2026)",
        "url": "https://tass.com/world/2205825"
      },
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « EU indefinitely freezes hundreds of billions in Russian funds » (12 déc. 2025)",
        "url": "https://www.aljazeera.com/news/2025/12/12/eu-looks-set-to-indefinitely-freeze-hundreds-of-billions-in-russian-funds"
      },
      {
        "short": "Fortune",
        "name": "Fortune, « EU indefinitely freezes Russian assets to prevent Hungary and Slovakia blocking billions for Ukraine » (13 déc. 2025)",
        "url": "https://fortune.com/2025/12/13/eu-indefinitely-freezes-russian-assets-prevent-hungary-slovakia-billions-euros-ukraine/"
      },
      {
        "short": "Euroclear",
        "name": "Euroclear, « Euroclear delivers Q1 2026 results » (communiqué, 8 mai 2026)",
        "url": "https://www.euroclear.com/newsandinsights/en/press/2026/mr-12-euroclear-delivers-q1-2026-results.html"
      },
      {
        "short": "Euroclear",
        "name": "Euroclear, « Euroclear delivers strong 2025 results » (communiqué, 4 févr. 2026)",
        "url": "https://www.euroclear.com/newsandinsights/en/press/2026/mr-06-euroclear-delivers-strong-2025-results.html"
      },
      {
        "short": "Financial Forum",
        "name": "Revue bancaire et financière (Financial Forum), « The impact of the sanctions against Russia and Russian countermeasures »",
        "url": "https://financialforum.be/fr/articles/the-impact-of-the-sanctions-against-russia-and-russian-countermeasures"
      },
      {
        "short": "bne IntelliNews",
        "name": "bne IntelliNews, « EU outlines structure of reparations loan backed by frozen Russian assets for Ukraine » (déc. 2025)",
        "url": "https://www.intellinews.com/eu-outlines-structure-of-reparations-loan-backed-by-frozen-russian-assets-for-ukraine-415282"
      },
      {
        "short": "APA",
        "name": "APA, « Commission unveils €165B loan to Ukraine using Russian frozen assets » (3 déc. 2025)",
        "url": "https://en.apa.az/europe/commission-unveils-eur165b-loan-to-ukraine-using-russian-frozen-assets-485346"
      },
      {
        "short": "NV",
        "name": "The New Voice of Ukraine (NV), « EU chooses joint borrowing for Ukraine, puts Russian assets on ice » (19 déc. 2025)",
        "url": "https://english.nv.ua/amp/eu-chooses-joint-borrowing-for-ukraine-puts-russian-assets-on-ice-50569735.html"
      },
      {
        "short": "The Star",
        "name": "The Star (dépêche), « Belgium rejects renewed push on frozen Russian assets » (3 sept. 2026)",
        "url": "https://www.thestar.com.my/news/world/2026/09/03/belgium-rejects-renewed-push-on-frozen-russian-assets"
      },
      {
        "short": "Interfax-Ukraine",
        "name": "Interfax-Ukraine, « Zelenskyy urges EU to resolve issue of Russia's frozen assets to prevent them from being returned to Russia » (oct. 2026)",
        "url": "https://en.interfax.com.ua/news/general/1221570.html"
      },
      {
        "short": "Courthouse News",
        "name": "Courthouse News Service, « Zelenskyy asks for $78 billion in European aid for Ukraine » (oct. 2026)",
        "url": "https://www.courthousenews.com/zelenskyy-asks-for-78-billion-in-european-aid-for-ukraine/"
      },
      {
        "short": "Meduza",
        "name": "Meduza, « Moscow court orders Belgian depositary Euroclear to pay massive damages to Russia's central bank » (15 mai 2026)",
        "url": "https://meduza.io/en/news/2026/05/15/moscow-court-orders-belgian-depositary-euroclear-to-pay-massive-damages-to-russia-s-central-bank"
      },
      {
        "short": "Interfax-Ukraine",
        "name": "Interfax-Ukraine, « Belgian PM convinced EU won't revive plan to use frozen Russian assets for Ukraine » (oct. 2026)",
        "url": "https://en.interfax.com.ua/news/general/1224317.html"
      },
      {
        "short": "A News",
        "name": "A News, « Belgian premier says EU will not propose using frozen Russian assets for Ukraine » (21 oct. 2026)",
        "url": "https://anews.com.tr/world/2026/10/21/belgian-premier-says-eu-will-not-propose-using-frozen-russian-assets-for-ukraine"
      },
      {
        "short": "Kyiv Post",
        "name": "Kyiv Post, « EU Leaders Stall Reparation Loan Talks as Belgium Insists on Legal Guarantees » (2025)",
        "url": "https://www.kyivpost.com/post/62907"
      }
    ],
    "deep": {
      "explainer": {
        "title": "Comment ça marche : de l'argent gelé qui rapporte",
        "text": "Euroclear est un dépositaire central de titres : une sorte de coffre-fort où les banques centrales et les investisseurs du monde entier gardent leurs obligations. Quand les sanctions ont bloqué la Banque centrale de Russie en 2022, ses titres sont restés chez Euroclear. En arrivant à échéance, ils ne remboursent pas la Russie : l'argent reste sur les comptes d'Euroclear Bank, qui devra le rendre le jour où les sanctions seront levées [6]. Euroclear replace cet argent, ce qui lui rapporte des intérêts : 5 milliards d'euros de revenus en 2025, en baisse de 26 % avec la baisse des taux [5]. Depuis 2024, une règle européenne oblige à reverser ces bénéfices exceptionnels à un fonds pour l'Ukraine : 6,6 milliards d'euros versés à fin mars 2026, le reste étant gardé en réserve contre les risques [4]. Fin mars 2026, sur les 237 milliards d'euros du bilan d'Euroclear Bank, 200 milliards étaient des avoirs russes sous sanctions [4]. Le « prêt de réparation », proposé par la Commission le 3 décembre 2025 pour 165 milliards d'euros [8], allait plus loin : il s'agissait d'échanger cet argent contre des obligations émises par l'UE et de le prêter à l'Ukraine, qui ne l'aurait remboursé que si la Russie payait des réparations [7]."
      },
      "sides": {
        "title": "Qui dit quoi",
        "items": [
          {
            "who": "La Belgique",
            "says": "Bart De Wever exigeait que les 26 autres pays garantissent tout le prêt pour que la Belgique ne paie pas seule en cas de procès [16]. En septembre 2026, son ministre des Affaires étrangères Maxime Prévot jugeait encore qu'utiliser ces avoirs « par un procédé proche de la confiscation » comportait « des risques importants » [10]."
          },
          {
            "who": "Les partisans de l'utilisation",
            "says": "La Pologne, les Pays-Bas, l'Espagne et la Suède ont écrit à la Commission fin août 2026 pour lui demander d'étudier de nouvelles façons d'utiliser ces avoirs ; la cheffe de la diplomatie de l'UE, Kaja Kallas, a dit que la discussion continuerait [10]."
          },
          {
            "who": "L'Ukraine",
            "says": "Volodymyr Zelensky demande que la totalité des avoirs reste protégée et puisse servir, de peur qu'ils ne soient un jour rendus à la Russie [11]. Il a demandé aux Européens environ 78 milliards de dollars pour l'an prochain [12]."
          },
          {
            "who": "La Russie",
            "says": "Sa banque centrale a attaqué Euroclear à Moscou. Le 15 mai 2026, un tribunal moscovite lui a accordé environ 18 170 milliards de roubles (200 milliards d'euros) ; Euroclear ne reconnaît pas ce tribunal et a annoncé faire appel [13]."
          }
        ]
      },
      "watch": {
        "title": "Ce qui peut encore bouger",
        "items": [
          {
            "when": "Budget ukrainien de 2027",
            "what": "Le prêt de 90 milliards couvre 2026 et 2027 [3] ; la nouvelle demande de Kiev pose la question d'un financement supplémentaire, et donc des avoirs russes [12]."
          },
          {
            "when": "Prochains sommets européens",
            "what": "Selon De Wever, la Commission s'est engagée à ne pas rouvrir le dossier, mais il n'exclut pas qu'un autre pays le remette sur la table [14][15]."
          },
          {
            "when": "Appel d'Euroclear",
            "what": "Euroclear conteste le jugement de Moscou et a annoncé faire appel ; la Banque centrale russe elle-même juge la décision non définitive [13]."
          },
          {
            "when": "Fin de la guerre",
            "what": "Les dirigeants européens ont prévu que les avoirs restent immobilisés jusqu'à ce que la Russie cesse la guerre et indemnise l'Ukraine [9]."
          }
        ]
      }
    }
  },
  {
    "id": "2026-10-21-samarkand-asie-centrale-minerais",
    "date": "2026-10-21",
    "region": "Asie",
    "theme": "mix",
    "geo": [
      {
        "name": "Samarcande, Ouzbékistan",
        "label": "Samarcande",
        "coords": [
          66.96,
          39.65
        ]
      },
      {
        "name": "Bichkek, Kirghizistan",
        "label": "Kirghizistan",
        "coords": [
          74.59,
          42.87
        ]
      },
      {
        "name": "Douchanbé, Tadjikistan",
        "label": "Tadjikistan",
        "coords": [
          68.78,
          38.56
        ]
      },
      {
        "name": "Achgabat, Turkménistan",
        "label": "Turkménistan",
        "coords": [
          58.38,
          37.95
        ]
      }
    ],
    "title": "Samarcande : Washington part chercher les minerais d'Asie centrale, là où la Chine est déjà installée",
    "summary": "Le chef de la diplomatie américaine a réuni cinq pays d'Asie centrale. Au menu : une route commerciale qui évite la Russie et les minerais critiques.",
    "points": [
      "Marco Rubio a lancé lundi à Samarcande (Ouzbékistan) des discussions avec les ministres des Affaires étrangères de l'Ouzbékistan, du Kazakhstan, du Kirghizistan, du Tadjikistan et du Turkménistan, avant de partir pour l'Inde [1][2].",
      "Les États-Unis et les cinq pays ont publié une déclaration commune qui soutient les investissements dans la route commerciale transcaspienne, une coopération industrielle plus étroite et des douanes simplifiées. Les parties voient aussi plus de possibilités pour extraire et transformer des minerais [2][3].",
      "L'Ouzbékistan a signé les accords Artemis (coopération spatiale), et Marco Rubio a rencontré le ministre kazakh des Affaires étrangères sur le commerce, l'énergie, les minerais critiques et la technologie [1]. Des entreprises chinoises ont déjà signé plusieurs accords dans l'énergie, que Washington cherche à contrebalancer [1]."
    ],
    "why": [
      "La première phrase à retenir : les États-Unis veulent leur part des minerais d'Asie centrale, une région enclavée où la Chine et la Russie pèsent depuis longtemps [1][3].",
      "La route transcaspienne passe par la mer Caspienne et le Caucase au lieu de la Russie : c'est ce qui la rend intéressante pour les pays enclavés qui veulent vendre ailleurs. Pour l'instant, la déclaration est un soutien politique : les chiffres des investissements ne sont pas annoncés dans les sources consultées [2][3]."
    ],
    "forMe": "Les minerais critiques entrent dans les batteries, les puces et les armes. Plus les grandes puissances se les disputent, plus leurs prix peuvent devenir instables, et cela finit par se voir sur le prix des voitures électriques et de l'électronique.",
    "figures": [
      {
        "value": "5",
        "label": "pays d'Asie centrale réunis autour du secrétaire d'État américain (Ouzbékistan, Kazakhstan, Kirghizistan, Tadjikistan, Turkménistan)",
        "src": 2
      },
      {
        "value": "100",
        "label": "entreprises américaines dans la délégation de Marco Rubio, selon Daryo (d'autres médias en citent plus de 200)",
        "src": 4
      }
    ],
    "culture": [],
    "dossiers": [
      "sanctions"
    ],
    "sources": [
      {
        "short": "Manila Times",
        "name": "The Manila Times, « US looks to boost foothold in Central Asia » (20 oct. 2026)",
        "url": "https://www.manilatimes.net/2026/10/20/world/asia-oceania/us-looks-to-boost-foothold-in-central-asia/2449111"
      },
      {
        "short": "Département d'État",
        "name": "Département d'État américain, « C5+1: Historic Partnership, Prosperous Future » (oct. 2026)",
        "url": "https://www.state.gov/releases/office-of-the-spokesman/2026/10/c51-historic-partnership-prosperous-future/"
      },
      {
        "short": "Euronews",
        "name": "Euronews, « Rubio puts Trans-Caspian trade and critical minerals at centre of Central Asia talks » (19 oct. 2026)",
        "url": "https://www.euronews.com/2026/10/19/rubio-puts-trans-caspian-trade-and-critical-minerals-at-centre-of-central-asia-talks"
      },
      {
        "short": "Daryo",
        "name": "Daryo, « Marco Rubio to visit Uzbekistan with 100 company delegation » (28 sept. 2026)",
        "url": "https://daryo.uz/en/2026/09/28/marco-rubio-to-visit-uzbekistan-with-100-company-delegation/"
      }
    ]
  },
  {
    "id": "2026-10-21-inde-petrole-russe-droits-de-douane-rubio",
    "date": "2026-10-21",
    "region": "Asie",
    "theme": "mix",
    "geo": [
      {
        "name": "Bombay, Inde",
        "label": "Inde",
        "coords": [
          72.88,
          19.08
        ]
      },
      {
        "name": "Jamnagar, Inde",
        "label": "Jamnagar",
        "coords": [
          70.07,
          22.47
        ]
      }
    ],
    "title": "Pétrole russe : Washington suspend sa menace de droits de douane jusqu'à 100 % et envoie Rubio voir la plus grande raffinerie indienne",
    "summary": "Une loi américaine permettrait de taxer jusqu'à 100 % les produits des plus gros acheteurs de pétrole russe, dont l'Inde. Elle est en pause, le temps d'une visite à Bombay et Jamnagar.",
    "points": [
      "La loi sur les sanctions viserait les cinq plus gros importateurs de pétrole ou de gaz russes, dont l'Inde et la Chine, avec des droits de douane pouvant atteindre 100 % sur les produits qu'ils vendent aux États-Unis. Elle est pour l'instant suspendue [1][2].",
      "Marco Rubio, qui a qualifié l'Inde d'« allié important », explique que Donald Trump veut profiter d'une fenêtre de 60 jours pour mesurer l'effet de ces droits. L'ambassadeur américain Sergio Gor attend une décision d'ici une dizaine de jours [1][2].",
      "Le secrétaire d'État était attendu mardi à Bombay, puis à la raffinerie de Jamnagar, au programme de l'énergie ; il saute New Delhi, ce qui irrite en Inde [2][3]. Le ministre indien du Commerce affirme que la première phase de l'accord commercial est conclue et en cours de rédaction juridique [2]."
    ],
    "why": [
      "Washington tient dans sa main un outil très fort : taxer les pays qui achètent du pétrole russe. Mais s'en servir contre l'Inde, un partenaire de poids, risquerait de fâcher un allié et de renchérir les produits indiens [1][2].",
      "Les droits de douane américains sur les produits indiens ont déjà été relevés à 50 % en 2025 à cause du pétrole russe, puis ramenés à 18 % [2]. Le commerce entre les deux pays a crû de près de 12 % en 2025, à environ 240 milliards de dollars [3]. Les résultats des discussions de mardi ne figurent pas dans les sources consultées."
    ],
    "forMe": "Si des droits de douane de 100 % frappaient l'Inde ou la Chine, des produits comme les médicaments génériques, les textiles ou l'électronique pourraient coûter plus cher en magasin. La menace reste suspendue : une décision est attendue dans les prochains jours.",
    "figures": [
      {
        "value": "100 %",
        "label": "niveau maximal des droits de douane prévus par la loi sur les acheteurs de pétrole russe (suspendue)",
        "src": 1
      },
      {
        "value": "18 %",
        "label": "droits de douane américains sur les produits indiens, après 50 % en 2025",
        "src": 2
      },
      {
        "value": "240 Md$",
        "label": "commerce entre les États-Unis et l'Inde en 2025 (+12 %), selon un analyste cité par Al Jazeera",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [
      "droits-de-douane",
      "sanctions"
    ],
    "sources": [
      {
        "short": "Open Magazine",
        "name": "Open The Magazine, « Rubio Leaves for India, Calls It an ‘Important Ally’ as US Pauses Russia-Linked Tariff Threat » (oct. 2026)",
        "url": "https://openthemagazine.com/world/rubio-leaves-for-india-calls-it-an-important-ally-as-us-pauses-russia-linked-tariff-threat"
      },
      {
        "short": "Republic",
        "name": "Republic World, « ‘India an Important Ally’: Rubio Says Trump Studying Impact of Possible Tariffs » (18 oct. 2026)",
        "url": "https://www.republicworld.com/india/india-an-important-ally-rubio-says-trump-studying-impact-of-possible-tariffs-on-countries-like-india-2026-10-18-139164"
      },
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « Why Marco Rubio’s visit to Mumbai has ruffled feathers in India » (18 oct. 2026)",
        "url": "https://www.aljazeera.com/news/2026/10/18/why-marco-rubios-visit-to-mumbai-has-ruffled-feathers-in-india"
      }
    ]
  },
  {
    "id": "2026-10-21-bangladesh-croissance-fmi-plus-faible-depuis-1989",
    "date": "2026-10-21",
    "region": "Asie",
    "theme": "eco",
    "geo": [
      {
        "name": "Dacca, Bangladesh",
        "label": "Bangladesh",
        "coords": [
          90.41,
          23.81
        ]
      }
    ],
    "title": "Bangladesh : la croissance pourrait tomber à son plus bas niveau en près de quarante ans",
    "summary": "Le FMI prévoit seulement 3,2 % de croissance pour l'exercice 2026-2027 et une inflation proche de 11 %.",
    "points": [
      "Dans ses prévisions d'octobre, publiées le 13 octobre aux réunions du FMI et de la Banque mondiale à Bangkok, le FMI table sur 3,2 % de croissance au Bangladesh pour l'exercice 2026-2027, contre 4,3 % annoncés en avril [1][2].",
      "Si cela se confirme, ce serait la croissance annuelle la plus faible depuis l'exercice 1988-1989 (3,11 %) [1].",
      "Le FMI prévoit aussi une inflation moyenne de 10,9 %, plus haute que les 8,6 % de la Banque mondiale. En septembre, l'inflation était de 8,34 % selon l'institut statistique du pays [1]. La Banque mondiale (3,4 %) et la Banque asiatique de développement (4 %) ont aussi revu leurs prévisions à la baisse [1][2]."
    ],
    "why": [
      "La première phrase à retenir : un pays qui a longtemps grandi vite se retrouve avec une croissance faible et des prix qui montent en même temps [1].",
      "Pour une économie qui habille une grande partie du monde, un tel ralentissement pèse sur les salaires, les emplois et les commandes [1]. Les trois grandes institutions s'accordent sur le sens (moins de croissance), mais pas sur l'ampleur : c'est pourquoi il faut lire ces chiffres comme des prévisions, pas des résultats [1][2]."
    ],
    "forMe": "Une grande part des vêtements vendus en France est cousue au Bangladesh. Un pays qui ralentit et dont les coûts montent peut, à terme, faire bouger les prix des vêtements ou les délais de livraison.",
    "figures": [
      {
        "value": "3,2 %",
        "label": "croissance prévue par le FMI en 2026-2027 (4,3 % en avril)",
        "src": 1
      },
      {
        "value": "10,9 %",
        "label": "inflation moyenne prévue par le FMI pour 2026-2027",
        "src": 1
      },
      {
        "value": "8,34 %",
        "label": "inflation observée en septembre 2026",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "inflation-taux"
    ],
    "sources": [
      {
        "short": "Dhaka Tribune",
        "name": "Dhaka Tribune, « IMF: Bangladesh's GDP growth may drop to 3.2% in FY27 »",
        "url": "https://www.dhakatribune.com/business/421987/imf-bangladesh-s-inflation-may-rise-to-10.9%25"
      },
      {
        "short": "Asia News Network",
        "name": "Asia News Network, « IMF joins World Bank, Asia Development Bank in lowering Bangladesh growth outlook »",
        "url": "https://asianews.network/?p=307720"
      },
      {
        "short": "Prothom Alo",
        "name": "Prothom Alo, « Inflation may rise to nearly 11pc this fiscal year, IMF forecasts »",
        "url": "https://en.prothomalo.com/business/local/gtiqn8o3y4"
      }
    ]
  },
  {
    "id": "2026-10-21-irak-kirkouk-bp-champs-petrole",
    "date": "2026-10-21",
    "region": "Moyen-Orient",
    "theme": "eco",
    "geo": [
      {
        "name": "Kirkouk, Irak",
        "label": "Irak",
        "coords": [
          44.39,
          35.47
        ]
      }
    ],
    "title": "Irak : BP revient aux commandes des quatre grands champs pétroliers de Kirkouk",
    "summary": "Les champs passent des sociétés d'État irakiennes à un organisme commun avec BP, qui vise 450 000 barils par jour.",
    "points": [
      "Jeudi 15 octobre, l'exploitation des quatre grands champs de Kirkouk est passée des sociétés d'État North Oil et North Gas à un organisme d'exploitation commun avec BP. Le ministre irakien du Pétrole a supervisé le transfert par visioconférence [1][2].",
      "L'objectif est de porter la production à 450 000 barils par jour. Le contrat avait été activé en octobre 2025, avec une production de départ d'environ 328 000 barils par jour [2][3].",
      "En mars, BP avait retiré son personnel pour des raisons de sécurité pendant la guerre régionale, et la société d'État North Oil Company avait repris l'exploitation des champs [3]. La prochaine étape comprend la formation du personnel du ministère et le transfert de savoir-faire [2]."
    ],
    "why": [
      "La première phrase à retenir : l'Irak fait revenir un géant occidental sur ses plus vieux champs, au moment où le pétrole se vend très cher [1][2].",
      "Le pays est un grand producteur, mais ses voies d'exportation dépendent du détroit d'Ormuz, aujourd'hui sous tension. Produire plus à Kirkouk n'a de sens que si le pétrole peut sortir [2]."
    ],
    "forMe": "Plus de pétrole irakien sur le marché peut aider à calmer les prix du carburant. Mais tant que le détroit d'Ormuz reste fragile, l'effet à la pompe reste incertain.",
    "figures": [
      {
        "value": "450 000",
        "label": "barils par jour visés à Kirkouk",
        "src": 2
      },
      {
        "value": "328 000",
        "label": "barils par jour de production de départ prévue au contrat de 2025",
        "src": 3
      },
      {
        "value": "4",
        "label": "grands champs de Kirkouk concernés",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [
      "routes-maritimes"
    ],
    "sources": [
      {
        "short": "Shafaq News",
        "name": "Shafaq News, « BP partnership takes over Kirkuk's four oilfields »",
        "url": "https://shafaq.com/en/Economy/BP-partnership-takes-over-Kirkuk-s-four-oilfields"
      },
      {
        "short": "Iraqi News",
        "name": "Iraqi News, 15 octobre 2026",
        "url": "https://www.iraqinews.com/?p=239949"
      },
      {
        "short": "Rudaw",
        "name": "Rudaw, « Energy giant BP withdraws from four Kirkuk oil, gas fields; NOC takes over amid regional war » (16 mars 2026)",
        "url": "https://www.rudaw.net/english/business/16032026"
      }
    ]
  },
  {
    "id": "2026-10-21-riyad-conference-investissement-houthis",
    "date": "2026-10-21",
    "region": "Moyen-Orient",
    "theme": "mix",
    "geo": [
      {
        "name": "Riyad, Arabie saoudite",
        "label": "Riyad",
        "coords": [
          46.72,
          24.71
        ]
      }
    ],
    "title": "Riyad : sous les missiles houthis, la vitrine des investisseurs passe en partie à distance",
    "summary": "L'Arabie saoudite laisse des dirigeants suivre sa grande conférence d'investissement en ligne, après des attaques sur la capitale.",
    "points": [
      "Selon des sources citées par The Standard, l'Arabie saoudite laisse des dirigeants assister à sa conférence d'investissement FII à distance, après des attaques [1]. Des patrons du pétrole se sont retirés, mais le forum reste prévu en personne [2].",
      "Les houthis ont touché le principal aéroport de Riyad, et l'Arabie saoudite a intercepté de nouvelles attaques de missiles houthis sur la capitale [2]. Le Misk Global Forum du mois prochain a été annulé, et la 6e édition du festival du film de la mer Rouge est repoussée au 4e trimestre 2027, sans que ses organisateurs invoquent la guerre [2][3].",
      "Dans sa note du 19 octobre, BNP Paribas prévoit pour 2026 une baisse de 2 % du PIB de la région Moyen-Orient–Afrique du Nord et de 4,8 % pour les pays du Golfe, seul Oman gardant une croissance positive (4,1 %) [4]."
    ],
    "why": [
      "La première phrase à retenir : même le pays qui veut devenir la vitrine économique du Golfe doit désormais adapter ses grands rendez-vous à la guerre [1][2].",
      "Ces événements servent à attirer les capitaux étrangers. Les voir réduits ou annulés montre que le risque sécuritaire pèse sur les projets de diversification de l'économie saoudienne [2][4]. Les chiffres de BNP sont une prévision d'une banque, pas un résultat."
    ],
    "forMe": "Quand le Golfe est instable, le pétrole reste cher. Le Brent s'échangeait autour de 108 dollars le baril le 19 octobre [4]. Cela finit par se voir dans le prix du carburant et des billets d'avion.",
    "figures": [
      {
        "value": "−4,8 %",
        "label": "baisse du PIB attendue en 2026 dans les pays du Golfe (BNP Paribas)",
        "src": 4
      },
      {
        "value": "−2 %",
        "label": "baisse du PIB attendue en 2026 au Moyen-Orient et en Afrique du Nord (BNP Paribas)",
        "src": 4
      }
    ],
    "culture": [],
    "dossiers": [
      "routes-maritimes"
    ],
    "sources": [
      {
        "short": "The Standard",
        "name": "The Standard (HK), « Saudi Arabia to let executives attend FII conference remotely after attacks, sources say »",
        "url": "https://www.thestandard.com.hk/world/article/345474/Saudi-Arabia-to-let-executives-attend-FII-conference-remotely-after-attacks-sources-say"
      },
      {
        "short": "Energy Connects",
        "name": "Energy Connects, « Saudi Arabia intercepts new Houthi missile attacks on Riyadh » (oct. 2026)",
        "url": "https://www.energyconnects.com/news/gas-lng/2026/october/saudi-arabia-intercepts-new-houthi-missile-attacks-on-riyadh/"
      },
      {
        "short": "Al-Monitor",
        "name": "Al-Monitor, « Saudi Arabia pauses star-studded Red Sea film festival as Houthis hit kingdom » (sept. 2026)",
        "url": "https://www.al-monitor.com/originals/2026/09/saudi-arabia-pauses-star-studded-red-sea-film-festival-houthis-hit-kingdom"
      },
      {
        "short": "BNP Paribas",
        "name": "BNP Paribas, EcoNews du 19 octobre 2026",
        "url": "https://economic-research.bnpparibas.com/html/en-US/EcoNews-19-October-2026-10/19/2026,53859"
      }
    ]
  },
  {
    "id": "2026-10-21-soudan-frappe-drone-frontiere-soudan-du-sud",
    "date": "2026-10-21",
    "region": "Afrique",
    "theme": "geo",
    "geo": [
      {
        "name": "Amiet, Abyei",
        "label": "Abyei",
        "coords": [
          28.44,
          9.6
        ]
      }
    ],
    "title": "Soudan : une frappe de drone tue au moins 153 personnes sur un marché d'Abyei, à la frontière du Soudan du Sud",
    "summary": "Le marché d'Amiet, dans la région disputée d'Abyei, a été frappé le 19 octobre ; un officier de l'armée soudanaise dit qu'elle visait des camions-citernes destinés aux paramilitaires.",
    "points": [
      "Une frappe de drone a touché le 19 octobre le marché d'Amiet, au nord d'Abyei, région que se disputent le Soudan et le Soudan du Sud ; au moins 153 personnes ont été tuées, selon un responsable sud-soudanais [1][2].",
      "Un haut gradé de l'armée soudanaise a dit que l'armée avait mené la frappe pour viser des camions-citernes destinés aux paramilitaires des Forces de soutien rapide (FSR) ; le Soudan du Sud accuse l'armée soudanaise [2].",
      "Le Haut-Commissaire de l'ONU aux droits de l'homme dénonce une vague de frappes de drones au Soudan : au moins 306 morts dans les trois premières semaines d'octobre [3]."
    ],
    "why": [
      "À retenir : la guerre entre l'armée soudanaise et les FSR, commencée en 2023, se joue de plus en plus avec des drones, et les civils en paient le prix [2][3].",
      "Abyei est une zone riche en pétrole, disputée depuis l'indépendance du Soudan du Sud ; le carburant qui y circule est devenu une cible [1][2]."
    ],
    "forMe": "Cette guerre est loin, mais elle touche l'un des pays les plus pauvres du monde, sur une route du pétrole sud-soudanais : la sécurité décide de ce qu'un pays peut vendre [1][2].",
    "figures": [
      {
        "value": "153",
        "label": "morts au moins, selon un responsable sud-soudanais",
        "src": 1
      },
      {
        "value": "306",
        "label": "morts dans des frappes de drones au Soudan en trois semaines, selon l'ONU",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « Drone attack in disputed Sudan-South Sudan border region kills at least 153 » (21 octobre 2026)",
        "url": "https://www.aljazeera.com/news/2026/10/21/drone-attack-in-disputed-sudan-south-sudan-border-region-kills-at-least-153"
      },
      {
        "short": "CNN",
        "name": "CNN (AP), « Drone strike on a market in disputed African region of Abyei kills at least 153 » (20 octobre 2026)",
        "url": "https://edition.cnn.com/2026/10/20/africa/drone-strike-abeyi-south-sudan-latam-intl"
      },
      {
        "short": "ONU Info",
        "name": "ONU Info, « Sudan: Drone strikes killed at least 306 people in three weeks » (octobre 2026)",
        "url": "https://news.un.org/en/story/2026/10/1168661"
      }
    ]
  },
  {
    "id": "2026-10-21-ue-sommet-gaz-140-pourcent-mesures-energie",
    "date": "2026-10-21",
    "region": "Europe",
    "theme": "eco",
    "geo": [
      {
        "name": "Bruxelles, Belgique",
        "label": "Bruxelles",
        "coords": [
          4.35,
          50.85
        ]
      }
    ],
    "title": "Le gaz coûte 140 % plus cher qu'en février : les Européens sortent leurs mesures d'urgence avant l'hiver",
    "summary": "Au sommet de mi-octobre, les dirigeants de l'UE ont décidé de premières mesures sur l'énergie, alors que le budget 2028-2034 divise.",
    "points": [
      "Ursula von der Leyen a indiqué que les prix du gaz dans l'UE ont augmenté de 140 % depuis février et que le gazole a doublé. Elle a cité des chèques énergie pour les familles modestes en France et en Roumanie [1].",
      "Les dirigeants ont convenu de mesures à court terme : prolonger le cadre temporaire des aides d'État, repousser d'un an certaines obligations du règlement sur le méthane, lancer un dialogue sur les capacités de raffinage et renforcer les achats groupés d'énergie [2][3].",
      "Les discussions sur le budget européen 2028-2034 restent tendues : le Conseil veut un accord avant la fin 2026 pour que l'argent circule sans interruption dès janvier 2028 [2][3]."
    ],
    "why": [
      "La première phrase à retenir : l'Europe entre dans l'hiver avec un gaz beaucoup plus cher et répond par des mesures de court terme plutôt que par une réforme profonde [1][2].",
      "Les aides d'État permettent aux gouvernements de soutenir leurs entreprises et leurs ménages, mais elles coûtent de l'argent public à un moment où le budget commun est disputé [2][3]."
    ],
    "forMe": "Un gaz plus cher se retrouve sur les factures de chauffage et d'électricité, et dans le prix de produits qui demandent beaucoup d'énergie. Les États peuvent compenser en partie avec des aides, financées par l'impôt.",
    "figures": [
      {
        "value": "+140 %",
        "label": "hausse des prix du gaz dans l'UE depuis février, selon Ursula von der Leyen",
        "src": 1
      },
      {
        "value": "×2",
        "label": "prix du gazole, doublé selon la présidente de la Commission",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Lovguiden (Commission)",
        "name": "Lovguiden, « Von der Leyen : gaspriser op 140 % » (6 oct. 2026)",
        "url": "https://lovguiden.dk/en/det-offentlige/europa-kommissionen-press-corner/2026-10-06-von-der-leyen-gaspriser-op-140-maalrettet-stoette-og-faelles-energiindkoeb"
      },
      {
        "short": "The Star",
        "name": "The Star, « EU summit exposes budget tensions as bloc outlines energy relief measures » (17 oct. 2026)",
        "url": "https://www.thestar.com.my/news/world/2026/10/17/eu-summit-exposes-budget-tensions-as-bloc-outlines-energy-relief-measures"
      },
      {
        "short": "Lovguiden (Conseil)",
        "name": "Lovguiden, Conseil de l'UE : sommet du 16 octobre 2026 (énergie, budget)",
        "url": "https://www.lovguiden.dk/en/det-offentlige/raadet-for-den-europaeiske-union/2026-10-16-eu-topmoede-energipriser-ets2-naeste-eu-budget-og-montenegro"
      }
    ]
  },
  {
    "id": "2026-10-19-chine-croissance-exports-t3",
    "date": "2026-10-19",
    "region": "Asie",
    "theme": "eco",
    "geo": [
      {
        "name": "Pékin, Chine",
        "label": "Chine",
        "coords": [
          116.4,
          39.9
        ]
      }
    ],
    "title": "La Chine accélère grâce à ses exportations, mais ses habitants dépensent toujours peu",
    "summary": "L'économie chinoise a progressé de 4,5 % entre juillet et septembre, mieux que prévu. Ce sont les ventes à l'étranger qui portent la croissance, pas la consommation des ménages.",
    "points": [
      "La Chine annonce 4,5 % de croissance sur un an pour le troisième trimestre, au-dessus des prévisions. Au deuxième trimestre, elle était à 4,3 %, la progression la plus lente en plus de trois ans [1][2].",
      "Ce sont les exportations qui ont tiré le trimestre. Selon l'analyse de l'agence AP, la Chine est en passe de dépasser son excédent commercial record de 1 200 milliards de dollars de l'an dernier [1].",
      "La demande intérieure reste faible, pesée par une crise de l'immobilier qui dure depuis des années. Un économiste cité par AP juge même ce chiffre de croissance « de moins en moins fiable » pour mesurer la santé de l'économie [1]."
    ],
    "why": [
      "Le chiffre est bon, mais il cache un déséquilibre : la Chine produit beaucoup et vend le surplus au reste du monde, alors que ses propres habitants consomment peu [1].",
      "Pékin s'est fixé une croissance de 4,5 % à 5 % pour 2026, et le FMI vient de ramener sa propre prévision à 4,5 %, tout juste le bas de la cible [1]. Plus la Chine exporte, plus ses partenaires, Europe en tête, s'inquiètent de voir leurs usines concurrencées."
    ],
    "forMe": "Quand la Chine vend plus qu'elle n'achète, ses produits arrivent en masse en Europe, à des prix bas : c'est bon pour ton porte-monnaie, mais cela met la pression sur les usines européennes et nourrit les débats sur les droits de douane.",
    "figures": [
      {
        "value": "4,5 %",
        "label": "croissance de la Chine au 3e trimestre, sur un an",
        "src": 1
      },
      {
        "value": "4,3 %",
        "label": "croissance du trimestre précédent, la plus faible en plus de trois ans",
        "src": 1
      },
      {
        "value": "1 200",
        "label": "milliards de dollars : excédent commercial record de l’an dernier, bientôt dépassé selon AP",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "droits-de-douane"
    ],
    "sources": [
      {
        "short": "AP / US News",
        "name": "AP via US News, « China's Economy Accelerates on Robust Exports as Domestic Weakness Persists »",
        "url": "https://www.usnews.com/news/business/articles/2026-10-18/chinas-economy-grew-4-5-in-the-previous-quarter-better-than-forecasts"
      },
      {
        "short": "AP / 1News",
        "name": "AP via 1News, « China's economy grew 4.5% in previous quarter, better than forecasts »",
        "url": "https://www.1news.co.nz/2026/10/19/chinas-economy-grew-45-in-previous-quarter-better-than-forecasts/"
      }
    ]
  },
  {
    "id": "2026-10-19-guyana-croissance-petrole",
    "date": "2026-10-19",
    "region": "Amériques",
    "theme": "eco",
    "geo": [
      {
        "name": "Georgetown, Guyana",
        "label": "Guyana",
        "coords": [
          -58.15,
          6.8
        ]
      }
    ],
    "title": "Guyana : le petit pays qui grandit de près de 24 % par an grâce à son pétrole",
    "summary": "La Banque mondiale relève sa prévision de croissance du Guyana à 23,7 % pour 2026, la plus rapide de la région, portée par le pétrole en mer.",
    "points": [
      "Dans sa mise à jour d'octobre sur l'Amérique latine et les Caraïbes, la Banque mondiale prévoit 23,7 % de croissance pour le Guyana en 2026. En avril, elle annonçait 16,3 % [1][2].",
      "Le pays avait déjà vu son économie grandir de 33,8 % en 2023 puis de 43,8 % en 2024, et la Banque estime 19,3 % pour 2025 [1].",
      "Le gouvernement est plus prudent : son budget 2026 table sur 16,2 % de croissance, avec un pétrole en hausse de 17,9 %, soit environ 840 000 barils par jour contre 715 000 en 2025 [3]."
    ],
    "why": [
      "Le moteur, c'est le pétrole extrait au large des côtes : la Banque mondiale estime que le Guyana tire à lui seul la croissance de toute la sous-région [1].",
      "L'écart entre 23,7 % (Banque mondiale) et 16,2 % (gouvernement) rappelle qu'une prévision n'est pas un résultat. Et un pays qui dépend autant d'une seule ressource reste exposé si le prix du baril ou la production baisse [1][3]."
    ],
    "forMe": "Quand le baril monte, comme en ce moment, certains petits pays producteurs s'enrichissent très vite. Mais ces revenus dépendent d'une seule ressource : si le prix ou la production baisse, la croissance retombe.",
    "figures": [
      {
        "value": "23,7 %",
        "label": "croissance prévue du Guyana en 2026 par la Banque mondiale (16,3 % en avril)",
        "src": 1
      },
      {
        "value": "43,8 %",
        "label": "croissance de l'économie du Guyana en 2024",
        "src": 1
      },
      {
        "value": "840 000",
        "label": "barils de pétrole par jour attendus en 2026 selon le budget (715 000 en 2025)",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Rio Times",
        "name": "The Rio Times, « World Bank Lifts Guyana Growth to 23.7% »",
        "url": "https://www.riotimesonline.com/guyana-world-bank-growth-forecast-23-7-percent-2026-2"
      },
      {
        "short": "Guyana Chronicle",
        "name": "Guyana Chronicle, « Guyana continues to lead regional growth » (6 oct. 2026)",
        "url": "https://guyanachronicle.com/2026/10/06/guyana-continues-to-lead-regional-growth/"
      },
      {
        "short": "OilNOW",
        "name": "OilNOW, « Oil to remain dominant driver of Guyana's 16.2% growth in 2026 – Finance Minister »",
        "url": "https://oilnow.gy/?p=91631"
      }
    ]
  },
  {
    "id": "2026-10-19-cacao-cote-divoire-ghana-prix",
    "date": "2026-10-19",
    "region": "Afrique",
    "theme": "eco",
    "geo": [
      {
        "name": "Abidjan, Côte d'Ivoire",
        "label": "Côte d'Ivoire",
        "coords": [
          -4.02,
          5.35
        ]
      },
      {
        "name": "Accra, Ghana",
        "label": "Ghana",
        "coords": [
          -0.19,
          5.6
        ]
      }
    ],
    "title": "Cacao : la Côte d'Ivoire baisse de 57 % le prix payé aux planteurs, le Ghana le relève",
    "summary": "Après l'effondrement des cours, les deux premiers producteurs mondiaux de cacao font des choix opposés. Les planteurs ivoiriens toucheront beaucoup moins, les ghanéens un peu plus.",
    "points": [
      "La Côte d'Ivoire a confirmé le 2 septembre que les planteurs recevraient 1 200 francs CFA le kilo pour la saison 2026-2027, soit 57 % de moins que les 2 800 francs du début de la saison précédente [1][2].",
      "Le Ghana fait l'inverse : il a légèrement relevé son prix, à 42 400 cédis la tonne, grâce à une nouvelle loi qui garantit aux producteurs au moins 70 % de la valeur à l'export de leurs fèves [1].",
      "Les deux pays subissent le même choc : le cacao avait atteint un record de 12 906 dollars la tonne en décembre 2024, puis est tombé sous 3 000 dollars en février 2026. Tous deux vendent aussi une grande partie de leur récolte à l'avance [1]."
    ],
    "why": [
      "L'explication habituelle est financière : la Côte d'Ivoire avait vendu une partie de sa récolte à l'avance à bas prix, alors que le Ghana avait déjà baissé son prix en février [1].",
      "L'auteur de l'analyse y ajoute une autre raison : le rapport de force entre planteurs, État et acheteurs n'est pas le même dans les deux pays [1]. Pour des millions de familles, c'est la différence entre un revenu qui tient et un revenu qui s'effondre."
    ],
    "forMe": "Le cacao est la matière première du chocolat. Quand les prix mondiaux s'envolent puis retombent, ce sont les planteurs d'Afrique de l'Ouest qui encaissent le choc, bien avant que le prix de ta tablette ne change.",
    "figures": [
      {
        "value": "− 57 %",
        "label": "baisse du prix payé aux planteurs ivoiriens (1 200 francs CFA le kilo)",
        "src": 1
      },
      {
        "value": "12 906 $",
        "label": "record du cacao en décembre 2024, la tonne",
        "src": 1
      },
      {
        "value": "70 %",
        "label": "part minimale de la valeur export garantie aux producteurs ghanéens par la nouvelle loi",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "African Arguments",
        "name": "African Arguments, « Same Cocoa Crash, Opposite Answers: what Ghana and Côte d'Ivoire Reveal about Power in Global Trade » (oct. 2026)",
        "url": "https://africanarguments.org/2026/10/same-cocoa-crash-opposite-answers-what-ghana-and-cote-divoire-reveal-about-power-in-global-trade/"
      },
      {
        "short": "Horonya Finance",
        "name": "Horonya Finance, « Côte d'Ivoire : le prix du cacao maintenu à 1 200 FCFA le kilogramme pour la campagne 2026/2027 »",
        "url": "https://www.horonyafinance.com/cote-divoire-le-prix-du-cacao-maintenu-a-1-200-fcfa-le-kilogramme-pour-la-campagne-2026-2027/"
      }
    ]
  },
  {
    "id": "2026-10-19-serbie-nis-raffinerie-sanctions",
    "date": "2026-10-19",
    "region": "Europe",
    "theme": "mix",
    "geo": [
      {
        "name": "Belgrade, Serbie",
        "label": "Serbie",
        "coords": [
          20.46,
          44.82
        ]
      }
    ],
    "title": "Serbie : la seule raffinerie du pays tourne sous dérogation américaine, jusqu'au 30 octobre",
    "summary": "Le pétrolier serbe NIS, détenu par des Russes, est sous sanctions américaines. Washington lui permet de continuer à importer du brut jusqu'à la vente à un groupe hongrois.",
    "points": [
      "La Serbie a obtenu des États-Unis une nouvelle dérogation aux sanctions pour NIS : l'entreprise peut continuer à importer du pétrole brut jusqu'au 30 octobre, en attendant la vente de sa part russe majoritaire au hongrois MOL [1].",
      "NIS exploite l'unique raffinerie de Serbie, qui couvre environ 80 % des besoins du pays [1].",
      "Washington a sanctionné NIS en octobre 2025 pour frapper l'énergie russe, et exigé que Gazprom Neft et Gazprom cèdent leurs parts, soit 56 % au total. MOL a signé un accord provisoire en janvier et s'est engagé à garder la raffinerie de Pančevo ouverte [1][2]."
    ],
    "why": [
      "Le pétrole arrive par l'oléoduc Janaf, qui passe par la Croatie : sans autorisation américaine, ce robinet peut se fermer. Et l'on ne sait pas encore si la dérogation sera prolongée ni si la vente est conclue [1].",
      "C'est un exemple de la façon dont les sanctions visent une entreprise… et touchent tout un pays qui en dépend pour son carburant [1][2]."
    ],
    "forMe": "Les sanctions ne frappent pas que la Russie : elles se répercutent sur des pays tiers et sur leurs prix de carburant. C'est ce même type de chaîne qui relie des décisions prises à Washington au prix du plein dans toute l'Europe centrale.",
    "figures": [
      {
        "value": "30/10",
        "label": "date limite de la dérogation américaine accordée à NIS (30 octobre)",
        "src": 1
      },
      {
        "value": "≈ 80 %",
        "label": "des besoins de la Serbie couverts par sa seule raffinerie",
        "src": 1
      },
      {
        "value": "56 %",
        "label": "part de NIS détenue par les russes Gazprom Neft et Gazprom, à vendre à MOL",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "sanctions"
    ],
    "sources": [
      {
        "short": "SRN News",
        "name": "SRN News, « Serbia secures US sanctions waiver for its Russian-owned NIS oil firm, energy minister says »",
        "url": "https://srnnews.com/serbia-secures-us-sanctions-waiver-for-its-russian-owned-nis-oil-firm-energy-minister-says/"
      },
      {
        "short": "Hungarian Conservative",
        "name": "Hungarian Conservative, « Hungary's MOL Strikes Deal to Buy Russian Majority Stake in Serbia's Oil Firm NIS »",
        "url": "https://www.hungarianconservative.com/articles/current/nis-mol-gazprom-oil-company-energy-us-sanctions/"
      }
    ]
  },
  {
    "id": "2026-10-19-malaisie-ue-libre-echange-palme",
    "date": "2026-10-19",
    "region": "Asie",
    "theme": "geo",
    "geo": [
      {
        "name": "Kuala Lumpur, Malaisie",
        "label": "Malaisie",
        "coords": [
          101.69,
          3.14
        ]
      }
    ],
    "title": "Malaisie–Europe : l'accord de libre-échange est fait à 80 %, mais l'huile de palme bloque encore",
    "summary": "Kuala Lumpur vise une signature fin juin 2027 avec l'Union européenne. Les négociations durent depuis 2010, et l'accord ne s'appliquerait pas avant 2029.",
    "points": [
      "Le ministre malaisien du Commerce, Johari Abdul Ghani, a annoncé le 13 octobre que son pays veut signer l'accord avec l'Union européenne d'ici fin juin 2027. Près de 80 % des négociations sont terminées [1].",
      "Les discussions ont commencé en 2010, bloquées en 2012 après sept séries de négociations à cause de désaccords sur l'huile de palme, puis repris en 2025 après une annonce du Premier ministre Anwar Ibrahim et d'Ursula von der Leyen [1].",
      "Selon une analyse du MVO, l'accord ne s'appliquerait sans doute pas avant le second semestre 2029 : la relecture juridique, la traduction et la ratification prendront au moins 18 à 24 mois. Et l'accord UE-Indonésie donne déjà un accès préférentiel à l'huile de palme indonésienne [2]."
    ],
    "why": [
      "L'huile de palme est le nœud du dossier : l'Europe pose des règles environnementales et la Malaisie estime qu'elles pénalisent son produit phare [1][2].",
      "Chaque accord signé par un concurrent désavantage ceux qui n'en ont pas. La Malaisie se presse donc de conclure, sous peine de payer plus de droits de douane que l'Indonésie pendant la période de transition [2]."
    ],
    "forMe": "L'huile de palme est dans beaucoup de produits de tous les jours (biscuits, pâtes à tartiner, cosmétiques). Un accord pourrait faciliter ses échanges, mais il doit concilier commerce et protection des forêts, un sujet sur lequel les Européens sont très regardants.",
    "figures": [
      {
        "value": "≈ 80 %",
        "label": "des négociations Malaisie–UE déjà terminées",
        "src": 1
      },
      {
        "value": "06/2027",
        "label": "objectif de signature fixé par le ministre malaisien (fin juin 2027)",
        "src": 1
      },
      {
        "value": "2010",
        "label": "année du début des discussions, interrompues de 2012 à 2025",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "droits-de-douane"
    ],
    "sources": [
      {
        "short": "The Edge Malaysia",
        "name": "The Edge Malaysia, édition du 13 octobre 2026 (déclarations de Johari Abdul Ghani)",
        "url": "https://theedgemalaysia.com/node/821620"
      },
      {
        "short": "MVO",
        "name": "MVO, « EU–Malaysia: liberalising trade in palm oil »",
        "url": "https://mvoketenorganisatie.h5mag.com/mvo_magazine_3_2026_en/eu-malaysia_liberalising_trade_in_palm_oil"
      }
    ]
  },
  {
    "id": "2026-10-19-iran-plan-sept-jours-ormuz",
    "date": "2026-10-19",
    "region": "Moyen-Orient",
    "theme": "geo",
    "geo": [
      {
        "name": "Téhéran, Iran",
        "label": "Iran",
        "coords": [
          51.39,
          35.69
        ]
      }
    ],
    "title": "Iran : le plan en sept jours pour rouvrir Ormuz reste sur la table, Washington en doute",
    "summary": "Téhéran propose de rouvrir le détroit en échange de la fin du blocus naval américain et d'une levée des sanctions pétrolières. Le ministre iranien dit que l'offre tient toujours.",
    "points": [
      "L'Iran a présenté aux États-Unis, par des intermédiaires, un plan en sept jours : arrêt des combats, réouverture du détroit d'Ormuz et reprise des négociations sur le nucléaire [3].",
      "Selon le ministre Abbas Araghchi, les premières étapes prendraient quatre à cinq jours, le détroit rouvrirait le sixième jour et les discussions sur un accord final commenceraient le septième. Téhéran demande en échange la levée du blocus naval américain, une dérogation sur ses ventes de pétrole et le dégel d'environ 12 milliards de dollars d'avoirs [2][3].",
      "Le département d'État américain affirme que le détroit est déjà ouvert, et Mike Pompeo juge l'offre « probablement pas sérieuse ». Le Wall Street Journal a rapporté que Donald Trump l'aurait rejetée. Le 18 octobre, Abbas Araghchi a répété que la proposition restait sur la table [1][2][3]."
    ],
    "why": [
      "Les deux camps ne décrivent même pas la situation de la même façon : pour Washington, Ormuz est ouvert, pour Téhéran, il faut négocier pour le rouvrir [3]. Tant que ce désaccord dure, les pétroliers hésitent et le baril reste cher.",
      "Le plan lie trois sujets qui bloquent : le détroit, le nucléaire et les sanctions. Un accord sur l'un obligerait à avancer sur les deux autres [2][3]."
    ],
    "forMe": "Ormuz est un passage clé du pétrole du Golfe. Quand ce passage est incertain, le prix du carburant que tu paies en France peut monter quelques semaines plus tard.",
    "figures": [
      {
        "value": "7",
        "label": "jours : durée du plan iranien (détroit rouvert le 6e jour, négociations le 7e)",
        "src": 2
      },
      {
        "value": "≈ 12",
        "label": "milliards de dollars d’avoirs iraniens gelés que l’Iran demande de libérer",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [
      "routes-maritimes",
      "sanctions"
    ],
    "sources": [
      {
        "short": "Fox News",
        "name": "Fox News, suivi en direct de la guerre États-Unis–Iran du 18 octobre 2026",
        "url": "https://www.foxnews.com/live-news/us-iran-war-peace-talks-oil-strait-hormuz-trump-october-18"
      },
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « Iran says it awaits US response on seven-day roadmap to end war » (25 sept. 2026)",
        "url": "https://www.aljazeera.com/news/2026/9/25/iran-says-it-awaits-us-response-on-seven-day-roadmap-to-end-war"
      },
      {
        "short": "ABC News (WJLA)",
        "name": "ABC News, « Iran pitches seven day roadmap for ceasefire, renewed nuclear talks »",
        "url": "https://wjla.com/news/nation-world/iran-pitches-seven-day-roadmap-for-ceasefire-renewed-nuclear-talks-strait-hormuz-tehran-nuclear-xi-jinping"
      }
    ]
  },
  {
    "id": "2026-10-19-ukraine-locomotives-ble-fer",
    "date": "2026-10-19",
    "region": "Europe",
    "theme": "mix",
    "geo": [
      {
        "name": "Kiev, Ukraine",
        "label": "Ukraine",
        "coords": [
          30.52,
          50.45
        ]
      }
    ],
    "title": "Ukraine : à court de locomotives, le pays peine à exporter son blé et son fer",
    "summary": "Les frappes russes sur les trains ont presque vidé la réserve de locomotives. Kiev cherche des machines auprès de pays européens qui utilisent le même écartement de rails.",
    "points": [
      "Selon le Financial Times, citant le ministre de l'Agriculture Taras Vyssotski, l'Ukraine a presque épuisé sa réserve de locomotives à cause des frappes russes. Kiev discute avec des pays européens qui ont le même écartement de rails [1][2].",
      "La Russie a intensifié ses attaques contre les trains qui transportent du blé et du minerai de fer, deux grandes exportations ukrainiennes. L'opérateur portuaire TIS a perdu trois locomotives près du port de Pivdennyi [1][2].",
      "Depuis le début de l'invasion, 533 locomotives d'Ukrzaliznytsia et 75 d'entreprises privées ont été endommagées, selon des données du ministère citées par Radio Liberty. La Slovaquie en propose trois et la Lituanie trois autres [3][1]."
    ],
    "why": [
      "Un champ de blé ne suffit pas : il faut des trains pour amener les grains jusqu'aux ports. Même si les ports de la mer Noire fonctionnent, le dernier maillon ferroviaire peut bloquer [1].",
      "Les autorités estiment que les machines disponibles peuvent assurer le fonctionnement normal du réseau pour l'instant, mais la réserve de secours est presque épuisée [1][2]."
    ],
    "forMe": "L'Ukraine est un grand exportateur de céréales. Si ses trains manquent, ses livraisons de blé et de maïs peuvent ralentir, ce qui pèse sur les prix mondiaux de l'alimentation.",
    "figures": [
      {
        "value": "533",
        "label": "locomotives d'Ukrzaliznytsia endommagées depuis le début de l'invasion",
        "src": 3
      },
      {
        "value": "6",
        "label": "locomotives proposées par la Slovaquie (3) et la Lituanie (3)",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Meduza",
        "name": "Meduza, « Russian strikes leave Ukraine with almost no spare locomotives, further complicating grain exports » (5 oct. 2026)",
        "url": "https://meduza.io/en/news/2026/10/05/russian-strikes-leave-ukraine-with-almost-no-spare-locomotives-further-complicating-grain-exports"
      },
      {
        "short": "Kurs / FT",
        "name": "Kurs, reprenant le Financial Times : « Ukraine has almost exhausted its locomotive reserve due to Russian strikes »",
        "url": "https://kurs.com.ua/en/novost/1482607-ukrayina-maizhe-vicherpala-rezerv-lokomotiviv-cherez-rosiiski-udari-ft"
      },
      {
        "short": "United24",
        "name": "United24 Media, « Russian strikes damage 533 Ukrainian rail locomotives, forcing Kyiv to seek replacements »",
        "url": "https://united24media.com/war-in-ukraine/russian-strikes-damage-533-ukrainian-rail-locomotives-forcing-kyiv-to-seek-replacements-23130"
      }
    ]
  },
  {
    "id": "2026-10-19-kenya-airways-sauvetage",
    "date": "2026-10-19",
    "region": "Afrique",
    "theme": "eco",
    "geo": [
      {
        "name": "Nairobi, Kenya",
        "label": "Kenya",
        "coords": [
          36.82,
          -1.29
        ]
      }
    ],
    "title": "Kenya sauve sa compagnie aérienne : 11 avions sur 34 sont cloués au sol",
    "summary": "Le gouvernement kényan accorde 350 millions de dollars à Kenya Airways et transforme une partie de sa dette en capital. La compagnie cherche encore un investisseur stratégique.",
    "points": [
      "Le gouvernement kényan a approuvé un prêt d'actionnaire de 350 millions de dollars pour Kenya Airways, remboursable sur dix ans maximum et convertible en capital. L'argent doit servir à payer des dettes urgentes et à remettre des avions en service [1][2].",
      "Il a aussi validé la conversion d'environ 122 milliards de shillings (près de 940 millions de dollars) de prêts publics en instrument assimilé à du capital. Cela n'apporte pas d'argent frais, mais allège la dette de la compagnie [1][2].",
      "Onze des 34 avions de la compagnie sont cloués au sol, dont deux Boeing 787-8, avec une remise en service visée début 2027. Elle cherche au moins 1,5 milliard de dollars auprès d'un investisseur stratégique, attendu au premier trimestre 2027 [1][2]."
    ],
    "why": [
      "Une compagnie nationale est un symbole, mais aussi un outil économique : elle relie le pays au monde pour le tourisme, les fleurs ou le café exportés. Sans avions, ces flux ralentissent [1].",
      "Les mesures restent soumises à des approbations d'actionnaires et de régulateurs : le sauvetage n'est donc pas encore terminé [1]."
    ],
    "forMe": "Les compagnies publiques en difficulté sont un classique, de l'Afrique à l'Europe. Cela montre pourquoi les États hésitent entre les soutenir avec l'argent public et les laisser trouver un partenaire privé.",
    "figures": [
      {
        "value": "350",
        "label": "millions de dollars : prêt d’actionnaire approuvé pour Kenya Airways",
        "src": 1
      },
      {
        "value": "11/34",
        "label": "avions de la compagnie actuellement cloués au sol",
        "src": 1
      },
      {
        "value": "1,5",
        "label": "milliard de dollars de capital frais recherché auprès d’un investisseur stratégique",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Zawya",
        "name": "Zawya, « Kenya approves $350mln in shareholder financing for Kenya Airways »",
        "url": "https://zawya.com/en/economy/kenyas-approves-350mln-in-shareholder-financing-for-kenya-airways-1587023"
      },
      {
        "short": "Business Daily",
        "name": "Business Daily Africa, « State approves Sh45bn financing for struggling KQ »",
        "url": "https://www.businessdailyafrica.com/bd/corporate/companies/state-approves-sh45bn-financing-for-struggling-kq-5626396"
      }
    ]
  },
  {
    "id": "2026-10-07-rdc-cobalt",
    "date": "2026-10-07",
    "theme": "geo",
    "region": "Afrique",
    "title": "RDC : le pays du cobalt ferme le robinet pour faire monter les prix",
    "summary": "La République démocratique du Congo, premier producteur mondial de cobalt, limite ses exportations. Le métal des batteries a flambé.",
    "geo": [
      {
        "name": "Kolwezi (RDC)",
        "label": "RD Congo",
        "coords": [
          25.47,
          -10.71
        ]
      }
    ],
    "points": [
      "Après avoir suspendu ses exportations en 2025, la RDC les plafonne à 87 000 tonnes par an en 2026 et 2027, soit 7 250 tonnes par mois [1].",
      "Fin juin, l'autorité congolaise a même supprimé les quotas du deuxième trimestre non utilisés, retirant 15 000 à 20 000 tonnes du marché [3].",
      "Le cobalt a commencé 2026 au-dessus de 56 000 dollars la tonne, un niveau plus vu depuis 2022 [2]."
    ],
    "why": [
      "Le cobalt est indispensable aux batteries des téléphones et de nombreuses voitures électriques. La RDC en produit plus de la moitié du monde. En limitant l'offre, Kinshasa a réussi à faire remonter des prix qui s'étaient effondrés [1].",
      "C'est le paradoxe de la RDC : un sous-sol parmi les plus riches de la planète (cobalt, cuivre, coltan), mais une population parmi les plus pauvres, et un est du pays déchiré par la guerre autour des mines."
    ],
    "forMe": "Ton smartphone contient probablement du cobalt congolais. Quand son prix monte, celui des batteries suit, et la course aux voitures électriques devient une course aux minerais.",
    "figures": [
      {
        "value": "87 000 t",
        "label": "de cobalt exportables par an en 2026-2027",
        "src": 1
      },
      {
        "value": "≈ 56 400 $",
        "label": "la tonne de cobalt début 2026",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [
      "semi-conducteurs"
    ],
    "sources": [
      {
        "short": "Benchmark",
        "name": "Benchmark Mineral Intelligence, « DRC to lift cobalt export ban and impose quotas through 2027 »",
        "url": "https://source.benchmarkminerals.com/article/drc-to-lift-cobalt-export-ban-and-impose-quotas-through-2027"
      },
      {
        "short": "SunSirs",
        "name": "SunSirs, « Cobalt prices surged in 2025, and here's the outlook for 2026 »",
        "url": "https://www.sunsirs.com/m/page/commodity-news-detail/commodity-news-detail-29434.html"
      },
      {
        "short": "Fastmarkets",
        "name": "Fastmarkets, « DRC may reduce cobalt quota if market needs rebalancing, ARECOMS says »",
        "url": "https://www.fastmarkets.com/insights/drc-may-reduce-cobalt-quota-if-market-needs-rebalancing-arecoms-says-exclusive/"
      }
    ]
  },
  {
    "id": "2026-10-07-indonesie-nickel",
    "date": "2026-10-07",
    "theme": "eco",
    "region": "Asie",
    "title": "Indonésie : le pays du nickel serre la vis",
    "summary": "Premier producteur mondial de nickel, l'Indonésie réduit sa production et contrôle davantage ses exportations. Les prix remontent.",
    "geo": [
      {
        "name": "Sulawesi (Indonésie)",
        "label": "Indonésie",
        "coords": [
          121.9,
          -2.8
        ]
      }
    ],
    "points": [
      "L'Indonésie a réduit d'environ un tiers son quota de production de minerai de nickel pour 2026 [1].",
      "À partir du 1er janvier 2027, certains produits du nickel ne pourront plus être exportés que par des entreprises d'État [2].",
      "Le prix du nickel a dépassé 18 000 dollars la tonne, au plus haut depuis deux ans [3]."
    ],
    "why": [
      "Depuis 2020, l'Indonésie interdit d'exporter son minerai brut : elle oblige les industriels à construire des usines de transformation sur place, souvent avec des capitaux chinois. Le pays est ainsi devenu un géant du nickel [3].",
      "En limitant maintenant la production, Jakarta fait comme l'OPEP avec le pétrole : moins de volume pour des prix plus élevés."
    ],
    "forMe": "Le nickel entre dans l'acier inoxydable de ta cuisine et dans beaucoup de batteries de voitures électriques. Quand l'Indonésie bouge, ces prix bougent.",
    "figures": [
      {
        "value": "≈ -1/3",
        "label": "de quota de production de nickel en 2026",
        "src": 1
      },
      {
        "value": "> 18 000 $",
        "label": "la tonne de nickel, au plus haut depuis deux ans",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Argus",
        "name": "Argus Media, « Indonesia to cut nickel mining quota in 2026 »",
        "url": "https://www.argusmedia.com/news-and-insights/latest-market-news/2787275-indonesia-to-cut-nickel-mining-quota-in-2026"
      },
      {
        "short": "SMM",
        "name": "SMM, « Indonesia government officially releases new export controls on FeNi and NPI » (juil. 2026)",
        "url": "https://news.metal.com/newscontent/103996838-smm-tin-nhanh-niken-chính-phủ-indonesia-chính-thức-công-bố-các-biện-pháp-kiểm-soát-xuất-khẩu-mới-đối-với-feni-và-npi"
      },
      {
        "short": "The Oregon Group",
        "name": "The Oregon Group, « Can nickel prices hit $25,000 in 2026? »",
        "url": "https://theoregongroup.com/commodities/nickel/can-nickel-prices-hit-25000-in-2026/"
      }
    ]
  },
  {
    "id": "2026-10-07-chine-terres-rares",
    "date": "2026-10-07",
    "theme": "geo",
    "region": "Asie",
    "title": "Terres rares : la Chine tient le monde entier, échéance le 10 novembre",
    "summary": "Pékin a suspendu pour un an ses restrictions les plus dures sur les terres rares. La trêve expire dans un mois.",
    "geo": [
      {
        "name": "Baotou (Chine)",
        "label": "Chine",
        "coords": [
          109.84,
          40.66
        ]
      }
    ],
    "points": [
      "Annoncées en octobre 2025, les nouvelles restrictions chinoises à l'export de terres rares sont suspendues jusqu'au 10 novembre 2026 [1].",
      "En juin 2026, la Chine a ajouté dix entreprises américaines à sa liste noire, dont le principal producteur de terres rares des États-Unis [2].",
      "Les contrôles plus anciens sur le tungstène, le bismuth ou l'indium restent en vigueur [1]."
    ],
    "why": [
      "Les terres rares sont 17 métaux indispensables aux aimants des moteurs électriques, des éoliennes, des smartphones et des missiles. La Chine domine l'essentiel du raffinage mondial, ce qui lui donne un énorme moyen de pression [3].",
      "C'est la réponse de Pékin aux restrictions américaines sur les puces électroniques : chacun bloque ce dont l'autre a besoin. Le sommet Trump-Xi du 24 septembre n'a pas encore réglé la question [3]."
    ],
    "forMe": "Sans terres rares, pas de voitures électriques ni d'éoliennes en Europe. Les industriels européens surveillent la date du 10 novembre de très près.",
    "figures": [
      {
        "value": "17",
        "label": "métaux forment la famille des terres rares"
      },
      {
        "value": "10 nov.",
        "label": "fin de la suspension des restrictions chinoises",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "semi-conducteurs",
      "droits-de-douane"
    ],
    "sources": [
      {
        "short": "Clark Hill",
        "name": "Clark Hill, « China hits pause on rare-earth export controls and what it means for supply chains »",
        "url": "https://www.clarkhill.com/news-events/news/china-hits-pause-on-rare-earth-export-controls-and-what-it-means-for-supply-chains/"
      },
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « China adds 10 US firms, including rare-earth miner, to export control list » (22 juin 2026)",
        "url": "https://www.aljazeera.com/news/2026/6/22/china-adds-10-us-firms-including-rare-earth-miner-to-export-control-list"
      },
      {
        "short": "Rare Earth Exchanges",
        "name": "Rare Earth Exchanges, « China rare earth export controls: November 2026 deadline explained »",
        "url": "https://rareearthexchanges.com/news/china-rare-earth-controls-trump-xi-deadline/"
      }
    ]
  },
  {
    "id": "2026-10-07-guinee-simandou",
    "date": "2026-10-07",
    "theme": "eco",
    "region": "Afrique",
    "title": "Guinée : Simandou, la montagne de fer qui fait trembler l'Australie",
    "summary": "Le plus grand gisement de fer inexploité du monde exporte enfin vers la Chine. Un tournant pour la Guinée et pour le marché de l'acier.",
    "geo": [
      {
        "name": "Simandou (Guinée)",
        "label": "Guinée",
        "coords": [
          -8.9,
          8.6
        ]
      }
    ],
    "points": [
      "La première cargaison de minerai de Simandou est partie début décembre 2025 [3].",
      "En mai 2026, les exportations ont atteint environ 2,2 millions de tonnes sur le mois, un record [2].",
      "Wood Mackenzie prévoit environ 16 millions de tonnes exportées en 2026, pour une capacité finale de 120 millions de tonnes par an [1]."
    ],
    "why": [
      "Le projet, porté notamment par Rio Tinto et des groupes chinois, a nécessité plus de 600 km de voie ferrée et un nouveau port. Son minerai très riche intéresse la Chine, qui veut moins dépendre du fer australien [1].",
      "Pour la Guinée, l'un des pays les plus pauvres du monde, c'est une chance historique, à condition que les revenus profitent vraiment à la population."
    ],
    "forMe": "Le fer sert à faire l'acier de nos voitures, immeubles et ponts. Une nouvelle source géante peut faire baisser son prix mondial et changer les rapports de force entre la Chine et l'Australie.",
    "figures": [
      {
        "value": "120 Mt",
        "label": "de capacité annuelle visée",
        "src": 1
      },
      {
        "value": "≈ 16 Mt",
        "label": "d'exportations prévues en 2026",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "routes-maritimes"
    ],
    "sources": [
      {
        "short": "Wood Mackenzie",
        "name": "Wood Mackenzie, « Simandou iron ore 2026 »",
        "url": "https://www.woodmac.com/press-releases/simandou-iron-ore-2026/"
      },
      {
        "short": "Miningmx",
        "name": "Miningmx, « Simandou iron ore exports surge in ramp-up milestone »",
        "url": "https://www.miningmx.com/news/ferrous-metals/65528-simandou-iron-ore-exports-surge-in-ramp-up-milestone/"
      },
      {
        "short": "S&P Global",
        "name": "S&P Global, première cargaison de Simandou arrivée en Chine (janv. 2026)",
        "url": "https://www.spglobal.com/energy/en/news-research/latest-news/metals/011926-simandous-first-shipment-with-200000-mt-high-grade-iron-ore-arrives-in-china"
      }
    ]
  }
];
