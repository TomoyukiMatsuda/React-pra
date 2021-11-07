import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { closeModalAction } from "../../store/modal/actions";

export const ModalBackground: React.VFC = () => {
  const modal = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          position: "fixed",
          zIndex: 10,
          inset: 0,
          backgroundColor: "lightgray",
          opacity: 0.7,
        }}
        onClick={() => dispatch(closeModalAction())}
      >
        <button
          style={{
            marginTop: 2,
            marginRight: 2,
            height: "3rem",
            width: "3rem",
            zIndex: 20,
            backgroundColor: "gray",
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
          }}
        >
          <Image
            src="/close_icon.svg"
            alt="close icon"
            width={30}
            height={30}
          />
        </button>
      </div>
      {modal.content}
    </>
  );
};
