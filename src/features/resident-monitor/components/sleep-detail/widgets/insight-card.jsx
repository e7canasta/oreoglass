import { IconTrendDown, IconTrendUp } from "../../ui-icons/index.js";

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

export { InsightCard };
