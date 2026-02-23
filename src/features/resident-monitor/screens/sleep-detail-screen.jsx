import { useState } from "react";

import {
  SleepBehaviourSection,
  SleepDetailHeader,
  SleepTrendsSection,
} from "../components/sleep-detail-sections.jsx";
import { Sleep24hBar } from "../components/sleep-detail-widgets.jsx";

const SleepDetailScreen = ({ onBack }) => {
  const [period, setPeriod] = useState("week");
  const [weekNum, setWeekNum] = useState(23);

  return (
    <div className="absolute inset-0 z-[18] flex animate-[slideInRight_0.3s_cubic-bezier(0.32,0.72,0,1)] flex-col [background:var(--rm-sleep-screen-bg)]">
      <SleepDetailHeader onBack={onBack} />

      <div className="flex flex-1 flex-col gap-5 overflow-y-auto px-[14px] pb-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <Sleep24hBar />

        <SleepTrendsSection
          period={period}
          weekNum={weekNum}
          onPeriodChange={setPeriod}
          onWeekChange={(delta) => setWeekNum((value) => value + delta)}
        />
        <SleepBehaviourSection />
      </div>
    </div>
  );
};

export { SleepDetailScreen };
