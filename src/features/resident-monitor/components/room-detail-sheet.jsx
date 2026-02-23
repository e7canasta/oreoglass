import { BottomSheetHandle, BottomSheetShell, RoomDetailSheetContent } from "./sheets/index.js";

const RoomDetailSheet = ({ room, onClose, onOpenSleep, onOpenBedActivity }) => (
  <div className="relative z-10">
    <BottomSheetShell
      open
      onClose={onClose}
      overlayClassName="fixed inset-0 cursor-pointer [background:var(--rm-room-detail-overlay)]"
      className="fixed inset-x-0 bottom-0 max-h-[min(91%,780px)] overflow-y-auto rounded-t-[var(--rm-room-detail-sheet-radius)] [padding-bottom:var(--rm-room-detail-sheet-padding-bottom)] [background:var(--rm-room-detail-panel-bg)] [box-shadow:var(--rm-room-detail-panel-shadow)]"
      ariaLabel={`Room ${room.number} details`}
    >
      <BottomSheetHandle
        wrapperClassName="px-0 pb-1 pt-2.5"
        className="[background:var(--rm-room-detail-handle)]"
      />
      <RoomDetailSheetContent
        room={room}
        onClose={onClose}
        onOpenSleep={onOpenSleep}
        onOpenBedActivity={onOpenBedActivity}
      />
    </BottomSheetShell>
  </div>
);

export { RoomDetailSheet };
