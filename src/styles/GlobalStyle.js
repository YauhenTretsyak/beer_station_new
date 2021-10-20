import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle `
  ${ normalize }

  @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: "Inter", sans-serif;
    font-size: 1.8rem;
  }
`

export default GlobalStyle;