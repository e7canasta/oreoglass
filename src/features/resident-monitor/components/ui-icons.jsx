const IconStatusSignal = () => (
  <svg width="18" height="13" viewBox="0 0 18 13" fill="white">
    <rect x="0" y="9" width="3.5" height="4" rx="0.5" />
    <rect x="4.5" y="6" width="3.5" height="7" rx="0.5" />
    <rect x="9" y="3" width="3.5" height="10" rx="0.5" />
    <rect x="13.5" y="0" width="3.5" height="13" rx="0.5" />
  </svg>
);

const IconStatusWifi = () => (
  <svg width="16" height="13" viewBox="0 0 16 13" fill="white">
    <path d="M8 2.4C10.8 2.4 13.3 3.6 15 5.5L16 4.4C14 2.2 11.1 0.8 8 0.8C4.9 0.8 2 2.2 0 4.4L1 5.5C2.7 3.6 5.2 2.4 8 2.4Z" />
    <path d="M8 5.6C9.9 5.6 11.6 6.4 12.8 7.7L13.8 6.6C12.3 5.0 10.3 4.0 8 4.0C5.7 4.0 3.7 5.0 2.2 6.6L3.2 7.7C4.4 6.4 6.1 5.6 8 5.6Z" />
    <circle cx="8" cy="11" r="2" />
  </svg>
);

const IconAppGrid = () => (
  <svg width="17" height="17" viewBox="0 0 18 18" fill="none">
    <rect x="1" y="1" width="6.5" height="9" rx="1.5" fill="#1a2540" />
    <rect x="10" y="1" width="7" height="5.5" rx="1.5" fill="#1a2540" />
    <rect x="1" y="12" width="6.5" height="5" rx="1.5" fill="#1a2540" />
    <rect x="10" y="9" width="7" height="8" rx="1.5" fill="#1a2540" />
  </svg>
);

const IconArrowLeft = ({
  width = 20,
  height = 16,
  viewBox = "0 0 20 16",
  stroke = "white",
  strokeWidth = 2.4,
  path = "M18 8H2M9 1L2 8L9 15",
}) => (
  <svg width={width} height={height} viewBox={viewBox} fill="none">
    <path
      d={path}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconArrowRight = ({ width = 18, height = 14, stroke = "white", strokeWidth = 2.5 }) => (
  <svg width={width} height={height} viewBox="0 0 18 14" fill="none">
    <path
      d="M1 7H17M11 1L17 7L11 13"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconChevronDown = ({ stroke = "rgba(255,255,255,0.7)" }) => (
  <svg width="13" height="8" viewBox="0 0 14 8" fill="none">
    <path d="M1 1L7 7L13 1" stroke={stroke} strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
);

const IconChevronRight = ({
  width = 7,
  height = 12,
  viewBox = "0 0 7 12",
  stroke = "rgba(255,255,255,0.35)",
  strokeWidth = 2,
  path = "M1 1L6 6L1 11",
}) => (
  <svg width={width} height={height} viewBox={viewBox} fill="none">
    <path
      d={path}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconChevronLeft = ({
  width = 7,
  height = 12,
  viewBox = "0 0 7 12",
  stroke = "rgba(255,255,255,0.7)",
  strokeWidth = 2,
  path = "M6 1L1 6L6 11",
}) => (
  <svg width={width} height={height} viewBox={viewBox} fill="none">
    <path
      d={path}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconClose = ({ width = 13, height = 13, stroke = "white", strokeWidth = 2.4 }) => (
  <svg width={width} height={height} viewBox="0 0 13 13" fill="none">
    <path d="M1 1L12 12M12 1L1 12" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
  </svg>
);

const IconAlertMark = () => (
  <svg width="3.5" height="13" viewBox="0 0 3.5 16" fill="none">
    <path d="M1.75 1V9.5" stroke="#e8430a" strokeWidth="2.8" strokeLinecap="round" />
    <circle cx="1.75" cy="14.2" r="1.75" fill="#e8430a" />
  </svg>
);

const IconCheck = ({ width = 14, height = 11, stroke = "white", strokeWidth = 2.2 }) => (
  <svg width={width} height={height} viewBox="0 0 14 11" fill="none">
    <path
      d="M1.5 5.5L5.5 9.5L12.5 1.5"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconPlay = ({ width = 9, height = 11, fill = "white" }) => (
  <svg width={width} height={height} viewBox="0 0 9 11" fill="none">
    <path d="M1 1L8 5.5L1 10V1Z" fill={fill} />
  </svg>
);

const IconPause = ({ fill = "white" }) => (
  <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
    <rect x="1" y="1" width="3.5" height="12" rx="1.5" fill={fill} />
    <rect x="7.5" y="1" width="3.5" height="12" rx="1.5" fill={fill} />
  </svg>
);

const IconVolume = () => (
  <svg width="16" height="14" viewBox="0 0 18 16" fill="none">
    <path d="M1 5H5L9 1V15L5 11H1V5Z" fill="white" />
    <path d="M12 4C13.5 5.5 14 7 14 8C14 9 13.5 10.5 12 12" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    <path d="M15 2C17.5 4.5 18 6.5 18 8C18 9.5 17.5 11.5 15 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
  </svg>
);

const IconCalendar = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <rect x="1" y="2" width="12" height="11" rx="2" stroke="rgba(255,255,255,0.5)" strokeWidth="1.4" />
    <path d="M1 5H13" stroke="rgba(255,255,255,0.5)" strokeWidth="1.4" />
    <rect x="4" y="0.5" width="1.5" height="3" rx="0.75" fill="rgba(255,255,255,0.5)" />
    <rect x="8.5" y="0.5" width="1.5" height="3" rx="0.75" fill="rgba(255,255,255,0.5)" />
  </svg>
);

const IconClock = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="6" stroke="rgba(255,255,255,0.5)" strokeWidth="1.4" />
    <path d="M7 4V7L9 9" stroke="rgba(255,255,255,0.5)" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const IconQuestionCircle = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
    <circle cx="6.5" cy="6.5" r="6" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
    <text x="6.5" y="10" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.55)" fontWeight="bold">?</text>
  </svg>
);

const IconEdit = () => (
  <svg width="12" height="12" viewBox="0 0 13 13" fill="none">
    <path
      d="M8.5 2L11 4.5L4 11.5H1.5V9L8.5 2Z"
      stroke="rgba(255,255,255,0.7)"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconCheckCircle = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="7" stroke="rgba(255,255,255,0.35)" strokeWidth="1.4" />
    <path
      d="M4.5 8L7 10.5L11.5 5.5"
      stroke="rgba(255,255,255,0.6)"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconStatReaction = () => (
  <svg width="18" height="22" viewBox="0 0 18 26" fill="none">
    <circle cx="9" cy="4" r="3.5" fill="rgba(255,255,255,0.65)" />
    <path d="M9 9 L6 18 L3 24" stroke="rgba(255,255,255,0.65)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M9 9 L12 18 L15 24" stroke="rgba(255,255,255,0.65)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M5 14 L13 14" stroke="rgba(255,255,255,0.65)" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const IconStatClock = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="8.5" stroke="rgba(255,255,255,0.65)" strokeWidth="1.6" />
    <path
      d="M10 5.5V10L13 12.5"
      stroke="rgba(255,255,255,0.65)"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconOverviewTab = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect x="1" y="1" width="8" height="10" rx="2" fill="white" />
    <rect x="13" y="1" width="8" height="6" rx="2" fill="white" opacity="0.4" />
    <rect x="1" y="13" width="8" height="8" rx="2" fill="white" opacity="0.4" />
    <rect x="13" y="9" width="8" height="12" rx="2" fill="white" opacity="0.4" />
  </svg>
);

const IconSupportTab = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="9" stroke="rgba(255,255,255,0.4)" strokeWidth="1.8" />
    <text x="11" y="15.5" textAnchor="middle" fontSize="12" fill="rgba(255,255,255,0.4)" fontWeight="bold">?</text>
  </svg>
);

const IconSettingsTab = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="3" stroke="rgba(255,255,255,0.4)" strokeWidth="1.8" />
    <path
      d="M11 2v2M11 18v2M2 11h2M18 11h2M4.9 4.9l1.4 1.4M15.7 15.7l1.4 1.4M4.9 17.1l1.4-1.4M15.7 6.3l1.4-1.4"
      stroke="rgba(255,255,255,0.4)"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const IconPersonGlyph = () => (
  <svg width="12" height="13" viewBox="0 0 14 16" fill="none">
    <circle cx="7" cy="4" r="3" fill="white" />
    <path d="M2 14c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
  </svg>
);

const IconTrendDown = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
    <path d="M2 3L10 11L18 3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconTrendUp = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
    <path d="M2 11L10 3L18 11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconWideChevronDown = () => (
  <svg width="24" height="10" viewBox="0 0 24 10" fill="none">
    <path d="M3 3L12 8L21 3" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export {
  IconAlertMark,
  IconAppGrid,
  IconArrowLeft,
  IconArrowRight,
  IconCalendar,
  IconCheck,
  IconCheckCircle,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconClock,
  IconClose,
  IconEdit,
  IconOverviewTab,
  IconPause,
  IconPersonGlyph,
  IconPlay,
  IconQuestionCircle,
  IconSettingsTab,
  IconStatusSignal,
  IconStatClock,
  IconStatReaction,
  IconStatusWifi,
  IconSupportTab,
  IconTrendDown,
  IconTrendUp,
  IconVolume,
  IconWideChevronDown,
};
