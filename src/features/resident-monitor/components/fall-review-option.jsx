import { IconCheck } from "./ui-icons/index.js";

const FallReviewOption = ({ label, isSelected, onSelect }) => (
  <button
    onClick={onSelect}
    style={{
      width: "100%",
      background: isSelected ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.18)",
      border: isSelected ? "2px solid rgba(255,255,255,0.45)" : "2px solid rgba(0,0,0,0.12)",
      borderRadius: 14,
      padding: "15px 16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      cursor: "pointer",
      transition: "background 0.15s, border 0.15s",
    }}
  >
    <span style={{color:"white",fontSize:17,fontWeight:isSelected?"700":"500",textAlign:"left"}}>{label}</span>
    {isSelected && (
      <div style={{width:30,height:30,borderRadius:"50%",background:"rgba(255,255,255,0.15)",border:"2.5px solid rgba(255,255,255,0.8)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
        <IconCheck />
      </div>
    )}
  </button>
);

export { FallReviewOption };
