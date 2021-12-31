import React from 'react'
import styled from 'styled-components'
import * as color from './color'
import { CheckIcon as _CheckIcon, TrashIcon } from './icon'

export const Card: React.VFC<{ text?: string }> = ({ text }) => {
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
