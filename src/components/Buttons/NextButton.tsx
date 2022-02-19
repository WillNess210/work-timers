import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { BiRightArrowAlt } from "react-icons/bi";

interface NextButtonProps {
  onClick: () => void;
  buttonText?: string;
}

const ICON_SIZE = 30;

const NextButton = ({
  onClick,
  buttonText = "Next",
}: NextButtonProps): JSX.Element => {
  return (
    <Box onClick={onClick}>
      <Button
        bg="blue.100"
        leftIcon={<BiRightArrowAlt size={ICON_SIZE} />}
        size="sm"
      >
        {buttonText}
      </Button>
    </Box>
  );
};

export default NextButton;
