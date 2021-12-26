import React, { ReactNode } from "react";
import { Flex, Heading, Spacer, Stack } from "@chakra-ui/react";
import MuteButton from "./MuteButton";

interface TimerHeaderProps {
  title: string;
  muteButtonProps?: {
    muted: boolean;
    setMuted: (muted: boolean) => void;
  };
  subTitle?: ReactNode;
}

const MUTE_BUTTON_SIZE = 60;

const TimerHeader = ({
  title,
  muteButtonProps,
  subTitle,
}: TimerHeaderProps): JSX.Element => {
  if (!muteButtonProps) {
    return (
      <Stack align="center">
        <Heading size="lg">{title}</Heading>
        {subTitle}
      </Stack>
    );
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
      <Stack align="center" ml={`-${MUTE_BUTTON_SIZE}px`}>
        <Heading size="lg">{title}</Heading>
        {subTitle && (
          <Heading
            size="md"
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
          >
            {subTitle}
          </Heading>
        )}
      </Stack>
      <Spacer />
      <div />
    </Flex>
  );
};

export default TimerHeader;
