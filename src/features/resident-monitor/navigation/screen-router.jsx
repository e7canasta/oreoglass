import { ComponentLabScreen } from "../screens/component-lab-screen.jsx";
import { CriticalEventsScreen } from "../screens/critical-events-screen.jsx";
import { FallClipScreen } from "../screens/fall-clip-screen.jsx";
import { FallReviewScreen } from "../screens/fall-review-screen.jsx";
import { LiveViewScreen } from "../screens/live-view-screen.jsx";
import { SleepDetailScreen } from "../screens/sleep-detail-screen.jsx";
import { SCREENS } from "../state/screens.js";

function ScreenRouter({
  screen,
  onBack,
  onCloseLive,
  onOpenClipFromCriticalEvents,
}) {
  switch (screen) {
    case SCREENS.SLEEP_DETAIL:
      return <SleepDetailScreen onBack={onBack} />;

    case SCREENS.CRITICAL_EVENTS:
      return (
        <CriticalEventsScreen
          onBack={onBack}
          onOpenClip={onOpenClipFromCriticalEvents}
        />
      );

    case SCREENS.FALL_CLIP:
      return <FallClipScreen onBack={onBack} />;

    case SCREENS.LIVE:
      return <LiveViewScreen onBack={onCloseLive} />;

    case SCREENS.FALL_REVIEW:
      return <FallReviewScreen onBack={onBack} />;

    case SCREENS.COMPONENT_LAB:
      return <ComponentLabScreen onBack={onBack} />;

    default:
      return null;
  }
}

export { ScreenRouter };
