const TimelineIcon = ({ children }) => (
  <div className="flex [height:var(--rm-fall-timeline-icon-size)] [width:var(--rm-fall-timeline-icon-size)] shrink-0 items-center justify-center rounded-[var(--rm-fall-timeline-icon-radius)] border [background:var(--rm-fall-timeline-icon-bg)] [border-color:var(--rm-fall-timeline-icon-border)]">
    {children}
  </div>
);

export { TimelineIcon };
