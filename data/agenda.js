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
    "id": "2026-11-01-opep-production-decembre",
    "date": "2026-11-01",
    "theme": "eco",
    "region": "Moyen-Orient",
    "place": "Réunion en ligne",
    "title": "L'OPEP+ décide combien de pétrole pomper en décembre",
    "why": "Les sept pays qui pilotent la production (Arabie saoudite, Russie, Irak, Koweït, Kazakhstan, Algérie, Oman) se retrouvent chaque mois ; en octobre, ils ont gardé leurs quotas inchangés pour novembre [1][2]. S'ils ouvrent ou ferment le robinet, le prix du baril, et donc celui de l'essence, bouge.",
    "sources": [
      {
        "short": "OPEP",
        "name": "OPEP, communiqué du 4 octobre 2026",
        "url": "https://opec.org/pr-detail/1891616-4-october-2026.html"
      },
      {
        "short": "News on Air",
        "name": "News on Air, 4 octobre 2026",
        "url": "https://newsonair.gov.in/opec-seven-countries-decide-to-maintain-september-2026-oil-production-quotas-for-november/"
      }
    ]
  },
  {
    "id": "2026-11-03-midterms-etats-unis",
    "date": "2026-11-03",
    "theme": "geo",
    "region": "Amériques",
    "place": "États-Unis",
    "title": "Élections de mi-mandat aux États-Unis",
    "why": "Les 435 sièges de la Chambre des représentants, 35 sièges du Sénat et 39 postes de gouverneur sont en jeu [1][2]. Si le Congrès change de camp, le président aura plus de mal à faire passer ses lois, ses budgets et ses droits de douane.",
    "sources": [
      {
        "short": "Khaleej Times",
        "name": "Khaleej Times, « US midterm elections 2026: All you need to know »",
        "url": "https://www.khaleejtimes.com/world/americas/us-midterm-elections-2026-voting-explainer"
      },
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, 26 octobre 2026",
        "url": "https://aljazeera.com/news/2026/10/26/us-midterm-elections-2026-in-maps-and-charts"
      }
    ]
  },
  {
    "id": "2026-11-03-rba-taux",
    "date": "2026-11-03",
    "theme": "fin",
    "region": "Asie",
    "place": "Sydney",
    "title": "La Banque centrale d'Australie décide de son taux",
    "why": "Réunion des 2 et 3 novembre, décision à 14 h 30 heure de Sydney, avec le rapport trimestriel de la banque [1][2]. Un taux plus haut renchérit les crédits immobiliers australiens et soutient le dollar australien, monnaie très liée aux prix des matières premières.",
    "sources": [
      {
        "short": "RBA",
        "name": "Reserve Bank of Australia, « 2026 Monetary Policy Board Meeting Dates »",
        "url": "https://www.rba.gov.au/media-releases/2025/mr-25-02.html"
      },
      {
        "short": "RBA Rate Watch",
        "name": "RBA Rate Watch, « RBA Meeting Dates 2026 »",
        "url": "https://rbaratewatch.com/rba-meeting-dates-2026/"
      }
    ]
  },
  {
    "id": "2026-11-04-bresil-copom-selic",
    "date": "2026-11-04",
    "theme": "fin",
    "region": "Amériques",
    "place": "Brasilia",
    "title": "Le Brésil fixe son taux directeur (Selic)",
    "why": "Le comité de politique monétaire de la banque centrale brésilienne se réunit les 3 et 4 novembre ; le taux Selic est à 14,25 % depuis juin selon la presse brésilienne, et la réunion suivante aura lieu les 8 et 9 décembre [1][2]. Il détermine le coût du crédit dans la première économie d'Amérique latine et pèse sur le réal.",
    "sources": [
      {
        "short": "Poder360",
        "name": "Poder360, « Saiba quando o Copom vai reunir em 2026 para tratar da Selic »",
        "url": "https://www.poder360.com.br/poder-economia/leia-as-datas-das-reunioes-do-copom-de-2026/"
      },
      {
        "short": "B3",
        "name": "B3 Bora Investir, « Copom terá 8 reuniões em 2026 : veja calendário e projeção para a Selic »",
        "url": "https://borainvestir.b3.com.br/noticias/copom-tera-8-reunioes-em-2026-veja-calendario-e-projecao-para-a-selic/"
      }
    ]
  },
  {
    "id": "2026-11-04-zone-euro-inflation-octobre",
    "date": "2026-11-04",
    "theme": "eco",
    "region": "Europe",
    "place": "Luxembourg",
    "title": "Inflation de la zone euro en octobre : première estimation d'Eurostat",
    "why": "Eurostat publie à 11 h (heure de Paris) l'estimation rapide d'octobre, après 3,8 % en septembre [1][2]. Les premiers chiffres nationaux sont très contrastés : 2,8 % en Allemagne, 3,8 % en France (indice européen), 5,6 % en Italie ; un chiffre élevé conforterait ceux qui, à la BCE, veulent relever les taux.",
    "sources": [
      {
        "short": "Eurostat",
        "name": "Eurostat, estimation rapide d'inflation de septembre 2026 (prochaine publication : 4 novembre)",
        "url": "https://ec.europa.eu/eurostat/web/products-euro-indicators/w/2-02102026-ap"
      },
      {
        "short": "Eurostat (PDF)",
        "name": "Eurostat, communiqué du 16 octobre 2026 sur l'inflation (via Poder360)",
        "url": "https://static.poder360.com.br/uploads/2026/10/integra-eurostat-inflacao-16out2026.pdf"
      }
    ]
  },
  {
    "id": "2026-11-05-banque-angleterre-taux",
    "date": "2026-11-05",
    "theme": "fin",
    "region": "Europe",
    "place": "Londres",
    "title": "La Banque d'Angleterre fixe son taux",
    "why": "Décision à midi, heure de Londres, avec un nouveau rapport sur la politique monétaire [1][2]. Un taux plus haut renchérit les crédits des ménages et des entreprises britanniques et fait souvent monter la livre.",
    "sources": [
      {
        "short": "Finance Calendar",
        "name": "Finance Calendar, « Bank of England MPC Rate Decision November 2026 »",
        "url": "https://www.financecalendar.com/event/bank-of-england-mpc-rate-decision-november-2026/"
      },
      {
        "short": "Cambridge Currencies",
        "name": "Cambridge Currencies, « Next Bank of England interest rate decision »",
        "url": "https://cambridgecurrencies.com/next-bank-of-england-interest-rate-decision-date/"
      }
    ]
  },
  {
    "id": "2026-11-06-emploi-americain-octobre",
    "date": "2026-11-06",
    "theme": "eco",
    "region": "Amériques",
    "place": "Washington",
    "title": "Emploi américain : le rapport d'octobre",
    "why": "Le Bureau des statistiques du travail publie à 8 h 30 (heure de New York) les créations d'emplois et le taux de chômage d'octobre [1][2]. En septembre, seuls 29 000 emplois avaient été créés et le chômage était monté à 4,2 % ; un nouveau chiffre faible changerait les paris sur la Fed, donc le dollar et les Bourses.",
    "sources": [
      {
        "short": "BLS",
        "name": "Bureau of Labor Statistics, calendrier de publication « Employment Situation »",
        "url": "https://www.bls.gov/schedule/news_release/empsit.htm"
      },
      {
        "short": "Thrive in Markets",
        "name": "Thrive in Markets, « Next NFP release: Fri 6 Nov 2026 »",
        "url": "https://thriveinmarkets.com/calendar/dates/nfp-2026/"
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
    "id": "2026-11-10-treve-douaniere-chine-etats-unis",
    "date": "2026-11-10",
    "theme": "geo",
    "region": "Asie",
    "place": "Washington et Pékin",
    "title": "Fin de la trêve douanière entre les États-Unis et la Chine",
    "why": "La trêve prolongée en 2025 expire le 10 novembre ; en septembre, les deux pays n'avaient pas encore conclu de prolongation, le représentant américain au commerce Jamieson Greer évoquant 3 à 6 mois de plus [1][2]. Sans accord, les droits de douane pourraient remonter sur des centaines de milliards de dollars d'échanges.",
    "sources": [
      {
        "short": "Transport Topics",
        "name": "Transport Topics, « Trump Extends China Tariff Truce for 90 Days to Nov. 10 »",
        "url": "https://www.ttnews.com/articles/us-china-extends-tariff-truce"
      },
      {
        "short": "Report.az",
        "name": "Report.az, « US, China yet to agree on extending trade truce » (21 septembre 2026)",
        "url": "https://report.az/en/other-countries/us-china-yet-to-agree-on-extending-trade-truce"
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
    "id": "2026-11-18-apec-shenzhen",
    "date": "2026-11-18",
    "end": "2026-11-19",
    "theme": "geo",
    "region": "Asie",
    "place": "Shenzhen, Chine",
    "title": "Sommet de l'APEC à Shenzhen",
    "why": "Les dirigeants des 21 économies d'Asie-Pacifique, dont les États-Unis et la Chine, se retrouvent dans la ville des géants chinois de la tech [1][2]. Une rencontre entre dirigeants américain et chinois peut y relancer ou geler la guerre commerciale.",
    "sources": [
      {
        "short": "Shenzhen",
        "name": "Gouvernement de Shenzhen, « APEC 2026 »",
        "url": "https://www.sz.gov.cn/en_szgov/news/infocus/APEC2026/News/content/post_12977146.html"
      },
      {
        "short": "CGTN",
        "name": "CGTN, 17 octobre 2026",
        "url": "https://news.cgtn.com/news/2026-10-17/APEC-2026-30-days-to-go-until-Shenzhen-hosts-world-leaders-1RjNBWgfQxG/p.html"
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
    "id": "2026-12-09-fed-taux",
    "date": "2026-12-09",
    "theme": "fin",
    "region": "Amériques",
    "place": "Washington",
    "title": "La Fed fixe son taux, avec ses prévisions pour 2027",
    "why": "Dernière réunion de l'année de la banque centrale américaine, avec ses prévisions et le « graphique à points » où chaque dirigeant indique où il voit les taux [1][2]. Le dollar, les crédits et les Bourses du monde entier en dépendent.",
    "sources": [
      {
        "short": "Fed Rate Calc",
        "name": "Fed Rate Calc, « FOMC Meeting Schedule 2026 »",
        "url": "https://fedratecalc.com/fomc-meeting-schedule/"
      },
      {
        "short": "Eco3min",
        "name": "Eco3min, « FOMC Meeting Calendar »",
        "url": "https://eco3min.fr/en/fomc-meeting-calendar/"
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
  }
];
