import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    width: 100vw;
    height: 100vw;
    background-color: #f8f8f8;
    font-family: Arial, Helvetica, Sans-serif;
  }
`;

export default GlobalStyle;
