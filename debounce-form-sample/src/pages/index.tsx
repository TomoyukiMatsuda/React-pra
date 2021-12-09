import type { NextPage } from "next";
import { SearchForm } from "../components/SearchForm";

const Home: NextPage = () => {
  return (
    <div className="my-0 mx-auto w-3/5">
      <SearchForm />
    </div>
  );
};

export default Home;
