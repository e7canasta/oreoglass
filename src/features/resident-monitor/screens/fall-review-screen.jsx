import { useEffect, useState } from "react";

import {
  FallReviewClassificationList,
  FallReviewHeader,
  FallReviewThermalCard,
} from "../components/fall-review-sections.jsx";
import { FALL_CLASSIFICATION_OPTIONS } from "../data/fall-classification-options.js";
import { ScreenStage } from "../components/screen-stage.jsx";

const FallReviewScreen = ({ room, clip, onBack }) => {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (clip?.label && FALL_CLASSIFICATION_OPTIONS.includes(clip.label)) {
      setSelected(clip.label);
      return;
    }

    setSelected("");
  }, [clip]);

  return (
    <ScreenStage zToken="--rm-z-screen-fall-review" className="[background:var(--rm-fall-review-bg)]">
      <FallReviewHeader room={room} clip={clip} onBack={onBack} />
      <FallReviewThermalCard />
      <FallReviewClassificationList value={selected} onValueChange={setSelected} />
    </ScreenStage>
  );
};

export { FallReviewScreen };
