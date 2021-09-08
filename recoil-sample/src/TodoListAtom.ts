// atom.d.tsの中身
// export interface AtomOptions<T> {
//   key: NodeKey;
//   default: RecoilValue<T> | Promise<T> | T;
//   effects_UNSTABLE?: ReadonlyArray<AtomEffect<T>>;
//   dangerouslyAllowMutability?: boolean;
// }
import { atom } from "recoil";
import { Todo } from "./Todo";

export const todoListState = atom<Todo[]>({
  key: "todoList",
  // 初期値として3件のタスクをもつ配列を宣言
  default: [{ title: "one" }, { title: "two" }, { title: "three" }],
});
