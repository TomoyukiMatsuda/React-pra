import React from "react";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { searchHistoryArticleListSelector } from "../../../selectors/searchHistoryArticleListSelector";
import { ArticleItem } from "../../../components/ArticleList/ArticleItem";

// todo 命名難しい
const ArticlesBySearchHistoryWord: React.VFC = () => {
  const router = useRouter();
  const searchWord = (router.query.word as string) || "";
  // pathから取得した検索ワードに紐づくステートを取得
  const articleList = useRecoilValue(
    searchHistoryArticleListSelector(searchWord)
  );

  return (
    <div>
      {searchWord && (
        <p className="mb-4 text-xl">
          検索キーワード
          <span className="ml-2 font-bold text-blue-700 border-b-2 border-blue-700">
            {searchWord}
          </span>
        </p>
      )}
      {articleList?.map((article) => {
        return <ArticleItem key={article.id} article={article} />;
      })}
    </div>
  );
};

export default ArticlesBySearchHistoryWord;
