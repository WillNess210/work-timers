import React from "react";
import { CounterTimer } from "../../logic/Timer";
import "./timer.css";
import useCounterTimer from "../../logic/hooks/useCounterTimer";
import { Heading, Stack } from "@chakra-ui/react";
import TimeDisplay, { TimeDisplayState } from "../../components/TimeDisplay";
import PlayStopButton from "../../components/Buttons/PlayStopButton";
import RestartButton from "../../components/Buttons/RestartButton";
import RestartPlusButton from "../../components/Buttons/RestartPlusButton";
import PlusButton from "../../components/Buttons/PlusButton";
import TimerHeader from "../../components/TimerHeader";
import Subtitle from "../../components/Font/Subtitle";

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
    <Stack align="center" height="100%" spacing="0.25rem">
      <TimerHeader
        title={timer.title}
        muteButtonProps={{
          muted: state.muted,
          setMuted: state.setMuted,
        }}
        subTitle={
          <Subtitle text={`Completed ${state.timesCompleted} times today`} />
        }
      />
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
        <Stack direction="row" marginTop="0px !important">
          {state.secondsRemaining > 0 && (
            <PlusButton onClick={state.complete} />
          )}
          <RestartPlusButton onClick={state.completeAndRestart} />
        </Stack>
        {state.secondsRemaining > 0 && (
          <RestartButton
            onClick={state.completeAndMarkForRestart}
            buttonText="Complete and Autorestart"
          />
        )}
        {/* Restart buttons */}
        <RestartButton onClick={state.restart} />
      </Stack>
    </Stack>
  );
};

export default CounterTimerRenderer;
