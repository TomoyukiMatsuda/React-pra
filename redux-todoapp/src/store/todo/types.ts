import { Action } from "redux";
import { ActionTypes } from "../actionTypes";

type TodoData = {
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

export type TodoActionTypes = AddTodoAction | DeleteTodoAction;
