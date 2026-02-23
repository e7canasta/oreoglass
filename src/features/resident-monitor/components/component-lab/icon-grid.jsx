const IconGrid = ({ items }) => (
  <div className="grid grid-cols-3 gap-2">
    {items.map((item) => (
      <div
        key={item.label}
        className="flex min-h-[82px] flex-col items-center justify-center gap-2 rounded-[10px] border p-2.5 [border-color:var(--lab-surface-border)] [background:var(--lab-surface-bg)]"
      >
        <div className="flex min-h-7 items-center justify-center">
          {item.node}
        </div>
        <span className="text-center text-[10px] [color:var(--lab-surface-copy)]">{item.label}</span>
      </div>
    ))}
  </div>
);

export { IconGrid };
