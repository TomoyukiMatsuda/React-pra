import type { NextPage } from "next";
import styled from "styled-components";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useState,
} from "react";

// コンテキストは state・更新関数 で分けて作る
const CountContext = createContext<number>(0);
const SetCountContext = createContext<Dispatch<SetStateAction<number>>>(
  () => undefined
);

type Props = {
  children: ReactNode;
};

// Provider は props で子コンポーネントをうけるようにする
const CountProvider: React.VFC<Props> = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={count}>
      <SetCountContext.Provider value={setCount}>
        {children}
      </SetCountContext.Provider>
    </CountContext.Provider>
  );
};

// カスタムフック
const useCountValue = () => useContext(CountContext);
const useSetCountValue = () => useContext(SetCountContext);

const AddButton = () => {
  console.log("render ボタン");

  const setCount = useSetCountValue();

  const increment = useCallback(() => {
    setCount((prevState) => prevState + 1);
  }, [setCount]);

  return <button onClick={increment}>カウントアップ</button>;
};

const DisplayCount = () => {
  console.log("render カウント");

  const count = useCountValue();

  return <p>カウント: {count}</p>;
};

const OtherComponent = () => {
  console.log("関係なしコンポーネント");

  return <p>関係なし</p>;
};

const Home: NextPage = () => {
  return (
    <CountProvider>
      <div>
        <DisplayCount />
        <AddButton />
        <OtherComponent />
      </div>
    </CountProvider>
  );
};

const TitleText = styled.div`
  margin-top: 16px;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
`;
export default Home;
