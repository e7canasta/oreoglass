import {
  CriticalEventsHeader,
  CriticalEventsList,
  FeaturedClipCard,
} from "../components/critical-events/index.js";
import { ScreenStage, ScreenTopSpacer } from "../components/screen-stage.jsx";
import { CLIPS } from "../data/constants.js";

const CriticalEventsScreen = ({ onBack, onOpenClip }) => {
  const featured = CLIPS[0];

  return (
    <ScreenStage zToken="--rm-z-screen-base" className="[background:var(--rm-critical-screen-bg)]">
      <ScreenTopSpacer className="h-[calc(var(--rm-screen-top-spacer-compact)+var(--rm-safe-top))]" />
      <CriticalEventsHeader onBack={onBack} />

      <div className="flex-1 overflow-y-auto px-[14px] [padding-bottom:var(--rm-screen-content-padding-bottom)]">
        <FeaturedClipCard clip={featured} onOpen={() => onOpenClip && onOpenClip(featured)} />
        <CriticalEventsList clips={CLIPS} onOpenClip={(clip) => onOpenClip && onOpenClip(clip)} />
      </div>
    </ScreenStage>
  );
};

export { CriticalEventsScreen };
