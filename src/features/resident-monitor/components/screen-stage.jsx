import { cn } from "@/lib/utils";

const ScreenStage = ({ zToken = "--rm-z-screen-base", zIndex, className, children }) => (
  <div
    className={cn(
      "absolute inset-0 flex animate-[slideInRight_0.3s_cubic-bezier(0.32,0.72,0,1)] flex-col overflow-hidden",
      className,
    )}
    style={{ zIndex: zIndex ?? `var(${zToken})` }}
  >
    {children}
  </div>
);

const ScreenTopSpacer = ({ className = "h-[calc(var(--rm-screen-top-spacer-default)+var(--rm-safe-top))]" }) => (
  <div className={cn("shrink-0", className)} />
);

export { ScreenStage, ScreenTopSpacer };
