import { useState } from "react";

import {
  SleepBehaviourSection,
  SleepDetailHeader,
  SleepTrendsSection,
} from "../components/sleep-detail/index.js";
import { ScreenStage } from "../components/screen-stage.jsx";
import { Sleep24hBar } from "../components/sleep-detail/widgets/index.js";

const SleepDetailScreen = ({ onBack }) => {
  const [period, setPeriod] = useState("week");
  const [weekNum, setWeekNum] = useState(23);

  return (
    <ScreenStage zToken="--rm-z-screen-sleep" className="[background:var(--rm-sleep-screen-bg)]">
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
    </ScreenStage>
  );
};

export { SleepDetailScreen };
