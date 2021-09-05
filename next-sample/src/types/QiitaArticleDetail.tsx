import { QiitaItemResponse } from "./QiitaItem";

export type QiitaArticleDetail = Pick<
  QiitaItemResponse,
  | "title"
  | "rendered_body"
  | "likes_count"
  | "tags"
  | "url"
  | "user"
  | "created_at"
>;
