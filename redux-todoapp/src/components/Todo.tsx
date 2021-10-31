import React from "react";

export interface Todo {
  text: string;
  isCompleted: boolean;
}

interface Props {
  onClickTodo: () => void;
  todo: Todo;
}

export const Todo: React.VFC<Props> = (props) => {
  return (
    <li
      onClick={props.onClickTodo}
      style={{
        textDecoration: props.todo.isCompleted ? "line-through" : "none",
        cursor: props.todo.isCompleted ? "default" : "pointer",
      }}
    >
      {props.todo.text}
    </li>
  );
};
