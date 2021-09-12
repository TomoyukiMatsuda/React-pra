import React, { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { searchHistoryArticleListSelector } from "../../../selectors/searchHistoryArticleListSelector";
import { ArticleItem } from "../../../components/ArticleList/ArticleItem";
import { minLikesCountState } from "../../../atoms/minLikesCountAtom";
import { SearchHistoryWords } from "../../../components/SearchHistoryWords";

// todo 命名難しい、絞り込みページ的な、ワードとリストの件数０だったら検索ページに戻るみたいなことしたい
const ArticlesBySearchHistoryWord: React.VFC = () => {
  const router = useRouter();
  const searchWord = (router.query.word as string) || "";
  const articleList = useRecoilValue(
    searchHistoryArticleListSelector(searchWord)
  );
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

  useEffect(() => {
    // アンマウント時にLGTM数リセット
    return () => resetMinLikesCount();
  }, []);

  // todo: コンポーネントの細分化
  return (
    <div className="max-w-5xl mx-auto px-12">
      <form className="mt-12">
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
      {searchWord && (
        <p className="mb-4 text-xl">
          検索キーワード と 記事数：
          <span className="ml-2 mr-3 font-bold text-blue-700 border-b-2 border-blue-700">
            {searchWord}
          </span>
          <span className="font-bold text-blue-700 border-b-2 border-blue-700">
            {articleList.length} 件
          </span>
        </p>
      )}
      {articleList?.map((article) => {
        return <ArticleItem key={article.id} article={article} />;
      })}
    </div>
  );
};

export default ArticlesBySearchHistoryWord;
