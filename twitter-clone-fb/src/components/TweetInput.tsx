import React from "react";
import styles from "./TweetInput.module.css";
import { auth, db, storage } from "../firebase";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const TweetInput: React.FC = () => {
  const user = useSelector(selectUser);

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
