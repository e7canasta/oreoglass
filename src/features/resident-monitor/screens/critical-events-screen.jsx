import { CLIPS } from "../data/constants.js";
import { ThermalThumb, ThermalView } from "../components/thermal.jsx";

const CriticalEventsScreen = ({ onBack, onOpenClip }) => {
  const featured = CLIPS[0];
  return (
    <div style={{
      position:"absolute", inset:0, zIndex:15,
      background:"#10131a",
      display:"flex", flexDirection:"column",
      animation:"slideInRight 0.3s cubic-bezier(0.32,0.72,0,1)",
      fontFamily:"'SF Pro Display',system-ui,-apple-system",
    }}>

      {/* ── Status bar space ── */}
      <div style={{ height:52, flexShrink:0 }}/>

      {/* ── Header ── */}
      <div style={{
        display:"flex", alignItems:"center", justifyContent:"space-between",
        padding:"0 18px 16px", flexShrink:0,
      }}>
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          {/* red dot */}
          <div style={{
            width:12, height:12, borderRadius:"50%",
            background:"#e8430a",
            boxShadow:"0 0 8px rgba(232,67,10,0.6)",
          }}/>
          <span style={{
            color:"white", fontSize:20, fontWeight:"700", letterSpacing:-0.3,
          }}>
            Critical events
          </span>
        </div>
        <button onClick={onBack} style={{
          background:"none", border:"none", cursor:"pointer", padding:4,
        }}>
          <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
            <path d="M20 9H2M9 2L2 9L9 16"
              stroke="rgba(255,255,255,0.65)" strokeWidth="2.4"
              strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Scrollable */}
      <div style={{ flex:1, overflowY:"auto", padding:"0 14px 30px" }}>

        {/* ── Featured clip hero ── */}
        <div
          onClick={()=> onOpenClip && onOpenClip(featured)}
          style={{
            borderRadius:16, overflow:"hidden",
            marginBottom:14, cursor:"pointer",
            boxShadow:"0 6px 28px rgba(0,0,0,0.5)",
            position:"relative", height:192,
            background:"#8da5bc",
          }}
        >
          {/* full-size thermal */}
          <div style={{ position:"absolute", inset:0 }}>
            <ThermalView/>
          </div>
          {/* gradient overlay for text legibility */}
          <div style={{
            position:"absolute", inset:0,
            background:"linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 55%)",
          }}/>
          {/* date + time */}
          <div style={{
            position:"absolute", bottom:12, left:14,
            display:"flex", alignItems:"center", gap:12,
          }}>
            <span style={{
              color:"rgba(255,255,255,0.7)", fontSize:13, fontWeight:"500",
            }}>
              {featured.date}
            </span>
            <span style={{
              color:"white", fontSize:13, fontWeight:"700", letterSpacing:0.2,
            }}>
              {featured.time}
            </span>
          </div>
        </div>

        {/* ── Clip list ── */}
        <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
          {CLIPS.map((clip, idx) => (
            <button
              key={clip.id}
              onClick={()=> onOpenClip && onOpenClip(clip)}
              style={{
                background:"#1a1e28",
                border:"1px solid rgba(255,255,255,0.07)",
                borderRadius:14,
                padding:"10px 14px 10px 10px",
                display:"flex", alignItems:"center", gap:12,
                cursor:"pointer", width:"100%",
                textAlign:"left",
              }}
            >
              {/* thumbnail */}
              <div style={{
                width:72, height:56,
                borderRadius:10, overflow:"hidden",
                flexShrink:0, background:"#8da5bc",
                position:"relative",
              }}>
                <ThermalThumb variant={idx}/>
                {/* play button overlay */}
                <div style={{
                  position:"absolute", inset:0,
                  display:"flex", alignItems:"center", justifyContent:"center",
                }}>
                  <div style={{
                    width:26, height:26, borderRadius:"50%",
                    background:"rgba(255,255,255,0.22)",
                    backdropFilter:"blur(4px)",
                    border:"1.5px solid rgba(255,255,255,0.45)",
                    display:"flex", alignItems:"center", justifyContent:"center",
                  }}>
                    <svg width="9" height="11" viewBox="0 0 9 11" fill="none">
                      <path d="M1 1L8 5.5L1 10V1Z" fill="white"/>
                    </svg>
                  </div>
                </div>
                {/* orange badge dot on thumb */}
                <div style={{
                  position:"absolute", top:5, left:5,
                  width:10, height:10, borderRadius:"50%",
                  background:"#e8430a",
                  boxShadow:"0 0 6px rgba(232,67,10,0.8)",
                  border:"1.5px solid rgba(255,255,255,0.3)",
                }}/>
              </div>

              {/* text */}
              <div style={{ flex:1, minWidth:0 }}>
                {/* label badge */}
                <div style={{
                  display:"inline-flex", alignItems:"center",
                  background:clip.labelColor,
                  borderRadius:6,
                  padding:"3px 8px",
                  marginBottom:5,
                }}>
                  <span style={{
                    color:"white", fontSize:12, fontWeight:"700",
                    letterSpacing:0.1,
                  }}>
                    {clip.label}
                  </span>
                </div>
                {/* reaction time */}
                <div style={{
                  color:"rgba(255,255,255,0.55)", fontSize:13, fontWeight:"500",
                }}>
                  Reaction time {clip.reaction}
                </div>
              </div>

              {/* chevron */}
              <svg width="8" height="13" viewBox="0 0 8 13" fill="none" style={{ flexShrink:0 }}>
                <path d="M1 1L7 6.5L1 12"
                  stroke="rgba(255,255,255,0.3)" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
/* ══════════════════════════════════════
   SLEEP DETAIL SCREEN
══════════════════════════════════════ */

export { CriticalEventsScreen };
