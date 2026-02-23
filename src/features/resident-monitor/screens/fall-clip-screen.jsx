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
import "./fall-clip-screen.css";

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
    <div className="fall-clip-screen">
      <div className="fall-clip-screen-scroll">
        <div className="fall-clip-screen-video">
          <ThermalView />
          <VideoControls isPlaying={isPlaying} onToggle={() => setIsPlaying((p) => !p)} />
          <div className="fall-clip-screen-progress-wrap">
            <div className="fall-clip-screen-progress-track">
              <div className="fall-clip-screen-progress-fill" />
              <div className="fall-clip-screen-progress-thumb" />
            </div>
          </div>
        </div>

        <div className="fall-clip-screen-content">
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
