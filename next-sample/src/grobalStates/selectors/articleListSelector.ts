import { selectorFamily } from "recoil";
import { QiitaItem } from "../../types/QiitaItem";
import { articleListState } from "../atoms/articleListAtom";
import { minLikesCountState } from "../atoms/minLikesCountAtom";
import { SelectorKeys } from "../recoilKeys";

// searchArticleList（Qiita記事リスト）のSelector（データ加工所）だよという宣言
export const articleListSelector = selectorFamily<QiitaItem[], string>({
  key: SelectorKeys.ARTICLE_LIST_SELECTOR,
  // 引数 id には検索キーワードを渡す
  get:
    (id) =>
    ({ get }) => {
      // get(articleListState(id)) で検索キーワードに紐づくstate(Qiita記事リスト）を取得
      return get(articleListState(id)).filter((item) => {
        // LGTM数でフィルタリングした値を返す
        return item.likes_count >= get(minLikesCountState);
      });
    },
  // 引数 id には検索キーワードを渡す
  set:
    (id) =>
    ({ set }, newValue) => {
      // articleListState(id)を第一引数に指定することで、idをユニークなキーとしたstateをセットする
      set(articleListState(id), newValue);
    },
});
