import { IconInBed } from "./icons.jsx";
import {
  IconArrowRight,
} from "./ui-icons/index.js";
import "./overview-action-sheet.css";

const OverviewActionSheet = ({ onOpenCriticalEvents, onOpenLatestActivity, onOpenComponentLab }) => {
  const quickActions = [
    { id: "fall", label: "Fall clips", arrow: true, badge: 6, tone: "critical", onClick: onOpenCriticalEvents },
    { id: "mute", label: "Mute for\n10 minutes", tone: "neutral" },
    { id: "latest", label: "Latest\nActivity", arrow: true, tone: "neutral", onClick: onOpenLatestActivity },
    onOpenComponentLab
      ? { id: "lab", label: "Component\nLab", arrow: true, tone: "muted", onClick: onOpenComponentLab }
      : { id: "soon", label: "Coming\nsoon", isBlank: true, tone: "blank" },
  ];

  return (
    <div className="overview-sheet-root">
      <div className="overview-sheet-handle" />
      <div className="overview-sheet-header">
        <span className="overview-sheet-title">Quick actions</span>
        <span className="overview-sheet-subtitle">Triage and response shortcuts</span>
      </div>
      <div className="overview-sheet-grid">
        {quickActions.map((btn, i) => (
          <button
            type="button"
            key={btn.id ?? i}
            onClick={btn.onClick}
            className={`overview-sheet-action overview-sheet-action-${btn.tone}`}
            aria-label={btn.label ? btn.label.replace("\n", " ") : undefined}
          >
            {btn.label && <span className="overview-sheet-action-label">{btn.label}</span>}
            {btn.badge && (
              <span className="overview-sheet-action-badge">{btn.badge}</span>
            )}
            {btn.isBlank && (
              <span className="overview-sheet-action-placeholder">
                <IconInBed size={32} />
              </span>
            )}
            {btn.arrow && <span className="overview-sheet-action-arrow"><IconArrowRight /></span>}
          </button>
        ))}
      </div>
    </div>
  );
};

export { OverviewActionSheet };
