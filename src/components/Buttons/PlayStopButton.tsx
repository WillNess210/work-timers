import React from "react";
import { Box } from "@chakra-ui/react";
import { GrPause, GrPlay } from "react-icons/gr";

interface PlayStopButtonProps {
  stopped: boolean;
  onClick: () => void;
}

const ICON_SIZE = 60;

const PlayStopButton = ({
  stopped,
  onClick,
}: PlayStopButtonProps): JSX.Element => {
  return (
    <Box onClick={onClick}>
      {stopped ? <GrPlay size={ICON_SIZE} /> : <GrPause size={ICON_SIZE} />}
    </Box>
  );
};

export default PlayStopButton;
