import { useMemo, useState } from "react";
import useInterval from "../logic/hooks/useInterval";
import { useAppSelector } from "../store";

interface UseTimerFlashingStateResponse {
  flashing: boolean;
  bgColor: string;
}

const NON_FLASH_COLOR = "gray.100";
const FLASH_COLOR = "yellow.200";

export default function useTimerFlashingState(
  key: string
): UseTimerFlashingStateResponse {
  const state = useAppSelector((state) => state.timers);

  const [bgColor, setBgColor] = useState(NON_FLASH_COLOR);

  const flashing = useMemo(() => {
    if (!(key in state)) return true;
    return state[key].stopped ? false : state[key].flashing;
  }, [state, key]);

  useInterval(() => {
    if (flashing) {
      setBgColor(bgColor === NON_FLASH_COLOR ? FLASH_COLOR : NON_FLASH_COLOR);
    } else if (bgColor !== NON_FLASH_COLOR) {
      setBgColor(NON_FLASH_COLOR);
    }
  }, 200);

  return { flashing, bgColor };
}
