import type { NextPage } from "next";
import { AddTodo } from "../AddTodo";

const Home: NextPage = () => {
  return (
    <div style={{ margin: 20 }}>
      <AddTodo />
    </div>
  );
};

export default Home;
