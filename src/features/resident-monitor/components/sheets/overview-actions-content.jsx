import { IconInBed } from "../icons.jsx";
import { IconArrowRight } from "../ui-icons/index.js";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RM_BADGE_PRESETS, RM_OVERVIEW_ACTION_VARIANT_BY_TONE } from "../../lib/design-system.js";

const OverviewQuickActionTile = ({ action }) => (
  <Button
    type="button"
    variant={RM_OVERVIEW_ACTION_VARIANT_BY_TONE[action.tone] || "surface"}
    size="tile"
    onClick={action.onClick}
    disabled={action.disabled}
    className="relative [min-height:var(--rm-overview-action-min-height)] items-start justify-start rounded-2xl px-4 pb-3.5 pt-4 text-left text-[length:var(--rm-overview-action-label-size)] font-bold leading-[1.3] whitespace-pre-line text-[var(--rm-overview-action-text)] transition-transform active:scale-[0.992] max-[720px]:[min-height:var(--rm-overview-action-min-height-mobile)] max-[720px]:text-[length:var(--rm-overview-action-label-size-mobile)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-overview-focus-outline)] disabled:pointer-events-none disabled:opacity-[0.6]"
    aria-label={action.label ? action.label.replace("\n", " ") : undefined}
  >
    {action.label && <span className="pr-7">{action.label}</span>}
    {action.badge && (
      <Badge
        {...RM_BADGE_PRESETS.critical}
        className="absolute bottom-3 left-4 flex size-6 items-center justify-center rounded-full text-[length:var(--rm-fs-caption)] font-extrabold"
      >
        {action.badge}
      </Badge>
    )}
    {action.isBlank && (
      <span className="absolute bottom-2.5 right-3.5 [opacity:var(--rm-overview-action-placeholder-opacity)]">
        <IconInBed size={32} />
      </span>
    )}
    {action.arrow && !action.disabled && (
      <span className="absolute right-3.5 top-4 [opacity:var(--rm-overview-action-arrow-opacity)]">
        <IconArrowRight stroke="var(--rm-overview-action-icon)" />
      </span>
    )}
  </Button>
);

const OverviewActionsHeading = () => (
  <div className="mb-3 flex flex-col gap-0.5">
    <span className="text-[length:var(--rm-fs-title)] font-bold tracking-[-0.35px] text-[var(--rm-overview-title)]">
      Quick actions
    </span>
    <span className="text-[length:var(--rm-fs-meta)] font-medium text-[var(--rm-overview-subtitle)]">
      Triage and response shortcuts
    </span>
  </div>
);

const OverviewActionsContent = ({ quickActions }) => (
  <>
    <OverviewActionsHeading />
    <div className="grid grid-cols-2 gap-3">
      {quickActions.map((action, index) => (
        <OverviewQuickActionTile key={action.id ?? index} action={action} />
      ))}
    </div>
  </>
);

export { OverviewActionsContent };
