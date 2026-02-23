/* Shared icon and timeline primitives */
const IconInBed = ({ size = 54, color = "white", accent = "#5b8dd9" }) => (
  <svg width={size} height={size * 0.62} viewBox="0 0 60 37" fill="none">
    <rect x="3" y="21" width="54" height="10" rx="3" fill={accent} opacity="0.7"/>
    <rect x="3" y="15" width="6" height="16" rx="2" fill={accent} opacity="0.8"/>
    <rect x="10" y="13" width="13" height="9" rx="3" fill={color} opacity="0.55"/>
    <rect x="10" y="17" width="44" height="6" rx="3" fill={color} opacity="0.8"/>
    <circle cx="14" cy="12" r="5" fill={color}/>
    <text x="30" y="10" fontSize="8" fill={color} fontWeight="bold" fontFamily="system-ui" opacity="0.9">z</text>
    <text x="37" y="6" fontSize="6" fill={color} fontWeight="bold" fontFamily="system-ui" opacity="0.6">z</text>
  </svg>
);

const IconSittingOnBedLarge = ({ size = 80 }) => (
  <svg width={size} height={size * 0.85} viewBox="0 0 80 68" fill="none">
    {/* Bed */}
    <rect x="4" y="38" width="72" height="18" rx="5" fill="rgba(255,255,255,0.35)"/>
    <rect x="4" y="30" width="10" height="26" rx="3" fill="rgba(255,255,255,0.28)"/>
    <rect x="16" y="30" width="30" height="10" rx="3" fill="rgba(255,255,255,0.22)"/>
    {/* Person sitting on edge */}
    <circle cx="60" cy="22" r="9" fill="white"/>
    <path d="M60 32 L52 48 L36 48" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M60 32 L66 44" stroke="white" strokeWidth="5" strokeLinecap="round"/>
    <path d="M66 44 L68 56" stroke="white" strokeWidth="4.5" strokeLinecap="round"/>
  </svg>
);

const IconFalling = ({ size = 26, color = "white" }) => (
  <svg width={size * 1.4} height={size} viewBox="0 0 40 28" fill="none">
    <circle cx="32" cy="5" r="4" fill={color}/>
    <path d="M28 10 L18 18 L5 22" stroke={color} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M18 18 L20 26" stroke={color} strokeWidth="2.8" strokeLinecap="round"/>
    <path d="M28 16 L36 20" stroke={color} strokeWidth="2.8" strokeLinecap="round"/>
  </svg>
);

const IconPersonGreen = ({ size = 26 }) => (
  <div style={{ width:size, height:size, borderRadius:"50%", background:"linear-gradient(145deg,#4cd68a,#29a85e)", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 0 10px rgba(76,214,138,0.5)" }}>
    <svg width={size*0.6} height={size*0.7} viewBox="0 0 14 16" fill="none">
      <circle cx="7" cy="4" r="3" fill="white"/>
      <path d="M2 15c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    </svg>
  </div>
);

const IconStanding = ({ size = 28, color = "white" }) => (
  <svg width={size * 0.7} height={size} viewBox="0 0 22 36" fill="none">
    <circle cx="11" cy="5" r="4.5" fill={color}/>
    <path d="M11 11 L8 22 L5 33" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none"/>
    <path d="M11 11 L14 22 L17 33" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none"/>
    <path d="M6 17 L16 17" stroke={color} strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

/* ══════════════════════════════════════
   THERMAL VIEW
══════════════════════════════════════ */

const TimelineIcon = ({ children }) => (
  <div style={{
    width:46, height:46, borderRadius:10,
    background:"#252830",
    display:"flex", alignItems:"center", justifyContent:"center",
    flexShrink:0,
    border:"1px solid rgba(255,255,255,0.06)",
  }}>
    {children}
  </div>
);

const IconLayingOnFloor = ({ size=28, color="white" }) => (
  <svg width={size*1.5} height={size*0.6} viewBox="0 0 42 18" fill="none">
    <circle cx="34" cy="5" r="4.5" fill={color}/>
    <path d="M30 10 L8 14" stroke={color} strokeWidth="3" strokeLinecap="round"/>
    <path d="M8 14 L2 11" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M30 10 L36 14" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M0 17 L42 17" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
  </svg>
);

const IconStaffEnter = ({ size=40 }) => (
  <svg width={size} height={size*0.7} viewBox="0 0 52 36" fill="none">
    {/* bed */}
    <rect x="2" y="20" width="42" height="11" rx="3" fill="rgba(255,255,255,0.3)"/>
    <rect x="2" y="14" width="5" height="17" rx="2" fill="rgba(255,255,255,0.25)"/>
    <rect x="8" y="12" width="12" height="8" rx="2.5" fill="rgba(255,255,255,0.2)"/>
    {/* staff person */}
    <circle cx="44" cy="7" r="5" fill="white"/>
    <path d="M44 14 L41 26 L38 34" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    <path d="M44 14 L47 26 L50 34" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    <path d="M39 19 L49 19" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

/* ══════════════════════════════════════
   VIDEO CONTROLS OVERLAY
══════════════════════════════════════ */

export {
  IconInBed,
  IconSittingOnBedLarge,
  IconFalling,
  IconPersonGreen,
  IconStanding,
  TimelineIcon,
  IconLayingOnFloor,
  IconStaffEnter,
};
