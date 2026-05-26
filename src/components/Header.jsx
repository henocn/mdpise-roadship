import { motion } from "framer-motion";
import logoMinistere from "../assets/logo.png";


const BANDEROLE_COULEURS = ["jaune", "rouge", "vert", "blanc"];


////////////////////////////////////////////////////
//             Composant Header                   //
////////////////////////////////////////////////////

export default function Header() {
  const banderoles = [...BANDEROLE_COULEURS, ...BANDEROLE_COULEURS];

  return (
    <motion.header
      className="app-header"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-inner">
        <img
          src={logoMinistere}
          alt="Armoiries de la République Togolaise"
          className="header-logo"
        />

        <div className="header-titles">
          <h1 className="header-ministry">
            Présentation des zones économiques
          </h1>
        </div>
      </div>

      <div className="header-banderole" role="presentation" aria-hidden="true">
        {banderoles.map((couleur, index) => (
          <span
            key={`${couleur}-${index}`}
            className={`header-banderole__stripe header-banderole__stripe--${couleur}`}
          />
        ))}
      </div>
    </motion.header>
  );
}
