import { useCallback, useRef, useState } from "react";
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

  return <PageComponent list={list ?? []} />;
}

function PageComponent({ list }: { list: { id: number }[] }) {
  // Mapped Types で型定義した RefObject を作成
  const listItemRefs = useRef<{
    [key in number]: HTMLLIElement;
  }>({});

  const refCallback = useCallback((id: number, node: HTMLLIElement | null) => {
    if (node !== null && listItemRefs.current[id] === undefined) {
      // node が null でなく、かつ、ref が未登録の場合
      listItemRefs.current[id] = node;
    } else {
      // node が null の場合は、対象の node を管理する必要がなくなるため削除
      delete listItemRefs.current[id];
    }
  }, []);

  console.log("listItemRefs", listItemRefs.current);

  const handleClickItem = useCallback((id: number) => {
    // id から 対象の ref を取得
    const itemRef = listItemRefs.current[id];
    itemRef?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    itemRef?.focus();
  }, []);

  const [hideItemIds, setHideItemIds] = useState<number[]>([]);

  const refCallbackFn = useCallback(
    (node: HTMLDivElement | null) => console.log("div ref callback node", node),
    []
  );
  return (
    <Div ref={refCallbackFn}>
      {/*<Div ref={(node) => console.log("div ref callback node", node)}>*/}
      {/* ヘッダー */}
      <Header>
        {list?.map((v) => (
          <Button key={v.id} onClick={() => handleClickItem(v.id)}>
            {v.id}
          </Button>
        ))}
      </Header>

      {/* リスト */}
      <Ul>
        {list?.map((v) =>
          hideItemIds.includes(v.id) ? null : (
            <Li
              key={v.id}
              ref={(node: HTMLLIElement | null) => refCallback(v.id, node)}
              tabIndex={0}
              onClick={() => setHideItemIds((prev) => [...prev, v.id])}
            >
              {v.id}
            </Li>
          )
        )}
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
