import { AlarmSheetContent, BottomSheetHandle, BottomSheetShell } from "./sheets/index.js";

const AlarmSheet = ({ onClose, onViewLive, onFallReview, secondsAgo }) => (
  <div className="relative z-20">
    <BottomSheetShell
      open
      onClose={onClose}
      overlayClassName="fixed inset-0 [background:var(--alarm-overlay)] backdrop-blur-[14px] saturate-[0.72]"
      className="fixed inset-x-0 bottom-0 rounded-t-[var(--rm-alarm-sheet-radius)] [padding-bottom:var(--rm-alarm-sheet-padding-bottom)] text-[var(--alarm-text)] [background:var(--alarm-bg)] [box-shadow:var(--alarm-panel-shadow)]"
      ariaLabel="Alarm details"
    >
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
