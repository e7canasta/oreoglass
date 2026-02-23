import { useState } from "react";

import { FallReviewOption } from "../components/fall-review-option.jsx";
import { ThermalView } from "../components/thermal.jsx";
import { VideoScrubber } from "../components/video.jsx";

const FallReviewScreen = ({ onBack }) => {
  const [selected, setSelected] = useState("Fall with injury");
  const options = [
    "Fall with injury",
    "Fall without injury",
    "Deliberately on ground",
    "Not a fall",
    "Already on ground",
  ];

  return (
    <div style={{position:"absolute",inset:0,zIndex:30,background:"#e84010",display:"flex",flexDirection:"column",animation:"slideInRight 0.3s cubic-bezier(0.32,0.72,0,1)",fontFamily:"'SF Pro Display',system-ui,-apple-system"}}>
      <div style={{ height:50, flexShrink:0 }} />

      <div style={{padding:"0 16px 12px",display:"flex",justifyContent:"space-between",alignItems:"baseline",flexShrink:0}}>
        <span style={{ color:"white", fontSize:22, fontWeight:"800", letterSpacing:-0.3 }}>Possible fall</span>
        <div style={{ display:"flex", alignItems:"baseline", gap:5 }}>
          <span style={{ color:"rgba(255,255,255,0.75)", fontSize:15, fontWeight:"500" }}>March 31st</span>
          <span style={{ color:"white", fontSize:15, fontWeight:"800", letterSpacing:0.3 }}>01:24</span>
        </div>
      </div>

      <div style={{margin:"0 12px 14px",borderRadius:16,overflow:"hidden",flexShrink:0,background:"#9ab0c4",boxShadow:"0 4px 20px rgba(0,0,0,0.25)"}}>
        <div style={{ height:186, position:"relative" }}>
          <ThermalView />
          <div style={{ position:"absolute", bottom:0, left:0, right:0, height:44, background:"linear-gradient(to top,rgba(0,0,0,0.45),transparent)" }} />
        </div>
        <div style={{ background:"rgba(0,0,0,0.55)", padding:"6px 14px 10px" }}>
          <VideoScrubber />
        </div>
      </div>

      <div style={{flex:1,overflowY:"auto",padding:"0 12px 32px",display:"flex",flexDirection:"column",gap:8}}>
        {options.map((opt) => (
          <FallReviewOption
            key={opt}
            label={opt}
            isSelected={selected === opt}
            onSelect={() => setSelected(opt)}
          />
        ))}
      </div>
    </div>
  );
};

export { FallReviewScreen };
