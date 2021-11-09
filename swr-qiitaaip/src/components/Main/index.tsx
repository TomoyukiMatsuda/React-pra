import React from "react";
import styles from "../../../styles/Home.module.css";
import useSWR from "swr";
import { JsonPlaceholderResponse } from "../../types/JsonPlaceholder";

export const Main: React.VFC = () => {
  const { data, error } = useSWR<JsonPlaceholderResponse[]>(
    "https://jsonplaceholder.typicode.com/posts"
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
