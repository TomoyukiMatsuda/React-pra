import { TodoActionTypes, Todos } from "./types";
import { ActionTypes } from "../actionTypes";

// デフォルト値
const initialState: Todos = [];

export const todoReducer = (state = initialState, action: TodoActionTypes) => {
  const latestId = state.length;

  switch (action.type) {
    case ActionTypes.addTodo:
      state.push({
        id: latestId + 1,
        text: action.payload.text,
      });
      return state;
    case ActionTypes.deleteTodo:
      return state.filter((todo) => todo.id !== action.payload.id);
    case ActionTypes.deleteAllTodo:
      return [];
    default:
      const _: never = action; // これは必要？
      return state;
  }
};
