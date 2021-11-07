import React from "react";

interface Props {
  text: string;
}

export const FooModal: React.VFC<Props> = ({ text }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: "25%",
        left: "25%",
        zIndex: 20,
        height: "50%",
        width: "50%",
        boxShadow: "20px",
        background: "white",
        borderRadius: 30,
      }}
    >
      <p style={{ fontSize: 50 }}>{text}</p>
    </div>
  );
};
