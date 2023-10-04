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

  #__next{
    display: flex;
    flex-direction: column;
    height: 100%;
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

  *{
    box-sizing: border-box;
    &::-webkit-scrollbar {
      width: 7px;
    
    }
  
    &::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
  
    &::-webkit-scrollbar-thumb {
      background: #888;
    }
  
    &::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
`;

export default GlobalStyle;
