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
    <>
      <div className="mt-12 mb-8">
        <SearchForm
          formText={formText}
          setFormText={setFormText}
          isLoading={isLoading}
        />
      </div>
      <SearchResult fetchQiitaItems={fetchQiitaItems} qiitaItems={qiitaItems} />
    </>
  );
};
