import { selectorFamily } from "recoil";
import { QiitaItem } from "../../types/QiitaItem";
import { articleListState } from "../atoms/articleListAtom";
import { minLikesCountState } from "../atoms/minLikesCountAtom";
import { SelectorKeys } from "../recoilKeys";

// searchArticleList（Qiita記事リスト）のSelector（データ整形所）だよという宣言
export const articleListSelector = selectorFamily<QiitaItem[], string>({
  key: SelectorKeys.ARTICLE_LIST_SELECTOR,
  get:
    (id) =>
    ({ get }) => {
      return get(articleListState(id)).filter((item) => {
        return item.likes_count >= get(minLikesCountState);
      });
    },
  set:
    (id) =>
    ({ set }, newValue) => {
      set(articleListState(id), newValue);
    },
});
