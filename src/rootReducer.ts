import { combineReducers } from "redux";
import timersSlice from "./state/timersSlice";

const rootReducer = combineReducers({ timers: timersSlice.reducer });

export default rootReducer;
