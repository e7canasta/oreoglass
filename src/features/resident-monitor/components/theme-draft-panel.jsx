import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { THEME_PRESETS, themePresetSupportsLight } from "../lib/theme-draft.js";
import { IconThemeIdea, IconThemeMoon, IconThemeSun } from "./ui-icons/index.js";

const ThemePresetCard = ({ preset, isActive, onSelect }) => (
  <button
    type="button"
    onClick={() => onSelect(preset.id)}
    className={cn(
      "grid w-full cursor-pointer gap-1 rounded-xl border p-2.5 text-left transition-colors",
      "[border-color:var(--rm-theme-preset-border)] [background:var(--rm-theme-preset-bg)]",
      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-theme-focus-outline)]",
      isActive && "[border-color:var(--rm-theme-preset-active-border)] [background:var(--rm-theme-preset-active-bg)]"
    )}
    aria-pressed={isActive}
  >
    <span className="text-[length:var(--rm-fs-meta)] font-bold [color:var(--rm-theme-preset-title)]">{preset.label}</span>
    <span className="text-[length:var(--rm-fs-caption)] leading-[1.3] [color:var(--rm-theme-preset-description)]">{preset.description}</span>
    {isActive && (
      <Badge variant="critical" className="mt-0.5 w-fit rounded-full px-[7px] py-[2px] text-[10px]">
        Active
      </Badge>
    )}
  </button>
);

const ThemeDraftPanel = ({
  isOpen,
  onToggle,
  preset,
  mode,
  onSelectPreset,
  onSelectMode,
}) => {
  const supportsLight = themePresetSupportsLight(preset);
  const effectiveMode = supportsLight ? mode : "dark";

  return (
    <>
      <Button
        type="button"
        variant="glass"
        size="icon-touch"
        onClick={() => onToggle(!isOpen)}
        title="Draft theme switcher"
        aria-label="Draft theme switcher"
        className={cn(
          "absolute right-3 [top:var(--rm-theme-toggle-top)] [z-index:var(--rm-z-theme-panel)] scale-[0.92] opacity-[0.52] transition-all",
          "hover:opacity-[0.86] hover:scale-100 focus-visible:opacity-[0.86] focus-visible:scale-100",
          isOpen && "scale-100 opacity-[0.86]"
        )}
      >
        <IconThemeIdea />
      </Button>

      {isOpen && (
        <section
          className="absolute right-2.5 [top:var(--rm-theme-panel-top)] [z-index:var(--rm-z-theme-panel)] grid w-[min(286px,calc(100vw-20px))] gap-2.5 rounded-[18px] border p-3 [border-color:var(--rm-theme-panel-border)] [background:var(--rm-theme-panel-bg)] [backdrop-filter:blur(22px)_saturate(1.1)] [box-shadow:var(--rm-theme-panel-shadow)]"
          role="dialog"
          aria-label="Theme draft panel"
        >
          <header className="flex items-center justify-between gap-2">
            <div className="grid min-w-0 gap-0.5">
              <span className="text-[length:var(--rm-fs-body)] font-bold tracking-[-0.2px] [color:var(--rm-theme-panel-title)]">Draft Styles</span>
              <span className="text-[length:var(--rm-fs-caption)] font-medium [color:var(--rm-theme-panel-subtitle)]">Sandbox para claude/claude-plus</span>
            </div>
            <Badge variant="dashed" className="rounded-full text-[10px] tracking-[0.3px]">
              Beta
            </Badge>
          </header>

          <div className="grid gap-2">
            {THEME_PRESETS.map((themePreset) => (
              <ThemePresetCard
                key={themePreset.id}
                preset={themePreset}
                isActive={preset === themePreset.id}
                onSelect={onSelectPreset}
              />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Button
              type="button"
              variant="surface-pill"
              size="touch"
              onClick={() => onSelectMode("dark")}
              aria-pressed={effectiveMode === "dark"}
              className={cn(
                "min-h-10 gap-1.5 text-[length:var(--rm-fs-meta)] font-bold [color:var(--rm-theme-mode-text)]",
                effectiveMode === "dark" &&
                  "[border-color:var(--rm-theme-mode-active-border)] [color:var(--rm-theme-preset-title)] [box-shadow:var(--rm-theme-mode-active-shadow)]"
              )}
            >
              <IconThemeMoon />
              Dark
            </Button>
            <Button
              type="button"
              variant="surface-pill"
              size="touch"
              onClick={() => onSelectMode("light")}
              disabled={!supportsLight}
              aria-pressed={effectiveMode === "light"}
              className={cn(
                "min-h-10 gap-1.5 text-[length:var(--rm-fs-meta)] font-bold [color:var(--rm-theme-mode-text)] disabled:opacity-[0.38]",
                effectiveMode === "light" &&
                  "[border-color:var(--rm-theme-mode-active-border)] [color:var(--rm-theme-preset-title)] [box-shadow:var(--rm-theme-mode-active-shadow)]"
              )}
            >
              <IconThemeSun />
              Light
            </Button>
          </div>

          {!supportsLight && (
            <p className="m-0 text-[11px] leading-[1.35] [color:var(--rm-theme-panel-note)]">
              Current se mantiene dark-only para no romper legibilidad operativa.
            </p>
          )}
        </section>
      )}
    </>
  );
};

export { ThemeDraftPanel };
