import { ArticleListActionTypes, ArticleListState } from "./types";

const initialState: ArticleListState[] = [];

export const articleListReducer = (
  state = initialState,
  action: ArticleListActionTypes
): ArticleListState[] => {
  switch (action.type) {
    case "ADD_ARTICLES":
      // TODO: すでに検索すみワードであれば return state（重複セットを防ぐ）
      // action.payload.articleListState.searchWord
      return [...state, action.payload.articleListState];
    case "RESET_ARTICLES":
      return [];
    default:
      return state;
  }
};
