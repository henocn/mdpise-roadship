import togoSvgRaw from "../assets/svg/togo-regions.svg?raw";
import centreSvgRaw from "../assets/svg/centre.svg?raw";
import karaSvgRaw from "../assets/svg/kara.svg?raw";
import maritimeSvgRaw from "../assets/svg/maritime.svg?raw";
import plateauxSvgRaw from "../assets/svg/plateaux.svg?raw";
import savaneSvgRaw from "../assets/svg/savane.svg?raw";
import {
  parseSvgPaths,
  parseSvgPathsWithFallback,
  parseSvgCirclesWithFallback,
  TOGO_PATH_REGION_IDS,
} from "../utils/svgPaths";
import { regionsData } from "./regions";


const TOGO_VIEWBOX = "0 0 800 2057";

const REGION_PATH_SELECTORS = [
  "#togo-regions path",
  "#pasted1 path",
  "svg > g:first-of-type path",
];

const CITY_MARKER_SELECTORS = [
  "#togo-cities circle",
  "#pasted2 circle",
  "svg > g:nth-of-type(2) circle",
];

// Ordre des cercles dans togo-regions.svg (Nord → Sud)
const CITY_MARKER_REGION_IDS = [
  "savanes",
  "kara",
  "centre",
  "plateaux",
  "maritime",
];

const REGION_ZOOM_VIEWBOX = {
  centre: "0 0 800 898",
  kara: "0 0 800 984",
  maritime: "0 0 800 596",
  plateaux: "0 0 800 1353",
  savanes: "0 0 800 955",
};

const regionZoomRaw = {
  centre: centreSvgRaw,
  kara: karaSvgRaw,
  maritime: maritimeSvgRaw,
  plateaux: plateauxSvgRaw,
  savanes: savaneSvgRaw,
};


// Construit la liste des régions avec path extrait du SVG national
function buildNationalRegions() {
  const paths = parseSvgPathsWithFallback(
    togoSvgRaw,
    REGION_PATH_SELECTORS,
    TOGO_PATH_REGION_IDS.length
  ).slice(0, TOGO_PATH_REGION_IDS.length);

  return paths.map((d, index) => ({
    id: TOGO_PATH_REGION_IDS[index],
    d,
  }));
}


// Extrait les points blancs des villes depuis le SVG national
function buildCityMarkers() {
  const circles = parseSvgCirclesWithFallback(togoSvgRaw, CITY_MARKER_SELECTORS);

  return circles.map((circle, index) => {
    const regionId = CITY_MARKER_REGION_IDS[index];
    const label = regionsData[regionId]?.ville ?? "";
    const placeRight = circle.cx < 520;
    const labelX = placeRight ? circle.cx + circle.r + 12 : circle.cx - circle.r - 12;

    return {
      ...circle,
      regionId,
      label,
      labelX,
      labelY: circle.cy + 8,
      labelAnchor: placeRight ? "start" : "end",
    };
  });
}

// Path isolé pour la vue zoom (SVG régional)
function getZoomPath(regionId) {
  const raw = regionZoomRaw[regionId];
  if (!raw) return null;
  const paths = parseSvgPaths(raw, "g path");
  return paths[0] ?? null;
}

export const togoMapConfig = {
  viewBox: TOGO_VIEWBOX,
  regions: buildNationalRegions(),
  cityMarkers: buildCityMarkers(),
};

export function getRegionZoomConfig(regionId) {
  return {
    viewBox: REGION_ZOOM_VIEWBOX[regionId],
    d: getZoomPath(regionId),
  };
}
