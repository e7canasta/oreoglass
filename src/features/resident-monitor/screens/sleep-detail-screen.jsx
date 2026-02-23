import { useState } from "react";

import { InsightCard, Sleep24hBar, TrendsChart } from "../components/sleep-detail-widgets.jsx";
import { IconArrowLeft, IconChevronLeft, IconChevronRight } from "../components/ui-icons.jsx";

const SleepDetailScreen = ({ onBack }) => {
  const [period, setPeriod] = useState("week");
  const [weekNum, setWeekNum] = useState(23);

  return (
    <div style={{ position:"absolute", inset:0, zIndex:18, background:"#13151a", display:"flex", flexDirection:"column", animation:"slideInRight 0.3s cubic-bezier(0.32,0.72,0,1)", fontFamily:"'SF Pro Display',system-ui,-apple-system" }}>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"54px 18px 14px", flexShrink:0 }}>
        <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", padding:0 }}>
          <IconArrowLeft />
        </button>
        <div style={{ display:"flex", alignItems:"center", gap:6 }}>
          <span style={{ color:"rgba(255,255,255,0.6)", fontSize:18, letterSpacing:-1 }}>z<sup style={{ fontSize:11 }}>z</sup></span>
          <span style={{ color:"white", fontSize:20, fontWeight:"700", letterSpacing:-0.3 }}>Sleep</span>
        </div>
        <div style={{ width:36 }} />
      </div>

      <div style={{ flex:1, overflowY:"auto", padding:"0 14px 32px", display:"flex", flexDirection:"column", gap:20 }}>
        <Sleep24hBar />

        <div>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:14 }}>
            <span style={{ color:"white", fontSize:20, fontWeight:"800", letterSpacing:-0.4 }}>Trends</span>
            <div style={{ display:"flex", alignItems:"center", gap:7 }}>
              <div style={{ background:"#1c1f27", borderRadius:20, padding:3, display:"flex", border:"1px solid rgba(255,255,255,0.08)" }}>
                {["week", "month"].map((p) => (
                  <button key={p} onClick={() => setPeriod(p)} style={{ background:period===p?"#2d3245":"none", border:"none", borderRadius:17, padding:"5px 12px", cursor:"pointer", color:period===p?"white":"rgba(255,255,255,0.45)", fontSize:13, fontWeight:"600", textTransform:"capitalize" }}>
                    {p.charAt(0).toUpperCase() + p.slice(1)}
                  </button>
                ))}
              </div>
              <button onClick={() => setWeekNum((w) => w - 1)} style={{ width:30, height:30, borderRadius:"50%", background:"#1c1f27", border:"1px solid rgba(255,255,255,0.1)", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <IconChevronLeft />
              </button>
              <div style={{ background:"#1c1f27", border:"1px solid rgba(255,255,255,0.1)", borderRadius:10, padding:"5px 10px", minWidth:62, textAlign:"center" }}>
                <span style={{ color:"white", fontSize:12, fontWeight:"600" }}>{period === "week" ? `Week ${weekNum}` : `Month ${weekNum}`}</span>
              </div>
              <button onClick={() => setWeekNum((w) => w + 1)} style={{ width:30, height:30, borderRadius:"50%", background:"#1c1f27", border:"1px solid rgba(255,255,255,0.1)", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <IconChevronRight stroke="rgba(255,255,255,0.7)" />
              </button>
            </div>
          </div>
          <div style={{ background:"#1c1f27", borderRadius:16, padding:"14px 14px 16px", border:"1px solid rgba(255,255,255,0.06)" }}>
            <TrendsChart period={period} />
          </div>
        </div>

        <div>
          <div style={{ marginBottom:12 }}>
            <span style={{ color:"white", fontSize:18, fontWeight:"700", letterSpacing:-0.3 }}>Usual behaviour </span>
            <span style={{ color:"rgba(255,255,255,0.4)", fontSize:16, fontWeight:"400" }}>during the week</span>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:9 }}>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:9 }}>
              <InsightCard trend="down">3–6 wake-ups per night</InsightCard>
              <InsightCard trend="down">5–6 bathroom visits per night</InsightCard>
            </div>
            <InsightCard>Usually falls asleep around <strong>20:00</strong> and wakes around <strong>08:00</strong></InsightCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SleepDetailScreen };
