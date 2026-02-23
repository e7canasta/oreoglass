import { IconCheck } from "./ui-icons/index.js";
import "./fall-review-option.css";

const FallReviewOption = ({ label, isSelected, onSelect }) => (
  <button
    type="button"
    onClick={onSelect}
    aria-pressed={isSelected}
    className={isSelected ? "fall-review-option fall-review-option-selected" : "fall-review-option"}
  >
    <span className="fall-review-option-label">{label}</span>
    {isSelected && (
      <span className="fall-review-option-check">
        <IconCheck />
      </span>
    )}
  </button>
);

export { FallReviewOption };
