import { IconSittingOnBedLarge } from "./icons.jsx";

const AlarmSheet = ({ onClose, onViewLive, onFallReview, secondsAgo }) => (
  <div style={{ position: "absolute", inset: 0, zIndex: 20 }}>

    {/* blurred dark scrim over overview */}
    <div style={{
      position: "absolute", inset: 0,
      backdropFilter: "blur(14px) saturate(0.7)",
      background: "rgba(0,0,0,0.38)",
    }} />

    {/* ── orange sheet ── */}
    <div style={{
      position: "absolute", bottom: 0, left: 0, right: 0,
      background: "#e8430a",
      borderRadius: "24px 24px 0 0",
      paddingBottom: 36,
      animation: "slideUp 0.38s cubic-bezier(0.32,0.72,0,1)",
      fontFamily: "'SF Pro Display',system-ui,-apple-system",
      boxShadow: "0 -8px 40px rgba(200,50,0,0.45)",
    }}>

      {/* handle */}
      <div style={{ display: "flex", justifyContent: "center", paddingTop: 11, marginBottom: 2 }}>
        <div style={{ width: 38, height: 4, borderRadius: 2, background: "rgba(255,255,255,0.4)" }} />
      </div>

      {/* room number + × */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "10px 20px 6px",
      }}>
        <span style={{
          color: "white", fontSize: 34, fontWeight: "800",
          letterSpacing: -0.8, lineHeight: 1,
        }}>
          122.2
        </span>
        <button onClick={onClose} style={{
          width: 36, height: 36, borderRadius: "50%",
          background: "rgba(0,0,0,0.22)",
          border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
        }}>
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M1 1L12 12M12 1L1 12"
              stroke="white" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* ! Alarm label */}
      <div style={{
        display: "flex", alignItems: "center", gap: 9,
        padding: "4px 20px 14px",
      }}>
        <div style={{
          width: 26, height: 26, borderRadius: "50%", background: "white",
          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
        }}>
          <svg width="3.5" height="13" viewBox="0 0 3.5 16" fill="none">
            <path d="M1.75 1V9.5" stroke="#e8430a" strokeWidth="2.8" strokeLinecap="round" />
            <circle cx="1.75" cy="14.2" r="1.75" fill="#e8430a" />
          </svg>
        </div>
        <span style={{ color: "white", fontSize: 18, fontWeight: "700" }}>Alarm</span>
      </div>

      {/* ── event card ── */}
      <div style={{
        margin: "0 14px 14px",
        background: "rgba(255,255,255,0.16)",
        borderRadius: 20,
        padding: "16px 16px 16px 18px",
        border: "1.5px solid rgba(255,255,255,0.28)",
        display: "flex", alignItems: "flex-start", justifyContent: "space-between",
      }}>
        <div style={{ flex: 1 }}>
          <div style={{
            color: "white", fontSize: 30, fontWeight: "800",
            lineHeight: 1.18, letterSpacing: -0.5,
          }}>
            Sitting on<br />bed edge
          </div>
          <div style={{
            color: "rgba(255,255,255,0.62)", fontSize: 14,
            fontWeight: "500", marginTop: 8,
          }}>
            {secondsAgo} seconds ago
          </div>
        </div>
        <div style={{ flexShrink: 0, marginLeft: 8, marginTop: 2 }}>
          <IconSittingOnBedLarge size={76} />
        </div>
      </div>

      {/* ── 2-col buttons ── */}
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: 10, padding: "0 14px",
      }}>
        {/* On my way — lighter */}
        <button onClick={onClose} style={{
          background: "rgba(255,255,255,0.24)",
          border: "1.5px solid rgba(255,255,255,0.38)",
          borderRadius: 18, padding: "16px 10px",
          cursor: "pointer", color: "white",
          fontWeight: "700", fontSize: 17, lineHeight: 1.25,
          textAlign: "center",
        }}>
          On my<br />way
        </button>
        {/* View live — darker */}
        <button onClick={onViewLive} style={{
          background: "rgba(0,0,0,0.22)",
          border: "1.5px solid rgba(0,0,0,0.1)",
          borderRadius: 18, padding: "16px 10px",
          cursor: "pointer", color: "white",
          fontWeight: "700", fontSize: 17, lineHeight: 1.25,
          textAlign: "center",
        }}>
          View<br />live
        </button>
      </div>

      {/* ── Forward to (full width) ── */}
      <div style={{ padding: "10px 14px 0" }}>
        <button onClick={onFallReview} style={{
          width: "100%",
          background: "rgba(0,0,0,0.18)",
          border: "1.5px solid rgba(255,255,255,0.18)",
          borderRadius: 18, padding: "15px 18px",
          cursor: "pointer", color: "white",
          fontWeight: "700", fontSize: 17,
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <span>Forward to</span>
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
            <path d="M1 7H17M11 1L17 7L11 13"
              stroke="white" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  </div>
);

/* ══════════════════════════════════════
   THERMAL — LIVE (upright blob, floor)
══════════════════════════════════════ */

export { AlarmSheet };
