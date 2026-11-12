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
    "id": "2026-11-12-allemagne-budget-2027-commission",
    "date": "2026-11-12",
    "theme": "eco",
    "region": "Europe",
    "place": "Berlin",
    "title": "Budget fédéral allemand 2027 : dernière séance de la commission du budget",
    "why": "La commission du budget du Bundestag tient le 12 novembre sa séance finale de mise au point (Bereinigungssitzung), qui règle les derniers postes de dépenses [1][2] ; le vote final en séance plénière est attendu en novembre. Il dira combien l'Allemagne dépense pour la défense et les infrastructures l'an prochain.",
    "sources": [
      {
        "short": "Bundestag",
        "name": "Bundestag, « Haushalt 2027 : Ablauf der Beratungen »",
        "url": "https://www.bundestag.de/dokumente/textarchiv/2026/kw34-haushalt-2027-ablauf-1187766"
      },
      {
        "short": "Bundestag (hib)",
        "name": "Bundestag, hib 839/2026, commission du budget (16 octobre 2026)",
        "url": "https://www.bundestag.de/1225360"
      }
    ]
  },
  {
    "id": "2026-11-12-argentine-inflation-octobre",
    "date": "2026-11-12",
    "theme": "eco",
    "region": "Amériques",
    "place": "Buenos Aires",
    "title": "Argentine : l'inflation d'octobre",
    "why": "L'institut INDEC publie le 12 novembre l'inflation d'octobre ; en septembre, elle était de 33,4 % sur un an selon Trading Economics, et la prévision de consensus pour octobre tourne autour de 33,2 % [1]. Le chiffre dira si la politique du peso fort de Javier Milei continue de ralentir les prix, au prix d'une croissance freinée [2].",
    "sources": [
      {
        "short": "Trading Economics",
        "name": "Trading Economics, « Argentina Inflation Rate » (calendrier : publication du 12 novembre)",
        "url": "https://tradingeconomics.com/argentina/inflation-cpi"
      },
      {
        "short": "Bloomberg",
        "name": "Bloomberg, « ARS/USD: Milei's Strong Peso Holds Back Argentina's Economic Growth » (17 septembre 2026)",
        "url": "https://www.bloomberg.com/news/articles/2026-09-17/ars-usd-milei-s-strong-peso-holds-back-argentina-s-economic-growth"
      }
    ]
  },
  {
    "id": "2026-11-12-cisco-resultats",
    "date": "2026-11-12",
    "theme": "fin",
    "region": "Amériques",
    "place": "San José, États-Unis",
    "title": "Cisco publie ses résultats du premier trimestre",
    "why": "Le géant des équipements réseau présente le trimestre clos le 24 octobre, après la clôture de Wall Street, avec une conférence à 22 h 30 heure de Paris ; il a prévu un chiffre d'affaires de 18,0 à 18,2 milliards de dollars [1][2]. Ses commentaires sur la demande liée à l'intelligence artificielle peuvent faire bouger tout le secteur technologique, déjà secoué par le krach de début novembre.",
    "sources": [
      {
        "short": "Cisco",
        "name": "Cisco, « Cisco Schedules Conference Call for Q1 Fiscal Year 2027 Financial Results » (communiqué du 3 novembre 2026)",
        "url": "https://investor.cisco.com/news/news-details/2026/Cisco-Schedules-Conference-Call-for-Q1-Fiscal-Year-2027-Financial-Results/default.aspx"
      },
      {
        "short": "Cisco",
        "name": "Cisco, « Cisco Reports Fourth Quarter and Fiscal Year 2026 Earnings » (12 août 2026, prévisions du premier trimestre)",
        "url": "https://investor.cisco.com/news/news-details/2026/CISCO-REPORTS-FOURTH-QUARTER-AND-FISCAL-YEAR-2026-EARNINGS/default.aspx"
      }
    ]
  },
  {
    "id": "2026-11-13-zone-euro-pib-emploi-t3",
    "date": "2026-11-13",
    "theme": "eco",
    "region": "Europe",
    "place": "Luxembourg",
    "title": "Zone euro : croissance et emploi du troisième trimestre, estimation détaillée",
    "why": "Eurostat complète son estimation préliminaire du 30 octobre avec l'emploi et le détail de la croissance du trimestre juillet-septembre [1][2]. Après +0,4 % au deuxième trimestre, c'est le test de la résistance de l'économie européenne face à l'énergie chère.",
    "sources": [
      {
        "short": "Finance Calendar",
        "name": "Finance Calendar, « Eurozone GDP Flash November 2026 »",
        "url": "https://www.financecalendar.com/?p=2417"
      },
      {
        "short": "Eurostat",
        "name": "Eurostat, calendrier des indicateurs européens",
        "url": "https://ec.europa.eu/eurostat/en/news/euro-indicators"
      }
    ]
  },
  {
    "id": "2026-11-13-etats-unis-prix-production-octobre",
    "date": "2026-11-13",
    "theme": "eco",
    "region": "Amériques",
    "place": "Washington",
    "title": "États-Unis : indice des prix à la production d'octobre",
    "why": "Publié le vendredi 13 novembre, trois jours après l'inflation à la consommation, il montre si la hausse des coûts des entreprises (énergie, transport) va se répercuter dans les prix de vente [1]. Avec plus de 80 % de paris sur une hausse de taux de la Fed en décembre, un chiffre élevé renforcerait ce scénario [1].",
    "news": "2026-11-10-wall-street-rebond-petrole-inflation-nvidia",
    "sources": [
      {
        "short": "Reuters (LSE)",
        "name": "Reuters, « US STOCKS-Wall St jumps as oil slide cools inflation worries; Nvidia slumps » (9 novembre 2026)",
        "url": "https://www.lse.co.uk/news/us-stocks-wall-st-jumps-as-oil-slide-cools-inflation-worries-nvidia-slumps-do06hsar8bvdtw0.html"
      }
    ]
  },
  {
    "id": "2026-11-15-cap-vert-presidentielle",
    "date": "2026-11-15",
    "theme": "geo",
    "region": "Afrique",
    "place": "Cap-Vert",
    "title": "Présidentielle au Cap-Vert",
    "why": "Le président sortant José Maria Neves, au pouvoir depuis 2021, brigue un second mandat ; un second tour est prévu le 29 novembre si personne n'a la majorité absolue [1][2]. Le Cap-Vert est une démocratie stable de l'Atlantique, vitrine politique de l'Afrique de l'Ouest.",
    "sources": [
      {
        "short": "Wikipédia",
        "name": "Wikipédia (anglais), « 2026 Cape Verdean presidential election »",
        "url": "https://en.wikipedia.org/wiki/2026_Cape_Verdean_presidential_election"
      },
      {
        "short": "Africanews",
        "name": "Africanews, « Cape Verde's president Neves to run for re-election in November » (15 septembre 2026)",
        "url": "https://www.africanews.com/2026/09/15/cape-verdes-president-neves-to-run-for-re-election-in-november/"
      }
    ]
  },
  {
    "id": "2026-11-16-bruxelles-unicredit-commerzbank",
    "date": "2026-11-16",
    "theme": "fin",
    "region": "Europe",
    "place": "Bruxelles",
    "title": "Bruxelles tranche sur UniCredit et Commerzbank",
    "why": "La Commission européenne a fixé au 16 novembre sa date limite pour décider si UniCredit peut prendre le contrôle d'une part élevée de Commerzbank [1][2]. Une fois les autorisations obtenues, UniCredit disposerait de près de 50 % des droits de vote, ce qui change l'équilibre de la banque allemande [3].",
    "sources": [
      {
        "short": "Finanztrends",
        "name": "Finanztrends, « UniCredit Aktie : Kommission prüft Commerzbank-Übernahme »",
        "url": "https://www.finanztrends.de/news/unicredit-aktie-kommission-prueft-commerzbank-uebernahme/"
      },
      {
        "short": "Börse Global",
        "name": "Börse Global, « UniCredit Aktie : Beantragt Freigabe für Commerzbank-Übernahme »",
        "url": "https://www.boerse-global.de/unicredit-aktie-beantragt-freigabe-fuer-commerzbank-uebernahme/833385"
      },
      {
        "short": "Investing.com",
        "name": "Investing.com, « UniCredit takeover offer for Commerzbank receives 17.6 % acceptance »",
        "url": "https://www.investing.com/news/company-news/unicredit-takeover-offer-for-commerzbank-receives-176-acceptance-93CH-4780897"
      }
    ]
  },
  {
    "id": "2026-11-16-japon-pib-troisieme-trimestre",
    "date": "2026-11-16",
    "theme": "eco",
    "region": "Asie",
    "place": "Tokyo",
    "title": "Japon : première estimation de la croissance du troisième trimestre",
    "why": "Le gouvernement japonais publie le lundi 16 novembre sa première estimation du PIB de juillet à septembre [1][2]. Au deuxième trimestre, la croissance a été révisée en hausse à 1,4 % en rythme annuel [3] : le chiffre dira si l'économie japonaise garde ce rythme.",
    "sources": [
      {
        "short": "Bureau du Cabinet du Japon (ESRI)",
        "name": "Bureau du Cabinet du Japon, ESRI, « Release Schedule – Quarterly Estimates of GDP »",
        "url": "https://www.esri.cao.go.jp/en/sna/kouhyou/kouhyou_top.html"
      },
      {
        "short": "Bureau du Cabinet du Japon (ESRI)",
        "name": "Bureau du Cabinet du Japon, ESRI, note sur les estimations trimestrielles du PIB (calendrier des estimations de juillet-septembre 2026)",
        "url": "https://www.esri.cao.go.jp/en/sna/data/sokuhou/files/2026/qe262_2/pdf/note_e.pdf"
      },
      {
        "short": "Adnkronos",
        "name": "Adnkronos, « Japan's April-June GDP Growth Revised Up to 1.4 Pct » (8 sept. 2026)",
        "url": "https://english.adnkronos.com/2026/09/08/japans-april-june-gdp-growth-revised-up-to-1-4-pct/"
      }
    ]
  },
  {
    "id": "2026-11-17-budget-2027-vote",
    "date": "2026-11-17",
    "theme": "eco",
    "region": "Europe",
    "place": "Paris",
    "title": "Budget 2027 : vote de l'Assemblée nationale",
    "why": "Après le débat sur les recettes puis sur les dépenses, les députés votent l'ensemble du budget de l'État en première lecture [1][2] ; le texte doit être adopté avant le 31 décembre, sinon il faut une loi spéciale [2].",
    "sources": [
      {
        "short": "Assemblée nationale",
        "name": "Assemblée nationale, « Organisation de la discussion du projet de loi de finances pour 2027 »",
        "url": "https://www.assemblee-nationale.fr/dyn/contenu/visualisation/1119828/file/organisation%20PLF%202027.pdf"
      },
      {
        "short": "Franceinfo",
        "name": "Franceinfo, « Où en sont les débats sur le PLF et le PLFSS 2027 ? »",
        "url": "https://www.franceinfo.fr/economie/budget/ou-en-sont-les-debats-sur-le-plf-et-le-plfss-2027-suivez-les-etapes-de-l-examen-du-budget-a-l-assemblee-et-au-senat_8254234.html"
      }
    ]
  },
  {
    "id": "2026-11-17-nvidia-resultats",
    "date": "2026-11-17",
    "theme": "fin",
    "region": "Amériques",
    "place": "Santa Clara, États-Unis",
    "title": "Nvidia publie ses résultats",
    "why": "Le fabricant des puces de l'intelligence artificielle présente le trimestre clos le 25 octobre, à 23 h heure de Paris [1][2]. Ses chiffres font souvent bouger toute la Bourse américaine, car Nvidia pèse très lourd dans les grands indices.",
    "sources": [
      {
        "short": "Nvidia",
        "name": "Nvidia, « NVIDIA Sets Conference Call for Third-Quarter Financial Results »",
        "url": "https://nvidianews.nvidia.com/news/nvidia-sets-conference-call-for-third-quarter-financial-results-6928873"
      },
      {
        "short": "CM Elite Group",
        "name": "CM Elite Group, « Nvidia earnings date »",
        "url": "https://www.cmelitegroup.com/knowledge-hub/nvidia-earnings-date/"
      }
    ]
  },
  {
    "id": "2026-11-17-royaume-uni-chomage",
    "date": "2026-11-17",
    "theme": "eco",
    "region": "Europe",
    "place": "Londres",
    "title": "Royaume-Uni : chiffres du chômage et des salaires",
    "why": "L'Office national de statistique publie le chômage de l'été (juillet-septembre) [1][2] ; il était à 4,7 % sur juin-août avec une croissance des salaires de 3,7 %. Ces chiffres comptent pour la Banque d'Angleterre, qui juge si l'inflation vient aussi des salaires.",
    "sources": [
      {
        "short": "StreetOwl",
        "name": "StreetOwl, « ONS publishes UK unemployment data for June to August 2026 »",
        "url": "https://streetowl.co.uk/news/ons-publishes-uk-unemployment-data-for-june-to-2026-10-21"
      },
      {
        "short": "Commons Library",
        "name": "House of Commons Library, « UK labour market statistics »",
        "url": "https://commonslibrary.parliament.uk/research-briefings/cbp-9366/"
      }
    ]
  },
  {
    "id": "2026-11-17-nouvelle-zelande-rbnz-stabilite",
    "date": "2026-11-17",
    "theme": "fin",
    "region": "Asie",
    "place": "Wellington",
    "title": "La banque centrale néo-zélandaise publie son rapport sur la stabilité financière",
    "why": "La RBNZ publie son rapport le 17 novembre, après les élections [1]. Il fait le point sur la solidité des banques et des ménages au moment où le chômage est au plus haut depuis 2015 et où les marchés attendent la réunion de décembre sur les taux [1][2].",
    "news": "2026-11-04-nouvelle-zelande-election-cout-vie",
    "sources": [
      {
        "short": "InvestingLive",
        "name": "InvestingLive, « Recap: New Zealand jobless rate hits 11-year high, kiwi slips as RBNZ hike bets fade »",
        "url": "https://investinglive.com/news/recap-new-zealand-jobless-rate-hits-11-year-high-kiwi-slips-as-rbnz-hike-bets-fade/"
      },
      {
        "short": "RBNZ",
        "name": "Reserve Bank of New Zealand, site officiel (calendrier des publications)",
        "url": "https://www.rbnz.govt.nz/"
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
    "news": "2026-11-03-algerie-locales-candidats-invalides",
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
    "news": "2026-11-02-vietnam-commerce-mille-milliards-enquete-301",
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
    "news": "2026-11-02-espagne-legislatives-29-novembre-logement",
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
