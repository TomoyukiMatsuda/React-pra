import React from "react";
import styles from "../../../styles/Home.module.css";
import useSWR from "swr";
import { JsonPlaceholderResponse } from "../../types/JsonPlaceholder";

// fetcher
const fetcher = async (input: RequestInfo, init?: RequestInit) => {
  const res = await fetch(input, init);
  return res.json();
};

export const Main: React.VFC = () => {
  const { data, error, isValidating } = useSWR<JsonPlaceholderResponse[]>(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  if (error) return <div>エラーーーーーー</div>;
  if (!data) return <div>ローディングちゅう</div>;

  return (
    <main className={styles.main}>
      <ol>
        {data.map((d) => (
          <li key={d.id}>{d.title}</li>
        ))}
      </ol>
    </main>
  );
};
