import { useRef } from "react";

import { AppHeaderActionButton, AppHeaderLeading, AppHeaderRow } from "../chrome/header-layout.jsx";
import { IconFalling, IconInBed, IconStanding } from "../icons.jsx";
import { ActivityTile, SleepChart } from "../room-detail/widgets/index.js";
import { IconChevronRight, IconClose, IconWideChevronDown } from "../ui-icons/index.js";
import { cn } from "@/lib/utils";

const ROOM_STATUS_DOT_TONE_BY_STATUS = Object.freeze({
  alert: "alert",
  sleep: "warm",
  out: "info",
});

const BED_ACTIVITY_SWIPE_THRESHOLD = 42;
const BED_ACTIVITY_VERTICAL_PRIORITY = 12;

const RoomDetailHeader = ({ room, onClose, dotTone }) => (
  <AppHeaderRow className="[padding-top:var(--rm-room-detail-header-padding-top)] [padding-bottom:var(--rm-room-detail-header-padding-bottom)]">
    <AppHeaderLeading className="[column-gap:var(--rm-room-detail-header-gap)]">
      <div
        className={cn(
          "size-[var(--rm-room-detail-dot-size)] shrink-0 rounded-full [background:var(--rm-room-detail-dot-default)]",
          dotTone === "alert" &&
            "[background:var(--rm-room-detail-dot-alert)] [box-shadow:var(--rm-room-detail-dot-alert-shadow)]",
          dotTone === "warm" &&
            "[background:var(--rm-room-detail-dot-warm)] [box-shadow:var(--rm-room-detail-dot-warm-shadow)]",
          dotTone === "info" &&
            "[background:var(--rm-room-detail-dot-info)] [box-shadow:var(--rm-room-detail-dot-info-shadow)]",
        )}
      />
      <div className="min-w-0">
        <div className="truncate text-[length:var(--rm-room-detail-title-size)] leading-[1.08] font-bold tracking-[-0.32px] text-[var(--rm-room-detail-text)]">
          {room.number}
        </div>
        <div className="truncate text-[length:var(--rm-room-detail-location-size)] leading-[1.24] text-[var(--rm-room-detail-muted)]">
          {room.location}
        </div>
      </div>
    </AppHeaderLeading>

    <AppHeaderActionButton
      onClick={onClose}
      className="[background:var(--rm-room-detail-close-bg)] [border-color:var(--rm-room-detail-close-border)] focus-visible:[outline-color:var(--rm-room-detail-focus)]"
      aria-label="Close room details"
    >
      <IconClose stroke="var(--rm-room-detail-close-icon)" strokeWidth={2.2} />
    </AppHeaderActionButton>
  </AppHeaderRow>
);

const RoomActivitySection = ({ onOpenFallClip, onOpenBedActivity }) => {
  const touchStartRef = useRef(null);

  const handleTouchStart = (event) => {
    const [touchPoint] = event.touches;
    if (!touchPoint) {
      return;
    }

    touchStartRef.current = { x: touchPoint.clientX, y: touchPoint.clientY };
  };

  const handleTouchEnd = (event) => {
    if (typeof onOpenBedActivity !== "function") {
      return;
    }

    const touchStart = touchStartRef.current;
    const [touchPoint] = event.changedTouches;
    touchStartRef.current = null;

    if (!touchStart || !touchPoint) {
      return;
    }

    const deltaY = touchStart.y - touchPoint.clientY;
    const deltaX = Math.abs(touchStart.x - touchPoint.clientX);
    if (deltaY > BED_ACTIVITY_SWIPE_THRESHOLD && deltaY > deltaX + BED_ACTIVITY_VERTICAL_PRIORITY) {
      onOpenBedActivity();
    }
  };

  return (
    <div className="px-[14px] pb-4">
      <div className="mb-2.5 flex items-center justify-between gap-2.5">
        <div className="flex min-w-0 items-center gap-[7px]">
          <IconStanding size={22} />
          <span className="text-[length:var(--rm-fs-title)] font-bold text-[var(--rm-room-detail-text)]">
            Activity
          </span>
        </div>
        <span className="whitespace-nowrap text-[length:var(--rm-fs-meta)] text-[var(--rm-room-detail-meta)]">
          last 12 hours
        </span>
      </div>

      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="overflow-hidden rounded-[14px] border [background:var(--rm-room-detail-card-bg)] [border-color:var(--rm-room-detail-card-border)] [box-shadow:var(--rm-room-detail-card-shadow)]"
      >
        <div className="overflow-x-auto px-2 pb-2.5 pt-3">
          <div className="flex min-w-max items-stretch gap-1.5">
            <ActivityTile time="08:12" icon={<IconInBed size={38} />} />
            <ActivityTile time="09:04" icon={<IconStanding size={24} />} />
            <ActivityTile time="10:52" icon={<IconFalling size={24} />} isAlarm onClick={onOpenFallClip} />
            <ActivityTile time="10:52" icon={<IconInBed size={38} />} isCurrent duration="3h 33m" />
          </div>
        </div>

        <button
          type="button"
          onClick={onOpenBedActivity}
          className="group flex min-h-[var(--rm-hit-min)] w-full items-center justify-center gap-2 border-t px-3 pb-3.5 pt-2 [border-color:var(--rm-room-detail-card-border)] [color:var(--rm-room-detail-pull-text)] [background:var(--rm-room-detail-pull-bg)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-room-detail-focus)]"
          aria-label="Open full bed activity timeline"
        >
          <span className="inline-flex -rotate-180 transition-transform group-active:translate-y-[-1px]">
            <IconWideChevronDown stroke="var(--rm-room-detail-pull-icon)" />
          </span>
          <span className="text-[length:var(--rm-fs-meta)] font-semibold tracking-[0.15px]">
            Swipe up for full timeline
          </span>
        </button>
      </div>
    </div>
  );
};

const RoomSleepSection = ({ onOpenSleep }) => (
  <div className="px-[14px] pb-2">
    <button
      type="button"
      onClick={onOpenSleep}
      className="w-full cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-room-detail-focus)] active:scale-[0.998]"
    >
      <div className="mb-2.5 flex items-center justify-between gap-2.5">
        <div className="flex min-w-0 items-center gap-[7px]">
          <span className="text-[length:var(--rm-fs-title)] leading-none tracking-[-1px] text-[var(--rm-room-detail-text)]">
            z<sup className="text-[length:var(--rm-fs-meta)]">z</sup>
          </span>
          <span className="text-[length:var(--rm-fs-title)] font-bold text-[var(--rm-room-detail-text)]">
            Sleep
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="whitespace-nowrap text-[length:var(--rm-fs-meta)] text-[var(--rm-room-detail-meta)]">
            Last 24 hours
          </span>
          <IconChevronRight stroke="var(--rm-room-detail-chevron-muted)" />
        </div>
      </div>
      <SleepChart />
    </button>
  </div>
);

const RoomDetailSheetContent = ({ room, onClose, onOpenFallClip, onOpenSleep, onOpenBedActivity }) => {
  const dotTone = ROOM_STATUS_DOT_TONE_BY_STATUS[room.status] ?? "default";

  return (
    <>
      <RoomDetailHeader room={room} onClose={onClose} dotTone={dotTone} />
      <RoomActivitySection onOpenFallClip={onOpenFallClip} onOpenBedActivity={onOpenBedActivity} />
      <RoomSleepSection onOpenSleep={onOpenSleep} />
    </>
  );
};

export { RoomDetailSheetContent };
