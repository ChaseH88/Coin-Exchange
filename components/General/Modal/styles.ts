import styled from 'styled-components';

export const ModalStyles = styled.div<{ animation: any }>`
  .background {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: #00000040;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;

    .container {

      max-width: 80vw;
      background: #fff;

      & > div {
        padding: 1.5em;

        &.content {
          max-height: 65vh;
          overflow-x: hidden;
          overflow-y: scroll;
        }

        &.title {
          border-bottom: 1px solid;
        }
        &.buttons {
          border-top: 1px solid;
          text-align: center;

          button {
            background-color: #40729B;
            border: 2px solid transparent;
            font-family: inherit;
            color: #fff;
            font-size: 1.1em;
            padding: .25em 1.5em;
            cursor: pointer;
            transition: 200ms all ease;

            &:hover, &:focus {
              color: #40729B !important;
              background-color: #fff;
              border-color: #40729B;
              font-family: inherit;
              color: #fff;
            }
          }
        }
      }
    }
  }
`;
