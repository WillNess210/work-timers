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

const shouldFlash = (state: TimersState): boolean => {
  const states = Object.keys(state).map((key: string) => state[key]);
  for (let i = 0; i < states.length; i++) {
    if (states[i].flashing && !states[i].stopped) return true;
  }
  return false;
};

const BEEPING_INTERVAL = 1000;

const DEFAULT_BACKGROUND_COLOR = "#636363";
const FLASHING_BACKGROUND_COLOR = "#7a7a7a";

export default function useBeeping(): void {
  const timersState = useAppSelector((state) => state.timers);
  const anyBeeping = useMemo(() => shouldBeep(timersState), [timersState]);
  const anyFlashing = useMemo(() => shouldFlash(timersState), [timersState]);

  const [backgroundColor, setBackgroundColor] = useState(
    DEFAULT_BACKGROUND_COLOR
  );

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
    if (anyBeeping) {
      audio.play();
    }
    if (anyFlashing) {
      setBackgroundColor(
        backgroundColor === DEFAULT_BACKGROUND_COLOR
          ? FLASHING_BACKGROUND_COLOR
          : DEFAULT_BACKGROUND_COLOR
      );
    } else if (backgroundColor !== DEFAULT_BACKGROUND_COLOR) {
      setBackgroundColor(DEFAULT_BACKGROUND_COLOR);
    }
  }, BEEPING_INTERVAL);

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);
}
