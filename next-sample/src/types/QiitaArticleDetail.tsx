import { QiitaItemResponse } from "./QiitaItem";

// todo ビジネスモデル的な感じで特段型定義する必要ないかも
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
