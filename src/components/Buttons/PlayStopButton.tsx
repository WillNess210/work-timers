import React from "react";
import { Box } from "@chakra-ui/react";
import { MdPause, MdPlayArrow } from "react-icons/md";

interface PlayStopButtonProps {
  stopped: boolean;
  onClick: () => void;
}

const ICON_SIZE = 70;

const PlayStopButton = ({
  stopped,
  onClick,
}: PlayStopButtonProps): JSX.Element => {
  return (
    <Box onClick={onClick}>
      {stopped ? (
        <MdPlayArrow size={ICON_SIZE} />
      ) : (
        <MdPause size={ICON_SIZE} />
      )}
    </Box>
  );
};

export default PlayStopButton;
