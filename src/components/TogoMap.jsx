import { useState } from "react";
import { motion } from "framer-motion";
import { togoMapConfig } from "../data/togoRegionPaths";
import { regionsData } from "../data/regions";


////////////////////////////////////////////////////
//             Composant TogoMap                   //
////////////////////////////////////////////////////

export default function TogoMap({ selectedRegion, onSelectRegion }) {
  const [hoveredRegion, setHoveredRegion] = useState(null);
  const activeHover = hoveredRegion;

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
            const isHovered = activeHover === id;
            const isSelected = selectedRegion === id;

            return (
              <path
                key={id}
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
                onMouseEnter={() => setHoveredRegion(id)}
                onMouseLeave={() => setHoveredRegion(null)}
                onClick={() => onSelectRegion(id)}
                onFocus={() => setHoveredRegion(id)}
                onBlur={() => setHoveredRegion(null)}
                tabIndex={0}
                role="button"
                aria-label={region?.name}
                aria-pressed={isSelected}
              />
            );
          })}

          {togoMapConfig.cityMarkers.map((marker, index) => (
            <g
              key={`city-${marker.regionId ?? index}`}
              className="region-city-marker-group"
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
          ))}
        </svg>

      </div>

      <h3 className="map-title">Carte du Togo</h3>
    </motion.div>
  );
}
