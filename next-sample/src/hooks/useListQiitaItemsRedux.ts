import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { apiClient } from "../lib/apiClient";
import { QiitaItem, QiitaItemResponse } from "../types/QiitaItem";
import { useDispatch } from "react-redux";
import { addArticleListAction } from "../store/articleList/actions";

export const useListQiitaItemsRedux = () => {
  const dispatch = useDispatch();
  const [searchWord, setSearchWord] = useState("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const fetchListArticles = async (
    e: FormEvent<HTMLFormElement>,
    formText: string,
    setFormText: Dispatch<SetStateAction<string>>
  ) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await apiClient.get<QiitaItemResponse[]>("/items", {
        params: {
          query: formText,
          per_page: 50,
        },
      });

      // reduxにセット
      dispatch(
        addArticleListAction({
          searchWord: formText,
          qiitaItems: response.data.map<QiitaItem>((item) => ({
            id: item.id,
            title: item.title,
            likes_count: item.likes_count,
            user: item.user,
          })),
        })
      );
      setSearchWord(response.config.params.query);
    } catch (error) {
      // todo このリントどうにかならない？
      // @ts-ignore
      setErrorMessage(error.response.data.message);
    }

    setLoading(false);
    setFormText("");
  };

  return { fetchListArticles, searchWord, errorMessage, loading };
};
