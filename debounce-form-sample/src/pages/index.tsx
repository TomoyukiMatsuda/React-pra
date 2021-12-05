import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import { SearchForm } from "../components/SearchForm";
import { useCallback, useEffect, useState } from "react";
import { apiClient } from "../apiClient";
import { IQiitaItem } from "../IQiitaItem";

const Home: NextPage = () => {
  const [debouncedValue, setDebouncedValue] = useState("");
  const [qiitaItems, setQiitaItems] = useState<IQiitaItem[] | null>(null);

  // TODO: カスタムhook
  const fetchQiitaItems = useCallback(async () => {
    try {
      const response = await apiClient.get("/items", {
        params: {
          query: debouncedValue,
          per_page: 10,
        },
      });
      setQiitaItems(response.data);
    } catch (e) {
      // エラーハンドリング
      console.log(e);
    }
  }, [debouncedValue]);

  useEffect(() => {
    if (debouncedValue) {
      //即時関数にしたい
      // (fetchQiitaItems)();
      fetchQiitaItems();
    } else {
      setQiitaItems(null);
    }
  }, [debouncedValue]);

  return (
    <div className={styles.container}>
      <SearchForm setDebouncedValue={setDebouncedValue} isLoading={false} />
      <p>{debouncedValue}</p>

      {/*TODO: ローディングのハンドリング*/}
      <div>
        {qiitaItems?.map((item) => {
          return (
            <div
              key={item.id}
              className="mb-3 py-2 px-8 bg-blue-100 rounded-lg shadow"
            >
              <p className="text-center font-bold  text-blue-800 mb-4 border-b-2 border-blue-800">
                {item.title}
              </p>
              <p className="text-blue-700">LGTM 👍：{item.likes_count}</p>
              <p className="text-blue-700">ユーザー：{item.user.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
