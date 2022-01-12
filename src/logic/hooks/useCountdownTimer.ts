import { useCallback, useMemo, useState } from "react";
import useTimerState, {
  UseTimerStateResponse,
} from "../../state/useTimerState";

interface UseCountdownTimerResponse
  extends Omit<UseTimerStateResponse, "seconds"> {
  secondsRemaining: number;
  markedForRestart: boolean;
  resetTimer: () => void;
  resetTimerAndStop: () => void;
  resetTimerAndStart: () => void;
  setMarkedForRestart: () => void;
}

export default function useCountdownTimer(
  key: string,
  durationInSeconds: number,
  onTick?: (secondsSinceLastTick: number) => void
): UseCountdownTimerResponse {
  const useTimerStateResponse = useTimerState(key, onTick);
  const {
    timerState,
    stopped,
    seconds,
    flashing,
    setStopped,
    setFlashing,
    incrementTimesCompleted,
  } = useTimerStateResponse;

  const [previousFinishedTimestamp, setPreviousFinishedTimestamp] = useState(0);
  const [markedForRestart, setMarkedForRestart] = useState(false);

  const resetTimer = useCallback(() => {
    setPreviousFinishedTimestamp(seconds);
    setFlashing(false);
  }, [setPreviousFinishedTimestamp, seconds, setFlashing]);

  const incrementTimesCompletedCallback = useCallback(() => {
    incrementTimesCompleted();
    setFlashing(false);
  }, [incrementTimesCompleted, setFlashing]);

  const secondsRemainingCalculation = useMemo(() => {
    if (timerState) {
      const calculation =
        durationInSeconds - (timerState.seconds - previousFinishedTimestamp);
      if (calculation <= 0 && !flashing && !markedForRestart) {
        setFlashing(true);
      } else if (calculation <= 0 && markedForRestart) {
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
    flashing,
    setMarkedForRestart,
    resetTimer,
    setFlashing,
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
    ...useTimerStateResponse,
    timerState,
    secondsRemaining,
    stopped,
    markedForRestart,
    setStopped,
    setFlashing,
    resetTimer,
    resetTimerAndStop,
    resetTimerAndStart,
    incrementTimesCompleted: incrementTimesCompletedCallback,
    setMarkedForRestart: () => setMarkedForRestart(true),
  };
}
