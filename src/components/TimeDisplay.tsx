import React, { useMemo } from "react";
import { Heading, Stack } from "@chakra-ui/react";

export enum TimeDisplayState {
  Normal,
  Stopped,
  MarkedForRestart,
  Active,
}

const timeDisplayStateToColor: { [stateValue in TimeDisplayState]: string } = {
  [TimeDisplayState.Normal]: "black",
  [TimeDisplayState.Stopped]: "red",
  [TimeDisplayState.MarkedForRestart]: "green",
  [TimeDisplayState.Active]: "green",
};

interface TimeDisplayProps {
  seconds: number;
  state: TimeDisplayState;
  size?: string;
  heading?: string;
  headingColor?: string;
}

interface TimeDisplayValues {
  hours: number;
  minutes: number;
  seconds: number;
}

const getTimeDisplay = (seconds: number): TimeDisplayValues => {
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

const getTimeDisplayString = (timeDisplay: TimeDisplayValues): string => {
  const displayString = `${getNumberDisplay(
    timeDisplay.minutes
  )}:${getNumberDisplay(timeDisplay.seconds)}`;
  if (timeDisplay.hours > 0) {
    return `${getNumberDisplay(timeDisplay.hours)}:` + displayString;
  }
  return displayString;
};

const TimeDisplay = ({
  seconds,
  state,
  size = "3xl",
  heading,
  headingColor = "gray.500",
}: TimeDisplayProps): JSX.Element => {
  const timeDisplayString = useMemo(
    () => getTimeDisplayString(getTimeDisplay(seconds)),
    [seconds]
  );
  const timeDisplayElement: JSX.Element = (
    <Heading size={size} color={timeDisplayStateToColor[state]}>
      {timeDisplayString}
    </Heading>
  );
  if (!heading) {
    return timeDisplayElement;
  }

  return (
    <Stack align="center">
      <Heading size="md" color={headingColor}>
        {heading}
      </Heading>
      {timeDisplayElement}
    </Stack>
  );
};

export default TimeDisplay;
