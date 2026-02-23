import { useMemo, useState } from "react";

import {
  ActivityFeedFilters,
  ActivityFeedHeader,
  ActivityFeedList,
} from "../components/activity-feed-sections.jsx";
import { ACTIVITY_FEED_EVENTS, ACTIVITY_FEED_FILTERS } from "../data/activity-feed-events.js";
import { ScreenStage, ScreenTopSpacer } from "../components/screen-stage.jsx";

const ActivityFeedScreen = ({ onBack, onOpenEvent }) => {
  const [activeFilterId, setActiveFilterId] = useState("all");

  const filteredEvents = useMemo(() => {
    const events = [...ACTIVITY_FEED_EVENTS].sort((a, b) => a.minutesAgo - b.minutesAgo);
    if (activeFilterId === "all") {
      return events;
    }

    return events.filter((event) => event.type === activeFilterId);
  }, [activeFilterId]);

  return (
    <ScreenStage zToken="--rm-z-screen-base" className="[background:var(--rm-critical-screen-bg)]">
      <ScreenTopSpacer className="h-[calc(var(--rm-screen-top-spacer-compact)+var(--rm-safe-top))]" />

      <ActivityFeedHeader
        onBack={onBack}
        totalCount={ACTIVITY_FEED_EVENTS.length}
        filteredCount={filteredEvents.length}
      />
      <ActivityFeedFilters
        filters={ACTIVITY_FEED_FILTERS}
        activeFilterId={activeFilterId}
        onSelectFilter={setActiveFilterId}
      />

      <div className="flex-1 overflow-y-auto px-[14px] [padding-bottom:var(--rm-screen-content-padding-bottom)]">
        <ActivityFeedList events={filteredEvents} onOpenEvent={onOpenEvent} />
      </div>
    </ScreenStage>
  );
};

export { ActivityFeedScreen };
