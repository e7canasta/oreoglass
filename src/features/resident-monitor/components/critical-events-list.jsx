import { ThermalThumb, ThermalView } from "./thermal.jsx";
import { IconArrowLeft, IconChevronRight, IconPlay } from "./ui-icons/index.js";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RM_BADGE_PRESETS, RM_BUTTON_PRESETS } from "../lib/design-system.js";

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

const FeaturedClipCard = ({ clip, onOpen }) => (
  <Button
    type="button"
    {...RM_BUTTON_PRESETS.criticalCard}
    onClick={onOpen}
    className="relative mb-3.5 block h-48 w-full overflow-hidden rounded-2xl border text-left [background:var(--rm-critical-featured-bg)] [border-color:var(--rm-critical-featured-border)] [box-shadow:var(--rm-critical-featured-shadow)] focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-critical-focus-outline)]"
  >
    <div className="absolute inset-0">
      <ThermalView />
    </div>
    <div className="absolute inset-0 [background:var(--rm-critical-featured-gradient)]" />
    <div className="absolute bottom-3 left-3.5 flex items-center gap-3">
      <span className="text-[length:var(--rm-fs-meta)] font-medium text-[var(--rm-critical-featured-date)]">{clip.date}</span>
      <span className="text-[length:var(--rm-fs-meta)] font-bold tracking-[0.2px] text-[var(--rm-critical-featured-time)]">
        {clip.time}
      </span>
    </div>
  </Button>
);

const CriticalEventListItem = ({ clip, idx, onOpen }) => {
  const isHighSeverity = clip.label.toLowerCase().includes("with injury");

  return (
    <Button
      type="button"
      {...RM_BUTTON_PRESETS.criticalCard}
      onClick={onOpen}
      className="flex min-h-[74px] w-full items-center gap-3 rounded-[14px] border px-[10px] py-2.5 pr-3.5 text-left [background:var(--rm-critical-item-bg)] [border-color:var(--rm-critical-item-border)] transition-transform active:scale-[0.995] focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-critical-focus-outline)]"
    >
      <div className="relative size-auto h-14 w-[72px] shrink-0 overflow-hidden rounded-[10px] [background:var(--rm-critical-item-thumb-bg)]">
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
              : "[background:var(--rm-critical-item-dot-medium-bg)] [box-shadow:var(--rm-critical-item-dot-medium-shadow)]"
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

const CriticalEventsList = ({ clips, onOpenClip }) => (
  <div className="flex flex-col gap-2.5">
    {clips.map((clip, idx) => (
      <CriticalEventListItem key={clip.id} clip={clip} idx={idx} onOpen={() => onOpenClip && onOpenClip(clip)} />
    ))}
  </div>
);

export { CriticalEventsHeader, CriticalEventsList, FeaturedClipCard };
