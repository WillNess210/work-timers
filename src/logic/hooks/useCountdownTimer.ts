import { useCallback, useMemo, useState } from "react";
import { TimerState } from "../../state/timersSlice";
import useTimerState from "../../state/useTimerState";

interface UseCountdownTimerResponse {
  timerState: TimerState | undefined;
  secondsRemaining: number;
  stopped: boolean;
  markedForRestart: boolean;
  setStopped: (stopped: boolean) => void;
  resetTimer: () => void;
  resetTimerAndStop: () => void;
  resetTimerAndStart: () => void;
  setMarkedForRestart: () => void;
  incrementTimesCompleted: () => void;
}

export default function useCountdownTimer(
  key: string,
  durationInSeconds: number
): UseCountdownTimerResponse {
  const { timerState, stopped, seconds, setStopped, incrementTimesCompleted } =
    useTimerState(key);

  const [previousFinishedTimestamp, setPreviousFinishedTimestamp] = useState(0);
  const [markedForRestart, setMarkedForRestart] = useState(false);

  const resetTimer = useCallback(
    () => setPreviousFinishedTimestamp(seconds),
    [setPreviousFinishedTimestamp, seconds]
  );

  const secondsRemainingCalculation = useMemo(() => {
    if (timerState) {
      const calculation =
        durationInSeconds - (timerState.seconds - previousFinishedTimestamp);
      if (calculation <= 0 && markedForRestart) {
        setMarkedForRestart(false);
        resetTimer();
      }
      return calculation;
    }
    return 99999999999999;
  }, [
    durationInSeconds,
    timerState,
    previousFinishedTimestamp,
    markedForRestart,
    setMarkedForRestart,
    resetTimer,
  ]);

  const secondsRemaining = useMemo(() => {
    if (timerState) {
      return Math.max(0, secondsRemainingCalculation);
    }
    return -1;
  }, [secondsRemainingCalculation, timerState]);

  const resetTimerAndStop = useCallback(() => {
    resetTimer();
    setStopped(true);
  }, [resetTimer, setStopped]);

  const resetTimerAndStart = useCallback(() => {
    resetTimer();
    setStopped(false);
  }, [resetTimer, setStopped]);

  return {
    timerState,
    secondsRemaining,
    stopped,
    markedForRestart,
    setStopped,
    resetTimer,
    resetTimerAndStop,
    resetTimerAndStart,
    incrementTimesCompleted,
    setMarkedForRestart: () => setMarkedForRestart(true),
  };
}
