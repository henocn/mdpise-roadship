import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import TogoMap from "./components/TogoMap";
import TogoOverview from "./components/TogoOverview";
import RegionDetail from "./components/RegionDetail";
import "./App.css";


////////////////////////////////////////////////////
//              Composant App                      //
////////////////////////////////////////////////////

function App() {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [hoveredRegion, setHoveredRegion] = useState(null);

  // Ouvre le détail d'une région et réinitialise le survol carte ↔ panneau
  function handleSelectRegion(regionId) {
    setHoveredRegion(null);
    setSelectedRegion(regionId);
  }

  // Ferme le détail et revient à la vue nationale
  function handleCloseRegion() {
    setSelectedRegion(null);
    setHoveredRegion(null);
  }

  return (
    <div className="app">
      <Header />
      <div className="top-banderole" role="presentation" aria-hidden="true">
        <span className="top-banderole__stripe top-banderole__stripe--jaune" />
        <span className="top-banderole__stripe top-banderole__stripe--rouge" />
        <span className="top-banderole__stripe top-banderole__stripe--vert" />
        <span className="top-banderole__stripe top-banderole__stripe--blanc" />
        <span className="top-banderole__stripe top-banderole__stripe--jaune" />
        <span className="top-banderole__stripe top-banderole__stripe--rouge" />
        <span className="top-banderole__stripe top-banderole__stripe--vert" />
        <span className="top-banderole__stripe top-banderole__stripe--blanc" />
      </div>

      <main className="app-main">
        <section className="map-section" aria-label="Carte du Togo">
          <TogoMap
            selectedRegion={selectedRegion}
            hoveredRegion={hoveredRegion}
            onSelectRegion={handleSelectRegion}
            onHoverRegion={setHoveredRegion}
          />
        </section>

        <section className="detail-section" aria-label="Informations">
          <AnimatePresence mode="wait">
            {selectedRegion ? (
              <RegionDetail
                key={selectedRegion}
                regionId={selectedRegion}
                onClose={handleCloseRegion}
              />
            ) : (
              <TogoOverview
                key="overview"
                hoveredRegion={hoveredRegion}
                onHoverRegion={setHoveredRegion}
                onSelectRegion={handleSelectRegion}
              />
            )}
          </AnimatePresence>
        </section>
      </main>

      <footer className="app-footer">
        <p className="footer-confidential">
          Document confidentiel — Usage institutionnel uniquement
        </p>
      </footer>
    </div>
  );
}

export default App;
