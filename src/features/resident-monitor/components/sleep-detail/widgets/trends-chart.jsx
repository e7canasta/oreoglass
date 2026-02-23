import { cn } from "@/lib/utils";

const WEEK_DAYS = [
  { label: "Today", bars: [[16, 26, false], [44, 6, true]] },
  { label: "Sat 20th", bars: [[20, 28, false], [50, 10, false]] },
  { label: "Fri 19th", bars: [[18, 26, false], [46, 6, true]] },
  { label: "Thu 18th", bars: [[22, 24, false]] },
  { label: "Wed 17th", bars: [[16, 22, false], [42, 4, true]] },
  { label: "Tue 16th", bars: [[20, 28, false], [50, 8, false]] },
  { label: "Mon 15th", bars: [[18, 26, false]] },
];

const MONTH_WEEKS = [
  { label: "Week 23", bars: [[18, 26, false], [46, 6, true]] },
  { label: "Week 22", bars: [[20, 24, false], [46, 10, false]] },
  { label: "Week 21", bars: [[16, 28, false], [46, 4, true]] },
  { label: "Week 20", bars: [[22, 22, false]] },
];

const TrendsChart = ({ period }) => {
  const records = period === "week" ? WEEK_DAYS : MONTH_WEEKS;

  return (
    <div className="flex flex-col gap-[7px]">
      {records.map((record, index) => (
        <div key={record.label} className="flex items-center gap-2.5">
          <span
            className={cn(
              "min-w-[58px] shrink-0 text-right text-[length:var(--rm-fs-caption)] font-medium text-[var(--rm-sleep-body-muted)]",
              index === 0 && "font-bold text-[var(--rm-sleep-trends-today)]"
            )}
          >
            {record.label}
          </span>
          <div className="relative h-[26px] flex-1 overflow-hidden rounded-lg [background:var(--rm-sleep-bars-track)]">
            {record.bars.map(([start, width, restless], barIndex) => (
              <div
                key={barIndex}
                className={cn(
                  "absolute bottom-[3px] top-[3px] rounded-[5px] opacity-[0.88]",
                  restless ? "[background:var(--rm-sleep-restless)]" : "[background:var(--rm-sleep-calm)]"
                )}
                style={{ left: `${start}%`, width: `${width}%` }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export { TrendsChart };
