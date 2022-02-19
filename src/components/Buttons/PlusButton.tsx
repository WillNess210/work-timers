import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { TiPlus } from "react-icons/ti";

interface PlusButtonProps {
  onClick: () => void;
  buttonText?: string;
}

const ICON_SIZE = 20;

const PlusButton = ({
  onClick,
  buttonText = "Complete",
}: PlusButtonProps): JSX.Element => {
  return (
    <Box onClick={onClick}>
      <Button bg="blue.100" leftIcon={<TiPlus size={ICON_SIZE} />} size="sm">
        {buttonText}
      </Button>
    </Box>
  );
};

export default PlusButton;
