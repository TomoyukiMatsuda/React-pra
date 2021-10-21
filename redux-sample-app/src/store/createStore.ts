import { combineReducers, Store } from "redux";
import { counterSlice, initialState as counterState } from "../counter/slice";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { root } from "postcss";

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
});

const preloadedState = () => {
  return { counter: counterState };
};

export type StoreState = ReturnType<typeof preloadedState>;
export type ReduxStore = Store<StoreState>;

export const createStore = () => {
  const middlewareList = [...getDefaultMiddleware(), logger];

  return configureStore({
    reducer: root,
    middleware: middlewareList,
    devTools: process.env.NODE_ENV !== "production",
    // TODO: type が異なるためエラーになってしまう。
    //preloadedState: preloadedState(),
  });
};
