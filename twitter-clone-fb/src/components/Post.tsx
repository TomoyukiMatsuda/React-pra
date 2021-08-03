import React, { ChangeEvent, useEffect, useState } from "react";
import { db } from "../firebase";
import firebase from "firebase/app";
import { Avatar, makeStyles } from "@material-ui/core";
import styles from "./Post.module.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import SendIcon from "@material-ui/icons/Send";
import { MessageOutlined } from "@material-ui/icons";

interface Props {
  postId: string;
  avatar: string;
  image: string;
  text: string;
  timestamp: any;
  username: string;
}

interface Comment {
  id: string;
  avatar: string;
  text: string;
  timestamp: any;
  username: string;
}

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginRight: theme.spacing(1),
  },
}));

// Props で投稿データを受け取って表示
const Post: React.FC<Props> = (props) => {
  const classes = useStyles();
  const user = useSelector(selectUser);
  const [comment, setComment] = useState("");
  const [isShowComments, setIsShowComments] = useState(false);
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "",
      avatar: "",
      text: "",
      timestamp: null,
      username: "",
    },
  ]);

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

  // post（ツイート）に紐づくコメントの取得処理
  useEffect(() => {
    const unSubscription = db
      .collection("posts")
      .doc(props.postId)
      .collection("comments")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setComments(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            avatar: doc.data().avatar,
            text: doc.data().text,
            timestamp: doc.data().timestamp,
            username: doc.data().username,
          }))
        );
      });
    return () => unSubscription();
  }, [props.postId]);

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
      {comments.length > 0 && (
        <>
          <MessageOutlined
            className={styles.post_commentIcon}
            onClick={() => setIsShowComments(!isShowComments)}
          />
          {isShowComments && (
            <>
              {comments.map((comment) => (
                <div key={comment.id} className={styles.post_comment}>
                  <Avatar src={comment.avatar} className={classes.small} />

                  <span className={styles.post_commentUser}>
                    @{comment.username}
                  </span>
                  <span className={styles.post_commentText}>
                    {comment.text}
                  </span>
                  <span className={styles.post_headerTime}>
                    {new Date(comment.timestamp?.toDate()).toLocaleString()}
                  </span>
                </div>
              ))}
            </>
          )}
        </>
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
