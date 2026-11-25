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
    "id": "nvidia-t3-2027",
    "company": "Nvidia",
    "ticker": "NVDA",
    "country": "US",
    "sector": "Puces et IA",
    "date": "2026-11-17",
    "time": "close",
    "period": "T3 de l'exercice 2027 (août-octobre 2026)",
    "lines": [
      {
        "label": "Chiffre d'affaires",
        "unit": "Md$",
        "exp": 108.8,
        "act": 115.8,
        "src": 1
      },
      {
        "label": "Bénéfice par action ajusté",
        "unit": "$",
        "exp": 2.49,
        "act": 2.68,
        "src": 2
      },
      {
        "label": "Objectif de chiffre d'affaires au T4",
        "unit": "Md$",
        "exp": 125,
        "act": 130,
        "src": 5
      }
    ],
    "verdict": "mieux",
    "guidance": {
      "dir": "releve",
      "text": "Nvidia vise 130 milliards de dollars de chiffre d'affaires au trimestre suivant, à 3 % près, sans compter aucune vente de puces pour centres de données en Chine [7], au-dessus des quelque 125 milliards attendus [5]. La marge brute visée recule à 71-72 %, contre 74,8 % ce trimestre [7], et la croissance attendue pour l'exercice 2028 passe à environ 75 %, contre 70 % auparavant [4][6]."
    },
    "move": {
      "value": "+4 %",
      "text": "dans les échanges après la clôture selon CNBC [6], plus de 3 % selon Zonebourse [4]"
    },
    "summary": "Pour son premier trimestre sans Jensen Huang, Nvidia pulvérise les attentes avec un chiffre d'affaires doublé sur un an et un objectif de 130 milliards de dollars pour le trimestre suivant [3][4][7].",
    "points": [
      "Chiffre d'affaires de 115,8 milliards de dollars, en hausse de 103 % sur un an et de 20 % sur un trimestre [3], contre environ 108,8 milliards attendus selon MarketBeat et 109,1 milliards selon LSEG [1][6].",
      "Les centres de données, où Nvidia vend ses puces pour l'intelligence artificielle, pèsent 107,6 milliards de dollars, en hausse de 110 % sur un an [3].",
      "Le bénéfice par action ajusté ressort à 2,68 dollars, contre 2,49 dollars attendus selon Zacks et 2,48 dollars selon LSEG ; selon les normes comptables américaines (GAAP), il est de 2,70 dollars [3][2][6].",
      "L'objectif du quatrième trimestre, 130 milliards de dollars à 3 % près, dépasse les quelque 125 milliards attendus, même sans la Chine [5][7]. Nvidia ajoute aussi 150 milliards de dollars à son programme de rachat d'actions [9].",
      "C'est la directrice financière Colette Kress, patronne par intérim depuis le départ de Jensen Huang le 12 novembre, qui a présenté les comptes [4][10]. Le titre avait reculé d'environ 25 % en novembre avant la publication [8]."
    ],
    "sources": [
      {
        "short": "Yahoo Finance",
        "name": "Yahoo Finance (Barchart), « What to Expect From NVIDIA's Next Quarterly Earnings Report », nov. 2026",
        "url": "https://finance.yahoo.com/markets/stocks/articles/expect-nvidias-next-quarterly-earnings-151739351.html"
      },
      {
        "short": "Zacks",
        "name": "Zacks via TradingView, « NVIDIA Gears Up for Q3 Earnings », nov. 2026",
        "url": "https://www.tradingview.com/news/zacks:58c899221094b:0-nvidia-gears-up-for-q3-earnings-should-investors-buy-the-stock/"
      },
      {
        "short": "Nvidia",
        "name": "Nvidia, « NVIDIA Announces Financial Results for Third Quarter Fiscal 2027 » (communiqué), 17 nov. 2026",
        "url": "https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-third-quarter-fiscal-2027"
      },
      {
        "short": "Zonebourse",
        "name": "Zonebourse, « Dans la tourmente, Nvidia publie des résultats rutilants, prévisions relevées », 17 nov. 2026",
        "url": "https://www.zonebourse.com/actualite-bourse/dans-la-tourmente-nvidia-publie-des-resultats-rutilants-previsions-relevees-ce785edcdf8ff423"
      },
      {
        "short": "Yahoo Finance",
        "name": "Yahoo Finance France, « Le dernier trimestre de Jensen Huang dépasse les prévisions : l'action Nvidia peut-elle rebondir sans lui ? », 17 nov. 2026",
        "url": "https://fr.finance.yahoo.com/actualites/dernier-trimestre-jensen-huang-d%C3%A9passe-214126235.html"
      },
      {
        "short": "CNBC",
        "name": "CNBC, « Stock futures rise as Nvidia gains on earnings beat and solid outlook: Live updates », 17 nov. 2026",
        "url": "https://www.cnbc.com/2026/11/17/stock-market-today-live-updates.html"
      },
      {
        "short": "Stock Titan",
        "name": "Stock Titan, « NVIDIA expects $130 billion, plus or minus 3%, next quarter and assumes no data center compute revenue from China », 17 nov. 2026",
        "url": "https://www.stocktitan.net/news/NVDA/nvidia-announces-financial-results-for-third-quarter-fiscal-fpx9dw5egxqa.html"
      },
      {
        "short": "Investing.com",
        "name": "Investing.com France, « Les futures américains bondissent après les résultats de Nvidia », 17 nov. 2026",
        "url": "https://fr.investing.com/news/stock-market-news/les-futures-americains-bondissent-apres-les-resultats-de-nvidia-3701486"
      },
      {
        "short": "CoinDesk",
        "name": "CoinDesk, « Nvidia shares rise after big earnings beat, 2028 outlook raise despite leadership uncertainty », 17 nov. 2026",
        "url": "https://www.coindesk.com/markets/2026/11/17/nvidia-tops-estimates-issues-strong-guidance-adds-usd150-billion-to-buyback-authorization"
      },
      {
        "short": "Nvidia",
        "name": "Nvidia, « NVIDIA Announces CEO Transition » (communiqué), 12 nov. 2026",
        "url": "https://nvidianews.nvidia.com/news/nvidia-announces-ceo-transition"
      },
      {
        "short": "Boursorama",
        "name": "Boursorama (Reuters), « La semaine à venir à Wall Street : les résultats de Nvidia et l'introduction en bourse d'Anthropic… », 13 nov. 2026",
        "url": "https://www.boursorama.com/bourse/actualites/la-semaine-a-venir-a-wall-street-les-resultats-de-nvidia-et-l-introduction-en-bourse-d-anthropic-mettent-a-l-epreuve-un-secteur-de-l-ia-en-pleine-effervescence-9d0368751163fed3759e651cd72c6849"
      }
    ]
  },
  {
    "id": "home-depot-t3-2026",
    "company": "Home Depot",
    "ticker": "HD",
    "country": "US",
    "sector": "Distribution (bricolage)",
    "date": "2026-11-17",
    "time": "open",
    "period": "T3 2026",
    "lines": [
      {
        "label": "Chiffre d'affaires",
        "unit": "Md$",
        "exp": 42.8,
        "act": 43.4,
        "src": 1
      },
      {
        "label": "Bénéfice par action ajusté",
        "unit": "$",
        "exp": 3.84,
        "act": 3.86,
        "prev": 3.74,
        "src": 4
      }
    ],
    "verdict": "mieux",
    "guidance": {
      "dir": "maintenu",
      "text": "Home Depot resserre ses objectifs annuels sans les relever : environ 4,5 % de croissance des ventes (contre 2,5 à 4,5 % avant), environ 1,4 % pour les ventes à magasins comparables (contre 0 à 2 %) et environ 2 % de hausse du bénéfice par action ajusté (contre 0 à 4 %) [6][4]. Un objectif de bénéfice jugé sous les attentes de Wall Street [6]."
    },
    "move": {
      "value": "−3 %",
      "text": "l'action a perdu plus de 3 % après l'annonce selon CNBC [4], après un recul d'environ 2 % avant l'ouverture selon Boursorama (Reuters) [5]"
    },
    "summary": "Home Depot bat de peu les attentes grâce à ses meilleures ventes comparables en quatre ans, mais un objectif de bénéfice prudent et la nomination d'un nouveau patron font reculer l'action [3][4][6].",
    "points": [
      "Chiffre d'affaires de 43,4 milliards de dollars, en hausse de 4,9 % sur un an [3], contre 42,8 milliards attendus selon MarketBeat et 42,72 milliards selon Zacks [1][7].",
      "Le bénéfice par action ajusté ressort à 3,86 dollars, contre 3,84 dollars attendus et 3,74 dollars un an plus tôt ; selon les normes comptables américaines (GAAP), il est de 3,72 dollars, contre 3,62 [3][4]. Zacks, qui attendait 3,81 dollars, parle de résultat « conforme » [2][7].",
      "Les ventes à magasins comparables progressent de 2,2 %, la meilleure hausse en quatre ans selon le groupe : moins de passages en caisse (−0,5 %), mais un panier moyen en hausse de 3 % [3]. Les ventes en ligne comparables gagnent environ 13 % [4].",
      "Le directeur financier Richard McPhail est nommé directeur général ; Ann-Marie Campbell devient présidente et directrice des opérations, et Jordan Broggi remplace Richard McPhail aux finances [5][8].",
      "Les objectifs annuels sont resserrés : ventes au plus haut de l'ancienne fourchette, mais ventes comparables et bénéfice au milieu, ce qui a déçu les investisseurs [6][4]."
    ],
    "sources": [
      {
        "short": "MarketBeat",
        "name": "MarketBeat, « Home Depot (HD) Set to Post Earnings on Tuesday », 10 nov. 2026",
        "url": "https://www.marketbeat.com/instant-alerts/upcoming-home-depot-hd-set-to-post-earnings-on-tuesday-2026-11-10/"
      },
      {
        "short": "Yahoo Finance",
        "name": "Yahoo Finance (Zacks), « Home Depot Pre-Q3 Earnings: Should You Buy or Stay Cautious? », nov. 2026",
        "url": "https://finance.yahoo.com/markets/stocks/articles/home-depot-pre-q3-earnings-135400927.html"
      },
      {
        "short": "Home Depot",
        "name": "Home Depot, « The Home Depot Announces Third Quarter Fiscal 2026 Results; Updates Fiscal 2026 Guidance » (communiqué), 17 nov. 2026",
        "url": "https://ir.homedepot.com/news-releases/2026/11-17-2026-110221331"
      },
      {
        "short": "CNBC",
        "name": "CNBC, « Home Depot names Richard McPhail as new CEO, beats earnings expectations », 17 nov. 2026",
        "url": "https://www.cnbc.com/2026/11/17/home-depot-hd-q3-earnings-2026.html"
      },
      {
        "short": "Boursorama",
        "name": "Boursorama (Reuters), « Home Depot nomme McPhail, un cadre de l'entreprise, au poste de directeur général dans un contexte de faiblesse des dépenses de consommation », 17 nov. 2026",
        "url": "https://www.boursorama.com/bourse/actualites/home-depot-nomme-mcphail-un-cadre-de-l-entreprise-au-poste-de-directeur-general-dans-un-contexte-de-faiblesse-des-depenses-de-consommation-ecf4dbb667b6d1ad6fd85a1057fdfcf5"
      },
      {
        "short": "Benzinga",
        "name": "Benzinga, « Why Is Home Depot Stock Falling Tuesday? », 17 nov. 2026",
        "url": "https://www.benzinga.com/markets/earnings/26/11/63340816/home-depot-taps-cfo-richard-mcphail-to-lead-narrows-profit-outlook"
      },
      {
        "short": "Yahoo Finance",
        "name": "Yahoo Finance (Zacks), « Home Depot Q3 Earnings Meet Estimates, Sales Beat on Comps Growth », 17 nov. 2026",
        "url": "https://finance.yahoo.com/markets/stocks/articles/home-depot-q3-earnings-meet-154400748.html"
      },
      {
        "short": "Investing.com",
        "name": "Investing.com France, « Home Depot nomme son directeur financier McPhail comme prochain PDG », 17 nov. 2026",
        "url": "https://fr.investing.com/news/earnings/home-depot-nomme-son-directeur-financier-mcphail-comme-prochain-pdg-3699918"
      }
    ]
  },
  {
    "id": "target-t3-2026",
    "company": "Target",
    "ticker": "TGT",
    "country": "US",
    "sector": "Distribution",
    "date": "2026-11-18",
    "time": "open",
    "period": "T3 2026 (août-octobre 2026)",
    "lines": [
      {
        "label": "Chiffre d'affaires",
        "unit": "Md$",
        "act": 27.1,
        "prev": 25.3,
        "src": 1
      },
      {
        "label": "Ventes à magasins comparables",
        "unit": "%",
        "exp": 3.8,
        "act": 5.6,
        "src": 3
      },
      {
        "label": "Bénéfice par action ajusté",
        "unit": "$",
        "exp": 2.07,
        "act": 2.65,
        "prev": 1.78,
        "src": 4
      }
    ],
    "verdict": "mieux",
    "guidance": {
      "dir": "releve",
      "text": "Target vise désormais un bénéfice par action ajusté de 10,65 à 11,40 dollars sur l'année, contre 9,90 à 10,90 dollars auparavant, dont environ 2,14 dollars de remboursements de droits de douane déjà comptabilisés [10]. La croissance des ventes annuelles est relevée à environ 6 % [10][8], et le groupe dit que ses ventes de novembre accélèrent par rapport à octobre [8]."
    },
    "move": {
      "value": "+6 %",
      "text": "l'action gagnait 6,1 % en séance mercredi selon MarketBeat [6], plus de 5 % selon GuruFocus [7], après un début de matinée hésitant selon Investing.com [4]"
    },
    "summary": "Target signe ses meilleures ventes depuis plus de cinq ans, porté par le retour des clients en magasin, et relève ses objectifs avant les fêtes [5][1][10].",
    "points": [
      "Chiffre d'affaires d'environ 27,1 milliards de dollars, en hausse de 7,1 % sur un an [1][2] : la plus forte croissance des ventes depuis plus de cinq ans, selon AP cité par Quartz [5].",
      "Les ventes à magasins comparables progressent de 5,6 % (4,6 % en magasin, 9,8 % en ligne) [10][11], contre environ 3,8 % attendus selon StreetAccount, cité par CNBC [3]. La fréquentation augmente d'environ 5 % [11].",
      "Le bénéfice par action, ajusté comme publié, est de 2,65 dollars, contre 1,78 dollar ajusté un an plus tôt [10]. Il comprend 301 millions de dollars avant impôts (0,50 dollar par action) de remboursements de droits de douane [1][10].",
      "Même sans ces remboursements, le bénéfice ajusté (2,15 dollars) dépasse les attentes : 2,07 dollars selon Investing.com, 2,05 dollars selon Zacks et AP [4][9][5].",
      "Le patron Michael Fiddelke, qui pilote le redressement de l'enseigne, voit l'action progresser de plus de 60 % depuis le début de l'année, selon CNBC [3]."
    ],
    "sources": [
      {
        "short": "Target",
        "name": "Target, « Target Corporation Reports Third Quarter Earnings » (communiqué), 18 nov. 2026",
        "url": "https://corporate.target.com/press/release/2026/11/target-corporation-reports-third-quarter-earnings"
      },
      {
        "short": "SEC",
        "name": "Target Corporation, formulaire 8-K (communiqué du troisième trimestre 2026), sec.gov, 18 nov. 2026",
        "url": "https://www.sec.gov/Archives/edgar/data/0000027419/000002741926000051/a2026q3ex-99.htm"
      },
      {
        "short": "CNBC",
        "name": "CNBC, « Target (TGT) Q3 2026 earnings », 18 nov. 2026",
        "url": "https://www.cnbc.com/2026/11/18/target-tgt-q3-2026-earnings.html"
      },
      {
        "short": "Investing.com",
        "name": "Investing.com, « Earnings call transcript: Target beats Q3 2026 estimates as sales accelerate », 18 nov. 2026",
        "url": "https://www.investing.com/news/transcripts/earnings-call-transcript-target-beats-q3-2026-estimates-as-sales-accelerate-93CH-5036340"
      },
      {
        "short": "Quartz",
        "name": "Quartz (AP), « Target posted best sales growth in over five years in Q3 2026 earnings », 18 nov. 2026",
        "url": "https://qz.com/target-earnings-sales-growth-forecast-raised-111826"
      },
      {
        "short": "MarketBeat",
        "name": "MarketBeat, « Target (NYSE:TGT) Shares Climb 6.1% on Earnings Beat », 18 nov. 2026",
        "url": "https://www.marketbeat.com/instant-alerts/price-target-nyse-tgt-shares-climb-61-on-earnings-beat-2026-11-18/"
      },
      {
        "short": "GuruFocus",
        "name": "GuruFocus, « Target (TGT) Shares Rise Over 5% After Strong Q3 Results Beat Expectations », 18 nov. 2026",
        "url": "https://www.gurufocus.com/news/9208236/target-tgt-shares-rise-over-5-after-strong-q3-results-beat-expectations"
      },
      {
        "short": "Boursorama",
        "name": "Boursorama (Reuters), « Target aborde la période des fêtes avec des perspectives de ventes plus optimistes », 18 nov. 2026",
        "url": "https://www.boursorama.com/bourse/actualites/target-aborde-la-periode-des-fetes-avec-des-perspectives-de-ventes-plus-optimistes-2cdcea8d578821256913b03fe9044002"
      },
      {
        "short": "Yahoo Finance",
        "name": "Yahoo Finance (Zacks), « Target (TGT) Q3 Earnings and Revenues Beat Estimates », 18 nov. 2026",
        "url": "https://ca.finance.yahoo.com/news/target-tgt-q3-earnings-revenues-114001075.html"
      },
      {
        "short": "Target",
        "name": "Target, « Target Q3 2026 Earnings Highlights », 18 nov. 2026",
        "url": "https://corporate.target.com/news-features/article/2026/11/q3-2026-earnings"
      },
      {
        "short": "GuruFocus",
        "name": "GuruFocus, « Target Corp (TGT) (Q3 2026) Earnings Call Highlights: Comparable Sales Jump 5.6% as Traffic Accelerates and Guidance Rises », 18 nov. 2026",
        "url": "https://www.gurufocus.com/news/9208407/target-corp-tgt-q3-2026-earnings-call-highlights-comparable-sales-jump-56-as-traffic-accelerates-and-guidance-rises"
      }
    ]
  },
  {
    "id": "lowes-t3-2026",
    "company": "Lowe's",
    "ticker": "LOW",
    "country": "US",
    "sector": "Distribution (bricolage)",
    "date": "2026-11-18",
    "time": "open",
    "period": "T3 2026",
    "lines": [
      {
        "label": "Chiffre d'affaires",
        "unit": "Md$",
        "exp": 22.42,
        "act": 22.8,
        "prev": 20.8,
        "src": 3
      },
      {
        "label": "Bénéfice par action ajusté",
        "unit": "$",
        "exp": 2.87,
        "act": 3.1,
        "src": 2
      }
    ],
    "verdict": "mieux",
    "guidance": {
      "dir": "releve",
      "text": "Lowe's vise désormais environ 92,5 milliards de dollars de ventes sur l'année, contre 92,0 milliards auparavant, et des ventes à magasins comparables en hausse d'environ 0,5 %, au lieu d'une stabilité [5][7]. L'objectif de bénéfice par action ajusté, environ 12,25 dollars avec une marge opérationnelle ajustée d'environ 11,5 % [9], reste un peu sous les 12,28 dollars attendus selon Benzinga [10]."
    },
    "move": {
      "value": "+0,8 %",
      "text": "l'action montait de 1,66 dollar, à 222,12 dollars, en séance mercredi selon MarketBeat [9], après avoir cédé 0,8 % en matinée selon Schaeffer's [8] et 0,56 % avant l'ouverture selon Investing.com [7]"
    },
    "summary": "Lowe's bat les attentes et relève son objectif de ventes grâce au commerce en ligne et à ses rachats, mais le coup de pouce des remboursements de droits de douane et un marché du logement grippé tempèrent l'enthousiasme [5][6][8].",
    "points": [
      "Chiffre d'affaires de 22,8 milliards de dollars, en hausse de 9,3 % sur un an (20,8 milliards un an plus tôt) [5][12], contre 22,41 milliards attendus selon CNBC et 22,4 milliards selon Investing.com [6][7].",
      "Le bénéfice par action ajusté ressort à 3,10 dollars (+1,3 % sur un an) et à 2,98 dollars selon les normes comptables américaines (GAAP) [5], contre 2,88 dollars attendus selon CNBC et MarketBeat, 2,89 selon Investing.com [6][9][7].",
      "Ces deux chiffres comprennent 0,34 dollar par action de remboursements de droits de douane (IEEPA) [5] : sans eux, le bénéfice ajusté serait d'environ 2,76 dollars, sous le consensus.",
      "Les ventes à magasins comparables progressent de 1,8 %, sixième trimestre de hausse d'affilée selon Stock Titan [5][11], et les ventes en ligne bondissent de 17,4 % [5][12].",
      "Pour le quatrième trimestre, Lowe's attend des ventes comparables en légère hausse, freinées en janvier par la comparaison avec les achats liés aux tempêtes de l'an dernier [7]."
    ],
    "sources": [
      {
        "short": "Lowe's",
        "name": "Lowe's (PR Newswire via Finviz), « Lowe's Companies, Inc. to Host Third Quarter 2026 Earnings Conference Call on Nov. 18 », 11 nov. 2026",
        "url": "https://finviz.com/news/420806/lowes-companies-inc-to-host-third-quarter-2026-earnings-conference-call-on-nov-18"
      },
      {
        "short": "AAII",
        "name": "AAII, « What You Need to Know About Lowe's Companies, Inc.'s Q3 Earnings », nov. 2026",
        "url": "https://www.aaii.com/investingideas/article/534503-what-you-need-to-know-about-lowes-companies-incs-q3-earnings"
      },
      {
        "short": "Tiger Brokers",
        "name": "Tiger Brokers, « Earning Preview: Lowe's Q3 revenue is expected to increase by 7.70% », nov. 2026",
        "url": "https://www.itiger.com/news/1132260854"
      },
      {
        "short": "Zacks",
        "name": "Zacks, « What's Lowe's Probability of an Earnings Beat This Season? », nov. 2026",
        "url": "https://zacks.com/stock/news/3027978/what-s-lowe-s-probability-of-an-earnings-beat-this-season"
      },
      {
        "short": "Lowe's",
        "name": "Lowe's, « Lowe's Reports Third Quarter 2026 Sales And Earnings Results » (communiqué), 18 nov. 2026",
        "url": "https://corporate.lowes.com/newsroom/press-releases/lowes-reports-third-quarter-2026-sales-and-earnings-results"
      },
      {
        "short": "CNBC",
        "name": "CNBC, « Lowe's posts strong online sales, raises outlook despite slow housing market », 18 nov. 2026",
        "url": "https://www.cnbc.com/2026/11/18/lowes-low-q3-2026-earnings.html"
      },
      {
        "short": "Investing.com",
        "name": "Investing.com, « Earnings call transcript: Lowe's tops Q3 2026 estimates as sales rise », 18 nov. 2026",
        "url": "https://www.investing.com/news/transcripts/earnings-call-transcript-lowes-tops-q3-2026-estimates-as-sales-rise-93CH-5036540"
      },
      {
        "short": "Schaeffer's",
        "name": "Schaeffer's Investment Research, « Lowe's Stock Brushes Off Earnings Beat, Outlook Hike », 18 nov. 2026",
        "url": "https://www.schaeffersresearch.com/content/news/2026/11/18/lowes-brushes-off-q3-earnings-beat-outlook-hike"
      },
      {
        "short": "MarketBeat",
        "name": "MarketBeat, « Lowe's Companies (NYSE:LOW) Releases Earnings Results, Beats Estimates By $0.22 EPS », 18 nov. 2026",
        "url": "https://www.marketbeat.com/instant-alerts/earnings-lowes-companies-nyse-low-releases-earnings-results-beats-estimates-by-022-eps-2026-11-18/"
      },
      {
        "short": "Benzinga",
        "name": "Benzinga, « Lowe's Delivers Resilient Quarter Despite Challenging Housing Market », 18 nov. 2026",
        "url": "https://www.benzinga.com/markets/earnings/26/11/63382548/lowes-delivers-resilient-quarter-despite-challenging-housing-market"
      },
      {
        "short": "Stock Titan",
        "name": "Stock Titan, « Lowe's Q3 earnings: Sales rise 9.3% to $22.8B », 18 nov. 2026",
        "url": "https://www.stocktitan.net/news/LOW/lowe-s-reports-third-quarter-2026-sales-and-earnings-1dcu9fqyhwws.html"
      },
      {
        "short": "GuruFocus",
        "name": "GuruFocus, « Lowe's Companies Inc (LOW) (Q3 2026) Earnings Call Highlights: Sales Up 9.3% to $22.8 Billion as Online Growth Hits 17.4% », 18 nov. 2026",
        "url": "https://www.gurufocus.com/news/9208416/lowes-companies-inc-low-q3-2026-earnings-call-highlights-sales-up-93-to-228-billion-as-online-growth-hits-174"
      }
    ]
  },
  {
    "id": "tjx-t3-2027",
    "company": "TJX (T.J. Maxx)",
    "ticker": "TJX",
    "country": "US",
    "sector": "Distribution (déstockage)",
    "date": "2026-11-18",
    "time": "open",
    "period": "T3 de l'exercice 2027 (août-octobre 2026)",
    "lines": [
      {
        "label": "Chiffre d'affaires",
        "unit": "Md$",
        "exp": 15.81,
        "act": 16,
        "src": 1
      },
      {
        "label": "Bénéfice par action ajusté",
        "unit": "$",
        "exp": 1.33,
        "act": 1.34,
        "src": 1
      },
      {
        "label": "Ventes à magasins comparables",
        "unit": "%",
        "act": 4,
        "src": 6
      }
    ],
    "verdict": "mieux",
    "guidance": {
      "dir": "releve",
      "text": "TJX relève le bas de sa fourchette annuelle : 5,17 à 5,20 dollars de bénéfice par action ajusté, contre 5,15 à 5,20 auparavant, et 5,33 à 5,36 dollars en comptant les remboursements de droits de douane (contre 5,31 à 5,36) ; il vise désormais 4 % de hausse des ventes comparables, contre 3 à 4 % [6][10]. Pour le quatrième trimestre, il prévoit 1,42 à 1,45 dollar par action ajusté [6]."
    },
    "move": {
      "value": "hausse",
      "text": "le titre « s'envole » selon CNBC [8], après avoir progressé avant l'ouverture selon Chartmill [9]"
    },
    "summary": "Le roi du déstockage tient sa promesse : ventes comparables en hausse de 4 %, marge et bénéfice au-dessus de son plan, et objectif annuel relevé à l'approche des fêtes [6][8].",
    "points": [
      "Chiffre d'affaires d'environ 16 milliards de dollars, en hausse de 6 % sur un an [6][10], au-dessus des 15,81 milliards attendus selon Börse Express et des 15,86 milliards selon Benzinga [1][3].",
      "Le bénéfice par action ressort à 1,39 dollar (+9 %, contre 1,28 un an plus tôt) ; hors 0,05 dollar de remboursements de droits de douane, il est de 1,34 dollar (+5 %) [10], juste au-dessus des 1,33 dollar attendus selon Börse Express et au-dessus de la fourchette de 1,30 à 1,32 dollar que TJX s'était fixée [1][4].",
      "Les ventes à magasins comparables progressent de 4 %, dans toutes les divisions : +2 % chez Marmaxx (T.J. Maxx et Marshalls aux États-Unis) et +8 % à l'international [6][10].",
      "Chartmill juge le bénéfice « conforme » aux attentes, mais salue la hausse de la rentabilité [9] ; selon 24/7 Wall St., TJX bat les prévisions pour le sixième trimestre d'affilée [12].",
      "La marge avant impôts et le bénéfice par action dépassent le plan que s'était fixé l'entreprise, selon son communiqué [6][7]."
    ],
    "sources": [
      {
        "short": "Börse Express",
        "name": "Börse Express, « TJX Aktie: Q3-Zahlen kommen am 18. November », nov. 2026",
        "url": "https://www.boerse-express.com/news/articles/tjx-aktie-q3-zahlen-kommen-am-18-november-959218"
      },
      {
        "short": "Chartmill",
        "name": "Chartmill, « TJX Companies (TJX) Earnings & Revenue Estimates »",
        "url": "https://www.chartmill.com/stock/quote/TJX/estimates"
      },
      {
        "short": "Benzinga",
        "name": "Benzinga, « TJX Earnings Forecasts »",
        "url": "https://www.benzinga.com/quote/TJX/earnings-forecasts"
      },
      {
        "short": "Finviz",
        "name": "Finviz, « TJX Shares Fall as Third-Quarter Profit Forecast Misses Expectations », août 2026",
        "url": "https://finviz.com/news/383755/tjx-shares-fall-as-third-quarter-profit-forecast-misses-expectations"
      },
      {
        "short": "SentiSense",
        "name": "SentiSense, « TJX Beats Q2 Estimates and Raises FY2027 Outlook, Yet Shares Slip on Weak Q3 Guidance », 19 août 2026",
        "url": "https://app.sentisense.ai/stories/tjx-beats-q2-estimates-and-raises-fy2027-outlook-yet-shares-slip-on-weak-q3-guid-08192026"
      },
      {
        "short": "TJX",
        "name": "TJX (Business Wire), « The TJX Companies, Inc. Reports Q3 FY27 Results; Comp Sales Growth of 4%, Pretax Profit Margin, and Diluted Earnings Per Share All Above Plan » (communiqué), 18 nov. 2026",
        "url": "https://www.businesswire.com/news/home/20261117527150/en/The-TJX-Companies-Inc.-Reports-Q3-FY27-Results-Comp-Sales-Growth-of-4-Pretax-Profit-Margin-and-Diluted-Earnings-Per-Share-All-Above-Plan"
      },
      {
        "short": "SEC",
        "name": "TJX Companies, formulaire 8-K (communiqué du T3 de l'exercice 2027), sec.gov, nov. 2026",
        "url": "https://www.sec.gov/Archives/edgar/data/0000109198/000010919826000058/tjxq3fy27earningspressrele.htm"
      },
      {
        "short": "CNBC",
        "name": "CNBC Investing Club, « Off-price retailer TJX keeps its promise and the stock soars. We're satisfied, for now », 18 nov. 2026",
        "url": "https://www.cnbc.com/investingclub/2026/11/18/off-price-retailer-tjx-keeps-its-promise-and-the-stock-soars-were-satisfied-for-now.html"
      },
      {
        "short": "Chartmill",
        "name": "Chartmill, « TJX Companies (NYSE:TJX) Q3 Earnings In Line as Profitability Lifts Premarket Shares », 18 nov. 2026",
        "url": "https://www.chartmill.com/news/TJX/Chartmill-58884-TJX-Companies-NYSETJX-Q3-Earnings-In-Line-as-Profitability-Lifts-Premarket-Shares"
      },
      {
        "short": "Quantisnow",
        "name": "Quantisnow, « TJX Q3 EPS $1.39, up 9%, comps up 4%; adjusted EPS $1.34 beat plan; FY27 EPS guide $5.33-$5.36 incl. tariff refunds », 18 nov. 2026",
        "url": "https://www.quantisnow.com/insight/tjx-companies-inc-filed-sec-form-8-k-results-of-operations-6798309"
      },
      {
        "short": "Motley Fool",
        "name": "The Motley Fool, « TJX (TJX) Q3 2027 Earnings Call Transcript », 18 nov. 2026",
        "url": "https://www.fool.com/earnings/call-transcripts/2026/11/18/tjx-tjx-q3-2027-earnings-call-transcript/"
      },
      {
        "short": "24/7 Wall St.",
        "name": "24/7 Wall St., « TJX Companies beats Q3 2027 estimates for the sixth straight quarter », 18 nov. 2026",
        "url": "https://247wallst.com/cards/tjx-companies-q3-2027-earnings-tjx-01m7qgmydsz2rzayw8j50pj38d"
      }
    ]
  },
  {
    "id": "palo-alto-t1-2027",
    "company": "Palo Alto Networks",
    "ticker": "PANW",
    "country": "US",
    "sector": "Cybersécurité",
    "date": "2026-11-18",
    "period": "T1 de l'exercice 2027 (août-octobre 2026)",
    "lines": [
      {
        "label": "Chiffre d'affaires",
        "unit": "Md$",
        "exp": 3.31,
        "act": 3.44,
        "src": 6
      },
      {
        "label": "Bénéfice par action ajusté",
        "unit": "$",
        "exp": 0.97,
        "act": 1.05,
        "src": 6
      },
      {
        "label": "ARR « nouvelle génération »",
        "unit": "Md$",
        "act": 9.73,
        "src": 6
      }
    ],
    "verdict": "mieux",
    "guidance": {
      "dir": "maintenu",
      "text": "Pour l'exercice 2027, Palo Alto maintient son objectif de 14,10 à 14,20 milliards de dollars de chiffre d'affaires, la fourchette déjà donnée en septembre [6][2]."
    },
    "summary": "Le numéro un mondial de la cybersécurité dépasse ses propres objectifs : 3,44 milliards de dollars de ventes (+39 % sur un an) et 1,05 dollar de bénéfice par action ajusté, contre 0,97 attendu, et annonce le rachat d'Applied Compute dans l'IA [6].",
    "points": [
      "Chiffre d'affaires de 3,44 milliards de dollars, en hausse de 39 % sur un an, au-dessus de la fourchette de 3,30 à 3,31 milliards que l'entreprise s'était fixée [6] et du consensus de 3,31 milliards [2].",
      "Bénéfice par action ajusté de 1,05 dollar, contre 0,97 attendu selon Earnings Whispers [6][2] ; en normes comptables américaines (GAAP), le bénéfice net atteint 482 millions de dollars, soit 0,57 dollar par action [6].",
      "Les revenus récurrents annuels (ARR) « nouvelle génération » progressent de 66 %, à 9,73 milliards de dollars, au-dessus de l'objectif de 9,54 à 9,56 milliards [6].",
      "Le carnet de commandes restant à facturer (RPO) augmente de 35 %, à 21,0 milliards de dollars [6].",
      "Palo Alto annonce son intention de racheter Applied Compute, une plateforme qui sert à entraîner et faire tourner des modèles d'IA ouverts [6]. La réaction de l'action n'a pas pu être confirmée par une source fiable au moment de la rédaction."
    ],
    "sources": [
      {
        "short": "Palo Alto Networks",
        "name": "Palo Alto Networks (PR Newswire via Finviz), « Palo Alto Networks to Announce Fiscal First Quarter 2027 Financial Results on Wednesday, November 18, 2026 », 3 nov. 2026",
        "url": "https://finviz.com/news/414245/palo-alto-networks-to-announce-fiscal-first-quarter-2027-financial-results-on-wednesday-november-18-2026"
      },
      {
        "short": "Earnings Whispers",
        "name": "Earnings Whispers, aperçu des résultats de Palo Alto Networks, nov. 2026",
        "url": "https://www.earningswhispers.com/article/PANW/23140"
      },
      {
        "short": "TIKR",
        "name": "TIKR, « Palo Alto Networks Is Down 27% From Its High: Is It Time to Sell, or Load Up? », nov. 2026",
        "url": "https://www.tikr.com/blog/palo-alto-networks-is-down-27-from-its-high-is-it-time-to-sell-or-load-up"
      },
      {
        "short": "Finviz",
        "name": "Finviz, « Palo Alto Networks faces a credibility test as stock lags its upbeat AI security story », nov. 2026",
        "url": "https://finviz.com/news/420783/palo-alto-networks-faces-a-credibility-test-as-stock-lags-its-upbeat-ai-security-story"
      },
      {
        "short": "FXEmpire",
        "name": "FXEmpire, « Palo Alto Networks (PANW) Earnings »",
        "url": "https://www.fxempire.com/stocks/panw/earnings"
      },
      {
        "short": "Palo Alto Networks (SEC)",
        "name": "Palo Alto Networks, communiqué des résultats du premier trimestre de l'exercice 2027, annexe 99.1 du formulaire 8-K déposé à la SEC, nov. 2026",
        "url": "https://www.sec.gov/Archives/edgar/data/0001327567/000132756726000030/ex991q127earningsrelease.htm"
      }
    ]
  },
  {
    "id": "walmart-t3-2027",
    "company": "Walmart",
    "ticker": "WMT",
    "country": "US",
    "sector": "Distribution",
    "date": "2026-11-19",
    "time": "open",
    "period": "T3 de l'exercice 2027 (août-octobre 2026)",
    "lines": [
      {
        "label": "Chiffre d'affaires",
        "unit": "Md$",
        "exp": 187.2,
        "act": 188.8,
        "src": 1
      },
      {
        "label": "Bénéfice par action ajusté",
        "unit": "$",
        "exp": 0.63,
        "act": 0.65,
        "src": 1
      }
    ],
    "verdict": "mieux",
    "guidance": {
      "dir": "releve",
      "text": "Walmart relève ses objectifs annuels pour la troisième fois de l'année : hausse des ventes de 4,9 à 5,2 %, contre 4 à 5 % jusqu'ici [3], et bénéfice par action ajusté de 2,84 à 2,89 dollars, contre 2,80 à 2,87 dollars [2][7]. C'est moins que ce qu'espérait Wall Street : 5,5 % de hausse des ventes selon LSEG [4] et 2,88 dollars de bénéfice par action, au-dessus du milieu de la fourchette, selon Reuters [5]."
    },
    "move": {
      "value": "−1 à −2 %",
      "text": "en séance jeudi : environ −2 %, à 125,43 dollars, selon Boursorama (Reuters) [4], −1,6 % selon Invezz [11] et −1,4 % selon The Globe and Mail [10], après une légère hausse avant l'ouverture selon AP [3]"
    },
    "summary": "Walmart bat de peu les attentes et relève encore ses objectifs avant les fêtes, mais des prévisions jugées trop prudentes et la flambée du diesel font reculer l'action [3][4][5].",
    "points": [
      "Chiffre d'affaires de 188,8 milliards de dollars, en hausse de 5,2 % sur un an [4][8], contre 187,2 milliards attendus selon Zacks et 187,38 milliards selon FactSet, cité par AP [1][3].",
      "Le bénéfice par action ajusté ressort à 65 cents, contre 64 cents attendus selon AP et 63 cents selon Zacks [3][1].",
      "Les ventes à magasins comparables progressent de 2,9 %, mieux que les 2,6 % du trimestre précédent [3], et les ventes en ligne du groupe bondissent de 17 % [8].",
      "Le groupe met en garde contre la flambée des prix du diesel et du transport [5] : selon le directeur financier John David Rainey, le diesel représente environ 2 milliards de dollars de coûts supplémentaires cette année [9]. Le patron John Furner assure vouloir garder des prix bas malgré tout [6].",
      "C'est la troisième hausse d'objectifs de l'année, mais la nouvelle fourchette de ventes (4,9 à 5,2 %) reste sous les 5,5 % attendus par les analystes selon LSEG, ce qui explique le recul du titre [3][4]."
    ],
    "sources": [
      {
        "short": "Zacks",
        "name": "Zacks via TradingView, « Walmart, Target, and Nvidia Headline a Pivotal Week for Q3 Earnings », nov. 2026",
        "url": "https://www.tradingview.com/news/zacks:baeac9437094b:0-walmart-target-and-nvidia-headline-a-pivotal-week-for-q3-earnings/"
      },
      {
        "short": "GuruFocus",
        "name": "GuruFocus via TradingView, « Walmart Q3 2026 Preview: Is the Consumer Still Holding Up? », nov. 2026",
        "url": "https://www.tradingview.com/news/gurufocus:740281e5c094b:0-walmart-q3-2026-preview-is-the-consumer-still-holding-up/"
      },
      {
        "short": "AP (WRAL)",
        "name": "Associated Press via WRAL, « Walmart raises outlook for 3rd time this year after a solid quarter », 19 nov. 2026",
        "url": "https://www.wral.com/news/ap/d711a-walmart-raises-outlook-for-3rd-time-this-year-after-a-solid-quarter/"
      },
      {
        "short": "Boursorama",
        "name": "Boursorama (Reuters), « Walmart en baisse après avoir annoncé des prévisions de chiffre d'affaires annuel inférieures aux estimations », 19 nov. 2026",
        "url": "https://www.boursorama.com/bourse/actualites/walmart-en-baisse-apres-avoir-annonce-des-previsions-de-chiffre-d-affaires-annuel-inferieures-aux-estimations-055f41b062949b6b2c7651fdce8150ef"
      },
      {
        "short": "Boursorama",
        "name": "Boursorama (Reuters), « Walmart met en garde contre la pression exercée par le coût du carburant et revoit à la hausse ses objectifs annuels à l'approche des fêtes de fin d'année », 19 nov. 2026",
        "url": "https://www.boursorama.com/bourse/actualites/walmart-met-en-garde-contre-la-pression-exercee-par-le-cout-du-carburant-et-revoit-a-la-hausse-ses-objectifs-annuels-a-l-approche-des-fetes-de-fin-d-annee-f68ea5e94d1f93a032fd236bf345589a"
      },
      {
        "short": "CNBC",
        "name": "CNBC, « Walmart hikes outlook as CEO tells CNBC retailer aims to keep prices low despite soaring fuel costs », 19 nov. 2026",
        "url": "https://www.cnbc.com/2026/11/19/walmart-wmt-q3-2026-earnings.html"
      },
      {
        "short": "Investing.com",
        "name": "Investing.com, « Walmart beats third quarter expectations, raises guidance », 19 nov. 2026",
        "url": "https://www.investing.com/news/earnings/walmart-beats-third-quarter-expectations-raises-guidance-5038647"
      },
      {
        "short": "TradingKey",
        "name": "TradingKey, « Walmart Q3 FY27 Earnings: Revenue Rises 5.2% as E-Commerce Grows 17% », 19 nov. 2026",
        "url": "https://www.tradingkey.com/news/earnings/262313079-"
      },
      {
        "short": "Yahoo Finance",
        "name": "Yahoo Finance, « Sky-high diesel prices take a $2 billion bite out of Walmart », 19 nov. 2026",
        "url": "https://finance.yahoo.com/markets/stocks/article/sky-high-diesel-prices-take-a-2-billion-bite-out-of-walmart-163930973.html"
      },
      {
        "short": "The Globe and Mail",
        "name": "The Globe and Mail, « Walmart raises forecasts ahead of holidays, warns of rising fuel costs », 19 nov. 2026",
        "url": "https://www.theglobeandmail.com/business/article-walmart-results-sales-and-profit-outlook/"
      },
      {
        "short": "Invezz",
        "name": "Invezz, « Why is Walmart stock falling despite Q3 earnings beat, raised outlook? », 19 nov. 2026",
        "url": "https://invezz.com/news/2026/11/19/why-is-walmart-stock-falling-despite-q3-earnings-beat-raised-outlook/"
      }
    ]
  },
  {
    "id": "alibaba-t2-2027",
    "company": "Alibaba",
    "ticker": "BABA",
    "country": "CN",
    "sector": "Commerce en ligne et cloud",
    "date": "2026-11-19",
    "time": "open",
    "period": "Trimestre de septembre 2026 (T2 de l'exercice 2027)",
    "lines": [
      {
        "label": "Chiffre d'affaires",
        "unit": "Md¥",
        "exp": 269.81,
        "act": 271.52,
        "src": 3
      },
      {
        "label": "Bénéfice ajusté par ADS",
        "unit": "$",
        "exp": 1.65,
        "act": 1.21,
        "src": 4
      },
      {
        "label": "Croissance du cloud et de l'IA",
        "unit": "%",
        "exp": 50,
        "act": 53,
        "src": 7
      }
    ],
    "verdict": "mitige",
    "guidance": {
      "dir": "maintenu",
      "text": "Alibaba ne donne pas d'objectif chiffré de chiffre d'affaires. Le patron Eddie Wu confirme viser 30 milliards de yuans de revenus récurrents annuels dans la vente d'accès à ses modèles d'IA sur l'exercice, et assure que les pertes de la livraison rapide continuent de se réduire nettement [8]."
    },
    "move": {
      "value": "+2,6 %",
      "text": "à New York jeudi, à 86,54 dollars, selon HDFC Sky [6] ; à Hong Kong, l'action a gagné jusqu'à 2,7 % vendredi, à 83,15 dollars de Hong Kong, selon Investing.com [5]"
    },
    "summary": "Alibaba dépasse les attentes de chiffre d'affaires grâce à un cloud en hausse de 53 %, mais son bénéfice ajusté par action reste loin du consensus, plombé par ses dépenses dans l'IA [1][3][4].",
    "points": [
      "Chiffre d'affaires de 271,52 milliards de yuans, en hausse de 10 % sur un an (247,8 milliards un an plus tôt) [1], contre 269,81 milliards attendus selon LSEG [3].",
      "La division cloud et IA (AI Cloud and Compute Services) atteint 60,97 milliards de yuans, en hausse de 53 % [1], au-dessus des quelque 50 % attendus par les analystes [7] ; le chiffre d'affaires réalisé avec les clients extérieurs progresse de 64 % [1].",
      "Le bénéfice ajusté (non-GAAP) par ADS, le certificat d'action coté à New York, ressort à 1,21 dollar, contre 1,65 dollar attendu selon Koyfin [4]. Le bénéfice net comptable bondit de 213 %, à 64,42 milliards de yuans, surtout grâce à des plus-values sur investissements [1][3].",
      "Le bénéfice net ajusté remonte de 92 %, à 19,9 milliards de yuans, après un recul de 38 % au trimestre d'avril-juin [1][2], porté par la forte réduction des pertes dans la livraison rapide (« quick commerce »), dont le chiffre d'affaires progresse de 22 %, à 58,76 milliards de yuans [1][8].",
      "Les investissements restent lourds : 50,5 milliards de yuans (7,5 milliards de dollars) de dépenses d'équipement ce trimestre, surtout pour l'infrastructure d'IA [9]."
    ],
    "sources": [
      {
        "short": "Alibaba",
        "name": "Alibaba Group, « Alibaba Group Announces September Quarter 2026 Results and Interim Results for the Six Months Ended September 30, 2026 » (communiqué, Business Wire), 19 nov. 2026",
        "url": "https://www.financialcontent.com/article/bizwire-2026-11-19-alibaba-group-announces-september-quarter-2026-results-and-interim-results-for-the-six-months-ended-september-30-2026"
      },
      {
        "short": "SEC",
        "name": "Alibaba Group, formulaire 6-K (résultats du trimestre de juin 2026), sec.gov, 20 août 2026",
        "url": "https://www.sec.gov/Archives/edgar/data/0001577552/000110465926099220/tm2623667d1_ex99-1.htm"
      },
      {
        "short": "RTÉ (Reuters)",
        "name": "RTÉ (Reuters), « Alibaba tops revenue estimates on AI cloud growth », 19 nov. 2026",
        "url": "https://www.rte.ie/news/business/2026/1119/1599869-alibaba-quarterly-results/"
      },
      {
        "short": "Stocktwits",
        "name": "Stocktwits via TradingView, « BABA Stock Edges Lower Premarket After Q2 Earnings — Alibaba's Adjusted Earnings Miss Estimates, AI Cloud Revenue Jumps 53% », 19 nov. 2026",
        "url": "https://www.tradingview.com/news/stocktwits:828a64a9c094b:0-baba-stock-edges-lower-premarket-after-q2-earnings-alibaba-s-adjusted-earnings-miss-estimates-ai-cloud-revenue-jumps-53/"
      },
      {
        "short": "Investing.com",
        "name": "Investing.com, « Alibaba HK shares rise as Q2 topline beat invites some bargain buying », 20 nov. 2026",
        "url": "https://in.investing.com/news/stock-market-news/alibaba-hk-shares-rise-as-q2-topline-beat-invites-some-bargain-buying-5716728"
      },
      {
        "short": "HDFC Sky",
        "name": "HDFC Sky, « US Stocks Today: Alibaba, Valvoline Rally; NetEase Falls », 19 nov. 2026",
        "url": "https://hdfcsky.com/news/alibaba-valvoline-shares-rise-2-57percent-and-13-10percent-on-ai-revenue-growth-and-us2-1-billion-sales-newgenivf-and-trident-digital-plunge-on-funding-deals"
      },
      {
        "short": "SCMP",
        "name": "South China Morning Post, « Alibaba's AI cloud revenue set to surge over 50% as investment blitz pays off: analysts », nov. 2026",
        "url": "https://www.scmp.com/tech/big-tech/article/3370209/alibabas-ai-cloud-revenue-set-surge-over-50-investment-blitz-pays-analysts"
      },
      {
        "short": "Yahoo Finance",
        "name": "Yahoo Finance (MarketBeat), « What Alibaba Group (BABA) Said on Its Q2 Earnings Call », 19 nov. 2026",
        "url": "https://finance.yahoo.com/markets/stocks/articles/alibaba-group-baba-said-q2-151430025.html"
      },
      {
        "short": "The Singju Post",
        "name": "The Singju Post, « Transcript: Alibaba (BABA) September Quarter 2026 Earnings Call », 19 nov. 2026",
        "url": "https://singjupost.com/transcript-alibaba-baba-september-quarter-2026-earnings-call/"
      }
    ]
  },
  {
    "id": "intuit-t1-2027",
    "company": "Intuit",
    "ticker": "INTU",
    "country": "US",
    "sector": "Logiciels (TurboTax, QuickBooks)",
    "date": "2026-11-19",
    "time": "close",
    "period": "T1 de l'exercice 2027 (août-octobre 2026)",
    "lines": [
      {
        "label": "Chiffre d'affaires",
        "unit": "Md$",
        "act": 4.354,
        "prev": 3.885,
        "src": 1
      },
      {
        "label": "Bénéfice par action ajusté",
        "unit": "$",
        "exp": 2.46,
        "act": 2.91,
        "prev": 1.87,
        "src": 3
      }
    ],
    "verdict": "mieux",
    "guidance": {
      "dir": "abaisse",
      "text": "Intuit abaisse son objectif de chiffre d'affaires pour l'exercice 2027 à 23,08-23,37 milliards de dollars, contre 23,28-23,51 milliards auparavant, en partie à cause de Credit Karma [4][8] ; pour le deuxième trimestre, il vise 4,93 à 4,95 milliards de dollars et 3,17 à 3,22 dollars par action ajusté, moins que ce qu'attendaient les analystes [3][4]."
    },
    "move": {
      "value": "≈ −10 %",
      "text": "−15 % dans les échanges après la clôture selon CNBC [5], puis environ −10 % vendredi matin selon Yahoo Finance [4]"
    },
    "summary": "Le trimestre d'Intuit dépasse les attentes, mais un objectif annuel abaissé et la vente de Mailchimp à prix cassé font chuter l'action [3][4][5].",
    "points": [
      "Chiffre d'affaires de 4,354 milliards de dollars, en hausse de 12 % sur un an [1], au-dessus de la fourchette de 4,294 à 4,313 milliards que visait le groupe [6].",
      "Bénéfice par action ajusté de 2,91 dollars, contre 1,87 dollar un an plus tôt [3] : 2,46 dollars étaient attendus selon Finimize [3], 2,70 dollars selon Investing.com [2], et l'entreprise visait 2,44 à 2,48 dollars [6].",
      "Les services aux entreprises (QuickBooks) progressent de 15 %, à 3,1 milliards de dollars, l'activité grand public de 7 %, à 958 millions, tandis que Mailchimp recule de 1 %, à 313 millions [1][2].",
      "Intuit vend Mailchimp à l'italien Bending Spoons pour environ 3,68 milliards de dollars (3,31 milliards en espèces et 368 millions en actions), moins d'un tiers des 12 milliards payés en 2021 ; la vente doit être bouclée début 2027 [4][5].",
      "Les prévisions abaissées pour Credit Karma, le service de crédit en ligne du groupe, pèsent sur l'objectif annuel [8][7]."
    ],
    "sources": [
      {
        "short": "GuruFocus",
        "name": "GuruFocus, « Intuit Inc (INTU) Reports Strong Q1 FY27 Results with GAAP EPS of $2.59 and Revenue of $4.354 Billion, Exceeding Analyst Estimates », 19 nov. 2026",
        "url": "https://www.gurufocus.com/news/9210926/intuit-inc-intu-reports-strong-q1-fy27-results-with-gaap-eps-of-259-and-revenue-of-4354-billion-exceeding-analyst-estimates"
      },
      {
        "short": "Investing.com",
        "name": "Investing.com, « Earnings call transcript: Intuit tops Q1 2027 estimates but shares fall », nov. 2026",
        "url": "https://in.investing.com/news/stock-market-news/earnings-call-transcript-intuit-tops-q1-2027-estimates-but-shares-fall-93CH-5716416"
      },
      {
        "short": "Finimize",
        "name": "Finimize, « Intuit Beat Q1 Estimates, But Its Q2 Outlook Fell Short », nov. 2026",
        "url": "https://finimize.com/content/intuit-beat-q1-estimates-but-its-q2-outlook-fell-short"
      },
      {
        "short": "Yahoo Finance",
        "name": "Yahoo Finance, « Intuit Shares Fall 11% as Company Agrees $3.68 Billion Mailchimp Sale and Cuts Revenue Outlook », 20 nov. 2026",
        "url": "https://finance.yahoo.com/markets/stocks/articles/intuit-shares-fall-11-company-103434995.html"
      },
      {
        "short": "CNBC",
        "name": "CNBC, « Intuit to sell Mailchimp to Bending Spoons for $3.68 billion », 19 nov. 2026",
        "url": "https://www.cnbc.com/2026/11/19/intuit-mailchimp-sale-bending-spoons.html"
      },
      {
        "short": "RTTNews",
        "name": "RTTNews, « Intuit Reiterates Q1 FY27 Outlook », sept. 2026",
        "url": "https://www.rttnews.com/3691925/intuit-reiterates-q1-fy27-outlook.aspx"
      },
      {
        "short": "MarketScreener",
        "name": "MarketScreener, « Intuit plunges on disappointing outlook and divestiture », 20 nov. 2026",
        "url": "https://www.marketscreener.com/quote/stock/INTUIT-INC-23277275/news/Intuit-plunges-on-disappointing-outlook-and-divestiture-54793063/"
      },
      {
        "short": "BigGo Finance",
        "name": "BigGo Finance, « Intuit Shares Fall as Credit Karma Weakness Triggers Guidance Cut, Mailchimp Sold to Bending Spoons », 19 nov. 2026",
        "url": "https://finance.biggo.com/news/US_INTU_2026-11-19"
      }
    ]
  },
  {
    "id": "ross-stores-t3-2026",
    "company": "Ross Stores",
    "ticker": "ROST",
    "country": "US",
    "sector": "Distribution (déstockage)",
    "date": "2026-11-19",
    "time": "close",
    "period": "T3 de l'exercice 2026 (août-octobre 2026)",
    "lines": [
      {
        "label": "Bénéfice par action",
        "unit": "$",
        "act": 1.91,
        "prev": 1.58,
        "src": 1
      },
      {
        "label": "Ventes à magasins comparables",
        "unit": "%",
        "act": 8,
        "src": 1
      },
      {
        "label": "Marge opérationnelle",
        "unit": "%",
        "act": 12.3,
        "src": 1
      }
    ],
    "verdict": "mieux",
    "guidance": {
      "dir": "releve",
      "text": "Ross relève son objectif de bénéfice par action pour l'exercice 2026 à 8,75-8,84 dollars, dont environ 60 cents de remboursements de droits de douane [1][6], mais sa prévision pour le quatrième trimestre, qui inclut un fret plus cher à cause du carburant, reste sous les attentes des analystes [4][6]."
    },
    "move": {
      "value": "≈ −7 %",
      "text": "près de −7 % selon Financial News [5], l'action reculant aussi avant l'ouverture vendredi [7]"
    },
    "summary": "Le roi américain du déstockage pulvérise ses propres objectifs grâce à l'afflux de clients, mais une prévision de fin d'année jugée prudente fait reculer l'action [1][3][5].",
    "points": [
      "Les ventes progressent de 12 % sur un an et les ventes à magasins comparables de 8 %, surtout grâce à la fréquentation [1].",
      "Le bénéfice par action de 1,91 dollar dépasse la fourchette de 1,75 à 1,83 dollar que visait le groupe [1] et les attentes des analystes [3][4].",
      "La marge opérationnelle atteint 12,3 %, en hausse de 0,7 point, au-dessus des 11,7 à 12,0 % prévus [1].",
      "Pour le quatrième trimestre, Ross maintient une hausse des ventes comparables de 4 à 5 % [6] ; la direction prévoit un fret plus cher à cause de la hausse des prix du carburant et des dépenses de fin d'année plus élevées [6]."
    ],
    "sources": [
      {
        "short": "SEC (Ross Stores)",
        "name": "Ross Stores, communiqué du T3 2026, formulaire 8-K (pièce 99.1), SEC, 19 nov. 2026",
        "url": "https://www.sec.gov/Archives/edgar/data/0000745732/000074573226000047/q326exhibit991.htm"
      },
      {
        "short": "Ross Stores",
        "name": "Ross Stores, « Ross Stores Reports Strong Third Quarter Sales and Earnings Results », 19 nov. 2026",
        "url": "https://investors.rossstores.com/news-releases/news-release-details/ross-stores-reports-strong-third-quarter-sales-and-earnings"
      },
      {
        "short": "Investing.com",
        "name": "Investing.com, « Earnings call transcript: Ross Stores tops Q3 2026 estimates, shares fall after hours », nov. 2026",
        "url": "https://in.investing.com/news/stock-market-news/earnings-call-transcript-ross-stores-tops-q3-2026-estimates-shares-fall-after-hours-93CH-5716398"
      },
      {
        "short": "Longbridge",
        "name": "Longbridge, « Ross Stores Q3 Revenue and Profit Beat Expectations; Q4 Guidance Misses », nov. 2026",
        "url": "https://longbridge.com/en/news/306184107"
      },
      {
        "short": "Financial News",
        "name": "Financial News, « Ross Stores guidance cut sends shares down nearly 7% », nov. 2026",
        "url": "https://www.financial-news.co.uk/ross-stores-guidance-cut-sends-shares-down-nearly-7/"
      },
      {
        "short": "Traders Agency",
        "name": "Traders Agency, « Ross Stores Raises Fiscal 2026 EPS Outlook After Strong Q3 Beat, but Shares Slide on Soft Q4 Guidance », nov. 2026",
        "url": "https://tradersagency.com/blog/ross-stores-raises-fiscal-2026-eps-outlook-after-strong-q3-beat-but-shares-slide-on-soft-q4-guidance"
      },
      {
        "short": "Benzinga",
        "name": "Benzinga, « Ross Stores, Intuit, Anthropic And Other Big Stocks Moving Lower In Friday's Pre-Market Session », 20 nov. 2026",
        "url": "https://www.benzinga.com/trading-ideas/movers/26/11/63468329/ross-stores-intuit-anthropic-and-other-big-stocks-moving-lower-in-fridays-pre-market-session"
      }
    ]
  },
  {
    "id": "medtronic-t2-2027",
    "company": "Medtronic",
    "ticker": "MDT",
    "country": "US",
    "sector": "Santé (dispositifs médicaux)",
    "date": "2026-11-24",
    "time": "open",
    "period": "T2 de l'exercice 2027 (août-octobre 2026)",
    "lines": [
      {
        "label": "Chiffre d'affaires",
        "unit": "Md$",
        "exp": 9.576,
        "src": 2,
        "act": 9.364
      },
      {
        "label": "Bénéfice par action ajusté",
        "unit": "$",
        "exp": 1.34,
        "src": 2,
        "act": 1.34
      }
    ],
    "guidance": {
      "dir": "maintenu",
      "text": "Medtronic maintient ses objectifs pour l'exercice 2027 : une croissance organique du chiffre d'affaires de 7,25 à 7,75 % et un bénéfice par action ajusté de 5,94 à 6,00 dollars [7][10]."
    },
    "summary": "Medtronic publie un bénéfice conforme au haut de sa fourchette mais rate, pour la première fois depuis près de deux ans, les attentes de chiffre d'affaires, à cause de la sortie de son activité diabète en cours de trimestre ; l'action recule [7][9][10].",
    "points": [
      "Chiffre d'affaires de 9,364 milliards de dollars, en hausse de 4,5 % en données publiées et de 6,5 % en organique [7][8], contre 9,48 milliards attendus selon Reuters et MarketBeat [10][11] et 9,58 milliards selon Chartmill [2].",
      "Le bénéfice par action ajusté ressort à 1,34 dollar, un cent au-dessus des 1,33 dollar attendus en moyenne par les analystes [10][13] et au haut de la fourchette visée par le groupe (1,32 à 1,34 dollar) [4].",
      "Le trimestre ne compte l'activité diabète que jusqu'au 15 octobre, date de la séparation de MiniMed : selon Robbie Marcus, analyste chez JPMorgan, ce calendrier explique à lui seul le chiffre d'affaires manqué [10]. Les comptes selon les normes américaines incluent un gain de 2 milliards de dollars lié à cette séparation [8].",
      "Le pôle cardiovasculaire, environ 40 % des ventes, progresse à 3,785 milliards de dollars (+10,4 % en organique), au-dessus des 3,76 milliards attendus [8][10] ; l'ablation cardiaque bondit de 58 %, dont 80 % aux États-Unis [8].",
      "Les neurosciences ne progressent que de 3,2 % en organique, à 2,705 milliards de dollars, freinées par la neuromodulation [8]."
    ],
    "sources": [
      {
        "short": "Medtronic",
        "name": "Medtronic, « Medtronic to announce financial results for its second quarter of fiscal year 2027 » (communiqué), 4 nov. 2026",
        "url": "https://news.medtronic.com/2026-11-04-Medtronic-to-announce-financial-results-for-its-second-quarter-of-fiscal-year-2027"
      },
      {
        "short": "Chartmill",
        "name": "Chartmill, « Medtronic (MDT) Earnings & Revenue Estimates »",
        "url": "https://www.chartmill.com/stock/quote/MDT/estimates"
      },
      {
        "short": "Benzinga",
        "name": "Benzinga, « Medtronic (MDT) Earnings »",
        "url": "https://www.benzinga.com/quote/mdt/earnings"
      },
      {
        "short": "Ticker Report",
        "name": "Ticker Report, « Medtronic (NYSE:MDT) Issues Q2 2027 Earnings Guidance », 2026",
        "url": "https://www.tickerreport.com/?p=13571913"
      },
      {
        "short": "The Cerbat Gem",
        "name": "The Cerbat Gem, « Medtronic (NYSE:MDT) Releases FY 2027 Earnings Guidance », 2026",
        "url": "https://www.thecerbatgem.com/?p=10377957"
      },
      {
        "short": "MarketBeat",
        "name": "MarketBeat, « Transcript: Medtronic Q1 Earnings Call Highlights », 1er sept. 2026",
        "url": "https://www.marketbeat.com/instant-alerts/transcript-medtronic-q1-earnings-call-highlights-2026-09-01/"
      },
      {
        "short": "Medtronic",
        "name": "Medtronic, « Medtronic reports second quarter fiscal 2027 results; performance reflects consistent execution across the portfolio » (communiqué), 24 nov. 2026",
        "url": "https://news.medtronic.com/2026-11-24-Medtronic-reports-second-quarter-fiscal-2027-results-performance-reflects-consistent-execution-across-the-portfolio"
      },
      {
        "short": "SEC (Medtronic)",
        "name": "Medtronic, communiqué des résultats du T2 de l'exercice 2027, annexe 99.1 du formulaire 8-K déposé à la SEC, 24 nov. 2026",
        "url": "https://www.sec.gov/Archives/edgar/data/0001613103/000162828026075604/exhibit991-fy27q2earningsr.htm"
      },
      {
        "short": "Investing.com",
        "name": "Investing.com, « Medtronic Q2 FY27 slides: 6.5% organic growth, stock falls 4% », 24 nov. 2026",
        "url": "https://www.investing.com/news/company-news/medtronic-q2-fy27-slides-65-organic-growth-stock-falls-4-93CH-5048369"
      },
      {
        "short": "Reuters (WBOW)",
        "name": "Reuters via WBOW, « Medtronic posts mixed quarterly results, maintains annual forecast », 24 nov. 2026",
        "url": "https://1027wbow.com/2026/11/24/medtronic-posts-mixed-quarterly-results-maintains-annual-forecast/"
      },
      {
        "short": "MarketBeat",
        "name": "MarketBeat, « Medtronic (NYSE:MDT) Releases Quarterly Earnings Results, Beats Estimates By $0.01 EPS », 24 nov. 2026",
        "url": "https://www.marketbeat.com/instant-alerts/earnings-medtronic-nyse-mdt-releases-quarterly-earnings-results-beats-estimates-by-001-eps-2026-11-24/"
      },
      {
        "short": "Global Banking & Finance (Reuters)",
        "name": "Global Banking & Finance Review (Reuters), « Medtronic Posts Mixed Q2 Results, Maintains Annual Forecast », 24 nov. 2026",
        "url": "https://www.globalbankingandfinance.com/medtronic-posts-mixed-quarterly-results-maintains-annual/"
      },
      {
        "short": "Investing.com",
        "name": "Investing.com, « Medtronic earnings beat by $0.01, revenue fell short of estimates », 24 nov. 2026",
        "url": "https://www.investing.com/news/earnings/medtronic-earnings-beat-by-001-revenue-fell-short-of-estimates-5047786"
      }
    ],
    "verdict": "mitige",
    "move": {
      "value": "−4 à −5 %",
      "text": "en séance mardi : plus de 5 % de baisse dans la matinée selon Reuters [10], environ 4 % selon Investing.com [9]"
    }
  },
  {
    "id": "analog-devices-t4-2026",
    "company": "Analog Devices",
    "ticker": "ADI",
    "country": "US",
    "sector": "Puces (semi-conducteurs analogiques)",
    "date": "2026-11-24",
    "time": "open",
    "period": "T4 de l'exercice 2026 (août-octobre 2026)",
    "lines": [
      {
        "label": "Chiffre d'affaires",
        "unit": "Md$",
        "exp": 4.32,
        "act": 4.37,
        "src": 9
      },
      {
        "label": "Bénéfice par action ajusté",
        "unit": "$",
        "exp": 3.89,
        "act": 4.06,
        "src": 6
      }
    ],
    "guidance": {
      "dir": "abaisse",
      "text": "Pour le premier trimestre de l'exercice 2027, Analog Devices vise 4,4 milliards de dollars de chiffre d'affaires, à 150 millions près, et un bénéfice par action ajusté de 3,82 dollars, à 20 cents près, avec une marge opérationnelle ajustée d'environ 50,5 % [7]. Ce bénéfice visé est inférieur à celui du trimestre écoulé (environ −6 %, selon GuruFocus) [8] et aux attentes : sous le consensus de Bloomberg [9], qui était d'environ 3,86 à 3,89 dollars selon les médias [10]."
    },
    "summary": "Analog Devices signe un trimestre record, au-dessus des attentes, mais une prévision de bénéfice décevante pour le trimestre suivant fait plonger l'action [6][8][9].",
    "points": [
      "Chiffre d'affaires record de 4,37 milliards de dollars, en hausse de 42 % sur un an [7], au-dessus des 4,32 milliards attendus [9] et de l'objectif du groupe (4,3 milliards, à 100 millions près) [2][4].",
      "Le bénéfice par action ajusté ressort à 4,06 dollars, contre 3,89 dollars attendus selon Investing.com [6], et 3,86 dollars visés par le groupe [2].",
      "Sur l'exercice 2026, le chiffre d'affaires atteint 15,2 milliards de dollars (+38 %), le flux de trésorerie disponible 5,5 milliards, et 5,4 milliards ont été rendus aux actionnaires en dividendes et rachats d'actions [4] ; le bénéfice par action ajusté annuel est de 13,05 dollars [7].",
      "Selon le patron Vincent Roche, « plus des deux tiers » de la croissance de 2026 viennent de marchés sans lien direct avec l'IA, même si les infrastructures d'IA ont dopé les centres de données et le test [4].",
      "La prévision de 3,82 dollars par action pour le trimestre suivant, inférieure au consensus de Bloomberg [9] et aux quelque 3,86 à 3,89 dollars attendus selon d'autres sources [10], éclipse le record et fait chuter le titre avant l'ouverture [6][8]."
    ],
    "sources": [
      {
        "short": "Analog Devices",
        "name": "Analog Devices, « Analog Devices to Report Fourth Quarter Fiscal Year 2026 Financial Results on Tuesday, November 24, 2026 », 22 oct. 2026",
        "url": "https://www.analog.com/en/newsroom/press-releases/2026/10-22-2026-adi-report-4q-fy2026-financial-results.html"
      },
      {
        "short": "SEC (Analog Devices)",
        "name": "Analog Devices, communiqué du T3 2026, formulaire 8-K (pièce 99.1), SEC",
        "url": "https://www.sec.gov/Archives/edgar/data/0000006281/000000628126000072/adi3q26exhibit991earnings.htm"
      },
      {
        "short": "RTTNews",
        "name": "RTTNews, « Analog Devices Expects Q4 Net Profit To Surge On Robust Demand »",
        "url": "https://www.rttnews.com/3682057/analog-devices-expects-q4-net-profit-to-surge-on-robust-demand.aspx"
      },
      {
        "short": "SEC (Analog Devices)",
        "name": "Analog Devices, communiqué des résultats du T4 et de l'exercice 2026, annexe 99.1 du formulaire 8-K déposé à la SEC, 24 nov. 2026",
        "url": "https://www.sec.gov/Archives/edgar/data/0000006281/000000628126000087/adiq426exhibit991.htm"
      },
      {
        "short": "Yahoo Finance",
        "name": "Yahoo Finance, « Analog Devices Reports Record Fourth Quarter and Fiscal 2026 Financial Results » (communiqué), 24 nov. 2026",
        "url": "https://finance.yahoo.com/markets/stocks/articles/analog-devices-reports-record-fourth-120100362.html"
      },
      {
        "short": "Investing.com",
        "name": "Investing.com, « Earnings call transcript: Analog Devices beats Q4 2026 estimates, shares slide », 24 nov. 2026",
        "url": "https://ca.investing.com/news/stock-market-news/earnings-call-transcript-analog-devices-beats-q4-2026-estimates-shares-slide-93CH-4978795"
      },
      {
        "short": "Yahoo Finance",
        "name": "Yahoo Finance, « What Analog Devices (ADI) Said on Its Q4 Earnings Call », nov. 2026",
        "url": "https://finance.yahoo.com/markets/stocks/articles/analog-devices-adi-said-q4-171603665.html"
      },
      {
        "short": "GuruFocus",
        "name": "GuruFocus, « Analog Devices Stocks Fall 10.49% as Flat First-Quarter Guide Follows Record 42% Growth », 24 nov. 2026",
        "url": "https://www.gurufocus.com/news/9217261/analog-devices-stocks-fall-1049-as-flat-firstquarter-guide-follows-record-42-growth"
      },
      {
        "short": "Yahoo Finance",
        "name": "Yahoo Finance, « Analog Devices Shares Fall as First-Quarter Earnings Guidance Misses Expectations », 24 nov. 2026",
        "url": "https://finance.yahoo.com/markets/stocks/articles/analog-devices-shares-fall-first-141723564.html"
      },
      {
        "short": "Investing.com",
        "name": "Investing.com, « Analog Devices unveils lower-than-expected first-quarter earnings forecast », 24 nov. 2026",
        "url": "https://www.investing.com/news/stock-market-news/analog-devices-unveils-lowerthanexpected-firstquarter-earnings-forecast-5047864"
      }
    ],
    "verdict": "mieux",
    "move": {
      "value": "−10,5 % avant Bourse",
      "text": "avant l'ouverture mardi : −10,5 %, à 339,01 dollars, à 8 h 45 (heure de New York) selon GuruFocus [8], −17,75 %, à 311,51 dollars, selon Investing.com [6], les replis rapportés allant de plus de 7 % à plus de 12 % selon les dépêches [9][10]"
    }
  },
  {
    "id": "dell-t3-2027",
    "company": "Dell Technologies",
    "ticker": "DELL",
    "country": "US",
    "sector": "Serveurs et ordinateurs",
    "date": "2026-11-24",
    "time": "close",
    "period": "T3 de l'exercice 2027 (août-octobre 2026)",
    "lines": [
      {
        "label": "Chiffre d'affaires",
        "unit": "Md$",
        "exp": 49.22,
        "src": 2,
        "act": 54.9
      },
      {
        "label": "Bénéfice par action ajusté",
        "unit": "$",
        "exp": 6.59,
        "src": 2,
        "act": 9.45
      }
    ],
    "guidance": {
      "dir": "releve",
      "text": "Dell relève nettement ses objectifs pour l'exercice 2027 : environ 202 milliards de dollars de chiffre d'affaires, contre 192 milliards visés jusqu'ici [1][7] et 194,45 milliards attendus par les analystes, et 29,68 dollars de bénéfice par action ajusté, contre 25,50 dollars auparavant [1] et 26,02 dollars attendus [7]. Pour le quatrième trimestre, il vise 8,40 dollars par action ajusté, contre 7,49 dollars attendus [7]."
    },
    "summary": "Dell pulvérise les attentes grâce aux serveurs pour l'intelligence artificielle, avec un chiffre d'affaires doublé sur un an, relève fortement ses objectifs annuels et annonce 25 milliards de dollars de rachats d'actions [6][7][8].",
    "points": [
      "Chiffre d'affaires de 54,9 milliards de dollars, en hausse de 103 % sur un an [7][8], contre 49,22 milliards attendus selon MarketBeat [2] et environ 49,3 milliards selon Benzinga [7].",
      "Le bénéfice par action ajusté ressort à 9,45 dollars, contre environ 6,60 dollars attendus [6][10] ; selon les normes comptables américaines (GAAP), il atteint 8,82 dollars, en hausse de 287 % sur un an [7].",
      "Les commandes de serveurs pour l'IA atteignent 60,2 milliards de dollars sur le trimestre et le carnet de commandes IA un record de 132,3 milliards [8].",
      "Dell autorise 25 milliards de dollars de rachats d'actions [7] ; « nous sommes désormais une entreprise différente », résume la direction, citée par Benzinga [7].",
      "Le titre avait perdu 13,3 % mardi pendant la séance, avant la publication, ce qui explique en partie le rebond après la clôture [9][10]."
    ],
    "sources": [
      {
        "short": "SEC (Dell)",
        "name": "Dell Technologies, communiqué du T2 de l'exercice 2027, formulaire 8-K (pièce 99.1), SEC",
        "url": "https://www.sec.gov/Archives/edgar/data/0001571996/000157199626000039/exhibit991earnings8kq2fy27.htm"
      },
      {
        "short": "MarketBeat",
        "name": "MarketBeat, « Dell Technologies (DELL) Q3 2027 Earnings Date, Time & Estimates »",
        "url": "https://www.marketbeat.com/earnings/reports/2026-11-24-dell-technologies-inc-stock/"
      },
      {
        "short": "Yahoo Finance (Zacks)",
        "name": "Yahoo Finance (Zacks), « DELL Jumps 32% in 3 Months: Can Strong AI Demand Fuel More Gains? », nov. 2026",
        "url": "https://finance.yahoo.com/technology/ai/articles/dell-jumps-32-3-months-134000463.html"
      },
      {
        "short": "CNBC",
        "name": "CNBC, « Dell surges 9% after lifting fiscal 2027 forecast on AI server strength », 1er sept. 2026",
        "url": "https://www.cnbc.com/2026/09/01/dell-q2-earnings-report-2027.html"
      },
      {
        "short": "TipRanks",
        "name": "TipRanks, « Dell Technologies (DELL) Earnings Dates »",
        "url": "https://www.tipranks.com/stocks/dell/earnings"
      },
      {
        "short": "CNBC",
        "name": "CNBC, résultats de Dell du T3 de l'exercice 2027, 24 nov. 2026",
        "url": "https://www.cnbc.com/2026/11/24/dell-earnings-report-q3-2027.html"
      },
      {
        "short": "Benzinga",
        "name": "Benzinga, « Dell Delivers Q3 Double Beat, Raises FY27 Outlook: 'We Are Now a Different Company' », 24 nov. 2026",
        "url": "https://www.benzinga.com/markets/earnings/26/11/63609544/dell-delivers-q3-double-beat-raises-fy27-outlook-we-are-now-a-different-company"
      },
      {
        "short": "Investing.com",
        "name": "Investing.com, « Dell Q3 FY27 slides: revenue doubles, AI backlog hits $132B », 24 nov. 2026",
        "url": "https://uk.investing.com/news/stock-market-news/dell-q3-fy27-slides-revenue-doubles-ai-backlog-hits-132b-93CH-5002787"
      },
      {
        "short": "Investing.com",
        "name": "Investing.com, « Why is Dell Technologies stock surging today? », 24 nov. 2026",
        "url": "https://www.investing.com/news/stock-market-news/why-is-dell-technologies-stock-surging-today-93CH-5049300"
      },
      {
        "short": "TipRanks",
        "name": "TipRanks, « Dell Stock Rises After Q3 EPS Blows Past Estimates », 24 nov. 2026",
        "url": "https://www.tipranks.com/news/dell-stock-rises-after-q3-eps-blows-past-estimates"
      },
      {
        "short": "TheStreet",
        "name": "TheStreet, « Dell Technologies Q3 2027 Earnings: Recap of $DELL Earnings Call, Stock Forecast », 24 nov. 2026",
        "url": "https://www.thestreet.com/latest-news/dell-technologies-q3-2027-earnings-call-stock-updates"
      }
    ],
    "verdict": "mieux",
    "move": {
      "value": "+1,5 à +4 %",
      "text": "dans les échanges après la clôture mardi, de +1,5 % (299,71 dollars) à +4,2 % (307,81 dollars) selon les sources [9][10][11], après une chute de 13,3 %, à 290,50 dollars, pendant la séance précédant la publication [9][10][11]"
    }
  },
  {
    "id": "workday-t3-2027",
    "company": "Workday",
    "ticker": "WDAY",
    "country": "US",
    "sector": "Logiciels (ressources humaines)",
    "date": "2026-11-24",
    "time": "close",
    "period": "T3 de l'exercice 2027 (août-octobre 2026)",
    "lines": [
      {
        "label": "Chiffre d'affaires",
        "unit": "Md$",
        "exp": 2.745,
        "src": 2
      },
      {
        "label": "Bénéfice par action ajusté",
        "unit": "$",
        "exp": 2.8,
        "src": 2
      }
    ],
    "summary": "Le spécialiste des logiciels de paie et de ressources humaines doit montrer que l'intelligence artificielle relance ses ventes, comme promis pour le second semestre [3].",
    "points": [
      "Chartmill attend 2,80 dollars par action et 2,745 milliards de dollars de chiffre d'affaires [2] ; selon Earnings Whispers, le consensus est de 2,74 dollars et environ 2,69 milliards [3].",
      "C'est le premier trimestre où l'envolée des contrats liés à l'IA promise pour le second semestre devra apparaître dans les chiffres, selon Earnings Whispers [3].",
      "Conférence le mardi 24 novembre à 13 h 30, heure du Pacifique, après la clôture de Wall Street [1]."
    ],
    "sources": [
      {
        "short": "Workday",
        "name": "Workday, « Workday to Announce Fiscal 2027 Third Quarter Financial Results on November 24, 2026 », 2 nov. 2026",
        "url": "https://newsroom.workday.com/2026-11-02-Workday-to-Announce-Fiscal-2027-Third-Quarter-Financial-Results-on-November-24,-2026"
      },
      {
        "short": "Chartmill",
        "name": "Chartmill, « Workday (WDAY) Earnings & Revenue Estimates »",
        "url": "https://www.chartmill.com/stock/quote/WDAY/estimates"
      },
      {
        "short": "Finviz (Earnings Whispers)",
        "name": "Finviz (Earnings Whispers), « Workday's promised second-half AI bookings surge faces its first real test », 16 nov. 2026",
        "url": "https://finviz.com/news/423401/workdays-promised-second-half-ai-bookings-surge-faces-its-first-real-test"
      }
    ]
  },
  {
    "id": "deere-t4-2026",
    "company": "Deere (John Deere)",
    "ticker": "DE",
    "country": "US",
    "sector": "Machines agricoles",
    "date": "2026-11-25",
    "period": "T4 de l'exercice 2026 (août-octobre 2026)",
    "lines": [
      {
        "label": "Chiffre d'affaires",
        "unit": "Md$",
        "exp": 10.677,
        "src": 2
      },
      {
        "label": "Bénéfice par action",
        "unit": "$",
        "exp": 4.17,
        "src": 2
      }
    ],
    "summary": "Le premier fabricant mondial de tracteurs dit comment vont les agriculteurs américains, dont le moral est en berne [4].",
    "points": [
      "Chartmill attend 4,17 dollars par action et 10,68 milliards de dollars de chiffre d'affaires, Hudson Labs 4,06 dollars et 10,35 milliards [2][3].",
      "Les attentes ont baissé : selon Chartmill, l'estimation de chiffre d'affaires a été révisée en baisse de 5 % en trois mois [2].",
      "Le plus regardé sera l'objectif de bénéfice pour l'exercice 2027, qui dira si le creux du marché agricole est passé [3][4].",
      "Conférence le mercredi 25 novembre à 9 h, heure de Chicago [1]."
    ],
    "sources": [
      {
        "short": "Deere",
        "name": "Deere & Company, « Deere to Announce Fourth Quarter 2026 Financial Results » (communiqué via Placera), 11 nov. 2026",
        "url": "https://www.placera.se/pressmeddelanden/deere-to-announce-fourth-quarter-2026-financial-results-20261111"
      },
      {
        "short": "Chartmill",
        "name": "Chartmill, « Deere & Co (DE) Earnings & Revenue Estimates »",
        "url": "https://www.chartmill.com/stock/quote/DE/estimates"
      },
      {
        "short": "Hudson Labs",
        "name": "Hudson Labs, « Deere & Company (DE) — Q4 2026 Earnings Preview », nov. 2026",
        "url": "https://www.hudson-labs.com/research/deere-q4-2026-earnings-preview-de-revenue-guidance-key-risks"
      },
      {
        "short": "Stocktwits",
        "name": "Stocktwits, « Deere Q4 Earnings Seen Under Pressure Amid Weak Farmer Sentiment », nov. 2026",
        "url": "https://stocktwits.com/news-articles/markets/equity/deere-q4-earnings-seen-under-pressure-amid-weak-farmer-sentiment/cL5bdq0REfH"
      }
    ]
  },
  {
    "id": "salesforce-t3-2027",
    "company": "Salesforce",
    "ticker": "CRM",
    "country": "US",
    "sector": "Logiciels (gestion clients)",
    "date": "2026-12-02",
    "time": "close",
    "period": "T3 de l'exercice 2027 (août-octobre 2026)",
    "lines": [],
    "summary": "Le numéro un mondial des logiciels de gestion de la relation client publie ses comptes d'automne, très regardés pour savoir si ses agents d'intelligence artificielle relancent sa croissance [1][2].",
    "points": [
      "Résultats le mercredi 2 décembre après la clôture de Wall Street, a annoncé le groupe le 10 novembre [1].",
      "Conférence à 14 h, heure du Pacifique (23 h à Paris), selon TechIntelPro, qui cite Business Wire [2]."
    ],
    "sources": [
      {
        "short": "Salesforce",
        "name": "Salesforce, « Salesforce Announces Date of Third Quarter Fiscal 2027 Earnings Release and Webcast », 10 nov. 2026",
        "url": "https://investor.salesforce.com/news/news-details/2026/Salesforce-Announces-Date-of-Third-Quarter-Fiscal-2027-Earnings-Release-and-Webcast/default.aspx"
      },
      {
        "short": "TechIntelPro",
        "name": "TechIntelPro, « Salesforce to Announce Q3 Fiscal 2027 Results on December 2 »",
        "url": "https://techintelpro.com/news/AI/Enterprise-AI/salesforce-to-announce-q3-fiscal-2027-results-on-december-2"
      }
    ]
  },
  {
    "id": "scotiabank-t4-2026",
    "company": "Banque Scotia",
    "ticker": "BNS",
    "country": "CA",
    "sector": "Banque",
    "date": "2026-12-02",
    "time": "open",
    "period": "T4 de l'exercice 2026 (août-octobre 2026)",
    "lines": [],
    "summary": "La Banque Scotia ouvre la saison des résultats annuels des grandes banques canadiennes [1][2].",
    "points": [
      "Communiqué vers 5 h 30, heure de Toronto, le mercredi 2 décembre, avant l'ouverture de la Bourse [1][2].",
      "On regardera les provisions pour prêts douteux."
    ],
    "sources": [
      {
        "short": "Banque Scotia",
        "name": "Banque Scotia, « Scotiabank to Announce Fourth Quarter 2026 Results », 4 nov. 2026",
        "url": "https://scotiabank.investorroom.com/2026-11-04-Scotiabank-to-Announce-Fourth-Quarter-2026-Results"
      },
      {
        "short": "The Globe and Mail",
        "name": "The Globe and Mail (Newswire), « Scotiabank to Announce Fourth Quarter 2026 Results », 4 nov. 2026",
        "url": "https://www.theglobeandmail.com/investing/markets/markets-news/Newswire.ca/8647071/scotiabank-to-announce-fourth-quarter-2026-results/"
      }
    ]
  },
  {
    "id": "rbc-t4-2026",
    "company": "Banque Royale du Canada (RBC)",
    "ticker": "RY",
    "country": "CA",
    "sector": "Banque",
    "date": "2026-12-03",
    "time": "open",
    "period": "T4 de l'exercice 2026 (août-octobre 2026)",
    "lines": [],
    "summary": "La première banque du Canada publie ses comptes annuels ; il y a un an, elle avait dégagé 5,43 milliards de dollars canadiens de bénéfice au quatrième trimestre [1][2].",
    "points": [
      "Communiqué vers 6 h, heure de Toronto, le jeudi 3 décembre, puis conférence avec les analystes à 8 h 30 [1].",
      "Au quatrième trimestre 2025, RBC avait réalisé un bénéfice de 5,43 milliards de dollars canadiens [2]."
    ],
    "sources": [
      {
        "short": "RBC",
        "name": "RBC, « RBC to announce fourth quarter and fiscal 2026 results », via Investing News",
        "url": "https://investingnews.com/rbc-to-announce-fourth-quarter-and-fiscal-2026-results/"
      },
      {
        "short": "WTOP (AP)",
        "name": "WTOP (Associated Press), « Royal Bank: Fiscal Q4 Earnings Snapshot », déc. 2025",
        "url": "https://wtop.com/news/2025/12/royal-bank-fiscal-q4-earnings-snapshot"
      }
    ]
  },
  {
    "id": "cibc-t4-2026",
    "company": "CIBC",
    "ticker": "CM",
    "country": "CA",
    "sector": "Banque",
    "date": "2026-12-03",
    "time": "open",
    "period": "T4 de l'exercice 2026 (août-octobre 2026)",
    "lines": [],
    "summary": "La Banque CIBC publie ses comptes du trimestre clos le 31 octobre [1][2].",
    "points": [
      "Communiqué vers 5 h 30, heure de Toronto, le jeudi 3 décembre, et conférence à 7 h 30 [1][2]."
    ],
    "sources": [
      {
        "short": "CIBC",
        "name": "CIBC, « Media Advisory - CIBC to Announce Fourth Quarter 2026 Results on December 3, 2026 », 5 nov. 2026",
        "url": "https://cibc.mediaroom.com/2026-11-05-Media-Advisory-CIBC-to-Announce-Fourth-Quarter-2026-Results-on-December-3,-2026"
      },
      {
        "short": "TradingView (PR Newswire)",
        "name": "TradingView (PR Newswire), « Media Advisory - CIBC to Announce Fourth Quarter 2026 Results on December 3, 2026 »",
        "url": "https://www.tradingview.com/news/prnewswire:e5a2288ca9f06:0-media-advisory-cibc-to-announce-fourth-quarter-2026-results-on-december-3-2026/"
      }
    ]
  },
  {
    "id": "amd-t3-2026",
    "company": "AMD",
    "ticker": "AMD",
    "country": "US",
    "sector": "Puces et IA",
    "date": "2026-11-03",
    "time": "close",
    "period": "T3 2026",
    "lines": [
      {
        "label": "Chiffre d'affaires",
        "unit": "Md$",
        "exp": 13.11,
        "act": 13.38,
        "src": 1
      },
      {
        "label": "Bénéfice par action ajusté",
        "unit": "$",
        "exp": 1.95,
        "act": 2.09,
        "src": 2
      },
      {
        "label": "Objectif de chiffre d'affaires au T4",
        "unit": "Md$",
        "exp": 16.3,
        "act": 17,
        "src": 3
      }
    ],
    "verdict": "mieux",
    "guidance": {
      "dir": "releve",
      "text": "AMD vise environ 17 milliards de dollars de chiffre d'affaires au quatrième trimestre, à 3 % près, au-dessus des 16,3 milliards attendus. Seule ombre : une marge brute visée d'environ 55 %, un peu sous les 55,5 % espérés [3]."
    },
    "move": {
      "value": "+5 %",
      "text": "dans les échanges après la clôture [3]"
    },
    "summary": "Chiffre d'affaires record, porté par les centres de données, et un objectif pour la fin d'année bien au-dessus des attentes [1][3].",
    "points": [
      "Chiffre d'affaires de 13,38 milliards de dollars, en hausse d'environ 45 % sur un an, contre 13,11 milliards attendus selon les données S&P citées par StockStory [1].",
      "Les centres de données, où AMD vend ses puces pour l'intelligence artificielle, atteignent un record de 8,5 milliards de dollars, presque le double d'il y a un an (+97 %) [1].",
      "Le bénéfice par action ajusté ressort à 2,09 dollars, contre 1,95 dollar attendu [2]. Selon les normes comptables américaines (GAAP), il est de 1,46 dollar, pour un bénéfice net de 2,4 milliards de dollars et une marge brute de 54 % [4][5].",
      "Ce qui a le plus plu : l'objectif du trimestre suivant. Un saut de 13,4 à environ 17 milliards de dollars en un trimestre montre que les commandes de puces d'IA arrivent [3]."
    ],
    "sources": [
      {
        "short": "StockStory",
        "name": "StockStory, « AMD (NASDAQ:AMD) surprises with Q3 sales, stock soars », nov. 2026",
        "url": "https://stockstory.org/us/stocks/nasdaq/amd/news/earnings/amd-nasdaqamd-surprises-with-q3-sales-stock-soars"
      },
      {
        "short": "Newsquawk",
        "name": "Newsquawk, « Advanced Micro Devices Inc. (AMD) Q3 2026: Adj. EPS 2.09 (exp. 1.95), Revenue 13.4bln (exp. 13.1bln) »",
        "url": "https://www.newsquawk.com/headlines/advanced-micro-devices-inc-amd-q3-2026-usd-adj-eps-209-exp-195-revenue-134bln-exp-131bln"
      },
      {
        "short": "InvestingLive",
        "name": "InvestingLive, « AMD shares rise after hours as Q4 revenue outlook of $17bn tops forecasts on AI ramp », nov. 2026",
        "url": "https://investinglive.com/stocks/amd-shares-rise-after-hours-as-q4-revenue-outlook-of-17bn-tops-forecasts-on-ai-ramp/"
      },
      {
        "short": "AMD",
        "name": "AMD, « AMD Reports Third Quarter 2026 Financial Results » (communiqué, formulaire 8-K)",
        "url": "https://www.sec.gov/Archives/edgar/data/0000002488/000000248826000188/q32026991.htm"
      },
      {
        "short": "MarketScreener",
        "name": "MarketScreener, « AMD Reports Third Quarter 2026 Financial Results », nov. 2026",
        "url": "https://www.marketscreener.com/news/amd-reports-third-quarter-2026-financial-results-ce785fdedc89f625"
      }
    ]
  },
  {
    "id": "cameco-t3-2026",
    "company": "Cameco",
    "ticker": "CCO",
    "country": "CA",
    "sector": "Uranium",
    "date": "2026-10-30",
    "time": "open",
    "period": "T3 2026",
    "lines": [
      {
        "label": "Résultat net ajusté",
        "unit": "M$ CA",
        "prev": 32,
        "act": -2,
        "src": 2
      },
      {
        "label": "Production d'uranium du trimestre",
        "unit": "M lb",
        "act": 3.5,
        "note": "−20 % sur un an",
        "src": 2
      }
    ],
    "verdict": "moins",
    "guidance": {
      "dir": "abaisse",
      "text": "Cameco ne vise plus que 19,5 à 20,5 millions de livres d'uranium produites cette année, contre 19,5 à 21,5 millions avant : le haut de la fourchette disparaît [2]."
    },
    "move": {
      "value": "−7,7 %",
      "text": "à la Bourse de Toronto le jour des résultats, à 107,60 $ CA [3]"
    },
    "summary": "Le géant canadien de l'uranium déçoit : une mine à l'arrêt plus longtemps que prévu a fait chuter la production de 20 % [2].",
    "points": [
      "Résultats sous les attentes des analystes [4]. Hors éléments exceptionnels, Cameco affiche une petite perte de 2 millions de dollars canadiens, contre un bénéfice de 32 millions un an plus tôt ; le bénéfice net publié est de 43 millions, soit 0,10 dollar canadien par action [1][2].",
      "La cause principale : un arrêt de maintenance prolongé à Key Lake, en Saskatchewan, qui a fait tomber la production du trimestre à 3,5 millions de livres d'uranium, 20 % de moins qu'un an plus tôt [2].",
      "Moins de ventes, des coûts unitaires plus élevés et de moindres gains de sa participation dans Westinghouse ont aussi pesé, en partie compensés par des prix de vente plus élevés [2][5]. Le chiffre d'affaires du trimestre est de 619 millions de dollars canadiens [5].",
      "Cameco maintient un dividende annuel de 0,24 dollar canadien par action, payé le 15 décembre [2]."
    ],
    "sources": [
      {
        "short": "RTTNews",
        "name": "RTTNews, « Cameco 9-Month Profit Falls, Narrows FY26 Guidance », oct. 2026",
        "url": "https://www.rttnews.com/3706590/cameco-9-month-profit-falls-narrows-fy26-guidance.aspx"
      },
      {
        "short": "Grafa",
        "name": "Grafa, « Cameco Q3 2026 adjusted loss, uranium production falls », oct. 2026",
        "url": "https://grafa.com/en/news/united-states/cameco-q3-2026-adjusted-loss-uranium-production-falls"
      },
      {
        "short": "Yahoo Finance",
        "name": "Yahoo Finance, Cameco (CCO.TO), cours de clôture du 30 oct. 2026",
        "url": "https://finance.yahoo.com/quote/CCO.TO/analysis/"
      },
      {
        "short": "Investing.com",
        "name": "Investing.com, « Earnings call transcript: Cameco misses Q3 2026 estimates as shares fall », oct. 2026",
        "url": "https://www.investing.com/news/transcripts/earnings-call-transcript-cameco-misses-q3-2026-estimates-as-shares-fall-93CH-4989724"
      },
      {
        "short": "BNN Bloomberg",
        "name": "BNN Bloomberg (La Presse canadienne), « Cameco excited, but cautious, about power demand from Big Tech », 30 oct. 2026",
        "url": "https://www.bnnbloomberg.ca/business/company-news/2026/10/30/uranium-miner-cameco-reports-43m-q3-profit-revenue-edges-up-from-year-ago/"
      },
      {
        "short": "MarketScreener",
        "name": "MarketScreener, « Cameco Corporation Reports Earnings Results for the Third Quarter and Nine Months Ended September 30, 2026 »",
        "url": "https://www.marketscreener.com/news/cameco-corporation-reports-earnings-results-for-the-third-quarter-and-nine-months-ended-september-30-ce785fd8d88df023"
      }
    ]
  },
  {
    "id": "cn-t3-2026",
    "company": "Canadien National (CN)",
    "ticker": "CNR",
    "country": "CA",
    "sector": "Transport ferroviaire",
    "date": "2026-10-30",
    "time": "close",
    "period": "T3 2026",
    "lines": [
      {
        "label": "Chiffre d'affaires",
        "unit": "Md$ CA",
        "exp": 4.63,
        "act": 4.77,
        "src": 2
      },
      {
        "label": "Bénéfice par action ajusté",
        "unit": "$ CA",
        "exp": 2.09,
        "act": 2.16,
        "src": 3
      }
    ],
    "verdict": "mieux",
    "guidance": {
      "dir": "maintenu",
      "text": "CN garde son objectif d'une hausse du bénéfice par action ajusté « entre le milieu et le haut d'un seul chiffre » cette année, et dit se diriger plutôt vers le haut de cette fourchette [1]."
    },
    "summary": "Le premier réseau ferroviaire du Canada transporte plus et gagne plus : chiffre d'affaires en hausse de 15 %, au-dessus des attentes [1][2].",
    "points": [
      "Chiffre d'affaires de 4 771 millions de dollars canadiens, en hausse de 606 millions (+15 %) sur un an [1], contre environ 4,63 milliards attendus selon Investing.com [2] et 4,66 milliards selon FactSet [3].",
      "Bénéfice par action ajusté de 2,16 dollars canadiens, en hausse de 18 % [1], contre 2,09 dollars attendus selon FactSet [3]. Bénéfice net de 1 209 millions de dollars canadiens, contre 1 139 millions un an plus tôt [3].",
      "Les volumes transportés, mesurés en tonnes-milles brutes, augmentent d'environ 4 %, et CN a racheté environ 3,9 millions de ses actions pour 676 millions de dollars canadiens pendant le trimestre [3].",
      "Le ratio d'exploitation ajusté, la part du chiffre d'affaires mangée par les coûts, s'améliore à 61,0 % (0,4 point de mieux) [1].",
      "Bonne nouvelle pour les prochains mois : CN s'attend désormais à des récoltes de céréales 2026-2027 au-dessus de leur moyenne de cinq ans, et donc à plus de grain à transporter [1]."
    ],
    "sources": [
      {
        "short": "CN",
        "name": "CN, « CN Delivers Strong Third Quarter Performance » (communiqué, formulaire 6-K), 30 oct. 2026",
        "url": "https://www.sec.gov/Archives/edgar/data/0000016868/000001686826000041/a2026q3pressreleasestatssu.htm"
      },
      {
        "short": "Investing.com",
        "name": "Investing.com, « Résultats T3 2026 : Canadian National dépasse les prévisions », oct. 2026",
        "url": "https://fr.investing.com/news/transcripts/resultats-t3-2026--canadian-national-depasse-les-previsions-93CH-3667241"
      },
      {
        "short": "Zonebourse",
        "name": "Zonebourse, « Le CN affiche un solide rendement au troisième trimestre », 30 oct. 2026",
        "url": "https://www.zonebourse.com/actualite-bourse/le-cn-affiche-un-solide-rendement-au-troisieme-trimestre-ce785fdbda80f527"
      },
      {
        "short": "CN",
        "name": "CN, rapport de gestion du troisième trimestre 2026 (formulaire 6-K)",
        "url": "https://www.sec.gov/Archives/edgar/data/0000016868/000001686826000041/a2026q3mda.htm"
      }
    ]
  },
  {
    "id": "totalenergies-t3-2026",
    "company": "TotalEnergies",
    "ticker": "TTE",
    "country": "FR",
    "sector": "Énergie",
    "date": "2026-10-29",
    "time": "open",
    "period": "T3 2026",
    "lines": [
      {
        "label": "Résultat net ajusté",
        "unit": "Md$",
        "exp": 8.9,
        "act": 9.1,
        "src": 2
      },
      {
        "label": "Résultat net publié",
        "unit": "Md$",
        "act": 8.3,
        "src": 1
      }
    ],
    "verdict": "mieux",
    "summary": "Bénéfice record pour le groupe français, porté par l'envolée des prix des hydrocarbures et des marges de raffinage [1][5].",
    "points": [
      "Résultat net ajusté de 9,1 milliards de dollars, contre 8,9 milliards attendus par les analystes interrogés par le groupe, et plus du double d'un an plus tôt [2].",
      "Il bat tous les consensus : 8,9 milliards attendus par les analystes interrogés par le groupe [2], 8,73 milliards selon Visible Alpha [4], et 8,3 milliards en moyenne pour les 12 analystes du consensus LSEG [3].",
      "Il progresse aussi nettement par rapport au deuxième trimestre, où il était de 6,0 milliards de dollars [2].",
      "Le bénéfice net publié atteint 8,3 milliards de dollars, contre 3,7 milliards au troisième trimestre 2025 [1].",
      "Le raffinage et le gaz naturel liquéfié ont tiré le trimestre, avec une marge de raffinage de 33,2 dollars par tonne [1]. Le raffinage dégage 3,60 milliards de dollars, plus du double d'un an plus tôt, et le résultat du GNL est multiplié par 2,3, à 1,9 milliard [4].",
      "Le ratio d'endettement tombe à 9,1 %, 4 points de mieux qu'au deuxième trimestre [4]."
    ],
    "sources": [
      {
        "short": "AFP",
        "name": "AFP via Connaissance des énergies, « TotalEnergies engrange un bénéfice net record au 3T avec l'envolée des hydrocarbures », 29 oct. 2026",
        "url": "https://www.connaissancedesenergies.org/afp/totalenergies-engrange-un-benefice-net-record-au-3t-avec-lenvolee-des-hydrocarbures-261029"
      },
      {
        "short": "Fortuneo",
        "name": "Fortuneo Bourse, « TotalEnergies : les bénéfices s'envolent », 29 oct. 2026",
        "url": "https://bourse.fortuneo.fr/actualites/totalenergies-les-benefices-s-envolent-6173808"
      },
      {
        "short": "Boursorama",
        "name": "Boursorama (Reuters), « TotalEnergies : le bénéfice net au T3 bondit de 127 % sur un an », 29 oct. 2026",
        "url": "https://www.boursorama.com/bourse/actualites/totalenergies-le-benefice-net-au-t3-bondit-de-127-sur-un-an-cc1c045f02451130f8d019352aabe1fc"
      },
      {
        "short": "ABC Bourse",
        "name": "ABC Bourse, « TotalEnergies affiche des profits spectaculaires au 3e trimestre, les chiffres dépassent les prévisions », 29 oct. 2026",
        "url": "https://www.abcbourse.com/marches/totalenergies-affiche-des-profits-spectaculaires-au-3e-trimestre-les-chiffres-d_705173"
      },
      {
        "short": "Zonebourse",
        "name": "Zonebourse, « TotalEnergies affiche un 3e trimestre solide malgré les tensions au Moyen-Orient », 29 oct. 2026",
        "url": "https://www.zonebourse.com/actualite-bourse/totalenergies-affiche-un-3e-trimestre-solide-malgre-les-tensions-au-moyen-orient-ce785cd3df80f320"
      }
    ]
  },
  {
    "id": "alphabet-t3-2026",
    "company": "Alphabet (Google)",
    "ticker": "GOOGL",
    "country": "US",
    "sector": "Internet et publicité",
    "date": "2026-10-28",
    "time": "close",
    "period": "T3 2026",
    "lines": [
      {
        "label": "Chiffre d'affaires",
        "unit": "Md$",
        "exp": 127.9,
        "act": 127.6,
        "src": 2
      },
      {
        "label": "Bénéfice par action",
        "unit": "$",
        "exp": 3.03,
        "act": 2.12,
        "src": 2
      }
    ],
    "verdict": "moins",
    "guidance": {
      "dir": "maintenu",
      "text": "Alphabet garde inchangée sa prévision d'investissements pour 2026, malgré la chute de son flux de trésorerie [3]."
    },
    "move": {
      "value": "−10 %",
      "text": "et plus dans les échanges après la clôture [1]"
    },
    "summary": "Google rate de peu son chiffre d'affaires et nettement son bénéfice : le cloud explose, mais la recherche et YouTube déçoivent [1][2].",
    "points": [
      "Chiffre d'affaires d'environ 127,6 milliards de dollars, en hausse de 25 %, sous les attentes : 127,9 milliards selon Newsquawk [2], 128,2 milliards selon le consensus LSEG [5].",
      "Bénéfice de 2,12 dollars par action, en baisse d'environ 26 % sur un an, contre 3,02 dollars attendus selon FactSet ; l'écart vient en bonne partie d'une perte d'environ 8,7 milliards de dollars sur des investissements [1][5]. Même hors éléments exceptionnels, le bénéfice ajusté (2,67 dollars) reste sous le consensus [5].",
      "Google Cloud a plus que doublé sur un an et dépasse les attentes, mais la publicité (82 milliards de dollars) est en dessous : le mode IA de la recherche ralentit les publicités liées aux recherches [4][5].",
      "Les dépenses pour les centres de données d'IA pèsent : 51,4 milliards de dollars d'investissements sur le trimestre, et un flux de trésorerie disponible négatif d'environ 9,1 milliards [3][5].",
      "Le lendemain matin, l'action perdait encore environ 10 % avant l'ouverture de Wall Street [6]."
    ],
    "sources": [
      {
        "short": "AP",
        "name": "AP via NY1, « Google misses revenue expectations, Alphabet stock sinks in early after-hours trading », 28 oct. 2026",
        "url": "https://ny1.com/nyc/all-boroughs/ap-top-news/2026/10/28/google-misses-revenue-expectations-alphabet-stock-sinks-in-early-after-hours-trading"
      },
      {
        "short": "Newsquawk",
        "name": "Newsquawk, « Alphabet (GOOGL) Q3 2026: EPS 2.12 (exp. 3.03), Revenue 127.6bln (exp. 127.91bln) »",
        "url": "https://www.newsquawk.com/headlines/alphabet-googl-q3-2026-usd-eps-212-exp-303-revenue-1276bln-exp-12791bln"
      },
      {
        "short": "CNBC",
        "name": "CNBC, « Alphabet (GOOGL) earnings Q3 2026 », 28 oct. 2026",
        "url": "https://www.cnbc.com/2026/10/28/alphabet-googl-earnings-q3-2026.html"
      },
      {
        "short": "InvestingLive",
        "name": "InvestingLive, « Alphabet Q3: Google Cloud revenue jumps 103% but search and ad sales miss forecasts », oct. 2026",
        "url": "https://investinglive.com/stocks/alphabet-q3-google-cloud-revenue-jumps-103-but-search-and-ad-sales-miss-forecasts/"
      },
      {
        "short": "Boursorama",
        "name": "Boursorama (Reuters), « Alphabet : le CA déçoit au T3 et la consommation de trésorerie s'aggrave, l'action plonge après la clôture », 28 oct. 2026",
        "url": "https://www.boursorama.com/bourse/actualites/alphabet-le-ca-decoit-au-t3-et-la-consommation-de-tresorerie-s-aggrave-l-action-plonge-apres-la-cloture-9f358ddb70b70c16a959c70c1c8e6e4e"
      },
      {
        "short": "ABC Bourse",
        "name": "ABC Bourse, « Alphabet plonge de 10 % à Wall Street malgré des revenus records », 29 oct. 2026",
        "url": "https://www.abcbourse.com/marches/alphabet-plonge-de-10-a-wall-street-malgre-des-revenus-records_705179"
      }
    ]
  }
];
