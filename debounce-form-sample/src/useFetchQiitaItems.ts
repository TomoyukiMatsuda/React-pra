import { useCallback, useEffect, useState } from "react";
import { IQiitaItem } from "./IQiitaItem";
import { apiClient } from "./apiClient";

export const useFetchQiitaItems = (searchText: string): IQiitaItem[] | null => {
  const [qiitaItems, setQiitaItems] = useState<IQiitaItem[] | null>(null);

  // TODO: カスタムhook
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

  useEffect(() => {
    if (searchText) {
      //即時関数にしたい
      // (fetchQiitaItems)();
      fetchQiitaItems();
    } else {
      // searchText が空のときはnullをセットして初期化
      setQiitaItems(null);
    }
  }, [searchText]);

  return qiitaItems;
};
