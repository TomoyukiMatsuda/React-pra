import { ArticleListActionTypes, ArticleListState } from "./types";
import { ActionTypes } from "../actionTypes";

export const addArticleListAction = (
  articleListState: ArticleListState
): ArticleListActionTypes => ({
  type: ActionTypes.addArticles,
  payload: {
    articleListState: articleListState,
  },
});
export const resetArticleListAction = (): ArticleListActionTypes => ({
  type: ActionTypes.resetArticles,
});
