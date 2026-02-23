import { IconInBed, IconSittingOnBedLarge } from "./icons.jsx";

const RoomCard = ({ room, onSelect }) => {
  const isOut=room.status==="out";
  const isAlert=room.status==="alert";
  return (
    <button onClick={()=>onSelect(room)} style={{
      flex:"1 1 0",minWidth:0,
      background:isAlert?"linear-gradient(155deg,#7a2010,#5a1408)":isOut?"linear-gradient(155deg,#2a2e38,#1e2230)":"linear-gradient(155deg,#2d3f70,#1c2d58)",
      borderRadius:14,padding:"12px 8px 10px",
      border:isAlert?"1px solid rgba(232,98,26,0.35)":isOut?"1px solid rgba(255,255,255,0.06)":"1px solid rgba(80,120,220,0.18)",
      cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:6,
      boxShadow:isAlert?"0 0 16px rgba(180,40,10,0.35)":"none",
    }}>
      <span style={{color:"white",fontSize:18,fontWeight:"700",fontFamily:"'SF Pro Display',system-ui"}}>{room.number}</span>
      {isAlert?(
        <div style={{height:50,display:"flex",alignItems:"center",justifyContent:"center"}}><IconSittingOnBedLarge size={38}/></div>
      ):isOut?(
        <div style={{position:"relative",width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}}>
          <div style={{background:"rgba(0,0,0,0.45)",borderRadius:7,padding:"4px 0",textAlign:"center",width:"90%",marginBottom:4}}>
            <span style={{color:"white",fontSize:11,fontWeight:"700"}}>→ out</span>
          </div>
          <IconInBed size={48} color="rgba(255,255,255,0.4)" accent="rgba(80,100,160,0.35)"/>
        </div>
      ):(
        <IconInBed size={52}/>
      )}
      <div style={{display:"flex",gap:5,alignItems:"center",height:22,marginTop:2}}>
        {room.dots.map((dot,i)=>(
          dot==="person"?(
            <div key={i} style={{width:22,height:22,borderRadius:"50%",background:"linear-gradient(145deg,#4cd68a,#29a85e)",display:"flex",alignItems:"center",justifyContent:"center"}}>
              <svg width="12" height="13" viewBox="0 0 14 16" fill="none"><circle cx="7" cy="4" r="3" fill="white"/><path d="M2 14c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none"/></svg>
            </div>
          ):(
            <div key={i} style={{width:13,height:13,borderRadius:"50%",background:dot==="yellow"?"#f5c842":dot==="orange"?"#e8621a":dot==="blue"?"#4a90e2":"#555",boxShadow:dot==="yellow"?"0 0 7px rgba(245,200,66,0.6)":dot==="orange"?"0 0 7px rgba(232,98,26,0.6)":dot==="blue"?"0 0 7px rgba(74,144,226,0.6)":"none"}}/>
          )
        ))}
      </div>
    </button>
  );
};

const Section = ({title,rooms,onSelect}) => (
  <div style={{background:"rgba(255,255,255,0.05)",borderRadius:18,padding:"14px 12px 12px",border:"1px solid rgba(255,255,255,0.07)"}}>
    <h2 style={{color:"white",fontSize:18,fontWeight:"700",margin:"0 0 12px 2px",fontFamily:"'SF Pro Display',system-ui"}}>{title}</h2>
    <div style={{display:"flex",gap:10}}>{rooms.map(r=><RoomCard key={r.number} room={r} onSelect={onSelect}/>)}</div>
  </div>
);

/* ══════════════════════════════════════
   DATA
══════════════════════════════════════ */

const CountdownBar = ({ seconds, total }) => (
  <div style={{
    position:"absolute",top:110,left:"50%",transform:"translateX(-50%)",
    background:"rgba(22,25,32,0.92)",borderRadius:24,padding:"10px 18px",
    border:"1px solid rgba(255,255,255,0.12)",backdropFilter:"blur(10px)",
    display:"flex",alignItems:"center",gap:10,zIndex:3,whiteSpace:"nowrap",
    boxShadow:"0 8px 24px rgba(0,0,0,0.5)",
  }}>
    <div style={{width:36,height:36,borderRadius:"50%",background:"rgba(232,67,10,0.2)",border:"2px solid #e8430a",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <span style={{color:"#e8430a",fontSize:14,fontWeight:"800"}}>{seconds}</span>
    </div>
    <span style={{color:"rgba(255,255,255,0.85)",fontSize:13,fontWeight:"600"}}>Alarm in {seconds}s</span>
    <div style={{width:60,height:4,background:"rgba(255,255,255,0.12)",borderRadius:2}}>
      <div style={{width:`${((total-seconds)/total)*100}%`,height:"100%",background:"#e8430a",borderRadius:2,transition:"width 1s linear"}}/>
    </div>
  </div>
);

/* ══════════════════════════════════════
   MAIN APP
══════════════════════════════════════ */

export { RoomCard, Section, CountdownBar };
