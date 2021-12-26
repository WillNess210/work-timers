import React, { useState } from "react";
import {
  BiVolume,
  BiVolumeFull,
  BiVolumeLow,
  BiVolumeMute,
} from "react-icons/bi";

interface MuteButtonProps {
  muted: boolean;
  volume: number; // 0 to 1
  color?: string;
  hoverColor?: string;
  size?: number;
  onClick: () => void;
}

const MuteButton = ({
  muted,
  volume,
  onClick,
  color = "white",
  hoverColor = "#dddddd",
  size = 40,
}: MuteButtonProps): JSX.Element => {
  const [volumeIconColor, setVolumeIconColor] = useState(color);

  const iconProps = {
    color: volumeIconColor,
    size,
    onMouseEnter: () => setVolumeIconColor(hoverColor),
    onMouseLeave: () => setVolumeIconColor(color),
    onClick,
  };

  if (muted) return <BiVolumeMute {...iconProps} />;
  if (volume === 0) return <BiVolume {...iconProps} />;
  if (volume < 0.5) return <BiVolumeLow {...iconProps} />;
  return <BiVolumeFull {...iconProps} />;
};

export default MuteButton;
