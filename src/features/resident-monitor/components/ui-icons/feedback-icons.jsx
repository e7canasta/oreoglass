const IconClose = ({ width = 13, height = 13, stroke = "white", strokeWidth = 2.4 }) => (
  <svg width={width} height={height} viewBox="0 0 13 13" fill="none">
    <path d="M1 1L12 12M12 1L1 12" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
  </svg>
);

const IconAlertMark = ({ color = "#e8430a" }) => (
  <svg width="3.5" height="13" viewBox="0 0 3.5 16" fill="none">
    <path d="M1.75 1V9.5" stroke={color} strokeWidth="2.8" strokeLinecap="round" />
    <circle cx="1.75" cy="14.2" r="1.75" fill={color} />
  </svg>
);

const IconCheck = ({ width = 14, height = 11, stroke = "white", strokeWidth = 2.2 }) => (
  <svg width={width} height={height} viewBox="0 0 14 11" fill="none">
    <path d="M1.5 5.5L5.5 9.5L12.5 1.5" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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
    <path d="M8.5 2L11 4.5L4 11.5H1.5V9L8.5 2Z" stroke="rgba(255,255,255,0.7)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconCheckCircle = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="7" stroke="rgba(255,255,255,0.35)" strokeWidth="1.4" />
    <path d="M4.5 8L7 10.5L11.5 5.5" stroke="rgba(255,255,255,0.6)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export {
  IconAlertMark,
  IconCheck,
  IconCheckCircle,
  IconClose,
  IconEdit,
  IconQuestionCircle,
};
