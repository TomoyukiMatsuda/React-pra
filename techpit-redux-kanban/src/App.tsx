import { Header as _Header } from './Header'
import styled from 'styled-components'
import React, { useState } from 'react'
import { Column } from './Column'

export const App: React.VFC = () => {
  const [filterValue, setFilterValue] = useState('')
  const [columns, setColumns] = useState([
    {
      id: 'A',
      title: 'TODO',
      cards: [
        { id: 'a', text: '朝食をとる🍞' },
        { id: 'b', text: 'SNSをチェックする🐦' },
        { id: 'c', text: '布団に入る (:3[___]' },
      ],
    },
    {
      id: 'B',
      title: 'Doing',
      cards: [
        { id: 'd', text: '顔を洗う👐' },
        { id: 'e', text: '歯を磨く🦷' },
      ],
    },
    {
      id: 'C',
      title: 'Waiting',
      cards: [],
    },
    {
      id: 'D',
      title: 'Done',
      cards: [{ id: 'f', text: '布団から出る (:3っ)っ -=三[＿＿]' }],
    },
  ])
  // App で保持するドラッグ中のID
  const [draggingCardID, setDraggingCardID] = useState<string | undefined>(
    undefined,
  )
  // ドロップ処理関数
  const dropCardTo = (toID: string) => {
    // ドロップ中のID
    const fromID = draggingCardID
    if (!fromID) return
    setDraggingCardID(undefined) // ドラッグ中IDリセット

    if (fromID === toID) return // IDが一緒ならばリターン

    setColumns(prevColumns => {
      // ドラッグ中のcard
      const card = columns.flatMap(col => col.cards).find(c => c.id === fromID)
      if (!card) {
        // fromIDと同じcardが存在しなければ、既存のstateをセット
        return prevColumns
      }

      return prevColumns.map(column => {
        let newColumn = column

        if (newColumn.cards.some(col => col.id === fromID)) {
          // columnにfromIDと同じidのcardが存在すれば
          newColumn = {
            ...newColumn,
            cards: newColumn.cards.filter(c => c.id !== fromID), // cardsの値をフィルタリングしてセット
          }
        }

        if (newColumn.id === toID) {
          // 列の末尾に移動の場合 最後にセット
          newColumn = {
            ...newColumn,
            cards: [...newColumn.cards, card],
          }
        } else if (newColumn.cards.some(c => c.id === toID)) {
          // 列の末尾以外に移動の場合、手前の位置にセット
          newColumn = {
            ...newColumn,
            cards: newColumn.cards.flatMap(c =>
              c.id === toID ? [card, c] : [c],
            ),
          }
        }

        return newColumn
      })
    })
  }

  return (
    <Container>
      <Header filterValue={filterValue} onFilterChange={setFilterValue} />

      <MainArea>
        <HorizontalScroll>
          {columns.map(({ id: columnID, title, cards }) => (
            <Column
              key={columnID}
              title={title}
              filterValue={filterValue}
              cards={cards}
              onCardDragStart={cardID => setDraggingCardID(cardID)}
              onCardDrop={entered => dropCardTo(entered ?? columnID)}
            />
          ))}
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
