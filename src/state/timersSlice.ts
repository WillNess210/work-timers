import { createReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stringify } from "querystring";

export interface TimerState {
  seconds: number;
  stopped: boolean;
  // counter timer specific
  timesCompleted: number;
}

export interface TimersState {
  [key: string]: TimerState;
}

const defaultTimerState: TimerState = {
  seconds: 0,
  stopped: true,
  timesCompleted: 0,
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
