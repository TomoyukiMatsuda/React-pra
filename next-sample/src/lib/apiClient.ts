import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://qiita.com",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    // デフォルトで 25件 の記事を取得するように設定
    per_page: "25",
  },
});
