import {
  LiveViewActions,
  LiveViewEventCard,
  LiveViewHeader,
  LiveViewThermalStage,
} from "../components/live-view-sections.jsx";
import { ScreenStage } from "../components/screen-stage.jsx";

const LiveViewScreen = ({ room, clip, onBack, onOpenReview }) => (
  <ScreenStage zToken="--rm-z-screen-live" className="[background:var(--rm-live-bg)]">
    <LiveViewHeader room={room} clip={clip} onBack={onBack} />
    <LiveViewThermalStage />
    <LiveViewEventCard room={room} clip={clip} />
    <LiveViewActions onPrimary={onBack} onReview={onOpenReview} />
  </ScreenStage>
);

export { LiveViewScreen };
