import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import {
  IconInBed,
  IconLayingOnFloor,
  IconSittingOnBedLarge,
  IconStaffEnter,
  IconStanding,
} from "./icons.jsx";
import { RoomSeal } from "./chrome/room-seal.jsx";
import { ThermalView } from "./thermal.jsx";
import { IconArrowLeft, IconArrowRight } from "./ui-icons/index.js";

const BED_ACTIVITY_TIMELINE_EVENTS = Object.freeze([
  {
    id: "in-bed",
    time: "22:58",
    label: "Resident in bed",
    detail: "Regular movement detected",
    tone: "neutral",
    icon: <IconInBed size={34} />,
  },
  {
    id: "sitting-edge",
    time: "23:10",
    label: "Sitting on bed edge",
    detail: "Warning",
    tone: "warning",
    icon: <IconSittingOnBedLarge size={28} />,
  },
  {
    id: "fall-alarm",
    time: "23:13",
    label: "Fall alarm",
    detail: "Clip requires review",
    tone: "alarm",
    icon: <IconLayingOnFloor size={22} />,
    needsReview: true,
  },
  {
    id: "staff-enter",
    time: "23:14",
    label: "Staff entered room",
    detail: "Response in 32s",
    tone: "success",
    icon: <IconStaffEnter size={34} />,
  },
  {
    id: "standing",
    time: "23:16",
    label: "Standing",
    detail: "Current activity",
    tone: "warning",
    icon: <IconStanding size={24} />,
  },
]);

const resolveBedActivityIndexByEventId = (eventId = null) => {
  const liveIndex = BED_ACTIVITY_TIMELINE_EVENTS.length - 1;
  if (!eventId) {
    return liveIndex;
  }

  const matchingIndex = BED_ACTIVITY_TIMELINE_EVENTS.findIndex((event) => event.id === eventId);
  return matchingIndex >= 0 ? matchingIndex : liveIndex;
};

const toneDotClassName = (tone) => {
  if (tone === "warning") {
    return "[background:var(--rm-bed-activity-dot-warning)]";
  }

  if (tone === "alarm") {
    return "[background:var(--rm-bed-activity-dot-alarm)] [box-shadow:var(--rm-bed-activity-dot-alarm-shadow)]";
  }

  if (tone === "success") {
    return "[background:var(--rm-bed-activity-dot-success)] [box-shadow:var(--rm-bed-activity-dot-success-shadow)]";
  }

  return "[background:var(--rm-bed-activity-dot-neutral)]";
};

const BedActivityLiveCard = ({
  room,
  selectedEvent,
  progressPercent = 88,
  isAtLive = true,
  onBack,
  onReturnToLive,
  onRequestReview,
}) => {
  const eventLabel = selectedEvent?.label ?? "Current activity";
  const eventTime = selectedEvent?.time ?? "23:16";
  const needsReview = Boolean(selectedEvent?.needsReview);

  return (
    <section className="mx-[14px] shrink-0 rounded-[18px] border p-3 [background:var(--rm-bed-activity-live-surface)] [border-color:var(--rm-bed-activity-live-border)] [box-shadow:var(--rm-bed-activity-live-shadow)]">
      <div className="relative overflow-hidden rounded-[14px] border [height:var(--rm-bed-activity-preview-height)] [background:var(--rm-bed-activity-preview-bg)] [border-color:var(--rm-bed-activity-preview-border)]">
        <button
          type="button"
          onClick={onBack}
          aria-label="Back to room detail"
          className="absolute left-2.5 top-2.5 z-[2] flex size-[var(--rm-hit-compact)] items-center justify-center rounded-full border [background:var(--rm-bed-activity-back-bg)] [border-color:var(--rm-bed-activity-back-border)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-bed-activity-focus)] active:scale-[0.985]"
        >
          <IconArrowLeft stroke="var(--rm-bed-activity-back-icon)" />
        </button>

        <div className="pointer-events-none absolute left-1/2 top-3 z-[1] -translate-x-1/2">
          <RoomSeal roomNumber={room?.number ?? "101"} className="[backdrop-filter:blur(10px)_saturate(1.08)]" />
        </div>

        {!isAtLive && (
          <button
            type="button"
            onClick={onReturnToLive}
            className="absolute right-2.5 top-2.5 z-[2] inline-flex min-h-[var(--rm-hit-chip)] items-center gap-1.5 rounded-full border px-2.5 py-1 text-[length:var(--rm-fs-micro)] font-semibold [background:var(--rm-bed-activity-go-live-bg)] [border-color:var(--rm-bed-activity-go-live-border)] text-[var(--rm-bed-activity-go-live-text)] [box-shadow:var(--rm-bed-activity-go-live-shadow)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-bed-activity-focus)] active:scale-[0.98]"
          >
            <span className="size-1.5 rounded-full [background:var(--rm-bed-activity-go-live-dot)]" />
            Live
          </button>
        )}

        <ThermalView />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 [background:var(--rm-bed-activity-preview-fade)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 px-[12px] pb-2.5 pt-5 [background:var(--rm-bed-activity-preview-progress-overlay)]">
          <div className="relative h-[3px] rounded-[2px] [background:var(--rm-bed-activity-preview-progress-track)]">
            <div
              className="h-full rounded-[2px] [background:var(--rm-bed-activity-preview-progress-fill)]"
              style={{ width: `${progressPercent}%` }}
            />
            <div
              className="absolute top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full [background:var(--rm-bed-activity-preview-progress-thumb)] [box-shadow:var(--rm-bed-activity-preview-progress-thumb-shadow)]"
              style={{ left: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex min-w-0 items-center gap-2">
            <RoomSeal roomNumber={room?.number ?? "101"} />
            <span className="truncate text-[length:var(--rm-fs-meta)] text-[var(--rm-bed-activity-meta)]">
              {room?.location ?? "Alma Way"}
            </span>
          </div>
          <h2 className="truncate text-[length:var(--rm-fs-title)] font-bold tracking-[-0.24px] text-[var(--rm-bed-activity-title)]">
            Activity feed
          </h2>
          <p className="truncate text-[length:var(--rm-fs-meta)] text-[var(--rm-bed-activity-meta)]">
            {eventLabel} · {eventTime}
          </p>
        </div>
        <Badge
          variant="critical"
          className={cn(
            "rounded-[10px] border px-2.5 py-1 text-[length:var(--rm-fs-meta)] font-semibold [box-shadow:none]",
            needsReview
              ? "[background:var(--rm-bed-activity-status-bg)] [border-color:var(--rm-bed-activity-status-border)] text-[var(--rm-bed-activity-status-text)]"
              : "[background:var(--rm-bed-activity-status-muted-bg)] [border-color:var(--rm-bed-activity-status-muted-border)] text-[var(--rm-bed-activity-status-muted-text)]",
          )}
        >
          {needsReview ? "Needs review" : isAtLive ? "Live now" : "Playback"}
        </Badge>
      </div>

      <Button
        type="button"
        onClick={onRequestReview}
        variant="unstyled"
        className="mt-3 min-h-[var(--rm-hit-min)] w-full rounded-[14px] border px-3 py-3 text-[length:var(--rm-fs-body-strong)] font-bold tracking-[-0.15px] [background:var(--rm-bed-activity-review-bg)] [border-color:var(--rm-bed-activity-review-border)] text-[var(--rm-bed-activity-review-text)] [box-shadow:var(--rm-bed-activity-review-shadow)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-bed-activity-focus)] active:scale-[0.992]"
      >
        Review fall clip
      </Button>
    </section>
  );
};

const BedActivityTimelineEvent = ({ event, isLast, isSelected, onSelectEvent }) => {
  const isInteractive = typeof onSelectEvent === "function";
  const EventElement = isInteractive ? "button" : "div";
  const isLiveEvent = isLast;

  return (
    <div className={cn("relative flex items-stretch gap-2 pb-3.5", isLast && "pb-0")}>
      <div className="w-12 shrink-0 pt-2 text-right text-[length:var(--rm-fs-meta)] font-medium tabular-nums text-[var(--rm-bed-activity-time)]">
        {event.time}
      </div>

      <div className="relative flex w-4 shrink-0 flex-col items-center pt-3">
        <div className={cn("z-[1] size-2.5 rounded-full", toneDotClassName(event.tone))} />
        {!isLast && <div className="mt-1.5 w-0.5 flex-1 [background:var(--rm-bed-activity-rail)]" />}
      </div>

      <EventElement
        type={isInteractive ? "button" : undefined}
        onClick={isInteractive ? onSelectEvent : undefined}
        className={cn(
          "group flex min-h-[68px] min-w-0 flex-1 items-center gap-3 rounded-[13px] border px-3 py-2.5 text-left [background:var(--rm-bed-activity-event-bg)] [border-color:var(--rm-bed-activity-event-border)] transition-colors duration-150",
          isInteractive &&
            "cursor-pointer hover:[background:var(--rm-bed-activity-event-hover-bg)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-bed-activity-focus)] active:scale-[0.995]",
          event.needsReview &&
            "[background:var(--rm-bed-activity-event-alert-bg)] [border-color:var(--rm-bed-activity-event-alert-border)] [box-shadow:var(--rm-bed-activity-event-alert-shadow)]",
          isSelected &&
            "[background:var(--rm-bed-activity-event-selected-bg)] [border-color:var(--rm-bed-activity-event-selected-border)] [box-shadow:var(--rm-bed-activity-event-selected-shadow)]",
        )}
        aria-label={isInteractive ? `Open event ${event.label} at ${event.time}` : undefined}
      >
        <div className="flex size-11 shrink-0 items-center justify-center rounded-[10px] border [background:var(--rm-bed-activity-event-icon-bg)] [border-color:var(--rm-bed-activity-event-icon-border)]">
          {event.icon}
        </div>

        <div className="min-w-0 flex-1">
          <div className="truncate text-[length:var(--rm-fs-body)] font-semibold tracking-[-0.1px] text-[var(--rm-bed-activity-event-title)]">
            {event.label}
          </div>
          <div className="truncate text-[length:var(--rm-fs-meta)] text-[var(--rm-bed-activity-event-meta)]">
            {event.detail}
          </div>
        </div>

        {isInteractive && (
          <div className="inline-flex items-center gap-2">
            {event.needsReview && (
              <span className="inline-flex min-h-[var(--rm-hit-chip)] items-center rounded-full border px-2 py-0.5 text-[length:var(--rm-fs-micro)] font-semibold [background:var(--rm-bed-activity-status-bg)] [border-color:var(--rm-bed-activity-status-border)] text-[var(--rm-bed-activity-status-text)]">
                Review
              </span>
            )}
            {!event.needsReview && isLiveEvent && (
              <span className="inline-flex min-h-[var(--rm-hit-chip)] items-center rounded-full border px-2 py-0.5 text-[length:var(--rm-fs-micro)] font-semibold [background:var(--rm-bed-activity-status-muted-bg)] [border-color:var(--rm-bed-activity-status-muted-border)] text-[var(--rm-bed-activity-status-muted-text)]">
                Live
              </span>
            )}
            {!event.needsReview && !isLiveEvent && (
              <span className="opacity-[0.78] transition-opacity group-hover:opacity-100">
                <IconArrowRight stroke="var(--rm-bed-activity-event-action)" />
              </span>
            )}
          </div>
        )}
      </EventElement>
    </div>
  );
};

const BedActivityTimeline = ({ selectedIndex = BED_ACTIVITY_TIMELINE_EVENTS.length - 1, onSelectEvent }) => (
  <section className="mx-[14px] mb-2 mt-[14px] rounded-[18px] border px-3 py-3.5 [background:var(--rm-bed-activity-timeline-bg)] [border-color:var(--rm-bed-activity-timeline-border)] [box-shadow:var(--rm-bed-activity-timeline-shadow)]">
    <div className="mb-3 flex items-baseline justify-between gap-2 px-1">
      <h3 className="text-[length:var(--rm-fs-body-strong)] font-bold tracking-[-0.15px] text-[var(--rm-bed-activity-timeline-title)]">
        Bed activity timeline
      </h3>
      <span className="text-[length:var(--rm-fs-meta)] text-[var(--rm-bed-activity-timeline-subtitle)]">
        Tap any event
      </span>
    </div>

    <div>
      {BED_ACTIVITY_TIMELINE_EVENTS.map((event, index) => (
        <BedActivityTimelineEvent
          key={event.id}
          event={event}
          isSelected={index === selectedIndex}
          isLast={index === BED_ACTIVITY_TIMELINE_EVENTS.length - 1}
          onSelectEvent={onSelectEvent ? () => onSelectEvent(index) : undefined}
        />
      ))}
    </div>
  </section>
);

export {
  BED_ACTIVITY_TIMELINE_EVENTS,
  BedActivityLiveCard,
  BedActivityTimeline,
  resolveBedActivityIndexByEventId,
};
