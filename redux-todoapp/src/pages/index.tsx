import type { NextPage } from "next";
import { Counter } from "../components/Counter";
import { AddTodo } from "../components/AddTodo";
import { BackgroundModal } from "../components/BackgroundModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { openModalAction } from "../store/modal/actions";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state: RootState) => state.modal);

  return (
    <>
      {modal.isOpen && <BackgroundModal>{modal.content}</BackgroundModal>}
      {/* todo 異なるコンポーネントからオープン実行したい */}
      <button
        onClick={() =>
          dispatch(
            openModalAction(
              <div
                style={{
                  position: "fixed",
                  top: 250,
                  left: 250,
                  zIndex: 20,
                  backgroundColor: "white",
                }}
              >
                <Counter />
              </div>
            )
          )
        }
      >
        モーダルオープン
      </button>
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
