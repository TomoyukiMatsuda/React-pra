import { atomFamily } from "recoil";
import { QiitaItem } from "../../types/QiitaItem";
import { AtomKeys } from "../recoilKeys";

// searchArticleList（Qiita記事リスト）のAtom（データストア）
export const articleListState = atomFamily<QiitaItem[], string>({
  key: AtomKeys.ARTICLE_LIST_STATE,
  default: [],
});
