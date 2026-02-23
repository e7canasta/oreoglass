const renderOverviewRasterArt = (tone, src, className = "") => {
  if (!src) {
    return null;
  }

  return (
    <span
      aria-hidden
      className={`rm-overview-raster-art rm-overview-raster-art--${tone} ${className}`.trim()}
    >
      <span className="rm-overview-raster-art-base" />
      <img src={src} alt="" draggable="false" className="rm-overview-raster-art-image" />
      <span className="rm-overview-raster-art-tint" />
      <span className="rm-overview-raster-art-highlight" />
    </span>
  );
};

const OverviewRoomSleepRasterArt = ({ src, className = "" }) =>
  renderOverviewRasterArt("sleep", src, className);

const OverviewRoomCareRasterArt = ({ src, className = "" }) =>
  renderOverviewRasterArt("care", src, className);

const OverviewRoomOutRasterArt = ({ src, className = "" }) =>
  renderOverviewRasterArt("out", src, className);

const OverviewRoomFallingRasterArt = ({ src, className = "" }) =>
  renderOverviewRasterArt("falling", src, className);

const OverviewRoomOnFloorRasterArt = ({ src, className = "" }) =>
  renderOverviewRasterArt("on-floor", src, className);

export {
  OverviewRoomCareRasterArt,
  OverviewRoomFallingRasterArt,
  OverviewRoomOnFloorRasterArt,
  OverviewRoomOutRasterArt,
  OverviewRoomSleepRasterArt,
};
