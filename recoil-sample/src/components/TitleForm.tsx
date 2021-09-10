// 追加タスク名を入力するフォームのコンポーネント
import React from "react";
import { useRecoilState } from "recoil";
import { todoTitleFormState } from "../atoms/TodoTitleFormAtom";

export const TitleForm: React.VFC = () => {
  // Atomの値を取得、更新するためにはuseRecoilState()にAtomを引数として渡す
  // [取得した値、セッター関数] = useRecoilState(atomKey)
  const [todoTitleFormText, setTodoTitleFormText] =
    useRecoilState<string>(todoTitleFormState);

  return (
    <label>
      タスクタイトル：
      <input
        type="text"
        value={todoTitleFormText}
        onChange={(e) => setTodoTitleFormText(e.target.value)}
        name="title"
        style={{ margin: 12 }}
      />
    </label>
  );
};
