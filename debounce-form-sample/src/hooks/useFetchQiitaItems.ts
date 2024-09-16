import { useCallback, useEffect, useState } from "react";
import { IQiitaItem } from "../IQiitaItem";
import { apiClient } from "../apiClient";

// QiitaItemをフェッチして、アイテムリストを返すカスタムフック
export const useFetchQiitaItems = (searchQuery: string) => {
  const [qiitaItems, setQiitaItems] = useState<IQiitaItem[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchQiitaItems = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await apiClient.get("/items", {
        params: {
          query: searchQuery,
          per_page: 10,
        },
      });
      setQiitaItems(response.data);
    } catch (e) {
      // エラーハンドリング
      console.log(e);
    }
    setIsLoading(false);
  }, [searchQuery]);

  // searchQuery が更新されると実行される Effect
  useEffect(() => {
    if (searchQuery) {
      // Promiseを返す関数のため即時関数で実行する
      // (fetchQiitaItems)();
      fetchQiitaItems();
    } else {
      // searchQuery が空のときはnullをセットして初期化
      setQiitaItems(null);
    }
  }, [searchQuery]);

  return { qiitaItems, isLoading };
};
