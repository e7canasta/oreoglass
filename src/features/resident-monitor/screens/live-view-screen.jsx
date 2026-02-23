import { ThermalViewLive } from "../components/thermal.jsx";
import { IconArrowLeft } from "../components/ui-icons/index.js";

const LiveViewScreen = ({ onBack }) => (
  <div className="absolute inset-0 z-[25] flex animate-[slideInRight_0.3s_cubic-bezier(0.32,0.72,0,1)] flex-col overflow-hidden [background:var(--rm-live-bg)]">
    <div className="h-[calc(52px+env(safe-area-inset-top,0px))] shrink-0" />

    <header className="flex shrink-0 items-center justify-between gap-2.5 px-[18px] pb-[18px]">
      <button
        type="button"
        onClick={onBack}
        className="flex min-h-[var(--rm-hit-min)] min-w-0 flex-1 items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-live-focus-outline)]"
      >
        <IconArrowLeft stroke="var(--rm-live-back-icon)" />
        <span className="truncate text-[length:var(--rm-fs-title)] font-bold tracking-[-0.3px] text-[var(--rm-live-back-label)]">
          122.2 - Live
        </span>
      </button>

      <div className="flex shrink-0 items-center gap-1.5 rounded-[20px] border px-[13px] py-[6px] [background:var(--rm-live-badge-bg)] [border-color:var(--rm-live-badge-border)] [box-shadow:var(--rm-live-badge-shadow)]">
        <div className="size-2 animate-pulse rounded-full [background:var(--rm-live-badge-dot)]" />
        <span className="text-[length:var(--rm-fs-meta)] font-bold tracking-[0.5px] text-[var(--rm-live-badge-text)]">
          LIVE
        </span>
      </div>
    </header>

    <div className="mx-[14px] h-[clamp(186px,34vh,214px)] shrink-0 overflow-hidden rounded-[18px] [background:var(--rm-live-thermal-bg)] [box-shadow:var(--rm-live-thermal-shadow)]">
      <ThermalViewLive />
    </div>

    <section className="mx-[14px] mt-[14px] shrink-0 rounded-2xl border px-4 pb-4 pt-[14px] [background:var(--rm-live-event-bg)] [border-color:var(--rm-live-event-border)]">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[length:var(--rm-fs-meta)] font-medium text-[var(--rm-live-event-meta)]">Event detected</span>
        <span className="text-[length:var(--rm-fs-meta)] font-medium text-[var(--rm-live-event-meta)]">01:24</span>
      </div>
      <div className="flex items-center gap-2.5">
        <div className="size-[11px] shrink-0 rounded-full [background:var(--rm-live-event-dot-bg)] [box-shadow:var(--rm-live-event-dot-shadow)]" />
        <span className="text-[length:var(--rm-fs-body-strong)] font-bold tracking-[-0.2px] text-[var(--rm-live-event-title)]">
          Alarm - Sitting on bed edge
        </span>
      </div>
    </section>

    <div className="mt-auto grid grid-cols-2 gap-2.5 px-[14px] pb-[calc(12px+env(safe-area-inset-bottom,0px))] pt-3">
      <button
        type="button"
        onClick={onBack}
        className="min-h-14 rounded-2xl px-3 py-4 text-[length:var(--rm-fs-body-strong)] font-bold tracking-[-0.2px] text-[var(--rm-live-action-text)] [background:var(--rm-live-action-primary-bg)] [box-shadow:var(--rm-live-action-primary-shadow)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-live-focus-outline)] active:scale-[0.994]"
      >
        On my way
      </button>
      <button
        type="button"
        onClick={onBack}
        className="min-h-14 rounded-2xl px-3 py-4 text-[length:var(--rm-fs-body-strong)] font-bold tracking-[-0.2px] text-[var(--rm-live-action-text)] [background:var(--rm-live-action-secondary-bg)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-live-focus-outline)] active:scale-[0.994]"
      >
        Dismiss
      </button>
    </div>
  </div>
);

export { LiveViewScreen };
