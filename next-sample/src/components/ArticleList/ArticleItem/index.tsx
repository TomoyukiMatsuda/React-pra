import React from "react";
import { QiitaArticle } from "../../../types/QiitaArticle";

interface Props {
  article: QiitaArticle;
}

export const ArticleItem: React.VFC<Props> = ({ article }) => {
  return (
    <div className="mb-3 mx-12 py-2 px-8 bg-blue-100 rounded-lg shadow">
      <p className="text-center font-bold  text-blue-800 mb-4 border-b-2 border-blue-800">
        {article.title}
      </p>
      <p className="text-blue-700">LGTM 👍：{article.lgtm}</p>
      <p className="text-blue-700">ユーザー：{article.userName}</p>
    </div>
  );
};
