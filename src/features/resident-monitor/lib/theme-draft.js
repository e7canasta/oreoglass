const THEME_PRESETS = Object.freeze([
  {
    id: "current",
    label: "Current",
    description: "Estilo operativo actual (dark-only)",
    supportsLight: false,
  },
  {
    id: "claude-original",
    label: "Claude Original",
    description: "Clon base desde docs/themes/claude",
    supportsLight: true,
  },
  {
    id: "claude",
    label: "Claude",
    description: "Base neutral de Claude en light/dark",
    supportsLight: true,
  },
  {
    id: "claude-plus",
    label: "Claude Plus",
    description: "Claude con acentos y contraste de triage",
    supportsLight: true,
  },
]);

const THEME_MODES = Object.freeze(["dark", "light"]);
const DEFAULT_THEME_PRESET = "current";
const DEFAULT_THEME_MODE = "dark";
const THEME_DRAFT_STORAGE_KEY = "resident-monitor:draft-theme:v1";

const getThemePresetById = (presetId) =>
  THEME_PRESETS.find((preset) => preset.id === presetId) ?? THEME_PRESETS[0];

const themePresetSupportsLight = (presetId) => getThemePresetById(presetId).supportsLight;

const normalizeThemeDraft = (draft) => {
  const preset = getThemePresetById(draft?.preset).id;
  const requestedMode = THEME_MODES.includes(draft?.mode) ? draft.mode : DEFAULT_THEME_MODE;
  const mode = themePresetSupportsLight(preset) ? requestedMode : "dark";

  return { preset, mode };
};

const loadThemeDraft = () => {
  if (typeof window === "undefined") {
    return { preset: DEFAULT_THEME_PRESET, mode: DEFAULT_THEME_MODE };
  }

  try {
    const rawValue = window.localStorage.getItem(THEME_DRAFT_STORAGE_KEY);

    if (!rawValue) {
      return { preset: DEFAULT_THEME_PRESET, mode: DEFAULT_THEME_MODE };
    }

    return normalizeThemeDraft(JSON.parse(rawValue));
  } catch {
    return { preset: DEFAULT_THEME_PRESET, mode: DEFAULT_THEME_MODE };
  }
};

const saveThemeDraft = (draft) => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(THEME_DRAFT_STORAGE_KEY, JSON.stringify(normalizeThemeDraft(draft)));
};

export {
  DEFAULT_THEME_MODE,
  DEFAULT_THEME_PRESET,
  THEME_DRAFT_STORAGE_KEY,
  THEME_MODES,
  THEME_PRESETS,
  getThemePresetById,
  loadThemeDraft,
  normalizeThemeDraft,
  saveThemeDraft,
  themePresetSupportsLight,
};
