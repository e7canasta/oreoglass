import { IconSittingOnBedLarge } from "../icons.jsx";
import { IconAlertMark, IconArrowRight, IconClose } from "../ui-icons/index.js";
import { Button } from "@/components/ui/button";
import { RM_BUTTON_PRESETS } from "../../lib/design-system.js";

const AlarmSheetHeader = ({ onClose }) => (
  <header className="flex items-center justify-between gap-3 px-5 pb-1.5 pt-2.5">
    <span className="text-[length:var(--rm-fs-display)] font-extrabold leading-none tracking-[-0.8px] text-[var(--alarm-text)]">
      122.2
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

const AlarmStatusRow = () => (
  <div className="flex items-center gap-[9px] px-5 pb-3.5 pt-1">
    <div className="rm-alarm-beacon flex size-[26px] shrink-0 items-center justify-center rounded-full [background:var(--alarm-alert-icon-bg)]">
      <IconAlertMark color="var(--alarm-accent)" />
    </div>
    <span className="text-[length:var(--rm-fs-body-strong)] font-bold text-[var(--alarm-text)]">
      Alarm
    </span>
  </div>
);

const AlarmEventCard = ({ secondsAgo }) => (
  <div className="rm-alarm-event-card mx-[12px] mb-3.5 flex items-start justify-between overflow-visible rounded-[22px] border-[1.5px] pb-4 pl-4 pr-2 pt-4 [background:var(--alarm-card-bg)] [border-color:var(--alarm-card-border)] [box-shadow:var(--alarm-card-shadow)]">
    <div className="flex-1">
      <div className="rm-alarm-event-title max-w-[190px] text-[length:var(--rm-fs-hero)] font-extrabold leading-[1.18] tracking-[-0.5px] text-[var(--alarm-text)]">
        Sitting on
        <br />
        bed edge
      </div>
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
      className="[min-height:var(--rm-alarm-action-min-height)] rounded-[var(--rm-alarm-action-radius)] px-2.5 py-3.5 text-center text-[length:var(--rm-fs-body-strong)] leading-[1.25] font-bold [background:var(--alarm-cta-bg)] [border-color:var(--alarm-cta-border)] text-[var(--alarm-cta-text)] [box-shadow:var(--alarm-cta-shadow)] focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--alarm-focus-outline)] active:scale-[0.99]"
    >
      On my
      <br />
      way
    </Button>
    <Button
      type="button"
      {...RM_BUTTON_PRESETS.alarmSecondary}
      onClick={onViewLive}
      className="[min-height:var(--rm-alarm-action-min-height)] rounded-[var(--rm-alarm-action-radius)] px-2.5 py-3.5 text-center text-[length:var(--rm-fs-body-strong)] leading-[1.25] font-bold [box-shadow:var(--alarm-secondary-shadow)] focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--alarm-focus-outline)] active:scale-[0.99]"
    >
      View
      <br />
      live
    </Button>
  </div>
);

const AlarmForwardAction = ({ onFallReview }) => (
  <div className="px-[14px] pt-2.5">
    <Button
      type="button"
      {...RM_BUTTON_PRESETS.alarmForward}
      onClick={onFallReview}
      className="flex [min-height:var(--rm-alarm-action-min-height)] w-full items-center justify-between rounded-[var(--rm-alarm-action-radius)] px-[18px] py-[13px] text-[length:var(--rm-fs-body-strong)] font-bold [box-shadow:var(--alarm-forward-shadow)] focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--alarm-focus-outline)] active:scale-[0.99]"
    >
      <span>Forward to</span>
      <IconArrowRight />
    </Button>
  </div>
);

const AlarmSheetContent = ({ onClose, onViewLive, onFallReview, secondsAgo }) => (
  <>
    <AlarmSheetHeader onClose={onClose} />
    <AlarmStatusRow />
    <AlarmEventCard secondsAgo={secondsAgo} />
    <AlarmPrimaryActions onClose={onClose} onViewLive={onViewLive} />
    <AlarmForwardAction onFallReview={onFallReview} />
  </>
);

export { AlarmSheetContent };
