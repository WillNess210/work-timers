import React, { useMemo } from "react";
import { Heading } from "@chakra-ui/react";

interface TimeDisplayProps {
  seconds: number;
  stopped: boolean;
}

interface TimeDisplay {
  hours: number;
  minutes: number;
  seconds: number;
}

const getTimeDisplay = (seconds: number): TimeDisplay => {
  let secondsRemaining = seconds;

  const hours = ~~(secondsRemaining / 3600);
  secondsRemaining = secondsRemaining % 3600;

  const minutes = ~~(secondsRemaining / 60);
  secondsRemaining = secondsRemaining % 60;

  return {
    hours,
    minutes,
    seconds: secondsRemaining,
  };
};

const getNumberDisplay = (value: number): string | number => {
  return value < 10 ? `0${value}` : value;
};

const getTimeDisplayString = (timeDisplay: TimeDisplay): string => {
  const displayString = `${getNumberDisplay(
    timeDisplay.minutes
  )}:${getNumberDisplay(timeDisplay.seconds)}`;
  if (timeDisplay.hours > 0) {
    return `${getNumberDisplay(timeDisplay.hours)}:` + displayString;
  }
  return displayString;
};

const TimeDisplay = ({ seconds, stopped }: TimeDisplayProps): JSX.Element => {
  const timeDisplay = useMemo(
    () => getTimeDisplayString(getTimeDisplay(seconds)),
    [seconds]
  );
  return (
    <Heading size="3xl" color={stopped ? "red" : "black"}>
      {timeDisplay}
    </Heading>
  );
};

export default TimeDisplay;