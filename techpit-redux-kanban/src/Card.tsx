import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import * as color from './color'
import { CheckIcon as _CheckIcon, TrashIcon } from './icon'

// Card.DropArea = DropArea

export const Card: React.VFC<{ text?: string }> = ({ text }) => {
  // ドラッグ中かどうかのフラグ
  const [drag, setDrag] = useState(false)

  return (
    <Container>
      <CheckIcon />

      {text?.split(/(https?:\/\/\S+)/g).map((fragment, index) =>
        index % 2 === 0 ? (
          <Text key={index}>{fragment}</Text>
        ) : (
          <Link key={index} href={fragment}>
            {fragment}
          </Link>
        ),
      )}

      <DeleteButton />
    </Container>
  )
}

const Container = styled.div.attrs({
  draggable: true,
})`
  position: relative;
  border: solid 1px ${color.Silver};
  border-radius: 6px;
  box-shadow: 0 1px 3px hsla(0, 0%, 7%, 0.1);
  padding: 8px 32px;
  background-color: ${color.White};
  cursor: move;
`

const CheckIcon = styled(_CheckIcon)`
  position: absolute;
  top: 12px;
  left: 8px;
  color: ${color.Green};
`

const DeleteButton = styled.button.attrs({
  type: 'button',
  children: <TrashIcon />,
})`
  position: absolute;
  top: 12px;
  right: 8px;
  font-size: 14px;
  color: ${color.Gray};

  :hover {
    color: ${color.Red};
  }
`

const Text = styled.span`
  color: ${color.Black};
  font-size: 14px;
  line-height: 1.7;
  white-space: pre-wrap;
`

const Link = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  color: ${color.Blue};
  font-size: 14px;
  line-height: 1.7;
  white-space: pre-wrap;
`

const DropArea: React.VFC<{
  disabled?: boolean
  onDrop?(): void
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}> = ({ disabled, onDrop, children, className, style }) => {
  const [isTarget, setIsTarget] = useState(false)
  const visible = !disabled && isTarget
  const [dragOver, onDragOver] = useDragAutoLeave()

  return (
    <DropAreaContainer
      style={style}
      className={className}
      onDragOver={e => {
        if (disabled) return
        e.preventDefault()
        onDragOver(() => setIsTarget(false))
      }}
      onDragEnter={() => {
        if (disabled || dragOver.current) return
        setIsTarget(true)
      }}
      onDrop={() => {
        if (disabled) return
        setIsTarget(false)
        onDrop?.()
      }}
    >
      <DropAreaIndicator
        style={{
          height: !visible ? 0 : undefined,
          borderWidth: !visible ? 0 : undefined,
        }}
      />
      {children}
    </DropAreaContainer>
  )
}

/**
 * dragOver イベントが継続中かどうかのフラグをrefとして返す
 * timeout 経過後に自動でフラグがfalseになる
 * @param timeout 自動でフラグをfalseにするまでの時間(ms)
 */
const useDragAutoLeave = (timeout: number = 100) => {
  const dragOverRef = useRef(false)
  const timer = useRef(0)

  return [
    dragOverRef,
    /**
     * @param onDragLeave フラグがfalseになる時に呼ぶコールバック
     */
    (onDragLeave?: () => void) => {
      clearTimeout(timer.current)

      dragOverRef.current = true
      // windowをつけないとtypeエラー
      timer.current = window.setTimeout(() => {
        dragOverRef.current = false
        onDragLeave?.()
      }, timeout)
    },
  ] as const // as const でタプルの型推論を補強している
}

const DropAreaContainer = styled.div`
  > :not(:first-child) {
    margin-top: 8px;
  }
`

const DropAreaIndicator = styled.div`
  height: 40px;
  border: dashed 3px ${color.Gray};
  border-radius: 6px;
  transition: all 50ms ease-out;
`
