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

  // General
  button {
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
      opacity: .5;
    }
  }

  // Modal
  .ReactModal__Overlay {
    background: rgba(0,0,0,0.4) !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;

    .ReactModal__Content {
      position: relative !important;
      border: 1px solid rgb(204, 204, 204) !important;
      border-radius: .15em !important;

      &.light {
        background: ${({ theme }) => theme.colors.white} !important;
        color: ${({ theme }) => theme.colors.black} !important;
      }
      &.dark {
        background: ${({ theme }) => theme.colors.darkBlackGreen} !important;
        color: ${({ theme }) => theme.colors.white} !important;
      }
    }
  }

`;