const LabSection = ({ title, children }) => (
  <section className="rounded-2xl border p-[14px] [border-color:var(--lab-section-border)] [background:var(--lab-section-bg)]">
    <h2 className="mb-3 mt-0 text-base font-bold tracking-[-0.2px] [color:var(--lab-section-title)]">{title}</h2>
    {children}
  </section>
);

export { LabSection };
