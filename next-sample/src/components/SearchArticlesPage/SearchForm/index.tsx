import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { SearchHistoryWords } from "../../common/SearchHistoryWords";

interface Props {
  fetchArticles: (
    e: FormEvent<HTMLFormElement>,
    formText: string,
    setFormText: Dispatch<SetStateAction<string>>
  ) => void;
  isLoading: boolean;
}

// Qiita記事検索フォームコンポーネント
export const SearchForm: React.VFC<Props> = (props) => {
  const [formText, setFormText] = useState<string>("");
  const buttonColor =
    formText && !props.isLoading
      ? "bg-blue-500 hover:bg-blue-400"
      : "bg-gray-300";

  return (
    <form
      className="mt-12 mb-6"
      onSubmit={(e) => props.fetchArticles(e, formText, setFormText)}
    >
      <label className="block text-gray-700 text-lg font-bold mb-2">
        Qiita 記事 検索キーワードを入力
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="例：React"
        value={formText}
        disabled={props.isLoading}
        onChange={(e) => setFormText(e.target.value)}
      />
      <button
        className={`${buttonColor} text-white font-bold mr-3 py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
        type="submit"
        disabled={!formText || props.isLoading}
      >
        検索
      </button>
      <SearchHistoryWords />
    </form>
  );
};
