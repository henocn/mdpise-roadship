import { motion } from "framer-motion";
import logoMinistere from "../assets/logo.png";


////////////////////////////////////////////////////
//             Composant Header                   //
////////////////////////////////////////////////////

export default function Header() {
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
      </div>
    </motion.header>
  );
}
