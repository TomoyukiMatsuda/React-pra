import React from "react";
import { QiitaItem } from "../../types/QiitaItem";
import { ArticleItem } from "./ArticleItem";

// TODO: Propsからアクセス？
interface Props {
  articles: QiitaItem[];
  searchWord: string;
}

export const ArticleList: React.VFC<Props> = (props) => {
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
