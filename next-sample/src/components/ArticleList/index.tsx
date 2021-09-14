import React from "react";
import { QiitaItem } from "../../types/QiitaItem";
import { ArticleItem } from "./ArticleItem";

interface Props {
  articles: QiitaItem[];
}

export const ArticleList: React.VFC<Props> = (props) => {
  return (
    <>
      {props.articles?.map((article) => {
        return <ArticleItem key={article.id} article={article} />;
      })}
    </>
  );
};
