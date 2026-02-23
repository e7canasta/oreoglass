import {
  CriticalEventsHeader,
  CriticalEventsList,
  FeaturedClipCard,
} from "../components/critical-events-list.jsx";
import { CLIPS } from "../data/constants.js";
import "./critical-events-screen.css";

const CriticalEventsScreen = ({ onBack, onOpenClip }) => {
  const featured = CLIPS[0];

  return (
    <div className="critical-events-screen">
      <div className="critical-events-screen-spacer" />
      <CriticalEventsHeader onBack={onBack} />

      <div className="critical-events-screen-content">
        <FeaturedClipCard clip={featured} onOpen={() => onOpenClip && onOpenClip(featured)} />
        <CriticalEventsList clips={CLIPS} onOpenClip={(clip) => onOpenClip && onOpenClip(clip)} />
      </div>
    </div>
  );
};

export { CriticalEventsScreen };
