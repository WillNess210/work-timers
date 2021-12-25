import React, { useEffect } from "react";
import { CounterTimer } from "../../logic/Timer";
import "./timer.css";
import useCounterTimer from "../../logic/hooks/useCounterTimer";
import { Button } from "@chakra-ui/react";

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
    <>
      Counter Timer({state.timesCompleted}) {state.secondsRemaining}
      <Button onClick={() => state.setStopped(!state.stopped)}>
        {state.stopped ? "||" : ">"}
      </Button>
      {state.secondsRemaining > 0 && (
        <Button onClick={state.complete}>Complete</Button>
      )}
      <Button onClick={state.completeAndRestart}>Complete and Restart</Button>
      {state.secondsRemaining > 0 && (
        <Button onClick={state.completeAndMarkForRestart}>
          Complete and Mark for Restart
        </Button>
      )}
      <Button onClick={state.restart}>Restart</Button>
    </>
  );
};

export default CounterTimerRenderer;
