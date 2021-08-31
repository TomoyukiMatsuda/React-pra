import React from "react";
import { QiitaArticle } from "../../types/QiitaArticle";

interface Props {
  articles: Array<QiitaArticle>;
  searchWord: string;
  errorMessage: string;
  isLoading: boolean;
}

export const ArticleList: React.VFC<Props> = (props) => {
  if (props.isLoading) {
    return (
      <p className="mb-2 mx-12 p-8 bg-yellow-100 rounded-lg">
        ローディング.......
      </p>
    );
  }
  if (props.errorMessage) {
    return (
      <p className="mb-2 mx-12 p-8 bg-red-100 rounded-lg">
        {props.errorMessage}
      </p>
    );
  }
  if (props.searchWord && props.articles?.length === 0) {
    return (
      <p className="mb-2 mx-12 p-8 bg-green-100 rounded-lg">
        検索ワード
        <span className="font-bold border-b-2 border-black">
          {props.searchWord}
        </span>
        に該当なーし！！
      </p>
    );
  }

  return (
    <>
      {props.articles?.map((article) => {
        return (
          <div
            className="mb-3 mx-12 px-8 bg-blue-100 rounded-lg shadow"
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
