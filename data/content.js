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
      theme: "eco",
      title: "L'ascenseur social : ce que disent les données",
      hook: "Gagner plus que ses parents : c'était presque garanti pour un Américain né en 1940, c'est une chance sur deux pour ceux nés dans les années 1980. Que s'est-il passé, et qu'est-ce qui aide un enfant à monter ? Un cours inspiré des travaux de l'économiste de Harvard Raj Chetty.",
      minutes: 9,
      level: "Débutant",
      tldr: [
        "Aux États-Unis, environ 90 % des enfants nés en 1940 ont fini par gagner plus que leurs parents ; pour ceux nés dans les années 1980, c'est à peu près 50 % [1][2].",
        "La croissance n'a pas disparu : elle a surtout profité aux plus aisés. Avec un partage aussi égal qu'après-guerre, plus de 70 % de cette chute serait effacée, selon l'équipe de Chetty [1].",
        "Le quartier où l'on grandit compte : des enfants partis avant 13 ans vers des quartiers moins pauvres gagnent nettement plus une fois adultes [4].",
        "Les amis aussi : avoir des amis de milieux plus aisés est l'un des meilleurs prédicteurs de l'ascension sociale jamais mesurés [5]."
      ],
      sections: [
        {
          title: "Le rêve américain, mis en chiffre",
          paragraphs: [
            "Les économistes appellent ==mobilité absolue== la part des enfants qui, adultes, gagnent plus que leurs parents au même âge (en tenant compte de l'inflation). C'est une façon simple de mesurer le « rêve américain ».",
            "En 2016, l'équipe de Raj Chetty, alors à Stanford puis à Harvard, la calcule pour toutes les générations depuis 1940 grâce aux données fiscales américaines. Résultat : ==environ 90 % pour les enfants nés en 1940, environ 50 % pour ceux nés dans les années 1980== [1][2].",
            "Pourquoi cette chute ? La croissance a ralenti, mais surtout ses fruits sont allés de plus en plus vers le haut de l'échelle. Les auteurs calculent que si la croissance récente avait été partagée comme celle des années 1940-1950, plus de 70 % du recul serait effacé [1].",
            "Ce diagnostic est discuté : en 2022, l'économiste Scott Winship retrouve la même baisse, mais selon ses calculs une croissance plus rapide aurait bien plus relevé la mobilité qu'un partage plus égal ; il conteste donc qu'elle s'explique surtout par la hausse des inégalités [3]. C'est un bon exemple de débat d'économistes : ==tout le monde est d'accord sur le chiffre, pas sur sa cause==."
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
          title: "Dis-moi où tu grandis…",
          paragraphs: [
            "Les données de Chetty montrent que deux enfants issus de familles aussi modestes n'ont pas du tout les mêmes chances selon la ville, et même le quartier, où ils grandissent.",
            "Pour savoir si c'est le quartier lui-même qui joue, ou seulement le type de familles qui y vivent, les chercheurs ont repris une expérience grandeur nature des années 1990 : ==Moving to Opportunity==. Des familles pauvres tirées au sort ont reçu une aide pour déménager dans des quartiers moins pauvres ; d'autres non.",
            "Comme c'est le hasard qui décide, on peut comparer. Résultat : ==les enfants partis avant 13 ans gagnent, adultes, environ 31 % de plus== que ceux restés dans leur quartier d'origine [4]. Plus on déménage jeune, plus l'effet est fort : c'est le temps passé dans un bon environnement qui compte."
          ],
          plain: {
            title: "la loterie qui a changé des vies",
            steps: [
              "Années 1990 : des familles de logements sociaux très pauvres s'inscrivent à un programme fédéral.",
              "Un tirage au sort décide qui reçoit un bon pour louer dans un quartier moins pauvre.",
              "Les chercheurs suivent les enfants pendant des années grâce aux données fiscales.",
              "Ceux qui ont déménagé avant 13 ans gagnent environ 31 % de plus une fois adultes [4] : le quartier a un vrai effet, pas seulement les familles qui y vivent."
            ]
          }
        },
        {
          title: "Dis-moi qui sont tes amis…",
          paragraphs: [
            "En 2022, l'équipe de Chetty analyse, avec Meta, les amitiés de ==72 millions d'utilisateurs américains de Facebook== âgés de 25 à 44 ans, soit 21 milliards de liens d'amitié [5].",
            "Elle mesure la ==« connectivité économique »== : la part d'amis de milieux aisés chez les personnes de milieux modestes. C'est l'un des meilleurs prédicteurs de l'ascension sociale jamais mesurés, bien plus que d'autres formes de lien social comme la densité des amitiés ou l'engagement associatif [5].",
            "Pourquoi ? Les amis donnent des informations (sur les études, les métiers), des modèles et parfois des contacts. Et ces amitiés dépendent des lieux de rencontre : quand des milieux différents se croisent à l'école, ils se lient d'autant plus que l'établissement ne les sépare pas en groupes [5]."
          ]
        },
        {
          title: "Les « Einstein perdus »",
          paragraphs: [
            "Autre étude célèbre de l'équipe : qui devient inventeur ? Les chercheurs croisent les brevets et les revenus des parents. Les enfants des familles riches ont beaucoup plus de chances de déposer des brevets que des enfants tout aussi doués en mathématiques à l'école, mais issus de familles modestes [6].",
            "Et l'exposition compte : ==grandir entouré d'inventeurs, voir des exemples d'innovation, augmente fortement les chances de devenir soi-même inventeur== [6]. Des talents se perdent simplement parce qu'ils n'ont jamais vu le métier de près : ce sont les « Einstein perdus »."
          ]
        },
        {
          title: "À quoi servent ces travaux ?",
          paragraphs: [
            "==Mesurer pour agir.== En cartographiant les chances de chaque quartier, ces travaux aident à cibler les aides au logement, les écoles et les programmes de mentorat là où ils changent le plus de choses.",
            "==Changer la question.== Au lieu de demander seulement « combien redistribuer ? », on se demande aussi « où et comment donner sa chance à chaque enfant ? » : quartier, école, réseaux, modèles.",
            "==Et en Europe ?== Ces données portent sur les États-Unis. Les mécanismes (lieu de vie, amis, exemples) valent sans doute ailleurs, mais leurs effets doivent être mesurés pays par pays avant d'en tirer des conclusions."
          ]
        },
        {
          title: "Les limites",
          paragraphs: [
            "==Une mesure parmi d'autres.== La mobilité « absolue » dépend beaucoup de la croissance générale ; la mobilité « relative » (changer de place dans l'échelle) raconte une autre histoire.",
            "==Corrélation ou cause ?== Les amitiés entre milieux sont liées à l'ascension sociale, mais ce n'est pas forcément l'amitié qui la provoque : c'est pourquoi les expériences par tirage au sort, comme Moving to Opportunity, comptent tant [4].",
            "==Des causes discutées.== Le rôle des inégalités dans la baisse de la mobilité fait débat entre économistes [1][3]."
          ]
        },
        {
          title: "Pour aller plus loin : le cours gratuit de Harvard",
          paragraphs: [
            "Ce cours s'inspire du cours « Using Big Data to Solve Economic and Social Problems » de Raj Chetty et Gregory Bruich, donné à Harvard. Il est en accès libre en ligne (en anglais) : 18 leçons avec vidéos, diapositives et notes, sans aucun prérequis en économie ou en statistiques [7].",
            "Il couvre aussi l'éducation, la santé, l'innovation ou les inégalités, toujours avec la même méthode : partir des grandes bases de données pour répondre à des questions concrètes [7]."
          ]
        }
      ],
      forMe: "Ton parcours ne dépend pas que de tes notes : ton quartier, ton école, les gens que tu côtoies et les métiers que tu as pu voir de près comptent aussi. Pour un étudiant, c'est une raison de plus de multiplier les rencontres, les stages et les mentors.",
      figures: [
        { value: "≈ 90 % → 50 %", label: "Américains qui gagnent plus que leurs parents : nés en 1940, puis nés dans les années 1980", src: 1 },
        { value: "+31 %", label: "revenus adultes des enfants partis avant 13 ans vers un quartier moins pauvre", src: 4 },
        { value: "72 millions", label: "utilisateurs de Facebook étudiés pour mesurer la « connectivité économique »", src: 5 }
      ],
      terms: ["pib", "pouvoir-achat", "dette-publique"],
      quiz: [
        { q: "Quelle part des Américains nés dans les années 1980 gagnent plus que leurs parents ?", options: ["Environ 90 %", "Environ 50 %", "Environ 10 %", "Tous"], answer: 1, explain: "C'était environ 90 % pour les enfants nés en 1940 ; c'est tombé à environ 50 % pour ceux nés dans les années 1980." },
        { q: "Qu'a montré l'expérience Moving to Opportunity ?", options: ["Le quartier n'a aucun effet", "Les enfants qui déménagent jeunes vers un quartier moins pauvre gagnent plus adultes", "Déménager fait baisser les revenus", "Seuls les adultes en profitent"], answer: 1, explain: "Les enfants partis avant 13 ans gagnent environ 31 % de plus une fois adultes." },
        { q: "Qu'est-ce que la « connectivité économique » ?", options: ["Le débit internet d'un quartier", "La part d'amis de milieux aisés chez les personnes de milieux modestes", "Le nombre de banques", "Le taux de chômage"], answer: 1, explain: "C'est l'un des meilleurs prédicteurs de l'ascension sociale, selon l'étude de 2022 sur 72 millions d'utilisateurs de Facebook." },
        { q: "Qui sont les « Einstein perdus » ?", options: ["Des physiciens disparus", "Des enfants doués qui ne deviennent pas inventeurs faute d'exposition à l'innovation", "Des brevets perdus", "Des chercheurs partis à l'étranger"], answer: 1, explain: "Voir des inventeurs de près augmente fortement les chances d'en devenir un ; beaucoup de talents de milieux modestes n'ont pas cette chance." }
      ],
      sources: [
        { short: "Opportunity Insights", name: "Opportunity Insights, « The Fading American Dream: Trends in Absolute Income Mobility Since 1940 » (Chetty, Grusky, Hell, Hendren, Manduca, Narang)", url: "https://opportunityinsights.org/paper/the-fading-american-dream/" },
        { short: "Harvard Gazette", name: "Harvard Gazette, « Chetty and Sandel take on the American dream », octobre 2023", url: "https://news.harvard.edu/gazette/story/2023/10/chetty-and-sandel-take-on-the-american-dream" },
        { short: "Silicon Canals", name: "Silicon Canals, « The American dream can be put in a number and that number has halved » (présente la réanalyse de Scott Winship, 2022)", url: "https://siliconcanals.com/m-the-american-dream-can-be-put-in-a-number-and-that-number-has-halved-9-in-10-children-born-in-1940-grew-up-to-out-earn-their-parents-for-those-born-in-the-1980s-it-is-now-about-1-in-2-bar/" },
        { short: "FMI", name: "FMI, Finance & Développement, « Harvard Economist Raj Chetty on Social Mobility and Big Data », septembre 2018", url: "https://www.imf.org/en/publications/fandd/issues/2018/09/harvard-economist-raj-chetty-profile-people/index.md" },
        { short: "NBER", name: "NBER, Chetty et al., « Social Capital I: Measurement and Associations with Economic Mobility », document de travail 30313 (publié dans Nature, 2022)", url: "https://www.nber.org/system/files/working_papers/w30313/w30313.pdf" },
        { short: "RSA", name: "RSA Journal, « Capital gains » (entretien avec Raj Chetty)", url: "https://www.thersa.org/rsa-journal/capital-gains" },
        { short: "Opportunity Insights", name: "Opportunity Insights, « Using Big Data to Solve Economic and Social Problems » (cours en ligne gratuit)", url: "https://opportunityinsights.org/course/" }
      ],
      visuals: [
        { kind: "chart", type: "bar", title: "Le rêve américain s'est rétréci", subtitle: "Part des enfants qui gagnent, adultes, plus que leurs parents, selon leur génération (États-Unis)", xLabel: "Nés en", unit: "Part (%)", suffix: " %", data: [["1940", 90], ["Années 1980", 50]], source: "Opportunity Insights (Chetty et al.)" }
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

  // Cours gratuits de Harvard pour aller plus loin (demande de l'auteur, 2 nov. 2026 : « Harvard propose des cours
  // gratuits en ligne, inspire-toi ») : affichés dans l'onglet Cours ; nos cours s'en inspirent sans les recopier.
  harvard: [
    { title: "Using Big Data to Solve Economic and Social Problems", who: "Raj Chetty et Gregory Bruich", where: "Opportunity Insights (Harvard)", what: "18 leçons en vidéo sur l'ascenseur social, l'éducation, la santé et l'innovation, à partir des grandes bases de données ; aucun prérequis.", ours: "ascenseur-social", url: "https://opportunityinsights.org/course/" },
    { title: "Justice Today: Money, Markets, and Morals", who: "Michael J. Sandel", where: "edX (Harvard)", what: "8 semaines sur la morale des marchés : jusqu'où peut-on tout acheter et vendre ? Où s'arrête la logique du marché ?", url: "https://pll.harvard.edu/course/justice-today-money-markets-and-morals-edx" },
    { title: "U.S. Public Policy: Social, Economic, and Foreign Policies", who: "HarvardX", where: "edX", what: "Les politiques budgétaire et monétaire américaines, la fiscalité, les accords commerciaux et la politique étrangère.", ours: "is-lm", url: "https://www.edx.org/learn/public-policy/harvard-university-u-s-public-policy-social-economic-and-foreign-policies" },
    { title: "Public Economics", who: "Harvard", where: "en ligne (vidéos)", what: "Impôts, aides sociales, biens publics, pollution et assurance sociale : ce que fait l'État et pourquoi.", url: "https://www.openculture.com/public-economics-a-free-online-course-from-harvard" }
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
