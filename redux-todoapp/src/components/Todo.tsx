import React from "react";

interface Props {
  text: string;
}

export const Todo: React.VFC<Props> = (props) => {
  return <li>{props.text}</li>;
};
