import { useEffect, useState } from "react";

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
    <div style={{ width: "100vw", height: "100vh", background: "#0c0e12", overflow: "hidden", fontFamily: "'SF Pro Display',system-ui,-apple-system" }}>
      <style>{`
        html,body,#root{width:100%;height:100%;margin:0}
        @keyframes slideUp{from{transform:translateY(100%);opacity:0}to{transform:translateY(0);opacity:1}}
        @keyframes slideInRight{from{transform:translateX(100%);opacity:0}to{transform:translateX(0);opacity:1}}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.4}}
        ::-webkit-scrollbar{display:none}
        *{-webkit-tap-highlight-color:transparent}
      `}</style>

      <div style={{ width: "100%", height: "100%", background: "#0c0e12", overflow: "hidden", position: "relative", display: "flex", flexDirection: "column" }}>
        {/* <PhoneStatusBar /> */}
        <OverviewHeader />

        <div style={{ flex: 1, overflowY: "auto", padding: "4px 12px", display: "flex", flexDirection: "column", gap: 12, paddingBottom: 160 }}>
          {Object.entries(ROOMS).map(([title, rooms]) => (
            <Section key={title} title={title} rooms={rooms} onSelect={actions.selectRoom} />
          ))}
        </div>

        {!showAlarm && countdown > 0 && !selectedRoom && !screen && (
          <CountdownBar seconds={countdown} total={8} />
        )}

        {!showAlarm && countdown === 0 && !alarmTriggered && (
          <button onClick={actions.showAlarm} style={{ position: "absolute", bottom: 140, left: "50%", transform: "translateX(-50%)", background: "#e8430a", border: "none", borderRadius: 14, padding: "12px 24px", color: "white", fontWeight: "700", fontSize: 15, cursor: "pointer", zIndex: 4 }}>
            Trigger Alarm
          </button>
        )}

        {!selectedRoom && !screen && !showAlarm && (
          <OverviewActionSheet
            onOpenCriticalEvents={actions.openCriticalEvents}
            onOpenLatestActivity={() => actions.selectRoom(ROOMS["Bellevue"][1])}
            onOpenComponentLab={actions.openComponentLab}
          />
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
          style={{
            position: "absolute",
            right: 12,
            top: "calc(72px + env(safe-area-inset-top, 0px))",
            zIndex: 14,
            width: 32,
            height: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background:
              "linear-gradient(155deg, rgba(255,255,255,0.18), rgba(255,255,255,0.03))",
            border: "1px solid rgba(255,255,255,0.14)",
            borderRadius: "50%",
            cursor: isFullscreenSupported ? "pointer" : "not-allowed",
            backdropFilter: "blur(18px) saturate(1.15)",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.22), 0 4px 14px rgba(0,0,0,0.2)",
            opacity: isFullscreenSupported ? 0.58 : 0.38,
            transition: "opacity 120ms ease, transform 120ms ease",
          }}
        >
          {isFullscreen ? <IconFullscreenExit /> : <IconFullscreenEnter />}
        </button>
      </div>
    </div>
  );
}
