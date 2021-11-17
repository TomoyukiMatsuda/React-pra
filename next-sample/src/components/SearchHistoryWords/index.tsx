import React, { memo, useMemo } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

// TODO: memo化に対するlint
// eslint-disable-next-line react/display-name
export const SearchHistoryWords: React.VFC = memo(() => {
  const articleState = useSelector((state: RootState) => state.articleList);
  // 検索ワードリストを取得する
  const searchWordList = useMemo(
    () => articleState.map<string>((state) => state.searchWord),
    [articleState]
  );

  return (
    <>
      {searchWordList.length !== 0 &&
        searchWordList?.map((word, index) => {
          return (
            <Link key={`${word}_${index}`} href={`/filter-articles/${word}`}>
              <span className="p-2 mx-1 bg-green-100 text-green-800 rounded-lg shadow cursor-pointer hover:opacity-60">
                {word}
              </span>
            </Link>
          );
        })}
    </>
  );
});
