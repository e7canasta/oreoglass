import { ThermalThumb, ThermalView } from "./thermal.jsx";
import { IconArrowLeft, IconChevronRight, IconPlay } from "./ui-icons/index.js";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import "./critical-events-list.css";

const CriticalEventsHeader = ({ onBack }) => (
  <div className="critical-events-header">
    <div className="critical-events-header-title-wrap">
      <div className="critical-events-header-dot" />
      <span className="critical-events-header-title">Critical events</span>
    </div>
    <Button
      type="button"
      variant="unstyled"
      size="unstyled"
      onClick={onBack}
      className="critical-events-header-back"
    >
      <IconArrowLeft
        width={22}
        height={18}
        viewBox="0 0 22 18"
        stroke="rgba(255,255,255,0.65)"
        strokeWidth={2.4}
        path="M20 9H2M9 2L2 9L9 16"
      />
    </Button>
  </div>
);

const FeaturedClipCard = ({ clip, onOpen }) => (
  <Button
    type="button"
    variant="unstyled"
    size="unstyled"
    onClick={onOpen}
    className="critical-events-featured-card"
  >
    <div className="critical-events-featured-media">
      <ThermalView />
    </div>
    <div className="critical-events-featured-gradient" />
    <div className="critical-events-featured-meta">
      <span className="critical-events-featured-date">{clip.date}</span>
      <span className="critical-events-featured-time">{clip.time}</span>
    </div>
  </Button>
);

const CriticalEventListItem = ({ clip, idx, onOpen }) => {
  const isHighSeverity = clip.label.toLowerCase().includes("with injury");

  return (
    <Button
      type="button"
      variant="unstyled"
      size="unstyled"
      onClick={onOpen}
      className="critical-events-item"
    >
      <div className="critical-events-item-thumb">
        <ThermalThumb variant={idx} />
        <div className="critical-events-item-play-wrap">
          <div className="critical-events-item-play">
            <IconPlay />
          </div>
        </div>
        <div
          className={
            isHighSeverity
              ? "critical-events-item-dot critical-events-item-dot-high"
              : "critical-events-item-dot critical-events-item-dot-medium"
          }
        />
      </div>

      <div className="critical-events-item-copy">
        <Badge
          variant={isHighSeverity ? "critical" : "critical-muted"}
          className="critical-events-item-chip rounded-md border border-white/18 px-2 py-[3px] text-[length:var(--rm-fs-meta)] font-bold tracking-[0.1px]"
        >
          {clip.label}
        </Badge>
        <span className="critical-events-item-reaction">Reaction time {clip.reaction}</span>
      </div>

      <IconChevronRight
        width={8}
        height={13}
        viewBox="0 0 8 13"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth={2}
        path="M1 1L7 6.5L1 12"
      />
    </Button>
  );
};

const CriticalEventsList = ({ clips, onOpenClip }) => (
  <div className="critical-events-list">
    {clips.map((clip, idx) => (
      <CriticalEventListItem key={clip.id} clip={clip} idx={idx} onOpen={() => onOpenClip && onOpenClip(clip)} />
    ))}
  </div>
);

export { CriticalEventsHeader, CriticalEventsList, FeaturedClipCard };
