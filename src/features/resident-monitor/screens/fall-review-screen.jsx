import { useState } from "react";

import { RadioGroup } from "@/components/ui/radio-group";
import { FallReviewOption } from "../components/fall-review-option.jsx";
import { ThermalView } from "../components/thermal.jsx";
import { VideoScrubber } from "../components/video.jsx";

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
    <div className="absolute inset-0 z-[30] flex animate-[slideInRight_0.3s_cubic-bezier(0.32,0.72,0,1)] flex-col overflow-hidden [background:var(--rm-fall-review-bg)]">
      <div className="h-[calc(50px+env(safe-area-inset-top,0px))] shrink-0" />

      <header className="flex shrink-0 items-baseline justify-between px-4 pb-3">
        <span className="text-[length:var(--rm-fs-title-strong)] font-extrabold tracking-[-0.3px] text-[var(--rm-fall-review-title)]">
          Possible fall
        </span>
        <div className="flex items-baseline gap-[5px]">
          <span className="text-[length:var(--rm-fs-body)] font-medium text-[var(--rm-fall-review-date)]">March 31st</span>
          <span className="text-[length:var(--rm-fs-body)] font-extrabold tracking-[0.3px] text-[var(--rm-fall-review-time)]">
            01:24
          </span>
        </div>
      </header>

      <div className="mx-3 mb-3.5 shrink-0 overflow-hidden rounded-2xl border [background:var(--rm-fall-review-thermal-bg)] [border-color:var(--rm-fall-review-thermal-border)] [box-shadow:var(--rm-fall-review-thermal-shadow)]">
        <div className="relative h-[clamp(172px,30vh,186px)]">
          <ThermalView />
          <div className="absolute inset-x-0 bottom-0 h-11 [background:var(--rm-fall-review-thermal-fade)]" />
        </div>
        <div className="px-[14px] pb-2.5 pt-1.5 [background:var(--rm-fall-review-scrubber-bg)]">
          <VideoScrubber />
        </div>
      </div>

      <RadioGroup
        value={selected}
        onValueChange={setSelected}
        className="flex flex-1 flex-col gap-2 overflow-y-auto px-3 pb-[calc(32px+env(safe-area-inset-bottom,0px))]"
        aria-label="Fall classification"
      >
        {options.map((opt) => (
          <FallReviewOption
            key={opt}
            label={opt}
            value={opt}
          />
        ))}
      </RadioGroup>
    </div>
  );
};

export { FallReviewScreen };
