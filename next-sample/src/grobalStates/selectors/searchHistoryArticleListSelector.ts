import { selectorFamily } from "recoil";
import { QiitaItem } from "../../types/QiitaItem";
import { searchHistoryArticleListState } from "../atoms/searchHistoryArticleListAtom";
import { minLikesCountState } from "../atoms/minLikesCountAtom";
import { SelectorKeys } from "../recoilKeys";

// atomFamilyとselectorFamilyを利用することによって、引数key毎にデータをatomに格納できる
// searchArticleList（Qiita記事リスト）のSelector（データ整形所）だよという宣言
export const searchHistoryArticleListSelector = selectorFamily<
  QiitaItem[],
  string
>({
  key: SelectorKeys.SEARCH_HISTORY_ARTICLE_LIST,
  get:
    (id) =>
    ({ get }) => {
      return get(searchHistoryArticleListState(id)).filter((item) => {
        return item.likes_count >= get(minLikesCountState);
      });
    },
  set:
    (id) =>
    ({ set }, newValue) => {
      set(searchHistoryArticleListState(id), newValue);
    },
});
