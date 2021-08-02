import React from "react";
import { db } from "../firebase";
import firebase from "firebase/app";
import { Avatar } from "@material-ui/core";
import styles from "./Post.module.css";

interface Props {
  postId: string;
  avatar: string;
  image: string;
  text: string;
  timestamp: any;
  username: string;
}

// Props で投稿データを受け取って表示
const Post: React.FC<Props> = (props) => {
  return (
    <div>
      <div>
        <Avatar src={props.avatar} />
      </div>
      <div className={styles.post_body}>
        <h3>
          <span className={styles.post_headerUser}>@{props.username}</span>
          <span>{new Date(props.timestamp?.toDate()).toLocaleString()}</span>
        </h3>
      </div>
      <div className={styles.post_tweet}>
        <p>{props.text}</p>
      </div>
      {props.image && (
        <div className={styles.post_tweetImage}>
          <img src={props.image} alt="tweet" />
        </div>
      )}
    </div>
  );
};

export default Post;
