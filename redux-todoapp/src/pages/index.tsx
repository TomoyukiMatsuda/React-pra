import type { NextPage } from "next";
import { Counter } from "../components/Counter";
import { AddTodo } from "../components/AddTodo";
import { BackgroundModal } from "../components/BackgroundModal";

const Home: NextPage = () => {
  return (
    <>
      {/*<BackgroundModal>*/}
      {/*  <div>コンテンツ</div>*/}
      {/*</BackgroundModal>*/}
      <div style={{ margin: 20 }}>
        <Counter />
      </div>
      <div style={{ margin: 20 }}>
        <AddTodo />
      </div>
    </>
  );
};

export default Home;
