import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThermalThumb } from "../thermal.jsx";
import { IconChevronRight, IconPlay } from "../ui-icons/index.js";
import { RM_BADGE_PRESETS, RM_BUTTON_PRESETS } from "../../lib/design-system.js";

const CriticalEventListItem = ({ clip, idx, onOpen }) => {
  const isHighSeverity = clip.label.toLowerCase().includes("with injury");

  return (
    <Button
      type="button"
      {...RM_BUTTON_PRESETS.criticalCard}
      onClick={onOpen}
      className="flex [min-height:var(--rm-critical-item-min-height)] w-full items-center gap-3 rounded-[var(--rm-critical-item-radius)] border px-[10px] py-2.5 pr-3.5 text-left [background:var(--rm-critical-item-bg)] [border-color:var(--rm-critical-item-border)] transition-transform active:scale-[0.995] focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-critical-focus-outline)]"
    >
      <div className="relative h-[var(--rm-critical-item-thumb-height)] w-[var(--rm-critical-item-thumb-width)] shrink-0 overflow-hidden rounded-[var(--rm-critical-item-thumb-radius)] [background:var(--rm-critical-item-thumb-bg)]">
        <ThermalThumb variant={idx} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex size-[26px] items-center justify-center rounded-full border-[1.5px] [background:var(--rm-critical-item-play-bg)] [border-color:var(--rm-critical-item-play-border)] backdrop-blur-[4px]">
            <IconPlay fill="var(--rm-critical-item-play-icon)" />
          </div>
        </div>
        <div
          className={cn(
            "absolute left-[5px] top-[5px] size-2.5 rounded-full border-[1.5px] border-white/30",
            isHighSeverity
              ? "[background:var(--rm-critical-item-dot-high-bg)] [box-shadow:var(--rm-critical-item-dot-high-shadow)]"
              : "[background:var(--rm-critical-item-dot-medium-bg)] [box-shadow:var(--rm-critical-item-dot-medium-shadow)]",
          )}
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-[5px]">
        <Badge
          {...(isHighSeverity ? RM_BADGE_PRESETS.critical : RM_BADGE_PRESETS.criticalMuted)}
          className="w-fit rounded-md border px-2 py-[3px] text-[length:var(--rm-fs-meta)] font-bold tracking-[0.1px] [border-color:var(--rm-critical-item-chip-border)]"
        >
          {clip.label}
        </Badge>
        <span className="text-[length:var(--rm-fs-meta)] font-medium leading-[1.25] text-[var(--rm-critical-item-reaction)]">
          Reaction time {clip.reaction}
        </span>
      </div>

      <IconChevronRight
        width={8}
        height={13}
        viewBox="0 0 8 13"
        stroke="var(--rm-critical-item-chevron)"
        strokeWidth={2}
        path="M1 1L7 6.5L1 12"
      />
    </Button>
  );
};

export { CriticalEventListItem };
