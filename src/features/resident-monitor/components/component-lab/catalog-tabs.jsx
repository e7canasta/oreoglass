import { cn } from "@/lib/utils";

const CatalogTabs = ({ items, activeId, onChange }) => (
  <div className="flex gap-2 overflow-x-auto pb-0.5" role="tablist" aria-label="Component catalog selector">
    {items.map((item) => {
      const isActive = item.id === activeId;
      return (
        <button
          key={item.id}
          role="tab"
          type="button"
          aria-selected={isActive}
          onClick={() => onChange(item.id)}
          className={cn(
            "grid min-w-[148px] cursor-pointer gap-1 rounded-[14px] border px-3 py-2.5 text-left transition-colors",
            "[border-color:var(--lab-tab-border)] [background:var(--lab-tab-bg)] text-[var(--lab-tab-text)]",
            isActive && "[border-color:var(--lab-tab-active-border)] [background:var(--lab-tab-active-bg)]"
          )}
        >
          <span className="text-[13px] font-bold [color:var(--lab-tab-title)]">{item.label}</span>
          <span className="text-[11px] leading-[1.3] [color:var(--lab-tab-description)]">{item.description}</span>
        </button>
      );
    })}
  </div>
);

export { CatalogTabs };
