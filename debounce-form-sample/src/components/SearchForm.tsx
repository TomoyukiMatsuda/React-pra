import React, {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface Props {
  // fetchArticles: (
  //   e: FormEvent<HTMLFormElement>,
  //   formText: string,
  //   setFormText: Dispatch<SetStateAction<string>>
  // ) => void;
  setDebouncedValue: Dispatch<SetStateAction<string>>;
  isLoading: boolean;
}

// Qiita記事検索フォームコンポーネント
export const SearchForm: React.VFC<Props> = (props) => {
  const [formText, setFormText] = useState<string>("");
  const buttonColor =
    formText && !props.isLoading
      ? "bg-blue-500 hover:bg-blue-400"
      : "bg-gray-300";

  useEffect(() => {
    // 表示までのtimerをセット
    const timer = setTimeout(() => {
      props.setDebouncedValue(formText);
    }, 1000);

    // 次の Effect が実行される直前に timer をキャンセル
    return () => clearTimeout(timer);
  }, [formText]);

  return (
    <form
      className="mt-12 mb-6"
      // onSubmit={(e) => props.fetchArticles(e, formText, setFormText)}
    >
      <label className="block text-gray-700 text-lg font-bold mb-2">
        Qiita 記事 検索キーワードを入力
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="例：React"
        value={formText}
        disabled={props.isLoading}
        onChange={(e) => setFormText(e.target.value)}
      />
    </form>
  );
};
