import { atomFamily } from "recoil";
import { QiitaItem } from "../types/QiitaItem";

// todo: 型定義修正したいかも + 命名変更したいかも「履歴」だからhistoryとか
// searchArticleList（Qiita記事リスト）のAtom（データストア）だよという宣言
export const searchHistoryArticleListState = atomFamily<QiitaItem[], string>({
  key: "searchArticleListState", // プロジェクトで固有のキー
  default: [], // 初期値
});
