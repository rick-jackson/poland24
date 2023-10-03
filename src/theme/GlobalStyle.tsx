import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle<any>`
  html,
  body,
  #root {
    height: 100%;
    font-size: 14px;
    font-family: Rubik;
    color: #2D2D2D;

  }

  body {
    background: #F2F2F2;
  }

  button, input, optgroup, select, textarea {
    font-family: Rubik;
  }

  button {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: 0.1s;
  }

  h1, h2, h3, h4, h5, h6,p {
    margin: 0;
    padding: 0;
    font-weight: 500;
  }
`;

export default GlobalStyle;
