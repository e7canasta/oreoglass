import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { RadioGroup } from "@/components/ui/radio-group";
import {
  LAB_MODERN_DOT_CLASS_BY_COLOR,
  RM_BADGE_PRESETS,
  RM_BUTTON_PRESETS,
} from "../../lib/design-system.js";
import { IconFalling, IconInBed, IconStanding } from "../icons.jsx";
import { IconCheck } from "../ui-icons/index.js";

const MODERN_REVIEW_OPTIONS = [
  {
    id: "fall_with_injury",
    label: "Fall with injury",
    helper: "Immediate intervention needed",
  },
  {
    id: "possible_fall",
    label: "Possible fall",
    helper: "Send clip for human confirmation",
  },
  {
    id: "not_a_fall",
    label: "Not a fall",
    helper: "Archive event and continue monitoring",
  },
];

const MODERN_ROOM_CARDS = [
  {
    number: "513",
    resident: "Bellevue",
    state: "Possible fall",
    tone: "alert",
    dot: "orange",
  },
  {
    number: "223",
    resident: "Bellevue",
    state: "Out of room",
    tone: "neutral",
    dot: "blue",
  },
  {
    number: "405",
    resident: "Alma Way",
    state: "Sleeping",
    tone: "sleep",
    dot: "yellow",
  },
];

const iconByRoomState = {
  alert: <IconFalling size={20} />,
  neutral: <IconStanding size={20} />,
  sleep: <IconInBed size={30} />,
};

const ModernPreview = ({
  activeItemId,
  isSheetOpen,
  onOpenSheet,
  onCloseSheet,
  selectedClassification,
  onSelectClassification,
}) => {
  if (activeItemId === "bottom-sheet") {
    return (
      <div className="lab-preview-canvas lab-modern-canvas">
        {!isSheetOpen && (
          <Button
            type="button"
            {...RM_BUTTON_PRESETS.labOpen}
            className="lab-modern-open-btn"
            onClick={onOpenSheet}
          >
            Open Modern Drawer
          </Button>
        )}

        <Drawer open={isSheetOpen} onOpenChange={(nextOpen) => !nextOpen && onCloseSheet()} direction="bottom">
          <DrawerContent
            showHandle={false}
            overlayClassName="lab-modern-overlay"
            className="lab-modern-drawer"
            aria-label="Modern drawer"
          >
            <div className="lab-modern-drawer-handle" />
            <Badge {...RM_BADGE_PRESETS.warning} className="lab-modern-pill">
              Possible fall
            </Badge>
            <h4>Room 122.2</h4>
            <p>Thermal clip ready to review before forwarding.</p>

            <div className="lab-modern-thermal-clip">
              <span>THERMAL CLIP</span>
            </div>

            <div className="lab-modern-progress-track">
              <div className="lab-modern-progress-fill" />
            </div>

            <div className="lab-modern-drawer-actions">
              <Button
                type="button"
                {...RM_BUTTON_PRESETS.labDrawerSecondary}
                className="lab-modern-drawer-action lab-modern-secondary-btn"
                onClick={onCloseSheet}
              >
                On my way
              </Button>
              <Button
                type="button"
                {...RM_BUTTON_PRESETS.labDrawerPrimary}
                className="lab-modern-drawer-action lab-modern-primary-btn"
                onClick={onCloseSheet}
              >
                View live
              </Button>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    );
  }

  if (activeItemId === "fall-review") {
    return (
      <RadioGroup
        className="lab-modern-radio-group"
        value={selectedClassification}
        onValueChange={onSelectClassification}
      >
        <span className="lab-modern-radio-group-legend">Classification</span>
        {MODERN_REVIEW_OPTIONS.map((option) => {
          return (
            <RadioGroupPrimitive.Item
              key={option.id}
              value={option.id}
              className="lab-modern-radio"
            >
              <span className="lab-modern-radio-copy">
                <strong>{option.label}</strong>
                <small>{option.helper}</small>
              </span>
              <span className="lab-modern-radio-check">
                <RadioGroupPrimitive.Indicator className="lab-modern-radio-indicator">
                  <IconCheck />
                </RadioGroupPrimitive.Indicator>
              </span>
            </RadioGroupPrimitive.Item>
          );
        })}
      </RadioGroup>
    );
  }

  return (
    <div className="lab-modern-room-grid">
      {MODERN_ROOM_CARDS.map((room) => (
        <Button
          key={room.number}
          type="button"
          {...RM_BUTTON_PRESETS.labRoomCard}
          className={`lab-modern-room-card lab-modern-room-card-${room.tone}`}
        >
          <div className="lab-modern-room-header">
            <span className="lab-modern-room-number">{room.number}</span>
            <span className={LAB_MODERN_DOT_CLASS_BY_COLOR[room.dot]} />
          </div>
          <span className="lab-modern-room-resident">{room.resident}</span>
          <span className="lab-modern-room-state">{room.state}</span>
          <span className="lab-modern-room-icon">{iconByRoomState[room.tone]}</span>
        </Button>
      ))}
      <span className="lab-preview-note">
        Modern card centraliza tokens y estados para migrar luego a Tailwind/shadcn oficial.
      </span>
    </div>
  );
};

export { ModernPreview };
