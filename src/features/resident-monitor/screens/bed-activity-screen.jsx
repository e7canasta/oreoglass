import { useEffect, useRef, useState } from "react";

import {
  BED_ACTIVITY_TIMELINE_EVENTS,
  BedActivityLiveCard,
  BedActivityTimeline,
  resolveBedActivityIndexByEventId,
} from "../components/bed-activity-sections.jsx";
import { BedActivityReviewSheet } from "../components/bed-activity-review-sheet.jsx";
import { EvidenceMiniDock } from "../components/evidence-mini-dock.jsx";
import { ScreenStage } from "../components/screen-stage.jsx";

const BedActivityScreen = ({ room, initialEventId, onBack, onOpenFallClip, onOpenFallReview }) => {
  const [isReviewSheetOpen, setIsReviewSheetOpen] = useState(false);
  const [isEvidenceDockVisible, setIsEvidenceDockVisible] = useState(false);
  const scrollContainerRef = useRef(null);
  const liveEventIndex = resolveBedActivityIndexByEventId();
  const [selectedTimelineIndex, setSelectedTimelineIndex] = useState(() =>
    resolveBedActivityIndexByEventId(initialEventId),
  );
  const selectedEvent =
    BED_ACTIVITY_TIMELINE_EVENTS[selectedTimelineIndex] ?? BED_ACTIVITY_TIMELINE_EVENTS[liveEventIndex];
  const progressPoints = [14, 33, 51, 70, 88];
  const progressPercent = progressPoints[selectedTimelineIndex] ?? progressPoints[liveEventIndex];
  const isAtLive = selectedTimelineIndex === liveEventIndex;

  const handleOpenReviewSheet = () => setIsReviewSheetOpen(true);
  const handleCloseReviewSheet = () => setIsReviewSheetOpen(false);
  const handleReturnToLive = () => setSelectedTimelineIndex(liveEventIndex);
  const scrollToEvidenceTop = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const handleSelectTimelineEvent = (index) => {
    setSelectedTimelineIndex(index);
    scrollToEvidenceTop();
  };
  const handleScroll = (event) => {
    const shouldShowDock = event.currentTarget.scrollTop > 220;
    setIsEvidenceDockVisible((prev) => (prev === shouldShowDock ? prev : shouldShowDock));
  };

  useEffect(() => {
    setSelectedTimelineIndex(resolveBedActivityIndexByEventId(initialEventId));
  }, [initialEventId]);

  const handleOpenClip = () => {
    setIsReviewSheetOpen(false);
    onOpenFallClip?.();
  };

  const handleOpenQuestionnaire = () => {
    setIsReviewSheetOpen(false);
    onOpenFallReview?.();
  };

  return (
    <ScreenStage zToken="--rm-z-screen-bed-activity" className="[background:var(--rm-bed-activity-bg)]">
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex flex-1 flex-col overflow-y-auto [padding-bottom:var(--rm-screen-content-padding-bottom)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="pt-[calc(var(--rm-safe-top)+6px)]">
          <BedActivityLiveCard
            room={room}
            selectedEvent={selectedEvent}
            progressPercent={progressPercent}
            isAtLive={isAtLive}
            onBack={onBack}
            onReturnToLive={handleReturnToLive}
            onRequestReview={handleOpenReviewSheet}
          />
        </div>
        <BedActivityTimeline
          selectedIndex={selectedTimelineIndex}
          onSelectEvent={handleSelectTimelineEvent}
        />
      </div>
      <EvidenceMiniDock
        visible={isEvidenceDockVisible}
        title={`Room ${room?.number ?? "101"} evidence`}
        subtitle={`${selectedEvent?.label ?? "Current activity"} · ${selectedEvent?.time ?? "now"}`}
        progressPercent={progressPercent}
        onFocusEvidence={scrollToEvidenceTop}
      />

      <BedActivityReviewSheet
        open={isReviewSheetOpen}
        onOpenChange={setIsReviewSheetOpen}
        onClose={handleCloseReviewSheet}
        onOpenClip={handleOpenClip}
        onOpenQuestionnaire={handleOpenQuestionnaire}
      />
    </ScreenStage>
  );
};

export { BedActivityScreen };
