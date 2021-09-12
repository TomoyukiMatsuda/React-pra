import React, { useEffect } from "react";
import { useListQiitaArticles } from "../hooks/useListQiitaArticles";
import { SearchForm } from "../components/SearchArticles/SearchForm";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { searchHistoryArticleListSelector } from "../grobalStates/selectors/searchHistoryArticleListSelector";
import { SearchResult } from "../components/SearchArticles/SearchResult";

const Home: React.VFC = () => {
  const { articles, searchWord, errorMessage, isLoading, fetchArticles } =
    useListQiitaArticles();
  const setSearchHistoryArticleList = useSetRecoilState(
    searchHistoryArticleListSelector(searchWord)
  );

  useEffect(() => {
    // グローバルステートをセット
    setSearchHistoryArticleList(articles);
  }, [articles, setSearchHistoryArticleList]);

  return (
    <div className="max-w-5xl my-0 mx-auto px-12">
      <SearchForm fetchArticles={fetchArticles} />
      <SearchResult
        articles={articles}
        searchWord={searchWord}
        errorMessage={errorMessage}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Home;
