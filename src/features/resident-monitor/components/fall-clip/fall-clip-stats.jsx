import { IconStatClock, IconStatReaction } from "../ui-icons/index.js";

const FALL_CLIP_STATS = [
  { label: "Reaction time", value: "10s", icon: <IconStatReaction color="var(--rm-fall-stat-icon)" /> },
  { label: "Time on floor", value: "11m", icon: <IconStatClock color="var(--rm-fall-stat-icon)" /> },
];

const FallClipStats = () => (
  <div className="mb-[22px] grid grid-cols-2 gap-3">
    {FALL_CLIP_STATS.map((stat) => (
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
);

export { FallClipStats };
