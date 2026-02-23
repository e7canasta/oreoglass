import { ThermalThumb, ThermalView } from "./thermal.jsx";
import { IconArrowLeft, IconChevronRight, IconPlay } from "./ui-icons/index.js";

const CriticalEventsHeader = ({ onBack }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 18px 16px",
      flexShrink: 0,
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div
        style={{
          width: 12,
          height: 12,
          borderRadius: "50%",
          background: "#e8430a",
          boxShadow: "0 0 8px rgba(232,67,10,0.6)",
        }}
      />
      <span style={{ color: "white", fontSize: 20, fontWeight: "700", letterSpacing: -0.3 }}>Critical events</span>
    </div>
    <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}>
      <IconArrowLeft
        width={22}
        height={18}
        viewBox="0 0 22 18"
        stroke="rgba(255,255,255,0.65)"
        strokeWidth={2.4}
        path="M20 9H2M9 2L2 9L9 16"
      />
    </button>
  </div>
);

const FeaturedClipCard = ({ clip, onOpen }) => (
  <div
    onClick={onOpen}
    style={{
      borderRadius: 16,
      overflow: "hidden",
      marginBottom: 14,
      cursor: "pointer",
      boxShadow: "0 6px 28px rgba(0,0,0,0.5)",
      position: "relative",
      height: 192,
      background: "#8da5bc",
    }}
  >
    <div style={{ position: "absolute", inset: 0 }}>
      <ThermalView />
    </div>
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 55%)",
      }}
    />
    <div
      style={{
        position: "absolute",
        bottom: 12,
        left: 14,
        display: "flex",
        alignItems: "center",
        gap: 12,
      }}
    >
      <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, fontWeight: "500" }}>{clip.date}</span>
      <span style={{ color: "white", fontSize: 13, fontWeight: "700", letterSpacing: 0.2 }}>{clip.time}</span>
    </div>
  </div>
);

const CriticalEventListItem = ({ clip, idx, onOpen }) => (
  <button
    onClick={onOpen}
    style={{
      background: "#1a1e28",
      border: "1px solid rgba(255,255,255,0.07)",
      borderRadius: 14,
      padding: "10px 14px 10px 10px",
      display: "flex",
      alignItems: "center",
      gap: 12,
      cursor: "pointer",
      width: "100%",
      textAlign: "left",
    }}
  >
    <div
      style={{
        width: 72,
        height: 56,
        borderRadius: 10,
        overflow: "hidden",
        flexShrink: 0,
        background: "#8da5bc",
        position: "relative",
      }}
    >
      <ThermalThumb variant={idx} />
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 26,
            height: 26,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.22)",
            backdropFilter: "blur(4px)",
            border: "1.5px solid rgba(255,255,255,0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconPlay />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 5,
          left: 5,
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: "#e8430a",
          boxShadow: "0 0 6px rgba(232,67,10,0.8)",
          border: "1.5px solid rgba(255,255,255,0.3)",
        }}
      />
    </div>

    <div style={{ flex: 1, minWidth: 0 }}>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          background: clip.labelColor,
          borderRadius: 6,
          padding: "3px 8px",
          marginBottom: 5,
        }}
      >
        <span style={{ color: "white", fontSize: 12, fontWeight: "700", letterSpacing: 0.1 }}>{clip.label}</span>
      </div>
      <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, fontWeight: "500" }}>Reaction time {clip.reaction}</div>
    </div>

    <IconChevronRight
      width={8}
      height={13}
      viewBox="0 0 8 13"
      stroke="rgba(255,255,255,0.3)"
      strokeWidth={2}
      path="M1 1L7 6.5L1 12"
    />
  </button>
);

const CriticalEventsList = ({ clips, onOpenClip }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
    {clips.map((clip, idx) => (
      <CriticalEventListItem key={clip.id} clip={clip} idx={idx} onOpen={() => onOpenClip(clip)} />
    ))}
  </div>
);

export { CriticalEventsHeader, CriticalEventsList, FeaturedClipCard };
