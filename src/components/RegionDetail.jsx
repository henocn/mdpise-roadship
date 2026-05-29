import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { MapPin, Factory, X, ChevronRight, ArrowLeft } from "lucide-react";
import { regionsData } from "../data/regions";
import { getRegionZoomConfig } from "../data/togoRegionPaths";
import "swiper/css";
import "swiper/css/pagination";

import secondCentre from "../assets/svg/second-centre.svg";
import secondKara from "../assets/svg/second-kara.svg";
import secondMaritime from "../assets/svg/second-maritime.svg";
import secondPlateaux from "../assets/svg/second-plateaux.svg";
import secondSavane from "../assets/svg/second-savane.svg";


const secondSvgMap = {
  centre: secondCentre,
  kara: secondKara,
  maritime: secondMaritime,
  plateaux: secondPlateaux,
  savanes: secondSavane,
};


////////////////////////////////////////////////////
//          Composant RegionDetail                //
////////////////////////////////////////////////////

export default function RegionDetail({ regionId, onClose }) {
  const [step, setStep] = useState(0);
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

      <AnimatePresence mode="wait">
        {step === 0 ? (
          <motion.div
            key="step-map"
            className="region-card__step-map"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
          >
            <motion.h2
              className="region-card__name region-card__name--center"
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.35 }}
              style={{ "--region-accent": region.color }}
            >
              {region.name}
            </motion.h2>

            <motion.img
              src={secondSvgMap[regionId]}
              alt={region.name}
              className="region-card__full-map"
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
            />

            <motion.button
              type="button"
              className="region-card__next-btn"
              onClick={() => setStep(1)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              Voir les détails
              <ChevronRight size={18} />
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="step-details"
            className="region-card__step-details"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
          >
            <button
              type="button"
              className="region-card__back-btn"
              onClick={() => setStep(0)}
            >
              <ArrowLeft size={16} />
              Carte
            </button>

            <div className="region-card__top">
              <div className="region-card__info">
                <h2
                  className="region-card__name"
                  style={{ "--region-accent": region.color }}
                >
                  {region.name}
                </h2>

                <div className="region-card__ville">
                  <MapPin size={16} aria-hidden />
                  <span>{region.ville}</span>
                </div>

                <div className="region-card__zone">
                  <div className="region-card__zone-header">
                    <Factory size={16} aria-hidden />
                    <span className="region-card__zone-type">{region.zone.type}</span>
                    <span className={`region-card__zone-statut region-card__zone-statut--${region.zone.statut.toLowerCase().replace(/ /g, "-")}`}>
                      {region.zone.statut}
                    </span>
                  </div>
                  <h3 className="region-card__zone-name">{region.zone.nom}</h3>
                  <p className="region-card__zone-desc">{region.zone.description}</p>
                </div>
              </div>

              <div className="region-card__map">
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
              </div>
            </div>

            <div className="region-card__carousel">
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
            </div>

            <div className="region-card__atouts">
              {region.atouts.map((atout) => (
                <span key={atout} className="region-card__atout-tag">{atout}</span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
