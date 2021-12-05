import { useCallback, useEffect, useState } from "react";
import { IQiitaItem } from "./IQiitaItem";
import { apiClient } from "./apiClient";

// QiitaItemをフェッチして、アイテムリストを返すカスタムフック
export const useFetchQiitaItems = (searchText: string): IQiitaItem[] | null => {
  const [qiitaItems, setQiitaItems] = useState<IQiitaItem[] | null>(null);

  const fetchQiitaItems = useCallback(async () => {
    try {
      const response = await apiClient.get("/items", {
        params: {
          query: searchText,
          per_page: 10,
        },
      });
      setQiitaItems(response.data);
    } catch (e) {
      // エラーハンドリング
      console.log(e);
    }
  }, [searchText]);

  // searchText が更新されると実行される Effect
  useEffect(() => {
    if (searchText) {
      // Promiseを返す関数のため即時関数で実行する
      // (fetchQiitaItems)();
      fetchQiitaItems();
    } else {
      // searchText が空のときはnullをセットして初期化
      setQiitaItems(null);
    }
  }, [searchText]);

  return qiitaItems;
};
