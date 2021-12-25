import { useCallback, useEffect, useState } from "react";
import useTimer, { UseTimerResponse } from "./useTimer";

interface UseTimersResponse {
  timers: UseTimerResponse[];
}

export default function useTimers(numberOfTimers: number): UseTimersResponse {
  const [timers, setTimers] = useState([] as UseTimerResponse[]);

  useEffect(() => {
    if (timers.length === 0) {
      for (let i = 0; i < numberOfTimers; i++) {
        timers.push(useTimer());
      }
    }
  }, [timers, numberOfTimers]);

  return {
    timers,
  };
}
