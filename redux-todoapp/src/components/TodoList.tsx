import React from "react";
import { Todo } from "./Todo";
import { Todos } from "../store/todo/types";

interface Props {
  todos: Todos;
}

export const TodoList: React.VFC<Props> = (props) => {
  return (
    <ul>
      {props.todos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </ul>
  );
};
