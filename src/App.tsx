import React, { useEffect } from "react";
import { SimpleGrid } from "@chakra-ui/layout";
import "./App.css";
import TimerRenderer from "./layout/timer/TimerRenderer";
import {
  CounterTimer,
  MultiStateTimer,
  StopwatchTimer,
  TimerMap,
  TimerType,
} from "./logic/Timer";
import Header from "./layout/header/Header";
import useGlobalTimersState from "./state/useGlobalTimersState";
import useBeeping from "./state/useBeeping";

const IS_PROD = true;

const waterTimer: CounterTimer = {
  type: TimerType.CounterTimer,
  title: "Drink 1/2 Hydroflask",
  durationInSeconds: IS_PROD ? 7200 : 30,
};

const officeTimer: StopwatchTimer = {
  type: TimerType.Stopwatch,
  title: "In Office",
};

const standingTimer: MultiStateTimer = {
  type: TimerType.MultiStateTimer,
  title: "Stand some you lazy ass",
  states: [
    { title: "Sitting", durationInSeconds: IS_PROD ? 3600 : 20 },
    { title: "Standing", durationInSeconds: IS_PROD ? 3600 : 20 },
  ],
};

const breakTimer: MultiStateTimer = {
  type: TimerType.MultiStateTimer,
  title: "Take a break my boi",
  states: [
    { title: "Working", durationInSeconds: IS_PROD ? 3600 : 45 },
    { title: "Breaking.. bad", durationInSeconds: IS_PROD ? 600 : 15 },
  ],
};

const timers: TimerMap = {
  waterTimer: waterTimer,
  officeTimer: officeTimer,
  standingTimer: standingTimer,
  breakTimer: breakTimer,
};

const timersList = Object.values(timers);

const App = (): JSX.Element => {
  const { addTimers, startAllTimers, stopAllTimers } = useGlobalTimersState();
  useEffect(() => {
    addTimers(timersList.length);
  }, [addTimers]);

  useBeeping();

  return (
    <>
      <Header startAllTimers={startAllTimers} stopAllTimers={stopAllTimers} />
      <SimpleGrid
        minChildWidth="500px"
        spacing="1rem"
        marginTop="5rem"
        marginBottom="2rem"
      >
        {timersList.map((timer, i) => {
          const key = `${i}`;
          return <TimerRenderer timer={timer} timerId={key} key={key} />;
        })}
      </SimpleGrid>
    </>
  );
};

export default App;
