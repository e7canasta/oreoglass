import { InsightCard, TrendsChart } from "./sleep-detail-widgets.jsx";
import { IconArrowLeft, IconChevronLeft, IconChevronRight } from "./ui-icons/index.js";
import { cn } from "@/lib/utils";

const SleepDetailHeader = ({ onBack }) => (
  <div className="flex shrink-0 items-center justify-between px-[18px] pb-[14px] pt-[calc(54px+env(safe-area-inset-top,0px))]">
    <button
      type="button"
      onClick={onBack}
      className="flex size-[var(--rm-hit-min)] items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:[outline-color:var(--rm-sleep-focus-outline)]"
      aria-label="Back"
    >
      <IconArrowLeft stroke="var(--rm-sleep-back-icon)" />
    </button>
    <div className="flex items-center gap-1.5">
      <span className="text-[length:var(--rm-fs-body-strong)] tracking-[-1px] text-[var(--rm-sleep-header-glyph)]">
        z<sup className="text-[length:var(--rm-fs-micro)]">z</sup>
      </span>
      <span className="text-[length:var(--rm-fs-title)] font-bold tracking-[-0.3px] text-[var(--rm-sleep-header-title)]">
        Sleep
      </span>
    </div>
    <div className="w-9" />
  </div>
);

const SleepTrendsSection = ({ period, weekNum, onPeriodChange, onWeekChange }) => (
  <div className="flex flex-col">
    <div className="mb-3.5 flex items-center justify-between">
      <span className="text-[length:var(--rm-fs-title)] font-extrabold tracking-[-0.4px] text-[var(--rm-sleep-title-strong)]">
        Trends
      </span>
      <div className="flex items-center gap-[7px]">
        <div className="flex rounded-[20px] border p-[3px] [background:var(--rm-sleep-period-bg)] [border-color:var(--rm-sleep-period-border)]">
          {["week", "month"].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => onPeriodChange(item)}
              className={cn(
                "min-h-[var(--rm-hit-chip)] rounded-[17px] px-3 py-[5px] text-[length:var(--rm-fs-meta)] font-semibold capitalize transition-colors",
                "focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:[outline-color:var(--rm-sleep-focus-outline)]",
                period === item
                  ? "[background:var(--rm-sleep-period-btn-active-bg)] text-[var(--rm-sleep-period-btn-active-text)]"
                  : "text-[var(--rm-sleep-period-btn-text)]"
              )}
              aria-pressed={period === item}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => onWeekChange(-1)}
          className="flex size-[var(--rm-hit-compact)] items-center justify-center rounded-full border [background:var(--rm-sleep-nav-bg)] [border-color:var(--rm-sleep-nav-border)] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:[outline-color:var(--rm-sleep-focus-outline)]"
          aria-label="Previous period"
        >
          <IconChevronLeft stroke="var(--rm-sleep-back-icon)" />
        </button>

        <div className="min-w-[62px] rounded-[10px] border px-2.5 py-[5px] text-center [background:var(--rm-sleep-week-pill-bg)] [border-color:var(--rm-sleep-week-pill-border)]">
          <span className="text-[length:var(--rm-fs-caption)] font-semibold text-[var(--rm-sleep-week-pill-text)]">
            {period === "week" ? `Week ${weekNum}` : `Month ${weekNum}`}
          </span>
        </div>

        <button
          type="button"
          onClick={() => onWeekChange(1)}
          className="flex size-[var(--rm-hit-compact)] items-center justify-center rounded-full border [background:var(--rm-sleep-nav-bg)] [border-color:var(--rm-sleep-nav-border)] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:[outline-color:var(--rm-sleep-focus-outline)]"
          aria-label="Next period"
        >
          <IconChevronRight stroke="var(--rm-sleep-back-icon)" />
        </button>
      </div>
    </div>

    <div className="rounded-2xl border px-[14px] pb-4 pt-[14px] [background:var(--rm-sleep-panel-bg)] [border-color:var(--rm-sleep-panel-border)]">
      <TrendsChart period={period} />
    </div>
  </div>
);

const SleepBehaviourSection = () => (
  <div className="flex flex-col">
    <div className="mb-3">
      <span className="text-[length:var(--rm-fs-body-strong)] font-bold tracking-[-0.3px] text-[var(--rm-sleep-title-strong)]">
        Usual behaviour{" "}
      </span>
      <span className="text-[length:var(--rm-fs-body)] font-normal text-[var(--rm-sleep-title-light)]">
        during the week
      </span>
    </div>

    <div className="flex flex-col gap-[9px]">
      <div className="grid grid-cols-2 gap-[9px]">
        <InsightCard trend="down">3-6 wake-ups per night</InsightCard>
        <InsightCard trend="down">5-6 bathroom visits per night</InsightCard>
      </div>
      <InsightCard>
        Usually falls asleep around <strong>20:00</strong> and wakes around <strong>08:00</strong>
      </InsightCard>
    </div>
  </div>
);

export { SleepBehaviourSection, SleepDetailHeader, SleepTrendsSection };
