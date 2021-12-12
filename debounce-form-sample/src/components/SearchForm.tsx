import React, { useState } from "react";
import Loader from "react-loader-spinner";
import { useDebounce } from "../hooks/useDebounce";
import { useFetchQiitaItems } from "../hooks/useFetchQiitaItems";
import { SearchResult } from "./SearchResult";

// 検索フォームコンポーネント（ここで debouncedValue を更新する）
export const SearchForm: React.VFC = () => {
  const [formText, setFormText] = useState<string>("");
  const debouncedValue = useDebounce(formText, 1000);
  const { qiitaItems, isLoading } = useFetchQiitaItems(debouncedValue);

  return (
    <>
      <label className="mt-12 mb-2 block text-gray-700 text-lg font-bold">
        Qiita 記事 検索キーワードを入力
      </label>
      <div className="flex w-full py-2 px-3 mb-4 shadow border rounded-full ">
        <input
          className="w-11/12 text-lg appearance-none border-none text-gray-700 focus:outline-none focus:shadow-outline"
          placeholder="例：React"
          value={formText}
          onChange={(e) => setFormText(e.target.value)}
        />
        <div className="h-6 w-6 ml-auto my-auto">
          <Loader
            type="Oval"
            color="#1E40AF"
            height={24}
            width={24}
            visible={isLoading}
          />
        </div>
      </div>
      <SearchResult qiitaItems={qiitaItems} />
    </>
  );
};
