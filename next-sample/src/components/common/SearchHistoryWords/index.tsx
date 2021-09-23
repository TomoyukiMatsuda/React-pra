import React from "react";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { searchWordsSelector } from "../../../grobalStates/selectors/searchWordsSelector";

// 検索履歴リンクコンポーネント
export const SearchHistoryWords: React.VFC = () => {
  // グローバルステートから検索履歴を取得
  const searchWords = useRecoilValue(searchWordsSelector);

  return (
    <>
      {searchWords.length !== 0 &&
        searchWords?.map((searchWord, index) => {
          return (
            <Link
              key={`${searchWord}_${index}`}
              href={`/filter-articles/${searchWord}`}
            >
              <span className="p-2 mx-1 bg-green-100 text-green-800 rounded-lg shadow cursor-pointer">
                {searchWord}
              </span>
            </Link>
          );
        })}
    </>
  );
};
