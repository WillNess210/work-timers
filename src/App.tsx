import React, { useEffect } from "react";
import { SimpleGrid } from "@chakra-ui/layout";
import "./App.css";
import TimerRenderer from "./layout/timer/TimerRenderer";
import {
  CounterTimer,
  StopwatchTimer,
  Timer,
  TimerMap,
  TimerType,
} from "./logic/Timer";
import Header from "./layout/header/Header";
import useGlobalTimersState from "./state/useGlobalTimersState";
import useBeeping from "./state/useBeeping";

const waterTimer: CounterTimer = {
  type: TimerType.CounterTimer,
  title: "Drink 1/2 Hydroflask",
  durationInSeconds: 7200,
};

const officeTimer: StopwatchTimer = {
  type: TimerType.Stopwatch,
  title: "In Office",
};

const timers: TimerMap = {
  waterTimer: waterTimer,
  officeTimer: officeTimer,
};

const timersList = Object.values(timers);

const App = (): JSX.Element => {
  const { addTimers, startAllTimers, stopAllTimers } = useGlobalTimersState();
  useEffect(() => {
    addTimers(timersList.length);
  }, [addTimers, timersList]);

  useBeeping();

  return (
    <>
      <Header startAllTimers={startAllTimers} stopAllTimers={stopAllTimers} />
      <SimpleGrid
        minChildWidth="500px"
        spacing="40px"
        marginTop="5rem"
        marginBottom="2rem"
      >
        {timersList.map((timer, i) => (
          <TimerRenderer timer={timer} timerId={`${i}`} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default App;
