import { AlarmSheetContent, BottomSheetHandle, BottomSheetShell } from "./sheets/index.js";

const AlarmSheet = ({ onClose, onViewLive, onFallReview, secondsAgo }) => (
  <div className="relative z-20">
    <BottomSheetShell
      open
      onClose={onClose}
      overlayClassName="fixed inset-0 [background:var(--alarm-overlay)] [backdrop-filter:blur(16px)_saturate(0.78)]"
      className="fixed inset-x-0 bottom-0 rounded-t-[var(--rm-alarm-sheet-radius)] border [padding-bottom:var(--rm-alarm-sheet-padding-bottom)] text-[var(--alarm-text)] [background:var(--alarm-bg)] [box-shadow:var(--alarm-panel-shadow)] [border-color:var(--alarm-border)] [backdrop-filter:blur(24px)_saturate(1.08)]"
      ariaLabel="Alarm details"
    >
      <div
        aria-hidden
        className="pointer-events-none mx-auto mb-2 h-[2px] w-[calc(100%-32px)] rounded-full [background:var(--alarm-top-line)] [box-shadow:var(--alarm-top-line-shadow)]"
      />
      <BottomSheetHandle
        wrapperClassName="mb-0.5 px-0 pt-[11px]"
        className="[background:var(--alarm-handle-bg)]"
      />
      <AlarmSheetContent
        onClose={onClose}
        onViewLive={onViewLive}
        onFallReview={onFallReview}
        secondsAgo={secondsAgo}
      />
    </BottomSheetShell>
  </div>
);

export { AlarmSheet };
