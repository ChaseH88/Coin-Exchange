import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: ${({ theme }) => theme.fonts.base};
    color: ${({ theme }) => theme.colors.offWhite};
    font-family: ${({ theme }) => theme.fonts.font1};
  }

`;