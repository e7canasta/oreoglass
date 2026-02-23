import { ActivityFeedScreen } from "../screens/activity-feed-screen.jsx";
import { BedActivityScreen } from "../screens/bed-activity-screen.jsx";
import { ComponentLabScreen } from "../screens/component-lab-screen.jsx";
import { CriticalEventsScreen } from "../screens/critical-events-screen.jsx";
import { FallClipScreen } from "../screens/fall-clip-screen.jsx";
import { FallReviewScreen } from "../screens/fall-review-screen.jsx";
import { LiveViewScreen } from "../screens/live-view-screen.jsx";
import { SleepDetailScreen } from "../screens/sleep-detail-screen.jsx";
import { SCREENS } from "../state/screens.js";

function ScreenRouter({
  screen,
  room,
  clip,
  bedActivityInitialEventId,
  onBack,
  onCloseLive,
  onOpenEventFromActivityFeed,
  onOpenClipFromBedActivity,
  onOpenReviewFromBedActivity,
  onOpenClipFromCriticalEvents,
  onOpenReviewFromLive,
}) {
  switch (screen) {
    case SCREENS.ACTIVITY_FEED:
      return (
        <ActivityFeedScreen
          onBack={onBack}
          onOpenEvent={onOpenEventFromActivityFeed}
        />
      );

    case SCREENS.SLEEP_DETAIL:
      return <SleepDetailScreen room={room} onBack={onBack} />;

    case SCREENS.BED_ACTIVITY:
      return (
        <BedActivityScreen
          room={room}
          initialEventId={bedActivityInitialEventId}
          onBack={onBack}
          onOpenFallClip={onOpenClipFromBedActivity}
          onOpenFallReview={onOpenReviewFromBedActivity}
        />
      );

    case SCREENS.CRITICAL_EVENTS:
      return (
        <CriticalEventsScreen
          onBack={onBack}
          onOpenClip={onOpenClipFromCriticalEvents}
        />
      );

    case SCREENS.FALL_CLIP:
      return <FallClipScreen room={room} clip={clip} onBack={onBack} />;

    case SCREENS.LIVE:
      return <LiveViewScreen room={room} clip={clip} onBack={onCloseLive} onOpenReview={onOpenReviewFromLive} />;

    case SCREENS.FALL_REVIEW:
      return <FallReviewScreen room={room} clip={clip} onBack={onBack} />;

    case SCREENS.COMPONENT_LAB:
      return <ComponentLabScreen onBack={onBack} />;

    default:
      return null;
  }
}

export { ScreenRouter };
