import useSWR from "swr";
import styled from "styled-components";
import { List } from "@another_works/react-landscape";

export default function SwrInfinite() {
  return (
    <Container>
      <Item>
        <List
          title={"ああああ"}
          size={"middle"}
          width={"24px"}
          selected={false}
        />
      </Item>
    </Container>
  );
}

const Container = styled.div``;
const Item = styled.div`
  height: 240px;
  width: 600px;
`;
