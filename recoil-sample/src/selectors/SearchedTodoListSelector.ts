import { selector } from "recoil";
import { Todo } from "../types/Todo";
import { todoListState } from "../atoms/TodoListAtom";
import { searchTextFormState } from "../atoms/SearchTextFormAtom";

// todo: selectorFamily との違いを確認する、ただのselectorだと引数を取れないのかも
//   selectorFamily<T, P> T：返り値型, P:引数型 っぽい
export const searchedTodoListSelector = selector<Todo[]>({
  key: "searchedTodoListSelector",
  get: ({ get }) => {
    // get(宣言したAtom) で最新の値を取得
    const todoList: Todo[] = get(todoListState); // タスク一覧を取得
    const searchText: string = get(searchTextFormState); // 検索テキストを取得
    // searchTextがあれば：検索テキストに該当するリストを返す
    // searchTextがなければ：そのまま全てのリストを返す
    // このようにAtomから直接データを取得するのではなく、Selector で加工したデータを取得したいときに利用、データの中間層だと理解
    return searchText
      ? todoList.filter((todo) => todo.title.includes(searchText))
      : todoList;
  },
  // setもある
  // set: ({set}) => {
  //
  // }
});
