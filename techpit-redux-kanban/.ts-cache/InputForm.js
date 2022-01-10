import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import * as color from './color';
import { Button, ConfirmButton } from './Button';
/**
 * テキストエリアの高さを内容に合わせて自動調節する
 * @param content テキストエリアの内容
 * @return ref
 */
const useAutoFitToContentHeight = (content) => {
    // ミュータブルな値を保持するオブジェクトrefを返す
    // Stateと違ってrefの保持する値が変わってもコンポーネントは再レンダリングされない
    // コンポーネントのHTML要素の実体を保持できる
    const ref = useRef(null);
    useEffect(() => {
        const element = ref.current;
        if (!element)
            return;
        const { borderTopWidth, borderBottomWidth } = getComputedStyle(element);
        element.style.height = 'auto'; // 一度 auto を設定しないと高さが縮まなくなる
        // height を計算してセット
        element.style.height = `calc(${borderTopWidth} + ${element.scrollHeight}px + ${borderBottomWidth})`;
        // フォームの値に変更があるたびに計算して設定する
    }, [content]);
    return ref;
};
export const InputForm = ({ value, onChange, onConfirm, onCancel, className }) => {
    const ref = useAutoFitToContentHeight(value);
    const disabled = !(value === null || value === void 0 ? void 0 : value.trim());
    const handleConfirm = () => {
        if (disabled)
            return;
        onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm();
    };
    return (React.createElement(Container, { className: className },
        React.createElement(Input, { ref: ref, autoFocus: true, placeholder: "\u5185\u5BB9\u3092\u5165\u529B", value: value, onChange: e => onChange === null || onChange === void 0 ? void 0 : onChange(e.currentTarget.value), onKeyDown: e => {
                if (!((e.metaKey || e.ctrlKey) && e.key === 'Enter'))
                    return;
                handleConfirm();
            } }),
        React.createElement(ButtonRow, null,
            React.createElement(AddButton, { disabled: disabled, onClick: handleConfirm }),
            React.createElement(CancelButton, { onClick: onCancel }))));
};
const Container = styled.div ``;
const Input = styled.textarea `
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
`;
const ButtonRow = styled.div `
  display: flex;

  > :not(:first-child) {
    margin-left: 8px;
  }
`;
const AddButton = styled(ConfirmButton).attrs({
    children: 'Add',
}) ``;
const CancelButton = styled(Button).attrs({
    children: 'Cancel',
}) ``;
