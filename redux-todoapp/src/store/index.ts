import { combineReducers, createStore } from "redux";
import { countReducer } from "./counter/reducer";

// Reducerを増やすときはここに追加していく
const rootReducer = combineReducers({
  counter: countReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

// デフォルトのReducerをセット
export const store = createStore(rootReducer);
