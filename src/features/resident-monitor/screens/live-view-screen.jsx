import { ThermalViewLive } from "../components/thermal.jsx";
import { IconArrowLeft } from "../components/ui-icons.jsx";

const LiveViewScreen = ({ onBack }) => (
  <div style={{position:"absolute",inset:0,zIndex:25,background:"#08090b",display:"flex",flexDirection:"column",animation:"slideInRight 0.3s cubic-bezier(0.32,0.72,0,1)",fontFamily:"'SF Pro Display',system-ui,-apple-system"}}>
    <div style={{ height:52, flexShrink:0 }} />

    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 18px 18px",flexShrink:0}}>
      <button onClick={onBack} style={{background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:8,padding:0}}>
        <IconArrowLeft />
        <span style={{ color:"white", fontSize:20, fontWeight:"700", letterSpacing:-0.3 }}>122.2 — Live</span>
      </button>

      <div style={{display:"flex",alignItems:"center",gap:6,background:"#e8430a",borderRadius:20,padding:"6px 13px",boxShadow:"0 2px 10px rgba(232,67,10,0.45)"}}>
        <div style={{width:8,height:8,borderRadius:"50%",background:"white",animation:"pulse 1.1s ease-in-out infinite"}} />
        <span style={{ color:"white", fontSize:13, fontWeight:"700", letterSpacing:0.5 }}>LIVE</span>
      </div>
    </div>

    <div style={{margin:"0 14px",borderRadius:18,overflow:"hidden",height:214,background:"#8da5bc",flexShrink:0,boxShadow:"0 4px 28px rgba(0,0,0,0.55)"}}>
      <ThermalViewLive />
    </div>

    <div style={{margin:"14px 14px 0",background:"#1a1c20",borderRadius:16,padding:"14px 16px 16px",flexShrink:0}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
        <span style={{ color:"rgba(255,255,255,0.45)", fontSize:13, fontWeight:"500" }}>Event detected</span>
        <span style={{ color:"rgba(255,255,255,0.45)", fontSize:13, fontWeight:"500" }}>01:24</span>
      </div>
      <div style={{ display:"flex", alignItems:"center", gap:10 }}>
        <div style={{width:11,height:11,borderRadius:"50%",background:"#e8430a",boxShadow:"0 0 8px rgba(232,67,10,0.7)",flexShrink:0}} />
        <span style={{color:"white",fontSize:17,fontWeight:"700",letterSpacing:-0.2}}>Alarm — Sitting on bed edge</span>
      </div>
    </div>

    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,padding:"12px 14px 0"}}>
      <button onClick={onBack} style={{background:"#e8430a",border:"none",borderRadius:16,padding:"17px 12px",cursor:"pointer",color:"white",fontWeight:"700",fontSize:17,letterSpacing:-0.2,boxShadow:"0 4px 16px rgba(232,67,10,0.4)"}}>
        On my way
      </button>
      <button onClick={onBack} style={{background:"#252830",border:"none",borderRadius:16,padding:"17px 12px",cursor:"pointer",color:"white",fontWeight:"700",fontSize:17,letterSpacing:-0.2}}>
        Dismiss
      </button>
    </div>
  </div>
);

export { LiveViewScreen };
