import { useEffect, useState } from "react";
import { IconPause, IconPlay, IconVolume } from "./ui-icons.jsx";

const VideoScrubber = () => {
  const [pos, setPos] = useState(34); // % played
  useEffect(()=>{
    const t = setInterval(()=> setPos(p => p >= 98 ? 0 : p + 0.4), 80);
    return ()=> clearInterval(t);
  },[]);
  return (
    <div style={{ position:"relative", height:20, display:"flex", alignItems:"center", padding:"0 2px" }}>
      {/* track */}
      <div style={{ flex:1, height:4, background:"rgba(255,255,255,0.22)", borderRadius:3, position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", left:0, top:0, bottom:0, width:`${pos}%`, background:"rgba(255,255,255,0.85)", borderRadius:3, transition:"width 0.08s linear" }}/>
      </div>
      {/* thumb */}
      <div style={{ position:"absolute", left:`calc(${pos}% - 7px)`, width:14, height:14, borderRadius:"50%", background:"white", boxShadow:"0 1px 4px rgba(0,0,0,0.3)", flexShrink:0, pointerEvents:"none" }}/>
    </div>
  );
};


const VideoControls = ({ isPlaying, onToggle }) => (
  <>
    {/* left controls */}
    <div style={{
      position:"absolute", top:12, left:12,
      display:"flex", gap:8,
    }}>
      <button onClick={onToggle} style={{
        width:36, height:36, borderRadius:10,
        background:"rgba(30,32,38,0.72)",
        backdropFilter:"blur(8px)",
        border:"1px solid rgba(255,255,255,0.12)",
        display:"flex", alignItems:"center", justifyContent:"center",
        cursor:"pointer",
      }}>
        {isPlaying ? (
          <IconPause />
        ) : (
          <IconPlay width={12} height={14} />
        )}
      </button>
      <button style={{
        width:36, height:36, borderRadius:10,
        background:"rgba(30,32,38,0.72)",
        backdropFilter:"blur(8px)",
        border:"1px solid rgba(255,255,255,0.12)",
        display:"flex", alignItems:"center", justifyContent:"center",
        cursor:"pointer",
      }}>
        <IconVolume />
      </button>
    </div>
    {/* right controls */}
    <div style={{
      position:"absolute", top:12, right:12,
      display:"flex", gap:8,
    }}>
      {["CC","⋮","↗"].map((icon,i)=>(
        <button key={i} style={{
          width:36, height:36, borderRadius:10,
          background:"rgba(30,32,38,0.72)",
          backdropFilter:"blur(8px)",
          border:"1px solid rgba(255,255,255,0.12)",
          display:"flex", alignItems:"center", justifyContent:"center",
          cursor:"pointer", color:"white", fontSize:i===0?10:i===1?18:13,
          fontWeight:"700",
        }}>
          {icon}
        </button>
      ))}
    </div>
  </>
);

/* ══════════════════════════════════════
   FALL CLIP DETAIL SCREEN — pixel perfect
   Two states: "needs_review" / "reviewed"
══════════════════════════════════════ */

export { VideoScrubber, VideoControls };
