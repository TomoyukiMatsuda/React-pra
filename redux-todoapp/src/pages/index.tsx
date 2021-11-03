import type { NextPage } from "next";
import { Counter } from "../components/Counter";

const Home: NextPage = () => {
  return (
    <div style={{ margin: 20 }}>
      <Counter />
    </div>
  );
};

export default Home;
