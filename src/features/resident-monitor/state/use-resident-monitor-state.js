import { useEffect, useMemo } from "react";
import { useShallow } from "zustand/react/shallow";

import { useResidentMonitorStore } from "./resident-monitor-store.js";

export function useResidentMonitorState() {
  const state = useResidentMonitorStore(
    useShallow((store) => ({
      selectedRoom: store.selectedRoom,
      selectedClip: store.selectedClip,
      bedActivityAnchorEventId: store.bedActivityAnchorEventId,
      screen: store.screen,
      showAlarm: store.showAlarm,
      countdown: store.countdown,
      secondsAgo: store.secondsAgo,
      alarmTriggered: store.alarmTriggered,
    }))
  );

  const storeActions = useResidentMonitorStore(
    useShallow((store) => ({
      selectRoom: store.selectRoom,
      closeRoom: store.closeRoom,
      setSelectedClip: store.setSelectedClip,
      clearSelectedClip: store.clearSelectedClip,
      openScreen: store.openScreen,
      closeScreen: store.closeScreen,
      openSleepDetail: store.openSleepDetail,
      openBedActivity: store.openBedActivity,
      openCriticalEvents: store.openCriticalEvents,
      openFallClip: store.openFallClip,
      openFallReview: store.openFallReview,
      openComponentLab: store.openComponentLab,
      showAlarmSheet: store.showAlarmSheet,
      hideAlarm: store.hideAlarm,
      openLiveFromAlarm: store.openLiveFromAlarm,
      openFallReviewFromAlarm: store.openFallReviewFromAlarm,
      closeLiveView: store.closeLiveView,
      tickCountdown: store.tickCountdown,
      tickAlarmSeconds: store.tickAlarmSeconds,
    }))
  );

  useEffect(() => {
    if (state.alarmTriggered) {
      return undefined;
    }

    const interval = setInterval(() => {
      storeActions.tickCountdown();
    }, 1000);

    return () => clearInterval(interval);
  }, [state.alarmTriggered, storeActions.tickCountdown]);

  useEffect(() => {
    if (!state.showAlarm) {
      return undefined;
    }

    const interval = setInterval(() => {
      storeActions.tickAlarmSeconds();
    }, 1000);

    return () => clearInterval(interval);
  }, [state.showAlarm, storeActions.tickAlarmSeconds]);

  const actions = useMemo(
    () => ({
      selectRoom: storeActions.selectRoom,
      closeRoom: storeActions.closeRoom,
      setSelectedClip: storeActions.setSelectedClip,
      clearSelectedClip: storeActions.clearSelectedClip,
      openScreen: storeActions.openScreen,
      closeScreen: storeActions.closeScreen,
      openSleepDetail: storeActions.openSleepDetail,
      openBedActivity: storeActions.openBedActivity,
      openCriticalEvents: storeActions.openCriticalEvents,
      openFallClip: storeActions.openFallClip,
      openFallReview: storeActions.openFallReview,
      openComponentLab: storeActions.openComponentLab,
      showAlarm: storeActions.showAlarmSheet,
      hideAlarm: storeActions.hideAlarm,
      openLiveFromAlarm: storeActions.openLiveFromAlarm,
      openFallReviewFromAlarm: storeActions.openFallReviewFromAlarm,
      closeLiveView: storeActions.closeLiveView,
    }),
    [storeActions]
  );

  return { state, actions };
}
