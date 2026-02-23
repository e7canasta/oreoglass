import { cn } from "@/lib/utils";

const ROOM_SEAL_SIZE_CLASS = Object.freeze({
  sm: "h-[20px] px-2 text-[length:var(--rm-fs-micro)]",
  md: "h-[22px] px-2.5 text-[length:var(--rm-fs-micro)]",
  lg: "h-[24px] px-3 text-[length:var(--rm-fs-meta)]",
});

const buildRoomSealLabel = (roomNumber, prefix) => {
  const roomValue = String(roomNumber ?? "").trim();
  if (!roomValue) {
    return prefix;
  }

  return `${prefix} ${roomValue}`;
};

const RoomSeal = ({ roomNumber, prefix = "Room", size = "md", className, children }) => (
  <span
    className={cn(
      "inline-flex shrink-0 items-center rounded-full border font-extrabold tracking-[0.12px] [background:var(--rm-room-seal-bg)] [border-color:var(--rm-room-seal-border)] text-[var(--rm-room-seal-text)] [box-shadow:var(--rm-room-seal-shadow)]",
      ROOM_SEAL_SIZE_CLASS[size] ?? ROOM_SEAL_SIZE_CLASS.md,
      className,
    )}
  >
    {children ?? buildRoomSealLabel(roomNumber, prefix)}
  </span>
);

export { RoomSeal };
