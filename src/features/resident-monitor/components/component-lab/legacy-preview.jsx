import { AlarmSheet } from "../alarm-sheet.jsx";
import { FallReviewOption } from "../fall-review-option.jsx";
import { IconFalling, IconInBed, IconStanding } from "../icons.jsx";
import { ActivityTile } from "../room-detail-widgets.jsx";
import { RoomCard } from "../room-overview.jsx";
import "./legacy-preview.css";

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
      <div className="lab-preview-canvas">
        {!isSheetOpen && (
          <button type="button" className="lab-legacy-open-btn" onClick={onOpenSheet}>
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
      <div className="lab-preview-stack">
        <div className="lab-legacy-review-options-grid">
          {FALL_REVIEW_OPTIONS.map((option) => (
            <FallReviewOption
              key={option}
              label={option}
              isSelected={selectedClassification === option}
              onSelect={() => onSelectClassification(option)}
            />
          ))}
        </div>

        <div className="lab-legacy-timeline">
          <span className="lab-legacy-timeline-label">Timeline sample</span>
          <div className="lab-legacy-timeline-row">
            <ActivityTile time="08:12" icon={<IconInBed size={32} />} />
            <ActivityTile time="09:04" icon={<IconStanding size={24} />} />
            <ActivityTile time="10:52" icon={<IconFalling size={24} />} isAlarm />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="lab-preview-stack">
      <div className="lab-legacy-room-row">
        {PREVIEW_ROOMS.map((room) => (
          <RoomCard key={room.number} room={room} onSelect={noop} />
        ))}
      </div>
      <span className="lab-preview-note">
        Legacy card usa gradientes y estilos inline por variante.
      </span>
    </div>
  );
};

export { LegacyPreview };
