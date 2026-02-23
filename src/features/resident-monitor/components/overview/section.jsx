import { RoomCard } from "./room-card.jsx";

const Section = ({ title, rooms, onSelect }) => (
  <div className="rounded-[var(--rm-overview-section-radius)] border [padding-left:var(--rm-overview-section-padding-x)] [padding-right:var(--rm-overview-section-padding-x)] [padding-bottom:var(--rm-overview-section-padding-bottom)] [padding-top:var(--rm-overview-section-padding-top)] [background:var(--rm-overview-section-bg)] [border-color:var(--rm-overview-section-border)]">
    <h2 className="ml-0.5 [margin-bottom:var(--rm-overview-section-title-margin-bottom)] text-[length:var(--rm-fs-body-strong)] font-bold text-[var(--rm-overview-section-title)]">
      {title}
    </h2>
    <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex [column-gap:var(--rm-overview-section-cards-gap)] pb-0.5">
        {rooms.map((room) => (
          <RoomCard key={room.number} room={room} onSelect={onSelect} />
        ))}
      </div>
    </div>
  </div>
);

export { Section };
