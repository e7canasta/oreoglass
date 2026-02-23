import "./icon-grid.css";

const IconGrid = ({ items }) => (
  <div className="lab-icon-grid">
    {items.map((item) => (
      <div key={item.label} className="lab-icon-grid-tile">
        <div className="lab-icon-grid-icon-wrap">
          {item.node}
        </div>
        <span className="lab-icon-grid-label">{item.label}</span>
      </div>
    ))}
  </div>
);

export { IconGrid };
