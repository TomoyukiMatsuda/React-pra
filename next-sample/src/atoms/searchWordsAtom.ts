import { atom } from "recoil";

// 「検索テキストのフィールド」のAtom（ストア）だよ、という宣言
// todo selector も作成したほうが良さそう
export const searchWordsState = atom<string[]>({
  key: "searchWordsState",
  default: [],
});
