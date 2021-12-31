import { Header as _Header } from './Header'
import styled from 'styled-components'
import React from 'react'
import { Column } from './Column'

export const App: React.VFC = () => {
  return (
    <Container>
      <Header />

      <MainArea>
        <HorizontalScroll>
          <Column
            title="TODO"
            cards={[
              { id: 'a', text: 'コーディング' },
              { id: 'b', text: '泣ける日本史' },
              { id: 'c', text: 'メモ書き' },
            ]}
          />
          <Column
            title="Doing"
            cards={[
              { id: 'd', text: 'コメダにいく' },
              { id: 'e', text: 'パソコンを開く' },
            ]}
          />
          <Column title="Waiting" cards={[]} />
          <Column title="Done" cards={[{ id: 'f', text: 'コーヒーを飲む' }]} />
        </HorizontalScroll>
      </MainArea>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
`

const Header = styled(_Header)`
  flex-shrink: 0;
`

const MainArea = styled.div`
  height: 100%;
  padding: 16px 0;
  overflow-y: auto;
`

const HorizontalScroll = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow-x: auto;

  > * {
    margin-left: 16px;
    flex-shrink: 0;
  }

  ::after {
    display: block;
    flex: 0 0 16px;
    content: '';
  }
`
