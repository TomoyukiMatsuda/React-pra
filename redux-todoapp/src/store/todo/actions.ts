import { TodoActionTypes } from "./types";
import { ActionTypes } from "../actionTypes";

// actionCreator

export const addTodoAction = (todoText: string): TodoActionTypes => {
  return {
    type: ActionTypes.addTodo,
    payload: {
      text: todoText,
    },
  };
};

export const deleteTodoAction = (todoId: number): TodoActionTypes => {
  return {
    type: ActionTypes.deleteTodo,
    payload: {
      id: todoId,
    },
  };
};
