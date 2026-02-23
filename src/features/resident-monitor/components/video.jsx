import { useEffect, useState } from "react";

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
          <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
            <rect x="1" y="1" width="3.5" height="12" rx="1.5" fill="white"/>
            <rect x="7.5" y="1" width="3.5" height="12" rx="1.5" fill="white"/>
          </svg>
        ) : (
          <svg width="12" height="14" viewBox="0 0 10 13" fill="none">
            <path d="M1 1L9 6.5L1 12V1Z" fill="white"/>
          </svg>
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
        <svg width="16" height="14" viewBox="0 0 18 16" fill="none">
          <path d="M1 5H5L9 1V15L5 11H1V5Z" fill="white"/>
          <path d="M12 4C13.5 5.5 14 7 14 8C14 9 13.5 10.5 12 12" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
          <path d="M15 2C17.5 4.5 18 6.5 18 8C18 9.5 17.5 11.5 15 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6"/>
        </svg>
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
