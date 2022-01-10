import React, { useState } from 'react';
import produce from 'immer';
import { Header as _Header } from './Header';
import styled from 'styled-components';
import { Column } from './Column';
import { DeleteDialog } from './DeleteDialog';
import { Overlay as _Overlay } from './Overlay';
import { createRandomID } from './util';
import { api } from './api';
export const App = () => {
    const [filterValue, setFilterValue] = useState('');
    /**
     * 表示位置を調整する「ある id の Card を別の id の Card の手前に挿入する」と具体化すると、
     *  2 つの id を state columns の持ち主である App が管理する
     *
     *  text: Add フォームの入力テキスト
     */
    const [columns, setColumns] = useState([]);
    // ドラッグ中の Card の id を state として保持
    const [draggingCardID, setDraggingCardID] = useState(undefined);
    const [deletingCardID, setDeletingCardID] = useState(undefined);
    // ドロップ処理関数、 引数toIDはドロップ先の Card の id
    const dropCardTo = (toID) => {
        // ドロップ中のID
        const fromID = draggingCardID;
        if (!fromID)
            return;
        setDraggingCardID(undefined); // ドラッグ中IDリセット
        if (fromID === toID)
            return; // IDが一緒ならばリターン
        setColumns(produce((columns) => {
            // ドラッグ中のcardを取得
            const card = columns
                .flatMap(col => { var _a; return (_a = col.cards) !== null && _a !== void 0 ? _a : []; })
                .find(c => c.id === fromID);
            if (!card)
                return;
            // 移動元のcolumn
            const fromColumn = columns.find(col => { var _a; return (_a = col.cards) === null || _a === void 0 ? void 0 : _a.some(c => c.id === fromID); });
            if (!(fromColumn === null || fromColumn === void 0 ? void 0 : fromColumn.cards))
                return;
            // 移動元のcolumnから移動するcard以外をセット
            fromColumn.cards = fromColumn.cards.filter(c => c.id !== fromID);
            // 移動先のcolumn
            const toColumn = columns === null || columns === void 0 ? void 0 : columns.find(
            // todo: toIDは 移動先columnのid or 移動先columnにあるcardのid てこと??
            col => { var _a; return col.id === toID || ((_a = col.cards) === null || _a === void 0 ? void 0 : _a.some(card => card.id === toID)); });
            if (!(toColumn === null || toColumn === void 0 ? void 0 : toColumn.cards))
                return;
            let index = toColumn.cards.findIndex(card => card.id === toID);
            if (index < 0) {
                index = toColumn.cards.length;
            }
            // 取得したcardをその順番に挿入する
            toColumn.cards.splice(index, 0, card);
        }));
    };
    const setText = (columnID, value) => {
        setColumns(produce((prevColumns) => {
            const column = prevColumns.find(col => col.id === columnID);
            if (!column)
                return;
            column.text = value;
        }));
    };
    const addCard = (columnID) => {
        /**
         * API 通信はネットワークやバックエンドサーバーの影響を受け結果が予想できないため、
         * setColumns の外で呼び出します。randomID() の呼び出しが外側にあるのも同じ理由です。
         */
        const cardID = createRandomID();
        // ローカルのstateを更新
        setColumns(
        // 冪等な関数にしたい
        produce((prevColumns) => {
            var _a;
            const column = prevColumns.find(col => col.id === columnID);
            if (!column)
                return;
            (_a = column.cards) === null || _a === void 0 ? void 0 : _a.unshift({
                id: cardID,
                text: column.text,
            });
            column.text = '';
        }));
        // api POST 用の column と text
        const column = columns.find(col => col.id === columnID);
        if (!column)
            return;
        const text = column.text;
        api('POST /v1/cards', {
            id: cardID,
            text: text,
        });
    };
    const deleteCard = () => {
        const cardID = deletingCardID;
        if (!cardID)
            return;
        setDeletingCardID(undefined);
        // delete対象card
        const targetCard = columns
            .flatMap(col => col.cards)
            .find(card => (card === null || card === void 0 ? void 0 : card.id) === cardID);
        if (!targetCard)
            return;
        setColumns(produce((prevColumns) => {
            var _a;
            // 削除対象のcolumnを取得
            const column = prevColumns.find(prevColumn => { var _a; return (_a = prevColumn.cards) === null || _a === void 0 ? void 0 : _a.some(card => card.id === cardID); });
            if (!column)
                return;
            // 削除対象を除いてセット
            column.cards = (_a = column.cards) === null || _a === void 0 ? void 0 : _a.filter(card => card.id !== cardID);
        }));
    };
    return (React.createElement(Container, null,
        React.createElement(Header, { filterValue: filterValue, onFilterChange: setFilterValue }),
        React.createElement(MainArea, null,
            React.createElement(HorizontalScroll, null, columns.map(({ id: columnID, title, cards, text }) => (React.createElement(Column, { key: columnID, title: title, filterValue: filterValue, cards: cards, onCardDragStart: cardID => setDraggingCardID(cardID), onCardDrop: entered => dropCardTo(entered !== null && entered !== void 0 ? entered : columnID), onCardDeleteClick: cardID => setDeletingCardID(cardID), text: text, onTextChange: value => setText(columnID, value), onTextConfirm: () => addCard(columnID) }))))),
        deletingCardID && (React.createElement(Overlay, { onClick: () => setDeletingCardID(undefined) },
            React.createElement(DeleteDialog, { onConfirm: deleteCard, onCancel: () => setDeletingCardID(undefined) })))));
};
const Container = styled.div `
  display: flex;
  flex-flow: column;
  height: 100%;
`;
const Header = styled(_Header) `
  flex-shrink: 0;
`;
const MainArea = styled.div `
  height: 100%;
  padding: 16px 0;
  overflow-y: auto;
`;
const HorizontalScroll = styled.div `
  display: flex;
  width: 100%;
  height: 100%;
  overflow-x: auto;

  > * {
    margin-left: 16px;
    flex-shrink: 0;
  }

  ::after {
    display: block;
    flex: 0 0 16px;
    content: '';
  }
`;
const Overlay = styled(_Overlay) `
  display: flex;
  justify-content: center;
  align-items: center;
`;
