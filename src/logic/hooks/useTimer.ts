import { useCallback, useState } from "react";
import useInterval from "./useInterval";

export interface UseTimerResponse {
  currentSeconds: number;
  stopped: boolean;
  setStopped: (stopped: boolean) => void;
}

export default function useTimer(): UseTimerResponse {
  const [seconds, setSeconds] = useState(0);
  const [stopped, setStopped] = useState(true);

  useInterval(() => {
    setSeconds(stopped ? seconds : seconds + 1);
  }, 1000);

  return {
    currentSeconds: seconds,
    stopped,
    setStopped,
  };
}
