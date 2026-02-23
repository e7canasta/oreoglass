const sectionStyle = {
  background: "#181c24",
  borderRadius: 16,
  border: "1px solid rgba(255,255,255,0.08)",
  padding: 14,
};

const titleStyle = {
  margin: "0 0 12px",
  color: "white",
  fontSize: 16,
  fontWeight: "700",
  letterSpacing: -0.2,
};

const LabSection = ({ title, children }) => (
  <section style={sectionStyle}>
    <h2 style={titleStyle}>{title}</h2>
    {children}
  </section>
);

export { LabSection };
