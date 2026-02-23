import { create } from "zustand";

import { SCREENS } from "./screens.js";

const INITIAL_COUNTDOWN = 8;

export const useResidentMonitorStore = create((set) => ({
  selectedRoom: null,
  selectedClip: null,
  bedActivityAnchorEventId: null,
  screen: null,
  previousScreen: null,
  showAlarm: false,
  countdown: INITIAL_COUNTDOWN,
  secondsAgo: 0,
  alarmTriggered: false,

  selectRoom: (room) => set({ selectedRoom: room, selectedClip: null }),
  closeRoom: () => set({ selectedRoom: null, selectedClip: null, bedActivityAnchorEventId: null }),
  setSelectedClip: (clip) => set({ selectedClip: clip ?? null }),
  clearSelectedClip: () => set({ selectedClip: null }),

  openScreen: (screen) =>
    set((state) => ({
      screen,
      previousScreen: state.screen && state.screen !== screen ? state.screen : null,
    })),
  closeScreen: () =>
    set((state) => {
      if (state.previousScreen) {
        return { screen: state.previousScreen, previousScreen: null };
      }

      return { screen: null, previousScreen: null };
    }),

  openSleepDetail: () =>
    set((state) => ({
      screen: SCREENS.SLEEP_DETAIL,
      previousScreen:
        state.screen && state.screen !== SCREENS.SLEEP_DETAIL ? state.screen : null,
    })),
  openBedActivity: (anchorEventId = null) =>
    set((state) => ({
      screen: SCREENS.BED_ACTIVITY,
      previousScreen:
        state.screen && state.screen !== SCREENS.BED_ACTIVITY ? state.screen : null,
      bedActivityAnchorEventId: anchorEventId,
    })),
  openActivityFeed: () =>
    set((state) => ({
      screen: SCREENS.ACTIVITY_FEED,
      previousScreen:
        state.screen && state.screen !== SCREENS.ACTIVITY_FEED ? state.screen : null,
    })),
  openCriticalEvents: () =>
    set((state) => ({
      screen: SCREENS.CRITICAL_EVENTS,
      previousScreen:
        state.screen && state.screen !== SCREENS.CRITICAL_EVENTS ? state.screen : null,
    })),
  openFallClip: (clip = null) =>
    set((state) => ({
      screen: SCREENS.FALL_CLIP,
      previousScreen:
        state.screen && state.screen !== SCREENS.FALL_CLIP ? state.screen : null,
      selectedClip: clip ?? state.selectedClip,
    })),
  openFallReview: (clip = null) =>
    set((state) => ({
      screen: SCREENS.FALL_REVIEW,
      previousScreen:
        state.screen && state.screen !== SCREENS.FALL_REVIEW ? state.screen : null,
      selectedClip: clip ?? state.selectedClip,
    })),
  openComponentLab: () =>
    set((state) => ({
      screen: SCREENS.COMPONENT_LAB,
      previousScreen:
        state.screen && state.screen !== SCREENS.COMPONENT_LAB ? state.screen : null,
    })),

  showAlarmSheet: () => set({ showAlarm: true }),
  hideAlarm: () => set({ showAlarm: false }),
  openLiveFromAlarm: () =>
    set({
      showAlarm: false,
      screen: SCREENS.LIVE,
      previousScreen: null,
      secondsAgo: 0,
    }),
  openFallReviewFromAlarm: (clip = null) =>
    set((state) => ({
      showAlarm: false,
      screen: SCREENS.FALL_REVIEW,
      previousScreen: null,
      secondsAgo: 0,
      selectedClip: clip ?? state.selectedClip,
    })),
  closeLiveView: () =>
    set({
      showAlarm: false,
      screen: null,
      previousScreen: null,
      selectedClip: null,
      bedActivityAnchorEventId: null,
    }),

  tickCountdown: () =>
    set((state) => {
      if (state.alarmTriggered) {
        return state;
      }

      if (state.countdown <= 1) {
        return {
          countdown: 0,
          showAlarm: true,
          alarmTriggered: true,
        };
      }

      return { countdown: state.countdown - 1 };
    }),

  tickAlarmSeconds: () =>
    set((state) => ({
      secondsAgo: state.secondsAgo + 1,
    })),
}));
