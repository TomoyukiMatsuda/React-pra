import { atom } from "recoil";

// 「検索テキストのフィールド」のAtom（ストア）だよ、という宣言
export const searchWordsState = atom<string[]>({
  key: "searchWordsState",
  default: [],
});
