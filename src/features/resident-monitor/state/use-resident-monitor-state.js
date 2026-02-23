import { useEffect, useMemo, useReducer } from "react";

import { SCREENS } from "./screens.js";

const INITIAL_STATE = {
  selectedRoom: null,
  screen: null,
  showAlarm: false,
  countdown: 8,
  secondsAgo: 0,
  alarmTriggered: false,
};

function residentMonitorReducer(state, action) {
  switch (action.type) {
    case "room/select":
      return { ...state, selectedRoom: action.payload };

    case "room/clear":
      return { ...state, selectedRoom: null };

    case "screen/open":
      return { ...state, screen: action.payload };

    case "screen/close":
      return { ...state, screen: null };

    case "alarm/show":
      return { ...state, showAlarm: true };

    case "alarm/hide":
      return { ...state, showAlarm: false };

    case "alarm/open-live":
      return { ...state, showAlarm: false, screen: SCREENS.LIVE };

    case "alarm/open-fall-review":
      return { ...state, showAlarm: false, screen: SCREENS.FALL_REVIEW };

    case "live/close":
      return { ...state, showAlarm: false, screen: null };

    case "countdown/tick":
      if (state.countdown <= 1) {
        return {
          ...state,
          countdown: 0,
          showAlarm: true,
          alarmTriggered: true,
        };
      }
      return { ...state, countdown: state.countdown - 1 };

    case "alarm/seconds-tick":
      return { ...state, secondsAgo: state.secondsAgo + 1 };

    default:
      return state;
  }
}

export function useResidentMonitorState() {
  const [state, dispatch] = useReducer(residentMonitorReducer, INITIAL_STATE);

  useEffect(() => {
    if (state.alarmTriggered) {
      return undefined;
    }

    const interval = setInterval(() => {
      dispatch({ type: "countdown/tick" });
    }, 1000);

    return () => clearInterval(interval);
  }, [state.alarmTriggered]);

  useEffect(() => {
    if (!state.showAlarm) {
      return undefined;
    }

    const interval = setInterval(() => {
      dispatch({ type: "alarm/seconds-tick" });
    }, 1000);

    return () => clearInterval(interval);
  }, [state.showAlarm]);

  const actions = useMemo(
    () => ({
      selectRoom: (room) => dispatch({ type: "room/select", payload: room }),
      closeRoom: () => dispatch({ type: "room/clear" }),
      openScreen: (screen) => dispatch({ type: "screen/open", payload: screen }),
      closeScreen: () => dispatch({ type: "screen/close" }),
      openSleepDetail: () => dispatch({ type: "screen/open", payload: SCREENS.SLEEP_DETAIL }),
      openCriticalEvents: () => dispatch({ type: "screen/open", payload: SCREENS.CRITICAL_EVENTS }),
      openFallClip: () => dispatch({ type: "screen/open", payload: SCREENS.FALL_CLIP }),
      openFallReview: () => dispatch({ type: "screen/open", payload: SCREENS.FALL_REVIEW }),
      showAlarm: () => dispatch({ type: "alarm/show" }),
      hideAlarm: () => dispatch({ type: "alarm/hide" }),
      openLiveFromAlarm: () => dispatch({ type: "alarm/open-live" }),
      openFallReviewFromAlarm: () => dispatch({ type: "alarm/open-fall-review" }),
      closeLiveView: () => dispatch({ type: "live/close" }),
    }),
    []
  );

  return { state, actions };
}
