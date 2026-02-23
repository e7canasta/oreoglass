import { cn } from "@/lib/utils";

const ComparisonPane = ({ title, subtitle, tone, children }) => (
  <section
    className={cn(
      "grid gap-2.5 rounded-[14px] border p-2.5",
      "[border-color:var(--lab-pane-border)] [background:var(--lab-pane-bg)]",
      tone === "modern" && "[border-color:var(--lab-pane-modern-border)] [background:var(--lab-pane-modern-bg)]",
      tone === "legacy" && "[border-color:var(--lab-pane-legacy-border)] [background:var(--lab-pane-legacy-bg)]"
    )}
  >
    <header>
      <h3 className="m-0 text-sm [color:var(--lab-pane-title)]">{title}</h3>
      <p className="mb-0 mt-1 text-[11px] [color:var(--lab-pane-copy)]">{subtitle}</p>
    </header>
    <div className="min-h-[250px] overflow-hidden rounded-xl border [border-color:var(--lab-pane-body-border)] [background:var(--lab-pane-body-bg)] min-[900px]:min-h-[280px]">
      {children}
    </div>
  </section>
);

const ComparisonSplit = ({ activeItem, modernPreview, legacyPreview }) => (
  <div className="flex flex-col gap-2.5">
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
