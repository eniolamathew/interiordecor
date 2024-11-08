import React from "react";

interface IconProps {
  id: string;
  width?: number;
  height?: number;
  opacity?: number;
}

const Icon: React.FC<IconProps> = ({ id, width = 24, height = 24, opacity = 1 }) => (
  <svg width={width} height={height} opacity={opacity}>
    <use xlinkHref={`#${id}`} />
  </svg>
);

export default Icon;