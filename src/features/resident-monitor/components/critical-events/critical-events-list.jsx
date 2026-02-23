import { CriticalEventListItem } from "./critical-event-list-item.jsx";

const CriticalEventsList = ({ clips, onOpenClip }) => (
  <div className="flex flex-col [row-gap:var(--rm-critical-list-gap)]">
    {clips.map((clip, idx) => (
      <CriticalEventListItem key={clip.id} clip={clip} idx={idx} onOpen={() => onOpenClip && onOpenClip(clip)} />
    ))}
  </div>
);

export { CriticalEventsList };
