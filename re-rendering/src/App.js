import './App.css';
import {useCallback, useMemo, useState, useEffect} from "react";
import {ChildArea} from "./ChildArea";

function App() {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);
  console.log('App親コンポーネントがレンダリング');
  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open);
  // useCallbackを利用しないと、このコンポーネントがレンダリング
  // されるたびにonClickClose は再生成される。この関数をpropsとして渡しているため、再生成のタイミングでpropsが
  // 変更されたことを子コンポーネントが検知して子コンポーネントも再レンダリングされる。
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  // useMemo: 変数に対してメモ化する
  const temp = useMemo(() => 1 + 3, []);

  // useEffect: 第２引数の値に変更があったときだけ、第１引数の処理が実行される
  // 第２引数が[]のように空配列であれば最初だけ実行される。
  useEffect(() => {
      console.log("useEffect！！！！")
  },[]);

  // TODO: 松田的勝手な解釈
  // useEffect：処理の実行に対する関心
  // useCallback：関数生成に対する関心
  // useMemo：変数生成のための処理に対する関心

  return (
    <div className="App">
      <h1>再レンダリングを学ぶ</h1>
      <input value={text} onChange={onChangeText} />
      <br/>
      <br/>
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}

export default App;
