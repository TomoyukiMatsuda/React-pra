import { ArticleListActionTypes } from "./types";
import { ActionTypes } from "../actionTypes";

export const addArticleListAction = (): ArticleListActionTypes => ({
  type: ActionTypes.addArticles,
});
export const resetArticleListAction = (): ArticleListActionTypes => ({
  type: ActionTypes.resetArticles,
});
