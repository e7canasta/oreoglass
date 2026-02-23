const IconArrowLeft = ({
  width = 20,
  height = 16,
  viewBox = "0 0 20 16",
  stroke = "white",
  strokeWidth = 2.4,
  path = "M18 8H2M9 1L2 8L9 15",
}) => (
  <svg width={width} height={height} viewBox={viewBox} fill="none">
    <path d={path} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconArrowRight = ({ width = 18, height = 14, stroke = "white", strokeWidth = 2.5 }) => (
  <svg width={width} height={height} viewBox="0 0 18 14" fill="none">
    <path d="M1 7H17M11 1L17 7L11 13" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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
    <path d={path} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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
    <path d={path} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconWideChevronDown = () => (
  <svg width="24" height="10" viewBox="0 0 24 10" fill="none">
    <path d="M3 3L12 8L21 3" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconFullscreenEnter = ({ stroke = "rgba(255,255,255,0.7)" }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M1.5 6V1.5H6" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 1.5H14.5V6" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14.5 10V14.5H10" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 14.5H1.5V10" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconFullscreenExit = ({ stroke = "rgba(255,255,255,0.7)" }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M6 1.5H1.5V6" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 1.5H14.5V6" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 14.5H14.5V10" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 14.5H1.5V10" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.2 5.2L1.5 1.5" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
    <path d="M10.8 5.2L14.5 1.5" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
    <path d="M10.8 10.8L14.5 14.5" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
    <path d="M5.2 10.8L1.5 14.5" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const IconThemeSun = ({ stroke = "rgba(255,255,255,0.78)" }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="2.7" stroke={stroke} strokeWidth="1.5" />
    <path d="M8 1.6V3.1" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M8 12.9V14.4" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M1.6 8H3.1" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12.9 8H14.4" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M3.5 3.5L4.55 4.55" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M11.45 11.45L12.5 12.5" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M11.45 4.55L12.5 3.5" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M3.5 12.5L4.55 11.45" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const IconThemeMoon = ({ stroke = "rgba(255,255,255,0.78)" }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M8 2A4 4 0 1 0 14 8A6 6 0 1 1 8 2Z"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export {
  IconArrowLeft,
  IconArrowRight,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconFullscreenEnter,
  IconFullscreenExit,
  IconThemeMoon,
  IconThemeSun,
  IconWideChevronDown,
};
