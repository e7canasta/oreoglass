import { RadioGroup } from "@/components/ui/radio-group";
import { FallReviewOption } from "./fall-review-option.jsx";
import { ThermalView } from "./thermal.jsx";
import { VideoScrubber } from "./video.jsx";

const FALL_REVIEW_OPTIONS = Object.freeze([
  "Fall with injury",
  "Fall without injury",
  "Deliberately on ground",
  "Not a fall",
  "Already on ground",
]);

const FallReviewHeader = () => (
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
);

const FallReviewThermalCard = () => (
  <div className="mx-3 mb-3.5 shrink-0 overflow-hidden rounded-[var(--rm-fall-review-thermal-radius)] border [background:var(--rm-fall-review-thermal-bg)] [border-color:var(--rm-fall-review-thermal-border)] [box-shadow:var(--rm-fall-review-thermal-shadow)]">
    <div className="relative [height:var(--rm-fall-review-thermal-height)]">
      <ThermalView />
      <div className="absolute inset-x-0 bottom-0 h-11 [background:var(--rm-fall-review-thermal-fade)]" />
    </div>
    <div className="px-[14px] pb-2.5 pt-1.5 [background:var(--rm-fall-review-scrubber-bg)]">
      <VideoScrubber />
    </div>
  </div>
);

const FallReviewClassificationList = ({ value, onValueChange }) => (
  <RadioGroup
    value={value}
    onValueChange={onValueChange}
    className="flex flex-1 flex-col gap-2 overflow-y-auto px-3 [padding-bottom:var(--rm-fall-review-list-padding-bottom)]"
    aria-label="Fall classification"
  >
    {FALL_REVIEW_OPTIONS.map((option) => (
      <FallReviewOption
        key={option}
        label={option}
        value={option}
      />
    ))}
  </RadioGroup>
);

export {
  FallReviewClassificationList,
  FallReviewHeader,
  FALL_REVIEW_OPTIONS,
  FallReviewThermalCard,
};
