import { useEffect, useState } from "react";
import { IconPause, IconPlay, IconVolume } from "./ui-icons/index.js";
import "./video.css";

const VideoScrubber = () => {
  const [pos, setPos] = useState(34); // % played
  useEffect(() => {
    const t = setInterval(() => setPos((p) => (p >= 98 ? 0 : p + 0.4)), 80);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="video-scrubber-root" style={{ "--video-pos": `${pos}%` }}>
      <div className="video-scrubber-track">
        <div className="video-scrubber-fill" />
      </div>
      <div className="video-scrubber-thumb" />
    </div>
  );
};

const VideoControls = ({ isPlaying, onToggle }) => (
  <>
    <div className="video-controls-row video-controls-row-left">
      <button type="button" onClick={onToggle} className="video-control-button" aria-label={isPlaying ? "Pause video" : "Play video"}>
        {isPlaying ? (
          <IconPause />
        ) : (
          <IconPlay width={12} height={14} />
        )}
      </button>
      <button type="button" className="video-control-button" aria-label="Volume">
        <IconVolume />
      </button>
    </div>

    <div className="video-controls-row video-controls-row-right">
      {["CC", "⋮", "↗"].map((icon, i) => (
        <button
          key={i}
          type="button"
          className={
            i === 0
              ? "video-control-button video-control-button-text video-control-button-cc"
              : i === 1
                ? "video-control-button video-control-button-text video-control-button-kebab"
                : "video-control-button video-control-button-text video-control-button-share"
          }
          aria-label={i === 0 ? "Captions" : i === 1 ? "More options" : "Share"}
        >
          {icon}
        </button>
      ))}
    </div>
  </>
);

/* ══════════════════════════════════════
   FALL CLIP DETAIL SCREEN — pixel perfect
   Two states: "needs_review" / "reviewed"
══════════════════════════════════════ */

export { VideoScrubber, VideoControls };
