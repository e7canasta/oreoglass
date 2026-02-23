import { cn } from "@/lib/utils";

const FallClipTimeline = ({ events }) => (
  <div className="pl-0">
    {events.map((ev, i) => (
      <div key={i} className="relative flex items-start">
        <div className="flex w-11 shrink-0 flex-col items-center">
          {i > 0 && (
            <div
              className={cn(
                "mb-[-2px] h-5 w-0.5 [background:var(--rm-fall-timeline-rail)]",
                i === events.length - 1 && "[background:var(--rm-fall-timeline-success)]"
              )}
            />
          )}

          <div
            className={cn(
              "z-[1] size-3 rounded-full",
              ev.dotTone === "success"
                ? "[background:var(--rm-fall-timeline-success)] [box-shadow:var(--rm-fall-timeline-success-glow)]"
                : "[background:var(--rm-fall-timeline-critical-dot)] [box-shadow:var(--rm-fall-timeline-critical-glow)]"
            )}
          />

          {!ev.isLast && <div className="min-h-[22px] w-0.5 flex-1 [background:var(--rm-fall-timeline-rail)]" />}
          {ev.isLast && (
            <>
              <div className="h-4 w-0.5 [background:var(--rm-fall-timeline-success)]" />
              <div className="size-3 rounded-full [background:var(--rm-fall-timeline-success)] [box-shadow:var(--rm-fall-timeline-success-glow)]" />
            </>
          )}
        </div>

        <div className={cn("flex min-w-0 flex-1 items-center gap-3 pb-5", ev.isLast && "pb-1.5")}>
          <span className="min-w-[38px] text-[length:var(--rm-fs-meta)] font-medium tabular-nums text-[var(--rm-fall-timeline-time)]">
            {ev.time}
          </span>
          {ev.icon}
          <span className="text-[length:var(--rm-fs-body)] font-semibold leading-[1.22] tracking-[-0.1px] text-[var(--rm-fall-timeline-label)]">
            {ev.label}
          </span>
        </div>
      </div>
    ))}
  </div>
);

export { FallClipTimeline };
