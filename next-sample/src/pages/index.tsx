import React, { FormEvent, useCallback, useEffect, useState } from "react";
import { QiitaItemsResponse } from "../types/QiitaItemsResponse";
import { apiClient } from "../lib/apiClient";

interface Article {
  id: string;
  title: string;
  lgtm: number;
  userName: string;
}

const Home: React.VFC = () => {
  const [articles, setArticles] = useState<Array<Article>>([]);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [searchText, setSearchText] = useState<string>();
  const buttonColor = searchText
    ? "bg-blue-700 hover:bg-blue-500"
    : "bg-gray-300";

  const fetchArticles = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      // フォームのデフォルトの動作（リロード）を防ぐ
      e.preventDefault();
      setIsLoading(true);

      // await を付与することでこの処理が終わらない限り次の処理に進まないようになる
      // （async await がないと ローディング処理がうまく行かない）
      await apiClient
        .get<Array<QiitaItemsResponse>>("/api/v2/items", {
          params: {
            query: searchText,
          },
        })
        .then((response) => {
          setIsEmpty(response.data.length === 0);
          setArticles(
            response.data.map<Article>((d) => {
              return {
                id: d.id,
                title: d.title,
                lgtm: d.likes_count,
                userName: d.user.name,
              };
            })
          );
        })
        .catch((error) => {
          setErrorMessage(error.response.data.message);
        });

      // ローディング終了
      setIsLoading(false);
      // 成功しても、失敗してもフォーム入力を空にする
      setSearchText("");
    },
    [searchText, setArticles]
  );

  // todo articlesリスト の中だけでやる
  if (errorMessage) {
    return <p>エラー</p>;
  }
  if (isLoading) {
    return <p>ローディング.......</p>;
  }
  if (isEmpty) {
    return <p>検索結果ないよ〜</p>;
  }

  return (
    <div className="max-w-5xl my-0 mx-auto">
      <div>
        <form className="px-8 pt-6" onSubmit={fetchArticles}>
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
      {articles?.map((article) => {
        return (
          <div
            className="my-5 px-8 bg-blue-100 rounded-lg shadow"
            key={article.id}
          >
            <p className="text-center font-bold  text-blue-800 mb-2">
              {article.title}
            </p>
            <p className="text-blue-700">LGTM 👍：{article.lgtm}</p>
            <p className="text-blue-700">ユーザー：{article.userName}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
