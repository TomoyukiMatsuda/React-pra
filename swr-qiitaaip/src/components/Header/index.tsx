import React from "react";
import styles from "../../../styles/Home.module.css";

export const Header: React.VFC = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <p className={styles.description}>Get started by editing</p>
    </div>
  );
};
