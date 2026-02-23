import { InsightCard } from "../sleep-detail-widgets.jsx";

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

export { SleepBehaviourSection };
