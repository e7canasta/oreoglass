import { IconStatusSignal, IconStatusWifi } from "../ui-icons/index.js";

const PhoneStatusBar = ({ time = "15.25" }) => (
  <div className="flex shrink-0 items-center justify-between px-7 pt-3.5 [z-index:var(--rm-z-header)]">
    <span className="text-[length:var(--rm-fs-body-strong)] font-semibold tracking-[-0.3px] text-[var(--rm-header-title)]">
      {time}
    </span>
    <div className="flex items-center gap-[7px]">
      <IconStatusSignal />
      <IconStatusWifi />
      <div className="flex items-center rounded-[4px] border-[1.5px] p-[2px] [width:var(--rm-header-battery-width)] [height:var(--rm-header-battery-height)] [border-color:var(--rm-header-chevron)]">
        <div className="h-full w-[52%] rounded-[2px] [background:var(--rm-header-title)]" />
      </div>
    </div>
  </div>
);

export { PhoneStatusBar };
