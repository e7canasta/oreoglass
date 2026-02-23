import { Button } from "@/components/ui/button";
import { ThermalView } from "../thermal.jsx";
import { RM_BUTTON_PRESETS } from "../../lib/design-system.js";

const FeaturedClipCard = ({ clip, onOpen }) => (
  <Button
    type="button"
    {...RM_BUTTON_PRESETS.criticalCard}
    onClick={onOpen}
    className="relative mb-3.5 block h-[var(--rm-critical-featured-height)] w-full overflow-hidden rounded-[var(--rm-critical-featured-radius)] border text-left [background:var(--rm-critical-featured-bg)] [border-color:var(--rm-critical-featured-border)] [box-shadow:var(--rm-critical-featured-shadow)] focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[outline-color:var(--rm-critical-focus-outline)]"
  >
    <div className="absolute inset-0">
      <ThermalView />
    </div>
    <div className="absolute inset-0 [background:var(--rm-critical-featured-gradient)]" />
    <div className="absolute bottom-3 left-3.5 flex items-center gap-3">
      <span className="text-[length:var(--rm-fs-meta)] font-medium text-[var(--rm-critical-featured-date)]">{clip.date}</span>
      <span className="text-[length:var(--rm-fs-meta)] font-bold tracking-[0.2px] text-[var(--rm-critical-featured-time)]">
        {clip.time}
      </span>
    </div>
  </Button>
);

export { FeaturedClipCard };
