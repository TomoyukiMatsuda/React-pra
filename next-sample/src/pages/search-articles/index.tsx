import React, { useEffect } from "react";
import { useListQiitaArticles } from "../../hooks/useListQiitaArticles";
import { SearchForm } from "../../components/SearchArticles/SearchForm";
import { useSetRecoilState } from "recoil";
import { searchHistoryArticleListSelector } from "../../grobalStates/selectors/searchHistoryArticleListSelector";
import { SearchResult } from "../../components/SearchArticles/SearchResult";
import { BaseContainer } from "../../components/BaseContainer";

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
    <BaseContainer>
      <SearchForm fetchArticles={fetchArticles} />
      <SearchResult
        articles={articles}
        searchWord={searchWord}
        errorMessage={errorMessage}
        isLoading={isLoading}
      />
    </BaseContainer>
  );
};

export default Home;
