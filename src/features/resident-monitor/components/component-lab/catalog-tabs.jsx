const CatalogTabs = ({ items, activeId, onChange }) => (
  <div className="lab-catalog-tabs" role="tablist" aria-label="Component catalog selector">
    {items.map((item) => {
      const isActive = item.id === activeId;
      return (
        <button
          key={item.id}
          role="tab"
          type="button"
          aria-selected={isActive}
          onClick={() => onChange(item.id)}
          className={isActive ? "lab-catalog-tab lab-catalog-tab-active" : "lab-catalog-tab"}
        >
          <span className="lab-catalog-tab-title">{item.label}</span>
          <span className="lab-catalog-tab-description">{item.description}</span>
        </button>
      );
    })}
  </div>
);

export { CatalogTabs };
