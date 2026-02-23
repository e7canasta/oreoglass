import { IconAppGrid, IconChevronDown } from "../ui-icons/index.js";

const OverviewHeader = () => (
  <div className="shrink-0 [z-index:var(--rm-z-header)] [padding-left:var(--rm-overview-header-padding-x)] [padding-right:var(--rm-overview-header-padding-x)] [padding-top:var(--rm-overview-header-padding-top)] [padding-bottom:var(--rm-overview-header-padding-bottom)]">
    <div className="flex items-center [gap:var(--rm-overview-header-gap)]">
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
