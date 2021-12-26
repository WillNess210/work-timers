import { useCallback } from "react";
import { CounterTimer } from "../Timer";
import useCountdownTimer from "./useCountdownTimer";

interface UseCounterTimerResponse {
  secondsRemaining: number;
  timesCompleted: number;
  stopped: boolean;
  markedForRestart: boolean;
  muted: boolean;
  setMuted: (muted: boolean) => void;
  setStopped: (stopped: boolean) => void;
  // actions
  complete: () => void;
  completeAndRestart: () => void;
  restart: () => void;
  completeAndMarkForRestart: () => void;
}

export default function useCounterTimer(
  key: string,
  timer: CounterTimer
): UseCounterTimerResponse {
  const {
    timerState,
    secondsRemaining,
    stopped,
    markedForRestart,
    muted,
    setMuted,
    setStopped,
    incrementTimesCompleted,
    resetTimer,
    setMarkedForRestart,
  } = useCountdownTimer(key, timer.durationInSeconds);

  const timesCompleted = timerState ? timerState.timesCompleted : -1;

  const completeAndRestart = useCallback(() => {
    incrementTimesCompleted();
    resetTimer();
  }, [incrementTimesCompleted, resetTimer]);

  const completeAndMarkForRestart = useCallback(() => {
    incrementTimesCompleted();
    setMarkedForRestart();
  }, [incrementTimesCompleted, setMarkedForRestart]);

  return {
    timesCompleted,
    secondsRemaining,
    stopped,
    markedForRestart,
    muted,
    setMuted,
    setStopped,
    complete: incrementTimesCompleted,
    restart: resetTimer,
    completeAndRestart,
    completeAndMarkForRestart,
  };
}
