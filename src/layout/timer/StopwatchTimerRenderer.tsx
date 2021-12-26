import React from "react";
import TimeDisplay, { TimeDisplayState } from "../../components/TimeDisplay";
import { StopwatchTimer } from "../../logic/Timer";
import useTimerState from "../../state/useTimerState";
import PlayStopButton from "../../components/Buttons/PlayStopButton";
import TimerHeader from "../../components/TimerHeader";
import { Flex, Spacer, Stack } from "@chakra-ui/react";

interface StopwatchTimerRendererProps {
  timer: StopwatchTimer;
  timerId: string;
}

const StopwatchTimerRenderer = ({
  timer,
  timerId,
}: StopwatchTimerRendererProps): JSX.Element => {
  const state = useTimerState(timerId);

  return (
    <Stack align="center" height="100%">
      <TimerHeader title={timer.title} />
      <Flex
        direction="column"
        align="center"
        height="100%"
        justifyContent="space-around"
      >
        <TimeDisplay
          seconds={state.seconds}
          state={
            state.stopped ? TimeDisplayState.Stopped : TimeDisplayState.Normal
          }
        />
        <PlayStopButton
          stopped={state.stopped}
          onClick={() => state.setStopped(!state.stopped)}
        />
      </Flex>
    </Stack>
  );
};

export default StopwatchTimerRenderer;
