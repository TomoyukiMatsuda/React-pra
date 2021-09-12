import React, { useCallback } from "react";
import { SearchHistoryWords } from "../SearchHistoryWords";
import { useRecoilState, useResetRecoilState } from "recoil";
import { minLikesCountState } from "../../grobalStates/atoms/minLikesCountAtom";

// LGTM数絞り込みフォームコンポーネント
export const LikesCountFilter: React.VFC = () => {
  const [minLikesCount, setMinLikeCount] = useRecoilState(minLikesCountState);
  const resetMinLikesCount = useResetRecoilState(minLikesCountState);
  const buttonColor =
    minLikesCount !== 0
      ? "bg-red-400 hover:bg-red-300" // フォーム入力有：ブルー
      : "bg-gray-300"; // フォーム入力無：グレー

  const onClickReset = useCallback((e) => {
    e.preventDefault(); // リロードを防ぐ
    resetMinLikesCount();
  }, []);

  return (
    <form className="mt-12 mb-2">
      <label className="block text-gray-700 text-lg font-bold mb-2">
        LGTM👍 数で絞り込み（下限を指定）
      </label>
      <input
        className="shadow appearance-none border rounded py-2 px-3 mr-2 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="number"
        min="0"
        value={minLikesCount}
        onChange={(e) => setMinLikeCount(parseInt(e.target.value) || 0)}
      />
      <button
        className={`${buttonColor} text-white font-bold py-2 px-4 mr-1 rounded focus:outline-none focus:shadow-outline`}
        onClick={onClickReset}
        disabled={minLikesCount === 0}
      >
        リセット
      </button>
      <SearchHistoryWords />
    </form>
  );
};
