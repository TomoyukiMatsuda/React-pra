import { combineReducers, createStore } from "redux";
import { modalReducer } from "./modal/reducer";

const rootReducer = combineReducers({
  modal: modalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
