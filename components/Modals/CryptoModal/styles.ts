import styled from 'styled-components';
import { darkenColor, lightenColor } from 'utilities/styles/helpers';

export const CryptoModalStyles = styled.div`

  display: block;
  width: 25em;
  height: 30em;

  .tabs {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5em;

    & > div {
      flex: 1 1 50%;

      button {
        width: 100%;
        height: 100%;
        padding: 1em;
        font-family: inherit;
        font-size: 1.25em;
        border: 0;
        background: ${({ theme }) => darkenColor(theme.colors.blackGreen, 0.05)};
        color: #fff;
        font-weight: bold;
        letter-spacing: .05em;
        cursor: pointer;
        transition: all .05s ease-in-out;
        border: 1px solid #fff;

        &.active {
          background: ${({ theme }) => theme.colors.darkBlackGreen};
          color: ${({ theme }) => theme.colors.blue};
        }

        &:hover, &:focus {
          color: ${({ theme }) => lightenColor(theme.colors.blue, 0.1)};
        }
      }

      &:first-child {
        button {
            &.active {
            border-top-color: transparent;
            border-left-color: transparent;
            border-bottom-color: transparent;
          }
        }
      }
      &:last-child {
        button {
          &.active {
            border-top-color: transparent;
            border-right-color: transparent;
            border-bottom-color: transparent;
          }
        }
      }
    }
  }

  // Send / Receive Styles
  .wrapper > .content {
    padding: 1em;
    display: flex;

    div.wrapper {
      width: 100%;

      // Details Section
      & > .details {
        text-align: center;
        display: flex;
        align-items: center;
        font-size: 1.5em; // control font size of both elements
        padding: 1em 0;
        height: 100px;

        input {
          background: transparent;
          border: 0;
          text-align: right;
          flex: 1 1 55%;
          width: 55%;
          color: ${({ theme }) => theme.colors.offWhite};

          &:focus {
            outline: 0;
          }
        }
        label {
          flex: 1 1 45%;
          text-align: left;
          font-size: 1.75em;
          margin-left: .3em;
          color: ${({ theme }) => theme.colors.blue};
        }
      }

      // Form Section
      & > .form {
        border: 1px solid;
        border-radius: .2em;

        .field {
          padding: 3px;
          align-items: center;
          display: flex;

          &:first-child {
            border-bottom: 1px solid;
          }

          label {
            flex: 0 0 75px;
            text-align: right;
            margin: 0 .5em 0 0
          }

          input, select {
            flex: 1 1 auto;
            width: auto;
            padding: .5em 0 .5em .75em;
            color: #fff;
            background-color: transparent;
            border: 0;
            font-family: inherit;
            font-size: 1em;
            &:focus {
              outline: 0;
            }
          }
        }
      }

      // Submit Button Section
      & > .button {
        margin: 1em 0 0;
        display: flex;

        button {
          width: 100%;
          padding: .5em;
          font-family: inherit;
          font-size: 1.25em;
          transition: 200ms ease opacity;

          &:disabled {
            opacity: .5;
          }
        }
      }

      & > .balance {
        display: flex;
        margin: .5em 0 0;
        padding: 0 .5em;
        justify-content: space-between;

        span {
          font-size: 1.1em;
          color: ${({ theme }) => lightenColor(theme.colors.lightBlackGreen, 0.2)};
        }
      }
    }
  }

`;