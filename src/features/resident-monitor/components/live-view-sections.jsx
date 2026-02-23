import { Button } from "@/components/ui/button";
import { RM_BUTTON_PRESETS } from "../lib/design-system.js";
import { AppHeaderActionButton, AppHeaderLeading, AppHeaderRow } from "./chrome/header-layout.jsx";
import { RoomSeal } from "./chrome/room-seal.jsx";
import { ThermalViewLive } from "./thermal.jsx";
import { IconArrowLeft } from "./ui-icons/index.js";

const LiveViewHeader = ({ room, clip, onBack }) => {
  const roomNumber = room?.number ?? "122.2";
  const resident = clip?.resident;
  const locationLabel = room?.location ?? clip?.location ?? "Alarm feed";

  return (
    <AppHeaderRow className="[column-gap:var(--rm-live-header-gap)] [padding-top:var(--rm-live-header-padding-top)] [padding-bottom:var(--rm-live-header-padding-bottom)]">
      <AppHeaderLeading className="min-w-0 flex-1 [column-gap:var(--rm-live-header-leading-gap)]">
        <AppHeaderActionButton
          onClick={onBack}
          aria-label="Back to alarm"
          className="[width:var(--rm-hit-compact)] [height:var(--rm-hit-compact)] [background:var(--rm-live-back-bg)] [border-color:var(--rm-live-back-border)] [backdrop-filter:blur(10px)_saturate(1.08)] focus-visible:[outline-color:var(--rm-live-focus-outline)]"
        >
          <IconArrowLeft stroke="var(--rm-live-back-icon)" />
        </AppHeaderActionButton>

        <div className="min-w-0">
          <div className="flex min-w-0 items-center gap-2">
            <RoomSeal roomNumber={roomNumber} />
            <div className="truncate text-[length:var(--rm-fs-title)] font-bold tracking-[-0.3px] text-[var(--rm-live-back-label)]">
              Live view
            </div>
          </div>
          <div className="truncate text-[length:var(--rm-fs-meta)] text-[var(--rm-live-header-subtitle)]">
            {resident ? `${resident} · ${locationLabel}` : locationLabel}
          </div>
        </div>
      </AppHeaderLeading>

      <div className="flex shrink-0 items-center gap-1.5 rounded-[18px] border px-[11px] py-[5px] [background:var(--rm-live-badge-bg)] [border-color:var(--rm-live-badge-border)] [box-shadow:var(--rm-live-badge-shadow)]">
        <div className="size-1.5 animate-pulse rounded-full [background:var(--rm-live-badge-dot)]" />
        <span className="text-[length:var(--rm-fs-micro)] font-bold tracking-[0.45px] text-[var(--rm-live-badge-text)]">
          LIVE
        </span>
      </div>
    </AppHeaderRow>
  );
};

const LiveViewThermalStage = () => (
  <div className="mx-[14px] [height:var(--rm-live-thermal-height)] shrink-0 overflow-hidden rounded-[var(--rm-live-thermal-radius)] [background:var(--rm-live-thermal-bg)] [box-shadow:var(--rm-live-thermal-shadow)]">
    <ThermalViewLive />
  </div>
);

const LiveViewEventCard = ({ room, clip }) => {
  const roomNumber = room?.number ?? "122.2";
  const locationLabel = room?.location ?? clip?.location ?? "Alarm feed";
  const resident = clip?.resident ?? "Resident";
  const eventLabel = clip?.event ?? "Falling beside bed";
  const clipTime = clip?.time?.split("–")?.[0]?.trim() ?? "01:24";

  return (
    <section className="mx-[14px] mt-[14px] shrink-0 rounded-[var(--rm-live-event-radius)] border px-4 pb-4 pt-[14px] [background:var(--rm-live-event-bg)] [border-color:var(--rm-live-event-border)]">
      <div className="mb-2 flex items-center justify-between">
        <span className="inline-flex items-center rounded-full border px-2 py-[3px] text-[length:var(--rm-fs-micro)] font-semibold tracking-[0.15px] [background:var(--rm-live-event-chip-bg)] [border-color:var(--rm-live-event-chip-border)] text-[var(--rm-live-event-chip-text)]">
          Active alert
        </span>
        <span className="text-[length:var(--rm-fs-meta)] font-medium text-[var(--rm-live-event-meta)]">{clipTime}</span>
      </div>
      <div className="flex items-center gap-2.5">
        <div className="size-[11px] shrink-0 rounded-full [background:var(--rm-live-event-dot-bg)] [box-shadow:var(--rm-live-event-dot-shadow)]" />
        <span className="text-[length:var(--rm-fs-body-strong)] font-bold tracking-[-0.2px] text-[var(--rm-live-event-title)]">
          Possible fall: {eventLabel}
        </span>
      </div>
      <div className="mt-1.5 text-[length:var(--rm-fs-meta)] text-[var(--rm-live-event-meta)]">
        {resident} · {locationLabel}
      </div>
      <div className="mt-2">
        <RoomSeal roomNumber={roomNumber} />
      </div>
    </section>
  );
};

const LiveViewActions = ({ onPrimary, onReview }) => (
  <div className="mt-auto grid grid-cols-2 gap-2.5 px-[14px] [padding-bottom:var(--rm-live-actions-padding-bottom)] pt-3">
    <Button
      type="button"
      {...RM_BUTTON_PRESETS.livePrimary}
      onClick={onPrimary}
      className="[min-height:var(--rm-live-action-min-height)] rounded-[var(--rm-live-action-radius)] px-3 py-4 text-[length:var(--rm-fs-body-strong)] font-bold tracking-[-0.2px] text-[var(--rm-live-action-primary-text)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-live-focus-outline)] active:scale-[0.994]"
    >
      On my way
    </Button>
    <Button
      type="button"
      {...RM_BUTTON_PRESETS.liveSecondary}
      onClick={onReview}
      className="[min-height:var(--rm-live-action-min-height)] rounded-[var(--rm-live-action-radius)] px-3 py-4 text-[length:var(--rm-fs-body-strong)] font-bold tracking-[-0.2px] text-[var(--rm-live-action-secondary-text)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-live-focus-outline)] active:scale-[0.994]"
    >
      Review clip
    </Button>
  </div>
);

export {
  LiveViewActions,
  LiveViewEventCard,
  LiveViewHeader,
  LiveViewThermalStage,
};
