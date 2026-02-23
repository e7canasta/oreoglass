import { IconAppGrid, IconChevronDown } from "../ui-icons/index.js";

const OverviewHeader = () => (
  <div className="shrink-0 px-4 pb-2 pt-2.5 [z-index:var(--rm-z-header)]">
    <div className="flex items-center gap-2">
      <div className="flex items-center justify-center rounded-[var(--rm-header-grid-radius)] border [width:var(--rm-header-grid-size)] [height:var(--rm-header-grid-size)] [background:var(--rm-header-icon-bg)] [border-color:var(--rm-header-icon-border)]">
        <IconAppGrid fill="var(--rm-header-grid-fill)" />
      </div>
      <span className="text-[length:var(--rm-fs-title-strong)] font-bold tracking-[-0.5px] text-[var(--rm-header-title)]">
        All residents
      </span>
      <IconChevronDown stroke="var(--rm-header-chevron)" />
    </div>
  </div>
);

export { OverviewHeader };
