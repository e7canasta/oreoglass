import { useEffect, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BedActivityReviewSheet } from "../bed-activity-review-sheet.jsx";
import { IconFalling, IconInBed, IconLayingOnFloor, IconPersonGreen, IconSittingOnBedLarge, IconStaffEnter, IconStanding } from "../icons.jsx";
import { ActivityTile, SleepChart } from "../room-detail/widgets/index.js";
import { CountdownBar, RoomCard } from "../room-overview.jsx";
import { ThermalThumb, ThermalView, ThermalViewLive } from "../thermal.jsx";
import {
  IconAlertMark,
  IconAppGrid,
  IconArrowLeft,
  IconArrowRight,
  IconCalendar,
  IconCheck,
  IconCheckCircle,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconClock,
  IconClose,
  IconEdit,
  IconOverviewTab,
  IconPause,
  IconPersonGlyph,
  IconPlay,
  IconQuestionCircle,
  IconSettingsTab,
  IconStatusSignal,
  IconStatusWifi,
  IconSupportTab,
  IconTrendDown,
  IconTrendUp,
  IconVolume,
  IconWideChevronDown,
} from "../ui-icons/index.js";
import { VideoControls, VideoScrubber } from "../video.jsx";
import { IconGrid } from "./icon-grid.jsx";
import { LabSection } from "./lab-section.jsx";

const LAB_ROOMS = [
  { number: "513", location: "Bellevue", status: "alert", dots: ["orange"] },
  { number: "223", location: "Bellevue", status: "out", dots: ["blue"] },
  { number: "405", location: "Alma Way", status: "sleep", dots: ["yellow", "person"] },
];

const DOMAIN_ICON_ITEMS = [
  { label: "In bed", node: <IconInBed size={52} /> },
  { label: "Sitting", node: <IconSittingOnBedLarge size={58} /> },
  { label: "Falling", node: <IconFalling size={30} /> },
  { label: "Person", node: <IconPersonGreen size={30} /> },
  { label: "Standing", node: <IconStanding size={30} /> },
  { label: "Laying", node: <IconLayingOnFloor size={24} /> },
  { label: "Staff", node: <IconStaffEnter size={46} /> },
];

const UI_ICON_ITEMS = [
  { label: "Status signal", node: <IconStatusSignal /> },
  { label: "Status wifi", node: <IconStatusWifi /> },
  { label: "App grid", node: <IconAppGrid /> },
  { label: "Arrow left", node: <IconArrowLeft /> },
  { label: "Arrow right", node: <IconArrowRight /> },
  { label: "Chevron down", node: <IconChevronDown /> },
  { label: "Chevron left", node: <IconChevronLeft /> },
  { label: "Chevron right", node: <IconChevronRight /> },
  { label: "Wide chevron", node: <IconWideChevronDown /> },
  { label: "Close", node: <IconClose /> },
  { label: "Alert mark", node: <IconAlertMark /> },
  { label: "Check", node: <IconCheck /> },
  { label: "Play", node: <IconPlay /> },
  { label: "Pause", node: <IconPause /> },
  { label: "Volume", node: <IconVolume /> },
  { label: "Calendar", node: <IconCalendar /> },
  { label: "Clock", node: <IconClock /> },
  { label: "Question", node: <IconQuestionCircle /> },
  { label: "Edit", node: <IconEdit /> },
  { label: "Check circle", node: <IconCheckCircle /> },
  { label: "Overview tab", node: <IconOverviewTab /> },
  { label: "Support tab", node: <IconSupportTab /> },
  { label: "Settings tab", node: <IconSettingsTab /> },
  { label: "Person glyph", node: <IconPersonGlyph /> },
  { label: "Trend down", node: <IconTrendDown /> },
  { label: "Trend up", node: <IconTrendUp /> },
];

const noop = () => {};

const DEFAULT_BED_REVIEW_MOTION_TUNING = Object.freeze({
  overlayBeforeStrong: 0.3,
  overlayAfterStrong: 0.14,
  overlayBlurPx: 15,
  sheetEnterMs: 270,
  optionEnterMs: 290,
  primaryDelayMs: 34,
  secondaryDelayMs: 74,
});

const MOTION_PRESET_ITEMS = Object.freeze([
  { id: "soft", label: "Soft" },
  { id: "balanced", label: "Balanced" },
  { id: "urgent", label: "Urgent" },
]);

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const round = (value) => Math.round(value);
const round2 = (value) => Number.parseFloat(value.toFixed(2));

const createMotionPresetSet = (baseline) => {
  const base = baseline ?? DEFAULT_BED_REVIEW_MOTION_TUNING;

  return {
    soft: {
      overlayBeforeStrong: round2(clamp(base.overlayBeforeStrong * 0.8, 0.1, 0.6)),
      overlayAfterStrong: round2(clamp(base.overlayAfterStrong * 0.78, 0.06, 0.4)),
      overlayBlurPx: clamp(round(base.overlayBlurPx + 2), 8, 24),
      sheetEnterMs: clamp(round(base.sheetEnterMs * 1.12), 180, 420),
      optionEnterMs: clamp(round(base.optionEnterMs * 1.14), 180, 420),
      primaryDelayMs: clamp(round(base.primaryDelayMs + 14), 0, 140),
      secondaryDelayMs: clamp(round(base.secondaryDelayMs + 20), 12, 220),
    },
    balanced: {
      overlayBeforeStrong: round2(clamp(base.overlayBeforeStrong, 0.1, 0.6)),
      overlayAfterStrong: round2(clamp(base.overlayAfterStrong, 0.06, 0.4)),
      overlayBlurPx: clamp(round(base.overlayBlurPx), 8, 24),
      sheetEnterMs: clamp(round(base.sheetEnterMs), 180, 420),
      optionEnterMs: clamp(round(base.optionEnterMs), 180, 420),
      primaryDelayMs: clamp(round(base.primaryDelayMs), 0, 140),
      secondaryDelayMs: clamp(round(base.secondaryDelayMs), 12, 220),
    },
    urgent: {
      overlayBeforeStrong: round2(clamp(base.overlayBeforeStrong * 1.28, 0.1, 0.6)),
      overlayAfterStrong: round2(clamp(base.overlayAfterStrong * 1.24, 0.06, 0.4)),
      overlayBlurPx: clamp(round(base.overlayBlurPx - 1), 8, 24),
      sheetEnterMs: clamp(round(base.sheetEnterMs * 0.82), 180, 420),
      optionEnterMs: clamp(round(base.optionEnterMs * 0.8), 180, 420),
      primaryDelayMs: clamp(round(base.primaryDelayMs * 0.5), 0, 140),
      secondaryDelayMs: clamp(round(base.secondaryDelayMs * 0.56), 12, 220),
    },
  };
};

const parseCssFloat = (value, fallback) => {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const parseCssDurationMs = (value, fallbackMs) => {
  const normalized = (value ?? "").trim();
  if (!normalized) {
    return fallbackMs;
  }

  if (normalized.endsWith("ms")) {
    return parseCssFloat(normalized, fallbackMs);
  }

  if (normalized.endsWith("s")) {
    return parseCssFloat(normalized, fallbackMs / 1000) * 1000;
  }

  return fallbackMs;
};

const readBedReviewMotionTuning = () => {
  if (typeof document === "undefined") {
    return { ...DEFAULT_BED_REVIEW_MOTION_TUNING };
  }

  const root = document.querySelector(".monitor-app-root");
  if (!root) {
    return { ...DEFAULT_BED_REVIEW_MOTION_TUNING };
  }

  const computed = getComputedStyle(root);
  return {
    overlayBeforeStrong: parseCssFloat(
      computed.getPropertyValue("--rm-bed-review-overlay-before-strong"),
      DEFAULT_BED_REVIEW_MOTION_TUNING.overlayBeforeStrong,
    ),
    overlayAfterStrong: parseCssFloat(
      computed.getPropertyValue("--rm-bed-review-overlay-after-strong"),
      DEFAULT_BED_REVIEW_MOTION_TUNING.overlayAfterStrong,
    ),
    overlayBlurPx: parseCssFloat(
      computed.getPropertyValue("--rm-bed-review-overlay-blur"),
      DEFAULT_BED_REVIEW_MOTION_TUNING.overlayBlurPx,
    ),
    sheetEnterMs: parseCssDurationMs(
      computed.getPropertyValue("--rm-bed-review-sheet-enter-duration"),
      DEFAULT_BED_REVIEW_MOTION_TUNING.sheetEnterMs,
    ),
    optionEnterMs: parseCssDurationMs(
      computed.getPropertyValue("--rm-bed-review-option-enter-duration"),
      DEFAULT_BED_REVIEW_MOTION_TUNING.optionEnterMs,
    ),
    primaryDelayMs: parseCssDurationMs(
      computed.getPropertyValue("--rm-bed-review-option-delay-primary"),
      DEFAULT_BED_REVIEW_MOTION_TUNING.primaryDelayMs,
    ),
    secondaryDelayMs: parseCssDurationMs(
      computed.getPropertyValue("--rm-bed-review-option-delay-secondary"),
      DEFAULT_BED_REVIEW_MOTION_TUNING.secondaryDelayMs,
    ),
  };
};

const MotionSlider = ({ label, value, min, max, step, onChange, formatter = (next) => next.toString() }) => (
  <label className="grid gap-1.5">
    <span className="flex items-center justify-between text-[length:var(--lab-preview-note-size)] [color:var(--lab-surface-copy)]">
      <span>{label}</span>
      <strong className="font-semibold [color:var(--lab-pane-title)]">{formatter(value)}</strong>
    </span>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={onChange}
      className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-black/15 accent-[var(--lab-radio-accent)]"
    />
  </label>
);

const FoundationShowcase = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMotionSheetOpen, setIsMotionSheetOpen] = useState(false);
  const [baselineMotionTuning] = useState(() => readBedReviewMotionTuning());
  const motionPresets = useMemo(
    () => createMotionPresetSet(baselineMotionTuning),
    [baselineMotionTuning],
  );
  const [activeMotionPreset, setActiveMotionPreset] = useState("balanced");
  const [motionTuning, setMotionTuning] = useState(() => ({ ...createMotionPresetSet(readBedReviewMotionTuning()).balanced }));

  useEffect(() => {
    const root = document.querySelector(".monitor-app-root");
    if (!root) {
      return;
    }

    root.style.setProperty("--rm-bed-review-overlay-before-strong", motionTuning.overlayBeforeStrong.toFixed(2));
    root.style.setProperty("--rm-bed-review-overlay-after-strong", motionTuning.overlayAfterStrong.toFixed(2));
    root.style.setProperty("--rm-bed-review-overlay-blur", `${Math.round(motionTuning.overlayBlurPx)}px`);
    root.style.setProperty("--rm-bed-review-sheet-enter-duration", `${(motionTuning.sheetEnterMs / 1000).toFixed(3)}s`);
    root.style.setProperty("--rm-bed-review-head-enter-duration", `${(Math.max(140, motionTuning.sheetEnterMs - 40) / 1000).toFixed(3)}s`);
    root.style.setProperty("--rm-bed-review-option-enter-duration", `${(motionTuning.optionEnterMs / 1000).toFixed(3)}s`);
    root.style.setProperty("--rm-bed-review-option-delay-primary", `${Math.round(motionTuning.primaryDelayMs)}ms`);
    root.style.setProperty("--rm-bed-review-option-delay-secondary", `${Math.round(motionTuning.secondaryDelayMs)}ms`);
  }, [motionTuning]);

  useEffect(
    () => () => {
      const root = document.querySelector(".monitor-app-root");
      if (!root) {
        return;
      }

      [
        "--rm-bed-review-overlay-before-strong",
        "--rm-bed-review-overlay-after-strong",
        "--rm-bed-review-overlay-blur",
        "--rm-bed-review-sheet-enter-duration",
        "--rm-bed-review-head-enter-duration",
        "--rm-bed-review-option-enter-duration",
        "--rm-bed-review-option-delay-primary",
        "--rm-bed-review-option-delay-secondary",
      ].forEach((token) => root.style.removeProperty(token));
    },
    [],
  );

  const updateMotionValue = (key) => (event) => {
    const nextValue = Number(event.target.value);
    if (!Number.isFinite(nextValue)) {
      return;
    }

    setMotionTuning((prev) => ({ ...prev, [key]: nextValue }));
    setActiveMotionPreset("custom");
  };

  const applyMotionPreset = (presetId) => {
    const preset = motionPresets[presetId];
    if (!preset) {
      return;
    }

    setMotionTuning({ ...preset });
    setActiveMotionPreset(presetId);
  };

  const resetMotionTuning = () => {
    setMotionTuning({ ...motionPresets.balanced });
    setActiveMotionPreset("balanced");
  };

  return (
    <>
      <LabSection title="Domain Icons">
        <IconGrid items={DOMAIN_ICON_ITEMS} />
      </LabSection>

      <LabSection title="UI Icons">
        <IconGrid items={UI_ICON_ITEMS} />
      </LabSection>

      <LabSection title="Thermal Primitives">
        <div className="grid [row-gap:var(--lab-preview-gap)]">
          <div className="[height:var(--lab-foundation-thermal-height)] overflow-hidden rounded-[var(--lab-surface-radius)] [background:var(--lab-thermal-bg)]">
            <ThermalView />
          </div>
          <div className="[height:var(--lab-foundation-thermal-height)] overflow-hidden rounded-[var(--lab-surface-radius)] [background:var(--lab-thermal-bg)]">
            <ThermalViewLive />
          </div>
          <div className="grid grid-cols-3 [gap:var(--lab-modern-review-gap)]">
            {[0, 1, 2].map((variant) => (
              <div key={variant} className="[height:var(--lab-foundation-thumb-height)] overflow-hidden rounded-[var(--lab-foundation-thumb-radius)] [background:var(--lab-thermal-bg)]">
                <ThermalThumb variant={variant} />
              </div>
            ))}
          </div>
        </div>
      </LabSection>

      <LabSection title="Legacy Widgets">
        <div className="grid [row-gap:var(--lab-preview-gap)]">
          <div className="relative [height:var(--lab-foundation-video-height)] overflow-hidden rounded-[var(--lab-surface-radius)] [background:var(--lab-thermal-bg)]">
            <ThermalView />
            <VideoControls isPlaying={isPlaying} onToggle={() => setIsPlaying((prev) => !prev)} />
          </div>
          <div className="rounded-[var(--lab-surface-radius)] border px-3 py-2.5 [border-color:var(--lab-surface-border)] [background:var(--lab-surface-bg)]">
            <VideoScrubber />
          </div>
          <div className="flex [column-gap:var(--lab-modern-review-gap)]">
            {LAB_ROOMS.map((room) => (
              <RoomCard key={room.number} room={room} onSelect={noop} />
            ))}
          </div>
          <div className="overflow-x-auto rounded-[var(--lab-surface-radius)] border p-2 [border-color:var(--lab-surface-border)] [background:var(--lab-surface-bg)]">
            <div className="flex min-w-max [column-gap:var(--lab-modern-review-gap)]">
              <ActivityTile time="08:12" icon={<IconInBed size={32} />} />
              <ActivityTile time="09:04" icon={<IconStanding size={24} />} />
              <ActivityTile time="10:52" icon={<IconFalling size={24} />} isAlarm />
              <ActivityTile time="10:52" icon={<IconInBed size={32} />} isCurrent duration="3h 33m" />
            </div>
          </div>
          <SleepChart />
        </div>
      </LabSection>

      <LabSection title="Overlay Example">
        <div className="relative [height:var(--lab-foundation-overlay-height)] overflow-hidden rounded-[var(--lab-surface-radius)] border [border-color:var(--lab-surface-border)] [background:var(--lab-surface-bg)]">
          <CountdownBar seconds={5} total={8} />
        </div>
      </LabSection>

      <LabSection title="Motion Tuner">
        <div className="grid [row-gap:var(--lab-preview-gap)]">
          <p className="m-0 text-[length:var(--lab-preview-note-size)] [line-height:var(--lab-preview-note-line-height)] [color:var(--lab-preview-note)]">
            Ajusta en vivo los tokens del Bed Review Sheet y abre preview para validar ritmo en dark/light.
          </p>

          <div className="grid [row-gap:var(--lab-modern-review-gap)] rounded-[var(--lab-surface-radius)] border p-3 [border-color:var(--lab-surface-border)] [background:var(--lab-surface-bg)]">
            <div className="grid grid-cols-3 gap-2">
              {MOTION_PRESET_ITEMS.map((preset) => {
                const isActive = activeMotionPreset === preset.id;
                return (
                  <Button
                    key={preset.id}
                    type="button"
                    variant="unstyled"
                    className={cn(
                      "min-h-9 rounded-[10px] border px-2 py-1.5 text-[length:var(--lab-preview-note-size)] font-semibold",
                      isActive
                        ? "[border-color:var(--lab-tab-active-border)] [background:var(--lab-tab-active-bg)] [color:var(--lab-tab-title)]"
                        : "[border-color:var(--lab-modern-drawer-border)] [background:var(--lab-modern-secondary-bg)] [color:var(--lab-modern-secondary-text)]",
                    )}
                    onClick={() => applyMotionPreset(preset.id)}
                  >
                    {preset.label}
                  </Button>
                );
              })}
            </div>
            <p className="m-0 text-[length:var(--lab-preview-note-size)] [line-height:var(--lab-preview-note-line-height)] [color:var(--lab-preview-note)]">
              {activeMotionPreset === "custom"
                ? "Preset: Custom"
                : `Preset: ${
                    MOTION_PRESET_ITEMS.find((preset) => preset.id === activeMotionPreset)?.label ?? "Balanced"
                  }`}
            </p>
          </div>

          <div className="grid [row-gap:var(--lab-modern-review-gap)] rounded-[var(--lab-surface-radius)] border p-3 [border-color:var(--lab-surface-border)] [background:var(--lab-surface-bg)]">
            <MotionSlider
              label="Glow intensity"
              value={motionTuning.overlayBeforeStrong}
              min={0.1}
              max={0.6}
              step={0.01}
              onChange={updateMotionValue("overlayBeforeStrong")}
              formatter={(value) => value.toFixed(2)}
            />
            <MotionSlider
              label="Sweep intensity"
              value={motionTuning.overlayAfterStrong}
              min={0.06}
              max={0.4}
              step={0.01}
              onChange={updateMotionValue("overlayAfterStrong")}
              formatter={(value) => value.toFixed(2)}
            />
            <MotionSlider
              label="Overlay blur"
              value={motionTuning.overlayBlurPx}
              min={8}
              max={24}
              step={1}
              onChange={updateMotionValue("overlayBlurPx")}
              formatter={(value) => `${Math.round(value)}px`}
            />
            <MotionSlider
              label="Sheet enter"
              value={motionTuning.sheetEnterMs}
              min={180}
              max={420}
              step={10}
              onChange={updateMotionValue("sheetEnterMs")}
              formatter={(value) => `${Math.round(value)}ms`}
            />
            <MotionSlider
              label="Option enter"
              value={motionTuning.optionEnterMs}
              min={180}
              max={420}
              step={10}
              onChange={updateMotionValue("optionEnterMs")}
              formatter={(value) => `${Math.round(value)}ms`}
            />
            <MotionSlider
              label="Primary delay"
              value={motionTuning.primaryDelayMs}
              min={0}
              max={140}
              step={2}
              onChange={updateMotionValue("primaryDelayMs")}
              formatter={(value) => `${Math.round(value)}ms`}
            />
            <MotionSlider
              label="Secondary delay"
              value={motionTuning.secondaryDelayMs}
              min={12}
              max={220}
              step={2}
              onChange={updateMotionValue("secondaryDelayMs")}
              formatter={(value) => `${Math.round(value)}ms`}
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Button
              type="button"
              variant="unstyled"
              className="min-h-10 rounded-[11px] border px-3 py-2 text-[length:var(--lab-modern-action-font-size)] font-semibold [border-color:var(--lab-modern-drawer-border)] [background:var(--lab-modern-secondary-bg)] [color:var(--lab-modern-secondary-text)]"
              onClick={resetMotionTuning}
            >
              Reset
            </Button>
            <Button
              type="button"
              variant="unstyled"
              className="min-h-10 rounded-[11px] border-transparent px-3 py-2 text-[length:var(--lab-modern-action-font-size)] font-bold [background:var(--lab-modern-primary-bg)] [color:var(--lab-modern-primary-text)]"
              onClick={() => setIsMotionSheetOpen(true)}
            >
              Open preview
            </Button>
          </div>
        </div>

        <BedActivityReviewSheet
          open={isMotionSheetOpen}
          onOpenChange={setIsMotionSheetOpen}
          onClose={() => setIsMotionSheetOpen(false)}
          onOpenClip={() => setIsMotionSheetOpen(false)}
          onOpenQuestionnaire={() => setIsMotionSheetOpen(false)}
        />
      </LabSection>
    </>
  );
};

export { FoundationShowcase };
