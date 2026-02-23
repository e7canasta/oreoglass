import "./pictograms.css";

const IconPersonGreen = ({ size = 26 }) => (
  <div className="monitor-icon-person-green" style={{ "--icon-size": `${size}px` }}>
    <svg width={size * 0.6} height={size * 0.7} viewBox="0 0 14 16" fill="none">
      <circle cx="7" cy="4" r="3" fill="white" />
      <path d="M2 15c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  </div>
);

export { IconPersonGreen };
