import "./thermal.css";

/* Thermal rendering primitives */
const ThermalView = ({ blurred = false }) => (
  <div className={blurred ? "thermal-view-root is-blurred" : "thermal-view-root"}>
    <svg width="100%" height="100%" viewBox="0 0 320 220" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="roomBg2" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#c8d8e8"/>
          <stop offset="100%" stopColor="#9ab0c4"/>
        </radialGradient>
        <radialGradient id="body2" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#ff5500"/>
          <stop offset="40%" stopColor="#e83a00"/>
          <stop offset="100%" stopColor="#cc2200" stopOpacity="0.6"/>
        </radialGradient>
        <filter id="blur3"><feGaussianBlur stdDeviation="3"/></filter>
        <filter id="blur4"><feGaussianBlur stdDeviation="1.5"/></filter>
      </defs>
      <rect width="320" height="220" fill="url(#roomBg2)"/>
      <rect x="0" y="140" width="320" height="80" fill="rgba(160,185,200,0.4)"/>
      <rect x="30" y="50" width="160" height="100" rx="8" fill="rgba(180,200,215,0.6)"/>
      <rect x="30" y="50" width="160" height="18" rx="4" fill="rgba(160,180,200,0.7)"/>
      <rect x="205" y="90" width="45" height="55" rx="5" fill="rgba(150,170,190,0.6)"/>
      <ellipse cx="110" cy="120" rx="28" ry="46" fill="url(#body2)" filter="url(#blur3)" transform="rotate(-15 110 120)"/>
      <ellipse cx="96" cy="96" rx="14" ry="18" fill="#ff6600" filter="url(#blur4)" opacity="0.9" transform="rotate(-15 96 96)"/>
      <ellipse cx="88" cy="80" rx="10" ry="11" fill="#ff8800" filter="url(#blur4)" opacity="0.85"/>
      <rect x="0" y="0" width="320" height="6" fill="rgba(140,165,185,0.8)"/>
      <rect x="0" y="0" width="6" height="220" fill="rgba(140,165,185,0.8)"/>
      <rect x="314" y="0" width="6" height="220" fill="rgba(140,165,185,0.8)"/>
    </svg>
  </div>
);

/* ══════════════════════════════════════
   FALL REVIEW SCREEN  — pixel perfect
   ref: 6734af7f209b0263884f97a8
══════════════════════════════════════ */

const ThermalViewLive = () => (
  <svg width="100%" height="100%" viewBox="0 0 340 230" preserveAspectRatio="xMidYMid slice">
    <defs>
      <radialGradient id="liveBg" cx="50%" cy="45%" r="65%">
        <stop offset="0%" stopColor="#ccd9e6"/>
        <stop offset="100%" stopColor="#8da5bc"/>
      </radialGradient>
      <radialGradient id="liveBody" cx="48%" cy="38%" r="58%">
        <stop offset="0%" stopColor="#ff4400"/>
        <stop offset="35%" stopColor="#e83200"/>
        <stop offset="100%" stopColor="#be2800" stopOpacity="0.55"/>
      </radialGradient>
      <filter id="softBlur"><feGaussianBlur stdDeviation="5"/></filter>
      <filter id="headBlur"><feGaussianBlur stdDeviation="2.5"/></filter>
    </defs>
    {/* room */}
    <rect width="340" height="230" fill="url(#liveBg)"/>
    {/* floor transition */}
    <rect x="0" y="155" width="340" height="75" fill="rgba(155,178,196,0.38)"/>
    {/* furniture shapes */}
    <rect x="220" y="80" width="55" height="68" rx="6" fill="rgba(165,185,205,0.55)"/>
    <rect x="18" y="60" width="130" height="75" rx="7" fill="rgba(178,198,215,0.5)"/>
    {/* body — upright oval blob */}
    <ellipse cx="148" cy="128" rx="26" ry="44"
      fill="url(#liveBody)" filter="url(#softBlur)" opacity="0.93"/>
    {/* head heat */}
    <ellipse cx="148" cy="86" rx="17" ry="19"
      fill="#ff6200" filter="url(#headBlur)" opacity="0.88"/>
    {/* bright core */}
    <ellipse cx="148" cy="110" rx="11" ry="18"
      fill="#ff7700" filter="url(#headBlur)" opacity="0.6"/>
    {/* walls */}
    <rect x="0" y="0" width="340" height="5" fill="rgba(130,158,178,0.7)"/>
    <rect x="0" y="0" width="5" height="230" fill="rgba(130,158,178,0.7)"/>
    <rect x="335" y="0" width="5" height="230" fill="rgba(130,158,178,0.7)"/>
  </svg>
);

/* ══════════════════════════════════════
   LIVE VIEW SCREEN — pixel perfect img2
══════════════════════════════════════ */

const ThermalThumb = ({ variant = 0 }) => {
  // Different fall positions per clip
  const blobs = [
    // splayed on floor
    { cx:52, cy:52, rx:28, ry:14, rot:-20, hx:38, hy:38 },
    // curled small
    { cx:48, cy:50, rx:18, ry:13, rot:5, hx:54, hy:38 },
    // stretched diagonal
    { cx:50, cy:55, rx:30, ry:12, rot:30, hx:32, hy:42 },
    // compact blob
    { cx:46, cy:48, rx:22, ry:15, rot:-10, hx:50, hy:36 },
  ];
  const b = blobs[variant % blobs.length];
  return (
    <svg width="100%" height="100%" viewBox="0 0 90 72" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id={`tg${variant}`} cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#c5d5e5"/>
          <stop offset="100%" stopColor="#8da5bc"/>
        </radialGradient>
        <radialGradient id={`tb${variant}`} cx="50%" cy="45%" r="65%">
          <stop offset="0%" stopColor="#ff4800"/>
          <stop offset="55%" stopColor="#d83000"/>
          <stop offset="100%" stopColor="#b02000" stopOpacity="0.5"/>
        </radialGradient>
        <filter id={`tf${variant}`}><feGaussianBlur stdDeviation="2.5"/></filter>
      </defs>
      <rect width="90" height="72" fill={`url(#tg${variant})`}/>
      <rect x="0" y="46" width="90" height="26" fill="rgba(150,175,195,0.35)"/>
      <rect x="5" y="10" width="36" height="28" rx="3" fill="rgba(175,195,212,0.5)"/>
      <rect x="58" y="22" width="22" height="28" rx="3" fill="rgba(160,182,200,0.5)"/>
      {/* fall blob */}
      <ellipse cx={b.cx} cy={b.cy} rx={b.rx} ry={b.ry}
        fill={`url(#tb${variant})`} filter={`url(#tf${variant})`}
        transform={`rotate(${b.rot} ${b.cx} ${b.cy})`} opacity="0.92"/>
      {/* head */}
      <ellipse cx={b.hx} cy={b.hy} rx="9" ry="9"
        fill="#ff6800" filter={`url(#tf${variant})`} opacity="0.85"/>
      {/* walls */}
      <rect x="0" y="0" width="90" height="3" fill="rgba(120,148,170,0.6)"/>
      <rect x="0" y="0" width="3" height="72" fill="rgba(120,148,170,0.6)"/>
      <rect x="87" y="0" width="3" height="72" fill="rgba(120,148,170,0.6)"/>
    </svg>
  );
};

/* ══════════════════════════════════════
   CRITICAL EVENTS (Fall clips list)
══════════════════════════════════════ */

export { ThermalView, ThermalViewLive, ThermalThumb };
