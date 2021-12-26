import { useEffect, useMemo, useState } from "react";
import useInterval from "../logic/hooks/useInterval";
import { useAppSelector } from "../store";
import { TimersState } from "./timersSlice";
import file from "./beep.mp3";
import useAudioState from "./useAudioState";

const shouldBeep = (state: TimersState): boolean => {
  const states = Object.keys(state).map((key: string) => state[key]);
  for (let i = 0; i < states.length; i++) {
    if (states[i].flashing && !states[i].stopped && !states[i].muted)
      return true;
  }
  return false;
};

const BEEPING_INTERVAL = 1000;

export default function useBeeping(): void {
  const timersState = useAppSelector((state) => state.timers);
  const anyFlashing = useMemo(() => shouldBeep(timersState), [timersState]);

  const { muted, volume } = useAudioState();

  const [audio] = useState(new Audio(file));

  useEffect(() => {
    if (muted) {
      audio.volume = 0;
    } else {
      audio.volume = volume;
    }
  }, [audio, muted, volume]);

  useInterval(() => {
    if (anyFlashing) {
      audio.play();
    }
  }, BEEPING_INTERVAL);
}
