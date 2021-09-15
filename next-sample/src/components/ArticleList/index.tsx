import React from "react";
import { QiitaItem } from "../../types/QiitaItem";
import { ArticleItem } from "./ArticleItem";
import { useListQiitaArticles } from "../../hooks/useListQiitaArticles";

// interface Props {
//   articles: QiitaItem[];
// }

//export const ArticleList: React.VFC<Props> = (props) => {
export const ArticleList: React.VFC = () => {
  const { articles } = useListQiitaArticles();

  return (
    <>
      {/*{props.articles?.map((article) => {*/}
      {articles?.map((article) => {
        return <ArticleItem key={article.id} article={article} />;
      })}
    </>
  );
};
