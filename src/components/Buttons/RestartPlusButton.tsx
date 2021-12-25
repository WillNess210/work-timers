import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { MdOutlineSettingsBackupRestore } from "react-icons/md";

interface RestartPlusButtonProps {
  onClick: () => void;
  buttonText?: string;
}
//TiPlus
const ICON_SIZE = 20;

const RestartPlusButton = ({
  onClick,
  buttonText = "Complete",
}: RestartPlusButtonProps): JSX.Element => {
  return (
    <Box onClick={onClick}>
      <Button
        bg="blue.100"
        leftIcon={<MdOutlineSettingsBackupRestore size={ICON_SIZE} />}
      >
        {buttonText}
      </Button>
    </Box>
  );
};

export default RestartPlusButton;
