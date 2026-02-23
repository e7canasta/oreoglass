const IconInBed = ({
  size = 54,
  color = "var(--rm-icon-solid)",
  accent = "var(--rm-pictogram-accent)",
  className,
}) => (
  <svg className={className} width={size} height={size * 0.62} viewBox="0 0 60 37" fill="none">
    <rect x="3" y="21" width="54" height="10" rx="3" fill={accent} opacity="0.7" />
    <rect x="3" y="15" width="6" height="16" rx="2" fill={accent} opacity="0.8" />
    <rect x="10" y="13" width="13" height="9" rx="3" fill={color} opacity="0.55" />
    <rect x="10" y="17" width="44" height="6" rx="3" fill={color} opacity="0.8" />
    <circle cx="14" cy="12" r="5" fill={color} />
    <text x="30" y="10" fontSize="8" fill={color} fontWeight="bold" fontFamily="system-ui" opacity="0.9">
      z
    </text>
    <text x="37" y="6" fontSize="6" fill={color} fontWeight="bold" fontFamily="system-ui" opacity="0.6">
      z
    </text>
  </svg>
);

export { IconInBed };
