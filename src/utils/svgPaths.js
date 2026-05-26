/**
 * Extrait les attributs path (d) d'un fichier SVG brut.
 */
export function parseSvgPaths(svgRaw, groupSelector = "g path") {
  const doc = new DOMParser().parseFromString(svgRaw, "image/svg+xml");
  const paths = doc.querySelectorAll(groupSelector);
  return Array.from(paths).map((el) => el.getAttribute("d")).filter(Boolean);
}

/**
 * Associe les paths du SVG national aux identifiants région.
 * Ordre des <path> dans togo-regions.svg (index 0→4, Nord→Sud).
 */
export const TOGO_PATH_REGION_IDS = [
  "centre",    // index 0
  "kara",      // index 1
  "maritime",  // index 2
  "plateaux",  // index 3
  "savanes",   // index 4
];
