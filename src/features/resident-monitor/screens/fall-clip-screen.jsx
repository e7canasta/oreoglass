import { useState } from "react";
import {
  IconLayingOnFloor,
  IconSittingOnBedLarge,
  IconStaffEnter,
  IconStanding,
  TimelineIcon,
} from "../components/icons.jsx";
import { ThermalView } from "../components/thermal.jsx";
import { VideoControls } from "../components/video.jsx";

const FallClipScreen = ({ onBack }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [reviewState, setReviewState] = useState("needs_review"); // "needs_review" | "reviewed"
  const [classification, setClassification] = useState(null);

  const timelineEvents = [
    {
      time:"07:29",
      dotColor:"#e8430a",
      icon:<TimelineIcon><IconSittingOnBedLarge size={32}/></TimelineIcon>,
      label:"Sitting on edge of bed",
    },
    {
      time:"07:31",
      dotColor:"#e8430a",
      icon:<TimelineIcon><IconStanding size={26}/></TimelineIcon>,
      label:"Standing",
    },
    {
      time:"07:31",
      dotColor:"#e8430a",
      icon:<TimelineIcon><IconLayingOnFloor size={22}/></TimelineIcon>,
      label:"Laying on floor",
    },
    {
      time:"07:32",
      dotColor:"#4cd68a",
      icon:<TimelineIcon><IconStaffEnter size={38}/></TimelineIcon>,
      label:"Staff enters room",
      isLast:true,
    },
  ];

  const handleClassify = (val) => {
    setClassification(val);
    setReviewState("reviewed");
  };

  return (
    <div style={{
      position:"absolute", inset:0, zIndex:15,
      background:"#13151a",
      display:"flex", flexDirection:"column",
      animation:"slideInRight 0.3s cubic-bezier(0.32,0.72,0,1)",
      fontFamily:"'SF Pro Display',system-ui,-apple-system",
    }}>

      {/* ── Scrollable content ── */}
      <div style={{ flex:1, overflowY:"auto" }}>

        {/* ── Video player ── */}
        <div style={{
          position:"relative",
          height:240, background:"#8da5bc",
          flexShrink:0,
        }}>
          <ThermalView/>
          <VideoControls isPlaying={isPlaying} onToggle={()=>setIsPlaying(p=>!p)}/>
          {/* scrubber at bottom */}
          <div style={{
            position:"absolute", bottom:0, left:0, right:0,
            background:"linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)",
            padding:"20px 14px 10px",
          }}>
            <div style={{
              height:3, background:"rgba(255,255,255,0.25)",
              borderRadius:2, position:"relative",
            }}>
              <div style={{
                width:"38%", height:"100%",
                background:"white", borderRadius:2,
              }}/>
              <div style={{
                position:"absolute", left:"38%", top:"50%",
                transform:"translate(-50%,-50%)",
                width:12, height:12, borderRadius:"50%",
                background:"white",
                boxShadow:"0 0 6px rgba(0,0,0,0.4)",
              }}/>
            </div>
          </div>
        </div>

        {/* ── Content below video ── */}
        <div style={{ padding:"14px 16px 30px" }}>

          {/* Date + time row */}
          <div style={{
            display:"flex", alignItems:"center", justifyContent:"space-between",
            marginBottom:14,
          }}>
            <div style={{ display:"flex", alignItems:"center", gap:6 }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="1" y="2" width="12" height="11" rx="2" stroke="rgba(255,255,255,0.5)" strokeWidth="1.4"/>
                <path d="M1 5H13" stroke="rgba(255,255,255,0.5)" strokeWidth="1.4"/>
                <rect x="4" y="0.5" width="1.5" height="3" rx="0.75" fill="rgba(255,255,255,0.5)"/>
                <rect x="8.5" y="0.5" width="1.5" height="3" rx="0.75" fill="rgba(255,255,255,0.5)"/>
              </svg>
              <span style={{ color:"rgba(255,255,255,0.85)", fontSize:15, fontWeight:"600" }}>Aug 29th</span>
            </div>
            <div style={{ display:"flex", alignItems:"center", gap:6 }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" stroke="rgba(255,255,255,0.5)" strokeWidth="1.4"/>
                <path d="M7 4V7L9 9" stroke="rgba(255,255,255,0.5)" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
              <span style={{ color:"rgba(255,255,255,0.85)", fontSize:15, fontWeight:"600" }}>07:02 AM</span>
            </div>
          </div>

          {/* ── STATE: needs review ── */}
          {reviewState === "needs_review" && (
            <>
              {/* tags row */}
              <div style={{
                display:"flex", alignItems:"center", justifyContent:"space-between",
                marginBottom:14,
              }}>
                <div style={{
                  display:"inline-flex", alignItems:"center", gap:6,
                  border:"1.5px dashed rgba(255,255,255,0.35)",
                  borderRadius:20, padding:"5px 12px",
                }}>
                  <span style={{ color:"rgba(255,255,255,0.75)", fontSize:13, fontWeight:"600" }}>Fall</span>
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <circle cx="6.5" cy="6.5" r="6" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2"/>
                    <text x="6.5" y="10" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.55)" fontWeight="bold">?</text>
                  </svg>
                </div>
                <div style={{
                  background:"#d4860a", borderRadius:20, padding:"6px 14px",
                  boxShadow:"0 2px 10px rgba(212,134,10,0.4)",
                }}>
                  <span style={{ color:"white", fontSize:13, fontWeight:"700" }}>Needs review</span>
                </div>
              </div>

              {/* question */}
              <div style={{
                color:"white", fontSize:16, fontWeight:"700",
                marginBottom:12, letterSpacing:-0.2,
              }}>
                Please review the clip. What happened?
              </div>

              {/* 2×2 classification grid */}
              <div style={{
                display:"grid", gridTemplateColumns:"1fr 1fr",
                gap:9, marginBottom:18,
              }}>
                {["Fall","Not a fall","Uncertain","Safe to ground"].map(opt=>(
                  <button key={opt} onClick={()=>handleClassify(opt)} style={{
                    background:"#252830",
                    border:"1.5px solid rgba(255,255,255,0.1)",
                    borderRadius:12, padding:"14px 8px",
                    cursor:"pointer", color:"white",
                    fontSize:15, fontWeight:"600",
                    textAlign:"center",
                    transition:"background 0.12s",
                  }}>
                    {opt}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* ── STATE: reviewed ── */}
          {reviewState === "reviewed" && (
            <div style={{
              display:"flex", alignItems:"center", flexWrap:"wrap",
              gap:8, marginBottom:16,
            }}>
              {/* Fall red badge */}
              <div style={{
                background:"#c0280a", borderRadius:20,
                padding:"5px 12px",
              }}>
                <span style={{ color:"white", fontSize:13, fontWeight:"700" }}>Fall</span>
              </div>
              {/* classification green badge */}
              <div style={{
                background:"#1a7a3a", border:"1.5px solid #2ea855",
                borderRadius:20, padding:"5px 12px",
              }}>
                <span style={{ color:"white", fontSize:13, fontWeight:"700" }}>
                  {classification || "Without injury"}
                </span>
              </div>
              {/* Edit */}
              <button onClick={()=>setReviewState("needs_review")} style={{
                background:"#252830",
                border:"1.5px solid rgba(255,255,255,0.12)",
                borderRadius:20, padding:"5px 12px",
                cursor:"pointer", display:"flex", alignItems:"center", gap:5,
              }}>
                <svg width="12" height="12" viewBox="0 0 13 13" fill="none">
                  <path d="M8.5 2L11 4.5L4 11.5H1.5V9L8.5 2Z"
                    stroke="rgba(255,255,255,0.7)" strokeWidth="1.4"
                    strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{ color:"rgba(255,255,255,0.7)", fontSize:13, fontWeight:"600" }}>Edit</span>
              </button>
              {/* Reviewed ✓ */}
              <div style={{
                marginLeft:"auto",
                display:"flex", alignItems:"center", gap:5,
              }}>
                <span style={{ color:"rgba(255,255,255,0.5)", fontSize:13, fontWeight:"500" }}>Reviewed</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" stroke="rgba(255,255,255,0.35)" strokeWidth="1.4"/>
                  <path d="M4.5 8L7 10.5L11.5 5.5"
                    stroke="rgba(255,255,255,0.6)" strokeWidth="1.6"
                    strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          )}

          {/* ── Stats row ── */}
          <div style={{
            display:"grid", gridTemplateColumns:"1fr 1fr",
            gap:12, marginBottom:22,
          }}>
            {[
              {
                label:"Reaction time",
                value:"10s",
                icon:(
                  <svg width="18" height="22" viewBox="0 0 18 26" fill="none">
                    <circle cx="9" cy="4" r="3.5" fill="rgba(255,255,255,0.65)"/>
                    <path d="M9 9 L6 18 L3 24" stroke="rgba(255,255,255,0.65)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                    <path d="M9 9 L12 18 L15 24" stroke="rgba(255,255,255,0.65)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                    <path d="M5 14 L13 14" stroke="rgba(255,255,255,0.65)" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                label:"Time on floor",
                value:"11m",
                icon:(
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="8.5" stroke="rgba(255,255,255,0.65)" strokeWidth="1.6"/>
                    <path d="M10 5.5V10L13 12.5"
                      stroke="rgba(255,255,255,0.65)" strokeWidth="1.8"
                      strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
            ].map(stat=>(
              <div key={stat.label} style={{
                background:"#1c1f27",
                borderRadius:14, padding:"12px 14px",
                border:"1px solid rgba(255,255,255,0.06)",
              }}>
                <div style={{
                  color:"rgba(255,255,255,0.45)", fontSize:12,
                  fontWeight:"500", marginBottom:8,
                }}>
                  {stat.label}
                </div>
                <div style={{
                  display:"flex", alignItems:"center", gap:8,
                }}>
                  {stat.icon}
                  <span style={{
                    color:"white", fontSize:22, fontWeight:"700",
                    letterSpacing:-0.5,
                  }}>
                    {stat.value}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* ── Timeline ── */}
          <div style={{ paddingLeft:0 }}>
            {timelineEvents.map((ev, i)=>(
              <div key={i} style={{
                display:"flex", alignItems:"flex-start",
                gap:0, position:"relative",
              }}>
                {/* dot + connector column */}
                <div style={{
                  width:44, display:"flex",
                  flexDirection:"column", alignItems:"center",
                  flexShrink:0,
                }}>
                  {/* connector line above */}
                  {i > 0 && (
                    <div style={{
                      width:2, height:20,
                      background: i === timelineEvents.length-1
                        ? "#4cd68a"
                        : "rgba(255,255,255,0.1)",
                      marginBottom:-2,
                    }}/>
                  )}
                  <div style={{
                    width:12, height:12, borderRadius:"50%",
                    background:ev.dotColor,
                    boxShadow:`0 0 8px ${ev.dotColor}88`,
                    flexShrink:0, zIndex:1,
                    marginTop: i === 0 ? 0 : 0,
                  }}/>
                  {/* connector line below */}
                  {!ev.isLast && (
                    <div style={{
                      width:2, flex:1, minHeight:22,
                      background:"rgba(255,255,255,0.1)",
                    }}/>
                  )}
                  {ev.isLast && (
                    <>
                      <div style={{ width:2, height:16, background:"#4cd68a" }}/>
                      <div style={{ width:12, height:12, borderRadius:"50%", background:"#4cd68a", boxShadow:"0 0 8px rgba(76,214,138,0.5)" }}/>
                    </>
                  )}
                </div>

                {/* event content */}
                <div style={{
                  display:"flex", alignItems:"center",
                  gap:12, paddingBottom: ev.isLast ? 6 : 20,
                  flex:1,
                }}>
                  <span style={{
                    color:"rgba(255,255,255,0.45)", fontSize:13,
                    fontWeight:"500", minWidth:38,
                    fontVariantNumeric:"tabular-nums",
                  }}>
                    {ev.time}
                  </span>
                  {ev.icon}
                  <span style={{
                    color:"white", fontSize:15, fontWeight:"600",
                    letterSpacing:-0.1,
                  }}>
                    {ev.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Back button (floating bottom) ── */}
      <div style={{
        position:"absolute", top:0, left:0, right:0,
        height:52, display:"flex", alignItems:"flex-end",
        padding:"0 14px 8px",
        background:"linear-gradient(to bottom,rgba(19,21,26,0) 0%,rgba(19,21,26,0) 100%)",
        pointerEvents:"none",
      }}>
        <button onClick={onBack} style={{
          background:"rgba(19,21,26,0.7)",
          backdropFilter:"blur(10px)",
          border:"1px solid rgba(255,255,255,0.1)",
          borderRadius:20, padding:"6px 14px 6px 10px",
          cursor:"pointer", display:"flex", alignItems:"center", gap:6,
          pointerEvents:"all",
        }}>
          <svg width="16" height="13" viewBox="0 0 16 13" fill="none">
            <path d="M14 6.5H2M7 1L2 6.5L7 12"
              stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span style={{ color:"white", fontSize:13, fontWeight:"600" }}>Back</span>
        </button>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════
   OVERVIEW (rooms list)
══════════════════════════════════════ */

export { FallClipScreen };
