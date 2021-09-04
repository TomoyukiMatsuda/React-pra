import React from "react";
import { QiitaItem } from "../../types/QiitaItem";
import { ArticleItem } from "./ArticleItem";

interface Props {
  articles: Array<QiitaItem>;
  searchWord: string;
  errorMessage: string;
  isLoading: boolean;
}

export const ArticleList: React.VFC<Props> = (props) => {
  // ローディング中
  if (props.isLoading) {
    return (
      <p className="mb-2 p-8 bg-yellow-100 rounded-lg">ローディング.......</p>
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
    <>
      {props.searchWord && (
        <p className="mb-4 text-xl">
          検索キーワード
          <span className="ml-2 font-bold text-blue-700 border-b-2 border-blue-700">
            {props.searchWord}
          </span>
        </p>
      )}
      {props.articles?.map((article) => {
        return <ArticleItem key={article.id} article={article} />;
      })}
    </>
  );
};
