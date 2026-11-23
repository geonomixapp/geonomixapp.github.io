// Geonomix+ : prix, liens de paiement, codes offerts et proches invités.
// Ne pas modifier les listes à la main : utiliser node tools/plus.mjs (les codes et e-mails n'y sont qu'en empreinte).
// Prototype : tant que le paiement et les comptes ne sont pas branchés, l'accès est mémorisé sur l'appareil.
window.GEOCO = window.GEOCO || {};
window.GEOCO.plus = {
  "prix": {
    "mensuel": 3.99,
    "annuel": 39.99
  },
  "devises": {
    "CAD": {
      "mensuel": 4.99,
      "annuel": 49.99,
      "fondateur": 3.99
    }
  },
  "paiement": {
    "mensuel": "",
    "annuel": ""
  },
  "codes": [
    {
      "h": "3ee4c3396b877c3cb00b156f0528d6ac02be410172722a8b7ae951613ba9d6a0",
      "label": "Famille et amis"
    },
    {
      "h": "c1ebc97807c26a287a9ba9e8b69b3e2b9c6bdc35f8ff3560e1df9a253a2bda55",
      "label": "Membres fondateurs",
      "fondateur": true
    },
    {
      "h": "67d16acb47a5673c4186937e3c679f71e7251c45c44568888268db3242f206b1",
      "label": "Invité · 1 mois offert",
      "mois": 1,
      "unique": true
    },
    {
      "h": "9e0aea22831ec79becc8fe608334698f81a689064964001b4534c7131e5a172d",
      "label": "Invité · 2 jours offerts",
      "jours": 2
    },
    {
      "h": "0a99cf19dd215b5b7d45fbc78ed18cff2887d802dfbba6d00d260b630a56a1bd",
      "label": "Invité De Gaulle 1 · 1 mois offert",
      "mois": 1,
      "unique": true
    },
    {
      "h": "0e053251537b97c0d5521aa4a6d69621df255692489027415a4f921cc1e64d2d",
      "label": "Invité De Gaulle 2 · 1 mois offert",
      "mois": 1,
      "unique": true
    },
    {
      "h": "afcb36f76465ad5a535e9133b6fc6a5c99587324cd0a33ec840ac9adb90d8c13",
      "label": "Invité De Gaulle 3 · 1 mois offert",
      "mois": 1,
      "unique": true
    },
    {
      "h": "27c9f8050c9a8583e46f715b43bfd9eed1b9afa595f6993484de1cb0aabcc6e3",
      "label": "Invité De Gaulle 4 · 1 mois offert",
      "mois": 1,
      "unique": true
    },
    {
      "h": "521a5f0e22d2bce6332bf62c651737b6f3af5bb545264b20a0d080773a6ce2b7",
      "label": "Invité De Gaulle 5 · 1 mois offert",
      "mois": 1,
      "unique": true
    },
    {
      "h": "4623dacafc058535b179bbede56cef8d5f9fa8612f63d4a6d447f365d3ba0f32",
      "label": "Invité De Gaulle 6 · 1 mois offert",
      "mois": 1,
      "unique": true
    },
    {
      "h": "ba3e8b0495dbc84cce97b996da8b3be3c6acf0439938f630f9dffd9d6582f1cb",
      "label": "Invité De Gaulle 7 · 1 mois offert",
      "mois": 1,
      "unique": true
    },
    {
      "h": "cef6f65fc91d0758da2909738a9a3f17d469163fec4bc08c35cdbfda182c6661",
      "label": "Invité De Gaulle 8 · 1 mois offert",
      "mois": 1,
      "unique": true
    },
    {
      "h": "bd19019fb14085db0e23cbfd489223eb9995de9eff23acbde708f272b4a0083f",
      "label": "Invité De Gaulle 9 · 1 mois offert",
      "mois": 1,
      "unique": true
    },
    {
      "h": "8c39243fbcf85cde17f542d732cc3dd7acb06ef3cd3927e341a49bca4c9d64c7",
      "label": "Invité De Gaulle 10 · 1 mois offert",
      "mois": 1,
      "unique": true
    },
    {
      "h": "29e25ebcba424e361b636bffa8daceafae8bb0f6baf997c166a8eea6ca2590ae",
      "label": "Invité De Gaulle 11 · 1 mois offert",
      "mois": 1,
      "unique": true
    },
    {
      "h": "de0e873143a97f582f5ef22eaf7d4ed36f5a554a4ba42cd29381135a4403f708",
      "label": "Invité De Gaulle 12 · 1 mois offert",
      "mois": 1,
      "unique": true
    },
    {
      "h": "e4b7cc166f881415de2e13bba890d8a4c6039d481d3d730c65f32ce587356cf0",
      "label": "Invité De Gaulle 13 · 1 mois offert",
      "mois": 1,
      "unique": true
    },
    {
      "h": "0fe6aaf743833f69ebf4039c4dd0f001c1826d90d11f99b255f26566062f2950",
      "label": "Invité De Gaulle 14 · 1 mois offert",
      "mois": 1,
      "unique": true
    },
    {
      "h": "a7b24f206f97da630a7901a43512f8f577210a939b8fc8f1fdae7bf220634037",
      "label": "Invité De Gaulle 15 · 1 mois offert",
      "mois": 1,
      "unique": true
    }
  ],
  "invites": [],
  "fondateurs": {
    "places": 50,
    "restantes": 50,
    "essaiMois": 2,
    "prix": 2.99,
    "paiement": "",
    "ouvert": true
  },
  "revenuecat": {
    "cle": "rcb_sb_ArXyFmTYKgBddtyDrWEtQhUIE",
    "droit": "geonomix_pro",
    "offre": "default",
    "paquets": {
      "mensuel": "$rc_monthly",
      "annuel": "$rc_annual",
      "fondateurs": ""
    }
  }
};
