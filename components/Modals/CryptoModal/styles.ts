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
        height: 100px;
        flex-wrap: wrap;

        input {
          background: transparent;
          border: 0;
          text-align: right;
          flex: 0 0 55%;
          width: 55%;
          color: ${({ theme }) => theme.colors.offWhite};

          &:focus {
            outline: 0;
          }

          &:-internal-autofill-selected {
            background: transparent !important;
          }
        }
        label {
          flex: 0 0 40%;
          text-align: left;
          font-size: 1.75em;
          margin-left: .3em;
          color: ${({ theme }) => theme.colors.blue};

          &.not-selected {
            opacity: .5;
          }
          .selected {
            opacity: 1;
          }
        }

        .error {
          flex: 1 1 100%;
          height: 30px;

          span {
            color: ${({ theme }) => theme.colors.error};
            font-size: .65em;
          }
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

      & > .errors {
        margin-top: .2em;
        height: 1.5em;
        display: flex;
        align-items: center;
        padding: .5em;
        justify-content: center;

        span {
          color: ${({ theme }) => theme.colors.error};
          font-size: .9em;
          font-weight: bold;
          font-family: inherit;
        }
      }

      // Submit Button Section
      & > .button {
        margin: .4em 0 0;
        display: flex;

        button {
          width: 100%;
          padding: .5em;
          font-family: inherit;
          font-size: 1.25em;
          transition: 200ms ease all;
          border: 0;
          border-radius: .3em;
          font-weight: 300;
          cursor: pointer;
          background: ${({ theme }) => theme.colors.blue};
          color: ${({ theme }) => theme.colors.white};

          &:hover, &:focus {
            transform: scale(1.015)
          }
          &:active {
            transform: scale(.9975)
          }

          &:disabled {
            opacity: .5;
          }

          &.complete {
            background: ${({ theme }) => theme.colors.success};
              position: relative;

            span {
              position: absolute;
              display: inline-block;
              margin: 0 0 0 .5em;
              animation: wiggle 1500ms; // animation is at bottom of file
            }
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

  @keyframes wiggle {
    0% { transform: rotate(0deg); }
    80% { transform: rotate(0deg); }
    85% { transform: rotate(15deg); }
    95% { transform: rotate(-15deg); }
    100% { transform: rotate(0deg); }
  }

`;