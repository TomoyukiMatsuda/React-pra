import { useCallback, useEffect, useState } from "react";
import { IQiitaItem } from "../IQiitaItem";
import { apiClient } from "../apiClient";

// QiitaItemをフェッチして、アイテムリストを返すカスタムフック
export const useFetchQiitaItems = (searchQuery: string) => {
  const [qiitaItems, setQiitaItems] = useState<IQiitaItem[] | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  const fetchQiitaItems = useCallback(
    async (fetchedItemCount: number, currItems?: IQiitaItem[]) => {
      setIsLoading(true);
      try {
        const response = await apiClient.get("/items", {
          params: {
            // TODO: pageの値とレスポンスが正常に取れているかどうか確認
            page: currItems?.length, // offset的な
            query: searchQuery,
            per_page: fetchedItemCount,
          },
        });

        // currQiitaItemsの有無でセットするデータをハンドリング
        const newQiitaItems = currItems
          ? [...currItems, ...response.data]
          : response.data;
        setQiitaItems(newQiitaItems);
      } catch (e) {
        // エラーハンドリング
        console.log(e);
      }
      setIsLoading(false);
    },
    [searchQuery]
  );

  // searchQuery が更新されると実行される Effect
  useEffect(() => {
    if (searchQuery) {
      // Promiseを返す関数のため即時関数で実行する
      // (fetchQiitaItems)();
      fetchQiitaItems(10);
    } else {
      // searchQuery が空のときはnullをセットして初期化
      setQiitaItems(undefined);
    }
  }, [searchQuery]);

  return { fetchQiitaItems, qiitaItems, isLoading };
};
