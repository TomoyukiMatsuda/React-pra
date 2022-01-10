import React from 'react';
import styled from 'styled-components';
import * as color from './color';
import { SearchIcon as _SearchIcon } from './icon';
export const CardFilter = ({ value, onChange }) => {
    return (React.createElement(Container, null,
        React.createElement(SearchIcon, null),
        React.createElement(Input, { placeholder: "Filter cards", value: value, onChange: e => onChange === null || onChange === void 0 ? void 0 : onChange(e.currentTarget.value) })));
};
const Container = styled.label `
  display: flex;
  align-items: center;
  min-width: 300px;
  border: solid 1px ${color.Silver};
  border-radius: 3px;
`;
const SearchIcon = styled(_SearchIcon) `
  margin: 0 4px 0 8px;
  font-size: 16px;
  color: ${color.Silver};
`;
const Input = styled.input.attrs({ type: 'search' }) `
  width: 100%;
  padding: 6px 8px 6px 0;
  color: ${color.White};
  font-size: 14px;

  :focus {
    outline: none;
  }
`;
