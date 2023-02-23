import { reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  * {
    font-family: Avenir, 'Noto Sans JP', "Hiragino Sans", "游ゴシック Medium", YuGothic, "游ゴシック体", "ヒラギノ角ゴ Pro W3", Meiryo, メイリオ, "MS PGothic", arial, helvetica, sans-serif !important;
    box-sizing: border-box;
  }

  a {
    word-wrap: break-word;
    text-decoration: none;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: white;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  button {
    border: initial;
    background-color: initial;
    &:focus {
      outline: none;
    }
  }
  :focus {
    outline: none;
  }
`;

export default GlobalStyle;
