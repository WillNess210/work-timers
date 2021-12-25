import React from "react";
import { Box, Stack, Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
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
    <Box bg="tomato" w="100%">
      <Stack direction="row" spacing="1rem" ml="1rem" pt="5px" pb="5px">
        <Heading size="xl" color="white">
          Timers Lesgooo
        </Heading>
        <Button bg="blue.100" onClick={startAllTimers}>
          Start All
        </Button>
        <Button bg="blue.100" onClick={stopAllTimers}>
          Stop All
        </Button>
      </Stack>
    </Box>
  );
};

export default Header;
