import { useEffect, useMemo, useRef, useState } from "react";

import {
  IconLayingOnFloor,
  IconSittingOnBedLarge,
  IconStaffEnter,
  IconStanding,
  TimelineIcon,
} from "../components/icons.jsx";
import {
  FallClipBackButton,
  FallClipMetaRow,
  FallClipNeedsReview,
  FallClipReviewed,
  FallClipStats,
  FallClipTimeline,
} from "../components/fall-clip/index.js";
import { EvidenceMiniDock } from "../components/evidence-mini-dock.jsx";
import { FallClipVideoStage } from "../components/fall-clip-video-stage.jsx";
import { ScreenStage } from "../components/screen-stage.jsx";

const FALL_REVIEW_STATE = Object.freeze({
  NEEDS_REVIEW: "needs_review",
  REVIEWED: "reviewed",
});

const FALL_TIMELINE_PROGRESS_POINTS = Object.freeze([18, 36, 58, 81]);

const getTimelineProgressPercent = (index, totalEvents) => {
  if (Number.isInteger(index) && index >= 0 && index < FALL_TIMELINE_PROGRESS_POINTS.length) {
    return FALL_TIMELINE_PROGRESS_POINTS[index];
  }

  if (!totalEvents || totalEvents <= 1) {
    return 50;
  }

  const start = 14;
  const end = 86;
  const ratio = Math.min(Math.max(index / (totalEvents - 1), 0), 1);
  return Math.round(start + (end - start) * ratio);
};

const addMinutes = (time, minutesToAdd) => {
  const base = /^(\d{1,2}):(\d{2})$/.exec(time);
  if (!base) {
    return time;
  }

  const hours = Number(base[1]);
  const minutes = Number(base[2]);
  const totalMinutes = ((hours * 60 + minutes + minutesToAdd) % 1440 + 1440) % 1440;
  const nextHours = String(Math.floor(totalMinutes / 60)).padStart(2, "0");
  const nextMinutes = String(totalMinutes % 60).padStart(2, "0");
  return `${nextHours}:${nextMinutes}`;
};

const buildTimelineEvents = (clip, room) => {
  const baseTime = clip?.time?.split("–")?.[0]?.trim() ?? "07:29";
  const roomNumber = room?.number ?? clip?.room ?? "122.2";

  return [
    {
      id: "risk-posture",
      time: baseTime,
      dotTone: "critical",
      icon: (
        <TimelineIcon>
          <IconSittingOnBedLarge size={32} />
        </TimelineIcon>
      ),
      label: clip?.event ?? "Sitting on edge of bed",
      detail: "Risk posture detected",
    },
    {
      id: "near-bed-movement",
      time: addMinutes(baseTime, 1),
      dotTone: "critical",
      icon: (
        <TimelineIcon>
          <IconStanding size={26} />
        </TimelineIcon>
      ),
      label: "Standing near bed",
      detail: "Movement near bedside",
    },
    {
      id: "fall-alarm",
      time: addMinutes(baseTime, 2),
      dotTone: "critical",
      icon: (
        <TimelineIcon>
          <IconLayingOnFloor size={22} />
        </TimelineIcon>
      ),
      label: "Fall alarm",
      detail: "Escalated for review",
    },
    {
      id: "care-team-room",
      time: addMinutes(baseTime, 3),
      dotTone: "success",
      icon: (
        <TimelineIcon>
          <IconStaffEnter size={38} />
        </TimelineIcon>
      ),
      label: "Care team in room",
      detail: `Response started in Room ${roomNumber}`,
      isLast: true,
    },
  ];
};

const FallClipScreen = ({ room, clip, onBack }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [reviewState, setReviewState] = useState(FALL_REVIEW_STATE.NEEDS_REVIEW);
  const [classification, setClassification] = useState(null);
  const [isEvidenceDockVisible, setIsEvidenceDockVisible] = useState(false);
  const scrollContainerRef = useRef(null);
  const timelineEvents = useMemo(() => buildTimelineEvents(clip, room), [clip, room]);
  const defaultSelectedTimelineIndex = Math.max(
    0,
    timelineEvents.findIndex((event) => event.id === "fall-alarm"),
  );
  const [selectedTimelineIndex, setSelectedTimelineIndex] = useState(defaultSelectedTimelineIndex);
  const progressPercent = getTimelineProgressPercent(selectedTimelineIndex, timelineEvents.length);

  useEffect(() => {
    setSelectedTimelineIndex(defaultSelectedTimelineIndex);
  }, [defaultSelectedTimelineIndex, clip?.id, room?.number, room?.location]);

  const handleClassify = (value) => {
    setClassification(value);
    setReviewState(FALL_REVIEW_STATE.REVIEWED);
  };
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
    const shouldShowDock = event.currentTarget.scrollTop > 180;
    setIsEvidenceDockVisible((prev) => (prev === shouldShowDock ? prev : shouldShowDock));
  };

  return (
    <ScreenStage zToken="--rm-z-screen-base" className="[background:var(--rm-fall-screen-bg)]">
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto"
      >
        <FallClipVideoStage
          isPlaying={isPlaying}
          onTogglePlay={() => setIsPlaying((prev) => !prev)}
          progressPercent={progressPercent}
        />

        <div className="px-4 [padding-bottom:var(--rm-screen-content-padding-bottom)] pt-[14px]">
          <FallClipMetaRow clip={clip} room={room} />

          {reviewState === FALL_REVIEW_STATE.NEEDS_REVIEW && <FallClipNeedsReview onClassify={handleClassify} />}

          {reviewState === FALL_REVIEW_STATE.REVIEWED && (
            <FallClipReviewed
              classification={classification}
              onEdit={() => setReviewState(FALL_REVIEW_STATE.NEEDS_REVIEW)}
            />
          )}

          <FallClipStats clip={clip} />
          <FallClipTimeline
            events={timelineEvents}
            selectedIndex={selectedTimelineIndex}
            onSelectEvent={handleSelectTimelineEvent}
          />
        </div>
      </div>
      <EvidenceMiniDock
        visible={isEvidenceDockVisible}
        title={`Room ${room?.number ?? clip?.room ?? "122.2"} evidence`}
        subtitle={`${timelineEvents[selectedTimelineIndex]?.label ?? clip?.event ?? "Fall event"} · ${timelineEvents[selectedTimelineIndex]?.time ?? ""}`}
        progressPercent={progressPercent}
        onFocusEvidence={scrollToEvidenceTop}
      />

      <FallClipBackButton onBack={onBack} />
    </ScreenStage>
  );
};

export { FallClipScreen };
