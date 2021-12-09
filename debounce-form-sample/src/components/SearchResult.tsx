import React from "react";
import { IQiitaItem } from "../IQiitaItem";

interface Props {
  qiitaItems: IQiitaItem[] | null;
}

// 検索結果（フェッチしたアイテム）を表示するコンポーネント
export const SearchResult: React.VFC<Props> = (props) => {
  return (
    <div>
      {props.qiitaItems?.map((item) => {
        return (
          <div
            key={item.id}
            className="mb-3 py-2 px-8 bg-blue-100 rounded-lg shadow"
          >
            <p className="text-center font-bold  text-blue-800 mb-4 border-b-2 border-blue-800">
              {item.title}
            </p>
            <p className="text-blue-700">LGTM 👍：{item.likes_count}</p>
            <p className="text-blue-700">ユーザー：{item.user.name}</p>
          </div>
        );
      })}
    </div>
  );
};
