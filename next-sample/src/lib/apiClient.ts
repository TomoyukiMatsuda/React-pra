import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://qiita.com",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
  // params: {
  //   per_page: "25", // 25件 の記事を取得するように設定
  // },
});
