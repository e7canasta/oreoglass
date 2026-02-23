import { cn } from "@/lib/utils";
import { IconTrendDown, IconTrendUp } from "./ui-icons/index.js";

const Sleep24hBar = () => {
  const blocks = [
    [2, 18, false],
    [22, 4, false],
    [30, 2, true],
    [35, 18, false],
    [56, 2, true],
    [62, 14, false],
    [78, 3, false],
  ];

  const NOW_PCT = 68;
  const labels = ["20", "00", "04", "08", "12", "16", "20"];

  return (
    <div className="rounded-2xl border px-[14px] pb-3 pt-[14px] [background:var(--rm-sleep-panel-bg)] [border-color:var(--rm-sleep-panel-border)]">
      <div className="mb-3">
        <span className="text-[length:var(--rm-fs-title-strong)] font-extrabold tracking-[-0.3px] text-[var(--rm-sleep-title-strong)]">
          7 hours{" "}
        </span>
        <span className="text-[length:var(--rm-fs-body)] text-[var(--rm-sleep-body-muted)]">
          of sleep in the past 24 hours
        </span>
      </div>
      <div className="relative mb-0.5 h-4">
        <div
          className="absolute -translate-x-1/2 text-[length:var(--rm-fs-caption)] font-bold text-[var(--rm-sleep-now)]"
          style={{ left: `${NOW_PCT}%` }}
        >
          Now
        </div>
      </div>
      <div className="relative mb-2.5 h-12 rounded-[10px] [background:var(--rm-sleep-bars-track)]">
        {blocks.map(([s, w, rest], i) => (
          <div
            key={i}
            className={cn(
              "absolute bottom-0 top-0 rounded-[5px] opacity-90",
              rest ? "[background:var(--rm-sleep-restless)]" : "[background:var(--rm-sleep-calm)]"
            )}
            style={{ left: `${s}%`, width: `${w}%` }}
          />
        ))}
        <div
          className="absolute -bottom-1 -top-1 w-0.5 rounded-[1px] [background:var(--rm-sleep-now)]"
          style={{ left: `${NOW_PCT}%` }}
        />
      </div>
      <div className="mb-3 flex justify-between">
        {labels.map((t, i) => (
          <span
            key={i}
            className={cn(
              "text-[length:var(--rm-fs-micro)] font-normal text-[var(--rm-sleep-axis)]",
              i === 4 && "font-bold text-[var(--rm-sleep-now)]"
            )}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-[18px]">
        {[["calm", "Calm", "7 hours"], ["restless", "Restless", "0 hours"]].map(([tone, label, value]) => (
          <div key={label} className="flex items-center gap-1.5">
            <div
              className={cn(
                "size-2.5 rounded-full",
                tone === "calm" ? "[background:var(--rm-sleep-calm)]" : "[background:var(--rm-sleep-restless)]"
              )}
            />
            <span className="text-[length:var(--rm-fs-caption)] text-[var(--rm-sleep-legend-name)]">{label}:</span>
            <span className="text-[length:var(--rm-fs-caption)] font-semibold text-[var(--rm-sleep-legend-value)]">
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const TrendsChart = ({ period }) => {
  const days =
    period === "week"
      ? [
          { label: "Today", bars: [[16, 26, false], [44, 6, true]] },
          { label: "Sat 20th", bars: [[20, 28, false], [50, 10, false]] },
          { label: "Fri 19th", bars: [[18, 26, false], [46, 6, true]] },
          { label: "Thu 18th", bars: [[22, 24, false]] },
          { label: "Wed 17th", bars: [[16, 22, false], [42, 4, true]] },
          { label: "Tue 16th", bars: [[20, 28, false], [50, 8, false]] },
          { label: "Mon 15th", bars: [[18, 26, false]] },
        ]
      : [
          { label: "Week 23", bars: [[18, 26, false], [46, 6, true]] },
          { label: "Week 22", bars: [[20, 24, false], [46, 10, false]] },
          { label: "Week 21", bars: [[16, 28, false], [46, 4, true]] },
          { label: "Week 20", bars: [[22, 22, false]] },
        ];

  return (
    <div className="flex flex-col gap-[7px]">
      {days.map((day, i) => (
        <div key={i} className="flex items-center gap-2.5">
          <span
            className={cn(
              "min-w-[58px] shrink-0 text-right text-[length:var(--rm-fs-caption)] font-medium text-[var(--rm-sleep-body-muted)]",
              i === 0 && "font-bold text-[var(--rm-sleep-trends-today)]"
            )}
          >
            {day.label}
          </span>
          <div className="relative h-[26px] flex-1 overflow-hidden rounded-lg [background:var(--rm-sleep-bars-track)]">
            {day.bars.map(([s, w, rest], j) => (
              <div
                key={j}
                className={cn(
                  "absolute bottom-[3px] top-[3px] rounded-[5px] opacity-[0.88]",
                  rest ? "[background:var(--rm-sleep-restless)]" : "[background:var(--rm-sleep-calm)]"
                )}
                style={{ left: `${s}%`, width: `${w}%` }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const InsightCard = ({ children, trend }) => (
  <div className="flex items-center justify-between gap-2.5 rounded-[14px] border px-[14px] py-[13px] [background:var(--rm-sleep-insight-bg)] [border-color:var(--rm-sleep-insight-border)]">
    <span className="flex-1 text-[length:var(--rm-fs-meta)] font-medium leading-[1.4] text-[var(--rm-sleep-insight-text)]">
      {children}
    </span>
    {trend && (
      <div className={trend === "down" ? "shrink-0 text-[var(--rm-sleep-trend-down)]" : "shrink-0 text-[var(--rm-sleep-trend-up)]"}>
        {trend === "down" ? <IconTrendDown /> : <IconTrendUp />}
      </div>
    )}
  </div>
);

export { InsightCard, Sleep24hBar, TrendsChart };
