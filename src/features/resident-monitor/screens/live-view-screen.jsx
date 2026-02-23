import { ThermalViewLive } from "../components/thermal.jsx";
import { IconArrowLeft } from "../components/ui-icons/index.js";
import "./live-view-screen.css";

const LiveViewScreen = ({ onBack }) => (
  <div className="live-view-screen">
    <div className="live-view-screen-spacer" />

    <header className="live-view-screen-header">
      <button type="button" onClick={onBack} className="live-view-screen-back">
        <IconArrowLeft />
        <span className="live-view-screen-back-label">122.2 — Live</span>
      </button>

      <div className="live-view-screen-live-badge">
        <div className="live-view-screen-live-dot" />
        <span className="live-view-screen-live-label">LIVE</span>
      </div>
    </header>

    <div className="live-view-screen-thermal">
      <ThermalViewLive />
    </div>

    <section className="live-view-screen-event">
      <div className="live-view-screen-event-meta">
        <span className="live-view-screen-event-label">Event detected</span>
        <span className="live-view-screen-event-time">01:24</span>
      </div>
      <div className="live-view-screen-event-title-wrap">
        <div className="live-view-screen-event-dot" />
        <span className="live-view-screen-event-title">Alarm — Sitting on bed edge</span>
      </div>
    </section>

    <div className="live-view-screen-actions">
      <button type="button" onClick={onBack} className="live-view-screen-action live-view-screen-action-primary">
        On my way
      </button>
      <button type="button" onClick={onBack} className="live-view-screen-action live-view-screen-action-secondary">
        Dismiss
      </button>
    </div>
  </div>
);

export { LiveViewScreen };
