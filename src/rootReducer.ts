import { combineReducers } from "redux";
import audioSlice from "./state/audioSlice";
import timersSlice from "./state/timersSlice";

const rootReducer = combineReducers({
  timers: timersSlice.reducer,
  audio: audioSlice.reducer,
});

export default rootReducer;
