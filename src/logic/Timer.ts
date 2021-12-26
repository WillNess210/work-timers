export enum TimerType {
  CounterTimer,
  MultiStateTimer,
  Stopwatch,
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

export interface StopwatchTimer extends Timer {
  type: TimerType.Stopwatch;
}

// interface TimerState {
//   title: string;
//   durationInSeconds: number;
// }

// export interface MultiStateTimer extends Timer {
//   type: TimerType.MultiStateTimer;

// }
