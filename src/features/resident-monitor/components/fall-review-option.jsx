import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import { IconCheck } from "./ui-icons/index.js";
import "./fall-review-option.css";

const FallReviewOption = ({ label, value }) => (
  <RadioGroupPrimitive.Item value={value} className="fall-review-option">
    <span className="fall-review-option-label">{label}</span>
    <span className="fall-review-option-check">
      <RadioGroupPrimitive.Indicator className="fall-review-option-indicator">
        <IconCheck />
      </RadioGroupPrimitive.Indicator>
    </span>
  </RadioGroupPrimitive.Item>
);

export { FallReviewOption };
