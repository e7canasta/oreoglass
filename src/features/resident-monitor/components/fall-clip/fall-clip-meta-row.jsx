import { IconCalendar, IconClock } from "../ui-icons/index.js";

const FallClipMetaRow = () => (
  <div className="mb-3.5 flex items-center justify-between">
    <div className="flex items-center gap-1.5">
      <IconCalendar color="var(--rm-fall-meta-text)" />
      <span className="text-[length:var(--rm-fs-body)] font-semibold text-[var(--rm-fall-meta-text)]">Aug 29th</span>
    </div>
    <div className="flex items-center gap-1.5">
      <IconClock color="var(--rm-fall-meta-text)" />
      <span className="text-[length:var(--rm-fs-body)] font-semibold text-[var(--rm-fall-meta-text)]">07:02 AM</span>
    </div>
  </div>
);

export { FallClipMetaRow };
