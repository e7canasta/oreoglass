import { cn } from "@/lib/utils";

const SLEEP_CHART_BARS = [
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

const SleepChart = () => (
  <div className="rounded-xl border px-[14px] pb-2.5 pt-3 [background:var(--rm-room-detail-card-bg)] [border-color:var(--rm-room-detail-card-border)]">
    <div className="mb-2.5 flex flex-wrap gap-3.5">
      {[["calm", "Calm: 7 hours"], ["restless", "Restless: 0 hours"]].map(([tone, label]) => (
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
        {SLEEP_CHART_BARS.map((bar, index) => (
          <rect
            key={index}
            x={`${bar.x}%`}
            y="0"
            width={`${bar.w}%`}
            height="52"
            fill={index % 5 === 2 ? "var(--rm-room-detail-sleep-bar-alt)" : "var(--rm-room-detail-sleep-bar)"}
            rx="1"
            opacity={0.85 + (index % 3) * 0.05}
          />
        ))}
        <rect x="94%" y="0" width="2" height="52" fill="var(--rm-room-detail-sleep-axis-now)" />
      </svg>
    </div>
    <div className="flex justify-between gap-1.5">
      {["02", "06", "10", "Now"].map((label, index) => (
        <span
          key={index}
          className={cn(
            "text-[length:var(--rm-fs-micro)] font-normal",
            index === 3
              ? "font-bold [color:var(--rm-room-detail-sleep-axis-now)]"
              : "text-[var(--rm-room-detail-sleep-axis)]"
          )}
        >
          {label}
        </span>
      ))}
    </div>
  </div>
);

export { SleepChart };
