import React, { useState } from 'react'
import styled from 'styled-components'
import { PlusIcon } from './icon'
import * as color from './color'
import { Card } from './Card'
import { InputForm } from './InputForm'

export const Column: React.VFC<{
  title?: string
  filterValue?: string
  cards: { id: string; text?: string }[]
}> = ({ title, filterValue: rawFilterValue, cards: rawCards }) => {
  const filterValue = rawFilterValue?.trim() // trim: 両端から空白を取り除く
  const keywords = filterValue?.toLocaleLowerCase().split(/\s+/g) ?? []
  const cards = rawCards.filter(({ text }) =>
    // フォームテキスト(keywords)に合致するかどうかを確認する
    keywords?.every(word => text?.toLowerCase().includes(word)),
  )
  const totalCount = rawCards.length
  // フォームのテキストをフォームの親コンポーネントで保持することで、Formの表示非表示に左右されずにstateを保持できる（フォームが非表示になってもフォームには記述が残る）
  const [text, setText] = useState('')
  const [isInputMode, setIsInputMode] = useState(false)
  const toggleInput = () => setIsInputMode(v => !v)
  const confirmInput = () => setText('')
  const cancelInput = () => setIsInputMode(false)

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
          onChange={setText}
          onConfirm={confirmInput}
          onCancel={cancelInput}
        />
      )}

      {/*フィルタリング文字列が存在すれば、検索結果件数を表示*/}
      {filterValue && <ResultCount>{cards.length} Results</ResultCount>}

      <VerticalScroll>
        {cards.map(({ id, text }) => (
          <Card key={id} text={text} />
        ))}
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
