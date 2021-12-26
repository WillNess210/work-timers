import { Flex, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import NextButton from "../../components/Buttons/NextButton";
import PlayStopButton from "../../components/Buttons/PlayStopButton";
import TimeDisplay, { TimeDisplayState } from "../../components/TimeDisplay";
import TimerHeader from "../../components/TimerHeader";
import useMultiStateTimer from "../../logic/hooks/useMultiStateTimer";
import { MultiStateTimer } from "../../logic/Timer";
import "./timer.css";

interface MultiStateTimerRendererProps {
  timer: MultiStateTimer;
  timerId: string;
}

const MultiStateTimerRenderer = ({
  timer,
  timerId,
}: MultiStateTimerRendererProps): JSX.Element => {
  const state = useMultiStateTimer(timerId, timer.states);

  return (
    <Stack align="center" height="100%">
      <TimerHeader
        title={timer.title}
        muteButtonProps={{
          muted: state.muted,
          setMuted: state.setMuted,
        }}
      />
      <Flex
        direction="column"
        align="center"
        height="100%"
        justifyContent="space-around"
      >
        <Stack direction="row" align="center" spacing="5rem">
          {state.states.map((stateState, i: number) => {
            return (
              <TimeDisplay
                seconds={stateState.totalSeconds}
                size="xl"
                state={
                  state.currentIndex === i
                    ? TimeDisplayState.Active
                    : TimeDisplayState.Normal
                }
                heading={stateState.title}
                headingColor={state.currentIndex === i ? "black" : "gray.500"}
                key={`${i}`}
              />
            );
          })}
        </Stack>
        {/* <Heading size="lg">{state.currentTitle}</Heading>
      <TimeDisplay
        seconds={state.secondsRemaining}
        state={
          state.stopped ? TimeDisplayState.Stopped : TimeDisplayState.Normal
        }
      /> */}
        <PlayStopButton
          stopped={state.stopped}
          onClick={() => state.setStopped(!state.stopped)}
        />
        <NextButton
          onClick={state.moveToNextState}
          buttonText={`Switch to ${state.nextStateTitle}`}
        />
      </Flex>
    </Stack>
  );
};

export default MultiStateTimerRenderer;
