import { atom } from "recoil";
import { AtomKeys } from "../recoilKeys";

// 「検索キーワード」のAtom（データストア）
export const searchWordsState = atom<string[]>({
  key: AtomKeys.SEARCH_WORDS_STATE,
  default: [],
});
