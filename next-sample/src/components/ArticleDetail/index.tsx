import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { apiClient } from "../../lib/apiClient";
import { QiitaItemResponse } from "../../types/QiitaItem";
import { QiitaArticleDetail } from "../../types/QiitaArticleDetail";

export const ArticleDetail: React.VFC = () => {
  // todo 型定義せずにそのままのレスポンスの型で利用すれば良いかも
  const [articleDetail, setArticleDetail] = useState<QiitaArticleDetail | null>(
    null
  );
  const router = useRouter();

  useEffect(() => {
    // id が取得されないタイミングでは api を叩かない
    router.query.id &&
      apiClient
        .get<QiitaItemResponse>(`/api/v2/items/${router.query.id}`)
        .then((response) => {
          setArticleDetail({
            title: response.data.title,
            rendered_body: response.data.rendered_body,
            likes_count: response.data.likes_count,
            tags: response.data.tags,
            url: response.data.url,
            user: response.data.user,
            created_at: response.data.created_at,
          });
        })
        .catch((error) => {
          console.log(error);
        });
  }, [router.query.id]);

  if (!articleDetail) return <div>データ取得できてない</div>;

  return (
    <div>
      <p>タイトル：{articleDetail.title}</p>
      <p>LGTM👍：{articleDetail.likes_count}</p>
      <p>タグ最初の１：{articleDetail.tags[0].name}</p>
      <p>投稿日：{articleDetail.created_at}</p>
      <p>ユーザー名：{articleDetail.user.name}</p>
    </div>
  );
};
