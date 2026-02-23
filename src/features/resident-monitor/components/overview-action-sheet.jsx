import { IconInBed } from "./icons.jsx";
import {
  IconArrowRight,
  IconOverviewTab,
  IconSettingsTab,
  IconSupportTab,
} from "./ui-icons";

const OverviewActionSheet = ({ onOpenCriticalEvents, onOpenLatestActivity }) => {
  const quickActions = [
    { label: "Fall clips", arrow: true, badge: 6, accent: "#1e3a6e", onClick: onOpenCriticalEvents },
    { label: "Mute for\n10 minutes", accent: "#1e3a6e" },
    { label: "Latest\nActivity", arrow: true, accent: "#1e3a6e", onClick: onOpenLatestActivity },
    { label: null, isBlank: true, accent: "#1e2230" },
  ];

  const tabs = [
    { label: "Overview", active: true, icon: <IconOverviewTab /> },
    { label: "Support", badge: 7, icon: <IconSupportTab /> },
    { label: "Settings", icon: <IconSettingsTab /> },
  ];

  return (
    <div style={{position:"absolute",bottom:0,left:0,right:0,zIndex:5,background:"rgba(22,25,32,0.97)",backdropFilter:"blur(20px)",borderRadius:"22px 22px 0 0",padding:"10px 14px 0",boxShadow:"0 -4px 40px rgba(0,0,0,0.65)",border:"1px solid rgba(255,255,255,0.09)"}}>
      <div style={{width:36,height:4,borderRadius:2,background:"rgba(255,255,255,0.22)",margin:"0 auto 14px"}} />
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:10}}>
        {quickActions.map((btn, i) => (
          <button
            key={i}
            onClick={btn.onClick}
            style={{
              background: `linear-gradient(145deg,${btn.accent},${btn.accent}cc)`,
              border: "none",
              borderRadius: 14,
              padding: "15px 14px",
              cursor: "pointer",
              color: "white",
              fontWeight: "700",
              fontSize: 15,
              fontFamily: "'SF Pro Display',system-ui",
              display: "flex",
              alignItems: btn.isBlank ? "center" : "flex-start",
              justifyContent: btn.isBlank ? "center" : "space-between",
              textAlign: "left",
              whiteSpace: "pre-wrap",
              lineHeight: 1.3,
              minHeight: 64,
              position: "relative",
              boxShadow: "0 4px 18px rgba(20,60,160,0.28)",
            }}
          >
            {btn.label && <span>{btn.label}</span>}
            {btn.badge && (
              <div style={{position:"absolute",bottom:10,left:14,width:22,height:22,borderRadius:"50%",background:"#e8621a",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <span style={{color:"white",fontSize:11,fontWeight:"800"}}>{btn.badge}</span>
              </div>
            )}
            {btn.isBlank && (
              <div style={{ opacity: 0.15 }}>
                <IconInBed size={32} />
              </div>
            )}
            {btn.arrow && <IconArrowRight />}
          </button>
        ))}
      </div>
      <div style={{display:"flex",justifyContent:"space-around",borderTop:"1px solid rgba(255,255,255,0.07)",paddingTop:10,paddingBottom:28}}>
        {tabs.map((tab) => (
          <button key={tab.label} style={{background:"none",border:"none",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:4,position:"relative"}}>
            {tab.badge && (
              <div style={{position:"absolute",top:-3,right:-5,width:17,height:17,borderRadius:"50%",background:"#e8621a",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <span style={{color:"white",fontSize:10,fontWeight:"700"}}>{tab.badge}</span>
              </div>
            )}
            {tab.icon}
            <span style={{color:tab.active?"white":"rgba(255,255,255,0.4)",fontSize:11,fontWeight:tab.active?"600":"400"}}>{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export { OverviewActionSheet };
