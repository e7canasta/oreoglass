import { IconInBed, IconSittingOnBedLarge } from "./icons.jsx";
import { IconPersonGlyph } from "./ui-icons/index.js";
import "./room-overview.css";

const RoomCard = ({ room, onSelect }) => {
  const isOut = room.status === "out";
  const isAlert = room.status === "alert";
  const cardClassName = [
    "room-overview-card",
    isAlert ? "is-alert" : "",
    isOut ? "is-out" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const dotClassFor = (dot) => {
    if (dot === "yellow") return "room-overview-dot dot-yellow";
    if (dot === "orange") return "room-overview-dot dot-orange";
    if (dot === "blue") return "room-overview-dot dot-blue";
    return "room-overview-dot dot-neutral";
  };

  return (
    <button type="button" onClick={() => onSelect(room)} className={cardClassName}>
      <span className="room-overview-room-number">{room.number}</span>
      {isAlert ? (
        <div className="room-overview-alert-icon-wrap">
          <IconSittingOnBedLarge size={38} />
        </div>
      ) : isOut ? (
        <div className="room-overview-out-wrap">
          <div className="room-overview-out-pill">
            <span>→ out</span>
          </div>
          <IconInBed size={48} color="rgba(255,255,255,0.4)" accent="rgba(80,100,160,0.35)" />
        </div>
      ) : (
        <IconInBed size={52} />
      )}
      <div className="room-overview-dots-row">
        {room.dots.map((dot, i) =>
          dot === "person" ? (
            <div key={i} className="room-overview-person-dot">
              <IconPersonGlyph />
            </div>
          ) : (
            <div key={i} className={dotClassFor(dot)} />
          )
        )}
      </div>
    </button>
  );
};

const Section = ({ title, rooms, onSelect }) => (
  <div className="room-overview-section">
    <h2 className="room-overview-section-title">{title}</h2>
    <div className="room-overview-section-grid">
      {rooms.map((room) => (
        <RoomCard key={room.number} room={room} onSelect={onSelect} />
      ))}
    </div>
  </div>
);

/* ══════════════════════════════════════
   DATA
══════════════════════════════════════ */

const CountdownBar = ({ seconds, total }) => (
  <div className="room-overview-countdown">
    <div className="room-overview-countdown-badge">
      <span>{seconds}</span>
    </div>
    <span className="room-overview-countdown-label">Alarm in {seconds}s</span>
    <div className="room-overview-countdown-track">
      <div
        className="room-overview-countdown-progress"
        style={{ "--countdown-progress": `${((total - seconds) / total) * 100}%` }}
      />
    </div>
  </div>
);

/* ══════════════════════════════════════
   MAIN APP
══════════════════════════════════════ */

export { RoomCard, Section, CountdownBar };
