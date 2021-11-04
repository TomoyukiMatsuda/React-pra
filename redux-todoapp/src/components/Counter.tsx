import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { Count } from "../store/counter/types";
import {
  decrementAction,
  incrementAction,
  resetAction,
} from "../store/counter/actions";

export const Counter: React.VFC = () => {
  const dispatch = useDispatch();

  // actionを発行する関数
  // 引数にはaction creatorを渡す
  const handleIncrement = useCallback(() => dispatch(incrementAction()), []);
  const handleDecrement = useCallback(() => dispatch(decrementAction()), []);
  const handleReset = useCallback(() => dispatch(resetAction()), []);

  // storeからstateを取得する
  // rootReducer.counterにcountReducer
  // useSelector(利用するstateの値を返す関数)
  const currentCount: Count = useSelector((state: RootState) => state.counter);

  return (
    <>
      <div style={{ margin: 20 }}>{currentCount.value}</div>
      <button onClick={handleIncrement}>カウントアップ</button>
      <button style={{ marginLeft: 20 }} onClick={handleDecrement}>
        カウントダウン
      </button>
      <button style={{ marginLeft: 20 }} onClick={handleReset}>
        カウントリセット
      </button>
    </>
  );
};
