import { useEffect, useMemo, useState } from "react";
import "./themes/app-themes.css";

import { AlarmSheet } from "./components/alarm-sheet.jsx";
import { OverviewHeader } from "./components/app-chrome.jsx";
import { OverviewActionSheet } from "./components/overview-action-sheet.jsx";
import { CountdownBar, Section } from "./components/room-overview.jsx";
import { RoomDetailSheet } from "./components/room-detail-sheet.jsx";
import { ThemeDraftPanel } from "./components/theme-draft-panel.jsx";
import {
  IconFullscreenEnter,
  IconFullscreenExit,
} from "./components/ui-icons/index.js";
import { ROOMS } from "./data/constants.js";
import { loadThemeDraft, normalizeThemeDraft, saveThemeDraft } from "./lib/theme-draft.js";
import { ScreenRouter } from "./navigation/screen-router.jsx";
import { useResidentMonitorState } from "./state/use-resident-monitor-state.js";

export default function App() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isFullscreenSupported, setIsFullscreenSupported] = useState(true);
  const [isOverviewSheetOpen, setIsOverviewSheetOpen] = useState(true);
  const [isThemePanelOpen, setIsThemePanelOpen] = useState(false);
  const [themeDraft, setThemeDraft] = useState(() => loadThemeDraft());
  const { state, actions } = useResidentMonitorState();
  const {
    selectedRoom,
    screen,
    showAlarm,
    countdown,
    secondsAgo,
    alarmTriggered,
  } = state;
  const activeThemeDraft = useMemo(() => normalizeThemeDraft(themeDraft), [themeDraft]);

  useEffect(() => {
    const syncFullscreenState = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
      setIsFullscreenSupported(Boolean(document.fullscreenEnabled));
    };

    syncFullscreenState();
    document.addEventListener("fullscreenchange", syncFullscreenState);
    return () => document.removeEventListener("fullscreenchange", syncFullscreenState);
  }, []);

  useEffect(() => {
    const tryEnterFullscreenOnLoad = async () => {
      if (!document.fullscreenEnabled || document.fullscreenElement) {
        return;
      }

      try {
        await document.documentElement.requestFullscreen();
      } catch {
        // Most browsers require a user gesture; keep floating button as fallback.
      }
    };

    void tryEnterFullscreenOnLoad();
  }, []);

  useEffect(() => {
    saveThemeDraft(activeThemeDraft);
  }, [activeThemeDraft]);

  useEffect(() => {
    const rootElement = document.documentElement;
    rootElement.classList.toggle("dark", activeThemeDraft.mode === "dark");
  }, [activeThemeDraft.mode]);

  useEffect(() => {
    if (!selectedRoom && !screen && !showAlarm) {
      setIsOverviewSheetOpen(true);
    }
  }, [selectedRoom, screen, showAlarm]);

  const toggleFullscreen = async () => {
    if (!document.fullscreenEnabled) {
      return;
    }

    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }

    await document.documentElement.requestFullscreen();
  };

  const handleThemePresetChange = (nextPreset) => {
    setThemeDraft((prev) => normalizeThemeDraft({ ...prev, preset: nextPreset }));
  };

  const handleThemeModeChange = (nextMode) => {
    setThemeDraft((prev) => normalizeThemeDraft({ ...prev, mode: nextMode }));
  };

  return (
    <div
      className="monitor-app-root h-screen w-screen overflow-hidden [background:var(--rm-root-bg)] [font-family:'SF_Pro_Display',system-ui,-apple-system,sans-serif]"
      data-theme-preset={activeThemeDraft.preset}
      data-theme-mode={activeThemeDraft.mode}
    >
      <div className="relative flex h-full w-full flex-col overflow-hidden [background:var(--rm-shell-bg)] [background-image:var(--rm-content-bg)]">
        {/* <PhoneStatusBar /> */}
        <OverviewHeader />

        <div className="flex flex-1 flex-col gap-3 overflow-y-auto px-3 pb-[214px] pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden max-[720px]:pb-[188px]">
          {Object.entries(ROOMS).map(([title, rooms]) => (
            <Section key={title} title={title} rooms={rooms} onSelect={actions.selectRoom} />
          ))}
        </div>

        {!showAlarm && countdown > 0 && !selectedRoom && !screen && (
          <CountdownBar seconds={countdown} total={8} />
        )}

        {!showAlarm && countdown === 0 && !alarmTriggered && (
          <button
            type="button"
            onClick={actions.showAlarm}
            className="absolute left-1/2 [z-index:var(--rm-z-trigger-alarm)] min-h-[var(--rm-hit-min)] -translate-x-1/2 rounded-[14px] border-0 px-6 py-3 text-[length:var(--rm-fs-body)] font-bold [background:var(--rm-trigger-alarm-bg)] [color:var(--rm-trigger-alarm-text)] [box-shadow:var(--rm-trigger-alarm-shadow)] [bottom:var(--rm-trigger-alarm-bottom)] max-[720px]:[bottom:var(--rm-trigger-alarm-bottom-mobile)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-trigger-alarm-focus)]"
          >
            Trigger Alarm
          </button>
        )}

        {!selectedRoom && !screen && !showAlarm && (
          <OverviewActionSheet
            open={isOverviewSheetOpen}
            onOpenChange={setIsOverviewSheetOpen}
            onOpenCriticalEvents={actions.openCriticalEvents}
            onOpenLatestActivity={() => actions.selectRoom(ROOMS["Bellevue"][1])}
            onOpenComponentLab={actions.openComponentLab}
          />
        )}

        {!selectedRoom && !screen && !showAlarm && !isOverviewSheetOpen && (
          <button
            type="button"
            onClick={() => setIsOverviewSheetOpen(true)}
            className="absolute [bottom:var(--rm-open-actions-bottom)] left-1/2 [z-index:var(--rm-z-open-actions)] min-h-[var(--rm-hit-min)] -translate-x-1/2 rounded-full border px-[18px] py-2.5 text-[length:var(--rm-fs-meta)] font-bold [background:var(--rm-open-actions-bg)] [border-color:var(--rm-open-actions-border)] text-[var(--rm-open-actions-text)] [box-shadow:var(--rm-open-actions-shadow)] backdrop-blur-[12px] transition-transform active:scale-[0.988] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-open-actions-focus)]"
          >
            Quick actions
          </button>
        )}

        {selectedRoom && !screen && !showAlarm && (
          <RoomDetailSheet
            room={selectedRoom}
            onClose={actions.closeRoom}
            onOpenFallClip={actions.openFallClip}
            onOpenSleep={actions.openSleepDetail}
          />
        )}

        <ScreenRouter
          screen={screen}
          onBack={actions.closeScreen}
          onCloseLive={actions.closeLiveView}
          onOpenClipFromCriticalEvents={actions.openFallReview}
        />

        {showAlarm && !screen && (
          <AlarmSheet
            secondsAgo={secondsAgo}
            onClose={actions.hideAlarm}
            onViewLive={actions.openLiveFromAlarm}
            onFallReview={actions.openFallReviewFromAlarm}
          />
        )}

        <ThemeDraftPanel
          isOpen={isThemePanelOpen}
          onToggle={setIsThemePanelOpen}
          preset={activeThemeDraft.preset}
          mode={activeThemeDraft.mode}
          onSelectPreset={handleThemePresetChange}
          onSelectMode={handleThemeModeChange}
        />

        <button
          onClick={toggleFullscreen}
          disabled={!isFullscreenSupported}
          title={isFullscreen ? "Salir de pantalla completa" : "Entrar en pantalla completa"}
          aria-label={isFullscreen ? "Salir de pantalla completa" : "Entrar en pantalla completa"}
          className="absolute right-3 [top:var(--rm-fullscreen-top)] [z-index:var(--rm-z-floating-controls)] flex size-8 items-center justify-center rounded-full border [background:var(--rm-fullscreen-bg)] [border-color:var(--rm-fullscreen-border)] [box-shadow:var(--rm-fullscreen-shadow)] [backdrop-filter:blur(18px)_saturate(1.15)] opacity-[0.58] transition-all hover:opacity-[0.78] active:scale-95 focus-visible:opacity-[0.85] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-fullscreen-focus)] disabled:cursor-not-allowed disabled:opacity-[0.38]"
        >
          {isFullscreen ? (
            <IconFullscreenExit stroke="var(--rm-fullscreen-icon)" />
          ) : (
            <IconFullscreenEnter stroke="var(--rm-fullscreen-icon)" />
          )}
        </button>
      </div>
    </div>
  );
}
