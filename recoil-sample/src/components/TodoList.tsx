import React from "react";
import { Todo } from "../Todo";
import { useRecoilValue } from "recoil";
import { searchedTodoListSelector } from "../SearchedTodoListSelector";

export const TodoList: React.VFC = () => {
  // useRecoilValue(selectorKey)でselectorから取得
  const todoList: Todo[] = useRecoilValue(searchedTodoListSelector);

  return (
    <>
      <p>TODO一覧</p>
      <ul>
        {todoList.map((todo, i) => {
          return <li key={`${todo.title}_${i}`}>{todo.title}</li>;
        })}
      </ul>
    </>
  );
};
