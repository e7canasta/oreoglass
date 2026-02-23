const IconGrid = ({ items }) => (
  <div className="grid grid-cols-3 [gap:var(--lab-icon-grid-gap)]">
    {items.map((item) => (
      <div
        key={item.label}
        className="flex [min-height:var(--lab-icon-grid-card-min-height)] flex-col items-center justify-center gap-2 rounded-[var(--lab-icon-grid-card-radius)] border [padding:var(--lab-icon-grid-card-padding)] [border-color:var(--lab-surface-border)] [background:var(--lab-surface-bg)]"
      >
        <div className="flex min-h-7 items-center justify-center">
          {item.node}
        </div>
        <span className="text-center text-[length:var(--lab-icon-grid-label-size)] [color:var(--lab-surface-copy)]">{item.label}</span>
      </div>
    ))}
  </div>
);

export { IconGrid };
