import {FormControl, TextField} from "@material-ui/core";
import React, {MouseEventHandler, useEffect, useState} from 'react';
import './App.css';
import { db } from "./firebase";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";

const App: React.FC = () => {
  // firebaseから取得してくるDBのtasksを初期化、stateとして持っておく
  const [tasks, setTasks] = useState([{ id: "", title: "" }]);
  const [input, setInput] = useState("");

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
    <div className="App">
      <h1>Todo App React/Firebase</h1>
      <FormControl>
        <TextField
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
      <button disabled={!input} onClick={newTask} >
        <AddToPhotosIcon />
      </button>
      {tasks.map((task) => (
        <h3>タイトル：{task.title}</h3>
      ))}
    </div>
  );
}

export default App;
