import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RadioGroup } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import {
  RM_BADGE_PRESETS,
  RM_BUTTON_PRESETS,
} from "../../lib/design-system.js";
import { IconFalling, IconInBed, IconStanding } from "../icons.jsx";
import { BottomSheetHandle, BottomSheetShell } from "../sheets/index.js";
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

const modernRoomToneClassByTone = Object.freeze({
  alert: "[border-color:var(--lab-modern-room-alert-border)] [background:var(--lab-modern-room-alert-bg)]",
  neutral: "[border-color:var(--lab-modern-room-neutral-border)]",
  sleep: "[border-color:var(--lab-modern-room-sleep-border)] [background:var(--lab-modern-room-sleep-bg)]",
});

const modernDotClassByColor = Object.freeze({
  orange: "[width:var(--lab-modern-dot-size)] [height:var(--lab-modern-dot-size)] rounded-full [background:var(--lab-modern-dot-orange)] [box-shadow:0_0_6px_var(--lab-modern-dot-orange-shadow)]",
  blue: "[width:var(--lab-modern-dot-size)] [height:var(--lab-modern-dot-size)] rounded-full [background:var(--lab-modern-dot-blue)] [box-shadow:0_0_6px_var(--lab-modern-dot-blue-shadow)]",
  yellow: "[width:var(--lab-modern-dot-size)] [height:var(--lab-modern-dot-size)] rounded-full [background:var(--lab-modern-dot-yellow)] [box-shadow:0_0_6px_var(--lab-modern-dot-yellow-shadow)]",
});

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
      <div className="relative flex [height:var(--lab-preview-canvas-height)] items-center justify-center [background:var(--lab-modern-canvas-bg)]">
        {!isSheetOpen && (
          <Button
            type="button"
            {...RM_BUTTON_PRESETS.labOpen}
            className="h-auto rounded-[var(--lab-modern-open-radius)] border-0 [padding-left:var(--lab-modern-open-padding-x)] [padding-right:var(--lab-modern-open-padding-x)] [padding-top:var(--lab-modern-open-padding-y)] [padding-bottom:var(--lab-modern-open-padding-y)] text-[length:var(--lab-modern-open-font-size)] font-bold [background:var(--lab-modern-open-bg)] [color:var(--lab-modern-open-text)] [box-shadow:var(--lab-modern-open-shadow)]"
            onClick={onOpenSheet}
          >
            Open Modern Drawer
          </Button>
        )}

        <BottomSheetShell
          open={isSheetOpen}
          onOpenChange={(nextOpen) => !nextOpen && onCloseSheet()}
          overlayClassName="[background:var(--lab-modern-overlay-bg)] [backdrop-filter:blur(2px)]"
          className="w-full rounded-t-[var(--lab-modern-drawer-radius)] border-x border-t border-b-0 [border-color:var(--lab-modern-drawer-border)] [background:var(--lab-modern-drawer-bg)] [padding-left:var(--lab-modern-drawer-padding-x)] [padding-right:var(--lab-modern-drawer-padding-x)] [padding-bottom:var(--lab-modern-drawer-padding-bottom)] [padding-top:var(--lab-modern-drawer-padding-top)] [color:var(--lab-modern-drawer-text)]"
          ariaLabel="Modern drawer"
        >
          <BottomSheetHandle
            wrapperClassName="mb-2.5"
            className="[height:var(--lab-modern-drawer-handle-height)] [width:var(--lab-modern-drawer-handle-width)] rounded-full [background:var(--lab-modern-drawer-handle)]"
          />
          <Badge
            {...RM_BADGE_PRESETS.warning}
            className="inline-flex rounded-[99px] border px-2 py-1 text-[length:var(--lab-modern-pill-font-size)] font-bold [background:var(--lab-modern-pill-bg)] [border-color:var(--lab-modern-pill-border)] [color:var(--lab-modern-pill-text)] shadow-none"
          >
            Possible fall
          </Badge>
          <h4 className="mb-1 mt-2 text-[length:var(--lab-modern-title-size)] font-semibold">Room 122.2</h4>
          <p className="m-0 text-[length:var(--lab-modern-body-size)] [color:var(--lab-modern-muted)]">Thermal clip ready to review before forwarding.</p>

          <div className="mt-2.5 flex [height:var(--lab-modern-thermal-height)] items-center justify-center rounded-[var(--lab-modern-thermal-radius)] border [border-color:var(--lab-modern-thermal-border)] [background:var(--lab-modern-thermal-bg)]">
            <span className="text-[length:var(--lab-modern-thermal-label-size)] font-bold tracking-[0.7px] [color:var(--lab-modern-thermal-label)]">
              THERMAL CLIP
            </span>
          </div>

          <div className="mt-2.5 w-full overflow-hidden rounded-[99px] [height:var(--lab-modern-progress-height)] [background:var(--lab-modern-progress-track)]">
            <div className="h-full w-[46%] [background:var(--lab-modern-progress-fill)]" />
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2">
            <Button
              type="button"
              {...RM_BUTTON_PRESETS.labDrawerSecondary}
              className="[min-height:var(--lab-modern-action-min-height)] rounded-[var(--lab-modern-action-radius)] border-transparent px-2.5 py-2.5 text-[length:var(--lab-modern-action-font-size)] font-bold [background:var(--lab-modern-secondary-bg)] [color:var(--lab-modern-secondary-text)]"
              onClick={onCloseSheet}
            >
              On my way
            </Button>
            <Button
              type="button"
              {...RM_BUTTON_PRESETS.labDrawerPrimary}
              className="[min-height:var(--lab-modern-action-min-height)] rounded-[var(--lab-modern-action-radius)] border-transparent px-2.5 py-2.5 text-[length:var(--lab-modern-action-font-size)] font-bold [background:var(--lab-modern-primary-bg)] [color:var(--lab-modern-primary-text)]"
              onClick={onCloseSheet}
            >
              View live
            </Button>
          </div>
        </BottomSheetShell>
      </div>
    );
  }

  if (activeItemId === "fall-review") {
    return (
      <RadioGroup
        className="grid [gap:var(--lab-modern-review-gap)] [padding:var(--lab-modern-review-padding)]"
        value={selectedClassification}
        onValueChange={onSelectClassification}
      >
        <span className="text-xs [color:var(--lab-pane-copy)]">Classification</span>
        {MODERN_REVIEW_OPTIONS.map((option) => {
          return (
            <RadioGroupPrimitive.Item
              key={option.id}
              value={option.id}
              className={cn(
                "group flex w-full cursor-pointer items-center gap-2.5 rounded-xl border p-2.5 text-left outline-none",
                "[border-color:var(--lab-modern-radio-border)] [background:var(--lab-modern-radio-bg)]",
                "data-[state=checked]:[border-color:var(--lab-modern-radio-selected-border)] data-[state=checked]:[background:var(--lab-modern-radio-selected-bg)]",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--lab-modern-radio-selected-border)]"
              )}
            >
              <span className="grid gap-0.5">
                <strong className="text-[length:var(--lab-modern-radio-title-size)] [color:var(--lab-modern-radio-strong)]">{option.label}</strong>
                <small className="text-[length:var(--lab-modern-radio-copy-size)] [color:var(--lab-modern-radio-copy)]">{option.helper}</small>
              </span>
              <span className="ml-auto flex items-center justify-center rounded-full border [width:var(--lab-modern-check-size)] [height:var(--lab-modern-check-size)] [background:var(--lab-modern-check-bg)] [border-color:var(--lab-modern-check-border)] opacity-0 scale-90 transition-all group-data-[state=checked]:scale-100 group-data-[state=checked]:opacity-100">
                <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
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
    <div className="grid grid-cols-3 [gap:var(--lab-modern-review-gap)] [padding:var(--lab-modern-review-padding)]">
      {MODERN_ROOM_CARDS.map((room) => (
        <Button
          key={room.number}
          type="button"
          {...RM_BUTTON_PRESETS.labRoomCard}
          className={cn(
            "grid items-start [row-gap:var(--lab-modern-room-gap)] rounded-[var(--lab-modern-room-radius)] border p-2.5 text-left [border-color:var(--lab-modern-room-border)] [background:var(--lab-modern-room-bg)] [color:var(--lab-modern-room-text)]",
            modernRoomToneClassByTone[room.tone]
          )}
        >
          <div className="flex items-center justify-between">
            <span className="text-[length:var(--lab-modern-room-number-size)] font-bold [color:var(--lab-modern-room-number)]">{room.number}</span>
            <span className={modernDotClassByColor[room.dot]} />
          </div>
          <span className="text-[length:var(--lab-modern-room-meta-size)] [color:var(--lab-modern-room-resident)]">{room.resident}</span>
          <span className="text-[length:var(--lab-modern-room-state-size)] font-semibold [color:var(--lab-modern-room-state)]">{room.state}</span>
          <span className="flex justify-end">{iconByRoomState[room.tone]}</span>
        </Button>
      ))}
      <span className="col-span-3 text-[length:var(--lab-preview-note-size)] [line-height:var(--lab-preview-note-line-height)] [color:var(--lab-preview-note)]">
        Modern card centraliza tokens y estados para migrar luego a Tailwind/shadcn oficial.
      </span>
    </div>
  );
};

export { ModernPreview };
