import { useState } from "react";
import useInterval from "./useInterval";

export interface UseTimerResponse {
  currentSeconds: number;
  stopped: boolean;
  setStopped: (stopped: boolean) => void;
}

export default function useTimer(onTick?: () => void): UseTimerResponse {
  const [seconds, setSeconds] = useState(0);
  const [stopped, setStopped] = useState(true);

  useInterval(() => {
    if (!stopped) {
      setSeconds(seconds + 1);
      if (onTick) {
        onTick();
      }
    }
  }, 1000);

  return {
    currentSeconds: seconds,
    stopped,
    setStopped,
  };
}
