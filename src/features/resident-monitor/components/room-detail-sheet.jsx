import { IconFalling, IconInBed, IconStanding } from "./icons.jsx";
import { ActivityTile, SleepChart } from "./room-detail-widgets.jsx";
import { IconChevronRight, IconClose, IconWideChevronDown } from "./ui-icons/index.js";

const RoomDetailSheet = ({ room, onClose, onOpenFallClip, onOpenSleep }) => (
  <div style={{position:"absolute",inset:0,zIndex:10,display:"flex",flexDirection:"column",justifyContent:"flex-end"}}>
    <div onClick={onClose} style={{position:"absolute",inset:0,background:"rgba(0,0,0,0.35)"}} />
    <div style={{position:"relative",zIndex:1,background:"#6e7278",borderRadius:"22px 22px 0 0",maxHeight:"91%",overflowY:"auto",paddingBottom:100,animation:"slideUp 0.32s cubic-bezier(0.32,0.72,0,1)"}}>
      <div style={{display:"flex",justifyContent:"center",padding:"10px 0 4px"}}>
        <div style={{width:36,height:4,borderRadius:2,background:"rgba(255,255,255,0.3)"}} />
      </div>
      <div style={{padding:"8px 18px 16px",display:"flex",alignItems:"flex-start",justifyContent:"space-between"}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <div style={{width:16,height:16,borderRadius:"50%",background:room.dotColor,boxShadow:`0 0 8px ${room.dotColor}`}} />
          <div>
            <div style={{color:"white",fontSize:28,fontWeight:"700",lineHeight:1.1,fontFamily:"'SF Pro Display',system-ui"}}>{room.number}</div>
            <div style={{color:"rgba(255,255,255,0.7)",fontSize:15}}>{room.location}</div>
          </div>
        </div>
        <button onClick={onClose} style={{width:34,height:34,borderRadius:"50%",background:"rgba(255,255,255,0.22)",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>
          <IconClose strokeWidth={2.2} />
        </button>
      </div>

      <div style={{padding:"0 14px 16px"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
          <div style={{display:"flex",alignItems:"center",gap:7}}>
            <IconStanding size={22} />
            <span style={{color:"white",fontSize:20,fontWeight:"700",fontFamily:"'SF Pro Display',system-ui"}}>Activity</span>
          </div>
          <span style={{color:"rgba(255,255,255,0.55)",fontSize:13}}>last 12 hours</span>
        </div>
        <div style={{background:"#1e2023",borderRadius:14,padding:"12px 8px 14px",overflowX:"auto"}}>
          <div style={{display:"flex",gap:6,alignItems:"stretch",minWidth:"max-content"}}>
            <ActivityTile time="08:12" icon={<IconInBed size={38} />} />
            <ActivityTile time="09:04" icon={<IconStanding size={24} />} />
            <ActivityTile time="10:52" icon={<IconFalling size={24} />} isAlarm onClick={onOpenFallClip} />
            <ActivityTile time="10:52" icon={<IconInBed size={38} />} isCurrent duration="3h 33m" />
          </div>
          <div style={{display:"flex",justifyContent:"center",marginTop:10}}>
            <IconWideChevronDown />
          </div>
        </div>
      </div>

      <div style={{padding:"0 14px 16px"}}>
        <div onClick={onOpenSleep} style={{cursor:"pointer"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
            <div style={{display:"flex",alignItems:"center",gap:7}}>
              <span style={{color:"white",fontSize:20,letterSpacing:-1}}>z<sup style={{fontSize:13}}>z</sup></span>
              <span style={{color:"white",fontSize:20,fontWeight:"700",fontFamily:"'SF Pro Display',system-ui"}}>Sleep</span>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:6}}>
              <span style={{color:"rgba(255,255,255,0.55)",fontSize:13}}>Last 24 hours</span>
              <IconChevronRight />
            </div>
          </div>
          <SleepChart />
        </div>
      </div>
    </div>
  </div>
);

export { RoomDetailSheet };
