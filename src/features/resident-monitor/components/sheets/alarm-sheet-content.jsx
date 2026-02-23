import { AlarmEventRasterArt, IconSittingOnBedLarge } from "../icons.jsx";
import { RoomSeal } from "../chrome/room-seal.jsx";
import { IconAlertMark, IconArrowRight, IconClose } from "../ui-icons/index.js";
import { Button } from "@/components/ui/button";
import { RM_BUTTON_PRESETS } from "../../lib/design-system.js";
import {
  ROOM_ART_STATE,
  RM_USE_RASTER_PICTOGRAMS,
  resolveAlarmArtState,
  resolveArtImage,
} from "../../lib/artwork-images.js";

const AlarmSheetHeader = ({ roomLabel, resident, location, onClose }) => (
  <header className="px-5 pb-2.5 pt-0.5">
    <div className="flex items-start justify-between gap-3">
      <div className="min-w-0">
        <div className="flex min-w-0 items-center gap-2">
          <RoomSeal roomNumber={roomLabel} size="lg" />
          <span className="truncate text-[length:var(--rm-fs-body-strong)] font-bold leading-[1.05] text-[var(--alarm-text)]">
            Alarm
          </span>
        </div>
        <div className="mt-2 flex min-w-0 items-center gap-[9px]">
          <div className="rm-alarm-beacon mt-0.5 flex size-[26px] shrink-0 items-center justify-center rounded-full [background:var(--alarm-alert-icon-bg)]">
            <IconAlertMark color="var(--alarm-accent)" />
          </div>
          <div className="min-w-0 truncate text-[length:var(--rm-fs-meta)] leading-[1.1] text-[var(--alarm-muted)]">
            {resident}
            {location ? ` · ${location}` : ""}
          </div>
        </div>
      </div>
      <Button
        type="button"
        {...RM_BUTTON_PRESETS.alarmClose}
        onClick={onClose}
        className="shrink-0 [width:var(--alarm-close-size)] [height:var(--alarm-close-size)] focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--alarm-focus-outline)]"
      >
        <IconClose />
      </Button>
    </div>
  </header>
);

const AlarmEventCard = ({ eventLabel, secondsAgo, artImage, artVariant }) => (
  <div className="rm-alarm-event-card mx-[12px] mb-3.5 flex items-start justify-between overflow-visible rounded-[22px] border-[1.5px] pb-4 pl-4 pr-2 pt-4 [background:var(--alarm-card-bg)] [border-color:var(--alarm-card-border)] [box-shadow:var(--alarm-card-shadow)]">
    <div className="rm-alarm-event-content">
      <div className="inline-flex items-center rounded-full border px-2 py-[3px] text-[length:var(--rm-fs-micro)] font-semibold tracking-[0.15px] [background:var(--alarm-event-chip-bg)] [border-color:var(--alarm-event-chip-border)] text-[var(--alarm-event-chip-text)]">
        Possible fall
      </div>
      <div className="rm-alarm-event-title mt-2 text-[length:var(--rm-fs-hero)] font-extrabold leading-[1.18] tracking-[-0.5px] text-[var(--alarm-text)]">
        {eventLabel}
      </div>
      <div className="mt-1 text-[length:var(--rm-fs-meta)] font-medium text-[var(--alarm-muted)]">Urgent event detected</div>
      <div className="rm-alarm-seconds-ago mt-2 text-[length:var(--rm-fs-meta)] font-medium text-[var(--alarm-muted)]">
        <span className="rm-alarm-seconds-value">{secondsAgo}</span>
        <span className="rm-alarm-seconds-unit"> seconds ago</span>
      </div>
    </div>
    <div className="rm-alarm-event-pictogram">
      {RM_USE_RASTER_PICTOGRAMS ? (
        <AlarmEventRasterArt
          src={artImage}
          variant={artVariant}
          className="rm-alarm-event-raster"
        />
      ) : (
        <IconSittingOnBedLarge
          size={100}
          className="rm-alarm-event-icon"
          color="var(--alarm-pictogram-color)"
          surface="var(--alarm-pictogram-surface)"
          surfaceMuted="var(--alarm-pictogram-surface-muted)"
          surfaceSoft="var(--alarm-pictogram-surface-soft)"
        />
      )}
    </div>
  </div>
);

const AlarmPrimaryActions = ({ onClose, onViewLive }) => (
  <div className="grid grid-cols-2 gap-2.5 px-[14px]">
    <Button
      type="button"
      {...RM_BUTTON_PRESETS.alarmPrimary}
      onClick={onClose}
      className="[min-height:var(--rm-alarm-action-min-height)] flex-col items-start justify-center gap-1 rounded-[var(--rm-alarm-action-radius)] px-2.5 py-3.5 text-left whitespace-normal [background:var(--alarm-cta-bg)] [border-color:var(--alarm-cta-border)] text-[var(--alarm-cta-text)] [box-shadow:var(--alarm-cta-shadow)] focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--alarm-focus-outline)] active:scale-[0.99]"
    >
      <span className="block text-[length:var(--rm-fs-body-strong)] font-bold leading-[1.2]">On my way</span>
      <span className="block text-[length:var(--rm-fs-meta)] font-medium leading-[1.2] text-[var(--alarm-primary-meta)]">
        Acknowledge and respond
      </span>
    </Button>
    <Button
      type="button"
      {...RM_BUTTON_PRESETS.alarmSecondary}
      onClick={onViewLive}
      className="[min-height:var(--rm-alarm-action-min-height)] flex-col items-start justify-center gap-1 rounded-[var(--rm-alarm-action-radius)] px-2.5 py-3.5 text-left whitespace-normal [background:var(--alarm-btn-secondary-bg)] [border-color:var(--alarm-btn-secondary-border)] text-[var(--alarm-btn-secondary-text)] [box-shadow:var(--alarm-secondary-shadow)] focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--alarm-focus-outline)] active:scale-[0.99]"
    >
      <span className="block text-[length:var(--rm-fs-body-strong)] font-bold leading-[1.2]">View live</span>
      <span className="block text-[length:var(--rm-fs-meta)] font-medium leading-[1.2] text-[var(--alarm-secondary-meta)]">
        Open live view
      </span>
    </Button>
  </div>
);

const AlarmForwardAction = ({ onFallReview }) => (
  <div className="px-[14px] pt-2.5">
    <Button
      type="button"
      {...RM_BUTTON_PRESETS.alarmForward}
      onClick={onFallReview}
      className="flex [min-height:var(--rm-alarm-action-min-height)] w-full items-center justify-between rounded-[var(--rm-alarm-action-radius)] px-[18px] py-[13px] text-left whitespace-normal [background:var(--alarm-forward-bg)] [border-color:var(--alarm-forward-border)] [box-shadow:var(--alarm-forward-shadow)] focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--alarm-focus-outline)] active:scale-[0.99]"
    >
      <span className="min-w-0">
        <span className="block text-[length:var(--rm-fs-body-strong)] font-bold text-[var(--alarm-btn-forward-text)]">Forward to triage</span>
        <span className="mt-0.5 block truncate text-[length:var(--rm-fs-meta)] text-[var(--alarm-forward-meta)]">Escalate to next caregiver</span>
      </span>
      <IconArrowRight />
    </Button>
  </div>
);

const AlarmSheetContent = ({ room, clip, onClose, onViewLive, onFallReview, secondsAgo }) => {
  const roomLabel = room?.number ?? clip?.room ?? "122.2";
  const resident = clip?.resident ?? "Resident";
  const location = room?.location ?? clip?.location ?? "Alarm feed";
  const eventLabel = clip?.event ?? "Falling beside bed";
  const alarmArtState = resolveAlarmArtState({ clip, room });
  const alarmArtImage = resolveArtImage(alarmArtState);
  const alarmArtVariant = alarmArtState === ROOM_ART_STATE.ON_FLOOR ? "on-floor" : "falling";

  return (
    <>
      <AlarmSheetHeader
        roomLabel={roomLabel}
        resident={resident}
        location={location}
        onClose={onClose}
      />
      <AlarmEventCard
        eventLabel={eventLabel}
        secondsAgo={secondsAgo}
        artImage={alarmArtImage}
        artVariant={alarmArtVariant}
      />
      <AlarmPrimaryActions onClose={onClose} onViewLive={onViewLive} />
      <AlarmForwardAction onFallReview={onFallReview} />
    </>
  );
};

export { AlarmSheetContent };
