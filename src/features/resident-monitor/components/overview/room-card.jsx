import { IconInBed, IconSittingOnBedLarge } from "../icons.jsx";
import { IconPersonGlyph } from "../ui-icons/index.js";
import { cn } from "@/lib/utils";

const ROOM_STATUS_A11Y_LABEL = Object.freeze({
  alert: "possible fall detected",
  out: "out of room",
  sleep: "sleeping",
});

const overviewDotClassFor = (dot) => {
  const base = "rounded-full [width:var(--rm-overview-room-dot-size)] [height:var(--rm-overview-room-dot-size)]";

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

const RoomCard = ({ room, onSelect, isBalanced = false }) => {
  const isOut = room.status === "out";
  const isAlert = room.status === "alert";
  const statusLabel = ROOM_STATUS_A11Y_LABEL[room.status] ?? "status unavailable";

  return (
    <button
      type="button"
      onClick={() => onSelect(room)}
      aria-label={`${room.location} room ${room.number}, ${statusLabel}`}
      className={cn(
        "relative flex cursor-pointer flex-col items-center [row-gap:var(--rm-overview-room-content-gap)] rounded-[var(--rm-overview-room-radius)] border [min-height:var(--rm-overview-room-min-height)] [padding-left:var(--rm-overview-room-padding-x)] [padding-right:var(--rm-overview-room-padding-x)] [padding-bottom:var(--rm-overview-room-padding-bottom)] [padding-top:var(--rm-overview-room-padding-top)] transition-transform active:scale-[0.992]",
        "[width:var(--rm-overview-room-width)] flex-none",
        "[background:var(--rm-overview-room-bg)] [border-color:var(--rm-overview-room-border)]",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-overview-room-focus)]",
        isAlert && "[background:var(--rm-overview-room-alert-bg)] [border-color:var(--rm-overview-room-alert-border)] [box-shadow:var(--rm-overview-room-alert-shadow)]",
        isOut && "[background:var(--rm-overview-room-out-bg)] [border-color:var(--rm-overview-room-out-border)]",
        isBalanced && "min-w-0 flex-1 [width:auto]",
      )}
    >
      <span className="text-[length:var(--rm-fs-body-strong)] font-bold text-[var(--rm-overview-room-title)]">
        {room.number}
      </span>

      {isAlert ? (
        <div className="flex [height:var(--rm-overview-room-art-height)] items-center justify-center">
          <IconSittingOnBedLarge size={38} />
        </div>
      ) : isOut ? (
        <div className="relative flex w-full flex-col items-center">
          <div className="mb-1 [width:var(--rm-overview-room-out-pill-width)] rounded-[var(--rm-overview-room-out-pill-radius)] [padding-top:var(--rm-overview-room-out-pill-padding-y)] [padding-bottom:var(--rm-overview-room-out-pill-padding-y)] text-center [background:var(--rm-overview-room-out-pill-bg)]">
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

      <div className="mt-0.5 flex [height:var(--rm-overview-room-dots-height)] items-center [column-gap:var(--rm-overview-room-dots-gap)]">
        {room.dots.map((dot, index) =>
          dot === "person" ? (
            <div
              key={index}
              className="flex items-center justify-center rounded-full [width:var(--rm-overview-room-dot-person-size)] [height:var(--rm-overview-room-dot-person-size)] [background:var(--rm-overview-dot-person-bg)] [box-shadow:var(--rm-overview-dot-person-shadow)]"
            >
              <IconPersonGlyph />
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
