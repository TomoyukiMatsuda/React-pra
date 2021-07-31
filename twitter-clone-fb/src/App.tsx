import React, { useEffect } from "react";
import styles from "./App.module.css";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Feed from "./components/Feed";
import Auth from "./components/Auth";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    // onAuthStateChanged: firebaseのユーザーの状態が切り替わった時などに実行される、実行すると
    // subscribeが実行されて ユーザーの状態監視が開始される
    const unSubscribe = auth.onAuthStateChanged((authUser) => {
      // authUserに認証情報が格納されていればユーザーがログイン状態、ログインユーザーの情報をReduxにセット？
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photoUrl: authUser.photoURL,
            displayName: authUser.displayName,
          })
        );
      } else {
        // ユーザーが存在しなければ、ログアウト状態、logout() を実行してユーザーを初期化
        dispatch(logout());
      }
    });
    // ユーザーの状態監視を解除（unSubscribe する）cleanUp関数
    return () => unSubscribe();
  }, [dispatch]);

  return (
    <>
      {user.uid ? (
        <div className={styles.app}>
          <Feed />
        </div>
      ) : (
        <Auth />
      )}
    </>
  );
}

export default App;
