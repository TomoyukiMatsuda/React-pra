import React from "react";
import { useListQiitaArticles } from "../hooks/useListQiitaArticles";
import { ArticleList } from "../components/ArticleList";
import { SearchForm } from "../components/SearchForm";

const Home: React.VFC = () => {
  const {
    articles,
    searchWord,
    errorMessage,
    isLoading,
    isEmpty,
    fetchArticles,
  } = useListQiitaArticles();

  return (
    <div className="max-w-5xl my-0 mx-auto">
      <SearchForm fetchArticles={fetchArticles} />
      <ArticleList
        articles={articles}
        searchWord={searchWord}
        errorMessage={errorMessage}
        isLoading={isLoading}
        isEmpty={isEmpty}
      />
    </div>
  );
};

export default Home;
