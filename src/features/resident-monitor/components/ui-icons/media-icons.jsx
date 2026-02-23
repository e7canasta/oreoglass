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

export { IconPause, IconPlay, IconVolume };
