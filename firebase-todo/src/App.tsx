import React, {useEffect, useState} from 'react';
import './App.css';
import { db } from "./firebase";

const App: React.FC = () => {
  // firebaseから取得してくるDBのtasksを初期化、stateとして持っておく
  const [tasks, setTasks] = useState([{ id: "", title: "" }]);
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

  return (
    <div className="App">
      {tasks.map((task) => (
        <h3>タイトル：{task.title}</h3>
      ))}
    </div>
  );
}

export default App;
