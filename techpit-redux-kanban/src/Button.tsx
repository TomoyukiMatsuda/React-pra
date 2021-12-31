import styled from 'styled-components'
import * as color from './color'

export const Button = styled.button.attrs({ type: 'button' })`
  width: 100%;
  border: solid 1px ${color.Silver};
  border-radius: 3px;
  padding: 6px 8px;
  background-color: ${color.LightSilver};
  background-image: linear-gradient(${color.White}, ${color.LightSilver});
  color: ${color.Black};
  font-size: 14px;
  text-align: center;

  :hover:not(:disabled) {
    border-color: ${color.Gray};
    background-position-y: -0.5em;
  }
  :disabled {
    opacity: 0.5;
    cursor: default;
  }
`

export const ConfirmButton = styled(Button)`
  border-color: ${color.Blue};
  background-color: ${color.Navy};
  background-image: linear-gradient(${color.Blue}, ${color.Navy});
  color: ${color.White};

  :hover:not(:disabled) {
    border-color: ${color.Navy};
  }
`

export const DangerButton = styled(Button)`
  border-color: ${color.Red};
  background-color: ${color.Maroon};
  background-image: linear-gradient(${color.Red}, ${color.Maroon});
  color: ${color.White};

  :hover:not(:disabled) {
    border-color: ${color.Maroon};
  }
`
