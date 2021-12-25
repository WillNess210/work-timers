import { useCallback, useEffect, useMemo } from "react";
import useTimer from "../logic/hooks/useTimer";
import { useAppDispatch, useAppSelector } from "../store";
import timersSlice, { TimersState, TimerState } from "./timersSlice";

interface UseTimerStateResponse {
  timerState: TimerState | undefined;
  seconds: number;
  stopped: boolean;
  setStopped: (stopped: boolean) => void;
  incrementTimesCompleted: () => void;
}

const actions = timersSlice.actions;

export default function useTimerState(key: string): UseTimerStateResponse {
  const state = useAppSelector((state) => state.timers as TimersState);
  const dispatch = useAppDispatch();

  const timerState = useMemo(
    () => (key in state ? state[key] : undefined),
    [state, key]
  );

  const {
    currentSeconds,
    stopped: timerStopped,
    setStopped: setTimerStopped,
  } = useTimer();

  const setReduxSeconds = useCallback(
    (seconds: number) => {
      if (timerState) {
        dispatch(actions.setTimerSeconds({ key, value: seconds }));
      }
    },
    [key, timerState, dispatch, setTimerStopped]
  );

  const setStopped = useCallback(
    (stopped: boolean) => {
      if (timerState) {
        dispatch(actions.setTimerStopped({ key, value: stopped }));
      }
    },
    [key, timerState, dispatch, setTimerStopped]
  );

  const incrementTimesCompleted = useCallback(() => {
    if (timerState) {
      dispatch(
        actions.setTimerTimesCompleted({
          key,
          value: timerState.timesCompleted + 1,
        })
      );
    }
  }, [key, timerState, dispatch]);

  // if timerState.stopped changes, call setTimerStopped from useTimer
  useEffect(() => {
    if (timerState && timerState.stopped !== timerStopped) {
      setTimerStopped(timerState.stopped);
    }
  }, [timerState, timerStopped, setTimerStopped]);

  // if currentSeconds changes, call setReduxSeconds
  useEffect(() => {
    if (timerState && currentSeconds !== timerState.seconds)
      setReduxSeconds(currentSeconds);
  }, [timerState, currentSeconds, setReduxSeconds]);

  return {
    timerState,
    seconds: timerState ? timerState.seconds : -1,
    stopped: timerState ? timerState.stopped : true,
    setStopped,
    incrementTimesCompleted,
  };
}
