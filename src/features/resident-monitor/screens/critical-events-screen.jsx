import {
  CriticalEventsHeader,
  CriticalEventsList,
  FeaturedClipCard,
} from "../components/critical-events-list.jsx";
import { CLIPS } from "../data/constants.js";

const CriticalEventsScreen = ({ onBack, onOpenClip }) => {
  const featured = CLIPS[0];

  return (
    <div style={{position:"absolute",inset:0,zIndex:15,background:"#10131a",display:"flex",flexDirection:"column",animation:"slideInRight 0.3s cubic-bezier(0.32,0.72,0,1)",fontFamily:"'SF Pro Display',system-ui,-apple-system"}}>
      <div style={{ height:52, flexShrink:0 }} />
      <CriticalEventsHeader onBack={onBack} />

      <div style={{ flex:1, overflowY:"auto", padding:"0 14px 30px" }}>
        <FeaturedClipCard clip={featured} onOpen={() => onOpenClip && onOpenClip(featured)} />
        <CriticalEventsList clips={CLIPS} onOpenClip={(clip) => onOpenClip && onOpenClip(clip)} />
      </div>
    </div>
  );
};

export { CriticalEventsScreen };
