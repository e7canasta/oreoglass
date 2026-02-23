const ComparisonPane = ({ title, subtitle, tone, children }) => (
  <section className={`lab-compare-pane lab-compare-pane-${tone}`}>
    <header className="lab-compare-pane-header">
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </header>
    <div className="lab-compare-pane-body">{children}</div>
  </section>
);

const ComparisonSplit = ({ activeItem, modernPreview, legacyPreview }) => (
  <div className="lab-compare-split">
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
