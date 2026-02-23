import { IconFalling, IconInBed, IconStanding } from "../icons.jsx";
import { ActivityTile, SleepChart } from "../room-detail/widgets/index.js";
import { IconChevronRight, IconClose, IconWideChevronDown } from "../ui-icons/index.js";
import { cn } from "@/lib/utils";

const ROOM_STATUS_DOT_TONE_BY_STATUS = Object.freeze({
  alert: "alert",
  sleep: "warm",
  out: "info",
});

const RoomDetailHeader = ({ room, onClose, dotTone }) => (
  <header className="flex items-start justify-between gap-3 px-[18px] pb-4 pt-2">
    <div className="flex min-w-0 items-center gap-2.5">
      <div
        className={cn(
          "size-4 shrink-0 rounded-full [background:var(--rm-room-detail-dot-default)]",
          dotTone === "alert" &&
            "[background:var(--rm-room-detail-dot-alert)] [box-shadow:var(--rm-room-detail-dot-alert-shadow)]",
          dotTone === "warm" &&
            "[background:var(--rm-room-detail-dot-warm)] [box-shadow:var(--rm-room-detail-dot-warm-shadow)]",
          dotTone === "info" &&
            "[background:var(--rm-room-detail-dot-info)] [box-shadow:var(--rm-room-detail-dot-info-shadow)]",
        )}
      />
      <div className="min-w-0">
        <div className="text-[length:var(--rm-fs-display)] leading-[1.1] font-bold text-[var(--rm-room-detail-text)]">
          {room.number}
        </div>
        <div className="text-[length:var(--rm-fs-body)] leading-[1.24] text-[var(--rm-room-detail-muted)]">
          {room.location}
        </div>
      </div>
    </div>

    <button
      type="button"
      onClick={onClose}
      className="flex size-[var(--rm-hit-min)] shrink-0 items-center justify-center rounded-full border [background:var(--rm-room-detail-close-bg)] [border-color:var(--rm-room-detail-close-border)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-room-detail-focus)]"
      aria-label="Close room details"
    >
      <IconClose strokeWidth={2.2} />
    </button>
  </header>
);

const RoomActivitySection = ({ onOpenFallClip }) => (
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

    <div className="overflow-x-auto rounded-[14px] border px-2 pb-3.5 pt-3 [background:var(--rm-room-detail-card-bg)] [border-color:var(--rm-room-detail-card-border)]">
      <div className="flex min-w-max items-stretch gap-1.5">
        <ActivityTile time="08:12" icon={<IconInBed size={38} />} />
        <ActivityTile time="09:04" icon={<IconStanding size={24} />} />
        <ActivityTile time="10:52" icon={<IconFalling size={24} />} isAlarm onClick={onOpenFallClip} />
        <ActivityTile time="10:52" icon={<IconInBed size={38} />} isCurrent duration="3h 33m" />
      </div>
      <div className="mt-2.5 flex justify-center">
        <IconWideChevronDown stroke="var(--rm-room-detail-chevron-muted)" />
      </div>
    </div>
  </div>
);

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

const RoomDetailSheetContent = ({ room, onClose, onOpenFallClip, onOpenSleep }) => {
  const dotTone = ROOM_STATUS_DOT_TONE_BY_STATUS[room.status] ?? "default";

  return (
    <>
      <RoomDetailHeader room={room} onClose={onClose} dotTone={dotTone} />
      <RoomActivitySection onOpenFallClip={onOpenFallClip} />
      <RoomSleepSection onOpenSleep={onOpenSleep} />
    </>
  );
};

export { RoomDetailSheetContent };
