import React, { useCallback, useState } from "react";

export const AddTodo: React.VFC = () => {
  const [inputText, setInputText] = useState("");
  const onAddClick = useCallback(() => {
    console.log("inputtext", inputText);
  }, [inputText]);

  return (
    <div>
      <input type="text" onChange={(e) => setInputText(e.target.value)} />
      <button onClick={() => onAddClick()}>追加</button>
    </div>
  );
};
