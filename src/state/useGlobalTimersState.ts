import { useCallback } from "react";
import { useAppDispatch } from "../store";
import timersSlice from "./timersSlice";

interface UseGlobalTimersStateResponse {
  addTimers: (count: number) => void;
  startAllTimers: () => void;
  stopAllTimers: () => void;
}

const actions = timersSlice.actions;

export default function useGlobalTimersState(): UseGlobalTimersStateResponse {
  const dispatch = useAppDispatch();

  const addTimers = useCallback(
    (count: number) => {
      for (let i = 0; i < count; i++) {
        console.log(`Adding timer ${i}`);
        dispatch(actions.addTimer(`${i}`));
      }
    },
    [dispatch]
  );

  const startAllTimers = useCallback(
    () => dispatch(actions.startAllTimers()),
    [dispatch]
  );

  const stopAllTimers = useCallback(
    () => dispatch(actions.stopAllTimers()),
    [dispatch]
  );

  return {
    addTimers,
    startAllTimers,
    stopAllTimers,
  };
}
