import React, { FormEvent, useCallback, useEffect, useState } from "react";
import { QiitaItemsResponse } from "../types/QiitaItemsResponse";
import { apiClient } from "../lib/apiClient";
import { useListQiitaArticles } from "../hooks/useListQiitaArticles";
import { ArticleList } from "../components/ArticleList";

const Home: React.VFC = () => {
  const { articles, errorMessage, isLoading, isEmpty, fetchArticles } =
    useListQiitaArticles();
  const [searchText, setSearchText] = useState<string>("");
  const buttonColor = searchText
    ? "bg-blue-700 hover:bg-blue-500"
    : "bg-gray-300";

  return (
    <div className="max-w-5xl my-0 mx-auto">
      <div>
        <form
          className="p-12"
          onSubmit={(e) => fetchArticles(e, searchText, setSearchText)}
        >
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Qiita 記事検索キーワードを入力
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="例：React"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className={`${buttonColor} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
            type="submit"
            disabled={!searchText}
          >
            検索
          </button>
        </form>
      </div>
      <ArticleList
        articles={articles}
        errorMessage={errorMessage}
        isLoading={isLoading}
        isEmpty={isEmpty}
      />
    </div>
  );
};

export default Home;
