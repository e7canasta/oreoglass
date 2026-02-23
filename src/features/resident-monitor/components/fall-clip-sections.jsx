import {
  IconArrowLeft,
  IconCalendar,
  IconCheckCircle,
  IconClock,
  IconEdit,
  IconQuestionCircle,
  IconStatClock,
  IconStatReaction,
} from "./ui-icons/index.js";
import "./fall-clip-sections.css";

const FallClipMetaRow = () => (
  <div className="fall-clip-meta-row">
    <div className="fall-clip-meta-item">
      <IconCalendar />
      <span className="fall-clip-meta-label">Aug 29th</span>
    </div>
    <div className="fall-clip-meta-item">
      <IconClock />
      <span className="fall-clip-meta-label">07:02 AM</span>
    </div>
  </div>
);

const FallClipNeedsReview = ({ onClassify }) => (
  <>
    <div className="fall-clip-review-header">
      <div className="fall-clip-chip-dashed">
        <span className="fall-clip-chip-dashed-label">Fall</span>
        <IconQuestionCircle />
      </div>
      <div className="fall-clip-chip-warning">
        <span className="fall-clip-chip-warning-label">Needs review</span>
      </div>
    </div>

    <div className="fall-clip-review-question">Please review the clip. What happened?</div>

    <div className="fall-clip-review-grid">
      {["Fall", "Not a fall", "Uncertain", "Safe to ground"].map((opt) => (
        <button type="button" key={opt} onClick={() => onClassify(opt)} className="fall-clip-review-option">
          {opt}
        </button>
      ))}
    </div>
  </>
);

const FallClipReviewed = ({ classification, onEdit }) => (
  <div className="fall-clip-reviewed-row">
    <div className="fall-clip-chip-critical">
      <span className="fall-clip-chip-critical-label">Fall</span>
    </div>
    <div className="fall-clip-chip-reviewed">
      <span className="fall-clip-chip-reviewed-label">{classification || "Without injury"}</span>
    </div>
    <button type="button" onClick={onEdit} className="fall-clip-edit-button">
      <IconEdit />
      <span className="fall-clip-edit-label">Edit</span>
    </button>
    <div className="fall-clip-reviewed-status">
      <span className="fall-clip-reviewed-status-label">Reviewed</span>
      <IconCheckCircle />
    </div>
  </div>
);

const FallClipStats = () => {
  const stats = [
    { label: "Reaction time", value: "10s", icon: <IconStatReaction /> },
    { label: "Time on floor", value: "11m", icon: <IconStatClock /> },
  ];

  return (
    <div className="fall-clip-stats-grid">
      {stats.map((stat) => (
        <div key={stat.label} className="fall-clip-stat-card">
          <div className="fall-clip-stat-label">{stat.label}</div>
          <div className="fall-clip-stat-value-wrap">
            {stat.icon}
            <span className="fall-clip-stat-value">{stat.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

const FallClipTimeline = ({ events }) => (
  <div className="fall-clip-timeline">
    {events.map((ev, i) => (
      <div key={i} className="fall-clip-timeline-row">
        <div className="fall-clip-timeline-rail">
          {i > 0 && (
            <div
              className={
                i === events.length - 1
                  ? "fall-clip-timeline-connector-top is-success"
                  : "fall-clip-timeline-connector-top"
              }
            />
          )}

          <div
            className={
              ev.dotTone === "success"
                ? "fall-clip-timeline-dot is-success"
                : "fall-clip-timeline-dot is-critical"
            }
          />

          {!ev.isLast && <div className="fall-clip-timeline-connector" />}
          {ev.isLast && (
            <>
              <div className="fall-clip-timeline-connector-staff" />
              <div className="fall-clip-timeline-dot-staff" />
            </>
          )}
        </div>

        <div className={ev.isLast ? "fall-clip-timeline-content is-last" : "fall-clip-timeline-content"}>
          <span className="fall-clip-timeline-time">{ev.time}</span>
          {ev.icon}
          <span className="fall-clip-timeline-label">{ev.label}</span>
        </div>
      </div>
    ))}
  </div>
);

const FallClipBackButton = ({ onBack }) => (
  <div className="fall-clip-back-wrap">
    <button type="button" onClick={onBack} className="fall-clip-back-button">
      <IconArrowLeft
        width={16}
        height={13}
        viewBox="0 0 16 13"
        strokeWidth={2}
        path="M14 6.5H2M7 1L2 6.5L7 12"
      />
      <span className="fall-clip-back-label">Back</span>
    </button>
  </div>
);

export {
  FallClipBackButton,
  FallClipMetaRow,
  FallClipNeedsReview,
  FallClipReviewed,
  FallClipStats,
  FallClipTimeline,
};
