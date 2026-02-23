import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { IconInBed, IconSittingOnBedLarge, IconStanding } from "./icons.jsx";
import { IconStatusWifi } from "./ui-icons/index.js";

const OVERVIEW_ACTIVITY_FEED = Object.freeze([
  {
    id: "toast-standing",
    resident: "Anne",
    event: "Standing up",
    tone: "alert",
    icon: "standing",
  },
  {
    id: "toast-sitting-edge",
    resident: "Jorgen",
    event: "Sitting on edge of bed",
    tone: "warning",
    icon: "sitting-edge",
  },
  {
    id: "toast-in-bed",
    resident: "Luca",
    event: "Back in bed",
    tone: "neutral",
    icon: "in-bed",
  },
]);

const toneClassesFor = (tone) => {
  if (tone === "alert") {
    return "[background:var(--rm-overview-dot-orange-bg)] [box-shadow:var(--rm-overview-dot-orange-shadow)]";
  }

  if (tone === "warning") {
    return "[background:var(--rm-overview-dot-yellow-bg)] [box-shadow:var(--rm-overview-dot-yellow-shadow)]";
  }

  return "[background:var(--rm-overview-dot-blue-bg)] [box-shadow:var(--rm-overview-dot-blue-shadow)]";
};

const activityIconFor = (icon) => {
  if (icon === "standing") {
    return <IconStanding size={22} color="rgba(255, 255, 255, 0.94)" />;
  }

  if (icon === "sitting-edge") {
    return <IconSittingOnBedLarge size={24} color="rgba(255, 255, 255, 0.94)" />;
  }

  return <IconInBed size={24} color="rgba(255, 255, 255, 0.94)" accent="rgba(210, 232, 255, 0.9)" />;
};

const TOAST_INITIAL_DELAY_MS = 4200;
const TOAST_HIDE_DELAY_MS = 3000;
const TOAST_CYCLE_MS = 18200;

const OverviewActivityToast = ({ active }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const item = OVERVIEW_ACTIVITY_FEED[activeItemIndex] ?? OVERVIEW_ACTIVITY_FEED[0];

  useEffect(() => {
    if (!active) {
      setIsVisible(false);
      return undefined;
    }

    let hideTimerId = null;
    let cycleTimerId = null;
    let initialTimerId = null;

    const showToast = ({ advance = false } = {}) => {
      if (advance) {
        setActiveItemIndex((prevIndex) => (prevIndex + 1) % OVERVIEW_ACTIVITY_FEED.length);
      }

      setIsVisible(true);
      window.clearTimeout(hideTimerId);
      hideTimerId = window.setTimeout(() => {
        setIsVisible(false);
      }, TOAST_HIDE_DELAY_MS);

      window.clearTimeout(cycleTimerId);
      cycleTimerId = window.setTimeout(() => {
        showToast({ advance: true });
      }, TOAST_CYCLE_MS);
    };

    initialTimerId = window.setTimeout(() => {
      showToast();
    }, TOAST_INITIAL_DELAY_MS);

    return () => {
      window.clearTimeout(initialTimerId);
      window.clearTimeout(hideTimerId);
      window.clearTimeout(cycleTimerId);
    };
  }, [active]);

  if (!item) {
    return null;
  }

  return (
    <div
      className={cn(
        "pointer-events-none absolute left-1/2 [top:calc(var(--rm-safe-top)+64px)] [z-index:var(--rm-z-countdown)] w-[min(92vw,376px)] -translate-x-1/2 transition-all duration-250 ease-out",
        active && isVisible ? "translate-y-0 opacity-100" : "-translate-y-1.5 opacity-0",
      )}
      aria-hidden={!active || !isVisible}
    >
      <div className="rm-overview-toast flex items-center gap-3 rounded-[18px] border px-3 py-2 [background:var(--rm-overview-countdown-bg)] [border-color:var(--rm-overview-countdown-border)] [box-shadow:var(--rm-overview-countdown-shadow)]">
        <div
          className={cn(
            "flex size-12 shrink-0 items-center justify-center rounded-[12px]",
            toneClassesFor(item.tone),
          )}
        >
          {activityIconFor(item.icon)}
        </div>

        <div className="min-w-0 flex-1">
          <div className="truncate text-[length:var(--rm-fs-body)] text-[var(--rm-overview-action-meta)]">{item.resident}</div>
          <div className="truncate text-[length:var(--rm-fs-title)] font-semibold leading-[1.12] text-[var(--rm-overview-action-text)]">
            {item.event}
          </div>
        </div>

        <div className="flex shrink-0 flex-col items-end gap-1">
          <span className="text-[length:var(--rm-fs-body)] text-[var(--rm-overview-action-meta)]">now</span>
          <span className="inline-flex size-[26px] items-center justify-center rounded-[8px] border [background:rgba(255,255,255,0.82)] [border-color:rgba(255,255,255,0.72)]">
            <IconStatusWifi fill="rgba(29, 33, 44, 0.84)" />
          </span>
        </div>
      </div>
    </div>
  );
};

export { OverviewActivityToast };
