import { AppHeaderActionButton, AppHeaderRow } from "../chrome/header-layout.jsx";
import { RoomSeal } from "../chrome/room-seal.jsx";
import { IconArrowLeft } from "../ui-icons/index.js";

const SleepDetailHeader = ({ room, onBack }) => {
  const roomNumber = room?.number ?? "";
  const locationLabel = room?.location ?? "Resident sleep profile";

  return (
    <AppHeaderRow className="[padding-top:var(--rm-sleep-header-padding-top)] [padding-bottom:var(--rm-sleep-header-padding-bottom)]">
      <AppHeaderActionButton
        onClick={onBack}
        className="[background:var(--rm-sleep-back-bg)] [border-color:var(--rm-sleep-back-border)] [backdrop-filter:blur(10px)_saturate(1.08)] focus-visible:[outline-color:var(--rm-sleep-focus-outline)]"
        aria-label="Back"
      >
        <IconArrowLeft stroke="var(--rm-sleep-back-icon)" />
      </AppHeaderActionButton>

      <div className="min-w-0 flex-1 text-center">
        <div className="flex items-center justify-center [column-gap:var(--rm-sleep-header-glyph-gap)]">
          <span className="text-[length:var(--rm-fs-body-strong)] tracking-[-1px] text-[var(--rm-sleep-header-glyph)]">
            z<sup className="text-[length:var(--rm-fs-micro)]">z</sup>
          </span>
          <span className="text-[length:var(--rm-fs-title)] font-bold tracking-[-0.3px] text-[var(--rm-sleep-header-title)]">
            Sleep insights
          </span>
        </div>
        <div className="mt-1 flex min-w-0 items-center justify-center gap-2">
          {roomNumber ? <RoomSeal roomNumber={roomNumber} /> : null}
          <span className="truncate text-[length:var(--rm-fs-meta)] text-[var(--rm-sleep-header-subtitle)]">
            {locationLabel}
          </span>
        </div>
      </div>
      <div aria-hidden className="h-[var(--rm-app-header-action-size)] w-[var(--rm-app-header-action-size)] shrink-0" />
    </AppHeaderRow>
  );
};

export { SleepDetailHeader };
