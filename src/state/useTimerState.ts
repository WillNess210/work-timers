import { useCallback, useEffect, useMemo } from "react";
import useTimer from "../logic/hooks/useTimer";
import { useAppDispatch, useAppSelector } from "../store";
import timersSlice, { TimerState } from "./timersSlice";

export interface UseTimerStateResponse {
  timerState: TimerState | undefined;
  seconds: number;
  stopped: boolean;
  setStopped: (stopped: boolean) => void;
  flashing: boolean;
  setFlashing: (flashing: boolean) => void;
  muted: boolean;
  setMuted: (muted: boolean) => void;
  incrementTimesCompleted: () => void;
}

const actions = timersSlice.actions;

export default function useTimerState(
  key: string,
  onTick?: () => void
): UseTimerStateResponse {
  const state = useAppSelector((state) => state.timers);
  const dispatch = useAppDispatch();

  const timerState = useMemo(
    () => (key in state ? state[key] : undefined),
    [state, key]
  );

  const {
    currentSeconds,
    stopped: timerStopped,
    setStopped: setTimerStopped,
  } = useTimer(onTick);

  const setReduxSeconds = useCallback(
    (seconds: number) => {
      if (timerState) {
        dispatch(actions.setTimerSeconds({ key, value: seconds }));
      }
    },
    [key, timerState, dispatch]
  );

  const setStopped = useCallback(
    (stopped: boolean) => {
      if (timerState) {
        dispatch(actions.setTimerStopped({ key, value: stopped }));
      }
    },
    [key, timerState, dispatch]
  );

  const setFlashing = useCallback(
    (flashing: boolean) => {
      if (timerState) {
        dispatch(actions.setTimerFlashing({ key, value: flashing }));
      }
    },
    [key, timerState, dispatch]
  );

  const setMuted = useCallback(
    (muted: boolean) => {
      if (timerState) {
        dispatch(actions.setTimerMuted({ key, value: muted }));
      }
    },
    [key, timerState, dispatch]
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
    flashing: timerState ? timerState.flashing : true,
    muted: timerState ? timerState.muted : true,
    setStopped,
    setFlashing,
    setMuted,
    incrementTimesCompleted,
  };
}
