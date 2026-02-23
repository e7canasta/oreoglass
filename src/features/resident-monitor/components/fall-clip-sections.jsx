import {
  IconArrowLeft,
  IconCalendar,
  IconCheckCircle,
  IconClock,
  IconEdit,
  IconQuestionCircle,
  IconStatClock,
  IconStatReaction,
} from "./ui-icons.jsx";

const FallClipMetaRow = () => (
  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14}}>
    <div style={{ display:"flex", alignItems:"center", gap:6 }}>
      <IconCalendar />
      <span style={{ color:"rgba(255,255,255,0.85)", fontSize:15, fontWeight:"600" }}>Aug 29th</span>
    </div>
    <div style={{ display:"flex", alignItems:"center", gap:6 }}>
      <IconClock />
      <span style={{ color:"rgba(255,255,255,0.85)", fontSize:15, fontWeight:"600" }}>07:02 AM</span>
    </div>
  </div>
);

const FallClipNeedsReview = ({ onClassify }) => (
  <>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14}}>
      <div style={{display:"inline-flex",alignItems:"center",gap:6,border:"1.5px dashed rgba(255,255,255,0.35)",borderRadius:20,padding:"5px 12px"}}>
        <span style={{ color:"rgba(255,255,255,0.75)", fontSize:13, fontWeight:"600" }}>Fall</span>
        <IconQuestionCircle />
      </div>
      <div style={{ background:"#d4860a", borderRadius:20, padding:"6px 14px", boxShadow:"0 2px 10px rgba(212,134,10,0.4)" }}>
        <span style={{ color:"white", fontSize:13, fontWeight:"700" }}>Needs review</span>
      </div>
    </div>

    <div style={{color:"white",fontSize:16,fontWeight:"700",marginBottom:12,letterSpacing:-0.2}}>
      Please review the clip. What happened?
    </div>

    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:9,marginBottom:18}}>
      {["Fall", "Not a fall", "Uncertain", "Safe to ground"].map((opt) => (
        <button
          key={opt}
          onClick={() => onClassify(opt)}
          style={{
            background: "#252830",
            border: "1.5px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "14px 8px",
            cursor: "pointer",
            color: "white",
            fontSize: 15,
            fontWeight: "600",
            textAlign: "center",
            transition: "background 0.12s",
          }}
        >
          {opt}
        </button>
      ))}
    </div>
  </>
);

const FallClipReviewed = ({ classification, onEdit }) => (
  <div style={{display:"flex",alignItems:"center",flexWrap:"wrap",gap:8,marginBottom:16}}>
    <div style={{ background:"#c0280a", borderRadius:20, padding:"5px 12px" }}>
      <span style={{ color:"white", fontSize:13, fontWeight:"700" }}>Fall</span>
    </div>
    <div style={{ background:"#1a7a3a", border:"1.5px solid #2ea855", borderRadius:20, padding:"5px 12px" }}>
      <span style={{ color:"white", fontSize:13, fontWeight:"700" }}>{classification || "Without injury"}</span>
    </div>
    <button onClick={onEdit} style={{background:"#252830",border:"1.5px solid rgba(255,255,255,0.12)",borderRadius:20,padding:"5px 12px",cursor:"pointer",display:"flex",alignItems:"center",gap:5}}>
      <IconEdit />
      <span style={{ color:"rgba(255,255,255,0.7)", fontSize:13, fontWeight:"600" }}>Edit</span>
    </button>
    <div style={{marginLeft:"auto",display:"flex",alignItems:"center",gap:5}}>
      <span style={{ color:"rgba(255,255,255,0.5)", fontSize:13, fontWeight:"500" }}>Reviewed</span>
      <IconCheckCircle />
    </div>
  </div>
);

const FallClipStats = () => {
  const stats = [
    { label: "Reaction time", value: "10s", icon: <IconStatReaction /> },
    { label: "Time on floor", value: "11m", icon: <IconStatClock /> },
  ];

  return (
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:22}}>
      {stats.map((stat) => (
        <div key={stat.label} style={{background:"#1c1f27",borderRadius:14,padding:"12px 14px",border:"1px solid rgba(255,255,255,0.06)"}}>
          <div style={{color:"rgba(255,255,255,0.45)",fontSize:12,fontWeight:"500",marginBottom:8}}>{stat.label}</div>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            {stat.icon}
            <span style={{color:"white",fontSize:22,fontWeight:"700",letterSpacing:-0.5}}>{stat.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

const FallClipTimeline = ({ events }) => (
  <div style={{ paddingLeft: 0 }}>
    {events.map((ev, i) => (
      <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:0, position:"relative" }}>
        <div style={{ width:44, display:"flex", flexDirection:"column", alignItems:"center", flexShrink:0 }}>
          {i > 0 && (
            <div
              style={{
                width: 2,
                height: 20,
                background: i === events.length - 1 ? "#4cd68a" : "rgba(255,255,255,0.1)",
                marginBottom: -2,
              }}
            />
          )}
          <div style={{width:12,height:12,borderRadius:"50%",background:ev.dotColor,boxShadow:`0 0 8px ${ev.dotColor}88`,flexShrink:0,zIndex:1}} />
          {!ev.isLast && <div style={{ width:2, flex:1, minHeight:22, background:"rgba(255,255,255,0.1)" }} />}
          {ev.isLast && (
            <>
              <div style={{ width: 2, height: 16, background: "#4cd68a" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#4cd68a", boxShadow: "0 0 8px rgba(76,214,138,0.5)" }} />
            </>
          )}
        </div>

        <div style={{display:"flex",alignItems:"center",gap:12,paddingBottom:ev.isLast?6:20,flex:1}}>
          <span style={{color:"rgba(255,255,255,0.45)",fontSize:13,fontWeight:"500",minWidth:38,fontVariantNumeric:"tabular-nums"}}>{ev.time}</span>
          {ev.icon}
          <span style={{ color: "white", fontSize: 15, fontWeight: "600", letterSpacing: -0.1 }}>{ev.label}</span>
        </div>
      </div>
    ))}
  </div>
);

const FallClipBackButton = ({ onBack }) => (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 52,
      display: "flex",
      alignItems: "flex-end",
      padding: "0 14px 8px",
      background: "linear-gradient(to bottom,rgba(19,21,26,0) 0%,rgba(19,21,26,0) 100%)",
      pointerEvents: "none",
    }}
  >
    <button
      onClick={onBack}
      style={{
        background: "rgba(19,21,26,0.7)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 20,
        padding: "6px 14px 6px 10px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 6,
        pointerEvents: "all",
      }}
    >
      <IconArrowLeft width={16} height={13} viewBox="0 0 16 13" strokeWidth={2} path="M14 6.5H2M7 1L2 6.5L7 12" />
      <span style={{ color: "white", fontSize: 13, fontWeight: "600" }}>Back</span>
    </button>
  </div>
);

export {
  FallClipBackButton,
  FallClipMetaRow,
  FallClipNeedsReview,
  FallClipReviewed,
  FallClipStats,
  FallClipTimeline,
};
