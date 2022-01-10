import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import * as color from './color';
import { CheckIcon as _CheckIcon, TrashIcon } from './icon';
export const Card = ({ text, onDragStart, onDragEnd, onDeleteClick }) => {
    // ドラッグ中かどうかのフラグ
    const [drag, setDrag] = useState(false);
    return (React.createElement(Container, { style: { opacity: drag ? 0.5 : undefined }, onDragStart: () => {
            onDragStart === null || onDragStart === void 0 ? void 0 : onDragStart();
            setDrag(true);
        }, onDragEnd: () => {
            onDragEnd === null || onDragEnd === void 0 ? void 0 : onDragEnd();
            setDrag(false);
        } },
        React.createElement(CheckIcon, null), text === null || text === void 0 ? void 0 :
        text.split(/(https?:\/\/\S+)/g).map((fragment, index) => index % 2 === 0 ? (React.createElement(Text, { key: index }, fragment)) : (React.createElement(Link, { key: index, href: fragment }, fragment))),
        React.createElement(DeleteButton, { onClick: () => onDeleteClick === null || onDeleteClick === void 0 ? void 0 : onDeleteClick() })));
};
const Container = styled.div.attrs({
    draggable: true,
}) `
  position: relative;
  border: solid 1px ${color.Silver};
  border-radius: 6px;
  box-shadow: 0 1px 3px hsla(0, 0%, 7%, 0.1);
  padding: 8px 32px;
  background-color: ${color.White};
  cursor: move;
`;
const CheckIcon = styled(_CheckIcon) `
  position: absolute;
  top: 12px;
  left: 8px;
  color: ${color.Green};
`;
const DeleteButton = styled.button.attrs({
    type: 'button',
    children: React.createElement(TrashIcon, null),
}) `
  position: absolute;
  top: 12px;
  right: 8px;
  font-size: 14px;
  color: ${color.Gray};

  :hover {
    color: ${color.Red};
  }
`;
const Text = styled.span `
  color: ${color.Black};
  font-size: 14px;
  line-height: 1.7;
  white-space: pre-wrap;
`;
const Link = styled.a.attrs({
    target: '_blank',
    rel: 'noopener noreferrer',
}) `
  color: ${color.Blue};
  font-size: 14px;
  line-height: 1.7;
  white-space: pre-wrap;
`;
export const DropArea = ({ disabled, onDrop, children, className, style }) => {
    const [isTarget, setIsTarget] = useState(false);
    const visible = !disabled && isTarget;
    const [dragOver, onDragOver] = useDragAutoLeave();
    return (React.createElement(DropAreaContainer, { style: style, className: className, onDragOver: e => {
            if (disabled)
                return;
            e.preventDefault();
            onDragOver(() => setIsTarget(false));
        }, onDragEnter: () => {
            if (disabled || dragOver.current)
                return;
            setIsTarget(true);
        }, onDrop: () => {
            if (disabled)
                return;
            setIsTarget(false);
            onDrop === null || onDrop === void 0 ? void 0 : onDrop();
        } },
        React.createElement(DropAreaIndicator, { style: {
                height: !visible ? 0 : undefined,
                borderWidth: !visible ? 0 : undefined,
            } }),
        children));
};
/**
 * dragOver イベントが継続中かどうかのフラグをrefとして返す
 * timeout 経過後に自動でフラグがfalseになる
 * @param timeout 自動でフラグをfalseにするまでの時間(ms)
 */
const useDragAutoLeave = (timeout = 100) => {
    const dragOverRef = useRef(false);
    const timer = useRef(0);
    return [
        dragOverRef,
        /**
         * @param onDragLeave フラグがfalseになる時に呼ぶコールバック
         */
        (onDragLeave) => {
            clearTimeout(timer.current);
            dragOverRef.current = true;
            // windowをつけないとtypeエラー
            timer.current = window.setTimeout(() => {
                dragOverRef.current = false;
                onDragLeave === null || onDragLeave === void 0 ? void 0 : onDragLeave();
            }, timeout); // timeoutでdebounce
        },
    ]; // as const でタプルの型推論を補強している
};
const DropAreaContainer = styled.div `
  > :not(:first-child) {
    margin-top: 8px;
  }
`;
const DropAreaIndicator = styled.div `
  height: 40px;
  border: dashed 3px ${color.Gray};
  border-radius: 6px;
  transition: all 50ms ease-out;
`;
