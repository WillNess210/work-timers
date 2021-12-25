import { useEffect, useRef } from "react";

export default function useInterval(
  callback: () => void,
  delayInMs: number
): void {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!delayInMs) {
      return () => {};
    }

    const interval = setInterval(() => {
      const current = callbackRef.current as undefined | (() => void);
      current && current();
    }, delayInMs);
    return () => clearInterval(interval);
  }, [delayInMs]);
}
