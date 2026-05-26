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
        </svg>

        {activeHover && regionsData[activeHover] && !selectedRegion && (
          <motion.div
            className="map-tooltip"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            key={activeHover}
          >
            {regionsData[activeHover].name}
          </motion.div>
        )}
      </div>

      <p className="map-instruction">
        Cliquez sur une région — les détails s&apos;affichent à droite
      </p>
    </motion.div>
  );
}
