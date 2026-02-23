const IconFalling = ({ size = 26, color = "white" }) => (
  <svg width={size * 1.4} height={size} viewBox="0 0 40 28" fill="none">
    <circle cx="32" cy="5" r="4" fill={color} />
    <path
      d="M28 10 L18 18 L5 22"
      stroke={color}
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path d="M18 18 L20 26" stroke={color} strokeWidth="2.8" strokeLinecap="round" />
    <path d="M28 16 L36 20" stroke={color} strokeWidth="2.8" strokeLinecap="round" />
  </svg>
);

export { IconFalling };
