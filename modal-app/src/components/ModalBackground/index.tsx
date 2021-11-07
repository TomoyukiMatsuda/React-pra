import React from "react";
import Image from "next/image";

export const ModalBackground: React.VFC = () => {
  // div className="flex justify-end fixed z-10 inset-0 bg-gray-300 bg-opacity-75"
  // <button className="mt-2 mr-2 z-20 h-12 w-12 hover:bg-white hover:bg-opacity-30 rounded-full">
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
    </>
  );
};
