import {
  IconAppGrid,
  IconChevronDown,
  IconStatusSignal,
  IconStatusWifi,
} from "./ui-icons/index.js";

const PhoneStatusBar = ({ time = "15.25" }) => (
  <div className="z-[2] flex shrink-0 items-center justify-between px-7 pt-3.5">
    <span className="text-[length:var(--rm-fs-body-strong)] font-semibold tracking-[-0.3px] text-[var(--rm-header-title)]">
      {time}
    </span>
    <div className="flex items-center gap-[7px]">
      <IconStatusSignal />
      <IconStatusWifi />
      <div className="flex h-[15px] w-[30px] items-center rounded-[4px] border-[1.5px] p-[2px] [border-color:var(--rm-header-chevron)]">
        <div className="h-full w-[52%] rounded-[2px] [background:var(--rm-header-title)]" />
      </div>
    </div>
  </div>
);

const OverviewHeader = () => (
  <div className="z-[2] shrink-0 px-4 pb-2 pt-2.5">
    <div className="flex items-center gap-2">
      <div className="flex size-[30px] items-center justify-center rounded-[7px] border [background:var(--rm-header-icon-bg)] [border-color:var(--rm-header-icon-border)]">
        <IconAppGrid fill="var(--rm-header-grid-fill)" />
      </div>
      <span className="text-[length:var(--rm-fs-title-strong)] font-bold tracking-[-0.5px] text-[var(--rm-header-title)]">
        All residents
      </span>
      <IconChevronDown stroke="var(--rm-header-chevron)" />
    </div>
  </div>
);

export { OverviewHeader, PhoneStatusBar };
