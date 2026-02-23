import { IconCalendar, IconClock } from "../ui-icons/index.js";

const FallClipMetaRow = ({ clip, room }) => {
  const roomNumber = room?.number ?? clip?.room;
  const location = room?.location ?? clip?.location;
  const resident = clip?.resident ?? "Resident";
  const dateLabel = clip?.date ?? "Aug 29th";
  const timeLabel = clip?.time?.split("–")?.[0]?.trim() ?? "07:02 AM";

  return (
    <div className="mb-3.5">
      <div className="mb-1 truncate text-[length:var(--rm-fs-meta)] font-medium text-[var(--rm-fall-meta-context)]">
        {resident}
        {roomNumber ? ` · Room ${roomNumber}` : ""}
        {location ? ` · ${location}` : ""}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <IconCalendar color="var(--rm-fall-meta-text)" />
          <span className="text-[length:var(--rm-fs-body)] font-semibold text-[var(--rm-fall-meta-text)]">{dateLabel}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <IconClock color="var(--rm-fall-meta-text)" />
          <span className="text-[length:var(--rm-fs-body)] font-semibold text-[var(--rm-fall-meta-text)]">{timeLabel}</span>
        </div>
      </div>
    </div>
  );
};

export { FallClipMetaRow };
