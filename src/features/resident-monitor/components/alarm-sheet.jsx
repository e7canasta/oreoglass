import { IconSittingOnBedLarge } from "./icons.jsx";
import { IconAlertMark, IconArrowRight, IconClose } from "./ui-icons/index.js";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { RM_BUTTON_PRESETS } from "../lib/design-system.js";
import "./alarm-sheet.css";

const AlarmSheet = ({ onClose, onViewLive, onFallReview, secondsAgo }) => (
  <div className="alarm-sheet-root">
    <Drawer open onOpenChange={(open) => !open && onClose()} direction="bottom">
      <DrawerContent
        showHandle={false}
        overlayClassName="alarm-sheet-overlay"
        className="alarm-sheet-panel"
        aria-label="Alarm details"
      >
        <div className="alarm-sheet-handle-wrap">
          <div className="alarm-sheet-handle" />
        </div>

        <header className="alarm-sheet-header">
          <span className="alarm-sheet-room">122.2</span>
          <Button
            type="button"
            {...RM_BUTTON_PRESETS.alarmClose}
            onClick={onClose}
            className="alarm-sheet-close"
          >
            <IconClose />
          </Button>
        </header>

        <div className="alarm-sheet-title-row">
          <div className="alarm-sheet-alert-icon">
            <IconAlertMark />
          </div>
          <span className="alarm-sheet-title">Alarm</span>
        </div>

        <div className="alarm-sheet-event-card">
          <div className="alarm-sheet-event-copy">
            <div className="alarm-sheet-event-title">
              Sitting on<br />bed edge
            </div>
            <div className="alarm-sheet-event-time">{secondsAgo} seconds ago</div>
          </div>
          <div className="alarm-sheet-event-figure">
            <IconSittingOnBedLarge size={76} />
          </div>
        </div>

        <div className="alarm-sheet-actions-grid">
          <Button
            type="button"
            {...RM_BUTTON_PRESETS.alarmPrimary}
            onClick={onClose}
            className="alarm-sheet-action"
          >
            On my<br />way
          </Button>
          <Button
            type="button"
            {...RM_BUTTON_PRESETS.alarmSecondary}
            onClick={onViewLive}
            className="alarm-sheet-action"
          >
            View<br />live
          </Button>
        </div>

        <div className="alarm-sheet-forward-wrap">
          <Button
            type="button"
            {...RM_BUTTON_PRESETS.alarmForward}
            onClick={onFallReview}
            className="alarm-sheet-forward"
          >
            <span>Forward to</span>
            <IconArrowRight />
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  </div>
);

export { AlarmSheet };
