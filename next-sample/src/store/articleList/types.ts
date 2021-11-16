import { Action } from "redux";
import { ActionTypes } from "../actionTypes";
import { QiitaItem } from "../../types/QiitaItem";

export interface ArticleListState {
  searchWord: string;
  qiitaItems: QiitaItem[];
}

interface AddArticleList extends Action {
  type: typeof ActionTypes.addArticles;
  payload: { articleListState: ArticleListState };
}

interface ResetArticleList extends Action {
  type: typeof ActionTypes.resetArticles;
}

export type ArticleListActionTypes = AddArticleList | ResetArticleList;
