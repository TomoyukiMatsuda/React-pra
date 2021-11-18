import { ArticleListActionTypes, ArticleListState } from "./types";
import { ActionTypes } from "../actionTypes";

// action creator  Actionを作成する関数 こいつの返り値をdispatchに渡すことでstoreのstateを更新する
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
