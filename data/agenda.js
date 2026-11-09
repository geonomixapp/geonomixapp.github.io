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
    "id": "2026-11-05-chine-foire-importations-shanghai",
    "date": "2026-11-05",
    "end": "2026-11-10",
    "theme": "eco",
    "region": "Asie",
    "place": "Shanghai",
    "title": "Foire internationale des importations de Chine à Shanghai",
    "why": "La 9e édition se tient du 5 au 10 novembre au Centre national d'exposition et de congrès de Shanghai ; le Canada y est pays invité d'honneur [1]. Environ 60 pays et organisations y exposent, et c'est l'occasion d'accords commerciaux entre la Chine et ses partenaires, comme les discussions agricoles avec Ottawa [1][2].",
    "news": "2026-11-04-chine-canada-commerce-pekin-changhai",
    "sources": [
      {
        "short": "Délégués commerciaux du Canada",
        "name": "Service des délégués commerciaux du Canada, « China International Import Expo (CIIE) 2026 »",
        "url": "https://www.tradecommissioner.gc.ca/en/trade-events-training/2026/11/ciie.html"
      },
      {
        "short": "People's Daily",
        "name": "People's Daily, « 57 countries, 3 international organizations confirm participation in CIIE Country Exhibition » (28 juil. 2026)",
        "url": "https://en.people.cn/n3/2026/0728/c90000-20482367.html"
      }
    ]
  },
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
    "id": "2026-11-09-unicredit-resultats-t3",
    "date": "2026-11-09",
    "theme": "fin",
    "region": "Europe",
    "place": "Milan",
    "title": "UniCredit publie ses résultats du troisième trimestre",
    "why": "UniCredit a reporté l'approbation de ses comptes au 8 novembre, avec présentation et conférence avec les analystes le 9 novembre [1][2]. Ce sera l'occasion d'entendre la direction sur son offre pour Commerzbank, que la banque allemande et le gouvernement de Berlin refusent [1][3].",
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
        "short": "Irish Times",
        "name": "Irish Times, « UniCredit launches €35bn Commerzbank takeover offer » (16 mars 2026)",
        "url": "https://www.irishtimes.com/business/financial-services/2026/03/16/unicredit-launches-35bn-commerzbank-takeover-offer"
      }
    ]
  },
  {
    "id": "2026-11-09-eurogroupe-candidats-bce",
    "date": "2026-11-09",
    "theme": "fin",
    "region": "Europe",
    "place": "Bruxelles",
    "title": "L'Eurogroupe examine les candidats à la succession de Christine Lagarde à la BCE",
    "why": "Les ministres des Finances de la zone euro passent en revue les candidatures [1]. Le successeur, qui devra réunir au moins 16 des 21 pays et 65 % de la population, fixera la ligne sur les taux et l'euro.",
    "news": "2026-11-06-bce-succession-lagarde-candidats",
    "sources": [
      {
        "short": "Euronews",
        "name": "Euronews, « Who will replace Lagarde? Eurozone picks nominees as race for ECB top job begins » (3 novembre 2026)",
        "url": "https://www.euronews.com/2026/11/03/who-will-replace-lagarde-eurozone-picks-nominees-as-race-for-ecb-top-job-begins"
      }
    ]
  },
  {
    "id": "2026-11-09-conference-sociale-matignon",
    "date": "2026-11-09",
    "theme": "eco",
    "region": "Europe",
    "place": "Paris",
    "title": "France : conférence sociale à Matignon sur les salaires et le pouvoir d'achat",
    "why": "Le Premier ministre réunit syndicats et patronat après la grève du 5 novembre [1]. Les syndicats réclament une hausse du Smic, qui n'est pas arrêtée à ce stade.",
    "news": "2026-11-06-france-conference-sociale-matignon-salaires",
    "sources": [
      {
        "short": "Europe 1",
        "name": "Europe 1, « Sébastien Lecornu réunira lundi à Matignon une conférence sociale avec les syndicats et le patronat »",
        "url": "https://www.europe1.fr/politique/sebastien-lecornu-reunira-lundi-a-matignon-une-conference-sociale-avec-les-syndicats-et-le-patronat-1211417"
      },
      {
        "short": "Francemag",
        "name": "Francemag, « Grève du 5 novembre : après une mobilisation massive, Sébastien Lecornu convoque syndicats et patronat à Matignon »",
        "url": "https://www.francemag.fr/article/3952/greve-du-5-novembre-apres-une-mobilisation-massive-sebastien-lecornu-convoque-syndicats-et-patronat-a-matignon"
      }
    ]
  },
  {
    "id": "2026-11-10-etats-unis-inflation-octobre",
    "date": "2026-11-10",
    "theme": "eco",
    "region": "Amériques",
    "place": "Washington",
    "title": "Inflation américaine d'octobre",
    "why": "L'indice des prix à la consommation d'octobre sort à 8 h 30 (heure de New York) [1][2]. Il était à 3,7 % sur un an en septembre, tiré par l'essence (+34 %) ; c'est le chiffre qui guide les décisions de la Fed de décembre.",
    "sources": [
      {
        "short": "BLS",
        "name": "Bureau of Labor Statistics, calendrier de publication de l'indice des prix (CPI)",
        "url": "https://www.bls.gov/schedule/news_release/cpi.htm"
      },
      {
        "short": "Thrive in Markets",
        "name": "Thrive in Markets, « Next CPI release: Tue 10 Nov 2026 »",
        "url": "https://thriveinmarkets.com/calendar/dates/cpi-2026/"
      }
    ]
  },
  {
    "id": "2026-11-10-chine-terres-rares-suspension",
    "date": "2026-11-10",
    "theme": "geo",
    "region": "Asie",
    "place": "Pékin et Washington",
    "title": "Fin de la suspension chinoise des contrôles sur les terres rares",
    "why": "La Chine avait suspendu pour un an, jusqu'au 10 novembre 2026, ses contrôles d'octobre 2025 sur les terres rares, tandis que la trêve douanière a été prolongée de deux mois, jusqu'au 10 janvier 2027 [1][2]. 178 exclusions de la section 301 expirent aussi ce jour-là [3]. Sans renouvellement, des licences d'exportation redeviennent nécessaires pour ces métaux.",
    "news": "2026-11-05-etats-unis-chine-treve-10-novembre-terres-rares",
    "sources": [
      {
        "short": "CNBC",
        "name": "CNBC, « U.S.-China trade truce extended for two months, Bessent says, as Xi begins state visit » (24 septembre 2026)",
        "url": "https://www.cnbc.com/2026/09/24/us-china-trade-truce-bessent-trump-xi.html"
      },
      {
        "short": "Rinnovabili",
        "name": "Rinnovabili, « Chinese rare earth exports: Trump-Xi truce extended to Jan 2027 »",
        "url": "https://www.rinnovabili.net/policy-and-affairs/environmental-policies/chinese-rare-earth-exports-trump-xi-truce/"
      },
      {
        "short": "Thomson Reuters",
        "name": "Thomson Reuters Tax & Accounting, « Section 301 exclusions expire November 2026 »",
        "url": "https://tax.thomsonreuters.com/blog/section-301-exclusions-expiration/"
      }
    ]
  },
  {
    "id": "2026-11-10-abou-dhabi-pourparlers-ukraine",
    "date": "2026-11-10",
    "end": "2026-11-11",
    "theme": "geo",
    "region": "Moyen-Orient",
    "place": "Abou Dhabi",
    "title": "Pourparlers à trois États-Unis–Russie–Ukraine à Abou Dhabi",
    "why": "Après les réunions de Bruxelles sur la reconstruction, première rencontre à trois prévue [1]. Un progrès pèserait sur les prix de l'énergie et sur les sanctions contre la Russie.",
    "news": "2026-11-06-ukraine-bruxelles-reconstruction-abou-dhabi",
    "sources": [
      {
        "short": "EU Reporter",
        "name": "EU Reporter, « Ukraine moves closer to EU membership as Brussels hosts talks on post-war prosperity » (4 novembre 2026)",
        "url": "https://www.eureporter.co/world/ukraine/2026/11/04/ukraine-moves-closer-to-eu-membership-as-brussels-hosts-talks-on-post-war-prosperity/"
      }
    ],
    "verify": "Date annoncée dans la couverture de la réunion de Bruxelles, pas encore confirmée par une source officielle."
  },
  {
    "id": "2026-11-10-chine-commerce-exterieur-octobre",
    "date": "2026-11-10",
    "theme": "eco",
    "region": "Asie",
    "place": "Pékin",
    "title": "Chine : chiffres du commerce extérieur d'octobre",
    "why": "Les exportations chinoises ont atteint un record de 447,18 milliards de dollars en septembre (+36,3 % sur un an) ; les chiffres d'octobre diront si la vague continue, au moment où l'UE prépare un « coupe-circuit » contre les importations chinoises [1][2].",
    "news": "2026-11-07-ue-chine-coupe-circuit-pekin-menace-xi-stocker",
    "sources": [
      {
        "short": "Trading Economics",
        "name": "Trading Economics, calendrier du commerce extérieur chinois (publication d'octobre prévue le 10 novembre 2026)",
        "url": "https://tradingeconomics.com/china/exports-yoy"
      },
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « China's exports surge amid AI-driven demand » (14 octobre 2026)",
        "url": "https://www.aljazeera.com/economy/2026/10/14/chinas-exports-sugrge"
      }
    ]
  },
  {
    "id": "2026-11-11-israel-herzog-delai-mandat",
    "date": "2026-11-11",
    "theme": "geo",
    "region": "Moyen-Orient",
    "place": "Jérusalem",
    "title": "Israël : dernier jour pour que Herzog confie la formation du gouvernement",
    "why": "La loi donne sept jours au président pour consulter les partis et désigner un député, soit jusqu'au 11 novembre ; ce dernier aura ensuite 28 jours pour former une majorité, avec 14 jours de prolongation possibles [1]. Un échec ouvrirait la voie à de nouvelles élections, ce qui prolongerait l'incertitude sur la guerre et la diplomatie régionale [1][2].",
    "news": "2026-11-04-israel-herzog-consultations",
    "sources": [
      {
        "short": "Yahoo / AFP",
        "name": "Yahoo News, « Israel president opens talks as rivals struggle to form government »",
        "url": "https://www.yahoo.com/news/politics/articles/israel-president-opens-talks-rivals-020036434.html"
      },
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « Israeli opposition leaders back Eisenkot to oust Netanyahu » (3 nov. 2026)",
        "url": "https://www.aljazeera.com/news/2026/11/3/israeli-opposition-leaders-back-eisenkot-to-oust-netanyahu"
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
