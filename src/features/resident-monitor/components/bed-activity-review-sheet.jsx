import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { ALERT_SHEET_BEHAVIOR } from "../lib/sheet-behaviors.js";
import { BottomSheetHandle, BottomSheetShell } from "./sheets/index.js";
import { IconArrowRight, IconEdit, IconPlay } from "./ui-icons/index.js";

const ReviewChoiceButton = ({ icon, title, subtitle, onClick, tone = "secondary" }) => (
  <Button
    type="button"
    variant="unstyled"
    size="unstyled"
    onClick={onClick}
    data-tone={tone}
    className={cn(
      "rm-bed-review-option group flex [min-height:var(--rm-alarm-action-min-height)] w-full items-center gap-3 rounded-[var(--rm-alarm-action-radius)] border px-[14px] py-[10px] text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-bed-review-focus)] active:scale-[0.99]",
      tone === "primary"
        ? "[background:var(--rm-bed-review-action-primary-bg)] [border-color:var(--rm-bed-review-action-primary-border)] [box-shadow:var(--rm-bed-review-action-primary-shadow)]"
        : "[background:var(--rm-bed-review-action-secondary-bg)] [border-color:var(--rm-bed-review-action-secondary-border)] [box-shadow:var(--rm-bed-review-action-secondary-shadow)]"
    )}
  >
    <span
      className={cn(
        "flex size-8 shrink-0 items-center justify-center rounded-[10px] border",
        tone === "primary"
          ? "[background:var(--rm-bed-review-action-primary-icon-bg)] [border-color:var(--rm-bed-review-action-primary-icon-border)] text-[var(--rm-bed-review-action-primary-icon)]"
          : "[background:var(--rm-bed-review-action-secondary-icon-bg)] [border-color:var(--rm-bed-review-action-secondary-icon-border)] text-[var(--rm-bed-review-action-secondary-icon)]"
      )}
    >
      {icon}
    </span>

    <span className="min-w-0 flex-1">
      <span
        className={cn(
          "block truncate text-[length:var(--rm-fs-body-strong)] font-bold tracking-[-0.2px]",
          tone === "primary" ? "text-[var(--rm-bed-review-action-primary-text)]" : "text-[var(--rm-bed-review-action-secondary-text)]"
        )}
      >
        {title}
      </span>
      <span
        className={cn(
          "block truncate text-[length:var(--rm-fs-meta)]",
          tone === "primary" ? "text-[var(--rm-bed-review-action-primary-meta)]" : "text-[var(--rm-bed-review-action-secondary-meta)]"
        )}
      >
        {subtitle}
      </span>
    </span>

    <span className={cn("shrink-0 transition-transform group-active:translate-x-[1px]", tone === "primary" ? "text-[var(--rm-bed-review-action-primary-icon)]" : "text-[var(--rm-bed-review-action-secondary-icon)]")}>
      <IconArrowRight stroke="currentColor" />
    </span>
  </Button>
);

const BedActivityReviewSheet = ({
  open,
  onOpenChange,
  onClose,
  onOpenClip,
  onOpenQuestionnaire,
}) => (
  <BottomSheetShell
    open={open}
    onOpenChange={onOpenChange}
    onClose={onClose}
    sheetBehavior={ALERT_SHEET_BEHAVIOR}
    overlayClassName="rm-bed-review-overlay"
    className="rm-sheet-surface rm-bed-review-sheet fixed inset-x-0 bottom-0 rounded-t-[var(--rm-bed-review-sheet-radius)] border px-4 [padding-bottom:var(--rm-bed-review-sheet-padding-bottom)] pt-3 [background:var(--rm-bed-review-sheet-bg)] [box-shadow:var(--rm-bed-review-sheet-shadow)] [border-color:var(--rm-bed-review-sheet-border)]"
    ariaLabel="Review actions"
  >
    <div
      aria-hidden
      className="pointer-events-none mx-auto mb-2 h-[2px] w-[calc(100%-34px)] rounded-full [background:var(--rm-bed-review-top-line)] [box-shadow:var(--rm-bed-review-top-line-shadow)]"
    />
    <BottomSheetHandle
      wrapperClassName="mb-2.5"
      className="[background:var(--rm-bed-review-handle)]"
    />

    <div className="rm-bed-review-head mb-3.5">
      <h3 className="text-[length:var(--rm-fs-title)] font-bold tracking-[-0.3px] text-[var(--rm-bed-review-title)]">
        Clip review
      </h3>
      <p className="mt-0.5 text-[length:var(--rm-fs-meta)] text-[var(--rm-bed-review-subtitle)]">
        Choose the next triage action
      </p>
    </div>

    <div className="grid gap-2.5">
      <ReviewChoiceButton
        tone="primary"
        icon={<IconPlay width={10} height={11} fill="currentColor" />}
        title="View fall clip"
        subtitle="Inspect clip"
        onClick={onOpenClip}
      />
      <ReviewChoiceButton
        icon={<IconEdit stroke="currentColor" />}
        title="Classification form"
        subtitle="Document clinical outcome"
        onClick={onOpenQuestionnaire}
      />
    </div>
  </BottomSheetShell>
);

export { BedActivityReviewSheet };
