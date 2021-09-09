import { selector } from "recoil";
import { Todo } from "./Todo";
import { todoListState } from "./TodoListAtom";
import { searchTextFormState } from "./SearchTextFormAtom";

export const searchedTodoListSelector = selector<Todo[]>({
  key: "searchedTodoListSelector",
  get: ({ get }) => {
    // get(宣言したAtom) で最新の値を取得
    const todoList: Todo[] = get(todoListState); // タスク一覧を取得
    const searchText: string = get(searchTextFormState); // 検索テキストを取得
    // searchTextがあれば：検索テキストに該当するリストを返す
    // searchTextがなければ：そのまま全てのリストを返す
    return searchText
      ? todoList.filter((todo) => todo.title.includes(searchText))
      : todoList;
  },
  // setもある
  // set: ({set}) => {
  //
  // }
});
