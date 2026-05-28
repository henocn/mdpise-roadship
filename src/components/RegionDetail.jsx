import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { MapPin, Factory, X } from "lucide-react";
import { regionsData } from "../data/regions";
import { getRegionZoomConfig } from "../data/togoRegionPaths";
import "swiper/css";
import "swiper/css/pagination";


////////////////////////////////////////////////////
//          Composant RegionDetail                //
////////////////////////////////////////////////////

export default function RegionDetail({ regionId, onClose }) {
  const region = regionsData[regionId];
  if (!region) return null;

  const zoomConfig = getRegionZoomConfig(regionId);

  return (
    <motion.div
      className="region-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      key={regionId}
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

      <div className="region-card__top">
        <div className="region-card__info">
          <motion.h2
            className="region-card__name"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            style={{ "--region-accent": region.color }}
          >
            {region.name}
          </motion.h2>

          <motion.div
            className="region-card__ville"
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.35 }}
          >
            <MapPin size={16} aria-hidden />
            <span>{region.ville}</span>
          </motion.div>

          <motion.div
            className="region-card__zone"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.4 }}
          >
            <div className="region-card__zone-header">
              <Factory size={16} aria-hidden />
              <span className="region-card__zone-type">{region.zone.type}</span>
              <span className={`region-card__zone-statut region-card__zone-statut--${region.zone.statut.toLowerCase().replace(/ /g, "-")}`}>
                {region.zone.statut}
              </span>
            </div>
            <h3 className="region-card__zone-name">{region.zone.nom}</h3>
            <p className="region-card__zone-desc">{region.zone.description}</p>
          </motion.div>
        </div>

        <motion.div
          className="region-card__map"
          initial={{ opacity: 0, scale: 0.75, rotateY: -20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
        >
          <svg
            viewBox={zoomConfig.viewBox}
            className="region-card__map-svg"
            aria-label={region.name}
          >
            <path
              d={zoomConfig.d}
              style={{ "--region-color": region.color }}
              className="region-card__map-path"
            />
          </svg>
        </motion.div>
      </div>

      <motion.div
        className="region-card__carousel"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.4 }}
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={12}
          slidesPerView={2}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            600: { slidesPerView: 2 },
          }}
          className="region-card__swiper"
        >
          {region.images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={src}
                alt={`${region.zone.nom} — illustration ${idx + 1}`}
                className="region-card__slide-img"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <motion.div
        className="region-card__atouts"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55, duration: 0.35 }}
      >
        {region.atouts.map((atout) => (
          <span key={atout} className="region-card__atout-tag">{atout}</span>
        ))}
      </motion.div>
    </motion.div>
  );
}
