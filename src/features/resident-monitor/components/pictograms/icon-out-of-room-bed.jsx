const IconOutOfRoomBed = ({
  size = 74,
  bed = "var(--rm-overview-room-out-icon)",
  frame = "var(--rm-overview-room-out-accent)",
  chair = "var(--rm-overview-room-out-chair)",
  chairSeat = "var(--rm-overview-room-out-chair-seat)",
  className,
}) => (
  <svg className={className} width={size} height={size * 0.65} viewBox="0 0 74 48" fill="none">
    <rect x="7" y="29" width="58" height="11" rx="3" fill={frame} opacity="0.86" />
    <rect x="7" y="21" width="6" height="19" rx="2" fill={frame} opacity="0.92" />
    <rect x="15" y="21" width="17" height="8" rx="3" fill={bed} opacity="0.55" />
    <rect x="15" y="25" width="49" height="6" rx="3" fill={bed} opacity="0.84" />

    <rect x="52" y="12" width="14" height="9" rx="2.5" fill={chair} />
    <rect x="52" y="20" width="14" height="4" rx="1.5" fill={chairSeat} />
    <rect x="54" y="22" width="3" height="14" rx="1.5" fill={chair} opacity="0.9" />
    <rect x="61" y="22" width="3" height="14" rx="1.5" fill={chair} opacity="0.9" />
  </svg>
);

export { IconOutOfRoomBed };
