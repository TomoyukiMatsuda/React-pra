import { atom } from "recoil";
import { AtomKeys } from "../recoilKeys";

// 「検索テキストのフィールド」のAtom（ストア）だよ、という宣言
export const searchWordsState = atom<string[]>({
  key: AtomKeys.SEARCH_WORDS_STATE,
  default: [],
});
