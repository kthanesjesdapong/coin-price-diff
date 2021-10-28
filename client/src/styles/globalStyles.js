import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

html {
    display: inline-block;
    background-color: #d5d7d4;
    height: 100vh;
}

`;

export default GlobalStyles;
