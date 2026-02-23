import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { AppHeaderActionButton, AppHeaderLeading, AppHeaderRow } from "./chrome/header-layout.jsx";
import {
  IconInBed,
  IconLayingOnFloor,
  IconSittingOnBedLarge,
  IconStaffEnter,
  IconStanding,
} from "./icons.jsx";
import { ThermalView } from "./thermal.jsx";
import { IconArrowLeft, IconArrowRight, IconPlay } from "./ui-icons/index.js";

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

const BedActivityHeader = ({ room, onBack }) => (
  <AppHeaderRow className="[column-gap:var(--rm-bed-activity-header-gap)] [padding-top:var(--rm-bed-activity-header-padding-top)] [padding-bottom:var(--rm-bed-activity-header-padding-bottom)]">
    <AppHeaderLeading className="min-w-0 flex-1 [column-gap:var(--rm-bed-activity-header-leading-gap)]">
      <AppHeaderActionButton
        onClick={onBack}
        aria-label="Back to room detail"
        className="[background:var(--rm-bed-activity-back-bg)] [border-color:var(--rm-bed-activity-back-border)] focus-visible:[outline-color:var(--rm-bed-activity-focus)]"
      >
        <IconArrowLeft stroke="var(--rm-bed-activity-back-icon)" />
      </AppHeaderActionButton>

      <div className="min-w-0 text-left">
        <div className="truncate text-[length:var(--rm-fs-title)] font-bold tracking-[-0.3px] text-[var(--rm-bed-activity-header-text)]">
          {room?.number ?? "101"} Activity
        </div>
        <div className="truncate text-[length:var(--rm-fs-meta)] text-[var(--rm-bed-activity-header-muted)]">
          {room?.location ?? "Alma Way"} - last 12 hours
        </div>
      </div>
    </AppHeaderLeading>

    <div className="inline-flex min-h-[var(--rm-hit-chip)] shrink-0 items-center justify-center rounded-full border px-3 py-1 text-[length:var(--rm-fs-micro)] font-semibold tracking-[0.4px] [background:var(--rm-bed-activity-chip-bg)] [border-color:var(--rm-bed-activity-chip-border)] text-[var(--rm-bed-activity-chip-text)] [box-shadow:var(--rm-bed-activity-chip-shadow)]">
      LIVE
    </div>
  </AppHeaderRow>
);

const BedActivityLiveCard = ({ room, onRequestReview }) => (
  <section className="mx-[14px] shrink-0 rounded-[18px] border p-3 [background:var(--rm-bed-activity-live-surface)] [border-color:var(--rm-bed-activity-live-border)] [box-shadow:var(--rm-bed-activity-live-shadow)]">
    <div className="relative overflow-hidden rounded-[14px] border [height:var(--rm-bed-activity-preview-height)] [background:var(--rm-bed-activity-preview-bg)] [border-color:var(--rm-bed-activity-preview-border)]">
      <div className="pointer-events-none absolute left-2.5 top-2.5 z-[1] inline-flex items-center gap-1 rounded-[9px] border px-2.5 py-1 text-[length:var(--rm-fs-meta)] font-semibold [background:var(--rm-bed-activity-preview-badge-bg)] [border-color:var(--rm-bed-activity-preview-badge-border)] text-[var(--rm-bed-activity-preview-badge-text)]">
        <IconPlay width={8} height={9} fill="currentColor" />
        <span>View 1</span>
      </div>
      <ThermalView />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 [background:var(--rm-bed-activity-preview-fade)]" />
    </div>

    <div className="mt-3 flex items-start justify-between gap-3">
      <div className="min-w-0">
        <div className="truncate text-[length:var(--rm-fs-meta)] text-[var(--rm-bed-activity-meta)]">
          {room?.location ?? "Alma Way"} - Room {room?.number ?? "101"}
        </div>
        <h2 className="truncate text-[length:var(--rm-fs-title)] font-bold tracking-[-0.24px] text-[var(--rm-bed-activity-title)]">
          Activity feed
        </h2>
        <p className="truncate text-[length:var(--rm-fs-meta)] text-[var(--rm-bed-activity-meta)]">Detected event at 23:13</p>
      </div>
      <Badge
        variant="critical"
        className="rounded-[10px] border px-2.5 py-1 text-[length:var(--rm-fs-meta)] font-semibold [background:var(--rm-bed-activity-status-bg)] [border-color:var(--rm-bed-activity-status-border)] text-[var(--rm-bed-activity-status-text)] [box-shadow:none]"
      >
        Needs review
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

const BedActivityTimelineEvent = ({ event, isLast, onRequestReview }) => {
  const isInteractive = event.needsReview && typeof onRequestReview === "function";
  const EventElement = isInteractive ? "button" : "div";

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
        onClick={isInteractive ? onRequestReview : undefined}
        className={cn(
          "flex min-h-[68px] min-w-0 flex-1 items-center gap-3 rounded-[13px] border px-3 py-2.5 text-left [background:var(--rm-bed-activity-event-bg)] [border-color:var(--rm-bed-activity-event-border)]",
          isInteractive &&
            "cursor-pointer [background:var(--rm-bed-activity-event-alert-bg)] [border-color:var(--rm-bed-activity-event-alert-border)] [box-shadow:var(--rm-bed-activity-event-alert-shadow)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-bed-activity-focus)] active:scale-[0.995]",
        )}
        aria-label={isInteractive ? `Review ${event.label}` : undefined}
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

        {event.needsReview && (
          <div className="inline-flex items-center gap-2 text-[length:var(--rm-fs-meta)] font-semibold text-[var(--rm-bed-activity-event-action)]">
            <span>Review</span>
            <IconArrowRight stroke="var(--rm-bed-activity-event-action)" />
          </div>
        )}
      </EventElement>
    </div>
  );
};

const BedActivityTimeline = ({ onRequestReview }) => (
  <section className="mx-[14px] mb-2 mt-[14px] rounded-[18px] border px-3 py-3.5 [background:var(--rm-bed-activity-timeline-bg)] [border-color:var(--rm-bed-activity-timeline-border)] [box-shadow:var(--rm-bed-activity-timeline-shadow)]">
    <div className="mb-3 flex items-baseline justify-between gap-2 px-1">
      <h3 className="text-[length:var(--rm-fs-body-strong)] font-bold tracking-[-0.15px] text-[var(--rm-bed-activity-timeline-title)]">
        Bed activity timeline
      </h3>
      <span className="text-[length:var(--rm-fs-meta)] text-[var(--rm-bed-activity-timeline-subtitle)]">
        Expanded view
      </span>
    </div>

    <div>
      {BED_ACTIVITY_TIMELINE_EVENTS.map((event, index) => (
        <BedActivityTimelineEvent
          key={event.id}
          event={event}
          isLast={index === BED_ACTIVITY_TIMELINE_EVENTS.length - 1}
          onRequestReview={onRequestReview}
        />
      ))}
    </div>
  </section>
);

export { BedActivityHeader, BedActivityLiveCard, BedActivityTimeline };
