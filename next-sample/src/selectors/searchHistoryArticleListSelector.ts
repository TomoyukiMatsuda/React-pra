import { DefaultValue, selectorFamily } from "recoil";
import { QiitaItem } from "../types/QiitaItem";
import { searchHistoryArticleListState } from "../atoms/searchHistoryArticleListAtom";
import { minLikesCountState } from "../atoms/minLikesCountAtom";

// atomFamilyとselectorFamilyを利用することによって、引数key毎にデータをatomに格納できる
// searchArticleList（Qiita記事リスト）のSelector（データ整形所）だよという宣言
export const searchHistoryArticleListSelector = selectorFamily<
  QiitaItem[],
  string
>({
  key: "searchHistoryArticleListSelector",
  get:
    (key) =>
    ({ get }) => {
      return get(searchHistoryArticleListState(key)).filter((item) => {
        return item.likes_count >= get(minLikesCountState);
      });
    },
  // Atomに直接セットすることも可能だけどselectorからセットするようにする
  set:
    (key) =>
    ({ get, set }, newValue) => {
      // atomに検索結果を追加していくパターン
      // DefaultValue だったらセットしないで return
      // todo: 追加処理不要そう
      if (newValue instanceof DefaultValue) return;
      set(searchHistoryArticleListState(key), [
        ...get(searchHistoryArticleListState(key)),
        ...newValue,
      ]);
    },
});
