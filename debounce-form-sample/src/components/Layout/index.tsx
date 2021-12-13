import React, { useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { useFetchQiitaItems } from "../../hooks/useFetchQiitaItems";
import { SearchResult } from "./SearchResult";
import { SearchForm } from "./SearchForm";

export const Layout: React.VFC = () => {
  const [formText, setFormText] = useState<string>("");
  const debouncedValue = useDebounce(formText, 1000);
  const { fetchQiitaItems, qiitaItems, isLoading } =
    useFetchQiitaItems(debouncedValue);

  return (
    <div className="flex flex-col w-3/5 h-screen my-0 mx-auto">
      <div className="pt-12 mb-2">
        <SearchForm
          formText={formText}
          setFormText={setFormText}
          isLoading={isLoading}
        />
      </div>
      <div className="flex-grow pt-4 overflow-y-scroll">
        <SearchResult
          fetchQiitaItems={fetchQiitaItems}
          qiitaItems={qiitaItems}
        />
      </div>
    </div>
  );
};
