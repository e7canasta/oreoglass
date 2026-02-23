import { InsightCard, TrendsChart } from "./sleep-detail-widgets.jsx";
import { IconArrowLeft, IconChevronLeft, IconChevronRight } from "./ui-icons/index.js";
import "./sleep-detail-sections.css";

const SleepDetailHeader = ({ onBack }) => (
  <div className="sleep-detail-header">
    <button type="button" onClick={onBack} className="sleep-detail-back-btn" aria-label="Back">
      <IconArrowLeft />
    </button>
    <div className="sleep-detail-header-title-wrap">
      <span className="sleep-detail-header-sleep-glyph">
        z<sup>z</sup>
      </span>
      <span className="sleep-detail-header-title">Sleep</span>
    </div>
    <div className="sleep-detail-header-spacer" />
  </div>
);

const SleepTrendsSection = ({ period, weekNum, onPeriodChange, onWeekChange }) => (
  <div className="sleep-detail-section">
    <div className="sleep-detail-trends-top-row">
      <span className="sleep-detail-trends-title">Trends</span>
      <div className="sleep-detail-trends-controls">
        <div className="sleep-detail-period-switch">
          {["week", "month"].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => onPeriodChange(item)}
              className={period === item ? "sleep-detail-period-btn is-active" : "sleep-detail-period-btn"}
              aria-pressed={period === item}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => onWeekChange(-1)}
          className="sleep-detail-week-nav-btn"
          aria-label="Previous period"
        >
          <IconChevronLeft />
        </button>

        <div className="sleep-detail-week-label">
          <span>{period === "week" ? `Week ${weekNum}` : `Month ${weekNum}`}</span>
        </div>

        <button
          type="button"
          onClick={() => onWeekChange(1)}
          className="sleep-detail-week-nav-btn"
          aria-label="Next period"
        >
          <IconChevronRight stroke="rgba(255,255,255,0.7)" />
        </button>
      </div>
    </div>

    <div className="sleep-detail-trends-chart-wrap">
      <TrendsChart period={period} />
    </div>
  </div>
);

const SleepBehaviourSection = () => (
  <div className="sleep-detail-section">
    <div className="sleep-detail-behaviour-title-row">
      <span className="sleep-detail-behaviour-title-strong">Usual behaviour </span>
      <span className="sleep-detail-behaviour-title-light">during the week</span>
    </div>

    <div className="sleep-detail-insights-stack">
      <div className="sleep-detail-insights-grid">
        <InsightCard trend="down">3-6 wake-ups per night</InsightCard>
        <InsightCard trend="down">5-6 bathroom visits per night</InsightCard>
      </div>
      <InsightCard>
        Usually falls asleep around <strong>20:00</strong> and wakes around <strong>08:00</strong>
      </InsightCard>
    </div>
  </div>
);

export { SleepBehaviourSection, SleepDetailHeader, SleepTrendsSection };
