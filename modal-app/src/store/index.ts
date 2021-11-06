import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
