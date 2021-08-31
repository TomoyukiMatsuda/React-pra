import React from "react";
import { QiitaArticle } from "../../types/QiitaArticle";
import { ArticleItem } from "./ArticleItem";

interface Props {
  articles: Array<QiitaArticle>;
  searchWord: string;
  errorMessage: string;
  isLoading: boolean;
}

export const ArticleList: React.VFC<Props> = (props) => {
  if (props.isLoading) {
    return (
      <p className="mb-2 p-8 bg-yellow-100 rounded-lg">ローディング.......</p>
    );
  }
  if (props.errorMessage) {
    return (
      <p className="mb-2 p-8 bg-red-100 rounded-lg">{props.errorMessage}</p>
    );
  }
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
      {/*todo 検索ワードを表示*/}
      {props.articles?.map((article) => {
        return <ArticleItem key={article.id} article={article} />;
      })}
    </>
  );
};
