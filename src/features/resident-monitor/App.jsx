import { AlarmSheet } from "./components/alarm-sheet.jsx";
import { OverviewHeader, PhoneStatusBar } from "./components/app-chrome.jsx";
import { OverviewActionSheet } from "./components/overview-action-sheet.jsx";
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

      <div style={{width:375,height:812,background:"#0c0e12",borderRadius:44,overflow:"hidden",position:"relative",display:"flex",flexDirection:"column",boxShadow:"0 60px 120px rgba(0,0,0,0.9),inset 0 0 0 1.5px rgba(255,255,255,0.12)"}}>
        <PhoneStatusBar />
        <OverviewHeader />

        <div style={{flex:1,overflowY:"auto",padding:"4px 12px",display:"flex",flexDirection:"column",gap:12,paddingBottom:160}}>
          {Object.entries(ROOMS).map(([title, rooms]) => (
            <Section key={title} title={title} rooms={rooms} onSelect={actions.selectRoom} />
          ))}
        </div>

        {!showAlarm && countdown > 0 && !selectedRoom && !screen && (
          <CountdownBar seconds={countdown} total={8} />
        )}

        {!showAlarm && countdown === 0 && !alarmTriggered && (
          <button onClick={actions.showAlarm} style={{position:"absolute",bottom:140,left:"50%",transform:"translateX(-50%)",background:"#e8430a",border:"none",borderRadius:14,padding:"12px 24px",color:"white",fontWeight:"700",fontSize:15,cursor:"pointer",zIndex:4}}>
            Trigger Alarm
          </button>
        )}

        {!selectedRoom && !screen && !showAlarm && (
          <OverviewActionSheet
            onOpenCriticalEvents={actions.openCriticalEvents}
            onOpenLatestActivity={() => actions.selectRoom(ROOMS["Bellevue"][1])}
          />
        )}

        {selectedRoom && !screen && !showAlarm && (
          <RoomDetailSheet
            room={selectedRoom}
            onClose={actions.closeRoom}
            onOpenFallClip={actions.openFallClip}
            onOpenSleep={actions.openSleepDetail}
          />
        )}

        <ScreenRouter
          screen={screen}
          onBack={actions.closeScreen}
          onCloseLive={actions.closeLiveView}
          onOpenClipFromCriticalEvents={actions.openFallReview}
        />

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
