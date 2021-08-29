import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { apiClient } from "../lib/apiClient";
import { QiitaItemsResponse } from "../types/QiitaItemsResponse";

export interface Article {
  id: string;
  title: string;
  lgtm: number;
  userName: string;
}

export const useListQiitaArticles = () => {
  const [articles, setArticles] = useState<Array<Article>>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  const fetchArticles = async (
    e: FormEvent<HTMLFormElement>,
    searchText: string,
    setSearchText: Dispatch<SetStateAction<string>>
  ) => {
    // フォームのデフォルトの動作（リロード）を防ぐ
    e.preventDefault();
    // ローディング開始
    setIsLoading(true);
    // エラーメッセージがあったとしても空にしてリセットする
    setErrorMessage("");

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
        setErrorMessage(error.message);
      });

    // ローディング終了
    setIsLoading(false);

    // 成功しても、失敗してもフォーム入力を空にする
    setSearchText("");
  };

  return {
    articles,
    errorMessage,
    isLoading,
    isEmpty,
    fetchArticles,
  };
};
