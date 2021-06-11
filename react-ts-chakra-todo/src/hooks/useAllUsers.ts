import { useMessage } from "./useMessage";
import { useCallback, useState } from "react";
import axios from "axios";
import { User } from "../types/api/user";

export const useAllUsers = () => {
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<Array<User>>([]);

  const getUsers = useCallback(() => {
    setLoading(true);

    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (res.data) {
          setUsers(res.data);
          showMessage({ title: "ユーザーを取得しました", status: "success" });
        } else {
          showMessage({ title: "ユーザーがいません", status: "warning" });
        }
      })
      .catch(() =>
        showMessage({ title: "ユーザーの取得に失敗しました", status: "error" })
      )
      .finally(() => setLoading(false));
  }, [showMessage]);

  return { getUsers, users, loading };
};
