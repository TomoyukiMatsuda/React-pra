import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import { SearchForm } from "../components/SearchForm";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {}, []);

  return (
    <div className={styles.container}>
      <SearchForm
        // fetchArticles={}
        isLoading={false}
      />
    </div>
  );
};

export default Home;
