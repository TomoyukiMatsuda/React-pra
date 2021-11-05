import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { addTodoAction, deleteAllTodoAction } from "../store/todo/actions";
import { TodoList } from "./TodoList";

export const AddTodo: React.VFC = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  // useSelector(利用するstateの値を返す関数)
  const todoList = useSelector((state: RootState) => state.todo);
  const onClickAdd = useCallback(() => {
    dispatch(addTodoAction(inputText));
    setInputText("");
  }, [inputText]);

  const onClickDeleteAll = useCallback(() => {
    dispatch(deleteAllTodoAction());
  }, []);

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={() => onClickAdd()}>追加</button>
      <button onClick={() => onClickDeleteAll()}>全件削除</button>
      <TodoList todos={todoList} />
    </div>
  );
};
