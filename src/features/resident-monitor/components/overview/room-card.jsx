import { IconInBed, IconSittingOnBedLarge } from "../icons.jsx";
import { IconPersonGlyph } from "../ui-icons/index.js";
import { cn } from "@/lib/utils";

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

const RoomCard = ({ room, onSelect }) => {
  const isOut = room.status === "out";
  const isAlert = room.status === "alert";

  return (
    <button
      type="button"
      onClick={() => onSelect(room)}
      className={cn(
        "relative flex min-w-0 flex-1 cursor-pointer flex-col items-center [row-gap:var(--rm-overview-room-content-gap)] rounded-[var(--rm-overview-room-radius)] border px-2 pb-2.5 pt-3 transition-transform active:scale-[0.992]",
        "[background:var(--rm-overview-room-bg)] [border-color:var(--rm-overview-room-border)]",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-overview-room-focus)]",
        isAlert && "[background:var(--rm-overview-room-alert-bg)] [border-color:var(--rm-overview-room-alert-border)] [box-shadow:var(--rm-overview-room-alert-shadow)]",
        isOut && "[background:var(--rm-overview-room-out-bg)] [border-color:var(--rm-overview-room-out-border)]",
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
          <div className="mb-1 w-[90%] rounded-[var(--rm-overview-room-out-pill-radius)] py-1 text-center [background:var(--rm-overview-room-out-pill-bg)]">
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
              className="flex items-center justify-center rounded-full [width:var(--rm-overview-room-dot-person-size)] [height:var(--rm-overview-room-dot-person-size)] [background:var(--rm-overview-dot-person-bg)]"
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
