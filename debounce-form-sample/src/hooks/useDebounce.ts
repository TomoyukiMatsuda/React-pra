import { useEffect, useState } from "react";

export const useDebounce = (value: string, delay: number): string => {
  const [debouncedValue, setDebouncedValue] = useState("");

  // valueの変更を検知して実行する Effect
  useEffect(() => {
    // 表示までのtimerをセット、delayで指定した時間フォームの入力動作が行われなければ
    // フォームの値で debouncedValue を更新する
    const timer = setTimeout(() => setDebouncedValue(value), delay);

    // 次の Effect が実行される直前に timer をキャンセル
    return () => clearTimeout(timer);
  }, [value]);

  return debouncedValue;
};
