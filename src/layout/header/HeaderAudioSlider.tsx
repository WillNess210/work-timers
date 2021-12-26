import React, { useState } from "react";
import AudioSlider from "../../components/AudioSlider";
import useAudioState from "../../state/useAudioState";
import {
  BiVolume,
  BiVolumeFull,
  BiVolumeLow,
  BiVolumeMute,
} from "react-icons/bi";
import { Stack } from "@chakra-ui/react";
import MuteButton from "../../components/MuteButton";

const HeaderAudioSlider = (): JSX.Element => {
  const { volume, setVolume, muted, setMuted } = useAudioState();
  const [volumeIconColor, setVolumeIconColor] = useState("white");

  const iconProps = {
    color: volumeIconColor,
    size: 40,
    onMouseEnter: () => setVolumeIconColor("#dddddd"),
    onMouseLeave: () => setVolumeIconColor("white"),
    onClick: () => setMuted(!muted),
  };

  return (
    <Stack direction="row" align="center">
      <AudioSlider
        value={volume * 100}
        setValue={(value: number) => setVolume(value / 100)}
        disabled={muted}
      />
      <MuteButton
        muted={muted}
        volume={volume}
        onClick={() => setMuted(!muted)}
      />
      <div style={{ marginRight: "1rem" }} />
    </Stack>
  );
};

export default HeaderAudioSlider;
