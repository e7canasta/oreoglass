import { AlarmSheet } from "../alarm-sheet.jsx";
import { IconFalling, IconInBed, IconStanding } from "../icons.jsx";
import { ActivityTile } from "../room-detail/widgets/index.js";
import { RoomCard } from "../room-overview.jsx";
import { LegacyFallReviewOption } from "./legacy-fall-review-option.jsx";

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
      <div className="relative flex [height:var(--lab-preview-canvas-height)] items-center justify-center [background:var(--lab-preview-bg)]">
        {!isSheetOpen && (
          <button
            type="button"
            className="h-auto cursor-pointer rounded-[var(--lab-legacy-open-radius)] border-0 [padding-left:var(--lab-legacy-open-padding-x)] [padding-right:var(--lab-legacy-open-padding-x)] [padding-top:var(--lab-legacy-open-padding-y)] [padding-bottom:var(--lab-legacy-open-padding-y)] text-[length:var(--lab-legacy-open-font-size)] font-bold [background:var(--lab-legacy-open-bg)] [color:var(--lab-legacy-open-text)]"
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
      <div className="grid [row-gap:var(--lab-preview-gap)] [padding:var(--lab-modern-review-padding)]">
        <div className="grid [row-gap:var(--lab-modern-review-gap)]">
          {FALL_REVIEW_OPTIONS.map((option) => (
            <LegacyFallReviewOption
              key={option}
              label={option}
              isSelected={selectedClassification === option}
              onSelect={() => onSelectClassification(option)}
            />
          ))}
        </div>

        <div className="rounded-[var(--lab-legacy-timeline-radius)] border [border-color:var(--lab-legacy-timeline-border)] [background:var(--lab-legacy-timeline-bg)] [padding:var(--lab-legacy-timeline-padding)]">
          <span className="mb-2 block text-[length:var(--lab-legacy-timeline-label-size)] font-semibold [color:var(--lab-legacy-timeline-label)]">Timeline sample</span>
          <div className="flex [column-gap:var(--lab-modern-review-gap)]">
            <ActivityTile time="08:12" icon={<IconInBed size={32} />} />
            <ActivityTile time="09:04" icon={<IconStanding size={24} />} />
            <ActivityTile time="10:52" icon={<IconFalling size={24} />} isAlarm />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid [row-gap:var(--lab-preview-gap)] [padding:var(--lab-modern-review-padding)]">
      <div className="flex [column-gap:var(--lab-modern-review-gap)]">
        {PREVIEW_ROOMS.map((room) => (
          <RoomCard key={room.number} room={room} onSelect={noop} />
        ))}
      </div>
      <span className="text-[length:var(--lab-preview-note-size)] [line-height:var(--lab-preview-note-line-height)] [color:var(--lab-preview-note)]">
        Legacy card usa gradientes y estilos inline por variante.
      </span>
    </div>
  );
};

export { LegacyPreview };
