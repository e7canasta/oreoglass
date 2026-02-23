const IconSittingOnBedLarge = ({
  size = 80,
  color = "var(--rm-icon-solid)",
  surface = "var(--rm-pictogram-surface)",
  surfaceMuted = "var(--rm-pictogram-surface-muted)",
  surfaceSoft = "var(--rm-pictogram-surface-soft)",
  className,
}) => (
  <svg className={className} width={size} height={size * 0.85} viewBox="0 0 80 68" fill="none">
    <rect x="4" y="38" width="72" height="18" rx="5" fill={surface} />
    <rect x="4" y="30" width="10" height="26" rx="3" fill={surfaceMuted} />
    <rect x="16" y="30" width="30" height="10" rx="3" fill={surfaceSoft} />
    <circle cx="60" cy="22" r="9" fill={color} />
    <path
      d="M60 32 L52 48 L36 48"
      stroke={color}
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path d="M60 32 L66 44" stroke={color} strokeWidth="5" strokeLinecap="round" />
    <path d="M66 44 L68 56" stroke={color} strokeWidth="4.5" strokeLinecap="round" />
  </svg>
);

export { IconSittingOnBedLarge };
