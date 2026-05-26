import { motion } from "framer-motion";
import {
  MapPin,
  Users,
  Ruler,
  Building2,
  Sparkles,
  ListChecks,
  X,
} from "lucide-react";
import { regionsData } from "../data/regions";


////////////////////////////////////////////////////
//          Composant RegionDetail                //
////////////////////////////////////////////////////

export default function RegionDetail({ regionId, onClose }) {
  const region = regionsData[regionId];
  if (!region) return null;

  return (
    <motion.div
      className="side-panel side-panel--region"
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 24 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      key={regionId}
    >
      <div className="side-panel-top">
        <div className="region-detail-header">
          <div
            className="region-color-bar"
            style={{ backgroundColor: region.color }}
          />
          <div>
            <h2 className="side-panel-title">{region.name}</h2>
            <p className="region-detail-capital">
              <MapPin size={14} aria-hidden />
              Chef-lieu : <strong>{region.capital}</strong>
            </p>
          </div>
        </div>

        {onClose && (
          <button
            type="button"
            className="btn-close-panel"
            onClick={onClose}
            aria-label="Revenir à la vue nationale"
          >
            <X size={18} />
          </button>
        )}
      </div>

      <p className="side-panel-description">{region.description}</p>

      <div className="region-stats">
        <div className="stat-card">
          <Users size={16} className="stat-icon" aria-hidden />
          <span className="stat-label">Population</span>
          <span className="stat-value">{region.population}</span>
        </div>
        <div className="stat-card">
          <Ruler size={16} className="stat-icon" aria-hidden />
          <span className="stat-label">Superficie</span>
          <span className="stat-value">{region.superficie}</span>
        </div>
      </div>

      <div className="region-section">
        <h3 className="section-title">
          <Building2 size={18} aria-hidden />
          Zones économiques
        </h3>
        {region.zones.map((zone, idx) => (
          <div key={idx} className="zone-card">
            <div className="zone-card-header">
              <span className="zone-type-badge">{zone.type}</span>
              <span
                className={`zone-statut zone-statut--${zone.statut.toLowerCase().replace(/ /g, "-")}`}
              >
                {zone.statut}
              </span>
            </div>
            <h4 className="zone-name">{zone.nom}</h4>
            <p className="zone-commune">
              <MapPin size={14} aria-hidden />
              Commune : {zone.commune}
            </p>
            <p className="zone-description">{zone.description}</p>
          </div>
        ))}
      </div>

      <div className="region-section">
        <h3 className="section-title">
          <Sparkles size={18} aria-hidden />
          Atouts stratégiques
        </h3>
        <div className="atouts-list">
          {region.atouts.map((atout) => (
            <span key={atout} className="atout-tag">
              {atout}
            </span>
          ))}
        </div>
      </div>

      <div className="region-section">
        <h3 className="section-title">
          <ListChecks size={18} aria-hidden />
          Projets phares
        </h3>
        <ul className="projets-list">
          {region.projetsPhares.map((projet) => (
            <li key={projet}>{projet}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
