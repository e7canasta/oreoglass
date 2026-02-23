const IconAppGrid = () => (
  <svg width="17" height="17" viewBox="0 0 18 18" fill="none">
    <rect x="1" y="1" width="6.5" height="9" rx="1.5" fill="#1a2540" />
    <rect x="10" y="1" width="7" height="5.5" rx="1.5" fill="#1a2540" />
    <rect x="1" y="12" width="6.5" height="5" rx="1.5" fill="#1a2540" />
    <rect x="10" y="9" width="7" height="8" rx="1.5" fill="#1a2540" />
  </svg>
);

const IconOverviewTab = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect x="1" y="1" width="8" height="10" rx="2" fill="white" />
    <rect x="13" y="1" width="8" height="6" rx="2" fill="white" opacity="0.4" />
    <rect x="1" y="13" width="8" height="8" rx="2" fill="white" opacity="0.4" />
    <rect x="13" y="9" width="8" height="12" rx="2" fill="white" opacity="0.4" />
  </svg>
);

const IconSupportTab = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="9" stroke="rgba(255,255,255,0.4)" strokeWidth="1.8" />
    <text x="11" y="15.5" textAnchor="middle" fontSize="12" fill="rgba(255,255,255,0.4)" fontWeight="bold">?</text>
  </svg>
);

const IconSettingsTab = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="3" stroke="rgba(255,255,255,0.4)" strokeWidth="1.8" />
    <path d="M11 2v2M11 18v2M2 11h2M18 11h2M4.9 4.9l1.4 1.4M15.7 15.7l1.4 1.4M4.9 17.1l1.4-1.4M15.7 6.3l1.4-1.4" stroke="rgba(255,255,255,0.4)" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const IconPersonGlyph = () => (
  <svg width="12" height="13" viewBox="0 0 14 16" fill="none">
    <circle cx="7" cy="4" r="3" fill="white" />
    <path d="M2 14c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
  </svg>
);

export {
  IconAppGrid,
  IconOverviewTab,
  IconPersonGlyph,
  IconSettingsTab,
  IconSupportTab,
};
