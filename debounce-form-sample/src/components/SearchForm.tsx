import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

interface Props {
  setDebouncedValue: Dispatch<SetStateAction<string>>;
}

// 検索フォームコンポーネント（ここで debouncedValue を更新する）
export const SearchForm: React.VFC<Props> = (props) => {
  const [formText, setFormText] = useState<string>("");

  // formText の変更を検知して実行される Effect
  useEffect(() => {
    // 表示までのtimerをセット、１秒間フォームの入力動作が行われなければ
    // フォームの値で debouncedValue を更新する
    const timer = setTimeout(() => props.setDebouncedValue(formText), 1000);

    // 次の Effect が実行される直前に timer をキャンセル
    return () => clearTimeout(timer);
  }, [formText]);

  return (
    <>
      <label className="mt-12 mb-2 block text-gray-700 text-lg font-bold">
        Qiita 記事 検索キーワードを入力
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="例：React"
        value={formText}
        onChange={(e) => setFormText(e.target.value)}
      />
    </>
  );
};
