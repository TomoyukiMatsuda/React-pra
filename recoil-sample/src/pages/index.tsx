import type { NextPage } from "next";
import { TodoList } from "../components/TodoList";
import { TitleForm } from "../components/TitleForm";
import { SearchForm } from "../components/SearchForm";
import { AddButton } from "../components/AddButton";

const Home: NextPage = () => {
  return (
    <div style={{ margin: 12 }}>
      <div>
        <TitleForm />
        <AddButton />
      </div>
      <SearchForm />
      <TodoList />
    </div>
  );
};

export default Home;
