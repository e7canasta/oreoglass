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
      dotColor: "#e8430a",
      icon: (
        <TimelineIcon>
          <IconSittingOnBedLarge size={32} />
        </TimelineIcon>
      ),
      label: "Sitting on edge of bed",
    },
    {
      time: "07:31",
      dotColor: "#e8430a",
      icon: (
        <TimelineIcon>
          <IconStanding size={26} />
        </TimelineIcon>
      ),
      label: "Standing",
    },
    {
      time: "07:31",
      dotColor: "#e8430a",
      icon: (
        <TimelineIcon>
          <IconLayingOnFloor size={22} />
        </TimelineIcon>
      ),
      label: "Laying on floor",
    },
    {
      time: "07:32",
      dotColor: "#4cd68a",
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
    <div style={{position:"absolute",inset:0,zIndex:15,background:"#13151a",display:"flex",flexDirection:"column",animation:"slideInRight 0.3s cubic-bezier(0.32,0.72,0,1)",fontFamily:"'SF Pro Display',system-ui,-apple-system"}}>
      <div style={{ flex:1, overflowY:"auto" }}>
        <div style={{ position:"relative", height:240, background:"#8da5bc", flexShrink:0 }}>
          <ThermalView />
          <VideoControls isPlaying={isPlaying} onToggle={() => setIsPlaying((p) => !p)} />
          <div style={{position:"absolute",bottom:0,left:0,right:0,background:"linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)",padding:"20px 14px 10px"}}>
            <div style={{height:3,background:"rgba(255,255,255,0.25)",borderRadius:2,position:"relative"}}>
              <div style={{ width:"38%", height:"100%", background:"white", borderRadius:2 }} />
              <div style={{position:"absolute",left:"38%",top:"50%",transform:"translate(-50%,-50%)",width:12,height:12,borderRadius:"50%",background:"white",boxShadow:"0 0 6px rgba(0,0,0,0.4)"}} />
            </div>
          </div>
        </div>

        <div style={{ padding:"14px 16px 30px" }}>
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
