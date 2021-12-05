import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import { SearchForm } from "../components/SearchForm";
import { useState } from "react";
import { useFetchQiitaItems } from "../useFetchQiitaItems";

const Home: NextPage = () => {
  const [debouncedValue, setDebouncedValue] = useState("");
  const qiitaItems = useFetchQiitaItems(debouncedValue);

  return (
    // todo tailwindにする
    <div className={styles.container}>
      <SearchForm setDebouncedValue={setDebouncedValue} />
      <p className="mb-5 text-gray-700 font-bold">
        検索ワード：{debouncedValue}
      </p>

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
