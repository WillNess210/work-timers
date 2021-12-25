import React from "react";
import { CounterTimer } from "../../logic/Timer";
import "./timer.css";
import useCounterTimer from "../../logic/hooks/useCounterTimer";
import { Button, Heading, IconButton, Stack } from "@chakra-ui/react";
import TimeDisplay, { TimeDisplayState } from "../../components/TimeDisplay";
import { GrPlay, GrPause } from "react-icons/gr";
import PlayStopButton from "../../components/Buttons/PlayStopButton";
import RestartButton from "../../components/Buttons/RestartButton";
import RestartPlusButton from "../../components/Buttons/RestartPlusButton";
import PlusButton from "../../components/Buttons/PlusButton";

interface CounterTimerRendererProps {
  timer: CounterTimer;
  timerId: string;
}

const CounterTimerRenderer = ({
  timer,
  timerId,
}: CounterTimerRendererProps): JSX.Element => {
  const state = useCounterTimer(timerId, timer);

  return (
    <div className="timerWrapper">
      <Heading size="lg">{timer.title}</Heading>
      <Heading
        size="md"
        color="gray.500"
        fontWeight="semibold"
        letterSpacing="wide"
      >
        Completed {state.timesCompleted} times today
      </Heading>
      <TimeDisplay
        seconds={state.secondsRemaining}
        state={
          state.stopped
            ? TimeDisplayState.Stopped
            : state.markedForRestart
            ? TimeDisplayState.MarkedForRestart
            : TimeDisplayState.Normal
        }
      />

      <Stack direction="column" spacing="1rem" align="center">
        <PlayStopButton
          stopped={state.stopped}
          onClick={() => state.setStopped(!state.stopped)}
        />
        {/* Complete buttons */}
        <Stack direction="row">
          {state.secondsRemaining > 0 && (
            <PlusButton onClick={state.complete} />
          )}
          <RestartPlusButton onClick={state.completeAndRestart} />
          {state.secondsRemaining > 0 && (
            <RestartButton
              onClick={state.completeAndMarkForRestart}
              buttonText="Complete and Autorestart"
            />
          )}
        </Stack>
        {/* Restart buttons */}
        <RestartButton onClick={state.restart} />
      </Stack>
    </div>
  );
};

export default CounterTimerRenderer;
