import React from "react";
import { Article } from "../../hooks/useListQiitaArticles";

interface Props {
  articles: Array<Article>;
  errorMessage: string;
  isLoading: boolean;
  isEmpty: boolean;
}

export const ArticleList: React.VFC<Props> = (props) => {
  if (props.errorMessage) {
    return <p>{props.errorMessage}</p>;
  }
  if (props.isLoading) {
    return <p>ローディング.......</p>;
  }
  if (props.isEmpty) {
    return <p>検索結果ないよ〜</p>;
  }

  return (
    <>
      {props.articles?.map((article) => {
        return (
          <div
            className="mb-2 px-8 bg-blue-100 rounded-lg shadow"
            key={article.id}
          >
            <p className="text-center font-bold  text-blue-800 mb-4 border-b-2 border-blue-800">
              {article.title}
            </p>
            <p className="text-blue-700">LGTM 👍：{article.lgtm}</p>
            <p className="text-blue-700">ユーザー：{article.userName}</p>
          </div>
        );
      })}
    </>
  );
};
