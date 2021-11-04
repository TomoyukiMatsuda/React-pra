import { combineReducers, createStore } from "redux";
import { countReducer } from "./counter/reducer";
import { todoReducer } from "./todo/reducer";

// Reducerを増やすときはここに追加していく
const rootReducer = combineReducers({
  counter: countReducer,
  todo: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

// デフォルトのReducerをセット
export const store = createStore(rootReducer);
