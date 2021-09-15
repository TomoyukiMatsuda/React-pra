import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { articleListSelector } from "../../../grobalStates/selectors/articleListSelector";
import { minLikesCountState } from "../../../grobalStates/atoms/minLikesCountAtom";
import { LikesCountFilter } from "../../../components/FilterArticles/LikesCountFilter";
import { ArticleList } from "../../../components/common/ArticleList";
import { BaseContainer } from "../../../components/BaseContainer";

// LGTM数でQiita記事絞り込みページ
const FilterArticlesByWord: React.VFC = () => {
  const router = useRouter();
  const searchWord = (router.query.word as string) || "";
  const articleList = useRecoilValue(articleListSelector(searchWord));
  const resetMinLikesCount = useResetRecoilState(minLikesCountState);

  useEffect(() => {
    // アンマウント時にLGTM数リセット
    return () => resetMinLikesCount();
  }, []);

  return (
    <BaseContainer>
      <button
        className={`bg-blue-500 hover:bg-blue-400 text-white font-bold mt-2 py-1 px-3 rounded focus:outline-none focus:shadow-outline`}
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
