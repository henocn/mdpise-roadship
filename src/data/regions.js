/**
 * Données des régions du Togo — Zones économiques spéciales (PNDI 2026–2031)
 * Structure orientée présentation institutionnelle
 */

export const regionsData = {
  maritime: {
    id: "maritime",
    name: "Région Maritime",
    color: "#ffce00",
    ville: "Aného",
    grandTrait:
      "Plateforme industrielle et technologique — corridors régionaux.",
    zone: {
      nom: "Plateforme industrielle et technologique",
      type: "Zone Économique Spéciale",
      statut: "PNDI 2026–2031",
      description:
        "Plateforme industrielle et technologique connectée aux corridors régionaux, pour structurer l'investissement productif sur le littoral et relier l'économie maritime aux flux d'exportation.",
    },
    vision:
      "Faire d'Aného un pôle industriel et technologique du littoral, intégré aux corridors régionaux et moteur de la transformation productive.",
    images: [
      "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=800&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80",
    ],
    atouts: [
      "Corridors régionaux intégrés",
      "Industrie et technologie",
      "Connectivité littorale",
      "Plateforme exportatrice",
      "Valeur ajoutée productive",
    ],
  },

  plateaux: {
    id: "plateaux",
    name: "Région des Plateaux",
    color: "#006a4e",
    ville: "Kpalimé",
    grandTrait:
      "Tourisme et agriculture — chaînes de valeur à forte valeur ajoutée.",
    zone: {
      nom: "Chaînes de valeur territoriales",
      type: "Zone Économique Spéciale",
      statut: "PNDI 2026–2031",
      description:
        "Déployer des chaînes de valeur à forte valeur ajoutée autour du tourisme et de l'agriculture, en s'appuyant sur les atouts du territoire des Plateaux.",
    },
    vision:
      "Positionner Kpalimé comme territoire de valorisation touristique et agricole, créateur de richesse locale et d'emplois productifs.",
    images: [
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
      "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
      "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=800&q=80",
    ],
    atouts: [
      "Tourisme à forte valeur ajoutée",
      "Agriculture diversifiée",
      "Filières café et cacao",
      "Écotourisme",
      "Territoire des Plateaux",
    ],
  },

  centre: {
    id: "centre",
    name: "Région Centrale",
    color: "#ffce00",
    ville: "Blitta",
    grandTrait:
      "Pôle agro-minier — industrie lourde au carrefour national.",
    zone: {
      nom: "Pôle agro-minier et industrie lourde",
      type: "Zone Économique Spéciale",
      statut: "PNDI 2026–2031",
      description:
        "Située au carrefour des grands axes reliant Atakpamé à Sokodé, l'ambition est de créer un pôle agro-minier et d'industrie lourde au cœur du réseau national.",
    },
    vision:
      "Faire de Blitta le carrefour industriel central du Togo, moteur d'industrie lourde, de transformation agro-minière et de croissance territorialisée.",
    images: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80",
    ],
    atouts: [
      "Carrefour Atakpamé–Sokodé",
      "Agro-minier",
      "Industrie lourde",
      "Axes structurants",
      "Position centrale",
    ],
  },

  kara: {
    id: "kara",
    name: "Région de la Kara",
    color: "#006a4e",
    ville: "Kara",
    grandTrait:
      "Plateforme agro-industrielle — corridors régionaux intégrés.",
    zone: {
      nom: "Plateforme agro-industrielle",
      type: "Zone Économique Spéciale",
      statut: "PNDI 2026–2031",
      description:
        "Plateforme agro-industrielle adossée aux corridors régionaux intégrés, pour structurer la transformation et les échanges vers le nord et la sous-région.",
    },
    vision:
      "Transformer Kara en plateforme agro-industrielle de référence, connectée aux corridors régionaux et porteuse d'emplois productifs.",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80",
      "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80",
    ],
    atouts: [
      "Corridors régionaux intégrés",
      "Transformation agro-industrielle",
      "Échanges transfrontaliers",
      "Capitale régionale",
      "Plateforme du nord",
    ],
  },

  savanes: {
    id: "savanes",
    name: "Région des Savanes",
    color: "#d21034",
    ville: "Cinkassé",
    grandTrait:
      "Hub logistique sahélien — port sec et logique Last Mile.",
    zone: {
      nom: "Hub logistique sahélien",
      type: "Zone Économique Spéciale",
      statut: "PNDI 2026–2031",
      description:
        "Hub logistique sahélien et port sec pour désenclaver l'hinterland et se rapprocher du client dans une logique du Last Mile.",
    },
    vision:
      "Consolider Cinkassé comme plateforme logistique du Sahel, facilitatrice du désenclavement et de la prospérité partagée.",
    images: [
      "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&q=80",
      "https://images.unsplash.com/photo-1473163928189-364b2c4e1135?w=800&q=80",
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80",
    ],
    atouts: [
      "Port sec stratégique",
      "Logistique Last Mile",
      "Hub sahélien",
      "Désenclavement de l'hinterland",
      "Commerce transfrontalier",
    ],
  },
};

/** Ordre d'affichage Nord → Sud (Savanes → Maritime) */
export const regionsList = [
  "savanes",
  "kara",
  "centre",
  "plateaux",
  "maritime",
];
