import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";
import { Header } from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
