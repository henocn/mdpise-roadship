import togoSvgRaw from "../assets/svg/togo-regions.svg?raw";
import centreSvgRaw from "../assets/svg/centre.svg?raw";
import karaSvgRaw from "../assets/svg/kara.svg?raw";
import maritimeSvgRaw from "../assets/svg/maritime.svg?raw";
import plateauxSvgRaw from "../assets/svg/plateaux.svg?raw";
import savaneSvgRaw from "../assets/svg/savane.svg?raw";
import { parseSvgPaths, TOGO_PATH_REGION_IDS } from "../utils/svgPaths";


const TOGO_VIEWBOX = "0 0 800 2057";

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
  const paths = parseSvgPaths(togoSvgRaw, "#togo-regions path");
  return paths.map((d, index) => ({
    id: TOGO_PATH_REGION_IDS[index],
    d,
  }));
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
};

export function getRegionZoomConfig(regionId) {
  return {
    viewBox: REGION_ZOOM_VIEWBOX[regionId],
    d: getZoomPath(regionId),
  };
}
