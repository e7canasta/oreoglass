const IconStanding = ({ size = 28, color = "var(--rm-icon-solid)" }) => (
  <svg width={size * 0.7} height={size} viewBox="0 0 22 36" fill="none">
    <circle cx="11" cy="5" r="4.5" fill={color} />
    <path d="M11 11 L8 22 L5 33" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M11 11 L14 22 L17 33" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M6 17 L16 17" stroke={color} strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export { IconStanding };
