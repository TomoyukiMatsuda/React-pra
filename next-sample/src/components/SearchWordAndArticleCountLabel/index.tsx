import React from "react";
import { QiitaItem } from "../../types/QiitaItem";

interface Props {
  searchWord: string;
  articles: QiitaItem[];
}

// 「検索キーワード と 記事数」ラベルコンポーネント
export const SearchWordAndArticleCountLabel: React.VFC<Props> = (props) => {
  return (
    <>
      {props.searchWord && (
        <p className="mb-4 text-xl">
          検索キーワード と 記事数：
          <span className="ml-2 mr-3 font-bold text-blue-700 border-b-2 border-blue-700">
            {props.searchWord}
          </span>
          <span className="font-bold text-blue-700 border-b-2 border-blue-700">
            {props.articles.length} 件
          </span>
        </p>
      )}
    </>
  );
};
