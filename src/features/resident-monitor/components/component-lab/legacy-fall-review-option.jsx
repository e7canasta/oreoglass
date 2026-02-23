import { cn } from "@/lib/utils";
import { IconCheck } from "../ui-icons/index.js";

const LegacyFallReviewOption = ({ label, isSelected, onSelect }) => (
  <button
    type="button"
    onClick={onSelect}
    className={cn(
      "flex [min-height:var(--lab-legacy-option-min-height)] w-full items-center justify-between rounded-[var(--lab-legacy-option-radius)] border px-4 py-3.5 text-left transition-all",
      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-fall-focus-outline)] active:scale-[0.994]",
      isSelected
        ? "[background:var(--rm-fall-review-option-selected-bg)] [border-color:var(--rm-fall-review-option-selected-border)] [box-shadow:var(--rm-fall-review-option-selected-shadow)]"
        : "[background:var(--rm-fall-review-option-bg)] [border-color:var(--rm-fall-review-option-border)] hover:[background:var(--rm-fall-review-option-bg-hover)]",
    )}
  >
    <span
      className={cn(
        "text-[length:var(--rm-fs-body-strong)] tracking-[-0.15px] text-[var(--rm-fall-review-option-text)]",
        isSelected ? "font-bold" : "font-medium",
      )}
    >
      {label}
    </span>
    <span
      className={cn(
        "flex size-[30px] shrink-0 items-center justify-center rounded-full border-[2.5px] [background:var(--rm-fall-review-option-check-bg)] [border-color:var(--rm-fall-review-option-check-border)] transition-all",
        isSelected ? "scale-100 opacity-100" : "scale-[0.88] opacity-0",
      )}
    >
      <IconCheck stroke="var(--rm-fall-review-option-check-icon)" />
    </span>
  </button>
);

export { LegacyFallReviewOption };
