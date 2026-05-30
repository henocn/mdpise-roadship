import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { MapPin, Factory, X, ChevronRight, ArrowLeft } from "lucide-react";
import { regionsData } from "../data/regions";
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


// Formate le libellé « nom de zone à ville » avec la ville en vert gras
function ZoneTitle({ zoneNom, ville, className, style, ...motionProps }) {
  return (
    <motion.h2 className={className} style={style} {...motionProps}>
      {zoneNom} à <strong className="region-card__ville-value">{ville}</strong>
    </motion.h2>
  );
}


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
  const [step, setStep] = useState(0);
  const region = regionsData[regionId];
  if (!region) return null;

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
            <ZoneTitle
              zoneNom={region.zone.nom}
              ville={region.ville}
              className="region-card__name region-card__name--center"
              style={{ "--region-accent": region.color }}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.35 }}
            />

            <motion.img
              src={secondSvgMap[regionId]}
              alt={`${region.zone.nom} à ${region.ville}`}
              className="region-card__full-map"
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            />

            <motion.button
              type="button"
              className="region-card__next-btn"
              onClick={() => setStep(1)}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              aria-label="Voir les détails"
              title="Voir les détails"
            >
              <ChevronRight size={22} />
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
                  {region.zone.nom} à{" "}
                  <strong className="region-card__ville-value">{region.ville}</strong>
                </h2>

                <ZoneLieu ville={region.ville} />

                <div className="region-card__zone">
                  <div className="region-card__zone-header">
                    <Factory size={16} aria-hidden />
                    <span className="region-card__zone-type">{region.zone.type}</span>
                    <span className={`region-card__zone-statut region-card__zone-statut--${region.zone.statut.toLowerCase().replace(/ /g, "-")}`}>
                      {region.zone.statut}
                    </span>
                  </div>
                  <p className="region-card__zone-desc">{region.zone.description}</p>
                </div>
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
                      alt={`${region.zone.nom} à ${region.ville} — illustration ${idx + 1}`}
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
