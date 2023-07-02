import { createRef, useCallback, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import useSWR from "swr";

export default function Index() {
  const { data: list } = useSWR<{ id: number }[]>(
    "https://jsonplaceholder.typicode.com/albums/1/photos",
    async (key) => {
      const res = await fetch(key);
      return res.json();
    }
  );

  return <Component list={list ?? []} />;
}

function Component({ list }: { list: { id: number }[] }) {
  // Mapped Types で型定義した RefObject を作成
  const listItemRefs = useRef<{
    [key in number]: HTMLLIElement;
  }>({});
  /** createReff アンチパターン */
  // const convertedList = list.map((item) => ({
  //   id: item.id,
  //   ref: createRef<HTMLLIElement>(),
  // }));
  console.log("listItemRefs", listItemRefs.current);

  /**
   * refCallbackFunction を持つ形に配列を整形
   * useMemo でメモ化しつつ、refCallbackFunction を配列要素の値として持たせることで
   * 関数の参照先が意図せず変更されることを防いでいる
   */
  const convertedList = useMemo(
    () =>
      list.map((v) => ({
        id: v.id,
        refCallbackFunction: (node: HTMLLIElement | null) => {
          if (node !== null && listItemRefs.current[v.id] === undefined) {
            // node が null でなく、かつ、ref が未登録の場合
            listItemRefs.current[v.id] = node;
          } else {
            // node が null の場合は、対象の node を管理する必要がなくなるため削除
            delete listItemRefs.current[v.id];
          }
        },
      })),
    [list]
  );

  // const ulRef = useRef<HTMLUListElement>(null);
  const handleClickHeaderItem = useCallback((id: number) => {
    /** 子要素参照アンチパターン */
    // const itemRef: HTMLLIElement | null | undefined =
    //   ulRef.current?.querySelector("#id" + id.toString());
    // itemRef?.scrollIntoView({
    //   behavior: "smooth",
    //   block: "center",
    // });
    // itemRef?.focus();

    // id から 対象の ref を取得
    const itemRef = listItemRefs.current[id];
    itemRef?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    itemRef?.focus();
  }, []);

  return (
    // <Div ref={refCallbackFn}>
    <Div ref={(node) => console.log("div ref callback node", node)}>
      {/* ヘッダー */}
      <Header>
        {list?.map((v) => (
          <Button key={v.id} onClick={() => handleClickHeaderItem(v.id)}>
            {v.id}
          </Button>
        ))}
      </Header>

      {/* リスト */}
      <Ul>
        {convertedList?.map((v) => (
          <Li
            key={v.id}
            id={"id" + v.id.toString()}
            ref={v.refCallbackFunction}
            tabIndex={0}
          >
            {v.id}
          </Li>
        ))}
      </Ul>
    </Div>
  );
}

const Div = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Button = styled.button`
  min-width: 96px;
  height: 48px;
  background: lightblue;
  border-radius: 24px;
  cursor: pointer;
`;
const Header = styled.header`
  display: flex;
  column-gap: 16px;
  overflow-x: auto;
  padding: 24px;
  border-bottom: lightgray 1px solid;
`;
const Ul = styled.ul`
  padding: 24px 0;
  flex: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;
  overflow-y: scroll;
  scroll-behavior: smooth;
`;
const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  min-height: 60px;
  width: 240px;
  background-color: lightgreen;

  :focus {
    outline: 2px solid blue;
  }
`;
