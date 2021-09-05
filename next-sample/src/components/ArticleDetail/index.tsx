import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { apiClient } from "../../lib/apiClient";

export const ArticleDetail: React.VFC = () => {
  const router = useRouter();

  useEffect(() => {
    // id が取得されないタイミングでは api を叩かない
    router.query.id &&
      apiClient
        .get(`/api/v2/items/${router.query.id}`)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
  }, [router.query.id]);

  return <div>記事ID{router.query.id}</div>;
};
