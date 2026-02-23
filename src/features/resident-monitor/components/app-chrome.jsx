import {
  IconAppGrid,
  IconChevronDown,
  IconStatusSignal,
  IconStatusWifi,
} from "./ui-icons/index.js";
import "./app-chrome.css";

const PhoneStatusBar = ({ time = "15.25" }) => (
  <div className="app-chrome-status-bar">
    <span className="app-chrome-status-time">{time}</span>
    <div className="app-chrome-status-icons">
      <IconStatusSignal />
      <IconStatusWifi />
      <div className="app-chrome-battery-shell">
        <div className="app-chrome-battery-level" />
      </div>
    </div>
  </div>
);

const OverviewHeader = () => (
  <div className="app-chrome-overview-header">
    <div className="app-chrome-overview-row">
      <div className="app-chrome-overview-icon-wrap">
        <IconAppGrid />
      </div>
      <span className="app-chrome-overview-title">All residents</span>
      <IconChevronDown />
    </div>
  </div>
);

export { OverviewHeader, PhoneStatusBar };
