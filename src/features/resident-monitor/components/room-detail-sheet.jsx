import { IconFalling, IconInBed, IconStanding } from "./icons.jsx";

const SleepChart = () => {
  const bars=[{x:2,w:3},{x:6,w:8},{x:15,w:5},{x:22,w:10},{x:33,w:4},{x:38,w:3},{x:42,w:6},{x:49,w:4},{x:54,w:5},{x:60,w:8},{x:69,w:4},{x:74,w:5},{x:80,w:3},{x:85,w:8}];
  return (
    <div style={{background:"#1e2023",borderRadius:12,padding:"12px 14px 10px"}}>
      <div style={{display:"flex",gap:14,marginBottom:10}}>
        {[["#8b5cf6","Calm: 12 hours"],["#ec4899","Restless: 0 hours"]].map(([c,l])=>(
          <div key={l} style={{display:"flex",alignItems:"center",gap:5}}>
            <div style={{width:10,height:10,borderRadius:"50%",background:c}}/>
            <span style={{color:"rgba(255,255,255,0.8)",fontSize:12}}>{l}</span>
          </div>
        ))}
      </div>
      <div style={{position:"relative",height:52,marginBottom:6}}>
        <svg width="100%" height="52" viewBox="0 0 100 52" preserveAspectRatio="none">
          {bars.map((b,i)=><rect key={i} x={`${b.x}%`} y="0" width={`${b.w}%`} height="52" fill={i%5===2?"#6d28d9":"#7c3aed"} rx="1" opacity={0.85+(i%3)*0.05}/>)}
          <rect x="94%" y="0" width="2" height="52" fill="#f5c842"/>
        </svg>
      </div>
      <div style={{display:"flex",justifyContent:"space-between"}}>
        {["02","06","10","Now"].map((t,i)=><span key={i} style={{color:i===3?"#f5c842":"rgba(255,255,255,0.45)",fontSize:11,fontWeight:i===3?"700":"400"}}>{t}</span>)}
      </div>
    </div>
  );
};

/* ══════════════════════════════════════
   ACTIVITY TILE
══════════════════════════════════════ */
const ActivityTile = ({ time, icon, isCurrent, duration, isAlarm, onClick }) => (
  <div onClick={onClick} style={{
    minWidth: isCurrent ? 90 : 68,
    background: isAlarm ? "#3d1a10" : isCurrent ? "#3a3d42" : "#282b30",
    borderRadius:12, padding:"8px 6px",
    display:"flex", flexDirection:"column", alignItems:"center", gap:4,
    border: isAlarm ? "1px solid rgba(232,98,26,0.45)" : isCurrent ? "1px solid rgba(255,255,255,0.1)" : "none",
    position:"relative", cursor: isAlarm||onClick ? "pointer" : "default",
    boxShadow: isAlarm ? "0 0 12px rgba(232,98,26,0.2)" : "none",
  }}>
    {isCurrent && !isAlarm && (
      <div style={{position:"absolute",top:0,left:0,right:0,background:"rgba(255,255,255,0.07)",borderRadius:"12px 12px 0 0",padding:"3px 0",textAlign:"center"}}>
        <span style={{color:"rgba(255,255,255,0.65)",fontSize:10,fontWeight:"600"}}>10:52 – now</span>
      </div>
    )}
    {!isCurrent && <span style={{color:"rgba(255,255,255,0.5)",fontSize:11}}>{time}</span>}
    <div style={{marginTop:isCurrent&&!isAlarm?14:0,height:42,display:"flex",alignItems:"center",justifyContent:"center"}}>{icon}</div>
    {isCurrent && duration && !isAlarm && <span style={{color:"white",fontSize:13,fontWeight:"700"}}>{duration}</span>}
    {isAlarm && <div style={{width:10,height:10,borderRadius:"50%",background:"#e8621a",boxShadow:"0 0 6px rgba(232,98,26,0.7)"}}/>}
  </div>
);

/* ══════════════════════════════════════
   ROOM DETAIL SHEET
══════════════════════════════════════ */
const RoomDetailSheet = ({ room, onClose, onOpenFallClip, onOpenSleep }) => (
  <div style={{position:"absolute",inset:0,zIndex:10,display:"flex",flexDirection:"column",justifyContent:"flex-end"}}>
    <div onClick={onClose} style={{position:"absolute",inset:0,background:"rgba(0,0,0,0.35)"}}/>
    <div style={{position:"relative",zIndex:1,background:"#6e7278",borderRadius:"22px 22px 0 0",maxHeight:"91%",overflowY:"auto",paddingBottom:100,animation:"slideUp 0.32s cubic-bezier(0.32,0.72,0,1)"}}>
      <div style={{display:"flex",justifyContent:"center",padding:"10px 0 4px"}}>
        <div style={{width:36,height:4,borderRadius:2,background:"rgba(255,255,255,0.3)"}}/>
      </div>
      <div style={{padding:"8px 18px 16px",display:"flex",alignItems:"flex-start",justifyContent:"space-between"}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <div style={{width:16,height:16,borderRadius:"50%",background:room.dotColor,boxShadow:`0 0 8px ${room.dotColor}`}}/>
          <div>
            <div style={{color:"white",fontSize:28,fontWeight:"700",lineHeight:1.1,fontFamily:"'SF Pro Display',system-ui"}}>{room.number}</div>
            <div style={{color:"rgba(255,255,255,0.7)",fontSize:15}}>{room.location}</div>
          </div>
        </div>
        <button onClick={onClose} style={{width:34,height:34,borderRadius:"50%",background:"rgba(255,255,255,0.22)",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M1 1L12 12M12 1L1 12" stroke="white" strokeWidth="2.2" strokeLinecap="round"/></svg>
        </button>
      </div>

      {/* Activity */}
      <div style={{padding:"0 14px 16px"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
          <div style={{display:"flex",alignItems:"center",gap:7}}>
            <IconStanding size={22}/><span style={{color:"white",fontSize:20,fontWeight:"700",fontFamily:"'SF Pro Display',system-ui"}}>Activity</span>
          </div>
          <span style={{color:"rgba(255,255,255,0.55)",fontSize:13}}>last 12 hours</span>
        </div>
        <div style={{background:"#1e2023",borderRadius:14,padding:"12px 8px 14px",overflowX:"auto"}}>
          <div style={{display:"flex",gap:6,alignItems:"stretch",minWidth:"max-content"}}>
            <ActivityTile time="08:12" icon={<IconInBed size={38}/>}/>
            <ActivityTile time="09:04" icon={<IconStanding size={24}/>}/>
            <ActivityTile time="10:52" icon={<IconFalling size={24}/>} isAlarm onClick={onOpenFallClip}/>
            <ActivityTile time="10:52" icon={<IconInBed size={38}/>} isCurrent duration="3h 33m"/>
          </div>
          <div style={{display:"flex",justifyContent:"center",marginTop:10}}>
            <svg width="24" height="10" viewBox="0 0 24 10" fill="none"><path d="M3 3L12 8L21 3" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>
      </div>
      <div style={{padding:"0 14px 16px"}}>
        <div
          onClick={onOpenSleep}
          style={{cursor:"pointer"}}
        >
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
            <div style={{display:"flex",alignItems:"center",gap:7}}>
              <span style={{color:"white",fontSize:20,letterSpacing:-1}}>z<sup style={{fontSize:13}}>z</sup></span>
              <span style={{color:"white",fontSize:20,fontWeight:"700",fontFamily:"'SF Pro Display',system-ui"}}>Sleep</span>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:6}}>
              <span style={{color:"rgba(255,255,255,0.55)",fontSize:13}}>Last 24 hours</span>
              <svg width="7" height="12" viewBox="0 0 7 12" fill="none"><path d="M1 1L6 6L1 11" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </div>
          <SleepChart/>
        </div>
      </div>
    </div>
  </div>
);

export { RoomDetailSheet };
