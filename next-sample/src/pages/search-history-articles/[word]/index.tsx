import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { searchHistoryArticleListSelector } from "../../../selectors/searchHistoryArticleListSelector";
import { ArticleItem } from "../../../components/ArticleList/ArticleItem";
import { minLikesCountState } from "../../../atoms/minLikesCountAtom";
import { LikesCountFilter } from "../../../components/LikesCountFilter";

// todo 命名難しい、絞り込みページ的な、ワードとリストの件数０だったら検索ページに戻るみたいなことしたい
const ArticlesBySearchHistoryWord: React.VFC = () => {
  const router = useRouter();
  const searchWord = (router.query.word as string) || "";
  const articleList = useRecoilValue(
    searchHistoryArticleListSelector(searchWord)
  );

  const resetMinLikesCount = useResetRecoilState(minLikesCountState);

  useEffect(() => {
    // アンマウント時にLGTM数リセット
    return () => resetMinLikesCount();
  }, []);

  // todo: コンポーネントの細分化
  return (
    <div className="max-w-5xl mx-auto px-12">
      <LikesCountFilter />
      {searchWord && (
        <p className="mb-4 text-xl">
          検索キーワード と 記事数：
          <span className="ml-2 mr-3 font-bold text-blue-700 border-b-2 border-blue-700">
            {searchWord}
          </span>
          <span className="font-bold text-blue-700 border-b-2 border-blue-700">
            {articleList.length} 件
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
