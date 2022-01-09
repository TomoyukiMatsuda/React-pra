import { Header as _Header } from './Header'
import styled from 'styled-components'
import React, { useState } from 'react'
import { Column } from './Column'
import produce from 'immer'

export const App: React.VFC = () => {
  const [filterValue, setFilterValue] = useState('')
  /**
   * 表示位置を調整する「ある id の Card を別の id の Card の手前に挿入する」と具体化すると、
   *  2 つの id を state columns の持ち主である App が管理する
   */
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
  // ドラッグ中の Card の id を state として保持
  const [draggingCardID, setDraggingCardID] = useState<string | undefined>(
    undefined,
  )
  // ドロップ処理関数、 引数toIDはドロップ先の Card の id
  const dropCardTo = (toID: string) => {
    // ドロップ中のID
    const fromID = draggingCardID
    if (!fromID) return
    setDraggingCardID(undefined) // ドラッグ中IDリセット
    if (fromID === toID) return // IDが一緒ならばリターン

    type Columns = typeof columns
    setColumns(
      produce((columns: Columns) => {
        // ドラッグ中のcardを取得
        const card = columns
          .flatMap(col => col.cards)
          .find(c => c.id === fromID)
        if (!card) return

        // 移動元のcolumn
        const fromColumn = columns.find(col =>
          col.cards.some(c => c.id === fromID),
        )
        if (!fromColumn) return
        // 移動元のcolumnから移動するcard以外をセット
        fromColumn.cards = fromColumn.cards.filter(c => c.id !== fromID)

        // 移動先のcolumn
        const toColumn = columns.find(
          // todo: toIDは 移動先columnのid or 移動先columnにあるcardのid てこと??
          col => col.id === toID || col.cards.some(card => card.id === toID),
        )
        if (!toColumn) return

        let index = toColumn.cards.findIndex(card => card.id === toID)
        if (index < 0) {
          index = toColumn.cards.length
        }
        // 取得したcardをその順番に挿入する
        toColumn.cards.splice(index, 0, card)
      }),
    )
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
              onCardDrop={entered => dropCardTo(entered ?? columnID)} // todo: columnのidが渡る可能性もあるの？
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
