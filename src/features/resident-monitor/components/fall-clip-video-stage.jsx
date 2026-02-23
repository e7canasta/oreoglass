import { ThermalView } from "./thermal.jsx";
import { VideoControls } from "./video.jsx";

const FallClipVideoStage = ({ isPlaying, onTogglePlay, progressPercent = 38 }) => (
  <div className="relative h-[clamp(216px,36vh,240px)] shrink-0 [background:var(--rm-fall-video-bg)]">
    <ThermalView />
    <div className="pointer-events-none absolute right-2.5 top-2.5 inline-flex items-center rounded-[10px] border px-2.5 py-1 text-[length:var(--rm-fs-micro)] font-semibold tracking-[0.2px] [background:var(--rm-fall-video-privacy-badge-bg)] [border-color:var(--rm-fall-video-privacy-badge-border)] text-[var(--rm-fall-video-privacy-badge-text)]">
      Private view
    </div>
    <VideoControls isPlaying={isPlaying} onToggle={onTogglePlay} />
    <div className="absolute inset-x-0 bottom-0 px-[14px] pb-2.5 pt-5 [background:var(--rm-fall-video-progress-overlay)]">
      <div className="relative h-[3px] rounded-[2px] [background:var(--rm-fall-video-progress-track)]">
        <div
          className="h-full rounded-[2px] [background:var(--rm-fall-video-progress-fill)]"
          style={{ width: `${progressPercent}%` }}
        />
        <div
          className="absolute top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full [background:var(--rm-fall-video-progress-thumb)] [box-shadow:var(--rm-fall-video-progress-thumb-shadow)]"
          style={{ left: `${progressPercent}%` }}
        />
      </div>
    </div>
  </div>
);

export { FallClipVideoStage };
