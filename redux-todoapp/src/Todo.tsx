import React from "react";

interface Props {
  onClickTodo: () => void;
  text: string;
  isCompleted: boolean;
}

export const Todo: React.VFC<Props> = (props) => {
  return (
    <li
      onClick={props.onClickTodo}
      style={{
        textDecoration: props.isCompleted ? "line-through" : "none",
        cursor: props.isCompleted ? "default" : "pointer",
      }}
    >
      {props.text}
    </li>
  );
};
