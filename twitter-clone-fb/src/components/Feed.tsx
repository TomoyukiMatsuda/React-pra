import React from "react";
import { auth } from "../firebase";
import TweetInput from "./TweetInput";
import styles from "./Feed.module.css";

const Feed: React.FC = () => {
  return (
    <div className={styles.feed}>
      Feed
      <TweetInput />
      <button onClick={() => auth.signOut()}>Logout</button>
    </div>
  );
};

export default Feed;
