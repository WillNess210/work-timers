import React from "react";
import { CounterTimer, Timer, TimerType } from "../../logic/Timer";
import CounterTimerRenderer from "./CounterTimerRenderer";
import "./timer.css";

interface TimerRendererProps {
  timer: Timer;
}

const TimerRenderer = ({ timer }: TimerRendererProps): JSX.Element => {
  if (timer.type === TimerType.CounterTimer) {
    return (
      <div className="timer">
        <CounterTimerRenderer timer={timer as CounterTimer} />
      </div>
    );
  }
  return <div className="timer">Invalid renderer for {timer.title}</div>;
};

export default TimerRenderer;
