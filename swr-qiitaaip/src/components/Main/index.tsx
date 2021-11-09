import React from "react";
import styles from "../../../styles/Home.module.css";
import useSWR, { useSWRConfig } from "swr";
import { JsonPlaceholderResponse } from "../../types/JsonPlaceholder";

export const Main: React.VFC = () => {
  const { data: jsonPosts, error } = useSWR<JsonPlaceholderResponse[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  // キャッシュの中身を確認してみた
  // const { cache } = useSWRConfig();
  // console.log("キャッシュ", cache);

  if (error) return <div>エラーーーーーー</div>;
  if (!jsonPosts) return <div>ローディングちゅう</div>;

  return (
    <main className={styles.main}>
      <ol>
        {jsonPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </main>
  );
};
