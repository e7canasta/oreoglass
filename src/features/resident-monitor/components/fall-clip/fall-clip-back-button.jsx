import { IconArrowLeft } from "../ui-icons/index.js";
import { Button } from "@/components/ui/button";
import { RM_BUTTON_PRESETS } from "../../lib/design-system.js";

const FallClipBackButton = ({ onBack }) => (
  <div className="pointer-events-none absolute left-[14px] [top:calc(var(--rm-safe-top)+8px)] z-[2]">
    <Button
      type="button"
      {...RM_BUTTON_PRESETS.floatingBack}
      onClick={onBack}
      className="pointer-events-auto flex min-h-[var(--rm-hit-min)] items-center gap-1.5 rounded-[20px] px-3 pb-[9px] pt-[9px] focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-fall-focus-outline)] active:scale-[0.994]"
    >
      <IconArrowLeft
        width={16}
        height={13}
        viewBox="0 0 16 13"
        stroke="var(--rm-fall-back-icon)"
        strokeWidth={2}
        path="M14 6.5H2M7 1L2 6.5L7 12"
      />
      <span className="text-[length:var(--rm-fs-meta)] font-semibold text-[var(--rm-fall-back-label)]">Back</span>
    </Button>
  </div>
);

export { FallClipBackButton };
