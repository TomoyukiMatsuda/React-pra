import { ArticleListActionTypes, ArticleListState } from "./types";

const initialState: ArticleListState[] = [];

export const articleListReducer = (
  state = initialState,
  action: ArticleListActionTypes
): ArticleListState[] => {
  switch (action.type) {
    case "ADD_ARTICLES":
      return [...state, action.payload];
    case "RESET_ARTICLES":
      return [];
    default:
      return state;
  }
};
