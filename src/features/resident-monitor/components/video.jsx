import { useEffect, useState } from "react";
import { IconPause, IconPlay, IconVolume } from "./ui-icons/index.js";

const VideoScrubber = () => {
  const [pos, setPos] = useState(34); // % played
  useEffect(() => {
    const t = setInterval(() => setPos((p) => (p >= 98 ? 0 : p + 0.4)), 80);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative flex h-5 items-center px-0.5" style={{ "--video-pos": `${pos}%` }}>
      <div className="relative h-1 flex-1 overflow-hidden rounded-[3px] [background:var(--rm-fall-video-progress-track)]">
        <div className="absolute inset-y-0 left-0 rounded-[3px] [background:var(--rm-fall-video-progress-fill)] [transition:width_0.08s_linear]" style={{ width: "var(--video-pos)" }} />
      </div>
      <div className="pointer-events-none absolute h-[14px] w-[14px] shrink-0 rounded-full [background:var(--rm-fall-video-progress-thumb)] [box-shadow:var(--rm-fall-video-progress-thumb-shadow)] [left:calc(var(--video-pos)-7px)]" />
    </div>
  );
};

const VideoControls = ({ isPlaying, onToggle }) => (
  <>
    <div className="absolute left-3 top-3 flex gap-2">
      <button
        type="button"
        onClick={onToggle}
        className="flex size-[var(--rm-hit-compact)] items-center justify-center rounded-[10px] border [background:rgba(30,32,38,0.72)] [backdrop-filter:blur(8px)] [border-color:rgba(255,255,255,0.12)] transition-transform active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgba(255,255,255,0.78)]"
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? (
          <IconPause />
        ) : (
          <IconPlay width={12} height={14} />
        )}
      </button>
      <button
        type="button"
        className="flex size-[var(--rm-hit-compact)] items-center justify-center rounded-[10px] border [background:rgba(30,32,38,0.72)] [backdrop-filter:blur(8px)] [border-color:rgba(255,255,255,0.12)] transition-transform active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgba(255,255,255,0.78)]"
        aria-label="Volume"
      >
        <IconVolume />
      </button>
    </div>

    <div className="absolute right-3 top-3 flex gap-2">
      {["CC", "⋮", "↗"].map((icon, i) => (
        <button
          key={i}
          type="button"
          className={
            i === 0
              ? "flex size-[var(--rm-hit-compact)] items-center justify-center rounded-[10px] border text-[length:var(--rm-fs-micro)] font-bold text-white [background:rgba(30,32,38,0.72)] [backdrop-filter:blur(8px)] [border-color:rgba(255,255,255,0.12)] transition-transform active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgba(255,255,255,0.78)]"
              : i === 1
                ? "flex size-[var(--rm-hit-compact)] items-center justify-center rounded-[10px] border text-lg font-bold text-white [background:rgba(30,32,38,0.72)] [backdrop-filter:blur(8px)] [border-color:rgba(255,255,255,0.12)] transition-transform active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgba(255,255,255,0.78)]"
                : "flex size-[var(--rm-hit-compact)] items-center justify-center rounded-[10px] border text-[length:var(--rm-fs-meta)] font-bold text-white [background:rgba(30,32,38,0.72)] [backdrop-filter:blur(8px)] [border-color:rgba(255,255,255,0.12)] transition-transform active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgba(255,255,255,0.78)]"
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
