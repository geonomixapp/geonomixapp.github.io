// « À venir » (demande de l'auteur, 31 oct. 2026 : les dates qui comptent demain, dans la semaine, dans le mois,
// pour avoir une vision à plus long terme). Une entrée = un rendez-vous daté qui aura un effet sur l'économie,
// la géopolitique ou les marchés. Tenu à jour chaque matin par la routine (contenu/ROUTINE_ACTU.md, « À venir ») :
// on ajoute les nouvelles dates sourcées, on retire celles qui sont passées.
//   date / end (facultatif) : AAAA-MM-JJ ; theme : eco | geo | fin | mix ; region ; place : lieu affiché ;
//   title : le rendez-vous ; why : pourquoi ça compte, avec [n] ; news (facultatif) : id d'une actu liée ;
//   sources : { short, name, url } (au moins 2, sinon verify : la raison).
window.GEOCO = window.GEOCO || {};
window.GEOCO.agenda = [
  {
    "id": "2026-11-09-cop31-antalya",
    "date": "2026-11-09",
    "end": "2026-11-20",
    "theme": "mix",
    "region": "Europe",
    "place": "Antalya, Turquie",
    "title": "COP31 : la conférence mondiale sur le climat s'ouvre en Turquie",
    "why": "Deux semaines de négociations à Antalya, avec un sommet des chefs d'État les 11 et 12 novembre ; la Turquie accueille, l'Australie mène les négociations [1][2]. On y discute d'argent pour les pays du Sud, de sortie des énergies fossiles et de marchés du carbone.",
    "sources": [
      {
        "short": "CNULCD",
        "name": "Convention des Nations unies sur la lutte contre la désertification, « 2026 UN Climate Change Conference COP31 »",
        "url": "https://www.unccd.int/index.php/events/other/2026-un-climate-change-conference-cop31"
      },
      {
        "short": "Wikipédia",
        "name": "Wikipédia (anglais), « 2026 United Nations Climate Change Conference »",
        "url": "https://en.wikipedia.org/wiki/2026_United_Nations_Climate_Change_Conference"
      }
    ]
  },
  {
    "id": "2026-11-18-royaume-uni-inflation-octobre",
    "date": "2026-11-18",
    "theme": "eco",
    "region": "Europe",
    "place": "Londres",
    "title": "Royaume-Uni : inflation d'octobre",
    "why": "L'ONS publie l'inflation d'octobre, après 3,5 % en septembre (contre 3,1 % en août), tirée par les carburants (+29,8 % sur un an) [1][2]. Elle arrive deux semaines après la décision de la Banque d'Angleterre et pèsera sur la suivante.",
    "sources": [
      {
        "short": "ONS",
        "name": "Office for National Statistics, « Consumer price inflation, UK: September 2026 » (prochaine publication : 18 novembre)",
        "url": "https://www.ons.gov.uk/economy/inflationandpriceindices/bulletins/consumerpriceinflation/september2026"
      },
      {
        "short": "Commons Library",
        "name": "House of Commons Library, « Inflation in the UK: Economic indicators »",
        "url": "https://commonslibrary.parliament.uk/research-briefings/sn02792/"
      }
    ]
  },
  {
    "id": "2026-11-18-apec-shenzhen-sommet",
    "date": "2026-11-18",
    "end": "2026-11-19",
    "theme": "geo",
    "region": "Asie",
    "place": "Shenzhen",
    "title": "Sommet des dirigeants de l'APEC à Shenzhen",
    "why": "Le 33e sommet de la coopération économique Asie-Pacifique se tient en Chine les 18 et 19 novembre, précédé du sommet des chefs d'entreprise les 17 et 18 [1][2]. Il réunit les économies de la région autour du commerce, et peut être le cadre de rencontres entre dirigeants sur les droits de douane et les chaînes d'approvisionnement.",
    "news": "2026-11-04-chine-canada-commerce-pekin-changhai",
    "sources": [
      {
        "short": "Shenzhen",
        "name": "Gouvernement du district de Longgang, Shenzhen, « The 33rd APEC Economic Leaders' Meeting to occur in Shenzhen (11.18-19, 2026) »",
        "url": "https://www.lg.gov.cn/english/news/latestnews/content/post_12588327.html"
      },
      {
        "short": "CGTN",
        "name": "CGTN, « 2026 APEC CEO Summit to be held on Nov 17-18 in China's Shenzhen »",
        "url": "https://news.cgtn.com/news/2026-09-10/2026-APEC-CEO-Summit-to-be-held-on-Nov-17-18-in-China-s-Shenzhen-1QkpMIz9M2s/p.html"
      }
    ]
  },
  {
    "id": "2026-11-18-fed-compte-rendu-reunion-octobre",
    "date": "2026-11-18",
    "theme": "fin",
    "region": "Amériques",
    "place": "Washington",
    "title": "La Fed publie le compte rendu de sa réunion d'octobre",
    "why": "Les minutes de la réunion des 27 et 28 octobre sortent à 14 h (heure de New York) [1]. Elles montrent combien de membres du comité voulaient déjà relever les taux, donc si la hausse de décembre est solide ou fragile ; les marchés d'actions, d'obligations et le dollar peuvent bouger.",
    "sources": [
      {
        "short": "Réserve fédérale",
        "name": "Réserve fédérale, calendrier de novembre 2026 (compte rendu de la réunion des 27-28 octobre)",
        "url": "https://www.federalreserve.gov/newsevents/2026-november.htm"
      }
    ]
  },
  {
    "id": "2026-11-18-france-senat-vote-budget-secu",
    "date": "2026-11-18",
    "theme": "eco",
    "region": "Europe",
    "place": "Paris, France",
    "title": "Vote solennel du Sénat sur le budget de la Sécurité sociale 2027",
    "why": "La majorité sénatoriale veut y rétablir la réforme des retraites à 64 ans et relever à 1 500 euros le seuil de gel des pensions, avant le retour du texte devant les députés [1].",
    "sources": [
      {
        "short": "NosParlementaires",
        "name": "NosParlementaires, « Gel des pensions 2027 : le Sénat veut un seuil à 1 500 euros » (11/2026)",
        "url": "https://nosparlementaires.fr/actualites/gel-pensions-senat-1500-euros-reforme-retraites-plfss-2027"
      }
    ]
  },
  {
    "id": "2026-11-14-indonesie-banque-centrale-taux",
    "date": "2026-11-18",
    "theme": "eco",
    "region": "Asie",
    "place": "Jakarta, Indonésie",
    "title": "Indonésie : la banque centrale décide de son taux",
    "why": "Bank Indonesia réunit son conseil les 17 et 18 novembre et annonce sa décision le second jour [1]. En octobre, elle avait laissé son taux directeur à 5,75 % mais relevé le taux de sa facilité de dépôt à 5 % pour soutenir la roupie [2] : un nouveau resserrement dirait que la pression sur la monnaie ne faiblit pas.",
    "sources": [
      {
        "short": "Bisnis.com",
        "name": "Bisnis.com, « Jadwal Rapat Dewan Gubernur (RDG) Bank Indonesia 2026, Ini Daftar Lengkap Tanggal Resminya »",
        "url": "https://finansial.bisnis.com/read/20251222/11/1938911/jadwal-rapat-dewan-gubernur-rdg-bank-indonesia-2026-ini-daftar-lengkap-tanggal-resminya"
      },
      {
        "short": "Bank Indonesia",
        "name": "Bank Indonesia, « BI Rate Held at 5.75 percent: Strengthening Stability, Supporting Economic Growth » (octobre 2026)",
        "url": "https://www.bi.go.id/en/iru/highlight-news/Pages/BI-Rate-Held-at-5.75-percent--Strengthening-Stability,-Supporting-Economic-Growth.aspx"
      }
    ]
  },
  {
    "id": "2026-11-14-zone-euro-inflation-octobre-finale",
    "date": "2026-11-18",
    "theme": "eco",
    "region": "Europe",
    "place": "Luxembourg",
    "title": "Zone euro : chiffre définitif de l'inflation d'octobre",
    "why": "Eurostat confirme ou corrige son estimation rapide [1], qui avait donné 4 % sur un an en octobre, un rythme attendu par les économistes [2]. Le détail par pays et par produit (énergie, alimentation, services) pèsera sur la décision de la BCE du 17 décembre.",
    "sources": [
      {
        "short": "Eurostat",
        "name": "Eurostat, calendrier des indicateurs européens",
        "url": "https://ec.europa.eu/eurostat/en/news/euro-indicators"
      },
      {
        "short": "FXStreet",
        "name": "FXStreet, « Eurozone flash HICP grows faster by 4% YoY in October, as expected » (4 novembre 2026)",
        "url": "https://www.fxstreet.com/news/eurozone-flash-hicp-grows-faster-by-4-yoy-in-october-as-expected-202611041002"
      }
    ]
  },
  {
    "id": "2026-11-19-afrique-du-sud-banque-centrale-taux",
    "date": "2026-11-19",
    "theme": "eco",
    "region": "Afrique",
    "place": "Pretoria",
    "title": "Afrique du Sud : la banque centrale fixe son taux directeur",
    "why": "La Banque de réserve sud-africaine annonce le 19 novembre sa dernière décision de taux de l'année [1]. Des économistes de Nedbank s'attendent à une hausse de 0,25 point [2] : emprunter deviendrait plus cher pour les ménages et les entreprises sud-africains.",
    "sources": [
      {
        "short": "Banque centrale d'Afrique du Sud",
        "name": "Banque centrale d'Afrique du Sud (South African Reserve Bank), calendrier du comité de politique monétaire",
        "url": "https://www.resbank.co.za/MonetaryPolicy/Monetary%20Policy%20Committee/Pages/Dates.aspx"
      },
      {
        "short": "BusinessTech",
        "name": "BusinessTech, « Interest rate expectations flip-flop for South Africa » (oct. 2026)",
        "url": "https://businesstech.co.za/news/?p=881553"
      }
    ]
  },
  {
    "id": "2026-11-19-walmart-resultats",
    "date": "2026-11-19",
    "theme": "fin",
    "region": "Amériques",
    "place": "Bentonville, États-Unis",
    "title": "Walmart publie ses résultats du troisième trimestre",
    "why": "Le géant américain de la grande distribution publie ses comptes le jeudi 19 novembre, avant l'ouverture de Wall Street [1]. Il vise un bénéfice ajusté de 0,62 à 0,64 dollar par action et des ventes en hausse de 3 à 3,75 % à taux de change constants [2] : un thermomètre de la consommation américaine avant les fêtes.",
    "sources": [
      {
        "short": "TipRanks",
        "name": "TipRanks, Walmart, calendrier des résultats (19 nov. 2026, avant l'ouverture, confirmé)",
        "url": "https://www.tipranks.com/stocks/gb:0r1w/earnings"
      },
      {
        "short": "MarketBeat",
        "name": "MarketBeat, « Walmart issues Q3 2027 earnings guidance » (20 août 2026)",
        "url": "https://www.marketbeat.com/instant-alerts/walmart-nasdaqwmt-issues-q3-2027-earnings-guidance-2026-08-20/"
      }
    ]
  },
  {
    "id": "2026-11-19-australie-chomage-octobre",
    "date": "2026-11-19",
    "theme": "eco",
    "region": "Asie",
    "place": "Canberra, Australie",
    "title": "Australie : chiffres du chômage d'octobre",
    "why": "Le bureau australien des statistiques publie le chômage d'octobre ; en septembre, il était monté à 4,7 %, son plus haut depuis 2021 [1][2].",
    "sources": [
      {
        "short": "ABS",
        "name": "Australian Bureau of Statistics, « Labour Force, Australia, September 2026 » (prochaine publication le 19/11/2026)",
        "url": "https://www.abs.gov.au/statistics/labour/employment-and-unemployment/labour-force-australia/latest-release"
      },
      {
        "short": "MacroBusiness",
        "name": "MacroBusiness, « Aussie unemployment climbs to 5-year high » (octobre 2026)",
        "url": "https://www.macrobusiness.com.au/2026/10/aussie-unemployment-climbs-to-5-year-high/"
      }
    ]
  },
  {
    "id": "2026-11-19-anthropic-entree-bourse-nasdaq",
    "date": "2026-11-19",
    "theme": "fin",
    "region": "Amériques",
    "place": "New York, États-Unis",
    "title": "Anthropic entre au Nasdaq, prix fixé la veille",
    "why": "La plus grosse introduction en Bourse de l'histoire, jusqu'à 64 milliards de dollars levés entre 70 et 78 dollars par action : un test de l'appétit des investisseurs pour l'IA après la crise chez Nvidia [1][2].",
    "sources": [
      {
        "short": "CNBC",
        "name": "CNBC, « Anthropic sets IPO price range of $70 to $78, looks to start trading Nov. 19, sources say » (10 novembre 2026)",
        "url": "https://www.cnbc.com/2026/11/10/anthropic-sets-price-range-of-70-to-78-in-upcoming-ipo.html"
      },
      {
        "short": "Yahoo Finance",
        "name": "Yahoo Finance, « Anthropic IPO: Claude maker to begin trading on Thursday, Nov. 19 » (novembre 2026)",
        "url": "https://finance.yahoo.com/technology/article/anthropic-ipo-claude-maker-to-begin-trading-on-thursday-nov-19-173550865.html"
      }
    ],
    "news": "2026-11-13-wall-street-cloture-huang-taux-10-ans-5-pourcent"
  },
  {
    "id": "2026-11-14-alibaba-resultats",
    "date": "2026-11-19",
    "theme": "fin",
    "region": "Asie",
    "place": "Hangzhou, Chine",
    "title": "Alibaba publie ses résultats du trimestre juillet-septembre",
    "why": "Le géant chinois du commerce en ligne publie ses comptes avant l'ouverture de Wall Street, après une réunion de son conseil le 18 novembre [1][2]. Les investisseurs y regarderont surtout le coût de ses paris sur l'intelligence artificielle et la livraison rapide, et l'état de la consommation en Chine.",
    "sources": [
      {
        "short": "Panabee",
        "name": "Panabee, « Alibaba Sets November 19 Earnings Date Amid Strategic Pivot »",
        "url": "https://www.panabee.com/news/alibaba-earnings-q3-2026"
      },
      {
        "short": "Trading-Treff",
        "name": "Trading-Treff, « Alibaba-Aktie: Qovest nimmt Profi-Anleger ins Visier »",
        "url": "https://trading-treff.de/wirtschaft/alibaba-aktie-qovest-nimmt-profi-anleger-ins-visier"
      }
    ]
  },
  {
    "id": "2026-11-20-sommet-ue-royaume-uni",
    "date": "2026-11-20",
    "theme": "geo",
    "region": "Europe",
    "place": "Bruxelles",
    "title": "Sommet entre l'Union européenne et le Royaume-Uni",
    "why": "António Costa et Ursula von der Leyen reçoivent le Premier ministre britannique Andy Burnham [1][2]. L'objectif est de conclure en un seul paquet un accord sanitaire et vétérinaire (moins de contrôles aux frontières), le lien entre les marchés du carbone et un programme de mobilité des jeunes.",
    "sources": [
      {
        "short": "Gov.uk",
        "name": "Gouvernement britannique, « Prime Minister to attend UK-EU summit in Brussels on 20 November »",
        "url": "https://www.gov.uk/government/news/prime-minister-to-attend-uk-eu-summit-in-brussels-on-20-november"
      },
      {
        "short": "MLex",
        "name": "MLex, « EU, UK to hold second summit on Nov. 20 in Brussels »",
        "url": "https://www.mlex.com/mlex/articles/2536802"
      }
    ]
  },
  {
    "id": "2026-11-20-japon-inflation-octobre",
    "date": "2026-11-20",
    "theme": "eco",
    "region": "Asie",
    "place": "Tokyo, Japon",
    "title": "Japon : inflation d’octobre",
    "why": "Le chiffre national des prix d’octobre sort à 8 h 30, heure de Tokyo [1] ; en septembre, l’inflation hors produits frais était de 2,1 % [2]. Un chiffre plus fort renforcerait l’idée d’une hausse de taux de la Banque du Japon le 18 décembre, et pourrait soutenir le yen, tombé au-delà de 160 pour un dollar.",
    "sources": [
      {
        "short": "FinanceCalendar",
        "name": "FinanceCalendar, « Japan CPI October 2026 »",
        "url": "https://www.financecalendar.com/event/japan-cpi-october-2026/"
      },
      {
        "short": "Forex Fundamentals",
        "name": "Forex Fundamentals, « Japan Inflation Rate (CPI) », calendrier du 20 novembre 2026",
        "url": "https://forexfundamentals.com/economic-calendar/jp-cpi/2026-11-20"
      }
    ]
  },
  {
    "id": "2026-11-23-israel-banque-centrale-taux",
    "date": "2026-11-23",
    "theme": "eco",
    "region": "Moyen-Orient",
    "place": "Jérusalem, Israël",
    "title": "Israël : la banque centrale décide de son taux",
    "why": "La Banque d'Israël annonce sa décision le 23 novembre, avec un taux aujourd'hui à 3,25 % [1]. L'inflation est tombée à 1,1 % sur un an en octobre, ce qui rend plus probable une baisse d'un quart de point à 3 % [2] : emprunter coûterait un peu moins cher.",
    "sources": [
      {
        "short": "Banque d'Israël",
        "name": "Banque d'Israël (Bank of Israel), page d'accueil, « Next decision date: 23/11/2026 »",
        "url": "https://www.boi.org.il/en/"
      },
      {
        "short": "Calcalist",
        "name": "Calcalist, « Israel's inflation falls to 1.1%, putting pressure on the Bank of Israel to cut rates » (nov. 2026)",
        "url": "https://www.calcalistech.com/ctechnews/article/w7hqdh5of"
      }
    ]
  },
  {
    "id": "2026-11-23-nigeria-banque-centrale-taux",
    "date": "2026-11-23",
    "end": "2026-11-24",
    "theme": "eco",
    "region": "Afrique",
    "place": "Abuja, Nigeria",
    "title": "Nigeria : la banque centrale décide de son taux",
    "why": "Le comité de politique monétaire de la Banque centrale du Nigeria se réunit les 23 et 24 novembre [1], deux mois après avoir baissé son taux de 26,5 % à 23 % [2]. L'inflation a encore reculé à 14,06 % en octobre [3], ce qui laisse de la place pour une nouvelle baisse.",
    "sources": [
      {
        "short": "Banque centrale du Nigeria",
        "name": "Banque centrale du Nigeria (CBN), déclarations personnelles des membres, 307e réunion du MPC (sept. 2026), date de la prochaine réunion",
        "url": "https://www.cbn.gov.ng/Out/2026/CCD/Personal%20Statements%20of%20Members%20for%20the%20307th%20Meeting%20of%20the%20MPC_September%202026.pdf"
      },
      {
        "short": "Daily Trust",
        "name": "Daily Trust, annonce de la réunion du MPC des 23 et 24 novembre 2026",
        "url": "https://dailytrust.com/?p=1974891"
      },
      {
        "short": "Vanguard",
        "name": "Vanguard, « Nigeria's inflation rate drops to 14.06% in October » (nov. 2026)",
        "url": "https://www.vanguardngr.com/2026/11/nigerias-inflation-rate-drops-to-14-06-in-october/"
      }
    ]
  },
  {
    "id": "2026-11-24-portugal-budget-2027-vote-final",
    "date": "2026-11-24",
    "theme": "eco",
    "region": "Europe",
    "place": "Lisbonne",
    "title": "Portugal : vote final du budget 2027",
    "why": "Le Parlement portugais vote le budget 2027 dans son ensemble le 24 novembre, au terme de l'examen article par article [1][2]. En première lecture, le 28 octobre, le texte est passé grâce aux voix du PSD et du CDS-PP et à l'abstention du Parti socialiste [1].",
    "news": "2026-11-08-portugal-budget-2027-vote-final-24-novembre-abstention-ps",
    "sources": [
      {
        "short": "ComparaJá",
        "name": "ComparaJá, « Parlamento aprova Orçamento do Estado 2027 na generalidade » (oct. 2026)",
        "url": "https://www.comparaja.pt/financas-pessoais/noticias/parlamento-aprova-orcamento-estado-2027-votacao-final-outubro-2026"
      },
      {
        "short": "Economia & Finanças",
        "name": "Economia & Finanças, « Proposta de Orçamento do Estado para 2027 e cenário macroeconómico » (calendrier de l'examen)",
        "url": "https://economiafinancas.com/2026/proposta-de-orcamento-do-estado-para-2027-e-cenario-macroeconomico/"
      }
    ]
  },
  {
    "id": "2026-11-25-sommet-ue-balkans-occidentaux",
    "date": "2026-11-25",
    "theme": "geo",
    "region": "Europe",
    "place": "Bruxelles, Belgique",
    "title": "Sommet entre l'UE et les six pays des Balkans occidentaux",
    "why": "Les dirigeants de l'UE et des Balkans occidentaux se retrouvent à Bruxelles pour parler d'adhésion, du plan de croissance pour la région et de sécurité, après le sommet de Tivat en juin [1][2]. L'UE y teste la crédibilité de ses promesses d'élargissement, au moment où la Serbie s'éloigne de Bruxelles [2].",
    "sources": [
      {
        "short": "New Union Post",
        "name": "New Union Post, « EU-Western Balkans summit 2026 in Brussels » (23 octobre 2026)",
        "url": "https://newunionpost.eu/2026/10/23/eu-western-balkans-summit-2026-brussels/"
      },
      {
        "short": "Brussels Times",
        "name": "The Brussels Times, « Western Balkans summit to test EU's resolve as membership pledges face scrutiny »",
        "url": "https://www.brusselstimes.com/2374955/western-balkans-summit-to-test-eus-resolve-as-membership-pledges-face-scrutiny"
      }
    ]
  },
  {
    "id": "2026-11-25-etats-unis-pib-pce",
    "date": "2026-11-25",
    "theme": "eco",
    "region": "Amériques",
    "place": "Washington, États-Unis",
    "title": "États-Unis : PIB du 3e trimestre et inflation PCE d'octobre",
    "why": "Le même jour, le Bureau d'analyse économique publie la deuxième estimation de la croissance de juillet-septembre et les revenus et dépenses des ménages d'octobre, dont l'indice de prix PCE suivi par la Fed [1][2]. Ces chiffres arrivent deux semaines avant la réunion de la Fed du 8 décembre.",
    "sources": [
      {
        "short": "BEA",
        "name": "Bureau of Economic Analysis, calendrier des publications (Personal Income and Outlays, October 2026 ; GDP Second Estimate, 3rd Quarter 2026)",
        "url": "https://www.bea.gov/news/schedule/"
      },
      {
        "short": "Finance Calendar",
        "name": "Finance Calendar, « US Gross Domestic Product November 2026 »",
        "url": "https://www.financecalendar.com/?p=1310"
      }
    ]
  },
  {
    "id": "2026-11-26-conseil-europeen-budget-2028-2034",
    "date": "2026-11-26",
    "end": "2026-11-27",
    "theme": "mix",
    "region": "Europe",
    "place": "Bruxelles, Belgique",
    "title": "Sommet européen extraordinaire sur le budget de l'UE 2028-2034",
    "why": "António Costa, président du Conseil européen, prévoit un sommet extraordinaire les 26 et 27 novembre pour viser un accord politique d'ici fin 2026 sur le prochain budget pluriannuel, que la Commission propose à près de 2 000 milliards d'euros [1][2]. En jeu : l'argent de l'agriculture, de la défense, de la compétitivité et l'aide à l'Ukraine [2].",
    "sources": [
      {
        "short": "Eunews",
        "name": "Eunews, « 2028-2034 budget: plans for an extraordinary summit of leaders on 26 and 27 November » (13 octobre 2026)",
        "url": "https://www.eunews.it/en/2026/10/13/2028-2034-budget-plans-for-an-extraordinary-summit-of-leaders-on-26-and-27-november/"
      },
      {
        "short": "Agence Europe",
        "name": "Agence Europe, « António Costa plans extraordinary European summit in late November to reach agreement on EU's 2028-2034 budget by end of 2026 »",
        "url": "https://agenceurope.eu/en/bulletin/article/13798/21/antonio-costa-plans-extraordinary-european-summit-in-late-november-to-reach-agreement-on-eus-2028-2034-budget-by-end-of-2026"
      }
    ]
  },
  {
    "id": "2026-11-26-coree-du-sud-banque-centrale-taux",
    "date": "2026-11-26",
    "theme": "eco",
    "region": "Asie",
    "place": "Séoul, Corée du Sud",
    "title": "Corée du Sud : dernière décision de taux de l'année de la Banque de Corée",
    "why": "La Banque de Corée a laissé son taux à 3 % le 22 octobre en gardant la porte ouverte à une hausse ; Citibank et Morgan Stanley s'attendent à un quart de point de plus en novembre [1][2]. Une hausse renchérirait le crédit dans un pays très endetté et soutiendrait le won.",
    "sources": [
      {
        "short": "Korea Times",
        "name": "The Korea Times, « BOK keeps rate steady at 3%, but further hikes remain on table » (22 octobre 2026)",
        "url": "https://www.koreatimes.co.kr/economy/20261022/bok-keeps-rate-steady-at-3-but-further-hikes-remain-on-table"
      },
      {
        "short": "Kyunghyang Shinmun",
        "name": "Kyunghyang Shinmun (édition anglaise), sur la décision du 22 octobre 2026 de la Banque de Corée",
        "url": "https://www.khan.co.kr/en/article/202610221648047"
      }
    ]
  },
  {
    "id": "2026-11-28-palestine-legislatives",
    "date": "2026-11-28",
    "theme": "geo",
    "region": "Moyen-Orient",
    "place": "Territoires palestiniens",
    "title": "Élections législatives palestiniennes",
    "why": "Le président Mahmoud Abbas a fixé par décret les législatives au 28 novembre ; la présidentielle sera fixée plus tard, probablement au premier trimestre 2027 [1][2]. Ce serait le premier scrutin de ce type depuis 2006, un test pour l'avenir politique de Gaza et de la Cisjordanie.",
    "sources": [
      {
        "short": "Report.az",
        "name": "Report.az, « Abbas schedules Palestinian parliamentary elections for November 28 »",
        "url": "https://report.az/en/other-countries/abbas-schedules-palestinian-parliamentary-elections-for-november-28"
      },
      {
        "short": "TASS",
        "name": "TASS, « Palestinian President schedules parliamentary elections for November 28, 2026 »",
        "url": "https://tass.com/world/2158187"
      }
    ]
  },
  {
    "id": "2026-11-28-algerie-elections-locales",
    "date": "2026-11-28",
    "theme": "geo",
    "region": "Afrique",
    "place": "Algérie",
    "title": "Algérie : élections communales et de wilayas",
    "why": "Le scrutin renouvelle pour cinq ans les assemblées locales, avec 162 864 candidats recensés par l'autorité électorale, contre 134 140 en 2021 [1][2]. L'opposition dénonce l'écartement de candidats et un boycott exposerait les partis à une dissolution selon la loi de 2026 [1][2].",
    "sources": [
      {
        "short": "Jeune Afrique",
        "name": "Jeune Afrique, « L'opposition algérienne démunie face aux invalidations de candidats aux élections locales de novembre »",
        "url": "https://www.jeuneafrique.com/1854836/politique/lopposition-algerienne-demunie-face-aux-invalidations-de-candidats-aux-elections-locales-de-novembre/"
      },
      {
        "short": "Algérie360",
        "name": "Algérie360, « Élections locales du 28 novembre : pourquoi l'ANIE a écarté des maires sortants »",
        "url": "https://www.algerie360.com/elections-locales-2026-candidats-ecartes-article-184/"
      }
    ]
  },
  {
    "id": "2026-11-28-taiwan-elections-locales",
    "date": "2026-11-28",
    "theme": "geo",
    "region": "Asie",
    "place": "Taipei, Taïwan",
    "title": "Taïwan : élections locales « neuf en un »",
    "why": "Environ 19,65 millions d'électeurs choisissent maires, chefs de comté, conseillers et chefs de village, soit plus de 11 000 postes [1][2]. C'est un test national pour le parti au pouvoir (DPP) face au Kuomintang et au TPP, qui discutent d'une alliance [1] : un recul du DPP pèserait sur la ligne de Taipei face à Pékin.",
    "sources": [
      {
        "short": "Wikipédia",
        "name": "Wikipédia (en), « 2026 Taiwanese local elections »",
        "url": "https://en.wikipedia.org/wiki/2026_Taiwanese_local_elections"
      },
      {
        "short": "Focus Taiwan",
        "name": "Focus Taiwan (CNA), « 2026 ELECTIONS/Taichung mayoral race polls show conflicting results for Ho, Chiang » (3 nov. 2026)",
        "url": "https://focustaiwan.tw/politics/202611030029"
      }
    ]
  },
  {
    "id": "2026-11-28-australie-victoria-elections",
    "date": "2026-11-28",
    "theme": "geo",
    "region": "Asie",
    "place": "Melbourne, Australie",
    "title": "Australie : élections dans l'État de Victoria",
    "why": "Les électeurs du Victoria, deuxième État le plus peuplé d'Australie, renouvellent leur Parlement le 28 novembre ; le vote est obligatoire [1][2]. Le résultat décidera qui gouverne l'État et mène ses choix sur le logement, les impôts locaux et les grands chantiers.",
    "sources": [
      {
        "short": "Parlement du Victoria",
        "name": "Parlement du Victoria (Parliament of Victoria), « Election » : prochaine élection le samedi 28 novembre 2026",
        "url": "https://www.parliament.vic.gov.au/election"
      },
      {
        "short": "Wikipédia",
        "name": "Wikipédia (en), « 2026 Victorian state election »",
        "url": "https://www.wikipedia.org/wiki/2026_Victorian_state_election"
      }
    ]
  },
  {
    "id": "2026-11-29-opep-reunion-semestrielle",
    "date": "2026-11-29",
    "theme": "eco",
    "region": "Moyen-Orient",
    "place": "Vienne",
    "title": "Grande réunion de l'OPEP+ sur la production de 2027",
    "why": "La 42e réunion ministérielle de l'OPEP et de ses alliés est fixée au 29 novembre [1][2] ; c'est elle qui fixe les grandes lignes de la production de l'année suivante, et donne le ton du prix du pétrole pour l'hiver.",
    "sources": [
      {
        "short": "OPEP",
        "name": "OPEP, communiqué de la 41e réunion ministérielle (7 juin 2026)",
        "url": "https://www.opec.org/pr-detail/605-7-june-2026.html"
      },
      {
        "short": "Arab News",
        "name": "Arab News, « OPEC+ agrees to keep November oil output targets steady » (octobre 2026)",
        "url": "https://www.arabnews.com/business/opec-agrees-to-keep-november-oil-output-targets-steady-3004571"
      }
    ]
  },
  {
    "id": "2026-11-29-vietnam-enquete-301",
    "date": "2026-11-29",
    "theme": "geo",
    "region": "Asie",
    "place": "Washington",
    "title": "Washington doit trancher sur l'enquête commerciale visant le Vietnam",
    "why": "Les États-Unis ont jusqu'au 29 novembre pour rendre leur décision sur l'enquête « section 301 » sur la propriété intellectuelle au Vietnam [1][2]. Elle peut déboucher sur des droits de douane contre un pays dont les échanges ont dépassé 1 000 milliards de dollars en dix mois.",
    "sources": [
      {
        "short": "KPMG",
        "name": "KPMG, « USTR initiates Section 301 investigation into Vietnam's IP practices »",
        "url": "https://kpmg.com/us/en/taxnewsflash/news/2026/06/ustr-vietnam-section-301-investigation.html"
      },
      {
        "short": "Federal Register",
        "name": "Federal Register, initiation de l'enquête section 301 sur le Vietnam (3 juin 2026)",
        "url": "https://www.federalregister.gov/documents/2026/06/03/2026-11043/initiation-of-section-301-investigation-and-request-for-public-comments-vietnams-acts-policies-and"
      }
    ]
  },
  {
    "id": "2026-11-29-espagne-legislatives",
    "date": "2026-11-29",
    "theme": "geo",
    "region": "Europe",
    "place": "Espagne",
    "title": "Élections législatives anticipées en Espagne",
    "why": "Pedro Sánchez a convoqué le scrutin après le rejet de deux décrets sur le logement [1][2]. Selon des sondages cités, la droite et l'extrême droite réunies dépasseraient 200 des 350 sièges ; un changement de gouvernement toucherait la politique du logement et du budget.",
    "sources": [
      {
        "short": "Euronews",
        "name": "Euronews, « Pedro Sánchez calls early elections in Spain after defeat of housing decrees » (5 oct. 2026)",
        "url": "https://euronews.com/2026/10/05/pedro-sanchez-calls-early-elections-in-spain-after-defeat-of-housing-decrees"
      },
      {
        "short": "ITV News",
        "name": "ITV News, « Spain's prime minister announces snap election for November » (5 oct. 2026)",
        "url": "https://www.itv.com/news/2026-10-05/spains-prime-minister-announces-snap-election-for-november"
      }
    ]
  },
  {
    "id": "2026-12-01-zone-euro-inflation-novembre",
    "date": "2026-12-01",
    "theme": "eco",
    "region": "Europe",
    "place": "Luxembourg",
    "title": "Zone euro : première estimation de l'inflation de novembre",
    "why": "Eurostat publie le 1er décembre son estimation rapide de la hausse des prix en novembre [1][2]. En octobre, l'inflation avait atteint 4,0 %, son plus haut niveau depuis trois ans [3] : c'est le dernier grand chiffre avant la réunion de la BCE du 17 décembre.",
    "news": "2026-11-05-zone-euro-inflation-4-pour-cent-octobre",
    "sources": [
      {
        "short": "Finance Calendar",
        "name": "Finance Calendar, « Eurozone Flash CPI November 2026 » (1er déc. 2026, 11 h)",
        "url": "https://www.financecalendar.com/?p=2213"
      },
      {
        "short": "Forex Fundamentals",
        "name": "Forex Fundamentals, calendrier : inflation de la zone euro (IPCH), 1er déc. 2026",
        "url": "https://forexfundamentals.com/economic-calendar/eur-cpi/2026-12-01"
      },
      {
        "short": "StockAnalysis",
        "name": "StockAnalysis, « Eurozone inflation rises to 4.0% in October, hitting highest level in 3 years » (nov. 2026)",
        "url": "https://stockanalysis.com/news/eurozone-inflation-rises-october-2026/"
      }
    ]
  },
  {
    "id": "2026-12-04-etats-unis-emploi-novembre",
    "date": "2026-12-04",
    "theme": "eco",
    "region": "Amériques",
    "place": "Washington",
    "title": "États-Unis : les chiffres de l'emploi de novembre",
    "why": "Le Bureau des statistiques du travail publie le vendredi 4 décembre à 8 h 30 (heure de Washington) les créations d'emplois et le taux de chômage de novembre [1]. En octobre, l'économie avait créé 165 000 emplois et le chômage était descendu à 4,1 % [2] ; c'est le dernier rapport avant la réunion de la Fed des 8 et 9 décembre.",
    "news": "2026-11-07-emploi-americain-165000-fed-hausse-decembre",
    "sources": [
      {
        "short": "BLS",
        "name": "Bureau of Labor Statistics, calendrier des publications de décembre 2026",
        "url": "https://www.bls.gov/schedule/2026/12_sched_list.htm"
      },
      {
        "short": "CNBC",
        "name": "CNBC, « U.S. economy added 165,000 jobs in October… unemployment rate slips to 4.1% » (6 nov. 2026)",
        "url": "https://www.cnbc.com/2026/11/06/jobs-report-october-2026.html"
      }
    ]
  },
  {
    "id": "2026-12-04-inde-rbi-taux",
    "date": "2026-12-04",
    "theme": "eco",
    "region": "Asie",
    "place": "Bombay, Inde",
    "title": "Inde : la banque centrale décide de son taux",
    "why": "Le comité de politique monétaire de la Banque centrale indienne (RBI) se réunit du 2 au 4 décembre, selon son calendrier officiel [1]. Avec une inflation remontée à 6,09 % en octobre, au-dessus du plafond de 6 % que vise la RBI, une nouvelle hausse du taux renchérirait le crédit pour 1,4 milliard d’habitants et pourrait soutenir la roupie.",
    "sources": [
      {
        "short": "RBI",
        "name": "Reserve Bank of India, « Meeting Schedule of the Monetary Policy Committee for 2026-2027 » (23 mars 2026)",
        "url": "https://www.rbi.org.in/Scripts/BS_PressReleaseDisplay.aspx?prid=62422"
      },
      {
        "short": "Hello Banker",
        "name": "Hello Banker, « RBI releases schedule of meeting of Monetary Policy Committee 2026-27 »",
        "url": "https://hellobanker.in/rbi-releases-schedule-of-meeting-of-monetary-policy-committee-2026-27"
      }
    ]
  },
  {
    "id": "2026-12-05-gambie-presidentielle",
    "date": "2026-12-05",
    "theme": "geo",
    "region": "Afrique",
    "place": "Banjul",
    "title": "Présidentielle en Gambie",
    "why": "Les Gambiens élisent leur président le samedi 5 décembre, date fixée par la commission électorale indépendante [1][2]. Le président sortant Adama Barrow brigue un troisième mandat, alors qu'il s'était d'abord engagé à n'en faire qu'un [3].",
    "news": "2026-11-09-gambie-presidentielle-bensouda-candidature",
    "sources": [
      {
        "short": "Africa Center",
        "name": "Africa Center for Strategic Studies, « Gambia – Presidential Elections: December 5 »",
        "url": "https://africacenter.org/spotlight/en-elections-2026/gambia/"
      },
      {
        "short": "Trust Radio",
        "name": "Trust Radio, « Gambia sets December 2026 presidential election date »",
        "url": "https://trustradio.com.ng/en/gambia-sets-december-2026-presidential-election-date"
      },
      {
        "short": "The Frontier",
        "name": "The Frontier, « Gambia sets date for presidential election, incumbent seeks third term despite criticism »",
        "url": "https://thefrontierng.com/gambia-sets-date-for-presidential-election-incumbent-seeks-third-term-despite-criticism/"
      }
    ]
  },
  {
    "id": "2026-12-06-israel-delai-eisenkot-coalition",
    "date": "2026-12-06",
    "theme": "geo",
    "region": "Moyen-Orient",
    "place": "Jérusalem, Israël",
    "title": "Israël : fin du délai initial de 28 jours donné à Gadi Eisenkot pour former un gouvernement",
    "why": "Chargé le 8 novembre de former une coalition, Eisenkot dispose de 28 jours, prolongeables de 14 : sans majorité, Israël resterait sans nouveau gouvernement en pleine guerre avec l'Iran [1].",
    "sources": [
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « Eisenkot open to Netanyahu joining Israel's next government » (8 novembre 2026)",
        "url": "https://www.aljazeera.com/news/2026/11/8/israels-president-tasks-eisenkot-to-form-new-coalition-government"
      }
    ],
    "news": "2026-11-13-gaza-frappe-hopital-nasser-bebe-froid"
  },
  {
    "id": "2026-11-14-guinee-bissau-elections",
    "date": "2026-12-06",
    "theme": "geo",
    "region": "Afrique",
    "place": "Bissau, Guinée-Bissau",
    "title": "Guinée-Bissau : présidentielle et législatives après le coup d'État",
    "why": "La junte au pouvoir depuis le coup d'État de novembre 2025, qui avait renversé le président Umaro Sissoco Embaló, a fixé par décret les deux scrutins au 6 décembre [1][2]. C'est le test du retour à l'ordre constitutionnel réclamé par la Cédéao.",
    "sources": [
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « Guinea-Bissau sets election date following last year's coup » (22 janvier 2026)",
        "url": "https://www.aljazeera.com/news/2026/1/22/guinea-bissau-sets-election-date-following-last-years-coup"
      },
      {
        "short": "APA",
        "name": "APA News, « Guinée-Bissau : élections fixées au 6 décembre 2026 »",
        "url": "https://fr.apanews.net/news/guinee-bissau-elections-fixees-au-6-decembre-2026/"
      }
    ]
  },
  {
    "id": "2026-12-08-fed-reunion-decembre",
    "date": "2026-12-08",
    "end": "2026-12-09",
    "theme": "fin",
    "region": "Amériques",
    "place": "Washington, États-Unis",
    "title": "Réunion de la Fed : hausse de taux envisagée",
    "why": "Les marchés donnent plus de 80 % de chances à une hausse de 0,25 point [1][2]. Cela renchérirait le dollar et le crédit dans le monde.",
    "news": "2026-11-04-etats-unis-emploi-jolts-fed-hausse",
    "sources": [
      {
        "short": "CNBC",
        "name": "CNBC, « Fed interest rate decision October 2026 »",
        "url": "https://www.cnbc.com/2026/10/28/fed-interest-rate-decision-october-2026.html"
      },
      {
        "short": "QUE.com",
        "name": "QUE.com, « Job Openings Jump to 7.5 Million… »",
        "url": "https://que.com/job-openings-jump-to-7-5-million-and-quits-hit-an-18-month-high-raising-the-odds-of-a-december-fed-rate-hike/"
      }
    ]
  },
  {
    "id": "2026-12-08-bresil-copom-decembre",
    "date": "2026-12-08",
    "end": "2026-12-09",
    "theme": "eco",
    "region": "Amériques",
    "place": "Brasília",
    "title": "Brésil : réunion de la banque centrale sur la Selic",
    "why": "Après avoir arrêté ses baisses à 13,75 % le 5 novembre, le Copom se réunit les 8 et 9 décembre, en même temps que la Fed : sa décision dira si le Brésil reste prudent face à un dollar à son plus haut de l'année [1].",
    "news": "2026-11-07-bresil-selic-maintenue-13-75-reelection-lula",
    "sources": [
      {
        "short": "Bloomberg Línea",
        "name": "Bloomberg Línea Brasil, « Banco Central interrompe cortes e mantém Selic em 13,75% após reeleição de Lula »",
        "url": "https://www.bloomberglinea.com.br/brasil/banco-central-interrompe-cortes-e-mantem-selic-em-1375-apos-reeleicao-de-lula/"
      }
    ]
  },
  {
    "id": "2026-11-14-australie-rba-decembre",
    "date": "2026-12-08",
    "theme": "eco",
    "region": "Asie",
    "place": "Sydney, Australie",
    "title": "Australie : dernière décision de taux de l'année",
    "why": "La banque centrale australienne a relevé son taux à 4,85 % le 3 novembre, son plus haut depuis 2008, par six voix contre trois, en citant la guerre au Moyen-Orient et le pétrole cher [1]. Sa réunion des 7 et 8 décembre dira si elle s'arrête là ou continue de serrer le crédit des ménages [1][2].",
    "sources": [
      {
        "short": "SBS News",
        "name": "SBS News, « RBA November 2026 interest rates decision live »",
        "url": "https://www.sbs.com.au/news/live-blog/rba-november-2026-interest-rates-decision-live/f6csn2n1w"
      },
      {
        "short": "RBA",
        "name": "Reserve Bank of Australia, « 2026 Monetary Policy Board Meeting Dates »",
        "url": "https://www.rba.gov.au/media-releases/2025/mr-25-02.html"
      }
    ]
  },
  {
    "id": "2026-11-14-banque-du-canada-decembre",
    "date": "2026-12-09",
    "theme": "eco",
    "region": "Amériques",
    "place": "Ottawa, Canada",
    "title": "Canada : la banque centrale décide de son taux",
    "why": "La Banque du Canada a relevé son taux de 2,25 % à 2,5 % le 28 octobre, sa première hausse depuis juillet 2023 ; elle annonce sa dernière décision de l'année le 9 décembre [1][2]. Une deuxième hausse renchérirait les prêts immobiliers et soutiendrait le dollar canadien.",
    "sources": [
      {
        "short": "Banque du Canada",
        "name": "Banque du Canada, « Bank of Canada raises the policy rate by 25 basis points to 2½% » (28 octobre 2026)",
        "url": "https://www.bankofcanada.ca/2026/10/fad-press-release-2026-10-28"
      },
      {
        "short": "Advisor.ca",
        "name": "Advisor.ca, « Bank of Canada delivers 1st hike in three years »",
        "url": "https://www.advisor.ca/economy/policy/bank-of-canada-delivers-1st-hike-in-three-years/"
      }
    ]
  },
  {
    "id": "2026-12-09-broadcom-resultats",
    "date": "2026-12-09",
    "theme": "fin",
    "region": "Amériques",
    "place": "Palo Alto, États-Unis",
    "title": "Broadcom publie ses résultats annuels",
    "why": "Broadcom, deuxième fabricant de puces pour l’intelligence artificielle derrière Nvidia, publie ses résultats du quatrième trimestre et de l’exercice 2026 après la clôture de Wall Street, a annoncé le groupe [1]. Après le départ de Jensen Huang de Nvidia, ses commandes de puces sur mesure pour Google ou Meta diront si la demande liée à l’IA tient.",
    "sources": [
      {
        "short": "Broadcom",
        "name": "Broadcom, « Broadcom Inc. to Announce Fourth Quarter and Fiscal Year 2026 Financial Results on Wednesday, December 9, 2026 » (9 novembre 2026)",
        "url": "https://investors.broadcom.com/news-releases/news-release-details/broadcom-inc-announce-fourth-quarter-and-fiscal-year-2026"
      },
      {
        "short": "Finviz",
        "name": "Finviz, « Broadcom Inc. to Announce Fourth Quarter and Fiscal Year 2026 Financial Results on Wednesday, December 9, 2026 »",
        "url": "https://finviz.com/news/418980/broadcom-inc-to-announce-fourth-quarter-and-fiscal-year-2026-financial-results-on-wednesday-december-9-2026"
      }
    ]
  },
  {
    "id": "2026-12-09-kenya-banque-centrale-taux",
    "date": "2026-12-09",
    "theme": "eco",
    "region": "Afrique",
    "place": "Nairobi, Kenya",
    "title": "Kenya : la banque centrale décide de son taux",
    "why": "La Banque centrale du Kenya réunit son comité de politique monétaire le 9 décembre [1], après avoir laissé son taux à 8,75 % le 7 octobre [2]. Sa décision pèse sur le coût du crédit pour les ménages et les entreprises kényans.",
    "sources": [
      {
        "short": "Banque centrale du Kenya",
        "name": "Banque centrale du Kenya (Central Bank of Kenya), « Next MPC Meeting » (9 nov. 2026)",
        "url": "https://www.centralbank.go.ke/2026/11/09/next-mpc-meeting-6/"
      },
      {
        "short": "Banque centrale du Kenya",
        "name": "Banque centrale du Kenya, communiqué du comité de politique monétaire du 7 octobre 2026",
        "url": "https://www.centralbank.go.ke/uploads/mpc_press_release/224745454_MPC%20Press%20Release%20-%20Meeting%20of%20October%207%202026.pdf"
      }
    ]
  },
  {
    "id": "2026-12-10-turquie-banque-centrale-taux",
    "date": "2026-12-10",
    "theme": "eco",
    "region": "Europe",
    "place": "Ankara, Turquie",
    "title": "Turquie : dernière réunion de l'année de la banque centrale",
    "why": "La banque centrale turque a baissé son taux directeur d'un point, de 37 % à 36 %, le 22 octobre ; le 10 décembre est sa dernière réunion de 2026 [1][2]. Une nouvelle baisse dirait si la lutte contre l'inflation est jugée assez avancée, avec un effet direct sur la livre turque.",
    "sources": [
      {
        "short": "Hürriyet Daily News",
        "name": "Hürriyet Daily News, « Central Bank to release final Inflation report on Nov 12 »",
        "url": "https://www.hurriyetdailynews.com/amp/central-bank-to-release-final-inflation-report-on-nov-12-229093"
      },
      {
        "short": "Banque centrale de Turquie",
        "name": "Banque centrale de la République de Turquie, communiqués de presse 2026",
        "url": "https://www.tcmb.gov.tr/wps/wcm/connect/en/tcmb+en/main+menu/announcements/press+releases/2026"
      }
    ]
  },
  {
    "id": "2026-12-10-etats-unis-inflation-novembre",
    "date": "2026-12-10",
    "theme": "eco",
    "region": "Amériques",
    "place": "Washington, États-Unis",
    "title": "États-Unis : l'inflation de novembre, juste après la réunion de la Fed",
    "why": "Le Bureau des statistiques du travail publie l'indice des prix de novembre le jeudi 10 décembre à 8 h 30, heure de New York, au lendemain de la réunion de la Fed [1][2]. Un chiffre élevé renforcerait l'idée de nouvelles hausses de taux, avec des effets sur le dollar, les taux d'emprunt et la Bourse.",
    "sources": [
      {
        "short": "BLS",
        "name": "Bureau of Labor Statistics (bls.gov), « Schedule of Releases for the Consumer Price Index »",
        "url": "https://www.bls.gov/schedule/news_release/cpi.htm"
      },
      {
        "short": "BLS",
        "name": "Bureau of Labor Statistics (bls.gov), « Release calendar, December 2026 »",
        "url": "https://www.bls.gov/schedule/2026/12_sched_list.htm"
      }
    ]
  },
  {
    "id": "2026-12-10-suisse-bns-taux",
    "date": "2026-12-10",
    "theme": "eco",
    "region": "Europe",
    "place": "Zurich, Suisse",
    "title": "Suisse : dernière décision de taux de l’année de la BNS",
    "why": "La Banque nationale suisse rend son évaluation de politique monétaire le 10 décembre, selon son calendrier [1]. Son taux est à zéro et le franc suisse, valeur refuge, attire les capitaux quand le monde s’inquiète : un franc trop fort pénalise les exportateurs suisses (montres, machines, médicaments).",
    "sources": [
      {
        "short": "BNS",
        "name": "Banque nationale suisse, « Time schedule and past appearances by Governing Board members »",
        "url": "https://www.snb.ch/en/ifor/media/id/media_events"
      },
      {
        "short": "FinanceCalendar",
        "name": "FinanceCalendar, « SNB Rate Decision December 2026 »",
        "url": "https://www.financecalendar.com/event/snb-rate-decision-december-2026/"
      }
    ]
  },
  {
    "id": "2026-12-11-etats-unis-financement-federal",
    "date": "2026-12-11",
    "theme": "eco",
    "region": "Amériques",
    "place": "Washington",
    "title": "États-Unis : fin du financement provisoire de l'État fédéral",
    "why": "La loi de financement provisoire signée le 2 septembre garde les administrations ouvertes jusqu'au 11 décembre [1][2]. Sans nouveau vote du Congrès, l'État fédéral retombe en paralysie (« shutdown »), comme lors du blocage de 43 jours de l'an dernier ; la bataille est repoussée après les élections de mi-mandat.",
    "sources": [
      {
        "short": "NASFAA",
        "name": "NASFAA, « Trump Signs Short-Term Spending Bill for FY 2027 »",
        "url": "https://www.nasfaa.org/news-item/39750/Trump_Signs_Short-Term_Spending_Bill_for_FY_2027"
      },
      {
        "short": "Political.org",
        "name": "Political.org, « Trump signs Continuing Appropriations and Extensions Act 2027, averting shutdown through December 11 »",
        "url": "https://political.org/2026/09/02/trump-signs-continuing-appropriations-and-extensions-act-2027-averting-shutdown-through-december-11/"
      }
    ]
  },
  {
    "id": "2026-12-14-g20-miami",
    "date": "2026-12-14",
    "end": "2026-12-15",
    "theme": "geo",
    "region": "Amériques",
    "place": "Miami, États-Unis",
    "title": "Sommet du G20 à Miami",
    "why": "Les vingt plus grandes économies se retrouvent au golf de Doral, propriété du président américain [1][2]. Commerce, dettes des pays pauvres et guerre en Ukraine devraient dominer.",
    "sources": [
      {
        "short": "Wikipédia",
        "name": "Wikipédia (anglais), « 2026 G20 Miami summit »",
        "url": "https://en.wikipedia.org/wiki/2026_G20_Miami_summit"
      },
      {
        "short": "G20 Research Group",
        "name": "G20 Research Group, université de Toronto",
        "url": "https://g20.utoronto.ca/summits/2026miami.html"
      }
    ]
  },
  {
    "id": "2026-12-15-chili-banque-centrale-taux",
    "date": "2026-12-15",
    "theme": "eco",
    "region": "Amériques",
    "place": "Santiago, Chili",
    "title": "Chili : dernière réunion de l’année de la banque centrale",
    "why": "La Banque centrale du Chili a fixé au mardi 15 décembre sa prochaine réunion de politique monétaire, avec un communiqué à partir de 18 heures [1]. Le premier producteur mondial de cuivre voit le prix du métal reculer depuis cinq semaines : une décision qui pèse sur le peso chilien et le crédit.",
    "sources": [
      {
        "short": "Banque centrale du Chili",
        "name": "Banco Central de Chile, « Comunicado RPM octubre 2026 »",
        "url": "https://www.bcentral.cl/documents/33528/8728153/Comunicado+RPM+octubre+2026.pdf/c04e2f7b-1a4e-4dc5-881c-84c8e4610d17?t=1793133291280"
      }
    ]
  },
  {
    "id": "2026-12-15-hongrie-banque-centrale-taux",
    "date": "2026-12-15",
    "theme": "eco",
    "region": "Europe",
    "place": "Budapest, Hongrie",
    "title": "Hongrie : dernière décision de taux de l'année de la banque centrale",
    "why": "Le conseil monétaire de la Banque nationale de Hongrie tient sa dernière réunion de taux de l'année le 15 décembre [1]. Il avait baissé son taux de 0,25 point à 5,50 % en août [2] : une nouvelle baisse rendrait le crédit moins cher mais pourrait affaiblir le forint.",
    "sources": [
      {
        "short": "MNB",
        "name": "Banque nationale de Hongrie (MNB), calendrier des réunions du conseil monétaire",
        "url": "https://mnb.hu/en/monetary-policy/the-monetary-council"
      },
      {
        "short": "MNB",
        "name": "Banque nationale de Hongrie, communiqué sur la réunion du conseil monétaire du 25 août 2026",
        "url": "https://mnb.hu/en/monetary-policy/the-monetary-council/press-releases/2026/press-release-on-the-monetary-council-meeting-of-25-august-2026"
      }
    ]
  },
  {
    "id": "2026-12-16-colombie-fin-session-loi-sauvetage",
    "date": "2026-12-16",
    "theme": "eco",
    "region": "Amériques",
    "place": "Bogotá",
    "title": "Colombie : fin de la session du Congrès, date limite pour la loi de sauvetage budgétaire",
    "why": "Les sessions ordinaires du Congrès colombien s'achèvent le 16 décembre, et le gouvernement veut que la loi de sauvetage économique soit votée avant la fin de l'année [1][2]. Sans vote, le vice-président Restrepo avertit que le pays pourrait entrer en défaut en 2027.",
    "news": "2026-11-04-colombie-defaut-2027-loi-sauvetage",
    "sources": [
      {
        "short": "Rio Times",
        "name": "The Rio Times, « Colombia rescue law faces Congress »",
        "url": "https://www.riotimesonline.com/colombia-rescue-law-faces-congress-2026/"
      },
      {
        "short": "Semana",
        "name": "Semana, « Sin reforma, Colombia entrará en default en 2027 »",
        "url": "https://www.semana.com/economia/macroeconomia/articulo/sin-reforma-colombia-entrara-en-default-en-2027-la-advertencia-del-vicepresidente-y-del-ministro-de-hacienda/202641/"
      }
    ]
  },
  {
    "id": "2026-12-17-bce-taux",
    "date": "2026-12-17",
    "theme": "fin",
    "region": "Europe",
    "place": "Francfort",
    "title": "La BCE fixe son taux pour la zone euro",
    "why": "Dernière décision de l'année de la Banque centrale européenne, avec ses nouvelles prévisions de croissance et d'inflation [1][2]. Elle fixe le coût des crédits immobiliers et la rémunération de l'épargne dans les pays de l'euro.",
    "sources": [
      {
        "short": "Finance Calendar",
        "name": "Finance Calendar, « ECB Rate Decision December 2026 »",
        "url": "https://www.financecalendar.com/event/ecb-rate-decision-december-2026/"
      },
      {
        "short": "Eco3min",
        "name": "Eco3min, « ECB Meeting Calendar »",
        "url": "https://eco3min.fr/en/ecb-meeting-calendar/"
      }
    ]
  },
  {
    "id": "2026-12-17-banque-angleterre-taux",
    "date": "2026-12-17",
    "theme": "eco",
    "region": "Europe",
    "place": "Londres, Royaume-Uni",
    "title": "Royaume-Uni : dernière décision de taux de l'année de la Banque d'Angleterre",
    "why": "La Banque d'Angleterre annonce sa décision le jeudi 17 décembre à midi, heure de Londres, le même jour que la BCE [1][2]. Avec l'énergie chère depuis la guerre du Golfe, elle doit choisir entre freiner l'inflation et soutenir une économie fragile : sa décision fait bouger la livre et le coût des crédits immobiliers britanniques.",
    "sources": [
      {
        "short": "Banque d'Angleterre",
        "name": "Bank of England (banque centrale), « Monetary Policy Committee dates for 2026 »",
        "url": "https://www.bankofengland.co.uk/news/2025/september/monetary-policy-committee-dates-for-2026"
      },
      {
        "short": "MoneyWeek",
        "name": "MoneyWeek, « When is the next Bank of England base rate meeting? »",
        "url": "https://moneyweek.com/economy/when-is-the-next-bank-of-england-interest-rate-mpc-meeting"
      }
    ]
  },
  {
    "id": "2026-12-17-philippines-banque-centrale-taux",
    "date": "2026-12-17",
    "theme": "eco",
    "region": "Asie",
    "place": "Manille, Philippines",
    "title": "Philippines : dernière décision de taux de l'année de la banque centrale",
    "why": "Le conseil monétaire de la Bangko Sentral ng Pilipinas tient sa dernière réunion régulière de l'année le 17 décembre [1][2]. Elle avait relevé ses taux en juin [3] : sa décision compte pour le peso et le coût du crédit aux Philippines.",
    "sources": [
      {
        "short": "BusinessWorld",
        "name": "BusinessWorld, calendrier des réunions de la BSP en 2026 (23 avril, 18 juin, 27 août, 22 oct., 17 déc.)",
        "url": "https://www.bworldonline.com/?p=739010"
      },
      {
        "short": "UOB",
        "name": "UOB, note de recherche sur la BSP (23 oct. 2026), prochaine réunion le 17 décembre 2026",
        "url": "https://uob.com.sg/assets/web-resources/research/pdf/MN_261023.pdf"
      },
      {
        "short": "FocusEconomics",
        "name": "FocusEconomics, « Philippines central bank meeting 18-06-2026: BSP raises rates in June »",
        "url": "https://www.focus-economics.com/countries/philippines/news/monetary-policy/philippines-central-bank-meeting-18-06-2026-bsp-raises-rates-in-june/"
      }
    ]
  },
  {
    "id": "2026-12-18-banque-du-japon-taux",
    "date": "2026-12-18",
    "theme": "eco",
    "region": "Asie",
    "place": "Tokyo, Japon",
    "title": "Japon : dernière décision de taux de l'année de la Banque du Japon",
    "why": "La dernière réunion de l'année se tient les 17 et 18 décembre, avec la décision le vendredi 18 [1][2]. Le taux directeur est à 1,25 % [3] : une hausse soutiendrait le yen, très faible face au dollar, et ferait monter les taux d'emprunt au Japon, dont les investisseurs placent beaucoup d'argent à l'étranger.",
    "sources": [
      {
        "short": "Banque du Japon",
        "name": "Bank of Japan (banque centrale), « Monetary Policy Meetings »",
        "url": "https://www.boj.or.jp/en/mopo/mpmsche_minu/"
      },
      {
        "short": "Finance Calendar",
        "name": "Finance Calendar, « Bank of Japan Rate Decision December 2026 »",
        "url": "https://www.financecalendar.com/?p=1260"
      },
      {
        "short": "Universal Asset Owners",
        "name": "Universal Asset Owners, « Bank of Japan holds 1.25%: GPIF, insurers, yen carry »",
        "url": "https://www.universalassetowners.com/newsroom/bank-of-japan-holds-1-25-gpif-insurers-yen-carry/"
      }
    ]
  },
  {
    "id": "2026-12-31-mongolie-ganqimaodu-travaux",
    "date": "2026-12-31",
    "theme": "eco",
    "region": "Asie",
    "place": "Ganqimaodu, frontière Chine-Mongolie",
    "title": "Fin possible des travaux au poste frontière de Ganqimaodu",
    "why": "Selon l'ambassade de Chine citée par l'AP, les travaux de modernisation qui ralentissent les camions pourraient durer jusqu'à fin décembre. Tant qu'ils durent, les exportations de cuivre d'Oyu Tolgoi vers la Chine restent freinées, avec des pertes pouvant atteindre 1,2 milliard de dollars d'ici la fin de l'année [1][2].",
    "news": "2026-11-04-mongolie-oyu-tolgoi-seisme-frontiere",
    "sources": [
      {
        "short": "AP (ABC News)",
        "name": "AP via ABC News, « Mongolian mining company says copper exports have dropped due to China border restrictions »",
        "url": "https://abcnews.com/Technology/wireStory/mongolian-mining-company-copper-exports-dropped-due-china-137666814"
      },
      {
        "short": "Fortune",
        "name": "Fortune, 29 octobre 2026",
        "url": "https://fortune.com/2026/10/29/mongolia-300-million-copper-exports-china-border-1-2-billion/"
      }
    ]
  }
];
