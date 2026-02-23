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
      "border-white/10 bg-[rgba(27,32,42,0.9)]",
      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgba(255,255,255,0.7)]",
      isActive && "border-[rgba(232,67,10,0.6)] bg-[linear-gradient(160deg,rgba(68,39,29,0.92),rgba(30,26,23,0.94))]"
    )}
    aria-pressed={isActive}
  >
    <span className="text-[length:var(--rm-fs-meta)] font-bold text-white">{preset.label}</span>
    <span className="text-[length:var(--rm-fs-caption)] leading-[1.3] text-white/60">{preset.description}</span>
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
          "absolute right-3 top-[calc(114px+env(safe-area-inset-top,0px))] z-[15] scale-[0.92] opacity-[0.52] transition-all",
          "hover:opacity-[0.86] hover:scale-100 focus-visible:opacity-[0.86] focus-visible:scale-100",
          isOpen && "scale-100 opacity-[0.86]"
        )}
      >
        <IconThemeIdea />
      </Button>

      {isOpen && (
        <section
          className="absolute right-2.5 top-[calc(156px+env(safe-area-inset-top,0px))] z-[15] grid w-[min(286px,calc(100vw-20px))] gap-2.5 rounded-[18px] border border-white/15 bg-[linear-gradient(168deg,rgba(15,18,24,0.95),rgba(10,13,18,0.94))] p-3 [backdrop-filter:blur(22px)_saturate(1.1)] [box-shadow:0_14px_42px_rgba(0,0,0,0.44)]"
          role="dialog"
          aria-label="Theme draft panel"
        >
          <header className="flex items-center justify-between gap-2">
            <div className="grid min-w-0 gap-0.5">
              <span className="text-[length:var(--rm-fs-body)] font-bold tracking-[-0.2px] text-white/95">Draft Styles</span>
              <span className="text-[length:var(--rm-fs-caption)] font-medium text-white/55">Sandbox para claude/claude-plus</span>
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
                "min-h-10 gap-1.5 text-[length:var(--rm-fs-meta)] font-bold text-white/85",
                effectiveMode === "dark" && "border-[rgba(232,67,10,0.55)] text-white [box-shadow:0_0_0_1px_rgba(232,67,10,0.2)]"
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
                "min-h-10 gap-1.5 text-[length:var(--rm-fs-meta)] font-bold text-white/85 disabled:opacity-[0.38]",
                effectiveMode === "light" && "border-[rgba(232,67,10,0.55)] text-white [box-shadow:0_0_0_1px_rgba(232,67,10,0.2)]"
              )}
            >
              <IconThemeSun />
              Light
            </Button>
          </div>

          {!supportsLight && (
            <p className="m-0 text-[11px] leading-[1.35] text-white/55">
              Current se mantiene dark-only para no romper legibilidad operativa.
            </p>
          )}
        </section>
      )}
    </>
  );
};

export { ThemeDraftPanel };
