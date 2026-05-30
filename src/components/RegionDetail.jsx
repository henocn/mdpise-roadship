import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { MapPin, X, BadgeCheck, Target } from "lucide-react";
import { regionsData } from "../data/regions";
import "swiper/css";
import "swiper/css/pagination";


// Affiche la ligne « Lieu à ville » avec la ville en vert gras
function ZoneLieu({ ville }) {
  return (
    <div className="region-card__ville">
      <MapPin size={16} aria-hidden />
      <span className="region-card__ville-label">Lieu à</span>
      <strong className="region-card__ville-value">{ville}</strong>
    </div>
  );
}


////////////////////////////////////////////////////
//          Composant RegionDetail                //
////////////////////////////////////////////////////

export default function RegionDetail({ regionId, onClose }) {
  const region = regionsData[regionId];
  if (!region) return null;

  const atouts = region.atouts.slice(0, 5);

  return (
    <motion.div
      className="region-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      key={regionId}
      style={{ "--region-accent": region.color }}
    >
      {onClose && (
        <button
          type="button"
          className="region-card__close"
          onClick={onClose}
          aria-label="Fermer"
        >
          <X size={18} />
        </button>
      )}

      <div className="region-card__content">
        <motion.header
          className="region-card__header"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.4 }}
        >
          <h2 className="region-card__name">
            {region.zone.nom} à{" "}
            <strong className="region-card__ville-value">{region.ville}</strong>
          </h2>
          <ZoneLieu ville={region.ville} />
          <p className="region-card__intro">{region.zone.description}</p>
        </motion.header>

        <motion.section
          className="region-card__panel region-card__panel--atouts"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.4 }}
        >
          <div className="region-card__panel-head">
            <BadgeCheck size={18} aria-hidden />
            <h3 className="region-card__panel-title">Atouts</h3>
          </div>
          <ul className="region-card__atout-list">
            {atouts.map((atout) => (
              <li key={atout} className="region-card__atout-item">
                {atout}
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          className="region-card__panel region-card__panel--vision"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <div className="region-card__panel-head">
            <Target size={18} aria-hidden />
            <h3 className="region-card__panel-title">Vision</h3>
          </div>
          <p className="region-card__vision-text">{region.vision}</p>
        </motion.section>

        <motion.section
          className="region-card__carousel-wrap"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.45 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={16}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="region-card__swiper"
          >
            {region.images.map((src, idx) => (
              <SwiperSlide key={idx}>
                <figure className="region-card__slide">
                  <img
                    src={src}
                    alt={`${region.zone.nom} à ${region.ville} — illustration ${idx + 1}`}
                    className="region-card__slide-img"
                  />
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.section>
      </div>
    </motion.div>
  );
}
