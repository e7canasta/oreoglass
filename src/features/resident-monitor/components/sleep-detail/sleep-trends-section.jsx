import { cn } from "@/lib/utils";
import { TrendsChart } from "./widgets/index.js";
import { IconChevronLeft, IconChevronRight } from "../ui-icons/index.js";

const SleepTrendsSection = ({ period, weekNum, onPeriodChange, onWeekChange }) => (
  <div className="flex flex-col">
    <div className="mb-3.5">
      <div className="mb-2.5 flex items-center justify-between gap-2">
        <span className="text-[length:var(--rm-fs-title)] font-extrabold tracking-[-0.4px] text-[var(--rm-sleep-title-strong)]">
          Trends
        </span>
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
                  : "text-[var(--rm-sleep-period-btn-text)]",
              )}
              aria-pressed={period === item}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-end gap-[7px]">
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

export { SleepTrendsSection };
