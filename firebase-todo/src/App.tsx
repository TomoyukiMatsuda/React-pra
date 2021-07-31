import { FormControl, List, TextField } from "@material-ui/core";
import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import { db, auth } from "./firebase";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import TaskItem from "./TaskItem";
import { makeStyles } from "@material-ui/styles";
import {ExitToApp} from "@material-ui/icons";

const useStyles = makeStyles({
  field: {
    marginTop: 30,
    marginBottom: 20,
  },
  list: {
    margin: "auto",
    width: "40%",
  },
});

const App: React.FC = (props: any) => {
  // firebaseから取得してくるDBのtasksを初期化、stateとして持っておく
  const [tasks, setTasks] = useState([{ id: "", title: "" }]);
  const [input, setInput] = useState("");
  const classes = useStyles();

  // ユーザー認証を確認する
  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((user) => {
      // ユーザがいなければログインに遷移
      !user && props.history.push("/login");
    });
    return () => unSubscribe();
  }, [props.history])

  // 最初にレンダリングするタイミングでデータを取得してきてtasksにセットする
  useEffect(() => {
    const unSubscribe =
      db
      .collection("tasks")
      .onSnapshot((snapshot) => {
        setTasks(
          snapshot.docs.map((doc) => ({ id: doc.id, title: doc.data().title }))
        );
    });
    // アンマウントするときにリスナー的な機能を解除する
    return () => unSubscribe();
  }, []);
  // todo 引数eはなんのため？
  const newTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    db.collection("tasks").add({ title: input })
    setInput("");
  };

  return (
    <div className={styles.app__root}>
      <h1>Todo App React/Firebase</h1>
      <button
        className={styles.app__logout}
        onClick={
          async () => {
            try {
              await auth.signOut();
              props.history.push("/login");
            } catch (e) {
              alert(e.message);
            }
          }
        }>
        <ExitToApp />
      </button>
      <br />
      <FormControl>
        <TextField
          className={classes.field}
          InputLabelProps={{
            shrink: true,
          }}
          label="新しいタスクを作成"
          value={input}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
        />
      </FormControl>
      <button className={styles.app__icon} disabled={!input} onClick={newTask} >
        <AddToPhotosIcon />
      </button>
      <List className={classes.list}>
        {tasks.map((task) => (
          <TaskItem key={task.id} id={task.id} title={task.title} />
        ))}
      </List>
    </div>
  );
}

export default App;
