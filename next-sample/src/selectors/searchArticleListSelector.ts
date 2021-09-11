import { selector } from "recoil";
import { QiitaItem } from "../types/QiitaItem";
import { searchArticleListState } from "../atoms/searchArticleListAtom";

// searchArticleList（Qiita記事リスト）のSelector（データ整形所）だよという宣言
export const searchArticleListSelector = selector<QiitaItem[]>({
  key: "searchArticleListSelector",
  get: ({ get }) => {
    return get(searchArticleListState);
  },
  // Atomに直接セットすることも可能だけどselectorからセットするようにする
  set: ({ set }, newValue) => {
    set(searchArticleListState, newValue);
  },
});
