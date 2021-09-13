import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { searchHistoryArticleListSelector } from "../../../grobalStates/selectors/searchHistoryArticleListSelector";
import { minLikesCountState } from "../../../grobalStates/atoms/minLikesCountAtom";
import { LikesCountFilter } from "../../../components/FilterArticles/LikesCountFilter";
import { ArticleList } from "../../../components/common/ArticleList";
import { BaseContainer } from "../../../components/BaseContainer";

// todo 絞り込みページ的な、ワードとリストの件数０だったら検索ページに戻るみたいなことしたい
const FilterArticlesByWord: React.VFC = () => {
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

  return (
    <BaseContainer>
      <button
        className={`bg-red-400 hover:bg-red-300 text-white font-bold mt-2 py-1 px-3 rounded focus:outline-none focus:shadow-outline`}
        onClick={() => router.push("/search-articles")}
      >
        ＜ もどる
      </button>
      <LikesCountFilter />
      <ArticleList articles={articleList} searchWord={searchWord} />
    </BaseContainer>
  );
};

export default FilterArticlesByWord;
