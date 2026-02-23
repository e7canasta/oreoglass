import { cn } from "@/lib/utils";
import { IconArrowRight } from "../ui-icons/index.js";

const FallClipTimeline = ({ events, selectedIndex = 0, onSelectEvent }) => (
  <section className="mb-2 mt-[14px]">
    <div className="mb-3 flex items-baseline justify-between gap-2 px-1">
      <h3 className="text-[length:var(--rm-fs-body-strong)] font-bold tracking-[-0.15px] text-[var(--rm-fall-timeline-header)]">
        Event timeline
      </h3>
      <span className="text-[length:var(--rm-fs-meta)] text-[var(--rm-fall-timeline-subtitle)]">
        Tap any event
      </span>
    </div>

    <div>
      {events.map((ev, i) => {
        const isSelected = i === selectedIndex;
        const isInteractive = typeof onSelectEvent === "function";
        const EventElement = isInteractive ? "button" : "div";

        return (
          <div
            key={ev.id ?? i}
            className={cn(
              "relative flex items-stretch gap-2 [padding-bottom:var(--rm-fall-timeline-item-gap)]",
              ev.isLast && "[padding-bottom:var(--rm-fall-timeline-item-end-gap)]",
            )}
          >
            <div className="w-12 shrink-0 pt-2 text-right text-[length:var(--rm-fs-meta)] font-medium tabular-nums text-[var(--rm-fall-timeline-time)]">
              {ev.time}
            </div>

            <div className="relative flex w-4 shrink-0 flex-col items-center pt-3">
              <div
                className={cn(
                  "z-[1] size-2.5 rounded-full",
                  ev.dotTone === "success"
                    ? "[background:var(--rm-fall-timeline-success)] [box-shadow:var(--rm-fall-timeline-success-glow)]"
                    : "[background:var(--rm-fall-timeline-critical-dot)] [box-shadow:var(--rm-fall-timeline-critical-glow)]",
                )}
              />
              {!ev.isLast && <div className="mt-1.5 w-0.5 flex-1 [background:var(--rm-fall-timeline-rail)]" />}
            </div>

            <EventElement
              type={isInteractive ? "button" : undefined}
              onClick={isInteractive ? () => onSelectEvent(i) : undefined}
              className={cn(
                "group flex min-h-[68px] min-w-0 flex-1 items-center gap-3 rounded-[13px] border px-3 py-2.5 text-left [background:var(--rm-fall-timeline-card-bg)] [border-color:var(--rm-fall-timeline-card-border)] [box-shadow:var(--rm-fall-timeline-card-shadow)]",
                isInteractive &&
                  "cursor-pointer hover:[background:var(--rm-fall-timeline-card-hover-bg)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-fall-focus-outline)] active:scale-[0.995]",
                isSelected &&
                  "[background:var(--rm-fall-timeline-card-active-bg)] [border-color:var(--rm-fall-timeline-card-active-border)] [box-shadow:var(--rm-fall-timeline-card-active-shadow)]",
              )}
              aria-label={isInteractive ? `Open event ${ev.label} at ${ev.time}` : undefined}
            >
              {ev.icon}

              <div className="min-w-0 flex-1">
                <span className="block text-[length:var(--rm-fs-body)] font-semibold leading-[1.22] tracking-[-0.1px] text-[var(--rm-fall-timeline-label)]">
                  {ev.label}
                </span>
                {ev.detail && (
                  <span className="mt-0.5 block truncate text-[length:var(--rm-fs-meta)] text-[var(--rm-fall-timeline-detail)]">
                    {ev.detail}
                  </span>
                )}
              </div>

              {isInteractive && (
                <span
                  className={cn(
                    "shrink-0 text-[length:var(--rm-fs-meta)] font-semibold text-[var(--rm-fall-timeline-action)] transition-opacity",
                    isSelected ? "opacity-100" : "opacity-[0.6] group-hover:opacity-100",
                  )}
                >
                  <IconArrowRight stroke="var(--rm-fall-timeline-action)" />
                </span>
              )}
            </EventElement>
          </div>
        );
      })}
    </div>
  </section>
);

export { FallClipTimeline };
