import { motion } from "framer-motion";
import { Map, Users, Landmark, Target, ChevronRight } from "lucide-react";
import { togoOverview } from "../data/togoOverview";


////////////////////////////////////////////////////
//         Composant TogoOverview                 //
////////////////////////////////////////////////////

export default function TogoOverview() {
  return (
    <motion.div
      className="side-panel side-panel--overview"
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="side-panel-badge">
        <Map size={18} aria-hidden />
        <span>Vue nationale</span>
      </div>

      <h2 className="side-panel-title">{togoOverview.title}</h2>
      <p className="side-panel-subtitle">{togoOverview.subtitle}</p>
      <p className="side-panel-description">{togoOverview.description}</p>

      <div className="region-stats">
        {togoOverview.chiffres.map((item) => (
          <div key={item.label} className="stat-card">
            <span className="stat-label">{item.label}</span>
            <span className="stat-value">{item.value}</span>
          </div>
        ))}
      </div>

      <div className="region-section">
        <h3 className="section-title">
          <Target size={18} aria-hidden />
          Axes stratégiques
        </h3>
        <ul className="projets-list overview-axes">
          {togoOverview.axes.map((axe) => (
            <li key={axe}>{axe}</li>
          ))}
        </ul>
      </div>

      <div className="region-section">
        <h3 className="section-title">
          <Landmark size={18} aria-hidden />
          Les 5 régions
        </h3>
        <ul className="regions-overview-list">
          {togoOverview.regionsList.map((name) => (
            <li key={name}>
              <ChevronRight size={14} aria-hidden />
              {name}
            </li>
          ))}
        </ul>
      </div>

      <p className="side-panel-hint">
        <Users size={16} aria-hidden />
        Sélectionnez une région sur la carte pour afficher ses zones économiques
      </p>
    </motion.div>
  );
}
