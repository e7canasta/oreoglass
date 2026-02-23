import { AppHeaderActionButton, AppHeaderLeading, AppHeaderRow } from "../chrome/header-layout.jsx";
import { IconArrowLeft } from "../ui-icons/index.js";

const CriticalEventsHeader = ({ onBack }) => (
  <AppHeaderRow className="[padding-top:var(--rm-critical-header-padding-top)] [padding-bottom:var(--rm-critical-header-padding-bottom)]">
    <AppHeaderLeading className="[column-gap:var(--rm-critical-header-leading-gap)]">
      <div className="size-[var(--rm-critical-header-dot-size)] rounded-full [background:var(--rm-critical-header-dot-bg)] [box-shadow:var(--rm-critical-header-dot-shadow)]" />
      <span className="text-[length:var(--rm-fs-title)] font-bold tracking-[-0.3px] text-[var(--rm-critical-header-title)]">
        Critical events
      </span>
    </AppHeaderLeading>
    <AppHeaderActionButton
      onClick={onBack}
      className="[background:var(--rm-critical-back-bg)] [border-color:var(--rm-critical-back-border)] [backdrop-filter:blur(10px)_saturate(1.08)] focus-visible:[outline-color:var(--rm-critical-focus-outline)]"
      aria-label="Back to overview"
    >
      <IconArrowLeft
        width={22}
        height={18}
        viewBox="0 0 22 18"
        stroke="var(--rm-critical-back-icon)"
        strokeWidth={2.4}
        path="M20 9H2M9 2L2 9L9 16"
      />
    </AppHeaderActionButton>
  </AppHeaderRow>
);

export { CriticalEventsHeader };
