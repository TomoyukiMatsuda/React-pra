import React, { ChangeEvent, useState } from "react";
import { db } from "../firebase";
import firebase from "firebase/app";
import { Avatar } from "@material-ui/core";
import styles from "./Post.module.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import SendIcon from "@material-ui/icons/Send";

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
  const user = useSelector(selectUser);
  const [comment, setComment] = useState("");
  // ツイートに対するコメント追加
  const newComment = (event: React.FormEvent<HTMLFormElement>) => {
    // フォームのsubmitイベントを無効化させる処理
    event.preventDefault();
    // posts にネストした comments データを作成する
    db.collection("posts").doc(props.postId).collection("comments").add({
      avatar: user.photoUrl,
      text: comment,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      username: user.displayName,
    });
    // コメント（フォーム）を初期化
    setComment("");
  };
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
      <form onSubmit={newComment}>
        <div className={styles.post_form}>
          <input
            className={styles.post_input}
            type="text"
            placeholder="ツイートにコメント"
            value={comment}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setComment(e.target.value)
            }
          />
          <button
            disabled={!comment}
            className={comment ? styles.post_button : styles.post_buttonDisable}
            type="submit"
          >
            <SendIcon />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Post;
