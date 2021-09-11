import React from "react";
import { useRouter } from "next/router";

// todo 命名難しい
const ArticlesBySearchHistoryWord: React.VFC = () => {
  const router = useRouter();

  return <div>{router.query.word}</div>;
};

export default ArticlesBySearchHistoryWord;
