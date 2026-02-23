import { IconTrendDown, IconTrendUp } from "./ui-icons/index.js";
import "./sleep-detail-widgets.css";

const Sleep24hBar = () => {
  const blocks = [
    [2, 18, false],
    [22, 4, false],
    [30, 2, true],
    [35, 18, false],
    [56, 2, true],
    [62, 14, false],
    [78, 3, false],
  ];

  const NOW_PCT = 68;
  const labels = ["20", "00", "04", "08", "12", "16", "20"];

  return (
    <div className="sleep-detail-widget-card">
      <div className="sleep-detail-summary">
        <span className="sleep-detail-summary-value">7 hours </span>
        <span className="sleep-detail-summary-label">of sleep in the past 24 hours</span>
      </div>
      <div className="sleep-detail-now-row">
        <div className="sleep-detail-now-label" style={{ "--now-pct": `${NOW_PCT}%` }}>
          Now
        </div>
      </div>
      <div className="sleep-detail-bars-track">
        {blocks.map(([s, w, rest], i) => (
          <div
            key={i}
            className={rest ? "sleep-detail-bars-segment is-restless" : "sleep-detail-bars-segment"}
            style={{
              "--bar-left": `${s}%`,
              "--bar-width": `${w}%`,
            }}
          />
        ))}
        <div className="sleep-detail-now-line" style={{ "--now-pct": `${NOW_PCT}%` }} />
      </div>
      <div className="sleep-detail-axis-row">
        {labels.map((t, i) => (
          <span key={i} className={i === 4 ? "sleep-detail-axis-label is-now" : "sleep-detail-axis-label"}>
            {t}
          </span>
        ))}
      </div>
      <div className="sleep-detail-legend-row">
        {[["calm", "Calm", "7 hours"], ["restless", "Restless", "0 hours"]].map(([tone, label, value]) => (
          <div key={label} className="sleep-detail-legend-item">
            <div className={`sleep-detail-legend-dot sleep-detail-legend-dot-${tone}`} />
            <span className="sleep-detail-legend-name">{label}:</span>
            <span className="sleep-detail-legend-value">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const TrendsChart = ({ period }) => {
  const days =
    period === "week"
      ? [
          { label: "Today", bars: [[16, 26, false], [44, 6, true]] },
          { label: "Sat 20th", bars: [[20, 28, false], [50, 10, false]] },
          { label: "Fri 19th", bars: [[18, 26, false], [46, 6, true]] },
          { label: "Thu 18th", bars: [[22, 24, false]] },
          { label: "Wed 17th", bars: [[16, 22, false], [42, 4, true]] },
          { label: "Tue 16th", bars: [[20, 28, false], [50, 8, false]] },
          { label: "Mon 15th", bars: [[18, 26, false]] },
        ]
      : [
          { label: "Week 23", bars: [[18, 26, false], [46, 6, true]] },
          { label: "Week 22", bars: [[20, 24, false], [46, 10, false]] },
          { label: "Week 21", bars: [[16, 28, false], [46, 4, true]] },
          { label: "Week 20", bars: [[22, 22, false]] },
        ];

  return (
    <div className="sleep-trends-list">
      {days.map((day, i) => (
        <div key={i} className="sleep-trends-row">
          <span className={i === 0 ? "sleep-trends-label is-today" : "sleep-trends-label"}>{day.label}</span>
          <div className="sleep-trends-track">
            {day.bars.map(([s, w, rest], j) => (
              <div
                key={j}
                className={rest ? "sleep-trends-segment is-restless" : "sleep-trends-segment"}
                style={{
                  "--trend-left": `${s}%`,
                  "--trend-width": `${w}%`,
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const InsightCard = ({ children, trend }) => (
  <div className="sleep-insight-card">
    <span className="sleep-insight-text">{children}</span>
    {trend && (
      <div className={trend === "down" ? "sleep-insight-trend is-down" : "sleep-insight-trend is-up"}>
        {trend === "down" ? <IconTrendDown /> : <IconTrendUp />}
      </div>
    )}
  </div>
);

export { InsightCard, Sleep24hBar, TrendsChart };
