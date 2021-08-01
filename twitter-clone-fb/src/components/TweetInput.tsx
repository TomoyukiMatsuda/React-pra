import React, { FormEvent, useState } from "react";
import styles from "./TweetInput.module.css";
import { auth, db, storage } from "../firebase";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import firebase from "firebase/app";
import { Simulate } from "react-dom/test-utils";
import error = Simulate.error;

const TweetInput: React.FC = () => {
  const user = useSelector(selectUser);
  const [tweetImage, setTweetImage] = useState<File | null>(null);
  const [tweetMessage, setTweetMessage] = useState("");

  // ツイート投稿関数を定義
  const sendTweet = (e: FormEvent<HTMLFormElement>) => {
    // イベントの検知による再レンダリングを防止する？
    e.preventDefault();

    // ツイート画像があるかないかで処理を変える
    if (tweetImage) {
      const S =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      const N = 16;
      const randomChar = Array.from(crypto.getRandomValues(new Uint32Array(N)))
        .map((n) => S[n % S.length])
        .join("");
      const fileName = randomChar + "_" + tweetImage.name;

      const uploadTweetImage = storage
        .ref(`images/${fileName}`)
        .put(tweetImage);
      // 画像をuploadしたときの挙動を検知できる。ObservableのonNext, onError, onCompleteのイメージ？
      uploadTweetImage.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        () => {},
        (error) => alert(error.message),
        async () => {
          await storage
            .ref("images")
            .child(fileName)
            .getDownloadURL()
            .then(async (url) => {
              await db.collection("posts").add({
                avatar: user.photoUrl,
                image: url,
                text: tweetMessage,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                username: user.displayName,
              });
            });
        }
      );
    } else {
      // ツイートデータをfirestoreに保存
      db.collection("posts").add({
        avatar: user.photoUrl,
        image: "",
        text: tweetMessage,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        username: user.displayName,
      });
    }
  };

  return (
    <div>
      <Avatar
        className={styles.tweet_avatar}
        src={user.photoUrl}
        onClick={async () => await auth.signOut()}
      />
    </div>
  );
};

export default TweetInput;
