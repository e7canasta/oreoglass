import { useState } from "react";
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
    <div style={{
      position:"absolute", inset:0, zIndex:30,
      background:"#e84010",
      display:"flex", flexDirection:"column",
      animation:"slideInRight 0.3s cubic-bezier(0.32,0.72,0,1)",
      fontFamily:"'SF Pro Display',system-ui,-apple-system",
    }}>

      {/* ── Status bar placeholder ── */}
      <div style={{ height:50, flexShrink:0 }}/>

      {/* ── Header row ── */}
      <div style={{
        padding:"0 16px 12px",
        display:"flex", justifyContent:"space-between", alignItems:"baseline",
        flexShrink:0,
      }}>
        <span style={{ color:"white", fontSize:22, fontWeight:"800", letterSpacing:-0.3 }}>
          Possible fall
        </span>
        <div style={{ display:"flex", alignItems:"baseline", gap:5 }}>
          <span style={{ color:"rgba(255,255,255,0.75)", fontSize:15, fontWeight:"500" }}>March 31st</span>
          <span style={{ color:"white", fontSize:15, fontWeight:"800", letterSpacing:0.3 }}>01:24</span>
        </div>
      </div>

      {/* ── Thermal clip card ── */}
      <div style={{
        margin:"0 12px 14px",
        borderRadius:16,
        overflow:"hidden",
        flexShrink:0,
        background:"#9ab0c4",
        boxShadow:"0 4px 20px rgba(0,0,0,0.25)",
      }}>
        {/* video frame */}
        <div style={{ height:186, position:"relative" }}>
          <ThermalView/>
          {/* subtle dark scrim at bottom for scrubber readability */}
          <div style={{ position:"absolute", bottom:0, left:0, right:0, height:44, background:"linear-gradient(to top,rgba(0,0,0,0.45),transparent)" }}/>
        </div>
        {/* scrubber row */}
        <div style={{ background:"rgba(0,0,0,0.55)", padding:"6px 14px 10px" }}>
          <VideoScrubber/>
        </div>
      </div>

      {/* ── Classification list ── */}
      <div style={{
        flex:1, overflowY:"auto",
        padding:"0 12px 32px",
        display:"flex", flexDirection:"column", gap:8,
      }}>
        {options.map((opt) => {
          const isSel = selected === opt;
          return (
            <button
              key={opt}
              onClick={()=> setSelected(opt)}
              style={{
                width:"100%",
                background: isSel
                  ? "rgba(255,255,255,0.18)"
                  : "rgba(0,0,0,0.18)",
                border: isSel
                  ? "2px solid rgba(255,255,255,0.45)"
                  : "2px solid rgba(0,0,0,0.12)",
                borderRadius:14,
                padding:"15px 16px",
                display:"flex", alignItems:"center", justifyContent:"space-between",
                cursor:"pointer",
                transition:"background 0.15s, border 0.15s",
              }}
            >
              <span style={{
                color:"white",
                fontSize:17,
                fontWeight: isSel ? "700" : "500",
                textAlign:"left",
              }}>
                {opt}
              </span>

              {/* checkmark badge — only on selected */}
              {isSel && (
                <div style={{
                  width:30, height:30, borderRadius:"50%",
                  background:"rgba(255,255,255,0.15)",
                  border:"2.5px solid rgba(255,255,255,0.8)",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  flexShrink:0,
                }}>
                  <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
                    <path d="M1.5 5.5L5.5 9.5L12.5 1.5"
                      stroke="white" strokeWidth="2.2"
                      strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

/* ══════════════════════════════════════
   ALARM BOTTOM SHEET — pixel perfect
   Full orange #e8430a, blurred backdrop
══════════════════════════════════════ */

export { FallReviewScreen };
