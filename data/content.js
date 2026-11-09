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
      hook: "Ton panier de courses a pris 20 % en quelques années ? Voici ce qui s'est passé, et pourquoi la BCE a touché aux taux d'intérêt.",
      minutes: 3,
      level: "Débutant",
      tldr: [
        "L'inflation, c'est la hausse générale et durable des prix : avec le même billet, on achète moins.",
        "En 2022, elle a dépassé 5 % en France, du jamais vu depuis le milieu des années 1980 [1].",
        "Pour la freiner, les banques centrales augmentent leurs taux d'intérêt : emprunter coûte plus cher, on dépense moins, les prix ralentissent."
      ],
      sections: [
        {
          title: "D'où vient l'inflation ?",
          paragraphs: [
            "Deux grandes causes. Soit les coûts de production montent (énergie, matières premières, salaires) et les entreprises répercutent sur les prix. Soit la demande est plus forte que ce que l'économie peut produire, et les prix grimpent.",
            "En 2021-2022, les deux se sont cumulées : la reprise après le Covid a fait exploser la demande, les chaînes d'approvisionnement étaient désorganisées, puis la guerre en Ukraine a fait flamber le gaz, le pétrole et les céréales."
          ]
        },
        {
          title: "Le rôle de la banque centrale",
          paragraphs: [
            "Dans la zone euro, c'est la Banque centrale européenne (BCE) qui veille sur les prix. Son objectif : une inflation proche de 2 % par an [2]. Ni trop (on s'appauvrit), ni trop peu (l'économie s'endort).",
            "Son outil principal, ce sont les taux directeurs : le prix auquel les banques empruntent de l'argent. Entre 2022 et 2023, la BCE les a fait passer d'un niveau négatif à 4 %, la hausse la plus rapide de son histoire [2]."
          ]
        },
        {
          title: "Pourquoi monter les taux calme les prix",
          paragraphs: [
            "Quand les taux montent, les crédits immobiliers, auto ou d'entreprise deviennent plus chers. Les ménages et les entreprises empruntent et dépensent moins, la demande ralentit, et les prix avec elle.",
            "Le revers : moins d'investissement, un marché immobilier qui se grippe et un risque de ralentir trop fort l'économie. C'est un réglage délicat, un peu comme freiner une voiture sans la faire caler."
          ]
        }
      ],
      forMe: "Si l'inflation est à 5 % et que ton salaire augmente de 2 %, ton pouvoir d'achat baisse. Et quand les taux montent, ton futur crédit immobilier coûte plus cher, mais ton livret d'épargne rapporte un peu plus.",
      figures: [
        { value: "2 %", label: "l'objectif d'inflation de la BCE", src: 2 },
        { value: "+5,2 %", label: "l'inflation en France en 2022", src: 1 },
        { value: "4 %", label: "le taux de dépôt de la BCE fin 2023", src: 2 }
      ],
      terms: ["inflation", "banque-centrale", "taux-directeur", "pouvoir-achat", "chaine-appro"],
      quiz: [
        {
          q: "Quel est l'objectif d'inflation de la BCE ?",
          options: ["0 %", "Environ 2 %", "5 %", "Aucun, elle ne s'en occupe pas"],
          answer: 1,
          explain: "La BCE vise une inflation proche de 2 % : assez pour que l'économie tourne, pas assez pour ronger le pouvoir d'achat."
        },
        {
          q: "Pour freiner l'inflation, une banque centrale…",
          options: ["baisse ses taux", "imprime plus de billets", "augmente ses taux", "bloque les prix dans les magasins"],
          answer: 2,
          explain: "En augmentant les taux, elle rend le crédit plus cher : on emprunte et on dépense moins, ce qui ralentit la hausse des prix."
        }
      ],
      sources: [
        { short: "Insee", name: "Insee, indice des prix à la consommation (moyennes annuelles)", url: "https://www.insee.fr" },
        { short: "BCE", name: "Banque centrale européenne, taux directeurs", url: "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/key_ecb_interest_rates/html/index.en.html" }
      ],
      visuals: [
        {
          kind: "chart",
          type: "bar",
          title: "L'inflation en France depuis 2015",
          subtitle: "Hausse moyenne des prix à la consommation sur l'année",
          xLabel: "Année",
          unit: "Inflation (%)",
          suffix: " %",
          data: [["2015", 0.0], ["2016", 0.2], ["2017", 1.0], ["2018", 1.8], ["2019", 1.1], ["2020", 0.5], ["2021", 1.6], ["2022", 5.2], ["2023", 4.9], ["2024", 2.0]],
          source: "Insee, indice des prix à la consommation"
        }
      ]
    },
    {
      id: "is-lm",
      emoji: "⚖️",
      theme: "eco",
      title: "Le modèle IS-LM : ce que peuvent l'État et la banque centrale",
      hook: "Une crise frappe. L'État doit-il dépenser plus ? La banque centrale doit-elle baisser ses taux ? Deux courbes suffisent pour comprendre ce qui se passe, et pourquoi ça ne marche pas toujours.",
      minutes: 14,
      level: "Intermédiaire",
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
      minutes: 12,
      level: "Intermédiaire",
      tldr: [
        "Les classiques et les néoclassiques font confiance aux marchés : laissés libres, ils retrouvent l'équilibre, et l'État doit rester discret [1][2].",
        "Keynes répond à la crise des années 1930 : la demande peut rester trop faible, le chômage durer, et l'État doit relancer [3].",
        "Les monétaristes (Friedman) puis les nouveaux classiques (Lucas) reprennent la main dans les années 1970-1980 : surveiller la monnaie, se méfier de la relance [5][6].",
        "Chaque école est née d'une crise que la précédente expliquait mal : la question à se poser n'est pas « qui a raison ? » mais « quelles lunettes pour quel moment ? »."
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
        }
      ],
      forMe: "Quand un responsable politique dit « il faut relancer » et qu'un autre répond « il faut réduire le déficit », tu peux reconnaître leurs écoles : le premier raisonne en keynésien, le second en classique ou en monétariste. Et te demander laquelle colle le mieux à la situation du moment.",
      figures: [
        { value: "1776", label: "« La Richesse des nations » d'Adam Smith", src: 1 },
        { value: "1936", label: "la « Théorie générale » de Keynes", src: 3 },
        { value: "1976", label: "prix Nobel de Milton Friedman, le père du monétarisme", src: 5 },
        { value: "1995", label: "prix Nobel de Robert Lucas et des anticipations rationnelles", src: 6 }
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
        }
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
        { short: "Prix Nobel", name: "Fondation Nobel, prix d'économie 1974 attribué à Gunnar Myrdal et Friedrich von Hayek (communiqué)", url: "https://www.nobelprize.org/prizes/economic-sciences/1974/press-release/" }
      ]
    },
    {
      id: "eurodollars",
      emoji: "🌊",
      theme: "fin",
      title: "Les eurodollars : ces dollars qui vivent hors des États-Unis",
      hook: "Des milliers de milliards de dollars circulent dans des banques à Londres, Tokyo ou Singapour, loin du contrôle de la Fed. Ils sont nés de la guerre froide, et à chaque grande crise, c'est la Fed qui doit venir les sauver.",
      minutes: 8,
      level: "Intermédiaire",
      tldr: [
        "Un eurodollar, c'est simplement un dollar déposé dans une banque hors des États-Unis. Rien à voir avec l'euro : le mot est né bien avant [1][2].",
        "Le marché est né au milieu des années 1950, quand des banques soviétiques ont placé leurs dollars à Londres et à Paris de peur qu'ils soient saisis aux États-Unis [1].",
        "Il a grossi parce qu'il échappait aux règles américaines (plafonds de taux, réserves obligatoires) : fin 2019, les banques non américaines devaient environ 13 000 milliards de dollars [1][3].",
        "Quand ces dollars viennent à manquer, comme en 2008 et en 2020, la Fed prête des dollars aux autres banques centrales : les « swap lines » [4][5]."
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
        }
      ],
      forMe: "Si ta banque, ton entreprise ou ton pays a besoin de dollars, il dépend de ce marché mondial, et donc, en cas de crise, des décisions de la Fed. C'est pour ça qu'une crise bancaire américaine peut faire trembler les marchés européens ou asiatiques.",
      figures: [
        { value: "≈ 13 000 Md$", label: "les dettes en dollars des banques non américaines fin 2019", src: 3 },
        { value: "+ de 580 Md$", label: "les dollars prêtés par la Fed aux autres banques centrales en décembre 2008", src: 4 },
        { value: "14", label: "banques centrales reliées à la Fed par des swap lines en 2008", src: 4 },
        { value: "449 Md$", label: "le pic d'utilisation des swap lines en mai 2020", src: 5 }
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
        }
      ],
      sources: [
        { short: "Fed de Boston", name: "Federal Reserve Bank of Boston, « Competition & Opportunity », Regional Review, 2001", url: "https://www.bostonfed.org/publications/regional-review/2001/quarter-3/competition-opportunity.aspx" },
        { short: "Fed de Richmond", name: "Federal Reserve Bank of Richmond, « Instruments of the Money Market », chapitre 5 : « Eurodollars »", url: "https://www.richmondfed.org/-/media/richmondfedorg/publications/research/special_reports/instruments_of_the_money_market/pdf/chapter_05.pdf" },
        { short: "BRI", name: "Banque des règlements internationaux, BIS Bulletin n° 27, « Global banks' dollar funding needs and central bank swap lines », 16 juillet 2020", url: "https://www.bis.org/publ/bisbull27.pdf" },
        { short: "Fed de New York", name: "Federal Reserve Bank of New York, « The Federal Reserve's Dollar Liquidity Swap Lines » (2010)", url: "https://www.newyorkfed.org/newsevents/news/research/2010/rp100813.html" },
        { short: "BRI", name: "Banque des règlements internationaux, BIS Bulletin n° 34, « Central bank swap lines and cross-border bank flows », décembre 2020", url: "https://www.bis.org/publ/bisbull34.htm" }
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
      level: "Débutant",
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
      minutes: 25,
      level: "Intermédiaire",
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
      minutes: 24,
      level: "Débutant",
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
      minutes: 5,
      level: "Débutant",
      tldr: [
        "Un droit de douane est une taxe sur un produit importé, payée quand il passe la frontière.",
        "Il sert à protéger les entreprises locales, à rapporter de l'argent à l'État et à faire pression sur un autre pays.",
        "Mais c'est l'entreprise qui importe qui paie la taxe, et elle la répercute presque toujours sur le prix final : au bout du compte, c'est le consommateur qui paie [3]."
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
        }
      ],
      forMe: "Ton smartphone, tes vêtements, ton électroménager ou les pièces de ta voiture traversent souvent plusieurs frontières avant d'arriver chez toi. Chaque droit de douane ajouté en chemin finit en grande partie dans le prix que tu paies en magasin. Et si l'Europe est visée par des taxes, ce sont aussi des entreprises européennes qui exportent (vin, luxe, aéronautique) qui perdent des clients, avec des emplois en jeu.",
      figures: [
        { value: "96 %", label: "du coût des taxes américaines de 2025 payé par les acheteurs américains (Institut de Kiel)" },
        { value: "+12 %", label: "le prix des machines à laver aux États-Unis après la taxe de 2018" },
        { value: "1930", label: "Smoot-Hawley, le contre-exemple historique" },
        { value: "173 Md$", label: "de droits de douane encaissés par les États-Unis sur l'exercice 2026 (USAFacts)" }
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
        }
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
        { short: "CNBC", name: "CNBC, « The odds of Trump's $2,000 tariff dividend checks are 'now effectively zero,' expert says », février 2026", url: "https://www.cnbc.com/2026/02/23/trumps-2000-tariff-dividend-checks-are-less-likely-experts-say.html" }
      ]
    },

    {
      id: "routes-maritimes",
      emoji: "🚢",
      theme: "geo",
      title: "Ormuz, Suez, Malacca : ces passages étroits qui tiennent l'économie mondiale",
      hook: "Quelques dizaines de kilomètres de mer suffisent à faire bondir le prix du pétrole. Voici pourquoi.",
      minutes: 4,
      level: "Débutant",
      tldr: [
        "Environ 80 % des marchandises échangées dans le monde voyagent par bateau [1].",
        "Beaucoup de ces navires doivent passer par quelques détroits et canaux très étroits : Ormuz, Bab-el-Mandeb, Suez, Malacca, Panama.",
        "Si l'un d'eux est bloqué ou menacé, les délais s'allongent, l'assurance et le transport coûtent plus cher, et les prix montent."
      ],
      sections: [
        {
          title: "Le détroit d'Ormuz, le robinet du pétrole",
          paragraphs: [
            "Entre l'Iran et la péninsule arabique, le détroit d'Ormuz voit passer environ un cinquième du pétrole consommé dans le monde [2], venu d'Arabie saoudite, d'Irak, des Émirats, du Koweït ou du Qatar (pour le gaz).",
            "La moindre tension dans la région fait réagir les marchés : même sans blocage réel, la simple menace suffit à faire grimper le prix du baril.",
            "En 2026, le scénario redouté est devenu réalité : après les frappes américaines et israéliennes contre l'Iran, Téhéran a bloqué le détroit pendant des mois. Le baril a dépassé 100 dollars et le gazole a battu des records en Europe [3]."
          ]
        },
        {
          title: "La mer Rouge et le canal de Suez",
          paragraphs: [
            "Le canal de Suez, en Égypte, relie la Méditerranée à la mer Rouge : c'est le raccourci entre l'Europe et l'Asie. Pour y accéder par le sud, il faut passer le détroit de Bab-el-Mandeb, au large du Yémen.",
            "Fin 2023, les rebelles houthis du Yémen ont commencé à attaquer des navires marchands. Beaucoup d'armateurs ont préféré contourner l'Afrique par le cap de Bonne-Espérance, soit environ 10 à 14 jours de trajet en plus."
          ]
        },
        {
          title: "Malacca et Panama",
          paragraphs: [
            "Le détroit de Malacca, entre la Malaisie et l'Indonésie, est la grande autoroute entre l'océan Indien et le Pacifique. Une large part du commerce et du pétrole à destination de la Chine, du Japon et de la Corée y transite.",
            "Le canal de Panama, lui, fonctionne grâce à de l'eau douce venue d'un lac. Lors de la sécheresse de 2023, les autorités ont dû limiter le nombre de passages : une preuve que le climat aussi peut perturber le commerce."
          ]
        }
      ],
      forMe: "Quand un détroit est menacé, le prix du plein d'essence peut monter en quelques jours. Et quand les cargos font le tour de l'Afrique, certains produits importés d'Asie arrivent plus tard et plus cher.",
      figures: [
        { value: "≈ 80 %", label: "du commerce mondial (en volume) se fait par la mer", src: 1 },
        { value: "≈ 1/5", label: "du pétrole mondial passait par Ormuz avant 2026", src: 2 },
        { value: "+10 à 14 j", label: "pour contourner l'Afrique au lieu de Suez" }
      ],
      terms: ["detroit", "chaine-appro", "opep", "mondialisation"],
      quiz: [
        {
          q: "Quel détroit est surnommé « le robinet du pétrole mondial » ?",
          options: ["Gibraltar", "Ormuz", "Le Bosphore", "La Manche"],
          answer: 1,
          explain: "Environ un cinquième du pétrole consommé dans le monde passe par le détroit d'Ormuz, entre l'Iran et la péninsule arabique."
        },
        {
          q: "Pourquoi de nombreux navires ont-ils évité la mer Rouge à partir de fin 2023 ?",
          options: ["Le canal de Suez était fermé pour travaux", "À cause d'attaques des Houthis du Yémen", "À cause d'une sécheresse", "Parce que l'Égypte avait doublé les tarifs"],
          answer: 1,
          explain: "Les attaques des Houthis contre des navires marchands ont poussé beaucoup d'armateurs à contourner l'Afrique, plus long mais plus sûr."
        }
      ],
      sources: [
        { short: "CNUCED", name: "CNUCED, Review of Maritime Transport", url: "https://unctad.org/topic/transport-and-trade-logistics/review-of-maritime-transport" },
        { short: "EIA", name: "Agence américaine d'information sur l'énergie, « World Oil Transit Chokepoints »", url: "https://www.eia.gov/international/analysis/special-topics/World_Oil_Transit_Chokepoints" },
        { short: "House of Commons Library", name: "House of Commons Library, crise d'Ormuz 2026", url: "https://commonslibrary.parliament.uk/research-briefings/cbp-10636/" }
      ],
      visuals: [
        {
          kind: "map",
          title: "Les passages qui tiennent le commerce mondial",
          intro: "Touche un passage pour zoomer dessus.",
          points: [
            { name: "Ormuz", coords: [56.4, 26.5], zoom: 10, text: "Entre l'Iran et Oman. Environ un cinquième du pétrole consommé dans le monde y passait avant la crise de 2026 (EIA)." },
            { name: "Bab-el-Mandeb", coords: [43.33, 12.6], zoom: 10, text: "Entre le Yémen et Djibouti, l'entrée sud de la mer Rouge. Zone des attaques houthies depuis fin 2023." },
            { name: "Suez", coords: [32.35, 30.6], zoom: 10, text: "Le canal égyptien relie la Méditerranée à la mer Rouge : le raccourci entre l'Europe et l'Asie." },
            { name: "Cap de Bonne-Espérance", coords: [18.47, -34.36], zoom: 16, text: "Le détour par le sud de l'Afrique quand la mer Rouge est trop dangereuse : environ 10 à 14 jours de mer en plus." },
            { name: "Malacca", coords: [100.9, 2.6], zoom: 14, text: "Entre la Malaisie et l'Indonésie : l'autoroute entre l'océan Indien et le Pacifique, vitale pour la Chine, le Japon et la Corée." },
            { name: "Panama", coords: [-79.7, 9.1], zoom: 10, text: "Le canal relie l'Atlantique au Pacifique. Il fonctionne avec l'eau douce du lac Gatún : la sécheresse de 2023 a forcé à limiter les passages." }
          ],
          source: "EIA ; CNUCED"
        }
      ]
    },

    {
      id: "semi-conducteurs",
      plus: true, // cours d'approfondissement : réservé à Geonomix+
      emoji: "💾",
      theme: "mix",
      title: "Puces électroniques : pourquoi Taïwan est au cœur du monde",
      hook: "Ton téléphone, ta voiture et l'intelligence artificielle dépendent de minuscules puces fabriquées en grande partie sur une seule île.",
      minutes: 4,
      level: "Intermédiaire",
      tldr: [
        "Les semi-conducteurs (ou puces) sont le « cerveau » de presque tous les objets électroniques.",
        "Les puces les plus avancées sont fabriquées en très grande majorité à Taïwan, par l'entreprise TSMC.",
        "États-Unis, Chine et Europe se livrent une course pour sécuriser cette technologie devenue stratégique."
      ],
      sections: [
        {
          title: "Une chaîne mondiale ultra-spécialisée",
          paragraphs: [
            "Fabriquer une puce mobilise plusieurs pays : la conception est souvent américaine (Nvidia, Apple, Qualcomm), les machines les plus pointues sont néerlandaises (ASML est le seul fabricant au monde des machines de lithographie EUV), et la fabrication des puces les plus fines se fait à Taïwan.",
            "Cette spécialisation est très efficace, mais elle crée des points de fragilité : si un maillon casse, toute la chaîne s'arrête. La pénurie de puces de 2021 a par exemple bloqué des usines automobiles dans le monde entier."
          ]
        },
        {
          title: "Pourquoi Taïwan est si sensible",
          paragraphs: [
            "La Chine considère Taïwan comme une partie de son territoire et n'exclut pas d'en reprendre le contrôle. Les États-Unis, eux, soutiennent l'île sur le plan militaire.",
            "Une crise autour de Taïwan ne serait donc pas seulement un conflit régional : elle pourrait priver le monde de la majorité de ses puces avancées. Certains parlent de « bouclier de silicium » : l'importance de TSMC protégerait l'île, car personne n'a intérêt à ce que sa production s'arrête."
          ]
        },
        {
          title: "La course à la souveraineté",
          paragraphs: [
            "Depuis 2022, les États-Unis limitent l'exportation de puces et de machines avancées vers la Chine, pour freiner ses progrès, notamment en intelligence artificielle. La Chine investit massivement pour produire ses propres puces.",
            "Les États-Unis (CHIPS Act) comme l'Union européenne (European Chips Act) subventionnent aussi la construction d'usines sur leur sol pour être moins dépendants de l'Asie."
          ]
        }
      ],
      forMe: "Une seule usine à l'arrêt peut retarder la livraison de ta voiture, faire monter le prix de ta console ou ralentir le développement des outils d'IA que tu utilises.",
      figures: [
        { value: "≈ 90 %", label: "des puces les plus avancées sont produites à Taïwan" },
        { value: "1", label: "seul fabricant de machines EUV au monde : ASML (Pays-Bas)" }
      ],
      terms: ["semi-conducteur", "souverainete", "dependance", "chaine-appro"],
      quiz: [
        {
          q: "Quelle entreprise fabrique la majorité des puces les plus avancées ?",
          options: ["Apple", "TSMC", "Samsung", "Intel"],
          answer: 1,
          explain: "TSMC, basée à Taïwan, fabrique les puces conçues par Apple, Nvidia et beaucoup d'autres. Apple conçoit ses puces mais ne les fabrique pas."
        },
        {
          q: "Que désigne le « bouclier de silicium » ?",
          options: [
            "Un système de défense antimissile",
            "L'idée que l'importance mondiale des puces taïwanaises protège l'île",
            "Une protection d'écran de téléphone",
            "Une alliance militaire en Asie"
          ],
          answer: 1,
          explain: "Comme le monde entier dépend des puces taïwanaises, une attaque contre l'île aurait un coût énorme pour tous, y compris pour la Chine."
        }
      ],
      sources: [
        { short: "SIA", name: "Semiconductor Industry Association", url: "https://www.semiconductors.org/" },
        { short: "Commission européenne", name: "Commission européenne, European Chips Act", url: "https://digital-strategy.ec.europa.eu/fr/policies/european-chips-act" }
      ],
      visuals: [
        {
          kind: "map",
          title: "Une puce, trois continents",
          intro: "Les étapes clés de la fabrication d'une puce avancée. Touche un lieu pour zoomer.",
          points: [
            { name: "Santa Clara", coords: [-121.96, 37.35], zoom: 12, text: "La Silicon Valley, en Californie : c'est ici que Nvidia (entre autres) conçoit ses puces. Mais elle ne les fabrique pas." },
            { name: "Veldhoven", coords: [5.4, 51.42], zoom: 12, text: "Aux Pays-Bas, siège d'ASML, seul fabricant au monde des machines de lithographie EUV indispensables aux puces les plus fines." },
            { name: "Hsinchu", coords: [120.97, 24.8], zoom: 12, text: "Au nord de Taïwan, siège de TSMC, qui fabrique la très grande majorité des puces les plus avancées du monde." },
            { name: "Détroit de Taïwan", coords: [119.6, 24.3], zoom: 9, text: "Environ 130 km au plus étroit séparent Taïwan de la Chine continentale." }
          ],
          source: "SIA ; sites des entreprises"
        }
      ]
    },

    {
      id: "sanctions",
      plus: true, // cours d'approfondissement : réservé à Geonomix+
      emoji: "🔒",
      theme: "geo",
      title: "Sanctions économiques : faire la guerre sans armes ?",
      hook: "Depuis l'invasion de l'Ukraine, la Russie est visée par des milliers de sanctions. Comment ça marche, et est-ce que ça fonctionne ?",
      minutes: 4,
      level: "Intermédiaire",
      tldr: [
        "Une sanction économique est une mesure qui coupe ou limite les échanges avec un pays, une entreprise ou une personne pour faire pression.",
        "Après l'invasion de l'Ukraine en 2022, l'Occident a gelé environ 300 milliards de dollars de réserves de la banque centrale russe et exclu plusieurs banques russes du système SWIFT [1].",
        "Les sanctions affaiblissent une économie, mais le pays visé trouve souvent des contournements."
      ],
      sections: [
        {
          title: "La boîte à outils",
          paragraphs: [
            "Il existe plusieurs types de sanctions : l'embargo (interdire d'acheter ou de vendre certains produits), le gel des avoirs (bloquer l'argent placé à l'étranger), l'interdiction de voyager pour certaines personnalités, ou l'exclusion du système financier international.",
            "Elles peuvent viser un pays entier ou des cibles précises : des oligarques, des entreprises d'armement, des banques."
          ]
        },
        {
          title: "Le cas de la Russie",
          paragraphs: [
            "Après février 2022, l'Union européenne, les États-Unis et leurs alliés ont adopté des sanctions sans précédent : gel des réserves de la banque centrale russe, exclusion de banques de SWIFT (la messagerie qui permet les virements internationaux), embargo sur le pétrole russe transporté par mer et plafonnement de son prix.",
            "L'Europe a aussi fortement réduit ses achats de gaz russe, dont elle dépendait beaucoup, ce qui a contribué à la flambée des prix de l'énergie."
          ]
        },
        {
          title: "Est-ce que ça marche ?",
          paragraphs: [
            "Oui et non. La Russie a perdu l'accès à des technologies et à une partie de ses revenus. Mais elle a redirigé ses ventes de pétrole vers la Chine et l'Inde, et utilise une « flotte fantôme » de vieux pétroliers pour contourner les règles.",
            "C'est la limite des sanctions : elles sont d'autant plus efficaces que beaucoup de pays les appliquent. Et elles ont aussi un coût pour ceux qui les imposent."
          ]
        }
      ],
      forMe: "La hausse des factures d'énergie en Europe en 2022 est en partie liée à la rupture avec le gaz russe : les sanctions ont un prix, aussi pour ceux qui les décident.",
      figures: [
        { value: "≈ 300 Md$", label: "de réserves russes immobilisées par l'Occident" },
        { value: "2022", label: "début des sanctions massives contre la Russie" }
      ],
      terms: ["sanctions", "embargo", "swift", "g7", "dependance"],
      quiz: [
        {
          q: "À quoi sert SWIFT ?",
          options: [
            "C'est une monnaie numérique",
            "C'est la messagerie qui permet aux banques de faire des virements internationaux",
            "C'est une agence de notation",
            "C'est un accord militaire"
          ],
          answer: 1,
          explain: "SWIFT relie plus de 11 000 institutions financières. En être exclu complique fortement les paiements avec l'étranger."
        },
        {
          q: "Comment la Russie a-t-elle contourné une partie des sanctions sur son pétrole ?",
          options: [
            "En arrêtant de produire",
            "En vendant davantage à la Chine et à l'Inde",
            "En rejoignant l'Union européenne",
            "En payant uniquement en euros"
          ],
          answer: 1,
          explain: "Elle a réorienté ses exportations vers l'Asie, notamment la Chine et l'Inde, souvent à prix réduit."
        }
      ],
      sources: [
        { short: "Conseil de l'UE", name: "Conseil de l'Union européenne, sanctions contre la Russie", url: "https://www.consilium.europa.eu/fr/policies/sanctions-against-russia/" },
        { short: "SWIFT", name: "SWIFT, à propos", url: "https://www.swift.com/about-us" }
      ]
    },

    {
      id: "dollar",
      plus: true, // cours d'approfondissement : réservé à Geonomix+
      emoji: "💵",
      theme: "eco",
      title: "Pourquoi le dollar domine le monde",
      hook: "Le pétrole se vend en dollars, les banques centrales stockent des dollars… Comment une monnaie nationale est devenue la monnaie de la planète ?",
      minutes: 3,
      level: "Intermédiaire",
      tldr: [
        "Le dollar est la principale monnaie de réserve : près de 60 % des réserves de change des banques centrales sont en dollars [1].",
        "Cette domination remonte aux accords de Bretton Woods (1944), qui ont placé le dollar au centre du système monétaire mondial.",
        "Elle donne aux États-Unis un « privilège exorbitant » : emprunter moins cher et pouvoir sanctionner d'autres pays via leur système financier."
      ],
      sections: [
        {
          title: "Une histoire qui commence en 1944",
          paragraphs: [
            "À la fin de la Seconde Guerre mondiale, 44 pays se réunissent à Bretton Woods, aux États-Unis. Ils décident que leurs monnaies seront rattachées au dollar, lui-même convertible en or.",
            "En 1971, le président Nixon met fin à la convertibilité du dollar en or. Mais l'habitude est prise : le dollar reste la monnaie de référence pour le commerce et la finance."
          ]
        },
        {
          title: "Le « privilège exorbitant »",
          paragraphs: [
            "L'expression vient du ministre français Valéry Giscard d'Estaing dans les années 1960. Comme tout le monde a besoin de dollars, les États-Unis peuvent s'endetter à moindre coût et financer leurs déficits plus facilement.",
            "Autre avantage : presque tous les paiements en dollars passent, à un moment, par des banques américaines. Cela donne à Washington un levier puissant pour sanctionner des pays ou des entreprises."
          ]
        },
        {
          title: "La fin du dollar roi ?",
          paragraphs: [
            "La Chine, la Russie et d'autres pays des BRICS cherchent à commercer davantage dans leurs propres monnaies, notamment pour échapper aux sanctions américaines. Certaines banques centrales achètent aussi beaucoup d'or.",
            "Mais remplacer le dollar est difficile : il faut une monnaie librement échangeable, des marchés financiers immenses et la confiance des investisseurs. Pour l'instant, aucune alternative ne réunit tout cela, l'euro restant loin derrière."
          ]
        }
      ],
      forMe: "Quand le dollar se renforce face à l'euro, ton voyage aux États-Unis coûte plus cher, tout comme le pétrole, qui s'achète en dollars. À l'inverse, un dollar faible rend les produits européens moins compétitifs à l'export.",
      figures: [
        { value: "≈ 58 %", label: "des réserves de change mondiales sont en dollars", src: 1 },
        { value: "≈ 20 %", label: "pour l'euro, deuxième monnaie de réserve", src: 1 },
        { value: "1971", label: "fin de la convertibilité du dollar en or" }
      ],
      terms: ["monnaie-reserve", "banque-centrale", "brics", "sanctions"],
      quiz: [
        {
          q: "Quels accords ont placé le dollar au centre du système monétaire mondial ?",
          options: ["Le traité de Versailles", "Les accords de Bretton Woods", "Le traité de Maastricht", "Les accords de Paris"],
          answer: 1,
          explain: "En 1944, à Bretton Woods, 44 pays ont rattaché leurs monnaies au dollar, lui-même convertible en or."
        },
        {
          q: "Qui a inventé l'expression « privilège exorbitant » ?",
          options: ["Donald Trump", "Karl Marx", "Valéry Giscard d'Estaing", "Christine Lagarde"],
          answer: 2,
          explain: "Valéry Giscard d'Estaing, alors ministre des Finances, dénonçait dans les années 1960 l'avantage que le dollar donnait aux États-Unis."
        }
      ],
      sources: [
        { short: "FMI", name: "FMI, COFER : composition des réserves de change", url: "https://data.imf.org" },
        { short: "BRI", name: "Banque des règlements internationaux, enquête triennale sur les changes", url: "https://www.bis.org/statistics/rpfx22.htm" }
      ],
      visuals: [
        {
          kind: "chart",
          type: "line",
          title: "La part du dollar dans les réserves mondiales",
          subtitle: "Part des réserves de change déclarées détenue en dollars, en fin d'année",
          xLabel: "Année",
          unit: "Part (%)",
          suffix: " %",
          yMin: 0,
          data: [["1999", 71.0], ["2005", 66.5], ["2010", 62.2], ["2015", 65.7], ["2020", 59.0], ["2024", 57.8]],
          source: "FMI, COFER"
        }
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
