import {
  IconArrowLeft,
  IconCalendar,
  IconCheckCircle,
  IconClock,
  IconEdit,
  IconQuestionCircle,
  IconStatClock,
  IconStatReaction,
} from "./ui-icons/index.js";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RM_BADGE_PRESETS, RM_BUTTON_PRESETS } from "../lib/design-system.js";

const FallClipMetaRow = () => (
  <div className="mb-3.5 flex items-center justify-between">
    <div className="flex items-center gap-1.5">
      <IconCalendar color="var(--rm-fall-meta-text)" />
      <span className="text-[length:var(--rm-fs-body)] font-semibold text-[var(--rm-fall-meta-text)]">Aug 29th</span>
    </div>
    <div className="flex items-center gap-1.5">
      <IconClock color="var(--rm-fall-meta-text)" />
      <span className="text-[length:var(--rm-fs-body)] font-semibold text-[var(--rm-fall-meta-text)]">07:02 AM</span>
    </div>
  </div>
);

const FallClipNeedsReview = ({ onClassify }) => (
  <>
    <div className="mb-3.5 flex items-center justify-between">
      <Badge
        {...RM_BADGE_PRESETS.dashed}
        className="inline-flex items-center gap-1.5 rounded-[20px] px-3 py-[5px] text-[length:var(--rm-fs-meta)] font-semibold"
      >
        <span className="text-[length:var(--rm-fs-meta)] font-semibold text-[var(--rm-fall-chip-dashed-text)]">Fall</span>
        <IconQuestionCircle />
      </Badge>
      <Badge
        {...RM_BADGE_PRESETS.warning}
        className="rounded-[20px] px-[14px] py-[6px] text-[length:var(--rm-fs-meta)] font-bold"
      >
        <span className="text-[length:var(--rm-fs-meta)] font-bold text-[var(--rm-fall-chip-warning-text)]">Needs review</span>
      </Badge>
    </div>

    <div className="mb-3 text-[length:var(--rm-fs-body)] font-bold tracking-[-0.2px] text-[var(--rm-fall-review-question)]">
      Please review the clip. What happened?
    </div>

    <div className="mb-[18px] grid grid-cols-2 gap-[9px]">
      {["Fall", "Not a fall", "Uncertain", "Safe to ground"].map((opt) => (
        <Button
          type="button"
          key={opt}
          {...RM_BUTTON_PRESETS.fallReviewOption}
          onClick={() => onClassify(opt)}
          className="min-h-[52px] rounded-xl px-2 py-[13px] text-center text-[length:var(--rm-fs-body)] font-semibold leading-[1.24] [background:var(--rm-fall-review-option-bg)] [border-color:var(--rm-fall-review-option-border)] text-[var(--rm-fall-review-option-text)] hover:[background:var(--rm-fall-review-option-bg-hover)] focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-fall-focus-outline)] active:scale-[0.994]"
        >
          {opt}
        </Button>
      ))}
    </div>
  </>
);

const FallClipReviewed = ({ classification, onEdit }) => (
  <div className="mb-4 flex flex-wrap items-center gap-2">
    <Badge
      {...RM_BADGE_PRESETS.critical}
      className="rounded-[20px] px-3 py-[5px] text-[length:var(--rm-fs-meta)] font-bold"
    >
      <span className="text-[length:var(--rm-fs-meta)] font-bold text-[var(--rm-fall-chip-critical-text)]">Fall</span>
    </Badge>
    <Badge
      {...RM_BADGE_PRESETS.success}
      className="rounded-[20px] px-3 py-[5px] text-[length:var(--rm-fs-meta)] font-bold"
    >
      <span className="text-[length:var(--rm-fs-meta)] font-bold text-[var(--rm-fall-chip-reviewed-text)]">
        {classification || "Without injury"}
      </span>
    </Badge>
    <Button
      type="button"
      {...RM_BUTTON_PRESETS.fallEdit}
      onClick={onEdit}
      className="flex min-h-[var(--rm-hit-compact)] items-center gap-[5px] rounded-[20px] px-3 py-2 [background:var(--rm-fall-edit-bg)] [border-color:var(--rm-fall-edit-border)] focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-fall-focus-outline)] active:scale-[0.994]"
    >
      <IconEdit />
      <span className="text-[length:var(--rm-fs-meta)] font-semibold text-[var(--rm-fall-edit-label)]">Edit</span>
    </Button>
    <div className="ml-auto flex min-h-6 items-center gap-[5px]">
      <span className="text-[length:var(--rm-fs-meta)] font-medium text-[var(--rm-fall-reviewed-status-label)]">
        Reviewed
      </span>
      <IconCheckCircle />
    </div>
  </div>
);

const FallClipStats = () => {
  const stats = [
    { label: "Reaction time", value: "10s", icon: <IconStatReaction color="var(--rm-fall-stat-icon)" /> },
    { label: "Time on floor", value: "11m", icon: <IconStatClock color="var(--rm-fall-stat-icon)" /> },
  ];

  return (
    <div className="mb-[22px] grid grid-cols-2 gap-3">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-[14px] border px-[14px] pb-3 pt-3 [background:var(--rm-fall-stat-card-bg)] [border-color:var(--rm-fall-stat-card-border)]">
          <div className="mb-2 text-[length:var(--rm-fs-meta)] font-medium text-[var(--rm-fall-stat-label)]">
            {stat.label}
          </div>
          <div className="flex items-center gap-2">
            {stat.icon}
            <span className="text-[length:var(--rm-fs-title-strong)] font-bold tracking-[-0.5px] text-[var(--rm-fall-stat-value)]">
              {stat.value}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

const FallClipTimeline = ({ events }) => (
  <div className="pl-0">
    {events.map((ev, i) => (
      <div key={i} className="relative flex items-start">
        <div className="flex w-11 shrink-0 flex-col items-center">
          {i > 0 && (
            <div
              className={cn(
                "mb-[-2px] h-5 w-0.5 [background:var(--rm-fall-timeline-rail)]",
                i === events.length - 1 && "[background:var(--rm-fall-timeline-success)]"
              )}
            />
          )}

          <div
            className={cn(
              "z-[1] size-3 rounded-full",
              ev.dotTone === "success"
                ? "[background:var(--rm-fall-timeline-success)] [box-shadow:var(--rm-fall-timeline-success-glow)]"
                : "[background:var(--rm-fall-timeline-critical-dot)] [box-shadow:var(--rm-fall-timeline-critical-glow)]"
            )}
          />

          {!ev.isLast && <div className="min-h-[22px] w-0.5 flex-1 [background:var(--rm-fall-timeline-rail)]" />}
          {ev.isLast && (
            <>
              <div className="h-4 w-0.5 [background:var(--rm-fall-timeline-success)]" />
              <div className="size-3 rounded-full [background:var(--rm-fall-timeline-success)] [box-shadow:var(--rm-fall-timeline-success-glow)]" />
            </>
          )}
        </div>

        <div className={cn("flex min-w-0 flex-1 items-center gap-3 pb-5", ev.isLast && "pb-1.5")}>
          <span className="min-w-[38px] text-[length:var(--rm-fs-meta)] font-medium tabular-nums text-[var(--rm-fall-timeline-time)]">
            {ev.time}
          </span>
          {ev.icon}
          <span className="text-[length:var(--rm-fs-body)] font-semibold leading-[1.22] tracking-[-0.1px] text-[var(--rm-fall-timeline-label)]">
            {ev.label}
          </span>
        </div>
      </div>
    ))}
  </div>
);

const FallClipBackButton = ({ onBack }) => (
  <div className="pointer-events-none absolute inset-x-0 top-0 flex h-[calc(60px+env(safe-area-inset-top,0px))] items-end px-[14px] pb-2 [background:var(--rm-fall-back-overlay)]">
    <Button
      type="button"
      {...RM_BUTTON_PRESETS.floatingBack}
      onClick={onBack}
      className="pointer-events-auto flex min-h-[var(--rm-hit-min)] items-center gap-1.5 rounded-[20px] px-3 pb-[9px] pt-[9px] focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-fall-focus-outline)] active:scale-[0.994]"
    >
      <IconArrowLeft
        width={16}
        height={13}
        viewBox="0 0 16 13"
        stroke="var(--rm-fall-back-icon)"
        strokeWidth={2}
        path="M14 6.5H2M7 1L2 6.5L7 12"
      />
      <span className="text-[length:var(--rm-fs-meta)] font-semibold text-[var(--rm-fall-back-label)]">Back</span>
    </Button>
  </div>
);

export {
  FallClipBackButton,
  FallClipMetaRow,
  FallClipNeedsReview,
  FallClipReviewed,
  FallClipStats,
  FallClipTimeline,
};
