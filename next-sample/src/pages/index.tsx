import React, { useEffect } from "react";
import { useListQiitaArticles } from "../hooks/useListQiitaArticles";
import { ArticleList } from "../components/ArticleList";
import { SearchForm } from "../components/SearchForm";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { searchHistoryArticleListSelector } from "../grobalStates/selectors/searchHistoryArticleListSelector";
import { SearchResultLayout } from "../components/SearchResultLayout";

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
      <SearchResultLayout
        articles={articles}
        searchWord={searchWord}
        errorMessage={errorMessage}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Home;
