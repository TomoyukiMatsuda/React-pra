import React, { useMemo } from "react";
import Link from "next/link";
import { ArticleList } from "../components/ArticleList";
import { SearchForm } from "../components/SearchForm";
import { useListQiitaItemsRedux } from "../hooks/useListQiitaItemsRedux";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Home: React.VFC = () => {
  const { fetchListArticles, searchWord, errorMessage, loading } =
    useListQiitaItemsRedux();
  const articleState = useSelector((state: RootState) => state.articleList);
  // TODO できればここでデータをハンドリングしたくない
  // 検索ワードに該当のリストを取得している
  const searchArticles = useMemo(
    () => articleState.find((state) => state.searchWord == searchWord),
    [articleState, searchWord]
  );

  return (
    <div className="max-w-5xl my-0 mx-auto px-12">
      <SearchForm fetchArticles={fetchListArticles} />
      <ArticleList
        articles={searchArticles?.qiitaItems || []}
        searchWord={searchWord}
        errorMessage={errorMessage}
        isLoading={loading}
      />
    </div>
  );
};

export default Home;
