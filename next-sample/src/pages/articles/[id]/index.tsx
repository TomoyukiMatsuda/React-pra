import React from "react";
import { useRouter } from "next/router";
import { ArticleDetail } from "../../../components/ArticleDetail";

const ArticlesId: React.VFC = () => {
  const router = useRouter();

  return (
    <>
      <ArticleDetail />
    </>
  );
};

export default ArticlesId;
