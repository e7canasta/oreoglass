import { IconSittingOnBedLarge } from "../icons.jsx";
import { IconAlertMark, IconArrowRight, IconClose } from "../ui-icons/index.js";
import { Button } from "@/components/ui/button";
import { RM_BUTTON_PRESETS } from "../../lib/design-system.js";

const AlarmSheetHeader = ({ roomLabel, onClose }) => (
  <header className="flex items-center justify-between gap-3 px-5 pb-1.5 pt-2.5">
    <span className="text-[length:var(--rm-fs-display)] font-extrabold leading-none tracking-[-0.8px] text-[var(--alarm-text)]">
      {roomLabel}
    </span>
    <Button
      type="button"
      {...RM_BUTTON_PRESETS.alarmClose}
      onClick={onClose}
      className="shrink-0 focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--alarm-focus-outline)]"
    >
      <IconClose />
    </Button>
  </header>
);

const AlarmStatusRow = ({ resident, location }) => (
  <div className="px-5 pb-3.5 pt-1">
    <div className="flex items-center gap-[9px]">
      <div className="rm-alarm-beacon flex size-[26px] shrink-0 items-center justify-center rounded-full [background:var(--alarm-alert-icon-bg)]">
        <IconAlertMark color="var(--alarm-accent)" />
      </div>
      <span className="text-[length:var(--rm-fs-body-strong)] font-bold text-[var(--alarm-text)]">
        Alarm
      </span>
    </div>
    <div className="mt-1.5 truncate text-[length:var(--rm-fs-meta)] text-[var(--alarm-muted)]">
      {resident}
      {location ? ` · ${location}` : ""}
    </div>
  </div>
);

const AlarmEventCard = ({ eventLabel, secondsAgo }) => (
  <div className="rm-alarm-event-card mx-[12px] mb-3.5 flex items-start justify-between overflow-visible rounded-[22px] border-[1.5px] pb-4 pl-4 pr-2 pt-4 [background:var(--alarm-card-bg)] [border-color:var(--alarm-card-border)] [box-shadow:var(--alarm-card-shadow)]">
    <div className="flex-1">
      <div className="inline-flex items-center rounded-full border px-2 py-[3px] text-[length:var(--rm-fs-micro)] font-semibold tracking-[0.15px] [background:var(--alarm-event-chip-bg)] [border-color:var(--alarm-event-chip-border)] text-[var(--alarm-event-chip-text)]">
        Possible fall
      </div>
      <div className="rm-alarm-event-title mt-2 max-w-[190px] text-[length:var(--rm-fs-hero)] font-extrabold leading-[1.18] tracking-[-0.5px] text-[var(--alarm-text)]">
        {eventLabel}
      </div>
      <div className="mt-1 text-[length:var(--rm-fs-meta)] font-medium text-[var(--alarm-muted)]">Urgent event detected</div>
      <div className="rm-alarm-seconds-ago mt-2 text-[length:var(--rm-fs-meta)] font-medium text-[var(--alarm-muted)]">
        <span className="rm-alarm-seconds-value">{secondsAgo}</span>
        <span className="rm-alarm-seconds-unit"> seconds ago</span>
      </div>
    </div>
    <div className="rm-alarm-event-pictogram -mr-1 ml-1 mt-[-2px] shrink-0">
      <IconSittingOnBedLarge
        size={96}
        className="drop-shadow-[0_4px_10px_rgba(0,0,0,0.2)]"
        color="var(--alarm-pictogram-color)"
        surface="var(--alarm-pictogram-surface)"
        surfaceMuted="var(--alarm-pictogram-surface-muted)"
        surfaceSoft="var(--alarm-pictogram-surface-soft)"
      />
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
  const eventLabel = clip?.event ?? "Sitting on bed edge";

  return (
    <>
      <AlarmSheetHeader roomLabel={roomLabel} onClose={onClose} />
      <AlarmStatusRow resident={resident} location={location} />
      <AlarmEventCard eventLabel={eventLabel} secondsAgo={secondsAgo} />
      <AlarmPrimaryActions onClose={onClose} onViewLive={onViewLive} />
      <AlarmForwardAction onFallReview={onFallReview} />
    </>
  );
};

export { AlarmSheetContent };
