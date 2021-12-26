import React from "react";
import { Box, Container } from "@chakra-ui/react";
import {
  CounterTimer,
  StopwatchTimer,
  Timer,
  TimerType,
} from "../../logic/Timer";
import CounterTimerRenderer from "./CounterTimerRenderer";
import "./timer.css";
import useTimerFlashingState from "../../state/useTimerFlashingState";
import StopwatchTimerRenderer from "./StopwatchTimerRenderer";

interface TimerRendererProps {
  timer: Timer;
  timerId: string;
}

interface TimerContainerProps {
  timerId: string;
  children: any;
}

const TimerContainer = ({
  timerId,
  children,
}: TimerContainerProps): JSX.Element => {
  const { bgColor } = useTimerFlashingState(timerId);

  return (
    <Container maxW="container.xl">
      <Box
        borderWidth="1px"
        borderRadius="lg"
        className="timer"
        bg={bgColor}
        p="1rem"
        height="100%"
      >
        {children}
      </Box>
    </Container>
  );
};

const TimerRenderer = ({ timer, timerId }: TimerRendererProps): JSX.Element => {
  if (timer.type === TimerType.CounterTimer) {
    return (
      <TimerContainer timerId={timerId}>
        <CounterTimerRenderer timer={timer as CounterTimer} timerId={timerId} />
      </TimerContainer>
    );
  }

  if (timer.type === TimerType.Stopwatch) {
    return (
      <TimerContainer timerId={timerId}>
        <StopwatchTimerRenderer
          timer={timer as StopwatchTimer}
          timerId={timerId}
        />
      </TimerContainer>
    );
  }

  return <div className="timer">Invalid renderer for {timer.title}</div>;
};

export default TimerRenderer;
