import { IconAppGrid, IconChevronDown } from "../ui-icons/index.js";
import { AppHeaderIconFrame, AppHeaderLeading, AppHeaderRow } from "./header-layout.jsx";

const OverviewHeader = () => (
  <div className="shrink-0 [z-index:var(--rm-z-header)] [padding-top:var(--rm-overview-header-padding-top)] [padding-bottom:var(--rm-overview-header-padding-bottom)]">
    <AppHeaderRow>
      <button
        type="button"
        className="flex min-h-[var(--rm-hit-min)] min-w-0 items-center [column-gap:var(--rm-overview-header-gap)] text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-app-header-focus)]"
        aria-label="Open resident filter"
      >
        <AppHeaderLeading className="[column-gap:var(--rm-overview-header-leading-gap)]">
          <AppHeaderIconFrame>
            <IconAppGrid fill="var(--rm-header-grid-fill)" />
          </AppHeaderIconFrame>
          <span className="truncate text-[length:var(--rm-fs-title-strong)] font-bold tracking-[-0.5px] text-[var(--rm-header-title)]">
            All residents
          </span>
        </AppHeaderLeading>
        <IconChevronDown stroke="var(--rm-header-chevron)" />
      </button>
    </AppHeaderRow>
  </div>
);

export { OverviewHeader };
