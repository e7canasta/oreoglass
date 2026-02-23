import { useState } from "react";

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
import { FallClipVideoStage } from "../components/fall-clip-video-stage.jsx";
import { ScreenStage } from "../components/screen-stage.jsx";

const FALL_REVIEW_STATE = Object.freeze({
  NEEDS_REVIEW: "needs_review",
  REVIEWED: "reviewed",
});

const FALL_CLIP_TIMELINE_EVENTS = [
  {
    time: "07:29",
    dotTone: "critical",
    icon: (
      <TimelineIcon>
        <IconSittingOnBedLarge size={32} />
      </TimelineIcon>
    ),
    label: "Sitting on edge of bed",
  },
  {
    time: "07:31",
    dotTone: "critical",
    icon: (
      <TimelineIcon>
        <IconStanding size={26} />
      </TimelineIcon>
    ),
    label: "Standing",
  },
  {
    time: "07:31",
    dotTone: "critical",
    icon: (
      <TimelineIcon>
        <IconLayingOnFloor size={22} />
      </TimelineIcon>
    ),
    label: "Laying on floor",
  },
  {
    time: "07:32",
    dotTone: "success",
    icon: (
      <TimelineIcon>
        <IconStaffEnter size={38} />
      </TimelineIcon>
    ),
    label: "Staff enters room",
    isLast: true,
  },
];

const FallClipScreen = ({ onBack }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [reviewState, setReviewState] = useState(FALL_REVIEW_STATE.NEEDS_REVIEW);
  const [classification, setClassification] = useState(null);

  const handleClassify = (value) => {
    setClassification(value);
    setReviewState(FALL_REVIEW_STATE.REVIEWED);
  };

  return (
    <ScreenStage zToken="--rm-z-screen-base" className="[background:var(--rm-fall-screen-bg)]">
      <div className="flex-1 overflow-y-auto">
        <FallClipVideoStage isPlaying={isPlaying} onTogglePlay={() => setIsPlaying((prev) => !prev)} />

        <div className="px-4 [padding-bottom:var(--rm-screen-content-padding-bottom)] pt-[14px]">
          <FallClipMetaRow />

          {reviewState === FALL_REVIEW_STATE.NEEDS_REVIEW && <FallClipNeedsReview onClassify={handleClassify} />}

          {reviewState === FALL_REVIEW_STATE.REVIEWED && (
            <FallClipReviewed
              classification={classification}
              onEdit={() => setReviewState(FALL_REVIEW_STATE.NEEDS_REVIEW)}
            />
          )}

          <FallClipStats />
          <FallClipTimeline events={FALL_CLIP_TIMELINE_EVENTS} />
        </div>
      </div>

      <FallClipBackButton onBack={onBack} />
    </ScreenStage>
  );
};

export { FallClipScreen };
