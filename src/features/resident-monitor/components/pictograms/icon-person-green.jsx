const IconPersonGreen = ({ size = 26, glyph = "var(--rm-pictogram-person-glyph)" }) => (
  <div
    className="flex items-center justify-center rounded-full [background:var(--rm-overview-dot-person-bg)] [box-shadow:var(--rm-overview-dot-person-shadow)]"
    style={{ width: `${size}px`, height: `${size}px` }}
  >
    <svg width={size * 0.6} height={size * 0.7} viewBox="0 0 14 16" fill="none">
      <circle cx="7" cy="4" r="3" fill={glyph} />
      <path d="M2 15c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke={glyph} strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  </div>
);

export { IconPersonGreen };
