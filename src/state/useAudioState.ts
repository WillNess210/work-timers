import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import audioSlice from "./audioSlice";

interface UseAudioStateResponse {
  muted: boolean;
  setMuted: (muted: boolean) => void;
  volume: number; // between 0 and 1
  setVolume: (volume: number) => void;
}

const actions = audioSlice.actions;

export default function useAudioState(): UseAudioStateResponse {
  const state = useAppSelector((state) => state.audio);
  const dispatch = useAppDispatch();

  const setMuted = useCallback(
    (muted: boolean) => dispatch(actions.setMuted(muted)),
    [dispatch]
  );

  const setVolume = useCallback(
    (volume: number) => dispatch(actions.setVolume(volume)),
    [dispatch]
  );

  return {
    muted: state.muted,
    setMuted,
    volume: state.volume,
    setVolume,
  };
}
