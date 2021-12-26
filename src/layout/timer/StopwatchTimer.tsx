import React from "react";
import { Heading } from "@chakra-ui/react";
import TimeDisplay, { TimeDisplayState } from "../../components/TimeDisplay";
import { StopwatchTimer } from "../../logic/Timer";
import useTimerState from "../../state/useTimerState";
import "./timer.css";
import PlayStopButton from "../../components/Buttons/PlayStopButton";

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
    <div className="timerWrapper">
      <Heading size="lg">{timer.title}</Heading>
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
    </div>
  );
};

export default StopwatchTimerRenderer;
