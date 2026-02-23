const IconStaffEnter = ({
  size = 40,
  color = "var(--rm-icon-solid)",
  surface = "var(--rm-pictogram-surface)",
  surfaceMuted = "var(--rm-pictogram-surface-muted)",
  surfaceSoft = "var(--rm-pictogram-surface-soft)",
}) => (
  <svg width={size} height={size * 0.7} viewBox="0 0 52 36" fill="none">
    <rect x="2" y="20" width="42" height="11" rx="3" fill={surface} />
    <rect x="2" y="14" width="5" height="17" rx="2" fill={surfaceMuted} />
    <rect x="8" y="12" width="12" height="8" rx="2.5" fill={surfaceSoft} />
    <circle cx="44" cy="7" r="5" fill={color} />
    <path d="M44 14 L41 26 L38 34" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M44 14 L47 26 L50 34" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M39 19 L49 19" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export { IconStaffEnter };
