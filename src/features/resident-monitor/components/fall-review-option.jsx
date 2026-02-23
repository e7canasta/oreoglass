import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import { RadioGroupItem } from "@/components/ui/radio-group";
import { IconCheck } from "./ui-icons/index.js";

const FallReviewOption = ({ label, value }) => (
  <RadioGroupItem
    value={value}
    className="group flex min-h-14 w-full items-center justify-between rounded-[14px] border px-4 py-3.5 text-left transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-fall-focus-outline)] active:scale-[0.994] [background:var(--rm-fall-review-option-bg)] [border-color:var(--rm-fall-review-option-border)] hover:[background:var(--rm-fall-review-option-bg-hover)] data-[state=checked]:[background:var(--rm-fall-review-option-selected-bg)] data-[state=checked]:[border-color:var(--rm-fall-review-option-selected-border)] data-[state=checked]:[box-shadow:var(--rm-fall-review-option-selected-shadow)]"
  >
    <span className="text-[length:var(--rm-fs-body-strong)] font-medium tracking-[-0.15px] text-[var(--rm-fall-review-option-text)] group-data-[state=checked]:font-bold">
      {label}
    </span>
    <span className="flex size-[30px] shrink-0 items-center justify-center rounded-full border-[2.5px] [background:var(--rm-fall-review-option-check-bg)] [border-color:var(--rm-fall-review-option-check-border)] opacity-0 scale-[0.88] transition-all group-data-[state=checked]:scale-100 group-data-[state=checked]:opacity-100">
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <IconCheck stroke="var(--rm-fall-review-option-check-icon)" />
      </RadioGroupPrimitive.Indicator>
    </span>
  </RadioGroupItem>
);

export { FallReviewOption };
