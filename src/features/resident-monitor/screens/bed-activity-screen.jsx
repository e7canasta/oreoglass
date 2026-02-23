import { useState } from "react";

import {
  BedActivityHeader,
  BedActivityLiveCard,
  BedActivityTimeline,
} from "../components/bed-activity-sections.jsx";
import { BedActivityReviewSheet } from "../components/bed-activity-review-sheet.jsx";
import { ScreenStage, ScreenTopSpacer } from "../components/screen-stage.jsx";

const BedActivityScreen = ({ room, onBack, onOpenFallClip, onOpenFallReview }) => {
  const [isReviewSheetOpen, setIsReviewSheetOpen] = useState(false);

  const handleOpenReviewSheet = () => setIsReviewSheetOpen(true);
  const handleCloseReviewSheet = () => setIsReviewSheetOpen(false);

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
      <ScreenTopSpacer className="h-[calc(var(--rm-screen-top-spacer-compact)+var(--rm-safe-top))]" />

      <BedActivityHeader room={room} onBack={onBack} />

      <div className="flex flex-1 flex-col overflow-y-auto [padding-bottom:var(--rm-screen-content-padding-bottom)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <BedActivityLiveCard room={room} onRequestReview={handleOpenReviewSheet} />
        <BedActivityTimeline onRequestReview={handleOpenReviewSheet} />
      </div>

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
