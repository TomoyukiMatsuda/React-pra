import React from "react";
import styles from "../../../styles/Home.module.css";
import useSWR, { useSWRConfig } from "swr";
import { JsonPlaceholderResponse } from "../../types/JsonPlaceholder";
import { QiitaItemResponse } from "../../types/Qiita";

export const Main: React.VFC = () => {
  // jsonDataとqiita どちらを表示させるべきかどうかをハンドリング
  const { data: jsonPosts, error } = useSWR<JsonPlaceholderResponse[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const { data: qiitaItems } = useSWR<QiitaItemResponse[]>(
    "https://qiita.com/api/v2/items?per_page=25&query=react"
  );

  // キャッシュの中身を確認してみた
  // const { cache } = useSWRConfig();
  // console.log("キャッシュ", cache);

  console.log("qiitaitems", qiitaItems);

  if (error) return <div>エラーーーーーー</div>;
  if (!jsonPosts) return <div>ローディングちゅう</div>;

  return (
    <main className={styles.main}>
      <ol>
        {/*{jsonPosts.map((post) => (*/}
        {/*  <li key={post.id}>{post.title}</li>*/}
        {/*))}*/}
        {qiitaItems?.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ol>
    </main>
  );
};
