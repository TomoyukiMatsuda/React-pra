import React, { MutableRefObject, useEffect, useRef } from "react";
import { IQiitaItem } from "../../../IQiitaItem";
import { useIntersection } from "../../../hooks/useIntersection";

interface Props {
  fetchQiitaItems: (
    fetchedItemCount: number,
    currQiitaItems?: IQiitaItem[]
  ) => Promise<void>;
  qiitaItems?: IQiitaItem[];
}

// 検索結果（フェッチしたアイテム）を表示するコンポーネント
export const SearchResult: React.VFC<Props> = (props) => {
  // TODO: 初期値でnullを避けたい
  const bottomRef = useRef<HTMLDivElement>(null);
  // TODO: できれば型アサーション避けたい
  const isIntersecting = useIntersection(
    bottomRef as MutableRefObject<HTMLDivElement>
  );

  useEffect(() => {
    if (isIntersecting && props.qiitaItems?.length) {
      // Promiseを返す関数のため即時関数で実行する
      // (props.fetchQiitaItems)(10);
      props.fetchQiitaItems(10, props.qiitaItems);
    }
  }, [isIntersecting]);

  console.log("アイテム", props.qiitaItems);

  return (
    <>
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
      {/*TODO: 表示するべきタイミングを考える*/}
      <div ref={bottomRef} />
    </>
  );
};
