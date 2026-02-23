import { useEffect, useMemo, useRef, useState } from "react";
import "./themes/app-themes.css";

import { AlarmSheet } from "./components/alarm-sheet.jsx";
import { OverviewHeader } from "./components/app-chrome.jsx";
import { OverviewActivityToast } from "./components/overview-activity-toast.jsx";
import { OverviewActionSheet } from "./components/overview-action-sheet.jsx";
import { CountdownBar, Section } from "./components/room-overview.jsx";
import { RoomDetailSheet } from "./components/room-detail-sheet.jsx";
import { ThemeDraftPanel } from "./components/theme-draft-panel.jsx";
import {
  IconFullscreenEnter,
  IconFullscreenExit,
} from "./components/ui-icons/index.js";
import { CLIPS, ROOMS } from "./data/constants.js";
import { createAlarmAudioController, getAlarmFeedbackProfile } from "./lib/alarm-feedback.js";
import { loadThemeDraft, normalizeThemeDraft, saveThemeDraft } from "./lib/theme-draft.js";
import { ScreenRouter } from "./navigation/screen-router.jsx";
import { useResidentMonitorState } from "./state/use-resident-monitor-state.js";

export default function App() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isFullscreenSupported, setIsFullscreenSupported] = useState(true);
  const [isOverviewSheetOpen, setIsOverviewSheetOpen] = useState(true);
  const [isThemePanelOpen, setIsThemePanelOpen] = useState(false);
  const [isAlarmMuted, setIsAlarmMuted] = useState(false);
  const muteTimeoutRef = useRef(null);
  const secondsAgoRef = useRef(0);
  const alarmAudioRef = useRef(null);
  const [themeDraft, setThemeDraft] = useState(() => loadThemeDraft());
  const { state, actions } = useResidentMonitorState();
  const {
    selectedRoom,
    selectedClip,
    bedActivityAnchorEventId,
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

  useEffect(() => {
    secondsAgoRef.current = secondsAgo;
  }, [secondsAgo]);

  useEffect(
    () => () => {
      if (muteTimeoutRef.current) {
        window.clearTimeout(muteTimeoutRef.current);
      }
    },
    []
  );

  useEffect(() => {
    const alarmAudio = createAlarmAudioController();
    alarmAudioRef.current = alarmAudio;

    if (!alarmAudio) {
      return undefined;
    }

    const unlockAudio = () => {
      void alarmAudio.resume();
    };

    window.addEventListener("pointerdown", unlockAudio, { passive: true });
    window.addEventListener("keydown", unlockAudio);

    return () => {
      window.removeEventListener("pointerdown", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
      alarmAudioRef.current = null;
      void alarmAudio.dispose();
    };
  }, []);

  useEffect(() => {
    if (
      !showAlarm ||
      isAlarmMuted ||
      typeof navigator === "undefined" ||
      typeof navigator.vibrate !== "function"
    ) {
      return undefined;
    }

    let isStopped = false;
    let vibrationTimer;
    const emitPulse = () => {
      if (isStopped) {
        return;
      }

      const profile = getAlarmFeedbackProfile(secondsAgoRef.current);
      navigator.vibrate(profile.vibrationPattern);
      vibrationTimer = window.setTimeout(emitPulse, profile.intervalMs);
    };

    emitPulse();

    return () => {
      isStopped = true;
      window.clearTimeout(vibrationTimer);
      navigator.vibrate(0);
    };
  }, [showAlarm, isAlarmMuted]);

  useEffect(() => {
    if (!showAlarm || isAlarmMuted) {
      return undefined;
    }

    const alarmAudio = alarmAudioRef.current;
    if (!alarmAudio) {
      return undefined;
    }

    let isStopped = false;
    let audioTimer;
    const emitAudioPulse = async () => {
      if (isStopped) {
        return;
      }

      const profile = getAlarmFeedbackProfile(secondsAgoRef.current);
      await alarmAudio.playBurst(profile);
      audioTimer = window.setTimeout(() => {
        void emitAudioPulse();
      }, profile.intervalMs);
    };

    void emitAudioPulse();

    return () => {
      isStopped = true;
      window.clearTimeout(audioTimer);
    };
  }, [showAlarm, isAlarmMuted]);

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

  const handleMuteForTenMinutes = () => {
    setIsAlarmMuted(true);
    if (muteTimeoutRef.current) {
      window.clearTimeout(muteTimeoutRef.current);
    }
    muteTimeoutRef.current = window.setTimeout(() => {
      setIsAlarmMuted(false);
      muteTimeoutRef.current = null;
    }, 10 * 60 * 1000);
  };

  const alarmEscalation =
    !showAlarm || isAlarmMuted
      ? "idle"
      : secondsAgo < 15
        ? "low"
        : secondsAgo < 45
          ? "medium"
          : "high";
  const allRooms = useMemo(() => Object.values(ROOMS).flat(), []);
  const defaultAlertRoom = ROOMS["Bellevue"]?.[1];
  const defaultAlertClip =
    CLIPS.find((clip) => clip.room === defaultAlertRoom?.number) ?? CLIPS[0] ?? null;

  const resolveClipForRoom = (room) => {
    if (!room) {
      return null;
    }

    return (
      CLIPS.find((clip) => clip.room === room.number && clip.location === room.location) ??
      CLIPS.find((clip) => clip.room === room.number) ??
      null
    );
  };

  const resolveRoomForClip = (clip) => {
    if (!clip?.room) {
      return null;
    }

    return (
      allRooms.find((room) => room.number === clip.room && room.location === clip.location) ??
      allRooms.find((room) => room.number === clip.room) ??
      null
    );
  };

  const getCurrentJourneyClip = () =>
    selectedClip ?? resolveClipForRoom(selectedRoom) ?? defaultAlertClip;

  const handleOpenLatestActivity = () => {
    actions.openActivityFeed();
  };

  const handleOpenBedActivity = (anchorEventId = null) => {
    actions.openBedActivity(anchorEventId);
  };

  const handleOpenForwardFromOverview = () => {
    const clip = defaultAlertClip ?? getCurrentJourneyClip();
    if (!selectedRoom && defaultAlertRoom) {
      actions.selectRoom(defaultAlertRoom);
    }
    actions.openFallReview(clip);
  };

  const handleOpenLiveFromAlarm = () => {
    const clip = defaultAlertClip ?? getCurrentJourneyClip();
    if (!selectedRoom && defaultAlertRoom) {
      actions.selectRoom(defaultAlertRoom);
    }
    if (clip) {
      actions.setSelectedClip(clip);
    }
    actions.openLiveFromAlarm();
  };

  const handleOpenFallReviewFromAlarm = () => {
    const clip = defaultAlertClip ?? getCurrentJourneyClip();
    if (!selectedRoom && defaultAlertRoom) {
      actions.selectRoom(defaultAlertRoom);
    }
    actions.openFallReviewFromAlarm(clip);
  };

  const handleOpenFallClipFromBedActivity = () => {
    const clip = getCurrentJourneyClip();
    actions.openFallClip(clip);
  };

  const handleOpenFallReviewFromBedActivity = () => {
    const clip = getCurrentJourneyClip();
    actions.openFallReview(clip);
  };

  const handleOpenClipFromCriticalEvents = (clip) => {
    const clipRoom = resolveRoomForClip(clip);
    if (clipRoom) {
      actions.selectRoom(clipRoom);
    }
    actions.openFallClip(clip ?? getCurrentJourneyClip());
  };

  const handleOpenEventFromActivityFeed = (activityEvent) => {
    if (!activityEvent) {
      return;
    }

    const clipFromEvent =
      Number.isInteger(activityEvent.clipId)
        ? CLIPS.find((clip) => clip.id === activityEvent.clipId) ?? null
        : null;
    const roomFromEvent =
      allRooms.find(
        (room) =>
          room.number === activityEvent.room &&
          room.location === activityEvent.location,
      ) ??
      allRooms.find((room) => room.number === activityEvent.room) ??
      (clipFromEvent ? resolveRoomForClip(clipFromEvent) : null);
    const clipForRoom = clipFromEvent ?? resolveClipForRoom(roomFromEvent);

    if (roomFromEvent) {
      actions.selectRoom(roomFromEvent);
    }

    if (activityEvent.route === "fall-review") {
      if (clipForRoom) {
        actions.setSelectedClip(clipForRoom);
      }
      actions.openFallReview(clipForRoom);
      return;
    }

    if (activityEvent.route === "fall-clip") {
      if (clipForRoom) {
        actions.setSelectedClip(clipForRoom);
      }
      actions.openFallClip(clipForRoom);
      return;
    }

    actions.openBedActivity(activityEvent.anchorEventId ?? null);
  };

  const handleOpenReviewFromLive = () => {
    actions.openFallReview(getCurrentJourneyClip());
  };

  return (
    <div
      className="monitor-app-root h-screen w-screen overflow-hidden [background:var(--rm-root-bg)] [font-family:'SF_Pro_Display',system-ui,-apple-system,sans-serif]"
      data-theme-preset={activeThemeDraft.preset}
      data-theme-mode={activeThemeDraft.mode}
      data-alarm-escalation={alarmEscalation}
    >
      <div className="relative flex h-full w-full flex-col overflow-hidden [background:var(--rm-shell-bg)] [background-image:var(--rm-content-bg)]">
        {/* <PhoneStatusBar /> */}
        <OverviewHeader />
        <OverviewActivityToast active={!selectedRoom && !screen && !showAlarm} />

        <div className="flex flex-1 flex-col [row-gap:var(--rm-overview-content-gap)] overflow-y-auto [padding-left:var(--rm-overview-content-padding-x)] [padding-right:var(--rm-overview-content-padding-x)] [padding-bottom:var(--rm-overview-scroll-padding-bottom)] [padding-top:var(--rm-overview-content-padding-top)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden max-[720px]:[padding-bottom:var(--rm-overview-scroll-padding-bottom-mobile)]">
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
            onOpenLatestActivity={handleOpenLatestActivity}
            onOpenForward={handleOpenForwardFromOverview}
            onMuteForTenMinutes={handleMuteForTenMinutes}
            hasIncidentContext={alarmTriggered}
            isAlarmMuted={isAlarmMuted}
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
            onOpenSleep={actions.openSleepDetail}
            onOpenBedActivity={handleOpenBedActivity}
          />
        )}

        <ScreenRouter
          screen={screen}
          room={selectedRoom}
          clip={selectedClip}
          bedActivityInitialEventId={bedActivityAnchorEventId}
          onBack={actions.closeScreen}
          onCloseLive={actions.closeLiveView}
          onOpenEventFromActivityFeed={handleOpenEventFromActivityFeed}
          onOpenClipFromBedActivity={handleOpenFallClipFromBedActivity}
          onOpenReviewFromBedActivity={handleOpenFallReviewFromBedActivity}
          onOpenClipFromCriticalEvents={handleOpenClipFromCriticalEvents}
          onOpenReviewFromLive={handleOpenReviewFromLive}
        />

        {showAlarm && !screen && (
          <AlarmSheet
            room={selectedRoom ?? defaultAlertRoom}
            clip={selectedClip ?? defaultAlertClip}
            secondsAgo={secondsAgo}
            onClose={actions.hideAlarm}
            onViewLive={handleOpenLiveFromAlarm}
            onFallReview={handleOpenFallReviewFromAlarm}
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
