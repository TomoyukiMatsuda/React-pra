import React, { ReactNode } from 'react'
import styled from 'styled-components'

export const Overlay: React.VFC<{
  onClick?(): void
  className?: string
  children?: ReactNode
}> = ({ onClick, className, children }) => {
  return (
    <Container
      id="モーダル背景"
      className={className}
      onClick={e => {
        // e.target: イベント発火した要素（実際にクリックした要素）
        // e.currentTarget: イベントハンドラーを実行する要素（つまり<Container>）
        if (e.target !== e.currentTarget) return // モーダル背景以外(子要素など）// をクリックした場合には return
        onClick?.()
      }}
    >
      {children}
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: hsla(0, 0%, 8%, 0.4);
`
