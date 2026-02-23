import { RadioGroup } from "@/components/ui/radio-group";
import { AppHeaderActionButton, AppHeaderLeading, AppHeaderRow } from "./chrome/header-layout.jsx";
import { RoomSeal } from "./chrome/room-seal.jsx";
import { FallReviewOption } from "./fall-review-option.jsx";
import { ThermalView } from "./thermal.jsx";
import { IconArrowLeft } from "./ui-icons/index.js";
import { VideoScrubber } from "./video.jsx";
import { FALL_CLASSIFICATION_OPTIONS } from "../data/fall-classification-options.js";

const FallReviewHeader = ({ room, clip, onBack }) => {
  const roomNumber = room?.number ?? clip?.room ?? "";
  const locationLabel = room?.location ?? clip?.location ?? "Triage";
  const residentLabel = clip?.resident ?? "";

  return (
    <AppHeaderRow className="[column-gap:var(--rm-fall-review-header-gap)] [padding-top:var(--rm-fall-review-header-padding-top)] [padding-bottom:var(--rm-fall-review-header-padding-bottom)]">
      <AppHeaderLeading className="min-w-0 flex-1 [column-gap:var(--rm-fall-review-header-leading-gap)]">
        <AppHeaderActionButton
          onClick={onBack}
          aria-label="Back"
          className="[width:var(--rm-hit-compact)] [height:var(--rm-hit-compact)] [background:var(--rm-fall-review-back-bg)] [border-color:var(--rm-fall-review-back-border)] [backdrop-filter:blur(10px)_saturate(1.08)] focus-visible:[outline-color:var(--rm-fall-review-focus)]"
        >
          <IconArrowLeft stroke="var(--rm-fall-review-back-icon)" />
        </AppHeaderActionButton>

        <div className="min-w-0">
          <div className="truncate text-[length:var(--rm-fs-title-strong)] font-extrabold tracking-[-0.3px] text-[var(--rm-fall-review-title)]">
            Possible fall
          </div>
          <div className="mt-0.5 flex min-w-0 items-center gap-2">
            {roomNumber ? <RoomSeal roomNumber={roomNumber} /> : null}
            <div className="truncate text-[length:var(--rm-fs-meta)] text-[var(--rm-fall-review-subtitle)]">
              {residentLabel ? `${residentLabel} · ` : ""}
              {locationLabel}
            </div>
          </div>
        </div>
      </AppHeaderLeading>

      <div className="flex items-baseline gap-[5px]">
        <span className="text-[length:var(--rm-fs-body)] font-medium text-[var(--rm-fall-review-date)]">{clip?.date ?? "March 31st"}</span>
        <span className="text-[length:var(--rm-fs-body)] font-extrabold tracking-[0.3px] text-[var(--rm-fall-review-time)]">
          {clip?.time?.split("–")?.[0]?.trim() ?? "01:24"}
        </span>
      </div>
    </AppHeaderRow>
  );
};

const FallReviewThermalCard = () => (
  <div className="mx-3 mb-3.5 shrink-0 overflow-hidden rounded-[var(--rm-fall-review-thermal-radius)] border [background:var(--rm-fall-review-thermal-bg)] [border-color:var(--rm-fall-review-thermal-border)] [box-shadow:var(--rm-fall-review-thermal-shadow)]">
    <div className="relative [height:var(--rm-fall-review-thermal-height)]">
      <ThermalView />
      <div className="absolute inset-x-0 bottom-0 h-11 [background:var(--rm-fall-review-thermal-fade)]" />
    </div>
    <div className="px-[14px] pb-2.5 pt-1.5 [background:var(--rm-fall-review-scrubber-bg)]">
      <VideoScrubber />
    </div>
  </div>
);

const FallReviewClassificationList = ({ value, onValueChange }) => (
  <div className="flex flex-1 flex-col overflow-hidden px-3">
    <div className="mb-2 px-0.5 text-[length:var(--rm-fs-meta)] font-semibold text-[var(--rm-fall-review-subtitle)]">
      Select clinical outcome
    </div>
    <RadioGroup
      value={value}
      onValueChange={onValueChange}
      className="flex flex-1 flex-col gap-2 overflow-y-auto [padding-bottom:var(--rm-fall-review-list-padding-bottom)]"
      aria-label="Fall classification"
    >
      {FALL_CLASSIFICATION_OPTIONS.map((option) => (
        <FallReviewOption
          key={option}
          label={option}
          value={option}
        />
      ))}
    </RadioGroup>
  </div>
);

export {
  FallReviewClassificationList,
  FallReviewHeader,
  FallReviewThermalCard,
};
