import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CounterState = {
  count: number;
  loading: boolean;
  error: boolean;
  errorMessage: string;
};

export const initialState: CounterState = {
  count: 0,
  loading: false,
  error: false,
  errorMessage: "",
};

// createSliceを作成する
export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState, // わかりやすいように省略せず記述
  reducers: {
    incrementCounter: (state, action: PayloadAction<number>) => ({
      ...state,
      count: state.count + action.payload,
    }),
    decrementCounter: (state, action: PayloadAction<number>) => ({
      ...state,
      count: state.count - action.payload,
    }),
  },
});
