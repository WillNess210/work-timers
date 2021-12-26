import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TimerState {
  seconds: number;
  stopped: boolean;
  flashing: boolean;
  // any timers with audio
  muted: boolean;
  // counter timer specific
  timesCompleted: number;
  // multi state timer specific
  statesSeconds: number[];
}

export interface TimersState {
  [key: string]: TimerState;
}

const defaultTimerState: TimerState = {
  seconds: 0,
  stopped: true,
  flashing: false,
  muted: false,
  timesCompleted: 0,
  statesSeconds: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
};

const initialState: TimersState = {};

const timersSlice = createSlice({
  name: "timers",
  initialState,
  reducers: {
    // adding timer
    addTimer: (state, action: PayloadAction<string>) => {
      state[action.payload] = { ...defaultTimerState };
    },
    // individual timer actions
    setTimerState: (
      state,
      action: PayloadAction<{ key: string; state: TimerState }>
    ) => {
      state[action.payload.key] = action.payload.state;
    },
    setTimerSeconds: (
      state,
      action: PayloadAction<{ key: string; value: number }>
    ) => {
      state[action.payload.key].seconds = action.payload.value;
    },
    setTimerStopped: (
      state,
      action: PayloadAction<{ key: string; value: boolean }>
    ) => {
      state[action.payload.key].stopped = action.payload.value;
    },
    setTimerTimesCompleted: (
      state,
      action: PayloadAction<{ key: string; value: number }>
    ) => {
      state[action.payload.key].timesCompleted = action.payload.value;
    },
    setTimerFlashing: (
      state,
      action: PayloadAction<{ key: string; value: boolean }>
    ) => {
      state[action.payload.key].flashing = action.payload.value;
    },
    setTimerMuted: (
      state,
      action: PayloadAction<{ key: string; value: boolean }>
    ) => {
      state[action.payload.key].muted = action.payload.value;
    },
    setStatesSeconds: (
      state,
      action: PayloadAction<{ key: string; value: number[] }>
    ) => {
      state[action.payload.key].statesSeconds = action.payload.value;
    },
    setStatesSecondsAt: (
      state,
      action: PayloadAction<{ key: string; index: number; value: number }>
    ) => {
      state[action.payload.key].statesSeconds[action.payload.index] =
        action.payload.value;
    },
    addStatesSecondsAt: (
      state,
      action: PayloadAction<{ key: string; index: number; value: number }>
    ) => {
      state[action.payload.key].statesSeconds[action.payload.index] +=
        action.payload.value;
    },
    // all timer actions
    startAllTimers: (state) => {
      const keys = Object.keys(state);
      keys.forEach((key: string) => {
        state[key].stopped = false;
      });
    },
    stopAllTimers: (state) => {
      const keys = Object.keys(state);
      keys.forEach((key: string) => {
        state[key].stopped = true;
      });
    },
  },
});

export default timersSlice;
