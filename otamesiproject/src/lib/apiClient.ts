import axios from "axios";

export const apiClient = axios.create({
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});
