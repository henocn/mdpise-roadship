/**
 * Données des régions du Togo — Zones économiques stratégiques
 * Structure orientée présentation institutionnelle
 */

export const regionsData = {
  maritime: {
    id: "maritime",
    name: "Région Maritime",
    color: "#006A4E",
    ville: "Adétikopé",
    zone: {
      nom: "Plateforme Industrielle d'Adétikopé (PIA)",
      type: "Zone Industrielle",
      statut: "Opérationnelle",
      description:
        "Plateforme industrielle de classe mondiale sur 400 hectares, dédiée à la transformation des matières premières agricoles et à l'industrie manufacturière. Infrastructures modernes, guichet unique pour les investisseurs.",
    },
    images: [
      "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=800&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80",
    ],
    atouts: [
      "Port en eau profonde",
      "Zone franche industrielle",
      "Aéroport international",
      "Hub logistique régional",
    ],
  },

  plateaux: {
    id: "plateaux",
    name: "Région des Plateaux",
    color: "#1B5E20",
    ville: "Atakpamé",
    zone: {
      nom: "Zone Agro-Industrielle d'Atakpamé",
      type: "Zone Agro-Industrielle",
      statut: "En développement",
      description:
        "Pôle de transformation des produits agricoles (café, cacao, palmier à huile) avec unités de stockage et de conditionnement modernes. Vocation exportatrice vers la sous-région.",
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
      "Position centrale",
    ],
  },

  centre: {
    id: "centre",
    name: "Région Centrale",
    color: "#E65100",
    ville: "Sokodé",
    zone: {
      nom: "Hub Logistique et Commercial de Sokodé",
      type: "Zone Économique Mixte",
      statut: "En développement",
      description:
        "Pôle logistique au carrefour des axes nord-sud et est-ouest, dédié au transit, au commerce régional et à la transformation des produits d'élevage. Position stratégique de corridor.",
    },
    images: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80",
    ],
    atouts: [
      "Carrefour de transit",
      "Ressources minières",
      "Élevage bovin",
      "Potentiel énergétique",
    ],
  },

  kara: {
    id: "kara",
    name: "Région de la Kara",
    color: "#1565C0",
    ville: "Bassar",
    zone: {
      nom: "Zone Minière et Sidérurgique de Bassar",
      type: "Zone d'Exploitation Minière",
      statut: "Planifiée",
      description:
        "Valorisation du gisement de fer de Bandjéli et développement d'une sidérurgie locale pour la souveraineté industrielle du Togo. Projet structurant d'envergure nationale.",
    },
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80",
      "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80",
    ],
    atouts: [
      "Patrimoine UNESCO",
      "Gisement de fer",
      "Potentiel touristique",
      "Énergie hydraulique",
    ],
  },

  savanes: {
    id: "savanes",
    name: "Région des Savanes",
    color: "#B71C1C",
    ville: "Cinkassé",
    zone: {
      nom: "Zone Économique Transfrontalière de Cinkassé",
      type: "Zone Franche Transfrontalière",
      statut: "Opérationnelle",
      description:
        "Plateforme commerciale transfrontalière au carrefour du Togo, du Burkina Faso et du Ghana. Dédiée au commerce régional, à la logistique et aux échanges avec le Sahel.",
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
