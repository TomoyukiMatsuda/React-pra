import { Action } from "redux";
import { ActionTypes } from "../actionTypes";

export type TodoData = {
  id: number;
  text: string;
};

export type Todos = TodoData[];

interface AddTodoAction extends Action {
  type: typeof ActionTypes.addTodo;
  payload: { text: string };
}

interface DeleteTodoAction extends Action {
  type: typeof ActionTypes.deleteTodo;
  payload: { id: number };
}

interface DeleteAllTodoAction extends Action {
  type: typeof ActionTypes.deleteAllTodo;
}

export type TodoActionTypes =
  | AddTodoAction
  | DeleteTodoAction
  | DeleteAllTodoAction;
