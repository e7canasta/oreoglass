import { IconQuestionCircle } from "../ui-icons/index.js";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { RM_BADGE_PRESETS } from "../../lib/design-system.js";
import { FALL_CLASSIFICATION_OPTIONS } from "../../data/fall-classification-options.js";

const FallClipNeedsReview = ({ onClassify }) => (
  <>
    <div className="mb-3.5 flex items-center justify-between">
      <Badge
        {...RM_BADGE_PRESETS.dashed}
        className="inline-flex items-center gap-1.5 rounded-[20px] px-3 py-[5px] text-[length:var(--rm-fs-meta)] font-semibold"
      >
        <span className="text-[length:var(--rm-fs-meta)] font-semibold text-[var(--rm-fall-chip-dashed-text)]">Fall</span>
        <IconQuestionCircle />
      </Badge>
      <Badge
        {...RM_BADGE_PRESETS.warning}
        className="rounded-[20px] px-[14px] py-[6px] text-[length:var(--rm-fs-meta)] font-bold"
      >
        <span className="text-[length:var(--rm-fs-meta)] font-bold text-[var(--rm-fall-chip-warning-text)]">Needs review</span>
      </Badge>
    </div>

    <div className="mb-3 text-[length:var(--rm-fs-body)] font-bold tracking-[-0.2px] text-[var(--rm-fall-review-question)]">
      Classify this event
    </div>

    <RadioGroup
      className="mb-[18px] grid grid-cols-2 gap-[9px]"
      onValueChange={onClassify}
      aria-label="Fall classification options"
    >
      {FALL_CLASSIFICATION_OPTIONS.map((option) => (
        <RadioGroupItem
          key={option}
          value={option}
          className="flex min-h-[52px] cursor-pointer items-center justify-center rounded-xl border px-2 py-[13px] text-center text-[length:var(--rm-fs-body)] font-semibold leading-[1.24] [background:var(--rm-fall-review-option-bg)] [border-color:var(--rm-fall-review-option-border)] text-[var(--rm-fall-review-option-text)] hover:[background:var(--rm-fall-review-option-bg-hover)] focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-fall-focus-outline)] active:scale-[0.994]"
        >
          {option}
        </RadioGroupItem>
      ))}
    </RadioGroup>
  </>
);

export { FallClipNeedsReview };
