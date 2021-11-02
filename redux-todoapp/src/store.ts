import { Reducer, State } from "./reducer";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

export type AppState = {
  state: State;
};

const storeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers<AppState>({
    state: Reducer,
  }),
  storeEnhancers(applyMiddleware(thunk))
);
