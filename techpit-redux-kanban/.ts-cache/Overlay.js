import React from 'react';
import styled from 'styled-components';
export const Overlay = ({ onClick, className, children }) => {
    return (React.createElement(Container, { id: "\u30E2\u30FC\u30C0\u30EB\u80CC\u666F", className: className, onClick: e => {
            // e.target: イベント発火した要素（実際にクリックした要素）
            // e.currentTarget: イベントハンドラーを実行する要素（つまり<Container>）
            if (e.target !== e.currentTarget)
                return; // モーダル背景以外(子要素など）// をクリックした場合には return
            onClick === null || onClick === void 0 ? void 0 : onClick();
        } }, children));
};
const Container = styled.div `
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: hsla(0, 0%, 8%, 0.4);
`;
