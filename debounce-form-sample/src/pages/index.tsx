import type { NextPage } from "next";
import { SearchForm } from "../components/SearchForm";
import { useState } from "react";
import { useFetchQiitaItems } from "../useFetchQiitaItems";
import { SearchResult } from "../components/SearchResult";

const Home: NextPage = () => {
  const [debouncedValue, setDebouncedValue] = useState("");
  const qiitaItems = useFetchQiitaItems(debouncedValue);

  return (
    <div className="my-0 mx-auto w-3/5">
      <SearchForm setDebouncedValue={setDebouncedValue} />
      <p className="mb-5 text-gray-700 font-bold">
        検索ワード：{debouncedValue}
      </p>
      <SearchResult qiitaItems={qiitaItems} />
    </div>
  );
};

export default Home;
