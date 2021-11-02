import { reducerWithInitialState } from "typescript-fsa-reducers";

export interface State {
  inputValue: string;
  selectedValue: string;
  clickCount: number;
}

export const initialState: State = {
  inputValue: "",
  selectedValue: "",
  clickCount: 0,
};

export const Reducer = reducerWithInitialState(initialState);
