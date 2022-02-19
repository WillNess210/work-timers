import { useMemo, useState } from "react";
import useInterval from "../logic/hooks/useInterval";
import { useAppSelector } from "../store";

interface UseTimerFlashingStateResponse {
  flashing: boolean;
  bgColor: string;
}

const NON_FLASH_COLOR = "#8f8f8f"; //"gray.100";
const FLASH_COLOR = "yellow.200";
const FLASH_INTERVAL = 200;

export default function useTimerFlashingState(
  key: string
): UseTimerFlashingStateResponse {
  const timersState = useAppSelector((state) => state.timers);

  const [bgColor, setBgColor] = useState(NON_FLASH_COLOR);

  const flashing = useMemo(() => {
    if (!(key in timersState)) return true;
    return timersState[key].stopped ? false : timersState[key].flashing;
  }, [timersState, key]);

  useInterval(() => {
    if (flashing) {
      setBgColor(bgColor === NON_FLASH_COLOR ? FLASH_COLOR : NON_FLASH_COLOR);
    } else if (bgColor !== NON_FLASH_COLOR) {
      setBgColor(NON_FLASH_COLOR);
    }
  }, FLASH_INTERVAL);

  return { flashing, bgColor };
}
