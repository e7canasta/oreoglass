import { useState } from "react";

import { IconFalling, IconInBed, IconLayingOnFloor, IconPersonGreen, IconSittingOnBedLarge, IconStaffEnter, IconStanding } from "../icons.jsx";
import { ActivityTile, SleepChart } from "../room-detail-widgets.jsx";
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

const FoundationShowcase = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <>
      <LabSection title="Domain Icons">
        <IconGrid items={DOMAIN_ICON_ITEMS} />
      </LabSection>

      <LabSection title="UI Icons">
        <IconGrid items={UI_ICON_ITEMS} />
      </LabSection>

      <LabSection title="Thermal Primitives">
        <div style={{ display: "grid", gap: 10 }}>
          <div style={{ height: 150, borderRadius: 12, overflow: "hidden", background: "#8da5bc" }}>
            <ThermalView />
          </div>
          <div style={{ height: 150, borderRadius: 12, overflow: "hidden", background: "#8da5bc" }}>
            <ThermalViewLive />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 8 }}>
            {[0, 1, 2].map((variant) => (
              <div key={variant} style={{ height: 72, borderRadius: 10, overflow: "hidden", background: "#8da5bc" }}>
                <ThermalThumb variant={variant} />
              </div>
            ))}
          </div>
        </div>
      </LabSection>

      <LabSection title="Legacy Widgets">
        <div style={{ display: "grid", gap: 10 }}>
          <div style={{ position: "relative", height: 180, borderRadius: 12, overflow: "hidden", background: "#8da5bc" }}>
            <ThermalView />
            <VideoControls isPlaying={isPlaying} onToggle={() => setIsPlaying((prev) => !prev)} />
          </div>
          <div style={{ background: "#10131a", borderRadius: 12, border: "1px solid rgba(255,255,255,0.08)", padding: "10px 12px" }}>
            <VideoScrubber />
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {LAB_ROOMS.map((room) => (
              <RoomCard key={room.number} room={room} onSelect={noop} />
            ))}
          </div>
          <div style={{ background: "#10131a", borderRadius: 12, border: "1px solid rgba(255,255,255,0.08)", padding: 8, overflowX: "auto" }}>
            <div style={{ display: "flex", gap: 8, minWidth: "max-content" }}>
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
        <div style={{ position: "relative", height: 140, borderRadius: 12, overflow: "hidden", background: "#10131a", border: "1px solid rgba(255,255,255,0.08)" }}>
          <CountdownBar seconds={5} total={8} />
        </div>
      </LabSection>
    </>
  );
};

export { FoundationShowcase };
