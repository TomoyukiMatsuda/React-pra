import { Action } from "redux";
import { ActionTypes } from "../actionTypes";

// stateの型
export type Count = {
  value: number;
};

// Actions の type
interface IncrementAction extends Action {
  type: typeof ActionTypes.increment;
}

interface DecrementAction extends Action {
  type: typeof ActionTypes.decrement;
}

interface ResetAction extends Action {
  type: typeof ActionTypes.countReset;
}

export type CounterActionTypes =
  | IncrementAction
  | DecrementAction
  | ResetAction;
