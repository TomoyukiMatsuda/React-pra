import React, { useState } from 'react'
import styled from 'styled-components'
import { PlusIcon } from './icon'
import * as color from './color'
import { Card, DropArea } from './Card'
import { InputForm } from './InputForm'

export const Column: React.VFC<{
  title?: string
  filterValue?: string
  cards: { id: string; text?: string }[]
  onCardDragStart?(id: string): void
  onCardDrop?(entered: string | null): void
  onCardDeleteClick?(id: string): void
  text?: string
  onTextChange?(value: string): void
  onTextConfirm?(): void
  onTextCancel?(): void
}> = ({
  title,
  filterValue: rawFilterValue,
  cards: rawCards,
  onCardDragStart,
  onCardDrop,
  onCardDeleteClick,
  text,
  onTextChange,
  onTextConfirm,
  onTextCancel,
}) => {
  const filterValue = rawFilterValue?.trim() // trim: 両端から空白を取り除く
  const keywords = filterValue?.toLocaleLowerCase().split(/\s+/g) ?? []
  const cards = rawCards.filter(({ text }) =>
    // フォームテキスト(keywords)に合致するかどうかを確認する
    keywords?.every(word => text?.toLowerCase().includes(word)),
  )
  const totalCount = rawCards.length
  const [isInputMode, setIsInputMode] = useState(false)
  const toggleInput = () => setIsInputMode(v => !v)
  const confirmInput = () => onTextConfirm?.()
  const cancelInput = () => {
    setIsInputMode(false)
    onTextCancel?.()
  }
  // ドラッグ中のIDを保持
  const [draggingCardID, setDraggingCardID] = useState<string | undefined>(
    undefined,
  )
  const handleCardDragStart = (id: string) => {
    setDraggingCardID(id)
    onCardDragStart?.(id)
  }

  return (
    <Container>
      <Header>
        <CountBadge>{totalCount}</CountBadge>
        <ColumnName>{title}</ColumnName>

        <AddButton onClick={toggleInput} />
      </Header>

      {isInputMode && (
        <Form
          value={text}
          onChange={onTextChange}
          onConfirm={confirmInput}
          onCancel={cancelInput}
        />
      )}

      {/*フィルタリング文字列が存在すれば、検索結果件数を表示*/}
      {filterValue && <ResultCount>{cards.length} Results</ResultCount>}

      <VerticalScroll>
        {cards.map(({ id, text }, index) => (
          <DropArea
            key={id}
            disabled={
              // ドラッグ要素の前後にはDropAreaを表示させない
              id === draggingCardID || cards[index - 1]?.id === draggingCardID
            }
            onDrop={() => onCardDrop?.(id)}
          >
            <Card
              text={text}
              onDragStart={() => handleCardDragStart(id)}
              onDragEnd={() => setDraggingCardID(undefined)}
              onDeleteClick={() => onCardDeleteClick?.(id)}
            />
          </DropArea>
        ))}
        <DropArea
          style={{ height: '100%' }}
          disabled={
            draggingCardID !== undefined &&
            cards[cards.length - 1]?.id === draggingCardID
          }
          onDrop={() => onCardDrop?.(null)}
        />
      </VerticalScroll>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 355px;
  height: 100%;
  border: solid 1px ${color.Silver};
  border-radius: 6px;
  background-color: ${color.LightSilver};

  > :not(:last-child) {
    flex-shrink: 0;
  }
`

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px;
`

const CountBadge = styled.div`
  margin-right: 8px;
  border-radius: 20px;
  padding: 2px 6px;
  color: ${color.Black};
  background-color: ${color.Silver};
  font-size: 12px;
  line-height: 1;
`

const ColumnName = styled.div`
  color: ${color.Black};
  font-size: 14px;
  font-weight: bold;
`

const AddButton = styled.button.attrs({
  type: 'button',
  children: <PlusIcon />,
})`
  margin-left: auto;
  color: ${color.Black};

  :hover {
    color: ${color.Blue};
  }
`

const Form = styled(InputForm)`
  padding: 8px;
`

const ResultCount = styled.div`
  color: ${color.Black};
  font-size: 12px;
  text-align: center;
`

const VerticalScroll = styled.div`
  height: 100%;
  padding: 8px;
  overflow-y: auto;
  flex: 1 1 auto;

  > :not(:first-child) {
    margin-top: 8px;
  }
`
