import { useState } from "react";

import {
  SleepBehaviourSection,
  SleepDetailHeader,
  SleepTrendsSection,
} from "../components/sleep-detail-sections.jsx";
import { Sleep24hBar } from "../components/sleep-detail-widgets.jsx";
import "./sleep-detail-screen.css";

const SleepDetailScreen = ({ onBack }) => {
  const [period, setPeriod] = useState("week");
  const [weekNum, setWeekNum] = useState(23);

  return (
    <div className="sleep-detail-screen">
      <SleepDetailHeader onBack={onBack} />

      <div className="sleep-detail-screen-scroll">
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
