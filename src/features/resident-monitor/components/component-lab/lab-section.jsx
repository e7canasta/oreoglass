const LabSection = ({ title, children }) => (
  <section className="rounded-[var(--lab-section-radius)] border [padding:var(--lab-section-padding)] [border-color:var(--lab-section-border)] [background:var(--lab-section-bg)]">
    <h2 className="mb-3 mt-0 text-[length:var(--lab-section-title-size)] font-bold tracking-[-0.2px] [color:var(--lab-section-title)]">{title}</h2>
    {children}
  </section>
);

export { LabSection };
