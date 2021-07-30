import React, {useEffect, useState} from "react";
import styles from "./Login.module.css";
import {Button, FormControl, TextField, Typography} from "@material-ui/core";
import { auth } from "./firebase";

const Login: React.FC = (props: any) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // auth では userオブジェクト というものを受け取ることができる
      // user が 空であればログイン失敗、値があればログイン成功
      user && props.history.push("/"); // user に値があれば、ルートに遷移させる
    })
  }, [props.history]);

  return (
    <div className={styles.login__root}>
      <h1>{isLogin ? "ログイン" : "新規登録"}</h1>
      <br />
      <FormControl>
        <TextField
          InputLabelProps={{
            shrink: true,
          }}
          name="email"
          label="メールアドレス"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
          }}
        />
      </FormControl>
      <br />
      <FormControl>
        <TextField
          InputLabelProps={{
            shrink: true,
          }}
          name="password"
          label="パスワード"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
          }}
        />
      </FormControl>
      <br />
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={
          isLogin
            ? async () => {
                try {
                  await auth.signInWithEmailAndPassword(email, password);
                  props.history.push("/");
                } catch (e) {
                  alert(e.message);
                }
              }
            : async () => {
                try {
                  await auth.createUserWithEmailAndPassword(email, password);
                  props.history.push("/");
                } catch (e) {
                  alert(e.message);
                }
            }
        }
      >
        {isLogin ? "ログイン" : "新規登録"}
      </Button>
      <br />
      <Typography align="center">
        <span onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "新規アカウントを作成" : "ログインに戻る"}
        </span>
      </Typography>
    </div>
  );
}

export default Login;