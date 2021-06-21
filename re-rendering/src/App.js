import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {ChildArea} from "./ChildArea";

function App() {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);
  console.log('レンダリング');
  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open);

  return (
    <div className="App">
      <h1>再レンダリングを学ぶ</h1>
      <input value={text} onChange={onChangeText} />
      <br/>
      <br/>
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} />
    </div>
  );
}

export default App;
