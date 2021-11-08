import React from "react";
import styles from "../../../styles/Home.module.css";

// fetcher
const fetcher = async (input: RequestInfo, init?: RequestInit)=> {
  const res = await fetch(input, init)
  return res.json()
}

export const Main: React.VFC= () => {
  return (
    <main className={styles.main}>

    </main>
  )
}