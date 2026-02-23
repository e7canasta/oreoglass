import { AlarmSheetContent, BottomSheetHandle, BottomSheetShell } from "./sheets/index.js";

const AlarmSheet = ({ onClose, onViewLive, onFallReview, secondsAgo }) => (
  <div className="relative z-20">
    <BottomSheetShell
      open
      onClose={onClose}
      overlayClassName="rm-sheet-overlay rm-alarm-overlay"
      className="rm-sheet-surface fixed inset-x-0 bottom-0 rounded-t-[var(--rm-alarm-sheet-radius)] border [padding-bottom:var(--rm-alarm-sheet-padding-bottom)] text-[var(--alarm-text)] [background:var(--alarm-bg)] [box-shadow:var(--alarm-panel-shadow)] [border-color:var(--alarm-border)]"
      ariaLabel="Alarm details"
    >
      <div
        aria-hidden
        className="pointer-events-none mx-auto mb-2 h-[2px] w-[calc(100%-34px)] rounded-full [background:var(--alarm-top-line)] [box-shadow:var(--alarm-top-line-shadow)]"
      />
      <BottomSheetHandle
        wrapperClassName="mb-2.5"
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
