import React from "react";
import { Todo } from "./Todo";

interface Props {
  onClickTodo: () => void;
  todos: Todo[];
}

export const TodoList: React.VFC<Props> = (props) => {
  return (
    <ul>
      {props.todos.map((todo, index) => (
        <Todo key={index} onClickTodo={props.onClickTodo} todo={todo} />
      ))}
    </ul>
  );
};
