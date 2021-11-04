import type { NextPage } from "next";
import { Counter } from "../components/Counter";
import { AddTodo } from "../components/AddTodo";

const Home: NextPage = () => {
  return (
    <>
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
