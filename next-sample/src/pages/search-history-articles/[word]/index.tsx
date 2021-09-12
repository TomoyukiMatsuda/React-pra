import React from "react";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { searchHistoryArticleListSelector } from "../../../selectors/searchHistoryArticleListSelector";
import { ArticleItem } from "../../../components/ArticleList/ArticleItem";

// todo 命名難しい、絞り込みページ的な
const ArticlesBySearchHistoryWord: React.VFC = () => {
  const router = useRouter();
  const searchWord = (router.query.word as string) || "";
  // pathから取得した検索ワードに紐づくステートを取得
  const articleList = useRecoilValue(
    searchHistoryArticleListSelector(searchWord)
  );

  return (
    <div className="max-w-5xl mx-auto px-12">
      <form
        className="mt-12 mb-4"
        // onSubmit={(e) => fetchArticles(e)}
      >
        <label className="block text-gray-700 text-lg font-bold mb-2">
          LGTM 数で絞り込み
        </label>
        <input
          className="shadow appearance-none border rounded py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          min="0"
          // value={formText}
          // onChange={(e) => setFormText(e.target.value)}
        />
      </form>
      {searchWord && (
        <p className="mb-4 text-xl">
          検索キーワード
          <span className="ml-2 font-bold text-blue-700 border-b-2 border-blue-700">
            {searchWord}
          </span>
        </p>
      )}
      {/*todo: lgtm数の下限で絞り込む*/}
      {articleList?.map((article) => {
        return <ArticleItem key={article.id} article={article} />;
      })}
    </div>
  );
};

export default ArticlesBySearchHistoryWord;
