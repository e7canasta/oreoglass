import { IconFalling, IconInBed, IconStanding } from "./icons.jsx";
import { ActivityTile, SleepChart } from "./room-detail-widgets.jsx";
import { IconChevronRight, IconClose, IconWideChevronDown } from "./ui-icons/index.js";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import "./room-detail-sheet.css";

const getRoomStatusDotClass = (dotColor) => {
  const normalized = (dotColor || "").toLowerCase();

  if (normalized === "#e8621a" || normalized.includes("critical-orange")) {
    return "room-detail-status-dot is-alert";
  }
  if (normalized === "#f5c842") {
    return "room-detail-status-dot is-warm";
  }
  if (normalized === "#4a90e2") {
    return "room-detail-status-dot is-info";
  }

  return "room-detail-status-dot";
};

const RoomDetailSheet = ({ room, onClose, onOpenFallClip, onOpenSleep }) => (
  <div className="room-detail-root">
    <Drawer open onOpenChange={(open) => !open && onClose()} direction="bottom">
      <DrawerContent
        showHandle={false}
        overlayClassName="room-detail-overlay"
        className="room-detail-panel"
        aria-label={`Room ${room.number} details`}
      >
        <div className="room-detail-handle-wrap">
          <div className="room-detail-handle" />
        </div>

        <header className="room-detail-header">
          <div className="room-detail-title-wrap">
            <div className={getRoomStatusDotClass(room.dotColor)} />
            <div className="room-detail-heading">
              <div className="room-detail-room-number">{room.number}</div>
              <div className="room-detail-room-location">{room.location}</div>
            </div>
          </div>

          <button type="button" onClick={onClose} className="room-detail-close-button" aria-label="Close room details">
            <IconClose strokeWidth={2.2} />
          </button>
        </header>

        <div className="room-detail-section">
          <div className="room-detail-section-header">
            <div className="room-detail-section-title-wrap">
              <IconStanding size={22} />
              <span className="room-detail-section-title">Activity</span>
            </div>
            <span className="room-detail-section-meta">last 12 hours</span>
          </div>

          <div className="room-detail-activity-card">
            <div className="room-detail-activity-row">
              <ActivityTile time="08:12" icon={<IconInBed size={38} />} />
              <ActivityTile time="09:04" icon={<IconStanding size={24} />} />
              <ActivityTile time="10:52" icon={<IconFalling size={24} />} isAlarm onClick={onOpenFallClip} />
              <ActivityTile time="10:52" icon={<IconInBed size={38} />} isCurrent duration="3h 33m" />
            </div>
            <div className="room-detail-activity-hint">
              <IconWideChevronDown />
            </div>
          </div>
        </div>

        <div className="room-detail-section room-detail-section-last">
          <button type="button" onClick={onOpenSleep} className="room-detail-sleep-trigger">
            <div className="room-detail-section-header">
              <div className="room-detail-section-title-wrap">
                <span className="room-detail-sleep-glyph">z<sup>z</sup></span>
                <span className="room-detail-section-title">Sleep</span>
              </div>
              <div className="room-detail-sleep-meta-wrap">
                <span className="room-detail-section-meta">Last 24 hours</span>
                <IconChevronRight />
              </div>
            </div>
            <SleepChart />
          </button>
        </div>
      </DrawerContent>
    </Drawer>
  </div>
);

export { RoomDetailSheet };
