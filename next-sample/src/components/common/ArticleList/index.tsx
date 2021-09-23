import React from "react";
import { QiitaItem } from "../../../types/QiitaItem";
import { ArticleItem } from "./ArticleItem";
import { SearchWordWithCountLabel } from "./SearchWordWithCountLabel";

interface Props {
  articles: QiitaItem[];
  searchWord: string;
}

// Qiita記事リスト＋検索キーワードと記事数表示コンポーネント
export const ArticleList: React.VFC<Props> = (props) => {
  return (
    <>
      <SearchWordWithCountLabel
        searchWord={props.searchWord}
        articles={props.articles}
      />
      {props.articles?.map((article) => {
        return <ArticleItem key={article.id} article={article} />;
      })}
    </>
  );
};
