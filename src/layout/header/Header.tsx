import { Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import React from "react";
import "./header.css";

interface HeaderProps {
  startAllTimers: () => void;
  stopAllTimers: () => void;
}

const Header = ({
  startAllTimers,
  stopAllTimers,
}: HeaderProps): JSX.Element => {
  return (
    <Box bg="tomato" color="white" w="100%">
      Header
      <Button onClick={startAllTimers}>Start All</Button>
      <Button onClick={stopAllTimers}>Stop All</Button>
    </Box>
  );
};

export default Header;
