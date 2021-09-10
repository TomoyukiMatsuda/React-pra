import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://qiita.com/api/v2",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});
