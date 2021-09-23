import { DefaultValue, selector } from "recoil";
import { searchWordsState } from "../atoms/searchWordsAtom";
import { SelectorKeys } from "../recoilKeys";

export const searchWordsSelector = selector<string[]>({
  key: SelectorKeys.SEARCH_WORDS_SELECTOR,
  get: ({ get }) => {
    return get(searchWordsState);
  },
  set: ({ set }, newValue) => {
    if (newValue instanceof DefaultValue) return; // 型がDefaultValueであれば return
    // 重複を防いだ値をセットする
    set(searchWordsState, (currVal) => {
      return Array.from(new Set<string>([...newValue, ...currVal]));
    });
  },
});
