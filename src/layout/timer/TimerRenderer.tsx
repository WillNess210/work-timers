import React from "react";
import { Box, Container } from "@chakra-ui/react";
import { CounterTimer, Timer, TimerType } from "../../logic/Timer";
import CounterTimerRenderer from "./CounterTimerRenderer";
import "./timer.css";

interface TimerRendererProps {
  timer: Timer;
  timerId: string;
}

const TimerRenderer = ({ timer, timerId }: TimerRendererProps): JSX.Element => {
  if (timer.type === TimerType.CounterTimer) {
    return (
      <Container maxW="container.xl">
        <Box
          borderWidth="1px"
          borderRadius="lg"
          className="timer"
          bg="gray.100"
          p="1rem"
        >
          <CounterTimerRenderer
            timer={timer as CounterTimer}
            timerId={timerId}
          />
        </Box>
      </Container>
    );
  }
  return <div className="timer">Invalid renderer for {timer.title}</div>;
};

export default TimerRenderer;