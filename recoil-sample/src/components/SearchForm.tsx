import React from "react";
import { useRecoilState } from "recoil";
import { searchTextFormState } from "../SearchTextFormAtom";

// 検索テキストを入力するフォームコンポーネント
export const SearchForm: React.VFC = () => {
  // Atom の値を取得、更新するためにuseRecoilState(AtomKey)という形
  // Atom の[最新の値、更新関数]
  const [searchFormText, setSearchFormText] =
    useRecoilState(searchTextFormState);

  return (
    <label>
      検索ワードを入力：
      <input
        type="text"
        value={searchFormText}
        onChange={(e) => setSearchFormText(e.target.value)}
        name="title"
        style={{ margin: 12 }}
      />
    </label>
  );
};
