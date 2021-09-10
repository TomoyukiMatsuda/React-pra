import { atom } from "recoil";
import { QiitaItem } from "../types/QiitaItem";

// todo: 型定義修正したいかも
// searchArticleList（Qiita記事リスト）のAtom（データストア）だよという宣言
export const searchArticleListState = atom<QiitaItem[]>({
  key: "searchArticleListState", // プロジェクトで固有のキー
  default: [], // 初期値
});
