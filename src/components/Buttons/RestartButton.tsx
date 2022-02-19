import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { MdOutlineRestore } from "react-icons/md";

interface RestartButtonProps {
  onClick: () => void;
  buttonText?: string;
}

const ICON_SIZE = 20;

const RestartButton = ({
  onClick,
  buttonText = "Restart",
}: RestartButtonProps): JSX.Element => {
  return (
    <Box onClick={onClick}>
      <Button
        bg="blue.100"
        leftIcon={<MdOutlineRestore size={ICON_SIZE} />}
        size="sm"
      >
        {buttonText}
      </Button>
    </Box>
  );
};

export default RestartButton;
