import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import bannerLyingCenter from "../../../../assets/banner/lying_center.png";
import bannerOnFloor from "../../../../assets/banner/on_floor.png";
import bannerOutOfBed from "../../../../assets/banner/out_of_bed.png";
import bannerSittingBed from "../../../../assets/banner/sitting_bed.png";
import bannerSittingOnFloor from "../../../../assets/banner/sitting_on_floor.png";
import bannerStandingBeside from "../../../../assets/banner/standing_beside.png";

import {
  IconInBed,
  IconOutOfRoomBed,
  IconSittingOnBedLarge,
  IconStaffEnter,
  IconStanding,
} from "./icons.jsx";
import { AppHeaderActionButton, AppHeaderLeading, AppHeaderRow } from "./chrome/header-layout.jsx";
import { RoomSeal } from "./chrome/room-seal.jsx";
import { IconArrowLeft, IconChevronRight } from "./ui-icons/index.js";

const ACTIVITY_EVENT_TYPE_LABEL = Object.freeze({
  alarm: "Alarm",
  out: "Out",
  awake: "Awake",
  bathroom: "Bathroom",
  care: "With care",
  sleep: "Sleep",
});

const ACTIVITY_FEED_BANNER_IMAGE_BY_KEY = Object.freeze({
  "lying-center": bannerLyingCenter,
  "standing-beside": bannerStandingBeside,
  "sitting-bed": bannerSittingBed,
  "sitting-on-floor": bannerSittingOnFloor,
  "on-floor": bannerOnFloor,
  "out-of-bed": bannerOutOfBed,
});

const typeDotClassName = (type) => {
  if (type === "alarm") {
    return "[background:var(--rm-overview-dot-orange-bg)] [box-shadow:var(--rm-overview-dot-orange-shadow)]";
  }

  if (type === "out" || type === "bathroom") {
    return "[background:var(--rm-overview-dot-blue-bg)] [box-shadow:var(--rm-overview-dot-blue-shadow)]";
  }

  if (type === "care") {
    return "[background:var(--rm-overview-dot-person-bg)] [box-shadow:var(--rm-overview-dot-person-shadow)]";
  }

  return "[background:var(--rm-overview-dot-yellow-bg)] [box-shadow:var(--rm-overview-dot-yellow-shadow)]";
};

const ActivityEventIcon = ({ type }) => {
  if (type === "alarm") {
    return <IconSittingOnBedLarge size={24} />;
  }

  if (type === "out" || type === "bathroom") {
    return <IconOutOfRoomBed size={26} />;
  }

  if (type === "care") {
    return <IconStaffEnter size={28} />;
  }

  if (type === "sleep") {
    return <IconInBed size={28} />;
  }

  return <IconStanding size={22} />;
};

const resolveActivityBannerKey = (event) => {
  const label = String(event?.label ?? "").toLowerCase();

  if (label.includes("on floor")) {
    return "on-floor";
  }

  if (label.includes("fall")) {
    return "sitting-on-floor";
  }

  if (label.includes("standing")) {
    return "standing-beside";
  }

  if (label.includes("sitting")) {
    return "sitting-bed";
  }

  if (event?.type === "out" || event?.type === "bathroom" || label.includes("out of bed")) {
    return "out-of-bed";
  }

  if (event?.type === "sleep" || label.includes("back in bed")) {
    return "lying-center";
  }

  if (event?.type === "care") {
    return "standing-beside";
  }

  return "lying-center";
};

const formatMinutesAgo = (minutesAgo) => {
  if (!Number.isFinite(minutesAgo)) {
    return "now";
  }

  if (minutesAgo <= 0) {
    return "now";
  }

  if (minutesAgo < 60) {
    return `${minutesAgo}m ago`;
  }

  const hours = Math.floor(minutesAgo / 60);
  const minutes = minutesAgo % 60;
  if (minutes === 0) {
    return `${hours}h ago`;
  }
  return `${hours}h ${minutes}m ago`;
};

const ActivityFeedHeader = ({ onBack, totalCount, filteredCount }) => (
  <AppHeaderRow className="[padding-top:var(--rm-critical-header-padding-top)] [padding-bottom:var(--rm-critical-header-padding-bottom)]">
    <AppHeaderLeading className="[column-gap:var(--rm-critical-header-leading-gap)]">
      <AppHeaderActionButton
        onClick={onBack}
        className="[background:var(--rm-critical-back-bg)] [border-color:var(--rm-critical-back-border)] [backdrop-filter:blur(10px)_saturate(1.08)] focus-visible:[outline-color:var(--rm-critical-focus-outline)]"
        aria-label="Back to overview"
      >
        <IconArrowLeft
          width={22}
          height={18}
          viewBox="0 0 22 18"
          stroke="var(--rm-critical-back-icon)"
          strokeWidth={2.4}
          path="M20 9H2M9 2L2 9L9 16"
        />
      </AppHeaderActionButton>
      <div className="min-w-0">
        <div className="truncate text-[length:var(--rm-fs-title)] font-bold tracking-[-0.3px] text-[var(--rm-critical-header-title)]">
          Latest activity
        </div>
        <div className="truncate text-[length:var(--rm-fs-meta)] text-[var(--rm-critical-item-meta)]">
          {filteredCount}/{totalCount} updates
        </div>
      </div>
    </AppHeaderLeading>
  </AppHeaderRow>
);

const ActivityFeedFilters = ({ filters, activeFilterId, onSelectFilter }) => (
  <div className="overflow-x-auto px-[14px] pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
    <div className="flex min-w-max gap-2">
      {filters.map((filter) => {
        const isActive = filter.id === activeFilterId;
        return (
          <Button
            key={filter.id}
            type="button"
            variant="surface-pill"
            size="touch"
            onClick={() => onSelectFilter(filter.id)}
            aria-pressed={isActive}
            className={cn(
              "min-h-[var(--rm-hit-chip)] rounded-full px-3.5 py-1 text-[length:var(--rm-fs-meta)] font-semibold [border-color:var(--rm-critical-item-room-border)] [background:var(--rm-critical-item-room-bg)] [color:var(--rm-critical-item-room-text)]",
              isActive &&
                "[border-color:var(--alarm-btn-primary-border)] [background:var(--alarm-btn-primary-bg)] [color:var(--alarm-btn-primary-text)] [box-shadow:var(--alarm-cta-shadow)]",
            )}
          >
            {filter.label}
          </Button>
        );
      })}
    </div>
  </div>
);

const ActivityFeedListItem = ({ event, onOpen }) => {
  const bannerKey = resolveActivityBannerKey(event);
  const bannerSrc = ACTIVITY_FEED_BANNER_IMAGE_BY_KEY[bannerKey];

  return (
    <button
      type="button"
      onClick={onOpen}
      className="w-full rounded-[16px] border px-3.5 py-3 text-left [background:var(--rm-critical-item-bg)] [border-color:var(--rm-critical-item-border)] [box-shadow:var(--rm-critical-item-shadow)] transition-transform active:scale-[0.994] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-critical-focus-outline)]"
    >
      <div className="flex items-start gap-3">
        <div
          className={cn(
            "mt-1.5 size-2.5 shrink-0 rounded-full border [border-color:var(--rm-overview-dot-ring-color)]",
            typeDotClassName(event.type),
          )}
        />

        <div className="min-w-0 flex-1">
          <div className="flex min-w-0 items-center gap-2">
            <RoomSeal roomNumber={event.room} />
            <span className="truncate text-[length:var(--rm-fs-body)] font-bold text-[var(--rm-critical-item-title)]">
              {event.resident}
            </span>
            <span className="shrink-0 text-[length:var(--rm-fs-micro)] font-medium text-[var(--rm-critical-item-meta)]">
              {formatMinutesAgo(event.minutesAgo)}
            </span>
          </div>

          <div className="mt-0.5 truncate text-[length:var(--rm-fs-body)] font-semibold text-[var(--rm-critical-item-title)]">
            {event.label}
          </div>
          <div className="mt-0.5 truncate text-[length:var(--rm-fs-meta)] text-[var(--rm-critical-item-context)]">
            {event.location} · {event.detail}
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            <Badge
              variant="dashed"
              className="rounded-full border px-2 py-[2px] text-[10px] font-semibold [border-color:var(--rm-critical-item-room-border)] [background:var(--rm-critical-item-room-bg)] [color:var(--rm-critical-item-room-text)]"
            >
              {ACTIVITY_EVENT_TYPE_LABEL[event.type] ?? "Update"}
            </Badge>
            <span className="text-[length:var(--rm-fs-micro)] font-medium text-[var(--rm-critical-item-meta)]">
              {event.time}
            </span>
            {event.requiresReview && (
              <Badge
                variant="critical"
                className="rounded-full border px-2 py-[2px] text-[10px] font-semibold [border-color:var(--rm-critical-item-chip-border)]"
              >
                Review
              </Badge>
            )}
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <div className={cn("rm-activity-feed-banner", `rm-activity-feed-banner--${bannerKey}`)}>
            {bannerSrc ? (
              <>
                <span className="rm-activity-feed-banner-base" />
                <img src={bannerSrc} alt="" draggable="false" className="rm-activity-feed-banner-image" />
                <span className="rm-activity-feed-banner-tone" />
                <span className="rm-activity-feed-banner-glow" />
              </>
            ) : (
              <div className="flex size-full items-center justify-center rounded-[10px] border [background:var(--rm-bed-activity-event-icon-bg)] [border-color:var(--rm-bed-activity-event-icon-border)]">
                <ActivityEventIcon type={event.type} />
              </div>
            )}
          </div>
          <IconChevronRight stroke="var(--rm-critical-item-chevron)" />
        </div>
      </div>
    </button>
  );
};

const ActivityFeedList = ({ events, onOpenEvent }) => {
  if (events.length === 0) {
    return (
      <div className="rounded-[14px] border px-3.5 py-4 text-[length:var(--rm-fs-meta)] text-[var(--rm-critical-item-meta)] [background:var(--rm-critical-item-bg)] [border-color:var(--rm-critical-item-border)]">
        No activity for this filter in the latest window.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2.5">
      {events.map((event) => (
        <ActivityFeedListItem
          key={event.id}
          event={event}
          onOpen={() => onOpenEvent?.(event)}
        />
      ))}
    </div>
  );
};

export { ActivityFeedFilters, ActivityFeedHeader, ActivityFeedList };
