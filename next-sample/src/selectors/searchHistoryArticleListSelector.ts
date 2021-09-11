import { selector } from "recoil";
import { QiitaItem } from "../types/QiitaItem";
import { searchHistoryArticleListState } from "../atoms/searchHistoryArticleListAtom";

// searchArticleList（Qiita記事リスト）のSelector（データ整形所）だよという宣言
export const searchHistoryArticleListSelector = selector<QiitaItem[]>({
  key: "searchHistoryArticleListSelector",
  get: ({ get }) => {
    return get(searchHistoryArticleListState);
  },
  // Atomに直接セットすることも可能だけどselectorからセットするようにする
  set: ({ set }, newValue) => {
    set(searchHistoryArticleListState, newValue);
  },
});
