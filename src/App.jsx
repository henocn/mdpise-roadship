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

  return (
    <div className="app">
      <Header />

      <main className="app-main">
        <section className="map-section" aria-label="Carte du Togo">
          <TogoMap
            selectedRegion={selectedRegion}
            onSelectRegion={setSelectedRegion}
          />
        </section>

        <section className="detail-section" aria-label="Informations">
          <AnimatePresence mode="wait">
            {selectedRegion ? (
              <RegionDetail
                key={selectedRegion}
                regionId={selectedRegion}
                onClose={() => setSelectedRegion(null)}
              />
            ) : (
              <TogoOverview key="overview" />
            )}
          </AnimatePresence>
        </section>
      </main>

      <footer className="app-footer">
        <p>
          Présentation au Président de la République — Feuille de route 2025–2030
        </p>
        <p className="footer-confidential">
          Document confidentiel — Usage institutionnel uniquement
        </p>
      </footer>
    </div>
  );
}

export default App;
