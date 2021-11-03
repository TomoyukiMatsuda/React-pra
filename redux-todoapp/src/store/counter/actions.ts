import { CounterActionTypes } from "./types";
import { ActionTypes } from "../actionTypes";

export const incrementAction = (): CounterActionTypes => {
  return {
    type: ActionTypes.increment,
  };
};

export const decrementAction = (): CounterActionTypes => {
  return {
    type: ActionTypes.decrement,
  };
};

export const resetAction = (): CounterActionTypes => {
  return {
    type: ActionTypes.countReset,
  };
};
