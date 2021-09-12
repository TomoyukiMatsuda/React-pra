import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { searchHistoryArticleListSelector } from "../../../grobalStates/selectors/searchHistoryArticleListSelector";
import { minLikesCountState } from "../../../grobalStates/atoms/minLikesCountAtom";
import { LikesCountFilter } from "../../../components/FilterArticles/LikesCountFilter";
import { ArticleList } from "../../../components/common/ArticleList";

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
      <ArticleList articles={articleList} searchWord={searchWord} />
    </div>
  );
};

export default ArticlesBySearchHistoryWord;
