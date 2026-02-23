const presetButton = (variant, size) => Object.freeze({ variant, size });
const presetBadge = (variant) => Object.freeze({ variant });

const RM_BUTTON_PRESETS = Object.freeze({
  alarmClose: presetButton("alarm-close", "icon-touch"),
  alarmPrimary: presetButton("alarm-primary", "touch"),
  alarmSecondary: presetButton("alarm-secondary", "touch"),
  alarmForward: presetButton("alarm-forward", "touch"),
  criticalHeaderBack: presetButton("glass", "icon-touch"),
  criticalCard: presetButton("surface", "tile"),
  fallReviewOption: presetButton("surface", "touch"),
  fallEdit: presetButton("surface-pill", "touch"),
  floatingBack: presetButton("glass", "touch"),
  labOpen: presetButton("surface", "touch"),
  labDrawerPrimary: presetButton("surface", "touch"),
  labDrawerSecondary: presetButton("surface", "touch"),
  labRoomCard: presetButton("surface", "tile"),
});

const RM_BADGE_PRESETS = Object.freeze({
  critical: presetBadge("critical"),
  criticalMuted: presetBadge("critical-muted"),
  warning: presetBadge("warning"),
  success: presetBadge("success"),
  dashed: presetBadge("dashed"),
});

const RM_OVERVIEW_ACTION_VARIANT_BY_TONE = Object.freeze({
  critical: "overview-critical",
  neutral: "overview-neutral",
  muted: "overview-muted",
  blank: "overview-blank",
});

const LAB_MODERN_DOT_CLASS_BY_COLOR = Object.freeze({
  orange: "lab-modern-room-dot-orange",
  blue: "lab-modern-room-dot-blue",
  yellow: "lab-modern-room-dot-yellow",
});

export {
  LAB_MODERN_DOT_CLASS_BY_COLOR,
  RM_BADGE_PRESETS,
  RM_BUTTON_PRESETS,
  RM_OVERVIEW_ACTION_VARIANT_BY_TONE,
};
