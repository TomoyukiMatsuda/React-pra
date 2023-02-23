import useSWRInfinite from "swr/infinite";
import styled from "styled-components";
import {
  Button,
  InputForm,
  List,
  Typography,
  useTheme,
} from "@another_works/react-landscape";
import { apiClient } from "@/src/lib/apiClient";
import { useCallback, useState } from "react";
import { Spacer } from "@/src/ui/components/spacer";

type QiitaItem = {
  id: string;
  title: string;
  likes_count: number;
};
const QiitaUrl = "https://qiita.com/api/v2/items";
// args key の値が入ってくる
const fetcher = async (args: [url: string, page: number, keyword: string]) => {
  const { data } = await apiClient.get<QiitaItem[]>(args[0], {
    params: {
      query: args[2],
      page: args[1] + 1,
      per_page: 10,
    },
  });

  return data;
};
export default function SwrInfinite() {
  const [keyword, setKeyword] = useState("");
  const getKey = useCallback(
    (page: number, previousPageData: QiitaItem[]) => {
      // 前回取得結果が0件であればフェッチしない
      // if (previousPageData.length === 0) return null;

      return [QiitaUrl, page, keyword];
    },
    [keyword]
  );

  const { data, error, isLoading, isValidating, setSize, size } =
    useSWRInfinite<QiitaItem[]>(getKey, fetcher);

  const loadMore = () => {
    setSize(size + 1);
  };

  const reset = () => setSize(1);

  const items = data?.flat();
  const [color] = useTheme();

  return (
    <Container>
      <Typography variant="h2" fontColor={color.core.content.primaryA}>
        SWR で無限スクロール
      </Typography>

      <Spacer height={24} />

      <InputForm
        variant="floating"
        type="item"
        titleLabel="キーワードで検索"
        placeholder="例: React"
        width="480px"
        inputElementProps={{
          onKeyPress: (e) => {
            if (e.key === "Enter") {
              setKeyword(e.currentTarget.value);
            }
          },
        }}
      />

      <ListContainer>
        {items?.map((v) => (
          <List
            key={v.id}
            title={v.title}
            subtitle={`LGTM: ${v.likes_count}`}
            size="middle"
            width="480px"
            selected={false}
            style={{
              border: `1px solid ${color.landscape.primaryA}`,
            }}
          />
        ))}
      </ListContainer>

      <div>
        <Button
          variant="primary"
          type="text"
          size="middle"
          text="もっと見る"
          width="240px"
          shape="fullRound"
          onClick={loadMore}
        />

        <Spacer height={16} />

        <Button
          variant="primary"
          type="text"
          size="middle"
          text="リセット"
          width="240px"
          shape="fullRound"
          onClick={reset}
        />
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-height: 100vh;
  width: 100vw;
  padding: 80px;
`;
const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
  width: 100%;
  padding: 16px 0;
`;
