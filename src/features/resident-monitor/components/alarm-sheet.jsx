import { IconSittingOnBedLarge } from "./icons.jsx";
import { IconAlertMark, IconArrowRight, IconClose } from "./ui-icons/index.js";
import "./alarm-sheet.css";

const AlarmSheet = ({ onClose, onViewLive, onFallReview, secondsAgo }) => (
  <div className="alarm-sheet-root">
    <div className="alarm-sheet-overlay" />

    <section className="alarm-sheet-panel" role="dialog" aria-modal="true" aria-label="Alarm details">
      <div className="alarm-sheet-handle-wrap">
        <div className="alarm-sheet-handle" />
      </div>

      <header className="alarm-sheet-header">
        <span className="alarm-sheet-room">122.2</span>
        <button type="button" onClick={onClose} className="alarm-sheet-close">
          <IconClose />
        </button>
      </header>

      <div className="alarm-sheet-title-row">
        <div className="alarm-sheet-alert-icon">
          <IconAlertMark />
        </div>
        <span className="alarm-sheet-title">Alarm</span>
      </div>

      <div className="alarm-sheet-event-card">
        <div className="alarm-sheet-event-copy">
          <div className="alarm-sheet-event-title">
            Sitting on<br />bed edge
          </div>
          <div className="alarm-sheet-event-time">{secondsAgo} seconds ago</div>
        </div>
        <div className="alarm-sheet-event-figure">
          <IconSittingOnBedLarge size={76} />
        </div>
      </div>

      <div className="alarm-sheet-actions-grid">
        <button type="button" onClick={onClose} className="alarm-sheet-action alarm-sheet-action-primary">
          On my<br />way
        </button>
        <button type="button" onClick={onViewLive} className="alarm-sheet-action alarm-sheet-action-secondary">
          View<br />live
        </button>
      </div>

      <div className="alarm-sheet-forward-wrap">
        <button type="button" onClick={onFallReview} className="alarm-sheet-forward">
          <span>Forward to</span>
          <IconArrowRight />
        </button>
      </div>
    </section>
  </div>
);

export { AlarmSheet };
