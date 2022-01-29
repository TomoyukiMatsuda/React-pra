import type { NextPage } from 'next'
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <div>
      <Title>Styled-Componentsプロジェクトだよ</Title>
    </div>
  )
}

const Title = styled.div`
  margin-top: 16px;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
`
export default Home
