import { BottomSheetHandle, BottomSheetShell, OverviewActionsContent } from "./sheets/index.js";

const OverviewActionSheet = ({
  open,
  onOpenChange,
  onOpenCriticalEvents,
  onOpenLatestActivity,
  onOpenComponentLab,
}) => {
  const quickActions = [
    { id: "fall", label: "Fall clips", arrow: true, badge: 6, tone: "critical", onClick: onOpenCriticalEvents },
    { id: "mute", label: "Mute for\n10 minutes", tone: "neutral" },
    { id: "latest", label: "Latest\nActivity", arrow: true, tone: "neutral", onClick: onOpenLatestActivity },
    onOpenComponentLab
      ? { id: "lab", label: "Component\nLab", arrow: true, tone: "muted", onClick: onOpenComponentLab }
      : { id: "soon", label: "Coming\nsoon", isBlank: true, tone: "blank" },
  ];

  return (
    <BottomSheetShell
      open={open}
      onOpenChange={onOpenChange}
      overlayClassName="[background:var(--rm-overview-sheet-overlay)]"
      className="fixed inset-x-0 bottom-0 [min-height:var(--rm-overview-sheet-min-height)] rounded-t-[var(--rm-overview-sheet-radius)] border px-4 [padding-bottom:var(--rm-overview-sheet-padding-bottom)] pt-3 [background:var(--rm-overview-sheet-bg)] [box-shadow:var(--rm-overview-sheet-shadow)] [border-color:var(--rm-overview-sheet-border)] backdrop-blur-[20px]"
      ariaLabel="Quick actions"
    >
      <BottomSheetHandle
        wrapperClassName="mb-3"
        className="[background:var(--rm-overview-handle-bg)]"
      />
      <OverviewActionsContent quickActions={quickActions} />
    </BottomSheetShell>
  );
};

export { OverviewActionSheet };
