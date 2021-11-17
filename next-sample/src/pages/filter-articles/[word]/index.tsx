import React from "react";
import { useRouter } from "next/router";

const FilterArticlesByWord: React.VFC = () => {
  const router = useRouter();

  return <div>{router.query.word}</div>;
};

export default FilterArticlesByWord;
