import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [count, setCount] = useState(0);
  console.log('レンダリング');

  const onClickCountUp = () => {
    setCount(count + 1)
  }
  return (
    <div className="App">
      <h1>再レンダリングを学ぶ</h1>

      <p>{count}</p>
      <button onClick={onClickCountUp}>カウントアップ</button>
    </div>
  );
}

export default App;
