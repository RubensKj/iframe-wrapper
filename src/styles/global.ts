import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font: 16px 'Inter', sans-serif;
    background-color: #FFF;
    color: #333;
    -webkit-font-smoothing: antialiased !important;
  }

  button, input {
    font: 16px 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased !important;
  }

`;