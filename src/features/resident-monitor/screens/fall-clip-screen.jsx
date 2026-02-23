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
} from "../components/fall-clip-sections.jsx";
import { ThermalView } from "../components/thermal.jsx";
import { VideoControls } from "../components/video.jsx";

const FallClipScreen = ({ onBack }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [reviewState, setReviewState] = useState("needs_review");
  const [classification, setClassification] = useState(null);

  const timelineEvents = [
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

  const handleClassify = (value) => {
    setClassification(value);
    setReviewState("reviewed");
  };

  return (
    <div className="absolute inset-0 z-[15] flex animate-[slideInRight_0.3s_cubic-bezier(0.32,0.72,0,1)] flex-col overflow-hidden [background:var(--rm-fall-screen-bg)]">
      <div className="flex-1 overflow-y-auto">
        <div className="relative h-[clamp(216px,36vh,240px)] shrink-0 [background:var(--rm-fall-video-bg)]">
          <ThermalView />
          <VideoControls isPlaying={isPlaying} onToggle={() => setIsPlaying((p) => !p)} />
          <div className="absolute inset-x-0 bottom-0 px-[14px] pb-2.5 pt-5 [background:var(--rm-fall-video-progress-overlay)]">
            <div className="relative h-[3px] rounded-[2px] [background:var(--rm-fall-video-progress-track)]">
              <div className="h-full w-[38%] rounded-[2px] [background:var(--rm-fall-video-progress-fill)]" />
              <div className="absolute left-[38%] top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full [background:var(--rm-fall-video-progress-thumb)] [box-shadow:var(--rm-fall-video-progress-thumb-shadow)]" />
            </div>
          </div>
        </div>

        <div className="px-4 pb-[calc(30px+env(safe-area-inset-bottom,0px))] pt-[14px]">
          <FallClipMetaRow />

          {reviewState === "needs_review" && <FallClipNeedsReview onClassify={handleClassify} />}

          {reviewState === "reviewed" && (
            <FallClipReviewed
              classification={classification}
              onEdit={() => setReviewState("needs_review")}
            />
          )}

          <FallClipStats />
          <FallClipTimeline events={timelineEvents} />
        </div>
      </div>

      <FallClipBackButton onBack={onBack} />
    </div>
  );
};

export { FallClipScreen };
