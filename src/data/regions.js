/**
 * Données des régions du Togo — Zones économiques stratégiques
 * Structure orientée présentation institutionnelle
 */

export const regionsData = {
  maritime: {
    id: "maritime",
    name: "Région Maritime",
    color: "#ffce00",
    ville: "Aného",
    zone: {
      nom: "Pôle côtier et touristique",
      type: "Zone Économique Côtière",
      statut: "En développement",
      description:
        "Pôle économique historique du littoral togolais, orienté vers le commerce maritime, la pêche, le tourisme culturel et les activités portuaires complémentaires à la zone de Lomé.",
    },
    images: [
      "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=800&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80",
    ],
    atouts: [
      "Accès maritime",
      "Patrimoine historique",
      "Tourisme balnéaire",
      "Proximité du corridor côtier",
    ],
  },

  plateaux: {
    id: "plateaux",
    name: "Région des Plateaux",
    color: "#006a4e",
    ville: "Kpalimé",
    zone: {
      nom: "Pôle agro-industriel",
      type: "Zone Agro-Industrielle",
      statut: "En développement",
      description:
        "Pôle de transformation des produits agricoles (café, cacao, palmier à huile) et de valorisation des filières forestières, avec vocation exportatrice vers la sous-région.",
    },
    images: [
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
      "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
      "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=800&q=80",
    ],
    atouts: [
      "Terres fertiles",
      "Production café & cacao",
      "Potentiel écotouristique",
      "Position stratégique sud-est",
    ],
  },

  centre: {
    id: "centre",
    name: "Région Centrale",
    color: "#ffce00",
    ville: "Blitta",
    zone: {
      nom: "Hub logistique et commercial",
      type: "Zone Économique Mixte",
      statut: "En développement",
      description:
        "Pôle logistique et agro-industriel au cœur du corridor national, dédié au transit, à la transformation agricole et au développement des activités commerciales régionales.",
    },
    images: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80",
    ],
    atouts: [
      "Carrefour de transit",
      "Agriculture vivrière",
      "Élevage",
      "Position centrale",
    ],
  },

  kara: {
    id: "kara",
    name: "Région de la Kara",
    color: "#006a4e",
    ville: "Kara",
    zone: {
      nom: "Pôle minier et industriel",
      type: "Zone Économique Régionale",
      statut: "Planifiée",
      description:
        "Pôle structurant du nord du Togo, combinant valorisation minière, développement industriel et renforcement des échanges commerciaux avec le Burkina Faso et le Bénin.",
    },
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80",
      "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80",
    ],
    atouts: [
      "Capitale régionale",
      "Ressources minières",
      "Potentiel touristique",
      "Énergie hydraulique",
    ],
  },

  savanes: {
    id: "savanes",
    name: "Région des Savanes",
    color: "#d21034",
    ville: "Cinkassé",
    zone: {
      nom: "Plateforme transfrontalière",
      type: "Zone Franche Transfrontalière",
      statut: "Opérationnelle",
      description:
        "Plateforme commerciale transfrontalière au carrefour du Togo, du Burkina Faso et du Ghana, dédiée au commerce régional, à la logistique et aux échanges avec le Sahel.",
    },
    images: [
      "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&q=80",
      "https://images.unsplash.com/photo-1473163928189-364b2c4e1135?w=800&q=80",
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80",
    ],
    atouts: [
      "Commerce transfrontalier",
      "Potentiel solaire élevé",
      "Production céréalière",
      "Position sahélienne",
    ],
  },
};

export const regionsList = [
  "maritime",
  "plateaux",
  "centre",
  "kara",
  "savanes",
];
