import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AudioState {
  muted: boolean;
  volume: number; // between 0 and 1
}

const initialState: AudioState = {
  muted: false,
  volume: 0.5,
};

const audioSlice = createSlice({
  name: "audio",
  initialState,
  reducers: {
    setMuted: (state, action: PayloadAction<boolean>) => {
      state.muted = action.payload;
    },
    setVolume: (state, action: PayloadAction<number>) => {
      console.log(`Setting volume to ${action.payload}`);
      state.volume = Math.min(Math.max(0, action.payload), 1);
    },
  },
});

export default audioSlice;
