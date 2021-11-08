import React from "react";
import styles from "../../../styles/Home.module.css";
import useSWR from "swr";

interface Res {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// fetcher
const fetcher = async (input: RequestInfo, init?: RequestInit) => {
  const res = await fetch(input, init);
  return res.json();
};

export const Main: React.VFC = () => {
  const { data, error } = useSWR<Res[]>(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  if (error) return <div>エラーーーーーー</div>;
  if (!data) return <div>ローディングちゅう</div>;

  return (
    <main className={styles.main}>
      {data.map((d) => (
        <p key={d.id}>{d.title}</p>
      ))}
    </main>
  );
};
