import React, { FormEvent, useCallback, useEffect, useState } from "react";
import axios from "axios";

// todo 別ファイルに型定義
interface QiitaResponse {
  rendered_body: string;
  body: string;
  coediting: boolean;
  comments_count: number;
  created_at: string;
  group: {
    created_at: string;
    description: string;
    name: string;
    private: boolean;
    updated_at: string;
    url_name: string;
  };
  id: string;
  likes_count: number;
  private: boolean;
  reactions_count: number;
  tags: [
    {
      name: string;
      versions: [string];
    }
  ];
  title: string;
  updated_at: string;
  url: string;
  user: {
    description: string;
    facebook_id: string;
    followees_count: number;
    followers_count: number;
    github_login_name: string;
    id: string;
    items_count: number;
    linkedin_id: string;
    location: string;
    name: string;
    organization: string;
    permanent_id: number;
    profile_image_url: string;
    team_only: boolean;
    twitter_screen_name: string;
    website_url: string;
  };
  page_views_count: number;
  team_membership: {
    name: string;
  };
}

const apiClient = axios.create({
  baseURL: "https://qiita.com",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    per_page: "25",
  },
  // withCredentials: true, 全てのリクエストにクッキーを設定し送信するオプション設定
});

interface Article {
  id: string;
  title: string;
  lgtm: number;
  userName: string;
}

interface ErrorResponse {
  response: {
    data: {
      message: string;
      type: string;
    };
  };
}

const Home: React.VFC = () => {
  const [articles, setArticles] = useState<Array<Article>>([]);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [searchText, setSearchText] = useState<string>();
  const buttonColor = searchText
    ? "bg-blue-700 hover:bg-blue-500"
    : "bg-gray-300";

  const fetchArticles = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      // フォームのデフォルトの動作（リロード）を防ぐ
      e.preventDefault();
      setIsLoading(true);

      // await を付与することでこの処理が終わらない限り次の処理に進まないようになる
      // （async await がないと ローディング処理がうまく行かない）
      await apiClient
        .get<Array<QiitaResponse>>("/api/v2/items", {
          params: {
            query: searchText,
          },
        })
        .then((response) => {
          console.log(response);
          setIsEmpty(response.data.length === 0);
          setArticles(
            response.data.map<Article>((d) => {
              return {
                id: d.id,
                title: d.title,
                lgtm: d.likes_count,
                userName: d.user.name,
              };
            })
          );
        })
        .catch((error) => {
          setErrorMessage(error.response.data.message);
        });

      // ローディング終了
      setIsLoading(false);
      // 成功しても、失敗してもフォーム入力を空にする
      setSearchText("");
    },
    [searchText, setArticles]
  );

  // todo articlesリスト の中だけでやる
  if (errorMessage) {
    return <p>エラー</p>;
  }
  if (isLoading) {
    return <p>ローディング.......</p>;
  }
  if (isEmpty) {
    return <p>検索結果ないよ〜</p>;
  }

  return (
    <div className="max-w-5xl my-0 mx-auto">
      <div>
        <form className="px-8 pt-6" onSubmit={fetchArticles}>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Qiita 記事検索キーワードを入力
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="例：React"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className={`${buttonColor} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
            type="submit"
            disabled={!searchText}
          >
            検索
          </button>
        </form>
      </div>
      {articles?.map((article) => {
        return (
          <div
            className="my-5 px-8 bg-blue-100 rounded-lg shadow"
            key={article.id}
          >
            <p className="text-center font-bold  text-blue-800 mb-2">
              {article.title}
            </p>
            <p className="text-blue-700">LGTM 👍：{article.lgtm}</p>
            <p className="text-blue-700">ユーザー：{article.userName}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
