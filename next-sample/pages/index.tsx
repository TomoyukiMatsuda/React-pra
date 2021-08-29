import React, { useEffect, useState } from "react";
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
    per_page: "10",
  },
  // withCredentials: true, 全てのリクエストにクッキーを設定し送信するオプション設定
});

interface Article {
  id: string;
  title: string;
  lgtm: number;
  userName: string;
}

const Home: React.VFC = () => {
  // todo エラーハンドリング ローディングハンドリング
  const [data, setData] = useState<Array<Article>>([]);

  useEffect(() => {
    apiClient
      .get<Array<QiitaResponse>>("/api/v2/items", {
        params: {
          per_page: "12",
        },
      })
      .then((response) => {
        console.log(response);
        setData(
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
        console.log(error);
      });
  }, []);

  return (
    <div>
      {data?.map((article) => {
        return (
          <div key={article.id}>
            <p>タイトル：{article.title}</p>
            <p>LGTM：{article.lgtm}</p>
            <p>ユーザー名：{article.userName}</p>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
