import React, { useEffect } from "react";
import { useListQiitaArticles } from "../../hooks/useListQiitaArticles";
import { SearchForm } from "../../components/SearchArticlesPage/SearchForm";
import { useSetRecoilState } from "recoil";
import { articleListSelector } from "../../grobalStates/selectors/articleListSelector";
import { SearchResult } from "../../components/SearchArticlesPage/SearchResult";
import { BaseContainer } from "../../components/BaseContainer";
import nProgress from "nprogress";

// Qiita記事検索ページ
const SearchArticles: React.VFC = () => {
  const { articles, searchWord, errorMessage, isLoading, fetchArticles } =
    useListQiitaArticles();
  // 検索キーワードを引数に渡した articleListSelector のセッター
  const setSearchArticleList = useSetRecoilState(
    articleListSelector(searchWord)
  );

  useEffect(() => {
    // グローバルステートをセット
    setSearchArticleList(articles);
  }, [articles, setSearchArticleList]);

  useEffect(() => {
    // この記述により、ページ遷移時だけでなく、APIを叩く際のプログレスバーの表示も実現している
    isLoading ? nProgress.start() : nProgress.done();
  }, [isLoading]);

  return (
    <BaseContainer>
      <SearchForm fetchArticles={fetchArticles} isLoading={isLoading} />
      <SearchResult
        articles={articles}
        searchWord={searchWord}
        errorMessage={errorMessage}
        isLoading={isLoading}
      />
    </BaseContainer>
  );
};

export default SearchArticles;
