import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    appearance: none;
    border: none;
    box-shadow: none;
    font-size: 1rem;
    font-family: 'Open Sans', sans-serif;
  }
`;