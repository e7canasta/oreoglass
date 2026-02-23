const containerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,minmax(0,1fr))",
  gap: 8,
};

const tileStyle = {
  background: "#10131a",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 10,
  padding: 10,
  minHeight: 82,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
};

const labelStyle = {
  color: "rgba(255,255,255,0.75)",
  fontSize: 10,
  textAlign: "center",
};

const IconGrid = ({ items }) => (
  <div style={containerStyle}>
    {items.map((item) => (
      <div key={item.label} style={tileStyle}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: 28 }}>
          {item.node}
        </div>
        <span style={labelStyle}>{item.label}</span>
      </div>
    ))}
  </div>
);

export { IconGrid };
