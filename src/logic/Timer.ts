export enum TimerType {
  CounterTimer,
}

export interface Timer {
  type: TimerType;
  title: string;
}

export type TimerMap = { [key: string]: Timer };

export interface CounterTimer extends Timer {
  type: TimerType.CounterTimer;
  durationInSeconds: number;
}
