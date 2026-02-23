import { IconInBed } from "./icons.jsx";
import {
  IconArrowRight,
} from "./ui-icons/index.js";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { RM_BADGE_PRESETS, RM_OVERVIEW_ACTION_VARIANT_BY_TONE } from "../lib/design-system.js";

const OverviewActionSheet = ({
  open,
  onOpenChange,
  onOpenCriticalEvents,
  onOpenLatestActivity,
  onOpenComponentLab,
}) => {
  const quickActions = [
    { id: "fall", label: "Fall clips", arrow: true, badge: 6, tone: "critical", onClick: onOpenCriticalEvents },
    { id: "mute", label: "Mute for\n10 minutes", tone: "neutral" },
    { id: "latest", label: "Latest\nActivity", arrow: true, tone: "neutral", onClick: onOpenLatestActivity },
    onOpenComponentLab
      ? { id: "lab", label: "Component\nLab", arrow: true, tone: "muted", onClick: onOpenComponentLab }
      : { id: "soon", label: "Coming\nsoon", isBlank: true, tone: "blank" },
  ];

  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction="bottom">
      <DrawerContent
        showHandle={false}
        overlayClassName="[background:var(--rm-overview-sheet-overlay)]"
        className="fixed inset-x-0 bottom-0 z-50 min-h-[clamp(286px,35vh,336px)] rounded-t-[24px] border px-4 pb-[calc(16px+env(safe-area-inset-bottom,0px))] pt-3 [background:var(--rm-overview-sheet-bg)] [box-shadow:var(--rm-overview-sheet-shadow)] [border-color:var(--rm-overview-sheet-border)] backdrop-blur-[20px] max-[720px]:min-h-0"
        aria-label="Quick actions"
      >
        <div className="mx-auto mb-3 h-1 w-[38px] rounded-[2px] [background:var(--rm-overview-handle-bg)]" />
        <div className="mb-3 flex flex-col gap-0.5">
          <span className="text-[length:var(--rm-fs-title)] font-bold tracking-[-0.35px] text-[var(--rm-overview-title)]">
            Quick actions
          </span>
          <span className="text-[length:var(--rm-fs-meta)] font-medium text-[var(--rm-overview-subtitle)]">
            Triage and response shortcuts
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((btn, i) => (
            <Button
              type="button"
              variant={RM_OVERVIEW_ACTION_VARIANT_BY_TONE[btn.tone] || "surface"}
              size="tile"
              key={btn.id ?? i}
              onClick={btn.onClick}
              className="relative min-h-[108px] items-start justify-start rounded-2xl px-4 pb-3.5 pt-4 text-left text-[length:var(--rm-fs-body)] font-bold leading-[1.3] whitespace-pre-line text-[var(--rm-overview-action-text)] transition-transform active:scale-[0.992] max-[720px]:min-h-24 max-[720px]:text-[length:var(--rm-fs-meta)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-overview-focus-outline)]"
              aria-label={btn.label ? btn.label.replace("\n", " ") : undefined}
            >
              {btn.label && <span className="pr-7">{btn.label}</span>}
              {btn.badge && (
                <Badge
                  {...RM_BADGE_PRESETS.critical}
                  className="absolute bottom-3 left-4 flex size-6 items-center justify-center rounded-full text-[length:var(--rm-fs-caption)] font-extrabold"
                >
                  {btn.badge}
                </Badge>
              )}
              {btn.isBlank && (
                <span className="absolute bottom-2.5 right-3.5 [opacity:var(--rm-overview-action-placeholder-opacity)]">
                  <IconInBed size={32} />
                </span>
              )}
              {btn.arrow && (
                <span className="absolute right-3.5 top-4 [opacity:var(--rm-overview-action-arrow-opacity)]">
                  <IconArrowRight stroke="var(--rm-overview-action-icon)" />
                </span>
              )}
            </Button>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export { OverviewActionSheet };
