import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useListQiitaArticles } from "../hooks/useListQiitaArticles";
import { ArticleList } from "../components/ArticleList";
import { SearchForm } from "../components/SearchForm";
import { useRecoilValue } from "recoil";
import { searchHistoryArticleListSelector } from "../selectors/searchHistoryArticleListSelector";

const Home: React.VFC = () => {
  const { articles, searchWord, errorMessage, isLoading, fetchArticles } =
    useListQiitaArticles();
  const [searchHistoryWords, setSearchHistoryWords] = useState<string[]>([]);
  //console.log(useRecoilValue(searchHistoryArticleListSelector(searchWord)));

  useEffect(() => {
    // 検索ワードをセット、検索履歴に追加する
    setSearchHistoryWords([...searchHistoryWords, searchWord]);
  }, [searchWord]);

  return (
    <div className="max-w-5xl my-0 mx-auto px-12">
      {/*todo 検索履歴コンポーネント化*/}
      {searchHistoryWords.length &&
        searchHistoryWords.map((searchHistoryWord, index) => {
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
