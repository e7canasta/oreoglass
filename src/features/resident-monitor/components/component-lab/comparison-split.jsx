import { cn } from "@/lib/utils";

const ComparisonPane = ({ title, subtitle, tone, children }) => (
  <section
    className={cn(
      "grid rounded-[var(--lab-pane-radius)] border [padding:var(--lab-pane-padding)] [gap:var(--lab-pane-gap)]",
      "[border-color:var(--lab-pane-border)] [background:var(--lab-pane-bg)]",
      tone === "modern" && "[border-color:var(--lab-pane-modern-border)] [background:var(--lab-pane-modern-bg)]",
      tone === "legacy" && "[border-color:var(--lab-pane-legacy-border)] [background:var(--lab-pane-legacy-bg)]"
    )}
  >
    <header>
      <h3 className="m-0 text-[length:var(--lab-pane-title-size)] [color:var(--lab-pane-title)]">{title}</h3>
      <p className="mb-0 mt-1 text-[length:var(--lab-pane-copy-size)] [color:var(--lab-pane-copy)]">{subtitle}</p>
    </header>
    <div className="[min-height:var(--lab-pane-body-min-height)] overflow-hidden rounded-[var(--lab-surface-radius)] border [border-color:var(--lab-pane-body-border)] [background:var(--lab-pane-body-bg)] min-[900px]:[min-height:var(--lab-pane-body-min-height-desktop)]">
      {children}
    </div>
  </section>
);

const ComparisonSplit = ({ activeItem, modernPreview, legacyPreview }) => (
  <div className="flex flex-col [row-gap:var(--lab-pane-gap)]">
    <ComparisonPane
      title="Modern (shadcn-style)"
      subtitle={activeItem.modernNote}
      tone="modern"
    >
      {modernPreview}
    </ComparisonPane>

    <ComparisonPane
      title="Legacy actual"
      subtitle={activeItem.legacyNote}
      tone="legacy"
    >
      {legacyPreview}
    </ComparisonPane>
  </div>
);

export { ComparisonSplit };
