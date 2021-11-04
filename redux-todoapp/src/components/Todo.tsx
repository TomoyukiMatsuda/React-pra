import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodoAction } from "../store/todo/actions";
import { TodoData } from "../store/todo/types";

interface Props {
  todo: TodoData;
}

export const Todo: React.VFC<Props> = (props) => {
  const dispatch = useDispatch();

  return (
    <li>
      {props.todo.text}
      <span
        style={{
          marginLeft: 5,
          backgroundColor: "lightblue",
          cursor: "pointer",
        }}
        onClick={() => dispatch(deleteTodoAction(props.todo.id))}
      >
        削除
      </span>
    </li>
  );
};
