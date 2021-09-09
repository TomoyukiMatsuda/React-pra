import { atom } from "recoil";

// 「追加タスク名のフィールド」のAtom（ストア）だよと宣言する
export const todoTitleFormState = atom<string>({
  key: "todoTitleForm",
  default: "",
});
