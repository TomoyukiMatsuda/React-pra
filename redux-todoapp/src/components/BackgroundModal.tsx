import React, { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { closeModalAction } from "../store/modal/actions";

interface Props {
  children: ReactNode;
}

export const BackgroundModal: React.VFC<Props> = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          position: "fixed",
          zIndex: 10,
          inset: 0,
          backgroundColor: "lightgray",
          opacity: 75,
        }}
        onClick={() => dispatch(closeModalAction())}
      >
        <button style={{ backgroundColor: "white" }}>閉じる</button>
      </div>
      {children}
    </>
  );
};
