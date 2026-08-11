import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    scrollbar-width: none;
    -ms-overflow-style: none;

  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    overflow-x: hidden;
    scrollbar-width: none;
    -ms-overflow-style: none;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;

  }
  body::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

`;

export default GlobalStyles;