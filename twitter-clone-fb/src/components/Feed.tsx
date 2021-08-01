import React from "react";
import { auth } from "../firebase";
import TweetInput from "./TweetInput";

const Feed: React.FC = () => {
  return (
    <div>
      <h1>Feed</h1>
      <TweetInput />
      <button onClick={() => auth.signOut()}>Logout</button>
    </div>
  );
};

export default Feed;
