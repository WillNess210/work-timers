import { useCallback, useState } from "react";
import useInterval from "./useInterval";

export interface UseTimerResponse {
  currentSeconds: number;
  stopped: boolean;
  setStopped: (stopped: boolean) => void;
}

export default function useTimer(
  onTick?: (secondsSinceLastTick: number) => void
): UseTimerResponse {
  const [seconds, setSeconds] = useState(0);
  const [lastTickTimestamp, setLastTickTimestamp] = useState(Date.now());
  const [stopped, setStopped] = useState(true);

  const setStoppedCallback = useCallback(
    (newStopped: boolean) => {
      if (stopped && !newStopped) {
        setLastTickTimestamp(Date.now());
      }
      setStopped(newStopped);
    },
    [stopped, setStopped, setLastTickTimestamp]
  );

  useInterval(() => {
    if (!stopped) {
      const now = Date.now();
      const timeSinceLastTicket = (now - lastTickTimestamp) / 1000;
      setSeconds(seconds + timeSinceLastTicket);
      setLastTickTimestamp(now);
      if (onTick) {
        onTick(timeSinceLastTicket);
      }
    }
  }, 1000);

  return {
    currentSeconds: Math.round(seconds),
    stopped,
    setStopped: setStoppedCallback,
  };
}
