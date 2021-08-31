import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { apiClient } from "../lib/apiClient";
import { QiitaItemsResponse } from "../types/QiitaItemsResponse";
import { QiitaArticle } from "../types/QiitaArticle";

export const useListQiitaArticles = () => {
  const [articles, setArticles] = useState<Array<QiitaArticle>>([]);
  const [searchWord, setSearchWord] = useState("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchArticles = async (
    e: FormEvent<HTMLFormElement>,
    searchText: string,
    setSearchText: Dispatch<SetStateAction<string>>
  ) => {
    e.preventDefault(); // フォームのデフォルトの動作（リロード）を防ぐ
    setIsLoading(true); // ローディング開始
    setErrorMessage(""); // エラーメッセージを初期化

    // await を付与することでこの処理が終わらない限り次の処理に進まないようになる
    // （async await がないと ローディング処理がうまく行かない）
    await apiClient
      .get<Array<QiitaItemsResponse>>("/api/v2/items", {
        params: {
          query: searchText,
        },
      })
      .then((response) => {
        // レスポンスから利用したい要素を QiitaArticle 型でセット
        setArticles(
          response.data.map<QiitaArticle>((d) => {
            return {
              id: d.id,
              title: d.title,
              lgtm: d.likes_count,
              userName: d.user.name,
            };
          })
        );

        // 検索キーワードをレスポンスから取得してセット
        setSearchWord(response.config.params.query);
      })
      .catch((error) => {
        // エラーメッセージをセット
        setErrorMessage(error.message);
      });

    // ローディング終了
    setIsLoading(false);
    // 成功しても、失敗してもフォーム入力を空にする
    setSearchText("");
  };

  return {
    articles,
    searchWord,
    errorMessage,
    isLoading,
    fetchArticles,
  };
};
