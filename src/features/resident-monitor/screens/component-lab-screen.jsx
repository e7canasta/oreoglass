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
    <div
      className="lab-screen absolute inset-0 flex flex-col bg-[var(--lab-bg)] [font-family:'SF_Pro_Display',system-ui,-apple-system] [z-index:var(--lab-z-screen)]"
      data-mode={isLightMode ? "light" : "dark"}
      style={{ animation: "slideInRight 0.24s cubic-bezier(0.32, 0.72, 0, 1)" }}
    >
      <div className="shrink-0 [height:var(--lab-screen-top-spacer)]" />

      <header className="flex shrink-0 items-center justify-between px-3.5 pb-3">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 bg-transparent p-0 [color:var(--lab-header-text)]"
        >
          <IconArrowLeft />
          <span className="text-[length:var(--lab-header-title-size)] font-bold">Component Lab</span>
        </button>
        <span className="text-[length:var(--lab-header-meta-size)] font-semibold [color:var(--lab-header-muted)]">Design System · Claude</span>
      </header>

      <button
        type="button"
        className="absolute [right:var(--lab-mode-fab-right)] [top:calc(var(--lab-mode-fab-top)+var(--lab-safe-top))] [z-index:var(--lab-z-floating)] flex [width:var(--lab-mode-fab-size)] [height:var(--lab-mode-fab-size)] items-center justify-center rounded-[var(--lab-mode-fab-radius)] border [border-color:var(--lab-mode-fab-border)] [background:var(--lab-mode-fab-bg)] [box-shadow:var(--lab-mode-fab-shadow)] [backdrop-filter:blur(16px)_saturate(1.12)] transition-all active:scale-95"
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

      <div className="flex flex-1 flex-col [row-gap:var(--lab-screen-content-gap)] overflow-y-auto [padding-left:var(--lab-screen-content-padding-x)] [padding-right:var(--lab-screen-content-padding-x)] [padding-bottom:var(--lab-screen-content-padding-bottom)]">
        <section className="flex flex-col [row-gap:var(--lab-shell-gap)] rounded-[var(--lab-shell-radius)] border [border-color:var(--lab-shell-border)] [background:var(--lab-shell-bg)] [padding:var(--lab-shell-padding)]">
          <div>
            <h2 className="m-0 text-[length:var(--lab-shell-title-size)] font-bold tracking-[-0.2px] [color:var(--lab-shell-title)]">A/B Catalog</h2>
            <p className="mb-0 mt-1 text-[length:var(--lab-shell-copy-size)] [color:var(--lab-shell-copy)]">
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
