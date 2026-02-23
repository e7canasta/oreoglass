import { useMemo, useState } from "react";

import {
  COMPONENT_CATALOG_ITEMS,
  CatalogTabs,
  ComparisonSplit,
  FoundationShowcase,
  LegacyPreview,
  ModernPreview,
} from "../components/component-lab/index.js";
import { IconArrowLeft, IconThemeMoon, IconThemeSun } from "../components/ui-icons/index.js";
import "../themes/component-lab-themes.css";
import "./component-lab-screen.css";

const ComponentLabScreen = ({ onBack }) => {
  const [isLightMode, setIsLightMode] = useState(false);
  const [activeItemId, setActiveItemId] = useState(COMPONENT_CATALOG_ITEMS[0].id);
  const [legacySheetOpen, setLegacySheetOpen] = useState(false);
  const [modernSheetOpen, setModernSheetOpen] = useState(false);
  const [legacyClassification, setLegacyClassification] = useState("Fall with injury");
  const [modernClassification, setModernClassification] = useState("fall_with_injury");

  const activeItem = useMemo(
    () => COMPONENT_CATALOG_ITEMS.find((item) => item.id === activeItemId) ?? COMPONENT_CATALOG_ITEMS[0],
    [activeItemId],
  );

  const handleCatalogChange = (nextItemId) => {
    setActiveItemId(nextItemId);
    setLegacySheetOpen(false);
    setModernSheetOpen(false);
  };

  return (
    <div className="lab-screen" data-mode={isLightMode ? "light" : "dark"}>
      <div className="lab-header-spacer" />

      <header className="lab-header">
        <button type="button" onClick={onBack} className="lab-back-button">
          <IconArrowLeft />
          <span>Component Lab</span>
        </button>
        <span className="lab-header-badge">Design System · Claude</span>
      </header>

      <button
        type="button"
        className="lab-mode-fab"
        onClick={() => setIsLightMode((prev) => !prev)}
        title={isLightMode ? "Cambiar a modo noche" : "Cambiar a modo dia"}
        aria-label={isLightMode ? "Cambiar a modo noche" : "Cambiar a modo dia"}
      >
        {isLightMode ? (
          <IconThemeMoon stroke="var(--lab-mode-icon)" />
        ) : (
          <IconThemeSun stroke="var(--lab-mode-icon)" />
        )}
      </button>

      <div className="lab-content">
        <section className="lab-catalog-shell">
          <div>
            <h2>A/B Catalog</h2>
            <p>
              Compara arriba/abajo el impacto entre componentes legacy y la base
              modernizada para migrar con menor riesgo.
            </p>
          </div>

          <CatalogTabs
            items={COMPONENT_CATALOG_ITEMS}
            activeId={activeItemId}
            onChange={handleCatalogChange}
          />

          <ComparisonSplit
            activeItem={activeItem}
            modernPreview={
              <ModernPreview
                activeItemId={activeItemId}
                isSheetOpen={modernSheetOpen}
                onOpenSheet={() => setModernSheetOpen(true)}
                onCloseSheet={() => setModernSheetOpen(false)}
                selectedClassification={modernClassification}
                onSelectClassification={setModernClassification}
              />
            }
            legacyPreview={
              <LegacyPreview
                activeItemId={activeItemId}
                isSheetOpen={legacySheetOpen}
                onOpenSheet={() => setLegacySheetOpen(true)}
                onCloseSheet={() => setLegacySheetOpen(false)}
                selectedClassification={legacyClassification}
                onSelectClassification={setLegacyClassification}
              />
            }
          />
        </section>

        <FoundationShowcase />
      </div>
    </div>
  );
};

export { ComponentLabScreen };
