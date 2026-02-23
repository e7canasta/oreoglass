import "./lab-section.css";

const LabSection = ({ title, children }) => (
  <section className="lab-section">
    <h2 className="lab-section-title">{title}</h2>
    {children}
  </section>
);

export { LabSection };
