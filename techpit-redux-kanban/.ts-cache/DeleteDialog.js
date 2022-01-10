import React from 'react';
import styled from 'styled-components';
import { Button, DangerButton } from './Button';
import * as color from './color';
export const DeleteDialog = ({ onConfirm, onCancel, className }) => {
    return (React.createElement(Container, { className: className },
        React.createElement(Message, null, "\u524A\u9664\u3057\u3066\u3082\u826F\u3044\u3067\u3059\u304B\uFF1F"),
        React.createElement(ButtonRow, null,
            React.createElement(DeleteButton, { onClick: onConfirm }),
            React.createElement(CancelButton, { autoFocus: true, onClick: onCancel }))));
};
const Container = styled.div `
  min-width: 350px;
  box-shadow: 0 8px 12px hsla(0, 0%, 0%, 0.2);
  border: solid 1px ${color.Silver};
  border-radius: 4px;
  background-color: ${color.White};
`;
const Message = styled.div `
  min-height: 100px;
  padding: 16px;
  color: ${color.Black};
  font-size: 14px;
  line-height: 1.7;
`;
const ButtonRow = styled.div `
  display: flex;
  padding: 0 16px 16px;
  > :not(:first-child) {
    margin-left: 8px;
  }
`;
const DeleteButton = styled(DangerButton).attrs({
    children: 'Delete',
}) ``;
const CancelButton = styled(Button).attrs({
    children: 'Cancel',
}) ``;
