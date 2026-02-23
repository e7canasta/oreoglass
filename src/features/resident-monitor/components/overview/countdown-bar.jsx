const CountdownBar = ({ seconds, total }) => (
  <div className="pointer-events-none absolute left-1/2 [top:var(--rm-overview-countdown-top)] [z-index:var(--rm-z-countdown)] flex -translate-x-1/2 items-center [column-gap:var(--rm-overview-countdown-gap)] whitespace-nowrap rounded-[var(--rm-overview-countdown-radius)] border px-[var(--rm-overview-countdown-padding-x)] py-[var(--rm-overview-countdown-padding-y)] backdrop-blur-[10px] [background:var(--rm-overview-countdown-bg)] [border-color:var(--rm-overview-countdown-border)] [box-shadow:var(--rm-overview-countdown-shadow)]">
    <div className="flex items-center justify-center rounded-full border-2 [width:var(--rm-overview-countdown-badge-size)] [height:var(--rm-overview-countdown-badge-size)] [background:var(--rm-overview-countdown-badge-bg)] [border-color:var(--rm-overview-countdown-badge-border)]">
      <span className="text-[length:var(--rm-fs-meta)] font-extrabold text-[var(--rm-overview-countdown-badge-text)]">
        {seconds}
      </span>
    </div>
    <span className="text-[length:var(--rm-fs-meta)] font-semibold text-[var(--rm-overview-countdown-label)]">
      Alarm in {seconds}s
    </span>
    <div className="h-1 rounded-[2px] [width:var(--rm-overview-countdown-track-width)] [background:var(--rm-overview-countdown-track-bg)]">
      <div
        className="h-full rounded-[2px] [background:var(--rm-overview-countdown-progress)] transition-[width] duration-1000 ease-linear"
        style={{ width: `${((total - seconds) / total) * 100}%` }}
      />
    </div>
  </div>
);

export { CountdownBar };
