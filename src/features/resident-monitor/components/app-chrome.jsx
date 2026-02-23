import {
  IconAppGrid,
  IconChevronDown,
  IconStatusSignal,
  IconStatusWifi,
} from "./ui-icons.jsx";

const PhoneStatusBar = ({ time = "15.25" }) => (
  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"14px 28px 0",flexShrink:0,zIndex:2}}>
    <span style={{color:"white",fontSize:17,fontWeight:"600",letterSpacing:-0.3}}>{time}</span>
    <div style={{display:"flex",gap:7,alignItems:"center"}}>
      <IconStatusSignal />
      <IconStatusWifi />
      <div style={{width:30,height:15,border:"1.5px solid rgba(255,255,255,0.55)",borderRadius:4,display:"flex",alignItems:"center",padding:"2px 2px"}}>
        <div style={{width:"52%",height:"100%",background:"white",borderRadius:2}} />
      </div>
    </div>
  </div>
);

const OverviewHeader = () => (
  <div style={{padding:"10px 16px 8px",flexShrink:0,zIndex:2}}>
    <div style={{display:"flex",alignItems:"center",gap:8}}>
      <div style={{width:30,height:30,background:"white",borderRadius:7,display:"flex",alignItems:"center",justifyContent:"center"}}>
        <IconAppGrid />
      </div>
      <span style={{color:"white",fontSize:22,fontWeight:"700",letterSpacing:-0.5}}>All residents</span>
      <IconChevronDown />
    </div>
  </div>
);

export { OverviewHeader, PhoneStatusBar };
