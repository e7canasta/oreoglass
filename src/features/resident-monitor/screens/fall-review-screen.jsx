import { useState } from "react";

import { FallReviewOption } from "../components/fall-review-option.jsx";
import { ThermalView } from "../components/thermal.jsx";
import { VideoScrubber } from "../components/video.jsx";
import "./fall-review-screen.css";

const FallReviewScreen = ({ onBack }) => {
  const [selected, setSelected] = useState("Fall with injury");
  const options = [
    "Fall with injury",
    "Fall without injury",
    "Deliberately on ground",
    "Not a fall",
    "Already on ground",
  ];

  return (
    <div className="fall-review-screen">
      <div className="fall-review-screen-spacer" />

      <header className="fall-review-screen-header">
        <span className="fall-review-screen-title">Possible fall</span>
        <div className="fall-review-screen-meta">
          <span className="fall-review-screen-date">March 31st</span>
          <span className="fall-review-screen-time">01:24</span>
        </div>
      </header>

      <div className="fall-review-screen-thermal">
        <div className="fall-review-screen-thermal-main">
          <ThermalView />
          <div className="fall-review-screen-thermal-fade" />
        </div>
        <div className="fall-review-screen-scrubber-wrap">
          <VideoScrubber />
        </div>
      </div>

      <div className="fall-review-screen-options">
        {options.map((opt) => (
          <FallReviewOption
            key={opt}
            label={opt}
            isSelected={selected === opt}
            onSelect={() => setSelected(opt)}
          />
        ))}
      </div>
    </div>
  );
};

export { FallReviewScreen };
