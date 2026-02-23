import { cn } from "@/lib/utils";

const SLEEP_24H_BLOCKS = [
  [2, 18, false],
  [22, 4, false],
  [30, 2, true],
  [35, 18, false],
  [56, 2, true],
  [62, 14, false],
  [78, 3, false],
];

const SLEEP_24H_NOW_PCT = 68;
const SLEEP_24H_LABELS = ["20", "00", "04", "08", "12", "16", "20"];

const Sleep24hBar = () => (
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
        style={{ left: `${SLEEP_24H_NOW_PCT}%` }}
      >
        Now
      </div>
    </div>
    <div className="relative mb-2.5 h-12 rounded-[10px] [background:var(--rm-sleep-bars-track)]">
      {SLEEP_24H_BLOCKS.map(([start, width, restless], index) => (
        <div
          key={index}
          className={cn(
            "absolute bottom-0 top-0 rounded-[5px] opacity-90",
            restless ? "[background:var(--rm-sleep-restless)]" : "[background:var(--rm-sleep-calm)]"
          )}
          style={{ left: `${start}%`, width: `${width}%` }}
        />
      ))}
      <div
        className="absolute -bottom-1 -top-1 w-0.5 rounded-[1px] [background:var(--rm-sleep-now)]"
        style={{ left: `${SLEEP_24H_NOW_PCT}%` }}
      />
    </div>
    <div className="mb-3 flex justify-between">
      {SLEEP_24H_LABELS.map((label, index) => (
        <span
          key={index}
          className={cn(
            "text-[length:var(--rm-fs-micro)] font-normal text-[var(--rm-sleep-axis)]",
            index === 4 && "font-bold text-[var(--rm-sleep-now)]"
          )}
        >
          {label}
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

export { Sleep24hBar };
