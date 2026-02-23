import "./room-detail-widgets.css";

const SleepChart = () => {
  const bars = [
    { x: 2, w: 3 },
    { x: 6, w: 8 },
    { x: 15, w: 5 },
    { x: 22, w: 10 },
    { x: 33, w: 4 },
    { x: 38, w: 3 },
    { x: 42, w: 6 },
    { x: 49, w: 4 },
    { x: 54, w: 5 },
    { x: 60, w: 8 },
    { x: 69, w: 4 },
    { x: 74, w: 5 },
    { x: 80, w: 3 },
    { x: 85, w: 8 },
  ];

  return (
    <div className="sleep-chart">
      <div className="sleep-chart-legend">
        {[["#8b5cf6", "Calm: 12 hours"], ["#ec4899", "Restless: 0 hours"]].map(([c, l]) => (
          <div key={l} className="sleep-chart-legend-item">
            <div className="sleep-chart-legend-dot" style={{ background: c }} />
            <span className="sleep-chart-legend-label">{l}</span>
          </div>
        ))}
      </div>
      <div className="sleep-chart-graph-wrap">
        <svg width="100%" height="52" viewBox="0 0 100 52" preserveAspectRatio="none">
          {bars.map((b, i) => (
            <rect
              key={i}
              x={`${b.x}%`}
              y="0"
              width={`${b.w}%`}
              height="52"
              fill={i % 5 === 2 ? "#6d28d9" : "#7c3aed"}
              rx="1"
              opacity={0.85 + (i % 3) * 0.05}
            />
          ))}
          <rect x="94%" y="0" width="2" height="52" fill="#f5c842" />
        </svg>
      </div>
      <div className="sleep-chart-axis">
        {["02", "06", "10", "Now"].map((t, i) => (
          <span key={i} className={i === 3 ? "sleep-chart-axis-label sleep-chart-axis-label-now" : "sleep-chart-axis-label"}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

const ActivityTile = ({ time, icon, isCurrent, duration, isAlarm, onClick }) => {
  const isInteractive = typeof onClick === "function";
  const TileElement = isInteractive ? "button" : "div";
  const className = [
    "activity-tile",
    isCurrent ? "activity-tile-current" : "",
    isAlarm ? "activity-tile-alarm" : "",
    isInteractive ? "activity-tile-interactive" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <TileElement
      onClick={onClick}
      type={isInteractive ? "button" : undefined}
      className={className}
      aria-label={isInteractive ? `Open activity event at ${time}` : undefined}
    >
      {isCurrent && !isAlarm && (
        <div className="activity-tile-current-strip">
          <span>{time} – now</span>
        </div>
      )}

      {!isCurrent && <span className="activity-tile-time">{time}</span>}

      <div className={isCurrent && !isAlarm ? "activity-tile-icon activity-tile-icon-current" : "activity-tile-icon"}>
        {icon}
      </div>

      {isCurrent && duration && !isAlarm && <span className="activity-tile-duration">{duration}</span>}
      {isAlarm && <div className="activity-tile-alarm-dot" />}
    </TileElement>
  );
};

export { ActivityTile, SleepChart };
