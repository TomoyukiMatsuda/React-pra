import React, {useEffect, useState} from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import CleanUp from "./CleanUp";

function App() {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("");
  const [isDisplay, setIsDisplay] = useState(true);

  useEffect(() => {
    console.log("useEffect実行");
    document.title = `Current Value ${counter}`;
  }, [counter]);
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);

  return (
    <div className="App">
      <header className="App-header">
        <h3>{counter}</h3>
        <button onClick={() => setCounter((preCounter) => preCounter + 1)}>
          インクリメント
        </button>
        <h3>{input}</h3>
        <input type="text" value={input} onChange={onChangeHandler} />
        {isDisplay && <CleanUp />}
        <button onClick={() => setIsDisplay(!isDisplay)}>
          表示・非表示
        </button>

        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
