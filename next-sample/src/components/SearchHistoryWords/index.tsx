import React from "react";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { searchWordsState } from "../../atoms/searchWordsAtom";

export const SearchHistoryWords: React.VFC = () => {
  const searchHistoryWords = useRecoilValue(searchWordsState);

  return (
    <>
      {searchHistoryWords.length !== 0 &&
        searchHistoryWords?.map((searchHistoryWord, index) => {
          return (
            <Link
              key={`${searchHistoryWord}_${index}`}
              href={`/search-history-articles/${searchHistoryWord}`}
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
