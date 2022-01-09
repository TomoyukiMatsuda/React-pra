import React, { useState } from 'react'
import produce from 'immer'
import { Header as _Header } from './Header'
import styled from 'styled-components'
import { Column } from './Column'
import { DeleteDialog } from './DeleteDialog'
import { Overlay as _Overlay } from './Overlay'
import { createRandomID } from './util'

export const App: React.VFC = () => {
  const [filterValue, setFilterValue] = useState('')
  /**
   * 表示位置を調整する「ある id の Card を別の id の Card の手前に挿入する」と具体化すると、
   *  2 つの id を state columns の持ち主である App が管理する
   *
   *  text: Add フォームの入力テキスト
   */
  const [columns, setColumns] = useState([
    {
      id: 'A',
      title: 'TODO',
      text: '',
      cards: [
        { id: 'a', text: '朝食をとる🍞' },
        { id: 'b', text: 'SNSをチェックする🐦' },
        { id: 'c', text: '布団に入る (:3[___]' },
      ],
    },
    {
      id: 'B',
      title: 'Doing',
      text: '',
      cards: [
        { id: 'd', text: '顔を洗う👐' },
        { id: 'e', text: '歯を磨く🦷' },
      ],
    },
    {
      id: 'C',
      title: 'Waiting',
      text: '',
      cards: [],
    },
    {
      id: 'D',
      title: 'Done',
      text: '',
      cards: [{ id: 'f', text: '布団から出る (:3っ)っ -=三[＿＿]' }],
    },
  ])
  // ドラッグ中の Card の id を state として保持
  const [draggingCardID, setDraggingCardID] = useState<string | undefined>(
    undefined,
  )
  const [deletingCardID, setDeletingCardID] = useState<string | undefined>(
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

  const setText = (columnID: string, value: string) => {
    type Columns = typeof columns
    setColumns(
      produce((prevColumns: Columns) => {
        const column = prevColumns.find(col => col.id === columnID)
        if (!column) return

        column.text = value
      }),
    )
  }

  const addCard = (columnID: string) => {
    const cardID = createRandomID()

    type Columns = typeof columns
    setColumns(
      produce((prevColumns: Columns) => {
        const column = prevColumns.find(col => col.id === columnID)
        if (!column) return

        column.cards.unshift({
          id: cardID,
          text: column.text,
        })
        column.text = ''
      }),
    )
  }

  const deleteCard = () => {
    const cardID = deletingCardID
    if (!cardID) return
    setDeletingCardID(undefined)

    // delete対象card
    const targetCard = columns
      .flatMap(col => col.cards)
      .find(card => card.id === cardID)
    if (!targetCard) return

    type Columns = typeof columns
    setColumns(
      produce((prevColumns: Columns) => {
        // 削除対象のcolumnを取得
        const column = prevColumns.find(prevColumn =>
          prevColumn.cards.some(card => card.id === cardID),
        )

        if (!column) return
        // 削除対象を除いてセット
        column.cards = column?.cards.filter(card => card.id !== cardID)
      }),
    )
  }

  return (
    <Container>
      <Header filterValue={filterValue} onFilterChange={setFilterValue} />

      <MainArea>
        <HorizontalScroll>
          {columns.map(({ id: columnID, title, cards, text }) => (
            <Column
              key={columnID}
              title={title}
              filterValue={filterValue}
              cards={cards}
              onCardDragStart={cardID => setDraggingCardID(cardID)}
              onCardDrop={entered => dropCardTo(entered ?? columnID)} // todo: columnのidが渡る可能性もあるの？
              onCardDeleteClick={cardID => setDeletingCardID(cardID)}
              text={text}
              onTextChange={value => setText(columnID, value)}
              onTextConfirm={() => addCard(columnID)}
            />
          ))}
        </HorizontalScroll>
      </MainArea>

      {deletingCardID && (
        <Overlay onClick={() => setDeletingCardID(undefined)}>
          <DeleteDialog
            onConfirm={deleteCard}
            onCancel={() => setDeletingCardID(undefined)}
          />
        </Overlay>
      )}
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

const Overlay = styled(_Overlay)`
  display: flex;
  justify-content: center;
  align-items: center;
`
