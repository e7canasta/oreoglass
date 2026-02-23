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

export {
  IconArrowLeft,
  IconArrowRight,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconWideChevronDown,
};
