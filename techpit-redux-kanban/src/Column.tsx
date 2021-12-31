import React, { useState } from 'react'
import styled from 'styled-components'
import { PlusIcon } from './icon'
import * as color from './color'
import { Card } from './Card'
import { InputForm } from './InputForm'

export const Column: React.VFC<{
  title?: string
  cards: { id: string; text?: string }[]
}> = ({ title, cards }) => {
  const totalCount = cards.length
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

const VerticalScroll = styled.div`
  height: 100%;
  padding: 8px;
  overflow-y: auto;
  flex: 1 1 auto;

  > :not(:first-child) {
    margin-top: 8px;
  }
`
