import { IconArrowLeft } from "../ui-icons/index.js";

const SleepDetailHeader = ({ onBack }) => (
  <div className="flex shrink-0 items-center justify-between px-[18px] pb-[14px] pt-[calc(54px+var(--rm-safe-top))]">
    <button
      type="button"
      onClick={onBack}
      className="flex size-[var(--rm-hit-min)] items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:[outline-color:var(--rm-sleep-focus-outline)]"
      aria-label="Back"
    >
      <IconArrowLeft stroke="var(--rm-sleep-back-icon)" />
    </button>
    <div className="flex items-center gap-1.5">
      <span className="text-[length:var(--rm-fs-body-strong)] tracking-[-1px] text-[var(--rm-sleep-header-glyph)]">
        z<sup className="text-[length:var(--rm-fs-micro)]">z</sup>
      </span>
      <span className="text-[length:var(--rm-fs-title)] font-bold tracking-[-0.3px] text-[var(--rm-sleep-header-title)]">
        Sleep
      </span>
    </div>
    <div className="w-9" />
  </div>
);

export { SleepDetailHeader };
