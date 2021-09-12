import { DefaultValue, selector } from "recoil";
import { searchWordsState } from "../atoms/searchWordsAtom";
import { SelectorKeys } from "../recoilKeys";

export const searchWordsSelector = selector<string[]>({
  key: SelectorKeys.SEARCH_WORDS,
  get: ({ get }) => {
    return get(searchWordsState);
  },
  set: ({ set }, newValue) => {
    // 型がDefaultValueであれば return
    if (newValue instanceof DefaultValue) return;
    // 重複を防いだ値をセットする
    set(searchWordsState, Array.from(new Set<string>(newValue)));
  },
});