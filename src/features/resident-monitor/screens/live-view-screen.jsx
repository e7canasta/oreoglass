import {
  LiveViewActions,
  LiveViewEventCard,
  LiveViewHeader,
  LiveViewThermalStage,
} from "../components/live-view-sections.jsx";
import { ScreenStage, ScreenTopSpacer } from "../components/screen-stage.jsx";

const LiveViewScreen = ({ onBack }) => (
  <ScreenStage zToken="--rm-z-screen-live" className="[background:var(--rm-live-bg)]">
    <ScreenTopSpacer />
    <LiveViewHeader onBack={onBack} />
    <LiveViewThermalStage />
    <LiveViewEventCard />
    <LiveViewActions onPrimary={onBack} onSecondary={onBack} />
  </ScreenStage>
);

export { LiveViewScreen };
