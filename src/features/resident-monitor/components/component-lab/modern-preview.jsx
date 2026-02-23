import { IconFalling, IconInBed, IconStanding } from "../icons.jsx";
import { IconCheck } from "../ui-icons/index.js";

const MODERN_REVIEW_OPTIONS = [
  {
    id: "fall_with_injury",
    label: "Fall with injury",
    helper: "Immediate intervention needed",
  },
  {
    id: "possible_fall",
    label: "Possible fall",
    helper: "Send clip for human confirmation",
  },
  {
    id: "not_a_fall",
    label: "Not a fall",
    helper: "Archive event and continue monitoring",
  },
];

const MODERN_ROOM_CARDS = [
  {
    number: "513",
    resident: "Bellevue",
    state: "Possible fall",
    tone: "alert",
    dot: "orange",
  },
  {
    number: "223",
    resident: "Bellevue",
    state: "Out of room",
    tone: "neutral",
    dot: "blue",
  },
  {
    number: "405",
    resident: "Alma Way",
    state: "Sleeping",
    tone: "sleep",
    dot: "yellow",
  },
];

const dotClassByColor = {
  orange: "lab-modern-room-dot-orange",
  blue: "lab-modern-room-dot-blue",
  yellow: "lab-modern-room-dot-yellow",
};

const iconByRoomState = {
  alert: <IconFalling size={20} />,
  neutral: <IconStanding size={20} />,
  sleep: <IconInBed size={30} />,
};

const ModernPreview = ({
  activeItemId,
  isSheetOpen,
  onOpenSheet,
  onCloseSheet,
  selectedClassification,
  onSelectClassification,
}) => {
  if (activeItemId === "bottom-sheet") {
    return (
      <div className="lab-preview-canvas lab-modern-canvas">
        {!isSheetOpen && (
          <button type="button" className="lab-modern-open-btn" onClick={onOpenSheet}>
            Open Modern Drawer
          </button>
        )}

        {isSheetOpen && (
          <div className="lab-modern-overlay" onClick={onCloseSheet} role="presentation">
            <div className="lab-modern-drawer" onClick={(event) => event.stopPropagation()}>
              <div className="lab-modern-drawer-handle" />
              <span className="lab-modern-pill">Possible fall</span>
              <h4>Room 122.2</h4>
              <p>Thermal clip ready to review before forwarding.</p>

              <div className="lab-modern-thermal-clip">
                <span>THERMAL CLIP</span>
              </div>

              <div className="lab-modern-progress-track">
                <div className="lab-modern-progress-fill" />
              </div>

              <div className="lab-modern-drawer-actions">
                <button type="button" className="lab-modern-secondary-btn" onClick={onCloseSheet}>
                  On my way
                </button>
                <button type="button" className="lab-modern-primary-btn" onClick={onCloseSheet}>
                  View live
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (activeItemId === "fall-review") {
    return (
      <fieldset className="lab-modern-radio-group">
        <legend>Classification</legend>
        {MODERN_REVIEW_OPTIONS.map((option) => {
          const isSelected = selectedClassification === option.id;
          return (
            <label
              key={option.id}
              className={isSelected ? "lab-modern-radio lab-modern-radio-selected" : "lab-modern-radio"}
            >
              <input
                type="radio"
                name="modern-fall-review"
                checked={isSelected}
                onChange={() => onSelectClassification(option.id)}
              />
              <span className="lab-modern-radio-copy">
                <strong>{option.label}</strong>
                <small>{option.helper}</small>
              </span>
              {isSelected && (
                <span className="lab-modern-radio-check">
                  <IconCheck />
                </span>
              )}
            </label>
          );
        })}
      </fieldset>
    );
  }

  return (
    <div className="lab-modern-room-grid">
      {MODERN_ROOM_CARDS.map((room) => (
        <button
          key={room.number}
          type="button"
          className={`lab-modern-room-card lab-modern-room-card-${room.tone}`}
        >
          <div className="lab-modern-room-header">
            <span className="lab-modern-room-number">{room.number}</span>
            <span className={dotClassByColor[room.dot]} />
          </div>
          <span className="lab-modern-room-resident">{room.resident}</span>
          <span className="lab-modern-room-state">{room.state}</span>
          <span className="lab-modern-room-icon">{iconByRoomState[room.tone]}</span>
        </button>
      ))}
      <span className="lab-preview-note">
        Modern card centraliza tokens y estados para migrar luego a Tailwind/shadcn oficial.
      </span>
    </div>
  );
};

export { ModernPreview };
