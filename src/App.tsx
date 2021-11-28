import React from "react";
import { SimpleGrid } from "@chakra-ui/layout";
import "./App.css";
import TimerRenderer from "./layout/timer/TimerRenderer";
import { CounterTimer, Timer, TimerType } from "./logic/Timer";

const waterTimer: CounterTimer = {
  type: TimerType.CounterTimer,
  title: "Drink 1/2 Hydroflask",
  durationInSeconds: 7200
}

const timers: Timer[] = [
  waterTimer,
  waterTimer
];

const App = (): JSX.Element => {
  return (
    <SimpleGrid minChildWidth="500px" spacing="40px">
      {
        timers.map((timer, i) => <TimerRenderer timer={timer} key={i}/>)
      }
    </SimpleGrid>
  );
};

export default App;
