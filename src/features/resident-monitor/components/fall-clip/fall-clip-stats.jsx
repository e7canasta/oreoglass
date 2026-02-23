import { IconStatClock, IconStatReaction } from "../ui-icons/index.js";

const FallClipStats = ({ clip }) => {
  const stats = [
    {
      label: "Reaction time",
      value: clip?.reaction ?? "10s",
      icon: <IconStatReaction color="var(--rm-fall-stat-icon)" />,
    },
    {
      label: "Time on floor",
      value: clip?.timeOnFloor ?? "11m",
      icon: <IconStatClock color="var(--rm-fall-stat-icon)" />,
    },
  ];

  return (
    <section className="mb-[22px]">
      <div className="mb-2.5 flex items-baseline justify-between gap-2 px-0.5">
        <h3 className="text-[length:var(--rm-fs-body-strong)] font-bold tracking-[-0.15px] text-[var(--rm-fall-insights-title)]">
          Incident insights
        </h3>
        <span className="text-[length:var(--rm-fs-meta)] text-[var(--rm-fall-insights-subtitle)]">
          Current clip
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-[14px] border px-[14px] pb-3 pt-3 [background:var(--rm-fall-stat-card-bg)] [border-color:var(--rm-fall-stat-card-border)]">
            <div className="mb-2 text-[length:var(--rm-fs-meta)] font-medium text-[var(--rm-fall-stat-label)]">{stat.label}</div>
            <div className="flex items-center gap-2">
              {stat.icon}
              <span className="text-[length:var(--rm-fs-title-strong)] font-bold tracking-[-0.5px] text-[var(--rm-fall-stat-value)]">
                {stat.value}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { FallClipStats };
