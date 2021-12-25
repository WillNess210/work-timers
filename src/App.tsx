import React, { useEffect } from "react";
import { SimpleGrid } from "@chakra-ui/layout";
import "./App.css";
import TimerRenderer from "./layout/timer/TimerRenderer";
import { CounterTimer, Timer, TimerMap, TimerType } from "./logic/Timer";
import Header from "./layout/header/Header";
import useTimers from "./logic/hooks/useTimers";
import useGlobalTimersState from "./state/useGlobalTimersState";

const waterTimer: CounterTimer = {
  type: TimerType.CounterTimer,
  title: "Drink 1/2 Hydroflask",
  durationInSeconds: 5,
};

const timers: TimerMap = {
  waterTimer: waterTimer,
  waterTimer2: waterTimer,
};
const timersList = Object.values(timers);

const App = (): JSX.Element => {
  const { addTimers, startAllTimers, stopAllTimers } = useGlobalTimersState();
  useEffect(() => {
    addTimers(timersList.length);
  }, [addTimers, timersList]);

  return (
    <>
      <Header startAllTimers={startAllTimers} stopAllTimers={stopAllTimers} />
      <SimpleGrid minChildWidth="500px" spacing="40px">
        {timersList.map((timer, i) => (
          <TimerRenderer timer={timer} timerId={`${i}`} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default App;
