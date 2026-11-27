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
    "id": "2026-11-27-france-inflation-novembre",
    "date": "2026-11-27",
    "theme": "eco",
    "region": "Europe",
    "place": "Paris (Insee)",
    "title": "France : premier chiffre de l'inflation de novembre",
    "why": "L'Insee publie le 27 novembre à 8 h 45 son estimation provisoire des prix de novembre [1]. En octobre, les prix avaient augmenté de 3,4 % sur un an, tirés par l'énergie (+24,1 %) [1] : une nouvelle accélération pèserait sur le pouvoir d'achat et sur les anticipations de taux de la BCE avant sa réunion du 17 décembre.",
    "sources": [
      {
        "short": "Insee",
        "name": "Insee, Informations rapides n° 271, « Indice des prix à la consommation, résultats définitifs, octobre 2026 » (13 nov. 2026), avec la date de la prochaine parution",
        "url": "https://insee.fr/fr/statistiques/9131332"
      }
    ]
  },
  {
    "id": "2026-11-27-allemagne-bundestag-budget-2027",
    "date": "2026-11-27",
    "theme": "eco",
    "region": "Europe",
    "place": "Berlin, Allemagne",
    "title": "Allemagne : le Bundestag vote le budget fédéral 2027",
    "why": "Les députés allemands votent en troisième lecture un budget d'environ 560,9 milliards d'euros de dépenses, adopté le 13 novembre en commission [1], avec une nouvelle dette qui monte à 210 milliards d'euros en comptant les fonds spéciaux [2]. Un vote qui fixe la dette de la première économie européenne pour 2027.",
    "sources": [
      {
        "short": "Bundestag",
        "name": "Bundestag, « Haushaltsgesetz 2027 : dritte Lesung » (textarchiv, semaine 48) et hib 939/2026 (13 novembre 2026)",
        "url": "https://www.bundestag.de/dokumente/textarchiv/2026/kw48-de-haushaltsgesetz-2027-dritte-lesung-1232350"
      },
      {
        "short": "Börsen-Zeitung",
        "name": "Börsen-Zeitung, « Neuverschuldung steigt auf 210 Mrd. Euro » (novembre 2026)",
        "url": "https://www.boersen-zeitung.de/konjunktur-politik/neuverschuldung-steigt-auf-210-mrd-euro"
      }
    ]
  },
  {
    "id": "2026-11-27-nouvelle-zelande-resultats-officiels",
    "date": "2026-11-27",
    "theme": "geo",
    "region": "Asie",
    "place": "Wellington, Nouvelle-Zélande",
    "title": "Nouvelle-Zélande : résultats officiels des législatives",
    "why": "La Commission électorale proclame les résultats définitifs du scrutin du 7 novembre, après le dépouillement des votes spéciaux [1]. Au décompte provisoire, la coalition sortante de Christopher Luxon n'avait qu'un siège de majorité, 67 sur 131 [2] : les votes spéciaux, traditionnellement plus favorables à la gauche, peuvent faire basculer le gouvernement.",
    "sources": [
      {
        "short": "Elections NZ",
        "name": "Electoral Commission (Te Kaitiaki Take Kōwhiri), « 2026 General Election media kit »",
        "url": "https://elections.nz/assets/2026-Media-Kit-/2026-General-Election-media-kit.pdf"
      },
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « New Zealand's governing coalition holds slim majority in preliminary count » (7 novembre 2026)",
        "url": "https://www.aljazeera.com/news/2026/11/7/governing-party-leads-in-new-zealands-knife-edge-vote-early-results"
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
    "id": "2026-11-28-france-senat-partie-recettes-budget",
    "date": "2026-11-28",
    "end": "2026-11-29",
    "theme": "eco",
    "region": "Europe",
    "place": "Paris, France",
    "title": "France : le Sénat termine l’examen des recettes du budget 2027",
    "why": "Après le rejet du texte par les députés le 4 novembre, les sénateurs débattent des impôts et taxes du budget 2027 du 20 au 28 ou 29 novembre [1][2]. Leurs choix (abattement de 10 % des retraités, fiscalité de l’audiovisuel…) serviront de base au compromis que cherche le gouvernement autour d’un déficit de 5 % du PIB [2].",
    "news": "2026-11-20-budget-2027-senat-debut",
    "sources": [
      {
        "short": "Public Sénat",
        "name": "Public Sénat, « Dossier Budget 2027 » (novembre 2026)",
        "url": "https://www.publicsenat.fr/dossier/budget-2027"
      },
      {
        "short": "Sénat",
        "name": "Sénat, « Projet de loi de finances pour 2027 », la loi en clair (novembre 2026)",
        "url": "https://www.senat.fr/travaux-parlementaires/textes-legislatifs/la-loi-en-clair/projet-de-loi-de-finances-pour-2027.html"
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
    "news": "2026-11-23-espagne-derniere-semaine-legislatives",
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
    "id": "2026-11-29-equateur-elections-locales",
    "date": "2026-11-29",
    "theme": "geo",
    "region": "Amériques",
    "place": "Équateur",
    "title": "Équateur : élections locales et du Conseil de participation citoyenne",
    "why": "Plus de 13,8 millions d'Équatoriens élisent leurs maires, préfets et conseillers, ainsi que sept membres du Conseil de participation citoyenne (CPCCS), un vote avancé de février 2027 au 29 novembre 2026 par le Conseil national électoral [1]. Avec 51 731 candidatures [2], le scrutin dira si le gouvernement de Daniel Noboa tient les grandes villes comme Quito et Guayaquil.",
    "sources": [
      {
        "short": "Primicias",
        "name": "Primicias, « CNE: elecciones seccionales en Ecuador el 29 de noviembre » (2026)",
        "url": "https://www.primicias.ec/politica/cne-elecciones-seccionales-ecuador-29-noviembre-119142/"
      },
      {
        "short": "Teleamazonas",
        "name": "Teleamazonas, « 51 731 candidaturas en firme para las votaciones seccionales del 29 de noviembre » (nov. 2026)",
        "url": "https://www.teleamazonas.com/actualidad/noticias/politica/51-731-candidaturas-firme-votaciones-seccionales-29-noviembre-132769/"
      }
    ]
  },
  {
    "id": "2026-11-30-chine-credit-marge-80",
    "date": "2026-11-30",
    "theme": "fin",
    "region": "Asie",
    "place": "Chine",
    "title": "Chine : l'apport minimum pour acheter des actions à crédit passe de 100 % à 80 %",
    "why": "Les Bourses de Shanghai, Shenzhen et Pékin assouplissent le crédit pour acheter des actions à partir du 30 novembre, ce qui annule un durcissement décidé en janvier [1][2]. Pékin espère ainsi soutenir des marchés secoués par le krach des valeurs de l'IA ; reste à voir si les particuliers reprendront le risque d'emprunter pour investir.",
    "news": "2026-11-23-chine-bourse-credit-marge-krach-ia",
    "sources": [
      {
        "short": "Reuters / MarketScreener",
        "name": "Reuters via MarketScreener, « Chinese exchanges ease margin trading requirements to aid stock markets » (nov. 2026)",
        "url": "https://www.marketscreener.com/news/chinese-exchanges-ease-margin-trading-requirements-to-aid-stock-markets-ce785ed3d18df725"
      },
      {
        "short": "investingLive",
        "name": "investingLive, « China cuts margin requirement to 80% in fresh market support push » (nov. 2026)",
        "url": "https://investinglive.com/stock-market-update/china-cuts-margin-requirement-to-80-in-fresh-market-support-push-but-will-it-work/"
      }
    ]
  },
  {
    "id": "2026-11-30-inde-pib-t2",
    "date": "2026-11-30",
    "theme": "eco",
    "region": "Asie",
    "place": "New Delhi",
    "title": "Inde : croissance du trimestre juillet-septembre",
    "why": "Le ministère indien des Statistiques (MoSPI) publie le 30 novembre l'estimation du PIB du deuxième trimestre (juillet-septembre) de l'exercice 2026-2027 [1]. Le chiffre dira si la croissance indienne résiste au pétrole cher, quatre jours avant la décision de taux de la Banque de réserve d'Inde.",
    "sources": [
      {
        "short": "PIB / MoSPI",
        "name": "Press Information Bureau (gouvernement indien), communiqué du MoSPI annonçant la prochaine estimation trimestrielle du PIB le 30 novembre 2026",
        "url": "https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2304949"
      }
    ]
  },
  {
    "id": "2026-11-30-chine-pmi-novembre",
    "date": "2026-11-30",
    "theme": "eco",
    "region": "Asie",
    "place": "Pékin",
    "title": "Chine : les indices officiels d'activité de novembre (PMI)",
    "why": "Le Bureau national des statistiques publie le 30 novembre ses indices PMI de novembre [1][2]. En octobre, l'indice manufacturier était tombé à 49,3, sous la barre des 50 qui sépare croissance et contraction [3][4] : un nouveau recul alimenterait les appels à une relance et pèserait sur les métaux et les monnaies asiatiques.",
    "verify": "Date du 30 novembre donnée par Trading Economics ; la ligne PMI du calendrier officiel du NBS n'a pas pu être lue (dates « préliminaires » selon le NBS).",
    "sources": [
      {
        "short": "NBS",
        "name": "Bureau national des statistiques de Chine, « Regular Press Release Calendar of NBS in 2026 »",
        "url": "https://www.stats.gov.cn/english/PressRelease/ReleaseCalendar/202512/t20251226_1962154.html"
      },
      {
        "short": "Trading Economics",
        "name": "Trading Economics, calendrier économique de la Chine (PMI NBS de novembre le 30 nov. 2026)",
        "url": "https://tradingeconomics.com/china/calendar"
      },
      {
        "short": "NBS",
        "name": "Bureau national des statistiques de Chine, « Purchasing Managers' Index for October 2026 » (nov. 2026)",
        "url": "https://www.stats.gov.cn/english/PressRelease/202611/t20261103_1965735.html"
      },
      {
        "short": "Mysteel",
        "name": "Mysteel, « NBS: China's Oct manufacturing PMI contracts to 49.3 » (2 nov. 2026)",
        "url": "https://www.mysteel.net/news/5147011-nbs-chinas-oct-manufacturing-pmi-contracts-to-493"
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
    "id": "2026-12-02-banques-canadiennes-resultats",
    "date": "2026-12-02",
    "end": "2026-12-03",
    "theme": "fin",
    "region": "Amériques",
    "place": "Toronto, Canada",
    "title": "Les grandes banques canadiennes publient leurs résultats annuels",
    "why": "La Banque Scotia ouvre le bal le 2 décembre, puis RBC, TD et CIBC publient le 3 décembre leurs comptes du quatrième trimestre, clos fin octobre [1][2][3][4]. Leurs provisions pour prêts douteux diront si les ménages et les entreprises canadiennes peinent à rembourser leurs crédits, et leurs profits pèsent lourd à la Bourse de Toronto.",
    "sources": [
      {
        "short": "Banque Scotia",
        "name": "Banque Scotia, « Scotiabank to Announce Fourth Quarter 2026 Results » (4 nov. 2026)",
        "url": "https://scotiabank.investorroom.com/2026-11-04-Scotiabank-to-Announce-Fourth-Quarter-2026-Results"
      },
      {
        "short": "RBC",
        "name": "RBC, « RBC to announce fourth quarter and fiscal 2026 results », via Investing News",
        "url": "https://investingnews.com/rbc-to-announce-fourth-quarter-and-fiscal-2026-results/"
      },
      {
        "short": "CIBC",
        "name": "CIBC, « Media Advisory - CIBC to Announce Fourth Quarter 2026 Results on December 3, 2026 » (5 nov. 2026)",
        "url": "https://cibc.mediaroom.com/2026-11-05-Media-Advisory-CIBC-to-Announce-Fourth-Quarter-2026-Results-on-December-3,-2026"
      },
      {
        "short": "TD",
        "name": "Groupe Banque TD, « Media Advisory - TD Bank Group to Release Fourth Quarter 2026 Results », via Quantisnow",
        "url": "https://www.quantisnow.com/insight/media-advisory---td-bank-group-to-release-fourth-quarter-6787134"
      }
    ]
  },
  {
    "id": "2026-12-02-salesforce-resultats",
    "date": "2026-12-02",
    "theme": "fin",
    "region": "Amériques",
    "place": "San Francisco, États-Unis",
    "title": "Salesforce publie ses résultats du troisième trimestre",
    "why": "Salesforce, numéro un mondial des logiciels de gestion de la relation client, publie le 2 décembre après la clôture de Wall Street les comptes de son troisième trimestre de l'exercice 2027 [1][2]. Ses chiffres et ses objectifs diront si les entreprises paient vraiment pour ses agents d'intelligence artificielle (Agentforce) : un test pour toutes les valeurs du logiciel en Bourse.",
    "sources": [
      {
        "short": "Salesforce",
        "name": "Salesforce, « Salesforce Announces Date of Third Quarter Fiscal 2027 Earnings Release and Webcast » (10 nov. 2026)",
        "url": "https://investor.salesforce.com/news/news-details/2026/Salesforce-Announces-Date-of-Third-Quarter-Fiscal-2027-Earnings-Release-and-Webcast/default.aspx"
      },
      {
        "short": "Finviz (Business Wire)",
        "name": "Finviz, reprise du communiqué Business Wire « Salesforce Announces Date of Third Quarter Fiscal 2027 Earnings Release and Webcast » (nov. 2026)",
        "url": "https://finviz.com/news/420648/salesforce-announces-date-of-third-quarter-fiscal-2027-earnings-release-and-webcast"
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
    "news": "2026-11-19-fed-compte-rendu-waller-unitedhealth",
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
    "id": "2026-12-09-france-senat-vote-budget-2027",
    "date": "2026-12-09",
    "theme": "eco",
    "region": "Europe",
    "place": "Paris, France",
    "title": "France : le Sénat vote le budget de l'État pour 2027",
    "why": "Rejeté à l'unanimité par les députés le 4 novembre (458 voix contre), le projet de loi de finances arrive au Sénat dans sa version initiale : l'examen en séance commence le 20 novembre et le vote sur l'ensemble est fixé au mercredi 9 décembre [1][2]. Suivra une commission mixte paritaire mi-décembre, avant la date limite constitutionnelle du 17 décembre, au-delà de laquelle le gouvernement pourrait procéder par ordonnances [1] : un enjeu pour le déficit et la note de la dette française.",
    "sources": [
      {
        "short": "NosParlementaires",
        "name": "NosParlementaires, « Vote du budget 2027 : dates, rejet 458-0, le Sénat le 9 décembre » (nov. 2026)",
        "url": "https://nosparlementaires.fr/actualites/budget-2027-calendrier-assemblee-cinq-semaines"
      },
      {
        "short": "LCP",
        "name": "LCP Assemblée nationale, « Budget 2027 rejeté : quelles sont les prochaines étapes au Parlement ? » (nov. 2026)",
        "url": "https://lcp.fr/actualites/budget-2027-rejete-quelles-sont-les-prochaines-etapes-au-parlement-444753"
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
    "id": "2026-12-09-adobe-resultats",
    "date": "2026-12-09",
    "theme": "fin",
    "region": "Amériques",
    "place": "San José, États-Unis",
    "title": "Adobe publie ses résultats annuels",
    "why": "Adobe présente le 9 décembre après la clôture de Wall Street ses comptes du quatrième trimestre et de l'exercice 2026 [1]. Le groupe vise 6,80 à 6,85 milliards de dollars de chiffre d'affaires sur le trimestre [2] ; ses objectifs 2027 diront si l'intelligence artificielle générative menace ou dope ses logiciels (Photoshop, Acrobat).",
    "sources": [
      {
        "short": "Adobe",
        "name": "Adobe, Investor Relations, calendrier des événements (conférence sur les résultats du T4 2026, 9 déc. 2026, 14 h heure du Pacifique)",
        "url": "https://www.adobe.com/uk/investor-relations.html"
      },
      {
        "short": "Morningstar (Business Wire)",
        "name": "Morningstar, reprise du communiqué Business Wire « Adobe Reports Record Q3 Results » (10 sept. 2026)",
        "url": "https://www.morningstar.com/news/business-wire/20260910832552/adobe-reports-record-q3-results"
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
    "id": "2026-12-15-indonesie-banque-centrale-taux",
    "date": "2026-12-15",
    "end": "2026-12-16",
    "theme": "eco",
    "region": "Asie",
    "place": "Jakarta",
    "title": "Indonésie : dernière décision de taux de l'année",
    "why": "Le conseil des gouverneurs de Bank Indonesia tient sa réunion mensuelle les 15 et 16 décembre [1]. Sa décision compte pour la roupie, sous pression avec le dollar fort et le pétrole cher, et pour le coût du crédit dans la première économie d'Asie du Sud-Est.",
    "sources": [
      {
        "short": "Bank Indonesia (banque centrale)",
        "name": "Bank Indonesia, « Board of Governors Meeting Schedule » (calendrier 2026)",
        "url": "https://www.bi.go.id/en/publikasi/kalender/"
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
    "news": "2026-11-19-colombie-greve-nationale",
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
    "id": "2026-12-16-suede-riksbank-taux",
    "date": "2026-12-16",
    "theme": "eco",
    "region": "Europe",
    "place": "Stockholm",
    "title": "Suède : la Riksbank décide de son taux",
    "why": "La banque centrale suédoise publie sa décision le 16 décembre à 9 h 30, avec son rapport de politique monétaire [1]. Le 4 novembre, elle a relevé son taux à 2 % en citant les coûts de la guerre au Moyen-Orient, et jugé « probable » une nouvelle hausse dans l'année qui vient [2].",
    "sources": [
      {
        "short": "Riksbank",
        "name": "Sveriges Riksbank, calendrier 2026, 16 décembre : publication de la décision de politique monétaire",
        "url": "https://www.riksbank.se/sv/press-och-publicerat/kalender/kalender-2026/2026-12-16/"
      },
      {
        "short": "Riksbank",
        "name": "Sveriges Riksbank, communiqué « Styrräntan höjs till 2 procent » (4 nov. 2026)",
        "url": "https://www.riksbank.se/sv/press-och-publicerat/nyheter-och-pressmeddelanden/pressmeddelanden/2026/styrrantan-hojs-till-2-procent/"
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
    "id": "2026-12-17-mexique-banxico-taux",
    "date": "2026-12-17",
    "theme": "eco",
    "region": "Amériques",
    "place": "Mexico, Mexique",
    "title": "Mexique : dernière décision de taux de l'année de la banque centrale",
    "why": "La Banque du Mexique (Banxico) annonce le 17 décembre sa dernière décision de l'année [1][2]. Le 5 novembre, elle a surpris les marchés en baissant son taux d'un quart de point, à 6,25 % [3] : une nouvelle baisse rendrait le crédit moins cher mais pourrait affaiblir le peso, une pause signalerait que la baisse des taux est finie pour un moment.",
    "sources": [
      {
        "short": "México, ¿cómo vamos?",
        "name": "México, ¿cómo vamos?, « Tasa de interés de referencia » (prochaine annonce de Banxico le 17 décembre 2026)",
        "url": "https://mexicocomovamos.mx/infobites/tasa-de-interes-de-referencia/"
      },
      {
        "short": "Investing.com",
        "name": "Investing.com México, « Minutas Banxico dividen a los analistas: ¿recorte de tasas o alza de 50pb en 2027? » (nov. 2026, réunion du 17 décembre)",
        "url": "https://mx.investing.com/news/economy-news/minutas-banxico-dividen-a-los-analistas-recorte-de-tasas-o-alza-de-50pb-en-2027-3856923"
      },
      {
        "short": "El Financiero",
        "name": "El Financiero, « Contra todo pronóstico: Banxico recorta tasa de interés a 6.25 y adelanta larga permanencia » (6 nov. 2026)",
        "url": "https://www.elfinanciero.com.mx/economia/2026/11/06/contra-todo-pronostico-banxico-recorta-tasa-de-interes-a-625-y-adelanta-larga-permanencia/"
      }
    ]
  },
  {
    "id": "2026-12-17-conseil-europeen-decembre",
    "date": "2026-12-17",
    "end": "2026-12-18",
    "theme": "geo",
    "region": "Europe",
    "place": "Bruxelles",
    "title": "Conseil européen de décembre : dernier sommet de l'année des Vingt-Sept",
    "why": "Les chefs d'État et de gouvernement de l'UE se retrouvent à Bruxelles les 17 et 18 décembre, selon le calendrier officiel du Conseil [1] ; le Conseil des affaires générales le prépare le 15 décembre [2]. Après le sommet extraordinaire de fin novembre sur le budget 2028-2034, c'est la dernière occasion de l'année de trancher sur l'argent de l'Union, l'Ukraine et la défense.",
    "sources": [
      {
        "short": "Conseil de l'UE",
        "name": "Conseil de l'Union européenne, « Meeting calendar » (réunions du Conseil européen)",
        "url": "https://www.consilium.europa.eu/en/meetings/future-euco-meetings/"
      },
      {
        "short": "Présidence irlandaise",
        "name": "Présidence irlandaise du Conseil de l'UE, « General Affairs Council », 15 déc. 2026",
        "url": "https://irish-presidency.consilium.europa.eu/en/events/general-affairs-council-1512/"
      }
    ]
  },
  {
    "id": "2026-12-17-norvege-norges-bank-taux",
    "date": "2026-12-17",
    "theme": "eco",
    "region": "Europe",
    "place": "Oslo",
    "title": "Norvège : la Norges Bank décide de son taux",
    "why": "La banque centrale norvégienne annonce sa décision le 17 décembre à 10 h, avec son rapport de politique monétaire [1]. Le 5 novembre, elle a laissé son taux à 4,5 % après une hausse en septembre, en se disant prête à le relever encore [2][3] : une hausse renchérirait les crédits immobiliers et soutiendrait la couronne.",
    "sources": [
      {
        "short": "Norges Bank",
        "name": "Norges Bank, calendrier des décisions de taux : 17 décembre 2026",
        "url": "https://www.norges-bank.no/en/news-events/calendar/policy-rate-decisions/26-12-17/"
      },
      {
        "short": "Norges Bank",
        "name": "Norges Bank, communiqué sur la décision de taux du 5 novembre 2026",
        "url": "https://www.norges-bank.no/en/news-events/news/Press-releases/2026/2026-11-05-rate/"
      },
      {
        "short": "Morningstar (Dow Jones)",
        "name": "Morningstar (Dow Jones), « Norges Bank Holds Key Interest Rate, Signals Readiness to Tighten » (5 nov. 2026)",
        "url": "https://www.morningstar.com/news/dow-jones/202611054081/norges-bank-holds-key-interest-rate-signals-readiness-to-tighten-update"
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
  },
  {
    "id": "2026-12-31-onu-fin-mandat-guterres",
    "date": "2026-12-31",
    "theme": "geo",
    "region": "Amériques",
    "place": "New York, États-Unis",
    "title": "ONU : fin du mandat d'António Guterres, sans successeur désigné",
    "why": "Le mandat du secrétaire général de l'ONU s'achève le 31 décembre ; après un nouveau vote indicatif sans vainqueur au Conseil de sécurité, des diplomates cités par Reuters n'excluent pas que l'organisation se retrouve sans chef, ce qui imposerait une solution provisoire [1]. Un vide affaiblirait l'ONU au moment des négociations sur l'Ukraine, Gaza et l'Iran.",
    "news": "2026-11-22-onu-secretaire-general-impasse",
    "sources": [
      {
        "short": "Reuters",
        "name": "Reuters (via The Korea Herald), course au secrétariat général de l'ONU (21 novembre 2026)",
        "url": "https://www.koreaherald.com/article/10943238"
      }
    ]
  }
];
