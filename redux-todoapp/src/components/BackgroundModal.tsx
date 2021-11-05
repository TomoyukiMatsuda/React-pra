import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const BackgroundModal: React.VFC<Props> = ({ children }) => {
  // todo: リセット関数

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
      >
        <button style={{ backgroundColor: "white" }}>閉じる</button>
      </div>
      {children}
    </>
  );
};
