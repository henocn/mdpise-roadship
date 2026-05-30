/**
 * Extrait les attributs path (d) d'un fichier SVG brut.
 */
export function parseSvgPaths(svgRaw, groupSelector = "g path") {
  const doc = new DOMParser().parseFromString(svgRaw, "image/svg+xml");
  const paths = doc.querySelectorAll(groupSelector);
  return Array.from(paths).map((el) => el.getAttribute("d")).filter(Boolean);
}


/**
 * Extrait les marqueurs circulaires (villes) d'un SVG brut.
 */
export function parseSvgCircles(svgRaw, groupSelector = "g circle") {
  const doc = new DOMParser().parseFromString(svgRaw, "image/svg+xml");
  const circles = doc.querySelectorAll(groupSelector);
  return Array.from(circles).map((el) => ({
    cx: parseFloat(el.getAttribute("cx")),
    cy: parseFloat(el.getAttribute("cy")),
    r: parseFloat(el.getAttribute("r") || "15"),
  }));
}


/**
 * Tente plusieurs sélecteurs jusqu'à trouver assez d'éléments.
 */
export function parseSvgPathsWithFallback(svgRaw, selectors, minCount = 1) {
  for (const selector of selectors) {
    const paths = parseSvgPaths(svgRaw, selector);
    if (paths.length >= minCount) return paths;
  }
  return [];
}


/**
 * Tente plusieurs sélecteurs pour les cercles de villes.
 */
export function parseSvgCirclesWithFallback(svgRaw, selectors) {
  for (const selector of selectors) {
    const circles = parseSvgCircles(svgRaw, selector);
    if (circles.length > 0) return circles;
  }
  return [];
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
