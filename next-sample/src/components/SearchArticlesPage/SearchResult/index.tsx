import React from "react";
import { QiitaItem } from "../../../types/QiitaItem";
import { ArticleList } from "../../common/ArticleList";

interface Props {
  articles: QiitaItem[];
  searchWord: string;
  errorMessage: string;
  isLoading: boolean;
}

// 検索結果表示コンポーネント
export const SearchResult: React.VFC<Props> = (props) => {
  // ローディング中
  if (props.isLoading) {
    return (
      <p className="mb-2 p-8 bg-yellow-100 rounded-lg">
        ローディング中.......やで
      </p>
    );
  }
  // エラー（API失敗）
  if (props.errorMessage) {
    return (
      <p className="mb-2 p-8 bg-red-100 rounded-lg">{props.errorMessage}</p>
    );
  }
  // 成功したものの、検索結果0件
  if (props.searchWord && props.articles?.length === 0) {
    return (
      <p className="mb-2 p-8 bg-green-100 rounded-lg">
        検索ワード
        <span className="font-bold border-b-2 border-black">
          {props.searchWord}
        </span>
        に該当なーーーし！！
      </p>
    );
  }
  return (
    <ArticleList articles={props.articles} searchWord={props.searchWord} />
  );
};
