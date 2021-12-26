import React from "react";
import { Box, Stack, Heading, Flex, Spacer } from "@chakra-ui/layout";
import { Button, Icon } from "@chakra-ui/react";
import { FaRegClock } from "react-icons/fa";
import "./header.css";
import HeaderAudioSlider from "./HeaderAudioSlider";

interface HeaderProps {
  startAllTimers: () => void;
  stopAllTimers: () => void;
}

const Header = ({
  startAllTimers,
  stopAllTimers,
}: HeaderProps): JSX.Element => {
  return (
    <Box bg="tomato" w="100%" className="header">
      <Flex width="100%">
        <Stack
          direction="row"
          spacing="1rem"
          ml="1rem"
          pt="5px"
          pb="5px"
          align="center"
        >
          <FaRegClock size={40} color="white" />
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
        <Spacer />
        <HeaderAudioSlider />
      </Flex>
    </Box>
  );
};

export default Header;
