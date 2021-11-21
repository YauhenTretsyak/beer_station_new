import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import backgroundImage from '../assets/main_background.jpg'

const GlobalStyle = createGlobalStyle `
  ${ normalize }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: url(${ backgroundImage });
    background-size: cover;
    background-position-x: center;
    font-family: "Yanone Kaffeesatz", sans-serif;
    font-size: 2.5rem;
  }

  p {
    color: #3d1a02;
    text-shadow: .1rem .1rem .1rem #55290a;
  }
`

export default GlobalStyle;