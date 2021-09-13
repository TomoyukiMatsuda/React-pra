import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

// ベースとなるレイアウトコンテナー
export const BaseContainer: React.VFC<Props> = (props) => {
  return <div className="max-w-5xl mx-auto px-12">{props.children}</div>;
};
