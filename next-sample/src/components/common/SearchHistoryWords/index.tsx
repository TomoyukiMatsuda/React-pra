import React from "react";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { searchWordsSelector } from "../../../grobalStates/selectors/searchWordsSelector";

// 検索履歴リンクコンポーネント
export const SearchHistoryWords: React.VFC = () => {
  const searchWords = useRecoilValue(searchWordsSelector);

  return (
    <>
      {searchWords.length !== 0 &&
        searchWords?.map((searchHistoryWord, index) => {
          return (
            <Link
              key={`${searchHistoryWord}_${index}`}
              href={`/filter-articles/${searchHistoryWord}`}
            >
              <span className="p-2 mx-1 bg-green-100 text-green-800 rounded-lg shadow cursor-pointer">
                {searchHistoryWord}
              </span>
            </Link>
          );
        })}
    </>
  );
};
