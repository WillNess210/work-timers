import { useCallback, useMemo, useState } from "react";
import timersSlice from "../../state/timersSlice";
import { useAppDispatch } from "../../store";
import { TimerState } from "../Timer";
import useCountdownTimer from "./useCountdownTimer";

interface StateTimerResponse {
  title: string;
  totalSeconds: number;
}

interface UseMultiStateTimerResponse {
  states: StateTimerResponse[];
  currentTitle: string;
  nextStateTitle: string;
  currentIndex: number;
  secondsRemaining: number;
  stopped: boolean;
  setStopped: (stopped: boolean) => void;
  muted: boolean;
  setMuted: (muted: boolean) => void;
  moveToNextState: () => void;
}

const actions = timersSlice.actions;

export default function useMultiStateTimer(
  key: string,
  states: TimerState[]
): UseMultiStateTimerResponse {
  const [currentStateIndex, setCurrentStateIndex] = useState(0);

  const currentState = useMemo(
    () => states[currentStateIndex],
    [states, currentStateIndex]
  );

  const dispatch = useAppDispatch();
  const addSecondsToCurrentState = useCallback(
    (incrementBy: number) => {
      dispatch(
        actions.addStatesSecondsAt({
          key,
          index: currentStateIndex,
          value: incrementBy,
        })
      );
    },
    [dispatch, currentStateIndex, key]
  );

  const countdownState = useCountdownTimer(
    key,
    currentState.durationInSeconds,
    () => addSecondsToCurrentState(1)
  );
  const timerState = countdownState.timerState;

  const getNextStateIndex = useCallback(
    () => (currentStateIndex >= states.length - 1 ? 0 : currentStateIndex + 1),
    [currentStateIndex, states]
  );

  const nextStateTitle = useMemo(() => {
    return states[getNextStateIndex()].title;
  }, [states, getNextStateIndex]);

  const moveToNextState = useCallback(() => {
    countdownState.resetTimer();
    setCurrentStateIndex(getNextStateIndex());
  }, [setCurrentStateIndex, countdownState, getNextStateIndex]);

  const statesResponse = useMemo(() => {
    if (!timerState) return [];
    return states.map(
      (multiTimerState: TimerState, i: number): StateTimerResponse => {
        return {
          title: multiTimerState.title,
          totalSeconds: timerState.statesSeconds[i],
        };
      }
    );
  }, [timerState, states]);

  return {
    currentIndex: currentStateIndex,
    currentTitle: currentState.title,
    nextStateTitle,
    secondsRemaining: countdownState.secondsRemaining,
    stopped: countdownState.stopped,
    states: statesResponse,
    setStopped: countdownState.setStopped,
    muted: countdownState.muted,
    setMuted: countdownState.setMuted,
    moveToNextState,
  };
}
