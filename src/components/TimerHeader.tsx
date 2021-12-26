import { Flex, Heading, Spacer } from "@chakra-ui/react";
import React from "react";
import MuteButton from "./MuteButton";

interface TimerHeaderProps {
  title: string;
  muteButtonProps?: {
    muted: boolean;
    setMuted: (muted: boolean) => void;
  };
}

const MUTE_BUTTON_SIZE = 60;

const TimerHeader = ({
  title,
  muteButtonProps,
}: TimerHeaderProps): JSX.Element => {
  if (!muteButtonProps) {
    return <Heading size="lg">{title}</Heading>;
  }

  return (
    <Flex width="100%">
      <MuteButton
        muted={muteButtonProps.muted}
        volume={1}
        onClick={() => muteButtonProps.setMuted(!muteButtonProps.muted)}
        size={MUTE_BUTTON_SIZE}
        color="#dddddd"
        hoverColor="#888888"
      />
      <Spacer />
      <Heading size="lg" ml={`-${MUTE_BUTTON_SIZE}px`}>
        {title}
      </Heading>
      <Spacer />
      <div />
    </Flex>
  );
};

export default TimerHeader;
