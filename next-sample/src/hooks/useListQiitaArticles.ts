import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useCallback,
  useState,
} from "react";
import { apiClient } from "../lib/apiClient";
import { QiitaItem, QiitaItemResponse } from "../types/QiitaItem";
import { useSetRecoilState } from "recoil";
import { searchWordsSelector } from "../grobalStates/selectors/searchWordsSelector";

export const useListQiitaArticles = () => {
  const setSearchWords = useSetRecoilState(searchWordsSelector);
  const [articles, setArticles] = useState<QiitaItem[]>([]);
  const [searchWord, setSearchWord] = useState("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchArticles = useCallback(
    async (
      e: FormEvent<HTMLFormElement>,
      formText: string,
      setFormText: Dispatch<SetStateAction<string>>
    ) => {
      e.preventDefault(); // フォームのデフォルトの動作（リロード）を防ぐ
      setIsLoading(true); // ローディング開始
      setErrorMessage(""); // エラーメッセージを初期化

      await apiClient
        .get<QiitaItemResponse[]>("/items", {
          params: {
            query: formText, // フォーム入力を検索ワードとして設定
            per_page: 100, // 100件 の記事を取得するように設定
          },
        })
        .then((response) => {
          // データを利用したい値だけの形に整形
          const searchArticleResponse = response.data.map<QiitaItem>((d) => {
            return {
              id: d.id,
              title: d.title,
              likes_count: d.likes_count,
              user: d.user,
            };
          });

          setSearchWord(response.config.params.query); // 検索キーワードをレスポンスから取得してセット
          setArticles(searchArticleResponse);

          // 検索結果が1件以上ある場合だけ検索履歴ワードをセットする（グローバルステート）
          if (searchArticleResponse.length !== 0) {
            // セットする値は配列なので、検索キーワード１件だけの配列をセット
            setSearchWords([response.config.params.query]);
          }
        })
        .catch((error) => {
          setErrorMessage(error.message); // エラーメッセージをセット
        });

      setIsLoading(false); // ローディング終了
      setFormText(""); // 最終的にフォーム入力を空にする
    },
    [setIsLoading, setErrorMessage, setArticles, setSearchWord, setSearchWords]
  );

  return {
    articles,
    searchWord,
    errorMessage,
    isLoading,
    fetchArticles,
  };
};
