import { cn } from "@/lib/utils";

const AppHeaderRow = ({ className, children }) => (
  <header
    className={cn(
      "flex shrink-0 items-center justify-between [column-gap:var(--rm-app-header-content-gap)] [min-height:var(--rm-app-header-min-height)] [padding-left:var(--rm-app-header-padding-x)] [padding-right:var(--rm-app-header-padding-x)]",
      className,
    )}
  >
    {children}
  </header>
);

const AppHeaderLeading = ({ className, children }) => (
  <div className={cn("flex min-w-0 items-center [column-gap:var(--rm-app-header-leading-gap)]", className)}>
    {children}
  </div>
);

const AppHeaderIconFrame = ({ className, children }) => (
  <div
    className={cn(
      "flex shrink-0 items-center justify-center rounded-[var(--rm-header-grid-radius)] border [width:var(--rm-header-grid-size)] [height:var(--rm-header-grid-size)] [background:var(--rm-header-icon-bg)] [border-color:var(--rm-header-icon-border)]",
      className,
    )}
  >
    {children}
  </div>
);

const AppHeaderActionButton = ({ className, children, ...buttonProps }) => (
  <button
    type="button"
    className={cn(
      "flex size-[var(--rm-app-header-action-size)] shrink-0 items-center justify-center rounded-[var(--rm-app-header-action-radius)] border [background:var(--rm-app-header-action-bg)] [border-color:var(--rm-app-header-action-border)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-app-header-focus)]",
      className,
    )}
    {...buttonProps}
  >
    {children}
  </button>
);

export { AppHeaderActionButton, AppHeaderIconFrame, AppHeaderLeading, AppHeaderRow };
