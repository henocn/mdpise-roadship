/**
 * Données des régions du Togo - Feuille de route du Ministère délégué
 * chargé de la Promotion des Investissements, de l'Industrie
 * et de la Souveraineté Économique
 */

export const regionsData = {
  maritime: {
    id: "maritime",
    name: "Région Maritime",
    capital: "Lomé",
    description:
      "Pôle économique majeur du Togo, la Région Maritime abrite la capitale Lomé, le Port Autonome de Lomé (seul port en eau profonde de la côte ouest-africaine) et la Zone Franche Industrielle. Elle concentre plus de 70% de l'activité industrielle nationale.",
    population: "3 200 000 habitants",
    superficie: "6 100 km²",
    color: "#006A4E",
    zones: [
      {
        commune: "Adetikopé",
        nom: "Plateforme Industrielle d'Adétikopé (PIA)",
        type: "Zone Industrielle",
        description:
          "Plateforme industrielle de classe mondiale dédiée à la transformation des matières premières agricoles et à l'industrie manufacturière. Superficie de 400 hectares avec infrastructures modernes.",
        statut: "Opérationnelle",
      },
      {
        commune: "Lomé",
        nom: "Zone Franche du Port de Lomé",
        type: "Zone Franche Portuaire",
        description:
          "Zone économique spéciale adossée au Port Autonome de Lomé, hub logistique et commercial de référence en Afrique de l'Ouest.",
        statut: "Opérationnelle",
      },
    ],
    atouts: [
      "Port en eau profonde",
      "Zone Franche Industrielle",
      "Aéroport International",
      "Main-d'œuvre qualifiée",
      "Hub logistique régional",
    ],
    projetsPhares: [
      "Extension de la PIA - Phase 2",
      "Modernisation du corridor Lomé-Ouagadougou",
      "Pôle agro-industriel de transformation",
    ],
  },

  plateaux: {
    id: "plateaux",
    name: "Région des Plateaux",
    capital: "Atakpamé",
    description:
      "Grenier agricole du Togo, la Région des Plateaux est caractérisée par un potentiel agro-industriel considérable. Ses terres fertiles et son climat favorable en font le cœur de la production de café, cacao, coton et cultures vivrières.",
    population: "1 800 000 habitants",
    superficie: "16 975 km²",
    color: "#1B5E20",
    zones: [
      {
        commune: "Atakpamé",
        nom: "Zone Agro-Industrielle d'Atakpamé",
        type: "Zone Agro-Industrielle",
        description:
          "Pôle de transformation des produits agricoles (café, cacao, palmier à huile) avec des unités de stockage et de conditionnement modernes.",
        statut: "En développement",
      },
      {
        commune: "Kpalimé",
        nom: "Pôle Écotouristique et Artisanal de Kpalimé",
        type: "Zone Économique Spéciale",
        description:
          "Zone dédiée à l'artisanat d'art, à l'écotourisme et à la transformation locale des produits forestiers non ligneux.",
        statut: "Planifiée",
      },
    ],
    atouts: [
      "Terres agricoles fertiles",
      "Production de café et cacao",
      "Potentiel écotouristique",
      "Ressources forestières",
      "Position géographique centrale",
    ],
    projetsPhares: [
      "Complexe agro-industriel de transformation du cacao",
      "Développement de la filière palmier à huile",
      "Centre de formation aux métiers agricoles",
    ],
  },

  centre: {
    id: "centre",
    name: "Région Centrale",
    capital: "Sokodé",
    description:
      "Carrefour stratégique du Togo, la Région Centrale occupe une position géographique privilégiée reliant le nord au sud. Elle dispose d'un potentiel significatif dans l'élevage, l'agriculture et les ressources minières.",
    population: "800 000 habitants",
    superficie: "13 317 km²",
    color: "#E65100",
    zones: [
      {
        commune: "Sokodé",
        nom: "Zone Économique de Sokodé",
        type: "Zone Économique Mixte",
        description:
          "Pôle logistique et commercial au carrefour des axes nord-sud et est-ouest, dédié au transit, au commerce et à la transformation des produits d'élevage.",
        statut: "En développement",
      },
      {
        commune: "Blitta",
        nom: "Pôle Minier de Blitta",
        type: "Zone d'Exploitation Minière",
        description:
          "Zone de valorisation des ressources minières (fer, manganèse) avec infrastructure de transport adaptée.",
        statut: "Planifiée",
      },
    ],
    atouts: [
      "Position de carrefour",
      "Ressources minières",
      "Élevage bovin",
      "Corridor de transit",
      "Potentiel énergétique",
    ],
    projetsPhares: [
      "Hub logistique multimodal",
      "Complexe de transformation des produits d'élevage",
      "Développement minier responsable",
    ],
  },

  kara: {
    id: "kara",
    name: "Région de la Kara",
    capital: "Kara",
    description:
      "Terre d'histoire et de culture, la Région de la Kara possède un riche patrimoine (Koutammakou, patrimoine mondial UNESCO) et des ressources naturelles diversifiées. Son potentiel minier et touristique en fait un territoire d'avenir.",
    population: "900 000 habitants",
    superficie: "11 738 km²",
    color: "#1565C0",
    zones: [
      {
        commune: "Kara",
        nom: "Zone Industrielle de Kara",
        type: "Zone Industrielle",
        description:
          "Pôle industriel régional dédié à la transformation des matières premières locales (phosphate, calcaire, produits agricoles) et à la fabrication de matériaux de construction.",
        statut: "En développement",
      },
      {
        commune: "Bassar",
        nom: "Zone Minière de Bassar",
        type: "Zone d'Exploitation Minière",
        description:
          "Valorisation du gisement de fer de Bandjéli et développement d'une sidérurgie locale pour la souveraineté industrielle.",
        statut: "Planifiée",
      },
    ],
    atouts: [
      "Patrimoine UNESCO (Koutammakou)",
      "Ressources minières (fer, phosphate)",
      "Potentiel touristique",
      "Énergie hydraulique",
      "Savoir-faire artisanal",
    ],
    projetsPhares: [
      "Développement sidérurgique national",
      "Circuit touristique du Koutammakou",
      "Pôle de transformation des phosphates",
    ],
  },

  savanes: {
    id: "savanes",
    name: "Région des Savanes",
    capital: "Dapaong",
    description:
      "Porte d'entrée nord du Togo vers le Sahel, la Région des Savanes est un territoire à fort potentiel agropastoral et minier. Sa position frontalière avec le Burkina Faso, le Ghana et le Bénin lui confère un rôle stratégique dans le commerce transfrontalier.",
    population: "1 000 000 habitants",
    superficie: "8 470 km²",
    color: "#B71C1C",
    zones: [
      {
        commune: "Cinkassé",
        nom: "Zone Économique Transfrontalière de Cinkassé",
        type: "Zone Franche Transfrontalière",
        description:
          "Plateforme commerciale transfrontalière au carrefour du Togo, du Burkina Faso et du Ghana, dédiée au commerce régional et à la logistique.",
        statut: "Opérationnelle",
      },
      {
        commune: "Dapaong",
        nom: "Pôle Agropastoral de Dapaong",
        type: "Zone Agro-Industrielle",
        description:
          "Zone spécialisée dans la transformation des produits d'élevage et des céréales, avec des unités de conditionnement pour l'export vers le Sahel.",
        statut: "En développement",
      },
    ],
    atouts: [
      "Commerce transfrontalier",
      "Élevage extensif",
      "Production céréalière",
      "Position stratégique sahélienne",
      "Potentiel solaire élevé",
    ],
    projetsPhares: [
      "Marché régional transfrontalier",
      "Centrale solaire de Dapaong",
      "Complexe agropastoral intégré",
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
