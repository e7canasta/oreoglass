import { cn } from "@/lib/utils";

import { ThermalView } from "./thermal.jsx";
import { IconArrowRight } from "./ui-icons/index.js";

const EvidenceMiniDock = ({ visible = false, title, subtitle, progressPercent = 50, onFocusEvidence }) => (
  <div
    className={cn(
      "absolute inset-x-0 [top:calc(var(--rm-safe-top)+52px)] z-[4] px-3 transition-all duration-200 ease-out",
      visible ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0",
    )}
    aria-hidden={!visible}
  >
    <button
      type="button"
      onClick={onFocusEvidence}
      className="w-full rounded-[14px] border p-2 text-left [background:var(--rm-button-glass-bg)] [border-color:var(--rm-button-glass-border)] text-[var(--rm-button-glass-text)] [backdrop-filter:blur(10px)_saturate(1.08)] [box-shadow:0_6px_16px_rgba(0,0,0,0.18)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-app-header-focus)] active:scale-[0.995]"
      aria-label="Return to evidence video"
    >
      <div className="flex items-center gap-2.5">
        <div className="relative h-[54px] w-[90px] shrink-0 overflow-hidden rounded-[10px] border [background:var(--rm-fall-video-bg)] [border-color:var(--rm-button-glass-border)]">
          <ThermalView />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-5 [background:linear-gradient(to_top,rgba(0,0,0,0.5),rgba(0,0,0,0))]" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="truncate text-[length:var(--rm-fs-body)] font-semibold">{title}</div>
          <div className="truncate text-[length:var(--rm-fs-meta)] opacity-[0.78]">{subtitle}</div>
          <div className="mt-1.5 h-[3px] rounded-[2px] [background:rgba(255,255,255,0.2)]">
            <div
              className="h-full rounded-[2px] [background:rgba(255,255,255,0.9)]"
              style={{ width: `${Math.max(6, Math.min(100, progressPercent))}%` }}
            />
          </div>
        </div>

        <span className="inline-flex items-center gap-1 text-[length:var(--rm-fs-meta)] font-semibold opacity-[0.86]">
          Video
          <IconArrowRight stroke="currentColor" />
        </span>
      </div>
    </button>
  </div>
);

export { EvidenceMiniDock };
