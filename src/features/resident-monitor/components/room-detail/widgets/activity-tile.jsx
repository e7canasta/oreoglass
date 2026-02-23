import { cn } from "@/lib/utils";

const ActivityTile = ({
  time,
  label,
  icon,
  isCurrent,
  duration,
  isAlarm,
  isLive,
  isReviewPending,
  onClick,
}) => {
  const isInteractive = typeof onClick === "function";
  const TileElement = isInteractive ? "button" : "div";
  const className = cn(
    "relative flex min-h-[78px] min-w-[72px] flex-col items-center gap-1 rounded-xl border px-1.5 py-2 [background:var(--rm-room-detail-tile-bg)] border-transparent transition-transform transition-colors duration-150",
    isCurrent && "min-w-[92px] [background:var(--rm-room-detail-tile-current-bg)] [border-color:var(--rm-room-detail-tile-current-border)]",
    isAlarm && "[background:var(--rm-room-detail-tile-alarm-bg)] [border-color:var(--rm-room-detail-tile-alarm-border)] [box-shadow:var(--rm-room-detail-tile-alarm-shadow)]",
    isLive &&
      "rm-activity-tile-live [border-color:var(--rm-room-detail-status-info-border)] [box-shadow:0_0_0_1px_var(--rm-room-detail-status-info-border)]",
    isReviewPending &&
      "rm-activity-tile-review [border-color:var(--rm-room-detail-status-alert-border)] [box-shadow:0_0_0_1px_var(--rm-room-detail-status-alert-border)]",
    isInteractive &&
      "cursor-pointer hover:[background:var(--rm-room-detail-pull-bg)] active:scale-[0.992] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-room-detail-focus)]"
  );

  return (
    <TileElement
      onClick={onClick}
      type={isInteractive ? "button" : undefined}
      className={className}
      aria-label={isInteractive ? `Open activity event at ${time}` : undefined}
    >
      {isLive && (
        <span className="pointer-events-none absolute right-1 top-1 rounded-full border px-1.5 py-0.5 text-[10px] font-bold leading-none [background:var(--rm-room-detail-status-info-bg)] [border-color:var(--rm-room-detail-status-info-border)] text-[var(--rm-room-detail-status-info-text)]">
          LIVE
        </span>
      )}
      {isReviewPending && (
        <span className="pointer-events-none absolute right-1 top-1 rounded-full border px-1.5 py-0.5 text-[10px] font-bold leading-none [background:var(--rm-room-detail-status-alert-bg)] [border-color:var(--rm-room-detail-status-alert-border)] text-[var(--rm-room-detail-status-alert-text)]">
          REVIEW
        </span>
      )}

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

      {label && (
        <span
          className={cn(
            "max-w-full truncate px-1 text-center text-[length:var(--rm-fs-micro)] font-medium",
            isAlarm
              ? "text-[var(--rm-room-detail-text)]"
              : isCurrent
                ? "text-[var(--rm-room-detail-muted)]"
                : "text-[var(--rm-room-detail-meta)]",
          )}
        >
          {label}
        </span>
      )}

      {isCurrent && duration && !isAlarm && (
        <span className="text-[length:var(--rm-fs-caption)] font-bold leading-[1.2] text-[var(--rm-room-detail-text)]">
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
