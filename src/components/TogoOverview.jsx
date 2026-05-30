import { motion } from "framer-motion";
import { togoOverview } from "../data/togoOverview";
import { regionsData, regionsList } from "../data/regions";


////////////////////////////////////////////////////
//         Composant TogoOverview                 //
////////////////////////////////////////////////////

export default function TogoOverview({
  hoveredRegion = null,
  onHoverRegion,
  onSelectRegion,
}) {
  return (
    <motion.article
      className="togo-overview"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      aria-label="Présentation des zones économiques du Togo"
    >
      <header className="togo-overview__hero">
        <p className="togo-overview__eyebrow">{togoOverview.eyebrow}</p>
        <div className="togo-overview__ornament" aria-hidden="true">
          <span className="togo-overview__ornament-line" />
          <span className="togo-overview__ornament-gem" />
          <span className="togo-overview__ornament-line" />
        </div>
        <h2 className="togo-overview__title">{togoOverview.title}</h2>
        <p className="togo-overview__intro">{togoOverview.intro}</p>
      </header>

      <section className="togo-overview__zones" aria-label="Les cinq zones économiques">
        <div className="togo-overview__zones-head">
          <span className="togo-overview__zones-label">Grandes lignes</span>
          <h3 className="togo-overview__zones-title">Les 5 zones économiques</h3>
        </div>

        <ol className="togo-overview__zone-list">
          {regionsList.map((id, index) => {
            const region = regionsData[id];
            const isActive = hoveredRegion === id;
            const isSolo = id === "maritime";

            return (
              <motion.li
                key={id}
                className={[
                  "togo-overview__zone",
                  isSolo && "togo-overview__zone--solo",
                  isActive && "togo-overview__zone--active",
                ]
                  .filter(Boolean)
                  .join(" ")}
                style={{ "--zone-accent": region.color }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + index * 0.07, duration: 0.4 }}
                onMouseEnter={() => onHoverRegion?.(id)}
                onMouseLeave={() => onHoverRegion?.(null)}
                onClick={() => onSelectRegion?.(id)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    onSelectRegion?.(id);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`${region.zone.nom} — ${region.ville} — voir le détail`}
              >
                <div className="togo-overview__zone-num" aria-hidden="true">
                  <span className="togo-overview__zone-index">{index + 1}</span>
                </div>

                <div className="togo-overview__zone-content">
                  <h4 className="togo-overview__zone-name">{region.zone.nom}</h4>
                  <p className="togo-overview__zone-lieu">{region.ville}</p>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </section>
    </motion.article>
  );
}
