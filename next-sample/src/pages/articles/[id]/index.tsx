import React from "react";
import { useRouter } from "next/router";

const ArticlesId: React.VFC = () => {
  const router = useRouter();

  return <div>記事詳細ID {router.query.id}</div>;
};

export default ArticlesId;
