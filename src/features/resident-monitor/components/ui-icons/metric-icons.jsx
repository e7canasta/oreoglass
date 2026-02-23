const IconStatReaction = () => (
  <svg width="18" height="22" viewBox="0 0 18 26" fill="none">
    <circle cx="9" cy="4" r="3.5" fill="rgba(255,255,255,0.65)" />
    <path d="M9 9 L6 18 L3 24" stroke="rgba(255,255,255,0.65)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M9 9 L12 18 L15 24" stroke="rgba(255,255,255,0.65)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M5 14 L13 14" stroke="rgba(255,255,255,0.65)" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const IconStatClock = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="8.5" stroke="rgba(255,255,255,0.65)" strokeWidth="1.6" />
    <path d="M10 5.5V10L13 12.5" stroke="rgba(255,255,255,0.65)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconTrendDown = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
    <path d="M2 3L10 11L18 3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconTrendUp = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
    <path d="M2 11L10 3L18 11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export { IconStatClock, IconStatReaction, IconTrendDown, IconTrendUp };
