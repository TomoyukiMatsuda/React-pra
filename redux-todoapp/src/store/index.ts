import { combineReducers, createStore } from "redux";
import { countReducer } from "./counter/reducer";
import { todoReducer } from "./todo/reducer";
import { modalReducer } from "./modal/reducer";

// Reducerを増やすときはここに追加していく
const rootReducer = combineReducers({
  counter: countReducer,
  todo: todoReducer,
  modal: modalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

// デフォルトのReducerをセット
export const store = createStore(rootReducer);
