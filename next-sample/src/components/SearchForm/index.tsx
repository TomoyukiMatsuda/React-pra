import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";

interface Props {
  fetchArticles: (
    e: FormEvent<HTMLFormElement>,
    searchText: string,
    setSearchText: Dispatch<SetStateAction<string>>
  ) => void;
}

export const SearchForm: React.VFC<Props> = (props) => {
  const [searchText, setSearchText] = useState<string>("");
  const buttonColor = searchText
    ? "bg-blue-700 hover:bg-blue-500"
    : "bg-gray-300";

  return (
    <div>
      <form
        className="p-12"
        onSubmit={(e) => props.fetchArticles(e, searchText, setSearchText)}
      >
        <label className="block text-gray-700 text-lg font-bold mb-2">
          Qiita 記事 検索キーワードを入力
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="例：React"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className={`${buttonColor} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
          type="submit"
          disabled={!searchText}
        >
          検索
        </button>
      </form>
    </div>
  );
};
