import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { apiClient } from "../lib/apiClient";
import { QiitaItem, QiitaItemResponse } from "../types/QiitaItem";
import { useSetRecoilState } from "recoil";
import { searchHistoryArticleListSelector } from "../selectors/searchHistoryArticleListSelector";

export const useListQiitaArticles = () => {
  // ローカルステート
  const [articles, setArticles] = useState<Array<QiitaItem>>([]);
  const [searchWord, setSearchWord] = useState("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  // Recoil グローバルステートセット　todo 命名修正したい history とか
  const setSearchArticleList = useSetRecoilState(
    searchHistoryArticleListSelector
  );

  const fetchArticles = async (
    e: FormEvent<HTMLFormElement>,
    formText: string,
    setFormText: Dispatch<SetStateAction<string>>
  ) => {
    e.preventDefault(); // フォームのデフォルトの動作（リロード）を防ぐ
    setIsLoading(true); // ローディング開始
    setErrorMessage(""); // エラーメッセージを初期化

    // await を付与することでこの処理が終わらない限り次の処理に進まないようになる（これがないとローディング処理などが先に呼ばれてしまう）
    await apiClient
      .get<Array<QiitaItemResponse>>("/items", {
        params: {
          query: formText, // フォーム入力を検索ワードとして設定
          per_page: 25, // 25件 の記事を取得するように設定
        },
      })
      .then((response) => {
        // レスポンスから利用したい要素の QiitaItem 型 の配列
        const searchArticleResponse = response.data.map<QiitaItem>((d) => {
          return {
            id: d.id,
            title: d.title,
            likes_count: d.likes_count,
            user: d.user,
          };
        });

        // Recoil グローバルステートにセット
        setSearchArticleList(searchArticleResponse);
        // レスポンスをローカルステートにセット
        setArticles(searchArticleResponse);

        // 検索キーワードをレスポンスから取得してセット
        setSearchWord(response.config.params.query);
      })
      .catch((error) => {
        // エラーメッセージをセット
        setErrorMessage(error.message);
      });

    setIsLoading(false); // ローディング終了
    setFormText(""); // 最終的にフォーム入力を空にする
  };

  return {
    articles,
    searchWord,
    errorMessage,
    isLoading,
    fetchArticles,
  };
};
