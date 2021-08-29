import React from "react";
import { QiitaArticle } from "../../types/QiitaArticle";

interface Props {
  articles: Array<QiitaArticle>;
  searchWord: string;
  errorMessage: string;
  isLoading: boolean;
  isEmpty: boolean;
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

  return (
    // todo 検索ワードを表示させたい
    <>
      {/*デフォルトで「検索ワードに該当なーし！！」が表示されるのを防ぐために isEmpty をフラグの一つとしている*/}
      {props.isEmpty && props.articles?.length === 0 ? (
        <p className="mb-2 mx-12 p-8 bg-green-100 rounded-lg">
          検索ワード『{props.searchWord}』に該当なーし！！
        </p>
      ) : (
        props.articles?.map((article) => {
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
        })
      )}
    </>
  );
};
