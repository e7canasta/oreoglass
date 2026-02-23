import { cn } from "@/lib/utils";

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

export { ActivityTile };
