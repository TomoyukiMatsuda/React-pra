import React, { useMemo } from "react";
import { useListQiitaArticles } from "../hooks/useListQiitaArticles";
import { ArticleList } from "../components/ArticleList";
import { SearchForm } from "../components/SearchForm";
import { useListQiitaItemsRedux } from "../hooks/useListQiitaItemsRedux";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Home: React.VFC = () => {
  const { fetchListArticles, searchText, errorText, loading } =
    useListQiitaItemsRedux();
  const articleState = useSelector((state: RootState) => state.articleList);
  const searchArticles = useMemo(
    () => articleState.find((state) => state.searchWord == searchText),
    [articleState, searchText]
  );

  // todo: この利用していないカスタムフックを削除？
  // const { articles, searchWord, errorMessage, isLoading, fetchArticles } =
  //   useListQiitaArticles();

  return (
    <div className="max-w-5xl my-0 mx-auto px-12">
      <SearchForm fetchArticles={fetchListArticles} />
      <ArticleList
        articles={searchArticles?.qiitaItems || []}
        searchWord={searchText}
        errorMessage={errorText}
        isLoading={loading}
      />
    </div>
  );
};

export default Home;
