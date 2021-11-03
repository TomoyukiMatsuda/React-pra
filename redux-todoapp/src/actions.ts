import { Action } from "redux";

// action types: 一意となるキーを指定するので、Actionが増えるたびにここにキーを書いていく
export const ActionTypes = {
  increment: "INCREMENT",
  decrement: "DECREMENT",
  countReset: "COUNT_RESET",
} as const;

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
