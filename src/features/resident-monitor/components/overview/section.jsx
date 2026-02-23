import { RoomCard } from "./room-card.jsx";

const Section = ({ title, rooms, onSelect }) => (
  <div className="rounded-[var(--rm-overview-section-radius)] border px-3 pb-3 pt-3.5 [background:var(--rm-overview-section-bg)] [border-color:var(--rm-overview-section-border)]">
    <h2 className="mb-3 ml-0.5 text-[length:var(--rm-fs-body-strong)] font-bold text-[var(--rm-overview-section-title)]">
      {title}
    </h2>
    <div className="flex [column-gap:var(--rm-overview-section-cards-gap)]">
      {rooms.map((room) => (
        <RoomCard key={room.number} room={room} onSelect={onSelect} />
      ))}
    </div>
  </div>
);

export { Section };
