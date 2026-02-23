import { AlarmSheet } from "./components/alarm-sheet.jsx";
import { IconInBed } from "./components/icons.jsx";
import { CountdownBar, Section } from "./components/room-overview.jsx";
import { RoomDetailSheet } from "./components/room-detail-sheet.jsx";
import { ROOMS } from "./data/constants.js";
import { ScreenRouter } from "./navigation/screen-router.jsx";
import { useResidentMonitorState } from "./state/use-resident-monitor-state.js";

export default function App() {
  const { state, actions } = useResidentMonitorState();
  const {
    selectedRoom,
    screen,
    showAlarm,
    countdown,
    secondsAgo,
    alarmTriggered,
  } = state;

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh",background:"#0a0a0a",fontFamily:"'SF Pro Display',system-ui,-apple-system"}}>
      <style>{`
        @keyframes slideUp{from{transform:translateY(100%);opacity:0}to{transform:translateY(0);opacity:1}}
        @keyframes slideInRight{from{transform:translateX(100%);opacity:0}to{transform:translateX(0);opacity:1}}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.4}}
        ::-webkit-scrollbar{display:none}
        *{-webkit-tap-highlight-color:transparent}
      `}</style>

      {/* Phone */}
      <div style={{width:375,height:812,background:"#0c0e12",borderRadius:44,overflow:"hidden",position:"relative",display:"flex",flexDirection:"column",boxShadow:"0 60px 120px rgba(0,0,0,0.9),inset 0 0 0 1.5px rgba(255,255,255,0.12)"}}>

        {/* Status bar */}
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"14px 28px 0",flexShrink:0,zIndex:2}}>
          <span style={{color:"white",fontSize:17,fontWeight:"600",letterSpacing:-0.3}}>15.25</span>
          <div style={{display:"flex",gap:7,alignItems:"center"}}>
            <svg width="18" height="13" viewBox="0 0 18 13" fill="white"><rect x="0" y="9" width="3.5" height="4" rx="0.5"/><rect x="4.5" y="6" width="3.5" height="7" rx="0.5"/><rect x="9" y="3" width="3.5" height="10" rx="0.5"/><rect x="13.5" y="0" width="3.5" height="13" rx="0.5"/></svg>
            <svg width="16" height="13" viewBox="0 0 16 13" fill="white"><path d="M8 2.4C10.8 2.4 13.3 3.6 15 5.5L16 4.4C14 2.2 11.1 0.8 8 0.8C4.9 0.8 2 2.2 0 4.4L1 5.5C2.7 3.6 5.2 2.4 8 2.4Z"/><path d="M8 5.6C9.9 5.6 11.6 6.4 12.8 7.7L13.8 6.6C12.3 5.0 10.3 4.0 8 4.0C5.7 4.0 3.7 5.0 2.2 6.6L3.2 7.7C4.4 6.4 6.1 5.6 8 5.6Z"/><circle cx="8" cy="11" r="2"/></svg>
            <div style={{width:30,height:15,border:"1.5px solid rgba(255,255,255,0.55)",borderRadius:4,display:"flex",alignItems:"center",padding:"2px 2px"}}>
              <div style={{width:"52%",height:"100%",background:"white",borderRadius:2}}/>
            </div>
          </div>
        </div>

        {/* Header */}
        <div style={{padding:"10px 16px 8px",flexShrink:0,zIndex:2}}>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            <div style={{width:30,height:30,background:"white",borderRadius:7,display:"flex",alignItems:"center",justifyContent:"center"}}>
              <svg width="17" height="17" viewBox="0 0 18 18" fill="none">
                <rect x="1" y="1" width="6.5" height="9" rx="1.5" fill="#1a2540"/><rect x="10" y="1" width="7" height="5.5" rx="1.5" fill="#1a2540"/>
                <rect x="1" y="12" width="6.5" height="5" rx="1.5" fill="#1a2540"/><rect x="10" y="9" width="7" height="8" rx="1.5" fill="#1a2540"/>
              </svg>
            </div>
            <span style={{color:"white",fontSize:22,fontWeight:"700",letterSpacing:-0.5}}>All residents</span>
            <svg width="13" height="8" viewBox="0 0 14 8" fill="none"><path d="M1 1L7 7L13 1" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" fill="none"/></svg>
          </div>
        </div>

        {/* Rooms */}
        <div style={{flex:1,overflowY:"auto",padding:"4px 12px",display:"flex",flexDirection:"column",gap:12,paddingBottom:160}}>
          {Object.entries(ROOMS).map(([title,rooms])=>(
            <Section key={title} title={title} rooms={rooms} onSelect={actions.selectRoom}/>
          ))}
        </div>

        {/* Countdown indicator */}
        {!showAlarm && countdown > 0 && !selectedRoom && !screen && (
          <CountdownBar seconds={countdown} total={8}/>
        )}

        {/* Trigger button fallback */}
        {!showAlarm && countdown === 0 && !alarmTriggered && (
          <button onClick={actions.showAlarm} style={{position:"absolute",bottom:140,left:"50%",transform:"translateX(-50%)",background:"#e8430a",border:"none",borderRadius:14,padding:"12px 24px",color:"white",fontWeight:"700",fontSize:15,cursor:"pointer",zIndex:4}}>
            Trigger Alarm
          </button>
        )}

        {/* Bottom action sheet */}
        {!selectedRoom && !screen && !showAlarm && (
          <div style={{position:"absolute",bottom:0,left:0,right:0,zIndex:5,background:"rgba(22,25,32,0.97)",backdropFilter:"blur(20px)",borderRadius:"22px 22px 0 0",padding:"10px 14px 0",boxShadow:"0 -4px 40px rgba(0,0,0,0.65)",border:"1px solid rgba(255,255,255,0.09)"}}>
            <div style={{width:36,height:4,borderRadius:2,background:"rgba(255,255,255,0.22)",margin:"0 auto 14px"}}/>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:10}}>
              {[
                {label:"Fall clips",arrow:true,badge:6,accent:"#1e3a6e",onClick:actions.openCriticalEvents},
                {label:"Mute for\n10 minutes",accent:"#1e3a6e"},
                {label:"Latest\nActivity",arrow:true,accent:"#1e3a6e",onClick:()=>actions.selectRoom(ROOMS["Bellevue"][1])},
                {label:null,isBlank:true,accent:"#1e2230"},
              ].map((btn,i)=>(
                <button key={i} onClick={btn.onClick} style={{background:`linear-gradient(145deg,${btn.accent},${btn.accent}cc)`,border:"none",borderRadius:14,padding:"15px 14px",cursor:"pointer",color:"white",fontWeight:"700",fontSize:15,fontFamily:"'SF Pro Display',system-ui",display:"flex",alignItems:btn.isBlank?"center":"flex-start",justifyContent:btn.isBlank?"center":"space-between",textAlign:"left",whiteSpace:"pre-wrap",lineHeight:1.3,minHeight:64,position:"relative",boxShadow:"0 4px 18px rgba(20,60,160,0.28)"}}>
                  {btn.label&&<span>{btn.label}</span>}
                  {btn.badge&&<div style={{position:"absolute",bottom:10,left:14,width:22,height:22,borderRadius:"50%",background:"#e8621a",display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{color:"white",fontSize:11,fontWeight:"800"}}>{btn.badge}</span></div>}
                  {btn.isBlank&&<div style={{opacity:0.15}}><IconInBed size={32}/></div>}
                  {btn.arrow&&<svg width="18" height="14" viewBox="0 0 18 14" fill="none"><path d="M1 7H17M11 1L17 7L11 13" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                </button>
              ))}
            </div>
            <div style={{display:"flex",justifyContent:"space-around",borderTop:"1px solid rgba(255,255,255,0.07)",paddingTop:10,paddingBottom:28}}>
              {[
                {label:"Overview",active:true,icon:<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="1" y="1" width="8" height="10" rx="2" fill="white"/><rect x="13" y="1" width="8" height="6" rx="2" fill="white" opacity="0.4"/><rect x="1" y="13" width="8" height="8" rx="2" fill="white" opacity="0.4"/><rect x="13" y="9" width="8" height="12" rx="2" fill="white" opacity="0.4"/></svg>},
                {label:"Support",badge:7,icon:<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="9" stroke="rgba(255,255,255,0.4)" strokeWidth="1.8"/><text x="11" y="15.5" textAnchor="middle" fontSize="12" fill="rgba(255,255,255,0.4)" fontWeight="bold">?</text></svg>},
                {label:"Settings",icon:<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="3" stroke="rgba(255,255,255,0.4)" strokeWidth="1.8"/><path d="M11 2v2M11 18v2M2 11h2M18 11h2M4.9 4.9l1.4 1.4M15.7 15.7l1.4 1.4M4.9 17.1l1.4-1.4M15.7 6.3l1.4-1.4" stroke="rgba(255,255,255,0.4)" strokeWidth="1.8" strokeLinecap="round"/></svg>},
              ].map(tab=>(
                <button key={tab.label} style={{background:"none",border:"none",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:4,position:"relative"}}>
                  {tab.badge&&<div style={{position:"absolute",top:-3,right:-5,width:17,height:17,borderRadius:"50%",background:"#e8621a",display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{color:"white",fontSize:10,fontWeight:"700"}}>{tab.badge}</span></div>}
                  {tab.icon}
                  <span style={{color:tab.active?"white":"rgba(255,255,255,0.4)",fontSize:11,fontWeight:tab.active?"600":"400"}}>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Room detail */}
        {selectedRoom && !screen && !showAlarm && (
          <RoomDetailSheet
            room={selectedRoom}
            onClose={actions.closeRoom}
            onOpenFallClip={actions.openFallClip}
            onOpenSleep={actions.openSleepDetail}
          />
        )}

        {/* App screen router */}
        <ScreenRouter
          screen={screen}
          onBack={actions.closeScreen}
          onCloseLive={actions.closeLiveView}
          onOpenClipFromCriticalEvents={actions.openFallReview}
        />

        {/* Alarm sheet */}
        {showAlarm && !screen && (
          <AlarmSheet
            secondsAgo={secondsAgo}
            onClose={actions.hideAlarm}
            onViewLive={actions.openLiveFromAlarm}
            onFallReview={actions.openFallReviewFromAlarm}
          />
        )}
      </div>
    </div>
  );
}
