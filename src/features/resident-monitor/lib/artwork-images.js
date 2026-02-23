import bedEmpty from "../../../../assets/bed.png";
import fallingBeside from "../../../../assets/falling_beside.png";
import lyingCenter from "../../../../assets/lying_center.png";
import onFloorBeside from "../../../../assets/on_floor_beside.png";
import sittingOnBedEdge from "../../../../assets/sitting_on_bed_edge.png";
import standingBeside from "../../../../assets/standing_beside.png";
import withCare from "../../../../assets/with_care.png";

const RM_USE_RASTER_PICTOGRAMS = true;

const ROOM_ART_STATE = Object.freeze({
  IN_BED: "in_bed",
  WITH_CARE: "with_care",
  OUT_EMPTY_BED: "out_empty_bed",
  FALLING_TRANSITION: "falling_transition",
  ON_FLOOR: "on_floor",
  SITTING_EDGE: "sitting_edge",
  STANDING_BESIDE: "standing_beside",
});

const RM_ART_IMAGE_BY_STATE = Object.freeze({
  [ROOM_ART_STATE.IN_BED]: lyingCenter,
  [ROOM_ART_STATE.WITH_CARE]: withCare,
  [ROOM_ART_STATE.OUT_EMPTY_BED]: bedEmpty,
  [ROOM_ART_STATE.FALLING_TRANSITION]: fallingBeside,
  [ROOM_ART_STATE.ON_FLOOR]: onFloorBeside,
  [ROOM_ART_STATE.SITTING_EDGE]: sittingOnBedEdge,
  [ROOM_ART_STATE.STANDING_BESIDE]: standingBeside,
});

const normalizeText = (value) => String(value ?? "").toLowerCase().trim();

const resolveRoomArtState = (room) => {
  if (room?.artState) {
    return room.artState;
  }

  if (room?.status === "out") {
    return ROOM_ART_STATE.OUT_EMPTY_BED;
  }

  if (room?.status === "alert") {
    return ROOM_ART_STATE.FALLING_TRANSITION;
  }

  if (Array.isArray(room?.dots) && room.dots.includes("person")) {
    return ROOM_ART_STATE.WITH_CARE;
  }

  return ROOM_ART_STATE.IN_BED;
};

const resolveAlarmArtState = ({ clip, room }) => {
  if (clip?.alertState) {
    return clip.alertState;
  }

  if (clip?.artState) {
    return clip.artState;
  }

  const event = normalizeText(clip?.event);

  if (event.includes("on floor") || event.includes("laying on floor") || event.includes("lying on floor")) {
    return ROOM_ART_STATE.ON_FLOOR;
  }

  if (event.includes("fall") || event.includes("sitting on bed edge")) {
    return ROOM_ART_STATE.FALLING_TRANSITION;
  }

  return resolveRoomArtState(room);
};

const resolveArtImage = (state) =>
  RM_ART_IMAGE_BY_STATE[state] ?? RM_ART_IMAGE_BY_STATE[ROOM_ART_STATE.IN_BED];

export {
  ROOM_ART_STATE,
  RM_ART_IMAGE_BY_STATE,
  RM_USE_RASTER_PICTOGRAMS,
  resolveAlarmArtState,
  resolveArtImage,
  resolveRoomArtState,
};
