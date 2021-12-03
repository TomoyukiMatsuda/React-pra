import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import { SearchForm } from "../components/SearchForm";
import { useState } from "react";

const Home: NextPage = () => {
  const [debouncedValue, setDebouncedValue] = useState("");

  return (
    <div className={styles.container}>
      <SearchForm
        // fetchArticles={}
        setDebouncedValue={setDebouncedValue}
        isLoading={false}
      />
      <p>{debouncedValue}</p>
    </div>
  );
};

export default Home;
