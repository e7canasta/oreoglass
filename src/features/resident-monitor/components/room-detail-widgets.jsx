import { cn } from "@/lib/utils";

const SleepChart = () => {
  const bars = [
    { x: 2, w: 3 },
    { x: 6, w: 8 },
    { x: 15, w: 5 },
    { x: 22, w: 10 },
    { x: 33, w: 4 },
    { x: 38, w: 3 },
    { x: 42, w: 6 },
    { x: 49, w: 4 },
    { x: 54, w: 5 },
    { x: 60, w: 8 },
    { x: 69, w: 4 },
    { x: 74, w: 5 },
    { x: 80, w: 3 },
    { x: 85, w: 8 },
  ];

  return (
    <div className="rounded-xl border px-[14px] pb-2.5 pt-3 [background:var(--rm-room-detail-card-bg)] [border-color:var(--rm-room-detail-card-border)]">
      <div className="mb-2.5 flex flex-wrap gap-3.5">
        {[["calm", "Calm: 12 hours"], ["restless", "Restless: 0 hours"]].map(([tone, label]) => (
          <div key={label} className="flex items-center gap-[5px]">
            <div
              className={cn(
                "size-2.5 rounded-full",
                tone === "calm"
                  ? "[background:var(--rm-room-detail-sleep-legend-calm)]"
                  : "[background:var(--rm-room-detail-sleep-legend-restless)]"
              )}
            />
            <span className="text-[length:var(--rm-fs-caption)] leading-[1.2] text-[var(--rm-room-detail-sleep-legend-label)]">
              {label}
            </span>
          </div>
        ))}
      </div>
      <div className="relative mb-1.5 h-[52px]">
        <svg width="100%" height="52" viewBox="0 0 100 52" preserveAspectRatio="none">
          {bars.map((b, i) => (
            <rect
              key={i}
              x={`${b.x}%`}
              y="0"
              width={`${b.w}%`}
              height="52"
              fill={i % 5 === 2 ? "var(--rm-room-detail-sleep-bar-alt)" : "var(--rm-room-detail-sleep-bar)"}
              rx="1"
              opacity={0.85 + (i % 3) * 0.05}
            />
          ))}
          <rect x="94%" y="0" width="2" height="52" fill="var(--rm-room-detail-sleep-axis-now)" />
        </svg>
      </div>
      <div className="flex justify-between gap-1.5">
        {["02", "06", "10", "Now"].map((t, i) => (
          <span
            key={i}
            className={cn(
              "text-[length:var(--rm-fs-micro)] font-normal",
              i === 3
                ? "font-bold [color:var(--rm-room-detail-sleep-axis-now)]"
                : "text-[var(--rm-room-detail-sleep-axis)]"
            )}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

const ActivityTile = ({ time, icon, isCurrent, duration, isAlarm, onClick }) => {
  const isInteractive = typeof onClick === "function";
  const TileElement = isInteractive ? "button" : "div";
  const className = cn(
    "relative flex min-h-[72px] min-w-[68px] flex-col items-center gap-1 rounded-xl border px-1.5 py-2 [background:var(--rm-room-detail-tile-bg)] border-transparent",
    isCurrent && "min-w-[90px] [background:var(--rm-room-detail-tile-current-bg)] [border-color:var(--rm-room-detail-tile-current-border)]",
    isAlarm && "[background:var(--rm-room-detail-tile-alarm-bg)] [border-color:var(--rm-room-detail-tile-alarm-border)] [box-shadow:var(--rm-room-detail-tile-alarm-shadow)]",
    isInteractive &&
      "cursor-pointer transition-transform active:scale-[0.992] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-room-detail-focus)]"
  );

  return (
    <TileElement
      onClick={onClick}
      type={isInteractive ? "button" : undefined}
      className={className}
      aria-label={isInteractive ? `Open activity event at ${time}` : undefined}
    >
      {isCurrent && !isAlarm && (
        <div className="absolute inset-x-0 top-0 rounded-t-xl py-[3px] text-center [background:var(--rm-room-detail-tile-current-strip-bg)]">
          <span className="text-[length:var(--rm-fs-micro)] font-semibold [color:var(--rm-room-detail-tile-current-strip-text)]">
            {time} - now
          </span>
        </div>
      )}

      {!isCurrent && <span className="text-[length:var(--rm-fs-caption)] text-[var(--rm-room-detail-tile-time)]">{time}</span>}

      <div className={cn("flex h-[42px] items-center justify-center", isCurrent && !isAlarm && "mt-[14px]")}>
        {icon}
      </div>

      {isCurrent && duration && !isAlarm && (
        <span className="text-[length:var(--rm-fs-meta)] font-bold leading-[1.2] text-[var(--rm-room-detail-text)]">
          {duration}
        </span>
      )}
      {isAlarm && (
        <div className="size-2.5 rounded-full [background:var(--rm-overview-dot-orange-bg)] [box-shadow:var(--rm-overview-dot-orange-shadow)]" />
      )}
    </TileElement>
  );
};

export { ActivityTile, SleepChart };
