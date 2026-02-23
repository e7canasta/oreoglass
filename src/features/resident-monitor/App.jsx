import { useEffect, useState } from "react";
import "./app-shell.css";

import { AlarmSheet } from "./components/alarm-sheet.jsx";
import { OverviewHeader } from "./components/app-chrome.jsx";
import { OverviewActionSheet } from "./components/overview-action-sheet.jsx";
import { CountdownBar, Section } from "./components/room-overview.jsx";
import { RoomDetailSheet } from "./components/room-detail-sheet.jsx";
import {
  IconFullscreenEnter,
  IconFullscreenExit,
} from "./components/ui-icons/index.js";
import { ROOMS } from "./data/constants.js";
import { ScreenRouter } from "./navigation/screen-router.jsx";
import { useResidentMonitorState } from "./state/use-resident-monitor-state.js";

export default function App() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isFullscreenSupported, setIsFullscreenSupported] = useState(true);
  const [isOverviewSheetOpen, setIsOverviewSheetOpen] = useState(true);
  const { state, actions } = useResidentMonitorState();
  const {
    selectedRoom,
    screen,
    showAlarm,
    countdown,
    secondsAgo,
    alarmTriggered,
  } = state;

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

  return (
    <div className="monitor-app-root">
      <div className="monitor-app-shell">
        {/* <PhoneStatusBar /> */}
        <OverviewHeader />

        <div className="monitor-app-content">
          {Object.entries(ROOMS).map(([title, rooms]) => (
            <Section key={title} title={title} rooms={rooms} onSelect={actions.selectRoom} />
          ))}
        </div>

        {!showAlarm && countdown > 0 && !selectedRoom && !screen && (
          <CountdownBar seconds={countdown} total={8} />
        )}

        {!showAlarm && countdown === 0 && !alarmTriggered && (
          <button type="button" onClick={actions.showAlarm} className="monitor-app-trigger-alarm-btn">
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
            className="monitor-app-open-actions-btn"
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

        <button
          onClick={toggleFullscreen}
          disabled={!isFullscreenSupported}
          title={isFullscreen ? "Salir de pantalla completa" : "Entrar en pantalla completa"}
          aria-label={isFullscreen ? "Salir de pantalla completa" : "Entrar en pantalla completa"}
          className={`monitor-app-fullscreen-btn${isFullscreenSupported ? "" : " is-disabled"}`}
        >
          {isFullscreen ? <IconFullscreenExit /> : <IconFullscreenEnter />}
        </button>
      </div>
    </div>
  );
}
