import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import { todoTitleFormState } from "../atoms/TodoTitleFormAtom";
import { Todo } from "../types/Todo";
import { todoListState } from "../atoms/TodoListAtom";

// タスク追加ボタンコンポーネント
export const AddButton: React.VFC = () => {
  const [todoList, setTodoList] = useRecoilState<Todo[]>(todoListState);
  const [todoTitleFormText, setTodoTitleFormText] =
    useRecoilState<string>(todoTitleFormState);

  const onClickAdd = useCallback(() => {
    // 現状のリストに新しいタイトルで一つリストアイテムを追加
    setTodoList([...todoList, { title: todoTitleFormText }]);
    // フォームテキストを初期化
    setTodoTitleFormText("");
  }, [todoList, todoTitleFormText, setTodoList, setTodoTitleFormText]);

  return <button onClick={onClickAdd}>追加</button>;
};
