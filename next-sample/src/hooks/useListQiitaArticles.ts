import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { apiClient } from "../lib/apiClient";
import { QiitaItem, QiitaItemResponse } from "../types/QiitaItem";

export const useListQiitaArticles = () => {
  const [articles, setArticles] = useState<QiitaItem[]>([]);

  const fetchArticles = async (
    e: FormEvent<HTMLFormElement>,
    formText: string,
    setFormText: Dispatch<SetStateAction<string>>
  ) => {
    e.preventDefault();

    await apiClient
      .get<Array<QiitaItemResponse>>("/items", {
        params: {
          query: formText,
          per_page: 25,
        },
      })
      .then((response) => {
        // レスポンスから利用したい要素を QiitaItem 型 の配列でセット
        setArticles(
          response.data.map<QiitaItem>((d) => {
            return {
              id: d.id,
              title: d.title,
              likes_count: d.likes_count,
              user: d.user,
            };
          })
        );
      })
      .catch((error) => {
        // エラー
        console.log("エラー");
      });
    setFormText(""); // 最終的にフォーム入力を空にする
  };

  return {
    articles,
    fetchArticles,
  };
};
