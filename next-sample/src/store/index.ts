import { combineReducers, createStore } from "redux";
import { articleListReducer } from "./articleList/reducer";

const rootReducer = combineReducers({
  articleList: articleListReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
