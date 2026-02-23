import { IconInBed, IconSittingOnBedLarge } from "./icons.jsx";
import { IconPersonGlyph } from "./ui-icons/index.js";
import { cn } from "@/lib/utils";

const RoomCard = ({ room, onSelect }) => {
  const isOut = room.status === "out";
  const isAlert = room.status === "alert";
  const cardClassName = cn(
    "relative flex min-w-0 flex-1 cursor-pointer flex-col items-center gap-1.5 rounded-[14px] border px-2 pb-2.5 pt-3 transition-transform active:scale-[0.992]",
    "[background:var(--rm-overview-room-bg)] [border-color:var(--rm-overview-room-border)]",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-overview-room-focus)]",
    isAlert && "[background:var(--rm-overview-room-alert-bg)] [border-color:var(--rm-overview-room-alert-border)] [box-shadow:var(--rm-overview-room-alert-shadow)]",
    isOut && "[background:var(--rm-overview-room-out-bg)] [border-color:var(--rm-overview-room-out-border)]"
  );

  const dotClassFor = (dot) => {
    const base = "size-[13px] rounded-full";
    if (dot === "yellow") {
      return `${base} [background:var(--rm-overview-dot-yellow-bg)] [box-shadow:var(--rm-overview-dot-yellow-shadow)]`;
    }
    if (dot === "orange") {
      return `${base} [background:var(--rm-overview-dot-orange-bg)] [box-shadow:var(--rm-overview-dot-orange-shadow)]`;
    }
    if (dot === "blue") {
      return `${base} [background:var(--rm-overview-dot-blue-bg)] [box-shadow:var(--rm-overview-dot-blue-shadow)]`;
    }
    return `${base} [background:var(--rm-overview-dot-neutral-bg)]`;
  };

  return (
    <button type="button" onClick={() => onSelect(room)} className={cardClassName}>
      <span className="text-[length:var(--rm-fs-body-strong)] font-bold text-[var(--rm-overview-room-title)]">
        {room.number}
      </span>
      {isAlert ? (
        <div className="flex h-[50px] items-center justify-center">
          <IconSittingOnBedLarge size={38} />
        </div>
      ) : isOut ? (
        <div className="relative flex w-full flex-col items-center">
          <div className="mb-1 w-[90%] rounded-[7px] py-1 text-center [background:var(--rm-overview-room-out-pill-bg)]">
            <span className="text-[length:var(--rm-fs-caption)] font-bold text-[var(--rm-overview-room-out-pill-text)]">
              → out
            </span>
          </div>
          <IconInBed
            size={48}
            color="var(--rm-overview-room-out-icon)"
            accent="var(--rm-overview-room-out-accent)"
          />
        </div>
      ) : (
        <IconInBed size={52} />
      )}
      <div className="mt-0.5 flex h-[22px] items-center gap-[5px]">
        {room.dots.map((dot, i) =>
          dot === "person" ? (
            <div
              key={i}
              className="flex size-[22px] items-center justify-center rounded-full [background:var(--rm-overview-dot-person-bg)]"
            >
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
  <div className="rounded-[18px] border px-3 pb-3 pt-3.5 [background:var(--rm-overview-section-bg)] [border-color:var(--rm-overview-section-border)]">
    <h2 className="mb-3 ml-0.5 text-[length:var(--rm-fs-body-strong)] font-bold text-[var(--rm-overview-section-title)]">
      {title}
    </h2>
    <div className="flex gap-2.5">
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
  <div className="pointer-events-none absolute left-1/2 top-[110px] z-[3] flex -translate-x-1/2 items-center gap-2.5 whitespace-nowrap rounded-[24px] border px-[18px] py-2.5 backdrop-blur-[10px] [background:var(--rm-overview-countdown-bg)] [border-color:var(--rm-overview-countdown-border)] [box-shadow:var(--rm-overview-countdown-shadow)]">
    <div className="flex size-9 items-center justify-center rounded-full border-2 [background:var(--rm-overview-countdown-badge-bg)] [border-color:var(--rm-overview-countdown-badge-border)]">
      <span className="text-[length:var(--rm-fs-meta)] font-extrabold text-[var(--rm-overview-countdown-badge-text)]">
        {seconds}
      </span>
    </div>
    <span className="text-[length:var(--rm-fs-meta)] font-semibold text-[var(--rm-overview-countdown-label)]">
      Alarm in {seconds}s
    </span>
    <div className="h-1 w-[60px] rounded-[2px] [background:var(--rm-overview-countdown-track-bg)]">
      <div
        className="h-full rounded-[2px] [background:var(--rm-overview-countdown-progress)] transition-[width] duration-1000 ease-linear"
        style={{ width: `${((total - seconds) / total) * 100}%` }}
      />
    </div>
  </div>
);

/* ══════════════════════════════════════
   MAIN APP
══════════════════════════════════════ */

export { RoomCard, Section, CountdownBar };
