import React from "react";
import { useListQiitaArticles } from "../hooks/useListQiitaArticles";
import { ArticleList } from "../components/ArticleList";
import { SearchForm } from "../components/SearchForm";

const Home: React.VFC = () => {
  const { articles, fetchArticles } = useListQiitaArticles();

  return (
    <div className="max-w-5xl my-0 mx-auto px-12">
      <SearchForm fetchArticles={fetchArticles} />
      <ArticleList articles={articles} />
    </div>
  );
};

export default Home;
