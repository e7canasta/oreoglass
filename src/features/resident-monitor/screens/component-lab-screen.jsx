import { useState } from "react";

import { FallReviewOption } from "../components/fall-review-option.jsx";
import {
  IconFalling,
  IconInBed,
  IconLayingOnFloor,
  IconPersonGreen,
  IconSittingOnBedLarge,
  IconStaffEnter,
  IconStanding,
} from "../components/icons.jsx";
import { ActivityTile, SleepChart } from "../components/room-detail-widgets.jsx";
import { CountdownBar, RoomCard } from "../components/room-overview.jsx";
import { ThermalThumb, ThermalView, ThermalViewLive } from "../components/thermal.jsx";
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
} from "../components/ui-icons/index.js";
import { VideoControls, VideoScrubber } from "../components/video.jsx";

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

const LabSection = ({ title, children }) => (
  <section style={{ background: "#181c24", borderRadius: 16, border: "1px solid rgba(255,255,255,0.08)", padding: 14 }}>
    <h2 style={{ margin: "0 0 12px", color: "white", fontSize: 16, fontWeight: "700", letterSpacing: -0.2 }}>{title}</h2>
    {children}
  </section>
);

const IconGrid = ({ items }) => (
  <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 8 }}>
    {items.map((item) => (
      <div key={item.label} style={{ background: "#10131a", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: 10, minHeight: 82, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: 28 }}>{item.node}</div>
        <span style={{ color: "rgba(255,255,255,0.75)", fontSize: 10, textAlign: "center" }}>{item.label}</span>
      </div>
    ))}
  </div>
);

const ComponentLabScreen = ({ onBack }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedClassification, setSelectedClassification] = useState("Fall with injury");

  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 35, background: "#0f131b", display: "flex", flexDirection: "column", animation: "slideInRight 0.24s cubic-bezier(0.32,0.72,0,1)", fontFamily: "'SF Pro Display',system-ui,-apple-system" }}>
      <div style={{ height: 52, flexShrink: 0 }} />

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 14px 12px", flexShrink: 0 }}>
        <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", color: "white", display: "flex", alignItems: "center", gap: 8, padding: 0 }}>
          <IconArrowLeft />
          <span style={{ fontSize: 18, fontWeight: "700" }}>Component Lab</span>
        </button>
        <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 12, fontWeight: "600" }}>Design System</span>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "0 12px 24px", display: "flex", flexDirection: "column", gap: 10 }}>
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

        <LabSection title="Interactive Widgets">
          <div style={{ display: "grid", gap: 10 }}>
            <div style={{ position: "relative", height: 180, borderRadius: 12, overflow: "hidden", background: "#8da5bc" }}>
              <ThermalView />
              <VideoControls isPlaying={isPlaying} onToggle={() => setIsPlaying((prev) => !prev)} />
            </div>
            <div style={{ background: "#10131a", borderRadius: 12, border: "1px solid rgba(255,255,255,0.08)", padding: "10px 12px" }}>
              <VideoScrubber />
            </div>
            <div style={{ display: "grid", gap: 8 }}>
              {["Fall with injury", "Not a fall"].map((label) => (
                <FallReviewOption
                  key={label}
                  label={label}
                  isSelected={selectedClassification === label}
                  onSelect={() => setSelectedClassification(label)}
                />
              ))}
            </div>
          </div>
        </LabSection>

        <LabSection title="Room Components">
          <div style={{ display: "grid", gap: 10 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 8 }}>
              {LAB_ROOMS.map((room) => (
                <RoomCard key={room.number} room={room} onSelect={() => {}} />
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
      </div>
    </div>
  );
};

export { ComponentLabScreen };
