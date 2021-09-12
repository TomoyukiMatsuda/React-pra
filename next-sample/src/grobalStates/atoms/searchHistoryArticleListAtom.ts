import { atomFamily } from "recoil";
import { QiitaItem } from "../../types/QiitaItem";
import { AtomKeys } from "../recoilKeys";

// todo: 型定義修正したいかも + 命名変更したいかも「履歴」だからhistoryとか
// searchArticleList（Qiita記事リスト）のAtom（データストア）だよという宣言
export const searchHistoryArticleListState = atomFamily<QiitaItem[], string>({
  key: AtomKeys.SEARCH_HISTORY_ARTICLE_LIST_STATE, // プロジェクトで固有のキー
  default: [], // 初期値
});
