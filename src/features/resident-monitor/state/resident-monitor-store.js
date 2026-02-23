import { create } from "zustand";

import { SCREENS } from "./screens.js";

const INITIAL_COUNTDOWN = 8;

export const useResidentMonitorStore = create((set) => ({
  selectedRoom: null,
  screen: null,
  showAlarm: false,
  countdown: INITIAL_COUNTDOWN,
  secondsAgo: 0,
  alarmTriggered: false,

  selectRoom: (room) => set({ selectedRoom: room }),
  closeRoom: () => set({ selectedRoom: null }),

  openScreen: (screen) => set({ screen }),
  closeScreen: () => set({ screen: null }),

  openSleepDetail: () => set({ screen: SCREENS.SLEEP_DETAIL }),
  openCriticalEvents: () => set({ screen: SCREENS.CRITICAL_EVENTS }),
  openFallClip: () => set({ screen: SCREENS.FALL_CLIP }),
  openFallReview: () => set({ screen: SCREENS.FALL_REVIEW }),

  showAlarmSheet: () => set({ showAlarm: true }),
  hideAlarm: () => set({ showAlarm: false }),
  openLiveFromAlarm: () => set({ showAlarm: false, screen: SCREENS.LIVE }),
  openFallReviewFromAlarm: () => set({ showAlarm: false, screen: SCREENS.FALL_REVIEW }),
  closeLiveView: () => set({ showAlarm: false, screen: null }),

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
