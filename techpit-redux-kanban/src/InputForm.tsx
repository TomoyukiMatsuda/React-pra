import React from 'react'
import styled from 'styled-components'
import * as color from './color'
import { Button, ConfirmButton } from './Button'

export const InputForm: React.VFC<{
  value?: string
  onChange?(value: string): void
  onConfirm?(): void
  onCancel?(): void
  className?: string
}> = ({ value, onChange, onConfirm, onCancel, className }) => {
  const disabled = !value?.trim()
  const handleConfirm = () => {
    if (disabled) return
    onConfirm?.()
  }

  return (
    <Container className={className}>
      <Input
        autoFocus
        placeholder="内容を入力"
        value={value}
        onChange={e => onChange?.(e.currentTarget.value)}
        onKeyDown={e => {
          if (!((e.metaKey || e.ctrlKey) && e.key === 'Enter')) return
          handleConfirm()
        }}
      />

      <ButtonRow>
        <AddButton disabled={disabled} onClick={handleConfirm} />
        <CancelButton onClick={onCancel} />
      </ButtonRow>
    </Container>
  )
}

const Container = styled.div``

const Input = styled.textarea`
  display: block;
  width: 100%;
  margin-bottom: 8px;
  border: solid 1px ${color.Silver};
  border-radius: 3px;
  padding: 6px 8px;
  background-color: ${color.White};
  font-size: 14px;
  line-height: 1.7;

  :focus {
    outline: none;
    border-color: ${color.Blue};
  }
`

const ButtonRow = styled.div`
  display: flex;

  > :not(:first-child) {
    margin-left: 8px;
  }
`

const AddButton = styled(ConfirmButton).attrs({
  children: 'Add',
})``

const CancelButton = styled(Button).attrs({
  children: 'Cancel',
})``
