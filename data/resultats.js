// Résultats d'entreprises (Geonomix+, demande de l'auteur du 15 nov. 2026 : « les dates à venir, les bilans,
// les objectifs des entreprises, si c'est mieux que les objectifs prévus ou moins bien »).
// Un élément = une publication de résultats, à venir (pas de `act` dans `lines`) ou publiée.
//   id, company, ticker, country (code ISO à 2 lettres), sector, date (AAAA-MM-JJ), time ("open" avant l'ouverture,
//   "close" après la clôture), period (« T3 2026 »…),
//   lines : [{ label, unit, exp (attendu par les analystes), act (publié, absent si à venir), src (n° de source) }],
//   verdict : "mieux" | "conforme" | "moins" | "mitige" (seulement une fois publié),
//   guidance : { dir: "releve" | "maintenu" | "abaisse" | "attendu", text } : les objectifs de l'entreprise,
//   move : { value, text } : la réaction de l'action (toujours sourcée),
//   summary (une phrase), points (ce qu'il faut retenir, ou ce qu'on va regarder si à venir), sources.
// Pour comprendre, pas un conseil pour acheter ou vendre.
window.GEOCO = window.GEOCO || {};
window.GEOCO.resultats = [
  {
    id: "nvidia-t3-2027",
    company: "Nvidia",
    ticker: "NVDA",
    country: "US",
    sector: "Puces et IA",
    date: "2026-11-17",
    time: "close",
    period: "T3 de l'exercice 2027 (août-octobre 2026)",
    lines: [
      { label: "Chiffre d'affaires", unit: "Md$", exp: 108.8, src: 1 },
      { label: "Bénéfice par action ajusté", unit: "$", exp: 2.49, src: 2 }
    ],
    guidance: { dir: "attendu", text: "Nvidia s'était fixé 108 milliards de dollars de chiffre d'affaires pour ce trimestre, à 2 % près, avec une marge brute visée de 74 % [1]." },
    summary: "Le premier rendez-vous de Nvidia sans Jensen Huang : le fondateur a quitté la direction le 12 novembre, et la directrice financière Colette Kress assure l'intérim [3][4].",
    points: [
      "Les analystes attendent un peu plus que l'objectif de l'entreprise : environ 108,8 milliards de dollars de chiffre d'affaires selon MarketBeat, et un bénéfice par action ajusté d'environ 2,49 dollars selon Zacks (13 estimations, de 2,34 à 2,70 dollars) [1][2].",
      "Nvidia a dépassé le consensus de Zacks lors de chacun de ses quatre derniers trimestres [2] : un résultat seulement « dans la fourchette » pourrait donc décevoir.",
      "Le chiffre le plus regardé sera l'objectif du trimestre suivant, qui dit si la demande de puces pour l'intelligence artificielle continue d'accélérer [1].",
      "Selon LSEG, cité par Boursorama, le consensus vise environ 109 milliards de dollars de chiffre d'affaires [5].",
      "Les banques sont partagées : Wedbush s'attend à un chiffre d'affaires au-dessus des prévisions et à de solides perspectives pour le trimestre suivant [6], RBC parle d'une demande « robuste » [7], tandis que Bernstein a abaissé son opinion à « neutre » [8].",
      "Le titre a perdu plus de 30 % depuis son plus haut historique, surtout par crainte d'un ralentissement des centres de données d'IA [8].",
      "Le conseil d'administration a annoncé le départ de Jensen Huang, PDG et membre du conseil, avec effet immédiat, et nommé Harvey C. Jones premier président du conseil [3]. L'action a perdu jusqu'à 13 % après l'annonce avant de se reprendre en partie [4]."
    ],
    sources: [
      { short: "Yahoo Finance", name: "Yahoo Finance (Barchart), « What to Expect From NVIDIA's Next Quarterly Earnings Report », nov. 2026", url: "https://finance.yahoo.com/markets/stocks/articles/expect-nvidias-next-quarterly-earnings-151739351.html" },
      { short: "Zacks", name: "Zacks via TradingView, « NVIDIA Gears Up for Q3 Earnings », nov. 2026", url: "https://www.tradingview.com/news/zacks:58c899221094b:0-nvidia-gears-up-for-q3-earnings-should-investors-buy-the-stock/" },
      { short: "Nvidia", name: "Nvidia, « NVIDIA Announces CEO Transition » (communiqué), 12 nov. 2026", url: "https://nvidianews.nvidia.com/news/nvidia-announces-ceo-transition" },
      { short: "Al Jazeera", name: "Al Jazeera, « Why did Nvidia CEO Jensen Huang resign, and who is Colette Kress? », 12 nov. 2026", url: "https://www.aljazeera.com/news/2026/11/12/why-did-nvidia-ceo-jensen-huang-resign-and-who-is-colette-kress" },
      { short: "Boursorama", name: "Boursorama (Reuters), « La semaine à venir à Wall Street : les résultats de Nvidia et l'introduction en bourse d'Anthropic… », 13 nov. 2026", url: "https://www.boursorama.com/bourse/actualites/la-semaine-a-venir-a-wall-street-les-resultats-de-nvidia-et-l-introduction-en-bourse-d-anthropic-mettent-a-l-epreuve-un-secteur-de-l-ia-en-pleine-effervescence-9d0368751163fed3759e651cd72c6849" },
      { short: "Zonebourse", name: "Zonebourse, « Nvidia devrait dépasser les prévisions de chiffre d'affaires trimestriel… selon Wedbush », nov. 2026", url: "https://www.zonebourse.com/actualite-bourse/nvidia-devrait-depasser-les-previsions-de-chiffre-da-affaires-trimestriel-les-investisseurs-reagis-ce785ed9d18ef625" },
      { short: "Zonebourse", name: "Zonebourse, « La demande « robuste » de Nvidia soutient de solides perspectives trimestrielles, selon RBC », nov. 2026", url: "https://www.zonebourse.com/actualite-bourse/la-demande-robuste-de-nvidia-soutient-de-solides-perspectives-trimestrielles-selon-rbc-ce785fd3df8ef627" },
      { short: "Zonebourse", name: "Zonebourse, « Le PER de Nvidia tombe à son plus bas niveau en 14 ans, mais le départ du directeur général… », 12 nov. 2026", url: "https://www.zonebourse.com/actualite-bourse/le-per-de-nvidia-tombe-a-son-plus-bas-niveau-en-14-ans-mais-le-depart-du-directeur-general-et-les-i-ce785ed8d080f72d" }
    ]
  },
  {
    id: "home-depot-t3-2026",
    company: "Home Depot",
    ticker: "HD",
    country: "US",
    sector: "Distribution (bricolage)",
    date: "2026-11-17",
    time: "open",
    period: "T3 2026",
    lines: [
      { label: "Chiffre d'affaires", unit: "Md$", exp: 42.8, src: 1 },
      { label: "Bénéfice par action", unit: "$", exp: 3.84, src: 1 }
    ],
    summary: "Le géant américain du bricolage donne des nouvelles du marché du logement : quand peu de maisons se vendent, les gros chantiers de rénovation se font attendre [2].",
    points: [
      "Les analystes attendent 3,84 dollars de bénéfice par action (+2,7 % sur un an) pour 42,8 milliards de dollars de chiffre d'affaires (+3,4 %) [1]. Zacks est un peu plus prudent, à 3,81 dollars [2].",
      "Tant que les ventes de logements ne repartent pas, la demande devrait rester tournée vers les petits travaux, ce qui limite les gros achats de rénovation [2].",
      "Résultats publiés avant l'ouverture de Wall Street, conférence à 9 h, heure de New York [3]."
    ],
    sources: [
      { short: "MarketBeat", name: "MarketBeat, « Home Depot (HD) Set to Post Earnings on Tuesday », 10 nov. 2026", url: "https://www.marketbeat.com/instant-alerts/upcoming-home-depot-hd-set-to-post-earnings-on-tuesday-2026-11-10/" },
      { short: "Yahoo Finance", name: "Yahoo Finance (Zacks), « Home Depot Pre-Q3 Earnings: Should You Buy or Stay Cautious? », nov. 2026", url: "https://finance.yahoo.com/markets/stocks/articles/home-depot-pre-q3-earnings-135400927.html" },
      { short: "Home Depot", name: "Home Depot, relations investisseurs, « Events & Presentations »", url: "https://ir.homedepot.com/events-and-presentations" }
    ]
  },
  {
    id: "target-t3-2026",
    company: "Target",
    ticker: "TGT",
    country: "US",
    sector: "Distribution",
    date: "2026-11-18",
    time: "open",
    period: "T3 2026",
    lines: [],
    summary: "Target publie la veille de Walmart : à eux deux, ils disent comment tient la consommation des ménages américains avant les fêtes [1].",
    points: [
      "Résultats attendus avant l'ouverture de Wall Street, le mercredi 18 novembre [1][2].",
      "À regarder : les ventes à magasins comparables et ce que l'enseigne dit de la saison des fêtes, qui pèse lourd dans son année [1]."
    ],
    sources: [
      { short: "Zacks", name: "Zacks via TradingView, « Walmart, Target, and Nvidia Headline a Pivotal Week for Q3 Earnings », nov. 2026", url: "https://www.tradingview.com/news/zacks:baeac9437094b:0-walmart-target-and-nvidia-headline-a-pivotal-week-for-q3-earnings/" },
      { short: "Morningstar", name: "Morningstar, « What's Happening in the Markets This Week », nov. 2026", url: "https://www.morningstar.com/markets/whats-happening-markets-this-week-32" }
    ]
  },
  {
    id: "walmart-t3-2027",
    company: "Walmart",
    ticker: "WMT",
    country: "US",
    sector: "Distribution",
    date: "2026-11-19",
    time: "open",
    period: "T3 de l'exercice 2027",
    lines: [
      { label: "Chiffre d'affaires", unit: "Md$", exp: 187.2, src: 1 },
      { label: "Bénéfice par action ajusté", unit: "$", exp: 0.63, src: 1 }
    ],
    guidance: { dir: "attendu", text: "Pour l'exercice entier, Walmart vise un bénéfice par action de 2,80 à 2,87 dollars et une hausse du chiffre d'affaires de 4 à 5 % [2]." },
    summary: "Le premier distributeur du monde sert de thermomètre de la consommation américaine : quand les ménages se serrent la ceinture, ils viennent chez lui [2].",
    points: [
      "Les analystes attendent 63 cents de bénéfice par action (+1,6 % sur un an) pour 187,2 milliards de dollars de chiffre d'affaires (+5,3 %) [1].",
      "Un analyste de Bank of America s'attend à ce que Walmart relève son objectif annuel vers le haut de sa fourchette [2].",
      "Date tirée des calendriers boursiers : Walmart publie d'habitude un jeudi, avant l'ouverture [1]."
    ],
    sources: [
      { short: "Zacks", name: "Zacks via TradingView, « Walmart, Target, and Nvidia Headline a Pivotal Week for Q3 Earnings », nov. 2026", url: "https://www.tradingview.com/news/zacks:baeac9437094b:0-walmart-target-and-nvidia-headline-a-pivotal-week-for-q3-earnings/" },
      { short: "GuruFocus", name: "GuruFocus via TradingView, « Walmart Q3 2026 Preview: Is the Consumer Still Holding Up? », nov. 2026", url: "https://www.tradingview.com/news/gurufocus:740281e5c094b:0-walmart-q3-2026-preview-is-the-consumer-still-holding-up/" }
    ]
  },
  {
    id: "amd-t3-2026",
    company: "AMD",
    ticker: "AMD",
    country: "US",
    sector: "Puces et IA",
    date: "2026-11-03",
    time: "close",
    period: "T3 2026",
    lines: [
      { label: "Chiffre d'affaires", unit: "Md$", exp: 13.11, act: 13.38, src: 1 },
      { label: "Bénéfice par action ajusté", unit: "$", exp: 1.95, act: 2.09, src: 2 },
      { label: "Objectif de chiffre d'affaires au T4", unit: "Md$", exp: 16.3, act: 17, src: 3 }
    ],
    verdict: "mieux",
    guidance: { dir: "releve", text: "AMD vise environ 17 milliards de dollars de chiffre d'affaires au quatrième trimestre, à 3 % près, au-dessus des 16,3 milliards attendus. Seule ombre : une marge brute visée d'environ 55 %, un peu sous les 55,5 % espérés [3]." },
    move: { value: "+5 %", text: "dans les échanges après la clôture [3]" },
    summary: "Chiffre d'affaires record, porté par les centres de données, et un objectif pour la fin d'année bien au-dessus des attentes [1][3].",
    points: [
      "Chiffre d'affaires de 13,38 milliards de dollars, en hausse d'environ 45 % sur un an, contre 13,11 milliards attendus selon les données S&P citées par StockStory [1].",
      "Les centres de données, où AMD vend ses puces pour l'intelligence artificielle, atteignent un record de 8,5 milliards de dollars, presque le double d'il y a un an (+97 %) [1].",
      "Le bénéfice par action ajusté ressort à 2,09 dollars, contre 1,95 dollar attendu [2]. Selon les normes comptables américaines (GAAP), il est de 1,46 dollar, pour un bénéfice net de 2,4 milliards de dollars et une marge brute de 54 % [4][5].",
      "Ce qui a le plus plu : l'objectif du trimestre suivant. Un saut de 13,4 à environ 17 milliards de dollars en un trimestre montre que les commandes de puces d'IA arrivent [3]."
    ],
    sources: [
      { short: "StockStory", name: "StockStory, « AMD (NASDAQ:AMD) surprises with Q3 sales, stock soars », nov. 2026", url: "https://stockstory.org/us/stocks/nasdaq/amd/news/earnings/amd-nasdaqamd-surprises-with-q3-sales-stock-soars" },
      { short: "Newsquawk", name: "Newsquawk, « Advanced Micro Devices Inc. (AMD) Q3 2026: Adj. EPS 2.09 (exp. 1.95), Revenue 13.4bln (exp. 13.1bln) »", url: "https://www.newsquawk.com/headlines/advanced-micro-devices-inc-amd-q3-2026-usd-adj-eps-209-exp-195-revenue-134bln-exp-131bln" },
      { short: "InvestingLive", name: "InvestingLive, « AMD shares rise after hours as Q4 revenue outlook of $17bn tops forecasts on AI ramp », nov. 2026", url: "https://investinglive.com/stocks/amd-shares-rise-after-hours-as-q4-revenue-outlook-of-17bn-tops-forecasts-on-ai-ramp/" },
      { short: "AMD", name: "AMD, « AMD Reports Third Quarter 2026 Financial Results » (communiqué, formulaire 8-K)", url: "https://www.sec.gov/Archives/edgar/data/0000002488/000000248826000188/q32026991.htm" },
      { short: "MarketScreener", name: "MarketScreener, « AMD Reports Third Quarter 2026 Financial Results », nov. 2026", url: "https://www.marketscreener.com/news/amd-reports-third-quarter-2026-financial-results-ce785fdedc89f625" }
    ]
  },
  {
    id: "cameco-t3-2026",
    company: "Cameco",
    ticker: "CCO",
    country: "CA",
    sector: "Uranium",
    date: "2026-10-30",
    time: "open",
    period: "T3 2026",
    lines: [
      { label: "Résultat net ajusté", unit: "M$ CA", prev: 32, act: -2, src: 2 },
      { label: "Production d'uranium du trimestre", unit: "M lb", act: 3.5, note: "−20 % sur un an", src: 2 }
    ],
    verdict: "moins",
    guidance: { dir: "abaisse", text: "Cameco ne vise plus que 19,5 à 20,5 millions de livres d'uranium produites cette année, contre 19,5 à 21,5 millions avant : le haut de la fourchette disparaît [2]." },
    move: { value: "−7,7 %", text: "à la Bourse de Toronto le jour des résultats, à 107,60 $ CA [3]" },
    summary: "Le géant canadien de l'uranium déçoit : une mine à l'arrêt plus longtemps que prévu a fait chuter la production de 20 % [2].",
    points: [
      "Résultats sous les attentes des analystes [4]. Hors éléments exceptionnels, Cameco affiche une petite perte de 2 millions de dollars canadiens, contre un bénéfice de 32 millions un an plus tôt ; le bénéfice net publié est de 43 millions, soit 0,10 dollar canadien par action [1][2].",
      "La cause principale : un arrêt de maintenance prolongé à Key Lake, en Saskatchewan, qui a fait tomber la production du trimestre à 3,5 millions de livres d'uranium, 20 % de moins qu'un an plus tôt [2].",
      "Moins de ventes, des coûts unitaires plus élevés et de moindres gains de sa participation dans Westinghouse ont aussi pesé, en partie compensés par des prix de vente plus élevés [2][5]. Le chiffre d'affaires du trimestre est de 619 millions de dollars canadiens [5].",
      "Cameco maintient un dividende annuel de 0,24 dollar canadien par action, payé le 15 décembre [2]."
    ],
    sources: [
      { short: "RTTNews", name: "RTTNews, « Cameco 9-Month Profit Falls, Narrows FY26 Guidance », oct. 2026", url: "https://www.rttnews.com/3706590/cameco-9-month-profit-falls-narrows-fy26-guidance.aspx" },
      { short: "Grafa", name: "Grafa, « Cameco Q3 2026 adjusted loss, uranium production falls », oct. 2026", url: "https://grafa.com/en/news/united-states/cameco-q3-2026-adjusted-loss-uranium-production-falls" },
      { short: "Yahoo Finance", name: "Yahoo Finance, Cameco (CCO.TO), cours de clôture du 30 oct. 2026", url: "https://finance.yahoo.com/quote/CCO.TO/analysis/" },
      { short: "Investing.com", name: "Investing.com, « Earnings call transcript: Cameco misses Q3 2026 estimates as shares fall », oct. 2026", url: "https://www.investing.com/news/transcripts/earnings-call-transcript-cameco-misses-q3-2026-estimates-as-shares-fall-93CH-4989724" },
      { short: "BNN Bloomberg", name: "BNN Bloomberg (La Presse canadienne), « Cameco excited, but cautious, about power demand from Big Tech », 30 oct. 2026", url: "https://www.bnnbloomberg.ca/business/company-news/2026/10/30/uranium-miner-cameco-reports-43m-q3-profit-revenue-edges-up-from-year-ago/" },
      { short: "MarketScreener", name: "MarketScreener, « Cameco Corporation Reports Earnings Results for the Third Quarter and Nine Months Ended September 30, 2026 »", url: "https://www.marketscreener.com/news/cameco-corporation-reports-earnings-results-for-the-third-quarter-and-nine-months-ended-september-30-ce785fd8d88df023" }
    ]
  },
  {
    id: "cn-t3-2026",
    company: "Canadien National (CN)",
    ticker: "CNR",
    country: "CA",
    sector: "Transport ferroviaire",
    date: "2026-10-30",
    time: "close",
    period: "T3 2026",
    lines: [
      { label: "Chiffre d'affaires", unit: "Md$ CA", exp: 4.63, act: 4.77, src: 2 },
      { label: "Bénéfice par action ajusté", unit: "$ CA", exp: 2.09, act: 2.16, src: 3 }
    ],
    verdict: "mieux",
    guidance: { dir: "maintenu", text: "CN garde son objectif d'une hausse du bénéfice par action ajusté « entre le milieu et le haut d'un seul chiffre » cette année, et dit se diriger plutôt vers le haut de cette fourchette [1]." },
    summary: "Le premier réseau ferroviaire du Canada transporte plus et gagne plus : chiffre d'affaires en hausse de 15 %, au-dessus des attentes [1][2].",
    points: [
      "Chiffre d'affaires de 4 771 millions de dollars canadiens, en hausse de 606 millions (+15 %) sur un an [1], contre environ 4,63 milliards attendus selon Investing.com [2] et 4,66 milliards selon FactSet [3].",
      "Bénéfice par action ajusté de 2,16 dollars canadiens, en hausse de 18 % [1], contre 2,09 dollars attendus selon FactSet [3]. Bénéfice net de 1 209 millions de dollars canadiens, contre 1 139 millions un an plus tôt [3].",
      "Les volumes transportés, mesurés en tonnes-milles brutes, augmentent d'environ 4 %, et CN a racheté environ 3,9 millions de ses actions pour 676 millions de dollars canadiens pendant le trimestre [3].",
      "Le ratio d'exploitation ajusté, la part du chiffre d'affaires mangée par les coûts, s'améliore à 61,0 % (0,4 point de mieux) [1].",
      "Bonne nouvelle pour les prochains mois : CN s'attend désormais à des récoltes de céréales 2026-2027 au-dessus de leur moyenne de cinq ans, et donc à plus de grain à transporter [1]."
    ],
    sources: [
      { short: "CN", name: "CN, « CN Delivers Strong Third Quarter Performance » (communiqué, formulaire 6-K), 30 oct. 2026", url: "https://www.sec.gov/Archives/edgar/data/0000016868/000001686826000041/a2026q3pressreleasestatssu.htm" },
      { short: "Investing.com", name: "Investing.com, « Résultats T3 2026 : Canadian National dépasse les prévisions », oct. 2026", url: "https://fr.investing.com/news/transcripts/resultats-t3-2026--canadian-national-depasse-les-previsions-93CH-3667241" },
      { short: "Zonebourse", name: "Zonebourse, « Le CN affiche un solide rendement au troisième trimestre », 30 oct. 2026", url: "https://www.zonebourse.com/actualite-bourse/le-cn-affiche-un-solide-rendement-au-troisieme-trimestre-ce785fdbda80f527" },
      { short: "CN", name: "CN, rapport de gestion du troisième trimestre 2026 (formulaire 6-K)", url: "https://www.sec.gov/Archives/edgar/data/0000016868/000001686826000041/a2026q3mda.htm" }
    ]
  },
  {
    id: "totalenergies-t3-2026",
    company: "TotalEnergies",
    ticker: "TTE",
    country: "FR",
    sector: "Énergie",
    date: "2026-10-29",
    time: "open",
    period: "T3 2026",
    lines: [
      { label: "Résultat net ajusté", unit: "Md$", exp: 8.9, act: 9.1, src: 2 },
      { label: "Résultat net publié", unit: "Md$", act: 8.3, src: 1 }
    ],
    verdict: "mieux",
    summary: "Bénéfice record pour le groupe français, porté par l'envolée des prix des hydrocarbures et des marges de raffinage [1][5].",
    points: [
      "Résultat net ajusté de 9,1 milliards de dollars, contre 8,9 milliards attendus par les analystes interrogés par le groupe, et plus du double d'un an plus tôt [2].",
      "Il bat tous les consensus : 8,9 milliards attendus par les analystes interrogés par le groupe [2], 8,73 milliards selon Visible Alpha [4], et 8,3 milliards en moyenne pour les 12 analystes du consensus LSEG [3].",
      "Il progresse aussi nettement par rapport au deuxième trimestre, où il était de 6,0 milliards de dollars [2].",
      "Le bénéfice net publié atteint 8,3 milliards de dollars, contre 3,7 milliards au troisième trimestre 2025 [1].",
      "Le raffinage et le gaz naturel liquéfié ont tiré le trimestre, avec une marge de raffinage de 33,2 dollars par tonne [1]. Le raffinage dégage 3,60 milliards de dollars, plus du double d'un an plus tôt, et le résultat du GNL est multiplié par 2,3, à 1,9 milliard [4].",
      "Le ratio d'endettement tombe à 9,1 %, 4 points de mieux qu'au deuxième trimestre [4]."
    ],
    sources: [
      { short: "AFP", name: "AFP via Connaissance des énergies, « TotalEnergies engrange un bénéfice net record au 3T avec l'envolée des hydrocarbures », 29 oct. 2026", url: "https://www.connaissancedesenergies.org/afp/totalenergies-engrange-un-benefice-net-record-au-3t-avec-lenvolee-des-hydrocarbures-261029" },
      { short: "Fortuneo", name: "Fortuneo Bourse, « TotalEnergies : les bénéfices s'envolent », 29 oct. 2026", url: "https://bourse.fortuneo.fr/actualites/totalenergies-les-benefices-s-envolent-6173808" },
      { short: "Boursorama", name: "Boursorama (Reuters), « TotalEnergies : le bénéfice net au T3 bondit de 127 % sur un an », 29 oct. 2026", url: "https://www.boursorama.com/bourse/actualites/totalenergies-le-benefice-net-au-t3-bondit-de-127-sur-un-an-cc1c045f02451130f8d019352aabe1fc" },
      { short: "ABC Bourse", name: "ABC Bourse, « TotalEnergies affiche des profits spectaculaires au 3e trimestre, les chiffres dépassent les prévisions », 29 oct. 2026", url: "https://www.abcbourse.com/marches/totalenergies-affiche-des-profits-spectaculaires-au-3e-trimestre-les-chiffres-d_705173" },
      { short: "Zonebourse", name: "Zonebourse, « TotalEnergies affiche un 3e trimestre solide malgré les tensions au Moyen-Orient », 29 oct. 2026", url: "https://www.zonebourse.com/actualite-bourse/totalenergies-affiche-un-3e-trimestre-solide-malgre-les-tensions-au-moyen-orient-ce785cd3df80f320" }
    ]
  },
  {
    id: "alphabet-t3-2026",
    company: "Alphabet (Google)",
    ticker: "GOOGL",
    country: "US",
    sector: "Internet et publicité",
    date: "2026-10-28",
    time: "close",
    period: "T3 2026",
    lines: [
      { label: "Chiffre d'affaires", unit: "Md$", exp: 127.9, act: 127.6, src: 2 },
      { label: "Bénéfice par action", unit: "$", exp: 3.03, act: 2.12, src: 2 }
    ],
    verdict: "moins",
    guidance: { dir: "maintenu", text: "Alphabet garde inchangée sa prévision d'investissements pour 2026, malgré la chute de son flux de trésorerie [3]." },
    move: { value: "−10 %", text: "et plus dans les échanges après la clôture [1]" },
    summary: "Google rate de peu son chiffre d'affaires et nettement son bénéfice : le cloud explose, mais la recherche et YouTube déçoivent [1][2].",
    points: [
      "Chiffre d'affaires d'environ 127,6 milliards de dollars, en hausse de 25 %, sous les attentes : 127,9 milliards selon Newsquawk [2], 128,2 milliards selon le consensus LSEG [5].",
      "Bénéfice de 2,12 dollars par action, en baisse d'environ 26 % sur un an, contre 3,02 dollars attendus selon FactSet ; l'écart vient en bonne partie d'une perte d'environ 8,7 milliards de dollars sur des investissements [1][5]. Même hors éléments exceptionnels, le bénéfice ajusté (2,67 dollars) reste sous le consensus [5].",
      "Google Cloud a plus que doublé sur un an et dépasse les attentes, mais la publicité (82 milliards de dollars) est en dessous : le mode IA de la recherche ralentit les publicités liées aux recherches [4][5].",
      "Les dépenses pour les centres de données d'IA pèsent : 51,4 milliards de dollars d'investissements sur le trimestre, et un flux de trésorerie disponible négatif d'environ 9,1 milliards [3][5].",
      "Le lendemain matin, l'action perdait encore environ 10 % avant l'ouverture de Wall Street [6]."
    ],
    sources: [
      { short: "AP", name: "AP via NY1, « Google misses revenue expectations, Alphabet stock sinks in early after-hours trading », 28 oct. 2026", url: "https://ny1.com/nyc/all-boroughs/ap-top-news/2026/10/28/google-misses-revenue-expectations-alphabet-stock-sinks-in-early-after-hours-trading" },
      { short: "Newsquawk", name: "Newsquawk, « Alphabet (GOOGL) Q3 2026: EPS 2.12 (exp. 3.03), Revenue 127.6bln (exp. 127.91bln) »", url: "https://www.newsquawk.com/headlines/alphabet-googl-q3-2026-usd-eps-212-exp-303-revenue-1276bln-exp-12791bln" },
      { short: "CNBC", name: "CNBC, « Alphabet (GOOGL) earnings Q3 2026 », 28 oct. 2026", url: "https://www.cnbc.com/2026/10/28/alphabet-googl-earnings-q3-2026.html" },
      { short: "InvestingLive", name: "InvestingLive, « Alphabet Q3: Google Cloud revenue jumps 103% but search and ad sales miss forecasts », oct. 2026", url: "https://investinglive.com/stocks/alphabet-q3-google-cloud-revenue-jumps-103-but-search-and-ad-sales-miss-forecasts/" },
      { short: "Boursorama", name: "Boursorama (Reuters), « Alphabet : le CA déçoit au T3 et la consommation de trésorerie s'aggrave, l'action plonge après la clôture », 28 oct. 2026", url: "https://www.boursorama.com/bourse/actualites/alphabet-le-ca-decoit-au-t3-et-la-consommation-de-tresorerie-s-aggrave-l-action-plonge-apres-la-cloture-9f358ddb70b70c16a959c70c1c8e6e4e" },
      { short: "ABC Bourse", name: "ABC Bourse, « Alphabet plonge de 10 % à Wall Street malgré des revenus records », 29 oct. 2026", url: "https://www.abcbourse.com/marches/alphabet-plonge-de-10-a-wall-street-malgre-des-revenus-records_705179" }
    ]
  }
];
