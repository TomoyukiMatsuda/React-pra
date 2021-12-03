import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import { SearchForm } from "../components/SearchForm";
import { useCallback, useEffect, useState } from "react";
import { apiClient } from "../apiClient";

const Home: NextPage = () => {
  const [debouncedValue, setDebouncedValue] = useState("");
  // TODO: 型定義
  const [qiitaItems, setQiitaItems] = useState<any[] | null>([]);

  const fetchQiitaItems = useCallback(async () => {
    try {
      const response = await apiClient.get("/items", {
        params: {
          query: debouncedValue,
          per_page: 10,
        },
      });
      console.log(response);
      // todo: 型定義
      setQiitaItems(
        response.data.map((item: any) => {
          return {
            id: item.id,
            title: item.title,
            likes_count: item.likes_count,
            user: item.user,
          };
        })
      );
    } catch (e) {
      console.log(e);
    }
  }, [debouncedValue]);

  // TODO: debouncedValue でフェッチしたい
  useEffect(() => {
    if (!debouncedValue) return;
    fetchQiitaItems();
  }, [debouncedValue]);

  return (
    <div className={styles.container}>
      <SearchForm setDebouncedValue={setDebouncedValue} isLoading={false} />
      <p>{debouncedValue}</p>
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
