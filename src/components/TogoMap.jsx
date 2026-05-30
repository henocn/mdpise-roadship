import { motion } from "framer-motion";
import { togoMapConfig } from "../data/togoRegionPaths";
import { regionsData } from "../data/regions";


////////////////////////////////////////////////////
//             Composant TogoMap                   //
////////////////////////////////////////////////////

export default function TogoMap({
  selectedRegion,
  hoveredRegion,
  onSelectRegion,
  onHoverRegion,
}) {
  return (
    <motion.div
      className="togo-map-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="map-wrapper">
        <svg
          viewBox={togoMapConfig.viewBox}
          className="togo-interactive-map"
          role="img"
          aria-label="Carte interactive du Togo par régions"
        >
          {togoMapConfig.regions.map(({ id, d }) => {
            const region = regionsData[id];
            const isHovered = hoveredRegion === id;
            const isSelected = selectedRegion === id;

            return (
              <g
                key={id}
                className={[
                  "region-path-group",
                  isHovered && "region-path-group--hover",
                  isSelected && "region-path-group--selected",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <path
                  d={d}
                  className={[
                    "region-path",
                    `region-path--${id}`,
                    isHovered && "region-path--hover",
                    isSelected && "region-path--selected",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  style={{ "--region-color": region?.color }}
                  onMouseEnter={() => onHoverRegion?.(id)}
                  onMouseLeave={() => onHoverRegion?.(null)}
                  onClick={() => onSelectRegion?.(id)}
                  onFocus={() => onHoverRegion?.(id)}
                  onBlur={() => onHoverRegion?.(null)}
                  tabIndex={0}
                  role="button"
                  aria-label={region?.name}
                  aria-pressed={isSelected}
                />
              </g>
            );
          })}

          {togoMapConfig.cityMarkers.map((marker, index) => {
            const regionId = marker.regionId;
            const isHovered = hoveredRegion === regionId;
            const isSelected = selectedRegion === regionId;

            return (
              <g
                key={`city-${regionId ?? index}`}
                className={[
                  "region-city-marker-group",
                  isHovered && "region-city-marker-group--hover",
                  isSelected && "region-city-marker-group--selected",
                ]
                  .filter(Boolean)
                  .join(" ")}
                aria-hidden
              >
                <circle
                  cx={marker.cx}
                  cy={marker.cy}
                  r={marker.r}
                  className="region-city-marker"
                />
                {marker.label && (
                  <text
                    x={marker.labelX}
                    y={marker.labelY}
                    textAnchor={marker.labelAnchor}
                    className="region-city-label"
                  >
                    {marker.label}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      <h3 className="map-title">Carte du Togo</h3>
    </motion.div>
  );
}
