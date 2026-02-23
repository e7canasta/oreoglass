import { Button } from "@/components/ui/button";
import { RM_BUTTON_PRESETS } from "../lib/design-system.js";
import { ThermalViewLive } from "./thermal.jsx";
import { IconArrowLeft } from "./ui-icons/index.js";

const LiveViewHeader = ({ onBack }) => (
  <header className="flex shrink-0 items-center justify-between gap-2.5 px-[18px] pb-[18px]">
    <button
      type="button"
      onClick={onBack}
      className="flex min-h-[var(--rm-hit-min)] min-w-0 flex-1 items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-live-focus-outline)]"
    >
      <IconArrowLeft stroke="var(--rm-live-back-icon)" />
      <span className="truncate text-[length:var(--rm-fs-title)] font-bold tracking-[-0.3px] text-[var(--rm-live-back-label)]">
        122.2 - Live
      </span>
    </button>

    <div className="flex shrink-0 items-center gap-1.5 rounded-[20px] border px-[13px] py-[6px] [background:var(--rm-live-badge-bg)] [border-color:var(--rm-live-badge-border)] [box-shadow:var(--rm-live-badge-shadow)]">
      <div className="size-2 animate-pulse rounded-full [background:var(--rm-live-badge-dot)]" />
      <span className="text-[length:var(--rm-fs-meta)] font-bold tracking-[0.5px] text-[var(--rm-live-badge-text)]">
        LIVE
      </span>
    </div>
  </header>
);

const LiveViewThermalStage = () => (
  <div className="mx-[14px] [height:var(--rm-live-thermal-height)] shrink-0 overflow-hidden rounded-[var(--rm-live-thermal-radius)] [background:var(--rm-live-thermal-bg)] [box-shadow:var(--rm-live-thermal-shadow)]">
    <ThermalViewLive />
  </div>
);

const LiveViewEventCard = () => (
  <section className="mx-[14px] mt-[14px] shrink-0 rounded-[var(--rm-live-event-radius)] border px-4 pb-4 pt-[14px] [background:var(--rm-live-event-bg)] [border-color:var(--rm-live-event-border)]">
    <div className="mb-2 flex items-center justify-between">
      <span className="text-[length:var(--rm-fs-meta)] font-medium text-[var(--rm-live-event-meta)]">Event detected</span>
      <span className="text-[length:var(--rm-fs-meta)] font-medium text-[var(--rm-live-event-meta)]">01:24</span>
    </div>
    <div className="flex items-center gap-2.5">
      <div className="size-[11px] shrink-0 rounded-full [background:var(--rm-live-event-dot-bg)] [box-shadow:var(--rm-live-event-dot-shadow)]" />
      <span className="text-[length:var(--rm-fs-body-strong)] font-bold tracking-[-0.2px] text-[var(--rm-live-event-title)]">
        Alarm - Sitting on bed edge
      </span>
    </div>
  </section>
);

const LiveViewActions = ({ onPrimary, onSecondary }) => (
  <div className="mt-auto grid grid-cols-2 gap-2.5 px-[14px] [padding-bottom:var(--rm-live-actions-padding-bottom)] pt-3">
    <Button
      type="button"
      {...RM_BUTTON_PRESETS.livePrimary}
      onClick={onPrimary}
      className="[min-height:var(--rm-live-action-min-height)] rounded-[var(--rm-live-action-radius)] px-3 py-4 text-[length:var(--rm-fs-body-strong)] font-bold tracking-[-0.2px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-live-focus-outline)] active:scale-[0.994]"
    >
      On my way
    </Button>
    <Button
      type="button"
      {...RM_BUTTON_PRESETS.liveSecondary}
      onClick={onSecondary}
      className="[min-height:var(--rm-live-action-min-height)] rounded-[var(--rm-live-action-radius)] px-3 py-4 text-[length:var(--rm-fs-body-strong)] font-bold tracking-[-0.2px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-live-focus-outline)] active:scale-[0.994]"
    >
      Dismiss
    </Button>
  </div>
);

export {
  LiveViewActions,
  LiveViewEventCard,
  LiveViewHeader,
  LiveViewThermalStage,
};
