export enum TimerType {
  CounterTimer,
}

export interface Timer {
  type: TimerType;
  title: string;
}

export interface CounterTimer extends Timer {
  type: TimerType.CounterTimer;
  durationInSeconds: number;
}
