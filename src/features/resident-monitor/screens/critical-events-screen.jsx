import {
  CriticalEventsHeader,
  CriticalEventsList,
  FeaturedClipCard,
} from "../components/critical-events-list.jsx";
import { CLIPS } from "../data/constants.js";

const CriticalEventsScreen = ({ onBack, onOpenClip }) => {
  const featured = CLIPS[0];

  return (
    <div className="absolute inset-0 z-[15] flex animate-[slideInRight_0.3s_cubic-bezier(0.32,0.72,0,1)] flex-col overflow-hidden [background:var(--rm-critical-screen-bg)]">
      <div className="h-[calc(52px+env(safe-area-inset-top,0px))] shrink-0" />
      <CriticalEventsHeader onBack={onBack} />

      <div className="flex-1 overflow-y-auto px-[14px] pb-[calc(30px+env(safe-area-inset-bottom,0px))]">
        <FeaturedClipCard clip={featured} onOpen={() => onOpenClip && onOpenClip(featured)} />
        <CriticalEventsList clips={CLIPS} onOpenClip={(clip) => onOpenClip && onOpenClip(clip)} />
      </div>
    </div>
  );
};

export { CriticalEventsScreen };
