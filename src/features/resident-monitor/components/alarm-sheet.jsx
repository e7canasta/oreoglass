import { IconSittingOnBedLarge } from "./icons.jsx";
import { IconAlertMark, IconArrowRight, IconClose } from "./ui-icons/index.js";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { RM_BUTTON_PRESETS } from "../lib/design-system.js";

const AlarmSheet = ({ onClose, onViewLive, onFallReview, secondsAgo }) => (
  <div className="relative z-20">
    <Drawer open onOpenChange={(open) => !open && onClose()} direction="bottom">
      <DrawerContent
        showHandle={false}
        overlayClassName="fixed inset-0 z-[49] [background:var(--alarm-overlay)] backdrop-blur-[14px] saturate-[0.72]"
        className="fixed inset-x-0 bottom-0 z-50 rounded-t-[24px] pb-[calc(26px+env(safe-area-inset-bottom,0px))] text-[var(--alarm-text)] [background:var(--alarm-bg)] [box-shadow:var(--alarm-panel-shadow)]"
        aria-label="Alarm details"
      >
        <div className="mb-0.5 flex justify-center pt-[11px]">
          <div className="h-1 w-[38px] rounded-[2px] [background:var(--alarm-handle-bg)]" />
        </div>

        <header className="flex items-center justify-between gap-3 px-5 pb-1.5 pt-2.5">
          <span className="text-[length:var(--rm-fs-display)] font-extrabold leading-none tracking-[-0.8px] text-[var(--alarm-text)]">
            122.2
          </span>
          <Button
            type="button"
            {...RM_BUTTON_PRESETS.alarmClose}
            onClick={onClose}
            className="shrink-0 focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--alarm-focus-outline)]"
          >
            <IconClose />
          </Button>
        </header>

        <div className="flex items-center gap-[9px] px-5 pb-3.5 pt-1">
          <div className="flex size-[26px] shrink-0 items-center justify-center rounded-full [background:var(--alarm-alert-icon-bg)]">
            <IconAlertMark color="var(--alarm-accent)" />
          </div>
          <span className="text-[length:var(--rm-fs-body-strong)] font-bold text-[var(--alarm-text)]">
            Alarm
          </span>
        </div>

        <div className="mx-[14px] mb-3.5 flex items-start justify-between rounded-[20px] border-[1.5px] px-4 pb-4 pt-4 [background:var(--alarm-card-bg)] [border-color:var(--alarm-card-border)]">
          <div className="flex-1">
            <div className="text-[length:var(--rm-fs-hero)] font-extrabold leading-[1.18] tracking-[-0.5px] text-[var(--alarm-text)]">
              Sitting on
              <br />
              bed edge
            </div>
            <div className="mt-2 text-[length:var(--rm-fs-meta)] font-medium text-[var(--alarm-muted)]">
              {secondsAgo} seconds ago
            </div>
          </div>
          <div className="ml-2 mt-0.5 shrink-0">
            <IconSittingOnBedLarge size={76} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5 px-[14px]">
          <Button
            type="button"
            {...RM_BUTTON_PRESETS.alarmPrimary}
            onClick={onClose}
            className="min-h-14 rounded-[18px] px-2.5 py-3.5 text-center text-[length:var(--rm-fs-body-strong)] leading-[1.25] font-bold focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--alarm-focus-outline)] active:scale-[0.99]"
          >
            On my
            <br />
            way
          </Button>
          <Button
            type="button"
            {...RM_BUTTON_PRESETS.alarmSecondary}
            onClick={onViewLive}
            className="min-h-14 rounded-[18px] px-2.5 py-3.5 text-center text-[length:var(--rm-fs-body-strong)] leading-[1.25] font-bold focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--alarm-focus-outline)] active:scale-[0.99]"
          >
            View
            <br />
            live
          </Button>
        </div>

        <div className="px-[14px] pt-2.5">
          <Button
            type="button"
            {...RM_BUTTON_PRESETS.alarmForward}
            onClick={onFallReview}
            className="flex min-h-14 w-full items-center justify-between rounded-[18px] px-[18px] py-[13px] text-[length:var(--rm-fs-body-strong)] font-bold focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--alarm-focus-outline)] active:scale-[0.99]"
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
