import React from "react";
import { db } from "../firebase";
import firebase from "firebase/app";

interface Props {
  postId: string;
  avatar: string;
  image: string;
  text: string;
  timestamp: any;
  username: string;
}

const Post: React.FC<Props> = (props) => {
  return <div></div>;
};

export default Post;
