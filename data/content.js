// Contenu de l'application.
// Chaque dossier suit le même format pour rester digeste :
//   tldr (l'essentiel en 30 s) → sections courtes → « Et moi ? » → chiffres clés → quiz.
// Les termes listés dans `terms` renvoient vers le lexique (par leur `id`).

window.GEOCO = {
  dossiers: [
    {
      id: "inflation-taux",
      emoji: "🔥",
      theme: "eco",
      title: "Inflation : pourquoi les prix montent et comment on les calme",
      hook: "Ton panier de courses a pris 20 % en quelques années ? De l'or d'Amérique qui affole les prix au XVIe siècle aux brouettes de billets de 1923, du choc Volcker à la BCE de 2022, voici l'histoire et la mécanique de l'inflation, avec les débats qui divisent encore les économistes.",
      minutes: 21,
      piste: "verte",
      tldr: [
        "L'inflation, c'est la hausse générale et durable des prix : avec le même billet, on achète moins. En 2022, elle a dépassé 5 % en France, du jamais vu depuis le milieu des années 1980 [1].",
        "L'idée qu'un afflux de monnaie fait monter les prix date au moins de 1568, quand Jean Bodin explique la hausse des prix en Europe par l'or et l'argent venus d'Amérique [3].",
        "Quand elle s'emballe, elle détruit tout : en novembre 1923, un dollar valait 4 200 milliards de marks allemands [4] ; en novembre 2008, les prix au Zimbabwe auraient augmenté de 79,6 milliards de % en un mois [5].",
        "Pour la freiner, les banques centrales augmentent leurs taux d'intérêt. Aux États-Unis, Paul Volcker a fait grimper le taux de la Fed jusqu'à 20 % autour de 1980-1981, au prix d'un chômage de 10,8 % [6]. La BCE est passée de taux négatifs à 4 % entre 2022 et 2023 [2][10].",
        "En 2022-2023, les profits des entreprises expliquent environ 45 % de la hausse des prix dans la zone euro, et les prix des importations (énergie) environ 40 %, selon le FMI [11]."
      ],
      sections: [
        {
          title: "D'où vient l'inflation ?",
          paragraphs: [
            "L'==inflation==, c'est la hausse générale et durable des prix. « Générale » : pas seulement le prix des tomates ou de l'essence, mais l'ensemble des prix. « Durable » : pas un pic d'une semaine. Quand l'inflation est de 5 %, un panier qui coûtait 100 euros en coûte 105 un an plus tard ; avec le même salaire, on achète moins.",
            "Les économistes distinguent trois grandes causes. ==L'inflation par les coûts== : l'énergie, les matières premières ou les salaires montent, et les entreprises répercutent sur leurs prix. ==L'inflation par la demande== : les gens veulent acheter plus que ce que l'économie peut produire, et les prix grimpent. ==L'inflation monétaire== : trop de monnaie en circulation par rapport aux biens disponibles.",
            "Il faut y ajouter un ingrédient psychologique, ==les anticipations==. Si tout le monde s'attend à 10 % d'inflation, les salariés demandent 10 % d'augmentation, les entreprises montent leurs prix de 10 % par précaution, et la prévision se réalise d'elle-même. C'est pourquoi les banques centrales tiennent tant à leur crédibilité : si on croit qu'elles ramèneront l'inflation à 2 %, la moitié du travail est faite.",
            "En 2021-2022, plusieurs causes se sont cumulées : la reprise après le Covid a fait exploser la demande, les chaînes d'approvisionnement étaient désorganisées (conteneurs bloqués, pénurie de puces), puis la guerre en Ukraine a fait flamber le gaz, le pétrole et les céréales. Résultat : 5,2 % d'inflation en France en 2022 et 4,9 % en 2023 [1]."
          ]
        },
        {
          title: "Comment on la mesure",
          paragraphs: [
            "En France, c'est l'Insee qui mesure l'inflation, avec ==l'indice des prix à la consommation== (IPC) [1]. Chaque mois, des enquêteurs et des données de caisse relèvent les prix de milliers de produits et services dans tout le pays : alimentation, loyers, énergie, vêtements, transports, coiffeur, assurance…",
            "Chaque produit pèse selon sa place dans le budget moyen des ménages : l'énergie ou le loyer comptent plus que les allumettes. On compare ensuite le coût de ce « panier » d'un mois ou d'une année à l'autre.",
            "D'où un malentendu fréquent entre ==l'inflation mesurée et l'inflation ressentie==. Le panier est celui d'un ménage moyen ; un jeune qui loue en ville, un retraité qui chauffe au fioul ou un ménage rural qui fait 50 km par jour en voiture n'ont pas le même. Et on remarque surtout les prix des achats fréquents (pain, essence), beaucoup moins ceux qui baissent (télévisions, téléphones à performances égales).",
            "Les banques centrales regardent aussi ==l'inflation sous-jacente==, qui retire les prix les plus volatils (énergie, alimentation fraîche). Elle montre si la hausse s'installe dans toute l'économie ou si elle vient d'un choc passager."
          ],
          example: {
            title: "Ton inflation à toi",
            text: "Si tu dépenses 40 % de ton budget en loyer, 20 % en courses et 10 % en transport, et que les courses prennent 10 %, ton inflation « courses » pèse 20 % × 10 % = 2 points dans ton inflation personnelle. Si ton loyer est bloqué, tu peux vivre une inflation plus faible que la moyenne ; si tu fais le plein tous les jours pendant un choc pétrolier, bien plus forte."
          }
        },
        {
          title: "1568 : l'or d'Amérique et la première explication",
          paragraphs: [
            "Au XVIe siècle, l'Europe connaît ce que les historiens appellent la ==« révolution des prix »== : après des siècles de stabilité relative, les prix montent régulièrement pendant des décennies. Personne ne comprend pourquoi.",
            "En France, un conseiller du roi, Jean de Malestroit, accuse les rognages et la baisse de la teneur en métal des pièces. En 1568, le juriste ==Jean Bodin== lui répond dans un essai resté célèbre : la vraie cause, dit-il, c'est ==l'afflux d'or et d'argent venu du Nouveau Monde== par l'Espagne [3]. Plus il y a de métal précieux, moins chaque gramme vaut, donc plus il en faut pour acheter la même chose.",
            "C'est l'une des premières formulations de ce qu'on appellera la ==théorie quantitative de la monnaie== : si la quantité de monnaie augmente plus vite que la quantité de biens, les prix montent [3]. Les historiens rappellent que Bodin n'était pas tout à fait le premier : à Salamanque, le théologien Martín de Azpilcueta avait fait le même lien une douzaine d'années plus tôt [3].",
            "Quatre siècles plus tard, l'économiste Milton Friedman reprendra l'idée avec une formule restée célèbre : « l'inflation est toujours et partout un phénomène monétaire » (voir notre cours sur les grandes écoles économiques). Les keynésiens lui répondront que les coûts et la demande comptent aussi. Le débat n'est pas clos."
          ]
        },
        {
          title: "Quand la monnaie ne vaut plus rien : 1923 et 2008",
          paragraphs: [
            "On parle ==d'hyperinflation== quand les prix augmentent de plus de 50 % par mois. L'exemple le plus célèbre est l'Allemagne de 1923. Pour payer ses dépenses et les réparations de la Première Guerre mondiale, l'État fait tourner la planche à billets. En novembre 1923, ==un dollar vaut environ 4 200 milliards de marks== [4]. Une miche de pain qui coûtait environ 160 marks fin 1922 en coûte environ 200 milliards fin 1923 [4].",
            "Les salariés sont payés deux fois par jour et courent dépenser leur paie avant qu'elle ne fonde ; des enfants jouent avec des liasses de billets, on en tapisse des murs. Le 15 novembre 1923, une nouvelle monnaie, le ==Rentenmark==, remplace l'ancien mark : 1 Rentenmark pour 1 000 milliards de marks [4]. Les classes moyennes, dont l'épargne a été anéantie, en gardent une méfiance durable, qui explique en partie l'attachement allemand à une monnaie stable.",
            "Plus récemment, le ==Zimbabwe== bat tous les records. L'État ne publiant plus de chiffres fiables, l'économiste Steve Hanke, de l'université Johns Hopkins, estime qu'à la mi-novembre 2008, les prix augmentaient de ==79,6 milliards de % par mois== [5], soit un doublement environ chaque jour. Le pays finit par abandonner sa propre monnaie au profit du dollar américain et d'autres devises.",
            "Ces épisodes ont tous un point commun : ==un État qui finance ses dépenses en créant de la monnaie==, souvent après une guerre, un effondrement de la production ou une crise politique. C'est pourquoi la plupart des pays ont rendu leur banque centrale indépendante du gouvernement."
          ],
          plain: {
            title: "la spirale de l'hyperinflation",
            steps: [
              "L'État n'arrive plus à payer ses dépenses avec les impôts ; il fait imprimer des billets.",
              "Il y a plus de billets pour la même quantité de pain : le prix du pain monte.",
              "Les gens, qui voient les prix monter, dépensent leur argent le plus vite possible avant qu'il ne perde sa valeur : la demande s'emballe.",
              "Les prix montent encore plus vite, l'État imprime encore plus pour suivre : en 1923, un dollar finit par valoir 4 200 milliards de marks [4]."
            ]
          }
        },
        {
          title: "Les années 1970 et le choc Volcker",
          paragraphs: [
            "Dans les années 1970, les pays riches découvrent la ==stagflation== : inflation forte et chômage en même temps, ce que les théories de l'époque jugeaient presque impossible. Les chocs pétroliers de 1973 et 1979 font flamber l'énergie, et les salaires indexés sur les prix entretiennent la hausse.",
            "En août 1979, Paul Volcker prend la tête de la Réserve fédérale américaine. Le 6 octobre 1979, il annonce un virage : la Fed va contrôler strictement la quantité de monnaie, quitte à laisser les taux grimper [6]. Le taux directeur atteint ==le record de 20 % autour de 1980-1981== [6].",
            "Le remède est brutal. Les crédits deviennent hors de prix, des agriculteurs bloquent Washington avec leurs tracteurs, des entreprises font faillite. ==Le chômage atteint 10,8 % fin 1982== [6]. Mais l'inflation recule : elle tombe à 6,1 % début 1982 [6], puis reste modérée pendant des décennies.",
            "Le « choc Volcker » reste la référence des banquiers centraux : il montre qu'on peut vaincre une inflation installée, mais que cela coûte cher, surtout quand on agit tard. C'est l'une des raisons pour lesquelles la Fed et la BCE ont monté leurs taux aussi vite en 2022."
          ]
        },
        {
          title: "La France de 1982 : bloquer les prix, puis désindexer",
          paragraphs: [
            "En France aussi, l'inflation dépasse 13 % en 1980 et 1981. Après la relance de 1981 (voir notre cours IS-LM), le gouvernement change de cap. En ==juin 1982==, à l'initiative du ministre des Finances Jacques Delors, il dévalue le franc et ==bloque les prix et les salaires pendant quatre mois== [7].",
            "Puis vient la mesure décisive : la ==désindexation des salaires==. Jusque-là, beaucoup de salaires suivaient automatiquement la hausse des prix, ce qui entretenait une boucle : les prix montent, donc les salaires montent, donc les coûts montent, donc les prix montent. En cessant d'aligner les hausses de salaires sur l'inflation passée pour les caler sur l'inflation visée, l'État casse la boucle [7].",
            "Le résultat est spectaculaire : l'inflation passe de ==12 % en 1982 à 3,1 % en 1988== [7]. Le prix à payer est discuté : ralentissement du pouvoir d'achat des salariés et hausse du chômage dans les années suivantes.",
            "Ce souvenir explique pourquoi, en 2022-2023, le débat sur l'indexation des salaires a été si vif : faut-il protéger le pouvoir d'achat en indexant, au risque de relancer la boucle prix-salaires ? La plupart des pays ont choisi des aides ciblées et des hausses du salaire minimum plutôt qu'une indexation générale."
          ]
        },
        {
          title: "Pourquoi 2 %, et pas 0 % ?",
          paragraphs: [
            "Dans la zone euro, c'est la Banque centrale européenne (BCE) qui veille sur les prix. Son objectif : une inflation de 2 % par an à moyen terme [2]. Ni trop (on s'appauvrit), ni trop peu (l'économie s'endort).",
            "Ce chiffre vient d'un petit pays. La ==Nouvelle-Zélande== est le premier pays à fixer officiellement un objectif chiffré d'inflation à sa banque centrale : la loi de 1989 entre en vigueur le 1er février 1990 [9]. L'objectif est d'abord une fourchette de 3 à 5 %, puis de 0 à 2 % [9]. Le succès de l'expérience fait école : Canada, Royaume-Uni, Suède, puis la plupart des banques centrales adoptent un objectif voisin de 2 %.",
            "Pourquoi pas zéro ? D'abord, les indices ont tendance à surestimer un peu l'inflation (les produits s'améliorent sans que le prix le reflète entièrement). Ensuite, ==la déflation (baisse des prix) est dangereuse== : si les prix baissent, on reporte ses achats en attendant qu'ils baissent encore, les entreprises vendent moins, licencient, et la dette devient plus lourde à rembourser. Le Japon a connu ce piège pendant des années.",
            "Enfin, une petite inflation laisse de la marge aux banques centrales : avec 2 % d'inflation, les taux d'intérêt sont normalement plus élevés, et on peut les baisser davantage en cas de crise. Certains économistes plaident d'ailleurs pour un objectif de 3 % ; d'autres trouvent que ce serait renoncer à la crédibilité durement acquise."
          ]
        },
        {
          title: "Le rôle de la banque centrale",
          paragraphs: [
            "Son outil principal, ce sont les ==taux directeurs== : le prix auquel les banques se refinancent auprès d'elle ou y déposent leur argent. Ces taux se transmettent ensuite à tous les crédits de l'économie.",
            "Pendant des années, le problème de la BCE n'était pas une inflation trop forte, mais trop faible. En ==juin 2014==, elle fait une chose rare : elle passe son taux de dépôt ==sous zéro, à −0,10 %== [10]. Les banques paient pour laisser leur argent à la BCE, ce qui doit les pousser à prêter. Le taux descend jusqu'à −0,50 % en 2019 [2].",
            "Puis tout s'inverse. Le ==21 juillet 2022==, la BCE relève ses taux pour la première fois depuis onze ans, de 0,5 point [2]. Suivent dix hausses d'affilée : en ==septembre 2023, le taux de dépôt atteint 4 %==, la hausse la plus rapide de son histoire [2]. Les baisses ne reprennent qu'en juin 2024.",
            "La BCE dispose aussi d'autres outils : acheter ou vendre des obligations (ce qu'on appelle « l'assouplissement quantitatif » ou son inverse) et, surtout, ==la parole== : en expliquant ce qu'elle compte faire, elle oriente les anticipations. En 2012, en pleine crise de l'euro, son président Mario Draghi promet de faire « tout ce qu'il faudra » pour sauver l'euro ; ces trois mots suffisent à calmer les marchés."
          ]
        },
        {
          title: "Pourquoi monter les taux calme les prix",
          paragraphs: [
            "Quand les taux montent, les crédits immobiliers, auto ou d'entreprise deviennent plus chers. Les ménages et les entreprises empruntent et dépensent moins, la demande ralentit, et les prix avec elle.",
            "Les taux agissent aussi par d'autres canaux. ==L'épargne== rapporte plus, ce qui pousse à dépenser moins. ==La monnaie== se renforce, car des capitaux viennent chercher les meilleurs rendements : les produits importés coûtent moins cher. Et ==les anticipations== se calment, si l'on croit que la banque centrale ira jusqu'au bout.",
            "Le revers : moins d'investissement, un marché immobilier qui se grippe, des États qui paient plus cher leur dette, et un risque de ralentir trop fort l'économie. C'est un réglage délicat, un peu comme freiner une voiture sans la faire caler. Et les effets mettent du temps à arriver : on estime souvent qu'il faut un à deux ans pour qu'une hausse de taux produise tout son effet sur les prix."
          ],
          plain: {
            title: "la hausse des taux, jusqu'à ton portefeuille",
            steps: [
              "La BCE relève son taux directeur (juillet 2022, puis encore et encore jusqu'à 4 % en septembre 2023) [2].",
              "Les banques empruntent plus cher et relèvent les taux de leurs crédits immobiliers, auto et aux entreprises.",
              "Les ménages achètent moins de logements et de voitures, les entreprises reportent leurs investissements : la demande ralentit.",
              "Les entreprises ont plus de mal à augmenter leurs prix : l'inflation recule, de 5,2 % en 2022 à 2 % en 2024 en France [1]."
            ]
          }
        },
        {
          title: "2022 : la faute à qui ? Salaires, profits ou énergie",
          paragraphs: [
            "Pendant la poussée de 2022, une question a divisé économistes et responsables politiques : qui fait monter les prix ? Les ==salaires== (la « boucle prix-salaires »), ==l'énergie== importée, ou ==les profits== des entreprises ?",
            "En juin 2023, trois économistes du FMI publient une décomposition de la hausse des prix dans la zone euro. Entre début 2022 et début 2023, ==les profits des entreprises expliquent environ 45 % de la hausse, les prix des importations environ 40 %==, et les salaires bien moins [11]. Autrement dit, beaucoup d'entreprises ont relevé leurs prix plus que leurs coûts.",
            "Le terme ==« profitflation »== (ou « greedflation », l'inflation par la cupidité) devient populaire. Mais les auteurs eux-mêmes sont prudents : une hausse des profits en euros ne veut pas forcément dire une hausse de la rentabilité, et certaines entreprises rattrapaient des pertes [11]. Ils prévoient aussi que les salaires vont rattraper les prix en 2023-2024, et que les profits devront alors absorber ces hausses pour que l'inflation reflue [11].",
            "Ce débat montre qu'une même statistique peut servir des récits opposés. Retiens surtout que ==l'inflation est une bataille de partage== : quand les prix montent, chacun (salariés, entreprises, États, pays exportateurs d'énergie) cherche à ne pas être celui qui paie."
          ]
        },
        {
          title: "L'inflation cachée : la réduflation",
          paragraphs: [
            "Il existe une façon discrète d'augmenter les prix : ==réduire la quantité en gardant le même prix==. Le paquet de biscuits passe de 200 à 180 grammes, la bouteille de 1,5 à 1,25 litre, l'étiquette ne change pas. C'est la ==« réduflation »== (en anglais, « shrinkflation »).",
            "L'indice des prix tient compte de ces changements, car il suit le prix au kilo ou au litre. Mais le client, lui, ne s'en rend souvent pas compte. Face aux plaintes, la France a pris en 2024 un arrêté : depuis le ==1er juillet 2024==, les magasins doivent signaler pendant deux mois les produits dont la quantité a baissé et le prix au kilo ou au litre a augmenté [12].",
            "L'efficacité reste limitée : quelques mois plus tard, un contrôle de l'association UFC-Que Choisir ne trouve aucun affichage dans 95 % des magasins visités [12]. Le réflexe utile reste de regarder le ==prix au kilo ou au litre==, affiché obligatoirement sur l'étiquette du rayon."
          ]
        },
        {
          title: "Gagnants et perdants de l'inflation",
          paragraphs: [
            "L'inflation n'appauvrit pas tout le monde de la même façon. ==Les emprunteurs à taux fixe y gagnent== : leur mensualité ne bouge pas, alors que leur salaire finit par augmenter. Un crédit immobilier contracté à 1 % en 2021 est devenu beaucoup plus léger avec 10 % d'inflation cumulée.",
            "==Les épargnants y perdent==, si leur argent rapporte moins que l'inflation : un livret à 3 % avec 5 % d'inflation fait perdre 2 % de pouvoir d'achat par an. ==Les salariés et retraités== perdent tant que leurs revenus ne suivent pas les prix. ==Les ménages modestes== sont souvent les plus touchés, car l'alimentation et l'énergie, qui ont le plus augmenté en 2022, pèsent plus lourd dans leur budget.",
            "==L'État== est dans une position ambiguë : l'inflation gonfle ses recettes (la TVA suit les prix) et allège le poids relatif de sa dette ancienne, mais elle augmente les taux auxquels il emprunte et le coût des aides. ==Les entreprises== qui peuvent augmenter leurs prix s'en sortent, celles qui ne le peuvent pas souffrent.",
            "C'est pourquoi l'inflation est autant un sujet politique qu'économique : derrière un chiffre moyen se cachent des transferts de richesse entre générations, entre épargnants et emprunteurs, entre salariés et entreprises."
          ]
        }
      ],
      forMe: "Quand l'inflation monte, regarde ce qui rapporte moins qu'elle (ton compte courant, certains livrets) et ce qui suit les prix. Compare les produits au prix au kilo, pas au prix du paquet. Et si tu empruntes un jour à taux fixe, souviens-toi qu'une inflation modérée allège ta dette au fil des ans.",
      figures: [
        { value: "2 %", label: "l'objectif d'inflation de la BCE", src: 2 },
        { value: "+5,2 %", label: "l'inflation en France en 2022", src: 1 },
        { value: "−0,10 % → 4 %", label: "le taux de dépôt de la BCE : premier taux négatif (juin 2014), puis sommet (septembre 2023)", src: 10 },
        { value: "4 200 milliards", label: "de marks pour un dollar en novembre 1923", src: 4 },
        { value: "20 %", label: "le taux directeur record de la Fed sous Paul Volcker, vers 1980-1981", src: 6 },
        { value: "≈ 45 %", label: "de la hausse des prix due aux profits dans la zone euro, début 2022 - début 2023 (FMI)", src: 11 }
      ],
      terms: ["inflation", "banque-centrale", "taux-directeur", "pouvoir-achat", "chaine-appro"],
      quiz: [
        { q: "Quel est l'objectif d'inflation de la BCE ?", options: ["0 %", "2 %", "5 %", "10 %"], answer: 1, explain: "Environ 2 % par an : assez pour éviter la baisse des prix, pas trop pour ne pas éroder le pouvoir d'achat." },
        { q: "Pour freiner l'inflation, une banque centrale…", options: ["Baisse ses taux", "Augmente ses taux", "Imprime plus de billets", "Baisse les impôts"], answer: 1, explain: "Des taux plus élevés rendent le crédit plus cher, ce qui ralentit la demande et donc les prix." },
        { q: "Comment Jean Bodin expliquait-il la hausse des prix au XVIe siècle ?", options: ["Par les mauvaises récoltes", "Par l'afflux d'or et d'argent venu d'Amérique", "Par les impôts du roi", "Par la peste"], answer: 1, explain: "En 1568, il donne l'une des premières formulations de la théorie quantitative de la monnaie." },
        { q: "Combien de marks fallait-il pour un dollar en novembre 1923 ?", options: ["4,2", "4 200", "4,2 millions", "Environ 4 200 milliards"], answer: 3, explain: "L'hyperinflation allemande a pris fin avec le Rentenmark : 1 pour 1 000 milliards d'anciens marks." },
        { q: "Quel prix a payé l'économie américaine pour le « choc Volcker » ?", options: ["Aucun", "Un chômage de 10,8 % fin 1982", "Une hyperinflation", "La fin du dollar"], answer: 1, explain: "Le taux de la Fed est monté jusqu'à 20 % : l'inflation a reculé, mais au prix d'une forte récession." },
        { q: "Qu'a fait la France en juin 1982 pour casser l'inflation ?", options: ["Elle a quitté l'Europe", "Elle a bloqué les prix et les salaires, puis désindexé les salaires", "Elle a imprimé des billets", "Elle a supprimé la TVA"], answer: 1, explain: "Le tournant de la rigueur : l'inflation passe de 12 % en 1982 à 3,1 % en 1988." },
        { q: "Quel pays a fixé le premier un objectif chiffré d'inflation à sa banque centrale ?", options: ["Les États-Unis", "L'Allemagne", "La Nouvelle-Zélande", "La France"], answer: 2, explain: "Sa loi de 1989 est entrée en vigueur en 1990 ; l'objectif de 0 à 2 % a fait école." },
        { q: "Pourquoi la déflation est-elle dangereuse ?", options: ["Elle n'est pas dangereuse", "On reporte ses achats, les entreprises vendent moins et la dette pèse plus lourd", "Elle fait monter les salaires", "Elle supprime le chômage"], answer: 1, explain: "Le Japon a connu ce piège pendant des années." },
        { q: "Selon le FMI, qu'est-ce qui explique le plus la hausse des prix dans la zone euro entre début 2022 et début 2023 ?", options: ["Les salaires", "Les profits des entreprises (environ 45 %), puis les importations (environ 40 %)", "Les impôts", "Le tourisme"], answer: 1, explain: "Les auteurs restent prudents : une hausse des profits en euros n'est pas forcément une hausse de rentabilité." },
        { q: "Qu'est-ce que la réduflation ?", options: ["Une baisse des taux", "Réduire la quantité d'un produit en gardant le même prix", "Une baisse des salaires", "Une réduction d'impôt"], answer: 1, explain: "Depuis le 1er juillet 2024, les magasins français doivent la signaler ; regarde le prix au kilo." }
      ],
      sources: [
        { short: "Insee", name: "Insee, indice des prix à la consommation (moyennes annuelles)", url: "https://www.insee.fr" },
        { short: "BCE", name: "Banque centrale européenne, taux directeurs", url: "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/key_ecb_interest_rates/html/index.en.html" },
        { short: "Harvard (Bodin Project)", name: "The Bodin Project, Harvard University, « Biography of Bodin » (réponse à Malestroit, 1568)", url: "https://bodinproject.hsites.harvard.edu/biography-bodin-page-2" },
        { short: "Wikipédia", name: "« Hyperinflation in the Weimar Republic », Wikipédia (taux de change de novembre 1923, prix du pain, Rentenmark)", url: "https://en.wikipedia.org/wiki/Hyperinflation_in_the_Weimar_Republic" },
        { short: "Cato Institute", name: "Steve H. Hanke, « Zimbabwe's Hyperinflation », Cato Institute", url: "https://clips.cato.org/sites/default/files/Hanke_bulawayo_inflation.pdf" },
        { short: "Federal Reserve History", name: "Federal Reserve History, « Volcker's Announcement of Anti-Inflation Measures »", url: "https://www.federalreservehistory.org/essays/anti-inflation-measures" },
        { short: "Universalis", name: "Encyclopædia Universalis, « France : un siècle de politique économique », le revirement des années 1980", url: "https://www.universalis.fr/encyclopedie/france-le-territoire-et-les-hommes-un-siecle-de-politique-economique/4-le-revirement-des-annees-1980-et-ses-suites/" },
        { short: "Major Prépa", name: "Major Prépa, « Les années 1980 en Europe : chômage, franc fort et politique économique française »", url: "https://major-prepa.com/economie/annees-1980-europe-chomage-franc-fort-politique-economique-francaise/" },
        { short: "BRI", name: "Banque des règlements internationaux, discours de la Banque de réserve de Nouvelle-Zélande sur les 30 ans du ciblage d'inflation (2018)", url: "https://www.bis.org/review/r180417a.pdf" },
        { short: "BCE", name: "BCE, communiqué du 5 juin 2014 : taux de la facilité de dépôt à −0,10 %", url: "https://www.ecb.europa.eu/press/pr/date/2014/html/pr140605_3.fr.html" },
        { short: "FMI", name: "FMI, Hansen, Toscani et Zhou, « Euro Area Inflation after the Pandemic and Energy Shock: Import Prices, Profits and Wages », document de travail 23/131, juin 2023", url: "https://www.imf.org/en/publications/wp/issues/2023/06/23/euro-area-inflation-after-the-pandemic-and-energy-shock-import-prices-profits-and-wages-534837" },
        { short: "Gouvernement", name: "info.gouv.fr, « La réduflation encadrée à partir du 1er juillet » (2024), et UFC-Que Choisir, contrôle de l'affichage", url: "https://www.info.gouv.fr/actualite/la-reduflation-encadree-a-partir-du-1er-juillet" }
      ],
      visuals: [
        { kind: "chart", type: "bar", title: "L'inflation en France depuis 2015", subtitle: "Hausse moyenne des prix à la consommation sur l'année", xLabel: "Année", unit: "Inflation (%)", suffix: " %", data: [["2015", 0], ["2016", 0.2], ["2017", 1], ["2018", 1.8], ["2019", 1.1], ["2020", 0.5], ["2021", 1.6], ["2022", 5.2], ["2023", 4.9], ["2024", 2]], source: "Insee, indice des prix à la consommation" },
        { kind: "chart", type: "line", title: "Le taux de dépôt de la BCE", subtitle: "Taux de la facilité de dépôt après chaque grande étape", xLabel: "Date", unit: "Taux (%)", suffix: " %", data: [["Juin 2014", -0.1], ["Mars 2016", -0.4], ["Sept. 2019", -0.5], ["Juil. 2022", 0], ["Sept. 2023", 4]], source: "BCE" }
      ]
    },
    {
      id: "is-lm",
      emoji: "⚖️",
      theme: "eco",
      title: "Le modèle IS-LM : ce que peuvent l'État et la banque centrale",
      hook: "Une crise frappe. L'État doit-il dépenser plus ? La banque centrale doit-elle baisser ses taux ? Deux courbes suffisent pour comprendre ce qui se passe, et pourquoi ça ne marche pas toujours.",
      minutes: 31,
      piste: "noire",
      tldr: [
        "Le modèle IS-LM résume l'économie à court terme avec deux grandeurs seulement : la production (Y) et le taux d'intérêt (i) [1].",
        "La courbe IS montre l'équilibre du marché des biens, la courbe LM celui du marché de la monnaie ; l'économie se place là où elles se croisent.",
        "Quand l'État dépense plus, IS se déplace : la production monte, mais les taux aussi. Quand la banque centrale crée de la monnaie, LM se déplace : la production monte et les taux baissent.",
        "En économie ouverte, tout dépend du taux de change : avec des changes fixes, c'est la politique budgétaire qui marche, avec des changes flexibles, c'est la politique monétaire, d'autant plus que les capitaux circulent librement [2].",
        "Surtout, la réponse dépend de l'école : pour un keynésien, la dépense publique relance ; pour un monétariste, seule la monnaie compte ; pour un nouveau classique, les gens anticipent et la relance ne sert à rien [11][12]. Et chaque école a dominé à une époque différente."
      ],
      sections: [
        {
          title: "Deux variables, deux marchés",
          paragraphs: [
            "Le modèle a été proposé par l'économiste britannique John Hicks en 1937, pour résumer en un schéma les idées de Keynes [1]. C'est une lecture de Keynes par des économistes formés à l'école néoclassique : on l'appelle souvent la « synthèse » entre les deux courants. On le simplifie ici au maximum : on ne regarde que deux variables. ==Y==, la production (c'est aussi le revenu de tout le pays, à peu près le PIB). ==i==, le taux d'intérêt, c'est-à-dire le prix de l'argent qu'on emprunte.",
            "La courbe IS (marché des biens). Quand le taux d'intérêt baisse, emprunter coûte moins cher : les entreprises investissent, les ménages achètent une voiture ou un logement à crédit. La demande monte, donc la production monte. Plus i est bas, plus Y est haut : la courbe IS descend.",
            "La courbe LM (marché de la monnaie). Selon Keynes, on garde de la monnaie pour deux raisons : pour ses ==achats== (plus la production et les revenus sont hauts, plus il en faut) et pour ==spéculer== (quand les taux sont bas, les titres rapportent peu et risquent de perdre de la valeur, alors on préfère garder de la monnaie). Quand la production monte, on a besoin de plus de monnaie pour ses achats ; si la quantité de monnaie ne change pas, on vend des titres pour en obtenir, leur prix baisse et le taux d'intérêt monte. Plus Y est haut, plus i est haut : la courbe LM monte.",
            "L'équilibre, c'est le point où les deux courbes se croisent : le seul couple (Y, i) où les deux marchés sont en équilibre en même temps. Rien ne garantit qu'il corresponde au plein emploi : c'est l'idée de Keynes, l'économie peut rester durablement dans un ==équilibre de chômage involontaire==. Toute la suite du cours consiste à déplacer une courbe et à regarder où va ce point."
          ],
          plain: {
            title: "le modèle en une image",
            steps: [
              "Imagine une balance avec deux plateaux : d'un côté ce que le pays produit (Y), de l'autre le prix de l'argent emprunté (i).",
              "Quand l'argent est cher (i haut), on emprunte moins pour acheter une maison ou une machine : on produit moins. C'est la courbe IS.",
              "Quand on produit beaucoup (Y haut), tout le monde a besoin d'argent pour payer : l'argent devient plus cher. C'est la courbe LM.",
              "L'économie se pose là où les deux tiennent ensemble : c'est le point d'équilibre E."
            ]
          },
          diagram: {
            preset: "base",
            steps: [
              { label: "L'équilibre", text: "Là où IS (biens) et LM (monnaie) se croisent : une production Y et un taux d'intérêt i." }
            ]
          }
        },
        {
          title: "La politique budgétaire : l'État dépense plus",
          paragraphs: [
            "L'État construit des routes, embauche, baisse des impôts : il ajoute de la demande. À taux d'intérêt égal, on produit plus, donc ==la courbe IS se déplace vers la droite==.",
            "Le nouveau point d'équilibre est plus à droite (Y monte) mais aussi plus haut (i monte). Pourquoi les taux montent-ils ? Parce que plus de production demande plus de monnaie, et que l'État emprunte pour financer ses dépenses.",
            "Ces taux plus hauts découragent une partie de l'investissement privé : c'est ==l'effet d'éviction==. La relance marche, mais moins que prévu : la production monte moins que la dépense publique ajoutée, une partie est « mangée » par la hausse des taux.",
            "Petit calcul pour voir l'idée (chiffres imaginaires) : l'État dépense 10 milliards de plus. Ceux qui les reçoivent en dépensent une partie, qui devient le revenu d'autres, et ainsi de suite : c'est le ==multiplicateur==, la production peut monter de plus de 10 milliards. Mais si les taux montent et que les entreprises investissent 4 milliards de moins, il faut retirer cet effet d'éviction.",
            "L'effet d'éviction est d'autant plus faible que l'investissement est peu sensible au taux d'intérêt (IS très pentue), et il disparaît dans le piège à liquidité, où les taux ne montent pas.",
            "==Emprunt ou impôt ?== Si l'État finance sa dépense en empruntant, il émet des titres : les taux montent davantage, l'éviction est plus forte. S'il la finance par un impôt du même montant, l'effet reste positif : c'est le ==théorème du budget équilibré== d'Haavelmo (sur le seul marché des biens, la production monte du montant de la dépense), avec une éviction plus faible. Et une baisse d'impôts relance moins qu'une hausse de dépense du même montant, car les ménages en épargnent une partie."
          ],
          plain: {
            title: "l'État dépense 10 milliards",
            steps: [
              "L'État paie des entreprises pour rénover des écoles et des ponts.",
              "Ces entreprises embauchent et versent des salaires : les ouvriers dépensent au supermarché, au restaurant…",
              "Le supermarché et le restaurant vendent plus, embauchent à leur tour : la production monte plus que les 10 milliards (le multiplicateur).",
              "Mais l'État a emprunté pour payer, et tout le monde a besoin de plus d'argent : les taux montent.",
              "Avec des taux plus hauts, une PME renonce à acheter une nouvelle machine : c'est l'effet d'éviction, qui rogne une partie de la relance."
            ]
          },
          diagram: {
            preset: "budget",
            steps: [
              { label: "Avant", text: "L'économie est au point E : production faible, chômage." },
              { label: "L'État dépense plus", text: "IS va à droite : la production monte (Y↑) mais le taux d'intérêt aussi (i↑). La hausse des taux freine l'investissement privé : l'effet d'éviction." }
            ]
          },
          example: {
            title: "Exemple : le plan de relance américain de 2009",
            text: "En pleine crise financière, Barack Obama signe le 17 février 2009 l'American Recovery and Reinvestment Act [4]. Coût estimé à son vote : 787 milliards de dollars sur dix ans, dont 501 milliards de dépenses et 286 milliards de baisses d'impôts [3]. C'est le cas d'école d'une relance budgétaire : déplacer IS vers la droite pour soutenir la production."
          }
        },
        {
          title: "L'effet d'éviction, décortiqué : effet revenu, puis éviction",
          paragraphs: [
            "Une relance budgétaire agit en ==deux temps==, qu'il faut bien séparer. C'est là que l'effet d'éviction prend tout son sens.",
            "==1. L'effet revenu (le multiplicateur keynésien).== Imaginons d'abord que le taux d'intérêt ne bouge pas. L'État dépense : les entreprises qui reçoivent ces commandes versent des salaires et achètent à d'autres entreprises ; ces revenus sont en partie dépensés, et deviennent les revenus d'autres ménages, et ainsi de suite. La production passe de Y₀ à Y₁ : c'est le point A du schéma, sur la nouvelle courbe IS mais au taux de départ. Plus les ménages consomment une grande part de chaque euro gagné, plus cet effet est fort.",
            "==2. L'effet d'éviction (par le taux d'intérêt).== Mais le taux ne reste pas sage. Avec plus de production, les ménages et les entreprises ont besoin de plus de monnaie pour leurs achats ; pour s'en procurer, ils vendent des titres. En même temps, l'État émet des titres pour financer sa dépense. Trop de titres à vendre : leur prix baisse, donc ==le taux d'intérêt monte== (i₀ → i₁). À ce taux plus élevé, certains projets d'investissement ne sont plus rentables : des entreprises y renoncent. La production recule de Y₁ à Y₂.",
            "==Le bilan.== La production finale Y₂ est plus haute qu'au départ (la relance marche), mais plus basse que Y₁. ==L'effet d'éviction, c'est cet écart Y₁ − Y₂== : la part de la relance « mangée » par l'investissement privé qui disparaît à cause de la hausse des taux.",
            "==Ce qui le rend fort ou faible.== Il est faible si l'investissement réagit peu au taux d'intérêt (IS très pentue), ou si la demande de monnaie réagit beaucoup au taux (LM plate) ; il disparaît dans le piège à liquidité, ou si la banque centrale crée de la monnaie en même temps (policy mix). Il est total dans la vision monétariste (LM verticale) : toute la dépense publique remplace de la dépense privée.",
            "==Les autres formes d'éviction==, à ne pas confondre : en économie ouverte avec changes flexibles, la hausse des taux attire les capitaux, la monnaie s'apprécie et ce sont les ==exportations== qui sont évincées ; avec l'équivalence ricardienne de Barro, ce sont les ménages qui ==épargnent== la relance en prévision des impôts futurs [11] ; et au plein emploi, l'État et les entreprises se disputent les mêmes travailleurs et les mêmes machines (éviction « réelle »)."
          ],
          plain: {
            title: "avec des chiffres (imaginaires) pour fixer les idées",
            steps: [
              "L'État lance un plan de 10 milliards d'euros de travaux.",
              "Effet revenu : à taux inchangé, les salaires versés sont dépensés, puis redépensés… la production pourrait monter de 15 milliards (point A).",
              "Mais l'État emprunte ces 10 milliards et l'activité demande plus de monnaie : le taux d'intérêt monte de 0,5 point.",
              "À ce taux, des entreprises renoncent à 5 milliards d'investissements (une usine, des machines) : c'est l'éviction.",
              "Au final, la production monte de 10 milliards au lieu de 15 : la relance a marché, mais un tiers de son effet a été évincé."
            ]
          },
          diagram: {
            preset: "eviction",
            steps: [
              { label: "Avant", text: "L'économie est au point E : production Y₀, taux i₀." },
              { label: "1. Effet revenu", text: "L'État dépense, IS passe en IS'. Si le taux restait à i₀, la production irait jusqu'à Y₁ (point A) : c'est le multiplicateur keynésien." },
              { label: "2. Éviction", text: "Le taux monte de i₀ à i₁ : une partie de l'investissement privé disparaît, la production redescend de Y₁ à Y₂ (point E'). L'écart Y₁ − Y₂, en rouge, c'est l'effet d'éviction." }
            ]
          },
          example: {
            title: "Dans l'histoire : les États-Unis des années 1980",
            text: "Sous Ronald Reagan, l'État baisse les impôts et augmente les dépenses militaires, pendant que la Fed de Paul Volcker serre la monnaie : le taux de la Fed reste au-dessus de 14 % de février à juin 1982 [17]. Le dollar s'envole, les exportations américaines souffrent : une éviction par les taux et par le change (voir notre article sur la Reaganomics)."
          }
        },
        {
          title: "La politique monétaire : la banque centrale crée de la monnaie",
          paragraphs: [
            "La banque centrale (la BCE pour la zone euro, la Fed aux États-Unis) peut augmenter la quantité de monnaie, en baissant son taux directeur ou en achetant des titres (« open market »). En achetant des titres, elle fait monter leur prix, donc baisser le taux d'intérêt. À production égale, l'argent devient plus abondant, donc moins cher : ==la courbe LM se déplace vers la droite== (ou vers le bas).",
            "Le nouveau point est plus à droite (Y monte) et plus bas (i baisse). Ici, pas d'effet d'éviction : les taux plus bas encouragent l'investissement et le crédit, ce qui fait monter la production. La politique monétaire est d'autant plus efficace que l'investissement réagit fortement au taux d'intérêt.",
            "Elle peut aussi faire l'inverse pour calmer une économie qui chauffe ou une inflation trop forte : moins de monnaie, LM part vers la gauche, les taux montent et la production ralentit."
          ],
          plain: {
            title: "la BCE de juillet 2022, étape par étape",
            steps: [
              "Le constat : en juin 2022, les prix dans la zone euro ont augmenté de 8,6 % en un an, un record depuis la création de l'euro ; l'énergie, renchérie par la guerre en Ukraine, en explique près de la moitié (4,2 points) [18].",
              "La décision : le 21 juillet 2022, la BCE relève ses trois taux directeurs de 0,5 point, sa première hausse depuis 2011, alors qu'elle avait laissé entendre 0,25 [19]. Elle continuera jusqu'à porter son taux de dépôt à 4 % en septembre 2023 [6].",
              "Le canal : les banques se refinancent plus cher et répercutent la hausse. En France, le taux moyen d'un crédit immobilier passe d'environ 1 % en 2021 à 4,20 % fin 2023 [20][21].",
              "Chez toi, concrètement : pour 200 000 € empruntés sur 25 ans, la mensualité passe d'environ 760 € (à 1,07 %) à environ 1 080 € (à 4,2 %), et le coût total des intérêts de 28 000 € à 123 000 € (calcul Geonomix, hors assurance).",
              "L'effet attendu : moins de crédits, moins d'achats de logements et d'investissements, donc une demande plus faible et des prix qui montent moins vite. Dans le schéma, LM part vers la gauche : i monte, Y ralentit."
            ]
          },
          diagram: {
            preset: "monnaie",
            steps: [
              { label: "Avant", text: "L'économie est au point E." },
              { label: "Relance (plus de monnaie)", text: "LM va à droite : la production monte (Y↑) et le taux d'intérêt baisse (i↓)." },
              { label: "Freinage (moins de monnaie)", text: "LM va à gauche : le taux d'intérêt monte (i↑) et la production ralentit (Y↓). C'est ce qu'a fait la BCE en 2022-2023 contre l'inflation." }
            ]
          },
          example: {
            title: "Exemple : la BCE freine en 2022-2023",
            text: "Pourquoi la BCE a-t-elle agi ? Parce que son mandat est la stabilité des prix (une inflation proche de 2 %), et qu'en juin 2022 l'inflation atteignait 8,6 % [18]. Comment ? En relevant son taux de dépôt de −0,5 % en juillet 2022 à 4 % en septembre 2023, en dix hausses successives [6][19]. Avec quel prix ? Des crédits bien plus chers et un marché immobilier qui se grippe. Ce que le modèle IS-LM ne montre pas : l'effet sur l'inflation elle-même, car il suppose les prix fixes ; il montre seulement que la demande et la production ralentissent."
          }
        },
        {
          title: "Les deux ensemble : le « policy mix »",
          paragraphs: [
            "On peut combiner les deux politiques. Si l'État dépense plus (IS à droite) et que la banque centrale crée de la monnaie en même temps (LM à droite), la production monte beaucoup, et les taux n'ont pas besoin de monter : la banque centrale empêche l'effet d'éviction.",
            "C'est ce qui s'est passé pendant le Covid : les États ont dépensé massivement pour soutenir les entreprises et les salariés, pendant que la BCE lançait le 18 mars 2020 un programme d'achat de titres de 750 milliards d'euros pour garder les taux bas [7].",
            "Derrière le policy mix, il y a la ==règle de Tinbergen==, du nom du premier prix Nobel d'économie [15] : pour atteindre deux objectifs (par exemple plus de production ET des taux stables), il faut deux instruments. Avec la seule dépense publique, on ne peut pas tenir les deux.",
            "Le problème : les deux instruments ne sont pas dans les mêmes mains. L'État décide du budget, la banque centrale (indépendante) de la monnaie. Quand ils tirent dans deux sens opposés, les taux s'envolent."
          ],
          plain: {
            title: "le Covid, en 2020",
            steps: [
              "Les usines et les magasins ferment : la production s'effondre.",
              "Les États paient le chômage partiel et prêtent aux entreprises : IS repart vers la droite.",
              "En même temps, la BCE achète massivement des titres de dette (750 milliards d'euros annoncés le 18 mars 2020) pour que les taux restent bas [7] : LM va aussi à droite.",
              "Comme les taux ne montent pas, la relance publique n'évince pas l'investissement privé : les deux politiques s'additionnent."
            ]
          },
          example: {
            title: "Exemple : Reagan contre Volcker, dans les années 1980",
            text: "Aux États-Unis, le président Ronald Reagan baisse fortement les impôts et augmente les dépenses militaires (IS à droite), pendant que la Fed de Paul Volcker serre la monnaie pour casser l'inflation (LM à gauche) [13][17]. Résultat prévu par le schéma : des taux d'intérêt très élevés, le taux de la Fed restant au-dessus de 14 % de février à juin 1982 [17]. Volcker demandait lui-même à la Maison-Blanche de réduire le déficit [13]."
          },
          diagram: {
            preset: "mix",
            steps: [
              { label: "Avant", text: "L'économie est au point E." },
              { label: "État + banque centrale", text: "IS et LM vont à droite ensemble : la production monte fortement (Y↑↑) et le taux d'intérêt reste à peu près stable." }
            ]
          }
        },
        {
          title: "Tout dépend de l'école : keynésiens contre monétaristes",
          paragraphs: [
            "Le même schéma ne dit pas la même chose selon la forme qu'on donne aux courbes, et ce choix dépend de l'école de pensée. C'est ce qui fait que des économistes sérieux, avec le même modèle, conseillent des politiques opposées.",
            "==Le cas keynésien.== Pour les keynésiens les plus stricts, l'investissement dépend surtout du moral des entrepreneurs, pas du taux d'intérêt : la courbe IS est presque verticale. Baisser les taux ne sert alors à rien, il faut que l'État dépense. C'est aussi le cas du piège à liquidité, où LM est à plat (voir plus bas).",
            "==Le cas monétariste.== Pour Milton Friedman (prix Nobel 1976) et les monétaristes, on garde la monnaie pour acheter, pas pour spéculer : la courbe LM est presque verticale [12]. C'est la quantité de monnaie qui fixe la production. Une relance budgétaire ne fait alors que monter les taux et évincer complètement l'investissement privé ; seule la monnaie agit, et à long terme, elle ne fait monter que les prix."
          ],
          diagram: {
            preset: "keynes",
            steps: [
              { label: "Vision keynésienne", text: "IS est verticale : l'investissement ne réagit pas au taux d'intérêt." },
              { label: "Plus de monnaie", text: "LM descend, les taux baissent… mais la production ne bouge pas : la politique monétaire est inefficace." },
              { label: "L'État dépense", text: "IS va à droite : toute la dépense publique se transforme en production. Pas d'effet d'éviction." }
            ]
          }
        },
        {
          title: "Le regard monétariste et néoclassique",
          paragraphs: [
            "Dans la vision monétariste, le schéma s'inverse : c'est la politique budgétaire qui ne sert à rien à court terme, la politique monétaire qui agit (voir le schéma).",
            "Les ==nouveaux classiques== vont plus loin. Robert Lucas (prix Nobel 1995) met au centre les ==anticipations rationnelles== : les gens utilisent toute l'information disponible et ne se laissent pas surprendre durablement par la politique économique [16]. Robert Barro ajoute en 1974 l'==équivalence ricardienne== : si l'État s'endette aujourd'hui, les ménages savent qu'il faudra payer des impôts demain, alors ils épargnent ce qu'on leur donne, et la relance tombe à plat [11].",
            "Mais ces résultats reposent sur des hypothèses fortes : des ménages qui pensent à leurs enfants, des marchés financiers parfaits, une politique de l'État parfaitement prévisible. Les études ne tranchent pas nettement pour ou contre [11]."
          ],
          diagram: {
            preset: "monetariste",
            steps: [
              { label: "Vision monétariste", text: "LM est verticale : la quantité de monnaie fixe la production." },
              { label: "L'État dépense", text: "IS va à droite, mais seule la hausse des taux en sort : la production ne bouge pas. L'éviction est totale." },
              { label: "Plus de monnaie", text: "LM va à droite : la production monte d'autant. Seule la monnaie agit (et, à long terme, sur les prix)." }
            ]
          }
        },
        {
          title: "Ça dépend aussi du moment : chaque école a eu son époque",
          paragraphs: [
            "==Années 1950-1960 : l'âge d'or keynésien.== Le modèle IS-LM guide les politiques économiques jusqu'à la fin des années 1960 : quand le chômage monte, l'État relance.",
            "==Années 1970 : la stagflation.== Chômage ET inflation en même temps, ce que le modèle keynésien n'avait pas prévu. Les monétaristes gagnent la bataille des idées : Friedman reçoit le Nobel en 1976 [12], et au début des années 1980 la Fed de Paul Volcker serre la monnaie pour casser l'inflation [13].",
            "==Années 1980-1990 : les nouveaux classiques.== Anticipations rationnelles, méfiance envers la relance, banques centrales indépendantes qui visent d'abord la stabilité des prix [16].",
            "==Depuis 2008 : le retour de Keynes.== Avec des taux à zéro, on retrouve le piège à liquidité : les États relancent par la dépense, et les banques centrales inventent de nouveaux outils [5][7]. Retenir : un modèle est une paire de lunettes ; on change de lunettes quand le monde change."
          ]
        },
        {
          title: "En économie ouverte : le taux de change change tout",
          paragraphs: [
            "Dans la réalité, un pays commerce avec les autres et l'argent circule d'un pays à l'autre. Robert Mundell (prix Nobel 1999) et Marcus Fleming ont ajouté cette ouverture au modèle [2]. Une seule variable de plus : ==le taux de change==, le prix de la monnaie du pays en monnaie étrangère.",
            "Idée clé : si les capitaux circulent librement, le taux d'intérêt du pays ne peut pas s'écarter longtemps de celui du reste du monde. Si i monte, l'argent étranger afflue pour en profiter ; s'il baisse, l'argent part.",
            "Le modèle de base regarde une ==petite économie ouverte== : elle ne pèse pas sur le reste du monde, dont le revenu et le taux d'intérêt sont donnés. On ajoute à IS et LM une troisième courbe, l'équilibre de la balance des paiements (commerce + capitaux).",
            "En changes flexibles (la monnaie flotte, comme l'euro face au dollar), la banque centrale garde la main sur sa monnaie, et ==la politique monétaire est encore plus efficace qu'en économie fermée== : plus de monnaie, les taux baissent, les capitaux sortent, la monnaie se déprécie, les exportations repartent et IS se déplace à son tour vers la droite. Plus les capitaux sont mobiles, plus l'effet est fort [2].",
            "La politique budgétaire, elle, marche d'autant moins que les capitaux sont mobiles : la relance fait monter les taux, les capitaux affluent, la monnaie s'apprécie, les exportations reculent et annulent une partie de la relance (toute la relance si les capitaux sont parfaitement mobiles) [2].",
            "En changes fixes (la monnaie est attachée à une autre), c'est l'inverse [2]. ==La politique monétaire ne sert à rien à long terme== : si la banque centrale crée de la monnaie, les taux baissent, les capitaux sortent, la monnaie est attaquée, et pour défendre la parité elle doit vendre ses réserves de devises, ce qui retire autant de monnaie qu'elle en avait créé.",
            "==La politique budgétaire devient efficace, d'autant plus que les capitaux sont mobiles== : la relance fait monter les taux, les capitaux entrent, la monnaie tend à s'apprécier ; pour tenir la parité, la banque centrale achète des devises et crée de la monnaie, comme un policy mix involontaire. Si les capitaux sont peu mobiles, c'est l'inverse : les importations l'emportent, la monnaie est attaquée, la banque centrale doit retirer de la monnaie et l'éviction s'aggrave.",
            "Dernier outil des changes fixes : ==la dévaluation==. Elle rend les exportations moins chères et doit améliorer la balance commerciale, mais d'abord elle la dégrade (on paie plus cher ce qu'on importe déjà) : c'est la ==courbe en J==. Elle est d'autant moins efficace que les capitaux sont mobiles.",
            "==Grand pays, petit pays.== Quand un petit pays relance par la monnaie avec des changes fixes, il doit défendre sa monnaie et n'obtient rien. Quand c'est le pays dominant (les États-Unis), sa détente monétaire se transmet aux autres, qui suivent pour garder leur taux de change : sa politique devient celle du monde.",
            "==L'union monétaire (la zone euro).== Plus de taux de change entre les membres, une seule banque centrale, un seul taux d'intérêt. Si un pays relance seul par la dépense, il fait monter le taux commun : l'effet d'éviction est partagé par tous ses voisins. À l'inverse, une politique monétaire commune agit pareil sur tous. Et comme un pays n'a plus à craindre pour sa propre monnaie, la tentation de laisser filer les déficits augmente. D'où les règles du Pacte de stabilité et de croissance : un déficit public d'au plus 3 % du PIB et une dette d'au plus 60 %, avec des sanctions renforcées en 2011 [14]."
          ],
          plain: {
            title: "la France relance seule en 1981",
            steps: [
              "Le gouvernement distribue du pouvoir d'achat : les Français achètent plus [8].",
              "Mais une bonne partie de ces achats, ce sont des produits importés (voitures, électroménager…) : la relance profite aussi aux usines étrangères.",
              "La France importe plus qu'elle n'exporte : il faut vendre des francs pour payer en marks ou en dollars, le franc est sous pression.",
              "Le franc étant attaché aux autres monnaies européennes, il faut le dévaluer, trois fois de 1981 à 1983 [8][9].",
              "En mars 1983, le gouvernement change de cap : c'est le tournant de la rigueur [10]."
            ]
          },
          example: {
            title: "Exemple : la relance française de 1981-1983",
            text: "En 1981, le gouvernement de Pierre Mauroy relance la demande intérieure [8]. Une partie de la relance part en importations, le déficit extérieur se creuse, et le franc, rattaché aux autres monnaies européennes, doit être dévalué en octobre 1981 puis encore deux fois jusqu'en mars 1983 [8][9]. En mars 1983, le gouvernement change de cap : c'est le « tournant de la rigueur » [10]. La leçon du modèle ouvert : un pays aux changes fixes qui relance seul « fuit » par ses importations ; si les capitaux ne viennent pas compenser, la monnaie est attaquée et il faut dévaluer ou changer de politique."
          }
        },
        {
          title: "À quoi sert ce modèle ?",
          paragraphs: [
            "À raisonner vite. Face à une crise, il donne en deux courbes le sens des effets : qui fait monter la production, qui fait monter les taux, qui annule quoi.",
            "À comprendre les débats. Faut-il relancer par la dépense publique ou par la monnaie ? Le modèle montre que ça dépend de l'état des taux, de l'ouverture du pays et de son régime de change.",
            "À lire l'actualité. Quand la BCE monte ses taux, quand un État vote un plan de relance ou de rigueur, tu peux te demander : quelle courbe bouge, dans quel sens, et que deviennent la production et les taux ?"
          ]
        },
        {
          title: "Les limites : un modèle utile, mais simplifié",
          paragraphs: [
            "Les prix sont fixes. IS-LM décrit le court terme et ignore l'inflation : il ne dit pas ce qui arrive aux prix quand la production monte. Pour ça, il faut d'autres modèles (offre et demande globales).",
            "Le piège à liquidité. Quand les taux sont déjà à leur plancher, tout le monde s'attend à ce qu'ils remontent (donc à ce que le prix des titres baisse) : on garde la monnaie supplémentaire au lieu d'acheter des titres, et les taux ne baissent plus. LM est à plat, et la politique monétaire ne sert plus à rien dans le modèle ; la politique budgétaire, elle, marche à plein. C'est la situation des États-Unis après décembre 2008, quand la Fed a fixé son taux entre 0 et 0,25 % [5] : il a fallu compter sur la relance budgétaire et sur d'autres outils.",
            "Les anticipations. Les ménages et les entreprises réagissent à ce qu'ils attendent : si on pense que la relance d'aujourd'hui sera payée par des impôts demain, on peut épargner au lieu de dépenser, et l'effet est plus faible. Le modèle ne tient pas compte de ces anticipations (c'est la critique de Robert Lucas).",
            "Un monde simplifié. Une seule production, un seul taux d'intérêt, pas de dette publique qui s'accumule, pas de banques qui peuvent refuser de prêter : utile pour comprendre le sens des effets, pas pour prévoir des chiffres précis."
          ],
          plain: {
            title: "le piège à liquidité, après 2008",
            steps: [
              "En décembre 2008, la Fed a déjà mis son taux entre 0 et 0,25 % : elle ne peut presque plus le baisser [5].",
              "Les banques et les ménages ont peur : même avec de l'argent pas cher, ils n'empruntent pas et gardent leur épargne.",
              "Créer encore plus de monnaie ne change presque rien : c'est le piège.",
              "Il reste l'État : en février 2009, le plan de relance de 787 milliards de dollars prend le relais [3][4]."
            ]
          },
          diagram: {
            preset: "trappe",
            steps: [
              { label: "Taux au plancher", text: "Les taux sont déjà au plancher : LM est à plat là où IS la croise." },
              { label: "Plus de monnaie", text: "LM s'allonge vers la droite, mais le point ne bouge pas : la politique monétaire ne marche plus." },
              { label: "L'État dépense", text: "IS va à droite : la production monte sans que les taux bougent. Dans le piège à liquidité, la relance budgétaire est très efficace." }
            ]
          }
        }
      ],
      forMe: "Quand tu lis « la BCE relève ses taux » ou « le gouvernement annonce un plan de relance », tu sais maintenant quelle courbe bouge : taux plus hauts = crédits plus chers et croissance freinée ; dépense publique = plus d'activité, mais des taux qui peuvent monter et une dette à payer.",
      figures: [
        { value: "1937", label: "John Hicks propose le schéma IS-LM", src: 1 },
        { value: "787 Md$", label: "le plan de relance américain de 2009 (coût estimé au vote)", src: 3 },
        { value: "4 %", label: "le taux de dépôt de la BCE en septembre 2023, contre −0,5 % en juillet 2022", src: 6 },
        { value: "0-0,25 %", label: "le taux de la Fed à partir de décembre 2008 : le piège à liquidité", src: 5 }
      ],
      terms: ["politique-budgetaire", "politique-monetaire", "multiplicateur", "effet-eviction", "piege-liquidite", "taux-de-change", "taux-directeur"],
      quiz: [
        {
          q: "Dans le modèle IS-LM, que représente la courbe IS ?",
          options: ["L'équilibre du marché des biens", "L'équilibre du marché de la monnaie", "L'inflation", "Le taux de change"],
          answer: 0,
          explain: "IS = marché des biens : plus le taux d'intérêt est bas, plus on investit et consomme, plus la production est haute."
        },
        {
          q: "L'État augmente ses dépenses. Que se passe-t-il dans IS-LM ?",
          options: ["Y baisse et i baisse", "Y monte et i monte", "Y monte et i baisse", "Rien ne bouge"],
          answer: 1,
          explain: "IS se déplace vers la droite : la production monte, mais le taux d'intérêt aussi, ce qui freine l'investissement privé (effet d'éviction)."
        },
        {
          q: "La banque centrale crée plus de monnaie. Que se passe-t-il ?",
          options: ["Y monte et i baisse", "Y baisse et i monte", "Y monte et i monte", "Seule l'inflation change"],
          answer: 0,
          explain: "LM se déplace vers la droite : l'argent est plus abondant et moins cher, les taux baissent et la production monte."
        },
        {
          q: "Qu'est-ce que l'effet d'éviction ?",
          options: ["Des entreprises qui quittent le pays", "La hausse des taux causée par la relance, qui réduit l'investissement privé", "Une baisse des impôts", "Une dévaluation"],
          answer: 1,
          explain: "La relance budgétaire fait monter les taux : une partie de l'investissement privé disparaît, ce qui réduit l'effet de la relance."
        },
        {
          q: "Dans un piège à liquidité (taux déjà à zéro), quelle politique marche le mieux selon le modèle ?",
          options: ["La politique monétaire", "La politique budgétaire", "Aucune", "Les deux pareil"],
          answer: 1,
          explain: "Les taux ne peuvent plus baisser, donc créer de la monnaie ne sert à rien ; la dépense publique, elle, fait monter la production sans faire monter les taux."
        },
        {
          q: "En changes fixes et avec des capitaux très mobiles, quelle politique est efficace selon Mundell-Fleming ?",
          options: ["La politique monétaire", "La politique budgétaire", "Aucune des deux", "Les deux"],
          answer: 1,
          explain: "La banque centrale doit défendre la parité, elle perd la main sur la monnaie ; la politique budgétaire est efficace, d'autant plus que les capitaux sont mobiles."
        },
        {
          q: "Pour un monétariste, la courbe LM est…",
          options: ["horizontale", "verticale", "décroissante", "inutile"],
          answer: 1,
          explain: "Sans demande de monnaie pour spéculer, c'est la quantité de monnaie qui fixe la production : LM est verticale, et la relance budgétaire n'a d'effet que sur les taux."
        },
        {
          q: "Que dit l'équivalence ricardienne (Barro, 1974) ?",
          options: ["La dépense publique double toujours la production", "Les ménages épargnent la relance financée par la dette, car ils anticipent les impôts futurs", "Il faut toujours dévaluer", "La monnaie n'a aucun rôle"],
          answer: 1,
          explain: "Les ménages savent que la dette d'aujourd'hui sera payée par des impôts demain : ils épargnent, et la relance tombe à plat (sous des hypothèses fortes)."
        },
        {
          q: "Quelle école domine dans les années 1970, face à la stagflation ?",
          options: ["Les keynésiens", "Les monétaristes", "Les mercantilistes", "Les physiocrates"],
          answer: 1,
          explain: "Chômage et inflation en même temps : le modèle keynésien est mis en difficulté, Friedman et les monétaristes gagnent la bataille des idées."
        }
      ],
      sources: [
        { short: "Hicks (1937)", name: "John Hicks, « Mr. Keynes and the “Classics”; A Suggested Interpretation », Econometrica, avril 1937", url: "https://www.jstor.org/stable/1907242" },
        { short: "Prix Nobel", name: "Fondation Nobel, prix d'économie 1999 attribué à Robert Mundell (communiqué)", url: "https://www.nobelprize.org/prizes/economic-sciences/1999/press-release/" },
        { short: "Pew", name: "Pew Charitable Trusts, « Analysis of the American Recovery and Reinvestment Act », 17 février 2009", url: "https://www.pewtrusts.org/research-and-analysis/reports/2009/02/17/analysis-of-the-american-recovery-and-reinvestment-act" },
        { short: "Congressional Research Service", name: "Congressional Research Service, « American Recovery and Reinvestment Act of 2009 (P.L. 111-5): Summary and Legislative History », R40537", url: "https://www.everycrsreport.com/reports/R40537.html" },
        { short: "Fed", name: "Réserve fédérale, communiqué du FOMC du 16 décembre 2008", url: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20081216b.htm" },
        { short: "BCE", name: "Banque centrale européenne, taux directeurs de la BCE", url: "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/key_ecb_interest_rates/html/index.en.html" },
        { short: "BCE", name: "Banque centrale européenne, « ECB announces €750 billion Pandemic Emergency Purchase Programme (PEPP) », 18 mars 2020", url: "https://www.ecb.europa.eu/press/pr/date/2020/html/ecb.pr200318_1~3949d6f266.en.html" },
        { short: "Hérodote", name: "Hérodote, « Les années Mitterrand » (dossier)", url: "https://www.herodote.net/dossier-74.php" },
        { short: "Slate", name: "Slate, « Le PS, pas plus avancé dans ses réflexions qu'il y a trente ans » (1983-2014)", url: "https://www.slate.fr/story/91853/parti-socialiste-1983-2014" },
        { short: "Université de Lille", name: "Université de Lille (HAL), étude sur la politique économique de 1981-1983 et le tournant de la rigueur", url: "https://hal.univ-lille.fr/hal-04119998v1/document" },
        { short: "Barro (1974)", name: "Robert J. Barro, « Are Government Bonds Net Wealth? », Journal of Political Economy, vol. 82, n° 6, 1974", url: "https://www.jstor.org/stable/1830280" },
        { short: "Prix Nobel", name: "Fondation Nobel, prix d'économie 1976 attribué à Milton Friedman (communiqué)", url: "https://www.nobelprize.org/prizes/economic-sciences/1976/press-release/" },
        { short: "Equitable Growth", name: "Washington Center for Equitable Growth, « What Was Going on Between the White House and the Federal Reserve in the Early 1980s? »", url: "https://equitablegrowth.org/going-white-house-federal-reserve-early-1980s-daily-focus/" },
        { short: "Commission européenne", name: "Commission européenne, « Stability and Growth Pact »", url: "https://economy-finance.ec.europa.eu/economic-and-fiscal-governance/stability-and-growth-pact_en" },
        { short: "Prix Nobel", name: "Fondation Nobel, prix d'économie 1969 attribué à Ragnar Frisch et Jan Tinbergen (communiqué)", url: "https://www.nobelprize.org/prizes/economic-sciences/1969/press-release/" },
        { short: "Prix Nobel", name: "Fondation Nobel, prix d'économie 1995 attribué à Robert Lucas (communiqué)", url: "https://www.nobelprize.org/prizes/economic-sciences/1995/press-release/" },
        { short: "Cato Institute", name: "Cato Institute, « The Reagan-Volcker Years in Retrospect », 2022", url: "https://www.cato.org/blog/reagan-volcker-years-retrospect-3" },
        { short: "Eurostat", name: "Eurostat, « Euro area annual inflation up to 8.6% » (juin 2022), communiqué du 19 juillet 2022", url: "https://ec.europa.eu/eurostat/documents/2995521/14644638/2-19072022-AP-EN.pdf/" },
        { short: "Lefebvre Dalloz", name: "Lefebvre Dalloz, « BCE : remontée historique des taux directeurs de 50 points » (juillet 2022)", url: "https://formation.lefebvre-dalloz.fr/actualite/bce-remontee-historique-des-taux-directeurs-de-50-points" },
        { short: "MySweetImmo", name: "MySweetImmo, d'après l'Observatoire Crédit Logement/CSA, « Des taux à plus de 4,20 % pour la grande majorité des emprunteurs », 19 janvier 2024", url: "https://www.mysweetimmo.com/2024/01/19/__trashed-6/" },
        { short: "Selectra", name: "Selectra, « Historique des taux immobiliers »", url: "https://selectra.info/finance/credit-immo/taux/historique" }
      ]
    },

    {
      id: "ecoles-economiques",
      emoji: "🏛️",
      theme: "eco",
      title: "Les grandes écoles économiques : classiques, keynésiens, monétaristes…",
      hook: "Face à une crise, deux économistes peuvent donner deux conseils opposés. Pas parce que l'un se trompe, mais parce qu'ils ne regardent pas l'économie avec les mêmes lunettes. Voici les grandes écoles, leur idée centrale et l'époque qui les a fait gagner.",
      minutes: 18,
      piste: "rouge",
      tldr: [
        "Les classiques et les néoclassiques font confiance aux marchés : laissés libres, ils retrouvent l'équilibre, et l'État doit rester discret [1][2].",
        "Keynes répond à la crise des années 1930 : la demande peut rester trop faible, le chômage durer, et l'État doit relancer [3].",
        "Les monétaristes (Friedman) puis les nouveaux classiques (Lucas) reprennent la main dans les années 1970-1980 : surveiller la monnaie, se méfier de la relance [5][6].",
        "Chaque école est née d'une crise que la précédente expliquait mal : la question à se poser n'est pas « qui a raison ? » mais « quelles lunettes pour quel moment ? ».",
        "L'économie ne s'est pas arrêtée aux grandes querelles sur l'État et le marché : depuis 2000, des prix Nobel ont récompensé ceux qui montrent que nous ne sommes pas si rationnels (Kahneman en 2002, Thaler en 2017) [10][12], que des communautés gèrent très bien des ressources communes sans État ni marché (Ostrom, première femme lauréate, en 2009) [11], et qu'on peut tester les politiques par tirage au sort, comme en médecine (Banerjee, Duflo et Kremer en 2019) [13]."
      ],
      sections: [
        {
          title: "Les classiques : le marché s'équilibre tout seul",
          paragraphs: [
            "En 1776, l'Écossais Adam Smith publie « La Richesse des nations » : chacun, en cherchant son propre intérêt, contribue sans le vouloir à la richesse de tous, comme guidé par une « main invisible » [1]. David Ricardo y ajoute en 1817 l'avantage comparatif, qui justifie le libre-échange.",
            "L'idée centrale : ==les marchés s'ajustent==. Si les salaires sont trop hauts, ils baissent jusqu'à ce que tout le monde trouve un emploi. Selon la « loi de Say » (Jean-Baptiste Say), la production crée ses propres débouchés : il ne peut pas y avoir de manque durable de demande.",
            "La monnaie n'est qu'un « voile » : elle ne change pas la production réelle, seulement les prix. L'État a des fonctions limitées : justice, défense, quelques infrastructures."
          ],
          example: {
            title: "Face à une crise, le conseil classique",
            text: "Ne rien forcer : laisser baisser les prix et les salaires, l'économie retrouvera d'elle-même le plein emploi. Équilibrer le budget de l'État."
          }
        },
        {
          title: "Les néoclassiques : l'économie mise en équations",
          paragraphs: [
            "Dans les années 1870, Léon Walras, William Jevons et Carl Menger changent de méthode : la valeur d'un bien vient de son utilité pour celui qui l'achète, et on raisonne « à la marge » (ce que rapporte une unité de plus) [2]. Walras construit l'équilibre général : tous les marchés s'équilibrent en même temps.",
            "Leur héritage est immense : l'offre et la demande, les prix qui s'ajustent, la concurrence parfaite. C'est encore la base de la plupart des manuels d'économie.",
            "Leur vision de la crise reste celle des classiques : le chômage durable vient de ce qui empêche les prix de s'ajuster (salaires minimums, syndicats, règles)."
          ]
        },
        {
          title: "Keynes : et si le marché ne se rétablissait pas tout seul ?",
          paragraphs: [
            "La crise de 1929 dure, le chômage reste massif pendant des années : les marchés ne se rétablissent pas. En 1936, John Maynard Keynes publie la « Théorie générale de l'emploi, de l'intérêt et de la monnaie » [3].",
            "Son idée : ==c'est la demande qui fixe la production==. Si les ménages et les entreprises ont peur de l'avenir, ils dépensent moins, les entreprises produisent moins, embauchent moins, et le chômage peut durer : c'est un ==équilibre de sous-emploi==. Baisser les salaires peut même aggraver les choses, car les salariés consomment moins.",
            "Le remède : ==l'État relance== la demande (dépenses publiques, baisse d'impôts), quitte à faire un déficit pendant la crise. La monnaie compte aussi, mais elle peut se heurter au piège à liquidité.",
            "Keynes insiste aussi sur l'incertitude et les « esprits animaux » des investisseurs : l'investissement dépend de la confiance, pas seulement du taux d'intérêt."
          ],
          plain: {
            title: "le cercle vicieux de la Grande Dépression",
            steps: [
              "Après le krach de 1929, les ménages ont peur et dépensent moins.",
              "Les usines vendent moins, elles licencient.",
              "Les chômeurs dépensent encore moins : les ventes rechutent, d'autres usines licencient.",
              "Baisser les salaires n'aide pas : les salariés achètent encore moins.",
              "Pour Keynes, il faut que quelqu'un dépense à la place des ménages : l'État."
            ]
          },
          diagram: {
            preset: "budget",
            steps: [
              { label: "La crise", text: "La demande est trop faible : l'économie est coincée au point E, avec du chômage." },
              { label: "L'État relance", text: "La dépense publique pousse IS à droite : la production remonte. C'est la réponse keynésienne." }
            ]
          },
          example: {
            title: "Face à une crise, le conseil keynésien",
            text: "Relancer : l'État dépense (grands travaux, aides) et accepte un déficit le temps que la demande privée reparte. Le plan américain de 2009 en est un exemple (voir le cours IS-LM)."
          }
        },
        {
          title: "La synthèse : Keynes à court terme, les classiques à long terme",
          paragraphs: [
            "Après la guerre, des économistes comme John Hicks (le modèle IS-LM, 1937) et Paul Samuelson réconcilient les deux camps : à court terme, les prix sont rigides et Keynes a raison ; à long terme, les prix s'ajustent et les néoclassiques ont raison [4].",
            "C'est l'âge d'or keynésien des années 1950-1960 : forte croissance, plein emploi, et des États qui pilotent l'économie avec le budget et la monnaie. La courbe de Phillips semble offrir un choix : un peu plus d'inflation contre un peu moins de chômage."
          ]
        },
        {
          title: "Les monétaristes : la monnaie avant tout",
          paragraphs: [
            "Dans les années 1970, tout se dérègle : la stagflation (stagnation + inflation) mêle chômage et inflation, ce que la courbe de Phillips disait impossible. Milton Friedman, de l'université de Chicago, avait prévenu [5].",
            "Ses idées : ==l'inflation est d'abord un phénomène monétaire== (trop de monnaie pour trop peu de biens) ; à long terme, il existe un ==chômage « naturel »== qu'on ne peut pas faire baisser durablement en créant de l'inflation ; la relance budgétaire évince l'investissement privé.",
            "Son conseil : une ==règle simple==, faire croître la masse monétaire au même rythme que l'économie, plutôt que des relances au coup par coup. Friedman reçoit le prix Nobel en 1976 [5]."
          ],
          diagram: {
            preset: "monetariste",
            steps: [
              { label: "Vision monétariste", text: "LM est verticale : c'est la quantité de monnaie qui fixe la production." },
              { label: "L'État relance", text: "IS va à droite, mais seuls les taux montent : la relance budgétaire ne sert à rien." },
              { label: "Plus de monnaie", text: "La production monte à court terme ; à long terme, seuls les prix montent." }
            ]
          },
          example: {
            title: "Face à une crise, le conseil monétariste",
            text: "Ne pas multiplier les relances budgétaires ; stabiliser la croissance de la monnaie et lutter d'abord contre l'inflation. Au début des années 1980, la Fed de Paul Volcker serre la monnaie pour casser l'inflation américaine (voir le cours IS-LM)."
          }
        },
        {
          title: "Les nouveaux classiques : les gens anticipent",
          paragraphs: [
            "Robert Lucas (prix Nobel 1995) va plus loin avec les ==anticipations rationnelles== : les ménages et les entreprises utilisent toute l'information disponible et ne se laissent pas tromper longtemps [6]. Si l'État annonce une relance, ils en anticipent les effets (inflation, impôts futurs) et ajustent leur comportement : la relance perd son effet.",
            "Robert Barro en tire l'==équivalence ricardienne== (1974) : une relance financée par la dette est épargnée par les ménages, qui prévoient les impôts de demain [7].",
            "Conséquences pratiques : ==des règles plutôt que des surprises==, des banques centrales indépendantes et crédibles, chargées d'abord de la stabilité des prix. C'est le modèle de la BCE, créée en 1998."
          ]
        },
        {
          title: "Les nouveaux keynésiens : les prix ne s'ajustent pas si vite",
          paragraphs: [
            "Depuis les années 1980, une autre famille reprend les outils des nouveaux classiques (anticipations rationnelles, calculs rigoureux) mais garde l'intuition de Keynes : ==les prix et les salaires sont rigides==. Changer ses prix coûte (catalogues, contrats, négociations), et l'information est imparfaite : un vendeur d'occasion en sait plus que l'acheteur, ce qu'a montré George Akerlof (prix Nobel 2001) [8].",
            "Résultat : à court terme, la politique économique peut aider. C'est aujourd'hui le cadre le plus utilisé par les banques centrales, qui le mélangent avec des idées des autres écoles."
          ]
        },
        {
          title: "Et les autres : autrichiens, marxistes, post-keynésiens…",
          paragraphs: [
            "==L'école autrichienne== (Friedrich Hayek, prix Nobel 1974) se méfie encore plus de l'État que les classiques : les prix transmettent une information qu'aucun planificateur ne peut réunir, et les crises viennent du crédit trop facile [9].",
            "==Les marxistes== voient dans le capitalisme un conflit entre ceux qui possèdent le capital et ceux qui vendent leur travail, avec des crises qui reviennent par nature.",
            "==Les post-keynésiens== prolongent l'incertitude radicale de Keynes et insistent sur la fragilité de la finance et le rôle de la monnaie créée par les banques."
          ]
        },
        {
          title: "Ce qu'il faut retenir : quelles lunettes pour quel moment ?",
          paragraphs: [
            "Chaque école est née d'une crise que la précédente expliquait mal : Keynes après 1929, les monétaristes après la stagflation des années 1970, le retour des idées keynésiennes après 2008, quand les taux sont tombés à zéro.",
            "Aucune n'a raison partout et toujours. Quand le problème est une demande effondrée, les lunettes keynésiennes aident ; quand c'est l'inflation, les lunettes monétaristes ; quand la politique économique est imprévisible, celles des nouveaux classiques.",
            "Dans un débat, demande-toi : ==de quelle école parle-t-il, et dans quelle situation sommes-nous ?== C'est souvent là que se cache le désaccord."
          ]
        },
        {
          title: "1931 : le duel Keynes-Hayek",
          paragraphs: [
            "Avant de devenir des noms de manuels, Keynes et Hayek ont été des adversaires en chair et en os. En 1931, la London School of Economics invite le jeune Autrichien ==Friedrich Hayek== à Londres, en partie pour contrer l'influence de Keynes, installé à Cambridge. Commence un échange de critiques et de réponses dans les revues, d'une rare vivacité.",
            "Le fond du désaccord est simple à résumer. Pour ==Keynes==, la crise vient d'un manque de dépenses : il faut relancer. Pour ==Hayek==, la crise est la gueule de bois d'un boom artificiel, nourri par du crédit trop bon marché qui a fait investir dans de mauvais projets : relancer, c'est prolonger la maladie ; il faut laisser l'économie se purger.",
            "Dans les années 1930, Keynes gagne la bataille des idées, et sa « Théorie générale » de 1936 domine l'après-guerre. Mais Hayek prend sa revanche plus tard : prix Nobel en 1974, l'année même de la stagflation [9], il inspire Margaret Thatcher et les libéraux des années 1980. Après la crise de 2008, le débat renaît presque mot pour mot : faut-il relancer ou laisser purger ?",
            "Ce duel montre que ==les écoles ne sont pas seulement des théories : ce sont des réponses différentes à une même question==, « que faire quand tout s'effondre ? »."
          ]
        },
        {
          title: "Les comportementalistes : nous ne sommes pas si rationnels",
          paragraphs: [
            "Presque toutes les écoles vues jusqu'ici supposent que les gens calculent bien leur intérêt. Dans les années 1970, deux psychologues israéliens, ==Daniel Kahneman== et Amos Tversky, montrent par des expériences que nous nous trompons de façon ==prévisible== : nous craignons plus une perte que nous n'apprécions un gain de même taille, nous nous laissons influencer par le premier chiffre entendu, nous préférons le présent à l'avenir plus que de raison.",
            "En ==2002==, Kahneman reçoit le prix Nobel d'économie pour avoir intégré ces découvertes de la psychologie à l'économie, notamment sur les décisions dans l'incertitude [10]. C'est un psychologue qui reçoit le prix d'économie : un signe que la discipline s'ouvre.",
            "L'économiste américain ==Richard Thaler== prolonge ce travail. Il popularise l'idée de ==« nudge »== (coup de pouce) : sans interdire ni obliger, on peut aider les gens à faire de meilleurs choix en changeant la façon de présenter les options. Exemple célèbre : inscrire par défaut les salariés à un plan d'épargne retraite, tout en leur laissant la liberté d'en sortir, fait fortement monter l'épargne. Thaler reçoit le prix Nobel en ==2017== [12].",
            "Cette école ne remplace pas les autres, mais elle les corrige : elle explique les bulles boursières, l'endettement excessif ou le fait que des gens ne profitent pas d'aides auxquelles ils ont droit. Elle a aussi ses critiques : ==qui décide de ce qu'est le « bon » choix, et jusqu'où l'État peut-il nous orienter ?=="
          ],
          plain: {
            title: "le pouvoir de l'option par défaut",
            steps: [
              "Une entreprise propose un plan d'épargne retraite : pour y entrer, il faut remplir un formulaire. Beaucoup de salariés remettent à plus tard.",
              "La même entreprise inscrit tout le monde d'office, avec la possibilité d'en sortir en un clic.",
              "Presque personne ne se désinscrit : la paresse, qui jouait contre l'épargne, joue désormais pour elle.",
              "Personne n'a été forcé, mais le résultat change beaucoup : c'est l'idée du « nudge » de Thaler [12]."
            ]
          }
        },
        {
          title: "Elinor Ostrom : ni l'État ni le marché",
          paragraphs: [
            "En 1968, le biologiste Garrett Hardin publie un article célèbre, « La tragédie des communs » : quand une ressource est partagée (un pâturage, une zone de pêche), chacun a intérêt à l'exploiter au maximum avant les autres, et elle finit détruite. Les solutions classiques : la ==privatiser== (le marché) ou la faire gérer par ==l'État==.",
            "La politologue américaine ==Elinor Ostrom== va voir sur le terrain. Pâturages suisses, systèmes d'irrigation au Népal, pêcheries de Turquie, forêts du Japon : elle découvre que ==des communautés gèrent très bien leurs ressources communes pendant des siècles==, avec leurs propres règles, leurs propres contrôles et leurs propres sanctions, sans privatisation ni État central.",
            "Elle en tire des principes : des limites claires, des règles adaptées au lieu, des usagers qui participent aux décisions, une surveillance par la communauté, des sanctions progressives. En ==2009==, elle devient ==la première femme à recevoir le prix Nobel d'économie== [11].",
            "Son travail est aujourd'hui très utilisé pour penser les grands « communs » modernes : le climat, les océans, l'eau, ou même les logiciels libres et Wikipédia. Il bouscule l'idée qu'il n'y aurait que deux options, le marché ou l'État."
          ]
        },
        {
          title: "Les expérimentateurs : tester l'économie comme un médicament",
          paragraphs: [
            "Longtemps, l'économie a surtout raisonné sur des modèles et des statistiques passées. À partir des années 1990, une nouvelle génération décide de ==tester les politiques par tirage au sort==, comme on teste un médicament : un groupe reçoit l'aide, un autre non, et l'on compare.",
            "Les figures de ce mouvement sont ==Abhijit Banerjee==, ==Esther Duflo== (Française, formée à l'École normale supérieure) et ==Michael Kremer==. Ils testent, en Inde, au Kenya et ailleurs, ce qui marche vraiment contre la pauvreté : distribuer des moustiquaires gratuitement ou les vendre ? Ajouter des enseignants ou regrouper les élèves par niveau ? Vermifuger les enfants pour qu'ils aillent plus à l'école ?",
            "En ==2019==, tous trois reçoivent le prix Nobel pour leur « approche expérimentale de la lutte contre la pauvreté » [13]. À 46 ans, Esther Duflo est alors la plus jeune lauréate et la deuxième femme de l'histoire du prix [13].",
            "Cette méthode est aussi celle de Raj Chetty pour Moving to Opportunity (voir notre cours sur l'ascenseur social). Sa force : des réponses précises. Sa limite : ce qui marche dans un village du Kenya ne marche pas forcément ailleurs, et ==on ne peut pas tirer au sort une politique monétaire ou une guerre commerciale==. Les grandes écoles gardent donc leur rôle pour les grandes questions."
          ]
        },
        {
          title: "Une frise pour retenir",
          paragraphs: [
            "==1776== : Adam Smith, « La Richesse des nations » [1]. ==1817== : Ricardo, les avantages comparatifs. ==1848== : Marx et Engels, le « Manifeste du Parti communiste ». ==Années 1870== : Walras, Jevons et Menger, la révolution marginaliste [2].",
            "==1931== : début du duel Keynes-Hayek. ==1936== : Keynes, « Théorie générale » [3]. ==1937== : Hicks invente le modèle IS-LM. ==1969== : premier prix Nobel d'économie. ==1970== : Samuelson, prix Nobel [4]. ==1974== : Hayek, prix Nobel, en pleine stagflation [9]. ==1976== : Friedman, prix Nobel [5].",
            "==1995== : Lucas, prix Nobel pour les anticipations rationnelles [6]. ==2001== : Akerlof, Spence et Stiglitz, l'information imparfaite [8]. ==2002== : Kahneman, la psychologie entre en économie [10]. ==2009== : Ostrom, première femme lauréate [11]. ==2017== : Thaler, le « nudge » [12]. ==2019== : Banerjee, Duflo et Kremer, les expériences contre la pauvreté [13].",
            "Le fil rouge : ==l'économie avance par crises et par controverses==, et chaque génération corrige les lunettes de la précédente."
          ]
        }
      ],
      forMe: "Quand un responsable politique dit « il faut relancer » et qu'un autre répond « il faut réduire le déficit », tu peux reconnaître leurs écoles : le premier raisonne en keynésien, le second en classique ou en monétariste. Et te demander laquelle colle le mieux à la situation du moment.",
      figures: [
        { value: "1776", label: "« La Richesse des nations » d'Adam Smith", src: 1 },
        { value: "1936", label: "la « Théorie générale » de Keynes", src: 3 },
        { value: "1976", label: "prix Nobel de Milton Friedman, le père du monétarisme", src: 5 },
        { value: "1995", label: "prix Nobel de Robert Lucas et des anticipations rationnelles", src: 6 },
        { value: "2009", label: "Elinor Ostrom, première femme prix Nobel d'économie", src: 11 },
        { value: "46 ans", label: "l'âge d'Esther Duflo à son prix Nobel en 2019, la plus jeune lauréate", src: 13 }
      ],
      terms: ["politique-budgetaire", "politique-monetaire", "inflation", "effet-eviction", "piege-liquidite", "banque-centrale"],
      quiz: [
        {
          q: "Selon la « loi de Say » des classiques…",
          options: ["la production crée ses propres débouchés", "l'État doit toujours relancer", "l'inflation vient de la monnaie", "les prix sont rigides"],
          answer: 0,
          explain: "Pour les classiques, il ne peut pas y avoir de manque durable de demande : ce qu'on produit finit par se vendre."
        },
        {
          q: "Quelle crise a fait naître la pensée de Keynes ?",
          options: ["La stagflation des années 1970", "La crise de 1929 et la Grande Dépression", "La crise de 2008", "Le choc pétrolier"],
          answer: 1,
          explain: "Le chômage massif et durable des années 1930 contredisait l'idée que les marchés se rétablissent seuls ; la « Théorie générale » paraît en 1936."
        },
        {
          q: "Pour Milton Friedman, l'inflation est d'abord…",
          options: ["un phénomène monétaire", "la faute des syndicats", "le prix du pétrole", "une bonne chose"],
          answer: 0,
          explain: "Trop de monnaie pour trop peu de biens : pour les monétaristes, c'est la quantité de monnaie qui explique l'inflation."
        },
        {
          q: "Que disent les anticipations rationnelles (Lucas) ?",
          options: ["Les gens se trompent toujours", "Les gens utilisent toute l'information et ne se laissent pas tromper longtemps par la politique économique", "Les prix sont fixes", "La monnaie n'existe pas"],
          answer: 1,
          explain: "Si les gens anticipent les effets d'une relance, elle perd une grande partie de son efficacité : d'où la préférence pour des règles stables."
        },
        {
          q: "Qu'est-ce qui distingue les nouveaux keynésiens ?",
          options: ["Ils refusent les mathématiques", "Ils pensent que les prix et salaires sont rigides à court terme", "Ils veulent supprimer la monnaie", "Ils sont contre toute politique économique"],
          answer: 1,
          explain: "Ils gardent les outils modernes mais ajoutent des rigidités : à court terme, la politique économique peut aider."
        },
        { q: "Sur quoi Keynes et Hayek s'opposaient-ils dans les années 1930 ?", options: ["Sur la couleur des billets", "Keynes voulait relancer la demande, Hayek pensait qu'il fallait laisser l'économie se purger des excès du crédit", "Sur le commerce avec la Chine", "Sur la création de l'euro"], answer: 1, explain: "Le débat renaît après chaque grande crise, comme en 2008." },
        { q: "Qu'est-ce qu'un « nudge », selon Richard Thaler ?", options: ["Un impôt", "Un coup de pouce qui oriente les choix sans les imposer, comme une option par défaut", "Une interdiction", "Une subvention"], answer: 1, explain: "Inscrire par défaut à un plan d'épargne, tout en laissant sortir, fait fortement monter l'épargne." },
        { q: "Qu'a montré Elinor Ostrom ?", options: ["Que seul l'État peut gérer une ressource commune", "Que des communautés gèrent souvent bien leurs ressources communes avec leurs propres règles", "Que tout doit être privatisé", "Que les ressources communes disparaissent toujours"], answer: 1, explain: "Première femme prix Nobel d'économie, en 2009." },
        { q: "Quelle méthode Banerjee, Duflo et Kremer ont-ils popularisée ?", options: ["Les grands modèles mathématiques", "Les essais par tirage au sort pour tester les politiques contre la pauvreté", "Les sondages d'opinion", "La planification centrale"], answer: 1, explain: "Comme pour un médicament : un groupe reçoit l'aide, un autre non, et l'on compare. Prix Nobel 2019." }
      ],
      sources: [
        { short: "Britannica", name: "Encyclopædia Britannica, « Adam Smith »", url: "https://www.britannica.com/biography/Adam-Smith" },
        { short: "Britannica", name: "Encyclopædia Britannica, « Léon Walras »", url: "https://www.britannica.com/biography/Leon-Walras" },
        { short: "Britannica", name: "Encyclopædia Britannica, « John Maynard Keynes »", url: "https://www.britannica.com/biography/John-Maynard-Keynes" },
        { short: "Prix Nobel", name: "Fondation Nobel, prix d'économie 1970 attribué à Paul Samuelson (communiqué)", url: "https://www.nobelprize.org/prizes/economic-sciences/1970/press-release/" },
        { short: "Prix Nobel", name: "Fondation Nobel, prix d'économie 1976 attribué à Milton Friedman (communiqué)", url: "https://www.nobelprize.org/prizes/economic-sciences/1976/press-release/" },
        { short: "Prix Nobel", name: "Fondation Nobel, prix d'économie 1995 attribué à Robert Lucas (communiqué)", url: "https://www.nobelprize.org/prizes/economic-sciences/1995/press-release/" },
        { short: "Barro (1974)", name: "Robert J. Barro, « Are Government Bonds Net Wealth? », Journal of Political Economy, vol. 82, n° 6, 1974", url: "https://www.jstor.org/stable/1830280" },
        { short: "Prix Nobel", name: "Fondation Nobel, prix d'économie 2001 attribué à George Akerlof, Michael Spence et Joseph Stiglitz (communiqué)", url: "https://www.nobelprize.org/prizes/economic-sciences/2001/press-release/" },
        { short: "Prix Nobel", name: "Fondation Nobel, prix d'économie 1974 attribué à Gunnar Myrdal et Friedrich von Hayek (communiqué)", url: "https://www.nobelprize.org/prizes/economic-sciences/1974/press-release/" },
        { short: "Prix Nobel", name: "Fondation Nobel, prix d'économie 2002 attribué à Daniel Kahneman et Vernon Smith (communiqué)", url: "https://www.nobelprize.org/prizes/economic-sciences/2002/press-release/" },
        { short: "Prix Nobel", name: "Fondation Nobel, prix d'économie 2009 attribué à Elinor Ostrom et Oliver Williamson (communiqué)", url: "https://www.nobelprize.org/prizes/economic-sciences/2009/press-release/" },
        { short: "Prix Nobel", name: "Fondation Nobel, prix d'économie 2017 attribué à Richard Thaler (communiqué)", url: "https://www.nobelprize.org/prizes/economic-sciences/2017/press-release/" },
        { short: "Prix Nobel", name: "Fondation Nobel, prix d'économie 2019 attribué à Abhijit Banerjee, Esther Duflo et Michael Kremer (communiqué et faits)", url: "https://www.nobelprize.org/prizes/economic-sciences/2019/press-release/" }
      ]
    },
    {
      id: "eurodollars",
      emoji: "🌊",
      theme: "fin",
      title: "Les eurodollars : ces dollars qui vivent hors des États-Unis",
      hook: "Des milliers de milliards de dollars circulent dans des banques à Londres, Tokyo ou Singapour, loin du contrôle de la Fed. Ils sont nés de la guerre froide, et à chaque grande crise, c'est la Fed qui doit venir les sauver.",
      minutes: 15,
      piste: "rouge",
      tldr: [
        "Un eurodollar, c'est simplement un dollar déposé dans une banque hors des États-Unis. Rien à voir avec l'euro : le mot est né bien avant [1][2].",
        "Le marché est né au milieu des années 1950, quand des banques soviétiques ont placé leurs dollars à Londres et à Paris de peur qu'ils soient saisis aux États-Unis [1].",
        "Il a grossi parce qu'il échappait aux règles américaines (plafonds de taux, réserves obligatoires) : fin 2019, les banques non américaines devaient environ 13 000 milliards de dollars [1][3].",
        "Quand ces dollars viennent à manquer, comme en 2008 et en 2020, la Fed prête des dollars aux autres banques centrales : les « swap lines » [4][5].",
        "Le nom viendrait de l'adresse télex d'une banque soviétique de Paris, « Eurobank » [6]. Le marché a ensuite connu ses crises : faillite de la banque Herstatt en 1974 [7], gel des avoirs iraniens en 1979, y compris dans les agences américaines à l'étranger [8], et scandale du Libor, le taux qui servait de référence à ce marché, abandonné le 30 juin 2023 [9]."
      ],
      sections: [
        {
          title: "Un dollar… qui n'est pas aux États-Unis",
          paragraphs: [
            "Quand une entreprise française dépose des dollars dans une banque à Paris, ou qu'une banque de Londres prête des dollars à une entreprise brésilienne, on parle d'==eurodollars== : des dollars déposés ou prêtés ==en dehors des États-Unis== [2].",
            "Le préfixe « euro » vient de ce que les premiers se trouvaient en Europe, surtout à Londres. Il est resté, même pour des dollars à Tokyo ou à Singapour, et n'a aucun lien avec la monnaie européenne créée bien plus tard [2].",
            "Ces dollars ne sont pas des billets cachés dans un coffre : ce sont des ==dettes en dollars inscrites au bilan de banques étrangères==. La banque à Londres doit des dollars à son client, et elle prête ces dollars à d'autres."
          ],
          example: {
            title: "Exemple concret",
            text: "Une compagnie aérienne indonésienne achète des avions payés en dollars. Elle emprunte ces dollars à une banque de Singapour, qui les a elle-même empruntés à un fonds ou à une autre banque. Aucun de ces dollars ne passe par une banque américaine : c'est un circuit d'eurodollars."
          }
        },
        {
          title: "Né de la guerre froide",
          paragraphs: [
            "Au milieu des années 1950, l'Union soviétique a besoin de dollars pour commercer, mais ses banques craignent que le gouvernement américain saisisse leurs avoirs déposés aux États-Unis. Elles les placent donc dans des banques à Londres et à Paris [1].",
            "Les banques de Londres découvrent alors qu'elles peuvent accepter et prêter des dollars hors de portée des règles américaines. Le marché est lancé, avec la City comme centre [1][2]."
          ]
        },
        {
          title: "Pourquoi il a autant grossi",
          paragraphs: [
            "Aux États-Unis, la ==réglementation Q== plafonnait les taux d'intérêt que les banques pouvaient payer sur les dépôts, et les banques devaient garder des réserves obligatoires. À Londres, rien de tout ça : les banques pouvaient mieux rémunérer les dépôts en dollars et prêter moins cher [1][2].",
            "Les banques américaines elles-mêmes s'y sont mises : en 1969, la Fed les autorise à passer par des « coquilles » aux Bahamas (Nassau) pour participer au marché sans ouvrir d'agence à Londres [1].",
            "La concurrence de ce marché libre a fini par changer la banque américaine elle-même, jusqu'à la fin des plafonds de taux sur les dépôts [1]. Avec le choc pétrolier, les dollars des pays producteurs (les « pétrodollars ») viennent eux aussi grossir ce circuit."
          ]
        },
        {
          title: "Aujourd'hui : un géant que personne ne contrôle vraiment",
          paragraphs: [
            "La Banque des règlements internationaux (BRI), la « banque des banques centrales », mesure ce marché par les dettes en dollars des banques situées hors des États-Unis [3].",
            "Fin 2019, les banques dont le siège n'est pas aux États-Unis devaient environ ==13 000 milliards de dollars==, presque autant qu'avant la crise de 2008, et l'essentiel était enregistré hors du territoire américain [3].",
            "C'est une des raisons de la puissance du dollar : le monde entier emprunte, commerce et s'endette en dollars, même sans passer par l'Amérique (voir le cours sur le dollar). Mais c'est aussi une fragilité : la Fed crée les dollars, pas les banques de Londres ou de Tokyo."
          ]
        },
        {
          title: "Quand les dollars viennent à manquer : les « swap lines »",
          paragraphs: [
            "Une banque européenne qui a prêté des dollars à long terme et s'est financée en dollars à court terme est en danger si plus personne ne veut lui prêter de dollars. Elle ne peut pas en créer : seule la Fed le peut.",
            "C'est ce qui arrive en 2008. Dès le 12 décembre 2007, la Fed ouvre des ==lignes d'échange (« swap lines »)== avec la Banque centrale européenne et la Banque nationale suisse : elle leur prête des dollars contre leur monnaie, et elles les reprêtent à leurs banques [4]. Le réseau monte jusqu'à 14 banques centrales, et en décembre 2008, plus de 580 milliards de dollars sont prêtés, soit plus de 25 % du bilan de la Fed [4].",
            "En 2020, avec le Covid, le même mécanisme est relancé : l'utilisation des swap lines atteint 449 milliards de dollars en mai [5]."
          ],
          plain: {
            title: "automne 2008",
            steps: [
              "Une banque européenne a prêté des dollars à des entreprises pour plusieurs années, en se finançant au jour le jour auprès d'autres banques.",
              "Lehman Brothers fait faillite : plus personne ne fait confiance à personne, les autres banques arrêtent de lui prêter des dollars.",
              "La BCE ne peut pas l'aider directement : elle crée des euros, pas des dollars.",
              "La Fed prête des dollars à la BCE contre des euros (une swap line), et la BCE les reprête à ses banques [4].",
              "Les banques tiennent le coup : la Fed a servi de pompier pour tout le système en dollars, pas seulement pour l'Amérique."
            ]
          },
          example: {
            title: "Ce que ça montre",
            text: "La Fed n'est pas seulement la banque centrale des États-Unis : en crise, elle devient le prêteur en dernier ressort de tout le système en dollars. Les pays qui ont une swap line avec elle sont protégés ; les autres doivent puiser dans leurs réserves ou se tourner vers le FMI."
          }
        },
        {
          title: "Utilité et limites",
          paragraphs: [
            "==Utile== : le marché des eurodollars permet au commerce mondial de se financer dans la monnaie qu'il utilise, à des taux souvent plus bas, partout dans le monde.",
            "==Risqué== : il échappe en partie aux autorités, peut gonfler très vite, et repose en dernier ressort sur la bonne volonté de la Fed. Une crise de liquidité en dollars à Londres ou à Tokyo peut se transmettre à toute la planète.",
            "==Géopolitique== : l'accès aux dollars devient un levier. Être coupé du circuit du dollar, comme avec les sanctions, peut paralyser un pays (voir le cours sur les sanctions)."
          ]
        },
        {
          title: "Le nom : une adresse télex à Paris",
          paragraphs: [
            "D'où vient le mot « eurodollar » ? Selon le récit le plus répandu, d'une banque à capitaux soviétiques installée à Paris, la ==Banque commerciale pour l'Europe du Nord (BCEN)==. Son adresse télégraphique, l'équivalent d'une adresse e-mail de l'époque, était ==« EUROBANK »== [6].",
            "Les dollars que les pays communistes y déposaient, pour les mettre à l'abri d'une saisie américaine, étaient appelés « dollars de l'Eurobank », puis simplement « eurodollars » [6]. La BCEN les replaçait auprès d'autres banques européennes, qui les reprêtaient à leur tour : le marché était né [6].",
            "Les historiens ne s'accordent pas tout à fait sur le premier épisode : certains citent la Chine communiste, qui aurait transféré ses dollars à Paris dès la guerre de Corée, avant que les États-Unis ne gèlent ses avoirs ; d'autres, les transferts soviétiques de la fin des années 1950 vers la Moscow Narodny Bank de Londres et la BCEN [6]. ==Ironie de l'histoire : le marché qui a fait la puissance mondiale du dollar a été lancé par des pays qui se méfiaient des États-Unis.=="
          ]
        },
        {
          title: "26 juin 1974 : la faillite qui a donné son nom à un risque",
          paragraphs: [
            "Le marché des eurodollars repose sur des échanges permanents entre monnaies : on vend des marks contre des dollars, des livres contre des francs. Ces échanges ne se règlent pas toujours au même instant, car les marchés ne sont pas ouverts aux mêmes heures.",
            "Le ==26 juin 1974==, à 15 h 30 heure de Francfort, les autorités allemandes ferment la petite ==banque Herstatt==, ruinée par des paris sur les monnaies [7]. Ce jour-là, des banques lui avaient déjà versé des marks à Francfort, en attendant des dollars qui devaient arriver à New York quelques heures plus tard. Ils n'arrivent jamais : sa banque correspondante à New York bloque tous ses paiements en dollars [7].",
            "Le monde financier découvre le ==« risque Herstatt »== (ou risque de règlement) : avoir payé sa part d'un échange sans recevoir celle de l'autre [7]. La même année, les banquiers centraux des grands pays créent à Bâle un comité chargé de coordonner la surveillance des banques internationales : le futur ==Comité de Bâle==, qui écrira les grandes règles mondiales sur les fonds propres des banques (« Bâle I, II, III ») [7].",
            "Il faudra attendre ==2002== et la création de CLS, une banque qui règle les deux côtés d'un échange au même instant, pour réduire fortement ce risque [7]. Même en 2025, une partie des échanges de devises reste exposée [7]."
          ],
          plain: {
            title: "le risque Herstatt, pas à pas",
            steps: [
              "Le matin, une banque allemande verse des marks à Herstatt à Francfort, en échange de dollars promis pour l'après-midi à New York.",
              "À 15 h 30, Francfort ferme Herstatt [7]. New York vient à peine d'ouvrir.",
              "Les dollars promis ne partent jamais : la banque allemande a payé, sans rien recevoir [7].",
              "Leçon retenue : régler les deux côtés d'un échange en même temps, ce que fait CLS depuis 2002 [7]."
            ]
          }
        },
        {
          title: "14 novembre 1979 : même à Londres, le dollar reste américain",
          paragraphs: [
            "Le 4 novembre 1979, des étudiants iraniens prennent en otage le personnel de l'ambassade américaine à Téhéran. Le 14 novembre, l'Iran annonce qu'il va retirer ses dépôts des banques américaines [8]. Le jour même, le président ==Jimmy Carter== signe un décret qui ==gèle les avoirs de l'État iranien== aux États-Unis [8].",
            "La surprise vient de la portée du gel : il s'applique aussi aux dépôts en dollars détenus par ==les agences de banques américaines à l'étranger==, notamment à Londres [8]. Plus de 5,6 milliards de dollars de dépôts et de titres placés dans ces agences sont bloqués, sur un total gelé qui dépassera 12 milliards [8].",
            "Pour le marché des eurodollars, c'est un choc : on croyait que des dollars placés à Londres échappaient à Washington. ==Le gel montre que l'argent en dollars reste à portée de la loi américaine dès qu'une banque américaine est dans la boucle.== C'est le début de l'usage moderne du dollar comme arme de sanction (voir le cours sur les sanctions). Les avoirs ne seront débloqués qu'avec les accords d'Alger de janvier 1981, qui libèrent les otages."
          ]
        },
        {
          title: "Le Libor : le taux le plus important du monde… et le plus truqué",
          paragraphs: [
            "Pour prêter des eurodollars entre elles, les banques de Londres avaient besoin d'un taux de référence. C'est le ==Libor== (London Interbank Offered Rate) : chaque jour, un panel de grandes banques indiquait à quel taux elles pensaient pouvoir emprunter, et l'on en faisait la moyenne. Pendant des décennies, des centaines de milliers de milliards de dollars de crédits, de prêts immobiliers et de produits financiers dans le monde ont été indexés sur ce taux.",
            "En ==juin 2012==, le scandale éclate : la banque britannique ==Barclays== accepte de payer environ ==290 millions de livres== d'amendes aux autorités britanniques et américaines [9]. Les enquêtes montrent que, d'août 2007 au début de 2009, ses dirigeants ont demandé de déclarer des taux artificiellement bas, pour paraître en meilleure santé pendant la crise [9]. D'autres banques sont sanctionnées ensuite, et des traders condamnés.",
            "Le problème de fond : le Libor reposait sur des ==déclarations==, pas sur des transactions réelles. Les autorités décident de le remplacer par des taux calculés à partir d'opérations vraies : le ==SOFR== aux États-Unis, le SONIA au Royaume-Uni [9]. Le ==30 juin 2023==, les derniers taux Libor en dollars cessent d'être publiés : après plus de cinquante ans, le taux du marché des eurodollars disparaît [9]."
          ]
        },
        {
          title: "Une frise pour retenir",
          paragraphs: [
            "==Années 1950== : les pays communistes placent leurs dollars à Paris et à Londres ; le mot « eurodollar » apparaît [1][6]. ==1969== : les banques américaines participent via les Bahamas [1]. ==1973-1974== : les pétrodollars gonflent le marché ; faillite Herstatt et naissance du Comité de Bâle [7].",
            "==1979== : le gel des avoirs iraniens montre que les dollars de Londres restent à portée de Washington [8]. ==2007-2008== : pénurie de dollars, la Fed ouvre ses swap lines [4]. ==2012== : scandale du Libor [9]. ==2019== : environ 13 000 milliards de dollars de dettes en dollars des banques non américaines [3]. ==2020== : swap lines relancées avec le Covid [5]. ==2023== : fin du Libor [9].",
            "Le fil rouge : ==un marché né pour échapper aux États-Unis, qui a fini par renforcer la puissance du dollar et rendre le monde entier dépendant de la Fed en cas de crise.=="
          ]
        }
      ],
      forMe: "Si ta banque, ton entreprise ou ton pays a besoin de dollars, il dépend de ce marché mondial, et donc, en cas de crise, des décisions de la Fed. C'est pour ça qu'une crise bancaire américaine peut faire trembler les marchés européens ou asiatiques.",
      figures: [
        { value: "≈ 13 000 Md$", label: "les dettes en dollars des banques non américaines fin 2019", src: 3 },
        { value: "+ de 580 Md$", label: "les dollars prêtés par la Fed aux autres banques centrales en décembre 2008", src: 4 },
        { value: "14", label: "banques centrales reliées à la Fed par des swap lines en 2008", src: 4 },
        { value: "449 Md$", label: "le pic d'utilisation des swap lines en mai 2020", src: 5 },
        { value: "26 juin 1974", label: "faillite de la banque Herstatt, qui donne son nom au risque de règlement", src: 7 },
        { value: "30 juin 2023", label: "fin de la publication du Libor en dollars, le taux du marché des eurodollars", src: 9 }
      ],
      terms: ["monnaie-reserve", "banque-centrale", "taux-de-change", "politique-monetaire", "sanctions"],
      quiz: [
        {
          q: "Qu'est-ce qu'un eurodollar ?",
          options: ["Un euro converti en dollars", "Un dollar déposé dans une banque hors des États-Unis", "Une monnaie commune européenne et américaine", "Un billet de dollar imprimé en Europe"],
          answer: 1,
          explain: "C'est un dollar déposé ou prêté hors des États-Unis ; le nom vient de Londres, où le marché est né, pas de l'euro."
        },
        {
          q: "Pourquoi les banques soviétiques ont-elles placé leurs dollars à Londres dans les années 1950 ?",
          options: ["Pour payer moins d'impôts", "Par peur que leurs dollars soient saisis aux États-Unis", "Parce que l'euro existait déjà", "Pour acheter de l'or"],
          answer: 1,
          explain: "En pleine guerre froide, elles craignaient une saisie par le gouvernement américain : c'est l'origine du marché."
        },
        {
          q: "Quelle règle américaine a fait grossir le marché des eurodollars ?",
          options: ["La réglementation Q, qui plafonnait les taux des dépôts", "Le Pacte de stabilité", "La loi de Say", "Les accords de Bretton Woods"],
          answer: 0,
          explain: "Hors des États-Unis, pas de plafond de taux ni de réserves obligatoires : les banques de Londres pouvaient mieux rémunérer les dépôts en dollars."
        },
        {
          q: "À quoi servent les « swap lines » de la Fed ?",
          options: ["À prêter des dollars aux autres banques centrales en cas de crise", "À échanger de l'or", "À fixer le prix du pétrole", "À imprimer des euros"],
          answer: 0,
          explain: "Seule la Fed peut créer des dollars : en 2008 et en 2020, elle en a prêté aux autres banques centrales pour qu'elles dépannent leurs banques."
        },
        { q: "D'où viendrait le mot « eurodollar » ?", options: ["De la monnaie européenne", "De l'adresse télex « EUROBANK » d'une banque soviétique à Paris", "D'un traité européen", "D'une banque américaine de Londres"], answer: 1, explain: "Les dollars déposés à la BCEN étaient appelés « dollars de l'Eurobank »." },
        { q: "Qu'est-ce que le « risque Herstatt » ?", options: ["Le risque d'inflation", "Le risque d'avoir payé sa part d'un échange de devises sans recevoir celle de l'autre", "Le risque de guerre", "Le risque de hausse des taux"], answer: 1, explain: "Le 26 juin 1974, la banque Herstatt a fermé après avoir reçu des marks, sans livrer les dollars promis." },
        { q: "Pourquoi le Libor a-t-il été abandonné ?", options: ["Il était trop compliqué", "Il reposait sur des déclarations des banques, qui ont été truquées", "Il était en euros", "La Fed l'a interdit en 1980"], answer: 1, explain: "Remplacé par des taux calculés sur des transactions réelles (SOFR, SONIA) ; fin le 30 juin 2023." }
      ],
      sources: [
        { short: "Fed de Boston", name: "Federal Reserve Bank of Boston, « Competition & Opportunity », Regional Review, 2001", url: "https://www.bostonfed.org/publications/regional-review/2001/quarter-3/competition-opportunity.aspx" },
        { short: "Fed de Richmond", name: "Federal Reserve Bank of Richmond, « Instruments of the Money Market », chapitre 5 : « Eurodollars »", url: "https://www.richmondfed.org/-/media/richmondfedorg/publications/research/special_reports/instruments_of_the_money_market/pdf/chapter_05.pdf" },
        { short: "BRI", name: "Banque des règlements internationaux, BIS Bulletin n° 27, « Global banks' dollar funding needs and central bank swap lines », 16 juillet 2020", url: "https://www.bis.org/publ/bisbull27.pdf" },
        { short: "Fed de New York", name: "Federal Reserve Bank of New York, « The Federal Reserve's Dollar Liquidity Swap Lines » (2010)", url: "https://www.newyorkfed.org/newsevents/news/research/2010/rp100813.html" },
        { short: "BRI", name: "Banque des règlements internationaux, BIS Bulletin n° 34, « Central bank swap lines and cross-border bank flows », décembre 2020", url: "https://www.bis.org/publ/bisbull34.htm" },
        { short: "Wikipédia", name: "« Eurodollar », Wikipédia (origine du nom : adresse télex de la BCEN ; premiers dépôts chinois et soviétiques)", url: "https://en.wikipedia.org/wiki/Eurodollar" },
        { short: "BRI", name: "BRI, Rapport trimestriel, « Uncovering FX settlement risk: new measures from the 2025 BIS Triennial Survey » (rappel sur Herstatt, le Comité de Bâle et CLS), et Wikipédia, « Herstatt Bank »", url: "https://www.bis.org/publ/qtrpdf/r_qt2606c.htm" },
        { short: "Brookings", name: "Brookings, « How the Iran hostage crisis shaped the US approach to sanctions », et CIA, « Economic sanctions and the Iran experience » (salle de lecture)", url: "https://www.brookings.edu/articles/how-the-iran-hostage-crisis-shaped-the-us-approach-to-sanctions" },
        { short: "City AM", name: "City AM, « Libor: After more than 50 years, tainted benchmark is officially no more », juillet 2023, et Treasury & Risk, « Barclays settles Libor probes », juin 2012", url: "https://www.cityam.com/libor-after-more-than-50-years-tainted-benchmark-is-officially-no-more/" }
      ],
      visuals: [
        {
          kind: "chart",
          type: "bar",
          title: "Quand le monde manque de dollars",
          subtitle: "Dollars prêtés par la Fed aux autres banques centrales (swap lines), au plus haut de chaque crise",
          xLabel: "Crise",
          unit: "Milliards de dollars",
          suffix: " Md$",
          data: [["Déc. 2008", 580], ["Mai 2020", 449]],
          source: "Fed de New York (2010) ; BRI, BIS Bulletin n° 34 (2020)"
        }
      ]
    },
    {
      id: "ascenseur-social",
      emoji: "🛗",
      inspiredBy: "Raj Chetty",
      theme: "eco",
      title: "L'ascenseur social : ce que disent les données",
      hook: "Gagner plus que ses parents : c'était presque garanti pour un Américain né en 1940, c'est une chance sur deux pour ceux nés dans les années 1980. Pourquoi ? Et qu'est-ce qui aide vraiment un enfant à monter : la ville, le quartier, les amis, l'école, l'université ? Un long cours inspiré des travaux de l'économiste de Harvard Raj Chetty, avec un détour par la France.",
      minutes: 26,
      piste: "verte",
      tldr: [
        "Aux États-Unis, environ 90 % des enfants nés en 1940 ont fini par gagner plus que leurs parents ; pour ceux nés dans les années 1980, c'est à peu près 50 % [1][2].",
        "Les chances changent énormément d'une ville à l'autre : un enfant pauvre a 4,4 % de chances d'atteindre le cinquième le plus riche à Charlotte, 12,9 % à San José [7].",
        "Le quartier a un effet réel : chaque année d'enfance passée dans un meilleur environnement rapproche l'enfant des résultats de ce quartier d'environ 4 % [8]. Et aider les familles à chercher un logement fait passer de 14 % à 54 % la part de celles qui s'installent dans un quartier favorable [9].",
        "Les amis, l'université et l'exposition aux métiers comptent aussi : avoir des amis de milieux aisés est l'un des meilleurs prédicteurs de l'ascension sociale [5], et les enfants du top 1 % ont dix fois plus de chances de devenir inventeurs que ceux de la moitié la moins riche [6].",
        "En France, il faudrait plus de six générations à une famille modeste pour atteindre le revenu moyen, selon l'OCDE [13] ; un enfant de cadre supérieur a environ 4,5 fois plus de chances qu'un enfant d'ouvrier d'être parmi les 20 % les plus aisés [14]."
      ],
      sections: [
        {
          title: "Le rêve américain, mis en chiffre",
          paragraphs: [
            "Les économistes appellent ==mobilité absolue== la part des enfants qui, adultes, gagnent plus que leurs parents au même âge, une fois l'inflation retirée. C'est une façon simple et parlante de mesurer le « rêve américain » : chaque génération vit-elle mieux que la précédente ?",
            "En 2016, l'équipe de Raj Chetty (alors à Stanford, aujourd'hui à Harvard, où il dirige le laboratoire Opportunity Insights) la calcule pour toutes les générations depuis 1940. Pour cela, elle relie de façon anonyme les déclarations de revenus des enfants à celles de leurs parents, des dizaines de millions de foyers. Résultat : ==environ 90 % pour les enfants nés en 1940, environ 50 % pour ceux nés dans les années 1980== [1][2].",
            "Pourquoi une telle chute ? Deux explications se combinent. La croissance a ralenti depuis les années 1970. Et surtout, ses fruits sont allés de plus en plus vers le haut de l'échelle. Les auteurs font une expérience de pensée : si la croissance récente avait été partagée comme celle des années 1940-1950, ==plus de 70 % du recul serait effacé== ; à l'inverse, une croissance plus forte mais aussi inégale n'en effacerait qu'une petite partie [1].",
            "Ce diagnostic est discuté : en 2022, l'économiste Scott Winship retrouve la même baisse mais, selon ses calculs, une croissance plus rapide aurait bien plus relevé la mobilité qu'un partage plus égal ; il conteste donc qu'elle s'explique surtout par la hausse des inégalités [3]. C'est un bon exemple de débat d'économistes : ==tout le monde est d'accord sur le chiffre, pas sur sa cause==.",
            "Ce débat n'est pas que théorique. Si la cause principale est le ralentissement de la croissance, la priorité est de la relancer. Si c'est le partage, la priorité est de mieux répartir ses fruits : salaires, impôts, éducation. Selon la réponse, on ne propose pas les mêmes politiques."
          ],
          plain: {
            title: "deux familles, deux générations",
            steps: [
              "Un ouvrier né en 1940 grandit dans une Amérique en forte croissance, où les salaires de tout le monde progressent.",
              "Adulte, il gagne bien plus que son père : c'est le cas de 9 enfants sur 10 de sa génération [1].",
              "Son petit-fils, né en 1984, entre sur le marché du travail quand la croissance profite surtout aux plus hauts revenus.",
              "Il n'a plus qu'une chance sur deux de gagner plus que ses parents [1][2]."
            ]
          }
        },
        {
          title: "Deux façons de mesurer : monter, ou changer de place",
          paragraphs: [
            "La mobilité absolue a un défaut : elle dépend beaucoup de la croissance générale. Si toute l'économie s'enrichit, presque tout le monde gagne plus que ses parents, même si personne ne change de rang. Les économistes regardent donc aussi la ==mobilité relative== : un enfant né en bas de l'échelle finit-il plus haut que ses parents dans le classement des revenus de sa génération ?",
            "Pour la mesurer, on range les familles en cinq groupes de même taille, les ==quintiles== : les 20 % les plus pauvres, puis les 20 % suivants, et ainsi de suite jusqu'aux 20 % les plus riches. La question devient : ==quelle est la probabilité qu'un enfant né dans le quintile du bas atteigne le quintile du haut ?== S'il n'y avait aucun lien entre l'origine et la réussite, ce serait 20 %.",
            "Les deux mesures racontent des histoires différentes. Un pays peut avoir une forte mobilité absolue (tout le monde s'enrichit) et une faible mobilité relative (chacun reste à sa place), ou l'inverse. ==Le « rêve américain » mélange les deux== : vivre mieux que ses parents, et avoir sa chance de monter quel que soit son point de départ.",
            "Ces chiffres ne mesurent que des revenus. Ils ne disent rien de la santé, du bonheur ou du métier exercé. Mais le revenu a un grand avantage : il est enregistré pour presque tout le monde dans les données fiscales, ce qui permet de suivre des millions d'enfants, et pas seulement quelques milliers interrogés dans une enquête."
          ],
          example: {
            title: "Lire une probabilité de mobilité",
            text: "« 7,5 % des enfants du quintile du bas atteignent le quintile du haut » veut dire : sur 1 000 enfants nés parmi les 20 % les plus pauvres, 75 se retrouvent adultes parmi les 20 % les plus riches. Dans un monde où l'origine ne compterait pas du tout, ils seraient 200. Plus le chiffre se rapproche de 20 %, plus la société est « mobile »."
          }
        },
        {
          title: "Une carte des chances : Charlotte contre San José",
          paragraphs: [
            "En 2014, Chetty et ses collègues Nathaniel Hendren, Patrick Kline et Emmanuel Saez publient une carte de la mobilité aux États-Unis, zone par zone, à partir des données fiscales de plus de 40 millions d'enfants [7]. La surprise est la taille des écarts à l'intérieur d'un même pays.",
            "Un enfant né dans les 20 % les plus pauvres a ==4,4 % de chances d'atteindre les 20 % les plus riches s'il grandit à Charlotte, en Caroline du Nord, contre 12,9 % à San José, en Californie== [7] : presque trois fois plus. Même pays, même monnaie, mêmes lois fédérales, et pourtant des chances très différentes.",
            "Les chercheurs regardent ce que les zones à forte mobilité ont en commun. Cinq traits ressortent : ==moins de ségrégation entre quartiers riches et pauvres, moins d'inégalités de revenus, de meilleures écoles primaires, plus de liens sociaux (associations, vie collective) et des familles plus stables== [7].",
            "Les auteurs préviennent : ce sont des ==corrélations, pas des causes démontrées== [7]. Une ville peut avoir de bonnes écoles et une forte mobilité parce qu'elle attire des familles qui investissent beaucoup dans leurs enfants. Pour savoir si c'est le lieu lui-même qui agit, il faut une autre méthode : suivre des enfants qui déménagent."
          ]
        },
        {
          title: "Dis-moi où tu grandis…",
          paragraphs: [
            "Pour savoir si le quartier agit vraiment, les chercheurs ont repris une expérience grandeur nature des années 1990 : ==Moving to Opportunity==. Des familles de logements sociaux très pauvres ont été tirées au sort : certaines ont reçu un bon pour louer dans un quartier moins pauvre, d'autres non.",
            "Comme c'est le hasard qui décide, on peut comparer les deux groupes comme dans un essai de médicament. Pendant longtemps, les résultats ont déçu : les revenus des adultes n'avaient presque pas bougé. Mais en 2015, l'équipe de Chetty regarde les enfants devenus adultes : ==ceux partis avant 13 ans gagnent environ 31 % de plus== que ceux restés dans leur quartier d'origine [4]. Pour ceux partis adolescents, le gain disparaît.",
            "Une deuxième étude, sur des millions de familles qui déménagent pour toutes sortes de raisons, précise le mécanisme. Quand une famille s'installe dans une zone où les enfants réussissent mieux, ==les résultats de ses enfants se rapprochent de ceux des enfants du lieu d'environ 4 % par année d'enfance passée là-bas== [8]. Et dans l'autre sens, aller vers une zone moins favorable fait perdre environ 4 % par an [8].",
            "Pour séparer l'effet du lieu de celui de la famille, les chercheurs comparent des frères et sœurs : quand une famille déménage, le cadet passe plus d'années dans le nouveau quartier que l'aîné. Si le cadet réussit mieux, à famille égale, c'est le lieu qui agit [8]. Conclusion : ==ce n'est pas seulement l'adresse qui compte, c'est le temps passé dans un bon environnement pendant l'enfance==."
          ],
          plain: {
            title: "la loterie qui a changé des vies",
            steps: [
              "Années 1990 : des familles de logements sociaux très pauvres s'inscrivent à un programme fédéral.",
              "Un tirage au sort décide qui reçoit un bon pour louer dans un quartier moins pauvre.",
              "Les chercheurs suivent les enfants pendant vingt ans grâce aux données fiscales.",
              "Ceux qui ont déménagé avant 13 ans gagnent environ 31 % de plus une fois adultes [4] ; plus le déménagement est précoce, plus le gain est grand, environ 4 % par année d'enfance passée dans le meilleur quartier [8]."
            ]
          }
        },
        {
          title: "Aider les familles à déménager : l'expérience de Seattle",
          paragraphs: [
            "Si le quartier compte autant, pourquoi les familles modestes ne s'installent-elles pas d'elles-mêmes dans les quartiers favorables ? Aux États-Unis, beaucoup reçoivent déjà une aide au logement (le « Housing Choice Voucher ») utilisable presque partout. Pourtant, la plupart restent dans des quartiers pauvres.",
            "En 2018, Chetty et des chercheurs du MIT et de Harvard lancent avec les offices du logement de Seattle et du comté de King un essai tiré au sort : ==Creating Moves to Opportunity==. Les familles du groupe test reçoivent, en plus de leur aide habituelle, des informations sur les quartiers favorables, un accompagnement pour monter leur dossier de location, de l'aide pour chercher, un petit soutien financier (caution, frais), et des conseillers qui démarchent des propriétaires [9].",
            "Résultat de la première année : ==54 % des familles accompagnées s'installent dans un quartier favorable, contre environ 14 % dans le groupe sans accompagnement== [9]. Les familles n'étaient pas obligées de choisir ces quartiers et gardaient leur aide quoi qu'elles décident [9].",
            "Leçon de Chetty : la ségrégation à Seattle ne vient pas surtout de préférences profondes des familles pour certains quartiers, mais d'obstacles concrets : manque d'information, propriétaires réticents, frais d'entrée, démarches compliquées [9]. ==Un petit coup de pouce bien placé change beaucoup de choses.=="
          ],
          plain: {
            title: "pourquoi une aide au logement ne suffit pas",
            steps: [
              "Une mère seule reçoit un bon de logement : elle peut louer presque partout.",
              "Mais elle ne sait pas quels quartiers ont de bonnes écoles, les propriétaires des beaux quartiers ne la rappellent pas, et elle n'a pas de quoi payer la caution.",
              "Une conseillère lui montre les quartiers favorables, l'aide à monter son dossier, appelle des propriétaires et avance la caution [9].",
              "Avec cet accompagnement, plus d'une famille sur deux s'installe dans un quartier favorable, contre une sur sept sans lui [9]."
            ]
          }
        },
        {
          title: "Dis-moi qui sont tes amis…",
          paragraphs: [
            "En 2022, l'équipe de Chetty publie dans la revue Nature une étude géante, menée avec Meta : les amitiés de ==72 millions d'utilisateurs américains de Facebook== âgés de 25 à 44 ans, soit 21 milliards de liens d'amitié, rattachés à leur ville, leur lycée et leur université [5].",
            "Elle mesure la ==« connectivité économique »== : la part d'amis de milieux aisés chez les personnes de milieux modestes. Dans certaines villes, les personnes modestes ont presque autant d'amis aisés que la moyenne ; dans d'autres, presque aucun. Et cette mesure prédit l'ascension sociale d'un lieu mieux que la plupart des autres facteurs étudiés, bien plus que la densité des amitiés ou l'engagement associatif [5].",
            "Pourquoi les amis comptent-ils autant ? Ils donnent des informations (sur les études, les bourses, les métiers qui recrutent), des modèles (« si lui l'a fait, je peux le faire »), des normes (aller à l'université devient normal) et parfois des contacts pour un stage ou un emploi.",
            "L'étude montre aussi d'où vient le manque d'amitiés entre milieux. Une moitié vient de ==l'exposition== : les milieux ne se croisent pas, parce qu'ils vivent dans des quartiers et vont dans des écoles différents. L'autre moitié vient de ce que les chercheurs appellent le ==« biais d'amitié »== : même quand ils se croisent dans le même lycée, ils se lient peu, par exemple parce que l'établissement les sépare en filières ou en activités différentes [5].",
            "Conséquence pratique : pour favoriser ces liens, il ne suffit pas de mélanger les élèves dans un même bâtiment. Il faut aussi des lieux où ils font des choses ensemble : classes mélangées, clubs, sport, projets communs."
          ]
        },
        {
          title: "Les écarts qui résistent",
          paragraphs: [
            "En 2018, l'équipe de Chetty étudie la mobilité selon l'origine ethnique, à partir des données de 20 millions d'enfants et de leurs parents suivis de 1989 à 2015 [10]. Les Américains noirs et amérindiens ont une mobilité ascendante bien plus faible et une mobilité descendante bien plus forte que les Américains blancs [10].",
            "Le résultat le plus frappant concerne les garçons. ==À revenu des parents identique, les garçons noirs gagnent moins une fois adultes que les garçons blancs dans 99 % des quartiers américains== [10]. Et l'écart persiste même entre garçons qui ont grandi dans le même quartier [10].",
            "Les chercheurs écartent plusieurs explications. Les différences de capacités ne rendent pas compte de ces écarts, et les ressources du quartier, comme la qualité des écoles, ne suffisent pas à elles seules à les expliquer [10].",
            "Leur conclusion : réduire l'écart demandera des efforts qui traversent les frontières de quartier et de classe sociale, et qui visent spécifiquement la mobilité des hommes noirs [10]. Ce travail montre la force des données, mais aussi leurs limites : elles disent où et combien, mieux que pourquoi."
          ]
        },
        {
          title: "L'université : ascenseur pour tous, ou pour quelques-uns ?",
          paragraphs: [
            "L'université est souvent présentée comme le grand ascenseur social. En 2017, l'équipe de Chetty publie les ==« bulletins de mobilité » des universités américaines==, à partir de données fiscales sur plus de 30 millions d'étudiants inscrits entre 1999 et 2013 [12].",
            "Pour chaque établissement, ils calculent un ==taux de mobilité== : la part d'étudiants venus des 20 % les plus pauvres (l'accès), multipliée par la part de ces étudiants qui atteignent, adultes, les 20 % les plus riches (la réussite). En moyenne, ce taux est de 1,7 % [12].",
            "Les champions ne sont pas les plus prestigieuses. Les grandes universités privées ont un taux de réussite très élevé, mais accueillent très peu d'étudiants pauvres. Ce sont ==des universités publiques de rang moyen, comme celles de la ville de New York (CUNY) ou de l'État de Californie (Cal State), qui font monter le plus d'enfants du bas vers le haut== [12]. Les auteurs précisent que ce sont des constats, pas la preuve que l'université en est la cause [12].",
            "En 2023, une autre étude regarde les admissions dans les universités les plus sélectives, les « Ivy-Plus » (Ivy League, Stanford, MIT, Duke, Chicago). ==À notes égales au test d'entrée, les enfants du top 1 % ont plus de deux fois plus de chances d'y étudier que ceux de la classe moyenne== [11]. Près de la moitié de cet avantage vient de la préférence pour les enfants d'anciens élèves, les « legacy » ; une autre part, des sportifs recrutés et d'évaluations « personnelles » plus favorables [11].",
            "Pourquoi c'est important ? Parce que ces universités forment une grande partie des dirigeants : l'étude montre qu'y être admis augmente nettement les chances d'atteindre le top 1 % des revenus et d'aller dans une grande université de recherche ou une entreprise prestigieuse [11]. ==Qui entre dans ces écoles décide en partie qui dirigera le pays.=="
          ],
          example: {
            title: "Calculer un taux de mobilité",
            text: "Une université accueille 20 % d'étudiants venus des familles les plus pauvres (accès), et 30 % d'entre eux atteignent adultes les 20 % les plus riches (réussite). Son taux de mobilité vaut 20 % × 30 % = 6 % : sur 100 étudiants, 6 ont fait tout le trajet du bas vers le haut. Une université prestigieuse avec 4 % d'étudiants pauvres et 60 % de réussite n'a que 4 % × 60 % = 2,4 %."
          }
        },
        {
          title: "Les « Einstein perdus »",
          paragraphs: [
            "Autre étude célèbre de l'équipe, publiée en 2019 : qui devient inventeur aux États-Unis ? Les chercheurs croisent les dépôts de brevets avec les revenus des parents et les notes à l'école [6].",
            "Le constat est brutal : ==les enfants du top 1 % des revenus ont dix fois plus de chances de devenir inventeurs que ceux de la moitié la moins riche== [6]. Est-ce parce qu'ils sont plus doués ? Les notes en mathématiques au primaire prédisent bien qui invente. Mais même parmi les meilleurs élèves en mathématiques, les enfants riches inventent beaucoup plus que les enfants modestes [6].",
            "La clé, c'est ==l'exposition== : grandir dans une ville où il y a beaucoup d'inventeurs, ou avoir des parents inventeurs, augmente fortement les chances d'en devenir un, et souvent dans le même domaine précis que les adultes qu'on a côtoyés [6]. Selon les auteurs, seule une petite part des écarts (environ 6 %) s'explique par des différences de capacités à la naissance [6].",
            "Les auteurs en tirent une idée forte : ==beaucoup de talents se perdent simplement parce qu'ils n'ont jamais vu le métier de près==. Ce sont les « Einstein perdus ». Mentorats, stages, rencontres avec des chercheurs dans les écoles des quartiers modestes pourraient en récupérer une partie [6]."
          ]
        },
        {
          title: "Et en France ?",
          paragraphs: [
            "Les données de Chetty portent sur les États-Unis, mais la question se pose partout. En 2018, l'OCDE publie un rapport au titre parlant : ==« Un ascenseur social en panne ? »== [13]. En moyenne dans les pays riches, il faudrait environ cinq générations, soit 150 ans, pour qu'un enfant d'une famille pauvre atteigne le revenu moyen ; deux à trois dans les pays nordiques, neuf ou plus dans certains pays émergents [13].",
            "Pour la France, l'estimation est de ==plus de six générations== [13], plus que la moyenne des pays riches. Paradoxe souvent relevé : la France redistribue beaucoup par les impôts et les aides, ce qui réduit les écarts de niveau de vie, mais l'origine sociale pèse lourd sur les diplômes et les revenus avant redistribution.",
            "La même année, l'organisme public France Stratégie publie ==« Nés sous la même étoile ? »==, une étude sur le lien entre le métier des parents et le niveau de vie des enfants devenus adultes [14]. Un enfant de cadre supérieur a environ ==4,5 fois plus de chances qu'un enfant d'ouvrier d'appartenir aux 20 % les plus aisés== [14]. Un fils de médecin ou d'avocat a environ une chance sur deux d'y être, un fils de professeur 40 %, mais seulement 12 % des enfants d'auxiliaire de vie ou d'employé de ménage [14].",
            "Le diagnostic de France Stratégie : ==« l'inégalité des chances en France est d'abord une inégalité des chances éducatives »== [14]. Les enfants de cadres accèdent bien plus souvent aux études longues, et le diplôme pèse ensuite beaucoup sur le revenu. Le quartier, les réseaux et l'exposition aux métiers, mis en avant par Chetty, s'ajoutent à cette inégalité scolaire."
          ],
          plain: {
            title: "deux élèves de 15 ans, à Paris",
            steps: [
              "Inès, fille d'un cadre, a des parents qui connaissent les classes préparatoires, les écoles et leurs concours.",
              "Karim, fils d'un ouvrier, a d'aussi bonnes notes, mais personne autour de lui n'a fait d'études longues.",
              "Inès vise une grande école ; Karim choisit une filière courte, faute d'information et de modèle.",
              "Adultes, l'écart de diplôme devient un écart de revenu : c'est le mécanisme que décrit France Stratégie [14]. Un mentor ou un stage aurait pu changer la donne de Karim, comme le suggèrent les travaux sur l'exposition [6]."
            ]
          }
        },
        {
          title: "À quoi servent ces travaux ?",
          paragraphs: [
            "==Mesurer pour agir.== En cartographiant les chances de chaque quartier (leur « Atlas des opportunités » est public), ces travaux aident à cibler les aides au logement, les écoles et les programmes de mentorat là où ils changent le plus de choses. L'expérience de Seattle en est un exemple direct [9].",
            "==Investir tôt.== Puisque l'effet du quartier s'accumule année après année pendant l'enfance [8], agir tôt rapporte plus. Une étude d'Opportunity Insights sur 133 politiques publiques américaines montre que les investissements dans la santé et l'éducation des enfants modestes ont souvent le meilleur rendement, et que beaucoup ==se sont remboursés d'eux-mêmes== grâce aux impôts payés plus tard par ces enfants devenus adultes [15].",
            "==Changer la question.== Au lieu de demander seulement « combien redistribuer ? », on se demande aussi « où et comment donner sa chance à chaque enfant ? » : quartier, école, réseaux, modèles, accès aux universités.",
            "==Utiliser les données.== Ces études n'ont été possibles qu'en reliant, de façon anonyme, des données fiscales à grande échelle. C'est la méthode que Chetty enseigne à Harvard : utiliser les grandes bases de données pour répondre à des questions sociales concrètes, et tester les solutions par tirage au sort."
          ]
        },
        {
          title: "Les limites",
          paragraphs: [
            "==Une mesure parmi d'autres.== La mobilité absolue dépend beaucoup de la croissance générale ; la mobilité relative raconte une autre histoire. Et le revenu n'est pas tout : santé, satisfaction ou métier choisi n'apparaissent pas dans ces chiffres.",
            "==Corrélation ou cause ?== La carte des chances [7] et les amitiés entre milieux [5] sont liées à l'ascension sociale, mais ce n'est pas forcément le lieu ou l'amitié qui la provoque. C'est pourquoi les expériences par tirage au sort, comme Moving to Opportunity et Seattle, comptent tant [4][9].",
            "==Des causes discutées.== Le rôle des inégalités dans la baisse de la mobilité fait débat entre économistes [1][3].",
            "==Des données américaines.== Les mécanismes (lieu de vie, amis, exemples) valent sans doute ailleurs, mais leurs effets doivent être mesurés pays par pays. En France, les données reliant parents et enfants sont plus rares, ce qui rend les comparaisons fines plus difficiles.",
            "==Des solutions à grande échelle ?== Une expérience qui marche avec quelques centaines de familles ne marche pas forcément pour tout un pays : si toutes les familles modestes s'installaient dans les mêmes quartiers favorables, ces quartiers changeraient eux-mêmes."
          ]
        }
      ],
      forMe: "Ton parcours ne dépend pas que de tes notes : ton quartier, ton école, les gens que tu côtoies et les métiers que tu as pu voir de près comptent aussi. Pour un étudiant, c'est une raison de plus de multiplier les rencontres, les stages et les mentors, et, quand tu le pourras, d'ouvrir à ton tour la porte à des plus jeunes qui n'ont pas ces contacts.",
      figures: [
        { value: "≈ 90 % → 50 %", label: "Américains qui gagnent plus que leurs parents : nés en 1940, puis nés dans les années 1980", src: 1 },
        { value: "4,4 % / 12,9 %", label: "chances pour un enfant pauvre d'atteindre les 20 % les plus riches : Charlotte, puis San José", src: 7 },
        { value: "+31 %", label: "revenus adultes des enfants partis avant 13 ans vers un quartier moins pauvre", src: 4 },
        { value: "14 % → 54 %", label: "familles qui s'installent dans un quartier favorable, sans puis avec accompagnement (Seattle)", src: 9 },
        { value: "× 10", label: "chances de devenir inventeur pour un enfant du top 1 %, par rapport à la moitié la moins riche", src: 6 },
        { value: "6 générations", label: "le temps qu'il faudrait en France à une famille modeste pour atteindre le revenu moyen (OCDE)", src: 13 }
      ],
      terms: ["pib", "pouvoir-achat", "dette-publique"],
      quiz: [
        { q: "Quelle part des Américains nés dans les années 1980 gagnent plus que leurs parents ?", options: ["Environ 90 %", "Environ 50 %", "Environ 10 %", "Tous"], answer: 1, explain: "C'était environ 90 % pour les enfants nés en 1940 ; c'est tombé à environ 50 % pour ceux nés dans les années 1980." },
        { q: "Quelle est la différence entre mobilité absolue et mobilité relative ?", options: ["Aucune", "Absolue : gagner plus que ses parents ; relative : changer de rang dans l'échelle des revenus", "Absolue : en euros ; relative : en dollars", "Absolue : pour les riches ; relative : pour les pauvres"], answer: 1, explain: "Si tout le monde s'enrichit, la mobilité absolue est forte même si personne ne change de rang." },
        { q: "Dans un monde où l'origine ne compterait pas, quelle part des enfants du quintile du bas atteindrait le quintile du haut ?", options: ["0 %", "5 %", "20 %", "50 %"], answer: 2, explain: "Chaque quintile regroupe 20 % de la population : sans lien entre origine et réussite, chacun aurait 20 % de chances d'arriver en haut." },
        { q: "Un enfant pauvre a-t-il les mêmes chances de monter à Charlotte et à San José ?", options: ["Oui, c'est le même pays", "Non : 4,4 % à Charlotte contre 12,9 % à San José", "Non : il a plus de chances à Charlotte", "On ne sait pas le mesurer"], answer: 1, explain: "Près de trois fois plus de chances à San José, selon la carte de Chetty, Hendren, Kline et Saez (2014)." },
        { q: "Qu'a montré l'expérience Moving to Opportunity ?", options: ["Le quartier n'a aucun effet", "Les enfants qui déménagent jeunes vers un quartier moins pauvre gagnent plus adultes", "Déménager fait baisser les revenus", "Seuls les adultes en profitent"], answer: 1, explain: "Les enfants partis avant 13 ans gagnent environ 31 % de plus une fois adultes ; pour les adolescents, le gain disparaît." },
        { q: "Dans l'expérience de Seattle, qu'est-ce qui a fait passer de 14 % à 54 % la part des familles installées dans un quartier favorable ?", options: ["Une obligation de déménager", "Un accompagnement : information, aide au dossier, contacts avec les propriétaires, aide financière", "Une hausse des loyers", "La construction de nouveaux logements"], answer: 1, explain: "Les familles restaient libres de leur choix : ce sont les obstacles concrets qui les retenaient, pas leurs préférences." },
        { q: "Qu'est-ce que la « connectivité économique » ?", options: ["Le débit internet d'un quartier", "La part d'amis de milieux aisés chez les personnes de milieux modestes", "Le nombre de banques", "Le taux de chômage"], answer: 1, explain: "C'est l'un des meilleurs prédicteurs de l'ascension sociale, selon l'étude de 2022 sur 72 millions d'utilisateurs de Facebook." },
        { q: "Quelles universités américaines font monter le plus d'enfants du bas vers le haut ?", options: ["Les plus prestigieuses (Harvard, Stanford)", "Des universités publiques de rang moyen, comme CUNY ou Cal State", "Les universités en ligne", "Aucune"], answer: 1, explain: "Les plus prestigieuses ont une forte réussite mais accueillent très peu d'étudiants pauvres ; CUNY et Cal State combinent accès et réussite." },
        { q: "Qui sont les « Einstein perdus » ?", options: ["Des physiciens disparus", "Des enfants doués qui ne deviennent pas inventeurs faute d'exposition à l'innovation", "Des brevets perdus", "Des chercheurs partis à l'étranger"], answer: 1, explain: "Les enfants du top 1 % ont dix fois plus de chances d'inventer ; voir des inventeurs de près est une clé." },
        { q: "Selon France Stratégie, d'où vient d'abord l'inégalité des chances en France ?", options: ["Du climat", "De l'inégalité des chances éducatives", "Des impôts", "Du prix des logements seulement"], answer: 1, explain: "Les enfants de cadres font plus souvent des études longues, et le diplôme pèse ensuite sur le revenu." }
      ],
      sources: [
        { short: "Opportunity Insights", name: "Opportunity Insights, « The Fading American Dream: Trends in Absolute Income Mobility Since 1940 » (Chetty, Grusky, Hell, Hendren, Manduca, Narang)", url: "https://opportunityinsights.org/paper/the-fading-american-dream/" },
        { short: "Harvard Gazette", name: "Harvard Gazette, « Chetty and Sandel take on the American dream », octobre 2023", url: "https://news.harvard.edu/gazette/story/2023/10/chetty-and-sandel-take-on-the-american-dream" },
        { short: "Silicon Canals", name: "Silicon Canals, « The American dream can be put in a number and that number has halved » (présente la réanalyse de Scott Winship, 2022)", url: "https://siliconcanals.com/m-the-american-dream-can-be-put-in-a-number-and-that-number-has-halved-9-in-10-children-born-in-1940-grew-up-to-out-earn-their-parents-for-those-born-in-the-1980s-it-is-now-about-1-in-2-bar/" },
        { short: "FMI", name: "FMI, Finance & Développement, « Harvard Economist Raj Chetty on Social Mobility and Big Data », septembre 2018", url: "https://www.imf.org/en/publications/fandd/issues/2018/09/harvard-economist-raj-chetty-profile-people/index.md" },
        { short: "NBER", name: "NBER, Chetty et al., « Social Capital I: Measurement and Associations with Economic Mobility », document de travail 30313 (publié dans Nature, 2022)", url: "https://www.nber.org/system/files/working_papers/w30313/w30313.pdf" },
        { short: "NBER", name: "NBER, Bell, Chetty, Jaravel, Petkova et Van Reenen, « Who Becomes an Inventor in America? The Importance of Exposure to Innovation », document de travail 24062 (Quarterly Journal of Economics, 2019)", url: "https://www.nber.org/papers/w24062" },
        { short: "QJE", name: "Chetty, Hendren, Kline et Saez, « Where is the Land of Opportunity? The Geography of Intergenerational Mobility in the United States », Quarterly Journal of Economics, novembre 2014", url: "https://eml.berkeley.edu/~saez/chetty-friedman-kline-saezQJE14mobility.pdf" },
        { short: "NBER", name: "NBER, Chetty et Hendren, « The Impacts of Neighborhoods on Intergenerational Mobility I: Childhood Exposure Effects », document de travail 23001 (Quarterly Journal of Economics, 2018)", url: "https://www.nber.org/papers/w23001" },
        { short: "J-PAL", name: "J-PAL, « Creating Moves to Opportunity in Seattle-King County » (Bergman, Chetty, DeLuca, Hendren, Katz, Palmer)", url: "https://www.povertyactionlab.org/node/2415" },
        { short: "NBER", name: "NBER, Chetty, Hendren, Jones et Porter, « Race and Economic Opportunity in the United States: An Intergenerational Perspective », document de travail 24441, 2018", url: "https://www.nber.org/papers/w24441.pdf" },
        { short: "Opportunity Insights", name: "Opportunity Insights, Chetty, Deming et Friedman, « Diversifying Society's Leaders? The Causal Effects of Admission to Highly Selective Private Colleges », juillet 2023", url: "https://opportunityinsights.org/paper/collegeadmissions/" },
        { short: "Stanford", name: "Stanford Center on Poverty and Inequality, « Mobility Report Cards: The Role of Colleges in Intergenerational Mobility » (Chetty, Friedman, Saez, Turner, Yagan), 2017", url: "https://inequality.stanford.edu/node/9499" },
        { short: "OCDE", name: "OCDE, « A Broken Social Elevator? How to Promote Social Mobility », juin 2018, et VoxEU, « France, inequality, and the social elevator »", url: "https://cepr.org/voxeu/columns/france-inequality-and-social-elevator" },
        { short: "France Stratégie", name: "France Stratégie, « Nés sous la même étoile ? Origine sociale et niveau de vie », note d'analyse n° 68, juillet 2018", url: "https://solidarites.gouv.fr/sites/solidarite/files/2023-03/nes_sous_la_meme_etoile_france_strategie.pdf" },
        { short: "Harvard Gazette", name: "Harvard Gazette, « Opportunity Insights study finds investing in disadvantaged children brings greater long-term results », juillet 2019 (Hendren et Sprung-Keyser)", url: "https://news.harvard.edu/gazette/story/2019/07/opportunity-insights-study-finds-investing-in-disadvantaged-children-brings-greater-long-term-results" }
      ],
      visuals: [
        { kind: "chart", type: "bar", title: "Le rêve américain s'est rétréci", subtitle: "Part des enfants qui gagnent, adultes, plus que leurs parents, selon leur génération (États-Unis)", xLabel: "Nés en", unit: "Part (%)", suffix: " %", data: [["1940", 90], ["Années 1980", 50]], source: "Opportunity Insights (Chetty et al.)" },
        { kind: "chart", type: "bar", title: "Même pays, chances différentes", subtitle: "Probabilité qu'un enfant né dans les 20 % les plus pauvres atteigne les 20 % les plus riches", xLabel: "Ville", unit: "Probabilité (%)", suffix: " %", data: [["Charlotte", 4.4], ["San José", 12.9]], source: "Chetty, Hendren, Kline et Saez (2014)" },
        { kind: "chart", type: "bar", title: "Le coup de pouce de Seattle", subtitle: "Part des familles aidées au logement qui s'installent dans un quartier favorable", xLabel: "Groupe", unit: "Part (%)", suffix: " %", data: [["Aide seule", 14], ["Aide + accompagnement", 54]], source: "J-PAL, Creating Moves to Opportunity" }
      ]
    },
    {
      id: "morale-marches",
      emoji: "⚖️",
      theme: "eco",
      inspiredBy: "Michael J. Sandel",
      title: "Ce que l'argent ne devrait pas acheter : la morale des marchés",
      hook: "Une amende pour les parents en retard qui les fait… arriver plus tard. Une compensation qui fait refuser un projet qu'on acceptait gratuitement. Un droit de polluer qu'on achète en Bourse. Un rein qu'on peut vendre légalement en Iran. Jusqu'où le marché doit-il aller ? Un long cours pour penser, avec des faits et des expériences réelles.",
      minutes: 23,
      piste: "bleue",
      tldr: [
        "Les économistes jugent un marché d'abord à son efficacité ; le philosophe de Harvard Michael Sandel pose deux autres questions : est-ce juste (équité), et l'argent change-t-il la nature de ce qu'on échange (corruption) ?",
        "Des expériences réelles montrent qu'un prix peut chasser la motivation morale : dans des crèches israéliennes, une amende a fait augmenter les retards [1] ; en Suisse, offrir une compensation a fait chuter l'acceptation d'un site de déchets nucléaires d'environ la moitié à environ un quart des habitants [10][11].",
        "Mais un prix peut aussi être accepté et efficace : le marché européen du carbone a accompagné une baisse d'environ 50 % des émissions des secteurs couverts depuis 2005 [13], et le péage urbain de Stockholm, d'abord impopulaire, a été adopté par référendum après un essai [14].",
        "Payer des élèves, payer le sang, vendre un rein : les incitations marchent… parfois, et pas toujours comme prévu [5][9][6]. Certains marchés sont aussi rejetés parce qu'ils choquent, ce que l'économiste Alvin Roth appelle la « répugnance » [12]."
      ],
      sections: [
        {
          title: "La question qu'on ne pose plus",
          paragraphs: [
            "Depuis les années 1980, le marché s'est étendu à des domaines qui lui échappaient : santé, éducation, environnement, sécurité, vie privée. Pour un économiste, un échange librement consenti profite aux deux parties ; si l'on peut créer un marché là où il n'y en avait pas, on améliore souvent l'efficacité, c'est-à-dire qu'on obtient plus avec les mêmes ressources.",
            "Le philosophe de Harvard Michael Sandel, connu pour son cours « Justice » suivi par des milliers d'étudiants, résume son inquiétude par une formule : nous sommes passés ==d'une économie de marché à une société de marché==. Une économie de marché est un outil pour produire des biens. Une société de marché est un mode de vie où presque tout est à vendre.",
            "Il pose deux objections. ==L'équité== : un échange est-il vraiment libre quand l'un des deux est dans le besoin ? ==La corruption==, au sens de « dégradation » : mettre un prix sur certaines choses change ce qu'elles sont ; un prix Nobel acheté ne vaut plus un prix Nobel, une amitié achetée n'est plus une amitié.",
            "Ce cours ne tranche pas : il te donne des cas réels, avec leurs chiffres, pour que tu te fasses ton avis. Tu verras que l'argent a parfois exactement l'effet prévu, parfois l'effet inverse, et que la frontière entre ce qui « se vend » et ce qui « ne se vend pas » change selon les pays et les époques."
          ]
        },
        {
          title: "Tout s'achète ? Quelques prix réels",
          paragraphs: [
            "Le livre de Sandel « Ce que l'argent ne saurait acheter » (2012) s'ouvre sur une liste de prix bien réels. En Californie, ==un détenu peut payer environ 82 dollars la nuit pour une cellule plus propre et plus calme== [8]. Dans des écoles de Dallas, on a payé ==2 dollars par livre lu== à de jeunes élèves pour les encourager à lire [8]. Et à Washington, on peut payer quelqu'un pour faire la queue à sa place devant une audition au Congrès [8].",
            "Pour l'économiste, rien de choquant : chacun obtient ce qu'il veut, le détenu un meilleur sommeil, la prison une recette, le lobbyiste une place, le « faiseur de queue » un revenu. Les deux parties y gagnent, personne n'est forcé.",
            "Pour Sandel, chaque exemple soulève l'une de ses deux questions. La cellule payante : est-il juste que le confort en prison dépende de l'argent du détenu ? Les 2 dollars par livre : l'enfant apprend-il à aimer lire, ou à lire pour l'argent ? La file d'attente : une audition publique doit-elle être plus accessible aux lobbyistes qui paient qu'aux citoyens qui attendent ?",
            "==Ces exemples ne sont pas des abus isolés==, dit Sandel : ils montrent une tendance. Plus l'argent compte dans l'accès aux biens de la vie (santé, éducation, sécurité, influence politique), plus les inégalités de revenus pèsent lourd dans la vie de chacun."
          ]
        },
        {
          title: "Les deux objections, de près",
          paragraphs: [
            "==L'équité, ou la contrainte.== Un échange n'est vraiment libre que si chacun peut dire non sans perdre beaucoup. Quand quelqu'un vend un rein pour rembourser une dette, ou accepte un travail dangereux parce qu'il n'a rien d'autre, on peut se demander s'il choisit vraiment. Cette objection ne vise pas le marché en lui-même : elle vise les inégalités qui le faussent. Dans une société plus égale, elle perdrait de sa force.",
            "==La corruption, ou la dégradation.== Cette objection est plus profonde : même entre deux personnes aussi riches l'une que l'autre, mettre un prix peut changer le sens de la chose. Le sang donné devient du sang vendu, le service civique devient un emploi, la lecture devient un travail payé. Ici, ce n'est pas l'inégalité qui pose problème, c'est l'argent lui-même.",
            "Les économistes répondent souvent que l'argent ne change pas les choses : un livre lu reste un livre lu, quelle que soit la raison. Mais une branche de l'économie, l'économie comportementale, a montré qu'ils se trompent parfois. Elle parle ==d'effet d'éviction de la motivation== : une récompense en argent peut chasser une motivation plus profonde (le devoir, la fierté, l'envie d'aider), et au total, les gens en font moins.",
            "Les sections qui suivent présentent les expériences les plus connues sur ce sujet. Retiens la grille : pour chaque cas, demande-toi ==si le prix marche, et ce qu'il change==."
          ]
        },
        {
          title: "L'amende qui a fait venir les parents… plus tard",
          paragraphs: [
            "Les économistes Uri Gneezy et Aldo Rustichini mènent une expérience dans des crèches en Israël. Pendant quatre semaines, ils comptent simplement les retards des parents. Puis, dans 6 crèches sur 10, ils introduisent une amende pour les parents qui arrivent plus de 10 minutes en retard ; les 4 autres servent de comparaison [1].",
            "Résultat inverse de celui attendu : ==les retards augmentent== dans les crèches avec amende, puis se stabilisent à un niveau plus élevé qu'avant. Et quand l'amende est supprimée, à la 17e semaine, les retards restent aussi hauts [1]. Dans les crèches sans amende, rien ne bouge.",
            "Leur explication tient dans le titre de leur article : ==« une amende est un prix »==. Avant, arriver en retard, c'était manquer de respect aux éducatrices qui attendent. Avec l'amende, c'est un service qu'on paie : la gêne morale a disparu. Et elle n'est pas revenue quand l'amende a été retirée [1].",
            "Leçon pour toute politique publique : ==une norme sociale, une fois remplacée par un prix, ne revient pas forcément quand on retire le prix==. Les auteurs notent aussi que l'amende était faible ; une amende beaucoup plus lourde aurait sans doute fait baisser les retards. Le problème n'est pas l'argent en général, c'est un petit prix qui remplace une obligation morale."
          ],
          plain: {
            title: "comment un prix tue une norme",
            steps: [
              "Avant : un parent en retard se sent coupable vis-à-vis de l'éducatrice qui l'attend. Il fait tout pour arriver à l'heure.",
              "La crèche crée une amende pour les retards de plus de 10 minutes [1].",
              "Le parent se dit : « Je paie, donc j'ai le droit. » Le retard devient un service acheté.",
              "Les retards augmentent. Même quand l'amende disparaît, la culpabilité ne revient pas : les retards restent élevés [1]."
            ]
          }
        },
        {
          title: "Quand l'argent fait fuir le civisme : les déchets nucléaires suisses",
          paragraphs: [
            "Au début des années 1990, la Suisse cherche où stocker ses déchets nucléaires faiblement et moyennement radioactifs. Les économistes Bruno Frey et Felix Oberholzer-Gee en profitent pour interroger leurs habitants [10][11].",
            "Première question : accepteriez-vous le site dans votre commune ? ==Environ la moitié des habitants interrogés répondent oui== (50,8 % selon l'enquête), malgré le risque perçu [11]. Beaucoup y voient un devoir civique : il faut bien stocker ces déchets quelque part.",
            "Deuxième question : et si le pays vous versait chaque année une compensation importante ? Logiquement, l'acceptation devrait monter, puisqu'on ajoute un avantage. ==Elle s'effondre à environ un quart== (24,6 %) [11]. Les auteurs l'expliquent par deux effets : l'argent est vu comme un pot-de-vin, et il remplace le sens du devoir par un calcul où le risque paraît alors trop mal payé [10].",
            "Cette expérience est souvent citée par Sandel : ==ajouter un prix ne s'additionne pas toujours à la motivation morale ; il peut la remplacer==. Elle ne veut pas dire qu'il ne faut jamais compenser les riverains d'une installation gênante. Elle dit que la façon de compenser compte : un chèque à chaque habitant n'a pas le même sens qu'un projet pour toute la commune."
          ],
          plain: {
            title: "pourquoi un chèque peut faire dire non",
            steps: [
              "On demande : « Accepteriez-vous ce site pour le bien du pays ? » Un habitant sur deux répond oui, par devoir [11].",
              "On ajoute : « On vous paiera chaque année. » La question change de nature.",
              "L'habitant se dit : « Si on me paie, c'est que c'est dangereux, et ce prix est-il suffisant ? » Le devoir s'efface, le calcul commence.",
              "Il n'y a plus qu'un habitant sur quatre pour dire oui [11] : la compensation a chassé le civisme [10]."
            ]
          }
        },
        {
          title: "Payer le sang ?",
          paragraphs: [
            "En 1970, le sociologue britannique Richard Titmuss compare dans « The Gift Relationship » le don du sang gratuit au Royaume-Uni et le sang payé aux États-Unis. Il défend une idée qui a d'abord fait sourire les économistes : ==payer le sang pourrait réduire le nombre de donneurs== et la qualité du sang, parce que l'argent chasserait l'esprit du don [9].",
            "Près de quarante ans plus tard, en 2008, les économistes suédois Carl Mellström et Magnus Johannesson testent cette idée à Göteborg. Des personnes intéressées par le don du sang sont réparties au hasard en trois groupes : pas de paiement, 50 couronnes (environ 7 dollars), ou le choix entre ces 50 couronnes et un don de la même somme à une association [9].",
            "Chez les hommes, le paiement ne change rien. Chez les femmes, ==la part de volontaires tombe d'environ 52 % à 30 % quand on les paie== [9]. Et quand elles peuvent reverser l'argent à une association, la part remonte au niveau du groupe sans paiement [9]. Les auteurs avancent une explication : donner son sang est aussi une façon de montrer qu'on est généreux, et le paiement brouille ce signal [9].",
            "Titmuss avait donc en partie raison, mais pas pour tout le monde. Aujourd'hui, la plupart des pays européens, dont la France, reposent sur le don de sang bénévole ; d'autres, comme les États-Unis, rémunèrent le don de plasma. ==Le même produit, deux philosophies.=="
          ]
        },
        {
          title: "Payer pour polluer ?",
          paragraphs: [
            "Depuis 2005, l'Union européenne oblige les centrales électriques, les usines et les compagnies aériennes à posséder un « quota » pour chaque tonne de CO₂ qu'elles émettent. Le nombre total de quotas est plafonné et baisse avec le temps ; les entreprises peuvent les acheter et les revendre [2].",
            "Le prix bouge comme sur un marché. Autour de 4 euros la tonne en février 2017, il dépasse pour la première fois ==100 euros en février 2023== [2], avant de redescendre sous 60 euros en 2024 [3]. Selon la Commission européenne, ==les émissions des secteurs couverts ont baissé d'environ 50 % depuis 2005==, surtout grâce à la production d'électricité [13].",
            "Pour les économistes, c'est l'outil le plus efficace : on fixe la quantité de pollution, et ce sont les entreprises qui réduisent le moins cher qui réduisent le plus. Pour Sandel, l'expression « droit de polluer » pose problème : ==payer pour polluer enlève à la pollution son caractère de faute==, comme l'amende de crèche enlevait au retard son caractère d'impolitesse. Il donne l'exemple de la différence entre une amende (une sanction) et un prix (un service) : un quota ressemble à un prix.",
            "La France a aussi une taxe carbone sur les carburants et le chauffage. Elle atteint 44,6 euros la tonne en 2018 ; la hausse prévue en 2019 est annulée après le mouvement des gilets jaunes, et elle reste figée depuis à ce niveau, loin des 100 euros visés pour 2030 [4]. ==Un prix efficace sur le papier peut être jugé injuste dans la rue==, surtout par ceux qui n'ont pas d'autre choix que la voiture."
          ],
          plain: {
            title: "comment marche un marché du carbone",
            steps: [
              "L'Europe fixe un plafond total d'émissions et distribue ou vend des quotas : 1 quota = 1 tonne de CO₂ [2].",
              "Une usine qui peut réduire ses émissions à bas prix le fait, et revend ses quotas en trop.",
              "Une usine pour qui c'est très cher achète des quotas plutôt que de réduire.",
              "Au total, les émissions respectent le plafond, au coût le plus bas possible. Le plafond baisse chaque année : le prix du quota monte, et polluer coûte de plus en plus cher [2]. Résultat : environ 50 % d'émissions en moins dans ces secteurs depuis 2005 [13]."
            ]
          }
        },
        {
          title: "Payer pour circuler : Londres et Stockholm",
          paragraphs: [
            "Le péage urbain est un autre « prix » mis sur un comportement : rouler en voiture dans le centre aux heures de pointe. En ==février 2003, Londres instaure un péage de 5 livres par jour== pour entrer dans le centre en semaine, de 7 h à 18 h [14]. Le trafic baisse nettement dès le lancement, et le soutien des Londoniens progresse dans les mois qui suivent [14].",
            "Stockholm choisit une méthode originale : ==un essai de sept mois, de janvier à juillet 2006, puis un référendum== en septembre 2006 [14]. Avant l'essai, le péage est très impopulaire. Après l'avoir vu fonctionner (moins de bouchons, des bus plus rapides), 53 % des votants l'approuvent, et il devient permanent en 2007 [14].",
            "Cet exemple montre l'autre face du débat : ==un prix peut être accepté quand on en voit les effets et quand l'argent sert à quelque chose de visible==, comme les transports en commun. Ici, le prix ne détruit pas une norme morale ; il remplace la file d'attente des bouchons, où tout le monde perd du temps, par un tarif.",
            "Sandel lui-même ne rejette pas tous les prix. Sa question est toujours : quelle valeur ce bien a-t-il, et le prix la respecte-t-il ? Rouler dans un centre-ville n'est pas un acte moral ; la circulation y est un bien rare qu'il faut partager, et un prix peut le faire de façon plus juste que l'encombrement."
          ]
        },
        {
          title: "Payer les élèves pour apprendre ?",
          paragraphs: [
            "En 2007-2009, l'économiste de Harvard Roland Fryer teste des primes en argent dans plus de 250 écoles de Chicago, Dallas, Washington et New York, avec des groupes tirés au sort [5]. À Dallas, on paie les élèves pour lire des livres ; ailleurs, pour leurs notes.",
            "Résultat : ==payer pour les résultats (les notes) ne marche pas==, tandis que payer pour les efforts (lire, venir en classe, bien se tenir) a des effets plus encourageants [5]. Explication de Fryer : les élèves veulent la prime, mais ne savent pas comment transformer leur envie en meilleures notes ; payer une action concrète qu'ils maîtrisent marche mieux [5].",
            "Sandel répond par une autre question : même si les primes marchaient, ==qu'apprend l'enfant ?== Qu'on lit pour gagner de l'argent, ou qu'on lit parce que c'est passionnant ? Si l'habitude de lire disparaît quand la prime s'arrête, comme les retards restaient hauts après l'amende de crèche, le gain est fragile.",
            "La leçon rejoint celle des crèches et des déchets suisses : ==un prix change les comportements, mais pas toujours dans le sens prévu, et parfois il change aussi les raisons pour lesquelles on agit==."
          ]
        },
        {
          title: "Peut-on vendre un rein ?",
          paragraphs: [
            "Presque partout, vendre un organe est interdit. L'Iran est une exception : depuis 1988, un programme encadré par l'État permet à un donneur vivant non apparenté de recevoir de l'argent pour un rein [6].",
            "Ses défenseurs affirment qu'il a fait disparaître la liste d'attente pour une greffe de rein à la fin des années 1990 ; cette affirmation est contestée par d'autres spécialistes iraniens, qui soulignent la pauvreté des donneurs et la façon dont on mesure la liste d'attente [6][7].",
            "C'est le cas parfait pour les deux objections de Sandel : ==le donneur est-il vraiment libre== s'il vend un rein parce qu'il est pauvre (équité) ? Et un don devenu vente garde-t-il le même sens (corruption) ? En face, l'argument économique : des milliers de malades attendent une greffe ailleurs, et certains meurent avant d'en recevoir une.",
            "L'économiste Alvin Roth, prix Nobel 2012, a trouvé une troisième voie : ==les échanges de reins sans argent==. Quand un proche veut donner un rein à un malade mais n'est pas compatible, on organise un échange avec une autre paire dans le même cas : chaque donneur donne au malade de l'autre. Roth a aidé à créer le programme d'échange de reins de Nouvelle-Angleterre, aux États-Unis [12]. Ces échanges ne suscitent pas le rejet que provoque le paiement des organes [12]."
          ],
          plain: {
            title: "un échange de reins, sans argent",
            steps: [
              "Paul veut donner un rein à sa femme Anne, mais ils ne sont pas compatibles.",
              "Dans une autre ville, Léa veut donner un rein à son frère Marc : pas compatibles non plus.",
              "Par chance, Paul est compatible avec Marc, et Léa avec Anne.",
              "On organise l'échange : Paul donne à Marc, Léa donne à Anne. Deux greffes, aucun paiement, et personne n'a vendu son corps : c'est le principe des échanges que Roth a aidé à organiser [12]."
            ]
          }
        },
        {
          title: "La « répugnance » : pourquoi certains marchés choquent",
          paragraphs: [
            "En 2007, Alvin Roth publie un article au titre parlant : ==« La répugnance, une contrainte pour les marchés »== [12]. Il part d'un exemple simple : en Californie, une loi interdit de servir de la viande de cheval au restaurant, alors que la Californie est un État très divers où beaucoup de cultures en mangent [12].",
            "Roth constate que certains échanges sont interdits non parce qu'ils font du tort à quelqu'un, mais parce que beaucoup de gens les trouvent répugnants. Et ce sentiment ==vise souvent l'argent, pas l'échange lui-même== : donner un rein est admiré, l'échanger contre un autre rein est accepté, le vendre est interdit presque partout [12].",
            "La répugnance change avec le temps et selon les pays. Prêter de l'argent contre intérêt a longtemps été condamné par l'Église ; l'assurance-vie a d'abord choqué, parce qu'elle mettait un prix sur la mort ; aujourd'hui, elles sont banales. À l'inverse, des pratiques jadis courantes sont devenues inacceptables.",
            "Pour Roth, l'économiste doit prendre la répugnance au sérieux comme une donnée, et chercher des solutions qui la respectent (comme les échanges de reins). Pour Sandel, ==la répugnance n'est pas qu'un sentiment à contourner : elle signale souvent une vraie valeur== qu'il faut discuter ouvertement."
          ]
        },
        {
          title: "Deux camps, deux questions",
          paragraphs: [
            "==Le camp de l'efficacité== demande : le marché produit-il le meilleur résultat au moindre coût ? Il rappelle que les interdits ont aussi des victimes (malades sans greffe, pollution non tarifée, bouchons) et qu'un prix bien conçu peut atteindre un objectif commun, comme la baisse des émissions européennes [13].",
            "==Le camp de Sandel== demande : quelles valeurs le prix fait-il disparaître, et qui est contraint d'accepter l'échange ? Il rappelle qu'une société où tout s'achète devient plus dure pour ceux qui ont peu, et que des expériences montrent que l'argent peut chasser le civisme [1][10][11].",
            "Les deux camps ne sont pas toujours opposés. Le péage de Stockholm [14] ou les échanges de reins [12] montrent qu'on peut parfois trouver un dispositif efficace et accepté. Et l'amende de crèche montre qu'un économiste attentif aux normes sociales aurait pu prévoir l'échec [1].",
            "Dans le débat public, ces deux camps se croisent sans cesse : taxe carbone, péages urbains, prix de l'eau, rémunération du don du sang ou du plasma, primes aux élèves, mères porteuses, droits d'entrée dans les universités. ==Savoir reconnaître la question posée (efficacité ou valeurs ?) aide à comprendre le désaccord==, et souvent à le rendre moins violent."
          ],
          example: {
            title: "À toi de juger",
            text: "Pour chaque cas, pose les trois questions : 1) Est-ce efficace ? 2) L'échange est-il vraiment libre, ou l'un des deux est-il contraint ? 3) Le prix change-t-il le sens de la chose ? Amende de crèche, compensation suisse, sang payé, quota de CO₂, péage urbain, prime scolaire, rein payé, échange de reins : tu verras que les réponses ne vont pas toujours dans le même sens."
          }
        }
      ],
      forMe: "Chaque fois qu'on propose de « mettre un prix » sur quelque chose (polluer, se garer, entrer en premier, réussir un examen, donner son sang), demande-toi s'il s'agit de rendre le système plus efficace, ou si ce prix change la façon dont les gens se comportent et jugent leurs actes. Et regarde comment l'argent est utilisé : un prix dont on voit l'utilité est bien mieux accepté.",
      figures: [
        { value: "6 crèches sur 10", label: "avec une amende pour les retards… qui ont augmenté", src: 1 },
        { value: "50,8 % → 24,6 %", label: "habitants suisses prêts à accueillir un site de déchets nucléaires, sans puis avec compensation", src: 11 },
        { value: "52 % → 30 %", label: "femmes volontaires pour donner leur sang, sans puis avec paiement (Suède)", src: 9 },
        { value: "≈ −50 %", label: "émissions des secteurs couverts par le marché européen du carbone depuis 2005", src: 13 },
        { value: "53 %", label: "des votants de Stockholm pour garder le péage urbain après l'essai de 2006", src: 14 },
        { value: "44,6 €", label: "la taxe carbone française par tonne, figée depuis 2018", src: 4 }
      ],
      terms: ["inflation", "pouvoir-achat"],
      quiz: [
        { q: "Qu'est-il arrivé aux retards dans les crèches où une amende a été créée ?", options: ["Ils ont disparu", "Ils ont augmenté", "Rien n'a changé", "Les crèches ont fermé"], answer: 1, explain: "L'amende a transformé le retard en service payant : les retards ont augmenté et sont restés hauts même après la suppression de l'amende." },
        { q: "Quelle différence Sandel fait-il entre « économie de marché » et « société de marché » ?", options: ["Aucune", "L'une est un outil pour produire, l'autre un mode de vie où presque tout est à vendre", "L'une est française, l'autre américaine", "L'une a une Bourse, l'autre non"], answer: 1, explain: "Sandel s'inquiète du passage de l'une à l'autre depuis les années 1980." },
        { q: "Quelles sont les deux objections de Sandel aux marchés ?", options: ["Le prix et la quantité", "L'équité et la corruption (le prix change le sens de la chose)", "L'inflation et le chômage", "L'offre et la demande"], answer: 1, explain: "Équité : un échange sous la contrainte n'est pas vraiment libre. Corruption : mettre un prix dégrade certaines choses." },
        { q: "En Suisse, qu'a provoqué l'offre d'une compensation aux habitants pour accueillir des déchets nucléaires ?", options: ["L'acceptation a doublé", "L'acceptation a chuté d'environ la moitié à environ un quart", "Rien", "Le projet a été voté à l'unanimité"], answer: 1, explain: "La compensation a été vue comme un pot-de-vin et a remplacé le sens du devoir par un calcul : c'est l'effet d'éviction." },
        { q: "Dans l'expérience suédoise sur le don du sang, qui a été découragé par le paiement ?", options: ["Les hommes", "Les femmes", "Tout le monde", "Personne"], answer: 1, explain: "Chez les femmes, la part de volontaires est tombée d'environ 52 % à 30 % ; chez les hommes, aucun effet." },
        { q: "Comment fonctionne le marché européen du carbone ?", options: ["Une taxe fixe sur l'essence", "Un plafond d'émissions et des quotas qu'on achète et revend", "Une interdiction de polluer", "Une subvention aux usines"], answer: 1, explain: "Un quota par tonne de CO₂, un plafond total qui baisse, et des entreprises qui échangent leurs quotas ; environ −50 % d'émissions depuis 2005 dans ces secteurs." },
        { q: "Comment Stockholm a-t-elle fait accepter son péage urbain ?", options: ["En l'imposant sans vote", "Par un essai de sept mois suivi d'un référendum", "En le rendant gratuit", "En interdisant les voitures"], answer: 1, explain: "Après avoir vu ses effets en 2006, 53 % des votants l'ont approuvé ; il est permanent depuis 2007." },
        { q: "Dans l'expérience de Fryer, qu'est-ce qui marche le moins ?", options: ["Payer pour lire des livres", "Payer pour venir en classe", "Payer pour les notes", "Ne rien payer"], answer: 2, explain: "Payer pour les résultats ne marche pas : les élèves ne savent pas comment transformer la prime en meilleures notes." },
        { q: "Quelle solution sans argent Alvin Roth a-t-il aidé à organiser pour les greffes ?", options: ["La vente de reins aux enchères", "Les échanges de reins entre paires donneur-malade incompatibles", "Les reins artificiels", "L'interdiction des greffes"], answer: 1, explain: "Chaque donneur donne au malade de l'autre paire : deux greffes, aucun paiement." },
        { q: "Que désigne la « répugnance » selon Alvin Roth ?", options: ["Un goût alimentaire", "Le rejet de certains échanges jugés choquants, même s'ils ne font de tort à personne", "Une maladie", "Une taxe"], answer: 1, explain: "Exemple : l'interdiction de servir de la viande de cheval au restaurant en Californie." }
      ],
      sources: [
        { short: "Gneezy et Rustichini", name: "Uri Gneezy et Aldo Rustichini, « A Fine is a Price », Journal of Legal Studies, 2000", url: "https://rady.ucsd.edu/_files/faculty-research/uri-gneezy/fine.pdf" },
        { short: "Grist", name: "Grist, « EU carbon price hits 100 euros », février 2023", url: "https://grist.org/beacon/eu-carbon-price-hits-100-euros/" },
        { short: "Expansión", name: "Expansión, « Valor de los mercados mundiales de carbono aumentó en 2023 », 12 février 2024", url: "https://expansion.mx/mercados/2024/02/12/valor-mercados-mundiales-carbono-aumento-2023-alcanza-record" },
        { short: "Connaissance des énergies", name: "Connaissance des énergies, « Quel est le montant de la taxe carbone en France ? »", url: "https://www.connaissancedesenergies.org/questions-et-reponses-energies/quel-est-le-montant-de-la-taxe-carbone-en-france" },
        { short: "Fryer (J-PAL)", name: "Roland G. Fryer, « Financial Incentives and Student Achievement: Evidence from Randomized Trials », Quarterly Journal of Economics, 2011 (via J-PAL)", url: "https://www.povertyactionlab.org/sites/default/files/publications/919_Financialincentives_and_student_Fryer_2011.pdf" },
        { short: "PubMed", name: "Ghods et Savaj, « Iranian model of paid and regulated living-unrelated kidney donation », Clinical Journal of the American Society of Nephrology, 2006", url: "https://pubmed.ncbi.nlm.nih.gov/17699338/" },
        { short: "Centre for Public Impact", name: "Centre for Public Impact, « Organ donations in Iran » (étude de cas)", url: "https://www.centreforpublicimpact.org/case-study/organ-donations-in-iran" },
        { short: "Aspen Institute", name: "Aspen Institute, présentation de Michael J. Sandel, « What Money Can't Buy: The Moral Limits of Markets » (2012)", url: "https://www.aspeninstitute.org/?p=4099" },
        { short: "Mellström et Johannesson", name: "Carl Mellström et Magnus Johannesson, « Crowding Out in Blood Donation: Was Titmuss Right? », Journal of the European Economic Association, 2008 (version document de travail)", url: "https://swopec.hhs.se/gunwpe/abs/gunwpe0180.htm" },
        { short: "JPE", name: "Bruno Frey, Felix Oberholzer-Gee et Reiner Eichenberger, « The Old Lady Visits Your Backyard: A Tale of Morals and Markets », Journal of Political Economy, 1996", url: "https://econpapers.repec.org/RePEc:ucp:jpolec:v:104:y:1996:i:6:p:1297-1313" },
        { short: "Marginal Revolution", name: "Marginal Revolution, « When are people OK with nuclear waste? » (présente Frey et Oberholzer-Gee, « The Cost of Price Incentives », 1997)", url: "https://marginalrevolution.com/marginalrevolution/2013/06/when-are-people-ok-with-nuclear-waste.html" },
        { short: "Alvin Roth", name: "Alvin E. Roth, « Repugnance as a Constraint on Markets », Journal of Economic Perspectives, 2007", url: "https://stanford.edu/%7Ealroth/papers/Repugnance.pdf" },
        { short: "Commission européenne", name: "Commission européenne, « EU Emissions Trading System has reduced emissions in the sectors covered by 50% since 2005 », 4 avril 2025", url: "https://climate.ec.europa.eu/news-other-reads/news/eu-emissions-trading-system-has-reduced-emissions-sectors-covered-50-2005-2025-04-04_en" },
        { short: "Vital City", name: "Vital City, « Congestion Pricing Lessons from London and Stockholm »", url: "https://www.vitalcitynyc.org/articles/how-london-and-stockholm-made-congestion-pricing-politics-work" }
      ],
      visuals: [
        { kind: "chart", type: "bar", title: "Quand l'argent fait dire non", subtitle: "Habitants prêts à accueillir un site de déchets nucléaires dans leur commune (Suisse)", xLabel: "Question posée", unit: "Part (%)", suffix: " %", data: [["Sans compensation", 50.8], ["Avec compensation", 24.6]], source: "Frey et Oberholzer-Gee (1997), via Marginal Revolution" },
        { kind: "chart", type: "bar", title: "Le paiement qui décourage", subtitle: "Femmes volontaires pour donner leur sang, à Göteborg", xLabel: "Groupe", unit: "Part (%)", suffix: " %", data: [["Sans paiement", 52], ["Payées", 30]], source: "Mellström et Johannesson (2008)" }
      ]
    },
    {
      id: "role-etat",
      emoji: "🏛️",
      theme: "eco",
      inspiredBy: "Raj Chetty",
      title: "À quoi sert l'État ? Impôts, biens publics et pollution",
      hook: "La France prélève plus de 42 % de sa richesse en impôts et cotisations et dépense 57 % de son PIB par ses administrations. Pour faire quoi ? Quand le marché se débrouille-t-il seul, et quand faut-il l'État ? Qui paie vraiment un impôt, pourquoi on fraude peu au Danemark, et quelles dépenses se remboursent d'elles-mêmes ? Les grandes idées de l'économie publique, avec des exemples concrets.",
      minutes: 23,
      piste: "bleue",
      tldr: [
        "En 2024, impôts et cotisations représentent 42,8 % du PIB en France selon l'Insee ; selon la méthode européenne, la France est 2e de l'UE, juste derrière le Danemark [1][2]. Les dépenses publiques atteignent 57 % du PIB, dont 41 % vont à la protection sociale (hors santé) [4].",
        "L'État intervient d'abord quand le marché échoue : biens publics que personne ne paierait seul, pollution dont personne ne paie le coût, risques que les assureurs privés couvrent mal à cause de l'information cachée [5][6].",
        "Celui qui verse un impôt n'est pas toujours celui qui le supporte (« l'incidence fiscale »), et un impôt qu'on ne voit pas sur l'étiquette change moins les comportements : afficher la taxe fait baisser les achats d'environ 8 % [7].",
        "On fraude très peu quand un tiers déclare les revenus (0,3 % au Danemark), beaucoup plus quand on les déclare soi-même (37 %) [8]. Et certaines dépenses publiques, surtout pour les enfants modestes, se remboursent d'elles-mêmes [9].",
        "L'État a aussi un coût : chaque impôt modifie les comportements, l'État peut se tromper, et un impôt jugé injuste peut être rejeté, comme la taxe carbone en 2018 [3]."
      ],
      sections: [
        {
          title: "Combien prélève l'État ?",
          paragraphs: [
            "Les ==prélèvements obligatoires==, ce sont tous les impôts et cotisations sociales que les ménages et les entreprises doivent payer : impôt sur le revenu, TVA, CSG, cotisations retraite et maladie, impôt sur les sociétés, taxe foncière… En France, ils représentent ==42,8 % du PIB en 2024== selon l'Insee, après un record de 45,4 % en 2022, le plus haut niveau mesuré depuis 1959 [1].",
            "Selon la méthode européenne d'Eurostat, un peu plus large, le taux français atteint 45,3 % en 2024 : ==le 2e de l'Union européenne, derrière le Danemark (45,8 %) et devant la Belgique (45,1 %)== [2].",
            "Ces chiffres ne disent pas si c'est « trop » : ils mesurent combien de richesse passe par l'État. Une grande partie revient directement aux ménages sous forme de retraites, de remboursements de soins ou d'allocations. Un pays où les retraites sont publiques, comme la France, a mécaniquement des prélèvements plus élevés qu'un pays où chacun cotise à un fonds de pension privé, même si au total les ménages paient des sommes comparables.",
            "La vraie question de l'économie publique, la branche de l'économie qui étudie l'action de l'État et que Raj Chetty enseigne à Harvard, est donc plutôt : ==dans quels cas l'État fait-il mieux que le marché, et comment bien concevoir ses impôts et ses dépenses ?=="
          ]
        },
        {
          title: "Où va l'argent ?",
          paragraphs: [
            "En 2024, l'ensemble des administrations publiques (État, collectivités locales, Sécurité sociale) dépense ==environ 1 672 milliards d'euros, soit 57 % du PIB== [4]. Ce chiffre est plus élevé que les prélèvements : l'écart est comblé par d'autres recettes (ventes, revenus du patrimoine) et surtout par le déficit, donc par la dette.",
            "Le premier poste, de loin, est la ==protection sociale : 41 % des dépenses, soit 693 milliards d'euros== (retraites, chômage, famille, logement, pauvreté, hors santé) [4]. Les retraites en sont le cœur, et ce sont elles qui ont le plus fait monter les dépenses en 2024 [4].",
            "Viennent ensuite la ==santé (16 %, 261 milliards)== et ==l'enseignement (9 %, 149 milliards)== [4]. Le reste se partage entre les services généraux (dont les intérêts de la dette), les affaires économiques (transports, aides aux entreprises), la défense, l'ordre public, l'environnement, le logement, la culture et le sport [4].",
            "Retiens l'ordre de grandeur : ==sur 100 euros de dépense publique, environ 41 vont à la protection sociale, 16 à la santé, 9 à l'école== [4]. Les débats sur les « économies » portent donc forcément, si l'on veut des montants importants, sur ces grands postes."
          ],
          example: {
            title: "1 000 euros de dépense publique",
            text: "D'après la répartition de l'Insee pour 2024 [4], 1 000 euros de dépense publique se décomposent à peu près ainsi : 410 € de protection sociale (surtout les retraites), 160 € de santé, 90 € d'enseignement, et 340 € pour tout le reste (services généraux et intérêts de la dette, transports, défense, police et justice, environnement, culture…)."
          }
        },
        {
          title: "Les grandes missions de l'État",
          paragraphs: [
            "Les économistes rangent souvent l'action de l'État en trois grandes missions. ==Allouer== : produire ou financer ce que le marché produit mal (routes, recherche, lutte contre la pollution). ==Redistribuer== : réduire les écarts de revenus par les impôts et les aides. ==Stabiliser== : amortir les crises en soutenant l'activité quand elle chute (voir notre cours sur le modèle IS-LM).",
            "Ce cours se concentre surtout sur la première : les ==« défaillances du marché »==. Ce sont les situations où, même si chacun agit au mieux pour lui-même, le résultat est mauvais pour tous. Il y en a trois grandes familles : les biens publics, les externalités (comme la pollution) et l'information cachée.",
            "L'idée est importante, car elle répond à une question souvent mal posée. Il ne s'agit pas de savoir si l'on est « pour » ou « contre » l'État en général, mais de savoir, ==cas par cas, si le marché fonctionne bien et si l'État ferait mieux==. Dans beaucoup de domaines (le pain, les vêtements, les téléphones), le marché fonctionne très bien seul.",
            "On verra aussi que l'État a ses propres défaillances : manque d'information, groupes de pression, lenteur. Comparer, c'est toujours comparer deux systèmes imparfaits."
          ]
        },
        {
          title: "Les biens publics : ce que personne ne paierait seul",
          paragraphs: [
            "Certains biens ont deux particularités. On ne peut pas empêcher quelqu'un d'en profiter (==non-exclusion==), et le fait que j'en profite n'en prive pas les autres (==non-rivalité==). Exemples : l'éclairage d'une rue, la défense nationale, un phare pour les bateaux, la recherche fondamentale, une digue contre les inondations.",
            "Problème : chacun a intérêt à attendre que les autres paient, puisqu'il en profitera quand même. C'est le ==passager clandestin==. Résultat : laissé au marché, ce bien serait produit en trop faible quantité, voire pas du tout, alors que tout le monde le souhaite.",
            "D'où l'impôt : l'État oblige tout le monde à contribuer, et finance ce que personne n'aurait financé seul. Ce n'est pas forcément l'État qui le produit : une entreprise privée peut construire la digue, mais c'est l'impôt qui la paie.",
            "Entre les biens purement privés (ton sandwich : rival et exclusif) et les biens purement publics, il existe des cas intermédiaires. Les ==biens communs== sont rivaux mais on ne peut exclure personne : les poissons de la mer, l'eau d'une nappe. Chacun pêche trop, et la ressource s'épuise. Les ==biens de club== sont non rivaux mais exclusifs : une chaîne de streaming, une autoroute à péage peu fréquentée. Chaque catégorie appelle une solution différente : quotas de pêche, abonnement, impôt."
          ],
          plain: {
            title: "l'éclairage de ta rue",
            steps: [
              "Ta rue est sombre. Un lampadaire coûte cher, mais il profite à tous les voisins.",
              "Chaque voisin se dit : « Si les autres paient, j'en profiterai gratuitement. »",
              "Personne ne paie : la rue reste sombre, alors que tout le monde voulait de la lumière.",
              "La mairie installe le lampadaire et le finance par les impôts locaux : chacun paie un peu, tout le monde en profite."
            ]
          }
        },
        {
          title: "La pollution : un coût que personne ne paie",
          paragraphs: [
            "Quand une usine pollue une rivière, elle impose un coût aux pêcheurs et aux riverains sans le payer : c'est une ==externalité négative==. Comme ce coût n'apparaît pas dans son prix, elle produit trop. À l'inverse, une ==externalité positive== profite aux autres sans être payée : un vaccin protège aussi ceux qui ne sont pas vaccinés, une ruche pollinise les vergers voisins. Ces activités, laissées au marché, sont trop rares.",
            "La solution classique, proposée par l'économiste britannique Arthur Pigou dans « L'Économie du bien-être », est de ==taxer la pollution au niveau du dommage causé== : le pollueur intègre ce coût dans ses choix [6]. On parle de « taxe pigouvienne ». C'est l'idée de la taxe carbone (voir aussi notre cours sur la morale des marchés). Symétriquement, on peut subventionner les externalités positives, comme la vaccination.",
            "En 1960, l'économiste Ronald Coase, futur prix Nobel 1991, propose un autre regard dans « Le problème du coût social » [6]. Selon lui, le dommage est réciproque : l'usine gêne les pêcheurs, mais interdire l'usine gêne l'usine. Si les droits de propriété sont clairs et si négocier ne coûte rien, les parties peuvent s'arranger entre elles, sans taxe, et arriver à une solution efficace [6].",
            "Coase reconnaît lui-même que ces conditions sont rarement réunies : ==quand des millions de personnes subissent une pollution, il est impossible de toutes les faire négocier==, et les « coûts de transaction » rendent l'arrangement privé irréaliste [6]. Pour le climat, qui concerne toute la planète, on revient donc à des outils publics : taxe, quotas, normes."
          ],
          plain: {
            title: "Pigou ou Coase, sur une rivière",
            steps: [
              "Une usine rejette des déchets dans une rivière ; un pêcheur en aval perd 100 000 € par an.",
              "Solution de Pigou : l'État taxe l'usine de 100 000 € par an. Si installer un filtre coûte moins cher, elle l'installe [6].",
              "Solution de Coase : si le pêcheur a un droit clair sur une eau propre, l'usine peut lui proposer de l'argent, ou installer le filtre si c'est moins cher. Ils négocient seuls [6].",
              "Avec deux parties, Coase marche. Avec des millions de riverains, négocier est impossible : on revient à la taxe ou aux normes [6]."
            ]
          }
        },
        {
          title: "La taxe carbone française : efficace sur le papier, rejetée dans la rue",
          paragraphs: [
            "En France, la taxe carbone sur l'énergie, appelée « contribution climat-énergie », est créée en 2014 et augmente chaque année. Elle atteint ==44,6 euros par tonne de CO₂ en 2018== [3].",
            "Sa hausse prévue en 2019 est annulée face au mouvement des gilets jaunes, et elle reste bloquée depuis à ce niveau, alors que la trajectoire votée visait 100 euros en 2030 [3].",
            "Pourquoi ce rejet ? Les économistes en tirent trois leçons. ==Elle pèse plus lourd sur les ménages modestes et ruraux==, qui dépensent une plus grande part de leur revenu en carburant et en chauffage, et qui n'ont souvent pas d'alternative à la voiture. ==Ses recettes n'étaient pas visiblement rendues== aux ménages. Et ==elle s'ajoutait à une hausse des prix du pétrole==, au moment où le plein coûtait déjà plus cher.",
            "D'autres pays ont choisi de redistribuer les recettes : en Suisse, une partie de la taxe sur le CO₂ du chauffage est reversée à la population. L'idée est la même que pour le péage de Stockholm : ==un prix est mieux accepté quand on voit à quoi sert l'argent==. Un outil efficace pour l'économiste peut être rejeté s'il paraît injuste."
          ]
        },
        {
          title: "Qui paie vraiment l'impôt ?",
          paragraphs: [
            "Celui qui verse l'impôt à l'État n'est pas toujours celui qui en supporte le poids : c'est la question de ==l'incidence fiscale==.",
            "Exemple : les cotisations sociales « patronales » sont versées par l'employeur. Mais si elles augmentent, l'entreprise peut augmenter moins les salaires : une partie est alors supportée par les salariés. De même, une taxe sur un produit est souvent répercutée sur le prix, donc payée par le client, même si c'est le vendeur qui la verse.",
            "Règle générale : ==c'est celui qui a le moins de solutions de rechange qui supporte la taxe==. Si les clients ne peuvent pas se passer du produit (on dit que leur demande est « peu élastique »), ce sont eux qui paient ; s'ils peuvent facilement en changer, c'est le vendeur. Les droits de douane en sont un bon exemple (voir notre cours sur les droits de douane).",
            "Conséquence importante : ==on ne peut pas décider par la loi qui paie vraiment un impôt==. Le législateur décide qui le verse ; ce sont les marchés qui décident qui le supporte. C'est pourquoi un débat sérieux sur les impôts regarde toujours les effets réels, pas seulement le nom de celui qui remplit le chèque."
          ],
          plain: {
            title: "une taxe sur les cigarettes",
            steps: [
              "L'État augmente la taxe sur chaque paquet ; c'est le fabricant qui la verse.",
              "Les fumeurs dépendants achètent presque autant, même plus cher.",
              "Le fabricant augmente donc son prix presque du montant de la taxe.",
              "Au final, ce sont surtout les fumeurs qui la paient, pas le fabricant."
            ]
          }
        },
        {
          title: "L'impôt qu'on ne voit pas",
          paragraphs: [
            "Aux États-Unis, les prix affichés en magasin sont hors taxe : la taxe sur les ventes (« sales tax ») n'est ajoutée qu'à la caisse. En 2009, Raj Chetty et ses collègues Adam Looney et Kory Kroft se demandent si les clients en tiennent vraiment compte [7].",
            "Ils mènent une expérience dans un supermarché. Pendant trois semaines, sur environ 750 produits taxables (cosmétiques, accessoires pour cheveux, déodorants), ils ajoutent une étiquette indiquant ==le prix taxe comprise== [7]. Rien d'autre ne change : le prix payé à la caisse est exactement le même.",
            "Résultat : ==les ventes de ces produits baissent d'environ 8 %==, presque autant que si le prix avait vraiment augmenté de 7,375 %, le montant de la taxe [7]. Sans étiquette, presque tous les clients interrogés oubliaient la taxe en calculant le prix de leur panier [7].",
            "Les économistes appellent cela la ==« saillance »== : un impôt bien visible change plus les comportements qu'un impôt caché. Conséquence pour l'incidence fiscale et pour la politique : un impôt caché fait moins réagir les gens (donc il « coûte » moins en perte d'activité), mais il est aussi moins transparent. Et une taxe qu'on veut voir changer les comportements, comme une taxe sur le tabac ou le carbone, a intérêt à être bien visible."
          ],
          plain: {
            title: "le déodorant à 4 dollars",
            steps: [
              "En rayon, un déodorant est affiché 4,00 $. À la caisse, on paie 4,30 $ avec la taxe de 7,375 %.",
              "La plupart des clients ne pensent qu'aux 4,00 $ : la taxe est « invisible » [7].",
              "Les chercheurs ajoutent une étiquette « 4,30 $ taxe comprise ». Le prix réel n'a pas changé.",
              "Les ventes baissent d'environ 8 %, comme si le prix avait vraiment augmenté [7] : ce qu'on voit compte autant que ce qu'on paie."
            ]
          }
        },
        {
          title: "Pourquoi les gens paient leurs impôts",
          paragraphs: [
            "Si les contrôles fiscaux sont rares, pourquoi la plupart des gens paient-ils ce qu'ils doivent ? En 2011, une équipe d'économistes, dont Henrik Kleven et Emmanuel Saez, publie une étude remarquable menée avec l'administration fiscale danoise [8].",
            "Plus de 40 000 contribuables danois sont tirés au sort : la moitié subit un contrôle approfondi, l'autre moitié n'est pas contrôlée exprès [8]. On peut alors mesurer précisément la fraude.",
            "Le résultat est très net. Sur les revenus déclarés par un tiers (salaires déclarés par l'employeur, intérêts déclarés par la banque), ==la fraude est presque nulle : 0,3 %==. Sur les revenus que l'on déclare soi-même (travail indépendant, certains revenus du capital), ==elle atteint 37 %== [8]. Comme 95 % des revenus sont déclarés par un tiers au Danemark, la fraude totale reste faible [8].",
            "Leçon : les gens ne sont pas forcément plus honnêtes au Danemark qu'ailleurs ; ==ils paient surtout parce qu'ils ne peuvent pas facilement tricher==. Le titre de l'étude le résume : « Incapables ou pas disposés à frauder ? » La France a suivi la même logique avec le prélèvement à la source depuis 2019 et la déclaration préremplie : quand l'information vient d'un tiers, l'impôt est mieux collecté."
          ]
        },
        {
          title: "Assurer ce que le marché assure mal",
          paragraphs: [
            "Chômage, maladie, vieillesse : pourquoi l'État s'en mêle-t-il ? Parce que les assurances privées y fonctionnent mal, à cause de ==l'information cachée==.",
            "En 1970, l'économiste George Akerlof publie un article devenu célèbre, « Le marché des tacots », sur les voitures d'occasion [5]. Le vendeur sait si sa voiture est un bon véhicule ou un « citron » (un tacot plein de défauts) ; l'acheteur, lui, ne peut pas le savoir. Il propose donc un prix moyen. Les propriétaires de bonnes voitures, mal payés, retirent leurs voitures du marché ; il ne reste que les mauvaises, et le marché peut s'effondrer [5]. Akerlof reçoit le prix Nobel en 2001, avec Michael Spence et Joseph Stiglitz, pour leurs travaux sur l'information asymétrique [5].",
            "L'assurance connaît le même problème. Si une assurance chômage était facultative, ceux qui craignent le plus de perdre leur emploi s'y inscriraient en priorité ; l'assureur devrait monter ses prix, les « bons risques » partiraient, et le système s'effondrerait. C'est la ==sélection adverse==.",
            "En rendant l'assurance obligatoire pour tous, l'État casse ce cercle : tout le monde cotise, les bons comme les mauvais risques. C'est la logique de la Sécurité sociale française. L'assurance crée aussi un autre problème, ==l'aléa moral== : une fois assuré, on peut faire moins attention. D'où les franchises, les délais de carence ou le contrôle de la recherche d'emploi, qui gardent une part du risque à la charge de l'assuré."
          ],
          plain: {
            title: "une assurance chômage facultative",
            steps: [
              "Un assureur privé propose une assurance chômage à 50 € par mois, calculée sur le risque moyen.",
              "Les salariés au poste très sûr la trouvent trop chère et ne la prennent pas ; ceux qui craignent un licenciement la prennent tous.",
              "L'assureur paie beaucoup d'indemnités : il monte le prix à 80 €. D'autres salariés « sûrs » partent.",
              "Le cercle continue jusqu'à ce qu'il ne reste que les plus à risque : l'assurance disparaît. Rendue obligatoire, elle tient, car tout le monde cotise : c'est la sélection adverse [5]."
            ]
          }
        },
        {
          title: "Les dépenses qui se remboursent d'elles-mêmes",
          paragraphs: [
            "Comment savoir si une dépense publique vaut ce qu'elle coûte ? En 2020, Nathaniel Hendren et Ben Sprung-Keyser, du laboratoire de Raj Chetty à Harvard, comparent ==133 politiques publiques américaines== avec une seule mesure, la ==« valeur marginale des fonds publics »== : ce que les bénéficiaires seraient prêts à payer pour la politique, divisé par son coût net pour l'État [9].",
            "Le coût net tient compte des effets en retour : si une aide permet à quelqu'un de trouver un meilleur emploi, il paiera plus d'impôts plus tard et touchera moins d'aides. Certaines politiques ont ainsi un coût net négatif : ==elles rapportent à l'État plus qu'elles ne lui coûtent==.",
            "Le résultat principal : ==les investissements dans la santé et l'éducation des enfants de familles modestes ont historiquement le meilleur rendement==, souvent supérieur à 5 dollars de valeur par dollar dépensé, et beaucoup se sont remboursés d'eux-mêmes grâce aux impôts payés plus tard et aux aides évitées [9]. Les dépenses pour les adultes rapportent en général moins, sauf quand elles profitent aussi à leurs enfants, comme l'aide au déménagement de Moving to Opportunity (voir notre cours sur l'ascenseur social) [9].",
            "Ce travail change le débat : au lieu d'opposer « dépenser » et « économiser », il invite à ==classer les dépenses selon ce qu'elles rapportent== à la société. Toutes les politiques pour les enfants ne sont pas rentables, préviennent les auteurs, mais la tendance est nette [9]."
          ]
        },
        {
          title: "Les limites : l'État a aussi un coût",
          paragraphs: [
            "==Chaque impôt modifie les comportements.== Un impôt sur le travail peut décourager de travailler plus, un impôt sur l'épargne d'épargner : les économistes appellent ==« perte sèche »== la richesse qui disparaît ainsi. Plus la base de l'impôt réagit (des gens qui peuvent facilement changer de comportement ou de pays), plus la perte est grande. C'est pourquoi les économistes préfèrent souvent des impôts à large base et à taux modéré.",
            "==L'État peut se tromper.== Il manque parfois d'information, cède à des groupes de pression ou réagit lentement : on parle « d'échecs de l'État », comme on parle d'échecs du marché. Une niche fiscale peut survivre des décennies parce que ceux qui en profitent se mobilisent, alors que son coût est réparti sur tous.",
            "==L'acceptation compte.== La taxe carbone française montre qu'un bon outil sur le papier ne suffit pas : il faut qu'il soit perçu comme juste, et que l'on voie à quoi sert l'argent [3].",
            "==La dette a un prix.== Quand les dépenses dépassent les recettes, l'État emprunte. Les intérêts de la dette font partie des dépenses publiques [4] : plus ils montent, moins il reste pour le reste. Une bonne dépense publique, comme celles qui se remboursent [9], peut justifier un emprunt ; une dépense de fonctionnement courante, beaucoup moins."
          ]
        }
      ],
      forMe: "Ta fiche de paie, ton plein d'essence, ton ticket de caisse : tout contient des prélèvements. Savoir à quoi ils servent (protection sociale, santé, école, biens publics, lutte contre la pollution), qui les supporte vraiment et pourquoi certains sont mieux acceptés que d'autres aide à juger les débats sur les impôts sans slogans.",
      figures: [
        { value: "42,8 %", label: "les prélèvements obligatoires en France en 2024, en part du PIB (Insee)", src: 1 },
        { value: "2e", label: "le rang de la France dans l'UE en 2024 selon Eurostat, derrière le Danemark", src: 2 },
        { value: "57 %", label: "les dépenses publiques en part du PIB en 2024, dont 41 % pour la protection sociale (hors santé)", src: 4 },
        { value: "−8 %", label: "baisse des ventes quand le prix taxe comprise est affiché (expérience de Chetty)", src: 7 },
        { value: "0,3 % / 37 %", label: "fraude fiscale au Danemark : revenus déclarés par un tiers, puis revenus déclarés soi-même", src: 8 },
        { value: "44,6 €", label: "la taxe carbone par tonne de CO₂, figée depuis 2018", src: 3 }
      ],
      terms: ["pib", "dette-publique", "pouvoir-achat"],
      quiz: [
        { q: "Quel est le premier poste des dépenses publiques en France en 2024 ?", options: ["L'enseignement", "La défense", "La protection sociale (retraites, chômage, famille…)", "La culture"], answer: 2, explain: "41 % des dépenses, soit 693 milliards d'euros ; la santé suit avec 16 % et l'enseignement avec 9 %." },
        { q: "Qu'est-ce qu'un bien public au sens des économistes ?", options: ["Un bien vendu par l'État", "Un bien dont on ne peut exclure personne et que chacun peut utiliser sans priver les autres", "Un bien gratuit", "Un bien produit par une entreprise publique"], answer: 1, explain: "Non-exclusion et non-rivalité : un phare, l'éclairage public, la défense." },
        { q: "Les poissons de la mer sont…", options: ["Un bien public", "Un bien commun : rival, mais on ne peut exclure personne", "Un bien de club", "Un bien privé"], answer: 1, explain: "Chacun pêche trop et la ressource s'épuise : d'où les quotas de pêche." },
        { q: "Qu'est-ce qu'une externalité négative ?", options: ["Un impôt", "Un coût imposé à d'autres sans être payé, comme la pollution", "Une exportation", "Une dette"], answer: 1, explain: "Le pollueur ne paie pas le dommage qu'il cause aux autres : il produit donc trop." },
        { q: "Selon Coase, quand une négociation privée peut-elle régler une pollution sans taxe ?", options: ["Toujours", "Quand les droits de propriété sont clairs et que négocier ne coûte presque rien", "Jamais", "Seulement pour le climat"], answer: 1, explain: "Avec des millions de victimes, les coûts de transaction rendent la négociation impossible : on revient à la taxe ou aux normes." },
        { q: "Qui supporte surtout une taxe ?", options: ["Toujours celui qui la verse", "Celui qui a le moins de solutions de rechange", "Toujours l'entreprise", "Personne"], answer: 1, explain: "C'est l'incidence fiscale : si les clients ne peuvent pas se passer du produit, ils paient l'essentiel." },
        { q: "Dans l'expérience de Chetty au supermarché, qu'a provoqué l'affichage du prix taxe comprise ?", options: ["Rien", "Une baisse des ventes d'environ 8 %", "Une hausse des ventes", "Une baisse du prix payé"], answer: 1, explain: "Le prix payé n'avait pas changé : c'est la visibilité de la taxe qui a fait réagir les clients." },
        { q: "Au Danemark, pourquoi la fraude fiscale est-elle faible ?", options: ["Les Danois sont plus honnêtes", "95 % des revenus sont déclarés par un tiers (employeur, banque)", "Il n'y a pas d'impôts", "Les amendes sont énormes"], answer: 1, explain: "Fraude de 0,3 % sur les revenus déclarés par un tiers, contre 37 % sur ceux qu'on déclare soi-même." },
        { q: "Pourquoi une assurance chômage facultative risque-t-elle de s'effondrer ?", options: ["Trop de chômeurs", "La sélection adverse : seuls les plus à risque s'assurent", "La fraude", "L'inflation"], answer: 1, explain: "Les bons risques partent, les prix montent, le système se vide : l'obligation casse ce cercle." },
        { q: "Selon l'étude de Hendren et Sprung-Keyser, quelles dépenses publiques ont le meilleur rendement ?", options: ["Les baisses d'impôts pour les plus riches", "La santé et l'éducation des enfants de familles modestes", "Les dépenses militaires", "Aucune"], answer: 1, explain: "Beaucoup se sont remboursées d'elles-mêmes grâce aux impôts payés plus tard et aux aides évitées." }
      ],
      sources: [
        { short: "Insee", name: "Insee, « Taux de prélèvements obligatoires rapportés au produit intérieur brut », données 1959-2025", url: "https://www.insee.fr/fr/statistiques/2381412" },
        { short: "Législation fiscale", name: "Legifiscal, d'après Eurostat, « La France n° 2 européen en matière de pression fiscale »", url: "https://www.legifiscal.fr/actualites-fiscales/4309-eurostat-france-n2-europeen-matiere-pression-fiscale.html" },
        { short: "Connaissance des énergies", name: "Connaissance des énergies, « Quel est le montant de la taxe carbone en France ? »", url: "https://www.connaissancedesenergies.org/questions-et-reponses-energies/quel-est-le-montant-de-la-taxe-carbone-en-france" },
        { short: "Insee", name: "Insee Première n° 2093, « Usage de l'argent public : les dépenses publiques par fonction en 2024 », février 2026", url: "https://www.insee.fr/fr/statistiques/8735252" },
        { short: "Econlib", name: "Econlib, « George A. Akerlof » (biographie : « The Market for Lemons », 1970 ; prix Nobel 2001)", url: "https://www.econlib.org/library/Enc/bios/Akerlof.html" },
        { short: "Coase", name: "Ronald H. Coase, « The Problem of Social Cost », Journal of Law and Economics, 1960 (discute l'approche de Pigou dans « The Economics of Welfare »)", url: "https://www.essentialscholars.org/sites/default/files/2023-01/essential-ronald-coase-ch3.pdf" },
        { short: "AER", name: "Raj Chetty, Adam Looney et Kory Kroft, « Salience and Taxation: Theory and Evidence », American Economic Review, 2009", url: "https://www.frbsf.org/wp-content/uploads/sites/4/chetty.pdf" },
        { short: "NBER", name: "NBER, Kleven, Knudsen, Kreiner, Pedersen et Saez, « Unwilling or Unable to Cheat? Evidence from a Randomized Tax Audit Experiment in Denmark », document de travail 15769 (Econometrica, 2011)", url: "https://www.nber.org/papers/w15769" },
        { short: "Harvard", name: "Nathaniel Hendren et Ben Sprung-Keyser, « A Unified Welfare Analysis of Government Policies », Quarterly Journal of Economics, 2020", url: "https://hendren.scholars.harvard.edu/publications/unified-welfare-analysis-government-policies" }
      ],
      visuals: [
        { kind: "chart", type: "bar", title: "Où vont 100 euros de dépense publique", subtitle: "Part des grands postes dans les dépenses publiques françaises en 2024", xLabel: "Poste", unit: "Part (%)", suffix: " %", data: [["Protection sociale", 41], ["Santé", 16], ["Enseignement", 9], ["Tout le reste", 34]], source: "Insee Première n° 2093 (février 2026)" },
        { kind: "chart", type: "bar", title: "On fraude quand on peut", subtitle: "Part des revenus non déclarés au Danemark, selon qui déclare le revenu", xLabel: "Revenu déclaré par", unit: "Fraude (%)", suffix: " %", data: [["Un tiers (employeur, banque)", 0.3], ["Soi-même", 37]], source: "Kleven et al. (2011)" }
      ]
    },
    {
      id: "droits-de-douane",
      emoji: "🚧",
      theme: "mix",
      title: "Droits de douane : à quoi ça sert, et qui paie vraiment ?",
      hook: "Les États-Unis taxent les produits étrangers, l'Europe taxe les voitures chinoises. Officiellement, c'est pour protéger. Mais au bout de la chaîne, c'est souvent toi qui paies.",
      minutes: 19,
      piste: "verte",
      tldr: [
        "Un droit de douane est une taxe sur un produit importé, payée quand il passe la frontière.",
        "Il sert à protéger les entreprises locales, à rapporter de l'argent à l'État et à faire pression sur un autre pays.",
        "Mais c'est l'entreprise qui importe qui paie la taxe, et elle la répercute presque toujours sur le prix final : au bout du compte, c'est le consommateur qui paie [3].",
        "Le débat est vieux de deux siècles : en 1817, David Ricardo montre que deux pays gagnent à échanger même si l'un est meilleur partout [19] ; en 1930, la loi américaine Smoot-Hawley relève les droits sur plus de 20 000 produits et déclenche des représailles [15].",
        "Après 1947, le GATT puis l'OMC (1995) font baisser les droits de douane mondiaux [16]. Mais depuis le 11 décembre 2019, l'organe d'appel de l'OMC, qui tranche les litiges, est paralysé par le blocage américain [18]."
      ],
      visuals: [
        {
          kind: "chart",
          type: "bar",
          title: "Qui paie les droits de douane américains ?",
          subtitle: "Part du coût des taxes de 2025 : acheteurs américains (entreprises et consommateurs) ou exportateurs étrangers",
          xLabel: "Qui paie",
          unit: "Part du coût (%)",
          suffix: " %",
          data: [["Américains", 96], ["Étrangers", 4]],
          source: "Institut de Kiel, janvier 2026 (25 millions d'expéditions analysées)"
        }
      ],
      sections: [
        {
          title: "À quoi sert un droit de douane ?",
          paragraphs: [
            "Protéger les entreprises du pays. En rendant les produits étrangers plus chers, la taxe donne un avantage aux usines locales face à des concurrents qui produisent moins cher, par exemple parce que leurs salaires sont plus bas ou qu'ils reçoivent des aides de leur État.",
            "Riposter à une concurrence jugée déloyale. En 2024, l'Union européenne a ajouté des taxes allant jusqu'à 35,3 % sur les voitures électriques fabriquées en Chine, estimant qu'elles étaient vendues à bas prix grâce aux subventions de Pékin [2].",
            "Rapporter de l'argent à l'État. La taxe est encaissée par les douanes, comme un impôt.",
            "Faire pression dans une négociation. Un pays menace de taxer les produits d'un autre pour obtenir quelque chose en échange : un accord commercial, des achats, ou une décision politique.",
            "Protéger des secteurs jugés stratégiques, comme l'acier, les médicaments ou les puces électroniques, pour ne pas dépendre d'un autre pays en cas de crise ou de guerre."
          ]
        },
        {
          title: "Qui paie vraiment ? Le consommateur, surtout",
          paragraphs: [
            "Contrairement à une idée reçue, ce n'est pas le pays exportateur qui verse la taxe. C'est l'entreprise qui importe le produit, au moment où il passe la frontière.",
            "Un exemple simple : un magasin achète une télévision 100 € à l'étranger. Avec un droit de douane de 25 %, il doit verser 25 € aux douanes : la télévision lui coûte 125 €. Pour ne pas perdre d'argent, il augmente son prix de vente. C'est toi qui paies la différence en caisse.",
            "Les études le confirment. Après les taxes américaines de 2018 sur les produits chinois, le coût a été supporté presque entièrement par les entreprises et les consommateurs américains, pas par la Chine [4]. Rebelote avec les taxes de 2025 : selon l'Institut de Kiel, 96 % du coût est retombé sur les acheteurs américains, et seulement 4 % sur les exportateurs étrangers [3].",
            "Et les prix montent même pour des produits non taxés. En 2018, les États-Unis ont taxé les machines à laver importées : leur prix a augmenté d'environ 12 %, soit près de 90 dollars par machine. Les sèche-linge, pourtant non taxés, ont aussi augmenté, car les vendeurs en ont profité. Les producteurs américains, protégés, ont eux aussi relevé leurs prix [5]."
          ]
        },
        {
          title: "Protéger des emplois, mais à quel prix ?",
          paragraphs: [
            "La taxe sur les machines à laver a bien créé environ 1 800 emplois aux États-Unis. Mais elle a coûté aux consommateurs américains environ 1,5 milliard de dollars par an, soit environ 815 000 dollars par emploi créé [5].",
            "C'est tout le dilemme : les bénéfices d'un droit de douane sont visibles et concentrés (une usine, des emplois dans une région), alors que son coût est invisible et réparti sur des millions d'acheteurs qui paient chacun un peu plus cher."
          ]
        },
        {
          title: "Le risque de l'escalade",
          paragraphs: [
            "Quand un pays taxe, l'autre riposte souvent par ses propres taxes. C'est l'engrenage de la guerre commerciale, et les consommateurs des deux côtés paient plus cher.",
            "L'histoire sert d'avertissement : en 1930, la loi américaine Smoot-Hawley a augmenté les droits de douane sur des milliers de produits. Les représailles qui ont suivi ont fait chuter le commerce mondial et aggravé la Grande Dépression."
          ]
                },
        {
          title: "Le cas américain : du « Liberation Day » à aujourd'hui",
          paragraphs: [
            "Le 2 avril 2025, Donald Trump annonce depuis la roseraie de la Maison-Blanche ce qu'il appelle le « Liberation Day » (jour de la libération) : une taxe de 10 % sur presque tout ce qui entre aux États-Unis à partir du 5 avril, puis des taux plus élevés pays par pays, par exemple 34 % pour la Chine, 20 % pour l'Union européenne, 24 % pour le Japon et 46 % pour le Viêt Nam [6]. Ces taux étaient calculés surtout à partir du déficit commercial des États-Unis avec chaque pays, pas à partir des taxes que ces pays appliquaient eux-mêmes [6].",
            "Les recettes ont fortement augmenté. L'État fédéral a encaissé 195 milliards de dollars de droits de douane sur l'exercice 2025 (octobre 2024 à septembre 2025), puis 173 milliards sur l'exercice 2026, une baisse de 11 % surtout due aux remboursements [7]. Le bureau du budget du Congrès (CBO) prévoit pour 2026 environ 250 milliards de dollars de moins que dans ses prévisions précédentes [8].",
            "Pourquoi des remboursements ? Le 20 février 2026, la Cour suprême a jugé, par 6 voix contre 3, que la loi d'urgence économique (IEEPA) utilisée pour ces taxes ne donnait pas au président le pouvoir de créer des droits de douane [9]. Le jour même, la Maison-Blanche les a remplacés par une surtaxe temporaire de 10 % pour 150 jours, qui a pris fin le 24 juillet 2026, puis par de nouvelles taxes de 10 à 12,5 % sur une soixantaine de pays, fondées sur une autre loi [9][10].",
            "Qui paie ? Selon le Budget Lab de l'université Yale, les droits de douane en place coûtent plus de 1 000 dollars par an au ménage américain typique (estimation d'août 2026) [11]. Les ménages aisés paient plus en dollars, mais les ménages modestes paient plus en part de leurs revenus [12].",
            "Où va l'argent ? Les droits de douane vont dans le budget général de l'État, sans caisse à part. Le 8 décembre 2025, le gouvernement a annoncé 12 milliards de dollars d'aide aux agriculteurs touchés par la guerre commerciale, financés selon le président par « une petite partie » des recettes douanières [13]. En revanche, le « dividende douanier » de 2 000 dollars par personne promis le 9 novembre 2025 n'a jamais été voté : il aurait coûté environ 300 milliards de dollars selon la Tax Foundation [14]."
          ]
        },
        {
          title: "1817 : pourquoi échanger, même quand on est meilleur partout",
          paragraphs: [
            "Pour comprendre les droits de douane, il faut d'abord comprendre pourquoi les économistes défendent presque tous le commerce. L'idée clé vient de l'économiste anglais ==David Ricardo==, en ==1817== : la théorie des ==avantages comparatifs== [19].",
            "Son exemple est resté célèbre. Le Portugal produit du vin et du drap plus efficacement que l'Angleterre : il a besoin de moins d'heures de travail pour les deux [19]. Faut-il pour autant qu'il produise tout lui-même ? Non, dit Ricardo : le Portugal est ==beaucoup== meilleur pour le vin, et seulement ==un peu== meilleur pour le drap. S'il se spécialise dans le vin, l'Angleterre dans le drap, et qu'ils échangent, ==les deux pays consomment plus de vin et plus de drap== qu'en produisant chacun tout seul [19].",
            "C'est contre-intuitif, et c'est pourquoi c'est important : ==un pays n'a pas besoin d'être le meilleur en quelque chose pour gagner à commercer==, il suffit qu'il se spécialise là où son désavantage est le plus faible. Un droit de douane, en empêchant cette spécialisation, rend en principe les deux pays plus pauvres.",
            "Mais la théorie a ses angles morts : elle dit que le pays gagne ==au total==, pas que tout le monde gagne. Les ouvriers du secteur qui disparaît (ici, le drap portugais) perdent leur emploi. Toute la politique commerciale tourne autour de cette tension : un gain diffus pour tous, des pertes concentrées sur quelques-uns."
          ],
          plain: {
            title: "l'exemple de Ricardo, en heures de travail",
            steps: [
              "Pour produire une unité, l'Angleterre a besoin de 100 heures pour le drap et 120 pour le vin ; le Portugal de 90 pour le drap et 80 pour le vin [19].",
              "Le Portugal est meilleur dans les deux, mais son avance est bien plus grande pour le vin (80 contre 120) que pour le drap (90 contre 100).",
              "Le Portugal se spécialise dans le vin, l'Angleterre dans le drap, et ils échangent.",
              "Avec le même nombre d'heures de travail, les deux pays obtiennent plus de vin et plus de drap qu'en produisant tout eux-mêmes [19]."
            ]
          }
        },
        {
          title: "Le XIXe siècle : blé anglais et chandelles françaises",
          paragraphs: [
            "Au Royaume-Uni, les ==« Corn Laws »== taxent le blé importé pour protéger les grands propriétaires terriens. Le pain est cher, les ouvriers des villes en souffrent. Après une longue bataille menée par la Ligue contre les lois sur le blé et la famine en Irlande, le Premier ministre Robert Peel les abolit en ==1846==. Le Royaume-Uni devient le champion du libre-échange.",
            "En France, l'économiste ==Frédéric Bastiat== se moque du protectionnisme en ==1845== avec un texte resté célèbre, la ==« Pétition des marchands de chandelles »== : il fait réclamer par les fabricants de bougies une loi obligeant à fermer fenêtres et volets, pour les protéger de la « concurrence déloyale » du soleil, qui fournit la lumière gratuitement. La satire montre l'absurdité de vouloir se protéger de ce qui est bon marché.",
            "La France revient pourtant au protectionnisme à la fin du siècle, avec le ==tarif Méline== de 1892 qui protège l'agriculture. Le débat n'a jamais vraiment cessé : chaque époque rejoue la bataille entre ceux qui veulent des produits bon marché et ceux qui veulent protéger des emplois et des secteurs."
          ]
        },
        {
          title: "1930 : Smoot-Hawley, la loi qui a aggravé la crise",
          paragraphs: [
            "Après le krach de 1929, le Congrès américain veut protéger les agriculteurs et les industriels. Le ==17 juin 1930==, le président Herbert Hoover signe la ==loi Smoot-Hawley==, qui relève les droits de douane sur ==plus de 20 000 produits importés==, à des niveaux parmi les plus élevés de l'histoire américaine [15]. Plus d'un millier d'économistes avaient signé une lettre pour lui demander d'y renoncer.",
            "Les partenaires des États-Unis protestent, puis ripostent avec leurs propres droits de douane : Canada, pays européens et bien d'autres. Une étude récente montre que les exportations américaines chutent de 15 à 22 % vers les pays qui ont protesté, et de 28 à 33 % vers ceux qui ont riposté [15].",
            "Le commerce mondial s'effondre : selon une estimation souvent citée, il recule d'environ deux tiers entre 1929 et 1934, même si d'autres calculs donnent une baisse plus proche d'un tiers en volume [15]. Les historiens s'accordent sur un point : ==Smoot-Hawley n'a pas causé la Grande Dépression, mais elle l'a aggravée et a fermé les débouchés qui auraient pu aider à en sortir== [15].",
            "Cette expérience a marqué les esprits pour des décennies : elle explique pourquoi, après 1945, les grands pays ont voulu se lier les mains par des règles communes."
          ]
        },
        {
          title: "1947-1995 : du GATT à l'OMC, la grande baisse",
          paragraphs: [
            "Le ==30 octobre 1947==, à Genève, 23 pays signent ==l'Accord général sur les tarifs douaniers et le commerce (GATT)== [16]. Le principe est simple : négocier ensemble des baisses de droits de douane, et accorder à tous les membres les mêmes avantages (la « clause de la nation la plus favorisée »).",
            "De cycle de négociation en cycle de négociation, les droits de douane moyens des grands pays industrialisés baissent fortement, d'environ 22 % en 1947 à environ 5 % après le cycle de l'Uruguay, conclu en 1994 [16]. C'est l'un des moteurs de la forte croissance de l'après-guerre.",
            "Le ==1er janvier 1995==, l'==Organisation mondiale du commerce (OMC)== remplace le GATT [16]. Elle ajoute un vrai tribunal pour régler les litiges entre pays. Le ==11 décembre 2001==, la Chine y entre [16] : son intégration au commerce mondial transforme l'économie de la planète, avec des usines qui déménagent vers l'Asie et des prix qui baissent partout.",
            "Aujourd'hui, l'OMC compte plus de 160 membres. Ses règles limitent les droits de douane que chaque pays peut imposer, sauf exceptions (sécurité nationale, dumping, subventions déloyales, mesures de sauvegarde)."
          ]
        },
        {
          title: "Une taxe qui ne meurt jamais : la « taxe sur le poulet »",
          paragraphs: [
            "Au début des années 1960, la France et l'Allemagne de l'Ouest taxent le poulet américain, qui inonde leurs marchés à bas prix. Washington riposte : par une proclamation de décembre 1963, entrée en vigueur en ==janvier 1964==, le président Lyndon Johnson impose des droits de douane sur quatre produits européens, dont ==une taxe de 25 % sur les camionnettes importées== [17]. C'est la « guerre du poulet ».",
            "Plus de soixante ans plus tard, le différend sur le poulet est oublié, l'Allemagne ne vend plus de camionnettes aux États-Unis… mais ==la taxe de 25 % sur les pick-up importés existe toujours== [17]. Elle a façonné le marché américain : les constructeurs étrangers ont construit leurs pick-up aux États-Unis ou au Mexique, et certains ont rivalisé d'astuces, comme importer des fourgonnettes avec des sièges arrière qu'on démontait à l'arrivée pour payer moins [17].",
            "La leçon : ==un droit de douane créé pour une raison passagère peut durer des décennies==, car il crée des intérêts (ici, les constructeurs américains de pick-up, protégés de la concurrence) qui se battent pour le garder."
          ]
        },
        {
          title: "L'OMC en panne",
          paragraphs: [
            "Le cœur de l'OMC, c'est son système de règlement des litiges : un pays qui s'estime lésé porte plainte, un groupe d'experts tranche, et l'on peut faire appel devant un ==organe d'appel== de sept juges. Pendant vingt ans, ce système a permis de régler des centaines de conflits commerciaux sans escalade.",
            "Mais depuis 2017, les États-Unis bloquent la nomination de nouveaux juges, en reprochant à l'organe d'appel de dépasser son rôle [18]. Le ==11 décembre 2019==, il ne reste plus qu'un juge : faute de quorum, ==l'organe d'appel ne peut plus fonctionner== [18]. Un pays condamné en première instance peut désormais faire appel « dans le vide » et bloquer toute décision.",
            "Pour contourner la panne, l'Union européenne et d'autres membres ont créé en 2020 un mécanisme d'arbitrage provisoire. Mais les États-Unis et la Chine n'y participent pas. Résultat : les conflits commerciaux se règlent de plus en plus ==par la force, avec des droits de douane et des représailles, plutôt que par le droit==, comme on l'a vu avec la guerre commerciale sino-américaine depuis 2018 et le « Liberation Day » de 2025."
          ]
        },
        {
          title: "Les arguments pour, les arguments contre",
          paragraphs: [
            "==Pour les droits de douane== : protéger une ==industrie naissante== le temps qu'elle devienne compétitive (c'est ainsi que la Corée du Sud ou les États-Unis du XIXe siècle se sont industrialisés), protéger des secteurs ==stratégiques== (acier, puces, médicaments, défense), répondre à une concurrence jugée ==déloyale== (subventions, dumping), et préserver des ==emplois== et des régions.",
            "==Contre== : les droits de douane font ==payer les consommateurs== (voir plus haut), renchérissent les ==pièces importées== pour les entreprises du pays, invitent aux ==représailles==, et peuvent protéger des entreprises ==inefficaces== qui n'innovent plus. Ils frappent souvent plus durement les ménages modestes, qui consacrent une plus grande part de leur budget aux biens importés.",
            "La plupart des économistes concluent que ==les droits de douane sont un outil coûteux pour protéger des emplois==, et qu'il vaut souvent mieux aider directement les travailleurs touchés (formation, aides à la reconversion). Mais la montée des tensions géopolitiques a remis au goût du jour l'argument de la ==sécurité== : dépendre d'un rival pour des produits vitaux peut coûter plus cher qu'un droit de douane."
          ],
          example: {
            title: "Lire une annonce de droits de douane",
            text: "Face à une annonce, pose cinq questions : 1) Quel produit, et quel pays ? 2) Quel taux, et à partir de quand ? 3) Qui importe ce produit, et pourra-t-il le trouver ailleurs ? 4) Le pays visé va-t-il riposter, et sur quoi ? 5) Quelle est la base juridique (sécurité nationale, dumping, mesure d'urgence) ? Une base fragile peut être annulée en justice, comme l'ont été les droits « IEEPA » américains en février 2026."
          }
        }
      ],
      forMe: "Ton smartphone, tes vêtements, ton électroménager ou les pièces de ta voiture traversent souvent plusieurs frontières avant d'arriver chez toi. Chaque droit de douane ajouté en chemin finit en grande partie dans le prix que tu paies en magasin. Et si l'Europe est visée par des taxes, ce sont aussi des entreprises européennes qui exportent (vin, luxe, aéronautique) qui perdent des clients, avec des emplois en jeu.",
      figures: [
        { value: "96 %", label: "du coût des taxes américaines de 2025 payé par les acheteurs américains (Institut de Kiel)" },
        { value: "+12 %", label: "le prix des machines à laver aux États-Unis après la taxe de 2018" },
        { value: "1930", label: "Smoot-Hawley, le contre-exemple historique" },
        { value: "173 Md$", label: "de droits de douane encaissés par les États-Unis sur l'exercice 2026 (USAFacts)" },
        { value: "> 20 000", label: "produits touchés par la loi Smoot-Hawley de juin 1930", src: 15 },
        { value: "≈ 22 % → ≈ 5 %", label: "droits de douane moyens des grands pays industrialisés, de 1947 à l'après-cycle de l'Uruguay", src: 16 }
      ],
      terms: ["droits-de-douane", "protectionnisme", "libre-echange", "mondialisation"],
      quiz: [
        {
          q: "Qui verse concrètement un droit de douane ?",
          options: ["Le pays qui exporte", "L'entreprise qui importe", "L'Organisation mondiale du commerce", "Personne, c'est symbolique"],
          answer: 1,
          explain: "C'est l'importateur qui paie à la frontière. Il répercute ensuite la plus grande partie de la taxe sur ses clients."
        },
        {
          q: "Un magasin importe un produit à 100 € taxé à 20 %. Que se passe-t-il le plus souvent ?",
          options: ["Le pays exportateur rembourse les 20 €", "Le prix en magasin augmente", "Le produit devient moins cher", "Rien ne change"],
          answer: 1,
          explain: "Le magasin paie 20 € de taxe et, pour garder sa marge, il augmente son prix de vente. Le consommateur paie la plus grande partie de la taxe."
        },
        {
          q: "Le contraire du protectionnisme, c'est…",
          options: ["le libre-échange", "le communisme", "l'inflation", "l'embargo"],
          answer: 0,
          explain: "Le libre-échange consiste à réduire au maximum les barrières (taxes, quotas) entre pays pour faciliter le commerce."
        },
        { q: "Que montre l'exemple du vin et du drap de Ricardo (1817) ?", options: ["Qu'il faut tout produire soi-même", "Que deux pays gagnent à se spécialiser et à échanger, même si l'un est meilleur partout", "Que le vin est plus rentable que le drap", "Que l'Angleterre devait taxer le vin"], answer: 1, explain: "C'est la théorie des avantages comparatifs : on se spécialise là où son désavantage est le plus faible." },
        { q: "Quel a été l'effet de la loi américaine Smoot-Hawley de 1930 ?", options: ["Elle a mis fin à la Grande Dépression", "Elle a relevé les droits sur plus de 20 000 produits et provoqué des représailles", "Elle a créé l'OMC", "Elle a supprimé tous les droits de douane"], answer: 1, explain: "Elle n'a pas causé la crise, mais elle l'a aggravée en fermant les débouchés." },
        { q: "Pourquoi l'organe d'appel de l'OMC ne fonctionne-t-il plus depuis décembre 2019 ?", options: ["Faute d'argent", "Les États-Unis bloquent la nomination de nouveaux juges", "La Chine l'a quitté", "Il a été dissous par vote"], answer: 1, explain: "Faute de quorum, un pays condamné peut faire appel « dans le vide » et bloquer la décision." },
        { q: "Qu'est devenue la taxe américaine de 25 % sur les camionnettes créée en 1964 ?", options: ["Elle a été supprimée en 1965", "Elle existe toujours", "Elle a été remplacée par une taxe sur le poulet", "Elle a été jugée illégale"], answer: 1, explain: "Née d'une dispute sur le poulet avec l'Europe, elle protège encore les pick-up construits aux États-Unis." }
      ],
      sources: [
        { short: "OMC", name: "Organisation mondiale du commerce, les droits de douane", url: "https://www.wto.org" },
        { short: "Commission européenne", name: "Commission européenne, droits compensateurs sur les voitures électriques chinoises (octobre 2024)", url: "https://policy.trade.ec.europa.eu" },
        { short: "Institut de Kiel", name: "Institut de Kiel, étude sur l'incidence des droits de douane américains, janvier 2026 (via Fortune)", url: "https://fortune.com/2026/01/20/americans-pay-nearly-all-of-tariff-burden-study" },
        { short: "CEPR", name: "Amiti, Redding et Weinstein, « Who's Paying for the US Tariffs? A Longer-Term Perspective », CEPR, 2019", url: "https://cepr.org/publications/dp14229" },
        { short: "NBC News", name: "NBC News, sur l'étude Flaaen, Hortaçsu et Tintelnot consacrée à la taxe sur les machines à laver (2019)", url: "https://www.nbcnews.com/business/consumer/trump-s-washing-machine-tariffs-are-costing-americans-almost-100-n999461" },
        { short: "Wikipedia", name: "« Liberation Day tariffs », Wikipedia (annonce du 2 avril 2025, taux par pays et méthode de calcul)", url: "https://en.wikipedia.org/wiki/Liberation_Day_tariffs" },
        { short: "USAFacts", name: "USAFacts, « How much revenue does the federal government collect from tariffs? » (exercices 2025 et 2026)", url: "https://usafacts.org/answers/how-much-revenue-does-the-federal-government-collect-from-tariffs/country/united-states/" },
        { short: "CBO", name: "Congressional Budget Office, Monthly Budget Review, juillet 2026", url: "https://www.cbo.gov/system/files/2026-08/61983-2026-07-MBR.pdf" },
        { short: "Covington", name: "Covington & Burling, « IEEPA Tariffs Terminated, Replacement Section 122 Tariffs Take Effect », février 2026", url: "https://www.cov.com/en/news-and-insights/insights/2026/02/ieepa-tariffs-terminated-replacement-section-122-tariffs-take-effect" },
        { short: "Sandler Travis", name: "Sandler, Travis & Rosenberg, « Section 122 Tariffs (Expired) » et taxes de la section 301 qui les remplacent", url: "https://www.strtrade.com/trade-news-resources/tariff-actions-resources/section-122-tariffs" },
        { short: "ABC News", name: "ABC News, « Tariffs will cost US households over $1,000 a year, Yale Budget Lab says », août 2026", url: "https://abcnews.com/Business/tariffs-cost-us-households-1000-year-yale-budget/story?id=135945432" },
        { short: "CNBC", name: "CNBC, « The uneven cost of tariffs: Why some households will pay more than others », mars 2026", url: "https://www.cnbc.com/2026/03/23/household-tariff-costs.html" },
        { short: "NPR/WGCU", name: "WGCU (NPR), « Trump administration announces $12 billion in one-time payments to farmers », 8 décembre 2025", url: "https://www.wgcu.org/2025-12-08/trump-administration-announces-12-billion-in-one-time-payments-to-farmers" },
        { short: "CNBC", name: "CNBC, « The odds of Trump's $2,000 tariff dividend checks are 'now effectively zero,' expert says », février 2026", url: "https://www.cnbc.com/2026/02/23/trumps-2000-tariff-dividend-checks-are-less-likely-experts-say.html" },
        { short: "NBER", name: "NBER, Mitchener, Wandschneider et O'Rourke, « The Smoot-Hawley Trade War », document de travail 28616", url: "https://nber.org/papers/w28616" },
        { short: "Encyclopédie canadienne", name: "L'Encyclopédie canadienne, « General Agreement on Tariffs and Trade (GATT) », et chronologie de l'OMC", url: "https://thecanadianencyclopedia.ca/en/article/general-agreement-on-tariffs-and-trade" },
        { short: "Cato Institute", name: "Cato Institute, « Why are pickups so expensive? Blame the chicken tax »", url: "https://www.cato.org/commentary/why-are-pickups-so-expensive-blame-chicken-tax" },
        { short: "American University", name: "American University Washington College of Law, « Last Day of the WTO Appellate Body », décembre 2019", url: "https://wcl.american.edu/impact/initiatives-programs/trade/news/last-day-of-the-wto-appellate-body" },
        { short: "Saylor Academy", name: "Saylor Academy, « International Economics: Theory and Policy », 2.2 The Theory of Comparative Advantage (exemple de Ricardo, 1817)", url: "https://saylordotorg.github.io/text_international-economics-theory-and-policy/s05-02-the-theory-of-comparative-adva.html" }
      ]
    },

    {
      id: "routes-maritimes",
      emoji: "🚢",
      theme: "geo",
      title: "Ormuz, Suez, Malacca : ces passages étroits qui tiennent l'économie mondiale",
      hook: "Une boîte en métal inventée en 1956, un canal fermé huit ans avec quinze navires piégés dedans, un porte-conteneurs coincé en travers pendant six jours, une sécheresse qui bloque des bateaux au Panama : quelques dizaines de kilomètres de mer suffisent à faire bondir les prix dans le monde entier. Voici pourquoi.",
      minutes: 15,
      piste: "verte",
      tldr: [
        "Environ 80 % des marchandises échangées dans le monde voyagent par bateau [1], grâce à une invention simple : le conteneur, dont le premier voyage date du 26 avril 1956 [7].",
        "Beaucoup de navires doivent passer par quelques détroits et canaux très étroits : Ormuz, Bab-el-Mandeb, Suez, Malacca, Panama. Environ un cinquième du pétrole mondial passait par Ormuz avant la crise de 2026 [2].",
        "Suez a été fermé de 1967 à 1975, piégeant une « flotte jaune » de navires pendant huit ans [5] ; en mars 2021, l'Ever Given l'a bloqué six jours, retenant environ 9,6 milliards de dollars de commerce par jour [4].",
        "Après les attaques houthies, les recettes du canal de Suez sont passées de 10,25 milliards de dollars en 2023 à environ 4 milliards en 2024 [6]. Au Panama, la sécheresse de 2023 a fait tomber le nombre de passages à 22 navires par jour [8].",
        "Pour la Chine, environ 80 % du pétrole importé passe par le détroit de Malacca : c'est le « dilemme de Malacca », formulé par le président Hu Jintao en 2003 [9]."
      ],
      sections: [
        {
          title: "La boîte qui a fait la mondialisation",
          paragraphs: [
            "Avant les années 1950, charger un navire était un travail énorme : des dockers portaient sacs, caisses et tonneaux un par un. Un bateau pouvait rester une semaine au port. Le transport coûtait si cher qu'il valait rarement la peine de produire loin de ses clients.",
            "Un transporteur routier américain, ==Malcom McLean==, a une idée simple : mettre la marchandise dans de grandes boîtes standard qu'on pose telles quelles sur un camion, un train ou un bateau. Le ==26 avril 1956==, son navire Ideal-X quitte Newark, près de New York, pour Houston avec ==58 conteneurs== à bord [7]. À l'arrivée, 58 camions les emportent directement [7].",
            "Le coût de chargement s'effondre : McLean calcule qu'il fallait environ 5,8 dollars par tonne pour charger un navire à la main en 1956, et une fraction de ce prix avec les conteneurs [7]. Les ports se transforment, les dockers disparaissent par milliers, et il devient rentable de fabriquer un téléphone en Asie pour le vendre en Europe.",
            "C'est pourquoi on dit souvent que ==la mondialisation tient dans une boîte==. Aujourd'hui, environ 80 % des marchandises échangées dans le monde, en volume, voyagent par la mer [1], et une grande partie dans des conteneurs. Mais cette efficacité a une faiblesse : tout passe par les mêmes routes, et ces routes ont des goulets d'étranglement."
          ]
        },
        {
          title: "Qu'est-ce qu'un « point de passage obligé » ?",
          paragraphs: [
            "Les spécialistes parlent de ==« chokepoints »== (points d'étranglement) : des passages étroits que les navires doivent emprunter, faute de quoi ils font un immense détour. Il peut s'agir de détroits naturels (Ormuz, Malacca, Bab-el-Mandeb, Gibraltar, le Bosphore) ou de canaux creusés par l'homme (Suez, Panama).",
            "Ils sont dangereux pour trois raisons. ==Un accident== peut les bloquer (un navire échoué). ==Un conflit== peut les fermer ou les rendre trop risqués (mines, missiles, piraterie). ==Le climat== peut les rendre impraticables (sécheresse, glaces). Dans chaque cas, les navires attendent ou font le tour, et cela coûte cher.",
            "Le coût ne se limite pas au carburant. Il faut payer ==les équipages== plus longtemps, ==l'assurance== monte dans les zones de guerre, des ==conteneurs vides== se retrouvent bloqués au mauvais endroit, et les usines qui attendent des pièces doivent ralentir. Au bout de la chaîne, ce sont les prix en magasin qui montent.",
            "Les marchés réagissent souvent ==avant même le blocage==. La simple menace de fermer Ormuz suffit à faire monter le prix du baril, car les acheteurs se couvrent contre le risque."
          ]
        },
        {
          title: "Le détroit d'Ormuz, le robinet du pétrole",
          paragraphs: [
            "Entre l'Iran et la péninsule arabique, le détroit d'Ormuz voit passer environ un cinquième du pétrole consommé dans le monde [2], venu d'Arabie saoudite, d'Irak, des Émirats, du Koweït ou du Qatar (pour le gaz).",
            "La moindre tension dans la région fait réagir les marchés : même sans blocage réel, la simple menace suffit à faire grimper le prix du baril.",
            "En 2026, le scénario redouté est devenu réalité : après les frappes américaines et israéliennes contre l'Iran, Téhéran a bloqué le détroit pendant des mois. Le baril a dépassé 100 dollars et le gazole a battu des records en Europe [3].",
            "Il existe quelques contournements : l'Arabie saoudite a un oléoduc vers la mer Rouge, les Émirats un autre vers le port de Fujaïrah, qui débouche après le détroit. Mais leur capacité ne suffit pas à remplacer tout le trafic d'Ormuz [2]. C'est pourquoi la plupart des pays riches gardent des ==stocks stratégiques de pétrole== (voir notre article sur les réserves stratégiques)."
          ]
        },
        {
          title: "Suez : un canal, trois crises",
          paragraphs: [
            "Le canal de Suez, en Égypte, relie la Méditerranée à la mer Rouge depuis 1869 : c'est le raccourci entre l'Europe et l'Asie, qui évite le tour de l'Afrique. Pour y accéder par le sud, il faut passer le détroit de Bab-el-Mandeb, au large du Yémen.",
            "==Juillet 1956== : le président égyptien Gamal Abdel Nasser nationalise le canal, jusque-là exploité par une compagnie franco-britannique. La France, le Royaume-Uni et Israël attaquent l'Égypte, mais doivent se retirer sous la pression des États-Unis et de l'URSS [10]. C'est la fin de l'époque où Londres et Paris pouvaient agir seuls au Moyen-Orient.",
            "==Juin 1967== : pendant la guerre des Six Jours, l'Égypte ferme le canal. Il le restera ==huit ans, jusqu'en juin 1975== [5]. Une quinzaine de navires marchands restent piégés dans le Grand Lac Amer, au milieu du canal. Couverts de sable, on les surnomme la ==« flotte jaune »==. Leurs équipages s'organisent, créent une association, un club de voile et même des « Jeux olympiques » en 1968 [5]. Seuls deux navires repartent par leurs propres moyens en 1975 [5].",
            "Pendant ces huit ans, le monde s'adapte : les compagnies pétrolières construisent des ==supertankers==, trop gros pour Suez, qui font le tour de l'Afrique de façon rentable. Une crise peut ainsi changer durablement la forme du commerce."
          ]
        },
        {
          title: "Mars 2021 : six jours avec l'Ever Given en travers",
          paragraphs: [
            "Le ==23 mars 2021==, par vent fort, le porte-conteneurs Ever Given, long de 400 mètres, s'échoue en travers du canal de Suez. Plus rien ne passe. Il faut six jours de dragage et de remorquage pour le libérer, le ==29 mars== [4].",
            "Pendant ce temps, plus de 300 navires font la queue de part et d'autre du canal [4]. Selon les estimations, environ ==9,6 milliards de dollars de marchandises par jour== sont retenus [4]. Certains armateurs décident de faire le tour de l'Afrique.",
            "Les effets durent bien plus que six jours : les navires arrivent tous en même temps dans les ports européens, qui saturent, et des conteneurs manquent en Asie. Dans un monde de ==« flux tendus »==, où les entreprises gardent très peu de stocks, un seul navire suffit à désorganiser des usines sur plusieurs continents.",
            "L'image du géant bloqué par un banc de sable est devenue le symbole de la ==fragilité des chaînes d'approvisionnement== mondiales, juste au moment où le Covid les avait déjà fragilisées."
          ],
          plain: {
            title: "comment un navire échoué fait monter un prix",
            steps: [
              "L'Ever Given bloque Suez pendant six jours ; des centaines de navires attendent [4].",
              "Les conteneurs arrivent en retard en Europe, puis tous en même temps : les ports saturent.",
              "Des conteneurs vides restent coincés en Europe alors que l'Asie en manque : le prix d'un transport de conteneur grimpe.",
              "Les entreprises paient plus cher le transport et répercutent une partie sur leurs prix de vente."
            ]
          }
        },
        {
          title: "La mer Rouge depuis 2023 : le grand détour",
          paragraphs: [
            "Fin 2023, en lien avec la guerre à Gaza, les rebelles houthis du Yémen commencent à attaquer des navires marchands en mer Rouge avec des missiles et des drones. Entre novembre 2023 et janvier 2024, plus de 100 navires sont visés, deux sont coulés et quatre marins tués [6].",
            "Beaucoup d'armateurs préfèrent contourner l'Afrique par le cap de Bonne-Espérance, soit environ 10 à 14 jours de trajet en plus. En 2024, le canal de Suez n'est plus emprunté que par environ 13 200 navires, ==deux fois moins qu'en 2023== [6].",
            "Pour l'Égypte, c'est un choc : le canal est l'une de ses principales sources de devises. Ses recettes passent ==de 10,25 milliards de dollars en 2023, un record, à environ 4 milliards en 2024== [6]. Un pays qui n'est pas en guerre perd ainsi plus de la moitié d'une ressource vitale à cause d'un conflit voisin.",
            "Cette crise montre que le contrôle d'un point de passage n'appartient pas seulement aux États : ==un groupe armé non étatique, avec des moyens limités, peut perturber le commerce mondial==."
          ]
        },
        {
          title: "Malacca : le dilemme chinois",
          paragraphs: [
            "Le détroit de Malacca, entre la Malaisie et l'Indonésie, est la grande autoroute entre l'océan Indien et le Pacifique. Une large part du commerce et du pétrole à destination de la Chine, du Japon et de la Corée y transite.",
            "Le ==29 novembre 2003==, le président chinois Hu Jintao s'inquiète devant les dirigeants du Parti : environ ==quatre cinquièmes du pétrole importé par la Chine passent par ce détroit== [9]. Si une puissance hostile, en pratique la marine américaine, le fermait en cas de crise (autour de Taïwan, par exemple), la Chine pourrait manquer d'énergie. La presse appelle ce problème le ==« dilemme de Malacca »== [9].",
            "Depuis, la Chine cherche des parades : oléoducs et gazoducs depuis la Russie, l'Asie centrale et la Birmanie, ports en eau profonde au Pakistan (Gwadar) et ailleurs dans le cadre des « Nouvelles routes de la soie », réserves stratégiques de pétrole, et une marine de guerre en forte croissance.",
            "Malacca montre qu'un détroit n'est pas seulement un enjeu économique : c'est ==un levier de puissance==. Celui qui peut le fermer, ou le protéger, pèse sur la stratégie des autres."
          ]
        },
        {
          title: "Panama : quand le climat ferme un canal",
          paragraphs: [
            "Le canal de Panama, ouvert en 1914, relie l'Atlantique au Pacifique. Contrairement à Suez, il n'est pas au niveau de la mer : les navires montent et descendent par des écluses, qui fonctionnent avec ==l'eau douce du lac Gatún==. Chaque passage vide une grande quantité d'eau du lac vers la mer.",
            "En 2023, une sécheresse aggravée par le phénomène climatique El Niño fait baisser le niveau du lac. L'autorité du canal doit limiter le nombre de navires et leur chargement : en novembre 2023, il ne passe plus que ==22 navires par jour==, alors qu'un jour normal peut en voir une quarantaine [8].",
            "Des navires attendent des semaines, certains paient très cher aux enchères pour passer plus tôt, d'autres font le détour par Suez ou le cap Horn. ==Une preuve que le climat aussi peut perturber le commerce mondial==. En 2026, avec un nouvel épisode El Niño, l'autorité a de nouveau réduit les passages, à 32 par jour en septembre [8].",
            "Le Panama étudie la création d'un nouveau réservoir pour sécuriser l'eau du canal. Mais il faut aussi de l'eau pour les habitants : ==le commerce mondial et l'eau potable entrent en concurrence==."
          ]
        },
        {
          title: "Qui contrôle les mers ?",
          paragraphs: [
            "Depuis 1945, c'est surtout ==la marine américaine== qui garantit la libre circulation sur les grandes routes maritimes, avec des flottes déployées en Méditerranée, dans le Golfe et dans le Pacifique. Les pays qui commercent profitent de cette sécurité, souvent sans la payer.",
            "Cette situation change. La ==Chine== a fortement agrandi sa marine et développe des ports le long de ses routes commerciales. L'==Inde== surveille l'océan Indien. Des pays comme la ==France== ou le Royaume-Uni gardent des bases et des missions de protection, comme l'opération européenne Aspides en mer Rouge à partir de 2024.",
            "Le droit compte aussi. La ==Convention des Nations unies sur le droit de la mer== (1982) garantit le « passage en transit » des navires dans les détroits internationaux, même s'ils traversent les eaux d'un État. Mais certains pays, comme l'Iran pour Ormuz, n'ont pas ratifié ce texte et contestent cette lecture.",
            "Retiens que ==la mer est libre tant que quelqu'un la protège==. Quand les puissances se disputent, les points de passage deviennent les premiers terrains de pression."
          ]
        },
        {
          title: "Demain : nouvelles routes, nouveaux risques",
          paragraphs: [
            "Avec le réchauffement climatique, la glace de l'Arctique fond l'été, et une ==route maritime du Nord== le long des côtes russes devient praticable une partie de l'année. Elle raccourcit fortement le trajet entre l'Asie et l'Europe, mais elle est contrôlée par la Russie, coûteuse (brise-glace, assurances) et risquée pour l'environnement.",
            "Les pays et les entreprises cherchent aussi à ==réduire leur dépendance aux goulets== : relocaliser une partie de la production (« nearshoring »), multiplier les fournisseurs, garder plus de stocks, développer le rail entre la Chine et l'Europe. Ces solutions coûtent plus cher que le « tout en flux tendu » d'avant 2020.",
            "Enfin, ==les câbles sous-marins== qui transportent internet suivent souvent les mêmes routes et passent par les mêmes détroits (voir notre article sur les câbles sous-marins). Un point de passage n'est donc pas seulement une route pour les marchandises : c'est aussi une route pour les données."
          ]
        }
      ],
      forMe: "Quand tu vois le prix de l'essence ou d'un produit importé bondir, regarde la carte : une crise dans un détroit lointain peut en être la cause. Et quand une entreprise annonce des retards de livraison, demande-toi par quel passage ses marchandises devaient passer.",
      figures: [
        { value: "≈ 80 %", label: "du commerce mondial (en volume) se fait par la mer", src: 1 },
        { value: "≈ 1/5", label: "du pétrole mondial passait par Ormuz avant 2026", src: 2 },
        { value: "8 ans", label: "de fermeture du canal de Suez, de 1967 à 1975", src: 5 },
        { value: "≈ 9,6 Md$", label: "de commerce retenu chaque jour par l'Ever Given en mars 2021", src: 4 },
        { value: "10,25 → ≈ 4 Md$", label: "recettes du canal de Suez en 2023, puis en 2024", src: 6 },
        { value: "≈ 80 %", label: "du pétrole importé par la Chine passe par Malacca (« dilemme de Malacca »)", src: 9 }
      ],
      terms: ["detroit", "chaine-appro", "opep", "mondialisation"],
      quiz: [
        { q: "Quel détroit est surnommé « le robinet du pétrole mondial » ?", options: ["Gibraltar", "Ormuz", "Malacca", "Le Bosphore"], answer: 1, explain: "Environ un cinquième du pétrole consommé dans le monde y passait avant la crise de 2026." },
        { q: "Pourquoi de nombreux navires ont-ils évité la mer Rouge à partir de fin 2023 ?", options: ["À cause de la glace", "À cause des attaques des rebelles houthis", "Le canal était en travaux", "Les droits de passage avaient doublé"], answer: 1, explain: "Ils ont préféré contourner l'Afrique, soit 10 à 14 jours de trajet en plus." },
        { q: "Quelle invention de 1956 a fait chuter le coût du transport maritime ?", options: ["Le moteur diesel", "Le conteneur", "Le GPS", "Le radar"], answer: 1, explain: "Le 26 avril 1956, l'Ideal-X de Malcom McLean emporte 58 conteneurs de Newark à Houston." },
        { q: "Combien de temps le canal de Suez est-il resté fermé après la guerre des Six Jours ?", options: ["Six jours", "Six mois", "Huit ans", "Vingt ans"], answer: 2, explain: "De juin 1967 à juin 1975 ; une quinzaine de navires, la « flotte jaune », y sont restés piégés." },
        { q: "Combien de temps l'Ever Given a-t-il bloqué Suez en 2021 ?", options: ["Six heures", "Six jours", "Six semaines", "Six mois"], answer: 1, explain: "Du 23 au 29 mars 2021 ; environ 9,6 milliards de dollars de commerce retenus par jour." },
        { q: "Que sont devenues les recettes du canal de Suez en 2024 ?", options: ["Elles ont doublé", "Elles sont passées d'environ 10 à environ 4 milliards de dollars", "Elles n'ont pas changé", "Le canal est devenu gratuit"], answer: 1, explain: "Le nombre de navires a été divisé par deux à cause des attaques en mer Rouge." },
        { q: "Qu'est-ce que le « dilemme de Malacca » ?", options: ["Un problème de pêche", "La dépendance de la Chine à un détroit par où passe environ 80 % de son pétrole importé", "Un conflit entre la Malaisie et l'Indonésie", "Une route pour l'Arctique"], answer: 1, explain: "Formulé par Hu Jintao en 2003 : la Chine cherche depuis des routes de contournement." },
        { q: "Pourquoi le canal de Panama a-t-il dû limiter les passages en 2023 ?", options: ["Une grève", "Une sécheresse qui a fait baisser le lac qui alimente les écluses", "Une guerre", "Un navire échoué"], answer: 1, explain: "En novembre 2023, il ne passait plus que 22 navires par jour." }
      ],
      sources: [
        { short: "CNUCED", name: "CNUCED, Review of Maritime Transport", url: "https://unctad.org/topic/transport-and-trade-logistics/review-of-maritime-transport" },
        { short: "EIA", name: "Agence américaine d'information sur l'énergie, « World Oil Transit Chokepoints »", url: "https://www.eia.gov/international/analysis/special-topics/World_Oil_Transit_Chokepoints" },
        { short: "House of Commons Library", name: "House of Commons Library, crise d'Ormuz 2026", url: "https://commonslibrary.parliament.uk/research-briefings/cbp-10636/" },
        { short: "Port Economics", name: "Port Economics, Management and Policy, « Blockage of the Suez Canal, March 2021 »", url: "https://porteconomicsmanagement.org/suez-canal-blockage-2021/" },
        { short: "IMarEST", name: "IMarEST (Institute of Marine Engineering, Science and Technology), « The Suez Great Bitter Lake saga »", url: "https://www.imarest.org/resource/the-suez-great-bitter-lake-saga.html" },
        { short: "Euronews", name: "Euronews, « Egypt's Suez Canal revenue fell sharply in 2024 on regional tensions », 17 avril 2025", url: "https://www.euronews.com/2025/04/17/egypts-suez-canal-revenue-fell-sharply-in-2024-on-regional-tensions" },
        { short: "Transport Geography", name: "The Geography of Transport Systems, « First Containership, Ideal-X, 1956 »", url: "https://transportgeography.org/contents/chapter1/the-setting-of-global-transportation-systems/idealx-first-containeriship-1956/" },
        { short: "Maritime Executive", name: "The Maritime Executive, « Panama Canal Begins Reducing Daily Transits Due to Declining Water Levels », et MercoPress, 31 août 2026", url: "https://maritime-executive.com/article/panama-canal-begins-reducing-daily-transits-due-to-declining-water-levels" },
        { short: "ISDP", name: "Institute for Security and Development Policy, « Alleviating China's Malacca Dilemma »", url: "https://www.isdp.eu/alleviating-chinas-malacca-dilemma/" },
        { short: "Britannica", name: "Encyclopædia Britannica, « Suez Crisis »", url: "https://www.britannica.com/event/Suez-Crisis" }
      ],
      visuals: [
        { kind: "map", title: "Les passages qui tiennent le commerce mondial", intro: "Touche un passage pour zoomer dessus.", points: [{ name: "Ormuz", coords: [56.4, 26.5], zoom: 10, text: "Entre l'Iran et Oman. Environ un cinquième du pétrole consommé dans le monde y passait avant la crise de 2026 (EIA)." }, { name: "Bab-el-Mandeb", coords: [43.33, 12.6], zoom: 10, text: "Entre le Yémen et Djibouti, l'entrée sud de la mer Rouge. Zone des attaques houthies depuis fin 2023." }, { name: "Suez", coords: [32.35, 30.6], zoom: 10, text: "Le canal égyptien relie la Méditerranée à la mer Rouge : le raccourci entre l'Europe et l'Asie. Fermé de 1967 à 1975, bloqué six jours en mars 2021." }, { name: "Cap de Bonne-Espérance", coords: [18.47, -34.36], zoom: 16, text: "Le détour par le sud de l'Afrique quand la mer Rouge est trop dangereuse : environ 10 à 14 jours de mer en plus." }, { name: "Malacca", coords: [100.9, 2.6], zoom: 14, text: "Entre la Malaisie et l'Indonésie : l'autoroute entre l'océan Indien et le Pacifique ; environ 80 % du pétrole importé par la Chine y passe." }, { name: "Panama", coords: [-79.7, 9.1], zoom: 10, text: "Le canal relie l'Atlantique au Pacifique. Il fonctionne avec l'eau douce du lac Gatún : la sécheresse de 2023 a forcé à limiter les passages à 22 par jour." }, { name: "Newark", coords: [-74.15, 40.69], zoom: 10, text: "Le 26 avril 1956, l'Ideal-X part d'ici avec 58 conteneurs : le début du transport par conteneurs." }], source: "EIA ; CNUCED ; autorités des canaux" },
        { kind: "chart", type: "bar", title: "Suez a perdu plus de la moitié de ses recettes", subtitle: "Recettes annuelles du canal de Suez, en milliards de dollars", xLabel: "Année", unit: "Milliards de dollars", suffix: " Md$", data: [["2023", 10.25], ["2024", 3.99]], source: "Autorité du canal de Suez, via Euronews" }
      ]
    },
    {
      id: "semi-conducteurs",
      plus: true, // cours d'approfondissement : réservé à Geonomix+
      emoji: "💾",
      theme: "mix",
      title: "Puces électroniques : pourquoi Taïwan est au cœur du monde",
      hook: "Ton téléphone, ta voiture et l'intelligence artificielle dépendent de minuscules puces fabriquées en grande partie sur une seule île. Comment un objet inventé en 1947 est devenu l'enjeu d'une rivalité entre les États-Unis et la Chine, pourquoi le Japon a perdu sa place, et pourquoi on parle de « bouclier de silicium » ?",
      minutes: 14,
      piste: "bleue",
      tldr: [
        "Les semi-conducteurs (ou puces) sont le « cerveau » de presque tous les objets électroniques. Le premier microprocesseur, l'Intel 4004 de 1971, comptait environ 2 300 transistors ; une puce d'IA de Nvidia en 2024 en compte 208 milliards [5].",
        "En 2021, 92 % des capacités de production des puces les plus avancées (sous 10 nanomètres) étaient à Taïwan, le reste en Corée du Sud [3]. TSMC, fondée en 1987, en est le géant.",
        "La pénurie de 2021 a coûté environ 210 milliards de dollars de ventes à l'automobile et fait manquer 7,7 millions de voitures [6].",
        "Depuis le 7 octobre 2022, les États-Unis limitent fortement l'accès de la Chine aux puces et machines avancées [7] ; en août 2023, Huawei surprend avec un téléphone doté d'une puce chinoise gravée en 7 nanomètres [8].",
        "Les États-Unis (CHIPS Act, 52,7 milliards de dollars, août 2022) et l'Europe (European Chips Act, plus de 43 milliards d'euros, objectif 20 % du marché mondial en 2030) subventionnent leurs usines [2][9]."
      ],
      sections: [
        {
          title: "Une chaîne mondiale ultra-spécialisée",
          paragraphs: [
            "Fabriquer une puce mobilise plusieurs pays : la conception est souvent américaine (Nvidia, Apple, Qualcomm), les machines les plus pointues sont néerlandaises (ASML est le seul fabricant au monde des machines de lithographie EUV), et la fabrication des puces les plus fines se fait à Taïwan.",
            "Cette spécialisation est très efficace, mais elle crée des points de fragilité : si un maillon casse, toute la chaîne s'arrête. La pénurie de puces de 2021 a par exemple bloqué des usines automobiles dans le monde entier.",
            "Une puce passe par des centaines d'étapes : on part d'un ==disque de silicium ultra-pur== (le « wafer »), sur lequel on grave des circuits par couches successives avec de la lumière, des produits chimiques et des gaz. Les usines, appelées ==« fabs »==, coûtent plus de 20 milliards de dollars pour les plus modernes et doivent être plus propres qu'un bloc opératoire.",
            "Aucun pays ne maîtrise toute la chaîne. Les États-Unis dominent la conception et les logiciels de conception, le Japon et l'Europe les machines et les produits chimiques, Taïwan et la Corée du Sud la fabrication avancée, la Chine l'assemblage et les puces plus simples [3]. ==Chaque pays tient une partie de l'otage.=="
          ]
        },
        {
          title: "1947-1971 : du transistor au microprocesseur",
          paragraphs: [
            "Tout commence en ==décembre 1947== aux Laboratoires Bell, près de New York : trois chercheurs, John Bardeen, Walter Brattain et William Shockley, mettent au point le ==transistor==, un minuscule interrupteur électrique sans pièce mobile. Il remplace les lampes à vide, grosses, fragiles et gourmandes. Ils recevront le prix Nobel de physique en 1956.",
            "À la fin des années 1950, Jack Kilby (Texas Instruments) et Robert Noyce (Fairchild) ont l'idée de graver plusieurs transistors sur une même plaque : c'est le ==circuit intégré==, la première « puce ». Shockley s'installe en Californie ; ses anciens employés fondent Fairchild, puis Intel : la ==Silicon Valley== est née.",
            "En 1965, Gordon Moore, futur cofondateur d'Intel, remarque que le nombre de transistors sur une puce double à intervalles réguliers. Cette ==« loi de Moore »==, qui est une observation et non une loi physique, guide l'industrie pendant cinquante ans : tous les deux ans environ, les puces deviennent deux fois plus denses.",
            "Le 15 novembre 1971, Intel commercialise le ==4004==, le premier microprocesseur vendu au public : environ ==2 300 transistors== [5]. En 2024, la puce Blackwell de Nvidia, conçue pour l'intelligence artificielle, en compte ==208 milliards== [5], soit environ 90 millions de fois plus."
          ],
          plain: {
            title: "ce qu'est un transistor",
            steps: [
              "Un transistor est un interrupteur minuscule : il laisse passer le courant (1) ou le bloque (0).",
              "En combinant des milliers d'interrupteurs, on peut additionner, comparer, mémoriser : c'est le langage binaire des ordinateurs.",
              "Plus les transistors sont petits, plus on en met sur une puce, et plus elle calcule vite en consommant peu.",
              "D'environ 2 300 transistors en 1971 à 208 milliards en 2024 [5] : c'est ce qui a rendu possibles les smartphones et l'IA."
            ]
          }
        },
        {
          title: "Les années 1980 : quand le Japon dominait",
          paragraphs: [
            "On l'a oublié, mais dans les années 1980, le leader mondial des puces n'est pas Taïwan : c'est le ==Japon==. Ses géants (NEC, Toshiba, Hitachi, Fujitsu) produisent des puces mémoire de grande qualité à bas prix. Entre 1980 et 1989, la part japonaise du marché mondial passe d'environ 27 % à 52 %, tandis que celle des États-Unis tombe de 57 % à 35 % [10].",
            "Washington y voit une menace pour sa sécurité : l'armée américaine dépend de puces japonaises. Le ==2 septembre 1986==, sous la pression américaine, le Japon signe un accord sur les semi-conducteurs : il s'engage à ne plus vendre à perte à l'étranger et à ouvrir son marché aux puces étrangères [10]. En 1987, les États-Unis imposent même des droits de douane de 100 % sur certains produits électroniques japonais.",
            "Dans les années suivantes, l'industrie japonaise décline, prise en étau entre les accords, l'éclatement de sa bulle financière et la montée de concurrents coréens (Samsung) et taïwanais. ==C'est un précédent important== : les États-Unis ont déjà utilisé le commerce pour freiner un rival technologique, bien avant la Chine."
          ]
        },
        {
          title: "1987 : TSMC et l'invention de la « fonderie »",
          paragraphs: [
            "En 1987, à Taïwan, l'ingénieur ==Morris Chang==, passé par Texas Instruments, fonde TSMC avec le soutien de l'État taïwanais. Son idée est nouvelle : ne concevoir ==aucune puce à son nom== et fabriquer celles des autres. C'est le modèle de la ==« fonderie pure »== : TSMC ne fait jamais concurrence à ses clients [4].",
            "Ce modèle libère les inventeurs : une entreprise peut concevoir des puces sans dépenser des dizaines de milliards dans une usine. Apple, Nvidia, AMD ou Qualcomm deviennent des entreprises « sans usine » (« fabless »), qui confient la fabrication à TSMC.",
            "En se consacrant entièrement à la fabrication, TSMC accumule une expérience que personne ne rattrape. En 2021, selon l'association américaine du secteur et le cabinet BCG, ==92 % des capacités mondiales de production des puces les plus avancées== (sous 10 nanomètres) sont à Taïwan, et les 8 % restants en Corée du Sud [3]. Intel, l'ancien roi, a pris du retard.",
            "D'où la formule souvent entendue : ==les puces les plus avancées du monde sont fabriquées sur une île de 36 000 km², à environ 130 km de la Chine continentale.=="
          ]
        },
        {
          title: "Pourquoi Taïwan est si sensible",
          paragraphs: [
            "La Chine considère Taïwan comme une partie de son territoire et n'exclut pas d'en reprendre le contrôle. Les États-Unis, eux, soutiennent l'île sur le plan militaire.",
            "Une crise autour de Taïwan ne serait donc pas seulement un conflit régional : elle pourrait priver le monde de la majorité de ses puces avancées. Certains parlent de ==« bouclier de silicium »== : l'importance de TSMC protégerait l'île, car personne n'a intérêt à ce que sa production s'arrête.",
            "Ce bouclier a ses limites. Une usine de puces ne se capture pas comme un puits de pétrole : elle dépend de machines étrangères, de pièces de rechange, de logiciels et d'ingénieurs. En cas d'invasion, elle s'arrêterait probablement d'elle-même. Certains responsables américains ont même évoqué l'idée de rendre les usines inutilisables plutôt que de les laisser tomber aux mains de Pékin.",
            "Pour réduire le risque, TSMC construit aussi des usines à l'étranger : en Arizona aux États-Unis, au Japon, en Allemagne à Dresde. Mais les puces les plus avancées restent d'abord produites à Taïwan."
          ]
        },
        {
          title: "2021 : la pénurie qui a arrêté les usines",
          paragraphs: [
            "Au début de la pandémie, en 2020, les constructeurs automobiles annulent leurs commandes de puces, pensant vendre moins de voitures. Au même moment, tout le monde achète ordinateurs, consoles et téléphones pour le télétravail. Les fondeurs réaffectent leur production.",
            "Quand la demande de voitures repart, il n'y a plus de puces. Une voiture moderne en contient des centaines, pour les freins, les vitres, l'écran ou le moteur. Les usines s'arrêtent, des voitures presque finies attendent sur les parkings. Selon le cabinet AlixPartners, la pénurie fait perdre environ ==210 milliards de dollars de ventes== aux constructeurs en 2021 et empêche de fabriquer ==7,7 millions de véhicules== [6].",
            "La crise a plusieurs causes cumulées : la demande liée au télétravail et à la 5G, des usines touchées par des incendies ou des sécheresses, et les sanctions américaines contre Huawei, qui ont poussé des entreprises à stocker massivement des puces [6]. Elle révèle aux gouvernements que ==des puces à quelques dollars peuvent bloquer des industries entières==."
          ]
        },
        {
          title: "La guerre des puces entre Washington et Pékin",
          paragraphs: [
            "Le ==7 octobre 2022==, le département américain du Commerce publie des règles d'exportation sans précédent : il interdit de vendre à la Chine les puces les plus puissantes pour l'IA, les machines pour fabriquer des puces avancées, et même l'aide d'ingénieurs américains à des usines chinoises de pointe [7]. Les Pays-Bas et le Japon, qui fabriquent les machines indispensables, suivent avec leurs propres restrictions.",
            "L'objectif est clair : ==empêcher la Chine de rattraper son retard== dans les puces les plus fines, essentielles pour l'IA et l'armement. La Chine riposte en limitant à partir de l'été 2023 ses exportations de gallium et de germanium, deux métaux utilisés dans l'électronique dont elle est le premier producteur.",
            "Le ==29 août 2023==, coup de théâtre : Huawei lance le Mate 60 Pro, un téléphone équipé d'une puce conçue par sa filiale HiSilicon et ==fabriquée en Chine par SMIC, avec une finesse de 7 nanomètres== [8]. Les contrôles visaient justement à bloquer la Chine au-delà de 10 nanomètres [8]. SMIC y est parvenu avec des machines plus anciennes, au prix d'un rendement plus faible.",
            "Le débat reste ouvert : les restrictions ralentissent-elles vraiment la Chine, ou la poussent-elles à développer plus vite sa propre industrie ? Probablement les deux à la fois : la Chine reste en retard sur les puces les plus avancées, mais investit des sommes considérables pour ne plus dépendre de l'étranger."
          ],
          plain: {
            title: "pourquoi une machine néerlandaise compte autant",
            steps: [
              "Pour graver les puces les plus fines, il faut une lumière ultraviolette extrême (EUV), produite par des machines d'ASML, seul fabricant au monde.",
              "Les Pays-Bas, alliés des États-Unis, interdisent de vendre ces machines à la Chine.",
              "Sans elles, les usines chinoises doivent utiliser d'anciennes machines plusieurs fois de suite pour graver plus fin : c'est possible, mais plus lent et plus cher.",
              "La Chine parvient au 7 nanomètres en 2023 [8], mais reste derrière TSMC, qui produit déjà plus fin à grande échelle."
            ]
          }
        },
        {
          title: "La course à la souveraineté",
          paragraphs: [
            "Les États-Unis adoptent le ==CHIPS and Science Act en août 2022== : 52,7 milliards de dollars pour la fabrication, la recherche et la formation, dont 39 milliards d'aides aux usines [9]. Intel, TSMC, Samsung et Micron annoncent des usines sur le sol américain.",
            "L'Union européenne répond avec le ==European Chips Act==, approuvé en 2023 : il vise à mobiliser plus de ==43 milliards d'euros== d'investissements publics et privés, avec l'objectif de doubler la part européenne du marché mondial pour atteindre ==20 % en 2030== [2][9]. L'Europe ne pèse aujourd'hui qu'environ 10 % du marché ou moins, selon les estimations [9].",
            "Ces plans suscitent des doutes : une grande partie de l'argent européen n'est pas nouvelle mais redéployée depuis d'autres budgets [9], les usines manquent d'ingénieurs, et certains projets ont été reportés. Construire une usine prend des années, et rattraper l'avance de TSMC en prendrait davantage.",
            "Le Japon, la Corée du Sud, l'Inde et la Chine ont aussi lancé leurs propres plans. On assiste à un tournant : après trente ans de mondialisation où chacun se spécialisait, ==les États veulent produire chez eux ce qu'ils jugent vital==, même si cela coûte plus cher."
          ]
        },
        {
          title: "L'IA, nouvelle ruée vers l'or",
          paragraphs: [
            "Depuis l'arrivée des grands modèles d'intelligence artificielle, la demande de puces spécialisées explose. Les ==processeurs graphiques== de Nvidia, conçus à l'origine pour les jeux vidéo, se révèlent parfaits pour entraîner ces modèles, car ils font des milliers de calculs en parallèle.",
            "Nvidia, qui ne fabrique pas ses puces (c'est TSMC qui s'en charge [5]), devient l'une des entreprises les plus chères du monde. Les grands groupes du numérique dépensent des dizaines de milliards de dollars par an en centres de données remplis de ces puces.",
            "Cette ruée renforce encore le rôle de Taïwan et la tension géopolitique : les puces d'IA les plus puissantes sont précisément celles que les États-Unis interdisent d'exporter vers la Chine [7]. ==Les puces sont devenues pour le XXIe siècle ce que le pétrole était pour le XXe== : une ressource dont dépend la puissance, et que les États veulent contrôler."
          ]
        }
      ],
      forMe: "Chaque fois que tu achètes un téléphone, une console ou une voiture, une partie de son prix et de sa disponibilité dépend de quelques usines à Taïwan et de machines fabriquées aux Pays-Bas. Quand tu entends parler de tensions dans le détroit de Taïwan ou de nouvelles restrictions sur les puces, c'est aussi de tes futurs achats qu'il s'agit.",
      figures: [
        { value: "≈ 90 %", label: "des puces les plus avancées sont produites à Taïwan" },
        { value: "1", label: "seul fabricant de machines EUV au monde : ASML (Pays-Bas)" },
        { value: "2 300 → 208 Md", label: "transistors : Intel 4004 (1971), puis puce Blackwell de Nvidia (2024)", src: 5 },
        { value: "92 %", label: "des capacités de production sous 10 nanomètres à Taïwan en 2021", src: 3 },
        { value: "≈ 210 Md$", label: "de ventes perdues par l'automobile à cause de la pénurie de 2021", src: 6 },
        { value: "20 %", label: "la part du marché mondial visée par l'Europe en 2030", src: 9 }
      ],
      terms: ["semi-conducteur", "souverainete", "dependance", "chaine-appro"],
      quiz: [
        { q: "Quelle entreprise fabrique la majorité des puces les plus avancées ?", options: ["Intel", "Samsung", "TSMC", "Nvidia"], answer: 2, explain: "TSMC, à Taïwan, fabrique les puces conçues par Apple, Nvidia, AMD et bien d'autres." },
        { q: "Que désigne le « bouclier de silicium » ?", options: ["Une protection anti-virus", "L'idée que l'importance de TSMC protège Taïwan d'une attaque", "Un satellite militaire", "Un traité de 1986"], answer: 1, explain: "Personne n'aurait intérêt à arrêter la production des puces les plus avancées du monde." },
        { q: "Où et quand le transistor a-t-il été inventé ?", options: ["À Taïwan en 1987", "Aux Laboratoires Bell en 1947", "Chez Intel en 1971", "Au Japon en 1986"], answer: 1, explain: "Bardeen, Brattain et Shockley, prix Nobel de physique 1956." },
        { q: "Que dit la « loi de Moore » (1965) ?", options: ["Les puces coûtent toujours plus cher", "Le nombre de transistors sur une puce double à intervalles réguliers", "Taïwan produira toutes les puces", "Les ordinateurs ralentissent"], answer: 1, explain: "Une observation qui a guidé l'industrie pendant cinquante ans." },
        { q: "Quel pays dominait le marché des puces à la fin des années 1980 ?", options: ["La Chine", "Le Japon", "Taïwan", "La France"], answer: 1, explain: "Sa part a dépassé 50 % ; l'accord de 1986 avec les États-Unis a marqué le début de son déclin." },
        { q: "Qu'est-ce que le modèle de la « fonderie pure » inventé par TSMC ?", options: ["Fondre du métal", "Fabriquer les puces conçues par d'autres sans jamais leur faire concurrence", "Vendre des puces sous sa propre marque", "Recycler les vieux téléphones"], answer: 1, explain: "Il a permis l'essor d'entreprises sans usine comme Nvidia ou Apple." },
        { q: "Pourquoi le Huawei Mate 60 Pro a-t-il surpris en août 2023 ?", options: ["Il était très bon marché", "Sa puce était fabriquée en Chine en 7 nanomètres, malgré les restrictions américaines", "Il n'avait pas d'écran", "Il était fabriqué par TSMC"], answer: 1, explain: "SMIC y est parvenu avec des machines plus anciennes ; les contrôles visaient à bloquer la Chine au-delà de 10 nanomètres." },
        { q: "Quel objectif s'est fixé l'Union européenne avec son Chips Act ?", options: ["5 % du marché mondial", "20 % du marché mondial en 2030", "Racheter TSMC", "Interdire les puces étrangères"], answer: 1, explain: "Doubler sa part de marché, avec plus de 43 milliards d'euros d'investissements visés." }
      ],
      sources: [
        { short: "SIA", name: "Semiconductor Industry Association", url: "https://www.semiconductors.org/" },
        { short: "Commission européenne", name: "Commission européenne, European Chips Act", url: "https://digital-strategy.ec.europa.eu/fr/policies/european-chips-act" },
        { short: "BCG et SIA", name: "BCG et Semiconductor Industry Association, « Strengthening the Global Semiconductor Supply Chain in an Uncertain Era », avril 2021", url: "https://www.semiconductors.org/wp-content/uploads/2021/05/BCG-x-SIA-Strengthening-the-Global-Semiconductor-Value-Chain-April-2021_1.pdf" },
        { short: "TrendForce", name: "TrendForce, « What is the global significance of the Taiwanese semiconductor industry's advanced processes? », juin 2021", url: "https://www.trendforce.com/news/2021/06/28/what-is-the-global-significance-of-the-taiwanese-semiconductor-industrys-advanced-processes/" },
        { short: "All About Circuits", name: "All About Circuits, « Nvidia Reveals Blackwell » (208 milliards de transistors), et ComputerBase, « Intel 4004 : 50 ans »", url: "https://www.allaboutcircuits.com/news/nvidia-reveals-blackwell-worlds-most-power-chip-for-ai/" },
        { short: "AlixPartners (via TechSpot)", name: "TechSpot, « Chip shortage hits auto industry hard, $210 billion loss expected in 2021 » (prévision d'AlixPartners, septembre 2021)", url: "https://www.techspot.com/news/91403-chip-shortage-hits-auto-industry-hard-210-billion.html" },
        { short: "Jones Day", name: "Jones Day, « U.S. Government Issues Sweeping Controls Relating to Semiconductors, Advanced Computing, and China », octobre 2022", url: "https://www.jonesday.com/en/insights/2022/10/us-government-issues-sweeping-controls-relating-to-semiconductors-advanced-computing-and-china" },
        { short: "CSIS", name: "CSIS, « Chip Race: China Gives Huawei the Steering Wheel: Huawei's New Smartphone and the Future of Semiconductor Export Controls », 2023", url: "https://www.csis.org/analysis/chip-race-china-gives-huawei-steering-wheel-huaweis-new-smartphone-and-future" },
        { short: "MVPro", name: "MVPro, « The Chips Acts: how the U.S. and EU are rebuilding semiconductor sovereignty differently »", url: "https://mvpromedia.com/the-chips-acts-how-the-u-s-and-eu-are-rebuilding-semiconductor-sovereignty-differently/" },
        { short: "Sénat américain", name: "Sénat des États-Unis, commission des Finances, audition 102-155 (1991) sur l'accord nippo-américain sur les semi-conducteurs", url: "https://www.finance.senate.gov/imo/media/doc/hrg102-155.pdf" }
      ],
      visuals: [
        { kind: "map", title: "Une puce, trois continents", intro: "Les étapes clés de la fabrication d'une puce avancée. Touche un lieu pour zoomer.", points: [{ name: "Santa Clara", coords: [-121.96, 37.35], zoom: 12, text: "La Silicon Valley, en Californie : c'est ici que Nvidia (entre autres) conçoit ses puces. Mais elle ne les fabrique pas." }, { name: "Veldhoven", coords: [5.4, 51.42], zoom: 12, text: "Aux Pays-Bas, siège d'ASML, seul fabricant au monde des machines de lithographie EUV indispensables aux puces les plus fines." }, { name: "Hsinchu", coords: [120.97, 24.8], zoom: 12, text: "Au nord de Taïwan, siège de TSMC (fondée en 1987), qui fabrique la très grande majorité des puces les plus avancées du monde." }, { name: "Détroit de Taïwan", coords: [119.6, 24.3], zoom: 9, text: "Environ 130 km au plus étroit séparent Taïwan de la Chine continentale." }, { name: "Shanghai", coords: [121.47, 31.23], zoom: 10, text: "Siège de SMIC, le principal fabricant chinois, qui a produit en 2023 une puce en 7 nanomètres pour Huawei malgré les restrictions américaines." }], source: "SIA ; sites des entreprises ; CSIS" },
        { kind: "chart", type: "bar", title: "Le Japon avait pris la première place", subtitle: "Part du marché mondial des semi-conducteurs", xLabel: "Pays et année", unit: "Part (%)", suffix: " %", data: [["Japon 1980", 27], ["Japon 1989", 52], ["États-Unis 1980", 57], ["États-Unis 1989", 35]], source: "Sénat des États-Unis, audition de 1991" }
      ]
    },
    {
      id: "sanctions",
      plus: true, // cours d'approfondissement : réservé à Geonomix+
      emoji: "🔒",
      theme: "geo",
      title: "Sanctions économiques : faire la guerre sans armes ?",
      hook: "Un embargo sur le pétrole qui pousse le Japon vers Pearl Harbor, des sanctions contre l'Italie de Mussolini qui oublient… le pétrole, des banques iraniennes coupées de SWIFT, une banque française condamnée à 8,9 milliards de dollars, et 300 milliards de réserves russes gelées. Comment marchent les sanctions, depuis quand, et est-ce qu'elles marchent vraiment ?",
      minutes: 16,
      piste: "bleue",
      tldr: [
        "Une sanction économique est une mesure qui coupe ou limite les échanges avec un pays, une entreprise ou une personne pour faire pression.",
        "Après l'invasion de l'Ukraine en 2022, l'Occident a gelé environ 300 milliards de dollars de réserves de la banque centrale russe et exclu plusieurs banques russes du système SWIFT [1] ; le 5 décembre 2022, le G7 et l'UE plafonnent le prix du pétrole russe à 60 dollars le baril [8].",
        "L'histoire est pleine de sanctions ratées : en 1935, la Société des Nations sanctionne l'Italie mais oublie le pétrole [4] ; en 1941, l'embargo pétrolier américain contre le Japon précède Pearl Harbor [5].",
        "Selon l'étude de référence de Hufbauer, Schott et Elliott, les sanctions atteignent leur but dans environ un tiers des cas (40 sur 115 entre 1914 et 1990), surtout quand l'objectif est modeste [3].",
        "Les États-Unis ont une arme unique : le dollar. En 2014, BNP Paribas plaide coupable et paie près de 9 milliards de dollars pour des opérations avec le Soudan, l'Iran et Cuba [7]."
      ],
      sections: [
        {
          title: "La boîte à outils",
          paragraphs: [
            "Il existe plusieurs types de sanctions : l'embargo (interdire d'acheter ou de vendre certains produits), le gel des avoirs (bloquer l'argent placé à l'étranger), l'interdiction de voyager pour certaines personnalités, ou l'exclusion du système financier international.",
            "Elles peuvent viser un pays entier ou des cibles précises : des oligarques, des entreprises d'armement, des banques.",
            "On distingue aussi les sanctions ==commerciales== (sur les marchandises), ==financières== (sur l'argent, les banques, les investissements) et ==technologiques== (interdire de vendre des puces, des logiciels, des machines). Les sanctions financières sont souvent les plus efficaces, car presque tout le commerce mondial passe par quelques monnaies et quelques réseaux bancaires.",
            "Qui sanctionne ? Le ==Conseil de sécurité de l'ONU== peut imposer des sanctions à tous les pays du monde, mais chacun des cinq membres permanents (États-Unis, Chine, Russie, France, Royaume-Uni) peut bloquer une décision par son veto. C'est pourquoi la plupart des sanctions sont aujourd'hui décidées par ==des pays ou des groupes de pays==, comme l'Union européenne, les États-Unis, le Royaume-Uni ou le G7 [1]."
          ]
        },
        {
          title: "Une très vieille arme",
          paragraphs: [
            "Les sanctions sont presque aussi anciennes que le commerce. Vers 432 avant notre ère, Athènes interdit aux marchands de la cité voisine de Mégare l'accès à ses ports et à ses marchés. L'historien grec Thucydide cite ce ==« décret de Mégare »== parmi les tensions qui mènent à la guerre du Péloponnèse.",
            "En 1806, Napoléon lance le ==Blocus continental== : il interdit à l'Europe qu'il domine de commercer avec le Royaume-Uni, pour ruiner son économie. Le blocus est largement contourné par la contrebande, nuit aux ports européens eux-mêmes, et pousse Napoléon à envahir la Russie en 1812 quand celle-ci refuse de l'appliquer.",
            "Ces deux exemples montrent déjà les deux faiblesses des sanctions : ==elles peuvent provoquer la guerre au lieu de l'éviter==, et ==elles ne marchent que si tout le monde les applique==."
          ]
        },
        {
          title: "1935 : les sanctions qui ont oublié le pétrole",
          paragraphs: [
            "Le 3 octobre 1935, l'Italie de Mussolini envahit l'Éthiopie. Le 11 octobre, la ==Société des Nations==, ancêtre de l'ONU, vote des sanctions économiques contre l'Italie : c'est la première fois qu'une organisation internationale sanctionne un de ses membres [4].",
            "Mais les sanctions oublient l'essentiel : ==le pétrole, dont l'armée italienne a absolument besoin, n'est pas sur la liste== [4]. Le Royaume-Uni et la France ne ferment pas non plus le canal de Suez, par où passent les troupes italiennes. Et les États-Unis, qui ne sont pas membres de la Société des Nations, continuent de commercer avec l'Italie [4].",
            "En décembre 1935, on apprend que les ministres britannique et français, Samuel Hoare et Pierre Laval, ont secrètement proposé de céder une partie de l'Éthiopie à l'Italie. Le scandale achève de discréditer la démarche. L'Italie conquiert l'Éthiopie et ==les sanctions sont levées en juillet 1936== [4].",
            "Pour beaucoup d'historiens, cet échec a montré à Hitler que les démocraties ne passeraient pas aux actes. ==Une sanction à moitié appliquée peut être pire que pas de sanction du tout==, car elle montre la faiblesse de ceux qui la décident."
          ]
        },
        {
          title: "1941 : l'embargo qui mène à Pearl Harbor",
          paragraphs: [
            "En juillet 1941, le Japon, en guerre en Chine, occupe le sud de l'Indochine française. Le 25-26 juillet, les États-Unis ==gèlent les avoirs japonais== sur leur sol ; le 1er août, ils interdisent les exportations de pétrole vers les pays agresseurs [5]. Le Royaume-Uni et les Pays-Bas, qui contrôlent le pétrole de l'Indonésie, suivent.",
            "Le Japon importe alors la très grande majorité de son pétrole, dont l'essentiel venait des États-Unis : selon les sources, il perd l'accès à 80 à 90 % de ses importations [5]. Ses dirigeants calculent que leurs stocks ne dureront pas deux ans.",
            "Ils ont deux options : ==se retirer d'Indochine et de Chine pour obtenir la levée des sanctions, ou prendre par la force le pétrole de l'Asie du Sud-Est==, ce qui suppose de neutraliser la flotte américaine [5]. Ils choisissent la guerre : le 7 décembre 1941, c'est l'attaque de Pearl Harbor.",
            "Les historiens discutent du poids exact de l'embargo dans cette décision, mais l'exemple est devenu un classique : ==une sanction qui menace la survie d'un pays peut le pousser à frapper plutôt qu'à céder==."
          ],
          plain: {
            title: "pourquoi une sanction peut provoquer une guerre",
            steps: [
              "Les États-Unis coupent le pétrole au Japon pour le forcer à arrêter son expansion [5].",
              "Le Japon calcule qu'il lui reste moins de deux ans de stocks : il doit choisir vite.",
              "Céder, c'est perdre la face et ses conquêtes ; prendre le pétrole de l'Indonésie, c'est la guerre avec les États-Unis.",
              "Il choisit la guerre : Pearl Harbor, 7 décembre 1941. La sanction n'a pas fait reculer le Japon, elle a accéléré sa décision."
            ]
          }
        },
        {
          title: "La guerre froide et l'apartheid",
          paragraphs: [
            "Après 1945, les sanctions deviennent un outil courant. En ==1962==, les États-Unis imposent un ==embargo total contre Cuba==, après la révolution castriste et les nationalisations de biens américains. Plus de soixante ans plus tard, il est toujours en place, et le régime cubain aussi : c'est l'exemple le plus cité d'une sanction qui dure sans atteindre son but.",
            "À l'inverse, les sanctions contre ==l'Afrique du Sud de l'apartheid== sont souvent citées comme un succès partiel. Dans les années 1980, de nombreux pays, entreprises et universités se retirent du pays ou coupent leurs investissements ; en 1986, le Congrès américain adopte des sanctions malgré le veto du président Reagan. L'économie sud-africaine souffre, et le régime négocie la fin de l'apartheid au début des années 1990.",
            "La différence ? En Afrique du Sud, ==les sanctions accompagnaient une forte pression intérieure== (mouvements de libération, grèves, Église) et touchaient une élite économique qui avait beaucoup à perdre. À Cuba, elles ont plutôt permis au régime de présenter les États-Unis comme responsables des difficultés du pays."
          ]
        },
        {
          title: "L'Irak des années 1990 et la naissance des sanctions « ciblées »",
          paragraphs: [
            "Après l'invasion du Koweït par l'Irak en 1990, l'ONU impose à l'Irak des sanctions parmi les plus sévères de l'histoire : presque tout commerce est interdit. Le régime de Saddam Hussein reste en place, mais la population souffre gravement : manque de médicaments, malnutrition, effondrement des services publics. À partir de 1996, un programme ==« pétrole contre nourriture »== permet à l'Irak de vendre du pétrole pour acheter des biens de première nécessité.",
            "Le constat choque : ==les sanctions générales frappent surtout les civils, pas les dirigeants==. D'où l'essor, dans les années 2000, des ==sanctions « ciblées » ou « intelligentes »== : on gèle les avoirs et interdit de voyager à des personnes précises (dirigeants, oligarques, militaires), on vise des secteurs (armement, pétrole, banques) plutôt que tout un pays.",
            "C'est ce modèle qui domine aujourd'hui, avec des listes de milliers de noms et d'entreprises, mises à jour régulièrement par l'Union européenne, les États-Unis ou le Royaume-Uni [1]."
          ]
        },
        {
          title: "L'arme financière : SWIFT et le dollar",
          paragraphs: [
            "==SWIFT== est une coopérative basée en Belgique qui gère la messagerie sécurisée utilisée par plus de 11 000 banques dans le monde pour leurs virements internationaux [2]. Ce n'est pas une banque, mais sans elle, un virement entre deux pays devient très compliqué.",
            "Le ==17 mars 2012==, pour la première fois, SWIFT déconnecte des banques à la demande des autorités : une trentaine de banques iraniennes visées par les sanctions européennes contre le programme nucléaire de l'Iran [6]. Son directeur parle d'une étape « extraordinaire et sans précédent » [6].",
            "Les États-Unis disposent d'une arme encore plus puissante : ==le dollar==. Presque tous les paiements en dollars passent à un moment par des banques américaines, soumises à la loi américaine. Une banque étrangère qui fait des opérations en dollars avec un pays sanctionné par Washington risque donc d'être poursuivie, même si son propre pays n'a rien interdit. C'est ce qu'on appelle ==l'extraterritorialité==, ou les « sanctions secondaires » (voir notre cours sur le dollar).",
            "Exemple marquant : en ==2014==, la banque française ==BNP Paribas== plaide coupable aux États-Unis et accepte de payer ==près de 8,9 milliards de dollars== pour avoir fait transiter des paiements en dollars liés au Soudan, à l'Iran et à Cuba entre 2004 et 2012 [7]. C'est alors la plus lourde sanction jamais obtenue par la justice américaine dans une affaire de sanctions économiques [7]. Pour l'Europe, c'est un choc : ses entreprises dépendent des décisions de Washington."
          ]
        },
        {
          title: "Le cas de la Russie",
          paragraphs: [
            "Après février 2022, l'Union européenne, les États-Unis et leurs alliés ont adopté des sanctions sans précédent : gel des réserves de la banque centrale russe, exclusion de banques de SWIFT (la messagerie qui permet les virements internationaux), embargo sur le pétrole russe transporté par mer et plafonnement de son prix.",
            "L'Europe a aussi fortement réduit ses achats de gaz russe, dont elle dépendait beaucoup, ce qui a contribué à la flambée des prix de l'énergie.",
            "Le ==5 décembre 2022==, deux mesures entrent en vigueur ensemble : l'embargo européen sur la plupart des importations de pétrole russe par bateau, et un ==plafond de prix de 60 dollars le baril== décidé par le G7, l'UE et l'Australie [8]. L'idée est astucieuse : plutôt que d'interdire le pétrole russe au monde entier (ce qui ferait flamber les prix), on autorise les autres pays à l'acheter, à condition de payer moins de 60 dollars ; sinon, les assureurs et transporteurs occidentaux n'ont pas le droit de s'en occuper [8].",
            "Les réserves russes gelées posent une question inédite : que faire de cet argent ? Le confisquer serait juridiquement risqué et pourrait inquiéter d'autres pays qui gardent leurs réserves en Occident. En juin 2024, le G7 trouve un compromis : un ==prêt de 50 milliards de dollars à l'Ukraine==, remboursé grâce aux intérêts produits par les avoirs russes gelés, sans toucher au capital [9]. La plus grande partie de ces avoirs est déposée chez Euroclear, en Belgique [9]."
          ]
        },
        {
          title: "Est-ce que ça marche ?",
          paragraphs: [
            "Oui et non. La Russie a perdu l'accès à des technologies et à une partie de ses revenus. Mais elle a redirigé ses ventes de pétrole vers la Chine et l'Inde, et utilise une « flotte fantôme » de vieux pétroliers pour contourner les règles.",
            "C'est la limite des sanctions : elles sont d'autant plus efficaces que beaucoup de pays les appliquent. Et elles ont aussi un coût pour ceux qui les imposent.",
            "L'étude de référence sur le sujet, menée par les économistes Gary Hufbauer, Jeffrey Schott et Kimberly Elliott, recense les sanctions du XXe siècle. Dans sa deuxième édition, elle juge que les sanctions ont atteint leur but dans ==40 cas sur 115 entre 1914 et 1990, soit environ un tiers== [3]. Les objectifs modestes (libérer un prisonnier, obtenir une concession) réussissent bien plus souvent que les grands objectifs (changer de régime, arrêter une guerre) [3].",
            "Ce chiffre est contesté : le politologue Robert Pape estime que seuls 5 des 40 succès en sont vraiment, les autres s'expliquant surtout par la menace de la force [3]. Retiens que ==les sanctions marchent rarement seules== : elles fonctionnent mieux quand elles sont rapides, larges, visent un objectif précis et s'accompagnent de diplomatie."
          ],
          example: {
            title: "Les conditions d'une sanction efficace",
            text: "Les études font ressortir quelques facteurs : 1) un objectif limité et clair ; 2) beaucoup de pays qui appliquent la sanction (sinon le pays visé commerce ailleurs) ; 3) un pays visé qui dépend fortement de ceux qui sanctionnent ; 4) des élites touchées personnellement ; 5) une porte de sortie : ce qu'il faut faire pour que la sanction soit levée."
          }
        },
        {
          title: "Les effets inattendus",
          paragraphs: [
            "==L'effet « drapeau »== : un régime sanctionné peut souder sa population autour de lui, en présentant les difficultés comme la faute de l'étranger. ==Le marché noir== enrichit souvent les proches du pouvoir, qui contrôlent la contrebande.",
            "==La dédollarisation== : à force d'utiliser le dollar comme arme, les États-Unis poussent certains pays (Chine, Russie, Iran) à développer d'autres circuits de paiement, à acheter de l'or et à commercer dans leurs propres monnaies. À long terme, les sanctions financières pourraient affaiblir l'outil qui les rend possibles.",
            "==Les coûts pour soi== : les entreprises européennes qui ont quitté la Russie en 2022 ont perdu des milliards, et les ménages européens ont payé l'énergie plus cher. Une sanction n'est jamais gratuite, ce qui rend les coalitions fragiles quand la crise dure.",
            "Enfin, ==les sanctions se lèvent rarement==. Une fois en place, les lever ressemble à une récompense ou à un aveu d'échec. Beaucoup durent des décennies, comme l'embargo contre Cuba."
          ]
        }
      ],
      forMe: "Quand tu entends parler d'un « nouveau paquet de sanctions », pose quatre questions : quel est l'objectif ? Qui l'applique, et qui ne l'applique pas ? Qui en paie le prix, y compris chez nous ? Et que doit faire le pays visé pour qu'on lève les sanctions ?",
      figures: [
        { value: "≈ 300 Md$", label: "de réserves russes immobilisées par l'Occident" },
        { value: "2022", label: "début des sanctions massives contre la Russie" },
        { value: "≈ 1/3", label: "des sanctions atteignent leur but (40 cas sur 115, 1914-1990)", src: 3 },
        { value: "60 $", label: "le plafond de prix du baril de pétrole russe fixé par le G7 et l'UE en décembre 2022", src: 8 },
        { value: "8,9 Md$", label: "payés par BNP Paribas en 2014 pour violation des sanctions américaines", src: 7 },
        { value: "50 Md$", label: "prêtés à l'Ukraine en 2024, remboursés par les intérêts des avoirs russes gelés", src: 9 }
      ],
      terms: ["sanctions", "embargo", "swift", "g7", "dependance"],
      quiz: [
        { q: "À quoi sert SWIFT ?", options: ["À fabriquer de la monnaie", "À échanger les messages des virements internationaux entre banques", "À voter des sanctions", "À transporter du pétrole"], answer: 1, explain: "C'est une messagerie sécurisée, pas une banque : en être exclu complique fortement les paiements internationaux." },
        { q: "Comment la Russie a-t-elle contourné une partie des sanctions sur son pétrole ?", options: ["En arrêtant d'en vendre", "En le vendant à la Chine et à l'Inde, avec une « flotte fantôme » de vieux pétroliers", "En le vendant à l'Europe", "En le stockant"], answer: 1, explain: "C'est la limite des sanctions : elles dépendent du nombre de pays qui les appliquent." },
        { q: "Qu'ont oublié les sanctions de la Société des Nations contre l'Italie en 1935 ?", options: ["Le blé", "Le pétrole", "Les armes", "Le textile"], answer: 1, explain: "Le pétrole, essentiel à l'armée italienne, n'était pas sur la liste ; les sanctions ont été levées en 1936." },
        { q: "Quelle sanction a précédé l'attaque de Pearl Harbor ?", options: ["Un embargo sur le riz", "Le gel des avoirs japonais et l'embargo pétrolier américain de l'été 1941", "L'exclusion de SWIFT", "Un plafond sur le prix de l'acier"], answer: 1, explain: "Le Japon a préféré prendre le pétrole de l'Asie du Sud-Est par la force plutôt que de céder." },
        { q: "Pourquoi a-t-on inventé les sanctions « ciblées » ?", options: ["Pour faire plus de bruit", "Parce que les sanctions générales, comme contre l'Irak dans les années 1990, frappaient surtout les civils", "Pour les rendre gratuites", "Parce que l'ONU l'imposait"], answer: 1, explain: "On vise désormais des dirigeants, des entreprises ou des secteurs précis." },
        { q: "Pourquoi BNP Paribas a-t-elle été condamnée par la justice américaine en 2014 ?", options: ["Pour fraude fiscale en France", "Pour des paiements en dollars liés au Soudan, à l'Iran et à Cuba", "Pour avoir quitté la Russie", "Pour une faillite"], answer: 1, explain: "Près de 8,9 milliards de dollars : l'usage du dollar soumet les banques étrangères à la loi américaine." },
        { q: "Comment fonctionne le plafond de prix sur le pétrole russe ?", options: ["Personne n'a le droit d'acheter du pétrole russe", "Les pays peuvent en acheter, mais les services occidentaux (assurance, transport) seulement si le prix est sous 60 $", "La Russie fixe elle-même son prix", "Le pétrole russe est gratuit"], answer: 1, explain: "L'idée : réduire les revenus russes sans faire flamber le prix mondial du pétrole." },
        { q: "Selon Hufbauer, Schott et Elliott, quelle part des sanctions atteint son but ?", options: ["Presque toutes", "Environ un tiers", "Aucune", "La moitié exactement"], answer: 1, explain: "40 cas sur 115 entre 1914 et 1990 ; ce chiffre est contesté par d'autres chercheurs." }
      ],
      sources: [
        { short: "Conseil de l'UE", name: "Conseil de l'Union européenne, sanctions contre la Russie", url: "https://www.consilium.europa.eu/fr/policies/sanctions-against-russia/" },
        { short: "SWIFT", name: "SWIFT, à propos", url: "https://www.swift.com/about-us" },
        { short: "National Academies", name: "National Academies Press, « International Conflict Resolution After the Cold War » (2000), chapitre sur l'efficacité des sanctions (Hufbauer, Schott et Elliott ; critique de Pape)", url: "https://www.nationalacademies.org/read/9897/chapter/5" },
        { short: "Université d'Oxford", name: "Université d'Oxford, « 1935 sanctions against Italy: Would coal and crude oil have made a difference? » (European Review of Economic History)", url: "https://www.economics.ox.ac.uk/node/1980231" },
        { short: "History.com", name: "History.com, « United States freezes Japanese assets » (26 juillet 1941)", url: "https://www.history.com/this-day-in-history/july-26/united-states-freezes-japanese-assets" },
        { short: "SWIFT", name: "SWIFT, « SWIFT instructed to disconnect sanctioned Iranian banks following EU Council decision », mars 2012", url: "https://www.swift.com/insights/press-releases/swift-instructed-to-disconnect-sanctioned-iranian-banks-following-eu-council-decision" },
        { short: "Département de la Justice (via Mondo Visione)", name: "Département de la Justice des États-Unis, « BNP Paribas Agrees to Plead Guilty and to Pay $8.9 Billion », 30 juin 2014", url: "https://mondovisione.com/media-and-resources/news/us-department-of-justice-bnp-paribas-agrees-to-plead-guilty-and-to-pay-89-bil-201471/" },
        { short: "bne IntelliNews", name: "bne IntelliNews, « EU, G7 approve Russian oil price cap as embargo on country's crude comes into force », décembre 2022", url: "https://www.intellinews.com/eu-g7-approve-russian-oil-price-cap-as-embargo-on-country-s-crude-comes-into-force-264282" },
        { short: "Swissinfo (Reuters)", name: "Swissinfo (Reuters), « Explainer: What is the G7's $50 billion loan plan for Ukraine? », 2024", url: "https://www.swissinfo.ch/eng/explainer-what-is-the-g7%27s-%2450-billion-loan-plan-for-ukraine%3F/80692861" }
      ]
    },
    {
      id: "dollar",
      plus: true, // cours d'approfondissement : réservé à Geonomix+
      emoji: "💵",
      theme: "eco",
      title: "Pourquoi le dollar domine le monde",
      hook: "Le pétrole se vend en dollars, les banques centrales stockent des dollars, 88 % des échanges de devises passent par le dollar… Comment le nom d'une pièce d'argent de Bohême est devenu la monnaie de la planète ? De la pièce de huit espagnole au « privilège exorbitant », du coup de poker de Nixon en 1971 à la ruée des banques centrales vers l'or.",
      minutes: 14,
      piste: "bleue",
      tldr: [
        "Le dollar est la principale monnaie de réserve : près de 60 % des réserves de change des banques centrales sont en dollars [1]. Il est d'un côté de 88 % de toutes les opérations de change dans le monde [2].",
        "Son nom vient du « thaler », une pièce d'argent frappée à partir de 1519-1520 à Joachimsthal, en Bohême [3]. Avant d'être américain, le « dollar » désignait la pièce de huit réaux espagnole.",
        "Sa domination remonte aux accords de Bretton Woods (1944). En 1965, de Gaulle réclame un retour à l'or [4] ; le 15 août 1971, Nixon suspend la convertibilité du dollar en or [5].",
        "Elle donne aux États-Unis un « privilège exorbitant » : emprunter moins cher et pouvoir sanctionner d'autres pays via leur système financier.",
        "Les banques centrales achètent plus de 1 000 tonnes d'or par an depuis 2022 [6], et le dollar a connu au premier semestre 2025 son pire début d'année depuis 1973 [7]. Mais aucune monnaie ne peut encore le remplacer."
      ],
      sections: [
        {
          title: "D'une mine de Bohême à la pièce de huit",
          paragraphs: [
            "Le mot ==« dollar »== vient d'une petite ville minière de Bohême, aujourd'hui en République tchèque : Joachimsthal (Jáchymov). Au début du XVIe siècle, on y frappe de grosses pièces d'argent tirées des mines locales, les ==« Joachimsthaler »==, vite abrégées en ==« thaler »== [3]. Le mot passe dans les langues voisines : « daler », puis « dollar » en anglais vers 1600 [3].",
            "Les colons anglais d'Amérique appellent ensuite « dollar » une autre pièce, alors la plus répandue au monde : ==la pièce de huit réaux espagnole==, frappée avec l'argent des mines du Mexique et du Pérou [3]. On la coupait parfois en huit morceaux pour faire la monnaie, d'où l'expression « pièces de huit ».",
            "Quand les États-Unis créent leur monnaie en 1792, ils reprennent ce nom familier. Ironie de l'histoire : ==la monnaie qui domine le monde porte le nom d'une pièce européenne et a commencé sa vie en imitant une monnaie espagnole==.",
            "Avant 1914, ce n'est pourtant pas le dollar qui règne, mais ==la livre sterling==, monnaie de la première puissance commerciale et financière, le Royaume-Uni. Les États-Unis n'ont même pas de banque centrale avant la création de la Réserve fédérale, en 1913."
          ]
        },
        {
          title: "1944 : Bretton Woods, le dollar au centre",
          paragraphs: [
            "À la fin de la Seconde Guerre mondiale, 44 pays se réunissent à Bretton Woods, aux États-Unis. Ils décident que leurs monnaies seront rattachées au dollar, lui-même convertible en or.",
            "Deux plans s'affrontent. Le Britannique ==John Maynard Keynes== propose une monnaie internationale nouvelle, le « bancor », gérée par une banque mondiale, pour qu'aucun pays ne soit avantagé. L'Américain ==Harry Dexter White== veut placer le dollar au centre. Les États-Unis, qui détiennent alors l'essentiel de l'or du monde et sortent de la guerre en créanciers de tous, imposent leur plan.",
            "Le système fonctionne ainsi : ==35 dollars = une once d'or==, et les autres monnaies ont un taux fixe par rapport au dollar. Les banques centrales gardent donc leurs réserves en dollars, qu'elles peuvent en principe échanger contre de l'or auprès des États-Unis. Bretton Woods crée aussi le FMI et la Banque mondiale.",
            "Pendant vingt-cinq ans, ce système accompagne la plus forte croissance de l'histoire de l'Europe et du Japon. Mais il repose sur une promesse fragile : que les États-Unis aient toujours assez d'or pour tous les dollars en circulation."
          ]
        },
        {
          title: "Le « privilège exorbitant » et la colère de De Gaulle",
          paragraphs: [
            "L'expression vient du ministre français Valéry Giscard d'Estaing dans les années 1960, inspiré par l'économiste Jacques Rueff [4]. Comme tout le monde a besoin de dollars, les États-Unis peuvent s'endetter à moindre coût et financer leurs déficits plus facilement.",
            "Autre avantage : presque tous les paiements en dollars passent, à un moment, par des banques américaines. Cela donne à Washington un levier puissant pour sanctionner des pays ou des entreprises.",
            "En 1960, l'économiste belge Robert Triffin met le doigt sur une contradiction, le ==« dilemme de Triffin »== : pour que le monde ait assez de dollars, les États-Unis doivent en émettre toujours plus, donc dépenser plus qu'ils ne gagnent à l'étranger ; mais plus il y a de dollars dehors, moins on croit que l'or suffira à les rembourser.",
            "Le ==4 février 1965==, lors d'une conférence de presse, le général ==de Gaulle== réclame un retour progressif à l'or comme base du système monétaire international, car l'or n'appartient à aucun pays [4]. La France convertit une partie de ses dollars en or et rapatrie son or de New York [4]. Le Trésor américain répond le jour même que l'étalon-or s'était « effondré » en 1931 [4]."
          ],
          plain: {
            title: "le dilemme de Triffin",
            steps: [
              "Le commerce mondial grandit : les pays ont besoin de plus de dollars pour leurs réserves et leurs échanges.",
              "Pour fournir ces dollars, les États-Unis doivent en envoyer plus à l'étranger qu'ils n'en reçoivent : ils sont en déficit.",
              "Les dollars à l'étranger finissent par dépasser l'or que les États-Unis possèdent.",
              "Les pays commencent à douter et réclament de l'or, comme la France en 1965 [4] : le système craque."
            ]
          }
        },
        {
          title: "15 août 1971 : « notre monnaie, votre problème »",
          paragraphs: [
            "Dans les années 1960, les dépenses de la guerre du Vietnam et des programmes sociaux gonflent les déficits américains. Les réserves d'or fondent. En août 1971, le Royaume-Uni demande à son tour une garantie sur ses dollars [5].",
            "Le dimanche ==15 août 1971== au soir, le président ==Richard Nixon== annonce à la télévision la ==suspension de la convertibilité du dollar en or==, ainsi qu'un gel des prix et des salaires et une surtaxe sur les importations [5]. C'est le « choc Nixon » : la promesse de Bretton Woods est rompue unilatéralement.",
            "Quelques mois plus tard, face aux Européens furieux, le secrétaire au Trésor ==John Connally== aurait lancé une phrase restée célèbre : ==« Le dollar est notre monnaie, mais c'est votre problème »== [5]. Elle résume l'attitude américaine : les variations du dollar sont décidées à Washington, et c'est au reste du monde de s'adapter.",
            "En 1973, les grandes monnaies se mettent à ==flotter== librement les unes par rapport aux autres. On aurait pu croire que le dollar, désormais sans or derrière lui, perdrait sa place. Le contraire se produit : l'habitude est prise, et ==le dollar reste la monnaie de référence pour le commerce et la finance==. La même année, le choc pétrolier et l'accord avec l'Arabie saoudite font du dollar la monnaie du pétrole (voir notre article sur le pétrodollar)."
          ]
        },
        {
          title: "Pourquoi tout le monde garde des dollars",
          paragraphs: [
            "Une monnaie domine quand elle remplit trois rôles à l'échelle mondiale : ==moyen d'échange== (on paie en dollars), ==unité de compte== (on fixe les prix en dollars : pétrole, blé, cuivre, avions) et ==réserve de valeur== (on garde ses économies en dollars). Le dollar coche les trois cases.",
            "Les chiffres le montrent. Fin 2024, environ ==58 % des réserves de change== déclarées des banques centrales sont en dollars, contre environ 20 % pour l'euro [1]. Et le dollar est ==d'un côté de 88 % de toutes les opérations de change== dans le monde, une part stable depuis dix ans [2] : pour échanger des pesos contre des wons, on passe souvent par le dollar.",
            "Pourquoi ? Les États-Unis offrent ce que personne d'autre n'offre à la même échelle : ==le plus grand marché de dettes publiques du monde==, très liquide (on peut acheter et revendre des milliards en quelques minutes), une monnaie librement échangeable, un État de droit, une armée puissante, et l'habitude. ==Plus une monnaie est utilisée, plus elle est utile== : c'est un effet de réseau, comme pour une langue ou un réseau social.",
            "Certains pays vont jusqu'à adopter le dollar comme monnaie officielle, comme l'Équateur en 2000 ou le Salvador en 2001, après des crises qui avaient ruiné la confiance dans leur propre monnaie."
          ],
          example: {
            title: "Un échange qui passe par le dollar",
            text: "Une entreprise chilienne veut payer un fournisseur coréen. Le marché direct entre pesos chiliens et wons coréens est petit et cher. Elle convertit donc ses pesos en dollars, puis les dollars en wons. Le dollar sert de « langue commune » : c'est pour cela qu'il apparaît dans 88 % des échanges de devises [2]."
          }
        },
        {
          title: "Le revers du privilège",
          paragraphs: [
            "Le rôle mondial du dollar n'a pas que des avantages pour les États-Unis. La forte demande de dollars ==renchérit la monnaie américaine==, ce qui pénalise les exportations des entreprises américaines et favorise les importations : certains économistes y voient une cause du déclin industriel américain.",
            "Pour le reste du monde, ==les décisions de la Fed deviennent des décisions mondiales==. Quand la Fed monte ses taux, le dollar monte, les capitaux quittent les pays émergents, et les pays endettés en dollars voient leur dette s'alourdir. La crise de la dette latino-américaine de 1982, après le choc Volcker, en est l'exemple classique (voir notre article sur la Reaganomics).",
            "Le dollar fort a parfois été jugé trop fort par les États-Unis eux-mêmes : le ==22 septembre 1985==, aux accords du Plaza à New York, les grands pays s'entendent pour faire baisser le dollar."
          ]
        },
        {
          title: "L'arme du dollar",
          paragraphs: [
            "Parce que presque toutes les transactions en dollars passent par des banques américaines, les États-Unis peuvent ==couper un pays, une entreprise ou une personne du système financier mondial==. Une banque étrangère qui travaille avec un pays sanctionné par Washington risque d'être elle-même sanctionnée (voir notre cours sur les sanctions).",
            "Cette arme a été utilisée contre l'Iran, la Corée du Nord, le Venezuela et, à une échelle inédite, contre la Russie en 2022 : les réserves de la banque centrale russe placées en Occident ont été gelées. Le message a été entendu dans le monde entier : ==des réserves en dollars peuvent devenir inutilisables du jour au lendemain== si l'on se brouille avec Washington.",
            "C'est là le paradoxe : ==plus les États-Unis utilisent le dollar comme arme, plus ils incitent les autres à chercher des alternatives==."
          ]
        },
        {
          title: "La fin du dollar roi ?",
          paragraphs: [
            "La Chine, la Russie et d'autres pays des BRICS cherchent à commercer davantage dans leurs propres monnaies, notamment pour échapper aux sanctions américaines. Certaines banques centrales achètent aussi beaucoup d'or.",
            "Ces achats d'or sont spectaculaires : les banques centrales en ont acheté ==plus de 1 000 tonnes par an en 2022, 2023 et 2024==, du jamais vu, contre environ 470 tonnes par an en moyenne entre 2010 et 2021 [6]. L'or a un avantage que le dollar n'a pas : il n'appartient à aucun pays et ne peut pas être gelé s'il est stocké chez soi.",
            "Au premier semestre 2025, ==le dollar perd environ 10,8 % face aux grandes monnaies, son pire début d'année depuis 1973== [7], sur fond de droits de douane, d'inquiétudes sur la dette américaine et de pressions politiques sur la Fed [7]. Certains y voient le début d'un déclin.",
            "Mais remplacer le dollar est difficile : il faut une monnaie librement échangeable, des marchés financiers immenses et la confiance des investisseurs. Pour l'instant, aucune alternative ne réunit tout cela, l'euro restant loin derrière. Le ==yuan chinois== progresse (il est la 5e monnaie la plus échangée en 2022, avec 7 % des opérations [2]), mais la Chine contrôle les mouvements de capitaux, ce qui freine son usage comme réserve."
          ]
        },
        {
          title: "Et l'euro ?",
          paragraphs: [
            "Lancé en 1999, l'euro est devenu la ==deuxième monnaie du monde== : environ 20 % des réserves de change [1] et 31 % des opérations de change en 2022 [2]. Il est la monnaie de plus de 340 millions d'Européens et le pivot du commerce dans une grande partie de l'Afrique et de l'Europe de l'Est.",
            "Mais il lui manque des atouts du dollar : ==pas de grand marché unique de dette publique== (chaque pays émet ses propres obligations, de qualité différente), pas d'armée commune, et une gouvernance à plus de vingt pays, plus lente. La création d'une dette européenne commune pendant le Covid (le plan de relance de 2020) a été vue comme un pas dans cette direction.",
            "Retiens la leçon de l'histoire : la livre sterling a mis des décennies à céder sa place au dollar, même après que les États-Unis l'ont dépassée économiquement. ==Les monnaies dominantes déclinent lentement==, et le dollar a encore beaucoup d'avance."
          ]
        }
      ],
      forMe: "Le prix de ton plein, de ton téléphone ou de ton billet d'avion dépend en partie du dollar : quand il monte face à l'euro, tout ce qui se paie en dollars coûte plus cher en Europe. Et quand la Fed décide de ses taux à Washington, c'est aussi ton pouvoir d'achat qui bouge.",
      figures: [
        { value: "≈ 58 %", label: "des réserves de change mondiales sont en dollars", src: 1 },
        { value: "≈ 20 %", label: "pour l'euro, deuxième monnaie de réserve", src: 1 },
        { value: "1971", label: "fin de la convertibilité du dollar en or" },
        { value: "88 %", label: "des opérations de change ont le dollar d'un côté (2022)", src: 2 },
        { value: "> 1 000 t", label: "d'or achetées chaque année par les banques centrales en 2022, 2023 et 2024", src: 6 },
        { value: "−10,8 %", label: "pour le dollar au premier semestre 2025, son pire début d'année depuis 1973", src: 7 }
      ],
      terms: ["monnaie-reserve", "banque-centrale", "brics", "sanctions"],
      quiz: [
        { q: "Quels accords ont placé le dollar au centre du système monétaire mondial ?", options: ["Les accords du Plaza", "Les accords de Bretton Woods (1944)", "Le traité de Versailles", "Le traité de Maastricht"], answer: 1, explain: "44 pays rattachent leurs monnaies au dollar, lui-même convertible en or." },
        { q: "Qui a inventé l'expression « privilège exorbitant » ?", options: ["Richard Nixon", "Valéry Giscard d'Estaing, dans les années 1960", "Keynes", "Mao Zedong"], answer: 1, explain: "Le ministre français, inspiré par l'économiste Jacques Rueff ; de Gaulle l'a reprise." },
        { q: "D'où vient le mot « dollar » ?", options: ["De l'anglais « doll »", "Du « thaler », une pièce d'argent frappée à Joachimsthal en Bohême", "D'un président américain", "Du mot espagnol « dolor »"], answer: 1, explain: "Les colons anglais l'ont ensuite appliqué à la pièce de huit réaux espagnole." },
        { q: "Que proposait Keynes à Bretton Woods ?", options: ["Le dollar comme monnaie mondiale", "Une monnaie internationale nouvelle, le « bancor »", "Le retour au troc", "L'euro"], answer: 1, explain: "Le plan américain de Harry Dexter White, centré sur le dollar, l'a emporté." },
        { q: "Que dit le « dilemme de Triffin » ?", options: ["Le dollar va disparaître en 1971", "Pour fournir des dollars au monde, les États-Unis doivent être en déficit, ce qui mine la confiance dans le dollar", "L'or vaut toujours 35 dollars", "Les taux doivent baisser"], answer: 1, explain: "Robert Triffin l'a formulé en 1960 ; le système de Bretton Woods a craqué en 1971." },
        { q: "Qu'a annoncé Richard Nixon le 15 août 1971 ?", options: ["La création de l'euro", "La suspension de la convertibilité du dollar en or", "La fin de la Fed", "Un accord avec la Chine"], answer: 1, explain: "Le « choc Nixon » : la promesse de Bretton Woods est rompue ; les monnaies flottent à partir de 1973." },
        { q: "Dans quelle part des opérations de change le dollar apparaît-il ?", options: ["Environ 10 %", "Environ 50 %", "Environ 88 %", "100 %"], answer: 2, explain: "Selon la BRI (2022) ; le dollar sert de « langue commune » entre les autres monnaies." },
        { q: "Pourquoi les banques centrales achètent-elles autant d'or depuis 2022 ?", options: ["Pour fabriquer des bijoux", "Pour diversifier leurs réserves, car l'or n'appartient à aucun pays et ne peut pas être gelé s'il est stocké chez soi", "Parce que le dollar a disparu", "Parce que l'or rapporte des intérêts"], answer: 1, explain: "Plus de 1 000 tonnes par an en 2022, 2023 et 2024, après le gel des réserves russes." }
      ],
      sources: [
        { short: "FMI", name: "FMI, COFER : composition des réserves de change", url: "https://data.imf.org" },
        { short: "BRI", name: "Banque des règlements internationaux, enquête triennale sur les changes (avril 2022)", url: "https://www.bis.org/statistics/rpfx22.htm" },
        { short: "Etymonline", name: "Online Etymology Dictionary, « thaler » et « dollar »", url: "https://www.etymonline.com/word/thaler" },
        { short: "Département d'État", name: "Département d'État des États-Unis, Foreign Relations of the United States 1964-1968, vol. VIII, note sur la conférence de presse de De Gaulle du 4 février 1965", url: "https://history.state.gov/historicaldocuments/frus1964-68v08/d36" },
        { short: "Chatham House", name: "Chatham House, « Policymakers can learn from Nixon's 'dollar shock' », septembre 2021", url: "https://www.chathamhouse.org/2021/09/policymakers-can-learn-nixons-dollar-shock" },
        { short: "World Gold Council (via Kitco)", name: "Kitco, « Central banks buy more than 1,000 tonnes of gold in 2024 for the third year in a row - World Gold Council », février 2025", url: "https://www.kitco.com/news/article/2025-02-05/central-banks-buy-more-1000-tonnes-gold-2024-third-year-row-world-gold" },
        { short: "Al Jazeera", name: "Al Jazeera, « Why is the US dollar falling by record levels in 2025? », 1er juillet 2025", url: "https://www.aljazeera.com/economy/2025/7/1/why-is-the-us-dollar-falling-by-record-levels-in-2025" }
      ],
      visuals: [
        { kind: "chart", type: "line", title: "La part du dollar dans les réserves mondiales", subtitle: "Part des réserves de change déclarées détenue en dollars, en fin d'année", xLabel: "Année", unit: "Part (%)", suffix: " %", yMin: 0, data: [["1999", 71], ["2005", 66.5], ["2010", 62.2], ["2015", 65.7], ["2020", 59], ["2024", 57.8]], source: "FMI, COFER" },
        { kind: "chart", type: "bar", title: "Le dollar, langue commune des devises", subtitle: "Part des opérations de change où chaque monnaie apparaît (avril 2022, total = 200 %)", xLabel: "Monnaie", unit: "Part (%)", suffix: " %", data: [["Dollar", 88], ["Euro", 31], ["Yuan", 7]], source: "BRI, enquête triennale 2022" }
      ]
    }
  ],

  glossary: [
    { id: "politique-budgetaire", term: "Politique budgétaire", def: "Utiliser les dépenses publiques et les impôts pour agir sur l'activité : dépenser plus ou baisser les impôts pour relancer, l'inverse pour freiner (rigueur).", example: "Un plan de relance qui finance des travaux publics." },
    { id: "politique-monetaire", term: "Politique monétaire", def: "Action de la banque centrale sur la quantité de monnaie et les taux d'intérêt pour soutenir l'activité ou freiner l'inflation.", example: "La BCE qui monte ou baisse ses taux directeurs." },
    { id: "multiplicateur", term: "Multiplicateur", def: "Une dépense publique devient le revenu de quelqu'un, qui en dépense une partie, qui devient le revenu d'un autre… La production finale peut monter de plus que la dépense de départ.", example: "10 milliards dépensés peuvent faire monter la production de plus de 10 milliards." },
    { id: "effet-eviction", term: "Effet d'éviction", def: "Une relance budgétaire fait d'abord monter la production (effet revenu, le multiplicateur), puis le taux d'intérêt monte et une partie de l'investissement privé disparaît : c'est l'éviction, l'écart entre la hausse « à taux inchangé » et la hausse finale.", example: "L'État emprunte beaucoup, les taux montent, une entreprise renonce à construire une usine." },
    { id: "piege-liquidite", term: "Piège à liquidité", def: "Situation où les taux d'intérêt sont déjà au plus bas : créer plus de monnaie ne les fait plus baisser, la politique monétaire perd son effet.", example: "Les États-Unis après 2008, avec un taux de la Fed proche de zéro." },
    { id: "inflation", term: "Inflation", def: "Hausse générale et durable des prix. Avec la même somme d'argent, on peut acheter moins de choses.", example: "Si l'inflation est de 3 %, un produit à 100 € coûte 103 € un an plus tard." },
    { id: "banque-centrale", term: "Banque centrale", def: "Institution qui gère la monnaie d'un pays ou d'une zone, veille à la stabilité des prix et prête aux banques.", example: "La BCE pour la zone euro, la Fed pour les États-Unis." },
    { id: "taux-directeur", term: "Taux directeur", def: "Taux d'intérêt fixé par la banque centrale. Il influence tous les autres taux : crédits immobiliers, prêts aux entreprises, livrets d'épargne.", example: "Quand la BCE monte ses taux, ton crédit immobilier coûte plus cher." },
    { id: "pouvoir-achat", term: "Pouvoir d'achat", def: "Quantité de biens et services qu'on peut acheter avec ses revenus. Il baisse si les prix montent plus vite que les salaires.", example: "Salaire +2 % et prix +5 % : le pouvoir d'achat recule." },
    { id: "pib", term: "PIB", def: "Produit intérieur brut : la valeur de tout ce qui est produit dans un pays en un an. C'est l'indicateur le plus utilisé pour mesurer la taille d'une économie.", example: "Quand le PIB augmente, on parle de croissance." },
    { id: "recession", term: "Récession", def: "Période où l'activité économique recule. On parle souvent de récession quand le PIB baisse deux trimestres de suite.", example: "La crise de 2008 a plongé de nombreux pays en récession." },
    { id: "droits-de-douane", term: "Droits de douane", def: "Taxe payée sur un produit importé quand il passe la frontière.", example: "Un droit de douane de 25 % sur une voiture à 20 000 € ajoute 5 000 € à son coût d'importation." },
    { id: "protectionnisme", term: "Protectionnisme", def: "Politique qui protège les entreprises nationales de la concurrence étrangère, via des taxes, des quotas ou des normes.", example: "Taxer l'acier importé pour aider les aciéries locales." },
    { id: "libre-echange", term: "Libre-échange", def: "Commerce entre pays avec le moins de barrières possibles (taxes, quotas).", example: "Au sein de l'Union européenne, les marchandises circulent sans droits de douane." },
    { id: "mondialisation", term: "Mondialisation", def: "Intensification des échanges de biens, de capitaux, d'informations et de personnes à l'échelle de la planète.", example: "Un jean dessiné en Europe, cousu au Bangladesh avec du coton indien." },
    { id: "chaine-appro", term: "Chaîne d'approvisionnement", def: "Toutes les étapes, souvent réparties dans plusieurs pays, pour fabriquer et livrer un produit : matières premières, pièces, assemblage, transport.", example: "Une voiture contient des milliers de pièces venues du monde entier." },
    { id: "detroit", term: "Détroit", def: "Passage maritime étroit entre deux terres, qui relie deux mers. Certains sont des points de passage obligés pour le commerce mondial.", example: "Ormuz, Malacca, Gibraltar, Bab-el-Mandeb." },
    { id: "opep", term: "OPEP", def: "Organisation des pays exportateurs de pétrole. Ses membres (Arabie saoudite, Irak, Iran…) se coordonnent pour influencer le prix du baril. Avec la Russie et d'autres alliés, on parle d'OPEP+.", example: "Quand l'OPEP+ réduit sa production, le prix du pétrole tend à monter." },
    { id: "semi-conducteur", term: "Semi-conducteur", def: "Matériau (surtout le silicium) qui sert à fabriquer les puces électroniques, cœur de tous les appareils numériques.", example: "Un smartphone contient des dizaines de puces." },
    { id: "souverainete", term: "Souveraineté", def: "Capacité d'un État à décider par lui-même. En économie, on parle de souveraineté industrielle ou énergétique quand un pays veut produire lui-même ce qui est essentiel.", example: "Construire des usines de puces en Europe pour moins dépendre de l'Asie." },
    { id: "dependance", term: "Dépendance stratégique", def: "Situation où un pays a besoin d'un autre pour un produit essentiel (énergie, médicaments, puces…), ce qui peut devenir un moyen de pression.", example: "La dépendance de l'Europe au gaz russe avant 2022." },
    { id: "sanctions", term: "Sanctions économiques", def: "Mesures qui limitent les échanges avec un pays, une entreprise ou une personne pour la pousser à changer de comportement.", example: "Le gel des avoirs d'oligarques russes." },
    { id: "embargo", term: "Embargo", def: "Interdiction totale ou partielle de commercer certains produits avec un pays.", example: "L'embargo européen sur le pétrole russe transporté par mer." },
    { id: "swift", term: "SWIFT", def: "Réseau de messagerie sécurisé utilisé par plus de 11 000 banques dans le monde pour s'échanger des ordres de paiement internationaux.", example: "Être exclu de SWIFT, c'est comme perdre son adresse mail bancaire." },
    { id: "g7", term: "G7", def: "Groupe de sept grandes économies démocratiques : États-Unis, Japon, Allemagne, Royaume-Uni, France, Italie, Canada. L'UE participe aussi aux réunions.", example: "Le G7 coordonne souvent les sanctions occidentales." },
    { id: "brics", term: "BRICS", def: "Groupe de pays émergents formé à l'origine par le Brésil, la Russie, l'Inde, la Chine et l'Afrique du Sud, élargi depuis 2024 à d'autres pays comme l'Égypte, l'Éthiopie, l'Iran ou les Émirats arabes unis.", example: "Les BRICS veulent peser davantage face aux pays occidentaux." },
    { id: "monnaie-reserve", term: "Monnaie de réserve", def: "Monnaie que les banques centrales du monde entier conservent en grande quantité pour payer leurs importations ou stabiliser leur propre monnaie.", example: "Le dollar, puis l'euro, sont les principales monnaies de réserve." },
    { id: "dette-publique", term: "Dette publique", def: "Ensemble des emprunts accumulés par l'État et les administrations publiques. On l'exprime souvent en pourcentage du PIB.", example: "Une dette de 110 % du PIB : l'État doit plus que ce que le pays produit en un an." },
    // Finance (demande de l'auteur, 31 oct. 2026 : définitions simples des marchés ; affichées dans l'onglet Finance de l'Actu)
    { id: "bourse", cat: "fin", term: "La Bourse", def: "Marché où s'achètent et se vendent des titres financiers : les actions des entreprises, les obligations des États et des entreprises. Le prix change à chaque instant, selon l'offre et la demande.", example: "Euronext à Paris, le NYSE et le Nasdaq à New York." },
    { id: "action", cat: "fin", term: "Action", def: "Une part de propriété d'une entreprise. L'actionnaire peut toucher une part des bénéfices (le dividende) et voter aux assemblées générales. Si l'entreprise va bien, l'action prend de la valeur ; sinon, elle en perd.", example: "Une entreprise divisée en 1 000 actions : si tu en as 10, tu possèdes 1 % de l'entreprise." },
    { id: "obligation", cat: "fin", term: "Obligation", def: "Un prêt fait à un État ou à une entreprise. Il rembourse à une date fixée et verse des intérêts en attendant. En général moins risqué qu'une action, mais ça rapporte souvent moins.", example: "Acheter une obligation de l'État français, c'est prêter de l'argent à la France." },
    { id: "indice-boursier", cat: "fin", term: "Indice boursier", def: "Un chiffre qui suit l'évolution d'un panier d'actions : c'est le thermomètre d'une Bourse. Quand on dit « la Bourse a monté », on parle en général de son indice.", example: "Le CAC 40 suit 40 grandes entreprises cotées à Paris ; le S&P 500, 500 grandes entreprises américaines." },
    { id: "etf", cat: "fin", term: "ETF (tracker)", def: "Un fonds qu'on achète en Bourse comme une action et qui copie un indice : en un seul achat, on a un petit morceau de toutes les entreprises de l'indice. Les frais sont en général faibles, mais on gagne et on perd exactement comme l'indice.", example: "Un ETF sur le S&P 500 monte quand les 500 grandes entreprises américaines montent dans leur ensemble, et baisse avec elles." },
    { id: "dividende", cat: "fin", term: "Dividende", def: "La part des bénéfices qu'une entreprise reverse à ses actionnaires, en général une fois par an. Elle n'est jamais garantie : une entreprise en difficulté peut la baisser ou la supprimer.", example: "Une entreprise qui verse 2 € par action : avec 10 actions, tu touches 20 €." },
    { id: "capitalisation", cat: "fin", term: "Capitalisation boursière", def: "La valeur totale d'une entreprise en Bourse : le prix d'une action multiplié par le nombre d'actions. Elle change chaque jour avec le cours.", example: "1 milliard d'actions à 50 € : l'entreprise vaut 50 milliards d'euros en Bourse." },
    { id: "risque-rendement", cat: "fin", term: "Rendement et risque", def: "Les deux vont ensemble : plus un placement peut rapporter, plus on risque d'y perdre. Un placement sans risque rapporte peu.", example: "Un livret d'épargne garanti rapporte peu ; une action peut rapporter beaucoup, ou perdre la moitié de sa valeur." },
    { id: "diversifier", cat: "fin", term: "Diversifier", def: "Répartir son argent entre plusieurs placements, entreprises, pays ou secteurs, pour ne pas tout perdre si l'un d'eux s'effondre.", example: "Ne pas mettre tous ses œufs dans le même panier : un ETF diversifie d'un coup sur des centaines d'entreprises." },
    { id: "introduction-bourse", cat: "fin", term: "Introduction en Bourse", def: "Le moment où une entreprise met pour la première fois ses actions en vente au public. Elle lève de l'argent pour grandir, et ses fondateurs peuvent vendre une partie de leurs parts. En anglais : IPO.", example: "Une jeune entreprise qui entre en Bourse à Paris ou à New York pour financer de nouvelles usines." },
    { id: "opa", cat: "fin", term: "OPA (offre publique d'achat)", def: "Une proposition faite à tous les actionnaires d'une entreprise de racheter leurs actions à un prix fixé, souvent au-dessus du cours, pour en prendre le contrôle.", example: "À l'annonce d'une OPA, l'action de l'entreprise visée bondit souvent vers le prix proposé." },
    { id: "krach", cat: "fin", term: "Krach", def: "Une chute brutale et rapide des cours de Bourse, souvent provoquée par une panique : tout le monde veut vendre en même temps.", example: "Le krach de Wall Street en octobre 1929, ou la chute des Bourses pendant la crise de 2008." },
    { id: "taux-de-change", cat: "fin", term: "Taux de change", def: "Le prix d'une monnaie exprimé dans une autre. Il bouge chaque jour selon l'économie, les taux d'intérêt et la confiance dans chaque pays.", example: "Si l'euro monte face au dollar, un voyage aux États-Unis coûte moins cher à un Européen." },
    { id: "matieres-premieres", cat: "fin", term: "Cours des matières premières", def: "Le prix d'une ressource échangée sur les marchés mondiaux : pétrole, gaz, cuivre, blé, or… Une guerre, une sécheresse ou une découverte peuvent le faire bondir ou chuter.", example: "Le Brent, pétrole de la mer du Nord, sert de prix de référence en Europe." },
    { id: "valeur-refuge", cat: "fin", term: "Valeur refuge", def: "Un placement vers lequel les investisseurs se tournent en cas de crise, parce qu'il est jugé sûr.", example: "Quand une guerre éclate, l'or et le franc suisse montent souvent." },
    { id: "volatilite", cat: "fin", term: "Volatilité", def: "À quel point un prix bouge, et vite. Une action très volatile peut gagner ou perdre beaucoup en quelques jours.", example: "Les actions de jeunes entreprises technologiques sont souvent plus volatiles que celles des grands groupes." }
  ]
};
