import React, { useCallback, useState } from "react";

interface Props {
  onAddClick?: () => void;
}

export const AddTodo: React.VFC<Props> = (props) => {
  const [inputText, setInputText] = useState("");

  const onAddClick = useCallback(() => {}, [inputText]);

  return (
    <div>
      <input type="text" onChange={(e) => setInputText(e.target.value)} />
      <button onClick={() => onAddClick()}>追加</button>
    </div>
  );
};
