import React, { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useFetchQiitaItems } from "../hooks/useFetchQiitaItems";
import { SearchResult } from "./SearchResult";

// 検索フォームコンポーネント（ここで debouncedValue を更新する）
export const SearchForm: React.VFC = () => {
  const [formText, setFormText] = useState<string>("");
  const debouncedValue = useDebounce(formText, 1000);
  const qiitaItems = useFetchQiitaItems(debouncedValue);

  return (
    <>
      <label className="mt-12 mb-2 block text-gray-700 text-lg font-bold">
        Qiita 記事 検索キーワードを入力
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="例：React"
        value={formText}
        onChange={(e) => setFormText(e.target.value)}
      />
      <SearchResult qiitaItems={qiitaItems} />
    </>
  );
};
