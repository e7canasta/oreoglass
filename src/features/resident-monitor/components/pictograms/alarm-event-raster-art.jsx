const AlarmEventRasterArt = ({ src, variant = "falling", className = "" }) => {
  if (!src) {
    return null;
  }

  return (
    <span aria-hidden className={`rm-alarm-raster-art rm-alarm-raster-art--${variant} ${className}`.trim()}>
      <span className="rm-alarm-raster-art-base" />
      <img src={src} alt="" draggable="false" className="rm-alarm-raster-art-image" />
      <span className="rm-alarm-raster-art-tone" />
      <span className="rm-alarm-raster-art-glow" />
    </span>
  );
};

export { AlarmEventRasterArt };
