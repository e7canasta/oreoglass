import { AlarmSheet } from "../alarm-sheet.jsx";
import { FallReviewOption } from "../fall-review-option.jsx";
import { IconFalling, IconInBed, IconStanding } from "../icons.jsx";
import { ActivityTile } from "../room-detail-widgets.jsx";
import { RoomCard } from "../room-overview.jsx";

const PREVIEW_ROOMS = [
  { number: "513", location: "Bellevue", status: "alert", dots: ["orange"] },
  { number: "223", location: "Bellevue", status: "out", dots: ["blue"] },
  { number: "405", location: "Alma Way", status: "sleep", dots: ["yellow", "person"] },
];

const FALL_REVIEW_OPTIONS = [
  "Fall with injury",
  "Possible fall",
  "Not a fall",
];

const noop = () => {};

const LegacyPreview = ({
  activeItemId,
  isSheetOpen,
  onOpenSheet,
  onCloseSheet,
  selectedClassification,
  onSelectClassification,
}) => {
  if (activeItemId === "bottom-sheet") {
    return (
      <div className="relative flex h-[250px] items-center justify-center [background:var(--lab-preview-bg)]">
        {!isSheetOpen && (
          <button
            type="button"
            className="h-auto cursor-pointer rounded-xl border-0 bg-[#e8621a] px-3.5 py-3 text-[13px] font-bold text-white"
            onClick={onOpenSheet}
          >
            Open Legacy Alarm Sheet
          </button>
        )}

        {isSheetOpen && (
          <AlarmSheet
            secondsAgo={22}
            onClose={onCloseSheet}
            onViewLive={onCloseSheet}
            onFallReview={onCloseSheet}
          />
        )}
      </div>
    );
  }

  if (activeItemId === "fall-review") {
    return (
      <div className="grid gap-2.5 p-3">
        <div className="grid gap-2">
          {FALL_REVIEW_OPTIONS.map((option) => (
            <FallReviewOption
              key={option}
              label={option}
              isSelected={selectedClassification === option}
              onSelect={() => onSelectClassification(option)}
            />
          ))}
        </div>

        <div className="rounded-[11px] border [border-color:var(--lab-legacy-timeline-border)] [background:var(--lab-legacy-timeline-bg)] p-2.5">
          <span className="mb-2 block text-[11px] font-semibold [color:var(--lab-legacy-timeline-label)]">Timeline sample</span>
          <div className="flex gap-2">
            <ActivityTile time="08:12" icon={<IconInBed size={32} />} />
            <ActivityTile time="09:04" icon={<IconStanding size={24} />} />
            <ActivityTile time="10:52" icon={<IconFalling size={24} />} isAlarm />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-2.5 p-3">
      <div className="flex gap-2">
        {PREVIEW_ROOMS.map((room) => (
          <RoomCard key={room.number} room={room} onSelect={noop} />
        ))}
      </div>
      <span className="text-[11px] leading-[1.35] [color:var(--lab-preview-note)]">
        Legacy card usa gradientes y estilos inline por variante.
      </span>
    </div>
  );
};

export { LegacyPreview };
