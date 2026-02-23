import { useState } from "react";

import {
  FallReviewClassificationList,
  FallReviewHeader,
  FallReviewThermalCard,
} from "../components/fall-review-sections.jsx";
import { ScreenStage, ScreenTopSpacer } from "../components/screen-stage.jsx";

const FallReviewScreen = () => {
  const [selected, setSelected] = useState("Fall with injury");

  return (
    <ScreenStage zToken="--rm-z-screen-fall-review" className="[background:var(--rm-fall-review-bg)]">
      <ScreenTopSpacer className="h-[calc(var(--rm-screen-top-spacer-compact)+var(--rm-safe-top))]" />

      <FallReviewHeader />
      <FallReviewThermalCard />
      <FallReviewClassificationList value={selected} onValueChange={setSelected} />
    </ScreenStage>
  );
};

export { FallReviewScreen };
