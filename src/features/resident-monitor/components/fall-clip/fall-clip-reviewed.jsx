import { IconCheckCircle, IconEdit } from "../ui-icons/index.js";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RM_BADGE_PRESETS, RM_BUTTON_PRESETS } from "../../lib/design-system.js";

const FallClipReviewed = ({ classification, onEdit }) => (
  <div className="mb-4 flex flex-wrap items-center gap-2">
    <Badge
      {...RM_BADGE_PRESETS.critical}
      className="rounded-[20px] px-3 py-[5px] text-[length:var(--rm-fs-meta)] font-bold"
    >
      <span className="text-[length:var(--rm-fs-meta)] font-bold text-[var(--rm-fall-chip-critical-text)]">Fall</span>
    </Badge>
    <Badge
      {...RM_BADGE_PRESETS.success}
      className="rounded-[20px] px-3 py-[5px] text-[length:var(--rm-fs-meta)] font-bold"
    >
      <span className="text-[length:var(--rm-fs-meta)] font-bold text-[var(--rm-fall-chip-reviewed-text)]">
        {classification || "Without injury"}
      </span>
    </Badge>
    <Button
      type="button"
      {...RM_BUTTON_PRESETS.fallEdit}
      onClick={onEdit}
      className="flex min-h-[var(--rm-hit-compact)] items-center gap-[5px] rounded-[20px] px-3 py-2 [background:var(--rm-fall-edit-bg)] [border-color:var(--rm-fall-edit-border)] focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-fall-focus-outline)] active:scale-[0.994]"
    >
      <IconEdit />
      <span className="text-[length:var(--rm-fs-meta)] font-semibold text-[var(--rm-fall-edit-label)]">Edit</span>
    </Button>
    <div className="ml-auto flex min-h-6 items-center gap-[5px]">
      <span className="text-[length:var(--rm-fs-meta)] font-medium text-[var(--rm-fall-reviewed-status-label)]">
        Reviewed
      </span>
      <IconCheckCircle />
    </div>
  </div>
);

export { FallClipReviewed };
