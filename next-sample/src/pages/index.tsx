import React, { useEffect } from "react";
import Link from "next/link";
import { useListQiitaArticles } from "../hooks/useListQiitaArticles";
import { ArticleList } from "../components/ArticleList";
import { SearchForm } from "../components/SearchForm";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { searchHistoryArticleListSelector } from "../selectors/searchHistoryArticleListSelector";
import { searchWordsState } from "../atoms/searchWordsAtom";

const Home: React.VFC = () => {
  const { articles, searchWord, errorMessage, isLoading, fetchArticles } =
    useListQiitaArticles();
  // グローバルステートをセット ここを読み取りだけにする
  const searchHistoryWords = useRecoilValue(searchWordsState);
  const setSearchHistoryArticleList = useSetRecoilState(
    searchHistoryArticleListSelector(searchWord)
  );

  useEffect(() => {
    // グローバルステートをセット
    setSearchHistoryArticleList(articles);
  }, [articles, setSearchHistoryArticleList]);

  return (
    <div className="max-w-5xl my-0 mx-auto px-12">
      {/*todo 検索履歴コンポーネント化*/}
      {searchHistoryWords.length !== 0 &&
        searchHistoryWords?.map((searchHistoryWord, index) => {
          return (
            <Link
              key={index}
              href={`/search-history-articles/${searchHistoryWord}`}
            >
              <span className="px-1 cursor-pointer">{searchHistoryWord}</span>
            </Link>
          );
        })}
      <SearchForm fetchArticles={fetchArticles} />
      <ArticleList
        articles={articles}
        searchWord={searchWord}
        errorMessage={errorMessage}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Home;
