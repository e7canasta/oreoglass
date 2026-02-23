import { useState } from "react";

const Sleep24hBar = () => {
  const blocks = [
    [2,18,false],[22,4,false],[30,2,true],[35,18,false],
    [56,2,true],[62,14,false],[78,3,false],
  ];
  const NOW_PCT = 68;
  const labels = ["20","00","04","08","12","16","20"];
  return (
    <div style={{ background:"#1c1f27", borderRadius:16, padding:"14px 14px 12px", border:"1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ marginBottom:12 }}>
        <span style={{ color:"white", fontSize:22, fontWeight:"800", letterSpacing:-0.3 }}>7 hours </span>
        <span style={{ color:"rgba(255,255,255,0.45)", fontSize:16 }}>of sleep in the past 24 hours</span>
      </div>
      <div style={{ position:"relative", marginBottom:2, height:16 }}>
        <div style={{ position:"absolute", left:`${NOW_PCT}%`, transform:"translateX(-50%)", color:"#f5c842", fontSize:12, fontWeight:"700" }}>Now</div>
      </div>
      <div style={{ position:"relative", height:48, background:"rgba(255,255,255,0.06)", borderRadius:10, marginBottom:10 }}>
        {blocks.map(([s,w,rest],i)=>(
          <div key={i} style={{ position:"absolute", left:`${s}%`, width:`${w}%`, top:0, bottom:0, background:rest?"#d946ef":"#8b5cf6", borderRadius:5, opacity:0.9 }}/>
        ))}
        <div style={{ position:"absolute", left:`${NOW_PCT}%`, top:-4, bottom:-4, width:2, background:"#f5c842", borderRadius:1 }}/>
      </div>
      <div style={{ display:"flex", justifyContent:"space-between", marginBottom:12 }}>
        {labels.map((t,i)=>(
          <span key={i} style={{ color:i===4?"#f5c842":"rgba(255,255,255,0.4)", fontSize:11, fontWeight:i===4?"700":"400" }}>{t}</span>
        ))}
      </div>
      <div style={{ display:"flex", gap:18 }}>
        {[["#8b5cf6","Calm","7 hours"],["#d946ef","Restless","0 hours"]].map(([c,l,v])=>(
          <div key={l} style={{ display:"flex", alignItems:"center", gap:6 }}>
            <div style={{ width:10, height:10, borderRadius:"50%", background:c }}/>
            <span style={{ color:"rgba(255,255,255,0.5)", fontSize:12 }}>{l}:</span>
            <span style={{ color:"rgba(255,255,255,0.8)", fontSize:12, fontWeight:"600" }}>{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const TrendsChart = ({ period }) => {
  const days = period==="week"
    ? [
        {label:"Today",    bars:[[16,26,false],[44,6,true]]},
        {label:"Sat 20th", bars:[[20,28,false],[50,10,false]]},
        {label:"Fri 19th", bars:[[18,26,false],[46,6,true]]},
        {label:"Thu 18th", bars:[[22,24,false]]},
        {label:"Wed 17th", bars:[[16,22,false],[42,4,true]]},
        {label:"Tue 16th", bars:[[20,28,false],[50,8,false]]},
        {label:"Mon 15th", bars:[[18,26,false]]},
      ]
    : [
        {label:"Week 23", bars:[[18,26,false],[46,6,true]]},
        {label:"Week 22", bars:[[20,24,false],[46,10,false]]},
        {label:"Week 21", bars:[[16,28,false],[46,4,true]]},
        {label:"Week 20", bars:[[22,22,false]]},
      ];
  return (
    <div style={{ display:"flex", flexDirection:"column", gap:7 }}>
      {days.map((day,i)=>(
        <div key={i} style={{ display:"flex", alignItems:"center", gap:10 }}>
          <span style={{ color:i===0?"#f5c842":"rgba(255,255,255,0.5)", fontSize:12, fontWeight:i===0?"700":"500", minWidth:58, textAlign:"right", flexShrink:0 }}>{day.label}</span>
          <div style={{ flex:1, height:26, background:"rgba(255,255,255,0.06)", borderRadius:8, position:"relative", overflow:"hidden" }}>
            {day.bars.map(([s,w,rest],j)=>(
              <div key={j} style={{ position:"absolute", left:`${s}%`, width:`${w}%`, top:3, bottom:3, background:rest?"#d946ef":"#8b5cf6", borderRadius:5, opacity:0.88 }}/>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const InsightCard = ({ children, trend }) => (
  <div style={{ background:"#1c1f27", border:"1px solid rgba(255,255,255,0.08)", borderRadius:14, padding:"13px 14px", display:"flex", alignItems:"center", justifyContent:"space-between", gap:10 }}>
    <span style={{ color:"white", fontSize:14, fontWeight:"500", lineHeight:1.4, flex:1 }}>{children}</span>
    {trend && (
      <div style={{ flexShrink:0, color:trend==="down"?"#4cd68a":"#f5c842" }}>
        {trend==="down"
          ? <svg width="20" height="14" viewBox="0 0 20 14" fill="none"><path d="M2 3L10 11L18 3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          : <svg width="20" height="14" viewBox="0 0 20 14" fill="none"><path d="M2 11L10 3L18 11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        }
      </div>
    )}
  </div>
);

const SleepDetailScreen = ({ onBack }) => {
  const [period, setPeriod] = useState("week");
  const [weekNum, setWeekNum] = useState(23);
  return (
    <div style={{ position:"absolute", inset:0, zIndex:18, background:"#13151a", display:"flex", flexDirection:"column", animation:"slideInRight 0.3s cubic-bezier(0.32,0.72,0,1)", fontFamily:"'SF Pro Display',system-ui,-apple-system" }}>
      {/* header */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"54px 18px 14px", flexShrink:0 }}>
        <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", padding:0 }}>
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
            <path d="M18 8H2M9 1L2 8L9 15" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div style={{ display:"flex", alignItems:"center", gap:6 }}>
          <span style={{ color:"rgba(255,255,255,0.6)", fontSize:18, letterSpacing:-1 }}>z<sup style={{ fontSize:11 }}>z</sup></span>
          <span style={{ color:"white", fontSize:20, fontWeight:"700", letterSpacing:-0.3 }}>Sleep</span>
        </div>
        <div style={{ width:36 }}/>
      </div>

      <div style={{ flex:1, overflowY:"auto", padding:"0 14px 32px", display:"flex", flexDirection:"column", gap:20 }}>
        {/* 24h bar */}
        <Sleep24hBar/>

        {/* Trends */}
        <div>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:14 }}>
            <span style={{ color:"white", fontSize:20, fontWeight:"800", letterSpacing:-0.4 }}>Trends</span>
            <div style={{ display:"flex", alignItems:"center", gap:7 }}>
              {/* toggle */}
              <div style={{ background:"#1c1f27", borderRadius:20, padding:3, display:"flex", border:"1px solid rgba(255,255,255,0.08)" }}>
                {["week","month"].map(p=>(
                  <button key={p} onClick={()=>setPeriod(p)} style={{ background:period===p?"#2d3245":"none", border:"none", borderRadius:17, padding:"5px 12px", cursor:"pointer", color:period===p?"white":"rgba(255,255,255,0.45)", fontSize:13, fontWeight:"600", textTransform:"capitalize" }}>
                    {p.charAt(0).toUpperCase()+p.slice(1)}
                  </button>
                ))}
              </div>
              {/* prev */}
              <button onClick={()=>setWeekNum(w=>w-1)} style={{ width:30, height:30, borderRadius:"50%", background:"#1c1f27", border:"1px solid rgba(255,255,255,0.1)", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <svg width="7" height="12" viewBox="0 0 7 12" fill="none"><path d="M6 1L1 6L6 11" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              {/* label */}
              <div style={{ background:"#1c1f27", border:"1px solid rgba(255,255,255,0.1)", borderRadius:10, padding:"5px 10px", minWidth:62, textAlign:"center" }}>
                <span style={{ color:"white", fontSize:12, fontWeight:"600" }}>{period==="week"?`Week ${weekNum}`:`Month ${weekNum}`}</span>
              </div>
              {/* next */}
              <button onClick={()=>setWeekNum(w=>w+1)} style={{ width:30, height:30, borderRadius:"50%", background:"#1c1f27", border:"1px solid rgba(255,255,255,0.1)", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <svg width="7" height="12" viewBox="0 0 7 12" fill="none"><path d="M1 1L6 6L1 11" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
          <div style={{ background:"#1c1f27", borderRadius:16, padding:"14px 14px 16px", border:"1px solid rgba(255,255,255,0.06)" }}>
            <TrendsChart period={period}/>
          </div>
        </div>

        {/* Usual behaviour */}
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

/* ══════════════════════════════════════
   SLEEP CHART (inline in room detail)
══════════════════════════════════════ */

export { SleepDetailScreen };
