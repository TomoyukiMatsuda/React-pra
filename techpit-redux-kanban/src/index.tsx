import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Container = styled.div``
const Header = styled.div``
const Logo = styled.div``
const CardFilter = styled.input``
const MainArea = styled.div``
const Column = styled.div``
const ColumnHeader = styled.div``
const Card = styled.div``

function App() {
  return (
    <Container>
      <Header>
        <Logo>Kanban ボード</Logo>

        <CardFilter placeholder="検索キーワード" />
      </Header>

      <MainArea>
        <Column>
          <ColumnHeader>TODO</ColumnHeader>

          <Card>techpitをやる</Card>
          <Card>泣ける日本史を読む</Card>
          <Card>シェルスクリプトワンライナーをやる</Card>
        </Column>

        <Column>
          <ColumnHeader>Doing</ColumnHeader>
          <Card>コーディング</Card>
          <Card>読書をする</Card>
        </Column>

        <Column>
          <ColumnHeader>Waiting</ColumnHeader>
        </Column>

        <Column>
          <ColumnHeader>Done</ColumnHeader>

          <Card>スタバにいく</Card>
        </Column>
      </MainArea>
    </Container>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
