import React, { useMemo } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const FilterArticlesByWord: React.VFC = () => {
  const router = useRouter();
  const articleState = useSelector((state: RootState) => state.articleList);
  const searchArticles = useMemo(
    () => articleState.find((state) => state.searchWord === router.query.word),
    [articleState, router.query.word]
  );

  return (
    <div>
      {/*検索ワードに紐づくリストをレンダリング*/}
      {searchArticles?.qiitaItems.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};

export default FilterArticlesByWord;
