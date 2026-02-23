const IconCalendar = ({ color = "rgba(255,255,255,0.5)" }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <rect x="1" y="2" width="12" height="11" rx="2" stroke={color} strokeWidth="1.4" />
    <path d="M1 5H13" stroke={color} strokeWidth="1.4" />
    <rect x="4" y="0.5" width="1.5" height="3" rx="0.75" fill={color} />
    <rect x="8.5" y="0.5" width="1.5" height="3" rx="0.75" fill={color} />
  </svg>
);

const IconClock = ({ color = "rgba(255,255,255,0.5)" }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="6" stroke={color} strokeWidth="1.4" />
    <path d="M7 4V7L9 9" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

export { IconCalendar, IconClock };
