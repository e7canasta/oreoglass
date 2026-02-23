const IconLayingOnFloor = ({ size = 28, color = "var(--rm-icon-solid)" }) => (
  <svg width={size * 1.5} height={size * 0.6} viewBox="0 0 42 18" fill="none">
    <circle cx="34" cy="5" r="4.5" fill={color} />
    <path d="M30 10 L8 14" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <path d="M8 14 L2 11" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    <path d="M30 10 L36 14" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    <path d="M0 17 L42 17" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
  </svg>
);

export { IconLayingOnFloor };
