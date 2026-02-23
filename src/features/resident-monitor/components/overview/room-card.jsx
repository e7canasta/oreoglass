import { IconInBed, IconOutOfRoomBed, IconSittingOnBedLarge, IconStanding } from "../icons.jsx";
import { cn } from "@/lib/utils";

const ROOM_STATUS_A11Y_LABEL = Object.freeze({
  alert: "possible fall detected",
  out: "out of room",
  sleep: "sleeping",
});

const overviewDotClassFor = (dot) => {
  const base =
    "rounded-full border [border-width:var(--rm-overview-dot-ring-width)] [border-color:var(--rm-overview-dot-ring-color)] [width:var(--rm-overview-room-dot-size)] [height:var(--rm-overview-room-dot-size)]";

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

const RoomCard = ({ room, onSelect }) => {
  const isOut = room.status === "out";
  const isAlert = room.status === "alert";
  const statusLabel = ROOM_STATUS_A11Y_LABEL[room.status] ?? "status unavailable";
  const outLabel = room.outLabel ?? "out";

  return (
    <button
      type="button"
      onClick={() => onSelect(room)}
      aria-label={`${room.location} room ${room.number}, ${statusLabel}`}
      className={cn(
        "relative flex cursor-pointer flex-col items-center overflow-visible [z-index:var(--rm-overview-room-z)] [row-gap:var(--rm-overview-room-content-gap)] rounded-[var(--rm-overview-room-radius)] border [min-height:var(--rm-overview-room-min-height)] [padding-left:var(--rm-overview-room-padding-x)] [padding-right:var(--rm-overview-room-padding-x)] [padding-bottom:var(--rm-overview-room-padding-bottom)] [padding-top:var(--rm-overview-room-padding-top)] transition-transform active:scale-[0.992]",
        "[width:var(--rm-overview-room-width)] flex-none",
        "[background:var(--rm-overview-room-bg)] [border-color:var(--rm-overview-room-border)] [box-shadow:var(--rm-overview-room-shadow)]",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-overview-room-focus)]",
        isAlert && "[background:var(--rm-overview-room-alert-bg)] [border-color:var(--rm-overview-room-alert-border)] [box-shadow:var(--rm-overview-room-alert-shadow)]",
        isOut && "[background:var(--rm-overview-room-out-bg)] [border-color:var(--rm-overview-room-out-border)]",
      )}
    >
      <span className="text-[length:var(--rm-overview-room-number-size)] leading-[var(--rm-overview-room-number-line-height)] font-semibold tracking-[var(--rm-overview-room-number-tracking)] text-[var(--rm-overview-room-title)]">
        {room.number}
      </span>

      <div className="mt-auto flex [height:var(--rm-overview-room-art-height)] [margin-bottom:var(--rm-overview-room-art-margin-bottom)] w-full items-end justify-center">
        {isAlert ? (
          <IconSittingOnBedLarge
            size={72}
            className="[width:var(--rm-overview-room-alert-icon-width)] [height:var(--rm-overview-room-alert-icon-height)]"
            color="var(--rm-overview-room-alert-icon-color)"
            surface="var(--rm-overview-room-alert-icon-surface)"
            surfaceMuted="var(--rm-overview-room-alert-icon-surface-muted)"
            surfaceSoft="var(--rm-overview-room-alert-icon-surface-soft)"
          />
        ) : isOut ? (
          <div className="relative flex [height:var(--rm-overview-room-out-art-height)] w-full items-end justify-center">
            <div className="pointer-events-none absolute left-1/2 [top:var(--rm-overview-room-out-pill-top)] z-[1] -translate-x-1/2 [width:var(--rm-overview-room-out-pill-width)] rounded-[var(--rm-overview-room-out-pill-radius)] border [border-width:var(--rm-overview-room-out-pill-border-width)] [border-color:var(--rm-overview-room-out-pill-border)] [padding-left:var(--rm-overview-room-out-pill-padding-x)] [padding-right:var(--rm-overview-room-out-pill-padding-x)] [padding-top:var(--rm-overview-room-out-pill-padding-y)] [padding-bottom:var(--rm-overview-room-out-pill-padding-y)] text-center [background:var(--rm-overview-room-out-pill-bg)] [box-shadow:var(--rm-overview-room-out-pill-shadow)] [backdrop-filter:var(--rm-overview-room-out-pill-backdrop)]">
              <span className="text-[length:var(--rm-overview-room-out-pill-text-size)] font-semibold text-[var(--rm-overview-room-out-pill-text)]">
                {`→ ${outLabel}`}
              </span>
            </div>
            <IconOutOfRoomBed
              size={72}
              className="[width:var(--rm-overview-room-out-icon-width)] [height:var(--rm-overview-room-out-icon-height)]"
              bed="var(--rm-overview-room-out-icon)"
              frame="var(--rm-overview-room-out-accent)"
              chair="var(--rm-overview-room-out-chair)"
              chairSeat="var(--rm-overview-room-out-chair-seat)"
            />
          </div>
        ) : (
          <IconInBed
            size={72}
            className="[width:var(--rm-overview-room-icon-width)] [height:var(--rm-overview-room-icon-height)]"
            color="var(--rm-overview-room-icon-color)"
            accent="var(--rm-overview-room-icon-accent)"
          />
        )}
      </div>

      <div className="pointer-events-none absolute left-1/2 [z-index:var(--rm-overview-room-dots-z)] [bottom:var(--rm-overview-room-dots-offset-bottom)] flex -translate-x-1/2 items-center [column-gap:var(--rm-overview-room-dots-gap)]">
        {room.dots.map((dot, index) =>
          dot === "person" ? (
            <div
              key={index}
              className="flex items-center justify-center rounded-full border [border-width:var(--rm-overview-dot-person-border-width)] [border-color:var(--rm-overview-dot-person-border)] [width:var(--rm-overview-room-dot-person-size)] [height:var(--rm-overview-room-dot-person-size)] [background:var(--rm-overview-dot-person-bg)] [box-shadow:var(--rm-overview-dot-person-shadow)]"
            >
              <IconStanding
                size={18}
                className="[width:var(--rm-overview-dot-person-icon-width)] [height:var(--rm-overview-dot-person-icon-height)]"
                color="var(--rm-overview-dot-person-icon)"
              />
            </div>
          ) : (
            <div key={index} className={overviewDotClassFor(dot)} />
          ),
        )}
      </div>
    </button>
  );
};

export { RoomCard };
