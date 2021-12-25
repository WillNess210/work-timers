import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
