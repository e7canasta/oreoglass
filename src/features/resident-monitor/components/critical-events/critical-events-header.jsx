import { Button } from "@/components/ui/button";
import { IconArrowLeft } from "../ui-icons/index.js";
import { RM_BUTTON_PRESETS } from "../../lib/design-system.js";

const CriticalEventsHeader = ({ onBack }) => (
  <div className="flex shrink-0 items-center justify-between px-[18px] pb-4">
    <div className="flex items-center gap-2.5">
      <div className="size-3 rounded-full [background:var(--rm-critical-header-dot-bg)] [box-shadow:var(--rm-critical-header-dot-shadow)]" />
      <span className="text-[length:var(--rm-fs-title)] font-bold tracking-[-0.3px] text-[var(--rm-critical-header-title)]">
        Critical events
      </span>
    </div>
    <Button
      type="button"
      {...RM_BUTTON_PRESETS.criticalHeaderBack}
      onClick={onBack}
      className="size-[var(--rm-hit-min)] shrink-0 p-0 !border-transparent !bg-transparent !shadow-none focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-critical-focus-outline)]"
    >
      <IconArrowLeft
        width={22}
        height={18}
        viewBox="0 0 22 18"
        stroke="var(--rm-critical-back-icon)"
        strokeWidth={2.4}
        path="M20 9H2M9 2L2 9L9 16"
      />
    </Button>
  </div>
);

export { CriticalEventsHeader };
