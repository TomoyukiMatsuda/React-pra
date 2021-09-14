import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { useListQiitaArticles } from "../../hooks/useListQiitaArticles";

// interface Props {
//   fetchArticles: (
//     e: FormEvent<HTMLFormElement>,
//     formText: string,
//     setFormText: Dispatch<SetStateAction<string>>
//   ) => void;
// }

// export const SearchForm: React.VFC<Props> = (props) => {
export const SearchForm: React.VFC = () => {
  const [formText, setFormText] = useState<string>("");
  const buttonColor = formText
    ? "bg-blue-700 hover:bg-blue-500"
    : "bg-gray-300";

  const { fetchArticles } = useListQiitaArticles();

  return (
    <form
      className="mt-12 mb-6"
      // onSubmit={(e) => props.fetchArticles(e, formText, setFormText)}
      onSubmit={(e) => fetchArticles(e, formText, setFormText)}
    >
      <label className="block text-gray-700 text-lg font-bold mb-2">
        Qiita 記事 検索キーワードを入力
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="例：React"
        value={formText}
        onChange={(e) => setFormText(e.target.value)}
      />
      <button
        className={`${buttonColor} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
        type="submit"
        disabled={!formText}
      >
        検索
      </button>
    </form>
  );
};
