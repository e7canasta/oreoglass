import { BottomSheetHandle, BottomSheetShell, OverviewActionsContent } from "./sheets/index.js";

const OverviewActionSheet = ({
  open,
  onOpenChange,
  onOpenCriticalEvents,
  onOpenLatestActivity,
  onOpenForward,
  onMuteForTenMinutes,
  hasIncidentContext = false,
  isAlarmMuted = false,
}) => {
  const quickActions = [
    {
      id: "fall",
      label: "Fall clips",
      meta: "6 pending review",
      arrow: true,
      badge: 6,
      tone: "critical",
      onClick: onOpenCriticalEvents,
    },
    {
      id: "mute",
      label: isAlarmMuted ? "Muted 10 minutes" : "Mute 10 minutes",
      meta: isAlarmMuted ? "Sound and vibration paused" : "Pause alarm feedback",
      tone: isAlarmMuted ? "muted" : "neutral",
      onClick: isAlarmMuted ? undefined : onMuteForTenMinutes,
      disabled: isAlarmMuted,
    },
    {
      id: "latest",
      label: "Latest activity",
      meta: "Open recent updates across rooms",
      arrow: true,
      tone: "neutral",
      onClick: onOpenLatestActivity,
    },
    hasIncidentContext
      ? {
          id: "forward",
          label: "Forward to triage",
          meta: "Escalate incident now",
          arrow: true,
          tone: "muted",
          onClick: onOpenForward,
        }
      : {
          id: "forward-idle",
          label: "No active alarm",
          meta: "Forward opens after an incident",
          isBlank: true,
          tone: "blank",
          disabled: true,
        },
  ];

  return (
    <BottomSheetShell
      open={open}
      onOpenChange={onOpenChange}
      overlayClassName="rm-overview-overlay"
      className="rm-sheet-surface fixed inset-x-0 bottom-0 [min-height:var(--rm-overview-sheet-min-height)] rounded-t-[var(--rm-overview-sheet-radius)] border px-4 [padding-bottom:var(--rm-overview-sheet-padding-bottom)] pt-3 [background:var(--rm-overview-sheet-bg)] [box-shadow:var(--rm-overview-sheet-shadow)] [border-color:var(--rm-overview-sheet-border)]"
      ariaLabel="Quick actions"
    >
      <div
        aria-hidden
        className="pointer-events-none mx-auto mb-2 h-[2px] w-[calc(100%-34px)] rounded-full [background:var(--rm-overview-sheet-accent-line)] [box-shadow:var(--rm-overview-sheet-accent-line-shadow)]"
      />
      <BottomSheetHandle
        wrapperClassName="mb-2.5"
        className="[background:var(--rm-overview-handle-bg)]"
      />
      <OverviewActionsContent quickActions={quickActions} />
    </BottomSheetShell>
  );
};

export { OverviewActionSheet };
