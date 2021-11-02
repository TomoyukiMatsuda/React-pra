import type { NextPage } from "next";
import { AddTodo } from "../components/AddTodo";
import { TodoList } from "../components/TodoList";
import { Footer } from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div style={{ margin: 20 }}>
      <AddTodo />
      <TodoList
        onClickTodo={() => console.log("onClickTodo")}
        todos={[
          { text: "みかん", isCompleted: false },
          { text: "かん", isCompleted: true },
        ]}
      />
      <Footer
        onFilterChange={(filter) => console.log("filterchange", filter)}
        filter={"SHOW_ALL"}
      />
    </div>
  );
};

export default Home;
