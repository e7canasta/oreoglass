const IconArrowLeft = ({
  width = 20,
  height = 16,
  viewBox = "0 0 20 16",
  stroke = "var(--rm-icon-solid)",
  strokeWidth = 2.4,
  path = "M18 8H2M9 1L2 8L9 15",
}) => (
  <svg width={width} height={height} viewBox={viewBox} fill="none">
    <path d={path} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconArrowRight = ({ width = 18, height = 14, stroke = "var(--rm-icon-solid)", strokeWidth = 2.5 }) => (
  <svg width={width} height={height} viewBox="0 0 18 14" fill="none">
    <path d="M1 7H17M11 1L17 7L11 13" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconChevronDown = ({ stroke = "var(--rm-icon-medium)" }) => (
  <svg width="13" height="8" viewBox="0 0 14 8" fill="none">
    <path d="M1 1L7 7L13 1" stroke={stroke} strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
);

const IconChevronRight = ({
  width = 7,
  height = 12,
  viewBox = "0 0 7 12",
  stroke = "var(--rm-icon-ghost)",
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
  stroke = "var(--rm-icon-medium)",
  strokeWidth = 2,
  path = "M6 1L1 6L6 11",
}) => (
  <svg width={width} height={height} viewBox={viewBox} fill="none">
    <path d={path} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconWideChevronDown = ({ stroke = "var(--rm-icon-ghost)" }) => (
  <svg width="24" height="10" viewBox="0 0 24 10" fill="none">
    <path d="M3 3L12 8L21 3" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconFullscreenEnter = ({ stroke = "var(--rm-icon-medium)" }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M1.5 6V1.5H6" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 1.5H14.5V6" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14.5 10V14.5H10" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 14.5H1.5V10" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconFullscreenExit = ({ stroke = "var(--rm-icon-medium)" }) => (
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

const IconThemeSun = ({ stroke = "var(--rm-icon-high)" }) => (
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

const IconThemeMoon = ({ stroke = "var(--rm-icon-high)" }) => (
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

const IconThemeIdea = ({ stroke = "var(--rm-icon-high)" }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M6 10.8H10M6.5 13H9.5M8 1.8C5.8 1.8 4 3.5 4 5.7C4 7.2 4.8 8.3 5.7 9.3C6.2 9.8 6.4 10.2 6.5 10.8H9.5C9.6 10.2 9.8 9.8 10.3 9.3C11.2 8.3 12 7.2 12 5.7C12 3.5 10.2 1.8 8 1.8Z"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M8 0.9V0.2M2.7 2.8L2.2 2.3M13.3 2.8L13.8 2.3" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" />
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
  IconThemeIdea,
  IconThemeMoon,
  IconThemeSun,
  IconWideChevronDown,
};
