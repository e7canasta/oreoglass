import { cn } from "@/lib/utils";

/* Thermal rendering primitives */
const ThermalView = ({ blurred = false }) => (
  <div
    className={cn(
      "relative h-full w-full",
      blurred && "scale-[1.05] blur-[8px]"
    )}
  >
    <svg width="100%" height="100%" viewBox="0 0 320 220" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="roomBg2" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="var(--rm-thermal-room-bg-start)"/>
          <stop offset="100%" stopColor="var(--rm-thermal-room-bg-end)"/>
        </radialGradient>
        <radialGradient id="body2" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="var(--rm-thermal-body-start)"/>
          <stop offset="40%" stopColor="var(--rm-thermal-body-mid)"/>
          <stop offset="100%" stopColor="var(--rm-thermal-body-end)"/>
        </radialGradient>
        <filter id="blur3"><feGaussianBlur stdDeviation="3"/></filter>
        <filter id="blur4"><feGaussianBlur stdDeviation="1.5"/></filter>
      </defs>
      <rect width="320" height="220" fill="url(#roomBg2)"/>
      <rect x="0" y="140" width="320" height="80" fill="var(--rm-thermal-floor)"/>
      <rect x="30" y="50" width="160" height="100" rx="8" fill="var(--rm-thermal-furniture-primary)"/>
      <rect x="30" y="50" width="160" height="18" rx="4" fill="var(--rm-thermal-furniture-secondary)"/>
      <rect x="205" y="90" width="45" height="55" rx="5" fill="var(--rm-thermal-furniture-tertiary)"/>
      <ellipse cx="110" cy="120" rx="28" ry="46" fill="url(#body2)" filter="url(#blur3)" transform="rotate(-15 110 120)"/>
      <ellipse cx="96" cy="96" rx="14" ry="18" fill="var(--rm-thermal-head-hot)" filter="url(#blur4)" opacity="0.9" transform="rotate(-15 96 96)"/>
      <ellipse cx="88" cy="80" rx="10" ry="11" fill="var(--rm-thermal-head-warm)" filter="url(#blur4)" opacity="0.85"/>
      <rect x="0" y="0" width="320" height="6" fill="var(--rm-thermal-wall)"/>
      <rect x="0" y="0" width="6" height="220" fill="var(--rm-thermal-wall)"/>
      <rect x="314" y="0" width="6" height="220" fill="var(--rm-thermal-wall)"/>
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
        <stop offset="0%" stopColor="var(--rm-thermal-live-room-bg-start)"/>
        <stop offset="100%" stopColor="var(--rm-thermal-live-room-bg-end)"/>
      </radialGradient>
      <radialGradient id="liveBody" cx="48%" cy="38%" r="58%">
        <stop offset="0%" stopColor="var(--rm-thermal-live-body-start)"/>
        <stop offset="35%" stopColor="var(--rm-thermal-live-body-mid)"/>
        <stop offset="100%" stopColor="var(--rm-thermal-live-body-end)"/>
      </radialGradient>
      <filter id="softBlur"><feGaussianBlur stdDeviation="5"/></filter>
      <filter id="headBlur"><feGaussianBlur stdDeviation="2.5"/></filter>
    </defs>
    {/* room */}
    <rect width="340" height="230" fill="url(#liveBg)"/>
    {/* floor transition */}
    <rect x="0" y="155" width="340" height="75" fill="var(--rm-thermal-live-floor)"/>
    {/* furniture shapes */}
    <rect x="220" y="80" width="55" height="68" rx="6" fill="var(--rm-thermal-live-furniture-primary)"/>
    <rect x="18" y="60" width="130" height="75" rx="7" fill="var(--rm-thermal-live-furniture-secondary)"/>
    {/* body — upright oval blob */}
    <ellipse cx="148" cy="128" rx="26" ry="44"
      fill="url(#liveBody)" filter="url(#softBlur)" opacity="0.93"/>
    {/* head heat */}
    <ellipse cx="148" cy="86" rx="17" ry="19"
      fill="var(--rm-thermal-live-head-hot)" filter="url(#headBlur)" opacity="0.88"/>
    {/* bright core */}
    <ellipse cx="148" cy="110" rx="11" ry="18"
      fill="var(--rm-thermal-live-head-warm)" filter="url(#headBlur)" opacity="0.6"/>
    {/* walls */}
    <rect x="0" y="0" width="340" height="5" fill="var(--rm-thermal-live-wall)"/>
    <rect x="0" y="0" width="5" height="230" fill="var(--rm-thermal-live-wall)"/>
    <rect x="335" y="0" width="5" height="230" fill="var(--rm-thermal-live-wall)"/>
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
          <stop offset="0%" stopColor="var(--rm-thermal-thumb-room-bg-start)"/>
          <stop offset="100%" stopColor="var(--rm-thermal-thumb-room-bg-end)"/>
        </radialGradient>
        <radialGradient id={`tb${variant}`} cx="50%" cy="45%" r="65%">
          <stop offset="0%" stopColor="var(--rm-thermal-thumb-body-start)"/>
          <stop offset="55%" stopColor="var(--rm-thermal-thumb-body-mid)"/>
          <stop offset="100%" stopColor="var(--rm-thermal-thumb-body-end)"/>
        </radialGradient>
        <filter id={`tf${variant}`}><feGaussianBlur stdDeviation="2.5"/></filter>
      </defs>
      <rect width="90" height="72" fill={`url(#tg${variant})`}/>
      <rect x="0" y="46" width="90" height="26" fill="var(--rm-thermal-thumb-floor)"/>
      <rect x="5" y="10" width="36" height="28" rx="3" fill="var(--rm-thermal-thumb-furniture-primary)"/>
      <rect x="58" y="22" width="22" height="28" rx="3" fill="var(--rm-thermal-thumb-furniture-secondary)"/>
      {/* fall blob */}
      <ellipse cx={b.cx} cy={b.cy} rx={b.rx} ry={b.ry}
        fill={`url(#tb${variant})`} filter={`url(#tf${variant})`}
        transform={`rotate(${b.rot} ${b.cx} ${b.cy})`} opacity="0.92"/>
      {/* head */}
      <ellipse cx={b.hx} cy={b.hy} rx="9" ry="9"
        fill="var(--rm-thermal-thumb-head-hot)" filter={`url(#tf${variant})`} opacity="0.85"/>
      {/* walls */}
      <rect x="0" y="0" width="90" height="3" fill="var(--rm-thermal-thumb-wall)"/>
      <rect x="0" y="0" width="3" height="72" fill="var(--rm-thermal-thumb-wall)"/>
      <rect x="87" y="0" width="3" height="72" fill="var(--rm-thermal-thumb-wall)"/>
    </svg>
  );
};

/* ══════════════════════════════════════
   CRITICAL EVENTS (Fall clips list)
══════════════════════════════════════ */

export { ThermalView, ThermalViewLive, ThermalThumb };
