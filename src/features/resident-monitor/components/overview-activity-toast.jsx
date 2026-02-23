import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { IconInBed, IconLayingOnFloor, IconSittingOnBedLarge, IconStanding } from "./icons.jsx";
import { RoomSeal } from "./chrome/room-seal.jsx";
import { ROOM_ART_STATE, RM_USE_RASTER_PICTOGRAMS, resolveArtImage } from "../lib/artwork-images.js";

const OVERVIEW_ACTIVITY_FEED = Object.freeze([
  {
    id: "toast-standing",
    roomLabel: "405 · Alma Way",
    event: "Standing beside",
    tone: "alert",
    icon: "standing",
    artState: ROOM_ART_STATE.STANDING_BESIDE,
    secondsAgo: 114,
  },
  {
    id: "toast-on-floor",
    roomLabel: "513 · Bellevue",
    event: "On floor fall",
    tone: "alert",
    icon: "on-floor",
    artState: ROOM_ART_STATE.ON_FLOOR,
    secondsAgo: 86,
  },
  {
    id: "toast-sitting",
    roomLabel: "210 · Alma Way",
    event: "Sitting bed",
    tone: "warning",
    icon: "sitting-edge",
    artState: ROOM_ART_STATE.SITTING_EDGE,
    secondsAgo: 54,
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

  if (icon === "on-floor") {
    return <IconLayingOnFloor size={24} color="rgba(255, 255, 255, 0.94)" />;
  }

  return <IconInBed size={24} color="rgba(255, 255, 255, 0.94)" accent="rgba(210, 232, 255, 0.9)" />;
};

const TOAST_CYCLE_MS = 7600;

const parseRoomLabel = (roomLabel) => {
  const [room, ...rest] = String(roomLabel ?? "").split(" · ");
  return {
    room: room || "",
    location: rest.join(" · "),
  };
};

const OverviewActivityToast = ({ active }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const item = OVERVIEW_ACTIVITY_FEED[activeItemIndex] ?? OVERVIEW_ACTIVITY_FEED[0];
  const artImage = resolveArtImage(item?.artState ?? ROOM_ART_STATE.IN_BED);
  const { room, location } = parseRoomLabel(item?.roomLabel);

  useEffect(() => {
    if (!active) {
      setIsVisible(false);
      return undefined;
    }

    setIsVisible(true);
    const cycleTimerId = window.setInterval(() => {
      setActiveItemIndex((prevIndex) => (prevIndex + 1) % OVERVIEW_ACTIVITY_FEED.length);
    }, TOAST_CYCLE_MS);

    return () => {
      window.clearInterval(cycleTimerId);
    };
  }, [active]);

  if (!item) {
    return null;
  }

  return (
    <div
      className={cn(
        "pointer-events-none absolute left-1/2 [top:calc(var(--rm-safe-top)+64px)] [z-index:var(--rm-z-countdown)] w-[min(96vw,430px)] -translate-x-1/2 transition-all duration-250 ease-out",
        active && isVisible ? "translate-y-0 opacity-100" : "-translate-y-1.5 opacity-0",
      )}
      aria-hidden={!active || !isVisible}
    >
      <div className="rm-overview-toast flex items-center gap-3 rounded-[18px] border px-3 py-2">
        <div className="rm-overview-toast-copy min-w-0 flex-1">
          <div className="flex min-w-0 items-center gap-2">
            <RoomSeal roomNumber={room} />
            <span className="truncate text-[length:var(--rm-fs-meta)] font-semibold tracking-[-0.08px] text-[var(--rm-overview-toast-meta)]">
              {location}
            </span>
          </div>
          <div className="whitespace-normal text-[length:var(--rm-fs-title-strong)] font-extrabold leading-[1.08] tracking-[-0.28px] text-[var(--rm-overview-toast-title)]">
            {item.event}
          </div>
          <div className="rm-overview-toast-seconds mt-1.5 text-[length:var(--rm-fs-meta)] font-medium leading-[1.02] text-[var(--rm-overview-toast-meta)]">
            <span className="rm-overview-toast-seconds-value">{item.secondsAgo}</span>
            <span className="rm-overview-toast-seconds-unit">seconds ago</span>
          </div>
        </div>

        <div className={cn("rm-overview-toast-art", `rm-overview-toast-art--${item.tone}`)}>
          {RM_USE_RASTER_PICTOGRAMS ? (
            <span className={cn("rm-overview-toast-raster", `rm-overview-toast-raster--${item.icon}`)}>
              <span className="rm-overview-toast-raster-base" />
              <img src={artImage} alt="" draggable="false" className="rm-overview-toast-raster-image" />
              <span className="rm-overview-toast-raster-tone" />
              <span className="rm-overview-toast-raster-glow" />
            </span>
          ) : (
            <div
              className={cn(
                "flex size-full items-center justify-center rounded-[14px] [background:var(--rm-overview-toast-fallback-bg)]",
                toneClassesFor(item.tone),
              )}
            >
              {activityIconFor(item.icon)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { OverviewActivityToast };
